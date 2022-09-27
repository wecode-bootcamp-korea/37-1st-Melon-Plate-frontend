import React from 'react';
import SearchedResultItem from './SearchedResultItem';
import './SearchedResult.scss';

const SearchedResult = () => {
  return (
    <div className="searchedResult">
      <SearchedResultItem />
      <SearchedResultItem />
      <SearchedResultItem />
      <SearchedResultItem />
    </div>
  );
};

export default SearchedResult;
