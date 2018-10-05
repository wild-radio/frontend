/**
 * TODOs:
 *  - Carregamento dos catálogos
 */
// React & Redux
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Thunks & actions
import * as thunks from './store/thunks';
import * as appThunks from '../../components/App/store/thunks';

// Componente filho
import NovasCapturas from './NovasCapturas';

const NovasCapturasContainer = props => <NovasCapturas {...props} />;

const mapStateToProps: Function = state => ({
  ...state.novasCapturas,
  ...state.catalogos,
});

const mapDispatchToProps: Function = dispatch => ({
  thunks: bindActionCreators(thunks, dispatch),
  appThunks: bindActionCreators(appThunks, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NovasCapturasContainer);
