import React from 'react';
import SearchedResultItem from './SearchedResultItem';
import './SearchedResult.scss';

const SearchedResult = ({ data }) => {
  return (
    <div className="searchedResult">
      {/* <SearchedResultItem data={data} /> */}
      {data.map(data => (
        <SearchedResultItem data={data} key={data.id} />
      ))}
    </div>
  );
};

export default SearchedResult;
