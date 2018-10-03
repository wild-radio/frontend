// React & Redux
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// Material UI
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

// Thunks & actions
import * as appActions from './store/actions';
import * as appThunks from './store/thunks';
import * as routesThunks from '../Routes/store/thunks';

// Componentes internos
import AppBar from './AppBar';
import Drawer from './Drawer';
import Popover from './Popover';
import Snackbar from './Snackbar';
import Routes from '../Routes/Routes';

// Tema
import theme from './theme';

const App = props => (
  <MuiThemeProvider theme={createMuiTheme(theme)}>
    <CssBaseline>
      <AppBar {...props} />
      <Drawer {...props} />
      <Popover {...props} />
      <Snackbar {...props} />
      <Routes />
    </CssBaseline>
  </MuiThemeProvider>
);

const mapStateToProps: Function = state => ({
  ...state.app,
});

const mapDispatchToProps: Function = dispatch => ({
  appActions: bindActionCreators(appActions, dispatch),
  appThunks: bindActionCreators(appThunks, dispatch),
  routesThunks: bindActionCreators(routesThunks, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
