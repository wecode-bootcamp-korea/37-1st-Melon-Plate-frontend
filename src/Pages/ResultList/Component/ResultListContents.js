import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ResultListContents.scss';

const ResultListContents = ({
  restaurantData,
  setRestaurantData,
  checkedList,
}) => {
  const numData = ['0', '1', '2', '3'];
  const categoryData = ['한식', '일식', '중식', '양식', '카페', '주점', '기타'];

  useEffect(() => {
    fetch(`/data/restaurant_list.json`)
      .then(response => response.json())
      .then(result => setRestaurantData(result.items));
  }, []);

  const filterPriceRange = restaurantData.filter(
    // data => data.priceRange.includes('0') && data.category.includes('한식')
    data => {
      if (checkedList.length === 0) {
        return data;
      } else if (checkedList.filter(x => numData.includes(x))) {
        return checkedList.includes(data.priceRange);
      }
    }
  );

  const filterCategory = filterPriceRange.filter(data => {
    if (checkedList.length < 5) {
      return data;
    } else if (checkedList.filter(x => categoryData.includes(x))) {
      return checkedList.includes(data.category);
    }
  });

  return filterCategory.map(
    ({
      id,
      detailUrl,
      address,
      imageUrl,
      dayOff,
      title,
      branch,
      searchPoint,
      place,
      category,
      viewCount,
      reviewCount,
    }) => (
      <li className="resultListContentsLi" key={id}>
        <figure className="restaurantItem">
          <Link to={detailUrl} className="contentLink">
            <div className="thumb">
              <img className="resultImage" alt={address} src={imageUrl} />
              {dayOff && <div className="dayOffImage">금일 영업 종료</div>}
            </div>
          </Link>

          <figcaption>
            <div className="info">
              <Link to="/#" className="contentLink">
                <h2 className="title">
                  {title}
                  <span className="branch">({branch})</span>
                </h2>
              </Link>
              <strong className="searchPoint">{searchPoint}</strong>
              <p className="etc">
                {place} - <span>{category}</span>
              </p>
              <p className="etcInfo">
                <span className="viewCount"> {viewCount}</span>
                <span className="reviewCount"> {reviewCount}</span>
              </p>
            </div>
          </figcaption>
        </figure>
      </li>
    )
  );
};

export default ResultListContents;
