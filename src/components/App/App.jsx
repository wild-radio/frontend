// React & Redux
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Material UI
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

// Componentes internos
import AppBar from './AppBar';
import Drawer from './Drawer';

// Thunks & actions
import * as appActions from './store/actions';

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

const App = props => {
  return (
    <CssBaseline>
      <MuiThemeProvider theme={theme}>
        <AppBar {...props} />
        <Drawer {...props} />
      </MuiThemeProvider>
    </CssBaseline>
  );
};

const mapStateToProps: Function = state => ({
  drawer: state.app.drawer,
});

const mapDispatchToProps: Function = dispatch => ({
  appActions: bindActionCreators(appActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);