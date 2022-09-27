import React from 'react';
import LikedItem from './LikedItem';
import './ReviewedItem.scss';

const ReviewedItem = () => {
  return (
    <div className="reviewedItem">
      <LikedItem />
      <div className="reviewedItemComment">
        작성했던 후기 3줄 정도 보이게 할거에요
        냠냠냠있었어요sdfsdfsdfsdfsdfsdfsdfsdhfsdjfksdlkfjkldsjklfjskldjfklㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ하하하하호호호호호홓
        ㅇㄴ리ㅏㅓㄴ이ㅏ러니ㅏㅇ러ㅏ닝러ㅣㅏㄴㅇ러ㅣㅏㄴ어
      </div>
    </div>
  );
};

export default ReviewedItem;
