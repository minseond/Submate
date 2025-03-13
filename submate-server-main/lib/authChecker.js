const jwt = require('jsonwebtoken');
const users = require('../models/users');

const jwtMiddleware = (req, res, next) => {
  const accessToken = req.cookies.accessToken;

  if (!accessToken) return next(); // 토큰이 없을 경우 다음 미들웨어로 이동

  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);

    req.user = {
      email: decoded.email,
      name: decoded.name,
    };

    // 토큰 발급 후 6일이 지난 경우 새로운 토큰 발급
    if (Date.now() / 1000 - decoded.iat > 60 * 60 * 24 * 6) {
      const user = users.findUserByEmail(decoded.email);
      const freshToken = jwt.sign({ email: user.email, name: user.name }, process.env.JWT_SECRET_KEY, {
        expiresIn: '7d',
      });

      res.cookie('accessToken', freshToken, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
      });
    }

    return next();
  } catch (e) {
    console.error('😱 사용자 인증 실패..', e);
    return next();
  }
};

module.exports = jwtMiddleware;
