/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ContentSort/ContentSort.jsx":
/*!************************************************!*\
  !*** ./components/ContentSort/ContentSort.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_productContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/productContext */ \"./contexts/productContext.js\");\n/* harmony import */ var _ContentSort_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContentSort.module.scss */ \"./components/ContentSort/ContentSort.module.scss\");\n/* harmony import */ var _ContentSort_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ContentSort_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/fran/Documents/dev/aerolab/components/ContentSort/ContentSort.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction ContentSort() {\n  _s();\n\n  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(_contexts_productContext__WEBPACK_IMPORTED_MODULE_2__.productContext),\n      state = _React$useContext.state,\n      dispatch = _React$useContext.dispatch;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_ContentSort_module_scss__WEBPACK_IMPORTED_MODULE_3___default().sortingTools),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_ContentSort_module_scss__WEBPACK_IMPORTED_MODULE_3___default().indexContainer),\n      \"my-value\": true,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: (_ContentSort_module_scss__WEBPACK_IMPORTED_MODULE_3___default().productIndex),\n        children: \"16 of 32 products\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      className: (_ContentSort_module_scss__WEBPACK_IMPORTED_MODULE_3___default().sortBy),\n      children: \"Sort by:\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      className: (_ContentSort_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active),\n      onClick: function onClick() {\n        return dispatch({\n          type: \"SORT_MOST_RECENT\"\n        });\n      },\n      children: \"Most recent\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      onClick: function onClick() {\n        return dispatch({\n          type: \"SORT_LOWEST_PRICE\"\n        });\n      },\n      children: \"Lowest price\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      onClick: function onClick() {\n        return dispatch({\n          type: \"SORT_HIGHEST_PRICE\"\n        });\n      },\n      children: \"Highest price\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ContentSort, \"QMdo+h1+fLbTriZQ0QN6uukzyow=\");\n\n_c = ContentSort;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContentSort);\n\nvar _c;\n\n$RefreshReg$(_c, \"ContentSort\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250ZW50U29ydC9Db250ZW50U29ydC5qc3g/OTg0MCJdLCJuYW1lcyI6WyJDb250ZW50U29ydCIsIlJlYWN0IiwicHJvZHVjdENvbnRleHQiLCJzdGF0ZSIsImRpc3BhdGNoIiwic3R5bGVzIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxHQUF1QjtBQUFBOztBQUFBLDBCQUNPQyx1REFBQSxDQUFpQkMsb0VBQWpCLENBRFA7QUFBQSxNQUNiQyxLQURhLHFCQUNiQSxLQURhO0FBQUEsTUFDTkMsUUFETSxxQkFDTkEsUUFETTs7QUFHckIsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLDhFQUFoQjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFQSxnRkFBaEI7QUFBdUMsc0JBQXZDO0FBQUEsNkJBQ0U7QUFBRyxpQkFBUyxFQUFFQSw4RUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQUcsZUFBUyxFQUFFQSx3RUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBS0U7QUFDRSxlQUFTLEVBQUVBLHdFQURiO0FBRUUsYUFBTyxFQUFFO0FBQUEsZUFBTUQsUUFBUSxDQUFDO0FBQUVFLGNBQUksRUFBRTtBQUFSLFNBQUQsQ0FBZDtBQUFBLE9BRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQVdFO0FBQVEsYUFBTyxFQUFFO0FBQUEsZUFBTUYsUUFBUSxDQUFDO0FBQUVFLGNBQUksRUFBRTtBQUFSLFNBQUQsQ0FBZDtBQUFBLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEYsZUFjRTtBQUFRLGFBQU8sRUFBRTtBQUFBLGVBQU1GLFFBQVEsQ0FBQztBQUFFRSxjQUFJLEVBQUU7QUFBUixTQUFELENBQWQ7QUFBQSxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0JEOztHQXZCUU4sVzs7S0FBQUEsVztBQXlCVCwrREFBZUEsV0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29udGVudFNvcnQvQ29udGVudFNvcnQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcHJvZHVjdENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvcHJvZHVjdENvbnRleHRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ29udGVudFNvcnQubW9kdWxlLnNjc3NcIjtcblxuZnVuY3Rpb24gQ29udGVudFNvcnQoKSB7XG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSBSZWFjdC51c2VDb250ZXh0KHByb2R1Y3RDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc29ydGluZ1Rvb2xzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5kZXhDb250YWluZXJ9IG15LXZhbHVlPlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0SW5kZXh9PjE2IG9mIDMyIHByb2R1Y3RzPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5zb3J0Qnl9PlNvcnQgYnk6PC9wPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hY3RpdmV9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHsgdHlwZTogXCJTT1JUX01PU1RfUkVDRU5UXCIgfSl9XG4gICAgICA+XG4gICAgICAgIE1vc3QgcmVjZW50XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBcIlNPUlRfTE9XRVNUX1BSSUNFXCIgfSl9PlxuICAgICAgICBMb3dlc3QgcHJpY2VcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFwiU09SVF9ISUdIRVNUX1BSSUNFXCIgfSl9PlxuICAgICAgICBIaWdoZXN0IHByaWNlXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudFNvcnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ContentSort/ContentSort.jsx\n");

/***/ })

});