// React & Redux
import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { withStyles, Typography, Divider } from '@material-ui/core';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  divider: {
    marginBottom: 16,
  },
};

const Subtitle = props => (
  <div>
    <div className={props.classes.container}>
      <Typography variant="headline">{props.children}</Typography>
      {props.action}
    </div>
    <Divider className={props.classes.divider} />
  </div>
);

Subtitle.propTypes = {
  children: PropTypes.node,
  action: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

Subtitle.defaultProps = {
  children: '',
  action: '',
};

export default withStyles(styles)(Subtitle);
