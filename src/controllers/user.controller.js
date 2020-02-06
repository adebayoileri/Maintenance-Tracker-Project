/* eslint-disable linebreak-style */

import pool from '../models/db';

class userController {
  static async getAllRequests(req, res) {
    const { userId } = req.body;
    try {
      const queryText = 'SELECT * FROM requests WHERE userId=$1';
      const value = [userId];
      const requests = await pool.query(queryText, value);
      if (!requests.rows.length) {
        res.status(400).json({ message: 'No Requests Found' });
      } else {
        res.status(200).json(
          {
            message: 'GET request successful',
            requests: requests.rows,
          },
        );
      }
    } catch (error) {
      return error;
    }
  }

  static async getSingleRequest(req, res) {
    const { requestId } = req.params;
    const queryText = 'SELECT * FROM requests WHERE requestId=$1';
    const value = [requestId];
    const request = await pool.query(queryText, value);
    if (!request.rows.length) return res.status(400).json('No request associated is with this id');
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
      // const response = request.rows[0];

      const {
        title, description, itemType, status, category,
      } = req.body;

      const query = 'UPDATE requests SET title=$1,description=$2,itemType=$3,status=$4,category=$5,created_at=NOW() WHERE requestId=$6 RETURNING *';
      const values = [title, description, itemType, status, category, requestId];
      const updatedRequest = await pool.query(query, values);
      return res.status(200).json({
        message: 'Request updated successfully',
        code: 200,
        request: updatedRequest.rows,
      });
    } catch (e) {
      return res.status(400).send({
        message: `Cannot update request with id ${requestId} because it doesn't exist on our server.`,
      });
    }
  }

  static async createRequest(req, res) {
    const {
      title, description, category, itemType, userId,
    } = req.body;
    if (!title) return res.status(404).json('Input all fields');
    const status = 'pending';
    try {
      const queryText = 'INSERT INTO requests (title, description, category, status, created_at, itemType, userId) VALUES($1,$2,$3,$4,NOW(),$5,$6) RETURNING *';
      const values = [title, description, category, status, itemType, userId];
      const newRequest = await pool.query(queryText, values);
      return res.status(201).json({
        message: 'Request Created',
        code: 201,
        newRequest: newRequest.rows,
      });
    } catch (error) {
      return error;
    }
  }

  static async deleteRequest(req, res) {
    const { requestId } = req.params;
    try {
      const queryText = 'DELETE FROM requests WHERE requestId=$1';
      const value = [requestId];
      const deletedRequest = await pool.query(queryText, value);
      if (!deletedRequest.rowCount) return res.status(404).json('No request is associated with this ID');

      return res.status(200).json({
        message: 'Item requested successfully deleted',
        id: `${requestId} was deleted`,
        code: 200,
        status: 'success',
      });
    } catch (error) {
      return error;
    }
  }
}

export default userController;
