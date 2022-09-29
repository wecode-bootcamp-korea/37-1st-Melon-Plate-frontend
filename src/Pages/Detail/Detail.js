import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Slide from './Slide';
import ReviewList from '../../Components/ReviewList/ReviewList';
import './Detail.scss';

const Detail = () => {
  const [restaurantData, setRestaurantData] = useState({});
  const accessToken = localStorage.getItem('TOKEN');
  const params = useParams();

  useEffect(() => {
    return () => {
      fetch(`http://192.168.215.82:3000/detail/${params.id}`, {
        method: 'get',
        headers: {
          authorization: accessToken,
        },
      })
        .then(response => response.json())
        .then(result => {
          setRestaurantData(result);
        }, []);
    };
  }, []);

  const createDate = new Date(restaurantData.create_at);

  return (
    <div className="detailWrap">
      <div className="top">
        <Slide restaurantDataImage={restaurantData.reviewImg} />
      </div>
      <div className="storeInfo">
        <div className="storeInfoHead">
          <div className="storeInfoWrap">
            <div className="storeInfoLeft">
              <span className="storeName">{restaurantData.name}</span>
              <span className="storeStar">{restaurantData.likes_count}</span>
            </div>
            <div className="storeInfoRight">
              <Link
                to={`/detail/write/${restaurantData.name}`}
                className="reviewButton button"
              >
                <i className="fa-regular fa-pen-to-square" />
                <span>리뷰 쓰기</span>
              </Link>

              <button type="" className="likeButton button">
                <img
                  src="/images/07E08BB9-5390-41B4-9270-DC83C7D8ACE2.jpeg"
                  alt="melonIcon"
                  className="melonIconBlack"
                />
                <img
                  src="/images/20596969-F8C3-4D15-9D89-16ECCE2090F5.jpeg"
                  alt="melonIcon"
                  className="melonIconColor"
                />
                <span>가고 싶다</span>
              </button>
            </div>
          </div>

          <div className="storeStatus">
            <span className="view">{restaurantData.view_count}</span>
            <span className="review">{restaurantData.review_count}</span>
          </div>
        </div>

        <div className="storeData">
          <table className="storeDataTable">
            <tr>
              <th className="tableTh gray">주소</th>
              <td className="tableTd data" colSpan="2">
                {restaurantData.address}
              </td>
            </tr>
            <tr>
              <th className="tableTh gray">전화번호</th>
              <td className="tableTd data" colSpan="2">
                {restaurantData.tel}
              </td>
            </tr>
            <tr>
              <th className="tableTh gray">음식종류</th>
              <td className="tableTd data" colSpan="2">
                {restaurantData.category_id}
              </td>
            </tr>
            <tr>
              <th className="tableTh gray">가격대</th>
              <td className="tableTd data" colSpan="2">
                {restaurantData.price_range === '0'
                  ? '1만원 미만'
                  : restaurantData.price_range === '1'
                  ? '1만원 - 2만원대'
                  : restaurantData.price_range === '2'
                  ? '2만원 - 3만원대'
                  : restaurantData.price_range === '3'
                  ? '3만원 - 4만원대'
                  : ''}
              </td>
            </tr>
            <tr>
              <th className="tableTh gray">오픈 시간</th>
              <td className="tableTd data" colSpan="2">
                {restaurantData.open_time} - {restaurantData.closed_time}
              </td>
            </tr>
            <tr>
              <th className="tableTh gray">휴무일</th>
              <td className="tableTd data" colSpan="2">
                {restaurantData.closed_time}
              </td>
            </tr>
            <tr>
              <th className="tableTh gray" rowSpan="3">
                메뉴
              </th>
              <td className="tableTd data">
                <ul className="tableTdUl">
                  {restaurantData.menu?.map((item, index) => (
                    <li key={index} className="tableTdUlLi">
                      <span className="munuName data">{item.name}</span>
                      <span className="munuPrice gray">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </table>
          <div>
            <ReviewList />
          </div>
        </div>

        <div className="updateDateWrap">
          <p>
            업데이트 :
            {createDate.getFullYear() +
              '-' +
              (createDate.getMonth() + 1) +
              '-' +
              createDate.getDate()}
          </p>
        </div>
        <div>
          <ReviewList />
        </div>
      </div>
    </div>
  );
};

export default Detail;
