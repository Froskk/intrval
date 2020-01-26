import React from 'react';
import { render } from '@testing-library/react';

import App from 'app';

// https://github.com/styled-components/jest-styled-components
// https://testing-library.com/docs/dom-testing-library/cheatsheet

test('renders without dying', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('wrapper')).toBeInTheDocument();
});
