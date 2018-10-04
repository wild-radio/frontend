// React & Redux
import React from 'react';

// Material UI
import { IconButton, Tooltip } from '@material-ui/core';
import { Check, Close } from '@material-ui/icons';

// Componentes internos
import Frame from '../../components/Frame/Frame';
import ImageCardList from '../../components/ImageCard/ImageCardList';
import ImageCard from '../../components/ImageCard/ImageCard';

export default () => (
  <Frame title="Novas capturas">
    <ImageCardList>
      <ImageCard
        title="Há 30 segundos"
        leftButton={
          <Tooltip title="Descartar">
            <IconButton>
              <Close color="error" />
            </IconButton>
          </Tooltip>
        }
        rightButton={
          <Tooltip title="Catalogar">
            <IconButton>
              <Check color="primary" />
            </IconButton>
          </Tooltip>
        }
    />
    </ImageCardList>
  </Frame>
);
