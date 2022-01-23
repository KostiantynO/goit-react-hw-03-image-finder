import PropTypes from 'prop-types';
import { Searchbar } from 'components';
import css from '../App.module.css';

export const AppIdleView = ({ onSubmit }) => {
  return (
    <div className={css.App}>
      <Searchbar onSubmit={onSubmit} />
    </div>
  );
};

AppIdleView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
