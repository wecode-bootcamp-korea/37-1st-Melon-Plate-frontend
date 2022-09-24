import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ResultListContents from './Component/ResultListContents';
import SearchBox from './Component/SearchBox';
import './ResultList.scss';

const ResultList = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [checkedList, setCheckedList] = useState([]);

  const searchData = event => {
    event.preventDefault();

    fetch(`/data/restaurant_list.json`)
      .then(response => response.json())
      .then(result => setRestaurantData(result.items));
  };

  const onCheckedElement = (checked, item) => {
    if (checked) {
      setCheckedList([...checkedList, item]);
    } else if (!checked) {
      setCheckedList(checkedList.filter(el => el !== item));
    }
  };

  return (
    <article className="resultList">
      <div className="contentsWrap">
        <div className="resultListTitleWrap">
          <h1 className="resultListTitle">강남 맛집 인기 검색순위</h1>
          <div className="category">
            {SEARCH_MENU.map(menuList => {
              return (
                <Link key={menuList.id} to="#" className="categoryLink">
                  {menuList.menuName}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="resultListContentsWrap">
          <ul className="resultListContentsUl">
            <ResultListContents
              restaurantData={restaurantData}
              setRestaurantData={setRestaurantData}
              checkedList={checkedList}
              setCheckedList={setCheckedList}
            />
          </ul>
          <div className="pagingContainer">
            <p className="paging">
              <Link to="#" className="pagingLink">
                1
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="searchFilterWrap">
        <SearchBox
          searchData={searchData}
          restaurantData={restaurantData}
          onCheckedElement={onCheckedElement}
          checkedList={checkedList}
          setCheckedList={setCheckedList}
        />
      </div>
    </article>
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

export default ResultList;
