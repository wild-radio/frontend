// React & Redux
import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import { Button, Typography, Toolbar, Paper } from '@material-ui/core';

// Tema
import theme from '../App/theme';

const styles = {
  toolbar: {
    background: theme.palette.primary.dark,
  },
  paper: {
    maxWidth: 1024,
    minHeight: 768,
    margin: '80px auto 0 auto',
  },
  title: {
    flexGrow: 1,
    color: theme.palette.common.white,
  },
  inner: {
    padding: 16,
  },
  primaryButton: {
    marginLeft: 16,
  },
  secondaryButton: {
    color: theme.palette.common.white,
    borderColor: theme.palette.common.white,
  },
};

const Frame = props => (
  <Paper className={props.classes.paper}>
    <Toolbar className={props.classes.toolbar}>
      <Typography variant="title" className={props.classes.title}>
        {props.title}
      </Typography>
      {props.secondaryButton && (
        <Button
          variant="outlined"
          className={props.classes.secondaryButton}
          onClick={props.onClickSecondaryButton}>
          {props.secondaryButton}
        </Button>
      )}
      {props.primaryButton && (
        <Button
          variant="contained"
          color="secondary"
          className={props.classes.primaryButton}
          onClick={props.onClickPrimaryButton}>
          {props.primaryButton}
        </Button>
      )}
    </Toolbar>
    <div className={props.classes.inner}>{props.children}</div>
  </Paper>
);

Frame.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  primaryButton: PropTypes.string,
  onClickPrimaryButton: PropTypes.func,
  secondaryButton: PropTypes.string,
  onClickSecondaryButton: PropTypes.func,
};

Frame.defaultProps = {
  primaryButton: '',
  onClickPrimaryButton: () => {},
  secondaryButton: '',
  onClickSecondaryButton: () => {},
};

export default withStyles(styles)(Frame);
