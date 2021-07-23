"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config({
  path: './.env'
});

var app = (0, _express["default"])();
var databaseUrl = process.env.DATABASE;

_mongoose["default"].connect(databaseUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(function () {
  return console.log("Database connected sucessfully");
});

app.listen(4040, function () {
  //console.log(databaseUrl)
  console.log('Server is running on port 4040');
});
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=server.dev.js.map
