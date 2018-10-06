// React & Redux
import React from 'react';
import { Route, Switch } from 'react-router';

// Features
import InicioContainer from '../../features/Inicio/InicioContainer';
import NovasCapturasContainer from '../../features/NovasCapturas/NovasCapturasContainer';
import CatalogosListContainer from '../../features/Catalogos/List/CatalogosListContainer';
import CatalogoViewContainer from '../../features/Catalogos/View/CatalogoViewContainer';
import ConfiguracoesContainer from '../../features/Configuracoes/ConfiguracoesContainer';

export default () => (
  <div>
    <Switch>
      <Route exact path="/" component={InicioContainer} />
      <Route exact path="/novas-capturas" component={NovasCapturasContainer} />
      <Route exact path="/catalogos" component={CatalogosListContainer} />
      <Route exact path="/catalogos/:idCatalogo" component={CatalogoViewContainer} />
      <Route exact path="/configuracoes" component={ConfiguracoesContainer} />
    </Switch>
  </div>
);
