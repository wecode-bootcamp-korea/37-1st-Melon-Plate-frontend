import React from 'react';
import './Store.scss';

const Store = () => {
  return (
    <div className="Store">
      <div className="storeWrap">
        <img
          className="storeImg"
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA5MTVfMjA4%2FMDAxNjYzMjA0NTE3OTI1.kgWpmxVdE8Ae7GtvGmswN320KHLVjxPGs0rw6N3TZpYg.qwriTz25DKbl8iKC7foCPpkqdakDcpn38yRA_hb-0eog.JPEG.kciis33%2FKakaoTalk_20220915_100312785_15.jpg&type=a340"
          alt="가게사진"
        />
        <div className="storeInfo">
          <div className="mainInfo">
            <span className="title">차이나</span>
            <span className="grade">4.5</span>
          </div>
          <div className="info">
            <p className="address">주소 : 서울특별시 마포구 연남로1길 11 1F</p>
            <p className="tel">전화번호 : 02-336-3396</p>
            <p className="hour">영업시간 : 11:00 - 21:00</p>
            <p className="off ">휴일 : 화</p>
          </div>
        </div>
      </div>
      <div className="modifyButton">
        <button>수정하기</button>
      </div>
    </div>
  );
};

export default Store;
