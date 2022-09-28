import React from 'react';
import './LikedItem.scss';

const LikedItem = ({ item }) => {
  return (
    <div className="likedItem">
      <div className="likedStoreLocation">{item.address}</div>
      <div className="likedStoreName">{item.name}</div>
    </div>
  );
};

export default LikedItem;
