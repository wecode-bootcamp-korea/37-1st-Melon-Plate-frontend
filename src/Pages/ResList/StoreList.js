import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import MenuItem from './MenuItem';
import './StoreList.scss';

const StoreList = () => {
  const accessToken = localStorage.getItem('TOKEN');

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const params = window.location.search;

  const menuListClick = (location, menu, limit, category) => {
    searchParams.set('query', '');
    searchParams.set('price', 0);
    searchParams.set('location', location);
    searchParams.set('menu', menu);
    searchParams.set('category', category);
    searchParams.set('limit', limit);
    setSearchParams(searchParams);
    navigate(`/resultlist?${searchParams.toString()}`);
    fetch(`http://192.168.215.167:3000/main/search?${searchParams}`)
      .then(response => response.json())
      .then(result => console.log(result.data));
  };

  return (
    <div className="storeList">
      <div className="storeListContainer">
        <div className="storeListTitle">
          <span>멜론 플레이트 추천 맛집 ! </span>
          <span>인기 식당을 한눈에 확인하세요</span>
        </div>

        <div className="menuItemList">
          {STORE_SORT.map(
            ({ img, location, menu, category, limit, description }) => (
              <MenuItem
                key={img}
                location={location}
                menu={menu}
                category={category}
                limit={limit}
                img={img}
                description={description}
                menuListClick={menuListClick}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreList;

const STORE_SORT = [
  {
    location: '선릉',
    menu: '삼겹살',
    limit: '15',
    category: '',
    img: './images/samgyup.jpg',
    description: '한국인의 소울푸드, 삼겹살 맛집!',
  },
  {
    location: '강남',
    menu: '피자',
    limit: '10',
    category: '',
    img: './images/pizza.jpg',
    description: '뭘 먹을지 고민될 땐 피자를 드세요!',
  },

  {
    location: '논현',
    menu: '파스타',
    category: '',
    limit: '10',
    img: './images/pasta.jpg',
    description: '데이트 장소를 찾고 있나요?',
  },
  {
    location: '청담',
    menu: '',
    category: '주점',
    limit: '20',
    img: './images/bar.jpg',
    description: '불금을 즐기고 싶으신 분',
  },
  {
    location: '신사',
    menu: '돈까스',
    category: '',
    limit: '10',
    img: './images/porkcutlet.jpeg',
    description: '돈까스 싫어하시는 분 계신가요?',
  },
  {
    location: '선릉',
    menu: '',
    category: '한식',
    limit: '10',
    img: './images/koreanfood.jpg',
    description: '한국인은 한식',
  },
];
