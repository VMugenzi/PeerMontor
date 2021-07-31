"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var UserSchema = new _mongoose["default"].Schema({
  firstName: {
    type: String,
    require: [true, "first name is required"]
  },
  lastName: String,
  gender: {
    type: String,
    "enum": ["female", "male"]
  },
  phoneNumber: String,
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    "default": "12345"
  },
  age: Number,
  role: {
    type: String,
    "enum": ["admin", "mentor", "User"],
    "default": "user"
  },
  status: {
    type: String,
    "enum": ["active", "inactive"]
  }
});

var UserInfo = _mongoose["default"].model('User', UserSchema);

var _default = UserInfo;
exports["default"] = _default;
//# sourceMappingURL=UserModel.dev.js.map
