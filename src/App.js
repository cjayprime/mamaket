import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

import Routes from './routes';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
// TODO: Install 'notistack'
const App = () => (
  <ThemeProvider theme={theme}>
    <Routes/>
  </ThemeProvider>
);

export default App;
