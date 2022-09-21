import React from 'react';
import { Link } from 'react-router-dom';
import './Resultlist.scss';

const ResultList = () => {
  return (
    <article className="resultListWrap">
      <div className="contentsWrap">
        <div className="resultListTitleWrap">
          <h1 className="resultListTitle">강남역 맛집 인기 검색순위</h1>
          <div className="category">
            <Link to="#" className="categoryLink">
              한식
            </Link>
            <Link to="#" className="categoryLink">
              일식
            </Link>
            <Link to="#" className="categoryLink">
              중식
            </Link>
            <Link to="#" className="categoryLink">
              양식
            </Link>
            <Link to="#" className="categoryLink">
              카페
            </Link>
            <Link to="#" className="categoryLink">
              주점
            </Link>
            <Link to="#" className="categoryLink">
              기타
            </Link>
          </div>
        </div>

        <div className="resultListContentsWrap">
          <ul className="resultListContentsUl">
            <li className="resultListContentsLi">
              <figure className="restaurantItem">
                <Link to="/#" className="contentLink">
                  <div className="thumb">
                    <img
                      className="resultImage"
                      alt="반티엔야오카오위 사진 - 서울시 서초구 서초동 1317-31"
                      src="https://mp-seoul-image-production-s3.mangoplate.com/452637/1168063_1639733462425_13128?fit=around|359:240&amp;crop=359:240;*,*&amp;output-format=jpg&amp;output-quality=80"
                    />
                    <div className="dayOffImage">금일 영업 종료</div>
                  </div>
                </Link>

                <figcaption>
                  <div className="info">
                    <Link to="/#" className="contentLink">
                      <h2 className="title">
                        반티엔야오카오위
                        <span className="branch">(강남점)</span>
                      </h2>
                    </Link>
                    <strong className="searchPoint">4.5</strong>
                    <p className="etc">
                      강남역 - <span>기타</span>
                    </p>
                    <p className="etcInfo">
                      <span className="viewCount">31,978</span>
                      <span className="reviewCount">24</span>
                    </p>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li className="resultListContentsLi">
              <figure className="restaurantItem">
                <Link to="/#" className="contentLink">
                  <div className="thumb">
                    <img
                      className="resultImage"
                      alt="반티엔야오카오위 사진 - 서울시 서초구 서초동 1317-31"
                      src="https://mp-seoul-image-production-s3.mangoplate.com/452637/1168063_1639733462425_13128?fit=around|359:240&amp;crop=359:240;*,*&amp;output-format=jpg&amp;output-quality=80"
                    />
                    <div className="dayOffImage">금일 영업 종료</div>
                  </div>
                </Link>

                <figcaption>
                  <div className="info">
                    <Link to="/#" className="contentLink">
                      <h2 className="title">
                        반티엔야오카오위
                        <span className="branch">(강남점)</span>
                      </h2>
                    </Link>
                    <strong className="searchPoint">4.5</strong>
                    <p className="etc">
                      강남역 - <span>기타</span>
                    </p>
                    <p className="etcInfo">
                      <span className="viewCount">31,978</span>
                      <span className="reviewCount">24</span>
                    </p>
                  </div>
                </figcaption>
              </figure>
            </li>
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
        <div className="searchFilterBox searchFilterTop">
          <label>검색 필터</label>
          <p>
            <input
              type="radio"
              name="filterRadioBox"
              value=""
              className="radioBox"
              id="sorting1"
            />
            <label for="sorting1">인기순</label>
            <input
              type="radio"
              name="filterRadioBox"
              value=""
              className="radioBox"
              id="sorting2"
            />
            <label for="sorting2">평점순</label>
          </p>
        </div>
        <div className="searchFilterBox searchFilterMid">
          <label>가격대</label>
          <p>
            <input
              type="checkbox"
              name=""
              value="만원미만"
              className="checkBox"
              id="checkBoxMid"
            />
            <label for="checkBoxMid">만원 미만</label>
            <input
              type="checkbox"
              name=""
              value="1만원대"
              className="checkBox"
              id="checkBoxMid1"
            />
            <label for="checkBoxMid1">1만원대</label>
            <input
              type="checkbox"
              name=""
              value="2만원대"
              className="checkBox"
              id="checkBoxMid2"
            />
            <label for="checkBoxMid2">2만원대</label>
            <input
              type="checkbox"
              name=""
              value="3만원대"
              className="checkBox"
              id="checkBoxMid3"
            />
            <label for="checkBoxMid3">3만원대</label>
          </p>
        </div>
        <div className="searchFilterBox searchFilterBot">
          <label>음식 종류</label>
          <p>
            <input
              type="checkbox"
              name=""
              value="한식"
              className="checkBox"
              id="checkBoxBot"
            />
            <label for="checkBoxBot">한식</label>
            <input
              type="checkbox"
              name=""
              value="일식"
              className="checkBox"
              id="checkBoxBot1"
            />
            <label for="checkBoxBot1">일식</label>
            <input
              type="checkbox"
              name=""
              value="중식"
              className="checkBox"
              id="checkBoxBot2"
            />
            <label for="checkBoxBot2">중식</label>
            <input
              type="checkbox"
              name=""
              value="양식"
              className="checkBox"
              id="checkBoxBot3"
            />
            <label for="checkBoxBot3">양식</label>
            <input
              type="checkbox"
              name=""
              value="카페"
              className="checkBox"
              id="checkBoxBot4"
            />
            <label for="checkBoxBot4">카페</label>
            <input
              type="checkbox"
              name=""
              value="주점"
              className="checkBox"
              id="checkBoxBot5"
            />
            <label for="checkBoxBot5">주점</label>
            <input
              type="checkbox"
              name=""
              value="기타"
              className="checkBox"
              id="checkBoxBot6"
            />
            <label for="checkBoxBot6">기타</label>
          </p>
        </div>
      </div>
    </article>
  );
};

export default ResultList;
