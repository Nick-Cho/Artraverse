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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Nick_Desktop_Coding_social_network_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Nick_Desktop_Coding_social_network_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Nick_Desktop_Coding_social_network_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/index.js */ \"./context/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction UserRoute(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), ok = ref[0], setOk = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_index_js__WEBPACK_IMPORTED_MODULE_3__.UserContext), state = ref1[0], setState = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(state);\n        if (state) {\n            getCurrentUser();\n        }\n        ;\n    }, [\n        state && state.token\n    ]);\n    var getCurrentUser = _asyncToGenerator(C_Users_Nick_Desktop_Coding_social_network_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var data;\n        return C_Users_Nick_Desktop_Coding_social_network_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    _ctx.next = 3;\n                    return axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"\".concat(\"http://localhost:8000/api\", \"/current-user\"));\n                case 3:\n                    data = _ctx.sent.data;\n                    console.log(data);\n                    if (data.ok) setOk(true);\n                    _ctx.next = 11;\n                    break;\n                case 8:\n                    _ctx.prev = 8;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    router.push('/login') //making user log in if the current user doesn't match token\n                    ;\n                case 11:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                8\n            ]\n        ]);\n    }));\n    //Handles the case where the user tries to access the page with nothing in the state\n     true && state === {\n        token: \"\"\n    } && setTimeout(function() {\n        getCurrentUser();\n    }, 1200);\n    return !ok ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        style: {\n            overflow: 'hidden'\n        },\n        __source: {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\routes\\\\UserRoute.js\",\n            lineNumber: 36,\n            columnNumber: 4\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.SyncOutlined, {\n            spin: true,\n            className: \"d-flex justify-content-center display-1 text-primary\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\routes\\\\UserRoute.js\",\n                lineNumber: 37,\n                columnNumber: 3\n            },\n            __self: this\n        })\n    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: children\n    });\n}\n_s(UserRoute, \"vvndkmmTgUZGTWJhHxqqVbyM5o0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = UserRoute;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserRoute);\nvar _c;\n$RefreshReg$(_c, \"UserRoute\");\n\n\n;\r\n    var _a, _b;\r\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n    // to extract CSS. For backwards compatibility, we need to check we're in a\r\n    // browser context before continuing.\r\n    if (typeof self !== 'undefined' &&\r\n        // AMP / No-JS mode does not inject these helpers:\r\n        '$RefreshHelpers$' in self) {\r\n        var currentExports = module.__proto__.exports;\r\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n        // This cannot happen in MainTemplate because the exports mismatch between\r\n        // templating and execution.\r\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n        // A module can be accepted automatically based on its exports, e.g. when\r\n        // it is a Refresh Boundary.\r\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n            // Save the previous exports on update so we can compare the boundary\r\n            // signatures.\r\n            module.hot.dispose(function (data) {\r\n                data.prevExports = currentExports;\r\n            });\r\n            // Unconditionally accept an update to this module, we'll check if it's\r\n            // still a Refresh Boundary later.\r\n            module.hot.accept();\r\n            // This field is set when the previous version of this module was a\r\n            // Refresh Boundary, letting us know we need to check for invalidation or\r\n            // enqueue an update.\r\n            if (prevExports !== null) {\r\n                // A boundary can become ineligible if its exports are incompatible\r\n                // with the previous exports.\r\n                //\r\n                // For example, if you add/remove/change exports, we'll want to\r\n                // re-execute the importing modules, and force those components to\r\n                // re-render. Similarly, if you convert a class component to a\r\n                // function, we want to invalidate the boundary.\r\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                    module.hot.invalidate();\r\n                }\r\n                else {\r\n                    self.$RefreshHelpers$.scheduleUpdate();\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            // Since we just executed the code for the module, it's possible that the\r\n            // new exports made it ineligible for being a boundary.\r\n            // We only care about the case when we were _previously_ a boundary,\r\n            // because we already accepted this update (accidental side effect).\r\n            var isNoLongerABoundary = prevExports !== null;\r\n            if (isNoLongerABoundary) {\r\n                module.hot.invalidate();\r\n            }\r\n        }\r\n    }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JvdXRlcy9Vc2VyUm91dGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFxRDtBQUNIO0FBQ3pCO0FBQ1k7QUFDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUVyQ08sU0FBUyxDQUFDLEtBQVUsRUFBRSxDQUFDO1FBQVpDLFFBQVEsR0FBVCxLQUFVLENBQVRBLFFBQVE7O0lBQzFCLEdBQUssQ0FBZVAsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBM0JRLEVBQUUsR0FBV1IsR0FBZSxLQUF4QlMsS0FBSyxHQUFJVCxHQUFlO0lBQ25DLEdBQUssQ0FBQ1UsTUFBTSxHQUFHTixzREFBUztJQUN4QixHQUFLLENBQXFCSCxJQUF1QixHQUF2QkEsaURBQVUsQ0FBQ0MsMERBQVcsR0FBekNTLEtBQUssR0FBY1YsSUFBdUIsS0FBbkNXLFFBQVEsR0FBSVgsSUFBdUI7SUFFakRGLGdEQUFTLENBQUMsUUFDWCxHQURlLENBQUM7UUFDYmMsT0FBTyxDQUFDQyxHQUFHLENBQUNILEtBQUs7UUFDakIsRUFBRSxFQUFFQSxLQUFLLEVBQUUsQ0FBQztZQUNWSSxjQUFjO1FBQ2hCLENBQUM7O0lBQ0gsQ0FBQyxFQUFDLENBQUNKO1FBQUFBLEtBQUssSUFBSUEsS0FBSyxDQUFDSyxLQUFLO0lBQUEsQ0FBQztJQUV4QixHQUFLLENBQUNELGNBQWMsbUtBQUcsUUFBUSxXQUFHLENBQUM7WUFFeEJFLElBQUk7Ozs7OzsyQkFBVWQsZ0RBQVMsQ0FBRSxHQUE4QixNQUFhLENBQXpDZ0IsMkJBQTJCLEVBQUMsQ0FBYTs7b0JBQXBFRixJQUFJLGFBQUpBLElBQUk7b0JBQ1hKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxJQUFJO29CQUNoQixFQUFFLEVBQUVBLElBQUksQ0FBQ1QsRUFBRSxFQUFFQyxLQUFLLENBQUMsSUFBSTs7Ozs7O29CQUd2QkMsTUFBTSxDQUFDWSxJQUFJLENBQUMsQ0FBUSxRQUFFLENBQTREOzs7Ozs7Ozs7Ozs7SUFFdEYsQ0FBQztJQUVELEVBQW9GO0lBQ3BGSCxLQUFlLElBQUlSLEtBQUssS0FBSyxDQUFDSztRQUFBQSxLQUFLLEVBQUUsQ0FBRTtJQUFBLENBQUMsSUFBSVEsVUFBVSxDQUFDLFFBQ3hELEdBRDRELENBQUM7UUFDMURULGNBQWM7SUFDaEIsQ0FBQyxFQUFFLElBQUk7SUFFUCxNQUFNLEVBQUVQLEVBQUUsd0VBQ1JpQixDQUFHO1FBQUNDLEtBQUssRUFBRyxDQUFDQztZQUFBQSxRQUFRLEVBQUUsQ0FBUTtRQUFBLENBQUM7Ozs7Ozs7dUZBQ2pDdEIsMkRBQVk7WUFDWHVCLElBQUk7WUFDSkMsU0FBUyxFQUFHLENBQXNEOzs7Ozs7Ozs7a0JBRy9EdEIsUUFBUTs7QUFDZixDQUFDO0dBcENRRCxTQUFTOztRQUVERixrREFBUzs7O0tBRmpCRSxTQUFTO0FBc0NsQiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcm91dGVzL1VzZXJSb3V0ZS5qcz83NWQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1VzZXJDb250ZXh0fSBmcm9tICcuLi8uLi9jb250ZXh0L2luZGV4LmpzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtTeW5jT3V0bGluZWR9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5cclxuZnVuY3Rpb24gVXNlclJvdXRlKHtjaGlsZHJlbn0pIHtcclxuICBjb25zdCBbb2ssIHNldE9rXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICBnZXRDdXJyZW50VXNlcigpXHJcbiAgICB9O1xyXG4gIH0sW3N0YXRlICYmIHN0YXRlLnRva2VuXSk7XHJcblxyXG4gIGNvbnN0IGdldEN1cnJlbnRVc2VyID0gYXN5bmMgKCkgPT57XHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUEl9L2N1cnJlbnQtdXNlcmApO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgaWYgKGRhdGEub2spIHNldE9rKHRydWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2goZXJyKXtcclxuICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpIC8vbWFraW5nIHVzZXIgbG9nIGluIGlmIHRoZSBjdXJyZW50IHVzZXIgZG9lc24ndCBtYXRjaCB0b2tlblxyXG4gICAgfSBcclxuICB9XHJcbiAgXHJcbiAgLy9IYW5kbGVzIHRoZSBjYXNlIHdoZXJlIHRoZSB1c2VyIHRyaWVzIHRvIGFjY2VzcyB0aGUgcGFnZSB3aXRoIG5vdGhpbmcgaW4gdGhlIHN0YXRlXHJcbiAgcHJvY2Vzcy5icm93c2VyICYmIHN0YXRlID09PSB7dG9rZW46IFwiXCJ9ICYmIHNldFRpbWVvdXQoKCk9PntcclxuICAgIGdldEN1cnJlbnRVc2VyKCk7XHJcbiAgfSwgMTIwMClcclxuXHJcbiAgcmV0dXJuICFvayA/IFxyXG4gICg8ZGl2IHN0eWxlID17e292ZXJmbG93OiAnaGlkZGVuJ319PlxyXG4gIDxTeW5jT3V0bGluZWQgXHJcbiAgICBzcGluIFxyXG4gICAgY2xhc3NOYW1lID0gXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBkaXNwbGF5LTEgdGV4dC1wcmltYXJ5XCJcclxuICAgIC8+XHJcbiAgICA8L2Rpdj4pIDogXHJcbiAgICg8PntjaGlsZHJlbn08Lz4pIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyUm91dGU7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsImF4aW9zIiwidXNlUm91dGVyIiwiU3luY091dGxpbmVkIiwiVXNlclJvdXRlIiwiY2hpbGRyZW4iLCJvayIsInNldE9rIiwicm91dGVyIiwic3RhdGUiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRDdXJyZW50VXNlciIsInRva2VuIiwiZGF0YSIsImdldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUEkiLCJwdXNoIiwiYnJvd3NlciIsInNldFRpbWVvdXQiLCJkaXYiLCJzdHlsZSIsIm92ZXJmbG93Iiwic3BpbiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/routes/UserRoute.js\n");

/***/ })

});