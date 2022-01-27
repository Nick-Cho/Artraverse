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

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": function() { return /* binding */ UserContext; },\n/* harmony export */   \"UserProvider\": function() { return /* binding */ UserProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar UserProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        user: {\n        },\n        token: \"\"\n    }), state = ref[0], setState = ref[1];\n    //attempting to get authentication key from local storage on startup\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setState(JSON.parse(window.localStorage.getItem('auth')));\n    }, []);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var token = state && state.token ? state.token : \"\";\n    (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.baseURL) = \"http://localhost:8000/api\";\n    (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.common.Authorization) = \"Bearer: \".concat(token);\n    // Forcing user to log in if login token has expired\n    axios__WEBPACK_IMPORTED_MODULE_2___default().interceptors.response.use(function(response) {\n        return response;\n    }, function(error) {\n        // Do something with request error\n        var res = error.response;\n        console.log(\"axios interceptor error\", error);\n        if (res.status === 401) {\n            setState({\n                user: {\n                },\n                token: \"\"\n            });\n            window.localStorage.removeItem(\"auth\");\n            router.push(\"/login\");\n        } else if (res.status === 400) {\n            //console.log(res);\n            return error;\n        }\n    });\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UserContext.Provider, {\n        value: [\n            state,\n            setState\n        ],\n        __source: {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\context\\\\index.js\",\n            lineNumber: 45,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: children\n    }));\n};\n_s(UserProvider, \"QD/uwx2uR6dZ5guTTGOMBbT8ivU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = UserProvider;\n\nvar _c;\n$RefreshReg$(_c, \"UserProvider\");\n\n\n;\r\n    var _a, _b;\r\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n    // to extract CSS. For backwards compatibility, we need to check we're in a\r\n    // browser context before continuing.\r\n    if (typeof self !== 'undefined' &&\r\n        // AMP / No-JS mode does not inject these helpers:\r\n        '$RefreshHelpers$' in self) {\r\n        var currentExports = module.__proto__.exports;\r\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n        // This cannot happen in MainTemplate because the exports mismatch between\r\n        // templating and execution.\r\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n        // A module can be accepted automatically based on its exports, e.g. when\r\n        // it is a Refresh Boundary.\r\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n            // Save the previous exports on update so we can compare the boundary\r\n            // signatures.\r\n            module.hot.dispose(function (data) {\r\n                data.prevExports = currentExports;\r\n            });\r\n            // Unconditionally accept an update to this module, we'll check if it's\r\n            // still a Refresh Boundary later.\r\n            module.hot.accept();\r\n            // This field is set when the previous version of this module was a\r\n            // Refresh Boundary, letting us know we need to check for invalidation or\r\n            // enqueue an update.\r\n            if (prevExports !== null) {\r\n                // A boundary can become ineligible if its exports are incompatible\r\n                // with the previous exports.\r\n                //\r\n                // For example, if you add/remove/change exports, we'll want to\r\n                // re-execute the importing modules, and force those components to\r\n                // re-render. Similarly, if you convert a class component to a\r\n                // function, we want to invalidate the boundary.\r\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                    module.hot.invalidate();\r\n                }\r\n                else {\r\n                    self.$RefreshHelpers$.scheduleUpdate();\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            // Since we just executed the code for the module, it's possible that the\r\n            // new exports made it ineligible for being a boundary.\r\n            // We only care about the case when we were _previously_ a boundary,\r\n            // because we already accepted this update (accidental side effect).\r\n            var isNoLongerABoundary = prevExports !== null;\r\n            if (isNoLongerABoundary) {\r\n                module.hot.invalidate();\r\n            }\r\n        }\r\n    }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF3RDtBQUMvQjtBQUNjOzs7QUFFdkMsR0FBSyxDQUFDSyxXQUFXLGlCQUFHSixvREFBYTtBQUVqQyxHQUFLLENBQUNLLFlBQVksR0FBRyxRQUFRLFFBQVEsQ0FBQztRQUFmQyxRQUFRLFNBQVJBLFFBQVE7O0lBQzdCLEdBQUssQ0FBcUJQLEdBR3hCLEdBSHdCQSwrQ0FBUSxDQUFDLENBQUM7UUFDbENRLElBQUksRUFBRSxDQUFDO1FBQUEsQ0FBQztRQUNSQyxLQUFLLEVBQUUsQ0FBRTtJQUNYLENBQUMsR0FITUMsS0FBSyxHQUFjVixHQUd4QixLQUhZVyxRQUFRLEdBQUlYLEdBR3hCO0lBRUYsRUFBb0U7SUFDcEVFLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDZlMsUUFBUSxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFNO0lBQ3hELENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxHQUFLLENBQUNDLE1BQU0sR0FBR2Isc0RBQVM7SUFFeEIsR0FBSyxDQUFDSyxLQUFLLEdBQUtDLEtBQUssSUFBSUEsS0FBSyxDQUFDRCxLQUFLLEdBQUlDLEtBQUssQ0FBQ0QsS0FBSyxHQUFHLENBQUU7SUFDeEROLCtEQUFzQixHQUFHaUIsMkJBQTJCO0lBQ3BEakIsb0ZBQTZDLEdBQUssQ0FBUSxVQUFRLE9BQU5NLEtBQUs7SUFFakUsRUFBb0Q7SUFDcEROLHNFQUErQixDQUM3QixRQUFRLENBQUV1QixRQUFRLEVBQUUsQ0FBQztRQUNyQixNQUFNLENBQUNBLFFBQVE7SUFDakIsQ0FBQyxFQUNELFFBQVEsQ0FBRUUsS0FBSyxFQUFFLENBQUM7UUFDaEIsRUFBa0M7UUFDbEMsR0FBRyxDQUFDQyxHQUFHLEdBQUdELEtBQUssQ0FBQ0YsUUFBUTtRQUN4QkksT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBeUIsMEJBQUVILEtBQUs7UUFDNUMsRUFBRSxFQUFFQyxHQUFHLENBQUNHLE1BQU0sS0FBSyxHQUFHLEVBQUMsQ0FBQztZQUN0QnJCLFFBQVEsQ0FBQyxDQUFDSDtnQkFBQUEsSUFBSSxFQUFFLENBQUM7Z0JBQUEsQ0FBQztnQkFBRUMsS0FBSyxFQUFFLENBQUU7WUFBQSxDQUFDO1lBQzlCSyxNQUFNLENBQUNDLFlBQVksQ0FBQ2tCLFVBQVUsQ0FBQyxDQUFNO1lBQ3JDaEIsTUFBTSxDQUFDaUIsSUFBSSxDQUFDLENBQVE7UUFDdEIsQ0FBQyxNQUNJLEVBQUUsRUFBRUwsR0FBRyxDQUFDRyxNQUFNLEtBQUssR0FBRyxFQUFDLENBQUM7WUFDM0IsRUFBbUI7WUFDbkIsTUFBTSxDQUFDSixLQUFLO1FBQ2QsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLHNFQUNIdkIsV0FBVyxDQUFDOEIsUUFBUTtRQUFDQyxLQUFLLEVBQUksQ0FBQzFCO1lBQUFBLEtBQUs7WUFBQ0MsUUFBUTtRQUFBLENBQUM7Ozs7Ozs7a0JBQzVDSixRQUFROztBQUdmLENBQUM7R0ExQ0tELFlBQVk7O1FBV0RGLGtEQUFTOzs7S0FYcEJFLFlBQVk7QUE0Q2UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9pbmRleC5qcz81ZDI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgVXNlclByb3ZpZGVyID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIHVzZXI6IHt9LFxyXG4gICAgdG9rZW46IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIC8vYXR0ZW1wdGluZyB0byBnZXQgYXV0aGVudGljYXRpb24ga2V5IGZyb20gbG9jYWwgc3RvcmFnZSBvbiBzdGFydHVwXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFN0YXRlKEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykpKTtcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgXHJcbiAgY29uc3QgdG9rZW4gPSAoKHN0YXRlICYmIHN0YXRlLnRva2VuKSA/IHN0YXRlLnRva2VuIDogXCJcIik7XHJcbiAgYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSTtcclxuICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIkF1dGhvcml6YXRpb25cIl0gPSBgQmVhcmVyOiAke3Rva2VufWBcclxuICBcclxuICAvLyBGb3JjaW5nIHVzZXIgdG8gbG9nIGluIGlmIGxvZ2luIHRva2VuIGhhcyBleHBpcmVkXHJcbiAgYXhpb3MuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcclxuICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gIH0sIFxyXG4gIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgLy8gRG8gc29tZXRoaW5nIHdpdGggcmVxdWVzdCBlcnJvclxyXG4gICAgbGV0IHJlcyA9IGVycm9yLnJlc3BvbnNlO1xyXG4gICAgY29uc29sZS5sb2coXCJheGlvcyBpbnRlcmNlcHRvciBlcnJvclwiLCBlcnJvcik7XHJcbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAxKXtcclxuICAgICAgc2V0U3RhdGUoe3VzZXI6IHt9LCB0b2tlbjogXCJcIn0pO1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhdXRoXCIpO1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHJlcy5zdGF0dXMgPT09IDQwMCl7XHJcbiAgICAgIC8vY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4oXHJcbiAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWUgPSB7W3N0YXRlLHNldFN0YXRlXX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7VXNlckNvbnRleHQsIFVzZXJQcm92aWRlcn07Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsImF4aW9zIiwidXNlUm91dGVyIiwiVXNlckNvbnRleHQiLCJVc2VyUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJ0b2tlbiIsInN0YXRlIiwic2V0U3RhdGUiLCJKU09OIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicm91dGVyIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSSIsImhlYWRlcnMiLCJjb21tb24iLCJpbnRlcmNlcHRvcnMiLCJyZXNwb25zZSIsInVzZSIsImVycm9yIiwicmVzIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsInJlbW92ZUl0ZW0iLCJwdXNoIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ })

});