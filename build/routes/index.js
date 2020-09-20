"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _controllers = require("../controllers");

var indexRouter = _express["default"].Router();

indexRouter.get('/properties', function (req, res) {
  res.send("Hey these are the properties");
});
indexRouter.get('/', _controllers.indexPage);
var _default = indexRouter;
exports["default"] = _default;