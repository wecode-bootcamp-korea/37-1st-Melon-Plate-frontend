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
        <div className="profileEditForm">
          <span>프로필 수정</span>
          <div className="profileImgEdit">
            <div className="profileImgContainer">
              <img //프로필사진 기능구현
                className="profileImg2"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="사진"
              />
              <input className="profileImg" type="file" />
            </div>
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
            <label>연령대</label>
            <select className="age">
              <option value="">연령대를 선택하세요</option>
              <option value="10">10대</option>
              <option value="20">20대</option>
              <option value="30">30대</option>
              <option value="40">40대</option>
              <option value="50">50대이상</option>
              <option value="0">비공개</option>
            </select>
          </div>
          <button className="profileEditSaveBtn">저장하기</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
