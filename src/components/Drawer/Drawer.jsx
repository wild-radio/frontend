import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Drawer as DrawerMU,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { AddAPhoto, PhotoAlbum, Settings } from '@material-ui/icons';

const styles = {
  list: {
    width: 'auto',
  },
};

const Drawer = props => {
  const { classes } = props;

  const closeDrawer = () => console.log('closeDrawer');

  return (
    <DrawerMU open={true} onClose={closeDrawer}>
      <div tabIndex={0} role="button" onClick={closeDrawer} onKeyDown={closeDrawer}>
        <div className={classes.list}>
          <List>
            <div>
              <ListItem button>
                <ListItemIcon>
                  <AddAPhoto />
                </ListItemIcon>
                <ListItemText primary="Novas capturas" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon>
                  <PhotoAlbum />
                </ListItemIcon>
                <ListItemText primary="Catálogos" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Configurar câmera" />
              </ListItem>
            </div>
          </List>
        </div>
      </div>
    </DrawerMU>
  );
};

Drawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Drawer);
