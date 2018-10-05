/**
 * TODOs:
 *  - Modal de seleção de catálogo
 *  - Modal de confirmação de descarte
 *  - Realização das chamadas para descartar e catalogar
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
});

const mapDispatchToProps: Function = dispatch => ({
  thunks: bindActionCreators(thunks, dispatch),
  appThunks: bindActionCreators(appThunks, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NovasCapturasContainer);
