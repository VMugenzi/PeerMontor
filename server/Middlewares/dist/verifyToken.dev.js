"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _TokenAuth = _interopRequireDefault(require("../Helpers/TokenAuth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var verifyToken = function verifyToken(req, res, next) {
  var token, user;
  return regeneratorRuntime.async(function verifyToken$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          token = req.header("x-auth-token");

          if (token) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return", res.status(404).json({
            status: 404,
            message: "no token provided"
          }));

        case 3:
          _context.prev = 3;
          user = _TokenAuth["default"].getDataFromToken(token);
          req.user = user;
          return _context.abrupt("return", next());

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](3);
          console.log(">>>>>>>>>>>", _context.t0);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 9]]);
};

var _default = verifyToken;
exports["default"] = _default;
//# sourceMappingURL=verifyToken.dev.js.map
