/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
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

  static async getSingleRequest(req, res) {
    const { requestId } = req.params;
    const queryText = 'SELECT * FROM requests WHERE requestId=$1';
    const value = [requestId];
    const request = await pool.query(queryText, value);
    if (!request.rows.length) return res.status(404).json('No request associated is with this id');
    return res.status(200).json({
      message: 'GET a specific request successful',
      id: requestId,
      request: request.rows[0],
    });
  }

  static async updateRequest(req, res) {
    const { requestId } = req.params;
    try {
      const queryText = 'SELECT * FROM requests WHERE requestId=$1';
      const value = [requestId];
      const request = await pool.query(queryText, value);
      if (!request.rows.length) { return res.status(404).json('No request associated with this ID'); }
      const response = request.rows[0];

      const title = req.body.title || response.title;
      const description = req.body.description || response.description;
      const itemType = req.body.itemType || response.itemType;
      const status = req.body.status || response.status;
      const category = req.body.category || response.category;

      const query = 'UPDATE requests SET title=$1,description=$2,itemType=$3,status=$4,category=$5,created_at=NOW() WHERE requestId=$6 RETURNING *';
      const values = [title, description, itemType, status, category, requestId];
      const updatedRequest = await pool.query(query, values);
      return res.status(200).json({
        message: 'Request updated successfully',
        request: updatedRequest.rows,
      });
    } catch (e) {
      return res.status(400).send({
        message: `Cannot update request with id ${requestId} because it doesn't exist on our server.`,
      });
    }
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
