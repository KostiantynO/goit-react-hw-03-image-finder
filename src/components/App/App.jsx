import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { TailSpin } from 'react-loader-spinner';
import { Button, ImageGallery, Searchbar } from 'components';
import 'react-toastify/dist/ReactToastify.css';
// import { createGlobalStyle } from 'styled-components';

import './App.css';
import { getImages } from 'services';

const Item = ({ id, image, description }) => {
  return (
    <li key={id} className="Image">
      <img src={image} alt={description} />
    </li>
  );
};

export class App extends Component {
  state = { page: 1, query: '', images: [], showModal: false, loading: false };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (page > prevState.page) {
      this.setState({ loading: true });

      getImages(query, page)
        .then(res => res.json())
        .then(({ hits }) => {
          this.setState(({ images }) => ({
            images: [...images, ...hits],
            loading: false,
          }));
        });
    }

    if (query !== prevState.query) {
      this.setState({ loading: true });

      getImages(query, page)
        .then(res => res.json())
        .then(res => this.setState({ images: res.hits, loading: false }));
    }
  }

  handleSearchSubmit = query => {
    const prevQuery = this.state.query;

    if (prevQuery !== query) {
      this.setState({ query });
    }
  };

  // LoadMoreImages
  onLoadMore = () => this.setState(({ page }) => ({ page: page + 1 }));

  onToggleModal = e => {
    e.preventDefault();

    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { images, loading } = this.state;
    const hasImages = images?.length > 0;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchSubmit} />

        {hasImages && (
          <ImageGallery images={images} onToggleModal={this.onToggleModal} />
        )}

        {hasImages && !loading && (
          <Button type="button" onLoadMore={this.onLoadMore}>
            Load More
          </Button>
        )}

        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
