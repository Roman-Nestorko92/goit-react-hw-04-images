import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import s from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  const handleChange = ({ currentTarget }) => {
    setQuery(currentTarget.value);
  };

  return (
    <header className={s.searchBar}>
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.searchFormButton}>
          <FaSearch size={12} />
          {/* <span className={s.searchFormButtonLabel}>Search</span> */}
        </button>

        <input
          className={s.searchFormInput}
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={'search'}
        />
      </form>
    </header>
  );
};

export default Searchbar;
