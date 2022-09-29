import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import ResultListContents from './Component/ResultListContents';
import SearchBox from './Component/SearchBox';
import './Resultlist.scss';

const ResultList = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [checkedList, setCheckedList] = useState([]);
  const [radioInputStatus, setRadioInputStatus] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const params = window.location.search;
  const params2 = `&location=&menu=&limit=&filter=&offDay=&price=`;
  const accessToken = localStorage.getItem('TOKEN');

  const getFetchData = () => {
    fetch(`http://192.168.215.167:3000/main/search${params}${params2}`, {
      method: 'GET',
      headers: {
        authorization: accessToken,
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(result => setRestaurantData(result.data));
  };

  useEffect(() => getFetchData(), []);
  const searchData = event => {
    event.preventDefault();

    getFetchData();
    searchParams.delete('query');
    navigate(`/resultlist?${searchParams.toString()}`);
  };

  /* SerchBox filter priceRange 클릭 함수 */
  const onCheckedPriceRange = (checked, item) => {
    if (checked) {
      //searchParams.delete('category', item);
      searchParams.set('price', item);
      setSearchParams(searchParams);
    }
  };

  /* SerchBox filter category 클릭 함수 */
  const onCheckedCategory = (checked, item) => {
    if (checked) {
      searchParams.set('category', item);
      setSearchParams(searchParams);
    }
  };

  /* resultList 상단 메뉴 클릭 함수 */

  const categoryClick = e => {
    searchParams.delete('query');
    searchParams.delete('price');
    searchParams.set('category', e);
    setSearchParams(searchParams);
    navigate(`/resultlist?${searchParams.toString()}`);
    getFetchData();
  };

  return (
    <article className="resultList">
      <div className="contentsWrap">
        <div className="resultListTitleWrap">
          <h1 className="resultListTitle">강남 맛집 인기 검색순위</h1>
          <div className="category">
            {SEARCH_MENU.map(menuList => {
              return (
                <button
                  key={menuList.id}
                  onClick={e => {
                    categoryClick(menuList.category);
                  }}
                  className="categoryLink"
                >
                  {menuList.category}
                </button>
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
              searchParams={searchParams}
              setSearchParams={setSearchParams}
              getFetchData={getFetchData}
            />
          </ul>
        </div>
      </div>
      <div className="searchFilterWrap">
        <SearchBox
          searchData={searchData}
          restaurantData={restaurantData}
          setRestaurantData={setRestaurantData}
          onCheckedPriceRange={onCheckedPriceRange}
          onCheckedCategory={onCheckedCategory}
          checkedList={checkedList}
          setCheckedList={setCheckedList}
          radioInputStatus={radioInputStatus}
          setRadioInputStatus={setRadioInputStatus}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </div>
    </article>
  );
};

const SEARCH_MENU = [
  {
    id: 1,
    category: '한식',
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

export default ResultList;
