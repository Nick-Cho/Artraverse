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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/index */ \"./context/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_cards_SuggestedFollowers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/cards/SuggestedFollowers */ \"./components/cards/SuggestedFollowers.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Search() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_2__.UserContext), state = ref[0], setState = ref[1];\n    var ref1 //tracks the search bar user input\n     = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), query = ref1[0], setQuery = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), result = ref2[0], setResult = ref2[1];\n    var searchUser = function(e) {\n        e.preventDefault();\n        console.log(\"Find \".concat(query, \" from database\"));\n        try {\n            var response = {\n            };\n            axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"/search-user/\".concat(query)).then(function(r) {\n                response = r;\n                //console.log(\"search user response: \", response);\n                setResult(response.data);\n                console.log(\"Result: \", result);\n            });\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"form\", {\n                className: \"form-inline row\",\n                onSubmit: searchUser,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Search.js\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"col-8\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Search.js\",\n                            lineNumber: 30,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            onChange: function(e) {\n                                return setQuery(e.target.value);\n                            },\n                            value: query,\n                            className: \"form-control\",\n                            placeHolder: \"Search\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Search.js\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"col-4\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Search.js\",\n                            lineNumber: 39,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            className: \"btn btn-outline-primary col-12\",\n                            type: \"submit\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Search.js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: \"Submit\"\n                        })\n                    })\n                ]\n            }),\n            result && result.map(function(r) {\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(People, {\n                    people: result,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Search.js\",\n                        lineNumber: 50,\n                        columnNumber: 8\n                    },\n                    __self: _this\n                }, r._id);\n            })\n        ]\n    }));\n}\n_s(Search, \"fQIEEuIJV21AuYJ/fa/x1bLUUpQ=\");\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\r\n    var _a, _b;\r\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n    // to extract CSS. For backwards compatibility, we need to check we're in a\r\n    // browser context before continuing.\r\n    if (typeof self !== 'undefined' &&\r\n        // AMP / No-JS mode does not inject these helpers:\r\n        '$RefreshHelpers$' in self) {\r\n        var currentExports = module.__proto__.exports;\r\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n        // This cannot happen in MainTemplate because the exports mismatch between\r\n        // templating and execution.\r\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n        // A module can be accepted automatically based on its exports, e.g. when\r\n        // it is a Refresh Boundary.\r\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n            // Save the previous exports on update so we can compare the boundary\r\n            // signatures.\r\n            module.hot.dispose(function (data) {\r\n                data.prevExports = currentExports;\r\n            });\r\n            // Unconditionally accept an update to this module, we'll check if it's\r\n            // still a Refresh Boundary later.\r\n            module.hot.accept();\r\n            // This field is set when the previous version of this module was a\r\n            // Refresh Boundary, letting us know we need to check for invalidation or\r\n            // enqueue an update.\r\n            if (prevExports !== null) {\r\n                // A boundary can become ineligible if its exports are incompatible\r\n                // with the previous exports.\r\n                //\r\n                // For example, if you add/remove/change exports, we'll want to\r\n                // re-execute the importing modules, and force those components to\r\n                // re-render. Similarly, if you convert a class component to a\r\n                // function, we want to invalidate the boundary.\r\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                    module.hot.invalidate();\r\n                }\r\n                else {\r\n                    self.$RefreshHelpers$.scheduleUpdate();\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            // Since we just executed the code for the module, it's possible that the\r\n            // new exports made it ineligible for being a boundary.\r\n            // We only care about the case when we were _previously_ a boundary,\r\n            // because we already accepted this update (accidental side effect).\r\n            var isNoLongerABoundary = prevExports !== null;\r\n            if (isNoLongerABoundary) {\r\n                module.hot.invalidate();\r\n            }\r\n        }\r\n    }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QztBQUNHO0FBQ25CO0FBQzhDOztTQUM5REssTUFBTSxHQUFHLENBQUM7OztJQUNqQixHQUFLLENBQW9CSixHQUF1QixHQUF2QkEsaURBQVUsQ0FBQ0MsdURBQVcsR0FBeENJLEtBQUssR0FBYUwsR0FBdUIsS0FBbkNNLFFBQVEsR0FBSU4sR0FBdUI7SUFDaEQsR0FBSyxDQUFxQkQsSUFBWSxDQUFtQztPQUEvQ0EsK0NBQVEsQ0FBQyxDQUFFLElBQTlCUSxLQUFLLEdBQWNSLElBQVksS0FBeEJTLFFBQVEsR0FBSVQsSUFBWTtJQUN0QyxHQUFLLENBQXVCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEdBQWhDVSxNQUFNLEdBQWVWLElBQVksS0FBekJXLFNBQVMsR0FBSVgsSUFBWTtJQUN4QyxHQUFLLENBQUNZLFVBQVUsR0FBR0MsUUFDcEIsQ0FEb0JBLENBQUMsRUFBRyxDQUFDO1FBQ3RCQSxDQUFDLENBQUNDLGNBQWM7UUFDaEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFFLENBQUssT0FBUSxNQUFjLENBQXBCUixLQUFLLEVBQUMsQ0FBYztRQUN4QyxHQUFHLEVBQUM7WUFDRixHQUFLLENBQUNTLFFBQVEsR0FBRyxDQUFDO1lBQUEsQ0FBQztZQUNwQmQsZ0RBQVMsQ0FBRSxDQUFhLGVBQVEsT0FBTkssS0FBSyxHQUFJVyxJQUFJLENBQUMsUUFDN0MsQ0FEOENDLENBQUMsRUFBRyxDQUFDO2dCQUM3Q0gsUUFBUSxHQUFHRyxDQUFDO2dCQUNaLEVBQWtEO2dCQUNsRFQsU0FBUyxDQUFDTSxRQUFRLENBQUNJLElBQUk7Z0JBQ3ZCTixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFVLFdBQUVOLE1BQU07WUFDN0IsQ0FBQztRQUNKLENBQUMsQ0FBQyxLQUFLLEVBQUVZLEdBQUcsRUFBRSxDQUFDO1lBQ2JQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSxHQUFHO1FBQ2pCLENBQUM7SUFDSCxDQUFDO0lBQ0QsTUFBTTs7a0ZBRURDLENBQUk7Z0JBQ0xDLFNBQVMsRUFBRyxDQUFpQjtnQkFDN0JDLFFBQVEsRUFBSWIsVUFBVTs7Ozs7Ozs7eUZBRW5CYyxDQUFHO3dCQUFDRixTQUFTLEVBQUcsQ0FBTzs7Ozs7Ozt1R0FDckJHLENBQUs7NEJBQ05DLFFBQVEsRUFBRyxRQUFRLENBQVBmLENBQUM7Z0NBQUdKLE1BQU0sQ0FBTkEsUUFBUSxDQUFDSSxDQUFDLENBQUNnQixNQUFNLENBQUNDLEtBQUs7OzRCQUN2Q0EsS0FBSyxFQUFJdEIsS0FBSzs0QkFDZGdCLFNBQVMsRUFBRyxDQUFjOzRCQUMxQk8sV0FBVyxFQUFDLENBQVE7Ozs7Ozs7Ozt5RkFJckJMLENBQUc7d0JBQUNGLFNBQVMsRUFBRyxDQUFPOzs7Ozs7O3VHQUNyQlEsQ0FBTTs0QkFDUFIsU0FBUyxFQUFHLENBQWdDOzRCQUM1Q1MsSUFBSSxFQUFHLENBQVE7Ozs7Ozs7c0NBQ2QsQ0FFRDs7Ozs7WUFJRnZCLE1BQU0sSUFBS0EsTUFBTSxDQUFDd0IsR0FBRyxDQUFDLFFBQVEsQ0FBUGQsQ0FBQyxFQUMxQixDQUFDO3FGQUFDZSxNQUFNO29CQUFlQyxNQUFNLEVBQUkxQixNQUFNOzs7Ozs7O21CQUF2QlUsQ0FBQyxDQUFDaUIsR0FBRztZQUFzQixDQUFDOzs7QUFHbEQsQ0FBQztHQWhEUWhDLE1BQU07S0FBTkEsTUFBTTtBQWtEZiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlYXJjaC5qcz9kZTFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsdXNlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7VXNlckNvbnRleHR9IGZyb20gXCIuLi9jb250ZXh0L2luZGV4XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBTdWdnZXN0ZWRGb2xsb3dlcnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FyZHMvU3VnZ2VzdGVkRm9sbG93ZXJzXCI7XHJcbmZ1bmN0aW9uIFNlYXJjaCgpIHtcclxuICBjb25zdCBbc3RhdGUsc2V0U3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKSAvL3RyYWNrcyB0aGUgc2VhcmNoIGJhciB1c2VyIGlucHV0XHJcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBzZWFyY2hVc2VyID0gZSA9PntcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKGBGaW5kICR7cXVlcnl9IGZyb20gZGF0YWJhc2VgKVxyXG4gICAgdHJ5e1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IHt9O1xyXG4gICAgIGF4aW9zLmdldChgL3NlYXJjaC11c2VyLyR7cXVlcnl9YCkudGhlbigocik9PntcclxuICAgICAgcmVzcG9uc2UgPSByOyAgXHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJzZWFyY2ggdXNlciByZXNwb25zZTogXCIsIHJlc3BvbnNlKTtcclxuICAgICAgc2V0UmVzdWx0KHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlJlc3VsdDogXCIsIHJlc3VsdClcclxuICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Zm9ybSBcclxuICAgICAgY2xhc3NOYW1lID0gXCJmb3JtLWlubGluZSByb3dcIiBcclxuICAgICAgb25TdWJtaXQgPSB7c2VhcmNoVXNlcn1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJjb2wtOFwiPlxyXG4gICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgb25DaGFuZ2U9IHsoZSk9PnNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX0gXHJcbiAgICAgICAgICB2YWx1ZSA9IHtxdWVyeX1cclxuICAgICAgICAgIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgIHBsYWNlSG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJjb2wtNFwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgIGNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgY29sLTEyXCIgXHJcbiAgICAgICAgICB0eXBlID0gXCJzdWJtaXRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIFxyXG4gICAgICB7KHJlc3VsdCkgJiYgcmVzdWx0Lm1hcCgocikgPT4gXHJcbiAgICAgIHs8UGVvcGxlIGtleSA9IHtyLl9pZH0gcGVvcGxlID0ge3Jlc3VsdH0gLz59KX1cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwiYXhpb3MiLCJTdWdnZXN0ZWRGb2xsb3dlcnMiLCJTZWFyY2giLCJzdGF0ZSIsInNldFN0YXRlIiwicXVlcnkiLCJzZXRRdWVyeSIsInJlc3VsdCIsInNldFJlc3VsdCIsInNlYXJjaFVzZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJnZXQiLCJ0aGVuIiwiciIsImRhdGEiLCJlcnIiLCJmb3JtIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJkaXYiLCJpbnB1dCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJwbGFjZUhvbGRlciIsImJ1dHRvbiIsInR5cGUiLCJtYXAiLCJQZW9wbGUiLCJwZW9wbGUiLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Search.js\n");

/***/ })

});