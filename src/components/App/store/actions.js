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

export const changeCamera = camera => ({ type: 'app/camera/change', payload: camera });

export const setSistemas = sistemas => ({ type: 'app/sistemas/set', payload: sistemas });
