// React & Redux
import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import {
  withStyles,
  Button,
  IconButton,
  Typography,
  Tooltip,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';
import { Delete, Eject, Visibility } from '@material-ui/icons';

// Componentes internos
import Frame from '../../../components/Frame/Frame';
import Subtitle from '../../../components/Subtitle/Subtitle';
import ImageCardList from '../../../components/ImageCard/ImageCardList';
import ImageCard from '../../../components/ImageCard/ImageCard';
import Empty from '../../../components/Empty/Empty';
import Dialog from '../../../components/Dialog/Dialog';

const styles = theme => ({
  iconButton: {
    background: theme.palette.common.lightGray,
  },
});

const Catalogo = withStyles(styles)(props => (
  <ImageCard
    title={props.catalogo.nome}
    subtitle={
      props.catalogo.quantidadeFotos === 0
        ? 'Nenhuma foto'
        : `${props.catalogo.quantidadeFotos} foto${props.catalogo.quantidadeFotos > 1 ? 's' : ''}`
    }
    image={props.catalogo.ultimaFoto}
    leftButton={
      <Tooltip title="Remover">
        <IconButton
          className={props.classes.iconButton}
          onClick={() => props.openModalRemover(props.catalogo.id)}>
          <Delete />
        </IconButton>
      </Tooltip>
    }
    middleButton={
      <Tooltip title="Transferir">
        <IconButton
          className={props.classes.iconButton}
          onClick={() => props.openModalTransferir(props.catalogo.id)}>
          <Eject />
        </IconButton>
      </Tooltip>
    }
    rightButton={
      <Tooltip title="Visualizar">
        <IconButton
          className={props.classes.iconButton}
          onClick={() => props.handleVisualizar(props.catalogo.id)}>
          <Visibility />
        </IconButton>
      </Tooltip>
    }
  />
));

Catalogo.propTypes = {
  catalogo: PropTypes.object.isRequired,
  openModalRemover: PropTypes.func.isRequired,
  openModalTransferir: PropTypes.func.isRequired,
  handleVisualizar: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

class Catalogos extends React.Component {
  state = {
    cadastrar: {
      open: false,
      nome: '',
    },
    remover: {
      open: false,
      id: 0,
    },
    transferir: {
      open: false,
      idOrigem: 0,
      idDestino: 0,
    },
  };

  componentWillMount() {
    this.props.thunks.getCatalogos();
  }

  openModalCadastrar = () => this.setState({ cadastrar: { open: true, nome: '' } });

  handleConfirmCadastrar = async () => {
    await this.props.thunks.postCatalogo({ nome: this.state.cadastrar.nome });
    this.setState({ cadastrar: { open: false, nome: '' } });
    this.props.thunks.getCatalogos();
  };

  handleCancelCadastrar = () => this.setState({ cadastrar: { open: false, nome: '' } });

  openModalRemover = idFoto => this.setState({ remover: { open: true, id: idFoto } });

  handleConfirmRemover = async () => {
    await this.props.thunks.deleteCatalogo(this.state.remover.id);
    this.setState({ remover: { open: false, id: 0 } });
    this.props.thunks.getCatalogos();
  };

  handleCancelRemover = () => this.setState({ remover: { open: false, id: 0 } });

  openModalTransferir = idOrigem => {
    if (this.props.catalogos.list.length <= 1) {
      return this.props.appThunks.showSnackbar('Não há nenhum catálogo para transferir', 'error');
    }
    this.setState({ transferir: { open: true, idOrigem, idDestino: 0 } });
  };

  handleConfirmTransferir = async () => {
    await this.props.thunks.transferirFotosCatalogo(
      this.state.transferir.idOrigem,
      this.state.transferir.idDestino,
    );
    this.setState({ transferir: { open: false, idOrigem: 0, idDestino: 0 } });
    this.props.thunks.getCatalogos();
  };

  handleCancelTransferir = () =>
    this.setState({ transferir: { open: false, idOrigem: 0, idDestino: 0 } });

  render() {
    const catalogos = this.props.catalogos.list;
    const quantidadeCatalogos = catalogos.length;
    const catalogosPlural = quantidadeCatalogos > 1;
    const nenhumCatalogo = quantidadeCatalogos === 0;
    const quantidadeFotos = catalogos.reduce((acc, catalogo) => acc + catalogo.quantidadeFotos, 0);
    const fotosPlural = quantidadeFotos > 1;

    return (
      <div>
        <Frame title="Catálogos" onClickBackButton={this.props.routesThunks.inicio}>
          {!nenhumCatalogo && (
            <Subtitle
              action={
                <Button variant="outlined" onClick={this.openModalCadastrar}>
                  Novo
                </Button>
              }>
              {quantidadeFotos === 0
                ? 'Nenhuma foto'
                : `Existe${fotosPlural ? 'm' : ''} ${quantidadeFotos} foto${
                    fotosPlural ? 's' : ''
                  }`}
              {` em ${quantidadeCatalogos} catálogo${catalogosPlural ? 's' : ''}`}
            </Subtitle>
          )}
          {nenhumCatalogo ? (
            <Empty
              action={
                <Button variant="contained" color="secondary" onClick={this.openModalCadastrar}>
                  Adicionar
                </Button>
              }>
              Nenhum catálogo
            </Empty>
          ) : (
            <ImageCardList>
              {catalogos.map(catalogo => (
                <Catalogo
                  key={catalogo.id}
                  catalogo={catalogo}
                  openModalRemover={this.openModalRemover}
                  openModalTransferir={this.openModalTransferir}
                  handleVisualizar={() => this.props.routesThunks.catalogo(catalogo.id)}
                />
              ))}
            </ImageCardList>
          )}
        </Frame>
        <Dialog
          title="Novo catálogo"
          confirm="Confirmar"
          confirmDisabled={!this.state.cadastrar.nome}
          onClickConfirm={this.handleConfirmCadastrar}
          cancel="Cancelar"
          onClickCancel={this.handleCancelCadastrar}
          open={this.state.cadastrar.open}>
          <TextField
            name="nome"
            value={`${this.state.cadastrar.nome}`}
            onChange={event =>
              this.setState({ cadastrar: { ...this.state.cadastrar, nome: event.target.value } })
            }
            autoComplete="off"
            autoFocus
          />
        </Dialog>
        <Dialog
          title="Você tem certeza?"
          confirm="Confirmar"
          onClickConfirm={this.handleConfirmRemover}
          cancel="Cancelar"
          onClickCancel={this.handleCancelRemover}
          open={this.state.remover.open}>
          <Typography>Esta ação será irreversível</Typography>
        </Dialog>
        <Dialog
          title="Selecione o catálogo"
          confirm="Confirmar"
          confirmDisabled={!this.state.transferir.idDestino}
          onClickConfirm={this.handleConfirmTransferir}
          cancel="Cancelar"
          onClickCancel={this.handleCancelTransferir}
          open={this.state.transferir.open}>
          <RadioGroup
            name="idDestino"
            value={`${this.state.transferir.idDestino}`}
            onChange={(event, value) =>
              this.setState({ transferir: { ...this.state.transferir, idDestino: value } })
            }>
            {catalogos
              .filter(catalogo => catalogo.id !== this.state.transferir.idOrigem)
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
      </div>
    );
  }
}

Catalogos.propTypes = {
  thunks: PropTypes.object.isRequired,
  appThunks: PropTypes.object.isRequired,
  routesThunks: PropTypes.object.isRequired,
  catalogos: PropTypes.object.isRequired,
};

export default Catalogos;
