/* eslint-disable linebreak-style */
/* eslint-disable no-console */

import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({ message: 'GET request successful' });
  next();
});

router.get('/:requestId', (req, res, next) => {
  const { requestId } = req.params;
  res.status(200).json({
    message: 'GET a specific request successful',
    id: requestId,
  });
  next();
});

export default router;
