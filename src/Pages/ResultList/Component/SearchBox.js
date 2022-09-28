import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import './SearchBox.scss';

const SearchBox = ({
  searchData,
  restaurantData,
  setRestaurantData,
  onCheckedPriceRange,
  onCheckedCategory,
  onCheckedElement,
  radioInputStatus,
  handleClickRadioButton,
}) => {
  const handleCancle = () => {
    console.log('cancle click!');

    // fetch(`http://192.168.215.167:3000/search?query=강남`);
    //   .then(response => response.json())
    //   .then(result => {
    //     console.log(result.data);
    //     setRestaurantData(result.data);
    //   });

    fetch(`/data/restaurant_list.json`)
      .then(response => response.json())
      .then(result => {
        console.log(result.data);
        setRestaurantData(result.data);
      });
  };
  return (
    <>
      {/* <div className="searchFilterBox searchFilterTop">
        <label>검색 필터</label>
        <p>
          <input
            type="radio"
            name="filterRadioBox"
            value="popularity"
            className="radioBox"
            id="sorting1"
            onClick={() => handleClickRadioButton('popularity')}
            checked={radioInputStatus === 'popularity'}
          />
          <label htmlFor="sorting1">인기순</label>
          <input
            type="radio"
            name="filterRadioBox"
            value="rating"
            className="radioBox"
            id="sorting2"
            onClick={() => handleClickRadioButton('rating')}
            checked={radioInputStatus === 'rating'}
          />
          <label htmlFor="sorting2">평점순</label>
        </p>
      </div> */}
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
                  value={menuList.priceRange}
                  className="checkBox"
                  id={'checkBoxMid' + menuList.id}
                  key={menuList.id}
                  onClick={e => {
                    onCheckedElement(e.target.checked, menuList.priceRange);
                  }}
                />
                <label htmlFor={'checkBoxMid' + menuList.id}>
                  {menuList.name}
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
                  value={menuList.category}
                  className="checkBox"
                  id={'checkBoxBot' + menuList.id}
                  key={menuList.id}
                  onClick={e => {
                    onCheckedElement(e.target.checked, menuList.category);
                  }}
                />
                <label htmlFor={'checkBoxBot' + menuList.id}>
                  {menuList.category}
                </label>
              </>
            );
          })}
        </p>
      </div>
      <form className="formWrap">
        <button
          type="button"
          className="cancleBtn button"
          onClick={handleCancle}
        >
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
  {
    id: 1,
    category: '한식',
    queryData: 'http://192.168.215.167:3000/search?query=한식',
  },
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
  { id: 1, name: '만원 미만', priceRange: '0' },
  { id: 2, name: '1만원대', priceRange: '1' },
  { id: 3, name: '2만원대', priceRange: '2' },
  { id: 4, name: '3만원대', priceRange: '3' },
];

export default SearchBox;
