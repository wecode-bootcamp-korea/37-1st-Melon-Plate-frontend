import React from 'react';
import './SearchBox.scss';

const SearchBox = ({ searchData, onCheckedPriceRange, onCheckedCategory }) => {
  return (
    <>
      <div className="searchFilterBox searchFilterMid">
        <label>가격대</label>
        <p>
          {PRICE_DATA.map(menuList => {
            return (
              <>
                <input
                  type="radio"
                  name="priceRadioBox"
                  value={menuList.price}
                  className="radioBox"
                  id={'radioBoxMid' + menuList.id}
                  key={menuList.id}
                  onClick={e => {
                    onCheckedPriceRange(e.target.checked, menuList.price);
                  }}
                />
                <label htmlFor={'radioBoxMid' + menuList.id}>
                  {menuList.name}
                </label>
              </>
            );
          })}
        </p>
      </div>
      <div className="searchFilterBox searchFilterBot">
        <label>음식 종류</label>
        <p>
          {SEARCH_MENU.map(menuList => {
            return (
              <>
                <input
                  type="radio"
                  name="categoryRadioBox"
                  value={menuList.category}
                  className="radioBox"
                  id={'radioBoxBot' + menuList.id}
                  key={menuList.id}
                  onClick={e => {
                    onCheckedCategory(e.target.checked, menuList.category);
                  }}
                />
                <label htmlFor={'radioBoxBot' + menuList.id}>
                  {menuList.category}
                </label>
              </>
            );
          })}
        </p>
      </div>
      <form className="formWrap">
        <button type="button" className="cancleBtn button">
          취소
        </button>
        <button type="button" onClick={searchData} className="submitBtn button">
          적용
        </button>
      </form>
    </>
  );
};

const SEARCH_MENU = [
  { id: 1, category: '한식' },
  { id: 2, category: '중식' },
  { id: 3, category: '일식' },
  { id: 4, category: '양식' },
  { id: 5, category: '분식' },
  { id: 6, category: '고깃집' },
  { id: 7, category: '치킨' },
  { id: 8, category: '주점' },
  { id: 9, category: '카페' },
  { id: 10, category: '동남아음식' },
  { id: 11, category: '빵집' },
  { id: 12, category: '패스트푸드' },
  { id: 13, category: '기타' },
];

const PRICE_DATA = [
  { id: 1, name: '만원 미만', price: '0' },
  { id: 2, name: '1만원대', price: '1' },
  { id: 3, name: '2만원대', price: '2' },
  { id: 4, name: '3만원대', price: '3' },
];

export default SearchBox;
