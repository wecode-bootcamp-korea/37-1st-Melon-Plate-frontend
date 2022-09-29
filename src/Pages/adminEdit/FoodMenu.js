import React from 'react';
import './FoodMenu.scss';

const FoodMenu = ({
  saveMenuInput,
  menuAddBtnClick,
  menus,
  menuInput,
  menuDeleteBtnClick,
}) => {
  const emptyInput =
    menuInput.name.trim().length === 0 || menuInput.price.trim().length === 0;

  return (
    <div className="foodMenu">
      <div className="inputTitle">메뉴 추가</div>
      <div className="menuItemset">
        <input
          className="menuName"
          placeholder="메뉴 이름"
          name="name"
          onChange={saveMenuInput}
          value={menuInput.name}
        />
        <input
          className="menuPrice"
          placeholder="메뉴 가격"
          name="price"
          onChange={saveMenuInput}
          value={menuInput.price}
        />
        원
        <button onClick={menuAddBtnClick} disabled={emptyInput && true}>
          +
        </button>
      </div>
      {menus?.map(item => (
        <div className="addedMenu" key={item.id}>
          <span>{item.name}</span> <span>{item.price}원</span>
          <button
            className="deleteButton"
            title={item.id}
            onClick={menuDeleteBtnClick}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default FoodMenu;
