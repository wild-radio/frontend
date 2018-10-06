// React & Redux
import React from 'react';
import { Route, Switch } from 'react-router';

// Features
import InicioContainer from '../../features/Inicio/InicioContainer';
import NovasCapturasContainer from '../../features/NovasCapturas/NovasCapturasContainer';
import CatalogosListContainer from '../../features/Catalogos/List/CatalogosListContainer';
import ConfiguracoesContainer from '../../features/Configuracoes/ConfiguracoesContainer';

export default () => (
  <div>
    <Switch>
      <Route exact path="/" component={InicioContainer} />
      <Route exact path="/novas-capturas" component={NovasCapturasContainer} />
      <Switch>
        <Route exact path="/catalogos" component={CatalogosListContainer} />
        {/* TODO */}
        <Route path="/catalogos/:idCatalogo" component={CatalogosListContainer} />
      </Switch>
      <Route exact path="/configuracoes" component={ConfiguracoesContainer} />
    </Switch>
  </div>
);
