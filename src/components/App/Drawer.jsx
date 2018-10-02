// React & Redux
import React from 'react';
import PropTypes from 'prop-types';
// Material UI
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
  const { appActions, routesThunks, classes, drawer } = props;

  return (
    <DrawerMU open={drawer.open} onClose={appActions.closeDrawer}>
      <div
        tabIndex={0}
        role="button"
        onClick={appActions.closeDrawer}
        onKeyDown={appActions.closeDrawer}>
        <div className={classes.list}>
          <List>
            <div>
              <ListItem button onClick={routesThunks.novasCapturas}>
                <ListItemIcon>
                  <AddAPhoto />
                </ListItemIcon>
                <ListItemText primary="Novas capturas" />
              </ListItem>
              <Divider />
              <ListItem button onClick={routesThunks.catalogos}>
                <ListItemIcon>
                  <PhotoAlbum />
                </ListItemIcon>
                <ListItemText primary="Catálogos" />
              </ListItem>
              <Divider />
              <ListItem button onClick={routesThunks.configuracoes}>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Configurações" />
              </ListItem>
            </div>
          </List>
        </div>
      </div>
    </DrawerMU>
  );
};

Drawer.propTypes = {
  appActions: PropTypes.object.isRequired,
  routesThunks: PropTypes.object.isRequired,
  drawer: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Drawer);
