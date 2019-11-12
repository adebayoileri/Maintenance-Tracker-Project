/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
import jwt from 'jsonwebtoken';

const checkAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
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
