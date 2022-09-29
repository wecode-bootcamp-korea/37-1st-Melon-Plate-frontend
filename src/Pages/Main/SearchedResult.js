import React from 'react';
import SearchedResultItem from './SearchedResultItem';
import './SearchedResult.scss';
import { useNavigate } from 'react-router-dom';

const SearchedResult = ({ data, accessToken }) => {
  const navigate = useNavigate();
  const random = Math.floor(Math.random() * data?.length);
  const nonMemberClick = () => {
    alert('로그인이 필요합니다');
    navigate('/logintap');
  };
  const onItemClick = () => {
    navigate('/detail/');
  };

  return (
    <div className="searchedResult">
      {
        accessToken
          ? data?.map(data => (
              <SearchedResultItem
                data={data}
                key={data?.id}
                onClick={onItemClick}
              />
            ))
          : null
        // <SearchedResult data={data[random]} onClick={nonMemberClick} />
      }
    </div>
  );
};

export default SearchedResult;
