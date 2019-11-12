/* eslint-disable linebreak-style */
class adminController {
  static getAllUserRequests(req, res) {
    res.status(200).json({ message: 'get all requests to admin successful' });
  }

  static approveRequest(req, res) {
    const { requestId } = req.params;
    res.status(200).json({ message: `Approved request with id ${requestId} successfully` });
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
