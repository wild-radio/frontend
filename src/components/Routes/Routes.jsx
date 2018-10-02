// React & Redux
import React from 'react';
import { Route, Switch } from 'react-router';

// Features
import HomeContainer from '../../features/Home/HomeContainer';
import NovasCapturasContainer from '../../features/NovasCapturas/NovasCapturasContainer';
import CatalogosContainer from '../../features/Catalogos/CatalogosContainer';
import ConfiguracoesContainer from '../../features/Configuracoes/ConfiguracoesContainer';

export default () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/novas-capturas" component={NovasCapturasContainer} />
      <Route exact path="/catalogos" component={CatalogosContainer} />
      <Route exact path="/configuracoes" component={ConfiguracoesContainer} />
    </Switch>
  </div>
);
