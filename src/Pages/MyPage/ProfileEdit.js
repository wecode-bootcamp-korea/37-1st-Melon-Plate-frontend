import React from 'react';
import './ProfileEdit.scss';

const ProfileEdit = ({ setEditClicked }) => {
  return (
    <div className="profileEdit">
      <div
        className="profileModalBack"
        onClick={() => {
          setEditClicked(false);
        }}
      />
      <div className="profileEditBox">
        <i
          className="searchXButton fa-x fa-solid"
          onClick={() => {
            setEditClicked(false);
          }}
        />
        <div className="profileImgEdit">
          프로필 사진 변경
          <img />
        </div>
        <div className="profileTextEdit">
          <input className="profileEditInput" placeholder="닉네임 변경" />
          <div className="profileEditGenderWrap">
            <div className="profileEditGender">
              <input
                className="profileEditGenderRadio"
                type="radio"
                name="gender"
              />
              <span>남성</span>
            </div>
            <div className="profileEditGender">
              <input
                className="profileEditGenderRadio"
                type="radio"
                name="gender"
              />
              <span>여성</span>
            </div>
            <div className="profileEditGender">
              <input
                className="profileEditGenderRadio"
                type="radio"
                name="gender"
              />
              <span>비공개</span>
            </div>
          </div>
        </div>
        <button className="profileEditSaveBtn">저장하기</button>
      </div>
    </div>
  );
};

export default ProfileEdit;
