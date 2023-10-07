"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/scroll-into-view-if-needed";
exports.ids = ["vendor-chunks/scroll-into-view-if-needed"];
exports.modules = {

/***/ "(ssr)/./node_modules/scroll-into-view-if-needed/dist/index.cjs":
/*!****************************************************************!*\
  !*** ./node_modules/scroll-into-view-if-needed/dist/index.cjs ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var t=__webpack_require__(/*! compute-scroll-into-view */ \"(ssr)/./node_modules/compute-scroll-into-view/dist/index.cjs\");const o=t=>!1===t?{block:\"end\",inline:\"nearest\"}:(t=>t===Object(t)&&0!==Object.keys(t).length)(t)?t:{block:\"start\",inline:\"nearest\"};module.exports=function(e,r){if(!e.isConnected||!(t=>{let o=t;for(;o&&o.parentNode;){if(o.parentNode===document)return!0;o=o.parentNode instanceof ShadowRoot?o.parentNode.host:o.parentNode}return!1})(e))return;const n=(t=>{const o=window.getComputedStyle(t);return{top:parseFloat(o.scrollMarginTop)||0,right:parseFloat(o.scrollMarginRight)||0,bottom:parseFloat(o.scrollMarginBottom)||0,left:parseFloat(o.scrollMarginLeft)||0}})(e);if((t=>\"object\"==typeof t&&\"function\"==typeof t.behavior)(r))return r.behavior(t.compute(e,r));const l=\"boolean\"==typeof r||null==r?void 0:r.behavior;for(const{el:a,top:i,left:c}of t.compute(e,o(r))){const t=i-n.top+n.bottom,o=c-n.left+n.right;a.scroll({top:t,left:o,behavior:l})}};//# sourceMappingURL=index.cjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2Nyb2xsLWludG8tdmlldy1pZi1uZWVkZWQvZGlzdC9pbmRleC5janMiLCJtYXBwaW5ncyI6IkFBQWEsTUFBTSxtQkFBTyxDQUFDLDhGQUEwQixFQUFFLG1CQUFtQiw2QkFBNkIscURBQXFELGdDQUFnQyw2QkFBNkIseUJBQXlCLFFBQVEsS0FBSyxnQkFBZ0IsRUFBRSxvQ0FBb0Msb0VBQW9FLFNBQVMsWUFBWSxhQUFhLG1DQUFtQyxPQUFPLGlLQUFpSyxLQUFLLCtGQUErRix1REFBdUQsVUFBVSxrQkFBa0Isc0JBQXNCLDRDQUE0QyxVQUFVLHdCQUF3QixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JleW1hdHRlci12Mi8uL25vZGVfbW9kdWxlcy9zY3JvbGwtaW50by12aWV3LWlmLW5lZWRlZC9kaXN0L2luZGV4LmNqcz81ODRkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO3ZhciB0PXJlcXVpcmUoXCJjb21wdXRlLXNjcm9sbC1pbnRvLXZpZXdcIik7Y29uc3Qgbz10PT4hMT09PXQ/e2Jsb2NrOlwiZW5kXCIsaW5saW5lOlwibmVhcmVzdFwifToodD0+dD09PU9iamVjdCh0KSYmMCE9PU9iamVjdC5rZXlzKHQpLmxlbmd0aCkodCk/dDp7YmxvY2s6XCJzdGFydFwiLGlubGluZTpcIm5lYXJlc3RcIn07bW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oZSxyKXtpZighZS5pc0Nvbm5lY3RlZHx8ISh0PT57bGV0IG89dDtmb3IoO28mJm8ucGFyZW50Tm9kZTspe2lmKG8ucGFyZW50Tm9kZT09PWRvY3VtZW50KXJldHVybiEwO289by5wYXJlbnROb2RlIGluc3RhbmNlb2YgU2hhZG93Um9vdD9vLnBhcmVudE5vZGUuaG9zdDpvLnBhcmVudE5vZGV9cmV0dXJuITF9KShlKSlyZXR1cm47Y29uc3Qgbj0odD0+e2NvbnN0IG89d2luZG93LmdldENvbXB1dGVkU3R5bGUodCk7cmV0dXJue3RvcDpwYXJzZUZsb2F0KG8uc2Nyb2xsTWFyZ2luVG9wKXx8MCxyaWdodDpwYXJzZUZsb2F0KG8uc2Nyb2xsTWFyZ2luUmlnaHQpfHwwLGJvdHRvbTpwYXJzZUZsb2F0KG8uc2Nyb2xsTWFyZ2luQm90dG9tKXx8MCxsZWZ0OnBhcnNlRmxvYXQoby5zY3JvbGxNYXJnaW5MZWZ0KXx8MH19KShlKTtpZigodD0+XCJvYmplY3RcIj09dHlwZW9mIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHQuYmVoYXZpb3IpKHIpKXJldHVybiByLmJlaGF2aW9yKHQuY29tcHV0ZShlLHIpKTtjb25zdCBsPVwiYm9vbGVhblwiPT10eXBlb2Ygcnx8bnVsbD09cj92b2lkIDA6ci5iZWhhdmlvcjtmb3IoY29uc3R7ZWw6YSx0b3A6aSxsZWZ0OmN9b2YgdC5jb21wdXRlKGUsbyhyKSkpe2NvbnN0IHQ9aS1uLnRvcCtuLmJvdHRvbSxvPWMtbi5sZWZ0K24ucmlnaHQ7YS5zY3JvbGwoe3RvcDp0LGxlZnQ6byxiZWhhdmlvcjpsfSl9fTsvLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5janMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/scroll-into-view-if-needed/dist/index.cjs\n");

/***/ })

};
;