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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/index */ \"./context/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Nav() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_3__.UserContext), state = ref[0], setState = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), currPage = ref1[0], setCurrPage = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        //Only updating if we are in client mode of nextjs\n         true && setCurrPage(window.location.pathname);\n        console.log(state);\n    }, [\n         true && window.location.pathname\n    ]);\n    var logout = function() {\n        window.localStorage.removeItem(\"auth\");\n        setState({\n            user: {\n            },\n            token: \"\"\n        }); //resetting user information\n        console.log(state);\n        router.push(\"/login\");\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"nav\", {\n        className: \"nav bg-dark d-flex justify-content-left p-3\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n            lineNumber: 28,\n            columnNumber: 3\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                    className: \"nav-link text-light \".concat(currPage === \"/\" && \"active\"),\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"Home\"\n                })\n            }),\n            state.token != \"\" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"dropdown\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            className: \"btn dropdown-toggle text-light\",\n                            type: \"button\",\n                            id: \"dropdownMenuButton1\",\n                            \"data-bs-toggle\": \"dropdown\",\n                            \"aria-expanded\": \"false\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            },\n                            __self: this,\n                            children: state && state.user && state.user.name\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"ul\", {\n                            className: \"dropdown-menu\",\n                            \"aria-labelledby\": \"dropdownMenuButton1\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            },\n                            __self: this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 15\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/user/profile\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                            lineNumber: 43,\n                                            columnNumber: 17\n                                        },\n                                        __self: this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                            className: \"nav-link dropdown-item  \".concat(currPage === \"/user/profile\" && \"active\"),\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                                lineNumber: 44,\n                                                columnNumber: 19\n                                            },\n                                            __self: this,\n                                            children: \"Profile\"\n                                        })\n                                    })\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 15\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                        onClick: logout,\n                                        className: \"dropdown-item nav-link\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 19\n                                        },\n                                        __self: this,\n                                        children: \" Logout \"\n                                    })\n                                })\n                            ]\n                        })\n                    ]\n                })\n            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/login\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                            lineNumber: 56,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            className: \"nav-link text-light \".concat(currPage === \"/login\" && \"active\"),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: \"Login\"\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/register\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                            lineNumber: 59,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            className: \"nav-link text-light \".concat(currPage === \"/register\" && \"active\"),\n                            style: {\n                                borderRadius: '10px'\n                            },\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: \"Register\"\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n}\n_s(Nav, \"zcOYs/u4nDmFWqRhxPg97UdUhWc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\r\n    var _a, _b;\r\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n    // to extract CSS. For backwards compatibility, we need to check we're in a\r\n    // browser context before continuing.\r\n    if (typeof self !== 'undefined' &&\r\n        // AMP / No-JS mode does not inject these helpers:\r\n        '$RefreshHelpers$' in self) {\r\n        var currentExports = module.__proto__.exports;\r\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n        // This cannot happen in MainTemplate because the exports mismatch between\r\n        // templating and execution.\r\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n        // A module can be accepted automatically based on its exports, e.g. when\r\n        // it is a Refresh Boundary.\r\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n            // Save the previous exports on update so we can compare the boundary\r\n            // signatures.\r\n            module.hot.dispose(function (data) {\r\n                data.prevExports = currentExports;\r\n            });\r\n            // Unconditionally accept an update to this module, we'll check if it's\r\n            // still a Refresh Boundary later.\r\n            module.hot.accept();\r\n            // This field is set when the previous version of this module was a\r\n            // Refresh Boundary, letting us know we need to check for invalidation or\r\n            // enqueue an update.\r\n            if (prevExports !== null) {\r\n                // A boundary can become ineligible if its exports are incompatible\r\n                // with the previous exports.\r\n                //\r\n                // For example, if you add/remove/change exports, we'll want to\r\n                // re-execute the importing modules, and force those components to\r\n                // re-render. Similarly, if you convert a class component to a\r\n                // function, we want to invalidate the boundary.\r\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                    module.hot.invalidate();\r\n                }\r\n                else {\r\n                    self.$RefreshHelpers$.scheduleUpdate();\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            // Since we just executed the code for the module, it's possible that the\r\n            // new exports made it ineligible for being a boundary.\r\n            // We only care about the case when we were _previously_ a boundary,\r\n            // because we already accepted this update (accidental side effect).\r\n            var isNoLongerABoundary = prevExports !== null;\r\n            if (isNoLongerABoundary) {\r\n                module.hot.invalidate();\r\n            }\r\n        }\r\n    }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDOzRCQUFDRixTQUFTLEVBQUksQ0FBb0Isc0JBQXVDLE9BQXJDakIsUUFBUSxLQUFLLENBQVcsY0FBSSxDQUFROzRCQUFJK0IsS0FBSyxFQUFJLENBQUNDO2dDQUFBQSxZQUFZLEVBQUUsQ0FBTTs0QkFBQSxDQUFDOzs7Ozs7O3NDQUFFLENBQVE7Ozs7Ozs7QUFRakksQ0FBQztHQTVEUW5DLEdBQUc7O1FBR0tGLGtEQUFTOzs7S0FIakJFLEdBQUc7QUE2RFosK0RBQWVBLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdi5qcz84NjRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7VXNlckNvbnRleHR9IGZyb20gJy4uL2NvbnRleHQvaW5kZXgnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZnVuY3Rpb24gTmF2ICgpIHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gIGNvbnN0IFtjdXJyUGFnZSwgc2V0Q3VyclBhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgLy9Pbmx5IHVwZGF0aW5nIGlmIHdlIGFyZSBpbiBjbGllbnQgbW9kZSBvZiBuZXh0anNcclxuICAgIHByb2Nlc3MuYnJvd3NlciAmJiBzZXRDdXJyUGFnZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpOyBcclxuICAgIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICB9LCBbcHJvY2Vzcy5icm93c2VyICYmIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZV0pO1xyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhdXRoXCIpO1xyXG4gICAgc2V0U3RhdGUoe3VzZXI6IHt9LCB0b2tlbjogXCJcIn0pOyAvL3Jlc2V0dGluZyB1c2VyIGluZm9ybWF0aW9uXHJcbiAgICBjb25zb2xlLmxvZyhzdGF0ZSk7XHJcbiAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICA8bmF2IGNsYXNzTmFtZT1cIm5hdiBiZy1kYXJrIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtbGVmdCBwLTNcIj4gIFxyXG4gICAgICA8TGluayBocmVmID0gXCIvXCIgPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZSA9e2BuYXYtbGluayB0ZXh0LWxpZ2h0ICR7Y3VyclBhZ2UgPT09IFwiL1wiICYmIFwiYWN0aXZlXCJ9YH0+SG9tZTwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgIFxyXG4gICAgICBcclxuXHJcbiAgICAgIHsoc3RhdGUudG9rZW4gIT0gXCJcIikgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gZHJvcGRvd24tdG9nZ2xlIHRleHQtbGlnaHRcIiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJkcm9wZG93bk1lbnVCdXR0b24xXCIgZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgIHtzdGF0ZSAmJiBzdGF0ZS51c2VyICYmIHN0YXRlLnVzZXIubmFtZX1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwiZHJvcGRvd25NZW51QnV0dG9uMVwiPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWYgPSBcIi91c2VyL3Byb2ZpbGVcIiA+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZSA9IHtgbmF2LWxpbmsgZHJvcGRvd24taXRlbSAgJHtjdXJyUGFnZSA9PT0gXCIvdXNlci9wcm9maWxlXCIgJiYgXCJhY3RpdmVcIn1gfT5Qcm9maWxlPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPiAgICBcclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxsaT48YSBvbkNsaWNrID0ge2xvZ291dH0gY2xhc3NOYW1lID0gXCJkcm9wZG93bi1pdGVtIG5hdi1saW5rXCI+IExvZ291dCA8L2E+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApXHJcbiAgICAgIDpcclxuICAgICAgKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxMaW5rIGhyZWYgPSBcIi9sb2dpblwiID5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZSA9e2BuYXYtbGluayB0ZXh0LWxpZ2h0ICR7Y3VyclBhZ2UgPT09IFwiL2xvZ2luXCIgJiYgXCJhY3RpdmVcIn1gfT5Mb2dpbjwvYT5cclxuICAgICAgICA8L0xpbms+ICAgIFxyXG4gICAgICAgIDxMaW5rIGhyZWYgPSBcIi9yZWdpc3RlclwiID5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZSA9e2BuYXYtbGluayB0ZXh0LWxpZ2h0ICR7Y3VyclBhZ2UgPT09IFwiL3JlZ2lzdGVyXCIgJiYgXCJhY3RpdmVcIn1gfSBzdHlsZSA9IHt7Ym9yZGVyUmFkaXVzOiAnMTBweCd9fT5SZWdpc3RlcjwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgICBcclxuICA8L25hdj5cclxuXHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE5hdjsiXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsIlVzZXJDb250ZXh0IiwidXNlUm91dGVyIiwiUmVhY3QiLCJOYXYiLCJzdGF0ZSIsInNldFN0YXRlIiwiY3VyclBhZ2UiLCJzZXRDdXJyUGFnZSIsInJvdXRlciIsInByb2Nlc3MiLCJicm93c2VyIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImNvbnNvbGUiLCJsb2ciLCJsb2dvdXQiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwidXNlciIsInRva2VuIiwicHVzaCIsIm5hdiIsImNsYXNzTmFtZSIsImhyZWYiLCJhIiwiZGl2IiwiYnV0dG9uIiwidHlwZSIsImlkIiwiZGF0YS1icy10b2dnbGUiLCJhcmlhLWV4cGFuZGVkIiwibmFtZSIsInVsIiwiYXJpYS1sYWJlbGxlZGJ5IiwibGkiLCJvbkNsaWNrIiwic3R5bGUiLCJib3JkZXJSYWRpdXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

});