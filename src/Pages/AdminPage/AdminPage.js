import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPage.scss';
import Store from './Store';

const Data = () => {
  fetch('https://api.github.com/orgs/nodejs', {
    method: 'GET',
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    });
};

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
      stoName: '차이나',
      star: '4.5',
      address: '주소 : 	서울특별시 용산구 한강대로40길 14 1F 104호',
      tel: '전화번호 : 	010-2757-3592',
      hour: '영업시간 : 	17:00 - 23:00',
      closedDay: '휴일 : 수',
    },
    {
      stoName: '농민백암순대',
      star: '5.0',
      address: '주소 : 서울특별시 마포구 연남로1길 11 1F',
      tel: '전화번호 : 02-336-3396',
      hour: '영업시간 : 11:00 - 21:00',
      closedDay: '휴일 : 화',
    },
    {
      stoName: '느루',
      star: '4.4',
      address: '주소 : 서울특별시 용산구 한강대로 126-2 1F',
      tel: '전화번호 : 02-336-3396',
      hour: '	월-금: 15:00 - 17:00',
      closedDay: '휴일 : 목',
    },
    {
      stoName: '중앙해장',
      star: '4.7',
      address: '주소 : 	서울특별시 강남구 영동대로86길 17 육인빌딩',
      tel: '전화번호 : 02-558-7905',
      hour: '영업시간 : 11:00 - 21:00',
      closedDay: '휴일 : 화',
    },
  ];

  return (
    <>
      <div className="myStoreList">내 가게 리스트</div>
      <div className="addInfo">
        <button className="add" onClick={goToAdminAdd}>
          추가하기
        </button>
      </div>
      <div className="storeList">
        {text.map(item => {
          return <Store text={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default AdminPage;
