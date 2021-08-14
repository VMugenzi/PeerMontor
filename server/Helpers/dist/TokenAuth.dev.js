"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

_dotenv["default"].config();

var TokenAuth =
/*#__PURE__*/
function () {
  function TokenAuth() {
    _classCallCheck(this, TokenAuth);
  }

  _createClass(TokenAuth, null, [{
    key: "tokenGenerator",
    value: function tokenGenerator(data) {
      var token = _jsonwebtoken["default"].sign(data, process.env.JWTKEY, {
        expiresIn: "1h"
      });

      return token;
    }
  }, {
    key: "getDataFromToken",
    value: function getDataFromToken(token) {
      var data = _jsonwebtoken["default"].verify(token, process.env.JWTKEY);

      return data;
    }
  }]);

  return TokenAuth;
}();

var _default = TokenAuth;
exports["default"] = _default;
//# sourceMappingURL=TokenAuth.dev.js.map
