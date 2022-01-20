"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/index */ \"./context/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Nav = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_3__.UserContext), state = ref[0], setState = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), currPage = ref1[0], setCurrPage = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        //Only updating if we are in client mode of nextjs\n         true && setCurrPage(window.location.pathName);\n    }, [\n         true && window.location.pathName\n    ]);\n    var logout = function() {\n        window.localStorage.removeItem(\"auth\");\n        setState(null); //resetting user information\n        router.push(\"/login\");\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"nav\", {\n        className: \"nav bg-dark d-flex justify-content-left p-3\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n            lineNumber: 22,\n            columnNumber: 3\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                    className: \"nav-link text-light\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Home\"\n                })\n            }),\n            state !== null ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/user/profile\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            className: \"nav-link text-light active\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: \"Profile\"\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        onClick: logout,\n                        className: \"nav-link text-light\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: \" Logout \"\n                    })\n                ]\n            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/login\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                            lineNumber: 38,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            className: \"nav-link text-light\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: \"Login\"\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/register\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                            lineNumber: 41,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            className: \"nav-link text-light btn-primary \",\n                            style: {\n                                borderRadius: '10px'\n                            },\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: \"Register\"\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(Nav, \"zcOYs/u4nDmFWqRhxPg97UdUhWc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDekI7QUFDZ0I7QUFDUDs7O0FBQ3JDLEdBQUssQ0FBQ00sR0FBRyxHQUFHLFFBQVEsR0FBRixDQUFDOztJQUNqQixHQUFLLENBQXFCTixHQUF1QixHQUF2QkEsaURBQVUsQ0FBQ0ksdURBQVcsR0FBekNHLEtBQUssR0FBY1AsR0FBdUIsS0FBbkNRLFFBQVEsR0FBSVIsR0FBdUI7SUFDakQsR0FBSyxDQUEyQkUsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBcENPLFFBQVEsR0FBaUJQLElBQVksS0FBM0JRLFdBQVcsR0FBSVIsSUFBWTtJQUM1QyxHQUFLLENBQUNTLE1BQU0sR0FBR04sc0RBQVM7SUFFeEJKLGdEQUFTLENBQUMsUUFDWCxHQURlLENBQUM7UUFDYixFQUFrRDtRQUNsRFcsS0FBZSxJQUFJRixXQUFXLENBQUNJLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxRQUFRO0lBQ3pELENBQUMsRUFBRSxDQUFDSjtRQUFBQSxLQUFlLElBQUlFLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxRQUFRO0lBQUEsQ0FBQztJQUVoRCxHQUFLLENBQUNDLE1BQU0sR0FBRyxRQUFRLEdBQUYsQ0FBQztRQUNwQkgsTUFBTSxDQUFDSSxZQUFZLENBQUNDLFVBQVUsQ0FBQyxDQUFNO1FBQ3JDWCxRQUFRLENBQUMsSUFBSSxFQUFHLENBQTRCO1FBQzVDRyxNQUFNLENBQUNTLElBQUksQ0FBQyxDQUFRO0lBQ3RCLENBQUM7SUFFRCxNQUFNLHVFQUNMQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUE2Qzs7Ozs7Ozs7aUZBQ3ZEbkIsa0RBQUk7Z0JBQUNvQixJQUFJLEVBQUcsQ0FBRzs7Ozs7OzsrRkFDYkMsQ0FBQztvQkFBQ0YsU0FBUyxFQUFFLENBQXFCOzs7Ozs7OzhCQUFDLENBQUk7OztZQUd6Q2YsS0FBSyxLQUFLLElBQUk7O3lGQUVWSixrREFBSTt3QkFBQ29CLElBQUksRUFBRyxDQUFlOzs7Ozs7O3VHQUN6QkMsQ0FBQzs0QkFBQ0YsU0FBUyxFQUFFLENBQTRCOzs7Ozs7O3NDQUFDLENBQU87Ozt5RkFFbkRFLENBQUM7d0JBQUNDLE9BQU8sRUFBSVIsTUFBTTt3QkFBRUssU0FBUyxFQUFHLENBQXFCOzs7Ozs7O2tDQUFDLENBQVE7Ozs7O3lGQU1qRW5CLGtEQUFJO3dCQUFDb0IsSUFBSSxFQUFHLENBQVE7Ozs7Ozs7dUdBQ2xCQyxDQUFDOzRCQUFDRixTQUFTLEVBQUUsQ0FBcUI7Ozs7Ozs7c0NBQUMsQ0FBSzs7O3lGQUUxQ25CLGtEQUFJO3dCQUFDb0IsSUFBSSxFQUFHLENBQVc7Ozs7Ozs7dUdBQ3JCQyxDQUFDOzRCQUFDRixTQUFTLEVBQUUsQ0FBa0M7NEJBQUNJLEtBQUssRUFBSSxDQUFDQztnQ0FBQUEsWUFBWSxFQUFFLENBQU07NEJBQUEsQ0FBQzs7Ozs7OztzQ0FBRSxDQUFROzs7Ozs7O0FBUXBHLENBQUM7R0E3Q0tyQixHQUFHOztRQUdRRCxrREFBUzs7O0tBSHBCQyxHQUFHO0FBOENULCtEQUFlQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2LmpzPzg2NGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHtVc2VyQ29udGV4dH0gZnJvbSAnLi4vY29udGV4dC9pbmRleCc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuY29uc3QgTmF2ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgY29uc3QgW2N1cnJQYWdlLCBzZXRDdXJyUGFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAvL09ubHkgdXBkYXRpbmcgaWYgd2UgYXJlIGluIGNsaWVudCBtb2RlIG9mIG5leHRqc1xyXG4gICAgcHJvY2Vzcy5icm93c2VyICYmIHNldEN1cnJQYWdlKHdpbmRvdy5sb2NhdGlvbi5wYXRoTmFtZSk7IFxyXG4gIH0sIFtwcm9jZXNzLmJyb3dzZXIgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhOYW1lXSk7XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGhcIik7XHJcbiAgICBzZXRTdGF0ZShudWxsKTsgLy9yZXNldHRpbmcgdXNlciBpbmZvcm1hdGlvblxyXG4gICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gIDxuYXYgY2xhc3NOYW1lPVwibmF2IGJnLWRhcmsgZC1mbGV4IGp1c3RpZnktY29udGVudC1sZWZ0IHAtM1wiPiAgXHJcbiAgICAgIDxMaW5rIGhyZWYgPSBcIi9cIiA+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lID1cIm5hdi1saW5rIHRleHQtbGlnaHRcIj5Ib21lPC9hPlxyXG4gICAgICA8L0xpbms+XHJcblxyXG4gICAgICB7c3RhdGUgIT09IG51bGwgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxMaW5rIGhyZWYgPSBcIi91c2VyL3Byb2ZpbGVcIiA+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZSA9XCJuYXYtbGluayB0ZXh0LWxpZ2h0IGFjdGl2ZVwiPlByb2ZpbGU8L2E+XHJcbiAgICAgICAgICA8L0xpbms+ICAgIFxyXG4gICAgICAgICAgPGEgb25DbGljayA9IHtsb2dvdXR9IGNsYXNzTmFtZSA9IFwibmF2LWxpbmsgdGV4dC1saWdodFwiPiBMb2dvdXQgPC9hPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApXHJcbiAgICAgIDpcclxuICAgICAgKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxMaW5rIGhyZWYgPSBcIi9sb2dpblwiID5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZSA9XCJuYXYtbGluayB0ZXh0LWxpZ2h0XCI+TG9naW48L2E+XHJcbiAgICAgICAgPC9MaW5rPiAgICBcclxuICAgICAgICA8TGluayBocmVmID0gXCIvcmVnaXN0ZXJcIiA+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWUgPVwibmF2LWxpbmsgdGV4dC1saWdodCBidG4tcHJpbWFyeSBcIiBzdHlsZSA9IHt7Ym9yZGVyUmFkaXVzOiAnMTBweCd9fT5SZWdpc3RlcjwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgICBcclxuICA8L25hdj5cclxuXHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE5hdiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiVXNlckNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJOYXYiLCJzdGF0ZSIsInNldFN0YXRlIiwiY3VyclBhZ2UiLCJzZXRDdXJyUGFnZSIsInJvdXRlciIsInByb2Nlc3MiLCJicm93c2VyIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRoTmFtZSIsImxvZ291dCIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJwdXNoIiwibmF2IiwiY2xhc3NOYW1lIiwiaHJlZiIsImEiLCJvbkNsaWNrIiwic3R5bGUiLCJib3JkZXJSYWRpdXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

});