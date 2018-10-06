// React & Redux
import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { IconButton, Typography, Tooltip } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

// Componentes internos
import Frame from '../../../components/Frame/Frame';
import Subtitle from '../../../components/Subtitle/Subtitle';
import ImageCardList from '../../../components/ImageCard/ImageCardList';
import ImageCard from '../../../components/ImageCard/ImageCard';
import Empty from '../../../components/Empty/Empty';
import Dialog from '../../../components/Dialog/Dialog';

// Utils
import { dateFormat, hourFormat } from '../../../utils/dateFormat';

const Foto = props => (
  <ImageCard
    title={dateFormat(props.foto.dataHoraCaptura)}
    subtitle={hourFormat(props.foto.dataHoraCaptura)}
    image={props.foto.conteudo}
    leftButton={
      <Tooltip title="Remover">
        <IconButton onClick={() => props.openModalRemover(props.foto.id)}>
          <Delete />
        </IconButton>
      </Tooltip>
    }
  />
);

Foto.propTypes = {
  foto: PropTypes.object.isRequired,
  openModalRemover: PropTypes.func.isRequired,
};

class CatalogoView extends React.Component {
  state = {
    remover: {
      open: false,
      id: 0,
    },
  };

  componentWillMount() {
    this.id = parseInt(this.props.match.params.idCatalogo, 10);
    this.catalogo = {};

    if (isNaN(this.id)) {
      return this.props.routesThunks.catalogos();
    }

    this.initialLoad();
  }

  initialLoad = async () => {
    if (this.props.catalogos.length === 0) {
      await this.props.thunks.getCatalogos();
    }

    this.catalogo = this.props.catalogos.find(catalogo => catalogo.id === this.id) || {};
    this.props.thunks.getFotosCatalogo(this.id);
  };

  openModalRemover = idFoto => this.setState({ remover: { open: true, id: idFoto } });

  handleConfirmRemover = async () => {
    await this.props.thunks.deleteFotoCatalogo(this.id, this.state.remover.id);
    this.setState({ remover: { open: false, id: 0 } });
    this.props.thunks.getFotosCatalogo(this.id);
  };

  handleCancelRemover = () => this.setState({ remover: { open: false, id: 0 } });

  render() {
    const { fotos } = this.props;
    const quantidadeFotos = fotos.length;
    const nenhumaFoto = quantidadeFotos === 0;
    const plural = quantidadeFotos > 1;

    return (
      <div>
        <Frame
          title={this.catalogo.nome || 'Catálogo'}
          secondaryButton="Voltar"
          onClickSecondaryButton={this.props.routesThunks.catalogos}
          onClickBackButton={this.props.routesThunks.catalogos}>
          {!nenhumaFoto && (
            <Subtitle>
              Existe
              {plural ? 'm' : ''} {quantidadeFotos} foto
              {plural ? 's' : ''} neste catálogo
            </Subtitle>
          )}
          {nenhumaFoto ? (
            <Empty>Nenhuma foto</Empty>
          ) : (
            <ImageCardList>
              {fotos.map(foto => (
                <Foto key={foto.id} foto={foto} openModalRemover={this.openModalRemover} />
              ))}
            </ImageCardList>
          )}
        </Frame>
        <Dialog
          title="Você tem certeza?"
          confirm="Confirmar"
          onClickConfirm={this.handleConfirmRemover}
          cancel="Cancelar"
          onClickCancel={this.handleCancelRemover}
          open={this.state.remover.open}>
          <Typography>Esta ação será irreversível</Typography>
        </Dialog>
      </div>
    );
  }
}

CatalogoView.propTypes = {
  thunks: PropTypes.object.isRequired,
  appThunks: PropTypes.object.isRequired,
  routesThunks: PropTypes.object.isRequired,
  catalogos: PropTypes.array.isRequired,
  fotos: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
};

export default CatalogoView;
