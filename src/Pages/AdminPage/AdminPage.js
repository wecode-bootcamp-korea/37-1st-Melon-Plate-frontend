import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../../config';
import Store from './Store';
import './AdminPage.scss';

const AdminPage = () => {
  //통신시 사용
  const accessToken = localStorage.getItem('TOKEN');
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    fetch(`${API.adminPage}`, {
      method: 'GET',
      headers: {
        authorization: accessToken,
        'Content-Type': 'application/json;charset=utf-8',
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
          새로운 가게 추가하기
        </button>
      </div>
      <div className="storeList">
        {/* {TEXT?.map(item => {
          //통신이 안될시 mock데이터로 확인하는 코드//
          return <Store TEXT={item} key={item.id} />;
        })} */}

        {/* 통신시 확인하는 코드 */}
        {storeData.length &&
          storeData.map(item => {
            return <Store text={item} key={item.id} />;
          })}
      </div>
    </>
  );
};

export default AdminPage;
