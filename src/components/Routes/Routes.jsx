// React & Redux
import React from 'react';
import { Route, Switch } from 'react-router';

// Features
import InicioContainer from '../../features/Inicio/InicioContainer';
import NovasCapturasContainer from '../../features/NovasCapturas/NovasCapturasContainer';
import CatalogosContainer from '../../features/Catalogos/CatalogosContainer';
import ConfiguracoesContainer from '../../features/Configuracoes/ConfiguracoesContainer';

export default () => (
  <div>
    <Switch>
      <Route exact path="/" component={InicioContainer} />
      <Route exact path="/novas-capturas" component={NovasCapturasContainer} />
      <Route exact path="/catalogos" component={CatalogosContainer} />
      <Route exact path="/configuracoes" component={ConfiguracoesContainer} />
    </Switch>
  </div>
);
