"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SessionSchema = new _mongoose["default"].Schema({
  title: String,
  description: String,
  user: String,
  mentor: String,
  timeToStart: String,
  timeToEnd: String,
  status: {
    type: String,
    "enum": ["Pending", "Declined", "Aproved"],
    "default": "Pending"
  }
});

var SessionInfo = _mongoose["default"].model('Session', SessionSchema);

var _default = SessionInfo;
exports["default"] = _default;
//# sourceMappingURL=SessionModel.dev.js.map
