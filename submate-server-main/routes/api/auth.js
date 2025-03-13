const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const users = require('../../models/users');  // 유저 컨트롤러 가져오기
const verify = require('../../lib/encryption');
require('dotenv').config();

// 로그인 상태 검증
router.get('/verify', (req, res) => {
  const accessToken = req.cookies.accessToken;

  if (!accessToken) {
    return res.send({ isLogin: false });
  }

  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
    const user = users.findUserByEmail(decoded.email);

    if (!user) {
      return res.send({ isLogin: false });
    }

    res.send({ isLogin: true, email: user.email });
  } catch (e) {
    console.error('JWT verification error:', e);
    res.send({ isLogin: false });
  }
});

// 로그인 
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  const user = users.findUserByEmail(email);

  if (!user) {
    return res.status(401).send('잘못된 이메일이나 비밀번호가 입력됐습니다.');
  }

  try {
    const verifiedResult = await verify.verifyPassword(password, user.password.salt, user.password.hashedPassword);

    if (!verifiedResult) {
      return res.status(401).send('잘못된 이메일이나 비밀번호가 입력됐습니다.');
    }
  } catch (error) {
    console.error('Password verification error:', error);
    return res.status(400).send('로그인 오류');
  }

  const accessToken = jwt.sign({ email }, process.env.JWT_SECRET_KEY, {
    expiresIn: '1d',
  });

  res.cookie('accessToken', accessToken, {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
    sameSite: 'none',
    secure: true,
  });

  res.send(email);
});

// 회원가입
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  const user = users.findUserByEmail(email);
  if (user) {
    return res.status(409).send('중복된 이메일이 존재합니다.');
  }

  await users.createUser(email, password);
  const newuser = users.findUserByEmail(email);

  res.send({ email, name: newuser.name });
});

router.get('/signout', (req, res) => {
  res.clearCookie('accessToken');
  res.send({ isLogin: false });
});

router.patch('/changepw', async (req, res) => {
  const { email, nowPassword, newPassword, confirmPassword } = req.body;
  const user = users.findUserByEmail(email);

  if (!user) {
    return res.status(404).send('사용자를 찾을 수 없습니다.');
  }

  const verifiedResult = await verify.verifyPassword(nowPassword, user.password.salt, user.password.hashedPassword);

  if (!verifiedResult) {
    return res.status(401).send('비밀번호를 정확하게 입력해 주세요.');
  }

  if (newPassword !== confirmPassword) {
    return res.status(401).send('새 비밀번호와 비밀번호 확인이 일치하지 않습니다.');
  }

  res.clearCookie('accessToken');
  await users.changePassword(email, newPassword);

  res.send('비밀번호 변경에 성공하셨습니다.');
});

router.delete('/withdrawal/:email', (req, res) => {
  const { email } = req.params;
  const user = users.findUserByEmail(email);

  if (!user) {
    return res.status(404).send('사용자를 찾을 수 없습니다.');
  }

  users.withdrawalUser(email);
  res.clearCookie('accessToken');
  res.send({ isLogin: false, message: '회원 탈퇴가 완료됐습니다. 유니버스를 이용해주셔서 감사합니다.' });
});

module.exports = router;
