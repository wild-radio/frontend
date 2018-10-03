// React & Redux
import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import { Popover as PopoverMU } from '@material-ui/core';

const styles = {
  popover: {
    marginTop: 14,
  },
  inner: {
    width: 320,
    minHeight: 300,
  },
};

const Popover = props => {
  const anchorEl = document.getElementById('popover-button');

  return (
    <PopoverMU
      open={props.popover.open}
      onClose={props.appActions.togglePopover}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      className={props.classes.popover}>
      <div className={props.classes.inner}>TODO: popover</div>
    </PopoverMU>
  );
};

Popover.propTypes = {
  popover: PropTypes.object.isRequired,
  appActions: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Popover);
