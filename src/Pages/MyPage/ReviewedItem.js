import React from 'react';
import './ReviewedItem.scss';

const ReviewedItem = ({ item }) => {
  return (
    <div className="reviewedItem">
      <div className="reviewedItemTitle">
        <div className="likedStoreLocation">{item.address}</div>
        <div className="likedStoreName">{item.name}</div>
      </div>
      <div className="reviewedItemComment">{item.text}</div>
    </div>
  );
};

export default ReviewedItem;
