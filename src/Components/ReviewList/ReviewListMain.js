import React from 'react';

const reviewListMain = data => {
  const { profileImg, nickname, reviewDate, reviewText, reviewImg, rate } =
    data;

  return (
    <div className="reviewListMain">
      <span className="MainLeft">
        <div className="MainLeftPhoto">
          <img src={profileImg} className="MainLeftPhotos" alt="melonImg" />
        </div>
        <div className="MainLeftName">{nickname}</div>
        <div className="MainLeftReviews">
          <i className="fa-solid fa-pen" />
          0
          <i className="fa-solid fa-people-group" />0
        </div>
      </span>
      <span className="MainCenter">
        <div className="MainCenterDay">{reviewDate}</div>
        <div className="MainCenterReview">{reviewText}</div>
        <div className="MainCenterPhoto">
          {reviewImg.map(e => {
            return <img src={e} key={e.id} alt="melonImg" />;
          })}
        </div>
      </span>
      <span className="MainRight">
        <img
          src={`${process.env.PUBLIC_URL}/images/20596969-F8C3-4D15-9D89-16ECCE2090F5.jpeg`}
          className="MainRightMelon"
          alt="melonImg"
        />
        <div className="MainRightPoint">{rate}</div>
      </span>
    </div>
  );
};

export default reviewListMain;
