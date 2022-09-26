import React, { useState } from 'react';
import './SignupTap.scss';
import TestSignup from './Signup/TestSignup';

export default function SignupTap() {
  const [currentId, setCurrentId] = useState('일반 회원가입');

  return (
    <div className="wrapper">
      <div className="signupTap">
        {CATEGORY_ARR.map(category => {
          return (
            <button
              key={category}
              className="category"
              onClick={() => setCurrentId(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="contents">
        <TestSignup currentId={currentId} />
      </div>
    </div>
  );
}

const CATEGORY_ARR = ['일반 회원가입', '사장님회원가입'];
