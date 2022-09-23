import React, { useEffect, useState } from 'react';
import GrayMelon from './GrayMelon';
import GreenMelon from './GreenMelon';
import './ReviewWrite.scss';

const ReviewWrite = () => {
  const [text, setText] = useState(10);
  const [filed, setFiled] = useState([]);
  const [images, setImages] = useState([]);
  const [save, setSave] = useState([]);
  const [imgLength, setImgLength] = useState(0);
  const [textLength, setTextLength] = useState(0);
  const formGo = () => {
    fetch('/Mock/Mock.json', {
      method: 'POST',
      cache: 'no-cache',
      body: 'formData',
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      });
  };

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
  const Vialed = textLength > 0;

  const clicked = e => {
    e.preventDefault();
    e.target.parentNode.remove();
  };

  useEffect(() => {
    setImgLength(images.length);
    if (images.length > 10) {
      setImages(images.splice(0, 10));
    }
  }, [images]);
  return (
    <form className="ReviewWritePage">
      <div className="reviewWrite">
        <div className="reviewWriteSto">
          <span className="reviewWriteStoName">부촌육회 </span>
          <span>에 대한 솔직한 리뷰를 써주세요</span>
        </div>
        <div className="reviewWriteMelon">
          <div className="reviewWritePoint">
            <div className="reviewWritePointResult">
              <GrayMelon />
              <GrayMelon />
              <GrayMelon />
              <GrayMelon />
              <GrayMelon />
              <input
                type="range"
                value={text}
                step="1"
                min="0"
                max="10"
                onChange={e => {
                  setText(e.target.value);
                }}
              />
            </div>
            <div
              className="reviewWritePointResultSpan"
              style={{ width: `${text * 10}%` }}
            >
              <GreenMelon />
              <GreenMelon />
              <GreenMelon />
              <GreenMelon />
              <GreenMelon />
            </div>
          </div>
          <div className="reviewWriteReview">
            <textarea
              placeholder="서비스도 궁금해요"
              className="reviewWriteReviewInput"
              onChange={textCount}
            />
            <span className="reviewWriteSpan">{textLength}/50000</span>
          </div>
        </div>
        <div className="reviewWritePhoto">
          <div className="reviewWritePhotoInner">
            <div>
              <label htmlFor="file" className="reviewWritePhotoInnerLabel">
                <div className="reviewWritePhotoInnerLength">
                  {imgLength}/10
                </div>
                <div className="reviewWritePhotoInnerInputFile">
                  <i className="fa-regular fa-image" />
                </div>
              </label>
              {filed}
              <input
                type="file"
                id="file"
                multiple="multiple"
                className="reviewWritePhotoInnerInput"
                onChange={saveImages}
              />
            </div>
            <ul className="reviewWritePhotoInnerPhotos">
              {images?.map((e, i) => (
                <li key={i}>
                  <img src={e} className="reviewWritePhotoInnerPhotosImg" />
                  <button
                    className="reviewWritePhotoInnerPhotosBtn"
                    onClick={clicked}
                  >
                    x
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="reviewWriteResult">
          <button
            className={!Vialed ? 'reviewWriteBtn' : 'reviewWriteBtnChange'}
            disabled={!Vialed}
          >
            나중에 이어쓰기
          </button>
          <div>
            <button className="reviewWriteBtnCancel">취소</button>
            <button
              className={
                !Vialed ? 'reviewWriteBtnReview' : 'reviewWriteBtnReviewChange'
              }
              disabled={!Vialed}
              onClick={formGo}
            >
              리뷰 올리기
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ReviewWrite;
