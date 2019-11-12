"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.server = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _path = _interopRequireDefault(require("path"));

var _authRoutes = _interopRequireDefault(require("./routes/authRoutes"));

var _userRoutes = _interopRequireDefault(require("./routes/userRoutes"));

var _adminRoutes = _interopRequireDefault(require("./routes/adminRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable linebreak-style */

/* eslint-disable no-console */
var app = (0, _express["default"])();
var port = process.env.PORT || 3010; // Deployment

var frontend = _path["default"].join(__dirname, '../public');

app.use(_express["default"]["static"](frontend)); // Middlewares

app.use((0, _cors["default"])());
app.use((0, _morgan["default"])('dev'));
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json());
app.use(_express["default"]["static"]('public'));
app.use('/api/v1/auth', _authRoutes["default"]);
app.use('/api/v1/users/requests', _userRoutes["default"]);
app.use('/api/v1/admin', _adminRoutes["default"]); // Test good route

app.get('/', function (req, res) {
  res.json({
    message: 'welcome to the maintenance tracker app api/v1'
  });
}); // Invalid Routes

app.all('*', function (req, res) {
  return res.status(404).json({
    status: 'error',
    code: 404,
    message: 'Route unavailable on server.'
  });
});
app.listen(port, function () {
  console.log("SERVER IS UP AND RUNNING ON PORT ".concat(port));
});
var server = app;
exports.server = server;
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=app.js.map