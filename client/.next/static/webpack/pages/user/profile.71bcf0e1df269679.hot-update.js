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

/***/ "./components/routes/UserRoute.js":
/*!****************************************!*\
  !*** ./components/routes/UserRoute.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Nick_Desktop_Coding_social_network_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Nick_Desktop_Coding_social_network_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Nick_Desktop_Coding_social_network_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/index.js */ \"./context/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction UserRoute(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), ok = ref[0], setOk = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_index_js__WEBPACK_IMPORTED_MODULE_3__.UserContext), state = ref1[0], setState = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(state);\n        if (state && state.token === \"\") {\n            getCurrentUser();\n        }\n        ;\n    }, [\n        state && state.token\n    ]);\n    var getCurrentUser = _asyncToGenerator(C_Users_Nick_Desktop_Coding_social_network_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var data;\n        return C_Users_Nick_Desktop_Coding_social_network_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    _ctx.next = 3;\n                    return axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"/current-user\");\n                case 3:\n                    data = _ctx.sent.data;\n                    if (data.ok) setOk(true);\n                    _ctx.next = 10;\n                    break;\n                case 7:\n                    _ctx.prev = 7;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    router.push('/login') //making user log in if the current user doesn't match token\n                    ;\n                case 10:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                7\n            ]\n        ]);\n    }));\n    //Handles the case where the user tries to access the page with nothing in the state\n     true && state === {\n        user: {\n        },\n        token: \"\"\n    } && setTimeout(function() {\n        getCurrentUser();\n    }, 1000);\n    return !ok ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        style: {\n            overflow: 'hidden'\n        },\n        __source: {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\routes\\\\UserRoute.js\",\n            lineNumber: 33,\n            columnNumber: 4\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.SyncOutlined, {\n            spin: true,\n            className: \"d-flex justify-content-center display-1 text-primary\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\routes\\\\UserRoute.js\",\n                lineNumber: 34,\n                columnNumber: 3\n            },\n            __self: this\n        })\n    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: children\n    });\n}\n_s(UserRoute, \"vvndkmmTgUZGTWJhHxqqVbyM5o0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = UserRoute;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserRoute);\nvar _c;\n$RefreshReg$(_c, \"UserRoute\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JvdXRlcy9Vc2VyUm91dGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFxRDtBQUNIO0FBQ3pCO0FBQ1k7QUFDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUVyQ08sU0FBUyxDQUFDLEtBQVUsRUFBRSxDQUFDO1FBQVpDLFFBQVEsR0FBVCxLQUFVLENBQVRBLFFBQVE7O0lBQzFCLEdBQUssQ0FBZVAsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBM0JRLEVBQUUsR0FBV1IsR0FBZSxLQUF4QlMsS0FBSyxHQUFJVCxHQUFlO0lBQ25DLEdBQUssQ0FBQ1UsTUFBTSxHQUFHTixzREFBUztJQUN4QixHQUFLLENBQXFCSCxJQUF1QixHQUF2QkEsaURBQVUsQ0FBQ0MsMERBQVcsR0FBekNTLEtBQUssR0FBY1YsSUFBdUIsS0FBbkNXLFFBQVEsR0FBSVgsSUFBdUI7SUFFakRGLGdEQUFTLENBQUMsUUFDWCxHQURlLENBQUM7UUFDYmMsT0FBTyxDQUFDQyxHQUFHLENBQUNILEtBQUs7UUFDakIsRUFBRSxFQUFFQSxLQUFLLElBQUlBLEtBQUssQ0FBQ0ksS0FBSyxLQUFLLENBQUUsR0FBRyxDQUFDQztZQUFBQSxjQUFjO1FBQUUsQ0FBQzs7SUFDdEQsQ0FBQyxFQUFDLENBQUNMO1FBQUFBLEtBQUssSUFBSUEsS0FBSyxDQUFDSSxLQUFLO0lBQUEsQ0FBQztJQUV4QixHQUFLLENBQUNDLGNBQWMsbUtBQUcsUUFBUSxXQUFHLENBQUM7WUFFeEJDLElBQUk7Ozs7OzsyQkFBVWQsZ0RBQVMsQ0FBRSxDQUFhOztvQkFBdENjLElBQUksYUFBSkEsSUFBSTtvQkFDWCxFQUFFLEVBQUVBLElBQUksQ0FBQ1QsRUFBRSxFQUFFQyxLQUFLLENBQUMsSUFBSTs7Ozs7O29CQUd2QkMsTUFBTSxDQUFDUyxJQUFJLENBQUMsQ0FBUSxRQUFFLENBQTREOzs7Ozs7Ozs7Ozs7SUFFdEYsQ0FBQztJQUVELEVBQW9GO0lBQ3BGQyxLQUFlLElBQUlULEtBQUssS0FBSyxDQUFDVztRQUFBQSxJQUFJLEVBQUUsQ0FBQztRQUFBLENBQUM7UUFBRVAsS0FBSyxFQUFHLENBQUU7SUFBQSxDQUFDLElBQUlRLFVBQVUsQ0FBQyxRQUNuRSxHQUR1RSxDQUFDO1FBQ3JFUCxjQUFjO0lBQ2hCLENBQUMsRUFBRSxJQUFJO0lBRVAsTUFBTSxFQUFFUixFQUFFLHdFQUNSZ0IsQ0FBRztRQUFDQyxLQUFLLEVBQUcsQ0FBQ0M7WUFBQUEsUUFBUSxFQUFFLENBQVE7UUFBQSxDQUFDOzs7Ozs7O3VGQUNqQ3JCLDJEQUFZO1lBQ1hzQixJQUFJO1lBQ0pDLFNBQVMsRUFBRyxDQUFzRDs7Ozs7Ozs7O2tCQUcvRHJCLFFBQVE7O0FBQ2YsQ0FBQztHQWpDUUQsU0FBUzs7UUFFREYsa0RBQVM7OztLQUZqQkUsU0FBUztBQW1DbEIsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3JvdXRlcy9Vc2VyUm91dGUuanM/NzVkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtVc2VyQ29udGV4dH0gZnJvbSAnLi4vLi4vY29udGV4dC9pbmRleC5qcydcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7U3luY091dGxpbmVkfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIFVzZXJSb3V0ZSh7Y2hpbGRyZW59KSB7XHJcbiAgY29uc3QgW29rLCBzZXRPa10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBjb25zb2xlLmxvZyhzdGF0ZSk7XHJcbiAgICBpZiAoc3RhdGUgJiYgc3RhdGUudG9rZW4gPT09IFwiXCIgKSB7Z2V0Q3VycmVudFVzZXIoKX07XHJcbiAgfSxbc3RhdGUgJiYgc3RhdGUudG9rZW5dKTtcclxuXHJcbiAgY29uc3QgZ2V0Q3VycmVudFVzZXIgPSBhc3luYyAoKSA9PntcclxuICAgIHRyeXtcclxuICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvY3VycmVudC11c2VyYCk7XHJcbiAgICAgIGlmIChkYXRhLm9rKSBzZXRPayh0cnVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoKGVycil7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKSAvL21ha2luZyB1c2VyIGxvZyBpbiBpZiB0aGUgY3VycmVudCB1c2VyIGRvZXNuJ3QgbWF0Y2ggdG9rZW5cclxuICAgIH0gXHJcbiAgfVxyXG5cclxuICAvL0hhbmRsZXMgdGhlIGNhc2Ugd2hlcmUgdGhlIHVzZXIgdHJpZXMgdG8gYWNjZXNzIHRoZSBwYWdlIHdpdGggbm90aGluZyBpbiB0aGUgc3RhdGVcclxuICBwcm9jZXNzLmJyb3dzZXIgJiYgc3RhdGUgPT09IHt1c2VyOiB7fSwgdG9rZW4gOiBcIlwifSAmJiBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICBnZXRDdXJyZW50VXNlcigpO1xyXG4gIH0sIDEwMDApXHJcblxyXG4gIHJldHVybiAhb2sgPyBcclxuICAoPGRpdiBzdHlsZSA9e3tvdmVyZmxvdzogJ2hpZGRlbid9fT5cclxuICA8U3luY091dGxpbmVkIFxyXG4gICAgc3BpbiBcclxuICAgIGNsYXNzTmFtZSA9IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgZGlzcGxheS0xIHRleHQtcHJpbWFyeVwiXHJcbiAgICAvPlxyXG4gICAgPC9kaXY+KSA6IFxyXG4gICAoPD57Y2hpbGRyZW59PC8+KSBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclJvdXRlO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJheGlvcyIsInVzZVJvdXRlciIsIlN5bmNPdXRsaW5lZCIsIlVzZXJSb3V0ZSIsImNoaWxkcmVuIiwib2siLCJzZXRPayIsInJvdXRlciIsInN0YXRlIiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwidG9rZW4iLCJnZXRDdXJyZW50VXNlciIsImRhdGEiLCJnZXQiLCJwdXNoIiwicHJvY2VzcyIsImJyb3dzZXIiLCJ1c2VyIiwic2V0VGltZW91dCIsImRpdiIsInN0eWxlIiwib3ZlcmZsb3ciLCJzcGluIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/routes/UserRoute.js\n");

/***/ })

});