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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/index */ \"./context/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Nav() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_3__.UserContext), state = ref[0], setState = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), currPage = ref1[0], setCurrPage = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        //Only updating if we are in client mode of nextjs\n         true && setCurrPage(window.location.pathname);\n    }, [\n         true && window.location.pathname\n    ]);\n    var logout = function() {\n        window.localStorage.removeItem(\"auth\");\n        setState({\n            user: {\n            },\n            token: \"\"\n        }); //resetting user information\n        console.log(state);\n        router.push(\"/login\");\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"nav\", {\n        className: \"nav bg-dark d-flex justify-content-left p-3\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n            lineNumber: 28,\n            columnNumber: 3\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                    className: \"nav-link text-light \".concat(currPage === \"/\" && \"active\"),\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"Home\"\n                })\n            }),\n            state !== null ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/user/profile\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            className: \"nav-link text-light \".concat(currPage === \"/user/profile\" && \"active\"),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            },\n                            __self: this,\n                            children: \"Profile\"\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        onClick: logout,\n                        className: \"nav-link text-light\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: \" Logout \"\n                    })\n                ]\n            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/login\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                            lineNumber: 44,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            className: \"nav-link text-light \".concat(currPage === \"/login\" && \"active\"),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: \"Login\"\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/register\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                            lineNumber: 47,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            className: \"nav-link text-light \".concat(currPage === \"/register\" && \"active\"),\n                            style: {\n                                borderRadius: '10px'\n                            },\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: \"Register\"\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n}\n_s(Nav, \"zcOYs/u4nDmFWqRhxPg97UdUhWc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDekI7QUFDZ0I7QUFDUDtBQUNaOztTQUdoQk8sR0FBRyxHQUFJLENBQUM7O0lBQ2YsR0FBSyxDQUFxQlAsR0FBdUIsR0FBdkJBLGlEQUFVLENBQUNJLHVEQUFXLEdBQXpDSSxLQUFLLEdBQWNSLEdBQXVCLEtBQW5DUyxRQUFRLEdBQUlULEdBQXVCO0lBQ2pELEdBQUssQ0FBMkJFLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQXBDUSxRQUFRLEdBQWlCUixJQUFZLEtBQTNCUyxXQUFXLEdBQUlULElBQVk7SUFDNUMsR0FBSyxDQUFDVSxNQUFNLEdBQUdQLHNEQUFTO0lBRXhCSixnREFBUyxDQUFDLFFBQ1gsR0FEZSxDQUFDO1FBQ2IsRUFBa0Q7UUFDbERZLEtBQWUsSUFBSUYsV0FBVyxDQUFDSSxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsUUFBUTtJQUV6RCxDQUFDLEVBQUUsQ0FBQ0o7UUFBQUEsS0FBZSxJQUFJRSxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsUUFBUTtJQUFBLENBQUM7SUFFaEQsR0FBSyxDQUFDQyxNQUFNLEdBQUcsUUFBUSxHQUFGLENBQUM7UUFDcEJILE1BQU0sQ0FBQ0ksWUFBWSxDQUFDQyxVQUFVLENBQUMsQ0FBTTtRQUNyQ1gsUUFBUSxDQUFDLENBQUNZO1lBQUFBLElBQUksRUFBRSxDQUFDO1lBQUEsQ0FBQztZQUFFQyxLQUFLLEVBQUUsQ0FBRTtRQUFBLENBQUMsRUFBRyxDQUE0QjtRQUM3REMsT0FBTyxDQUFDQyxHQUFHLENBQUNoQixLQUFLO1FBQ2pCSSxNQUFNLENBQUNhLElBQUksQ0FBQyxDQUFRO0lBRXRCLENBQUM7SUFFRCxNQUFNLHVFQUNMQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUE2Qzs7Ozs7Ozs7aUZBQ3ZEeEIsa0RBQUk7Z0JBQUN5QixJQUFJLEVBQUcsQ0FBRzs7Ozs7OzsrRkFDYkMsQ0FBQztvQkFBQ0YsU0FBUyxFQUFJLENBQW9CLHNCQUErQixPQUE3QmpCLFFBQVEsS0FBSyxDQUFHLE1BQUksQ0FBUTs7Ozs7Ozs4QkFBSSxDQUFJOzs7WUFHM0VGLEtBQUssS0FBSyxJQUFJOzt5RkFFVkwsa0RBQUk7d0JBQUN5QixJQUFJLEVBQUcsQ0FBZTs7Ozs7Ozt1R0FDekJDLENBQUM7NEJBQUNGLFNBQVMsRUFBSyxDQUFvQixzQkFBMkMsT0FBekNqQixRQUFRLEtBQUssQ0FBZSxrQkFBSSxDQUFROzs7Ozs7O3NDQUFJLENBQU87Ozt5RkFFM0ZtQixDQUFDO3dCQUFDQyxPQUFPLEVBQUlaLE1BQU07d0JBQUVTLFNBQVMsRUFBRyxDQUFxQjs7Ozs7OztrQ0FBQyxDQUFROzs7Ozt5RkFNakV4QixrREFBSTt3QkFBQ3lCLElBQUksRUFBRyxDQUFROzs7Ozs7O3VHQUNsQkMsQ0FBQzs0QkFBQ0YsU0FBUyxFQUFJLENBQW9CLHNCQUFvQyxPQUFsQ2pCLFFBQVEsS0FBSyxDQUFRLFdBQUksQ0FBUTs7Ozs7OztzQ0FBSSxDQUFLOzs7eUZBRWpGUCxrREFBSTt3QkFBQ3lCLElBQUksRUFBRyxDQUFXOzs7Ozs7O3VHQUNyQkMsQ0FBQzs0QkFBQ0YsU0FBUyxFQUFJLENBQW9CLHNCQUF1QyxPQUFyQ2pCLFFBQVEsS0FBSyxDQUFXLGNBQUksQ0FBUTs0QkFBSXFCLEtBQUssRUFBSSxDQUFDQztnQ0FBQUEsWUFBWSxFQUFFLENBQU07NEJBQUEsQ0FBQzs7Ozs7OztzQ0FBRSxDQUFROzs7Ozs7O0FBUWpJLENBQUM7R0FoRFF6QixHQUFHOztRQUdLRixrREFBUzs7O0tBSGpCRSxHQUFHO0FBaURaLCtEQUFlQSxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanM/ODY0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge1VzZXJDb250ZXh0fSBmcm9tICcuLi9jb250ZXh0L2luZGV4JztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIE5hdiAoKSB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICBjb25zdCBbY3VyclBhZ2UsIHNldEN1cnJQYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIC8vT25seSB1cGRhdGluZyBpZiB3ZSBhcmUgaW4gY2xpZW50IG1vZGUgb2YgbmV4dGpzXHJcbiAgICBwcm9jZXNzLmJyb3dzZXIgJiYgc2V0Q3VyclBhZ2Uod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTsgXHJcbiAgICBcclxuICB9LCBbcHJvY2Vzcy5icm93c2VyICYmIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZV0pO1xyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhdXRoXCIpO1xyXG4gICAgc2V0U3RhdGUoe3VzZXI6IHt9LCB0b2tlbjogXCJcIn0pOyAvL3Jlc2V0dGluZyB1c2VyIGluZm9ybWF0aW9uXHJcbiAgICBjb25zb2xlLmxvZyhzdGF0ZSk7XHJcbiAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICA8bmF2IGNsYXNzTmFtZT1cIm5hdiBiZy1kYXJrIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtbGVmdCBwLTNcIj4gIFxyXG4gICAgICA8TGluayBocmVmID0gXCIvXCIgPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZSA9e2BuYXYtbGluayB0ZXh0LWxpZ2h0ICR7Y3VyclBhZ2UgPT09IFwiL1wiICYmIFwiYWN0aXZlXCJ9YH0+SG9tZTwvYT5cclxuICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAge3N0YXRlICE9PSBudWxsID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8TGluayBocmVmID0gXCIvdXNlci9wcm9maWxlXCIgPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWUgPSB7YG5hdi1saW5rIHRleHQtbGlnaHQgJHtjdXJyUGFnZSA9PT0gXCIvdXNlci9wcm9maWxlXCIgJiYgXCJhY3RpdmVcIn1gfT5Qcm9maWxlPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPiAgICBcclxuICAgICAgICAgIDxhIG9uQ2xpY2sgPSB7bG9nb3V0fSBjbGFzc05hbWUgPSBcIm5hdi1saW5rIHRleHQtbGlnaHRcIj4gTG9nb3V0IDwvYT5cclxuICAgICAgICA8Lz5cclxuICAgICAgKVxyXG4gICAgICA6XHJcbiAgICAgIChcclxuICAgICAgPD5cclxuICAgICAgICA8TGluayBocmVmID0gXCIvbG9naW5cIiA+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWUgPXtgbmF2LWxpbmsgdGV4dC1saWdodCAke2N1cnJQYWdlID09PSBcIi9sb2dpblwiICYmIFwiYWN0aXZlXCJ9YH0+TG9naW48L2E+XHJcbiAgICAgICAgPC9MaW5rPiAgICBcclxuICAgICAgICA8TGluayBocmVmID0gXCIvcmVnaXN0ZXJcIiA+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWUgPXtgbmF2LWxpbmsgdGV4dC1saWdodCAke2N1cnJQYWdlID09PSBcIi9yZWdpc3RlclwiICYmIFwiYWN0aXZlXCJ9YH0gc3R5bGUgPSB7e2JvcmRlclJhZGl1czogJzEwcHgnfX0+UmVnaXN0ZXI8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgICAgXHJcbiAgPC9uYXY+XHJcblxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBOYXY7Il0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJVc2VyQ29udGV4dCIsInVzZVJvdXRlciIsIlJlYWN0IiwiTmF2Iiwic3RhdGUiLCJzZXRTdGF0ZSIsImN1cnJQYWdlIiwic2V0Q3VyclBhZ2UiLCJyb3V0ZXIiLCJwcm9jZXNzIiwiYnJvd3NlciIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJsb2dvdXQiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwidXNlciIsInRva2VuIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJuYXYiLCJjbGFzc05hbWUiLCJocmVmIiwiYSIsIm9uQ2xpY2siLCJzdHlsZSIsImJvcmRlclJhZGl1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

});