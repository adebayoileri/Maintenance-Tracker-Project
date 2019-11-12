/* eslint-disable linebreak-style */
class adminController {
  static getAllUserRequests(req, res) {
    res.status(200).json({ message: 'get all requests to admin successful' });
  }

  static approvedRequest(req, res) {
    const { requestId } = req.params;
    res.status(200).json({ message: `Approved request with ${requestId} successfully` });
  }

  static disapproveRequest(req, res) {
    const { requestId } = req.params;
    res.status(200).json({ message: `Disapproved request with ${requestId} successful` });
  }

  static resolveRequest(req, res) {
    const { requestId } = req.params;
    res.status(200).json({ message: `Resolved request with ${requestId} successful` });
  }
}
export default adminController;
