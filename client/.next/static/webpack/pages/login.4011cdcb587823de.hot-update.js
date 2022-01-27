"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Nick_Desktop_Coding_social_network_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Nick_Desktop_Coding_social_network_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Nick_Desktop_Coding_social_network_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_forms_AuthForm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/forms/AuthForm.js */ \"./components/forms/AuthForm.js\");\n/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/index */ \"./context/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Login = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), email = ref[0], setEmail = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), pswd = ref1[0], setPswd = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), loading = ref2[0], setLoading = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_8__.UserContext), state = ref3[0], setState = ref3[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var handleSubmit = _asyncToGenerator(C_Users_Nick_Desktop_Coding_social_network_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n        var response;\n        return C_Users_Nick_Desktop_Coding_social_network_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    e.preventDefault(); //prevents browser from reloading\n                    // console.log(fname, lname, email, pswd, secret)\n                    setLoading(true);\n                    _ctx.next = 4;\n                    return axios__WEBPACK_IMPORTED_MODULE_3___default().post(\"\".concat(\"http://localhost:8000/api\", \"/login\"), {\n                        email: email,\n                        pswd: pswd\n                    });\n                case 4:\n                    response = _ctx.sent;\n                    console.log(\"Data received in login.js\", response);\n                    //Updating global state\n                    if (response.status == 200) {\n                        setState({\n                            user: response.data.user,\n                            token: response.data.token\n                        });\n                        //saving  token in local storage\n                        window.localStorage.setItem('auth', JSON.stringify(response.data));\n                        router.push(\"/\"); //redirects user to home page\n                    } else if (response.status == 400) {\n                        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(response.data.message);\n                        setLoading(false);\n                    }\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    //Bringing user to home page if there is already a JWT token\n    if (state && state.token) {\n        router.push(\"/\");\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        className: \"container-fluid\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\login.js\",\n            lineNumber: 48,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                className: \"row py-5 bg-secondary text-light\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\login.js\",\n                    lineNumber: 49,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                    className: \"col text-center\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\login.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\login.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: \"Login\"\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                className: \"row py-5\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\login.js\",\n                    lineNumber: 55,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                    className: \"col-md-6 offset-md-3\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\login.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_forms_AuthForm_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        handleSubmit: handleSubmit,\n                        email: email,\n                        setEmail: setEmail,\n                        pswd: pswd,\n                        setPswd: setPswd,\n                        loading: loading,\n                        page: \"login\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\login.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                className: \"row\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\login.js\",\n                    lineNumber: 69,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                    className: \"col\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\login.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"p\", {\n                        className: \"text-center\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\login.js\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: [\n                            \"Not yet registered?\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                href: \"/register\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\login.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"a\", {\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\login.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: \"Register\"\n                                })\n                            })\n                        ]\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                className: \"row\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\login.js\",\n                    lineNumber: 79,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                    className: \"col\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\login.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                        className: \"text-center\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\login.js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: \"/forgot-password\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\login.js\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"a\", {\n                                className: \"text-danger\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\login.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                },\n                                __self: _this,\n                                children: \"Forgot Password\"\n                            })\n                        })\n                    })\n                })\n            })\n        ]\n    }));\n};\n_s(Login, \"nUXpwaKT6Z68Mn7Jq76TsmLk//E=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\r\n    var _a, _b;\r\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n    // to extract CSS. For backwards compatibility, we need to check we're in a\r\n    // browser context before continuing.\r\n    if (typeof self !== 'undefined' &&\r\n        // AMP / No-JS mode does not inject these helpers:\r\n        '$RefreshHelpers$' in self) {\r\n        var currentExports = module.__proto__.exports;\r\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n        // This cannot happen in MainTemplate because the exports mismatch between\r\n        // templating and execution.\r\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n        // A module can be accepted automatically based on its exports, e.g. when\r\n        // it is a Refresh Boundary.\r\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n            // Save the previous exports on update so we can compare the boundary\r\n            // signatures.\r\n            module.hot.dispose(function (data) {\r\n                data.prevExports = currentExports;\r\n            });\r\n            // Unconditionally accept an update to this module, we'll check if it's\r\n            // still a Refresh Boundary later.\r\n            module.hot.accept();\r\n            // This field is set when the previous version of this module was a\r\n            // Refresh Boundary, letting us know we need to check for invalidation or\r\n            // enqueue an update.\r\n            if (prevExports !== null) {\r\n                // A boundary can become ineligible if its exports are incompatible\r\n                // with the previous exports.\r\n                //\r\n                // For example, if you add/remove/change exports, we'll want to\r\n                // re-execute the importing modules, and force those components to\r\n                // re-render. Similarly, if you convert a class component to a\r\n                // function, we want to invalidate the boundary.\r\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                    module.hot.invalidate();\r\n                }\r\n                else {\r\n                    self.$RefreshHelpers$.scheduleUpdate();\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            // Since we just executed the code for the module, it's possible that the\r\n            // new exports made it ineligible for being a boundary.\r\n            // We only care about the case when we were _previously_ a boundary,\r\n            // because we already accepted this update (accidental side effect).\r\n            var isNoLongerABoundary = prevExports !== null;\r\n            if (isNoLongerABoundary) {\r\n                module.hot.invalidate();\r\n            }\r\n        }\r\n    }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3dCQUNUWSxZQUFZLEVBQUlBLFlBQVk7d0JBQzVCVCxLQUFLLEVBQUVBLEtBQUs7d0JBQ1pDLFFBQVEsRUFBSUEsUUFBUTt3QkFDcEJDLElBQUksRUFBSUEsSUFBSTt3QkFDWkMsT0FBTyxFQUFJQSxPQUFPO3dCQUNsQkMsT0FBTyxFQUFJQSxPQUFPO3dCQUNsQjhCLElBQUksRUFBRyxDQUFPOzs7Ozs7Ozs7O2lGQUtqQkgsQ0FBRztnQkFBQ0MsU0FBUyxFQUFHLENBQUs7Ozs7Ozs7K0ZBQ25CRCxDQUFHO29CQUFDQyxTQUFTLEVBQUcsQ0FBSzs7Ozs7OztvR0FDbkJHLENBQUM7d0JBQUNILFNBQVMsRUFBRyxDQUFhOzs7Ozs7Ozs0QkFBQyxDQUFtQjs0QkFBQyxDQUFHO2lHQUNqRHJDLGtEQUFJO2dDQUFDeUMsSUFBSSxFQUFHLENBQVc7Ozs7Ozs7K0dBQ3JCQyxDQUFDOzs7Ozs7OzhDQUFDLENBQVE7Ozs7Ozs7aUZBTWxCTixDQUFHO2dCQUFDQyxTQUFTLEVBQUcsQ0FBSzs7Ozs7OzsrRkFDbkJELENBQUc7b0JBQUNDLFNBQVMsRUFBRyxDQUFLOzs7Ozs7O21HQUNuQkcsQ0FBQzt3QkFBQ0gsU0FBUyxFQUFHLENBQWE7Ozs7Ozs7dUdBQ3pCckMsa0RBQUk7NEJBQUN5QyxJQUFJLEVBQUcsQ0FBa0I7Ozs7Ozs7MkdBQzVCQyxDQUFDO2dDQUFDTCxTQUFTLEVBQUcsQ0FBYTs7Ozs7OzswQ0FBQyxDQUFlOzs7Ozs7OztBQU8xRCxDQUFDO0dBakZLakMsS0FBSzs7UUFPTUgsa0RBQVM7OztLQVBwQkcsS0FBSztBQW1GWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xvZ2luLmpzPzgxYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCB7TW9kYWx9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEF1dGhGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybXMvQXV0aEZvcm0uanMnO1xyXG5pbXBvcnQge1VzZXJDb250ZXh0fSBmcm9tICcuLi9jb250ZXh0L2luZGV4JztcclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bzd2QsIHNldFBzd2RdID0gdXNlU3RhdGUoJycpOyBcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgXHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+e1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvL3ByZXZlbnRzIGJyb3dzZXIgZnJvbSByZWxvYWRpbmdcclxuICAgIC8vIGNvbnNvbGUubG9nKGZuYW1lLCBsbmFtZSwgZW1haWwsIHBzd2QsIHNlY3JldClcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJfS9sb2dpbmAsIHtcclxuICAgIGVtYWlsLFxyXG4gICAgcHN3ZCwgICBcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJEYXRhIHJlY2VpdmVkIGluIGxvZ2luLmpzXCIsIHJlc3BvbnNlKTtcclxuICAgIC8vVXBkYXRpbmcgZ2xvYmFsIHN0YXRlXHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCl7XHJcbiAgICAgIHNldFN0YXRlKHtcclxuICAgICAgdXNlcjogcmVzcG9uc2UuZGF0YS51c2VyLFxyXG4gICAgICB0b2tlbjogcmVzcG9uc2UuZGF0YS50b2tlbiwgXHJcbiAgICAgIH0pO1xyXG4gICAgICAvL3NhdmluZyAgdG9rZW4gaW4gbG9jYWwgc3RvcmFnZVxyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGgnLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSk7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTsgLy9yZWRpcmVjdHMgdXNlciB0byBob21lIHBhZ2VcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSA0MDApe1xyXG4gICAgICB0b2FzdC5lcnJvcihyZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvL0JyaW5naW5nIHVzZXIgdG8gaG9tZSBwYWdlIGlmIHRoZXJlIGlzIGFscmVhZHkgYSBKV1QgdG9rZW5cclxuICBpZiAoc3RhdGUgJiYgc3RhdGUudG9rZW4pe1xyXG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lID0gJ2NvbnRhaW5lci1mbHVpZCc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lID1cInJvdyBweS01IGJnLXNlY29uZGFyeSB0ZXh0LWxpZ2h0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAnY29sIHRleHQtY2VudGVyJz5cclxuICAgICAgICAgIDxoMT5Mb2dpbjwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWUgPSAncm93IHB5LTUnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ2NvbC1tZC02IG9mZnNldC1tZC0zJz5cclxuICAgICAgICAgIDxBdXRoRm9ybSBcclxuICAgICAgICAgIGhhbmRsZVN1Ym1pdCA9IHtoYW5kbGVTdWJtaXR9IFxyXG4gICAgICAgICAgZW1haWw9e2VtYWlsfVxyXG4gICAgICAgICAgc2V0RW1haWwgPSB7c2V0RW1haWx9XHJcbiAgICAgICAgICBwc3dkID0ge3Bzd2R9XHJcbiAgICAgICAgICBzZXRQc3dkID0ge3NldFBzd2R9XHJcbiAgICAgICAgICBsb2FkaW5nID0ge2xvYWRpbmd9XHJcbiAgICAgICAgICBwYWdlID0gXCJsb2dpblwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiY29sXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWUgPSBcInRleHQtY2VudGVyXCI+Tm90IHlldCByZWdpc3RlcmVkP3tcIiBcIn1cclxuICAgICAgICAgICAgPExpbmsgaHJlZiA9IFwiL3JlZ2lzdGVyXCI+XHJcbiAgICAgICAgICAgICAgPGE+UmVnaXN0ZXI8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImNvbFwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lID0gXCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmID0gXCIvZm9yZ290LXBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lID0gXCJ0ZXh0LWRhbmdlclwiPkZvcmdvdCBQYXNzd29yZDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlQ29udGV4dCIsImF4aW9zIiwidG9hc3QiLCJNb2RhbCIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJBdXRoRm9ybSIsIlVzZXJDb250ZXh0IiwiTG9naW4iLCJlbWFpbCIsInNldEVtYWlsIiwicHN3ZCIsInNldFBzd2QiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInN0YXRlIiwic2V0U3RhdGUiLCJyb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlIiwicmVzcG9uc2UiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsInVzZXIiLCJkYXRhIiwidG9rZW4iLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInB1c2giLCJlcnJvciIsIm1lc3NhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInBhZ2UiLCJwIiwiaHJlZiIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ })

});