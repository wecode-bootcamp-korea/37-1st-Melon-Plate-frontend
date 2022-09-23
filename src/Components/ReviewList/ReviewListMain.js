import React from 'react';
import GreenMelon from '../../Pages/ReviewWrite/GreenMelon';

const ReviewListMain = data => {
  console.log(data);
  return (
    <div className="reviewListMain">
      <span className="reviewListMainLeft">
        <div className="reviewListMainLeftPhoto">
          <img src={data.profileImg} className="reviewListMainLeftPhotos" />
        </div>
        <div className="reviewListMainLeftName">{data.nickname}</div>
        <div className="reviewListMainLeftReviews">
          <i className="fa-solid fa-pen" />
          0
          <i className="fa-solid fa-people-group" />0
        </div>
      </span>
      <span className="reviewListMainCenter">
        <div className="reviewListMainCenterDay">{data.reviewDate}</div>
        <div className="reviewListMainCenterReview">{data.reviewText}</div>
        <div className="reviewListMainCenterPhoto">
          {data.reviewImg.map(e => {
            return <img src={e} key={e.id} />;
          })}
        </div>
      </span>
      <span className="reviewListMainRight">
        <img
          src={`${process.env.PUBLIC_URL}/images/20596969-F8C3-4D15-9D89-16ECCE2090F5.jpeg`}
          className="reviewListMainRightMelon"
        />
        <div className="reviewListMainRightPoint">{data.rate}</div>
      </span>
    </div>
  );
};

export default ReviewListMain;
