import { Searchbar, ImageGallery, Button, Modal } from 'components';
import { AiOutlineClose } from 'react-icons/ai';
import css from '../App.module.css';

import PropTypes from 'prop-types';

export const AppResolvedView = ({
  query,
  page,
  perPage,
  images,
  totalHits,
  showModal,
  onSubmit,
  onShowModal,
  onLoadMoreImages,
  onClose,
}) => {
  // 1. Длина массива равна нулю
  const imagesInArray = images?.length > 0;

  // 2. Предыдущая страница больше или равна следующей.
  const hasNextPage = totalHits > page * perPage;

  // 3. Есть ли картинка для модалки в стейте
  const needToOpenModal = showModal && Object.keys(showModal).length > 0;

  return (
    <div className={css.App}>
      <Searchbar onSubmit={onSubmit} />

      {!imagesInArray && (
        <p className={css.ErrorMessage}>
          No results for <b>"{query}"</b>. Please try another query.
        </p>
      )}

      {imagesInArray && (
        <>
          <ImageGallery images={images} onShowModal={onShowModal} />
          <Button hasNextPage={hasNextPage} onLoadMoreImages={onLoadMoreImages}>
            Load More
          </Button>

          {needToOpenModal && (
            <Modal onClose={onClose}>
              <button
                type="button"
                className={css.CloseBtn}
                autoFocus
                onClick={onClose}
              >
                <AiOutlineClose className={css.CloseIcon} />
              </button>

              <img src={showModal.largeImageURL} alt={showModal.alt} />
            </Modal>
          )}
        </>
      )}
    </div>
  );
};

AppResolvedView.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  totalHits: PropTypes.number.isRequired,
  showModal: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  onSubmit: PropTypes.func.isRequired,
  onShowModal: PropTypes.func.isRequired,
  onLoadMoreImages: PropTypes.func.isRequired,
};
