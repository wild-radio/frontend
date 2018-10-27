// React & Redux
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Thunks & actions
import * as appActions from '../../components/App/store/actions';
import * as routesThunks from '../../components/Routes/store/thunks';

// Componente filho
import Inicio from './Inicio';

let InicioContainer = props => <Inicio {...props} />;

const mapStateToProps = state => ({
  cameraSelecionada: state.app.cameraSelecionada,
});

const mapDispatchToProps = dispatch => ({
  appActions: bindActionCreators(appActions, dispatch),
  routesThunks: bindActionCreators(routesThunks, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InicioContainer);
