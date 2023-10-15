"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/next-sanity";
exports.ids = ["vendor-chunks/next-sanity"];
exports.modules = {

/***/ "(ssr)/./node_modules/next-sanity/dist/client.js":
/*!*************************************************!*\
  !*** ./node_modules/next-sanity/dist/client.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createClient: () => (/* binding */ createClient)\n/* harmony export */ });\n/* harmony import */ var _sanity_preview_kit_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/preview-kit/client */ \"(ssr)/./node_modules/@sanity/preview-kit/dist/client/createClient.js\");\n\nfunction createClient(config) {\n  let {\n    // eslint-disable-next-line prefer-const, no-process-env\n    studioUrl = process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,\n    encodeSourceMap = studioUrl ? \"auto\" : false\n  } = config;\n  if (encodeSourceMap === \"auto\" && process.env.NEXT_PUBLIC_VERCEL_ENV === \"preview\") {\n    encodeSourceMap = true;\n  }\n  return (0,_sanity_preview_kit_client__WEBPACK_IMPORTED_MODULE_0__.createClient)({\n    ...config,\n    studioUrl,\n    encodeSourceMap\n  });\n}\n\n//# sourceMappingURL=client.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmV4dC1zYW5pdHkvZGlzdC9jbGllbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNEU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxTQUFTLHdFQUFjO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUN3QjtBQUN4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2dyZXltYXR0ZXItdjIvLi9ub2RlX21vZHVsZXMvbmV4dC1zYW5pdHkvZGlzdC9jbGllbnQuanM/N2U0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgYXMgY3JlYXRlQ2xpZW50JDEgfSBmcm9tICdAc2FuaXR5L3ByZXZpZXcta2l0L2NsaWVudCc7XG5mdW5jdGlvbiBjcmVhdGVDbGllbnQoY29uZmlnKSB7XG4gIGxldCB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1jb25zdCwgbm8tcHJvY2Vzcy1lbnZcbiAgICBzdHVkaW9VcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfU1RVRElPX1VSTCxcbiAgICBlbmNvZGVTb3VyY2VNYXAgPSBzdHVkaW9VcmwgPyBcImF1dG9cIiA6IGZhbHNlXG4gIH0gPSBjb25maWc7XG4gIGlmIChlbmNvZGVTb3VyY2VNYXAgPT09IFwiYXV0b1wiICYmIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1ZFUkNFTF9FTlYgPT09IFwicHJldmlld1wiKSB7XG4gICAgZW5jb2RlU291cmNlTWFwID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gY3JlYXRlQ2xpZW50JDEoe1xuICAgIC4uLmNvbmZpZyxcbiAgICBzdHVkaW9VcmwsXG4gICAgZW5jb2RlU291cmNlTWFwXG4gIH0pO1xufVxuZXhwb3J0IHsgY3JlYXRlQ2xpZW50IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jbGllbnQuanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/next-sanity/dist/client.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next-sanity/dist/client.js":
/*!*************************************************!*\
  !*** ./node_modules/next-sanity/dist/client.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createClient: () => (/* binding */ createClient)\n/* harmony export */ });\n/* harmony import */ var _sanity_preview_kit_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/preview-kit/client */ \"(rsc)/./node_modules/@sanity/preview-kit/dist/client/createClient.js\");\n\nfunction createClient(config) {\n    let { // eslint-disable-next-line prefer-const, no-process-env\n    studioUrl = process.env.NEXT_PUBLIC_SANITY_STUDIO_URL, encodeSourceMap = studioUrl ? \"auto\" : false } = config;\n    if (encodeSourceMap === \"auto\" && process.env.NEXT_PUBLIC_VERCEL_ENV === \"preview\") {\n        encodeSourceMap = true;\n    }\n    return (0,_sanity_preview_kit_client__WEBPACK_IMPORTED_MODULE_0__.createClient)({\n        ...config,\n        studioUrl,\n        encodeSourceMap\n    });\n}\n //# sourceMappingURL=client.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC1zYW5pdHkvZGlzdC9jbGllbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNEU7QUFDNUUsU0FBU0EsYUFBYUUsTUFBTTtJQUMxQixJQUFJLEVBQ0Ysd0RBQXdEO0lBQ3hEQyxZQUFZQyxRQUFRQyxHQUFHLENBQUNDLDZCQUE2QixFQUNyREMsa0JBQWtCSixZQUFZLFNBQVMsS0FBSyxFQUM3QyxHQUFHRDtJQUNKLElBQUlLLG9CQUFvQixVQUFVSCxRQUFRQyxHQUFHLENBQUNHLHNCQUFzQixLQUFLLFdBQVc7UUFDbEZELGtCQUFrQjtJQUNwQjtJQUNBLE9BQU9OLHdFQUFjQSxDQUFDO1FBQ3BCLEdBQUdDLE1BQU07UUFDVEM7UUFDQUk7SUFDRjtBQUNGO0FBQ3dCLENBQ3hCLGtDQUFrQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dyZXltYXR0ZXItdjIvLi9ub2RlX21vZHVsZXMvbmV4dC1zYW5pdHkvZGlzdC9jbGllbnQuanM/ZjU0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgYXMgY3JlYXRlQ2xpZW50JDEgfSBmcm9tICdAc2FuaXR5L3ByZXZpZXcta2l0L2NsaWVudCc7XG5mdW5jdGlvbiBjcmVhdGVDbGllbnQoY29uZmlnKSB7XG4gIGxldCB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1jb25zdCwgbm8tcHJvY2Vzcy1lbnZcbiAgICBzdHVkaW9VcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfU1RVRElPX1VSTCxcbiAgICBlbmNvZGVTb3VyY2VNYXAgPSBzdHVkaW9VcmwgPyBcImF1dG9cIiA6IGZhbHNlXG4gIH0gPSBjb25maWc7XG4gIGlmIChlbmNvZGVTb3VyY2VNYXAgPT09IFwiYXV0b1wiICYmIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1ZFUkNFTF9FTlYgPT09IFwicHJldmlld1wiKSB7XG4gICAgZW5jb2RlU291cmNlTWFwID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gY3JlYXRlQ2xpZW50JDEoe1xuICAgIC4uLmNvbmZpZyxcbiAgICBzdHVkaW9VcmwsXG4gICAgZW5jb2RlU291cmNlTWFwXG4gIH0pO1xufVxuZXhwb3J0IHsgY3JlYXRlQ2xpZW50IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jbGllbnQuanMubWFwXG4iXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50IiwiY3JlYXRlQ2xpZW50JDEiLCJjb25maWciLCJzdHVkaW9VcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU0FOSVRZX1NUVURJT19VUkwiLCJlbmNvZGVTb3VyY2VNYXAiLCJORVhUX1BVQkxJQ19WRVJDRUxfRU5WIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next-sanity/dist/client.js\n");

/***/ })

};
;