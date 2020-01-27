import React, { useState } from 'react';
import styled from 'styled-components';

import TimerText from 'components/timerText';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Background = styled.div`
  width: 80vw;
  height: 80vw;
  max-width: 300px;
  max-height: 300px;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 1.2em;
  border-radius: 999em;
  box-shadow: 20px 20px 35px #dbe1e8, -20px -20px 35px #fbffff;
`;

const ExerciseList = styled.div`
  width: 100%;
  height: 10em;
  font-size: ${p => p.theme.sizing.medium};
  padding: 20px;
  border-radius: 20px;
  background: #ebf1f8;
  box-shadow: 5px 5px 10px #dbe1e8, -5px -5px 10px #fbffff;
`;

const Timer = () => {
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

  return (
    <Wrapper>
      <Background>
        <TimerText time={time} setTime={setTime} />
      </Background>

      <button onClick={time.on ? () => pauseTimer() : () => startTimer()}>
        {time.on ? 'pause' : 'start'}
      </button>
      <button onClick={() => resetTimer()}>reset</button>
      <ExerciseList>Core</ExerciseList>
    </Wrapper>
  );
};

export default Timer;
