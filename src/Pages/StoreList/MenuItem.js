import React from 'react';
import './MenuItem.scss';

const MenuItem = () => {
  return (
    <div className="menuItem">
      <span className="menuItemTitle">카테고리 제목</span>
      <span className="menuItemIntroduce">카테고리 간단 설명</span>
    </div>
  );
};

export default MenuItem;
