import React from "react";
import { stripIndent } from "common-tags";

exports.onRenderBody = ({ setPreBodyComponents }, pluginOptions) => {
  return setPreBodyComponents([
    <script key={`gatsby-plugin-iamport`} src="https://service.iamport.kr/js/iamport.payment-1.1.5.js" />
  ]);
};
