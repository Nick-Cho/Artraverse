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

/***/ "./components/cards/SuggestedFollowers.js":
/*!************************************************!*\
  !*** ./components/cards/SuggestedFollowers.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/index */ \"./context/index.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../functions */ \"./functions/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SuggestedFollowers(param) {\n    var people = param.people, handleFollow = param.handleFollow, handleUnfollow = param.handleUnfollow;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_4__.UserContext), state = ref[0];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\cards\\\\SuggestedFollowers.js\",\n            lineNumber: 13,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__.List, {\n            itemLayout: \"horizontal\",\n            dataSource: people,\n            renderItem: function(user) {\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__.List.Item, {\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__.List.Item.Meta, {\n                        avatar: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__.Avatar, {\n                            src: (0,_functions__WEBPACK_IMPORTED_MODULE_5__.imageSource)(user)\n                        }),\n                        title: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: \"d-flex justify-content-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Link, {\n                                    href: \"/user/\".concat(user.username),\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                        children: user.username\n                                    })\n                                }),\n                                state && state.user && user.followers && user.followers.includes(state.user._id) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    onClick: function() {\n                                        return handleUnfollow(user);\n                                    },\n                                    className: \"text-primary\",\n                                    style: {\n                                        cursor: \"pointer\"\n                                    },\n                                    children: \"Unfollow\"\n                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    onClick: function() {\n                                        return handleFollow(user);\n                                    },\n                                    className: \"text-primary\",\n                                    style: {\n                                        cursor: \"pointer\"\n                                    },\n                                    children: \"Follow\"\n                                })\n                            ]\n                        })\n                    })\n                });\n            },\n            __source: {\n                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\cards\\\\SuggestedFollowers.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            },\n            __self: this\n        })\n    }));\n}\n_s(SuggestedFollowers, \"uwal1nlCjR6zsENuIPII/d8HuYo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = SuggestedFollowers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SuggestedFollowers);\nvar _c;\n$RefreshReg$(_c, \"SuggestedFollowers\");\n\n\n;\r\n    var _a, _b;\r\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n    // to extract CSS. For backwards compatibility, we need to check we're in a\r\n    // browser context before continuing.\r\n    if (typeof self !== 'undefined' &&\r\n        // AMP / No-JS mode does not inject these helpers:\r\n        '$RefreshHelpers$' in self) {\r\n        var currentExports = module.__proto__.exports;\r\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n        // This cannot happen in MainTemplate because the exports mismatch between\r\n        // templating and execution.\r\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n        // A module can be accepted automatically based on its exports, e.g. when\r\n        // it is a Refresh Boundary.\r\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n            // Save the previous exports on update so we can compare the boundary\r\n            // signatures.\r\n            module.hot.dispose(function (data) {\r\n                data.prevExports = currentExports;\r\n            });\r\n            // Unconditionally accept an update to this module, we'll check if it's\r\n            // still a Refresh Boundary later.\r\n            module.hot.accept();\r\n            // This field is set when the previous version of this module was a\r\n            // Refresh Boundary, letting us know we need to check for invalidation or\r\n            // enqueue an update.\r\n            if (prevExports !== null) {\r\n                // A boundary can become ineligible if its exports are incompatible\r\n                // with the previous exports.\r\n                //\r\n                // For example, if you add/remove/change exports, we'll want to\r\n                // re-execute the importing modules, and force those components to\r\n                // re-render. Similarly, if you convert a class component to a\r\n                // function, we want to invalidate the boundary.\r\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                    module.hot.invalidate();\r\n                }\r\n                else {\r\n                    self.$RefreshHelpers$.scheduleUpdate();\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            // Since we just executed the code for the module, it's possible that the\r\n            // new exports made it ineligible for being a boundary.\r\n            // We only care about the case when we were _previously_ a boundary,\r\n            // because we already accepted this update (accidental side effect).\r\n            var isNoLongerABoundary = prevExports !== null;\r\n            if (isNoLongerABoundary) {\r\n                module.hot.invalidate();\r\n            }\r\n        }\r\n    }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRzL1N1Z2dlc3RlZEZvbGxvd2Vycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNBO0FBQ047QUFDVTtBQUNVO0FBQ0o7O1NBRWxDTyxrQkFBa0IsQ0FBQyxLQUFzQyxFQUFFLENBQUM7UUFBeENDLE1BQU0sR0FBUCxLQUFzQyxDQUFyQ0EsTUFBTSxFQUFFQyxZQUFZLEdBQXJCLEtBQXNDLENBQTdCQSxZQUFZLEVBQUVDLGNBQWMsR0FBckMsS0FBc0MsQ0FBZkEsY0FBYzs7SUFDL0QsR0FBSyxDQUFXVixHQUF1QixHQUF2QkEsaURBQVUsQ0FBQ0ssdURBQVcsR0FBL0JNLEtBQUssR0FBSVgsR0FBdUI7SUFDdkMsR0FBSyxDQUFDWSxNQUFNLEdBQUdSLHNEQUFTO0lBRXhCLE1BQU0sc0VBQ0hTLENBQUc7Ozs7Ozs7dUZBQ0RYLHNDQUFJO1lBQUNZLFVBQVUsRUFBQyxDQUFZO1lBQUNDLFVBQVUsRUFBSVAsTUFBTTtZQUFFUSxVQUFVLEVBQUUsUUFBUSxDQUFQQyxJQUFJOzhCQUNuRSxNQUFNQyxDQUFBQSxzREFBQUEsQ0FBTGhCLDJDQUFTO21HQUNQQSxnREFBYzt3QkFDZmtCLE1BQU0sdUVBQUtuQix3Q0FBTTs0QkFBQ29CLEdBQUcsRUFBR2YsdURBQVcsQ0FBQ1csSUFBSTs7d0JBQ3hDSyxLQUFLLHdFQUNKVCxDQUFHOzRCQUFDVSxTQUFTLEVBQUcsQ0FBZ0M7O3FHQUM5Q0MsSUFBSTtvQ0FBQ0MsSUFBSSxFQUFLLENBQU0sUUFBZ0IsT0FBZFIsSUFBSSxDQUFDUyxRQUFRO21IQUNqQ0MsQ0FBQztrREFDQ1YsSUFBSSxDQUFDUyxRQUFROzs7Z0NBR2pCZixLQUFLLElBQUlBLEtBQUssQ0FBQ00sSUFBSSxJQUFJQSxJQUFJLENBQUNXLFNBQVMsSUFBSVgsSUFBSSxDQUFDVyxTQUFTLENBQUNDLFFBQVEsQ0FBQ2xCLEtBQUssQ0FBQ00sSUFBSSxDQUFDYSxHQUFHLHlFQUMvRUMsQ0FBSTtvQ0FBQ0MsT0FBTyxFQUFFLFFBQVE7d0NBQUZ0QixNQUFNLENBQU5BLGNBQWMsQ0FBQ08sSUFBSTs7b0NBQUdNLFNBQVMsRUFBRyxDQUFjO29DQUFDVSxLQUFLLEVBQUksQ0FBQ0M7d0NBQUFBLE1BQU0sRUFBRSxDQUFTO29DQUFBLENBQUM7OENBQUUsQ0FFcEc7MEdBRUNILENBQUk7b0NBQUNDLE9BQU8sRUFBRSxRQUFRO3dDQUFGdkIsTUFBTSxDQUFOQSxZQUFZLENBQUNRLElBQUk7O29DQUFHTSxTQUFTLEVBQUcsQ0FBYztvQ0FBQ1UsS0FBSyxFQUFJLENBQUNDO3dDQUFBQSxNQUFNLEVBQUUsQ0FBUztvQ0FBQSxDQUFDOzhDQUFFLENBRWxHOzs7Ozs7Ozs7Ozs7Ozs7QUFTWixDQUFDO0dBakNRM0Isa0JBQWtCOztRQUVWSCxrREFBUzs7O0tBRmpCRyxrQkFBa0I7QUFtQzNCLCtEQUFlQSxrQkFBa0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NhcmRzL1N1Z2dlc3RlZEZvbGxvd2Vycy5qcz84M2U0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0F2YXRhciwgTGlzdH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtVc2VyQ29udGV4dH0gZnJvbSAnLi4vLi4vY29udGV4dC9pbmRleCc7XHJcbmltcG9ydCB7aW1hZ2VTb3VyY2V9IGZyb20gJy4uLy4uL2Z1bmN0aW9ucydcclxuXHJcbmZ1bmN0aW9uIFN1Z2dlc3RlZEZvbGxvd2Vycyh7cGVvcGxlLCBoYW5kbGVGb2xsb3csIGhhbmRsZVVuZm9sbG93fSkge1xyXG4gIGNvbnN0IFtzdGF0ZV0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxMaXN0IGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCIgZGF0YVNvdXJjZSA9IHtwZW9wbGV9IHJlbmRlckl0ZW09eyh1c2VyKSA9PiAoXHJcbiAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YSBcclxuICAgICAgICAgIGF2YXRhciA9IHs8QXZhdGFyIHNyYyA9e2ltYWdlU291cmNlKHVzZXIpfS8+fVxyXG4gICAgICAgICAgdGl0bGUgPSB7XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWYgPSB7YC91c2VyLyR7dXNlci51c2VybmFtZX1gfT5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIHt1c2VyLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICB7c3RhdGUgJiYgc3RhdGUudXNlciAmJiB1c2VyLmZvbGxvd2VycyAmJiB1c2VyLmZvbGxvd2Vycy5pbmNsdWRlcyhzdGF0ZS51c2VyLl9pZCkgPyAoXHJcbiAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IGhhbmRsZVVuZm9sbG93KHVzZXIpfSBjbGFzc05hbWUgPSBcInRleHQtcHJpbWFyeVwiIHN0eWxlID0ge3tjdXJzb3I6IFwicG9pbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgVW5mb2xsb3dcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGb2xsb3codXNlcil9IGNsYXNzTmFtZSA9IFwidGV4dC1wcmltYXJ5XCIgc3R5bGUgPSB7e2N1cnNvcjogXCJwb2ludGVyXCJ9fT5cclxuICAgICAgICAgICAgICBGb2xsb3dcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICApfS8+IFxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdWdnZXN0ZWRGb2xsb3dlcnM7XHJcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwiQXZhdGFyIiwiTGlzdCIsIm1vbWVudCIsInVzZVJvdXRlciIsIlVzZXJDb250ZXh0IiwiaW1hZ2VTb3VyY2UiLCJTdWdnZXN0ZWRGb2xsb3dlcnMiLCJwZW9wbGUiLCJoYW5kbGVGb2xsb3ciLCJoYW5kbGVVbmZvbGxvdyIsInN0YXRlIiwicm91dGVyIiwiZGl2IiwiaXRlbUxheW91dCIsImRhdGFTb3VyY2UiLCJyZW5kZXJJdGVtIiwidXNlciIsIkl0ZW0iLCJNZXRhIiwiYXZhdGFyIiwic3JjIiwidGl0bGUiLCJjbGFzc05hbWUiLCJMaW5rIiwiaHJlZiIsInVzZXJuYW1lIiwiYSIsImZvbGxvd2VycyIsImluY2x1ZGVzIiwiX2lkIiwic3BhbiIsIm9uQ2xpY2siLCJzdHlsZSIsImN1cnNvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/cards/SuggestedFollowers.js\n");

/***/ })

});