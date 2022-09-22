import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.scss';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const saveUserId = e => {
    setId(e.target.value);
  };

  const saveUserPW = e => {
    setPw(e.target.value);
  };

  const goToMain = e => {
    e.preventDefault();

    fetch('https://f9e6-211-106-114-186.jp.ngrok.io/user/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        userId: id,
        password: pw,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        } else {
          throw new Error('응답을 받을수 없음!');
        }
      })
      .catch(error => {
        // console.log(error);
        alert('아이디 또는 비밀번호가 틀렸습니다.');
      })
      .then(data => {
        console.log(data);

        localStorage.setItem('TOKEN', data.accessToken);
        navigate('/');
      });
  };

  return (
    <div>
      <div className="userInfo">
        <h2 className="title">사장님로그인</h2>
        <form>
          <input type="text" placeholder="아이디" onChange={saveUserId} />
          <input type="password" placeholder="비밀번호" onChange={saveUserPW} />

          <button onClick={goToMain}>로그인</button>
          <Link to="/logintap" className="link">
            아직 회원이 아니신가요? 회원가입
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
