import React, { useEffect, useState } from 'react';
import ReviewListMain from './ReviewListMain';
import ReviewListTop from './ReviewListTop';
import './ReviewList.scss';

const ReviewList = () => {
  const [data, setData] = useState([]);
  const filterItemIncrease = event => {
    const priceSorting = [...data];
    const priceCompare = key => (a, b) => {
      return b[key] - a[key];
    };
    priceSorting.sort(priceCompare('rate'));
    setData(priceSorting);
  };
  const filterItemIncreaseReverse = event => {
    const priceSorting = [...data];
    const priceCompare = key => (a, b) => {
      return a[key] - b[key];
    };
    priceSorting.sort(priceCompare('rate'));
    setData(priceSorting);
  };
  const arr = async () => {
    await fetch('/Mock/Mock.json')
      .then(res => res.json())
      .then(res => setData(res));
  };

  useEffect(() => {
    fetch('/Mock/Mock.json')
      .then(res => res.json())
      .then(res => setData(res));
  }, []);

  return (
    <div className="reviewList">
      <ReviewListTop
        reviewCount={data[0]?.reviewCount}
        filterItemIncrease={filterItemIncrease}
        filterItemIncreaseReverse={filterItemIncreaseReverse}
        arr={arr}
      />

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
