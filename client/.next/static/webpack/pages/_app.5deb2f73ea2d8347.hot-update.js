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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/index */ \"./context/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Nav() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_3__.UserContext), state = ref[0], setState = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), currPage = ref1[0], setCurrPage = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        //Only updating if we are in client mode of nextjs\n         true && setCurrPage(window.location.pathname);\n    }, [\n         true && window.location.pathname\n    ]);\n    var logout = function() {\n        window.localStorage.removeItem(\"auth\");\n        setState(null); //resetting user information\n        router.push(\"/login\");\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"nav\", {\n        className: \"nav bg-dark d-flex justify-content-left p-3\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n            lineNumber: 26,\n            columnNumber: 3\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                    className: \"nav-link text-light \".concat(currPage === \"/\" && \"active\"),\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"Home\"\n                })\n            }),\n            state !== null ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/user/profile\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            className: \"nav-link text-light \".concat(currPage === \"/user/profile\" && \"active\"),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            },\n                            __self: this,\n                            children: \"Profile\"\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        onClick: logout,\n                        className: \"nav-link text-light\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: \" Logout \"\n                    })\n                ]\n            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/login\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                            lineNumber: 42,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            className: \"nav-link text-light \".concat(currPage === \"/login\" && \"active\"),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: \"Login\"\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/register\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                            lineNumber: 45,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            className: \"nav-link text-light \".concat(currPage === \"/login\" && \"active\"),\n                            style: {\n                                borderRadius: '10px'\n                            },\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: \"Register\"\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n}\n_s(Nav, \"zcOYs/u4nDmFWqRhxPg97UdUhWc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDekI7QUFDZ0I7QUFDUDtBQUNaOztTQUdoQk8sR0FBRyxHQUFJLENBQUM7O0lBQ2YsR0FBSyxDQUFxQlAsR0FBdUIsR0FBdkJBLGlEQUFVLENBQUNJLHVEQUFXLEdBQXpDSSxLQUFLLEdBQWNSLEdBQXVCLEtBQW5DUyxRQUFRLEdBQUlULEdBQXVCO0lBQ2pELEdBQUssQ0FBMkJFLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQXBDUSxRQUFRLEdBQWlCUixJQUFZLEtBQTNCUyxXQUFXLEdBQUlULElBQVk7SUFDNUMsR0FBSyxDQUFDVSxNQUFNLEdBQUdQLHNEQUFTO0lBRXhCSixnREFBUyxDQUFDLFFBQ1gsR0FEZSxDQUFDO1FBQ2IsRUFBa0Q7UUFDbERZLEtBQWUsSUFBSUYsV0FBVyxDQUFDSSxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsUUFBUTtJQUV6RCxDQUFDLEVBQUUsQ0FBQ0o7UUFBQUEsS0FBZSxJQUFJRSxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsUUFBUTtJQUFBLENBQUM7SUFFaEQsR0FBSyxDQUFDQyxNQUFNLEdBQUcsUUFBUSxHQUFGLENBQUM7UUFDcEJILE1BQU0sQ0FBQ0ksWUFBWSxDQUFDQyxVQUFVLENBQUMsQ0FBTTtRQUNyQ1gsUUFBUSxDQUFDLElBQUksRUFBRyxDQUE0QjtRQUM1Q0csTUFBTSxDQUFDUyxJQUFJLENBQUMsQ0FBUTtJQUN0QixDQUFDO0lBRUQsTUFBTSx1RUFDTEMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBNkM7Ozs7Ozs7O2lGQUN2RHBCLGtEQUFJO2dCQUFDcUIsSUFBSSxFQUFHLENBQUc7Ozs7Ozs7K0ZBQ2JDLENBQUM7b0JBQUNGLFNBQVMsRUFBSSxDQUFvQixzQkFBK0IsT0FBN0JiLFFBQVEsS0FBSyxDQUFHLE1BQUksQ0FBUTs7Ozs7Ozs4QkFBSSxDQUFJOzs7WUFHM0VGLEtBQUssS0FBSyxJQUFJOzt5RkFFVkwsa0RBQUk7d0JBQUNxQixJQUFJLEVBQUcsQ0FBZTs7Ozs7Ozt1R0FDekJDLENBQUM7NEJBQUNGLFNBQVMsRUFBSyxDQUFvQixzQkFBMkMsT0FBekNiLFFBQVEsS0FBSyxDQUFlLGtCQUFJLENBQVE7Ozs7Ozs7c0NBQUksQ0FBTzs7O3lGQUUzRmUsQ0FBQzt3QkFBQ0MsT0FBTyxFQUFJUixNQUFNO3dCQUFFSyxTQUFTLEVBQUcsQ0FBcUI7Ozs7Ozs7a0NBQUMsQ0FBUTs7Ozs7eUZBTWpFcEIsa0RBQUk7d0JBQUNxQixJQUFJLEVBQUcsQ0FBUTs7Ozs7Ozt1R0FDbEJDLENBQUM7NEJBQUNGLFNBQVMsRUFBSSxDQUFvQixzQkFBb0MsT0FBbENiLFFBQVEsS0FBSyxDQUFRLFdBQUksQ0FBUTs7Ozs7OztzQ0FBSSxDQUFLOzs7eUZBRWpGUCxrREFBSTt3QkFBQ3FCLElBQUksRUFBRyxDQUFXOzs7Ozs7O3VHQUNyQkMsQ0FBQzs0QkFBQ0YsU0FBUyxFQUFJLENBQW9CLHNCQUFvQyxPQUFsQ2IsUUFBUSxLQUFLLENBQVEsV0FBSSxDQUFROzRCQUFJaUIsS0FBSyxFQUFJLENBQUNDO2dDQUFBQSxZQUFZLEVBQUUsQ0FBTTs0QkFBQSxDQUFDOzs7Ozs7O3NDQUFFLENBQVE7Ozs7Ozs7QUFROUgsQ0FBQztHQTlDUXJCLEdBQUc7O1FBR0tGLGtEQUFTOzs7S0FIakJFLEdBQUc7QUErQ1osK0RBQWVBLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdi5qcz84NjRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7VXNlckNvbnRleHR9IGZyb20gJy4uL2NvbnRleHQvaW5kZXgnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZnVuY3Rpb24gTmF2ICgpIHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gIGNvbnN0IFtjdXJyUGFnZSwgc2V0Q3VyclBhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgLy9Pbmx5IHVwZGF0aW5nIGlmIHdlIGFyZSBpbiBjbGllbnQgbW9kZSBvZiBuZXh0anNcclxuICAgIHByb2Nlc3MuYnJvd3NlciAmJiBzZXRDdXJyUGFnZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpOyBcclxuICAgIFxyXG4gIH0sIFtwcm9jZXNzLmJyb3dzZXIgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXSk7XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGhcIik7XHJcbiAgICBzZXRTdGF0ZShudWxsKTsgLy9yZXNldHRpbmcgdXNlciBpbmZvcm1hdGlvblxyXG4gICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gIDxuYXYgY2xhc3NOYW1lPVwibmF2IGJnLWRhcmsgZC1mbGV4IGp1c3RpZnktY29udGVudC1sZWZ0IHAtM1wiPiAgXHJcbiAgICAgIDxMaW5rIGhyZWYgPSBcIi9cIiA+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lID17YG5hdi1saW5rIHRleHQtbGlnaHQgJHtjdXJyUGFnZSA9PT0gXCIvXCIgJiYgXCJhY3RpdmVcIn1gfT5Ib21lPC9hPlxyXG4gICAgICA8L0xpbms+XHJcblxyXG4gICAgICB7c3RhdGUgIT09IG51bGwgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxMaW5rIGhyZWYgPSBcIi91c2VyL3Byb2ZpbGVcIiA+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZSA9IHtgbmF2LWxpbmsgdGV4dC1saWdodCAke2N1cnJQYWdlID09PSBcIi91c2VyL3Byb2ZpbGVcIiAmJiBcImFjdGl2ZVwifWB9PlByb2ZpbGU8L2E+XHJcbiAgICAgICAgICA8L0xpbms+ICAgIFxyXG4gICAgICAgICAgPGEgb25DbGljayA9IHtsb2dvdXR9IGNsYXNzTmFtZSA9IFwibmF2LWxpbmsgdGV4dC1saWdodFwiPiBMb2dvdXQgPC9hPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApXHJcbiAgICAgIDpcclxuICAgICAgKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxMaW5rIGhyZWYgPSBcIi9sb2dpblwiID5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZSA9e2BuYXYtbGluayB0ZXh0LWxpZ2h0ICR7Y3VyclBhZ2UgPT09IFwiL2xvZ2luXCIgJiYgXCJhY3RpdmVcIn1gfT5Mb2dpbjwvYT5cclxuICAgICAgICA8L0xpbms+ICAgIFxyXG4gICAgICAgIDxMaW5rIGhyZWYgPSBcIi9yZWdpc3RlclwiID5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZSA9e2BuYXYtbGluayB0ZXh0LWxpZ2h0ICR7Y3VyclBhZ2UgPT09IFwiL2xvZ2luXCIgJiYgXCJhY3RpdmVcIn1gfSBzdHlsZSA9IHt7Ym9yZGVyUmFkaXVzOiAnMTBweCd9fT5SZWdpc3RlcjwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgICBcclxuICA8L25hdj5cclxuXHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE5hdjsiXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsIlVzZXJDb250ZXh0IiwidXNlUm91dGVyIiwiUmVhY3QiLCJOYXYiLCJzdGF0ZSIsInNldFN0YXRlIiwiY3VyclBhZ2UiLCJzZXRDdXJyUGFnZSIsInJvdXRlciIsInByb2Nlc3MiLCJicm93c2VyIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImxvZ291dCIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJwdXNoIiwibmF2IiwiY2xhc3NOYW1lIiwiaHJlZiIsImEiLCJvbkNsaWNrIiwic3R5bGUiLCJib3JkZXJSYWRpdXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

});