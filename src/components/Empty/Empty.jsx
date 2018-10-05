// React & Redux
import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { withStyles, Typography } from '@material-ui/core';
import { Cancel } from '@material-ui/icons';

const styles = theme => ({
  container: { textAlign: 'center', marginTop: 64 },
  icon: { width: 64, height: 64, color: theme.palette.common.gray, margin: 'auto' },
  text: { color: theme.palette.common.gray },
});

const Empty = props => (
  <div className={props.classes.container}>
    <Cancel className={props.classes.icon} />
    <Typography variant="title" className={props.classes.text}>
      {props.children}
    </Typography>
  </div>
);

Empty.propTypes = {
  children: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

Empty.defaultProps = {
  children: '',
};

export default withStyles(styles)(Empty);
