/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./contexts/productContext.js":
/*!************************************!*\
  !*** ./contexts/productContext.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProducts\": function() { return /* binding */ getProducts; },\n/* harmony export */   \"productContext\": function() { return /* binding */ productContext; },\n/* harmony export */   \"ProductContextProvider\": function() { return /* binding */ ProductContextProvider; }\n/* harmony export */ });\n/* harmony import */ var _home_fran_Documents_dev_aerolab_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_fran_Documents_dev_aerolab_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_fran_Documents_dev_aerolab_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_fran_Documents_dev_aerolab_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _home_fran_Documents_dev_aerolab_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_fran_Documents_dev_aerolab_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _home_fran_Documents_dev_aerolab_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/fran/Documents/dev/aerolab/contexts/productContext.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_fran_Documents_dev_aerolab_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nfunction reducer(state, action) {\n  var type = action.type;\n  var defaultData = state.defaultData;\n  console.log(state);\n\n  switch (type) {\n    case \"SORT_MOST_RECENT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        sortedBy: \"mostRecent\",\n        data: defaultData\n      });\n\n    case \"SORT_LOWEST_PRICE\":\n      var sortedByLowestPrice = (0,_home_fran_Documents_dev_aerolab_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__.default)(defaultData).sort(function (a, b) {\n        return a.cost - b.cost;\n      });\n\n      console.log(sortedByLowestPrice);\n      return _objectSpread(_objectSpread({}, state), {}, {\n        sortedBy: \"lowestPrince\",\n        sortedData: sortedByLowestPrice\n      });\n\n    case \"SORT_HIGHEST_PRICE\":\n      var sortedByHighestPrice = (0,_home_fran_Documents_dev_aerolab_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__.default)(defaultData).sort(function (a, b) {\n        return b.cost - a.cost;\n      });\n\n      return _objectSpread(_objectSpread({}, state), {}, {\n        sortedBy: \"highestPrice\",\n        sortedData: sortedByHighestPrice\n      });\n\n    case \"UPDATED_DATA\":\n      return _objectSpread({}, action.payload);\n\n    case \"ERROR_FETCHING\":\n      return _objectSpread({}, action.payload);\n\n    default:\n      throw Error(\"This action is not declared.\");\n  }\n}\n\nfunction getProducts() {\n  return _getProducts.apply(this, arguments);\n}\n\nfunction _getProducts() {\n  _getProducts = (0,_home_fran_Documents_dev_aerolab_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_home_fran_Documents_dev_aerolab_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var fetchProducts, products;\n    return _home_fran_Documents_dev_aerolab_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return fetch(\"https://coding-challenge-api.aerolab.co/products\", {\n              headers: {\n                Authorization: \"Bearer \".concat(\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDY0ZjM4NTc2NmZiNTAwMjRhYTg3NzgiLCJpYXQiOjE2MTcyMjg2Nzd9.NZX65yLojyiU_AGI04Flw3wEy8-W3U2valO9CF4D_fE\")\n              }\n            });\n\n          case 3:\n            fetchProducts = _context.sent;\n            _context.next = 6;\n            return fetchProducts.json();\n\n          case 6:\n            products = _context.sent;\n            return _context.abrupt(\"return\", products);\n\n          case 10:\n            _context.prev = 10;\n            _context.t0 = _context[\"catch\"](0);\n            return _context.abrupt(\"return\", _context.t0);\n\n          case 13:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 10]]);\n  }));\n  return _getProducts.apply(this, arguments);\n}\n\nvar productContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createContext(null);\nvar ProductContextProvider = function ProductContextProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_6___default().useReducer(reducer, {\n    status: \"pending\",\n    error: \"\",\n    defaultData: null,\n    sortedData: null,\n    sortedBy: null\n  }),\n      _React$useReducer2 = (0,_home_fran_Documents_dev_aerolab_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useReducer, 2),\n      state = _React$useReducer2[0],\n      dispatch = _React$useReducer2[1];\n\n  react__WEBPACK_IMPORTED_MODULE_6___default().useEffect(function () {\n    getProducts().then(function (products) {\n      return dispatch({\n        type: \"UPDATED_DATA\",\n        payload: _objectSpread(_objectSpread({}, state), {}, {\n          defaultData: products,\n          status: \"fullfilled\"\n        })\n      });\n    })[\"catch\"](function (error) {\n      return dispatch({\n        type: \"ERROR_FETCHING\",\n        payload: _objectSpread(_objectSpread({}, state), {}, {\n          status: \"rejected\",\n          error: error\n        })\n      });\n    });\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(productContext.Provider, {\n    value: {\n      state: state,\n      dispatch: dispatch\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 80,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ProductContextProvider, \"O9Iui9+7uOzGMy0jPYcXgc7/FLc=\");\n\n_c = ProductContextProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dHMvcHJvZHVjdENvbnRleHQuanM/MjJiMiJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiZGVmYXVsdERhdGEiLCJjb25zb2xlIiwibG9nIiwic29ydGVkQnkiLCJkYXRhIiwic29ydGVkQnlMb3dlc3RQcmljZSIsInNvcnQiLCJhIiwiYiIsImNvc3QiLCJzb3J0ZWREYXRhIiwic29ydGVkQnlIaWdoZXN0UHJpY2UiLCJwYXlsb2FkIiwiRXJyb3IiLCJnZXRQcm9kdWN0cyIsImZldGNoIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJwcm9jZXNzIiwiZmV0Y2hQcm9kdWN0cyIsImpzb24iLCJwcm9kdWN0cyIsInByb2R1Y3RDb250ZXh0IiwiUmVhY3QiLCJQcm9kdWN0Q29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdGF0dXMiLCJlcnJvciIsImRpc3BhdGNoIiwidGhlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxPQUFULENBQWlCQyxLQUFqQixFQUF3QkMsTUFBeEIsRUFBZ0M7QUFBQSxNQUN0QkMsSUFEc0IsR0FDYkQsTUFEYSxDQUN0QkMsSUFEc0I7QUFBQSxNQUV0QkMsV0FGc0IsR0FFTkgsS0FGTSxDQUV0QkcsV0FGc0I7QUFHOUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxLQUFaOztBQUNBLFVBQVFFLElBQVI7QUFDRSxTQUFLLGtCQUFMO0FBQ0UsNkNBQVlGLEtBQVo7QUFBbUJNLGdCQUFRLEVBQUUsWUFBN0I7QUFBMkNDLFlBQUksRUFBRUo7QUFBakQ7O0FBQ0YsU0FBSyxtQkFBTDtBQUNFLFVBQU1LLG1CQUFtQixHQUFHLG1JQUFJTCxXQUFKLEVBQWlCTSxJQUFqQixDQUMxQixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxlQUFVRCxDQUFDLENBQUNFLElBQUYsR0FBU0QsQ0FBQyxDQUFDQyxJQUFyQjtBQUFBLE9BRDBCLENBQTVCOztBQUdBUixhQUFPLENBQUNDLEdBQVIsQ0FBWUcsbUJBQVo7QUFDQSw2Q0FDS1IsS0FETDtBQUVFTSxnQkFBUSxFQUFFLGNBRlo7QUFHRU8sa0JBQVUsRUFBRUw7QUFIZDs7QUFLRixTQUFLLG9CQUFMO0FBQ0UsVUFBTU0sb0JBQW9CLEdBQUcsbUlBQUlYLFdBQUosRUFBaUJNLElBQWpCLENBQzNCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGVBQVVBLENBQUMsQ0FBQ0MsSUFBRixHQUFTRixDQUFDLENBQUNFLElBQXJCO0FBQUEsT0FEMkIsQ0FBN0I7O0FBR0EsNkNBQ0taLEtBREw7QUFFRU0sZ0JBQVEsRUFBRSxjQUZaO0FBR0VPLGtCQUFVLEVBQUVDO0FBSGQ7O0FBS0YsU0FBSyxjQUFMO0FBQ0UsK0JBQVliLE1BQU0sQ0FBQ2MsT0FBbkI7O0FBQ0YsU0FBSyxnQkFBTDtBQUNFLCtCQUFZZCxNQUFNLENBQUNjLE9BQW5COztBQUNGO0FBQ0UsWUFBTUMsS0FBSyxDQUFDLDhCQUFELENBQVg7QUEzQko7QUE2QkQ7O0FBRU0sU0FBZUMsV0FBdEI7QUFBQTtBQUFBOzs7cVJBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUV5QkMsS0FBSyxDQUMvQixrREFEK0IsRUFFL0I7QUFDRUMscUJBQU8sRUFBRTtBQUNQQyw2QkFBYSxtQkFBWUMsdUpBQVo7QUFETjtBQURYLGFBRitCLENBRjlCOztBQUFBO0FBRUdDLHlCQUZIO0FBQUE7QUFBQSxtQkFVb0JBLGFBQWEsQ0FBQ0MsSUFBZCxFQVZwQjs7QUFBQTtBQVVHQyxvQkFWSDtBQUFBLDZDQVdJQSxRQVhKOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFnQkEsSUFBTUMsY0FBYyxnQkFBR0MsMERBQUEsQ0FBb0IsSUFBcEIsQ0FBdkI7QUFFQSxJQUFNQyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLDBCQUM1QkYsdURBQUEsQ0FBaUIzQixPQUFqQixFQUEwQjtBQUNsRDhCLFVBQU0sRUFBRSxTQUQwQztBQUVsREMsU0FBSyxFQUFFLEVBRjJDO0FBR2xEM0IsZUFBVyxFQUFFLElBSHFDO0FBSWxEVSxjQUFVLEVBQUUsSUFKc0M7QUFLbERQLFlBQVEsRUFBRTtBQUx3QyxHQUExQixDQUQ0QjtBQUFBO0FBQUEsTUFDL0NOLEtBRCtDO0FBQUEsTUFDeEMrQixRQUR3Qzs7QUFRdERMLHdEQUFBLENBQWdCLFlBQU07QUFDcEJULGVBQVcsR0FDUmUsSUFESCxDQUNRLFVBQUNSLFFBQUQ7QUFBQSxhQUNKTyxRQUFRLENBQUM7QUFDUDdCLFlBQUksRUFBRSxjQURDO0FBRVBhLGVBQU8sa0NBQU9mLEtBQVA7QUFBY0cscUJBQVcsRUFBRXFCLFFBQTNCO0FBQXFDSyxnQkFBTSxFQUFFO0FBQTdDO0FBRkEsT0FBRCxDQURKO0FBQUEsS0FEUixXQU9TLFVBQUNDLEtBQUQ7QUFBQSxhQUNMQyxRQUFRLENBQUM7QUFDUDdCLFlBQUksRUFBRSxnQkFEQztBQUVQYSxlQUFPLGtDQUFPZixLQUFQO0FBQWM2QixnQkFBTSxFQUFFLFVBQXRCO0FBQWtDQyxlQUFLLEVBQUVBO0FBQXpDO0FBRkEsT0FBRCxDQURIO0FBQUEsS0FQVDtBQWFELEdBZEQsRUFjRyxFQWRIO0FBZUEsc0JBQ0UsOERBQUMsY0FBRCxDQUFnQixRQUFoQjtBQUF5QixTQUFLLEVBQUU7QUFBRTlCLFdBQUssRUFBTEEsS0FBRjtBQUFTK0IsY0FBUSxFQUFSQTtBQUFULEtBQWhDO0FBQUEsY0FDR0g7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQTVCTTs7R0FBTUQsc0I7O0tBQUFBLHNCIiwiZmlsZSI6Ii4vY29udGV4dHMvcHJvZHVjdENvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICBjb25zdCB7IHR5cGUgfSA9IGFjdGlvbjtcbiAgY29uc3QgeyBkZWZhdWx0RGF0YSB9ID0gc3RhdGU7XG4gIGNvbnNvbGUubG9nKHN0YXRlKTtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBcIlNPUlRfTU9TVF9SRUNFTlRcIjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzb3J0ZWRCeTogXCJtb3N0UmVjZW50XCIsIGRhdGE6IGRlZmF1bHREYXRhIH07XG4gICAgY2FzZSBcIlNPUlRfTE9XRVNUX1BSSUNFXCI6XG4gICAgICBjb25zdCBzb3J0ZWRCeUxvd2VzdFByaWNlID0gWy4uLmRlZmF1bHREYXRhXS5zb3J0KFxuICAgICAgICAoYSwgYikgPT4gYS5jb3N0IC0gYi5jb3N0XG4gICAgICApO1xuICAgICAgY29uc29sZS5sb2coc29ydGVkQnlMb3dlc3RQcmljZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc29ydGVkQnk6IFwibG93ZXN0UHJpbmNlXCIsXG4gICAgICAgIHNvcnRlZERhdGE6IHNvcnRlZEJ5TG93ZXN0UHJpY2UsXG4gICAgICB9O1xuICAgIGNhc2UgXCJTT1JUX0hJR0hFU1RfUFJJQ0VcIjpcbiAgICAgIGNvbnN0IHNvcnRlZEJ5SGlnaGVzdFByaWNlID0gWy4uLmRlZmF1bHREYXRhXS5zb3J0KFxuICAgICAgICAoYSwgYikgPT4gYi5jb3N0IC0gYS5jb3N0XG4gICAgICApO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNvcnRlZEJ5OiBcImhpZ2hlc3RQcmljZVwiLFxuICAgICAgICBzb3J0ZWREYXRhOiBzb3J0ZWRCeUhpZ2hlc3RQcmljZSxcbiAgICAgIH07XG4gICAgY2FzZSBcIlVQREFURURfREFUQVwiOlxuICAgICAgcmV0dXJuIHsgLi4uYWN0aW9uLnBheWxvYWQgfTtcbiAgICBjYXNlIFwiRVJST1JfRkVUQ0hJTkdcIjpcbiAgICAgIHJldHVybiB7IC4uLmFjdGlvbi5wYXlsb2FkIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IEVycm9yKFwiVGhpcyBhY3Rpb24gaXMgbm90IGRlY2xhcmVkLlwiKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdHMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZmV0Y2hQcm9kdWN0cyA9IGF3YWl0IGZldGNoKFxuICAgICAgXCJodHRwczovL2NvZGluZy1jaGFsbGVuZ2UtYXBpLmFlcm9sYWIuY28vcHJvZHVjdHNcIixcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5UT0tFTn1gLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgICk7XG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBmZXRjaFByb2R1Y3RzLmpzb24oKTtcbiAgICByZXR1cm4gcHJvZHVjdHM7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59XG5leHBvcnQgY29uc3QgcHJvZHVjdENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5leHBvcnQgY29uc3QgUHJvZHVjdENvbnRleHRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKHJlZHVjZXIsIHtcbiAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgIGVycm9yOiBcIlwiLFxuICAgIGRlZmF1bHREYXRhOiBudWxsLFxuICAgIHNvcnRlZERhdGE6IG51bGwsXG4gICAgc29ydGVkQnk6IG51bGwsXG4gIH0pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFByb2R1Y3RzKClcbiAgICAgIC50aGVuKChwcm9kdWN0cykgPT5cbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IFwiVVBEQVRFRF9EQVRBXCIsXG4gICAgICAgICAgcGF5bG9hZDogeyAuLi5zdGF0ZSwgZGVmYXVsdERhdGE6IHByb2R1Y3RzLCBzdGF0dXM6IFwiZnVsbGZpbGxlZFwiIH0sXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PlxuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogXCJFUlJPUl9GRVRDSElOR1wiLFxuICAgICAgICAgIHBheWxvYWQ6IHsgLi4uc3RhdGUsIHN0YXR1czogXCJyZWplY3RlZFwiLCBlcnJvcjogZXJyb3IgfSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8cHJvZHVjdENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvcHJvZHVjdENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/productContext.js\n");

/***/ })

});