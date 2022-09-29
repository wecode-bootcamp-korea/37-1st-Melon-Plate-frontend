import React, { useEffect, useState } from 'react';
import ReviewListMain from './ReviewListMain';
import ReviewListTop from './ReviewListTop';
import './ReviewList.scss';

const ReviewList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/Mock/Mock.json')
      .then(res => res.json())
      .then(res => setData(res));
  }, []);

  return (
    <div className="reviewList">
      <ReviewListTop />

      {data.map(list => {
        const {
          reviewText,
          rate,
          nickname,
          reviewImg,
          profileImg,
          reviewDate,
          id,
        } = list;
        return (
          <ReviewListMain
            reviewText={reviewText}
            rate={rate}
            nickname={nickname}
            reviewImg={reviewImg}
            profileImg={profileImg}
            reviewDate={reviewDate}
            key={id}
          />
        );
      })}
    </div>
  );
};

export default ReviewList;
