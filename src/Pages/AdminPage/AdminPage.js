import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPage.scss';
import Store from './Store';

const AdminPage = () => {
  const navigate = useNavigate();
  const goToAdminAdd = () => {
    navigate('/admin/add');
  };

  // useEffect(() => {
  //   fetch();
  // }, []);

  const text = [
    {
      title: '차이나',
      star: '4.5',
      address: '주소 : 서울특별시 마포구 연남로1길 11 1F',
      tel: '전화번호 : 02-336-3396',
      hour: '영업시간 : 11:00 - 21:00',
      closedDay: '휴일 : 화',
    },
    {
      title: '농민백암순대',
      star: '5.0',
      address: '주소 : 서울특별시 마포구 연남로1길 11 1F',
      tel: '전화번호 : 02-336-3396',
      hour: '영업시간 : 11:00 - 21:00',
      closedDay: '휴일 : 화',
    },
  ];

  // let data = { ...text };
  return (
    <>
      <div className="myStoreList">내 가게 리스트</div>
      <div className="addInfo">
        <button className="add" onClick={goToAdminAdd}>
          추가하기
        </button>
      </div>
      <div className="storeList">
        {/* {text.map(text => (
          <Store key={text.id} />
        ))} */}
        <Store text={text} />
        <Store text={text} />
      </div>
    </>
  );
};

export default AdminPage;
