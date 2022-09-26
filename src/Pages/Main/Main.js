import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';
import './Main.scss';

const Main = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch('./jiwonData/loginUser.json')
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  return (
    <div className="main">
      <span className="welcomeMessage">
        {user.user_nickname ? `${user.user_nickname}님,` : '안녕하세요!'}
        궁금한 맛집을 검색하세요!
      </span>

      <SearchForm />

      {!user.user_nickname && (
        <Link to="/logintap">
          <span className="mainLoginMessage">로그인하고 더 많은 정보 보기</span>
        </Link>
      )}
    </div>
  );
};

export default Main;
