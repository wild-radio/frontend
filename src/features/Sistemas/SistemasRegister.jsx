// React & Redux
import React from 'react';
import PropTypes from 'prop-types';

// Endpoints
import * as rest from './store/rest';

// Material UI
import { withStyles, TextField } from '@material-ui/core';

// Componentes internos
import Dialog from '../../components/Dialog/Dialog';

const styles = {
  inner: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: 16,
  },
};

class SistemasRegister extends React.Component {
  state = { identificacao: '', numeroSerie: '' };

  isConfirmDisabled = () => !(this.state.identificacao && this.state.numeroSerie);

  handleConfirmCadastrar = () =>
    rest
      .postSistema(this.state)
      .then(() => {
        this.props.appThunks.showSnackbar('Sistema cadastrado', 'success');
        this.close();
      })
      .catch(() => {});

  handleCancelCadastrar = () => this.close();

  close = () => {
    this.setState({ identificacao: '', numeroSerie: '' });
    this.props.close();
  };

  render() {
    return (
      <Dialog
        title="Novo sistema"
        confirm="Cadastrar"
        confirmDisabled={this.isConfirmDisabled()}
        onClickConfirm={this.handleConfirmCadastrar}
        cancel="Cancelar"
        onClickCancel={this.handleCancelCadastrar}
        open={this.props.open}>
        <form
          autoComplete="off"
          onKeyDown={event => {
            if (event.key === 'Enter') {
              event.preventDefault();
              if (!this.isConfirmDisabled()) {
                this.handleConfirmCadastrar();
              }
            }
          }}>
          <div className={this.props.classes.inner}>
            <TextField
              name="identificacao"
              label="Identificação"
              className={this.props.classes.input}
              value={`${this.state.identificacao}`}
              onChange={event => this.setState({ identificacao: event.target.value })}
              autoFocus
            />
            <TextField
              name="numeroSerie"
              label="Número de série"
              className={this.props.classes.input}
              value={`${this.state.numeroSerie}`}
              onChange={event => this.setState({ numeroSerie: event.target.value })}
            />
          </div>
        </form>
      </Dialog>
    );
  }
}

SistemasRegister.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  appThunks: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SistemasRegister);
