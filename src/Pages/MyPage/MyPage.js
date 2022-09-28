import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalPortal from './../../Portal';
import ProfileEdit from './ProfileEdit';
import LikedItem from './LikedItem';
import ReviewedItem from './ReviewedItem';
import './MyPage.scss';

const MyPage = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('TOKEN');
  const [user, setUser] = useState({});
  const [likedStore, setLikedStore] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [editClicked, setEditClicked] = useState(false);

  useEffect(() => {
    fetch('http://192.168.215.82:3000/user/profile', {
      method: 'GET',
      headers: {
        authorization: accessToken,
      },
    })
      .then(res => res.json())
      .then(
        data => (
          setUser(...data.profile),
          setReviews(data.reviews),
          setLikedStore(data.likes)
        )
      );
  }, []);

  const logOutClick = () => {
    localStorage.removeItem('TOKEN');
    navigate('/');
  };

  const gender = () => {
    if (user.gender === '여') {
      return '여성';
    } else if (user.gender === '남') {
      return '남성';
    } else if (user.gender == null) {
      return null;
    }
  };

  return (
    <div className="myPage">
      <div className="myPageBox">
        <div className="myPageTitle">마이 페이지</div>
        <div className="myPageMiniTitle">사용자 정보</div>
        <div className="myPageUserInfo">
          <img
            className="userProfileImg"
            alt="프로필 사진"
            src={user.profile_image}
          />
          <div className="userProfileText">
            <span className="userNickname">
              {user.nickname ? user.nickname : '손'}님, 안녕하세요!
            </span>
            <span className="userId">
              @ {user.user_id ? user.user_id : '로그인 해주세요'}
            </span>
            <span className="userAgeAndGender">
              {user.age ? `${user.age}대 ${gender(user.gender)}` : null}
            </span>
          </div>
          <div className="buttonSet">
            <button
              className="profileEditBtn"
              onClick={() => setEditClicked(true)}
            >
              프로필 수정
            </button>
            <button className="logOutBtn" onClick={logOutClick}>
              로그아웃
            </button>
          </div>
        </div>
        <div className="myActions">
          <div className="myActionBox">
            <div className="myPageMiniTitle">내가 좋아요 한 식당</div>
            <div className="myPageItemList">
              {likedStore.map(e => (
                <LikedItem item={e} key={e.stores_id} onClick={() => {}} />
              ))}
            </div>
          </div>

          <div className="myActionBox2">
            <div className="myPageMiniTitle">내가 작성한 후기</div>
            <div className="myPageItemList">
              {reviews.map(e => (
                <ReviewedItem item={e} key={e.stores_id} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <ModalPortal>
        {editClicked && (
          <ProfileEdit user={user} setEditClicked={setEditClicked} />
        )}
      </ModalPortal>
    </div>
  );
};

export default MyPage;
