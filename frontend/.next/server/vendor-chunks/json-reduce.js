"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/json-reduce";
exports.ids = ["vendor-chunks/json-reduce"];
exports.modules = {

/***/ "(ssr)/./node_modules/json-reduce/dist/reduce.js":
/*!*************************************************!*\
  !*** ./node_modules/json-reduce/dist/reduce.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.SKIP = SKIP;\nexports.reduce = reduce;\nexports.withCustomPathSegment = exports.SKIP_MARKER = void 0;\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction defaultCreatePathSegment(value, index, outerValue) {\n  return index;\n}\n\nfunction getType(value) {\n  if (Array.isArray(value)) {\n    return 'array';\n  }\n\n  return value === null ? 'null' : _typeof(value);\n}\n\nvar SKIP_MARKER = {\n  _: 'SKIP_MARKER'\n};\nexports.SKIP_MARKER = SKIP_MARKER;\n\nfunction SKIP(value) {\n  return [SKIP_MARKER, value];\n}\n\nfunction callReducer(acc, reducerFn, value, path) {\n  var returnVal = reducerFn(acc, value, path);\n\n  if (returnVal === SKIP) {\n    return [true, acc];\n  }\n\n  return Array.isArray(returnVal) && returnVal[0] === SKIP_MARKER ? [true, returnVal[1]] : [false, returnVal];\n} // eslint-disable-next-line no-use-before-define\n\n\nfunction reducePrimitive(acc, reducerFn, value, path) {\n  var _callReducer = callReducer(acc, reducerFn, value, path),\n      _callReducer2 = _slicedToArray(_callReducer, 2),\n\n  /* skipped by default */\n  nextAcc = _callReducer2[1];\n\n  return nextAcc;\n} // Reduce depth first\n\n\nfunction reduceObject(acc, reducerFn, object, path) {\n  var createPathSegment = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultCreatePathSegment;\n\n  var _callReducer3 = callReducer(acc, reducerFn, object, path),\n      _callReducer4 = _slicedToArray(_callReducer3, 2),\n      skip = _callReducer4[0],\n      nextAcc = _callReducer4[1];\n\n  return skip ? nextAcc : Object.keys(object).reduce(function (innerAcc, key) {\n    return reduceAny(innerAcc, reducerFn, object[key], path.concat(createPathSegment(object[key], key, object)), createPathSegment);\n  }, nextAcc);\n} // Reduce depth first\n\n\nfunction reduceArray(acc, reducerFn, array, path) {\n  var createPathSegment = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultCreatePathSegment;\n\n  var _callReducer5 = callReducer(acc, reducerFn, array, path),\n      _callReducer6 = _slicedToArray(_callReducer5, 2),\n      skip = _callReducer6[0],\n      nextAcc = _callReducer6[1];\n\n  return skip ? nextAcc : array.reduce(function (innerAcc, item, index) {\n    return reduceAny(innerAcc, reducerFn, item, path.concat(createPathSegment(item, index, array)), createPathSegment);\n  }, nextAcc);\n}\n\nfunction reduceAny(acc, reducerFn, val, path) {\n  var createPathSegment = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultCreatePathSegment;\n  var type = getType(val);\n\n  if (type === 'object') {\n    return reduceObject(acc, reducerFn, val, path, createPathSegment);\n  }\n\n  if (type === 'array') {\n    return reduceArray(acc, reducerFn, val, path, createPathSegment);\n  }\n\n  return reducePrimitive(acc, reducerFn, val, path);\n}\n\nfunction reduce(value, reducerFn, initial) {\n  var createPathSegment = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultCreatePathSegment;\n  return reduceAny(initial, reducerFn, value, [], createPathSegment);\n}\n\nvar withCustomPathSegment = function withCustomPathSegment(createPathSegment) {\n  return function (value, reducer, initial) {\n    return reduce(value, reducer, initial, createPathSegment);\n  };\n};\n\nexports.withCustomPathSegment = withCustomPathSegment;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvanNvbi1yZWR1Y2UvZGlzdC9yZWR1Y2UuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsWUFBWTtBQUNaLGNBQWM7QUFDZCw2QkFBNkIsR0FBRyxtQkFBbUI7O0FBRW5ELGtDQUFrQzs7QUFFbEMsOEJBQThCOztBQUU5Qix5Q0FBeUMsZUFBZSxlQUFlLGdCQUFnQixvQkFBb0IsTUFBTSwwQ0FBMEMsK0JBQStCLGFBQWEscUJBQXFCLHVDQUF1QyxjQUFjLFdBQVcsWUFBWSxVQUFVLE1BQU0sbURBQW1ELFVBQVUsc0JBQXNCOztBQUUzWSxnQ0FBZ0M7O0FBRWhDLHdCQUF3QiwyRUFBMkUsa0NBQWtDLHdCQUF3QixPQUFPLGtDQUFrQyxtSUFBbUk7O0FBRXpVO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjs7QUFFbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOzs7QUFHRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7O0FBR0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmV5bWF0dGVyLXYyLy4vbm9kZV9tb2R1bGVzL2pzb24tcmVkdWNlL2Rpc3QvcmVkdWNlLmpzPzBjZTciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlNLSVAgPSBTS0lQO1xuZXhwb3J0cy5yZWR1Y2UgPSByZWR1Y2U7XG5leHBvcnRzLndpdGhDdXN0b21QYXRoU2VnbWVudCA9IGV4cG9ydHMuU0tJUF9NQVJLRVIgPSB2b2lkIDA7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBkZWZhdWx0Q3JlYXRlUGF0aFNlZ21lbnQodmFsdWUsIGluZGV4LCBvdXRlclZhbHVlKSB7XG4gIHJldHVybiBpbmRleDtcbn1cblxuZnVuY3Rpb24gZ2V0VHlwZSh2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gJ2FycmF5JztcbiAgfVxuXG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbCA/ICdudWxsJyA6IF90eXBlb2YodmFsdWUpO1xufVxuXG52YXIgU0tJUF9NQVJLRVIgPSB7XG4gIF86ICdTS0lQX01BUktFUidcbn07XG5leHBvcnRzLlNLSVBfTUFSS0VSID0gU0tJUF9NQVJLRVI7XG5cbmZ1bmN0aW9uIFNLSVAodmFsdWUpIHtcbiAgcmV0dXJuIFtTS0lQX01BUktFUiwgdmFsdWVdO1xufVxuXG5mdW5jdGlvbiBjYWxsUmVkdWNlcihhY2MsIHJlZHVjZXJGbiwgdmFsdWUsIHBhdGgpIHtcbiAgdmFyIHJldHVyblZhbCA9IHJlZHVjZXJGbihhY2MsIHZhbHVlLCBwYXRoKTtcblxuICBpZiAocmV0dXJuVmFsID09PSBTS0lQKSB7XG4gICAgcmV0dXJuIFt0cnVlLCBhY2NdO1xuICB9XG5cbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkocmV0dXJuVmFsKSAmJiByZXR1cm5WYWxbMF0gPT09IFNLSVBfTUFSS0VSID8gW3RydWUsIHJldHVyblZhbFsxXV0gOiBbZmFsc2UsIHJldHVyblZhbF07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuXG5cbmZ1bmN0aW9uIHJlZHVjZVByaW1pdGl2ZShhY2MsIHJlZHVjZXJGbiwgdmFsdWUsIHBhdGgpIHtcbiAgdmFyIF9jYWxsUmVkdWNlciA9IGNhbGxSZWR1Y2VyKGFjYywgcmVkdWNlckZuLCB2YWx1ZSwgcGF0aCksXG4gICAgICBfY2FsbFJlZHVjZXIyID0gX3NsaWNlZFRvQXJyYXkoX2NhbGxSZWR1Y2VyLCAyKSxcblxuICAvKiBza2lwcGVkIGJ5IGRlZmF1bHQgKi9cbiAgbmV4dEFjYyA9IF9jYWxsUmVkdWNlcjJbMV07XG5cbiAgcmV0dXJuIG5leHRBY2M7XG59IC8vIFJlZHVjZSBkZXB0aCBmaXJzdFxuXG5cbmZ1bmN0aW9uIHJlZHVjZU9iamVjdChhY2MsIHJlZHVjZXJGbiwgb2JqZWN0LCBwYXRoKSB7XG4gIHZhciBjcmVhdGVQYXRoU2VnbWVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDogZGVmYXVsdENyZWF0ZVBhdGhTZWdtZW50O1xuXG4gIHZhciBfY2FsbFJlZHVjZXIzID0gY2FsbFJlZHVjZXIoYWNjLCByZWR1Y2VyRm4sIG9iamVjdCwgcGF0aCksXG4gICAgICBfY2FsbFJlZHVjZXI0ID0gX3NsaWNlZFRvQXJyYXkoX2NhbGxSZWR1Y2VyMywgMiksXG4gICAgICBza2lwID0gX2NhbGxSZWR1Y2VyNFswXSxcbiAgICAgIG5leHRBY2MgPSBfY2FsbFJlZHVjZXI0WzFdO1xuXG4gIHJldHVybiBza2lwID8gbmV4dEFjYyA6IE9iamVjdC5rZXlzKG9iamVjdCkucmVkdWNlKGZ1bmN0aW9uIChpbm5lckFjYywga2V5KSB7XG4gICAgcmV0dXJuIHJlZHVjZUFueShpbm5lckFjYywgcmVkdWNlckZuLCBvYmplY3Rba2V5XSwgcGF0aC5jb25jYXQoY3JlYXRlUGF0aFNlZ21lbnQob2JqZWN0W2tleV0sIGtleSwgb2JqZWN0KSksIGNyZWF0ZVBhdGhTZWdtZW50KTtcbiAgfSwgbmV4dEFjYyk7XG59IC8vIFJlZHVjZSBkZXB0aCBmaXJzdFxuXG5cbmZ1bmN0aW9uIHJlZHVjZUFycmF5KGFjYywgcmVkdWNlckZuLCBhcnJheSwgcGF0aCkge1xuICB2YXIgY3JlYXRlUGF0aFNlZ21lbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gNCAmJiBhcmd1bWVudHNbNF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s0XSA6IGRlZmF1bHRDcmVhdGVQYXRoU2VnbWVudDtcblxuICB2YXIgX2NhbGxSZWR1Y2VyNSA9IGNhbGxSZWR1Y2VyKGFjYywgcmVkdWNlckZuLCBhcnJheSwgcGF0aCksXG4gICAgICBfY2FsbFJlZHVjZXI2ID0gX3NsaWNlZFRvQXJyYXkoX2NhbGxSZWR1Y2VyNSwgMiksXG4gICAgICBza2lwID0gX2NhbGxSZWR1Y2VyNlswXSxcbiAgICAgIG5leHRBY2MgPSBfY2FsbFJlZHVjZXI2WzFdO1xuXG4gIHJldHVybiBza2lwID8gbmV4dEFjYyA6IGFycmF5LnJlZHVjZShmdW5jdGlvbiAoaW5uZXJBY2MsIGl0ZW0sIGluZGV4KSB7XG4gICAgcmV0dXJuIHJlZHVjZUFueShpbm5lckFjYywgcmVkdWNlckZuLCBpdGVtLCBwYXRoLmNvbmNhdChjcmVhdGVQYXRoU2VnbWVudChpdGVtLCBpbmRleCwgYXJyYXkpKSwgY3JlYXRlUGF0aFNlZ21lbnQpO1xuICB9LCBuZXh0QWNjKTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlQW55KGFjYywgcmVkdWNlckZuLCB2YWwsIHBhdGgpIHtcbiAgdmFyIGNyZWF0ZVBhdGhTZWdtZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgJiYgYXJndW1lbnRzWzRdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNF0gOiBkZWZhdWx0Q3JlYXRlUGF0aFNlZ21lbnQ7XG4gIHZhciB0eXBlID0gZ2V0VHlwZSh2YWwpO1xuXG4gIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiByZWR1Y2VPYmplY3QoYWNjLCByZWR1Y2VyRm4sIHZhbCwgcGF0aCwgY3JlYXRlUGF0aFNlZ21lbnQpO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdhcnJheScpIHtcbiAgICByZXR1cm4gcmVkdWNlQXJyYXkoYWNjLCByZWR1Y2VyRm4sIHZhbCwgcGF0aCwgY3JlYXRlUGF0aFNlZ21lbnQpO1xuICB9XG5cbiAgcmV0dXJuIHJlZHVjZVByaW1pdGl2ZShhY2MsIHJlZHVjZXJGbiwgdmFsLCBwYXRoKTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlKHZhbHVlLCByZWR1Y2VyRm4sIGluaXRpYWwpIHtcbiAgdmFyIGNyZWF0ZVBhdGhTZWdtZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBkZWZhdWx0Q3JlYXRlUGF0aFNlZ21lbnQ7XG4gIHJldHVybiByZWR1Y2VBbnkoaW5pdGlhbCwgcmVkdWNlckZuLCB2YWx1ZSwgW10sIGNyZWF0ZVBhdGhTZWdtZW50KTtcbn1cblxudmFyIHdpdGhDdXN0b21QYXRoU2VnbWVudCA9IGZ1bmN0aW9uIHdpdGhDdXN0b21QYXRoU2VnbWVudChjcmVhdGVQYXRoU2VnbWVudCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlLCByZWR1Y2VyLCBpbml0aWFsKSB7XG4gICAgcmV0dXJuIHJlZHVjZSh2YWx1ZSwgcmVkdWNlciwgaW5pdGlhbCwgY3JlYXRlUGF0aFNlZ21lbnQpO1xuICB9O1xufTtcblxuZXhwb3J0cy53aXRoQ3VzdG9tUGF0aFNlZ21lbnQgPSB3aXRoQ3VzdG9tUGF0aFNlZ21lbnQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/json-reduce/dist/reduce.js\n");

/***/ })

};
;