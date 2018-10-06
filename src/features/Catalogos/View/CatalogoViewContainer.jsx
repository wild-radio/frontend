// React & Redux
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Thunks & actions
import * as thunks from '../store/thunks';
import * as appThunks from '../../../components/App/store/thunks';
import * as routesThunks from '../../../components/Routes/store/thunks';

// Componente filho
import CatalogoView from './CatalogoView';

const CatalogoViewContainer = props => <CatalogoView {...props} />;

const mapStateToProps: Function = state => ({
  catalogos: state.catalogos.list,
  fotos: state.catalogos.fotos,
});

const mapDispatchToProps: Function = dispatch => ({
  thunks: bindActionCreators(thunks, dispatch),
  appThunks: bindActionCreators(appThunks, dispatch),
  routesThunks: bindActionCreators(routesThunks, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CatalogoViewContainer);
