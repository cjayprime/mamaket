import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

import Routes from './routes';

const theme = createMuiTheme({
    breakpoints: {
        values: {
            lg: 1280,
            md: 960,
            sm: 600,
            xl: 1920,
            xs: 0,
        },
    },
});
// TODO: Install 'notistack'
const App = () => (
    <ThemeProvider theme={theme}>
        <Routes />
    </ThemeProvider>
);

export default App;
