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

/***/ "./components/cards/PostList.js":
/*!**************************************!*\
  !*** ./components/cards/PostList.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-render-html */ \"./node_modules/react-render-html/index.js\");\n/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction PostList(param) {\n    var posts = param.posts;\n    // useEffect(()=>{\n    //   console.log(posts)\n    // }, [posts])\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            \"posts.map((post) => (\",\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"card mb-5\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"card-header\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                            lineNumber: 14,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                                lineNumber: 15,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__.Avatar, {\n                                    size: 40,\n                                    classsName: \"mb-2\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                                        lineNumber: 16,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: post.postedBy.first_name[0]\n                                }),\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    className: \"pt-2 ml-3\",\n                                    style: {\n                                        marginLeft: \"0.5rem\"\n                                    },\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                                        lineNumber: 17,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: post.postedBy.first_name\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    className: \"pt-2 ml-3\",\n                                    style: {\n                                        marginLeft: \"0.5rem\"\n                                    },\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                                        lineNumber: 18,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: moment__WEBPACK_IMPORTED_MODULE_2___default()(post.createdAt).fromNow()\n                                })\n                            ]\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"card-body\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                            lineNumber: 21,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: react_render_html__WEBPACK_IMPORTED_MODULE_1___default()(post.content)\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"card-footer\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                            lineNumber: 24,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                src: post.image.url,\n                                alt: post.postedBy.first_name,\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 11\n                                },\n                                __self: this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"pt-3\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 11\n                                },\n                                __self: this\n                            })\n                        ]\n                    })\n                ]\n            }, post._id),\n            \")\"\n        ]\n    }));\n}\n_c = PostList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostList);\nvar _c;\n$RefreshReg$(_c, \"PostList\");\n\n\n;\r\n    var _a, _b;\r\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n    // to extract CSS. For backwards compatibility, we need to check we're in a\r\n    // browser context before continuing.\r\n    if (typeof self !== 'undefined' &&\r\n        // AMP / No-JS mode does not inject these helpers:\r\n        '$RefreshHelpers$' in self) {\r\n        var currentExports = module.__proto__.exports;\r\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n        // This cannot happen in MainTemplate because the exports mismatch between\r\n        // templating and execution.\r\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n        // A module can be accepted automatically based on its exports, e.g. when\r\n        // it is a Refresh Boundary.\r\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n            // Save the previous exports on update so we can compare the boundary\r\n            // signatures.\r\n            module.hot.dispose(function (data) {\r\n                data.prevExports = currentExports;\r\n            });\r\n            // Unconditionally accept an update to this module, we'll check if it's\r\n            // still a Refresh Boundary later.\r\n            module.hot.accept();\r\n            // This field is set when the previous version of this module was a\r\n            // Refresh Boundary, letting us know we need to check for invalidation or\r\n            // enqueue an update.\r\n            if (prevExports !== null) {\r\n                // A boundary can become ineligible if its exports are incompatible\r\n                // with the previous exports.\r\n                //\r\n                // For example, if you add/remove/change exports, we'll want to\r\n                // re-execute the importing modules, and force those components to\r\n                // re-render. Similarly, if you convert a class component to a\r\n                // function, we want to invalidate the boundary.\r\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                    module.hot.invalidate();\r\n                }\r\n                else {\r\n                    self.$RefreshHelpers$.scheduleUpdate();\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            // Since we just executed the code for the module, it's possible that the\r\n            // new exports made it ineligible for being a boundary.\r\n            // We only care about the case when we were _previously_ a boundary,\r\n            // because we already accepted this update (accidental side effect).\r\n            var isNoLongerABoundary = prevExports !== null;\r\n            if (isNoLongerABoundary) {\r\n                module.hot.invalidate();\r\n            }\r\n        }\r\n    }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRzL1Bvc3RMaXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQztBQUNmO0FBQ0E7QUFDTTtTQUN4QkksUUFBUSxDQUFDLEtBQU8sRUFBRSxDQUFDO1FBQVRDLEtBQUssR0FBTixLQUFPLENBQU5BLEtBQUs7SUFFdEIsRUFBa0I7SUFDbEIsRUFBdUI7SUFDdkIsRUFBYztJQUNkLE1BQU0sdUVBQUM7O1lBQ0gsQ0FFRTtrRkFBQ0MsQ0FBRztnQkFBa0JDLFNBQVMsRUFBRyxDQUFXOzs7Ozs7Ozt5RkFDNUNELENBQUc7d0JBQUNDLFNBQVMsRUFBRyxDQUFhOzs7Ozs7O3dHQUMzQkQsQ0FBRzs7Ozs7Ozs7cUdBQ0RKLHdDQUFNO29DQUFDTSxJQUFJLEVBQUksRUFBRTtvQ0FBRUMsVUFBVSxFQUFDLENBQU07Ozs7Ozs7OENBQUVDLElBQUksQ0FBQ0MsUUFBUSxDQUFDQyxVQUFVLENBQUMsQ0FBQzs7Z0NBQVksQ0FBRztxR0FDL0VDLENBQUk7b0NBQUNOLFNBQVMsRUFBQyxDQUFXO29DQUFDTyxLQUFLLEVBQUksQ0FBQ0M7d0NBQUFBLFVBQVUsRUFBRSxDQUFRO29DQUFBLENBQUM7Ozs7Ozs7OENBQUdMLElBQUksQ0FBQ0MsUUFBUSxDQUFDQyxVQUFVOztxR0FDckZDLENBQUk7b0NBQUNOLFNBQVMsRUFBQyxDQUFXO29DQUFDTyxLQUFLLEVBQUksQ0FBQ0M7d0NBQUFBLFVBQVUsRUFBRSxDQUFRO29DQUFBLENBQUM7Ozs7Ozs7OENBQUdkLDZDQUFNLENBQUNTLElBQUksQ0FBQ00sU0FBUyxFQUFFQyxPQUFPOzs7Ozt5RkFHL0ZYLENBQUc7d0JBQUNDLFNBQVMsRUFBRyxDQUFXOzs7Ozs7O2tDQUN6QlAsd0RBQVUsQ0FBQ1UsSUFBSSxDQUFDUSxPQUFPOzswRkFFekJaLENBQUc7d0JBQUNDLFNBQVMsRUFBRyxDQUFhOzs7Ozs7OztpR0FDM0JZLENBQUc7Z0NBQUNDLEdBQUcsRUFBSVYsSUFBSSxDQUFDVyxLQUFLLENBQUNDLEdBQUc7Z0NBQUVDLEdBQUcsRUFBRWIsSUFBSSxDQUFDQyxRQUFRLENBQUNDLFVBQVU7Ozs7Ozs7O2lHQUN4RE4sQ0FBRztnQ0FBQ0MsU0FBUyxFQUFHLENBQU07Ozs7Ozs7Ozs7O2VBYmJHLElBQUksQ0FBQ2MsR0FBRztZQWVoQixDQUVSOzs7QUFFSixDQUFDO0tBM0JRcEIsUUFBUTtBQTZCakIsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NhcmRzL1Bvc3RMaXN0LmpzPzkyMGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlbmRlckhUTUwgZnJvbSAncmVhY3QtcmVuZGVyLWh0bWwnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7QXZhdGFyfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5mdW5jdGlvbiBQb3N0TGlzdCh7cG9zdHN9KSB7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKT0+e1xyXG4gIC8vICAgY29uc29sZS5sb2cocG9zdHMpXHJcbiAgLy8gfSwgW3Bvc3RzXSlcclxuICByZXR1cm4oXHJcbiAgICA8PiAgICBcclxuICAgICAgcG9zdHMubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXkgPSB7cG9zdC5faWR9IGNsYXNzTmFtZSA9IFwiY2FyZCBtYi01XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8QXZhdGFyIHNpemUgPSB7NDB9IGNsYXNzc05hbWU9XCJtYi0yXCI+e3Bvc3QucG9zdGVkQnkuZmlyc3RfbmFtZVswXX08L0F2YXRhcj57XCIgXCJ9ICAgICAgIFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdC0yIG1sLTNcIiBzdHlsZSA9IHt7bWFyZ2luTGVmdDogXCIwLjVyZW1cIn19Pntwb3N0LnBvc3RlZEJ5LmZpcnN0X25hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdC0yIG1sLTNcIiBzdHlsZSA9IHt7bWFyZ2luTGVmdDogXCIwLjVyZW1cIn19Pnttb21lbnQocG9zdC5jcmVhdGVkQXQpLmZyb21Ob3coKX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICB7cmVuZGVySFRNTChwb3N0LmNvbnRlbnQpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgPGltZyBzcmMgPSB7cG9zdC5pbWFnZS51cmx9IGFsdD17cG9zdC5wb3N0ZWRCeS5maXJzdF9uYW1lfS8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwicHQtM1wiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RMaXN0O1xyXG4iXSwibmFtZXMiOlsicmVuZGVySFRNTCIsIm1vbWVudCIsIkF2YXRhciIsInVzZUVmZmVjdCIsIlBvc3RMaXN0IiwicG9zdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJzaXplIiwiY2xhc3NzTmFtZSIsInBvc3QiLCJwb3N0ZWRCeSIsImZpcnN0X25hbWUiLCJzcGFuIiwic3R5bGUiLCJtYXJnaW5MZWZ0IiwiY3JlYXRlZEF0IiwiZnJvbU5vdyIsImNvbnRlbnQiLCJpbWciLCJzcmMiLCJpbWFnZSIsInVybCIsImFsdCIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/cards/PostList.js\n");

/***/ })

});