import { Searchbar } from 'components';
import css from '../App.module.css';

export const AppRejectedView = ({ query, error, onSubmit }) => {
  return (
    <div className={css.App}>
      <Searchbar onSubmit={onSubmit} />

      <p className={css.ErrorMessage}>
        Sorry, no images for <b>{query}</b>
      </p>
    </div>
  );
};
