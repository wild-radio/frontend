// React & Redux
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Thunks & actions
import * as thunks from './store/thunks';
import * as appThunks from '../../components/App/store/thunks';
import * as routesThunks from '../../components/Routes/store/thunks';
import * as catalogoThunks from '../Catalogos/store/thunks';

// Componente filho
import NovasCapturas from './NovasCapturas';

const NovasCapturasContainer = props => <NovasCapturas {...props} />;

const mapStateToProps = state => ({
  ...state.novasCapturas,
  catalogos: state.catalogos,
});

const mapDispatchToProps = dispatch => ({
  thunks: bindActionCreators(thunks, dispatch),
  appThunks: bindActionCreators(appThunks, dispatch),
  routesThunks: bindActionCreators(routesThunks, dispatch),
  catalogoThunks: bindActionCreators(catalogoThunks, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NovasCapturasContainer);
