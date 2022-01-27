"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/forgot-password",{

/***/ "./pages/forgot-password.js":
/*!**********************************!*\
  !*** ./pages/forgot-password.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Nick_Desktop_Coding_social_network_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Nick_Desktop_Coding_social_network_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Nick_Desktop_Coding_social_network_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_forms_ForgotPasswordForm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/forms/ForgotPasswordForm.js */ \"./components/forms/ForgotPasswordForm.js\");\n/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/index.js */ \"./context/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ForgotPassword = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), email = ref[0], setEmail = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), newPswd = ref1[0], setNewPswd = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), secret = ref2[0], setSecret = ref2[1]; //This variable holds the answer to the password recovery question\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), ok = ref3[0], setOk = ref3[1]; //Variable is used to hold the value of whether a use was succesfully registered or not \n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), loading = ref4[0], setLoading = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_index_js__WEBPACK_IMPORTED_MODULE_8__.UserContext), state = ref5[0], setState = ref5[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var handleSubmit = _asyncToGenerator(C_Users_Nick_Desktop_Coding_social_network_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n        var response;\n        return C_Users_Nick_Desktop_Coding_social_network_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    e.preventDefault(); //prevents browser from reloading\n                    _ctx.prev = 1;\n                    setLoading(true);\n                    _ctx.next = 5;\n                    return axios__WEBPACK_IMPORTED_MODULE_4___default().post(\"/forgot-password\", {\n                        email: email,\n                        newPswd: newPswd,\n                        secret: secret\n                    }).catch(function(err) {\n                        console.log(\"Axios Catch\", err.response);\n                    });\n                case 5:\n                    response = _ctx.sent;\n                    //console.log(\"forgot password data: \", response);\n                    if (response.status === 400) {\n                        react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(response.data.message);\n                        setLoading(false);\n                    }\n                    _ctx.next = 12;\n                    break;\n                case 9:\n                    _ctx.prev = 9;\n                    _ctx.t0 = _ctx[\"catch\"](1);\n                    console.log(\"Catching error:\", _ctx.t0.response);\n                case 12:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                1,\n                9\n            ]\n        ]);\n    // setEmail(\"\");\n    // setPswd(\"\");\n    // setSecret(\"\");\n    // setOk(data.ok);\n    // setLoading(false);\n    }));\n    if (state && state.token) {\n        router.push(\"/\");\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        className: \"container-fluid\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\forgot-password.js\",\n            lineNumber: 53,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                className: \"row py-5 bg-secondary text-light\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\forgot-password.js\",\n                    lineNumber: 54,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                    className: \"col text-center\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\forgot-password.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\forgot-password.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: \"Forgot Password\"\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                className: \"row py-5\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\forgot-password.js\",\n                    lineNumber: 60,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                    className: \"col-md-6 offset-md-3\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\forgot-password.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_forms_ForgotPasswordForm_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        handleSubmit: handleSubmit,\n                        email: email,\n                        setEmail: setEmail,\n                        newPswd: newPswd,\n                        setNewPswd: setNewPswd,\n                        secret: secret,\n                        setSecret: setSecret,\n                        loading: loading,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\forgot-password.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                className: \"row\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\forgot-password.js\",\n                    lineNumber: 76,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                    className: \"col\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\forgot-password.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_9__.Modal, {\n                        title: \"Congratulations\",\n                        visible: ok,\n                        onCancel: function() {\n                            setOk(false);\n                        },\n                        footer: null,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\forgot-password.js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\forgot-password.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: \"Succesfully Reset Password!\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                href: \"/login\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\forgot-password.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"a\", {\n                                    className: \"btn btn-primary btn-sm\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\forgot-password.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: \"Login\"\n                                })\n                            })\n                        ]\n                    })\n                })\n            })\n        ]\n    }));\n};\n_s(ForgotPassword, \"5bxrD8aw7MzT37B4epQ+or00JmI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = ForgotPassword;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ForgotPassword);\nvar _c;\n$RefreshReg$(_c, \"ForgotPassword\");\n\n\n;\r\n    var _a, _b;\r\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n    // to extract CSS. For backwards compatibility, we need to check we're in a\r\n    // browser context before continuing.\r\n    if (typeof self !== 'undefined' &&\r\n        // AMP / No-JS mode does not inject these helpers:\r\n        '$RefreshHelpers$' in self) {\r\n        var currentExports = module.__proto__.exports;\r\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n        // This cannot happen in MainTemplate because the exports mismatch between\r\n        // templating and execution.\r\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n        // A module can be accepted automatically based on its exports, e.g. when\r\n        // it is a Refresh Boundary.\r\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n            // Save the previous exports on update so we can compare the boundary\r\n            // signatures.\r\n            module.hot.dispose(function (data) {\r\n                data.prevExports = currentExports;\r\n            });\r\n            // Unconditionally accept an update to this module, we'll check if it's\r\n            // still a Refresh Boundary later.\r\n            module.hot.accept();\r\n            // This field is set when the previous version of this module was a\r\n            // Refresh Boundary, letting us know we need to check for invalidation or\r\n            // enqueue an update.\r\n            if (prevExports !== null) {\r\n                // A boundary can become ineligible if its exports are incompatible\r\n                // with the previous exports.\r\n                //\r\n                // For example, if you add/remove/change exports, we'll want to\r\n                // re-execute the importing modules, and force those components to\r\n                // re-render. Similarly, if you convert a class component to a\r\n                // function, we want to invalidate the boundary.\r\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                    module.hot.invalidate();\r\n                }\r\n                else {\r\n                    self.$RefreshHelpers$.scheduleUpdate();\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            // Since we just executed the code for the module, it's possible that the\r\n            // new exports made it ineligible for being a boundary.\r\n            // We only care about the case when we were _previously_ a boundary,\r\n            // because we already accepted this update (accidental side effect).\r\n            var isNoLongerABoundary = prevExports !== null;\r\n            if (isNoLongerABoundary) {\r\n                module.hot.invalidate();\r\n            }\r\n        }\r\n    }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O29CQUFDQyxTQUFTLEVBQUcsQ0FBc0I7Ozs7Ozs7bUdBQ3BDakMsK0VBQWtCO3dCQUNuQmlCLFlBQVksRUFBSUEsWUFBWTt3QkFFNUJiLEtBQUssRUFBRUEsS0FBSzt3QkFDWkMsUUFBUSxFQUFJQSxRQUFRO3dCQUNwQkMsT0FBTyxFQUFJQSxPQUFPO3dCQUNsQkMsVUFBVSxFQUFJQSxVQUFVO3dCQUN4QkMsTUFBTSxFQUFJQSxNQUFNO3dCQUNoQkMsU0FBUyxFQUFJQSxTQUFTO3dCQUN0QkcsT0FBTyxFQUFJQSxPQUFPOzs7Ozs7Ozs7O2lGQUtyQm9CLENBQUc7Z0JBQUNDLFNBQVMsRUFBRSxDQUFLOzs7Ozs7OytGQUNsQkQsQ0FBRztvQkFBQ0MsU0FBUyxFQUFHLENBQUs7Ozs7Ozs7b0dBQ25CbkMsdUNBQUs7d0JBQUNxQyxLQUFLLEVBQUcsQ0FBaUI7d0JBQUNDLE9BQU8sRUFBSTFCLEVBQUU7d0JBQUUyQixRQUFRLEVBQUksUUFBUSxHQUFKLENBQUMxQjs0QkFBQUEsS0FBSyxDQUFDLEtBQUs7d0JBQUMsQ0FBQzt3QkFBRTJCLE1BQU0sRUFBSSxJQUFJOzs7Ozs7OztpR0FDM0ZDLENBQUM7Ozs7Ozs7MENBQUMsQ0FFSDs7aUdBQ0N4QyxrREFBSTtnQ0FBQ3lDLElBQUksRUFBRyxDQUFROzs7Ozs7OytHQUNsQkMsQ0FBQztvQ0FBQ1IsU0FBUyxFQUFHLENBQXdCOzs7Ozs7OzhDQUFDLENBQUs7Ozs7Ozs7OztBQU8zRCxDQUFDO0dBL0VLOUIsY0FBYzs7UUFPSFIsa0RBQVM7OztLQVBwQlEsY0FBYztBQWlGcEIsK0RBQWVBLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9mb3Jnb3QtcGFzc3dvcmQuanM/MWIyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQge01vZGFsfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IEZvcmdvdFBhc3N3b3JkRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm1zL0ZvcmdvdFBhc3N3b3JkRm9ybS5qcydcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9pbmRleC5qc1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuY29uc3QgRm9yZ290UGFzc3dvcmQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW25ld1Bzd2QsIHNldE5ld1Bzd2RdID0gdXNlU3RhdGUoJycpOyBcclxuICBjb25zdCBbc2VjcmV0LCBzZXRTZWNyZXRdID0gdXNlU3RhdGUoJycpOyAgLy9UaGlzIHZhcmlhYmxlIGhvbGRzIHRoZSBhbnN3ZXIgdG8gdGhlIHBhc3N3b3JkIHJlY292ZXJ5IHF1ZXN0aW9uXHJcbiAgY29uc3QgW29rLCBzZXRPa10gPSB1c2VTdGF0ZShmYWxzZSk7IC8vVmFyaWFibGUgaXMgdXNlZCB0byBob2xkIHRoZSB2YWx1ZSBvZiB3aGV0aGVyIGEgdXNlIHdhcyBzdWNjZXNmdWxseSByZWdpc3RlcmVkIG9yIG5vdCBcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT57XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vcHJldmVudHMgYnJvd3NlciBmcm9tIHJlbG9hZGluZ1xyXG4gICAgLy8gY29uc29sZS5sb2coZm5hbWUsIGxuYW1lLCBlbWFpbCwgcHN3ZCwgc2VjcmV0KVxyXG4gICAgdHJ5e1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYC9mb3Jnb3QtcGFzc3dvcmRgLCB7XHJcbiAgICAgIGVtYWlsLFxyXG4gICAgICBuZXdQc3dkLFxyXG4gICAgICBzZWNyZXQsXHJcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQXhpb3MgQ2F0Y2hcIixlcnIucmVzcG9uc2UpO1xyXG4gICAgICB9KTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcImZvcmdvdCBwYXNzd29yZCBkYXRhOiBcIiwgcmVzcG9uc2UpO1xyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDApe1xyXG4gICAgICAgIHRvYXN0LmVycm9yKHJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgY29uc29sZS5sb2coXCJDYXRjaGluZyBlcnJvcjpcIixlcnIucmVzcG9uc2UpO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgLy8gc2V0RW1haWwoXCJcIik7XHJcbiAgICAvLyBzZXRQc3dkKFwiXCIpO1xyXG4gICAgLy8gc2V0U2VjcmV0KFwiXCIpO1xyXG4gICAgLy8gc2V0T2soZGF0YS5vayk7XHJcbiAgICAvLyBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICBcclxuICB9XHJcblxyXG4gIGlmIChzdGF0ZSAmJiBzdGF0ZS50b2tlbil7XHJcbiAgICByb3V0ZXIucHVzaChcIi9cIilcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lID0gJ2NvbnRhaW5lci1mbHVpZCc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lID1cInJvdyBweS01IGJnLXNlY29uZGFyeSB0ZXh0LWxpZ2h0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAnY29sIHRleHQtY2VudGVyJz5cclxuICAgICAgICAgIDxoMT5Gb3Jnb3QgUGFzc3dvcmQ8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ3JvdyBweS01Jz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICdjb2wtbWQtNiBvZmZzZXQtbWQtMyc+XHJcbiAgICAgICAgICA8Rm9yZ290UGFzc3dvcmRGb3JtIFxyXG4gICAgICAgICAgaGFuZGxlU3VibWl0ID0ge2hhbmRsZVN1Ym1pdH0gXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGVtYWlsPXtlbWFpbH1cclxuICAgICAgICAgIHNldEVtYWlsID0ge3NldEVtYWlsfVxyXG4gICAgICAgICAgbmV3UHN3ZCA9IHtuZXdQc3dkfVxyXG4gICAgICAgICAgc2V0TmV3UHN3ZCA9IHtzZXROZXdQc3dkfVxyXG4gICAgICAgICAgc2VjcmV0ID0ge3NlY3JldH1cclxuICAgICAgICAgIHNldFNlY3JldCA9IHtzZXRTZWNyZXR9XHJcbiAgICAgICAgICBsb2FkaW5nID0ge2xvYWRpbmd9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lID1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJjb2xcIj5cclxuICAgICAgICAgIDxNb2RhbCB0aXRsZSA9IFwiQ29uZ3JhdHVsYXRpb25zXCIgdmlzaWJsZSA9IHtva30gb25DYW5jZWwgPSB7KCk9PntzZXRPayhmYWxzZSl9fSBmb290ZXIgPSB7bnVsbH0+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIFN1Y2Nlc2Z1bGx5IFJlc2V0IFBhc3N3b3JkIVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWYgPSBcIi9sb2dpblwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiPkxvZ2luPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9yZ290UGFzc3dvcmQ7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsInRvYXN0IiwiTW9kYWwiLCJMaW5rIiwiRm9yZ290UGFzc3dvcmRGb3JtIiwiVXNlckNvbnRleHQiLCJSb3V0ZXIiLCJGb3Jnb3RQYXNzd29yZCIsImVtYWlsIiwic2V0RW1haWwiLCJuZXdQc3dkIiwic2V0TmV3UHN3ZCIsInNlY3JldCIsInNldFNlY3JldCIsIm9rIiwic2V0T2siLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInN0YXRlIiwic2V0U3RhdGUiLCJyb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlIiwicmVzcG9uc2UiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJlcnJvciIsImRhdGEiLCJtZXNzYWdlIiwidG9rZW4iLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ0aXRsZSIsInZpc2libGUiLCJvbkNhbmNlbCIsImZvb3RlciIsInAiLCJocmVmIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/forgot-password.js\n");

/***/ })

});