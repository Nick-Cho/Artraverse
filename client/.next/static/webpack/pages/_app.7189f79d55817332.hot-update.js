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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/index */ \"./context/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Nav() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_3__.UserContext), state = ref[0], setState = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), currPage = ref1[0], setCurrPage = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        //Only updating if we are in client mode of nextjs\n         true && setCurrPage(window.location.pathname);\n        console.log(state);\n    }, [\n         true && window.location.pathname\n    ]);\n    var logout = function() {\n        window.localStorage.removeItem(\"auth\");\n        setState({\n            user: {\n            },\n            token: \"\"\n        }); //resetting user information\n        console.log(state);\n        router.push(\"/login\");\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"nav\", {\n        className: \"nav bg-dark d-flex justify-content-left p-3\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n            lineNumber: 28,\n            columnNumber: 3\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                    className: \"nav-link text-light \".concat(currPage === \"/\" && \"active\"),\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"Home\"\n                })\n            }),\n            state ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"dropdown\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            className: \"btn dropdown-toggle text-light\",\n                            type: \"button\",\n                            id: \"dropdownMenuButton1\",\n                            \"data-bs-toggle\": \"dropdown\",\n                            \"aria-expanded\": \"false\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            },\n                            __self: this,\n                            children: state.user.first_name\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"ul\", {\n                            className: \"dropdown-menu\",\n                            \"aria-labelledby\": \"dropdownMenuButton1\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            },\n                            __self: this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 15\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/user/profile\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                            lineNumber: 43,\n                                            columnNumber: 17\n                                        },\n                                        __self: this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                            className: \"nav-link dropdown-item  \".concat(currPage === \"/user/profile\" && \"active\"),\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                                lineNumber: 44,\n                                                columnNumber: 19\n                                            },\n                                            __self: this,\n                                            children: \"Profile\"\n                                        })\n                                    })\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 16\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/user/updateProfile/update\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                            lineNumber: 49,\n                                            columnNumber: 17\n                                        },\n                                        __self: this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                            className: \"nav-link dropdown-item  \".concat(currPage === \"/user/profile\" && \"active\"),\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 19\n                                            },\n                                            __self: this,\n                                            children: \"Profile\"\n                                        })\n                                    })\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                        onClick: logout,\n                                        className: \"dropdown-item nav-link\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 19\n                                        },\n                                        __self: this,\n                                        children: \" Logout \"\n                                    })\n                                })\n                            ]\n                        })\n                    ]\n                })\n            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/login\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                            lineNumber: 61,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            className: \"nav-link text-light \".concat(currPage === \"/login\" && \"active\"),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: \"Login\"\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/register\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                            lineNumber: 64,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            className: \"nav-link text-light \".concat(currPage === \"/register\" && \"active\"),\n                            style: {\n                                borderRadius: '10px'\n                            },\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: \"Register\"\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n}\n_s(Nav, \"zcOYs/u4nDmFWqRhxPg97UdUhWc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\r\n    var _a, _b;\r\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n    // to extract CSS. For backwards compatibility, we need to check we're in a\r\n    // browser context before continuing.\r\n    if (typeof self !== 'undefined' &&\r\n        // AMP / No-JS mode does not inject these helpers:\r\n        '$RefreshHelpers$' in self) {\r\n        var currentExports = module.__proto__.exports;\r\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n        // This cannot happen in MainTemplate because the exports mismatch between\r\n        // templating and execution.\r\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n        // A module can be accepted automatically based on its exports, e.g. when\r\n        // it is a Refresh Boundary.\r\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n            // Save the previous exports on update so we can compare the boundary\r\n            // signatures.\r\n            module.hot.dispose(function (data) {\r\n                data.prevExports = currentExports;\r\n            });\r\n            // Unconditionally accept an update to this module, we'll check if it's\r\n            // still a Refresh Boundary later.\r\n            module.hot.accept();\r\n            // This field is set when the previous version of this module was a\r\n            // Refresh Boundary, letting us know we need to check for invalidation or\r\n            // enqueue an update.\r\n            if (prevExports !== null) {\r\n                // A boundary can become ineligible if its exports are incompatible\r\n                // with the previous exports.\r\n                //\r\n                // For example, if you add/remove/change exports, we'll want to\r\n                // re-execute the importing modules, and force those components to\r\n                // re-render. Similarly, if you convert a class component to a\r\n                // function, we want to invalidate the boundary.\r\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                    module.hot.invalidate();\r\n                }\r\n                else {\r\n                    self.$RefreshHelpers$.scheduleUpdate();\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            // Since we just executed the code for the module, it's possible that the\r\n            // new exports made it ineligible for being a boundary.\r\n            // We only care about the case when we were _previously_ a boundary,\r\n            // because we already accepted this update (accidental side effect).\r\n            var isNoLongerABoundary = prevExports !== null;\r\n            if (isNoLongerABoundary) {\r\n                module.hot.invalidate();\r\n            }\r\n        }\r\n    }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDekI7QUFDZ0I7QUFDUDtBQUNaOztTQUdoQk8sR0FBRyxHQUFJLENBQUM7O0lBQ2YsR0FBSyxDQUFxQlAsR0FBdUIsR0FBdkJBLGlEQUFVLENBQUNJLHVEQUFXLEdBQXpDSSxLQUFLLEdBQWNSLEdBQXVCLEtBQW5DUyxRQUFRLEdBQUlULEdBQXVCO0lBQ2pELEdBQUssQ0FBMkJFLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQXBDUSxRQUFRLEdBQWlCUixJQUFZLEtBQTNCUyxXQUFXLEdBQUlULElBQVk7SUFDNUMsR0FBSyxDQUFDVSxNQUFNLEdBQUdQLHNEQUFTO0lBRXhCSixnREFBUyxDQUFDLFFBQ1gsR0FEZSxDQUFDO1FBQ2IsRUFBa0Q7UUFDbERZLEtBQWUsSUFBSUYsV0FBVyxDQUFDSSxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsUUFBUTtRQUN2REMsT0FBTyxDQUFDQyxHQUFHLENBQUNYLEtBQUs7SUFDbkIsQ0FBQyxFQUFFLENBQUNLO1FBQUFBLEtBQWUsSUFBSUUsTUFBTSxDQUFDQyxRQUFRLENBQUNDLFFBQVE7SUFBQSxDQUFDO0lBRWhELEdBQUssQ0FBQ0csTUFBTSxHQUFHLFFBQVEsR0FBRixDQUFDO1FBQ3BCTCxNQUFNLENBQUNNLFlBQVksQ0FBQ0MsVUFBVSxDQUFDLENBQU07UUFDckNiLFFBQVEsQ0FBQyxDQUFDYztZQUFBQSxJQUFJLEVBQUUsQ0FBQztZQUFBLENBQUM7WUFBRUMsS0FBSyxFQUFFLENBQUU7UUFBQSxDQUFDLEVBQUcsQ0FBNEI7UUFDN0ROLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWCxLQUFLO1FBQ2pCSSxNQUFNLENBQUNhLElBQUksQ0FBQyxDQUFRO0lBRXRCLENBQUM7SUFFRCxNQUFNLHVFQUNMQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUE2Qzs7Ozs7Ozs7aUZBQ3ZEeEIsa0RBQUk7Z0JBQUN5QixJQUFJLEVBQUcsQ0FBRzs7Ozs7OzsrRkFDYkMsQ0FBQztvQkFBQ0YsU0FBUyxFQUFJLENBQW9CLHNCQUErQixPQUE3QmpCLFFBQVEsS0FBSyxDQUFHLE1BQUksQ0FBUTs7Ozs7Ozs4QkFBSSxDQUFJOzs7WUFLMUVGLEtBQUs7Z0dBRUZzQixDQUFHO29CQUFDSCxTQUFTLEVBQUMsQ0FBVTs7Ozs7Ozs7NkZBQ3RCSSxDQUFNOzRCQUFDSixTQUFTLEVBQUMsQ0FBZ0M7NEJBQUNLLElBQUksRUFBQyxDQUFROzRCQUFDQyxFQUFFLEVBQUMsQ0FBcUI7NEJBQUNDLENBQWMsaUJBQUMsQ0FBVTs0QkFBQ0MsQ0FBYSxnQkFBQyxDQUFPOzs7Ozs7O3NDQUN0STNCLEtBQUssQ0FBQ2UsSUFBSSxDQUFDYSxVQUFVOzs4RkFFdkJDLENBQUU7NEJBQUNWLFNBQVMsRUFBQyxDQUFlOzRCQUFDVyxDQUFlLGtCQUFDLENBQXFCOzs7Ozs7OztxR0FDaEVDLENBQUU7Ozs7Ozs7bUhBQ0FwQyxrREFBSTt3Q0FBQ3lCLElBQUksRUFBRyxDQUFlOzs7Ozs7O3VIQUN6QkMsQ0FBQzs0Q0FBQ0YsU0FBUyxFQUFLLENBQXdCLDBCQUEyQyxPQUF6Q2pCLFFBQVEsS0FBSyxDQUFlLGtCQUFJLENBQVE7Ozs7Ozs7c0RBQUksQ0FBTzs7OztxR0FJaEc2QixDQUFFOzs7Ozs7O21IQUNEcEMsa0RBQUk7d0NBQUN5QixJQUFJLEVBQUcsQ0FBNEI7Ozs7Ozs7dUhBQ3RDQyxDQUFDOzRDQUFDRixTQUFTLEVBQUssQ0FBd0IsMEJBQTJDLE9BQXpDakIsUUFBUSxLQUFLLENBQWUsa0JBQUksQ0FBUTs7Ozs7OztzREFBSSxDQUFPOzs7O3FHQUdqRzZCLENBQUU7Ozs7Ozs7bUhBQUVWLENBQUM7d0NBQUNXLE9BQU8sRUFBSXBCLE1BQU07d0NBQUVPLFNBQVMsRUFBRyxDQUF3Qjs7Ozs7OztrREFBQyxDQUFROzs7Ozs7Ozs7eUZBUTVFeEIsa0RBQUk7d0JBQUN5QixJQUFJLEVBQUcsQ0FBUTs7Ozs7Ozt1R0FDbEJDLENBQUM7NEJBQUNGLFNBQVMsRUFBSSxDQUFvQixzQkFBb0MsT0FBbENqQixRQUFRLEtBQUssQ0FBUSxXQUFJLENBQVE7Ozs7Ozs7c0NBQUksQ0FBSzs7O3lGQUVqRlAsa0RBQUk7d0JBQUN5QixJQUFJLEVBQUcsQ0FBVzs7Ozs7Ozt1R0FDckJDLENBQUM7NEJBQUNGLFNBQVMsRUFBSSxDQUFvQixzQkFBdUMsT0FBckNqQixRQUFRLEtBQUssQ0FBVyxjQUFJLENBQVE7NEJBQUkrQixLQUFLLEVBQUksQ0FBQ0M7Z0NBQUFBLFlBQVksRUFBRSxDQUFNOzRCQUFBLENBQUM7Ozs7Ozs7c0NBQUUsQ0FBUTs7Ozs7OztBQVFqSSxDQUFDO0dBakVRbkMsR0FBRzs7UUFHS0Ysa0RBQVM7OztLQUhqQkUsR0FBRztBQWtFWiwrREFBZUEsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2LmpzPzg2NGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHtVc2VyQ29udGV4dH0gZnJvbSAnLi4vY29udGV4dC9pbmRleCc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5mdW5jdGlvbiBOYXYgKCkge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgY29uc3QgW2N1cnJQYWdlLCBzZXRDdXJyUGFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAvL09ubHkgdXBkYXRpbmcgaWYgd2UgYXJlIGluIGNsaWVudCBtb2RlIG9mIG5leHRqc1xyXG4gICAgcHJvY2Vzcy5icm93c2VyICYmIHNldEN1cnJQYWdlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7IFxyXG4gICAgY29uc29sZS5sb2coc3RhdGUpO1xyXG4gIH0sIFtwcm9jZXNzLmJyb3dzZXIgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXSk7XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGhcIik7XHJcbiAgICBzZXRTdGF0ZSh7dXNlcjoge30sIHRva2VuOiBcIlwifSk7IC8vcmVzZXR0aW5nIHVzZXIgaW5mb3JtYXRpb25cclxuICAgIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gIDxuYXYgY2xhc3NOYW1lPVwibmF2IGJnLWRhcmsgZC1mbGV4IGp1c3RpZnktY29udGVudC1sZWZ0IHAtM1wiPiAgXHJcbiAgICAgIDxMaW5rIGhyZWYgPSBcIi9cIiA+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lID17YG5hdi1saW5rIHRleHQtbGlnaHQgJHtjdXJyUGFnZSA9PT0gXCIvXCIgJiYgXCJhY3RpdmVcIn1gfT5Ib21lPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgXHJcbiAgICAgIFxyXG5cclxuICAgICAgeyhzdGF0ZSkgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gZHJvcGRvd24tdG9nZ2xlIHRleHQtbGlnaHRcIiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJkcm9wZG93bk1lbnVCdXR0b24xXCIgZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgIHtzdGF0ZS51c2VyLmZpcnN0X25hbWV9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiIGFyaWEtbGFiZWxsZWRieT1cImRyb3Bkb3duTWVudUJ1dHRvbjFcIj5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmID0gXCIvdXNlci9wcm9maWxlXCIgPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWUgPSB7YG5hdi1saW5rIGRyb3Bkb3duLWl0ZW0gICR7Y3VyclBhZ2UgPT09IFwiL3VzZXIvcHJvZmlsZVwiICYmIFwiYWN0aXZlXCJ9YH0+UHJvZmlsZTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz4gICAgXHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZiA9IFwiL3VzZXIvdXBkYXRlUHJvZmlsZS91cGRhdGVcIiA+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZSA9IHtgbmF2LWxpbmsgZHJvcGRvd24taXRlbSAgJHtjdXJyUGFnZSA9PT0gXCIvdXNlci9wcm9maWxlXCIgJiYgXCJhY3RpdmVcIn1gfT5Qcm9maWxlPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPiAgICBcclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48YSBvbkNsaWNrID0ge2xvZ291dH0gY2xhc3NOYW1lID0gXCJkcm9wZG93bi1pdGVtIG5hdi1saW5rXCI+IExvZ291dCA8L2E+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApXHJcbiAgICAgIDpcclxuICAgICAgKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxMaW5rIGhyZWYgPSBcIi9sb2dpblwiID5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZSA9e2BuYXYtbGluayB0ZXh0LWxpZ2h0ICR7Y3VyclBhZ2UgPT09IFwiL2xvZ2luXCIgJiYgXCJhY3RpdmVcIn1gfT5Mb2dpbjwvYT5cclxuICAgICAgICA8L0xpbms+ICAgIFxyXG4gICAgICAgIDxMaW5rIGhyZWYgPSBcIi9yZWdpc3RlclwiID5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZSA9e2BuYXYtbGluayB0ZXh0LWxpZ2h0ICR7Y3VyclBhZ2UgPT09IFwiL3JlZ2lzdGVyXCIgJiYgXCJhY3RpdmVcIn1gfSBzdHlsZSA9IHt7Ym9yZGVyUmFkaXVzOiAnMTBweCd9fT5SZWdpc3RlcjwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgICBcclxuICA8L25hdj5cclxuXHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE5hdjsiXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsIlVzZXJDb250ZXh0IiwidXNlUm91dGVyIiwiUmVhY3QiLCJOYXYiLCJzdGF0ZSIsInNldFN0YXRlIiwiY3VyclBhZ2UiLCJzZXRDdXJyUGFnZSIsInJvdXRlciIsInByb2Nlc3MiLCJicm93c2VyIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImNvbnNvbGUiLCJsb2ciLCJsb2dvdXQiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwidXNlciIsInRva2VuIiwicHVzaCIsIm5hdiIsImNsYXNzTmFtZSIsImhyZWYiLCJhIiwiZGl2IiwiYnV0dG9uIiwidHlwZSIsImlkIiwiZGF0YS1icy10b2dnbGUiLCJhcmlhLWV4cGFuZGVkIiwiZmlyc3RfbmFtZSIsInVsIiwiYXJpYS1sYWJlbGxlZGJ5IiwibGkiLCJvbkNsaWNrIiwic3R5bGUiLCJib3JkZXJSYWRpdXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

});