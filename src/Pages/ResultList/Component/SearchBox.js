import React from 'react';
import './SearchBox.scss';

const SearchBox = ({ searchData }) => {
  return (
    <>
      <div className="searchFilterBox searchFilterTop">
        <label>검색 필터</label>
        <p>
          <input
            type="radio"
            name="filterRadioBox"
            value=""
            className="radioBox"
            id="sorting1"
          />
          <label htmlFor="sorting1">인기순</label>
          <input
            type="radio"
            name="filterRadioBox"
            value=""
            className="radioBox"
            id="sorting2"
          />
          <label htmlFor="sorting2">평점순</label>
        </p>
      </div>
      <div className="searchFilterBox searchFilterMid">
        <label>
          가격대<span>(중복가능)</span>
        </label>
        <p>
          {PRICE_DATA.map(menuList => {
            return (
              <>
                <input
                  type="checkbox"
                  name=""
                  value={menuList.menuName}
                  className="checkBox"
                  id={'checkBoxMid' + menuList.id}
                  key={menuList.id}
                />
                <label htmlFor={'checkBoxMid' + menuList.id}>
                  {menuList.menuName}
                </label>
              </>
            );
          })}
        </p>
      </div>
      <div className="searchFilterBox searchFilterBot">
        <label>
          음식 종류<span>(중복가능)</span>
        </label>
        <p>
          {SEARCH_MENU.map(menuList => {
            return (
              <>
                <input
                  type="checkbox"
                  name=""
                  value={menuList.menuName}
                  className="checkBox"
                  id={'checkBoxBot' + menuList.id}
                  key={menuList.id}
                />
                <label htmlFor={'checkBoxBot' + menuList.id}>
                  {menuList.menuName}
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
  { id: 1, menuName: '한식' },
  { id: 2, menuName: '일식' },
  { id: 3, menuName: '중식' },
  { id: 4, menuName: '양식' },
  { id: 5, menuName: '카페' },
  { id: 6, menuName: '주점' },
  { id: 7, menuName: '기타' },
];

const PRICE_DATA = [
  { id: 1, menuName: '만원 미만' },
  { id: 2, menuName: '1만원대' },
  { id: 3, menuName: '2만원대' },
  { id: 4, menuName: '3만원대' },
];

export default SearchBox;
