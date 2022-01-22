import { PropTypes } from 'prop-types';
import React from 'react';
import css from './Button.module.css';

export const Button = ({ type = 'button', onLoadMore, ...props }) => (
  <button className={css.Button} type={type} onClick={onLoadMore} {...props} />
);

Button.propTypes = {
  type: PropTypes.string,
  onLoadMore: PropTypes.func.isRequired,
};
