"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/nano-pubsub";
exports.ids = ["vendor-chunks/nano-pubsub"];
exports.modules = {

/***/ "(ssr)/./node_modules/nano-pubsub/dist/cjs/index.js":
/*!****************************************************!*\
  !*** ./node_modules/nano-pubsub/dist/cjs/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nfunction createPubSub() {\n    var subscribers = Object.create(null);\n    var nextId = 0;\n    function subscribe(subscriber) {\n        var id = nextId++;\n        subscribers[id] = subscriber;\n        return function unsubscribe() {\n            delete subscribers[id];\n        };\n    }\n    function publish(event) {\n        for (var id in subscribers) {\n            subscribers[id](event);\n        }\n    }\n    return {\n        publish: publish,\n        subscribe: subscribe,\n    };\n}\nexports[\"default\"] = createPubSub;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmFuby1wdWJzdWIvZGlzdC9janMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JleW1hdHRlci12Mi8uL25vZGVfbW9kdWxlcy9uYW5vLXB1YnN1Yi9kaXN0L2Nqcy9pbmRleC5qcz85MGE3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gY3JlYXRlUHViU3ViKCkge1xuICAgIHZhciBzdWJzY3JpYmVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdmFyIG5leHRJZCA9IDA7XG4gICAgZnVuY3Rpb24gc3Vic2NyaWJlKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIGlkID0gbmV4dElkKys7XG4gICAgICAgIHN1YnNjcmliZXJzW2lkXSA9IHN1YnNjcmliZXI7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzdWJzY3JpYmVyc1tpZF07XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHB1Ymxpc2goZXZlbnQpIHtcbiAgICAgICAgZm9yICh2YXIgaWQgaW4gc3Vic2NyaWJlcnMpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXJzW2lkXShldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHVibGlzaDogcHVibGlzaCxcbiAgICAgICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgfTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVB1YlN1YjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/nano-pubsub/dist/cjs/index.js\n");

/***/ })

};
;