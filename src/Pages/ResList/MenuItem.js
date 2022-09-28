import React from 'react';
import './MenuItem.scss';

const MenuItem = ({
  menu,
  address,
  limit,
  img,
  category,
  description,
  menuListClick,
}) => {
  return (
    <div className="menuItem" style={{ backgroundImage: `url(${img})` }}>
      <span
        className="menuItemTitle"
        onClick={() => menuListClick(address, menu, limit, category)}
      >
        {address} {menu} {category} 베스트 {limit} 곳
      </span>

      <span className="menuItemIntroduce">{description}</span>
    </div>
  );
};

export default MenuItem;
