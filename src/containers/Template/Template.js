import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './template.styles';

const Template = ({ classes }) => <div className={classes.root}>Template</div>;

Template.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(Template);
