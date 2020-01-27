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
var userController =
/*#__PURE__*/
function () {
  function userController() {
    (0, _classCallCheck2["default"])(this, userController);
  }

  (0, _createClass2["default"])(userController, null, [{
    key: "getAllRequests",
    value: function getAllRequests(req, res) {
      var userId, queryText, value, requests;
      return _regenerator["default"].async(function getAllRequests$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              userId = req.body.userId;
              _context.prev = 1;
              queryText = 'SELECT * FROM requests WHERE userId=$1';
              value = [userId];
              _context.next = 6;
              return _regenerator["default"].awrap(_db["default"].query(queryText, value));

            case 6:
              requests = _context.sent;

              if (requests.rows.length) {
                _context.next = 9;
                break;
              }

              return _context.abrupt("return", res.status(400).json('No Requests Found'));

            case 9:
              return _context.abrupt("return", res.status(200).json({
                message: 'GET request successful',
                requests: requests.rows
              }));

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](1);
              return _context.abrupt("return", _context.t0);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 12]]);
    }
  }, {
    key: "getSingleRequest",
    value: function getSingleRequest(req, res) {
      var requestId, queryText, value, request;
      return _regenerator["default"].async(function getSingleRequest$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              requestId = req.params.requestId;
              queryText = 'SELECT * FROM requests WHERE requestId=$1';
              value = [requestId];
              _context2.next = 5;
              return _regenerator["default"].awrap(_db["default"].query(queryText, value));

            case 5:
              request = _context2.sent;

              if (request.rows.length) {
                _context2.next = 8;
                break;
              }

              return _context2.abrupt("return", res.status(400).json('No request associated is with this id'));

            case 8:
              return _context2.abrupt("return", res.status(200).json({
                message: 'GET a specific request successful',
                id: requestId,
                request: request.rows[0]
              }));

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "updateRequest",
    value: function updateRequest(req, res) {
      var requestId, queryText, value, request, _req$body, title, description, itemType, status, category, query, values, updatedRequest;

      return _regenerator["default"].async(function updateRequest$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              requestId = req.params.requestId;
              _context3.prev = 1;
              queryText = 'SELECT * FROM requests WHERE requestId=$1';
              value = [requestId];
              _context3.next = 6;
              return _regenerator["default"].awrap(_db["default"].query(queryText, value));

            case 6:
              request = _context3.sent;

              if (request.rows.length) {
                _context3.next = 9;
                break;
              }

              return _context3.abrupt("return", res.status(404).json('No request associated with this ID'));

            case 9:
              // const response = request.rows[0];
              _req$body = req.body, title = _req$body.title, description = _req$body.description, itemType = _req$body.itemType, status = _req$body.status, category = _req$body.category;
              query = 'UPDATE requests SET title=$1,description=$2,itemType=$3,status=$4,category=$5,created_at=NOW() WHERE requestId=$6 RETURNING *';
              values = [title, description, itemType, status, category, requestId];
              _context3.next = 14;
              return _regenerator["default"].awrap(_db["default"].query(query, values));

            case 14:
              updatedRequest = _context3.sent;
              return _context3.abrupt("return", res.status(200).json({
                message: 'Request updated successfully',
                code: 200,
                request: updatedRequest.rows
              }));

            case 18:
              _context3.prev = 18;
              _context3.t0 = _context3["catch"](1);
              return _context3.abrupt("return", res.status(400).send({
                message: "Cannot update request with id ".concat(requestId, " because it doesn't exist on our server.")
              }));

            case 21:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[1, 18]]);
    }
  }, {
    key: "createRequest",
    value: function createRequest(req, res) {
      var _req$body2, title, description, category, itemType, userId, status, queryText, values, newRequest;

      return _regenerator["default"].async(function createRequest$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _req$body2 = req.body, title = _req$body2.title, description = _req$body2.description, category = _req$body2.category, itemType = _req$body2.itemType, userId = _req$body2.userId;

              if (title) {
                _context4.next = 3;
                break;
              }

              return _context4.abrupt("return", res.status(404).json('Input all fields'));

            case 3:
              status = 'pending';
              _context4.prev = 4;
              queryText = 'INSERT INTO requests (title, description, category, status, created_at, itemType, userId) VALUES($1,$2,$3,$4,NOW(),$5,$6) RETURNING *';
              values = [title, description, category, status, itemType, userId];
              _context4.next = 9;
              return _regenerator["default"].awrap(_db["default"].query(queryText, values));

            case 9:
              newRequest = _context4.sent;
              return _context4.abrupt("return", res.status(201).json({
                message: 'Request Created',
                code: 201,
                newRequest: newRequest.rows
              }));

            case 13:
              _context4.prev = 13;
              _context4.t0 = _context4["catch"](4);
              return _context4.abrupt("return", _context4.t0);

            case 16:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[4, 13]]);
    }
  }, {
    key: "deleteRequest",
    value: function deleteRequest(req, res) {
      var requestId, queryText, value, deletedRequest;
      return _regenerator["default"].async(function deleteRequest$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              requestId = req.params.requestId;
              _context5.prev = 1;
              queryText = 'DELETE FROM requests WHERE requestId=$1';
              value = [requestId];
              _context5.next = 6;
              return _regenerator["default"].awrap(_db["default"].query(queryText, value));

            case 6:
              deletedRequest = _context5.sent;

              if (deletedRequest.rowCount) {
                _context5.next = 9;
                break;
              }

              return _context5.abrupt("return", res.status(404).json('No request is associated with this ID'));

            case 9:
              return _context5.abrupt("return", res.status(200).json({
                message: 'Item requested successfully deleted',
                id: "".concat(requestId, " was deleted"),
                code: 200,
                status: 'success'
              }));

            case 12:
              _context5.prev = 12;
              _context5.t0 = _context5["catch"](1);
              return _context5.abrupt("return", _context5.t0);

            case 15:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, [[1, 12]]);
    }
  }]);
  return userController;
}();

var _default = userController;
exports["default"] = _default;
//# sourceMappingURL=user.controller.js.map