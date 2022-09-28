import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdminPage.scss';
import Store from './Store';

const AdminPage = () => {
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    fetch('http://192.168.215.82:8000/user/admin', {
      method: 'GET',
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwidXNlcl9pZCI6InJsYWRtZHRuIiwiYWRtaW4iOiJUUlVFIiwiaWF0IjoxNjY0MjQ1NDU3fQ.HQhElcCgI6HrXSUoXD-3Q3MoruW2PzRJWn8KD1uORrs',
      },
    })
      .then(response => {
        return response.json();
      })
      .then(data => setStoreData(data));
  }, []);

  const navigate = useNavigate();
  const goToAdminAdd = () => {
    navigate('/admin/create');
  };
  console.log(storeData);

  return (
    <>
      <div className="myStoreList">내 가게 리스트</div>
      <div className="addInfo">
        <button className="add" onClick={goToAdminAdd}>
          추가하기
        </button>
      </div>
      <div className="storeList">
        {/* {text?.map(item => {
          return (
            <Link key={item.id} to={`/user/admin/${item.id}`}>
              <Store text={item} />;
            </Link>
          );
        })} */}

        {storeData?.map(item => {
          return <Store text={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default AdminPage;

// const text = [
//   {
//     id: 1,
//     image:
//       'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA5MTVfMjA4%2FMDAxNjYzMjA0NTE3OTI1.kgWpmxVdE8Ae7GtvGmswN320KHLVjxPGs0rw6N3TZpYg.qwriTz25DKbl8iKC7foCPpkqdakDcpn38yRA_hb-0eog.JPEG.kciis33%2FKakaoTalk_20220915_100312785_15.jpg&type=a340',
//     name: '차이나',
//     rate: '4.5',
//     address: '주소 : 	서울특별시 용산구 한강대로40길 14 1F 104호',
//     tel: '전화번호 : 	010-2757-3592',
//     open_time: '영업시간 : 	17:00 - 23:00',
//     closed_time: 'ddddddddddd',
//     closed_day: '휴일 : 수',
//     category_id: '중국음식',
//   },
//   {
//     id: 2,
//     name: '성종화',
//     rate: '4.5',
//     address: '주소 : 	서울특별시 용산구 한강대로40길 14 1F 104호',
//     tel: '전화번호 : 	010-2757-3592',
//     open_time: '영업시간 : 	17:00 - 23:00',
//     closed_time: 'ddddddddddd',
//     closed_day: '휴일 : 수',
//     category_id: '중국음식',
//   },
//   {
//     id: 3,
//     name: '김지원',
//     rate: '4.5',
//     address: '주소 : 	서울특별시 용산구 한강대로40길 14 1F 104호',
//     tel: '전화번호 : 	010-2757-3592',
//     open_time: '영업시간 : 	17:00 - 23:00',
//     closed_time: 'ddddddddddd',
//     closed_day: '휴일 : 수',
//     category_id: '중국음식',
//   },
//   {
//     id: 4,
//     name: '차이나',
//     rate: '4.5',
//     address: '주소 : 	서울특별시 용산구 한강대로40길 14 1F 104호',
//     tel: '전화번호 : 	010-2757-3592',
//     open_time: '영업시간 : 	17:00 - 23:00',
//     closed_time: 'ddddddddddd',
//     closed_day: '휴일 : 수',
//     category_id: '중국음식',
//   },
// ];
