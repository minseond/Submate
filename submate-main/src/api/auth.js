import axios from 'axios';

const url = `/api/auth`;
// const { VITE_CORS_SERVER_URL } = import.meta.env;


// 192.168.1.22 backend 개발 필요 (회원가입 기능같은 추가기능 개발하려면...)
const { VITE_CORS_SERVER_URL = 'http://localhost:4173' } = import.meta.env;

const checkVerify = async () => {
  const res = await axios(`${VITE_CORS_SERVER_URL}/api/auth/verify`, { withCredentials: true });

  return res.data;
};

const signIn = async data => {
  const { data: user } = await axios.post(`${VITE_CORS_SERVER_URL}${url}/signin`, data, { withCredentials: true });
  return user;
};

const signUp = async data => {
  const {
    data: { email, name },
  } = await axios.post(`${VITE_CORS_SERVER_URL}${url}/signup`, data);

  return { email, name };
};

const signOut = async () => {
  const { data } = await axios.get(`${VITE_CORS_SERVER_URL}${url}/signout`, { withCredentials: true });

  return data.isLogin;
};

const deleteUser = async user => {
  const {
    data: { isLogin, message },
  } = await axios.delete(`${VITE_CORS_SERVER_URL}${url}/withdrawal/${user}`, { withCredentials: true });

  return { isLogin, message };
};

const changePassword = async (email, data) => {
  const { data: message } = await axios.patch(
    `${VITE_CORS_SERVER_URL}${url}/changepw`,
    { email, ...data },
    { withCredentials: true }
  );
  return message;
};

export { checkVerify, signIn, signUp, signOut, deleteUser, changePassword };
