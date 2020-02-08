"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _admin = _interopRequireDefault(require("../controllers/admin.controller"));

/* eslint-disable linebreak-style */

/* eslint-disable no-console */
var router = _express["default"].Router();

router.get('/', _admin["default"].getAllUserRequests);
router.put('/:requestId/approve', _admin["default"].approveRequest);
router.put('/:requestId/disapprove', _admin["default"].disapproveRequest);
router.put('/:requestId/resolve', _admin["default"].resolveRequest);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=adminRoutes.js.map