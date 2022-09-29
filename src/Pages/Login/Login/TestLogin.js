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
      .then(response => response.json())

      .then(data => {
        // return console.log(data);
        localStorage.setItem('TOKEN', data.accessToken);
        localStorage.setItem('nickname', data.nickname);
        if (currentId === '사장님로그인' && data.admin === 'TRUE') {
          navigate('/adminpage');
        } else if (currentId === '로그인' && data.admin === '') {
          navigate('/');
        }
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
          <Link to="/signuptap" className="link">
            아직 회원이 아니신가요? 회원가입
          </Link>
        </form>
      </div>
    </div>
  );
};

export default TestLogin;
