import React from 'react';
import './AdminPage.scss';
import Store from './Store';

const AdminPage = () => {
  return (
    <>
      <div className="myStoreList">내 가게 리스트</div>
      <div>
        <button>추가하기</button>
      </div>
      <div className="storeList">
        <Store />
        <Store />
        <Store />
        <Store />
        <Store />
        <Store />
      </div>
    </>
  );
};

export default AdminPage;
