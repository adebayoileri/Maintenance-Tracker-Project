/* eslint-disable linebreak-style */
class userController {
  static getAllRequests(req, res) {
    res.status(200).json({ message: 'GET request successful' });
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
