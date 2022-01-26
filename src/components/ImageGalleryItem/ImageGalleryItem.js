import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import css from './ImageGalleryItem.module.css';
import 'react-loading-skeleton/dist/skeleton.css';

export const ImageGalleryItem = ({
  image: { webformatURL, largeImageURL, tags, webformatHeight, webformatWidth },
  onShowModal,
  showSkeleton,
}) => {
  return (
    <li className={css.Item}>
      {showSkeleton ? (
        <Skeleton className={css.Skeleton} />
      ) : (
        <img
          className={css.Image}
          src={webformatURL}
          alt={tags}
          width={webformatWidth}
          height={webformatHeight}
          onClick={() => onShowModal({ largeImageURL, tags })}
        />
      )}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
    tags: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.string,
    ]),
  }).isRequired,
  status: PropTypes.string,
  onShowModal: PropTypes.func,
};
