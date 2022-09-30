import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ResultListContents.scss';

const ResultListContents = ({ restaurantData, getFetchData }) => {
  useEffect(() => {
    getFetchData();
  }, []);

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
          <Link key={id} to={`/detail/${id}`} className="contentLink">
            <div className="thumb">
              <img className="resultImage" alt={address} src={image} />
              {/* {dayOff && <div className="dayOffImage">쉬는 날 {dayOff}</div>} */}
            </div>
          </Link>

          <figcaption>
            <div className="info">
              <Link key={id} to={`/detail/${id}`} className="contentLink">
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
