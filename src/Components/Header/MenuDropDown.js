import React from 'react';
import './MenuDropDown.scss';
import './Header.scss';

const MenuDropDown = ({ menuClose }) => {
  return (
    <div className="menuDropDown" onMouseLeave={menuClose}>
      <div className="menuDropDownItem">인기 맛집 리스트</div>
      <div className="menuDropDownItem">멜플 추천 리스트</div>
      <div className="menuDropDownItem">종류별 추천 리스트</div>
      <div className="menuDropDownItem">평점 기반 추천 리스트</div>
    </div>
  );
};

export default MenuDropDown;
