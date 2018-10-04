// React & Redux
import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { withStyles, Card, CardHeader, CardMedia, CardActions } from '@material-ui/core';

// Imagem padrão
import defaultImage from './defaultImage';

const IconButtonStub = () => <div style={{ height: 48, width: 48 }} />;

const styles = {
  card: {
    maxWidth: 320,
  },
  header: {
    minHeight: 84,
  },
  media: {
    width: 320,
    height: 240,
    paddingTop: '56.25%',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

const ImageCard = props => (
  <Card className={props.classes.card}>
    <CardHeader className={props.classes.header} title={props.title} subheader={props.subtitle} />
    <CardMedia
      className={props.classes.media}
      image={`data:image/png;base64, ${props.image}`}
      title={props.title}
    />
    <CardActions className={props.classes.actions}>
      {props.leftButton}
      {props.middleButton}
      {props.rightButton}
    </CardActions>
  </Card>
);

ImageCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  leftButton: PropTypes.node,
  middleButton: PropTypes.node,
  rightButton: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

ImageCard.defaultProps = {
  title: '',
  subtitle: '',
  image: defaultImage,
  leftButton: <IconButtonStub />,
  middleButton: <IconButtonStub />,
  rightButton: <IconButtonStub />,
};

export default withStyles(styles)(ImageCard);
