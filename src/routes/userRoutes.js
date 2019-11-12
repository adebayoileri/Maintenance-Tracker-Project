/* eslint-disable linebreak-style */
/* eslint-disable no-console */

import express from 'express';
import userController from '../controllers/user.controller';
// import checkAuth from '../middlewares/checkAuth';

const router = express.Router();

router.get('/', userController.getAllRequests);

router.get('/:requestId', userController.getSingleRequest);

// Modify Request
router.put('/:requestId', userController.updateRequest);


// Add Request
router.post('/', userController.createRequest);


// Delete a request
router.delete('/:requestId', userController.deleteRequest);

export default router;
