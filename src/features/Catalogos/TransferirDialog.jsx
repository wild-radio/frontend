// React & Redux
import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';

// Componentes internos
import Dialog from '../../components/Dialog/Dialog';

class TransferirDialog extends React.Component {
  state = {
    idDestino: 0,
  };

  render() {
    return (
      <Dialog
        title="Selecione o catálogo"
        confirm="Confirmar"
        confirmDisabled={!this.state.idDestino}
        onClickConfirm={() => {
          this.props.onClickConfirm(this.state.idDestino);
          this.setState({ idDestino: 0 });
        }}
        cancel="Cancelar"
        onClickCancel={this.props.onClickCancel}
        open={this.props.open}>
        <RadioGroup
          name="idDestino"
          value={`${this.state.idDestino}`}
          onChange={(event, value) => this.setState({ idDestino: value })}>
          {this.props.catalogos
            .filter(catalogo => catalogo.id !== this.props.idOrigem)
            .map(option => (
              <FormControlLabel
                value={`${option.id}`}
                key={option.id}
                control={<Radio />}
                label={option.nome}
              />
            ))}
        </RadioGroup>
      </Dialog>
    );
  }
}

TransferirDialog.propTypes = {
  catalogos: PropTypes.array.isRequired,
  idOrigem: PropTypes.number.isRequired,
  onClickConfirm: PropTypes.func.isRequired,
  onClickCancel: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default TransferirDialog;
