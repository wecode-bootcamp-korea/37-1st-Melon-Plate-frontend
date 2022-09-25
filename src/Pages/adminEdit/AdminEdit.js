import React, { useEffect, useState } from 'react';
import './AdminEdit.scss';
import ReactDOM from 'react-dom';
import FoodMenu from './FoodMenu';

const AdminEdit = () => {
  const [input, setInput] = useState({
    name: '',
    description: '',
    address: '',
    tel: '',
    open_time: '',
    closed_time: '',
    closed_day_id: '',
    price_range: ' ',
  });

  const [imageInput, setImageInput] = useState();

  const saveInput = e => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const saveImage = e => {
    setImageInput(e.target.files[0]);
  };

  const [dayNum, setDayNum] = useState(0);

  const saveDayInput = e => {
    const dayValue = Number(e.target.value);
    if (e.target.checked) {
      setDayNum(prev => prev + dayValue);
    } else {
      setDayNum(prev => prev - dayValue);
    }
  };

  const [menus, setMenus] = useState([]);

  const saveMenuInput = e => {
    const { name, value } = e.target;
    setMenuInput({ ...menuInput, [name]: value });
  };

  const [menuId, setMenuId] = useState(1);

  const [menuInput, setMenuInput] = useState({
    id: menuId,
    name: '',
    price: '',
  });

  const menuAddBtnClick = () => {
    setMenuId(prev => prev + 1);
    setMenus([...menus, menuInput]);
    setMenuInput({ id: menuId + 1, name: '', price: '' });
  };

  const menuDeleteBtnClick = e => {
    let newArr = [...menus];
    const resultArr = newArr.filter(list => list.id !== Number(e.target.title));
    setMenus(resultArr);
  };

  const adminEditForm = new FormData();
  adminEditForm.append('name', input.name);
  adminEditForm.append('address', input.address);
  adminEditForm.append('tel', input.tel);
  adminEditForm.append('open_time', input.open_time);
  adminEditForm.append('closed_time', input.closed_time);
  adminEditForm.append('image', imageInput);
  adminEditForm.append('closed_day_id', dayNum);
  adminEditForm.append('description', input.description);

  const editSaveClick = () => {
    fetch('https://b35e-211-106-114-186.jp.ngrok.io/store/admin', {
      method: 'POST',
      headers: {
        enctype: 'multipart/form-data',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwidXNlcl9pZCI6ImFhYWFhYWFhIiwiYWRtaW5URiI6InRydWUiLCJpYXQiOjE2NjM5MDc1MzB9.tGEtbRFN8RpDBfIqPwHQfzQm1aDJSqKpI9Lb51z_4cc',
      },
      body: adminEditForm,
    })
      .then(res => res.json())
      .then(result => console.log(result));
  };

  return (
    <div className="adminEdit">
      <div className="adminEditBox">
        <div className="adminEditTitle">내 가게 등록하기</div>
        <div className="adminImageInputSet">
          <div className="inputTitle">대표 사진</div>
          <input type="file" accept="image/*" onChange={saveImage} />
        </div>
        {INPUT_VALUES.map(store => (
          <div className="adminEditInputSet" key={store.id}>
            <div className="inputTitle"> {store.title}</div>
            <input
              className="inputText"
              type={store.type}
              placeholder={store.placeholder}
              name={store.name}
              onChange={saveInput}
              step={store.step}
              min={store.min}
              max={store.max}
            />
          </div>
        ))}
        <div className="storeCategories">
          <div className="inputTitle">식당 카테고리</div>
          <select className="inputText">
            {CATEGORIES.map(e => (
              <option value={e.value} key={e.value}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
        <div className="closedDay">
          <div className="inputTitle">휴일</div>
          {CLOSED_DAY.map(day => (
            <div key={day.id}>
              <input
                type="checkbox"
                value={day.value}
                name="closed_day_id"
                onChange={saveDayInput}
                required
              />
              {day.text}
            </div>
          ))}
        </div>
        <div className="descriptionInput">
          <div className="inputTitle">가게 설명</div>
          <textarea
            onChange={saveInput}
            name="description"
            placeholder="가게에 대해 설명해주세요 (최대 1000자)"
            maxLength="1000"
          />
        </div>
        <div className="adminEditInputSet">
          <div className="inputTitle">1인당 가격대</div>
          <input
            className="inputText2"
            type="number"
            placeholder="1인당 가격대"
          />
          <span>만원</span>
        </div>

        {/* <button className="addMenuInput" onClick={addMenuInputClick}>
          메뉴 추가
        </button> */}
        <FoodMenu
          saveMenuInput={saveMenuInput}
          menuAddBtnClick={menuAddBtnClick}
          menus={menus}
          menuInput={menuInput}
          menuDeleteBtnClick={menuDeleteBtnClick}
        />
        <button className="adminEditSave" onClick={editSaveClick}>
          저장하기
        </button>
      </div>
    </div>
  );
};

export default AdminEdit;

const INPUT_VALUES = [
  { id: 1, title: '상호명', type: 'text', placeholder: '상호명', name: 'name' },
  {
    id: 2,
    title: '주소',
    type: 'address',
    placeholder: '주소',
    name: 'address',
  },
  {
    id: 3,
    title: '전화번호',
    type: 'tel',
    placeholder: '전화번호',
    name: 'tel',
  },
  {
    id: 4,
    title: '오픈 시간',
    type: 'time',
    placeholder: '오픈 시간',
    name: 'open_time',
    min: '00:00',
    max: '24:00',
    step: 3600,
  },
  {
    id: 5,
    title: '마감 시간',
    type: 'time',
    placeholder: '마감 시간',
    name: 'closed_time',
    min: '00:00',
    max: '24:00',
    step: 3600,
  },
];

const CLOSED_DAY = [
  { id: 1, text: '월', value: 1 },
  { id: 2, text: '화', value: 2 },
  { id: 3, text: '수', value: 4 },
  { id: 4, text: '목', value: 8 },
  { id: 5, text: '금', value: 16 },
  { id: 6, text: '토', value: 32 },
  { id: 7, text: '일', value: 64 },
];

const CATEGORIES = [
  { value: 1, name: '한식' },
  { value: 2, name: '중식' },
  { value: 3, name: '일식' },
  { value: 4, name: '양식' },
  { value: 5, name: '퓨전식' },
  { value: 6, name: '이자카야' },
  { value: 7, name: '카페' },
  { value: 8, name: '베트남 음식' },
  { value: 9, name: '이탈리아 음식' },
  { value: 10, name: '호프' },
  { value: 11, name: '빵집' },
  { value: 12, name: '패스트푸드' },
  { value: 13, name: '기타' },
];
