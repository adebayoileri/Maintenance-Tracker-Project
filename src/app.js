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

// Deployment
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
