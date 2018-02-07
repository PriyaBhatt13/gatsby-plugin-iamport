"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _commonTags = require("common-tags");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.onRenderBody = function (_ref, pluginOptions) {
  var setPreBodyComponents = _ref.setPreBodyComponents;

  return setPreBodyComponents([_react2.default.createElement("script", { key: "gatsby-plugin-iamport", src: "https://service.iamport.kr/js/iamport.payment-1.1.5.js" })]);
};