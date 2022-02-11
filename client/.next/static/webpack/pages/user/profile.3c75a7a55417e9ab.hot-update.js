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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/index */ \"./context/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Search() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_2__.UserContext), state = ref[0], setState = ref[1];\n    var ref1 //tracks the search bar user input\n     = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), query = ref1[0], setQuery = ref1[1];\n    var searchUser = function(e) {\n        e.preventDefault();\n        console.log(\"Find \".concat(query, \" from database\"));\n        try {\n            var response = {\n            };\n            axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"/search-user/\".concat(query)).then(function(r) {\n                response = r;\n                console.log(response);\n            });\n            console.log(\"search user response: \", response);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"form\", {\n            className: \"form-inline row\",\n            onSubmit: searchUser,\n            __source: {\n                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Search.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"col-8\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Search.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                        onChange: function(e) {\n                            return setQuery(e.target.value);\n                        },\n                        value: query,\n                        className: \"form-control\",\n                        placeHolder: \"Search\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Search.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        },\n                        __self: this\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"col-4\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Search.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                        className: \"btn btn-outline-primary col-12\",\n                        type: \"submit\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Search.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: \"Submit\"\n                    })\n                })\n            ]\n        })\n    }));\n}\n_s(Search, \"xnJzP4w9gVqgQuAKM9HMrowEj1g=\");\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\r\n    var _a, _b;\r\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n    // to extract CSS. For backwards compatibility, we need to check we're in a\r\n    // browser context before continuing.\r\n    if (typeof self !== 'undefined' &&\r\n        // AMP / No-JS mode does not inject these helpers:\r\n        '$RefreshHelpers$' in self) {\r\n        var currentExports = module.__proto__.exports;\r\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n        // This cannot happen in MainTemplate because the exports mismatch between\r\n        // templating and execution.\r\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n        // A module can be accepted automatically based on its exports, e.g. when\r\n        // it is a Refresh Boundary.\r\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n            // Save the previous exports on update so we can compare the boundary\r\n            // signatures.\r\n            module.hot.dispose(function (data) {\r\n                data.prevExports = currentExports;\r\n            });\r\n            // Unconditionally accept an update to this module, we'll check if it's\r\n            // still a Refresh Boundary later.\r\n            module.hot.accept();\r\n            // This field is set when the previous version of this module was a\r\n            // Refresh Boundary, letting us know we need to check for invalidation or\r\n            // enqueue an update.\r\n            if (prevExports !== null) {\r\n                // A boundary can become ineligible if its exports are incompatible\r\n                // with the previous exports.\r\n                //\r\n                // For example, if you add/remove/change exports, we'll want to\r\n                // re-execute the importing modules, and force those components to\r\n                // re-render. Similarly, if you convert a class component to a\r\n                // function, we want to invalidate the boundary.\r\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                    module.hot.invalidate();\r\n                }\r\n                else {\r\n                    self.$RefreshHelpers$.scheduleUpdate();\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            // Since we just executed the code for the module, it's possible that the\r\n            // new exports made it ineligible for being a boundary.\r\n            // We only care about the case when we were _previously_ a boundary,\r\n            // because we already accepted this update (accidental side effect).\r\n            var isNoLongerABoundary = prevExports !== null;\r\n            if (isNoLongerABoundary) {\r\n                module.hot.invalidate();\r\n            }\r\n        }\r\n    }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlDO0FBQ0c7QUFDbkI7O1NBRWhCSSxNQUFNLEdBQUcsQ0FBQzs7SUFDakIsR0FBSyxDQUFvQkgsR0FBdUIsR0FBdkJBLGlEQUFVLENBQUNDLHVEQUFXLEdBQXhDRyxLQUFLLEdBQWFKLEdBQXVCLEtBQW5DSyxRQUFRLEdBQUlMLEdBQXVCO0lBQ2hELEdBQUssQ0FBcUJELElBQVksQ0FBbUM7T0FBL0NBLCtDQUFRLENBQUMsQ0FBRSxJQUE5Qk8sS0FBSyxHQUFjUCxJQUFZLEtBQXhCUSxRQUFRLEdBQUlSLElBQVk7SUFDdEMsR0FBSyxDQUFDUyxVQUFVLEdBQUdDLFFBQ3BCLENBRG9CQSxDQUFDLEVBQUcsQ0FBQztRQUN0QkEsQ0FBQyxDQUFDQyxjQUFjO1FBQ2hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBRSxDQUFLLE9BQVEsTUFBYyxDQUFwQk4sS0FBSyxFQUFDLENBQWM7UUFDeEMsR0FBRyxFQUFDO1lBQ0YsR0FBSyxDQUFDTyxRQUFRLEdBQUcsQ0FBQztZQUFBLENBQUM7WUFDcEJYLGdEQUFTLENBQUUsQ0FBYSxlQUFRLE9BQU5JLEtBQUssR0FBSVMsSUFBSSxDQUFDLFFBQzdDLENBRDhDQyxDQUFDLEVBQUcsQ0FBQztnQkFDN0NILFFBQVEsR0FBR0csQ0FBQztnQkFDWkwsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFFBQVE7WUFDbkIsQ0FBQztZQUVGRixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUF3Qix5QkFBRUMsUUFBUTtRQUNoRCxDQUFDLENBQUMsS0FBSyxFQUFFSSxHQUFHLEVBQUUsQ0FBQztZQUNiTixPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssR0FBRztRQUNqQixDQUFDO0lBQ0gsQ0FBQztJQUNELE1BQU07d0ZBRURDLENBQUk7WUFDTEMsU0FBUyxFQUFHLENBQWlCO1lBQzdCQyxRQUFRLEVBQUlaLFVBQVU7Ozs7Ozs7O3FGQUVuQmEsQ0FBRztvQkFBQ0YsU0FBUyxFQUFHLENBQU87Ozs7Ozs7bUdBQ3JCRyxDQUFLO3dCQUNOQyxRQUFRLEVBQUcsUUFBUSxDQUFQZCxDQUFDOzRCQUFHRixNQUFNLENBQU5BLFFBQVEsQ0FBQ0UsQ0FBQyxDQUFDZSxNQUFNLENBQUNDLEtBQUs7O3dCQUN2Q0EsS0FBSyxFQUFJbkIsS0FBSzt3QkFDZGEsU0FBUyxFQUFHLENBQWM7d0JBQzFCTyxXQUFXLEVBQUMsQ0FBUTs7Ozs7Ozs7O3FGQUlyQkwsQ0FBRztvQkFBQ0YsU0FBUyxFQUFHLENBQU87Ozs7Ozs7bUdBQ3JCUSxDQUFNO3dCQUNQUixTQUFTLEVBQUcsQ0FBZ0M7d0JBQzVDUyxJQUFJLEVBQUcsQ0FBUTs7Ozs7OztrQ0FDZCxDQUVEOzs7Ozs7QUFLVixDQUFDO0dBNUNRekIsTUFBTTtLQUFOQSxNQUFNO0FBOENmLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2VhcmNoLmpzP2RlMWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSx1c2VDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtVc2VyQ29udGV4dH0gZnJvbSBcIi4uL2NvbnRleHQvaW5kZXhcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaCgpIHtcclxuICBjb25zdCBbc3RhdGUsc2V0U3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKSAvL3RyYWNrcyB0aGUgc2VhcmNoIGJhciB1c2VyIGlucHV0XHJcbiAgY29uc3Qgc2VhcmNoVXNlciA9IGUgPT57XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhgRmluZCAke3F1ZXJ5fSBmcm9tIGRhdGFiYXNlYClcclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB7fTtcclxuICAgICBheGlvcy5nZXQoYC9zZWFyY2gtdXNlci8ke3F1ZXJ5fWApLnRoZW4oKHIpPT57XHJcbiAgICAgIHJlc3BvbnNlID0gcjsgIFxyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICB9ICBcclxuICAgICApO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInNlYXJjaCB1c2VyIHJlc3BvbnNlOiBcIiwgcmVzcG9uc2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Zm9ybSBcclxuICAgICAgY2xhc3NOYW1lID0gXCJmb3JtLWlubGluZSByb3dcIiBcclxuICAgICAgb25TdWJtaXQgPSB7c2VhcmNoVXNlcn1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJjb2wtOFwiPlxyXG4gICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgb25DaGFuZ2U9IHsoZSk9PnNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX0gXHJcbiAgICAgICAgICB2YWx1ZSA9IHtxdWVyeX1cclxuICAgICAgICAgIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgIHBsYWNlSG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJjb2wtNFwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgIGNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgY29sLTEyXCIgXHJcbiAgICAgICAgICB0eXBlID0gXCJzdWJtaXRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaCJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsImF4aW9zIiwiU2VhcmNoIiwic3RhdGUiLCJzZXRTdGF0ZSIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJzZWFyY2hVc2VyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZ2V0IiwidGhlbiIsInIiLCJlcnIiLCJmb3JtIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJkaXYiLCJpbnB1dCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJwbGFjZUhvbGRlciIsImJ1dHRvbiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Search.js\n");

/***/ })

});