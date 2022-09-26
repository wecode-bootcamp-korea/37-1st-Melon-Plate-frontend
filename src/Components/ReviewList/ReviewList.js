import React, { useEffect, useState } from 'react';
import ReviewListMain from './ReviewListMain';
import ReviewListTop from './ReviewListTop';
import './ReviewList.scss';

const ReviewList = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('/Mock/Mock.json')
      .then(res => res.json())
      .then(res => setData(res));
  }, []);
  const test = [...data];
  return (
    <div className="reviewList">
      <ReviewListTop />

      {test.map(e => {
        return (
          <ReviewListMain
            reviewText={e.reviewText}
            rate={e.rate}
            nickname={e.nickname}
            reviewImg={e.reviewImg}
            profileImg={e.profileImg}
            reviewDate={e.reviewDate}
            key={e.id}
          />
        );
      })}
    </div>
  );
};

export default ReviewList;
