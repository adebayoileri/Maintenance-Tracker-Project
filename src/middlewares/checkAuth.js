/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
import jwt from 'jsonwebtoken';

const secret = process.env.JWT_KEY;
const checkAuth = (req, res, next) => {
  try {
    const token = localStorage.getItem('token');
    const decoded = jwt.verify(token, secret);
    req.userData = decoded;
    next();
  } catch (err) {
    res.status(401).json({
      message: 'Auth failed',
      err,
    });
  }
};

export default checkAuth;
