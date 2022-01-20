"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": () => (/* binding */ UserContext),\n/* harmony export */   \"UserProvider\": () => (/* binding */ UserProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst UserProvider = ({ children  })=>{\n    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        user: {\n        },\n        token: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setState(JSON.parse(window.localStorage.getItem('auth')));\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UserContext.Provider, {\n        value: [\n            state,\n            setState\n        ],\n        __source: {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\context\\\\index.js\",\n            lineNumber: 15,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: children\n    }));\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0Q7QUFFeEQsS0FBSyxDQUFDRyxXQUFXLGlCQUFHRixvREFBYTtBQUVqQyxLQUFLLENBQUNHLFlBQVksSUFBSSxDQUFDQyxDQUFBQSxRQUFRLEdBQUMsR0FBSyxDQUFDO0lBQ3BDLEtBQUssTUFBRUMsS0FBSyxNQUFFQyxRQUFRLE1BQUlQLCtDQUFRLENBQUMsQ0FBQztRQUNsQ1EsSUFBSSxFQUFFLENBQUM7UUFBQSxDQUFDO1FBQ1JDLEtBQUssRUFBRSxDQUFFO0lBQ1gsQ0FBQztJQUVEUCxnREFBUyxLQUFPLENBQUM7UUFDZkssUUFBUSxDQUFDRyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFNO0lBQ3hELENBQUMsRUFBRSxDQUFDLENBQUM7SUFDTCxNQUFNLHNFQUNIWCxXQUFXLENBQUNZLFFBQVE7UUFBQ0MsS0FBSyxFQUFJLENBQUNWO1lBQUFBLEtBQUs7WUFBQ0MsUUFBUTtRQUFBLENBQUM7Ozs7Ozs7a0JBQzVDRixRQUFROztBQUdmLENBQUM7QUFFZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb250ZXh0L2luZGV4LmpzPzVkMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIlxyXG5cclxuY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBVc2VyUHJvdmlkZXIgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgdXNlcjoge30sXHJcbiAgICB0b2tlbjogXCJcIixcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFN0YXRlKEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykpKTtcclxuICB9LCBbXSlcclxuICByZXR1cm4oXHJcbiAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWUgPSB7W3N0YXRlLHNldFN0YXRlXX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7VXNlckNvbnRleHQsIFVzZXJQcm92aWRlcn07Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsIlVzZXJDb250ZXh0IiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlciIsInRva2VuIiwiSlNPTiIsInBhcnNlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/index */ \"./context/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Home = ()=>{\n    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_1__.UserContext); //gives access to global state\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"container\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\index.js\",\n            lineNumber: 7,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"row\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            },\n            __self: undefined,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"col\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\index.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                },\n                __self: undefined,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                    className: \"display-1 text-center py-5\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 10,\n                        columnNumber: 11\n                    },\n                    __self: undefined,\n                    children: \"Home page\"\n                })\n            })\n        })\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTRDO0FBQ1o7QUFFaEMsS0FBSyxDQUFDRSxJQUFJLE9BQVEsQ0FBQztJQUNqQixLQUFLLE1BQUVDLEtBQUssTUFBQ0MsUUFBUSxNQUFJSCxpREFBVSxDQUFDRCx1REFBVyxFQUFHLENBQThCO0lBQ2hGLE1BQU0sc0VBQ0hLLENBQUc7UUFBQ0MsU0FBUyxFQUFHLENBQVc7Ozs7Ozs7dUZBQ3pCRCxDQUFHO1lBQUNDLFNBQVMsRUFBRyxDQUFLOzs7Ozs7OzJGQUNuQkQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFHLENBQUs7Ozs7Ozs7K0ZBQ25CQyxDQUFFO29CQUFDRCxTQUFTLEVBQUcsQ0FBNEI7Ozs7Ozs7OEJBQUMsQ0FBUzs7Ozs7QUFLaEUsQ0FBQztBQUVELGlFQUFlSixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1VzZXJDb250ZXh0fSBmcm9tICcuLi9jb250ZXh0L2luZGV4JztcclxuaW1wb3J0IHt1c2VDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PntcclxuICBjb25zdCBbc3RhdGUsc2V0U3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7IC8vZ2l2ZXMgYWNjZXNzIHRvIGdsb2JhbCBzdGF0ZVxyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lID0gJ2NvbnRhaW5lcic+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICdjb2wnPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZSA9ICdkaXNwbGF5LTEgdGV4dC1jZW50ZXIgcHktNSc+SG9tZSBwYWdlPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWUiXSwibmFtZXMiOlsiVXNlckNvbnRleHQiLCJ1c2VDb250ZXh0IiwiSG9tZSIsInN0YXRlIiwic2V0U3RhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();