"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _Validator = _interopRequireDefault(require("../Middlewares/Validator.js"));

var _UserController = _interopRequireDefault(require("../Controllers/UserController"));

var _Datachecker = _interopRequireDefault(require("../Middlewares/Datachecker.js"));

var _verifyToken = _interopRequireDefault(require("../Middlewares/verifyToken.js"));

var _verifyAccess = _interopRequireDefault(require("../Middlewares/verifyAccess"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userRouter = _express["default"].Router();

userRouter.post("/signup", _Validator["default"].newAccountRules(), _Validator["default"].validateInput, _Datachecker["default"].validateEmailDuplication, _Datachecker["default"].checkAge, _UserController["default"].signupUser);
userRouter.get("/all", _UserController["default"].getAllUsers);
userRouter.get("/:id", _verifyToken["default"], (0, _verifyAccess["default"])("user"), _UserController["default"].getOneUser);
userRouter.patch("/:id", _UserController["default"].updateOneUser);
userRouter.patch("/:id/role", _verifyToken["default"], (0, _verifyAccess["default"])("admin"), _UserController["default"].updateOneUserRole);
userRouter["delete"]("/:id", _UserController["default"].deleteOneUser);
userRouter.get("/all/mentor", _verifyToken["default"], (0, _verifyAccess["default"])("user"), _UserController["default"].getAllMentors);
userRouter.post("/signin", _UserController["default"].signinUser);
var _default = userRouter;
exports["default"] = _default;
//# sourceMappingURL=UserRoute.dev.js.map
