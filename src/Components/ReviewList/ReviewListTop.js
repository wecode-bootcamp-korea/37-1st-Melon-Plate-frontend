import React, { useEffect, useState } from 'react';

const ReviewListTop = data => {
  return (
    <div className="reviewListTop">
      <span className="topReviewLeft">
        <span className="topReviewLeftText">리뷰 </span>
        <span className="topReviewLeftNumber">({data.reviewCount})</span>
      </span>
      <span className="topReviewRight">
        <span className="topReviewRightBtn">
          <button className="topReviewRightBtns">높은순</button>
          <span>
            <i className="fa-solid fa-arrow-up-wide-short" />
          </span>
        </span>
        <span className="topReviewRightBtn">
          <button className="topReviewRightBtns">낮은순</button>
          <span>
            <i className="fa-solid fa-arrow-down-wide-short" />
          </span>
        </span>
        <span className="topReviewRightBtn">
          <button className="topReviewRightBtns">최근순</button>
          <span>
            <i className="fa-solid fa-arrow-rotate-right" />
          </span>
        </span>
      </span>
    </div>
  );
};

export default ReviewListTop;
