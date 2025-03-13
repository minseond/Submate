require('dotenv').config(); // 환경변수 로드
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwtMiddleware = require('./lib/authChecker');
const path = require('path');
const db = require(path.join(__dirname, 'database/db')); // 절대 경로

const app = express();  // Express 앱 생성

const SERVER_PORT = 3002; // 서버 포트 번호
const CLIENT_PORT = 4173; // 클라이언트 포트 번호

const auth = require('./routes/api/auth');
const users = require('./routes/api/users');

const corsOptions = {
  origin: `http://localhost:${CLIENT_PORT}`, // 클라이언트 포트 번호
  optionsSuccessStatus: 200,
  credentials: true,  // 자격 증명을 포함한 요청을 허용
};

// 미들웨어 등록
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(jwtMiddleware);

// 라우팅 설정
app.use('/api/auth', auth);
app.use('/api/users', users);

app.get('/api/auth/verify', (req, res) => {
  res.json({ message: 'CORS 설정 완료' });
}); 

// db 로직
app.get('/', (req, res) => {
  db.query('SELECT * FROM table_name', function (err, results, fields) {
      if (err) throw err;
      res.send(results);
  });
});

// 서버 구동
app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}`);
});
