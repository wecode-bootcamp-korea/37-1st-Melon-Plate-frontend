import React from 'react';
import './LikedItem.scss';

const LikedItem = () => {
  return (
    <div className="likedItem">
      <div className="likedStoreLocation">식당 지역</div>
      <div className="likedStoreName">식당 이름</div>
    </div>
  );
};

export default LikedItem;
