"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _UserRoute = _interopRequireDefault(require("./server/Routes/UserRoute"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config({
  path: './.env'
});

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use("/PeerMontor/v1/user", _UserRoute["default"]);
app.use('/', function (req, res) {
  res.status(200).send({
    status: 200,
    message: "This is Peermentor  APIs"
  });
});
var databaseUrl = process.env.DATABASE;

_mongoose["default"].connect(databaseUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(function () {
  return console.log("Database connected sucessfully");
});

var port = process.env.PORT;
app.listen(4040, function () {
  //console.log(databaseUrl)
  console.log("Server is running on ".concat(port));
});
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=server.dev.js.map
