export const openDrawer = () => ({
  type: 'app/drawer/open',
});

export const closeDrawer = () => ({
  type: 'app/drawer/close',
});

export const togglePopover = () => ({
  type: 'app/popover/toggle',
});

export const hideSnackbar = () => ({
  type: 'app/snackbar/hide',
});

export const showSnackbar = (message = '', type) => ({
  type: 'app/snackbar/show',
  payload: {
    message,
    type,
  },
});
