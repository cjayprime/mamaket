import React from 'react';
import { ThemeProvider } from "@chakra-ui/core";

import Routes from './routes';

import Configuration from './mamaket.config.js';

const App = () => (
  <ThemeProvider theme={Configuration.customTheme}>
    <Routes/>
  </ThemeProvider>
);

export default App;
