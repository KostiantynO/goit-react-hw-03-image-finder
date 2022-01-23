import PropTypes from 'prop-types';
import { ImageGallery, Loader, Searchbar } from 'components';
import css from '../App.module.css';

export const AppPendingView = ({ page, images, status }) => {
  const nextPage = page > 1;

  return (
    <div className={css.App}>
      <Searchbar status={status} />

      {nextPage && <ImageGallery images={images} />}

      <Loader />
    </div>
  );
};

AppPendingView.propTypes = {
  page: PropTypes.number.isRequired,
  images: PropTypes.array,
  status: PropTypes.string.isRequired,
};
