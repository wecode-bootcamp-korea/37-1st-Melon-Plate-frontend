import React from 'react';
import './SearchedResultItem.scss';

const SearchedResultItem = ({ data, onClick }) => {
  return (
    <div className="searchedResultItem" onClick={onClick}>
      <span>{data?.name}</span>
      <span>
        {data?.category} - {data?.address}
      </span>
    </div>
  );
};

export default SearchedResultItem;
