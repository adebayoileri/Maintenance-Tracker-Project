/* eslint-disable linebreak-style */
/* eslint-disable no-console */

import express from 'express';
import userController from '../controllers/user.controller';
import checkAuth from '../middlewares/checkAuth';

const router = express.Router();

router.get('/:userId', checkAuth, userController.getAllRequests);

router.get('/:requestId', checkAuth, userController.getSingleRequest);

// Modify Request
router.put('/:requestId', checkAuth, userController.updateRequest);


// Add Request
router.post('/', checkAuth, userController.createRequest);


// Delete a request
router.delete('/:requestId', checkAuth, userController.deleteRequest);


export default router;
