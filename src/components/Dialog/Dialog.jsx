// React & Redux
import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import {
  Button,
  Dialog as DialogMU,
  DialogActions,
  DialogContent,
  DialogTitle,
  withMobileDialog,
} from '@material-ui/core';

const Dialog = props => (
  <div>
    <DialogMU fullScreen={props.fullScreen} open={props.open} onClose={props.onClickCancel}>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>{props.children}</DialogContent>
      <DialogActions>
        {props.cancel && (
          <Button onClick={props.onClickCancel} disabled={props.cancelDisabled} color="primary">
            {props.cancel}
          </Button>
        )}
        {props.confirm && (
          <Button
            onClick={props.onClickConfirm}
            disabled={props.confirmDisabled}
            color="primary"
            autoFocus>
            {props.confirm}
          </Button>
        )}
      </DialogActions>
    </DialogMU>
  </div>
);

Dialog.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  confirm: PropTypes.string,
  onClickConfirm: PropTypes.func,
  confirmDisabled: PropTypes.bool,
  cancel: PropTypes.string,
  onClickCancel: PropTypes.func,
  cancelDisabled: PropTypes.bool,
  open: PropTypes.bool,
  fullScreen: PropTypes.bool.isRequired,
};

Dialog.defaultProps = {
  children: '',
  confirm: '',
  onClickConfirm: () => {},
  confirmDisabled: false,
  cancel: '',
  onClickCancel: () => {},
  cancelDisabled: false,
  open: false,
};

export default withMobileDialog()(Dialog);
