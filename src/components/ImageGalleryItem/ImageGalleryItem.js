import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  image: { webformatURL, largeImageURL, tags },
  onShowModal,
}) => {
  const alt = tags
    ? tags.length > 0 && Array.isArray(tags)
      ? tags.join(', ')
      : tags.length > 0 && typeof tags === 'object'
      ? Object.values(tags).join(', ')
      : tags
    : 'image';

  return (
    <li className={css.Item}>
      <img
        className={css.Image}
        src={webformatURL}
        alt={alt}
        onClick={() => onShowModal({ largeImageURL, alt })}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.string,
    ]),
  }).isRequired,

  onShowModal: PropTypes.func,
};
