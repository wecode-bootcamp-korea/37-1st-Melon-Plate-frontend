import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import './Signup.scss';

const TestSignup = ({ currentId }) => {
  const [imageSrc, setImageSrc] = useState('');
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

  const fileInput = useRef(null);
  // const navigate = useNavigate();
  const [file, setFile] = useState('');
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [nickName, setNickName] = useState('');
  const [age, setAge] = useState();
  const [gender, setGender] = useState();

  const saveUserId = e => {
    setId(e.target.value);
  };

  const saveUserPw = e => {
    setPw(e.target.value);
  };

  const saveUserNn = e => {
    setNickName(e.target.value);
  };

  const saveUserAge = e => {
    setAge(e.target.value);
  };

  const saveUserGender = e => {
    setGender(e.target.value);
  };

  const userSignUp = new FormData();
  userSignUp.append('profileImg', file);
  userSignUp.append('nickname', nickName);
  userSignUp.append('userId', id);
  userSignUp.append('password', pw);
  userSignUp.append('gender', gender);
  userSignUp.append('age', age);
  userSignUp.append('admin', true);

  for (let value of userSignUp.values()) {
    console.log(value);
  }
  // const goToLogin = navigate('/logintap');
  const goToMain = e => {
    e.preventDefault();

    fetch('https://f9e6-211-106-114-186.jp.ngrok.io/user/signup', {
      method: 'POST',
      headers: {
        enctype: 'multipart/form-data',
      },
      body: userSignUp,
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        } else {
          throw new Error('응답을 받을수 없음!');
        }
      })
      .catch(error => {
        alert('회원가입 실패');
      })
      .then(data => {
        if (data.message === 'login success') {
          localStorage.setItem('TOKEN', data.token);
          alert('회원가입이 완료되었습니다.');
          // navigate('/logintap');
        }
      });
  };

  return (
    <div>
      <div className="userInfo">
        <h2 className="title">{currentId}</h2>
        <form id="signupForm">
          <div className="container">
            <img
              className="profileImg2"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="사진"
              onClick={() => {
                fileInput.current.click();
              }}
            />{' '}
            <input
              className="profileImg"
              type="file"
              onChange={e => {
                encodeFileToBase64(e.target.files[0]);
                setFile(e.target.files[0]);
              }}
              ref={fileInput}
            />
            {imageSrc && (
              <img src={imageSrc} alt="프로필사진" className="profileImg2" />
            )}
          </div>
          <input
            type="text"
            name="nickname"
            placeholder="닉네임"
            onChange={saveUserNn}
          />
          <input
            type="text"
            name="id"
            placeholder="아이디"
            onChange={saveUserId}
          />
          <input
            type="password"
            name="pw"
            placeholder="비밀번호"
            onChange={saveUserPw}
          />
          {currentId === '일반 회원가입' && (
            <>
              <div>
                <input
                  className="gender"
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={saveUserGender}
                />
                남자
                <input
                  className="gender"
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={saveUserGender}
                />
                여자
                <input
                  className="gender"
                  type="radio"
                  name="gender"
                  value="none"
                  onChange={saveUserGender}
                />
                비공개
              </div>
              <label>연령대</label>
              <select className="age" onChange={saveUserAge} value={age}>
                <option value="">연령대를 선택하세요</option>
                <option value="10">10대</option>
                <option value="20">20대</option>
                <option value="30">30대</option>
                <option value="40">40대</option>
                <option value="50">50대이상</option>
                <option value="0">비공개</option>
              </select>
            </>
          )}

          <button onClick={goToMain}>회원가입</button>

          <Link className="link">이미 가입하셨나요? 로그인</Link>
        </form>
      </div>
    </div>
  );
};

export default TestSignup;
