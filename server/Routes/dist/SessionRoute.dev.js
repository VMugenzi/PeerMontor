"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _SessionController = _interopRequireDefault(require("../Controllers/SessionController"));

var _verifyToken = _interopRequireDefault(require("../Middlewares/verifyToken"));

var _verifyAccess = _interopRequireDefault(require("../Middlewares/verifyAccess"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sessionRouter = _express["default"].Router();

sessionRouter.post("/registersession", _verifyToken["default"], (0, _verifyAccess["default"])("user"), _SessionController["default"].registerSession);
sessionRouter.get("/all", _SessionController["default"].getAllSessions);
sessionRouter.get('/:id', _SessionController["default"].getOneSession);
sessionRouter.patch('/:id', _SessionController["default"].updateOneSession);
sessionRouter.patch('/:id/status', _verifyToken["default"], (0, _verifyAccess["default"])("mentor"), _SessionController["default"].approveSession);
sessionRouter.patch('/:id/statusdec', _verifyToken["default"], (0, _verifyAccess["default"])("mentor"), _SessionController["default"].declineSession);
sessionRouter["delete"]('/:id', _SessionController["default"].deleteOneSession);
var _default = sessionRouter;
exports["default"] = _default;
//# sourceMappingURL=SessionRoute.dev.js.map
