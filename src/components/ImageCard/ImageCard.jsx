/**
 * TODOs:
 *  - (ImageCardViewContainer) div display: flex, justify-content: space-between
 *  - Data relativa (texto) e absoluta (tooltip), usando react-intl
 *  - Alinhar ícones esquerda e direita
 *  - Props ações Novas Capturas (descartar e catalogar) e Catálogos (deletar e transferir)
 */
// React & Redux
import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import {
  withStyles,
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  IconButton,
} from '@material-ui/core';
import { Favorite, Share, ExpandMore } from '@material-ui/icons';

const styles = {
  card: {
    maxWidth: 320,
  },
  media: {
    width: 320,
    height: 240,
    paddingTop: '56.25%',
  },
  actions: {
    display: 'flex',
  },
};

const ImageCard = props => (
  <Card className={props.classes.card}>
    <CardHeader title={props.title} subheader={props.data} />
    <CardMedia
      className={props.classes.media}
      image={`data:image/png;base64, ${props.image}`}
      title={props.title}
    />
    <CardActions className={props.classes.actions}>
      <IconButton>
        <Favorite />
      </IconButton>
      <IconButton>
        <Share />
      </IconButton>
      <IconButton className={props.classes.expand}>
        <ExpandMore />
      </IconButton>
    </CardActions>
  </Card>
);

ImageCard.propTypes = {
  classes: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  data: PropTypes.string.isRequired,
};

ImageCard.defaultProps = {
  title: '',
};

export default withStyles(styles)(ImageCard);
