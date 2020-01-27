"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("../controllers/user.controller"));

var _checkAuth = _interopRequireDefault(require("../middlewares/checkAuth"));

/* eslint-disable linebreak-style */

/* eslint-disable no-console */
var router = _express["default"].Router();

router.get('/', _checkAuth["default"], _user["default"].getAllRequests);
router.get('/:requestId', _checkAuth["default"], _user["default"].getSingleRequest); // Modify Request

router.put('/:requestId', _checkAuth["default"], _user["default"].updateRequest); // Add Request

router.post('/', _checkAuth["default"], _user["default"].createRequest); // Delete a request

router["delete"]('/:requestId', _checkAuth["default"], _user["default"].deleteRequest);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=userRoutes.js.map