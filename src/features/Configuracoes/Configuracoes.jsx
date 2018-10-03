// React & Redux
import React from 'react';
import { Field } from 'redux-form';

// Material UI
import { Switch } from 'redux-form-material-ui';

// Componentes internos
import Frame from '../../components/Frame/Frame';

export default props => (
  <Frame title="Configurações" primaryButton="Salvar" secondaryButton="Descartar">
    <form>
      <Field component={Switch} name="teste" />
    </form>
  </Frame>
);
