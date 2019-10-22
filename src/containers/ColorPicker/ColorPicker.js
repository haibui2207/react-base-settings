import React, { useState } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import { COLORS } from '../../constants';

import styles from './colorPicker.styles.js';

const ColorPicker = ({ classes }) => {
  const [backgroundColor, setBackgroundColor] = useState(
    Object.keys(COLORS)[0],
  );

  return (
    <div className={classes.root} style={{ backgroundColor }}>
      <div className={classes.content}>
        <select
          id="select-color"
          className={classes.select}
          onChange={(e) => setBackgroundColor(e.target.value)}
        >
          {Object.keys(COLORS).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
        <span className={classes.text}>{COLORS[backgroundColor]}</span>
      </div>
    </div>
  );
};

ColorPicker.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default injectSheet(styles)(ColorPicker);
