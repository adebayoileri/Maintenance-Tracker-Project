/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import pool from '../models/db';


class authController {
  static async signUp(req, res) {
    const {
      firstname, lastname, email, password,
    } = req.body;
    try {
      const userExistsCheck = 'SELECT * FROM users WHERE email=$1';
      const value = [email];
      const checkResult = await pool.query(userExistsCheck, value);

      // if (!firstname || !lastname || !password) {
      //   res.status(400).json({
      //     message: 'Input all required fields',
      //   });
      // }

      // Password Hashing Process
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      if (checkResult.rows[0]) {
        res.status(400).json({
          message: 'email already exists',
        });
      } else {
        const signUpUser = 'INSERT INTO users(email, firstname, lastname, password) VALUES($1,$2,$3,$4) RETURNING *';
        const values = [email, firstname, lastname, hashedPassword];
        const newUser = await pool.query(signUpUser, values);

        // Token Generation
        jwt.sign({ email, password }, process.env.JWT_KEY, { expiresIn: '24h' }, (error, token) => {
          res.status(201).json({
            user: newUser.rows[0],
            userId: newUser.rows[0].userid,
            token,
            message: 'Success',
          });
        });
      }
    } catch (error) {
      return error;
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;
    try {
      const loginUser = 'SELECT * FROM users WHERE email=$1';
      const value = [email];
      const user = await pool.query(loginUser, value);
      if (!user.rows.length) {
        res.status(403).json({ message: 'This email doesn\'t seem to exists on our server. Signup if you haven\'t' });
      }
      const matchedPassword = bcrypt.compareSync(password, user.rows[0].password);

      if (matchedPassword) {
        jwt.sign({ email, password }, process.env.JWT_KEY, { expiresIn: '24h' }, (error, token) => {
          res.status(200).json({
            message: 'Login Successful',
            token,
            userId: user.rows[0].userid,
            userData: user.rows[0],
          });
        });
      } else {
        res.status(403).json({
          message: 'Invalid password Pls try again',
        });
      }
    } catch (error) {
      return error;
    }
  }
}

export default authController;
