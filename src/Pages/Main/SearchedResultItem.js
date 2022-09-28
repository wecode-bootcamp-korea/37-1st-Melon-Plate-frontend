import React from 'react';
import { Link } from 'react-router-dom';
import './SearchedResultItem.scss';

const SearchedResultItem = ({ data }) => {
  return (
    <Link to={`/detail/${data.id}`}>
      <div className="searchedResultItem">
        <span>{data?.name}</span>
        <span>
          {data?.category} - {data?.address}
        </span>
      </div>
    </Link>
  );
};

export default SearchedResultItem;
