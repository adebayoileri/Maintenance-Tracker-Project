/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
import jwt from 'jsonwebtoken';

const secret = process.env.JWT_KEY;
const checkAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1] || req.body.token;
    const decoded = jwt.verify(token, secret);
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status({
      message: 'Auth failed',
      error,
    });
  }
};

export default checkAuth;
