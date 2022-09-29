import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuDropDown from './MenuDropDown';
import ProfileModal from './ProfileModal';
import ModalPortal from '../../Portal';
import SearchForm from '../../Pages/Main/SearchForm';
import API from '../../config';

import './Header.scss';

const Header = () => {
  const location = useLocation();
  const [user, setUser] = useState({});
  const [likedStore, setLikedStore] = useState([]);
  const [menuOpened, setMenuOpened] = useState(false);
  const [profileClicked, setProfileClicked] = useState(false);

  const accessToken = localStorage.getItem('TOKEN');

  useEffect(() => {
    fetch(`${API.profile}`, {
      method: 'GET',
      headers: {
        authorization: accessToken,
      },
    })
      .then(res => res.json())
      .then(data => setUser(...data.profile));
  }, []);

  //(setUser(...data.profile), setLikedStore(data.likes))

  const searchBarPathList = [
    '/mypage',
    '/resultlist',
    '/reslist',
    '/storelist',
    '/detail',
  ];
  const profilePathList = [
    '/',
    '/mypage',
    '/resultlist',
    '/reslist',
    '/storelist',
  ];

  return (
    <div className="header">
      <Link to="/">
        <div className="headerRight">
          <img
            className="headerLogoImg"
            src={LOGO_TEXT_IMAGE}
            alt="로고이미지"
          />
        </div>
      </Link>
      {searchBarPathList.indexOf(location.pathname) !== -1 && <SearchForm />}
      {accessToken && profilePathList.indexOf(location.pathname) !== -1 && (
        <div className="headerLeft">
          <img
            className="headerCategories"
            src={CATEGORY_IMAGE}
            alt="메뉴 열기"
            onMouseOver={() => setMenuOpened(true)}
          />
          <img
            className="headerProfileImg"
            src={user.profile_image}
            alt="프로필 이미지"
            onClick={() => setProfileClicked(true)}
          />
          {menuOpened && <MenuDropDown setMenuOpened={setMenuOpened} />}
          <ModalPortal>
            {profileClicked && (
              <ProfileModal
                setProfileClicked={setProfileClicked}
                likedStore={likedStore}
              />
            )}
          </ModalPortal>
        </div>
      )}
    </div>
  );
};

export default Header;

// const LOGO_IMAGE = `${process.env.PUBLIC_URL}/images/melonmain.png`;
const LOGO_TEXT_IMAGE = `${process.env.PUBLIC_URL}/images/logo(black).png`;
const CATEGORY_IMAGE = `${process.env.PUBLIC_URL}/images/categories.png`;
