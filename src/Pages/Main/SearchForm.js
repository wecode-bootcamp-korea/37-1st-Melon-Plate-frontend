import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchedResult from './SearchedResult';
import './SearchForm.scss';

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const accessToken = localStorage.getItem('TOKEN');

  const termChange = e => {
    setSearchTerm(e.target.value);
  };

  const termSubmit = e => {
    e.preventDefault();
    navigate(`/resultlist?query=${searchTerm}`);
  };

  useEffect(() => {
    fetch(
      `http://172.20.10.11:3000/main/search?query=${searchTerm}&filter=&price=&location=&category=&menu=&offDay=&limit=`,
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
      {/* <SearchedResult data={data} accessToken={accessToken} /> */}
    </div>
  );
};

export default SearchForm;
