// React & Redux
import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { IconButton, Tooltip } from '@material-ui/core';
import { Check, Close } from '@material-ui/icons';

// Componentes internos
import Frame from '../../components/Frame/Frame';
import Subtitle from '../../components/Subtitle/Subtitle';
import ImageCardList from '../../components/ImageCard/ImageCardList';
import ImageCard from '../../components/ImageCard/ImageCard';
import Empty from '../../components/Empty/Empty';

// Utils
import cameraSelecionadaCheck from '../../utils/cameraSelecionadaCheck';
import { dateFormat, hourFormat } from '../../utils/dateFormat';

const NovaCaptura = foto => (
  <ImageCard
    key={foto.id}
    title={dateFormat(new Date(foto.dataHoraCaptura * 1000))}
    subtitle={hourFormat(new Date(foto.dataHoraCaptura * 1000))}
    image={foto.conteudo}
    leftButton={
      <Tooltip title="Descartar">
        <IconButton onClick={() => console.log('TODO: descartar')}>
          <Close color="error" />
        </IconButton>
      </Tooltip>
    }
    rightButton={
      <Tooltip title="Catalogar">
        <IconButton onClick={() => console.log('TODO: catalogar')}>
          <Check color="primary" />
        </IconButton>
      </Tooltip>
    }
  />
);

class NovasCapturas extends React.Component {
  componentWillMount() {
    cameraSelecionadaCheck();
    this.props.thunks.getFotos();
  }

  render() {
    const { fotos } = this.props;
    const quantidadeFotos = fotos.length;
    const nenhumaFoto = quantidadeFotos === 0;
    const plural = quantidadeFotos > 1;

    return (
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
          <ImageCardList>{fotos.map(NovaCaptura)}</ImageCardList>
        )}
      </Frame>
    );
  }
}

NovasCapturas.propTypes = {
  thunks: PropTypes.object.isRequired,
  fotos: PropTypes.array.isRequired,
};

export default NovasCapturas;
