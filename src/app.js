/* eslint-disable linebreak-style */
/* eslint-disable no-console */

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';
import path from 'path';
import AuthRoutes from './routes/authRoutes';
import UserRoutes from './routes/userRoutes';
import AdminRoutes from './routes/adminRoutes';

const app = express();
const port = process.env.PORT || 3010;

// Render frontend
const frontend = path.join(__dirname, '../public');
app.use(express.static(frontend));


// Middlewares
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/api/v1/auth', AuthRoutes);
app.use('/api/v1/users/requests', UserRoutes);
app.use('/api/v1/admin/requests', AdminRoutes);
// Get User dashboard
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'dashboard.html'));
});

app.get('/create', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'create.html'));
});

// Get Admin dashboard
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'admin.html'));
});

/**
 *Edit the request with specified id
*
* @params {Object} requestId
*
*/

app.get('/request/edit/:requestId', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'edit.html'));
});

// Test good route
// app.get('/', (req, res) => {
//   res.status(200).json(
//     {
//       message: 'welcome to the maintenance tracker app api/v1',
//     },
//   );
// });

// CORS POLICY
app.use('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With,Content-Type,Accept,Authorization',
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Headers', 'PUT,DELETE,GET,PATCH,POST');
    return res.status(200).json({});
  }
  return next();
});


// Invalid Routes
app.all('*', (req, res) => res.status(404).json({
  status: 'error',
  code: 404,
  message: 'Route unavailable on server.',
}));

// Server Host
app.listen(port, () => {
  console.log(`SERVER IS UP AND RUNNING ON PORT ${port}`);
});

export const server = app;
export default app;
