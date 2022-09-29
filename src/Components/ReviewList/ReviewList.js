import React, { useEffect, useState } from 'react';
import ReviewListMain from './ReviewListMain';
import ReviewListTop from './ReviewListTop';
import './ReviewList.scss';

const ReviewList = () => {
  const [data, setData] = useState([]);
  const Token = localStorage.getItem('TOKEN');
  const filterItemIncrease = event => {
    const rateSorting = [...data];
    const rateCompare = key => (a, b) => {
      return b[key] - a[key];
    };
    rateSorting.sort(rateCompare('rate'));
    setData(rateSorting);
  };
  const filterItemIncreaseReverse = event => {
    const rateSorting = [...data];
    const rateCompare = key => (a, b) => {
      return a[key] - b[key];
    };
    rateSorting.sort(rateCompare('rate'));
    setData(rateSorting);
  };
  const resetSort = async () => {
    await fetch('http://192.168.215.82:3000/detail/10/reviews', {
      method: 'GET',
      headers: { authorization: Token },
    })
      .then(res => res.json())
      .then(res => setData(res));
  };

  useEffect(() => {
    fetch('http://192.168.215.82:3000/detail/10/reviews', {
      method: 'GET',
      headers: { authorization: Token },
    })
      .then(res => res.json())
      .then(res => setData(res));
  }, []);
  return (
    <div className="reviewList">
      <ReviewListTop
        reviewCount={data[0]?.reviewCount}
        filterItemIncrease={filterItemIncrease}
        filterItemIncreaseReverse={filterItemIncreaseReverse}
        resetSort={resetSort}
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
