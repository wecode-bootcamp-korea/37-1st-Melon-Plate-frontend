import React from 'react';
import { Link } from 'react-router-dom';

const ResultListContents = () => {
  return RESTAURANT_LIST.map(data => (
    <li className="resultListContentsLi" key={data.id}>
      <figure className="restaurantItem">
        <Link to={data.detailUrl} className="contentLink">
          <div className="thumb">
            <img
              className="resultImage"
              alt={data.address}
              src={data.imageUrl}
            />
            {data.dayOff === 'true' && (
              <div className="dayOffImage">금일 영업 종료</div>
            )}
          </div>
        </Link>

        <figcaption>
          <div className="info">
            <Link to="/#" className="contentLink">
              <h2 className="title">
                {data.title}
                <span className="branch">({data.branch})</span>
              </h2>
            </Link>
            <strong className="searchPoint">{data.searchPoint}</strong>
            <p className="etc">
              {data.place} - <span>{data.category}</span>
            </p>
            <p className="etcInfo">
              <span className="viewCount"> {data.viewCount}</span>
              <span className="reviewCount"> {data.reviewCount}</span>
            </p>
          </div>
        </figcaption>
      </figure>
    </li>
  ));
};

const RESTAURANT_LIST = [
  {
    id: '1',
    imageUrl:
      'https://mp-seoul-image-production-s3.mangoplate.com/452637/1168063_1639733462425_13128?fit=around|359:240&amp;crop=359:240;*,*&amp;output-format=jpg&amp;output-quality=80',
    detailUrl: '/#',
    address: '서울시 서초구 서초동 1317-31',
    dayOff: 'false',
    title: '반티엔야오카오위',
    branch: '강남점',
    searchPoint: '4.5',
    category: '기타',
    place: '강남역',
    viewCount: '31,978',
    reviewCount: '24',
  },
  {
    id: '2',
    imageUrl:
      'https://mp-seoul-image-production-s3.mangoplate.com/452637/1168063_1639733462425_13128?fit=around|359:240&amp;crop=359:240;*,*&amp;output-format=jpg&amp;output-quality=80',
    detailUrl: '/#',
    address: '서울시 강남구 삼성2동 선릉로100길 1',
    dayOff: 'true',
    title: '반티엔야오카오위',
    branch: '선릉점',
    searchPoint: '3.5',
    category: '기타',
    place: '선릉역',
    viewCount: '12,978',
    reviewCount: '55',
  },
];

export default ResultListContents;
