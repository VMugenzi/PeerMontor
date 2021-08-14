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
  user: {
    type: _mongoose["default"].Schema.ObjectId,
    ref: "user"
  },
  mentor: {
    type: _mongoose["default"].Schema.ObjectId,
    ref: "mentor"
  },
  timeToStart: String,
  timeToEnd: String,
  status: {
    type: String,
    "enum": ["Pending", "Declined", "Aproved"],
    "default": "Pending"
  }
});
SessionSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "firstName lastName email phoneNumber gender"
  }).populate({
    path: "mentor",
    select: "firstName lastName email phoneNumber gender"
  });
  next();
});

var SessionInfo = _mongoose["default"].model('Session', SessionSchema);

var _default = SessionInfo;
exports["default"] = _default;
//# sourceMappingURL=SessionModel.dev.js.map
