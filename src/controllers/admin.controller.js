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
    res.status(200).json(
      {
        message: `Approved request with id ${requestId} successfully`,
      },
    );
  }

  static disapproveRequest(req, res) {
    const { requestId } = req.params;
    res.status(200).json({ message: `Disapproved request with id ${requestId} successfully` });
  }

  static resolveRequest(req, res) {
    const { requestId } = req.params;
    res.status(200).json({ message: `Resolved request with id ${requestId} successfully` });
  }
}
export default adminController;
