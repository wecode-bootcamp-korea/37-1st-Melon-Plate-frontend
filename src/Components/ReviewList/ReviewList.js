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
  // <ReviewListTop reviewCount={data[0]?.reviewCount} />
  return (
    <div className="reviewList">
      {data?.map(list => {
        const {
          reviewText,
          rate,
          nickname,
          reviewImg,
          profileImg,
          reviewDate,
          reviews,
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
            reviews={reviews}
            key={id}
          />
        );
      })}
    </div>
  );
};

export default ReviewList;
