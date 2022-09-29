import React, { useEffect, useState, useRef } from 'react';
import API from '../../config';
import './ProfileEdit.scss';

const ProfileEdit = ({ setEditClicked, user }) => {
  const accessToken = localStorage.getItem('TOKEN');
  const fileInput = useRef(null);
  const [imgFile, setImgFile] = useState({});
  const [imageSrc, setImageSrc] = useState(user.profile_image);
  const [input, setInput] = useState({
    nickname: user.nickname,
    age: user.age,
    gender: user.gender,
  });

  const encodeFileToBase64 = fileBlob => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise(resolve => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  const handleImageInput = e => {
    encodeFileToBase64(e.target.files[0]);
    setImgFile(e.target.files[0]);
  };

  const handleInput = e => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const profileEditForm = new FormData();
  profileEditForm.append('profile_image', imgFile);
  profileEditForm.append('nickname', input.nickname);
  profileEditForm.append('gender', input.gender);
  profileEditForm.append('age', input.age);

  const profileEditSave = e => {
    e.preventDefault();
    fetch(`${API.profile}`, {
      method: 'PATCH',
      headers: {
        enctype: 'multipart/form-data',
        authorization: accessToken,
      },
      body: profileEditForm,
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .then(() => window.location.reload())
      .then(() => setEditClicked(false));
  };

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
          <span className="profileEditFormTitle">프로필 수정</span>
          <div className="profileImgEdit">
            <div className="profileImgContainer">
              <img className="profileImg" src={imageSrc} alt="사진" />

              <input
                className="profileImgInput"
                type="file"
                accept="image/*"
                onChange={handleImageInput}
                ref={fileInput}
              />
            </div>
          </div>
          <div className="profileTextEdit">
            <div className="profileEditInputSet">
              <span className="inputSetTitle">닉네임</span>
              <input
                className="profileEditInput"
                placeholder="닉네임 변경"
                onChange={handleInput}
                name="nickname"
                value={input.nickname}
              />
            </div>
            <div className="profileEditInputSet">
              <span className="inputSetTitle">성별</span>
              <div className="profileEditGenderWrap">
                <div className="profileEditGender">
                  <input
                    className="profileEditGenderRadio"
                    type="radio"
                    name="gender"
                    value={user.gender}
                    onChange={handleInput}
                  />
                  <span>남성</span>
                </div>
                <div className="profileEditGender">
                  <input
                    className="profileEditGenderRadio"
                    type="radio"
                    name="gender"
                    value={user.gender}
                    onChange={handleInput}
                  />
                  <span>여성</span>
                </div>
                <div className="profileEditGender">
                  <input
                    className="profileEditGenderRadio"
                    type="radio"
                    name="gender"
                    value={user.gender}
                    onChange={handleInput}
                  />
                  <span>비공개</span>
                </div>
              </div>
            </div>
            <div className="profileEditInputSet">
              <span className="inputSetTitle">연령대 </span>
              <select className="age" onChange={handleInput} name="age">
                {AGES.map(opt => (
                  <option key={opt.value} value={opt.value}>
                    {opt.text}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button className="profileEditSaveBtn" onClick={profileEditSave}>
            저장하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;

const AGES = [
  { value: '', text: '==연령대를 선택하세요==' },
  { value: 10, text: '10대' },
  { value: 20, text: '20대' },
  { value: 30, text: '30대' },
  { value: 40, text: '40대' },
  { value: 50, text: '50대' },
  { value: 0, text: '비공개' },
];
