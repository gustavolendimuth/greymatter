"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/observable-callback";
exports.ids = ["vendor-chunks/observable-callback"];
exports.modules = {

/***/ "(ssr)/./node_modules/observable-callback/dist/cjs/observableCallback.js":
/*!*************************************************************************!*\
  !*** ./node_modules/observable-callback/dist/cjs/observableCallback.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.observableCallback = void 0;\nvar rxjs_1 = __webpack_require__(/*! rxjs */ \"(ssr)/./node_modules/rxjs/dist/esm5/index.js\");\nvar pass = function (input$) { return input$; };\nfunction observableCallback(operator) {\n    if (operator === void 0) { operator = pass; }\n    var subject = new rxjs_1.Subject();\n    return [subject.pipe(operator), function (arg) { return subject.next(arg); }];\n}\nexports.observableCallback = observableCallback;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvb2JzZXJ2YWJsZS1jYWxsYmFjay9kaXN0L2Nqcy9vYnNlcnZhYmxlQ2FsbGJhY2suanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsMEJBQTBCO0FBQzFCLGFBQWEsbUJBQU8sQ0FBQywwREFBTTtBQUMzQiwrQkFBK0I7QUFDL0I7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQSxxREFBcUQsMkJBQTJCO0FBQ2hGO0FBQ0EsMEJBQTBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JleW1hdHRlci12Mi8uL25vZGVfbW9kdWxlcy9vYnNlcnZhYmxlLWNhbGxiYWNrL2Rpc3QvY2pzL29ic2VydmFibGVDYWxsYmFjay5qcz9jZmVjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5vYnNlcnZhYmxlQ2FsbGJhY2sgPSB2b2lkIDA7XG52YXIgcnhqc18xID0gcmVxdWlyZShcInJ4anNcIik7XG52YXIgcGFzcyA9IGZ1bmN0aW9uIChpbnB1dCQpIHsgcmV0dXJuIGlucHV0JDsgfTtcbmZ1bmN0aW9uIG9ic2VydmFibGVDYWxsYmFjayhvcGVyYXRvcikge1xuICAgIGlmIChvcGVyYXRvciA9PT0gdm9pZCAwKSB7IG9wZXJhdG9yID0gcGFzczsgfVxuICAgIHZhciBzdWJqZWN0ID0gbmV3IHJ4anNfMS5TdWJqZWN0KCk7XG4gICAgcmV0dXJuIFtzdWJqZWN0LnBpcGUob3BlcmF0b3IpLCBmdW5jdGlvbiAoYXJnKSB7IHJldHVybiBzdWJqZWN0Lm5leHQoYXJnKTsgfV07XG59XG5leHBvcnRzLm9ic2VydmFibGVDYWxsYmFjayA9IG9ic2VydmFibGVDYWxsYmFjaztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/observable-callback/dist/cjs/observableCallback.js\n");

/***/ })

};
;