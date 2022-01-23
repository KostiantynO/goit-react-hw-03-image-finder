import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { toast } from 'react-toastify';
import { SearchForm } from 'components';
import { Status } from 'components/App';
import css from './Searchbar.module.css';

export class Searchbar extends PureComponent {
  static propTypes = { onSubmit: PropTypes.func, status: PropTypes.string };

  state = { query: '' };

  inputQueryChange = e => this.setState({ query: e.target.value });

  handleFormSubmit = e => {
    e.preventDefault();

    const normalizedInput = this.state.query.trim().toLowerCase();

    if (normalizedInput === '') {
      return toast.error('Пожалуйста, введите запрос');
    }

    this.props.onSubmit(normalizedInput);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    const searchFormProps = {
      onSubmit: this.handleFormSubmit,
      onChange: this.inputQueryChange,
      disabled: this.props.status === Status.PENDING,
      query,
    };

    return (
      <header className={css.Searchbar}>
        <SearchForm {...searchFormProps} />
      </header>
    );
  }
}
