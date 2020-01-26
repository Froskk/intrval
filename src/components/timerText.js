import React from 'react';
import styled from 'styled-components';

const Text = styled.h1`
  color: ${p => p.theme.colors.accent};
`;

const TimerText = () => <Text>Text</Text>;

export default TimerText;
