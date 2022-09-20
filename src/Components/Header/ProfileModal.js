import React from 'react';
import './ProfileModal.scss';
import ProfileModalItem from './ProfileModalItem';

const ProfileModal = ({ setProfileClicked }) => {
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
