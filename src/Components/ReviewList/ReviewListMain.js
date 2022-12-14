import React from 'react';

const reviewListMain = data => {
  const {
    profileImg,
    nickname,
    reviewDate,
    reviewText,
    reviewImg,
    rate,
    reviews,
  } = data;
  const date = new Date(reviewDate);
  const ratePoint = Math.floor(rate);
  return (
    <div className="reviewListMain">
      <span className="mainLeft">
        <div className="mainLeftPhoto">
          <img src={profileImg} className="mainLeftPhotos" alt="melonImg" />
        </div>
        <div className="mainLeftName">{nickname}</div>
        <div className="mainLeftReviews">
          <i className="fa-solid fa-pen" />
          {reviews}
          <i className="fa-solid fa-people-group" />
          123
        </div>
      </span>
      <span className="mainCenter">
        <div className="mainCenterDay">
          {date.getFullYear() +
            '-' +
            (date.getMonth() + 1) +
            '-' +
            date.getDay()}
        </div>
        <div className="mainCenterReview">{reviewText}</div>
        <div className="mainCenterPhoto">
          {reviewImg.map(e => {
            return <img src={e} key={e.id} alt="melonImg" />;
          })}
        </div>
      </span>
      <span className="mainRight">
        <img
          src={`${process.env.PUBLIC_URL}/images/20596969-F8C3-4D15-9D89-16ECCE2090F5.jpeg`}
          className="mainRightMelon"
          alt="melonImg"
        />
        <div className="mainRightPoint">{ratePoint}</div>
      </span>
    </div>
  );
};

export default reviewListMain;
