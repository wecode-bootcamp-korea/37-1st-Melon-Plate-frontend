import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import MenuItem from './MenuItem';
import './StoreList.scss';

const StoreList = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const menuListClick = (address, menu, limit, category) => {
    searchParams.set('location', address);
    searchParams.set('menu', menu);
    searchParams.set('category', category);
    searchParams.set('limit', limit);
    searchParams.set('query', '');
    searchParams.set('offDay', '');
    searchParams.set('price', '');
    searchParams.set('filter', '');
    setSearchParams(searchParams);
    navigate(`/resultlist?${searchParams.toString()}`);
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
            ({ img, address, menu, category, limit, description }) => (
              <MenuItem
                key={img}
                address={address}
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
    address: '선릉',
    menu: '삼겹살',
    limit: '15',
    category: '',
    img: './images/samgyup.jpg',
    description: '한국인의 소울푸드, 삼겹살 맛집!',
  },
  {
    address: '강남',
    menu: '피자',
    limit: '10',
    category: '',
    img: './images/pizza.jpg',
    description: '뭘 먹을지 고민될 땐 피자를 드세요!',
  },

  {
    address: '역삼',
    menu: '파스타',
    category: '',
    limit: '10',
    img: './images/pasta.jpg',
    description: '데이트 장소를 찾고 있나요?',
  },
  {
    address: '선릉',
    menu: '',
    category: '주점',
    limit: '20',
    img: './images/bar.jpg',
    description: '불금을 즐기고 싶으신 분',
  },
  {
    address: '강남',
    menu: '돈까스',
    category: '',
    limit: '10',
    img: './images/porkcutlet.jpeg',
    description: '돈까스 싫어하시는 분 계신가요?',
  },
  {
    address: '선릉',
    menu: '',
    category: '한식',
    limit: '10',
    img: './images/koreanfood.jpg',
    description: '한국인은 한식',
  },
];
