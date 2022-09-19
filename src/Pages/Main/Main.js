import React from 'react';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <span className="welcomeMessage">
        솔직한 리뷰, 믿을 수 있는 평점! 멜론 플레이트
      </span>

      <form className="searchStore">
        <input className="searchInput" placeholder="식당, 음식 검색" />
        <button className="searchButton">검색</button>
      </form>
    </div>
  );
};

export default Main;
