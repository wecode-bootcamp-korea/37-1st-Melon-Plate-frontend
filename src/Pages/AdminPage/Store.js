import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Store.scss';

const Store = ({ text }) => {
  const navigate = useNavigate();
  const goToAdminEdit = () => {
    navigate('/admin/edit');
  };
  // console.log(text);
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
            <span className="title">{text.stoName}</span>
            <span className="grade">{text.star}</span>
          </div>
          <div className="info">
            <p className="address">{text.address}</p>
            <p className="tel">{text.tel}</p>
            <p className="hour">{text.hour}</p>
            <p className="off ">{text.closedDay}</p>
          </div>
        </div>
      </div>
      <div className="modifyButton">
        <button className="edit" onClick={goToAdminEdit}>
          수정하기
        </button>
      </div>
    </div>
  );
};

export default Store;
