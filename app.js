/* eslint-disable linebreak-style */
/* eslint-disable no-console */

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';
import path from 'path';
import AuthRoutes from './src/routes/authRoutes';
import UserRoutes from './src/routes/userRoutes';
import AdminRoutes from './src/routes/adminRoutes';


const app = express();
const port = process.env.PORT || 3010;

// Deployment
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('public'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
}

// Middlewares
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/api/v1/auth', AuthRoutes);
app.use('/api/v1/users/requests', UserRoutes);
app.use('/api/v1/admin', AdminRoutes);

// Test good route
app.get('/', (req, res) => {
  res.json({ message: 'welcome to the maintenance tracker app api/v1' });
});

// Invalid Routes
app.all('*', (req, res) => res.status(404).json({
  status: 'error',
  code: 404,
  message: 'Route unavailable on server.',
}));

app.listen(port, () => {
  console.log(`SERVER IS UP AND RUNNING ON PORT ${port}`);
});

export const server = app;
export default app;
