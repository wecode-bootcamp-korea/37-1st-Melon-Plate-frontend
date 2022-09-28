import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ResultListContents.scss';

const ResultListContents = ({
  restaurantData,
  setRestaurantData,
  checkedList,
}) => {
  const numData = ['0', '1', '2', '3'];
  const categoryData = [
    '한식',
    '중식',
    '일식',
    '양식',
    '분식',
    '고깃집',
    '치킨',
    '주점',
    '카페',
    '동남아음식',
    '빵집',
    '패스트푸드',
    '기타',
  ];

  useEffect(() => {
    // fetch(`http://192.168.215.167:8000/search?query=강남`)
    //   .then(response => response.json())
    //   .then(result => {
    //     setRestaurantData(result.data);
    //   });
    fetch(`/data/restaurant_list.json`)
      .then(response => response.json())
      .then(result => {
        console.log(result.data);
        setRestaurantData(result.data);
      });
  }, []);

  /* 필터 시작 */

  // const filterPriceRange = restaurantData.filter(
  //   // data => data.priceRange.includes('0') && data.category.includes('한식')
  //   data => {
  //     if (checkedList.length === 0) {
  //       return data;
  //     } else if (checkedList.filter(x => numData.includes(x))) {
  //       return checkedList.includes(data.priceRange);
  //     }
  //   }
  // );

  // const filterCategory = filterPriceRange.filter(data => {
  //   if (checkedList.length < 5) {
  //     return data;
  //   } else if (checkedList.filter(x => categoryData.includes(x))) {
  //     return checkedList.includes(data.category);
  //   }
  // });

  /* 필터 끝 */

  return restaurantData.map(
    ({
      id,
      detailUrl,
      address,
      image,
      dayOff,
      name,
      branch,
      rate_average,
      place,
      category,
      views_count,
      reviews_count,
    }) => (
      <li className="resultListContentsLi" key={id}>
        <figure className="restaurantItem">
          <Link key={id} to={`/resultList/${id}`} className="contentLink">
            <div className="thumb">
              <img className="resultImage" alt={address} src={image} />
              {/* {dayOff && <div className="dayOffImage">쉬는 날 {dayOff}</div>} */}
            </div>
          </Link>

          <figcaption>
            <div className="info">
              <Link key={id} to={`/resultList/${id}`} className="contentLink">
                <h2 className="title">
                  {name}
                  {/* <span className="branch">({branch})</span> */}
                </h2>
              </Link>
              <strong className="searchPoint">{rate_average}</strong>
              <p className="etc">
                <span>{category}</span>
              </p>
              <p className="etcInfo">
                <span className="viewCount"> {views_count}</span>
                <span className="reviewCount"> {reviews_count}</span>
              </p>
            </div>
          </figcaption>
        </figure>
      </li>
    )
  );
};

export default ResultListContents;
