import React, { useState } from 'react';
import Signup from './Signup/Signup';
import AdminLogin from './AdminSignup/AdminSignup';
import './SignupTap.scss';

export default function SignupTap() {
  const [currentId, setCurrentId] = useState(1);

  const clickHandler = id => {
    setCurrentId(id);
  };

  return (
    <div className="wrapper">
      <div className="signupTap">
        {CATEGORY_ARR.map((category, idx) => {
          return (
            <button
              key={category + idx}
              className={category}
              onClick={() => clickHandler(idx + 1)}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="contents">{MAPPING_OBJ[currentId]}</div>
    </div>
  );
}

//변하는 값이 아니기 때문에 함수 밖에서 변수 선언
const MAPPING_OBJ = {
  1: <Signup />,
  2: <AdminLogin />,
};

//조건문 대신 배열로 매핑!
const CATEGORY_ARR = ['일반 회원가입', '사장님회원가입'];
