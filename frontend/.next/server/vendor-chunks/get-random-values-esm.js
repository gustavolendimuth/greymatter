/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/get-random-values-esm";
exports.ids = ["vendor-chunks/get-random-values-esm"];
exports.modules = {

/***/ "(ssr)/./node_modules/get-random-values-esm/index.cjs":
/*!******************************************************!*\
  !*** ./node_modules/get-random-values-esm/index.cjs ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { webcrypto } = __webpack_require__(/*! crypto */ \"crypto\")\n\n// node v15 and later adds support for WebCrypto, so we load it using a conditional export that is only supported by v14 and later\nmodule.exports =\n  typeof webcrypto === 'undefined'\n    ? __webpack_require__(/*! get-random-values */ \"(ssr)/./node_modules/get-random-values/index.js\")\n    : function getRandomValues(typedArray) {\n        return webcrypto.getRandomValues(typedArray)\n      }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZ2V0LXJhbmRvbS12YWx1ZXMtZXNtL2luZGV4LmNqcyIsIm1hcHBpbmdzIjoiQUFBQSxRQUFRLFlBQVksRUFBRSxtQkFBTyxDQUFDLHNCQUFROztBQUV0QztBQUNBO0FBQ0E7QUFDQSxNQUFNLG1CQUFPLENBQUMsMEVBQW1CO0FBQ2pDO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dyZXltYXR0ZXItdjIvLi9ub2RlX21vZHVsZXMvZ2V0LXJhbmRvbS12YWx1ZXMtZXNtL2luZGV4LmNqcz84OTUzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgd2ViY3J5cHRvIH0gPSByZXF1aXJlKCdjcnlwdG8nKVxuXG4vLyBub2RlIHYxNSBhbmQgbGF0ZXIgYWRkcyBzdXBwb3J0IGZvciBXZWJDcnlwdG8sIHNvIHdlIGxvYWQgaXQgdXNpbmcgYSBjb25kaXRpb25hbCBleHBvcnQgdGhhdCBpcyBvbmx5IHN1cHBvcnRlZCBieSB2MTQgYW5kIGxhdGVyXG5tb2R1bGUuZXhwb3J0cyA9XG4gIHR5cGVvZiB3ZWJjcnlwdG8gPT09ICd1bmRlZmluZWQnXG4gICAgPyByZXF1aXJlKCdnZXQtcmFuZG9tLXZhbHVlcycpXG4gICAgOiBmdW5jdGlvbiBnZXRSYW5kb21WYWx1ZXModHlwZWRBcnJheSkge1xuICAgICAgICByZXR1cm4gd2ViY3J5cHRvLmdldFJhbmRvbVZhbHVlcyh0eXBlZEFycmF5KVxuICAgICAgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/get-random-values-esm/index.cjs\n");

/***/ })

};
;