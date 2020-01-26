import React, { useState } from 'react';
import styled from 'styled-components';
import { useInterval } from 'hooks/useInterval';
import { formatTime } from 'utils/formatTime';

const Text = styled.h1`
  color: ${p => p.theme.colors.accent};
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

  return (
    <>
      <div>{formatTime(time.elapsed)[0]}</div>
      <button onClick={() => startTimer()}>start</button>
      <button onClick={() => pauseTimer()}>pause</button>
      <button onClick={() => resetTimer()}>reset</button>
    </>
  );
};

export default TimerText;
