"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/crelt";
exports.ids = ["vendor-chunks/crelt"];
exports.modules = {

/***/ "(ssr)/./node_modules/crelt/dist/index.cjs":
/*!*******************************************!*\
  !*** ./node_modules/crelt/dist/index.cjs ***!
  \*******************************************/
/***/ ((module) => {

eval("\n\nfunction crelt() {\n  var elt = arguments[0];\n  if (typeof elt == \"string\") elt = document.createElement(elt);\n  var i = 1, next = arguments[1];\n  if (next && typeof next == \"object\" && next.nodeType == null && !Array.isArray(next)) {\n    for (var name in next) if (Object.prototype.hasOwnProperty.call(next, name)) {\n      var value = next[name];\n      if (typeof value == \"string\") elt.setAttribute(name, value);\n      else if (value != null) elt[name] = value;\n    }\n    i++;\n  }\n  for (; i < arguments.length; i++) add(elt, arguments[i]);\n  return elt\n}\n\nfunction add(elt, child) {\n  if (typeof child == \"string\") {\n    elt.appendChild(document.createTextNode(child));\n  } else if (child == null) ; else if (child.nodeType != null) {\n    elt.appendChild(child);\n  } else if (Array.isArray(child)) {\n    for (var i = 0; i < child.length; i++) add(elt, child[i]);\n  } else {\n    throw new RangeError(\"Unsupported child node: \" + child)\n  }\n}\n\nmodule.exports = crelt;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY3JlbHQvZGlzdC9pbmRleC5janMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxzQkFBc0I7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBCQUEwQjtBQUM5QjtBQUNBLElBQUk7QUFDSixvQkFBb0Isa0JBQWtCO0FBQ3RDLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmV5bWF0dGVyLXYyLy4vbm9kZV9tb2R1bGVzL2NyZWx0L2Rpc3QvaW5kZXguY2pzP2Y4ZTYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBjcmVsdCgpIHtcbiAgdmFyIGVsdCA9IGFyZ3VtZW50c1swXTtcbiAgaWYgKHR5cGVvZiBlbHQgPT0gXCJzdHJpbmdcIikgZWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbHQpO1xuICB2YXIgaSA9IDEsIG5leHQgPSBhcmd1bWVudHNbMV07XG4gIGlmIChuZXh0ICYmIHR5cGVvZiBuZXh0ID09IFwib2JqZWN0XCIgJiYgbmV4dC5ub2RlVHlwZSA9PSBudWxsICYmICFBcnJheS5pc0FycmF5KG5leHQpKSB7XG4gICAgZm9yICh2YXIgbmFtZSBpbiBuZXh0KSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5leHQsIG5hbWUpKSB7XG4gICAgICB2YXIgdmFsdWUgPSBuZXh0W25hbWVdO1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSBcInN0cmluZ1wiKSBlbHQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICAgIGVsc2UgaWYgKHZhbHVlICE9IG51bGwpIGVsdFtuYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgICBpKys7XG4gIH1cbiAgZm9yICg7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFkZChlbHQsIGFyZ3VtZW50c1tpXSk7XG4gIHJldHVybiBlbHRcbn1cblxuZnVuY3Rpb24gYWRkKGVsdCwgY2hpbGQpIHtcbiAgaWYgKHR5cGVvZiBjaGlsZCA9PSBcInN0cmluZ1wiKSB7XG4gICAgZWx0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoaWxkKSk7XG4gIH0gZWxzZSBpZiAoY2hpbGQgPT0gbnVsbCkgOyBlbHNlIGlmIChjaGlsZC5ub2RlVHlwZSAhPSBudWxsKSB7XG4gICAgZWx0LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGQubGVuZ3RoOyBpKyspIGFkZChlbHQsIGNoaWxkW2ldKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVuc3VwcG9ydGVkIGNoaWxkIG5vZGU6IFwiICsgY2hpbGQpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVsdDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/crelt/dist/index.cjs\n");

/***/ })

};
;