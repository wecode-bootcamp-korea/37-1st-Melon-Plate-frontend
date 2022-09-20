import React, { useState } from 'react';
import GrayMelon from './GrayMelon';
import GreenMelon from './GreenMelon';
import './ReviewWrite.scss';

const ReviewWrite = () => {
  const [input, setInput] = useState(10);
  const [filed, setFiled] = useState([]);
  // const reviewForm = document.querySelector('.ReviewWritePage');
  // console.log(new FormData(reviewForm));
  return (
    <form className="ReviewWritePage">
      <div className="ReviewWrite">
        <div className="ReviewWriteSto">
          <span className="ReviewWriteStoName">부촌육회 </span>
          <span>에 대한 솔직한 리뷰를 써주세요</span>
        </div>
        <div className="ReviewWriteMelon">
          <div className="ReviewWritePoint">
            <div className="ReviewWritePointResult">
              <GrayMelon />
              <GrayMelon />
              <GrayMelon />
              <GrayMelon />
              <GrayMelon />
              <input
                type="range"
                value={input}
                step="1"
                min="0"
                max="10"
                onChange={e => {
                  setInput(e.target.value);
                }}
              />
            </div>
            <div
              className="ReviewWritePointResultSpan"
              style={{ width: `${input * 10}%` }}
            >
              <GreenMelon />
              <GreenMelon />
              <GreenMelon />
              <GreenMelon />
              <GreenMelon />
            </div>
          </div>
          <div className="ReviewWriteReview">
            <textarea
              placeholder="서비스도 궁금해요"
              className="ReviewWriteReviewInput"
            />
          </div>
          <span className="ReviewWriteSpan">sad</span>
        </div>
        <div className="ReviewWritePhoto">
          <div className="ReviewWritePhotoInner">
            <label htmlFor="file">
              <div className="ReviewWritePhotoInnerInputFile">
                <i className="fa-regular fa-image" />
              </div>
            </label>
            {filed}
            <input
              type="file"
              id="file"
              className="ReviewWritePhotoInnerInput"
              onChange={e => {
                setFiled(e);
              }}
            />
            <div className="ReviewWritePhotoInnerLength">asd</div>
          </div>
        </div>
        <div className="ReviewWriteResult">
          <button className="ReviewWriteBtn">나중에 이어쓰기</button>
          <div>
            <button className="ReviewWriteBtnCancel">취소</button>
            <button className="ReviewWriteBtnReview">리뷰 올리기</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ReviewWrite;
