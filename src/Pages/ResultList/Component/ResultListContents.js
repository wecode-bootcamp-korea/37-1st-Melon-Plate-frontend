import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ResultListContents.scss';

const ResultListContents = ({
  restaurantData,
  setRestaurantData,
  checkedList,
  setCheckedList,
}) => {
  // const [testArray, setTestArray] = useState([]);

  useEffect(() => {
    fetch(`/data/restaurant_list.json`)
      .then(response => response.json())
      .then(result => setRestaurantData(result.items));
  }, []);

  const filterPriceRange = restaurantData.filter(
    // data => data.priceRange.includes('0') && data.category.includes('한식')
    data => {
      if (checkedList) {
        console.log('data1 : true', checkedList);
        return checkedList.includes(data.priceRange);
      } else {
        console.log('data1 : false', checkedList);
        return data;
      }
    }
  );

  const filterCategory = filterPriceRange.filter(data => {
    if (checkedList) {
      console.log('data2 : true');
      return checkedList.includes(data.category);
    } else {
      console.log('data2 : false');
      return data;
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
      priceRange,
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
