import { TailSpin } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import css from './Loader.module.css';

export const Loader = () => (
  <div className={css.Wrapper}>
    <TailSpin className={css.Loader} />
  </div>
);
