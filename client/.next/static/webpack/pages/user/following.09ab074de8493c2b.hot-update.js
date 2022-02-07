"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/following",{

/***/ "./pages/user/following.js":
/*!*********************************!*\
  !*** ./pages/user/following.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Nick_Desktop_Coding_social_network_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Nick_Desktop_Coding_social_network_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Nick_Desktop_Coding_social_network_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/index */ \"./context/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Following() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_5__.UserContext), state = ref[0];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), people = ref1[0], setPeople = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (state) {\n            fetchFollowing();\n        }\n    }, [\n        state && state.token\n    ]);\n    var fetchFollowing = _asyncToGenerator(C_Users_Nick_Desktop_Coding_social_network_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var response;\n        return C_Users_Nick_Desktop_Coding_social_network_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    _ctx.next = 3;\n                    return axios__WEBPACK_IMPORTED_MODULE_6___default().get(\"/user-following\");\n                case 3:\n                    response = _ctx.sent;\n                    console.log(\"Following list\", response);\n                    setPeople(response.data);\n                    _ctx.next = 11;\n                    break;\n                case 8:\n                    _ctx.prev = 8;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    console.log(_ctx.t0);\n                case 11:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                8\n            ]\n        ]);\n    }));\n    var imageSource = function(user) {\n        if (user.image) {\n            return user.image.url;\n        } else {\n            return \"/images/default.jpeg\";\n        }\n    };\n    var handleFollow = _asyncToGenerator(C_Users_Nick_Desktop_Coding_social_network_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return C_Users_Nick_Desktop_Coding_social_network_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\user\\\\following.js\",\n            lineNumber: 42,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__.List, {\n            itemLayout: \"horizontal\",\n            dataSource: people,\n            renderItem: function(user) {\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__.List.Item, {\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__.List.Item.Meta, {\n                        avatar: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__.Avatar, {\n                            src: imageSource(user)\n                        }),\n                        title: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                            className: \"d-flex justify-content-between\",\n                            children: [\n                                user.username,\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"span\", {\n                                    onClick: function() {\n                                        return handleFollow(user);\n                                    },\n                                    className: \"text-primary\",\n                                    style: {\n                                        cursor: \"pointer\"\n                                    },\n                                    children: \"Follow\"\n                                })\n                            ]\n                        })\n                    })\n                });\n            },\n            __source: {\n                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\user\\\\following.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            },\n            __self: this\n        })\n    }));\n}\n_s(Following, \"j65TMstHzm28XgDKG8sN1cX6nvU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Following;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Following);\nvar _c;\n$RefreshReg$(_c, \"Following\");\n\n\n;\r\n    var _a, _b;\r\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n    // to extract CSS. For backwards compatibility, we need to check we're in a\r\n    // browser context before continuing.\r\n    if (typeof self !== 'undefined' &&\r\n        // AMP / No-JS mode does not inject these helpers:\r\n        '$RefreshHelpers$' in self) {\r\n        var currentExports = module.__proto__.exports;\r\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n        // This cannot happen in MainTemplate because the exports mismatch between\r\n        // templating and execution.\r\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n        // A module can be accepted automatically based on its exports, e.g. when\r\n        // it is a Refresh Boundary.\r\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n            // Save the previous exports on update so we can compare the boundary\r\n            // signatures.\r\n            module.hot.dispose(function (data) {\r\n                data.prevExports = currentExports;\r\n            });\r\n            // Unconditionally accept an update to this module, we'll check if it's\r\n            // still a Refresh Boundary later.\r\n            module.hot.accept();\r\n            // This field is set when the previous version of this module was a\r\n            // Refresh Boundary, letting us know we need to check for invalidation or\r\n            // enqueue an update.\r\n            if (prevExports !== null) {\r\n                // A boundary can become ineligible if its exports are incompatible\r\n                // with the previous exports.\r\n                //\r\n                // For example, if you add/remove/change exports, we'll want to\r\n                // re-execute the importing modules, and force those components to\r\n                // re-render. Similarly, if you convert a class component to a\r\n                // function, we want to invalidate the boundary.\r\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                    module.hot.invalidate();\r\n                }\r\n                else {\r\n                    self.$RefreshHelpers$.scheduleUpdate();\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            // Since we just executed the code for the module, it's possible that the\r\n            // new exports made it ineligible for being a boundary.\r\n            // We only care about the case when we were _previously_ a boundary,\r\n            // because we already accepted this update (accidental side effect).\r\n            var isNoLongerABoundary = prevExports !== null;\r\n            if (isNoLongerABoundary) {\r\n                module.hot.invalidate();\r\n            }\r\n        }\r\n    }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL2ZvbGxvd2luZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDZDtBQUNaO0FBQ1U7QUFDVTtBQUN0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUdoQlUsU0FBUyxHQUFHLENBQUM7O0lBQ3BCLEdBQUssQ0FBV1IsR0FBdUIsR0FBdkJBLGlEQUFVLENBQUNNLHVEQUFXLEdBQS9CRyxLQUFLLEdBQUlULEdBQXVCO0lBQ3ZDLEdBQUssQ0FBQ1UsTUFBTSxHQUFHTCxzREFBUztJQUN4QixHQUFLLENBQXNCTixJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEdBQS9CWSxNQUFNLEdBQWNaLElBQVksS0FBekJhLFNBQVMsR0FBSWIsSUFBWTtJQUV2Q0QsZ0RBQVMsQ0FBQyxRQUNYLEdBRGUsQ0FBQztRQUNiLEVBQUUsRUFBRVcsS0FBSyxFQUFFLENBQUM7WUFDVkksY0FBYztRQUNoQixDQUFDO0lBQ0gsQ0FBQyxFQUFDLENBQUNKO1FBQUFBLEtBQUssSUFBSUEsS0FBSyxDQUFDSyxLQUFLO0lBQUEsQ0FBQztJQUV4QixHQUFLLENBQUNELGNBQWMsbUtBQUcsUUFBUSxXQUFJLENBQUM7WUFFMUJFLFFBQVE7Ozs7OzsyQkFBU1IsZ0RBQVMsQ0FBQyxDQUFpQjs7b0JBQTVDUSxRQUFRO29CQUNkRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFnQixpQkFBRUgsUUFBUTtvQkFDdENILFNBQVMsQ0FBQ0csUUFBUSxDQUFDSSxJQUFJOzs7Ozs7b0JBRXZCRixPQUFPLENBQUNDLEdBQUc7Ozs7Ozs7Ozs7O0lBRWYsQ0FBQztJQUNELEdBQUssQ0FBQ0UsV0FBVyxHQUFHLFFBQVEsQ0FBUEMsSUFBSSxFQUFJLENBQUM7UUFDNUIsRUFBRSxFQUFFQSxJQUFJLENBQUNDLEtBQUssRUFBQyxDQUFDO1lBQ2QsTUFBTSxDQUFDRCxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsR0FBRztRQUN2QixDQUFDLE1BQ0csQ0FBQztZQUNILE1BQU0sQ0FBQyxDQUFzQjtRQUMvQixDQUFDO0lBQ0gsQ0FBQztJQUVELEdBQUssQ0FBQ0MsWUFBWSxtS0FBRyxRQUFRLFdBQUcsQ0FBQzs7Ozs7Ozs7SUFFakMsQ0FBQztJQUNELE1BQU0sc0VBQ0hDLENBQUc7Ozs7Ozs7dUZBQ0R2QixzQ0FBSTtZQUFDd0IsVUFBVSxFQUFDLENBQVk7WUFBQ0MsVUFBVSxFQUFJaEIsTUFBTTtZQUFFaUIsVUFBVSxFQUFFLFFBQVEsQ0FBUFAsSUFBSTs4QkFDbkUsTUFBTVEsQ0FBQUEsc0RBQUFBLENBQUwzQiwyQ0FBUzttR0FDUEEsZ0RBQWM7d0JBQ2Y2QixNQUFNLHVFQUFLOUIsd0NBQU07NEJBQUMrQixHQUFHLEVBQUdaLFdBQVcsQ0FBQ0MsSUFBSTs7d0JBQ3hDWSxLQUFLLHdFQUNKUixDQUFHOzRCQUFDUyxTQUFTLEVBQUcsQ0FBZ0M7O2dDQUM5Q2IsSUFBSSxDQUFDYyxRQUFRO3FHQUNiQyxDQUFJO29DQUFDQyxPQUFPLEVBQUUsUUFBUTt3Q0FBRmIsTUFBTSxDQUFOQSxZQUFZLENBQUNILElBQUk7O29DQUFHYSxTQUFTLEVBQUcsQ0FBYztvQ0FBQ0ksS0FBSyxFQUFJLENBQUNDO3dDQUFBQSxNQUFNLEVBQUUsQ0FBUztvQ0FBQSxDQUFDOzhDQUFFLENBQU07Ozs7Ozs7Ozs7Ozs7OztBQVFwSCxDQUFDO0dBakRRL0IsU0FBUzs7UUFFREgsa0RBQVM7OztLQUZqQkcsU0FBUztBQW1EbEIsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VyL2ZvbGxvd2luZy5qcz85MDM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QXZhdGFyLCBMaXN0LCBDYXJkfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge1VzZXJDb250ZXh0fSBmcm9tICcuLi8uLi9jb250ZXh0L2luZGV4JztcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEZvbGxvd2luZygpIHtcclxuICBjb25zdCBbc3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3Blb3BsZSxzZXRQZW9wbGVdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICBmZXRjaEZvbGxvd2luZygpO1xyXG4gICAgfVxyXG4gIH0sW3N0YXRlICYmIHN0YXRlLnRva2VuXSlcclxuXHJcbiAgY29uc3QgZmV0Y2hGb2xsb3dpbmcgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiL3VzZXItZm9sbG93aW5nXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkZvbGxvd2luZyBsaXN0XCIsIHJlc3BvbnNlKTtcclxuICAgICAgc2V0UGVvcGxlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBpbWFnZVNvdXJjZSA9ICh1c2VyKSA9PntcclxuICAgIGlmICh1c2VyLmltYWdlKXtcclxuICAgICAgcmV0dXJuIHVzZXIuaW1hZ2UudXJsO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuIFwiL2ltYWdlcy9kZWZhdWx0LmpwZWdcIlxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlRm9sbG93ID0gYXN5bmMoKSA9PiB7XHJcblxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPExpc3QgaXRlbUxheW91dD1cImhvcml6b250YWxcIiBkYXRhU291cmNlID0ge3Blb3BsZX0gcmVuZGVySXRlbT17KHVzZXIpID0+IChcclxuICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgPExpc3QuSXRlbS5NZXRhIFxyXG4gICAgICAgICAgYXZhdGFyID0gezxBdmF0YXIgc3JjID17aW1hZ2VTb3VyY2UodXNlcil9Lz59XHJcbiAgICAgICAgICB0aXRsZSA9IHtcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAge3VzZXIudXNlcm5hbWV9IFxyXG4gICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGb2xsb3codXNlcil9IGNsYXNzTmFtZSA9IFwidGV4dC1wcmltYXJ5XCIgc3R5bGUgPSB7e2N1cnNvcjogXCJwb2ludGVyXCJ9fT5Gb2xsb3c8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICl9Lz4gXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd2luZztcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsIkF2YXRhciIsIkxpc3QiLCJDYXJkIiwibW9tZW50IiwidXNlUm91dGVyIiwiVXNlckNvbnRleHQiLCJheGlvcyIsIkZvbGxvd2luZyIsInN0YXRlIiwicm91dGVyIiwicGVvcGxlIiwic2V0UGVvcGxlIiwiZmV0Y2hGb2xsb3dpbmciLCJ0b2tlbiIsInJlc3BvbnNlIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJpbWFnZVNvdXJjZSIsInVzZXIiLCJpbWFnZSIsInVybCIsImhhbmRsZUZvbGxvdyIsImRpdiIsIml0ZW1MYXlvdXQiLCJkYXRhU291cmNlIiwicmVuZGVySXRlbSIsIkl0ZW0iLCJNZXRhIiwiYXZhdGFyIiwic3JjIiwidGl0bGUiLCJjbGFzc05hbWUiLCJ1c2VybmFtZSIsInNwYW4iLCJvbkNsaWNrIiwic3R5bGUiLCJjdXJzb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/user/following.js\n");

/***/ })

});