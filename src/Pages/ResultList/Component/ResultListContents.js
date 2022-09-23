import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ResultListContents.scss';

const ResultListContents = ({ restaurantData, setrestaurantData }) => {
  useEffect(() => {
    fetch(`/data/restaurant_list.json`)
      .then(response => response.json())
      .then(result => setrestaurantData(result.items));
  }, []);

  return restaurantData.map(
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
