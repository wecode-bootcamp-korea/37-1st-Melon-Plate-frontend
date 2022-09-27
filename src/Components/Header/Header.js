import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuDropDown from './MenuDropDown';
import ProfileModal from './ProfileModal';
import ModalPortal from '../../Portal';
import SearchForm from '../../Pages/Main/SearchForm';
import './Header.scss';

const Header = () => {
  const location = useLocation();
  const [user, setUser] = useState({});
  const [menuOpened, setMenuOpened] = useState(false);
  const [profileClicked, setProfileClicked] = useState(false);

  useEffect(() => {
    fetch('./jiwonData/loginUser.json')
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  const pathList = ['/mypage', '/resultlist', '/reslist', '/storelist'];

  return (
    <div className="header">
      <Link to="/">
        <div className="headerRight">
          <img className="headerLogoImg" src={LOGO_IMAGE} alt="로고이미지" />
          <img
            className="headerLogoImg"
            src={LOGO_TEXT_IMAGE}
            alt="로고이미지"
          />
        </div>
      </Link>
      {pathList.indexOf(location.pathname) !== -1 && <SearchForm />}
      {pathList.indexOf(location.pathname) !== -1 && (
        <div className="headerLeft">
          <img
            className="headerCategories"
            src={CATEGORY_IMAGE}
            alt="메뉴 열기"
            onMouseOver={() => setMenuOpened(true)}
          />
          <img
            className="headerProfileImg"
            src={user.user_profile_img}
            alt="프로필 이미지"
            onClick={() => setProfileClicked(true)}
          />
          {menuOpened && <MenuDropDown setMenuOpened={setMenuOpened} />}
          <ModalPortal>
            {profileClicked && (
              <ProfileModal setProfileClicked={setProfileClicked} />
            )}
          </ModalPortal>
          :!
        </div>
      )}
    </div>
  );
};

export default Header;

const LOGO_IMAGE = `${process.env.PUBLIC_URL}/images/melonmain.png`;
const LOGO_TEXT_IMAGE = `${process.env.PUBLIC_URL}/images/logo(melon).png`;
const CATEGORY_IMAGE = `${process.env.PUBLIC_URL}/images/categories.png`;
