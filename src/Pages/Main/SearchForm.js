import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SearchedResult from './SearchedResult';
import './SearchForm.scss';

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const termChange = e => {
    setSearchTerm(e.target.value);
  };

  const termSubmit = e => {
    e.preventDefault();

    navigate('/resultlist');
  };

  return (
    <form className="searchForm" onSubmit={termSubmit}>
      <div className="searchBar">
        <i className="searchIcon fa-solid fa-magnifying-glass" />
        <input
          className="searchInput"
          placeholder="식당, 음식 검색"
          onChange={termChange}
          value={searchTerm}
        />
        <i
          className="searchXButton fa-x fa-solid"
          onClick={() => {
            setSearchTerm('');
          }}
        />
      </div>
      <button className="searchButton">검색</button>
      {/* <SearchedResult /> */}
    </form>
  );
};

export default SearchForm;
