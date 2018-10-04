// React & Redux
import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'grid',
    [theme.breakpoints.down('sm')]: { gridTemplateColumns: '1fr' },
    [theme.breakpoints.up('md')]: { gridTemplateColumns: '1fr 1fr' },
    [theme.breakpoints.up('lg')]: { gridTemplateColumns: '1fr 1fr 1fr' },
    gridGap: '16px',
    justifyItems: 'center',
  },
});

const ImageCardList = props => <div className={props.classes.root}>{props.children}</div>;

ImageCardList.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageCardList);
