import React from 'react';
import { render } from '@testing-library/react';

import App from 'app';

// https://github.com/styled-components/jest-styled-components

test('renders without dying', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('wrapper')).toBeInTheDocument();
});
