"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propertiesListPage = void 0;

var _model = _interopRequireDefault(require("../models/model"));

var propertiesListModel = new _model["default"]('properties_list'); // export const propertiesListPage = async (req, res) => {
//   try {
//     const data = await propertiesListModel.select('*');
//     return res.status(200).json({ property: data.rows });
//   } catch (err) {
//     return res.status(200).json({ messages: err.stack });
//   }
// };

var propertiesListPage = function propertiesListPage(req, res) {
  return res.status(200).json({
    message: "useless"
  });
};

exports.propertiesListPage = propertiesListPage;