import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images = [{}], onToggleModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onToggleModal={onToggleModal}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
