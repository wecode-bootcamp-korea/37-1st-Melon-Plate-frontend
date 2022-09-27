import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
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

  const [inputValues, setInputValues] = useState({
    id: '',
    pw: '',
    nickname: '',
    name: '',
    gender: '',
  });
  const handleInput = event => {
    const { name, value } = event.target;
    setInputValues(prev => ({ ...prev, [name]: value }));
  };

  const { id, pw, nickname, gender } = inputValues;

  const [age, setAge] = useState('');
  const saveUserAge = e => {
    setAge(e.target.value);
  };

  const fileInput = useRef(null);
  const [file, setFile] = useState('');

  const userSignUp = new FormData();
  userSignUp.append('profileImg', file);
  userSignUp.append('nickname', nickname);
  userSignUp.append('userId', id);
  userSignUp.append('password', pw);
  userSignUp.append('gender', gender);
  userSignUp.append('age', age);

  if (currentId === '사장님회원가입') {
    userSignUp.append('admin', true);
  }

  const goToMain = e => {
    e.preventDefault();

    fetch('https://87ca-211-106-114-186.jp.ngrok.io/user/signup', {
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
          {INPUT_LIST.map(list => {
            return (
              <input
                type={list.type}
                name={list.name}
                placeholder={list.placeholder}
                onChange={handleInput}
                key={list.id}
              />
            );
          })}
          {currentId === '일반 회원가입' && (
            <>
              <div>
                <input
                  className="gender"
                  type="radio"
                  name="gender"
                  value="남"
                  onChange={handleInput}
                />
                남자
                <input
                  className="gender"
                  type="radio"
                  name="gender"
                  value="여"
                  onChange={handleInput}
                />
                여자
                <input
                  className="gender"
                  type="radio"
                  name="gender"
                  value=""
                  onChange={handleInput}
                />
                비공개
              </div>
              <label>연령대</label>
              <select
                className="age"
                onChange={saveUserAge}
                value={age}
                name="age"
              >
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

          <Link to="/logintap">이미 가입하셨나요? 로그인</Link>
        </form>
      </div>
    </div>
  );
};

export default TestSignup;

const INPUT_LIST = [
  { id: 1, type: 'text', name: 'nickname', placeholder: '닉네임(2글자 이상)' },
  { id: 2, type: 'text', name: 'id', placeholder: '아이디(5글자 이상)' },
  {
    id: 3,
    type: 'password',
    name: 'pw',
    placeholder: '비밀번호(8글자 이상 20글자 미만)',
  },
];
