import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useInterval } from 'hooks/useInterval';
import { formatTime } from 'utils/formatTime';

const Value = styled.div`
  margin-top: 0.8em;
  font-weight: 300;
  text-transform: uppercase;
`;

const gradientTextBlPuMixin = css`
  background-clip: inherit;
  background: linear-gradient(hsl(205, 94%, 52%), hsl(259, 94%, 52%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

interface ITimeCharProps {
  active: boolean;
  measure: string; // "ms" | "s" | "m"
}

const TimeNum = styled.span<ITimeCharProps>`
  font-size: ${p => p.measure === 'ms' && '0.6em'};
  ${p => (p.active ? gradientTextBlPuMixin : 'color: hsla(209, 95%, 19%, 0.3)')};
`;

const TimeSep = styled.sup<ITimeCharProps>`
  font-size: 0.35em;
  font-weight: bold;
  vertical-align: text-top;
  line-height: 2.5em;
  ${p => (p.active ? gradientTextBlPuMixin : 'color: hsla(209, 95%, 19%, 0.3)')}
`;

const TimerText = () => {
  const [time, setTime] = useState({ on: false, started: 0, elapsed: 0, accrued: 0 });
  const startTimer = () =>
    setTime({
      ...time,
      on: true,
      started: time.started ? time.started : Date.now(),
      elapsed: Math.max(time.elapsed, time.accrued),
    });
  const pauseTimer = () => setTime({ ...time, on: false, started: 0, accrued: time.elapsed });
  const resetTimer = () => setTime({ on: false, started: 0, elapsed: 0, accrued: 0 });

  useInterval(
    () => {
      setTime({ ...time, elapsed: Date.now() - time.started + time.accrued });
    },
    time.on ? 43 : null,
  );

  const format = formatTime(time.elapsed);

  return (
    <>
      <Value>
        {format.long.split('').map((char: string, idx: number) => {
          return Number.isNaN(+char) ? (
            <TimeSep
              active={idx >= format.activeFrom}
              measure={idx < 2 ? 'm' : idx < 6 ? 's' : 'ms'}
              key={idx}
            >
              {char}
            </TimeSep>
          ) : (
            <TimeNum
              active={idx >= format.activeFrom}
              measure={idx < 2 ? 'm' : idx < 6 ? 's' : 'ms'}
              key={idx}
            >
              {char}
            </TimeNum>
          );
        })}
      </Value>
      <div>{formatTime(time.elapsed)[0]}</div>
      <button onClick={time.on ? () => pauseTimer() : () => startTimer()}>
        {time.on ? 'pause' : 'start'}
      </button>
      <button onClick={() => resetTimer()}>reset</button>
    </>
  );
};

export default TimerText;
