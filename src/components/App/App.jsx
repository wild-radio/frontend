// React & Redux
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Material UI
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

// Thunks & actions
import * as appActions from './store/actions';
import * as routesThunks from '../Routes/store/thunks';

// Componentes internos
import AppBar from './AppBar';
import Drawer from './Drawer';
import Routes from '../Routes/Routes';

// Tema
import theme from './theme';

const App = props => {
  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <CssBaseline>
        <AppBar {...props} />
        <Drawer {...props} />
        <Routes />
      </CssBaseline>
    </MuiThemeProvider>
  );
};

const mapStateToProps: Function = state => ({
  drawer: state.app.drawer,
});

const mapDispatchToProps: Function = dispatch => ({
  appActions: bindActionCreators(appActions, dispatch),
  routesThunks: bindActionCreators(routesThunks, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
