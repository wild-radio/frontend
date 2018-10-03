// React & Redux
import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { withStyles, IconButton, Snackbar as SnackbarMU, SnackbarContent } from '@material-ui/core';
import { Close } from '@material-ui/icons';

const styles = {
  snackbar: {
    marginBottom: 16,
  },
};

const Snackbar = props => {
  let background;
  switch (props.snackbar.type) {
    case 'success':
      background = '#0baf0b';
      break;
    case 'error':
      background = '#e42626';
      break;
    case 'info':
      background = '#3084da';
      break;
    case 'warn':
      background = '#e6c62a';
      break;
    default:
      break;
  }

  return (
    <SnackbarMU
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={props.snackbar.open}>
      <SnackbarContent
        className={props.classes.snackbar}
        style={{ background }}
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
