import React, { useState } from 'react';
import FoodMenu from './FoodMenu';
import { INPUT_VALUES, CLOSED_DAY, CATEGORIES } from './adminEditData';
import './AdminEdit.scss';

const AdminCreate = () => {
  const accesToken = localStorage.getItem('TOKEN');

  const [input, setInput] = useState({
    name: '',
    description: '',
    address: '',
    tel: '',
    open_time: '',
    closed_time: '',
    closed_day_id: '',
    price_range: ' ',
    category_id: '',
  });

  const [imageInput, setImageInput] = useState();
  const [dayNum, setDayNum] = useState(0);
  const [menuId, setMenuId] = useState(1);
  const [menus, setMenus] = useState([]);
  const [menuInput, setMenuInput] = useState({
    id: menuId,
    name: '',
    price: '',
  });

  const saveInput = e => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const saveImage = e => {
    setImageInput(e.target.files[0]);
  };

  const saveDayInput = e => {
    const dayValue = Number(e.target.value);
    if (e.target.checked) {
      setDayNum(prev => prev + dayValue);
    } else {
      setDayNum(prev => prev - dayValue);
    }
  };

  const saveMenuInput = e => {
    const { name, value } = e.target;
    setMenuInput({ ...menuInput, [name]: value });
  };

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

  const {
    name,
    address,
    tel,
    open_time,
    closed_time,
    description,
    price_range,
    category_id,
  } = input;

  adminEditForm.append('name', name);
  adminEditForm.append('address', address);
  adminEditForm.append('tel', tel);
  adminEditForm.append('open_time', open_time);
  adminEditForm.append('closed_time', closed_time);
  adminEditForm.append('image', imageInput);
  adminEditForm.append('closed_day_id', dayNum);
  adminEditForm.append('description', description);
  adminEditForm.append('price_range', price_range);
  adminEditForm.append('category_id', category_id);
  adminEditForm.append('food_menu', JSON.stringify(menus));

  const editSaveClick = () => {
    fetch('https://87ca-211-106-114-186.jp.ngrok.io/store/create', {
      method: 'POST',
      headers: {
        enctype: 'multipart/form-data',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwidXNlcl9pZCI6InJsYWRtZHRuIiwiYWRtaW4iOiJUUlVFIiwiaWF0IjoxNjY0MTkyODQ3fQ.qLNqJxeoxxqVjnvHqtAHRDtA5-C9e2k1zkeqyu2Ag6g',
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
        {INPUT_VALUES.map(
          ({ id, title, type, placeholder, inputName, step, min, max }) => (
            <div className="adminEditInputSet" key={id}>
              <div className="inputTitle"> {title}</div>
              <input
                className="inputText"
                type={type}
                placeholder={placeholder}
                name={inputName}
                onChange={saveInput}
                step={step}
                min={min}
                max={max}
              />
            </div>
          )
        )}
        <div className="storeCategories">
          <div className="inputTitle">식당 카테고리</div>
          <select className="inputText" onChange={saveInput} name="category_id">
            {CATEGORIES.map(e => (
              <option value={e.value} key={e.value} name="category_id">
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
            name="price_range"
            type="number"
            placeholder="1인당 가격대"
            onChange={saveInput}
          />
          <span>만원</span>
        </div>
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

export default AdminCreate;
