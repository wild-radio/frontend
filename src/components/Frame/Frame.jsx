// React & Redux
import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import {
  withStyles,
  Button,
  IconButton,
  Tooltip,
  Typography,
  Toolbar,
  Paper,
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

const styles = theme => ({
  toolbar: {
    background: theme.palette.primary.dark,
  },
  paper: {
    maxWidth: 1024,
    minHeight: 500,
    margin: '80px auto 16px auto',
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
  backButton: {
    color: theme.palette.common.white,
    marginLeft: -16,
  },
});

const Frame = props => (
  <Paper className={props.classes.paper}>
    <Toolbar className={props.classes.toolbar}>
      {props.enableBackButton && (
        <Tooltip title="Voltar">
          <IconButton
            color="inherit"
            disableRipple
            className={props.classes.backButton}
            onClick={props.onClickBackButton}>
            <ArrowBack />
          </IconButton>
        </Tooltip>
      )}
      <Typography variant="title" className={props.classes.title}>
        {props.title}
      </Typography>
      {props.secondaryButton && (
        <Button className={props.classes.secondaryButton} onClick={props.onClickSecondaryButton}>
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
  enableBackButton: PropTypes.bool,
  onClickBackButton: PropTypes.func,
};

Frame.defaultProps = {
  primaryButton: '',
  onClickPrimaryButton: () => {},
  secondaryButton: '',
  onClickSecondaryButton: () => {},
  enableBackButton: true,
  onClickBackButton: () => {},
};

export default withStyles(styles)(Frame);
