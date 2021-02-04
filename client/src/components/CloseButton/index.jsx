/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const CloseButton = ({ onClose }) => (
  <button className={styles.close} type="button" onClick={() => onClose()}>&times;</button>
);

CloseButton.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default CloseButton;
