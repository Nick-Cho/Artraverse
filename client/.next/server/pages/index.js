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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": () => (/* binding */ UserContext),\n/* harmony export */   \"UserProvider\": () => (/* binding */ UserProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst UserProvider = ({ children  })=>{\n    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        user: {\n        },\n        token: \"\"\n    });\n    //attempting to get authentication key from local storage on startup\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setState(JSON.parse(window.localStorage.getItem('auth')));\n    }, []);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const token = state && state.token ? state.token : \" \";\n    (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.baseURL) = \"http://localhost:8000/api\";\n    (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.common.Authorization) = `Bearer ${token}`;\n    // Forcing user to log in if login token has expired\n    axios__WEBPACK_IMPORTED_MODULE_2___default().interceptors.response.use(function(response) {\n        return response;\n    }, function(error) {\n        // Do something with request error\n        let res = error.response;\n        //console.log(error);\n        //console.log(\"axios interceptor error\", error);\n        if (res.status === 401 && !res.config.__isRetryRequest) {\n            setState({\n                user: {\n                },\n                token: \"\"\n            });\n            window.localStorage.removeItem(\"auth\");\n            router.push(\"/login\");\n        } else {\n            return error.response;\n        }\n    });\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UserContext.Provider, {\n        value: [\n            state,\n            setState\n        ],\n        __source: {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\context\\\\index.js\",\n            lineNumber: 46,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: children\n    }));\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdEO0FBQy9CO0FBQ2M7QUFFdkMsS0FBSyxDQUFDSyxXQUFXLGlCQUFHSixvREFBYTtBQUVqQyxLQUFLLENBQUNLLFlBQVksSUFBSSxDQUFDQyxDQUFBQSxRQUFRLEdBQUMsR0FBSyxDQUFDO0lBQ3BDLEtBQUssTUFBRUMsS0FBSyxNQUFFQyxRQUFRLE1BQUlULCtDQUFRLENBQUMsQ0FBQztRQUNsQ1UsSUFBSSxFQUFFLENBQUM7UUFBQSxDQUFDO1FBQ1JDLEtBQUssRUFBRSxDQUFFO0lBQ1gsQ0FBQztJQUVELEVBQW9FO0lBQ3BFVCxnREFBUyxLQUFPLENBQUM7UUFDZk8sUUFBUSxDQUFDRyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFNO0lBQ3hELENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxLQUFLLENBQUNDLE1BQU0sR0FBR2Isc0RBQVM7SUFFeEIsS0FBSyxDQUFDTyxLQUFLLEdBQUdILEtBQUssSUFBSUEsS0FBSyxDQUFDRyxLQUFLLEdBQUdILEtBQUssQ0FBQ0csS0FBSyxHQUFHLENBQUc7SUFFdERSLCtEQUFzQixHQUFHaUIsMkJBQTJCO0lBQ3BEakIsb0ZBQTZDLElBQU0sT0FBTyxFQUFFUSxLQUFLO0lBQ2pFLEVBQW9EO0lBQ3BEUixzRUFBK0IsQ0FDN0IsUUFBUSxDQUFFdUIsUUFBUSxFQUFFLENBQUM7UUFDckIsTUFBTSxDQUFDQSxRQUFRO0lBQ2pCLENBQUMsRUFDRCxRQUFRLENBQUVFLEtBQUssRUFBRSxDQUFDO1FBQ2hCLEVBQWtDO1FBQ2xDLEdBQUcsQ0FBQ0MsR0FBRyxHQUFHRCxLQUFLLENBQUNGLFFBQVE7UUFDeEIsRUFBcUI7UUFDckIsRUFBZ0Q7UUFDaEQsRUFBRSxFQUFFRyxHQUFHLENBQUNDLE1BQU0sS0FBSyxHQUFHLEtBQUtELEdBQUcsQ0FBQ0UsTUFBTSxDQUFDQyxnQkFBZ0IsRUFBQyxDQUFDO1lBQ3REdkIsUUFBUSxDQUFDLENBQUNDO2dCQUFBQSxJQUFJLEVBQUUsQ0FBQztnQkFBQSxDQUFDO2dCQUFFQyxLQUFLLEVBQUUsQ0FBRTtZQUFBLENBQUM7WUFDOUJHLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDa0IsVUFBVSxDQUFDLENBQU07WUFDckNoQixNQUFNLENBQUNpQixJQUFJLENBQUMsQ0FBUTtRQUN0QixDQUFDLE1BQ0csQ0FBQztZQUNILE1BQU0sQ0FBQ04sS0FBSyxDQUFDRixRQUFRO1FBQ3ZCLENBQUM7SUFFSCxDQUFDO0lBRUQsTUFBTSxzRUFDSHJCLFdBQVcsQ0FBQzhCLFFBQVE7UUFBQ0MsS0FBSyxFQUFJLENBQUM1QjtZQUFBQSxLQUFLO1lBQUNDLFFBQVE7UUFBQSxDQUFDOzs7Ozs7O2tCQUM1Q0YsUUFBUTs7QUFHZixDQUFDO0FBRWdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29udGV4dC9pbmRleC5qcz81ZDI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgVXNlclByb3ZpZGVyID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIHVzZXI6IHt9LFxyXG4gICAgdG9rZW46IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIC8vYXR0ZW1wdGluZyB0byBnZXQgYXV0aGVudGljYXRpb24ga2V5IGZyb20gbG9jYWwgc3RvcmFnZSBvbiBzdGFydHVwXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFN0YXRlKEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gXHJcbiAgY29uc3QgdG9rZW4gPSBzdGF0ZSAmJiBzdGF0ZS50b2tlbiA/IHN0YXRlLnRva2VuIDogXCIgXCI7XHJcblxyXG4gIGF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUEk7XHJcbiAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJBdXRob3JpemF0aW9uXCJdID0gIGBCZWFyZXIgJHt0b2tlbn1gO1xyXG4gIC8vIEZvcmNpbmcgdXNlciB0byBsb2cgaW4gaWYgbG9naW4gdG9rZW4gaGFzIGV4cGlyZWRcclxuICBheGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxyXG4gICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgfSwgXHJcbiAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCByZXF1ZXN0IGVycm9yXHJcbiAgICBsZXQgcmVzID0gZXJyb3IucmVzcG9uc2U7XHJcbiAgICAvL2NvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIC8vY29uc29sZS5sb2coXCJheGlvcyBpbnRlcmNlcHRvciBlcnJvclwiLCBlcnJvcik7XHJcbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAxICYmICFyZXMuY29uZmlnLl9faXNSZXRyeVJlcXVlc3Qpe1xyXG4gICAgICBzZXRTdGF0ZSh7dXNlcjoge30sIHRva2VuOiBcIlwifSk7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGhcIik7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuIGVycm9yLnJlc3BvbnNlO1xyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlID0ge1tzdGF0ZSxzZXRTdGF0ZV19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQge1VzZXJDb250ZXh0LCBVc2VyUHJvdmlkZXJ9OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInVzZVJvdXRlciIsIlVzZXJDb250ZXh0IiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlciIsInRva2VuIiwiSlNPTiIsInBhcnNlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJvdXRlciIsImRlZmF1bHRzIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUEkiLCJoZWFkZXJzIiwiY29tbW9uIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJlcnJvciIsInJlcyIsInN0YXR1cyIsImNvbmZpZyIsIl9faXNSZXRyeVJlcXVlc3QiLCJyZW1vdmVJdGVtIiwicHVzaCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/index */ \"./context/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Home = ()=>{\n    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_1__.UserContext); //gives access to global state\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"container\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\index.js\",\n            lineNumber: 7,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"row\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            },\n            __self: undefined,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"col\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\index.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                },\n                __self: undefined,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                    className: \"display-1 text-center py-5\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 10,\n                        columnNumber: 11\n                    },\n                    __self: undefined,\n                    children: \"Home page\"\n                })\n            })\n        })\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTRDO0FBQ1o7QUFFaEMsS0FBSyxDQUFDRSxJQUFJLE9BQVEsQ0FBQztJQUNqQixLQUFLLE1BQUVDLEtBQUssTUFBQ0MsUUFBUSxNQUFJSCxpREFBVSxDQUFDRCx1REFBVyxFQUFHLENBQThCO0lBQ2hGLE1BQU0sc0VBQ0hLLENBQUc7UUFBQ0MsU0FBUyxFQUFHLENBQVc7Ozs7Ozs7dUZBQ3pCRCxDQUFHO1lBQUNDLFNBQVMsRUFBRyxDQUFLOzs7Ozs7OzJGQUNuQkQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFHLENBQUs7Ozs7Ozs7K0ZBQ25CQyxDQUFFO29CQUFDRCxTQUFTLEVBQUcsQ0FBNEI7Ozs7Ozs7OEJBQUMsQ0FBUzs7Ozs7QUFLaEUsQ0FBQztBQUVELGlFQUFlSixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1VzZXJDb250ZXh0fSBmcm9tICcuLi9jb250ZXh0L2luZGV4JztcclxuaW1wb3J0IHt1c2VDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PntcclxuICBjb25zdCBbc3RhdGUsc2V0U3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7IC8vZ2l2ZXMgYWNjZXNzIHRvIGdsb2JhbCBzdGF0ZVxyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lID0gJ2NvbnRhaW5lcic+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICdjb2wnPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZSA9ICdkaXNwbGF5LTEgdGV4dC1jZW50ZXIgcHktNSc+SG9tZSBwYWdlPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWUiXSwibmFtZXMiOlsiVXNlckNvbnRleHQiLCJ1c2VDb250ZXh0IiwiSG9tZSIsInN0YXRlIiwic2V0U3RhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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