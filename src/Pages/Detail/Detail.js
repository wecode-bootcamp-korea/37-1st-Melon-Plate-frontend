import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Slide from './Slide';
import ReviewList from '../../Components/ReviewList/ReviewList';
import API from '../../config';
import './Detail.scss';

const Detail = () => {
  const [restaurantData, setRestaurantData] = useState({});
  const [reviewCount, setReviewCount] = useState();
  const accessToken = localStorage.getItem('TOKEN');
  const params = useParams();

  useEffect(() => {
    fetch(`${API.detail}/${params.id}`, {
      method: 'GET',
      headers: {
        authorization: accessToken,
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(result => (console.log(result), setRestaurantData(result)));
  }, []);

  const [liked, setLiked] = useState(false);
  const likedClick = () => {
    setLiked(!liked);
  };

  const createDate = new Date(restaurantData.create_at);

  return (
    <div className="detailWrap">
      <div className="top">
        <Slide image={restaurantData.reviewImg} />
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
                to={`/detail/write/${params.id}`}
                className="reviewButton button"
              >
                <i className="fa-regular fa-pen-to-square" />
                <span>리뷰 쓰기</span>
              </Link>

              <button
                type=""
                className="likeButton button"
                onClick={likedClick}
              >
                <img
                  src={BLACK_MELON}
                  alt="melonIcon"
                  className="melonIconBlack"
                />
                <img
                  src={GREEN_MELON}
                  alt="melonIcon"
                  className="melonIconColor"
                />
                <span>가고 싶다</span>
              </button>
            </div>
          </div>

          <div className="storeStatus">
            <span className="view">{restaurantData.view_count}</span>
            <span className="review">{reviewCount}</span>
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
                {restaurantData.category}
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
                {restaurantData.closed_day
                  ? restaurantData.closed_day
                  : '연중무휴'}
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
          <ReviewList setReviewCount={setReviewCount} storeId={params.id} />
        </div>
      </div>
    </div>
  );
};

export default Detail;

const BLACK_MELON = `${process.env.PUBLIC_URL}/images/07E08BB9-5390-41B4-9270-DC83C7D8ACE2.jpeg`;
const GREEN_MELON = `${process.env.PUBLIC_URL}/images/20596969-F8C3-4D15-9D89-16ECCE2090F5.jpeg`;
