/* eslint-disable linebreak-style */

import pool from '../models/db';

class adminController {
  static async getAllUserRequests(req, res) {
    try {
      const queryText = 'SELECT * FROM requests';
      const requests = await pool.query(queryText);
      if (!requests.rows.length) return res.status(400).json('No Requests Found');
      return res.status(200).json({ message: 'get all requests to admin successful' });
    } catch (error) {
      return error;
    }
  }

  static async approveRequest(req, res) {
    const { requestId } = req.params;
    const status = 'approved';
    try {
      const queryText = 'SELECT * FROM requests WHERE requestId=$1';
      const value = [requestId];
      const request = await pool.query(queryText, value);
      if (!request.rows.length) { return res.status(404).json('No request associated with this ID'); }

      const statusApprove = 'UPDATE requests SET status=$1 WHERE requestId=$2';
      const values = [status, requestId];
      const approvedRequest = await pool.query(statusApprove, values);
      return res.status(200).json(
        {
          message: `Approved request with id ${requestId} successfully`,
          approvedRequest: approvedRequest.rows[0],
        },
      );
    } catch (error) {
      return error;
    }
  }

  static async disapproveRequest(req, res) {
    const { requestId } = req.params;
    const status = 'disapproved';
    try {
      const queryText = 'SELECT * FROM requests WHERE requestId=$1';
      const value = [requestId];
      const request = await pool.query(queryText, value);
      if (!request.rows.length) { return res.status(404).json('No request associated with this ID'); }

      const statusDisapprove = 'UPDATE requests SET status=$1 WHERE requestId=$2';
      const values = [status, requestId];
      const disapprovedRequest = await pool.query(statusDisapprove, values);
      return res.status(200).json({
        message: `Disapproved request with id ${requestId} successfully`,
        disapprovedRequest: disapprovedRequest.rows[0],
      });
    } catch (error) {
      return error;
    }
  }

  static async resolveRequest(req, res) {
    const { requestId } = req.params;
    const status = 'resolved';
    try {
      const queryText = 'SELECT * FROM requests WHERE requestId=$1';
      const value = [requestId];
      const request = await pool.query(queryText, value);
      if (!request.rows.length) { return res.status(404).json('No request associated with this ID'); }

      const statusResolved = 'UPDATE requests SET status=$1 WHERE requestId=$2';
      const values = [status, requestId];
      const resolvedRequest = await pool.query(statusResolved, values);
      return res.status(200).json(
        { message: `Resolved request with id ${requestId} successfully`, resolvedRequest: resolvedRequest.rows[0] },
      );
    } catch (error) {
      return error;
    }
  }
}
export default adminController;
