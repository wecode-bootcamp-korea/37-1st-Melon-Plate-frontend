import React from 'react';
import './MenuDropDown.scss';

const MenuDropDown = ({ setMenuOpened }) => {
  return (
    <div className="menuDropDown" onMouseLeave={() => setMenuOpened(false)}>
      <div className="menuDropDownItem">인기 맛집 리스트</div>
      <div className="menuDropDownItem">멜플 추천 리스트</div>
      <div className="menuDropDownItem">종류별 추천 리스트</div>
      <div className="menuDropDownItem">평점 기반 추천 리스트</div>
    </div>
  );
};

export default MenuDropDown;
