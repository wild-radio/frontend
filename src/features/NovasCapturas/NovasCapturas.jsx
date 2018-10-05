// React & Redux
import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { IconButton, Tooltip } from '@material-ui/core';
import { Check, Close } from '@material-ui/icons';

// Componentes internos
import Frame from '../../components/Frame/Frame';
import ImageCardList from '../../components/ImageCard/ImageCardList';
import ImageCard from '../../components/ImageCard/ImageCard';

// Utils
import cameraSelecionadaCheck from '../../utils/cameraSelecionadaCheck';
import { dateFormat, hourFormat } from '../../utils/dateFormat';

class NovasCapturas extends React.Component {
  componentWillMount() {
    cameraSelecionadaCheck();
    this.props.thunks.getFotos();
  }

  render() {
    return (
      <Frame title="Novas capturas">
        <ImageCardList>
          {this.props.fotos.map(foto => (
            <ImageCard
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
          ))}
        </ImageCardList>
      </Frame>
    );
  }
}

NovasCapturas.propTypes = {
  thunks: PropTypes.object.isRequired,
  fotos: PropTypes.array.isRequired,
};

export default NovasCapturas;
