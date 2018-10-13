// React & redux
import React from 'react';
import PropTypes from 'prop-types';

// Material-UI
import { withStyles, Typography } from '@material-ui/core';
import { Slider } from '@material-ui/lab';

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '16px',
  },
  horizontal: {
    width: 300,
  },
  vertical: {
    width: 300,
    height: 300,
  },
  verticalSlider: {
    width: 'auto',
  },
  thumb: {
    width: 16,
    height: 16,
    background: theme.palette.primary.dark,
  },
  value: {
    color: theme.palette.common.darkGray,
    position: 'relative',
    width: 64,
  },
  horizontalValue: {
    bottom: -24,
  },
  verticalValue: {
    left: -24,
  },
  trackBefore: { background: theme.palette.primary.light, opacity: 1 },
  trackAfter: { background: theme.palette.primary.light, opacity: 1 },
});

const SliderWrapper = props => (
  <div
    className={`${props.classes.container} ${
      props.classes[props.vertical ? 'vertical' : 'horizontal']
    }`}>
    <Slider
      value={props.input.value}
      onChange={(event, value) => props.input.onChange(value)}
      min={props.min}
      max={props.max}
      step={props.step}
      vertical={props.vertical}
      thumb={
        <Typography
          variant="button"
          className={`${props.classes.value} ${
            props.classes[props.vertical ? 'verticalValue' : 'horizontalValue']
          }`}>{`${props.input.value > 0 ? '+' : ''}${props.input.value}°`}</Typography>
      }
      classes={{
        root: props.vertical && props.classes.verticalSlider,
        thumb: props.classes.thumb,
        trackBefore: props.classes.trackBefore,
        trackAfter: props.classes.trackAfter,
      }}
    />
  </div>
);

SliderWrapper.propTypes = {
  input: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  vertical: PropTypes.bool,
};

SliderWrapper.defaultProps = {
  min: -60,
  max: 60,
  step: 1,
  vertical: false,
};

export default withStyles(styles)(SliderWrapper);
