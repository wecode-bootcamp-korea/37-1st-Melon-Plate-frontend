import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';
import './Main.scss';

const Main = () => {
  const accessToken = localStorage.getItem('TOKEN');
  const nickname = localStorage.getItem('nickname');
  return (
    <div className="main">
      <span className="welcomeMessage">
        {nickname ? `${nickname}님 ` : ' 안녕하세요 ! '} 궁금한 맛집을
        검색하세요 !
      </span>

      <SearchForm />

      {!accessToken && (
        <Link to="/logintap">
          <span className="mainLoginMessage">로그인하고 더 많은 정보 보기</span>
        </Link>
      )}
    </div>
  );
};

export default Main;
