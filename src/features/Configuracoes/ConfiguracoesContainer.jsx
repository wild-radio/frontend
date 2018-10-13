// React & Redux
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// Thunks & actions
import * as actions from './store/actions';
import * as thunks from './store/thunks';
import * as appThunks from '../../components/App/store/thunks';
import * as routesThunks from '../../components/Routes/store/thunks';

// Componente filho
import Configuracoes from './Configuracoes';

const FORM_NAME = 'configuracoes';

let ConfiguracoesContainer = props => <Configuracoes {...props} />;

ConfiguracoesContainer = reduxForm({
  form: FORM_NAME,
})(ConfiguracoesContainer);

const mapStateToProps = state => ({
  ...state.configuracoes,
  cameraSelecionada: state.app.cameraSelecionada,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
  thunks: bindActionCreators(thunks, dispatch),
  appThunks: bindActionCreators(appThunks, dispatch),
  routesThunks: bindActionCreators(routesThunks, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConfiguracoesContainer);
