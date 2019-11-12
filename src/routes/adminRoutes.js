/* eslint-disable linebreak-style */
/* eslint-disable no-console */

import express from 'express';
import adminController from '../controllers/admin.controller';

const router = express.Router();


router.get('/', adminController.getAllUserRequests);
router.put('/:requestId/approve', adminController.approveRequest);
router.put(
  '/:requestId/disapprove',
  adminController.disapproveRequest,
);
router.put('/:requestId/resolve', adminController.resolveRequest);

export default router;
