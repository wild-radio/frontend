// React & Redux
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Router
import { withRouter } from 'react-router';

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
import SistemasRegister from '../../features/Sistemas/SistemasRegister';

// Axios
import axiosInterceptor from '../../utils/axiosInterceptor';

// Tema
import theme from './theme';

class App extends React.Component {
  state = {
    cadastroSistemas: {
      open: false,
    },
  };

  componentWillMount() {
    this.props.axiosInterceptor();
    this.props.appThunks.loadSistemas();
    setInterval(this.props.appThunks.loadSistemas, 5000);
    this.getCameraSelecionadaFromLocalStorage();
  }

  getCameraSelecionadaFromLocalStorage = () => {
    const localStorageItem = window.localStorage.getItem('cameraSelecionada');
    const cameraSelecionada = localStorageItem ? JSON.parse(localStorageItem) : null;

    if (cameraSelecionada) {
      this.props.appActions.changeCamera(cameraSelecionada);
    }
  };

  render() {
    return (
      <MuiThemeProvider theme={createMuiTheme(theme)}>
        <CssBaseline>
          <AppBar {...this.props} />
          <Drawer {...this.props} />
          <Popover
            {...this.props}
            openSistemasRegister={() => this.setState({ cadastroSistemas: { open: true } })}
          />
          <Snackbar {...this.props} />
          <SistemasRegister
            {...this.props}
            open={this.state.cadastroSistemas.open}
            close={() => this.setState({ cadastroSistemas: { open: false } })}
          />
          <Routes />
        </CssBaseline>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  appActions: PropTypes.object.isRequired,
  appThunks: PropTypes.object.isRequired,
  routesThunks: PropTypes.object.isRequired,
  axiosInterceptor: PropTypes.func.isRequired,
};

const mapStateToProps: Function = state => ({
  ...state.app,
});

const mapDispatchToProps: Function = dispatch => ({
  appActions: bindActionCreators(appActions, dispatch),
  appThunks: bindActionCreators(appThunks, dispatch),
  routesThunks: bindActionCreators(routesThunks, dispatch),
  axiosInterceptor: () => dispatch(axiosInterceptor()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
);
