import React from 'react';
import { ThemeProvider } from 'styled-components';

import Layout from 'components/layout';
import Timer from 'components/pages/timer';
import theme from 'theme';
import GlobalStyles from 'globalStyles';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Layout>
      <Timer />
    </Layout>
  </ThemeProvider>
);

export default App;
