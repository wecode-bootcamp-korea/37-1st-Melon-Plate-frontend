import React, { useEffect, useState } from 'react';
import ReviewListMain from './ReviewListMain';
import ReviewListTop from './ReviewListTop';
import API from '../../config';
import './ReviewList.scss';

const ReviewList = ({ setReviewCount, storeId }) => {
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

  useEffect(() => {
    setReviewCount(data.length);
  }, []);

  const filterItemIncreaseReverse = event => {
    const rateSorting = [...data];
    const rateCompare = key => (a, b) => {
      return a[key] - b[key];
    };
    rateSorting.sort(rateCompare('rate'));
    setData(rateSorting);
  };
  const resetSort = async () => {
    await fetch(`${API.detail}/${storeId}/reviews`, {
      method: 'GET',
      headers: {
        authorization: Token,
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(res => (console.log(res), setData(res)));
  };

  console.log(`${API.detail}/${storeId}/reviews`);

  useEffect(() => {
    fetch(`${API.detail}/${storeId}/reviews`, {
      method: 'GET',
      headers: {
        authorization: Token,
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(res => (console.log(res), setData(res)));
  }, []);

  return (
    <div className="reviewList">
      <ReviewListTop
        reviewCount={data[0]?.reviewCount}
        filterItemIncrease={filterItemIncrease}
        filterItemIncreaseReverse={filterItemIncreaseReverse}
        resetSort={resetSort}
      />

      {data &&
        data.map(list => {
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
