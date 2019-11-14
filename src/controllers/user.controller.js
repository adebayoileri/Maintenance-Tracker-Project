/* eslint-disable linebreak-style */
/* eslint-disable no-console */

import pool from '../models/db';

class userController {
  static async getAllRequests(req, res, next) {
    try {
      const queryText = 'SELECT * FROM requests';
      const requests = await pool.query(queryText);
      if (!requests.rows.length) return res.status(404).json('No Requests Found');
      return res.status(200).json(
        {
          message: 'GET request successful',
          requests: requests.rows,
        },
      );
    } catch (error) {
      console.error(error);
    }
    return next();
  }

  static getSingleRequest(req, res) {
    const { requestId } = req.params;
    res.status(200).json({
      message: 'GET a specific request successful',
      id: requestId,
    });
  }

  static updateRequest(req, res) {
    const { requestId } = req.params;
    const { category } = req.body;
    const { status } = req.body;
    const { createdAt } = req.body;
    res.status(200).json({
      message: `Request with id ${requestId} updated successfully`,
      status,
      category,
      createdAt,
      code: 200,
    });
  }

  static createRequest(req, res) {
    const { category } = req.body;
    const { status } = req.body;
    const { createdAt } = req.body;
    const request = {
      category,
      status,
      createdAt,
    };
    res.status(201).json({
      message: 'Request Created',
      code: 201,
      request,
    });
  }

  static deleteRequest(req, res) {
    const { requestId } = req.params;
    res.status(200).json({
      message: 'Item requested successfullly deleted',
      id: `${requestId} was deleted`,
      code: 200,
      status: 'success',
    });
  }
}
export default userController;
