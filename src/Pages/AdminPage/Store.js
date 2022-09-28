import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Store.scss';

const Store = ({ text }) => {
  console.log(text);

  // const navigate = useNavigate();
  // const goToAdminEdit = () => {
  //   navigate('/admin/edit');
  // };

  // const params = useParams();
  // const storeId = params.id;

  // const [detailData, setDetailData] = useState({});

  // useEffect(() => {
  //   fetch(`http://192.168.215.82:8000/user/admin/${storeId}`)
  //     .then(response => response.json())
  //     .then(result => setDetailData(result));
  // }, [storeId]);

  // console.log(detailData);
  return (
    <div className="Store">
      <div className="storeWrap">
        <img className="storeImg" src={text.image} alt="가게사진" />
        <div className="storeInfo">
          <div className="mainInfo">
            <span className="title">{text.name}</span>
            <span className="grade">{text.rate}</span>
          </div>
          <div className="info">
            <p className="address">주소 : {text.address}</p>
            <p className="tel">전화번호 :{text.tel}</p>
            <p className="hour">오픈시간 : {text.open_time}</p>
            <p className="hour">마감시간 :{text.closed_time}</p>
            <p className="off ">휴뮤일 : {text.closed_day}</p>
            <p className="off ">음식종류 : {text.category_id}</p>
          </div>
        </div>
      </div>
      <div className="modifyButton">
        <Link key={text.id} to={`/admin/edit/${text.id}`}>
          <button className="edit">수정하기</button>
        </Link>
      </div>
    </div>
  );
};

export default Store;
