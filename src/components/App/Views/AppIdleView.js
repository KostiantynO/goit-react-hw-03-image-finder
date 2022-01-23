import { Searchbar } from 'components';
import css from '../App.module.css';

export const AppIdleView = ({ onSubmit }) => {
  return (
    <div className={css.App}>
      <Searchbar onSubmit={onSubmit} />
    </div>
  );
};
