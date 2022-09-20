import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuDropDown from './MenuDropDown';
import ProfileModal from './ProfileModal';
import SearchForm from '../../Pages/Main/SearchForm';

import './Header.scss';
import ModalPortal from '../../Portal';

const Header = () => {
  const url = document.location.href;

  const [user, setUser] = useState({});

  const [menuOpened, setMenuOpened] = useState(false);

  const [profileClicked, setProfileClicked] = useState(false);

  const profileClick = () => {
    setProfileClicked(true);
  };

  const menuOpen = () => {
    setMenuOpened(true);
  };

  const menuClose = () => {
    setMenuOpened(false);
  };

  useEffect(() => {
    fetch('./jiwonData/loginUser.json')
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="headerRight" onClick={() => navigate('/')}>
        <img className="headerLogoImg" src={LOGO_IMAGE} alt="로고이미지" />
        <img className="headerLogoImg" src={LOGO_TEXT_IMAGE} alt="로고이미지" />
      </div>

      {url !== 'http://localhost:3000/' && <SearchForm />}

      <div className="headerLeft">
        <img
          className="headerCategories"
          src={CATEGORY_IMAGE}
          alt="메뉴 열기"
          onMouseOver={menuOpen}
        />
        <img
          className="headerProfileImg"
          src={user.user_profile_img}
          alt="프로필 이미지"
          onClick={profileClick}
        />
        {menuOpened && <MenuDropDown menuClose={menuClose} />}
        <ModalPortal>
          {profileClicked && (
            <ProfileModal setProfileClicked={setProfileClicked} />
          )}
        </ModalPortal>
      </div>
    </div>
  );
};

export default Header;

const LOGO_IMAGE = `${process.env.PUBLIC_URL}/images/melonmain.png`;
const LOGO_TEXT_IMAGE = `${process.env.PUBLIC_URL}/images/logo(melon).png`;
const CATEGORY_IMAGE = `${process.env.PUBLIC_URL}/images/categories.png`;
