import React from 'react';
import './SearchedResultItem.scss';

const SearchedResultItem = ({ data }) => {
  return (
    <div className="searchedResultItem">
      <span>{data.name}</span>
      <span>
        {data.category} - {data.address}
      </span>
    </div>
  );
};

export default SearchedResultItem;
