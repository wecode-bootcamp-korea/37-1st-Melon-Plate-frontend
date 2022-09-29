import React from 'react';
import { Link } from 'react-router-dom';
import './Store.scss';

const Store = ({ TEXT }) => {
  const {
    image,
    name,
    rate,
    address,
    tel,
    open_time,
    closed_time,
    closed_day,
    category_id,
  } = TEXT;

  return (
    <div className="store">
      <div className="storeWrap">
        <img className="storeImg" src={image} alt="가게사진" />
        <div className="storeInfo">
          <div className="mainInfo">
            <span className="title">{name}</span>
            {TEXT.rate !== 0 ? (
              <span className="grade">{rate}</span>
            ) : (
              <span className='="grade'> 평가가 없습니다.</span>
            )}
          </div>
          <div className="info">
            <p className="address">주소 : {address}</p>
            <p className="tel">전화번호 : {tel}</p>
            <p className="hour">오픈시간 : {open_time}</p>
            <p className="hour">마감시간 : {closed_time}</p>
            <p className="off ">휴뮤일 : {closed_day}</p>
            <p className="off ">음식종류 : {category_id}</p>
          </div>
        </div>
      </div>
      <div className="modifyButton">
        <Link key={TEXT.id} to={`/admin/edit/${TEXT.id}`}>
          <button className="edit">수정하기</button>
        </Link>
      </div>
    </div>
  );
};

export default Store;
