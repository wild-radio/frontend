// React & Redux
import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import {
  IconButton,
  Typography,
  Tooltip,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';
import { Check, Close } from '@material-ui/icons';

// Componentes internos
import Frame from '../../components/Frame/Frame';
import Subtitle from '../../components/Subtitle/Subtitle';
import ImageCardList from '../../components/ImageCard/ImageCardList';
import ImageCard from '../../components/ImageCard/ImageCard';
import Empty from '../../components/Empty/Empty';
import Dialog from '../../components/Dialog/Dialog';

// Utils
import cameraSelecionadaCheck from '../../utils/cameraSelecionadaCheck';
import { dateFormat, hourFormat } from '../../utils/dateFormat';

const NovaCaptura = props => (
  <ImageCard
    title={dateFormat(props.foto.dataHoraCaptura)}
    subtitle={hourFormat(props.foto.dataHoraCaptura)}
    image={props.foto.conteudo}
    leftButton={
      <Tooltip title="Descartar">
        <IconButton onClick={() => props.openModalDescartar(props.foto.id)}>
          <Close color="error" />
        </IconButton>
      </Tooltip>
    }
    rightButton={
      <Tooltip title="Catalogar">
        <IconButton onClick={() => props.openModalCatalogar(props.foto.id)}>
          <Check color="primary" />
        </IconButton>
      </Tooltip>
    }
  />
);

NovaCaptura.propTypes = {
  foto: PropTypes.object.isRequired,
  openModalDescartar: PropTypes.func.isRequired,
  openModalCatalogar: PropTypes.func.isRequired,
};

class NovasCapturas extends React.Component {
  state = {
    descartar: {
      open: false,
      id: 0,
    },
    catalogar: {
      open: false,
      id: 0,
      idCatalogo: 0,
    },
  };

  componentWillMount() {
    cameraSelecionadaCheck();
    this.props.thunks.getFotos();
    this.props.catalogoThunks.getCatalogos();
  }

  openModalDescartar = idFoto => this.setState({ descartar: { open: true, id: idFoto } });

  handleConfirmDescartar = async () => {
    this.setState({ descartar: { open: false, id: 0 } });
    await this.props.thunks.deleteFoto(this.state.descartar.id);
    this.props.thunks.getFotos();
  };

  handleCancelDescartar = () => this.setState({ descartar: { open: false, id: 0 } });

  openModalCatalogar = idFoto => {
    if (this.props.catalogos.list.length === 0) {
      return this.props.appThunks.showSnackbar('Nenhum catálogo cadastrado', 'error');
    }
    this.setState({ catalogar: { open: true, id: idFoto, idCatalogo: 0 } });
  };

  handleConfirmCatalogar = async () => {
    this.setState({ catalogar: { open: false, id: 0, idCatalogo: 0 } });
    await this.props.thunks.putCatalogoFoto(
      this.state.catalogar.idCatalogo,
      this.state.catalogar.id,
    );
    this.props.thunks.getFotos();
  };

  handleCancelCatalogar = () => this.setState({ catalogar: { open: false, id: 0, idCatalogo: 0 } });

  render() {
    const { fotos } = this.props;
    const quantidadeFotos = fotos.length;
    const nenhumaFoto = quantidadeFotos === 0;
    const plural = quantidadeFotos > 1;

    return (
      <div>
        <Frame title="Novas capturas">
          {!nenhumaFoto && (
            <Subtitle>
              Existe
              {plural && 'm'} {quantidadeFotos} nova
              {plural && 's'} captura
              {plural && 's'}
            </Subtitle>
          )}
          {nenhumaFoto ? (
            <Empty>Nenhuma nova captura</Empty>
          ) : (
            <ImageCardList>
              {fotos.map(foto => (
                <NovaCaptura
                  key={foto.id}
                  foto={foto}
                  openModalDescartar={this.openModalDescartar}
                  openModalCatalogar={this.openModalCatalogar}
                />
              ))}
            </ImageCardList>
          )}
        </Frame>
        <Dialog
          title="Você tem certeza?"
          confirm="Confirmar"
          onClickConfirm={this.handleConfirmDescartar}
          cancel="Cancelar"
          onClickCancel={this.handleCancelDescartar}
          open={this.state.descartar.open}>
          <Typography>Esta ação será irreversível</Typography>
        </Dialog>
        <Dialog
          title="Selecione o catálogo"
          confirm="Confirmar"
          confirmDisabled={!this.state.catalogar.idCatalogo}
          onClickConfirm={this.handleConfirmCatalogar}
          cancel="Cancelar"
          onClickCancel={this.handleCancelCatalogar}
          open={this.state.catalogar.open}>
          <RadioGroup
            name="idCatalogo"
            value={`${this.state.catalogar.idCatalogo}`}
            onChange={(event, value) =>
              this.setState({ catalogar: { ...this.state.catalogar, idCatalogo: value } })
            }>
            {this.props.catalogos.list.map(option => (
              <FormControlLabel
                value={`${option.id}`}
                key={option.id}
                control={<Radio />}
                label={option.nome}
              />
            ))}
          </RadioGroup>
        </Dialog>
      </div>
    );
  }
}

NovasCapturas.propTypes = {
  thunks: PropTypes.object.isRequired,
  appThunks: PropTypes.object.isRequired,
  catalogoThunks: PropTypes.object.isRequired,
  fotos: PropTypes.array.isRequired,
  catalogos: PropTypes.object.isRequired,
};

export default NovasCapturas;
