import React from 'react';

const reviewListTop = () => {
  return (
    <div className="reviewListTop">
      <span className="reviewListTopReviewLeft">
        <span className="reviewListTopReviewLeftText">리뷰 </span>
        <span className="reviewListTopReviewLeftNumber"> (0)</span>
      </span>
      <span className="reviewListTopReviewRight">
        <span className="reviewListTopReviewRightBtn">
          <button className="reviewListTopReviewRightBtns">높은순</button>
          <span>
            <i className="fa-solid fa-arrow-up-wide-short" />
          </span>
        </span>
        <span className="reviewListTopReviewRightBtn">
          <button className="reviewListTopReviewRightBtns">낮은순</button>
          <span>
            <i className="fa-solid fa-arrow-down-wide-short" />
          </span>
        </span>
        <span className="reviewListTopReviewRightBtn">
          <button className="reviewListTopReviewRightBtns">최근순</button>
          <span>
            <i className="fa-solid fa-arrow-rotate-right" />
          </span>
        </span>
      </span>
    </div>
  );
};

export default reviewListTop;
