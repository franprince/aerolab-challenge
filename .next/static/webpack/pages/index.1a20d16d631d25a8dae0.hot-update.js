/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/GridLayout/GridLayout.jsx":
/*!**********************************************!*\
  !*** ./components/GridLayout/GridLayout.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_fran_Documents_dev_aerolab_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card/Card */ \"./components/Card/Card.jsx\");\n/* harmony import */ var _GridLayout_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GridLayout.module.scss */ \"./components/GridLayout/GridLayout.module.scss\");\n/* harmony import */ var _GridLayout_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_GridLayout_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_productContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/productContext */ \"./contexts/productContext.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/fran/Documents/dev/aerolab/components/GridLayout/GridLayout.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction GridLayout(_ref) {\n  _s();\n\n  var _this = this;\n\n  var products = _ref.products;\n\n  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_3___default().useContext(_contexts_productContext__WEBPACK_IMPORTED_MODULE_4__.productContext),\n      state = _React$useContext.state;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default().useState(state.sortedData || products),\n      _React$useState2 = (0,_home_fran_Documents_dev_aerolab_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),\n      items = _React$useState2[0],\n      setitems = _React$useState2[1];\n\n  react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(function () {\n    if (state.status === \"pending\") return;\n    setitems(state.data);\n  }, [state.data]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_GridLayout_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_GridLayout_module_scss__WEBPACK_IMPORTED_MODULE_5___default().gridLayout),\n      children: items.map(function (product) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card_Card__WEBPACK_IMPORTED_MODULE_2__.default, {\n          product: product\n        }, product._id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, this);\n}\n\n_s(GridLayout, \"1QCyfG9g/yAD1LetI0ysVpM7muU=\");\n\n_c = GridLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GridLayout);\n\nvar _c;\n\n$RefreshReg$(_c, \"GridLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HcmlkTGF5b3V0L0dyaWRMYXlvdXQuanN4P2FkYjQiXSwibmFtZXMiOlsiR3JpZExheW91dCIsInByb2R1Y3RzIiwiUmVhY3QiLCJwcm9kdWN0Q29udGV4dCIsInN0YXRlIiwic29ydGVkRGF0YSIsIml0ZW1zIiwic2V0aXRlbXMiLCJzdGF0dXMiLCJkYXRhIiwic3R5bGVzIiwibWFwIiwicHJvZHVjdCIsIl9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULE9BQWtDO0FBQUE7O0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUFBLDBCQUNkQyx1REFBQSxDQUFpQkMsb0VBQWpCLENBRGM7QUFBQSxNQUN4QkMsS0FEd0IscUJBQ3hCQSxLQUR3Qjs7QUFBQSx3QkFFTkYscURBQUEsQ0FBZUUsS0FBSyxDQUFDQyxVQUFOLElBQW9CSixRQUFuQyxDQUZNO0FBQUE7QUFBQSxNQUV6QkssS0FGeUI7QUFBQSxNQUVsQkMsUUFGa0I7O0FBR2hDTCx3REFBQSxDQUFnQixZQUFNO0FBQ3BCLFFBQUlFLEtBQUssQ0FBQ0ksTUFBTixLQUFpQixTQUFyQixFQUFnQztBQUNoQ0QsWUFBUSxDQUFDSCxLQUFLLENBQUNLLElBQVAsQ0FBUjtBQUNELEdBSEQsRUFHRyxDQUFDTCxLQUFLLENBQUNLLElBQVAsQ0FISDtBQUlBLHNCQUNFO0FBQUssYUFBUyxFQUFFQywwRUFBaEI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRUEsMkVBQWhCO0FBQUEsZ0JBQ0dKLEtBQUssQ0FBQ0ssR0FBTixDQUFVLFVBQUNDLE9BQUQ7QUFBQSw0QkFDVCw4REFBQywrQ0FBRDtBQUF3QixpQkFBTyxFQUFFQTtBQUFqQyxXQUFXQSxPQUFPLENBQUNDLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFM7QUFBQSxPQUFWO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztHQWhCUWIsVTs7S0FBQUEsVTtBQWtCVCwrREFBZUEsVUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvR3JpZExheW91dC9HcmlkTGF5b3V0LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJkIGZyb20gXCIuLi9DYXJkL0NhcmRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vR3JpZExheW91dC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcHJvZHVjdENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvcHJvZHVjdENvbnRleHRcIjtcblxuZnVuY3Rpb24gR3JpZExheW91dCh7IHByb2R1Y3RzIH0pIHtcbiAgY29uc3QgeyBzdGF0ZSB9ID0gUmVhY3QudXNlQ29udGV4dChwcm9kdWN0Q29udGV4dCk7XG4gIGNvbnN0IFtpdGVtcywgc2V0aXRlbXNdID0gUmVhY3QudXNlU3RhdGUoc3RhdGUuc29ydGVkRGF0YSB8fCBwcm9kdWN0cyk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHN0YXRlLnN0YXR1cyA9PT0gXCJwZW5kaW5nXCIpIHJldHVybjtcbiAgICBzZXRpdGVtcyhzdGF0ZS5kYXRhKTtcbiAgfSwgW3N0YXRlLmRhdGFdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRMYXlvdXR9PlxuICAgICAgICB7aXRlbXMubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgICAgPENhcmQga2V5PXtwcm9kdWN0Ll9pZH0gcHJvZHVjdD17cHJvZHVjdH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JpZExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/GridLayout/GridLayout.jsx\n");

/***/ })

});