import React, { useEffect, useState } from 'react';
import GrayMelon from './GrayMelon';
import GreenMelon from './GreenMelon';
import './ReviewWrite.scss';

const ReviewWrite = () => {
  const [input, setInput] = useState(10);
  const [filed, setFiled] = useState([]);
  const [images, setImages] = useState([]);
  const [save, setSave] = useState([]);
  const [imgLength, setImgLength] = useState(0);
  const [textLength, setTextLength] = useState(0);

  const textCount = e => {
    setTextLength(e.target.value.length);
  };
  useEffect(() => {
    if (textLength > 50000) {
      alert('리뷰는 50000자 이상 넘어갈수 없습니다.');
    }
  }, [textLength]);

  const saveImages = e => {
    const fileArr = e.target.files;
    setSave([...fileArr]);
    console.log([...save, ...fileArr]);
    let fileURLs = [];
    let file;
    let filesLength = fileArr.length > 10 ? 10 : fileArr.length;
    for (let i = 0; i < filesLength; i++) {
      file = fileArr[i];
      let reader = new FileReader();
      reader.onload = () => {
        fileURLs.push(reader.result);
        setImages([...fileURLs, ...images]);
      };

      reader.readAsDataURL(file);
    }
  };
  const clicked = e => {
    e.preventDefault();
    e.target.parentNode.remove();
  };
  useEffect(() => {
    const arr = document.getElementsByClassName(
      'ReviewWritePhotoInnerPhotosImg'
    );
    setImgLength(arr.length);
    if (arr.length > 10) {
      setImages(images.splice(0, 10));
    }
  }, [images]);
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
              onChange={textCount}
            />
            <span className="ReviewWriteSpan">{textLength}/50000</span>
          </div>
        </div>
        <div className="ReviewWritePhoto">
          <div className="ReviewWritePhotoInner">
            <div>
              <label htmlFor="file" className="ReviewWritePhotoInnerLabel">
                <div className="ReviewWritePhotoInnerLength">
                  {imgLength}/10
                </div>
                <div className="ReviewWritePhotoInnerInputFile">
                  <i className="fa-regular fa-image" />
                </div>
              </label>
              {filed}
              <input
                type="file"
                id="file"
                multiple="multiple"
                className="ReviewWritePhotoInnerInput"
                onChange={saveImages}
              />
            </div>
            <ul className="ReviewWritePhotoInnerPhotos">
              {images?.map((e, i) => (
                <li key={i}>
                  <img src={e} className="ReviewWritePhotoInnerPhotosImg" />
                  <button
                    className="ReviewWritePhotoInnerPhotosBtn"
                    onClick={clicked}
                  >
                    x
                  </button>
                </li>
              ))}
            </ul>
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
