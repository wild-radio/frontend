import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import AppBar from '../AppBar/AppBar';
import Drawer from '../Drawer/Drawer';

const theme = createMuiTheme({
  palette: {
    common: { black: '#000', white: 'rgba(255, 255, 255, 1)' },
    background: { paper: '#fff', default: '#fafafa' },
    primary: {
      light: 'rgba(72, 169, 153, 1)',
      main: 'rgba(0, 119, 105, 1)',
      dark: 'rgba(0, 74, 63, 1)',
      contrastText: '#fff',
    },
    secondary: {
      light: 'rgba(255, 209, 73, 1)',
      main: 'rgba(255, 160, 0, 1)',
      dark: 'rgba(198, 113, 0, 1)',
      contrastText: '#fff',
    },
    error: { light: '#e57373', main: '#f44336', dark: '#d32f2f', contrastText: '#fff' },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
  },
});

const App = () => {
  return (
    <CssBaseline>
      <MuiThemeProvider theme={theme}>
        <AppBar />
        <Drawer />
      </MuiThemeProvider>
    </CssBaseline>
  );
};

export default App;
