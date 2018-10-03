// React & Redux
import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// Componente filho
import Configuracoes from './Configuracoes';

const FORM_NAME = 'configuracoes';

let ConfiguracoesContainer = props => <Configuracoes {...props} />;

ConfiguracoesContainer = reduxForm({
  form: FORM_NAME,
})(ConfiguracoesContainer);

export default connect()(ConfiguracoesContainer);
