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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/index */ \"./context/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Search() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_2__.UserContext), state = ref[0], setState = ref[1];\n    var ref1 //tracks the search bar user input\n     = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), query = ref1[0], setQuery = ref1[1];\n    var searchUser = function(e) {\n        e.preventDefault();\n        console.log(\"Find \".concat(query, \" from database\"));\n        try {\n            var data = axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"/search-user/\".concat(query)).data;\n            console.log(\"search user response: \", data);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"form\", {\n            className: \"form-inline row\",\n            onSubmit: searchUser,\n            __source: {\n                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Search.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"col-8\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Search.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                        onChange: function(e) {\n                            return setQuery(e.target.value);\n                        },\n                        value: query,\n                        className: \"form-control\",\n                        placeHolder: \"Search\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Search.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        },\n                        __self: this\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"col-4\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Search.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                        className: \"btn btn-outline primary col-12\",\n                        type: \"submit\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Search.js\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        },\n                        __self: this,\n                        children: \"Submit\"\n                    })\n                })\n            ]\n        })\n    }));\n}\n_s(Search, \"xnJzP4w9gVqgQuAKM9HMrowEj1g=\");\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\r\n    var _a, _b;\r\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n    // to extract CSS. For backwards compatibility, we need to check we're in a\r\n    // browser context before continuing.\r\n    if (typeof self !== 'undefined' &&\r\n        // AMP / No-JS mode does not inject these helpers:\r\n        '$RefreshHelpers$' in self) {\r\n        var currentExports = module.__proto__.exports;\r\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n        // This cannot happen in MainTemplate because the exports mismatch between\r\n        // templating and execution.\r\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n        // A module can be accepted automatically based on its exports, e.g. when\r\n        // it is a Refresh Boundary.\r\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n            // Save the previous exports on update so we can compare the boundary\r\n            // signatures.\r\n            module.hot.dispose(function (data) {\r\n                data.prevExports = currentExports;\r\n            });\r\n            // Unconditionally accept an update to this module, we'll check if it's\r\n            // still a Refresh Boundary later.\r\n            module.hot.accept();\r\n            // This field is set when the previous version of this module was a\r\n            // Refresh Boundary, letting us know we need to check for invalidation or\r\n            // enqueue an update.\r\n            if (prevExports !== null) {\r\n                // A boundary can become ineligible if its exports are incompatible\r\n                // with the previous exports.\r\n                //\r\n                // For example, if you add/remove/change exports, we'll want to\r\n                // re-execute the importing modules, and force those components to\r\n                // re-render. Similarly, if you convert a class component to a\r\n                // function, we want to invalidate the boundary.\r\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                    module.hot.invalidate();\r\n                }\r\n                else {\r\n                    self.$RefreshHelpers$.scheduleUpdate();\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            // Since we just executed the code for the module, it's possible that the\r\n            // new exports made it ineligible for being a boundary.\r\n            // We only care about the case when we were _previously_ a boundary,\r\n            // because we already accepted this update (accidental side effect).\r\n            var isNoLongerABoundary = prevExports !== null;\r\n            if (isNoLongerABoundary) {\r\n                module.hot.invalidate();\r\n            }\r\n        }\r\n    }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlDO0FBQ0c7QUFDbkI7O1NBRWhCSSxNQUFNLEdBQUcsQ0FBQzs7SUFDakIsR0FBSyxDQUFvQkgsR0FBdUIsR0FBdkJBLGlEQUFVLENBQUNDLHVEQUFXLEdBQXhDRyxLQUFLLEdBQWFKLEdBQXVCLEtBQW5DSyxRQUFRLEdBQUlMLEdBQXVCO0lBQ2hELEdBQUssQ0FBcUJELElBQVksQ0FBbUM7T0FBL0NBLCtDQUFRLENBQUMsQ0FBRSxJQUE5Qk8sS0FBSyxHQUFjUCxJQUFZLEtBQXhCUSxRQUFRLEdBQUlSLElBQVk7SUFDdEMsR0FBSyxDQUFDUyxVQUFVLEdBQUdDLFFBQ3BCLENBRG9CQSxDQUFDLEVBQUcsQ0FBQztRQUN0QkEsQ0FBQyxDQUFDQyxjQUFjO1FBQ2hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBRSxDQUFLLE9BQVEsTUFBYyxDQUFwQk4sS0FBSyxFQUFDLENBQWM7UUFDeEMsR0FBRyxFQUFDO1lBQ0YsR0FBSyxDQUFFTyxJQUFJLEdBQUlYLGdEQUFTLENBQUUsQ0FBYSxlQUFRLE9BQU5JLEtBQUssR0FBdkNPLElBQUk7WUFDWEYsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBd0IseUJBQUVDLElBQUk7UUFDNUMsQ0FBQyxDQUFDLEtBQUssRUFBRUUsR0FBRyxFQUFFLENBQUM7WUFDYkosT0FBTyxDQUFDQyxHQUFHLENBQUNHLEdBQUc7UUFDakIsQ0FBQztJQUNILENBQUM7SUFDRCxNQUFNO3dGQUVEQyxDQUFJO1lBQ0xDLFNBQVMsRUFBRyxDQUFpQjtZQUM3QkMsUUFBUSxFQUFJVixVQUFVOzs7Ozs7OztxRkFFbkJXLENBQUc7b0JBQUNGLFNBQVMsRUFBRyxDQUFPOzs7Ozs7O21HQUNyQkcsQ0FBSzt3QkFDTkMsUUFBUSxFQUFHLFFBQVEsQ0FBUFosQ0FBQzs0QkFBR0YsTUFBTSxDQUFOQSxRQUFRLENBQUNFLENBQUMsQ0FBQ2EsTUFBTSxDQUFDQyxLQUFLOzt3QkFDdkNBLEtBQUssRUFBSWpCLEtBQUs7d0JBQ2RXLFNBQVMsRUFBRyxDQUFjO3dCQUMxQk8sV0FBVyxFQUFDLENBQVE7Ozs7Ozs7OztxRkFHbkJMLENBQUc7b0JBQUNGLFNBQVMsRUFBRyxDQUFPOzs7Ozs7O21HQUNyQlEsQ0FBTTt3QkFDUFIsU0FBUyxFQUFHLENBQWdDO3dCQUM1Q1MsSUFBSSxFQUFHLENBQVE7Ozs7Ozs7a0NBQ2QsQ0FFRDs7Ozs7O0FBTVosQ0FBQztHQXZDUXZCLE1BQU07S0FBTkEsTUFBTTtBQXlDZiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlYXJjaC5qcz9kZTFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsdXNlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7VXNlckNvbnRleHR9IGZyb20gXCIuLi9jb250ZXh0L2luZGV4XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2goKSB7XHJcbiAgY29uc3QgW3N0YXRlLHNldFN0YXRlXSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIikgLy90cmFja3MgdGhlIHNlYXJjaCBiYXIgdXNlciBpbnB1dFxyXG4gIGNvbnN0IHNlYXJjaFVzZXIgPSBlID0+e1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coYEZpbmQgJHtxdWVyeX0gZnJvbSBkYXRhYmFzZWApXHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnN0IHtkYXRhfSA9IGF4aW9zLmdldChgL3NlYXJjaC11c2VyLyR7cXVlcnl9YCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwic2VhcmNoIHVzZXIgcmVzcG9uc2U6IFwiLCBkYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGZvcm0gXHJcbiAgICAgIGNsYXNzTmFtZSA9IFwiZm9ybS1pbmxpbmUgcm93XCIgXHJcbiAgICAgIG9uU3VibWl0ID0ge3NlYXJjaFVzZXJ9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiY29sLThcIj5cclxuICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgIG9uQ2hhbmdlPSB7KGUpPT5zZXRRdWVyeShlLnRhcmdldC52YWx1ZSl9IFxyXG4gICAgICAgICAgdmFsdWUgPSB7cXVlcnl9XHJcbiAgICAgICAgICBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICBwbGFjZUhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJjb2wtNFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBcImJ0biBidG4tb3V0bGluZSBwcmltYXJ5IGNvbC0xMlwiIFxyXG4gICAgICAgICAgICB0eXBlID0gXCJzdWJtaXRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwiYXhpb3MiLCJTZWFyY2giLCJzdGF0ZSIsInNldFN0YXRlIiwicXVlcnkiLCJzZXRRdWVyeSIsInNlYXJjaFVzZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImdldCIsImVyciIsImZvcm0iLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsImRpdiIsImlucHV0Iiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBsYWNlSG9sZGVyIiwiYnV0dG9uIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Search.js\n");

/***/ })

});