"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _UserController = _interopRequireDefault(require("../Controllers/UserController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userRouter = _express["default"].Router();

userRouter.post("/signup", _UserController["default"].signupUser);
userRouter.get("/all", _UserController["default"].getAllUsers);
var _default = userRouter;
exports["default"] = _default;
//# sourceMappingURL=UserRoute.dev.js.map
