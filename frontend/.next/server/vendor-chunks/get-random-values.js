/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/get-random-values";
exports.ids = ["vendor-chunks/get-random-values"];
exports.modules = {

/***/ "(ssr)/./node_modules/get-random-values/index.js":
/*!*************************************************!*\
  !*** ./node_modules/get-random-values/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var window = __webpack_require__(/*! global/window */ \"(ssr)/./node_modules/global/window.js\");\nvar nodeCrypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nfunction getRandomValues(buf) {\n  if (window.crypto && window.crypto.getRandomValues) {\n    return window.crypto.getRandomValues(buf);\n  }\n  if (typeof window.msCrypto === 'object' && typeof window.msCrypto.getRandomValues === 'function') {\n    return window.msCrypto.getRandomValues(buf);\n  }\n  if (nodeCrypto.randomBytes) {\n    if (!(buf instanceof Uint8Array)) {\n      throw new TypeError('expected Uint8Array');\n    }\n    if (buf.length > 65536) {\n      var e = new Error();\n      e.code = 22;\n      e.message = 'Failed to execute \\'getRandomValues\\' on \\'Crypto\\': The ' +\n        'ArrayBufferView\\'s byte length (' + buf.length + ') exceeds the ' +\n        'number of bytes of entropy available via this API (65536).';\n      e.name = 'QuotaExceededError';\n      throw e;\n    }\n    var bytes = nodeCrypto.randomBytes(buf.length);\n    buf.set(bytes);\n    return buf;\n  }\n  else {\n    throw new Error('No secure random number generator available.');\n  }\n}\n\nmodule.exports = getRandomValues;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZ2V0LXJhbmRvbS12YWx1ZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUEsYUFBYSxtQkFBTyxDQUFDLDREQUFlO0FBQ3BDLGlCQUFpQixtQkFBTyxDQUFDLHNCQUFROztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dyZXltYXR0ZXItdjIvLi9ub2RlX21vZHVsZXMvZ2V0LXJhbmRvbS12YWx1ZXMvaW5kZXguanM/NDY4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgd2luZG93ID0gcmVxdWlyZSgnZ2xvYmFsL3dpbmRvdycpO1xudmFyIG5vZGVDcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcblxuZnVuY3Rpb24gZ2V0UmFuZG9tVmFsdWVzKGJ1Zikge1xuICBpZiAod2luZG93LmNyeXB0byAmJiB3aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgIHJldHVybiB3aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhidWYpO1xuICB9XG4gIGlmICh0eXBlb2Ygd2luZG93Lm1zQ3J5cHRvID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygd2luZG93Lm1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB3aW5kb3cubXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGJ1Zik7XG4gIH1cbiAgaWYgKG5vZGVDcnlwdG8ucmFuZG9tQnl0ZXMpIHtcbiAgICBpZiAoIShidWYgaW5zdGFuY2VvZiBVaW50OEFycmF5KSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhwZWN0ZWQgVWludDhBcnJheScpO1xuICAgIH1cbiAgICBpZiAoYnVmLmxlbmd0aCA+IDY1NTM2KSB7XG4gICAgICB2YXIgZSA9IG5ldyBFcnJvcigpO1xuICAgICAgZS5jb2RlID0gMjI7XG4gICAgICBlLm1lc3NhZ2UgPSAnRmFpbGVkIHRvIGV4ZWN1dGUgXFwnZ2V0UmFuZG9tVmFsdWVzXFwnIG9uIFxcJ0NyeXB0b1xcJzogVGhlICcgK1xuICAgICAgICAnQXJyYXlCdWZmZXJWaWV3XFwncyBieXRlIGxlbmd0aCAoJyArIGJ1Zi5sZW5ndGggKyAnKSBleGNlZWRzIHRoZSAnICtcbiAgICAgICAgJ251bWJlciBvZiBieXRlcyBvZiBlbnRyb3B5IGF2YWlsYWJsZSB2aWEgdGhpcyBBUEkgKDY1NTM2KS4nO1xuICAgICAgZS5uYW1lID0gJ1F1b3RhRXhjZWVkZWRFcnJvcic7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgICB2YXIgYnl0ZXMgPSBub2RlQ3J5cHRvLnJhbmRvbUJ5dGVzKGJ1Zi5sZW5ndGgpO1xuICAgIGJ1Zi5zZXQoYnl0ZXMpO1xuICAgIHJldHVybiBidWY7XG4gIH1cbiAgZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBzZWN1cmUgcmFuZG9tIG51bWJlciBnZW5lcmF0b3IgYXZhaWxhYmxlLicpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmFuZG9tVmFsdWVzO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/get-random-values/index.js\n");

/***/ })

};
;