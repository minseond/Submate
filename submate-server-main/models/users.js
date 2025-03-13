// 데이터베이스 모델과 관련된 스키마를 정의하는 디렉토리 

const jwt = require('jsonwebtoken');  // JSON Web Token을 생성 및 검증하는 라이브러리
const verify = require('../lib/encryption'); // 비밀번호 해시 생성 및 검증을 담당하는 커스텀라이브러리

const db = require('../database/db'); // 데이터베이스 연결 설정




// 사용자 정보를 저장하는 배열 
// 이메일, 해시된 비밀번호, 이름, 구독 목록, 좋아요 목록, 시청목록, 시청기록 포함
let users = [
  {
    email: 'testapp@testapp.com',
    // password: 'testapp123',
    password: {
      hashedPassword: 'K556nUYEyiSn8LCukJP6U/3KYjM0CinewFD0S1+voHI+4VLuGldhfCo0cWlbeDLOCyaQhPz1GBJgBHgTDyVp0Q==',
      salt: '7YbWa+ikY31+AqDx/2XntcMvSENZ9NzfTqHmlHZVlxb/cbdAdFrJR7I2C8fuBqal3CEA6W7/WljJNHFFwDLd6g==',
    },
    name: '테스트닉네임',
    subscribe_list: [
      { id: 8, price: 'basic' },
      { id: 356, price: 'basic' },
      { id: 97, price: 'basic' },
      { id: 119, price: 'basic' },
    ],
    like_list: [
      { id: 505642, type: 'movie', modified_at: '2020-12-31T12:59:32.746Z' },
      { id: 849869, type: 'movie', modified_at: '2021-12-25T12:59:32.746Z' },
    ],
    watch_list: [
      { id: 119769, type: 'tv', modified_at: '2020-12-31T12:59:32.746Z' },
      { id: 849869, type: 'movie', modified_at: '2021-12-25T12:59:32.746Z' },
      { id: 668482, type: 'movie', modified_at: '2023-04-15T12:59:32.746Z' },
    ],
    history_list: [
      { id: 985939, type: 'movie', modified_at: '2022-01-01T12:59:32.746Z' },
      { id: 820232, type: 'movie', modified_at: '2022-01-01T13:59:32.746Z' },
      { id: 61889, type: 'tv', modified_at: '2022-02-01T12:59:32.746Z' },
      { id: 1104040, type: 'movie', modified_at: '2022-04-01T12:59:32.746Z' },
      { id: 653851, type: 'movie', modified_at: '2022-04-01T12:59:32.746Z' },
      { id: 675353, type: 'movie', modified_at: '2022-04-01T12:59:32.746Z' },
      { id: 65334, type: 'tv', modified_at: '2022-05-02T12:59:32.746Z' },
      { id: 736526, type: 'movie', modified_at: '2022-07-21T12:59:32.746Z' },
      { id: 60574, type: 'tv', modified_at: '2022-11-16T12:59:32.746Z' },
      { id: 82856, type: 'tv', modified_at: '2022-12-04T12:59:32.746Z' },
      { id: 438148, type: 'movie', modified_at: '2023-01-01T12:59:32.746Z' },
      { id: 71712, type: 'tv', modified_at: '2023-02-01T12:59:32.746Z' },
      { id: 1433, type: 'tv', modified_at: '2023-03-30T12:59:32.746Z' },
      { id: 18165, type: 'tv', modified_at: '2023-03-31T12:59:32.746Z' },
      { id: 60735, type: 'tv', modified_at: '2023-04-01T13:59:32.746Z' },
      { id: 493529, type: 'movie', modified_at: '2023-04-11T12:59:32.746Z' },
    ],
  },
  {
    email: 'squid@gmail.com',
    // password: 'squid456',
    password: {
      hashedPassword: 'uK+gTDI0QZB/oDsKUpBGg4t79yrMuR3xO4vbcibQP/bBFcaLQKm6EBSgmkWjeQCl+4Eka/WRavy0UwujpasxoQ==',
      salt: 'yQa1A7aUmV/FFNtaNbMDrbYRJvKFkMxDob7PZl7aDxEd6FSTo9tyWCH6eaMhU7ANOlWRQcVFd7sQc8oRVefEWg==',
    },
    name: 'squid',
    subscribe_list: [{ id: 8, price: 'basic' }],
    like_list: [
      { id: 616037, type: 'movie', modified_at: '2020-12-31T12:59:32.746Z' },
      { id: 843794, type: 'movie', modified_at: '2021-12-25T12:59:32.746Z' },
    ],
    watch_list: [{ id: 736526, type: 'movie', modified_at: '2021-05-18T12:59:32.746Z' }],
    history_list: [
      { id: 555604, type: 'movie', modified_at: '2022-01-01T12:59:32.746Z' },
      { id: 507086, type: 'movie', modified_at: '2023-04-15T12:59:32.746Z' },
    ],
  },
  {
    email: 'noname@gmail.com',
    // password: 'noname123',
    password: {
      hashedPassword: 'CQbNCgUqbMEuqHqxwyVLJGx9Stu7ZK1MPHRxs3aVE7b/VLB6lE6Le4dOP42D0evQj16EWaqBb0s59zTd2UvNaQ==',
      salt: 'GT9QMDSwgoHCh2a2CGFSANsRRywf18fGqvJ4x8DwfKF8qPgT/b7WdrDy5OLEcKVS1cqUgnBM4UBfXsn178ra4Q==',
    },
    name: 'noname',
    subscribe_list: [{ id: 8, price: 'basic' }],
    like_list: [
      { id: 635302, type: 'movie', modified_at: '2020-12-31T12:59:32.746Z' },
      { id: 585511, type: 'movie', modified_at: '2021-12-25T12:59:32.746Z' },
    ],
    watch_list: [{ id: 766507, type: 'movie', modified_at: '2021-05-18T12:59:32.746Z' }],
    history_list: [
      { id: 411, type: 'movie', modified_at: '2022-01-01T12:59:32.746Z' },
      { id: 438148, type: 'movie', modified_at: '2023-04-15T12:59:32.746Z' },
    ],
  },
];

// 새로운 이메일을 받아 JWT 생성
const generateToken = newEmail =>
  jwt.sign(newEmail, process.env.JWT_SECRET_KEY, {  // process.env.JWT_SECRET_KEY을 비밀 키로 사용
    expiresIn: '7d',  // 토큰은 7일간 유효
  });

// 이메일을 입력받아 이메일의 앞부분을 사용하여 사용자 이름을 생성
const createName = email => email.match(/^([a-zA-Z0-9_.+-]+)@/)[1];

// 이메일과 비밀번호 입력받아 새로운 사용자 생성
const createUser = async (email, password) => {
  // 비밀번호를 해시화하여 저장
  const _password = await verify.createHashedPassword(password);

  // 사용자는 초기 값으로 비어있는 구독목록, 좋아요목록, 시청목록, 시청기록 목록을 가짐
  users = [
    ...users,
    {
      email,
      password: _password,
      name: createName(email),
      subscribe_list: [], // 구독 목록
      like_list: [],  // 좋아요 목록
      watch_list: [], // 시청 목록
      history_list: [], // 시청 기록
    },
  ];
};

// 이메일로 사용자를 찾아 반환
const findUserByEmail = email => users.find(user => user.email === email);

// 이메일과 비밀번호로 사용자를 찾아 반환
const findUser = (email, password) => users.find(user => user.email === email && user.password === password);

// 모든 사용자 목록을 반환
const getUsers = () => users;

const updateSubscribeList = (email, object) =>
  (users = users.map(user => (user.email === email ? { ...user, ...object } : user)));

const findUserList = (email, list) => users.filter(user => user.email === email)[0][list];

const addContent = (email, list, value) => {
  const prevList = findUserList(email, list);
  const isDuplicate = prevList.find(({ id }) => id === value.id);

  if (isDuplicate) return;

  users = users.map(user => (user.email === email ? { ...user, [list]: [...prevList, value] } : user));
};

const updateContent = (email, list, id, value) => {
  const updatedContent = { ...findUserList(email, list).find(content => content.id === id), ...value };
  let newList = findUserList(email, list).map(content =>
    content.id === +id ? { ...content, ...updatedContent } : content
  );
  if (list === 'history_list') {
    newList = newList.sort((a, b) => new Date(a.modified_at).getTime() - new Date(b.modified_at).getTime());
  }

  users = users.map(user => (user.email === email ? { ...user, [list]: newList } : user));
};

const deleteContent = (email, list, id) => {
  const isDuplicate = findUserList(email, list).find(({ id }) => id !== id);
  if (isDuplicate) return;

  const newList = [...findUserList(email, list).filter(movie => movie.id !== +id)];
  users = users.map(user => (user.email === email ? { ...user, [list]: newList } : user));
};

const changePassword = async (email, newPassword) => {
  const _newPassword = await verify.createHashedPassword(newPassword);
  users = users.map(user => (user.email === email ? { ...user, password: _newPassword } : user));
};

const withdrawalUser = email => {
  users = users.filter(user => user.email !== email);
};

module.exports = {
  createUser,
  findUserByEmail,
  findUser,
  getUsers,
  generateToken,
  updateSubscribeList,
  addContent,
  updateContent,
  deleteContent,
  changePassword,
  withdrawalUser,
};


// 앱이 종료되면 이 배열의 데이터는 모두 삭제
