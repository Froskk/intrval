import React from 'react';
import styled from 'styled-components';

import TimerText from 'components/timerText';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  box-shadow: 30px 30px 59px #c8cdd3, -30px -30px 59px #ffffff;
`;

const Timer = () => (
  <Wrapper>
    <Background>
      <TimerText />
    </Background>
  </Wrapper>
);

export default Timer;
