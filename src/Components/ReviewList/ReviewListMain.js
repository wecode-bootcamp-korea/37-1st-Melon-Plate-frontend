import React from 'react';

const ReviewListMain = data => {
  const { profileImg, nickname, reviewDate, reviewText, reviewImg, rate } =
    data;

  return (
    <div className="reviewListMain">
      <span className="reviewListMainLeft">
        <div className="reviewListMainLeftPhoto">
          <img
            src={profileImg}
            className="reviewListMainLeftPhotos"
            alt="melonImg"
          />
        </div>
        <div className="reviewListMainLeftName">{nickname}</div>
        <div className="reviewListMainLeftReviews">
          <i className="fa-solid fa-pen" />
          0
          <i className="fa-solid fa-people-group" />0
        </div>
      </span>
      <span className="reviewListMainCenter">
        <div className="reviewListMainCenterDay">{reviewDate}</div>
        <div className="reviewListMainCenterReview">{reviewText}</div>
        <div className="reviewListMainCenterPhoto">
          {reviewImg.map(e => {
            return <img src={e} key={e.id} alt="melonImg" />;
          })}
        </div>
      </span>
      <span className="reviewListMainRight">
        <img
          src={`${process.env.PUBLIC_URL}/images/20596969-F8C3-4D15-9D89-16ECCE2090F5.jpeg`}
          className="reviewListMainRightMelon"
          alt="melonImg"
        />
        <div className="reviewListMainRightPoint">{rate}</div>
      </span>
    </div>
  );
};

export default ReviewListMain;
