import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import MenuItem from './MenuItem';
import './StoreList.scss';

const StoreList = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const menuListClick = e => {
    searchParams.set('address', e.target.childNodes[0].data);
    searchParams.set('menu', e.target.childNodes[2].data);
    searchParams.set('category', '');
    searchParams.set('limit', e.target.childNodes[4].data);
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
          {STORE_SORT.map(e => (
            <MenuItem
              key={e.img}
              address={e.address}
              menu={e.menu}
              limit={e.limit}
              img={e.img}
              menuListClick={menuListClick}
            />
          ))}
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
    img: './images/samgyup.jpg',
    description: '한국인의 소울푸드, 삼겹살 맛집!',
  },
  {
    address: '강남',
    menu: '피자',
    limit: '10',
    img: './images/dduk.jpg',
    description: '뭘 먹을지 고민될 땐 떡볶이를 드세요!',
  },

  {
    address: '논현',
    menu: '파스타',
    limit: '10',
    img: './images/pasta.jpg',
    description: '데이트 장소를 찾고 있나요?',
  },
  {
    address: '청담',
    menu: '주점',
    limit: '20',
    img: './images/bar.jpg',
    description: '불금을 즐기고 싶으신 분',
  },
  {
    address: '신사',
    menu: '돈까스',
    limit: '10',
    img: './images/porkcutlet.jpeg',
    description: '',
  },
];
