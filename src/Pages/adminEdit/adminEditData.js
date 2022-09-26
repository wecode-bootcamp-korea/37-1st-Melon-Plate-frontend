export const INPUT_VALUES = [
  {
    id: 1,
    title: '상호명',
    type: 'text',
    placeholder: '상호명',
    inputName: 'name',
  },
  {
    id: 2,
    title: '주소',
    type: 'address',
    placeholder: '주소',
    inputName: 'address',
  },
  {
    id: 3,
    title: '전화번호',
    type: 'tel',
    placeholder: '전화번호',
    inputName: 'tel',
  },
  {
    id: 4,
    title: '오픈 시간',
    type: 'time',
    placeholder: '오픈 시간',
    inputName: 'open_time',
    min: '00:00',
    max: '24:00',
    step: 3600,
  },
  {
    id: 5,
    title: '마감 시간',
    type: 'time',
    placeholder: '마감 시간',
    inputName: 'closed_time',
    min: '00:00',
    max: '24:00',
    step: 3600,
  },
];

export const CLOSED_DAY = [
  { id: 1, text: '월', value: 1 },
  { id: 2, text: '화', value: 2 },
  { id: 3, text: '수', value: 4 },
  { id: 4, text: '목', value: 8 },
  { id: 5, text: '금', value: 16 },
  { id: 6, text: '토', value: 32 },
  { id: 7, text: '일', value: 64 },
];

export const CATEGORIES = [
  { value: 1, name: '한식' },
  { value: 2, name: '중식' },
  { value: 3, name: '일식' },
  { value: 4, name: '양식' },
  { value: 5, name: '분식' },
  { value: 6, name: '고깃집' },
  { value: 7, name: '치킨' },
  { value: 8, name: '주점' },
  { value: 9, name: '카페' },
  { value: 10, name: '동남아 음식' },
  { value: 11, name: '빵집' },
  { value: 12, name: '패스트푸드' },
  { value: 13, name: '기타' },
];
