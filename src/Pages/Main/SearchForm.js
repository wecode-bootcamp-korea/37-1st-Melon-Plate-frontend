import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchedResult from './SearchedResult';
import API from '../../config';
import './SearchForm.scss';

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const accessToken = localStorage.getItem('TOKEN');
  const [focused, setFocused] = useState(false);

  const termChange = e => {
    setSearchTerm(e.target.value);
    setFocused(true);
  };

  const termSubmit = e => {
    e.preventDefault();
    navigate(
      `/resultlist?query=${searchTerm}&filter=&price=&location=&category=&menu=&limit=&offDay`
    );
  };

  useEffect(() => {
    fetch(
      `${API.resultList}?query=${searchTerm}&filter=&price=&location=&category=&menu=&limit=&offDay`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      }
    )
      .then(res => res.json())
      .then(result => (console.log(result.data), setData(result.data)));
  }, [searchTerm]);

  return (
    <div className="searchForm">
      <form className="searchFormSet" onSubmit={termSubmit}>
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
      </form>
      {focused && <SearchedResult data={data} accessToken={accessToken} />}
    </div>
  );
};

export default SearchForm;
