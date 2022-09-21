import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfileModal.scss';
import ProfileModalItem from './ProfileModalItem';

const ProfileModal = ({ setProfileClicked }) => {
  const navigate = useNavigate();

  const profileEditClick = () => {
    navigate('/mypage');
    setProfileClicked(false);
  };

  // 최근 본 식당
  // useEffect(() => {
  //   const myArr = localStorage.getItem('watched');
  //   myArr === null ? (myArr = []) : (myArr = JSON.parse(myArr));
  // }, []);

  return (
    <div className="profileModal">
      <div
        className="profileModalBack"
        onClick={() => {
          setProfileClicked(false);
        }}
      />
      <div className="profileModalBox">
        <div className="profileModalCategory">
          <div className="profileModalTab">최근 본 식당</div>
          <div className="profileModalTab">가고 싶다</div>
          <div className="profileModalTab" onClick={profileEditClick}>
            마이페이지
          </div>
        </div>
        <div className="profileModalItemList">
          <ProfileModalItem />
          <ProfileModalItem />
          <ProfileModalItem />
          <ProfileModalItem />
          <ProfileModalItem />
          <ProfileModalItem />
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
