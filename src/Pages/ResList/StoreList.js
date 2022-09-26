import React from 'react';
import MenuItem from './MenuItem';
import './StoreList.scss';

const StoreList = () => {
  return (
    <div className="storeList">
      <div className="storeListContainer">
        <div className="storeListTitle">
          <span>믿고 먹는 인기 맛집 ! </span>
          <span>조회수가 높은 식당을 한눈에 확인하세요</span>
        </div>
        <div className="storeHashTags">
          {HASHTAG.map(title => (
            <button className="storeHashTagItem">#{title}</button>
          ))}
        </div>

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
