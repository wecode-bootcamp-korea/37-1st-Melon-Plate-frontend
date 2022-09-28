import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdminPage.scss';
import Store from './Store';
import { TEXT } from './TEXT';

const AdminPage = () => {
  //통신시 사용
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    fetch('http://192.168.215.82:3000/user/admin', {
      method: 'GET',
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwidXNlcl9pZCI6InJsYWRtZHRuIiwiYWRtaW4iOiJUUlVFIiwiaWF0IjoxNjY0MjQ1NDU3fQ.HQhElcCgI6HrXSUoXD-3Q3MoruW2PzRJWn8KD1uORrs',
      },
    })
      .then(response => {
        return response.json();
      })
      .then(data => setStoreData(data));
  }, []);
  //

  const navigate = useNavigate();
  const goToAdminAdd = () => {
    navigate('/admin/create');
  };
  return (
    <>
      <div className="myStoreList">내 가게 리스트</div>
      <div className="addInfo">
        <button className="add" onClick={goToAdminAdd}>
          추가하기
        </button>
      </div>
      <div className="storeList">
        {TEXT?.map(item => {
          //통신이 안될시 mock데이터로 확인하는 코드//
          return <Store TEXT={item} key={item.id} />;
        })}

        {/* 통신시 확인하는 코드 */}
        {/* {storeData?.map(item => {
          return <Store text={item} key={item.id} />;
        })} */}
      </div>
    </>
  );
};

export default AdminPage;
