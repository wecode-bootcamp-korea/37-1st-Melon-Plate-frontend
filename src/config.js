const BASE_URL = 'http://192.168.215.82:3000';
const API = {
  signup: `${BASE_URL}/user/signup`, //성종화
  login: `${BASE_URL}/user/signin`,
  adminPage: `${BASE_URL}/user/admin`,
  reviewWrite: `${BASE_URL}/review/new`, //신지윤
  detail: `${BASE_URL}/detail`, //
  adminEdit: `${BASE_URL}/store`, //김지원
  resultList: `${BASE_URL}/main/search`,
  profile: `${BASE_URL}/user/profile`,
};
export default API;
