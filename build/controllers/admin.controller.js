"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _db = _interopRequireDefault(require("../models/db"));

/* eslint-disable linebreak-style */
var adminController =
/*#__PURE__*/
function () {
  function adminController() {
    (0, _classCallCheck2["default"])(this, adminController);
  }

  (0, _createClass2["default"])(adminController, null, [{
    key: "getAllUserRequests",
    value: function getAllUserRequests(req, res) {
      var queryText, requests;
      return _regenerator["default"].async(function getAllUserRequests$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              queryText = 'SELECT * FROM requests';
              _context.next = 4;
              return _regenerator["default"].awrap(_db["default"].query(queryText));

            case 4:
              requests = _context.sent;

              if (requests.rows.length) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", res.status(400).json('No Requests Found'));

            case 7:
              return _context.abrupt("return", res.status(200).json({
                message: 'get all requests to admin successful'
              }));

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", _context.t0);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 10]]);
    }
  }, {
    key: "approveRequest",
    value: function approveRequest(req, res) {
      var requestId, status, queryText, value, request, statusApprove, values, approvedRequest;
      return _regenerator["default"].async(function approveRequest$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              requestId = req.params.requestId;
              status = 'approved';
              _context2.prev = 2;
              queryText = 'SELECT * FROM requests WHERE requestId=$1';
              value = [requestId];
              _context2.next = 7;
              return _regenerator["default"].awrap(_db["default"].query(queryText, value));

            case 7:
              request = _context2.sent;

              if (request.rows.length) {
                _context2.next = 10;
                break;
              }

              return _context2.abrupt("return", res.status(400).json('No request associated with this ID'));

            case 10:
              statusApprove = 'UPDATE requests SET status=$1 WHERE requestId=$2';
              values = [status, requestId];
              _context2.next = 14;
              return _regenerator["default"].awrap(_db["default"].query(statusApprove, values));

            case 14:
              approvedRequest = _context2.sent;
              return _context2.abrupt("return", res.status(200).json({
                message: "Approved request with id ".concat(requestId, " successfully"),
                approvedRequest: approvedRequest.rows[0]
              }));

            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2["catch"](2);
              return _context2.abrupt("return", _context2.t0);

            case 21:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[2, 18]]);
    }
  }, {
    key: "disapproveRequest",
    value: function disapproveRequest(req, res) {
      var requestId, status, queryText, value, request, statusDisapprove, values, disapprovedRequest;
      return _regenerator["default"].async(function disapproveRequest$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              requestId = req.params.requestId;
              status = 'disapproved';
              _context3.prev = 2;
              queryText = 'SELECT * FROM requests WHERE requestId=$1';
              value = [requestId];
              _context3.next = 7;
              return _regenerator["default"].awrap(_db["default"].query(queryText, value));

            case 7:
              request = _context3.sent;

              if (request.rows.length) {
                _context3.next = 10;
                break;
              }

              return _context3.abrupt("return", res.status(400).json('No request associated with this ID'));

            case 10:
              statusDisapprove = 'UPDATE requests SET status=$1 WHERE requestId=$2';
              values = [status, requestId];
              _context3.next = 14;
              return _regenerator["default"].awrap(_db["default"].query(statusDisapprove, values));

            case 14:
              disapprovedRequest = _context3.sent;
              return _context3.abrupt("return", res.status(200).json({
                message: "Disapproved request with id ".concat(requestId, " successfully"),
                disapprovedRequest: disapprovedRequest.rows[0]
              }));

            case 18:
              _context3.prev = 18;
              _context3.t0 = _context3["catch"](2);
              return _context3.abrupt("return", _context3.t0);

            case 21:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[2, 18]]);
    }
  }, {
    key: "resolveRequest",
    value: function resolveRequest(req, res) {
      var requestId, status, queryText, value, request, statusResolved, values, resolvedRequest;
      return _regenerator["default"].async(function resolveRequest$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              requestId = req.params.requestId;
              status = 'resolved';
              _context4.prev = 2;
              queryText = 'SELECT * FROM requests WHERE requestId=$1';
              value = [requestId];
              _context4.next = 7;
              return _regenerator["default"].awrap(_db["default"].query(queryText, value));

            case 7:
              request = _context4.sent;

              if (request.rows.length) {
                _context4.next = 10;
                break;
              }

              return _context4.abrupt("return", res.status(400).json('No request associated with this ID'));

            case 10:
              statusResolved = 'UPDATE requests SET status=$1 WHERE requestId=$2';
              values = [status, requestId];
              _context4.next = 14;
              return _regenerator["default"].awrap(_db["default"].query(statusResolved, values));

            case 14:
              resolvedRequest = _context4.sent;
              return _context4.abrupt("return", res.status(200).json({
                message: "Resolved request with id ".concat(requestId, " successfully"),
                resolvedRequest: resolvedRequest.rows[0]
              }));

            case 18:
              _context4.prev = 18;
              _context4.t0 = _context4["catch"](2);
              return _context4.abrupt("return", _context4.t0);

            case 21:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[2, 18]]);
    }
  }]);
  return adminController;
}();

var _default = adminController;
exports["default"] = _default;
//# sourceMappingURL=admin.controller.js.map