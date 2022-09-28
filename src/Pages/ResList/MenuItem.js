import React, { useEffect } from 'react';
import './MenuItem.scss';

const MenuItem = ({
  menu,
  address,
  limit,
  img,
  description,
  menuListClick,
}) => {
  return (
    <div className="menuItem" style={{ backgroundImage: `url(${img})` }}>
      <span className="menuItemTitle" onClick={menuListClick}>
        {address} {menu} 베스트 {limit} 곳
      </span>

      <span className="menuItemIntroduce">{description}</span>
    </div>
  );
};

export default MenuItem;
