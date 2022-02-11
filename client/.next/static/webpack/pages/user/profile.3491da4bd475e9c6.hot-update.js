"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/profile",{

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/index */ \"./context/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_cards_SuggestedFollowers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/cards/SuggestedFollowers */ \"./components/cards/SuggestedFollowers.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Search(param) {\n    var handleFollow = param.handleFollow;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_2__.UserContext), state = ref[0], setState = ref[1];\n    var ref1 //tracks the search bar user input\n     = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), query = ref1[0], setQuery = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), result = ref2[0], setResult = ref2[1];\n    var searchUser = function(e) {\n        e.preventDefault();\n        //console.log(`Find ${query} from database`)\n        try {\n            var response = {\n            };\n            axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"/search-user/\".concat(query)).then(function(r) {\n                response = r;\n                //console.log(\"search user response: \", response);\n                setResult(response.data);\n            // console.log(\"Result: \", result)\n            });\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"form\", {\n                className: \"form-inline row\",\n                onSubmit: searchUser,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Search.js\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"col-8\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Search.js\",\n                            lineNumber: 30,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            onChange: function(e) {\n                                setQuery(e.target.value);\n                                setResult([]);\n                            },\n                            value: query,\n                            className: \"form-control\",\n                            placeHolder: \"Search\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Search.js\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"col-4\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Search.js\",\n                            lineNumber: 42,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            className: \"btn btn-outline-primary col-12\",\n                            type: \"submit\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Search.js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: \"Submit\"\n                        })\n                    })\n                ]\n            }),\n            result === [] && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_cards_SuggestedFollowers__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                people: result,\n                handleFollow: handleFollow,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Search.js\",\n                    lineNumber: 53,\n                    columnNumber: 7\n                },\n                __self: this\n            })\n        ]\n    }));\n}\n_s(Search, \"fQIEEuIJV21AuYJ/fa/x1bLUUpQ=\");\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\r\n    var _a, _b;\r\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n    // to extract CSS. For backwards compatibility, we need to check we're in a\r\n    // browser context before continuing.\r\n    if (typeof self !== 'undefined' &&\r\n        // AMP / No-JS mode does not inject these helpers:\r\n        '$RefreshHelpers$' in self) {\r\n        var currentExports = module.__proto__.exports;\r\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n        // This cannot happen in MainTemplate because the exports mismatch between\r\n        // templating and execution.\r\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n        // A module can be accepted automatically based on its exports, e.g. when\r\n        // it is a Refresh Boundary.\r\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n            // Save the previous exports on update so we can compare the boundary\r\n            // signatures.\r\n            module.hot.dispose(function (data) {\r\n                data.prevExports = currentExports;\r\n            });\r\n            // Unconditionally accept an update to this module, we'll check if it's\r\n            // still a Refresh Boundary later.\r\n            module.hot.accept();\r\n            // This field is set when the previous version of this module was a\r\n            // Refresh Boundary, letting us know we need to check for invalidation or\r\n            // enqueue an update.\r\n            if (prevExports !== null) {\r\n                // A boundary can become ineligible if its exports are incompatible\r\n                // with the previous exports.\r\n                //\r\n                // For example, if you add/remove/change exports, we'll want to\r\n                // re-execute the importing modules, and force those components to\r\n                // re-render. Similarly, if you convert a class component to a\r\n                // function, we want to invalidate the boundary.\r\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                    module.hot.invalidate();\r\n                }\r\n                else {\r\n                    self.$RefreshHelpers$.scheduleUpdate();\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            // Since we just executed the code for the module, it's possible that the\r\n            // new exports made it ineligible for being a boundary.\r\n            // We only care about the case when we were _previously_ a boundary,\r\n            // because we already accepted this update (accidental side effect).\r\n            var isNoLongerABoundary = prevExports !== null;\r\n            if (isNoLongerABoundary) {\r\n                module.hot.invalidate();\r\n            }\r\n        }\r\n    }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QztBQUNHO0FBQ25CO0FBQzhDOztTQUM5REssTUFBTSxDQUFDLEtBQWMsRUFBRSxDQUFDO1FBQWhCQyxZQUFZLEdBQWIsS0FBYyxDQUFiQSxZQUFZOztJQUMzQixHQUFLLENBQW9CTCxHQUF1QixHQUF2QkEsaURBQVUsQ0FBQ0MsdURBQVcsR0FBeENLLEtBQUssR0FBYU4sR0FBdUIsS0FBbkNPLFFBQVEsR0FBSVAsR0FBdUI7SUFDaEQsR0FBSyxDQUFxQkQsSUFBWSxDQUFtQztPQUEvQ0EsK0NBQVEsQ0FBQyxDQUFFLElBQTlCUyxLQUFLLEdBQWNULElBQVksS0FBeEJVLFFBQVEsR0FBSVYsSUFBWTtJQUN0QyxHQUFLLENBQXVCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEdBQWhDVyxNQUFNLEdBQWVYLElBQVksS0FBekJZLFNBQVMsR0FBSVosSUFBWTtJQUN4QyxHQUFLLENBQUNhLFVBQVUsR0FBR0MsUUFDcEIsQ0FEb0JBLENBQUMsRUFBRyxDQUFDO1FBQ3RCQSxDQUFDLENBQUNDLGNBQWM7UUFDaEIsRUFBNEM7UUFDNUMsR0FBRyxFQUFDO1lBQ0YsR0FBSyxDQUFDQyxRQUFRLEdBQUcsQ0FBQztZQUFBLENBQUM7WUFDcEJiLGdEQUFTLENBQUUsQ0FBYSxlQUFRLE9BQU5NLEtBQUssR0FBSVMsSUFBSSxDQUFDLFFBQzdDLENBRDhDQyxDQUFDLEVBQUcsQ0FBQztnQkFDN0NILFFBQVEsR0FBR0csQ0FBQztnQkFDWixFQUFrRDtnQkFDbERQLFNBQVMsQ0FBQ0ksUUFBUSxDQUFDSSxJQUFJO1lBQ3ZCLEVBQWtDO1lBQ2pDLENBQUM7UUFDSixDQUFDLENBQUMsS0FBSyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztZQUNiQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRztRQUNqQixDQUFDO0lBQ0gsQ0FBQztJQUNELE1BQU07O2tGQUVERyxDQUFJO2dCQUNMQyxTQUFTLEVBQUcsQ0FBaUI7Z0JBQzdCQyxRQUFRLEVBQUliLFVBQVU7Ozs7Ozs7O3lGQUVuQmMsQ0FBRzt3QkFBQ0YsU0FBUyxFQUFHLENBQU87Ozs7Ozs7dUdBQ3JCRyxDQUFLOzRCQUNOQyxRQUFRLEVBQUcsUUFDckIsQ0FEc0JmLENBQUMsRUFBRyxDQUFDO2dDQUNmSixRQUFRLENBQUNJLENBQUMsQ0FBQ2dCLE1BQU0sQ0FBQ0MsS0FBSztnQ0FDdkJuQixTQUFTLENBQUMsQ0FBQyxDQUFDOzRCQUNkLENBQUM7NEJBQ0RtQixLQUFLLEVBQUl0QixLQUFLOzRCQUNkZ0IsU0FBUyxFQUFHLENBQWM7NEJBQzFCTyxXQUFXLEVBQUMsQ0FBUTs7Ozs7Ozs7O3lGQUlyQkwsQ0FBRzt3QkFBQ0YsU0FBUyxFQUFHLENBQU87Ozs7Ozs7dUdBQ3JCUSxDQUFNOzRCQUNQUixTQUFTLEVBQUcsQ0FBZ0M7NEJBQzVDUyxJQUFJLEVBQUcsQ0FBUTs7Ozs7OztzQ0FDZCxDQUVEOzs7OztZQUlGdkIsTUFBTSxLQUFLLENBQUMsQ0FBQyx5RUFDZFAsNEVBQWtCO2dCQUFDK0IsTUFBTSxFQUFJeEIsTUFBTTtnQkFBRUwsWUFBWSxFQUFFQSxZQUFZOzs7Ozs7Ozs7O0FBR3RFLENBQUM7R0FuRFFELE1BQU07S0FBTkEsTUFBTTtBQXFEZiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlYXJjaC5qcz9kZTFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsdXNlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7VXNlckNvbnRleHR9IGZyb20gXCIuLi9jb250ZXh0L2luZGV4XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBTdWdnZXN0ZWRGb2xsb3dlcnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FyZHMvU3VnZ2VzdGVkRm9sbG93ZXJzXCI7XHJcbmZ1bmN0aW9uIFNlYXJjaCh7aGFuZGxlRm9sbG93fSkge1xyXG4gIGNvbnN0IFtzdGF0ZSxzZXRTdGF0ZV0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpIC8vdHJhY2tzIHRoZSBzZWFyY2ggYmFyIHVzZXIgaW5wdXRcclxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHNlYXJjaFVzZXIgPSBlID0+e1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhgRmluZCAke3F1ZXJ5fSBmcm9tIGRhdGFiYXNlYClcclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB7fTtcclxuICAgICBheGlvcy5nZXQoYC9zZWFyY2gtdXNlci8ke3F1ZXJ5fWApLnRoZW4oKHIpPT57XHJcbiAgICAgIHJlc3BvbnNlID0gcjsgIFxyXG4gICAgICAvL2NvbnNvbGUubG9nKFwic2VhcmNoIHVzZXIgcmVzcG9uc2U6IFwiLCByZXNwb25zZSk7XHJcbiAgICAgIHNldFJlc3VsdChyZXNwb25zZS5kYXRhKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJSZXN1bHQ6IFwiLCByZXN1bHQpXHJcbiAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGZvcm0gXHJcbiAgICAgIGNsYXNzTmFtZSA9IFwiZm9ybS1pbmxpbmUgcm93XCIgXHJcbiAgICAgIG9uU3VibWl0ID0ge3NlYXJjaFVzZXJ9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiY29sLThcIj5cclxuICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgIG9uQ2hhbmdlPSB7KGUpPT57XHJcbiAgICAgICAgICAgIHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgc2V0UmVzdWx0KFtdKTtcclxuICAgICAgICAgIH19IFxyXG4gICAgICAgICAgdmFsdWUgPSB7cXVlcnl9XHJcbiAgICAgICAgICBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICBwbGFjZUhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiY29sLTRcIj5cclxuICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICBjbGFzc05hbWUgPSBcImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IGNvbC0xMlwiIFxyXG4gICAgICAgICAgdHlwZSA9IFwic3VibWl0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICBcclxuICAgICAgeyhyZXN1bHQgPT09IFtdKSAmJiBcclxuICAgICAgPFN1Z2dlc3RlZEZvbGxvd2VycyBwZW9wbGUgPSB7cmVzdWx0fSBoYW5kbGVGb2xsb3c9e2hhbmRsZUZvbGxvd30vPn1cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwiYXhpb3MiLCJTdWdnZXN0ZWRGb2xsb3dlcnMiLCJTZWFyY2giLCJoYW5kbGVGb2xsb3ciLCJzdGF0ZSIsInNldFN0YXRlIiwicXVlcnkiLCJzZXRRdWVyeSIsInJlc3VsdCIsInNldFJlc3VsdCIsInNlYXJjaFVzZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImdldCIsInRoZW4iLCJyIiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJmb3JtIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJkaXYiLCJpbnB1dCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJwbGFjZUhvbGRlciIsImJ1dHRvbiIsInR5cGUiLCJwZW9wbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Search.js\n");

/***/ })

});