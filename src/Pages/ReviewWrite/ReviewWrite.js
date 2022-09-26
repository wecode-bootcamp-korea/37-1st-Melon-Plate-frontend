import React, { useEffect, useState } from 'react';
import GrayMelon from './GrayMelon';
import GreenMelon from './GreenMelon';
import './ReviewWrite.scss';
// import { json } from 'react-router-dom';

const ReviewWrite = () => {
  const [melonPoint, setMelonPoint] = useState(10);
  const [images, setImages] = useState([]);
  const [imgLength, setImgLength] = useState(0);
  const [text, setText] = useState('');
  const textLength = text.length;

  const formGo = () => {
    // fetch('/Mock/Mock.json', {
    //   method: 'POST',
    //   cache: 'no-cache',
    //   body: 'formData',
    // })
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res);
    //   });
    localStorage.removeItem('text');
    // localStorage.removeItem('img');
  };
  const textCount = e => {
    setText(e.target.value);
  };

  const saveText = e => {
    e.preventDefault();
    // const imagesJson = JSON.stringify(images);
    localStorage.removeItem('text');
    // localStorage.removeItem('img');
    localStorage.setItem('text', text);
    // localStorage.setItem('img', imagesJson);
  };

  const saveImages = e => {
    const fileArr = e.target.files;

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

  useEffect(() => {
    if (textLength > 50000) {
      alert('리뷰는 50000자 이상 넘어갈수 없습니다.');
    }
  }, [textLength]);

  useEffect(() => {
    if (localStorage.getItem('text')) {
      // const imgParse = JSON.parse(localStorage.getItem('img'));
      setText(localStorage.getItem('text'));
      // setImages(imgParse);
    }
  }, []);
  return (
    <div className="reviewWrite">
      <form className="reviewWritePage">
        <div className="Store">
          <span className="StoreName">부촌육회 </span>
          <span>에 대한 솔직한 리뷰를 써주세요</span>
        </div>
        <div className="Melon">
          <div className="Point">
            <div className="PointResult">
              <GrayMelon />
              <GrayMelon />
              <GrayMelon />
              <GrayMelon />
              <GrayMelon />
              <input
                type="range"
                value={melonPoint}
                step="1"
                min="0"
                max="10"
                onChange={e => {
                  setMelonPoint(e.target.value);
                }}
              />
            </div>
            <div
              className="PointResultSpan"
              style={{ width: `${melonPoint * 10}%` }}
            >
              <GreenMelon />
              <GreenMelon />
              <GreenMelon />
              <GreenMelon />
              <GreenMelon />
            </div>
          </div>
          <div className="Review">
            <textarea
              placeholder="서비스도 궁금해요"
              value={text}
              className="ReviewInput"
              onChange={textCount}
            />
            <span className="Span">{textLength}/50000</span>
          </div>
        </div>
        <div className="Photo">
          <div className="PhotoInner">
            <div>
              <label htmlFor="file" className="PhotoInnerLabel">
                <div className="PhotoInnerLength">{imgLength}/10</div>
                <div className="PhotoInnerInputFile">
                  <i className="fa-regular fa-image" />
                </div>
              </label>
              <input
                type="file"
                id="file"
                multiple="multiple"
                className="PhotoInnerInput"
                onChange={saveImages}
              />
            </div>
            <ul className="PhotoInnerPhotos">
              {images?.map((e, i) => (
                <li key={i}>
                  <img src={e} className="PhotoInnerPhotosImg" alt="melonImg" />
                  <button className="PhotoInnerPhotosBtn" onClick={clicked}>
                    x
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="Result">
          <button
            className={!Vialed ? 'Btn' : 'BtnChange'}
            disabled={!Vialed}
            onClick={saveText}
          >
            나중에 이어쓰기
          </button>
          <div>
            <button className="BtnCancel">취소</button>
            <button
              className={!Vialed ? 'BtnReview' : 'BtnReviewChange'}
              disabled={!Vialed}
              onClick={formGo}
            >
              리뷰 올리기
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReviewWrite;
