import React, { useState } from 'react';
import SignUp from './Login/Login';
import AdiminLogin from './AdminLogin/AdminLogin';
import './LoginTap.scss';
import TestLogin from './Login/TestLogin';

export default function LoginTap() {
  const [currentId, setCurrentId] = useState('로그인');

  return (
    <div className="wrapper">
      <div className="logintabs">
        {CATEGORY_ARR.map(category => {
          return (
            <button
              className={category}
              key={category}
              onClick={() => setCurrentId(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="contents">
        <TestLogin currentId={currentId} />
      </div>
    </div>
  );
}

const CATEGORY_ARR = ['로그인', '사장님로그인'];
