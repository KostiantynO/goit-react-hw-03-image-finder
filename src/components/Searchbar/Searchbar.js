import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { ToastContainer, toast } from 'react-toastify';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  static propTypes = { onSubmit: PropTypes.func.isRequired };

  state = { query: '' };

  handleQueryChange = event =>
    this.setState({ query: event.currentTarget.value.toLowerCase() });

  handleSubmit = event => {
    event.preventDefault();
    const query = this.state.query.trim();

    if (query === '') {
      return toast.error('Введите запрос.');
    }

    this.props.onSubmit(query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <ImSearch className={css.SearchIcon} />
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            name="query"
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            onChange={this.handleQueryChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
