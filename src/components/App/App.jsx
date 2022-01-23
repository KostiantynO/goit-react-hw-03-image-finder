import React, { PureComponent } from 'react';
import { ImageApi } from 'apis';

import {
  AppIdleView,
  AppPendingView,
  AppRejectedView,
  AppResolvedView,
} from 'components/App/Views';

export const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const firstPage = 1;

export class App extends PureComponent {
  state = {
    status: Status.IDLE,
    page: 1,
    perPage: 12,
    query: '',
    images: [],
    totalHits: 0,
    error: null,
    showModal: {},
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    const oldQuery = prevState.query;
    const oldPage = prevState.page;

    if (query !== oldQuery) {
      this.setState({ page: 1, status: Status.PENDING });

      try {
        const { totalHits, hits } = await ImageApi.fetchImages({
          query,
          page: firstPage,
        });

        this.setState({ totalHits, images: hits, status: Status.RESOLVED });
      } catch (error) {
        this.setState({ error, status: Status.REJECTED });
      }
    }

    if (page > oldPage) {
      this.setState({ status: Status.PENDING });

      try {
        const { hits } = await ImageApi.fetchImages({ query: oldQuery, page });

        this.setState(({ images }) => ({
          images: [...images, ...hits],
          status: Status.RESOLVED,
        }));
      } catch (error) {
        this.setState({ error, status: Status.REJECTED });
      }
    }
  }

  handleSubmit = query => {
    const oldQuery = this.state.query;

    if (oldQuery !== query) {
      this.setState({ query });
    }
  };

  loadMoreImages = () => this.setState(({ page }) => ({ page: page + 1 }));
  showModal = showModal => this.setState({ showModal });
  closeModal = () => this.setState({ showModal: {} });

  render() {
    const {
      status,
      page,
      perPage,
      query,
      images,
      totalHits,
      error,
      showModal,
    } = this.state;

    const appIdleProps = { onSubmit: this.handleSubmit };
    const appPendingProps = { page, images, status };
    const appRejectedProps = { query, error };
    const appResolvedProps = {
      query,
      page,
      perPage,
      images,
      totalHits,
      showModal,
      onSubmit: this.handleSubmit,
      onLoadMoreImages: this.loadMoreImages,
      onShowModal: this.showModal,
      onClose: this.closeModal,
    };

    switch (status) {
      case Status.IDLE:
        return <AppIdleView {...appIdleProps} />;

      case Status.PENDING:
        return <AppPendingView {...appPendingProps} />;

      case Status.REJECTED:
        return <AppRejectedView {...appRejectedProps} />;

      case Status.RESOLVED:
        return <AppResolvedView {...appResolvedProps} />;

      default:
        return <div>Error in App Status</div>;
    }
  }
}
