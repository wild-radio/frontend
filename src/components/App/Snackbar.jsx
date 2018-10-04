// React & Redux
import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { withStyles, IconButton, Snackbar as SnackbarMU, SnackbarContent } from '@material-ui/core';
import { Close } from '@material-ui/icons';

const styles = theme => ({
  success: {
    marginBottom: 16,
    background: theme.palette.snackbar.success,
  },
  error: {
    marginBottom: 16,
    background: theme.palette.snackbar.error,
  },
  info: {
    marginBottom: 16,
    background: theme.palette.snackbar.info,
  },
  warn: {
    marginBottom: 16,
    background: theme.palette.snackbar.warn,
  },
});

const Snackbar = props => {
  return (
    <SnackbarMU
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={props.snackbar.open}>
      <SnackbarContent
        className={props.classes[props.snackbar.type]}
        message={props.snackbar.message}
        action={[
          <IconButton color="inherit" key={0} onClick={props.appThunks.hideSnackbar}>
            <Close className={props.classes.icon} />
          </IconButton>,
        ]}
      />
    </SnackbarMU>
  );
};

Snackbar.propTypes = {
  classes: PropTypes.object.isRequired,
  snackbar: PropTypes.object.isRequired,
  appThunks: PropTypes.object.isRequired,
};

export default withStyles(styles)(Snackbar);
