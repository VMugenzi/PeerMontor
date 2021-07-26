"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var UserSchema = new _mongoose["default"].Schema({
  firstName: String,
  lastName: String,
  gender: String,
  phoneNumber: String,
  email: String
});

var UserInfo = _mongoose["default"].model('User', UserSchema);

var _default = UserInfo;
exports["default"] = _default;
//# sourceMappingURL=UserModel.dev.js.map
