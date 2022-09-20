import React from 'react';
import './ProfileModalItem.scss';

const ProfileModalItem = () => {
  return (
    <div className="profileModalItem">
      <div className="profileModalLeft">
        <img
          src="https://mblogthumb-phinf.pstatic.net/MjAyMDA1MDlfMjg1/MDAxNTg5MDA2NzM3NTY1.vbkJ7vAY2zJvHquMROXPz30Pu2a8AwrM71bmLRWodmIg.5nYu6XNhr-EZFCCXJzlsoDXa_GchHDHBxkqb1AsqYwQg.JPEG.hongrunrun/DSC08517.JPG?type=w800"
          alt="식당 사진"
        />
        <div className="profileModalLeftText">
          <div className="profileModalTitle">
            <span className="profileModalStoreName">은희네 해장국</span>
            <span className="profileModalScore">4.5</span>
          </div>
          <span className="profileModalStoreIntroduce">지역 - 음식 종류</span>
        </div>
      </div>
      <div className="profileModalLiked">
        <i className="fa-star fa-regular" />
      </div>
    </div>
  );
};

export default ProfileModalItem;
