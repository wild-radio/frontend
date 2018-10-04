/**
 * TODOs:
 *  - Carregamento das informações do backend
 *  - Subtítulo com contagem de catálogos e botão de adicionar
 *  - Modal de novo catálogo
 *  - Modal de transferência de catálogo
 *  - Modal de confirmação de exclusão de catálogo
 *  - Tela de visualização de catálogo
 */
// React & Redux
import React from 'react';

// Material UI
import { IconButton, Tooltip } from '@material-ui/core';
import { Delete, Eject, Visibility } from '@material-ui/icons';

// Componentes internos
import Frame from '../../components/Frame/Frame';
import ImageCardList from '../../components/ImageCard/ImageCardList';
import ImageCard from '../../components/ImageCard/ImageCard';

export default () => (
  <Frame title="Catálogos">
    <ImageCardList>
      <ImageCard
        title="Suricatos"
        subtitle="324 imagens"
        leftButton={
          <Tooltip title="Remover">
            <IconButton>
              <Delete />
            </IconButton>
          </Tooltip>
        }
        middleButton={
          <Tooltip title="Transferir todas fotos">
            <IconButton>
              <Eject />
            </IconButton>
          </Tooltip>
        }
        rightButton={
          <Tooltip title="Visualizar">
            <IconButton>
              <Visibility />
            </IconButton>
          </Tooltip>
        }
      />
      <ImageCard
        title="Ursos polares"
        subtitle="127 imagens"
        leftButton={
          <Tooltip title="Remover">
            <IconButton>
              <Delete />
            </IconButton>
          </Tooltip>
        }
        middleButton={
          <Tooltip title="Transferir todas fotos">
            <IconButton>
              <Eject />
            </IconButton>
          </Tooltip>
        }
        rightButton={
          <Tooltip title="Visualizar">
            <IconButton>
              <Visibility />
            </IconButton>
          </Tooltip>
        }
      />
      <ImageCard
        title="Girafas"
        subtitle="2 imagens"
        leftButton={
          <Tooltip title="Remover">
            <IconButton>
              <Delete />
            </IconButton>
          </Tooltip>
        }
        middleButton={
          <Tooltip title="Transferir todas fotos">
            <IconButton>
              <Eject />
            </IconButton>
          </Tooltip>
        }
        rightButton={
          <Tooltip title="Visualizar">
            <IconButton>
              <Visibility />
            </IconButton>
          </Tooltip>
        }
      />
      <ImageCard
        title="Pássaros"
        subtitle="Nenhuma imagem"
        leftButton={
          <Tooltip title="Remover">
            <IconButton>
              <Delete />
            </IconButton>
          </Tooltip>
        }
        middleButton={
          <Tooltip title="Transferir todas fotos">
            <IconButton>
              <Eject />
            </IconButton>
          </Tooltip>
        }
        rightButton={
          <Tooltip title="Visualizar">
            <IconButton>
              <Visibility />
            </IconButton>
          </Tooltip>
        }
      />
      <ImageCard
        title="Desconhecidos"
        subtitle="Nenhuma imagem"
        leftButton={
          <Tooltip title="Remover">
            <IconButton>
              <Delete />
            </IconButton>
          </Tooltip>
        }
        middleButton={
          <Tooltip title="Transferir todas fotos">
            <IconButton>
              <Eject />
            </IconButton>
          </Tooltip>
        }
        rightButton={
          <Tooltip title="Visualizar">
            <IconButton>
              <Visibility />
            </IconButton>
          </Tooltip>
        }
      />
    </ImageCardList>
  </Frame>
);
