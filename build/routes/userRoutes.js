"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable linebreak-style */

/* eslint-disable no-console */
var router = _express["default"].Router();

router.get('/', function (req, res) {
  res.status(200).json({
    message: 'GET request successful'
  });
});
router.get('/:requestId', function (req, res) {
  var requestId = req.params.requestId;
  res.status(200).json({
    message: 'GET a specific request successful',
    id: requestId
  });
}); // Modify Request

router.put('/:requestId', function (req, res) {
  var requestId = req.params.requestId;
  var category = req.body.category;
  var status = req.body.status;
  var createdAt = req.body.createdAt;
  res.status(200).json({
    message: "Request with id ".concat(requestId, " updated successfully"),
    status: status,
    category: category,
    createdAt: createdAt,
    code: 200
  });
}); // Add Request

router.post('/', function (req, res) {
  var category = req.body.category;
  var status = req.body.status;
  var createdAt = req.body.createdAt;
  var request = {
    category: category,
    status: status,
    createdAt: createdAt
  };
  res.status(201).json({
    message: 'Request Created',
    code: 201,
    request: request
  });
}); // Delete a request

router["delete"]('/:requestId', function (req, res) {
  var requestId = req.params.requestId;
  res.status(200).json({
    message: 'Item requested successfullly deleted',
    id: "".concat(requestId, " was deleted"),
    code: 200,
    status: 'success'
  });
});
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=userRoutes.js.map