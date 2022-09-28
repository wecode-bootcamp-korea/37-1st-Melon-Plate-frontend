import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.scss';

const TestLogin = ({ currentId }) => {
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    userId: '',
    password: '',
  });

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValues(prev => ({ ...prev, [name]: value }));
  };

  const goToMain = e => {
    e.preventDefault();

    fetch('http://192.168.215.82:3000/user/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(inputValues),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        } else {
          throw new Error('응답을 받을수 없음!');
        }
      })
      .catch(error => {
        alert('아이디 또는 비밀번호가 틀렸습니다.');
      })
      .then(data => {
        // if (data.message === 'login success') {
        localStorage.setItem('TOKEN', data.token);
        navigate('/');
        // }
      });
  };
  return (
    <div>
      <div className="userInfo">
        <h2 className="title">{currentId}</h2>
        <form>
          <input
            type="userId"
            placeholder="아이디"
            onChange={handleInput}
            name="userId"
          />
          <input
            type="password"
            placeholder="비밀번호"
            onChange={handleInput}
            name="password"
          />

          <button onClick={goToMain}>로그인</button>
          <Link to="/signtap" className="link">
            아직 회원이 아니신가요? 회원가입
          </Link>
        </form>
      </div>
    </div>
  );
};

export default TestLogin;
