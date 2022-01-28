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

/***/ "./pages/user/profile.js":
/*!*******************************!*\
  !*** ./pages/user/profile.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Nick_Desktop_Coding_social_network_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Nick_Desktop_Coding_social_network_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Nick_Desktop_Coding_social_network_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/index.js */ \"./context/index.js\");\n/* harmony import */ var _components_routes_UserRoute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/routes/UserRoute */ \"./components/routes/UserRoute.js\");\n/* harmony import */ var _components_forms_CreatePostForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/forms/CreatePostForm */ \"./components/forms/CreatePostForm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_index_js__WEBPACK_IMPORTED_MODULE_3__.UserContext), state = ref[0], setState = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), content = ref1[0], setContent = ref1[1]; //Content of the post\n    var postSubmit = _asyncToGenerator(C_Users_Nick_Desktop_Coding_social_network_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n        var response;\n        return C_Users_Nick_Desktop_Coding_social_network_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    e.preventDefault(); //prevents client from refreshing\n                    _ctx.next = 3;\n                    return axios__WEBPACK_IMPORTED_MODULE_7___default().post('/create-post', {\n                        content: content\n                    });\n                case 3:\n                    response = _ctx.sent;\n                    console.log(\"create post response: \", response);\n                    if (response.status === 400) {\n                        react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error(response.data.message);\n                    } else {\n                        react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.success('Post created');\n                        setContent(\"\");\n                    }\n                case 6:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    var handleImage = _asyncToGenerator(C_Users_Nick_Desktop_Coding_social_network_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n        var file, formData, response;\n        return C_Users_Nick_Desktop_Coding_social_network_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    file = e.target.files[0]; //could my multiple files so index to grab the first image\n                    formData = new FormData();\n                    formData.append('image', file); //Adding image data\n                    formData.append(\"content\", content); //Adding caption data \n                    _ctx.next = 6;\n                    return axios__WEBPACK_IMPORTED_MODULE_7___default().post(\"upload-image\", formData);\n                case 6:\n                    response = _ctx.sent;\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_routes_UserRoute__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\user\\\\profile.js\",\n            lineNumber: 36,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                className: \"container-fluid\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\user\\\\profile.js\",\n                    lineNumber: 37,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                    className: \"row py-5 \",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\user\\\\profile.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                        className: \"col text-center\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\user\\\\profile.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                            className: \"display-1 text-center\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\user\\\\profile.js\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: \"Profile Page\"\n                        })\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                className: \"row py-3\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\user\\\\profile.js\",\n                    lineNumber: 45,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                        className: \"col-md-8\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\user\\\\profile.js\",\n                            lineNumber: 46,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_forms_CreatePostForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            content: content,\n                            setContent: setContent,\n                            postSubmit: postSubmit,\n                            handleImage: handleImage,\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\user\\\\profile.js\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                        className: \"col-md-4\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\user\\\\profile.js\",\n                            lineNumber: 53,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h2\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\user\\\\profile.js\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: \"SideBar\"\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(Home, \"VxJ1Zni6ZLPFmenHwkpVxcsgmKc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\r\n    var _a, _b;\r\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n    // to extract CSS. For backwards compatibility, we need to check we're in a\r\n    // browser context before continuing.\r\n    if (typeof self !== 'undefined' &&\r\n        // AMP / No-JS mode does not inject these helpers:\r\n        '$RefreshHelpers$' in self) {\r\n        var currentExports = module.__proto__.exports;\r\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n        // This cannot happen in MainTemplate because the exports mismatch between\r\n        // templating and execution.\r\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n        // A module can be accepted automatically based on its exports, e.g. when\r\n        // it is a Refresh Boundary.\r\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n            // Save the previous exports on update so we can compare the boundary\r\n            // signatures.\r\n            module.hot.dispose(function (data) {\r\n                data.prevExports = currentExports;\r\n            });\r\n            // Unconditionally accept an update to this module, we'll check if it's\r\n            // still a Refresh Boundary later.\r\n            module.hot.accept();\r\n            // This field is set when the previous version of this module was a\r\n            // Refresh Boundary, letting us know we need to check for invalidation or\r\n            // enqueue an update.\r\n            if (prevExports !== null) {\r\n                // A boundary can become ineligible if its exports are incompatible\r\n                // with the previous exports.\r\n                //\r\n                // For example, if you add/remove/change exports, we'll want to\r\n                // re-execute the importing modules, and force those components to\r\n                // re-render. Similarly, if you convert a class component to a\r\n                // function, we want to invalidate the boundary.\r\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                    module.hot.invalidate();\r\n                }\r\n                else {\r\n                    self.$RefreshHelpers$.scheduleUpdate();\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            // Since we just executed the code for the module, it's possible that the\r\n            // new exports made it ineligible for being a boundary.\r\n            // We only care about the case when we were _previously_ a boundary,\r\n            // because we already accepted this update (accidental side effect).\r\n            var isNoLongerABoundary = prevExports !== null;\r\n            if (isNoLongerABoundary) {\r\n                module.hot.invalidate();\r\n            }\r\n        }\r\n    }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL19OX0UvLi9wYWdlcy91c2VyL3Byb2ZpbGUuanM/YmRjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtVc2VyQ29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvaW5kZXguanNcIjtcclxuaW1wb3J0IFVzZXJSb3V0ZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvVXNlclJvdXRlXCI7XHJcbmltcG9ydCBDcmVhdGVQb3N0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm1zL0NyZWF0ZVBvc3RGb3JtXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZShcIlwiKTsgLy9Db250ZW50IG9mIHRoZSBwb3N0XHJcbiAgXHJcbiAgY29uc3QgcG9zdFN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vcHJldmVudHMgY2xpZW50IGZyb20gcmVmcmVzaGluZ1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvY3JlYXRlLXBvc3QnLCB7Y29udGVudH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJjcmVhdGUgcG9zdCByZXNwb25zZTogXCIsIHJlc3BvbnNlKTtcclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICB0b2FzdC5lcnJvcihyZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgdG9hc3Quc3VjY2VzcygnUG9zdCBjcmVhdGVkJylcclxuICAgICAgc2V0Q29udGVudChcIlwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUltYWdlID0gYXN5bmMgKGUpID0+e1xyXG4gICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdOyAvL2NvdWxkIG15IG11bHRpcGxlIGZpbGVzIHNvIGluZGV4IHRvIGdyYWIgdGhlIGZpcnN0IGltYWdlXHJcbiAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmaWxlKTsgLy9BZGRpbmcgaW1hZ2UgZGF0YVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiY29udGVudFwiLCBjb250ZW50KTsgLy9BZGRpbmcgY2FwdGlvbiBkYXRhIFxyXG4gICAgLy8gY29uc29sZS5sb2coWy4uLmZvcm1EYXRhXSk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJ1cGxvYWQtaW1hZ2VcIiwgZm9ybURhdGEpO1xyXG4gIH1cclxuICByZXR1cm4oXHJcbiAgICA8VXNlclJvdXRlPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcInJvdyBweS01IFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImNvbCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gXCJkaXNwbGF5LTEgdGV4dC1jZW50ZXJcIj5Qcm9maWxlIFBhZ2U8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWUgPSBcInJvdyBweS0zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImNvbC1tZC04XCI+XHJcbiAgICAgICAgICA8Q3JlYXRlUG9zdCBcclxuICAgICAgICAgIGNvbnRlbnQgPSB7Y29udGVudH0gXHJcbiAgICAgICAgICBzZXRDb250ZW50ID0ge3NldENvbnRlbnR9IFxyXG4gICAgICAgICAgcG9zdFN1Ym1pdCA9IHtwb3N0U3VibWl0fSBcclxuICAgICAgICAgIGhhbmRsZUltYWdlID0ge2hhbmRsZUltYWdlfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImNvbC1tZC00XCI+XHJcbiAgICAgICAgICA8aDI+U2lkZUJhcjwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Vc2VyUm91dGU+XHJcbiAgKTtcclxufTsgIFxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJVc2VyQ29udGV4dCIsIlVzZXJSb3V0ZSIsIkNyZWF0ZVBvc3QiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsInRvYXN0IiwiSG9tZSIsInJvdXRlciIsInN0YXRlIiwic2V0U3RhdGUiLCJjb250ZW50Iiwic2V0Q29udGVudCIsInBvc3RTdWJtaXQiLCJlIiwicmVzcG9uc2UiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwiZXJyb3IiLCJkYXRhIiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJoYW5kbGVJbWFnZSIsImZpbGUiLCJmb3JtRGF0YSIsInRhcmdldCIsImZpbGVzIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/user/profile.js\n");

/***/ })

});