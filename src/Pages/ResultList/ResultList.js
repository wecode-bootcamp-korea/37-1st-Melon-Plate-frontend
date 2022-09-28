import React, { useState } from 'react';
import { useParams, useSearchParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ResultListContents from './Component/ResultListContents';
import SearchBox from './Component/SearchBox';
import './ResultList.scss';

const ResultList = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [checkedList, setCheckedList] = useState([]);
  const [radioInputStatus, setRadioInputStatus] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  console.log(searchParams);
  console.log(checkedList);
  console.log(location);

  let { params } = useParams();

  const handleClickRadioButton = radioBtnName => {
    console.log(radioBtnName);
    setRadioInputStatus(radioBtnName);
  };

  const searchData = event => {
    event.preventDefault();

    // fetch(`http://192.168.215.167:3000/search?query=강남`)
    //   .then(response => response.json())
    //   .then(result => {
    //     console.log(result.data);
    //     setRestaurantData(result.data);
    //   });

    console.log({ radioInputStatus });

    fetch(`/data/restaurant_list.json`, {})
      .then(response => response.json())
      .then(result => {
        console.log(result.data);
        setRestaurantData(result.data);
      });
  };

  // useEffect(() => {
  //   // fetch(`http://172.20.10.11:8000/search?query=강남`)
  //   //   .then(response => response.json())
  //   //   .then(result => console.log(result.data));
  //   fetch(`/data/restaurant_list.json`)
  //     .then(response => response.json())
  //     .then(result => {
  //       console.log(result);
  //       setRestaurantData(result);
  //     });
  // }, []);
  //setRestaurantData(result.data);

  // const onCheckedElement = (checked, item) => {
  //   if (checked) {
  //     setCheckedList([...checkedList, item]);
  //   } else if (!checked) {
  //     setCheckedList(checkedList?.filter(el => el !== item));
  //   }
  // };
  const onCheckedElement = (checked, item) => {
    setSearchParams(item);
  };

  const movePages = () => {
    console.log('testPage');
    fetch(`http://172.20.10.11:8000/search?query={한식}`)
      .then(response => response.json())
      .then(result => {
        console.log(result.data);
        setRestaurantData(result.data);
      });
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
                  onClick={movePages}
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
            />
          </ul>
          <div className="pagingContainer">
            <p className="paging">
              <button onClick={movePages} className="pagingLink">
                1
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className="searchFilterWrap">
        <SearchBox
          searchData={searchData}
          restaurantData={restaurantData}
          setRestaurantData={setRestaurantData}
          onCheckedElement={onCheckedElement}
          checkedList={checkedList}
          setCheckedList={setCheckedList}
          radioInputStatus={radioInputStatus}
          setRadioInputStatus={setRadioInputStatus}
          handleClickRadioButton={handleClickRadioButton}
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
    queryData: '?query=한식',
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
