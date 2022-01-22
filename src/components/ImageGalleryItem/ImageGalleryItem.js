import PropTypes from 'prop-types';

import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  image: { webformatURL, largeImageURL, tags },
  onToggleModal,
}) => (
  <li className={css.Item}>
    <img
      className={css.Image}
      src={webformatURL}
      alt={tags}
      onToggleModal={onToggleModal}
    />
  </li>
);

/*
       <ImageGalleryItem
          key={image.id}
          image={image}
          onToggleModal={onToggleModal}
        />
*/

/*
collections: 10762
comments: 420
downloads: 393323
id: 736877
imageHeight: 1282
imageSize: 97150
imageWidth: 1920
largeImageURL: "https://pixabay.com/get/g82a2d6de65a4005634488ba13db5c4393ec875d5dc288b999f81a481dc2fa232a930ab1460534fbf4472b5bb747234e83a78cd201c8a207ed649d34440a22e4b_1280.jpg"
likes: 2443
pageURL: "https://pixabay.com/photos/tree-cat-silhouette-moon-full-moon-736877/"
previewHeight: 100
previewURL: "https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_150.jpg"
previewWidth: 150
tags: "tree, cat, silhouette"
type: "photo"
user: "Bessi"
userImageURL: "https://cdn.pixabay.com/user/2019/04/11/22-45-05-994_250x250.jpg"
user_id: 909086
views: 843672
webformatHeight: 427
webformatURL: "https://pixabay.com/get/gbf3826cfbea7d96d6ad19bf3edfa7dbb444d1d5dfb6a7d6c2034c4a12c054b91e5209a9326c870808f1a1fd17d5fc4c1_640.jpg"
webformatWidth: 640

*/

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  tags: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  onToggleModal: PropTypes.func.isRequired,
};
