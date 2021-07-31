"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _SessionController = _interopRequireDefault(require("../Controllers/SessionController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sessionRouter = _express["default"].Router();

sessionRouter.post("/registersession", _SessionController["default"].registerSession);
sessionRouter.get("/all", _SessionController["default"].getAllSessions);
sessionRouter.get('/:id', _SessionController["default"].getOneSession);
sessionRouter.patch('/:id', _SessionController["default"].updateOneSession);
sessionRouter["delete"]('/:id', _SessionController["default"].deleteOneSession);
var _default = sessionRouter;
exports["default"] = _default;
//# sourceMappingURL=SessionRoute.dev.js.map
