import React, { useEffect, useState } from 'react';
import './Main.scss';
import SearchForm from './SearchForm';

const Main = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch('./jiwonData/loginUser.json')
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  return (
    <div className="main">
      {user.user_nickname ? (
        <span className="welcomeMessage">
          {user.user_nickname}님, 궁금한 맛집을 검색하세요!
        </span>
      ) : (
        <span className="welcomeMessage">
          안녕하세요! 궁금한 맛집을 검색해보세요!
        </span>
      )}

      <SearchForm />

      {!user.user_nickname && (
        <span className="mainLoginMessage">로그인하고 더 많은 정보 보기</span>
      )}
    </div>
  );
};

export default Main;
