import React, { useEffect, useState } from 'react';
import ModalPortal from './../../Portal';
import ProfileEdit from './ProfileEdit';
import './MyPage.scss';
import LikedItem from './LikedItem';
import ReviewedItem from './ReviewedItem';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const [user, setUser] = useState({});
  const [editClicked, setEditClicked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('./jiwonData/loginUser.json')
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  const editClick = () => {
    setEditClicked(true);
  };

  const logOutClick = () => {
    localStorage.removeItem('TOKEN');
    navigate('/');
  };

  const gender = () => {
    if (user.user_gender === 'female') {
      return '여성';
    } else if (user.user_gender === 'male') {
      return '남성';
    } else if (user.user_gender == null) {
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
            src={user.user_profile_img}
          />
          <div className="userProfileText">
            <span className="userNickname">
              {user.user_nickname ? user.user_nickname : '손'}님, 안녕하세요!
            </span>
            <span className="userId">
              @ {user.user_id ? user.user_id : '로그인 해주세요'}
            </span>
            <span className="userAgeAndGender">
              {user.user_age
                ? `$(user.user_age)대 $(gender(user.user_gender))`
                : null}
            </span>
          </div>
          <div className="buttonSet">
            <button className="profileEditBtn" onClick={editClick}>
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
              <LikedItem />
              <LikedItem />
              <LikedItem />
              <LikedItem />
              <LikedItem />
              <LikedItem />
              <LikedItem />
              <LikedItem />
              <LikedItem />
              <LikedItem />
            </div>
          </div>
          {/* <div className="myActionBox">
            <div className="myPageMiniTitle">나의 예약 리스트</div>
            <div className="myPageItemList">
              <LikedItem />
              <LikedItem />
              <LikedItem />
              <LikedItem />
              <LikedItem />
            </div>
          </div> */}
          <div className="myActionBox2">
            <div className="myPageMiniTitle">내가 작성한 후기</div>
            <div className="myPageItemList">
              <ReviewedItem />
              <ReviewedItem />
            </div>
          </div>
        </div>
      </div>
      <ModalPortal>
        {editClicked && <ProfileEdit setEditClicked={setEditClicked} />}
      </ModalPortal>
    </div>
  );
};

export default MyPage;
