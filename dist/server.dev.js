"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.listen(4040, function () {
  console.log('Server is running on port 4040');
});
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=server.dev.js.map
