import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MenuItem from './MenuItem';
import './StoreList.scss';

const StoreList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onClick = () => {
    searchParams.set('address', '강남');
    searchParams.set('menu', '삼겹살');
    setSearchParams(searchParams);
  };

  useEffect(() => {}, []);

  return (
    <div className="storeList">
      <div className="storeListContainer">
        <div className="storeListTitle">
          <span onClick={onClick}>믿고 먹는 인기 맛집 ! </span>
          <span>조회수가 높은 식당을 한눈에 확인하세요</span>
        </div>
        <div className="storeHashTags">
          {HASHTAG.map(title => (
            <button className="storeHashTagItem">#{title}</button>
          ))}
        </div>
        <span>to string : ?{searchParams.toString()}</span>

        <div className="menuItemList">
          <MenuItem />
        </div>
      </div>
    </div>
  );
};

export default StoreList;

const HASHTAG = [
  '전체',
  '선릉',
  '주점',
  '파스타',
  '떡볶이',
  '해장',
  '데이트',
  '회식 맛집',
];

const STORE_SORT = [
  { menu: '삼겹살', limit: '10' },
  { menu: '파스타', limit: '10' },
  { menu: '치킨', limit: '10' },
];
