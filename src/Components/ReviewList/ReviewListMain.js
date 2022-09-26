import React from 'react';

const reviewListMain = data => {
  const { profileImg, nickname, reviewDate, reviewText, reviewImg, rate } =
    data;

  return (
    <div className="reviewListMain">
      <span className="mainLeft">
        <div className="mainLeftPhoto">
          <img src={profileImg} className="mainLeftPhotos" alt="melonImg" />
        </div>
        <div className="mainLeftName">{nickname}</div>
        <div className="mainLeftReviews">
          <i className="fa-solid fa-pen" />
          0
          <i className="fa-solid fa-people-group" />0
        </div>
      </span>
      <span className="mainCenter">
        <div className="mainCenterDay">{reviewDate}</div>
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
        <div className="mainRightPoint">{rate}</div>
      </span>
    </div>
  );
};

export default reviewListMain;
