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
exports.id = "pages/user/profile";
exports.ids = ["pages/user/profile"];
exports.modules = {

/***/ "./components/routes/UserRoute.js":
/*!****************************************!*\
  !*** ./components/routes/UserRoute.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/index.js */ \"./context/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ \"@ant-design/icons\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction UserRoute({ children  }) {\n    const { 0: ok , 1: setOk  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_index_js__WEBPACK_IMPORTED_MODULE_2__.UserContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(state);\n        if (state && state.token === \"\") {\n            getCurrentUser();\n        }\n        ;\n    }, [\n        state && state.token\n    ]);\n    const getCurrentUser = async ()=>{\n        try {\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${\"http://localhost:8000/api\"}/current-user`, {\n                headers: {\n                    \"Authorization\": `Bearer ${state.token}`\n                }\n            });\n            if (data.ok) setOk(true);\n        } catch (err) {\n            router.push('/login') //making user log in if the current user doesn't match token\n            ;\n        }\n    };\n    //Handles the case where the user tries to access the page with nothing in the state\n     false && 0;\n    return !ok ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.SyncOutlined, {\n        spin: true,\n        className: \"d-flex justify-content center display-1 text-primary\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\routes\\\\UserRoute.js\",\n            lineNumber: 37,\n            columnNumber: 4\n        },\n        __self: this\n    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: children\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserRoute);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JvdXRlcy9Vc2VyUm91dGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFxRDtBQUNIO0FBQ3pCO0FBQ1k7QUFDUztTQUVyQ08sU0FBUyxDQUFDLENBQUNDLENBQUFBLFFBQVEsR0FBQyxFQUFFLENBQUM7SUFDOUIsS0FBSyxNQUFFQyxFQUFFLE1BQUVDLEtBQUssTUFBSVQsK0NBQVEsQ0FBQyxLQUFLO0lBQ2xDLEtBQUssQ0FBQ1UsTUFBTSxHQUFHTixzREFBUztJQUN4QixLQUFLLE1BQUVPLEtBQUssTUFBRUMsUUFBUSxNQUFJWCxpREFBVSxDQUFDQywwREFBVztJQUVoREgsZ0RBQVMsS0FBSyxDQUFDO1FBQ2JjLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxLQUFLO1FBQ2pCLEVBQUUsRUFBRUEsS0FBSyxJQUFJQSxLQUFLLENBQUNJLEtBQUssS0FBSyxDQUFFLEdBQUcsQ0FBQ0M7WUFBQUEsY0FBYztRQUFFLENBQUM7O0lBQ3RELENBQUMsRUFBQyxDQUFDTDtRQUFBQSxLQUFLLElBQUlBLEtBQUssQ0FBQ0ksS0FBSztJQUFBLENBQUM7SUFFeEIsS0FBSyxDQUFDQyxjQUFjLGFBQWMsQ0FBQztRQUNqQyxHQUFHLEVBQUM7WUFDRixLQUFLLENBQUMsQ0FBQ0MsQ0FBQUEsSUFBSSxHQUFDLEdBQUcsS0FBSyxDQUFDZCxnREFBUyxJQUFJZ0IsMkJBQTJCLENBQUMsYUFBYSxHQUFHLENBQUM7Z0JBQzdFRyxPQUFPLEVBQUUsQ0FBQztvQkFDUixDQUFlLGlCQUFHLE9BQU8sRUFBRVgsS0FBSyxDQUFDSSxLQUFLO2dCQUN4QyxDQUFDO1lBQ0gsQ0FBQztZQUNELEVBQUUsRUFBRUUsSUFBSSxDQUFDVCxFQUFFLEVBQUVDLEtBQUssQ0FBQyxJQUFJO1FBQ3pCLENBQUMsQ0FDRCxLQUFLLEVBQUNjLEdBQUcsRUFBQyxDQUFDO1lBQ1RiLE1BQU0sQ0FBQ2MsSUFBSSxDQUFDLENBQVEsUUFBRSxDQUE0RDs7UUFDcEYsQ0FBQztJQUNILENBQUM7SUFFRCxFQUFvRjtJQUNwRkwsTUFBaUMsSUFBSU8sQ0FFN0I7SUFFUixNQUFNLEVBQUVsQixFQUFFLHdFQUNSSCwyREFBWTtRQUNac0IsSUFBSTtRQUNKQyxTQUFTLEVBQUcsQ0FBc0Q7Ozs7Ozs7O2tCQUUvRHJCLFFBQVE7O0FBQ2YsQ0FBQztBQUVELGlFQUFlRCxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL3JvdXRlcy9Vc2VyUm91dGUuanM/NzVkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtVc2VyQ29udGV4dH0gZnJvbSAnLi4vLi4vY29udGV4dC9pbmRleC5qcydcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7U3luY091dGxpbmVkfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIFVzZXJSb3V0ZSh7Y2hpbGRyZW59KSB7XHJcbiAgY29uc3QgW29rLCBzZXRPa10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBjb25zb2xlLmxvZyhzdGF0ZSk7XHJcbiAgICBpZiAoc3RhdGUgJiYgc3RhdGUudG9rZW4gPT09IFwiXCIgKSB7Z2V0Q3VycmVudFVzZXIoKX07XHJcbiAgfSxbc3RhdGUgJiYgc3RhdGUudG9rZW5dKTtcclxuXHJcbiAgY29uc3QgZ2V0Q3VycmVudFVzZXIgPSBhc3luYyAoKSA9PntcclxuICAgIHRyeXtcclxuICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSX0vY3VycmVudC11c2VyYCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7c3RhdGUudG9rZW59YCxcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoZGF0YS5vaykgc2V0T2sodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaChlcnIpe1xyXG4gICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJykgLy9tYWtpbmcgdXNlciBsb2cgaW4gaWYgdGhlIGN1cnJlbnQgdXNlciBkb2Vzbid0IG1hdGNoIHRva2VuXHJcbiAgICB9IFxyXG4gIH1cclxuXHJcbiAgLy9IYW5kbGVzIHRoZSBjYXNlIHdoZXJlIHRoZSB1c2VyIHRyaWVzIHRvIGFjY2VzcyB0aGUgcGFnZSB3aXRoIG5vdGhpbmcgaW4gdGhlIHN0YXRlXHJcbiAgcHJvY2Vzcy5icm93c2VyICYmIHN0YXRlID09PSBudWxsICYmIHNldFRpbWVvdXQoKCk9PntcclxuICAgIGdldEN1cnJlbnRVc2VyKCk7XHJcbiAgfSwgMTAwMClcclxuXHJcbiAgcmV0dXJuICFvayA/IFxyXG4gICg8U3luY091dGxpbmVkIFxyXG4gICAgc3BpbiBcclxuICAgIGNsYXNzTmFtZSA9IFwiZC1mbGV4IGp1c3RpZnktY29udGVudCBjZW50ZXIgZGlzcGxheS0xIHRleHQtcHJpbWFyeVwiXHJcbiAgICAvPikgOiBcclxuICAgKDw+e2NoaWxkcmVufTwvPikgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJSb3V0ZTtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJTeW5jT3V0bGluZWQiLCJVc2VyUm91dGUiLCJjaGlsZHJlbiIsIm9rIiwic2V0T2siLCJyb3V0ZXIiLCJzdGF0ZSIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsInRva2VuIiwiZ2V0Q3VycmVudFVzZXIiLCJkYXRhIiwiZ2V0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSSIsImhlYWRlcnMiLCJlcnIiLCJwdXNoIiwiYnJvd3NlciIsInNldFRpbWVvdXQiLCJzcGluIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/routes/UserRoute.js\n");

/***/ }),

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": () => (/* binding */ UserContext),\n/* harmony export */   \"UserProvider\": () => (/* binding */ UserProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst UserProvider = ({ children  })=>{\n    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        user: {\n        },\n        token: \"\"\n    });\n    //attempting to get authentication key from local storage on startup\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setState(JSON.parse(window.localStorage.getItem('auth')));\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UserContext.Provider, {\n        value: [\n            state,\n            setState\n        ],\n        __source: {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\context\\\\index.js\",\n            lineNumber: 17,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: children\n    }));\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0Q7QUFFeEQsS0FBSyxDQUFDRyxXQUFXLGlCQUFHRixvREFBYTtBQUVqQyxLQUFLLENBQUNHLFlBQVksSUFBSSxDQUFDQyxDQUFBQSxRQUFRLEdBQUMsR0FBSyxDQUFDO0lBQ3BDLEtBQUssTUFBRUMsS0FBSyxNQUFFQyxRQUFRLE1BQUlQLCtDQUFRLENBQUMsQ0FBQztRQUNsQ1EsSUFBSSxFQUFFLENBQUM7UUFBQSxDQUFDO1FBQ1JDLEtBQUssRUFBRSxDQUFFO0lBQ1gsQ0FBQztJQUVELEVBQW9FO0lBQ3BFUCxnREFBUyxLQUFPLENBQUM7UUFDZkssUUFBUSxDQUFDRyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFNO0lBQ3hELENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxNQUFNLHNFQUNIWCxXQUFXLENBQUNZLFFBQVE7UUFBQ0MsS0FBSyxFQUFJLENBQUNWO1lBQUFBLEtBQUs7WUFBQ0MsUUFBUTtRQUFBLENBQUM7Ozs7Ozs7a0JBQzVDRixRQUFROztBQUdmLENBQUM7QUFFZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb250ZXh0L2luZGV4LmpzPzVkMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIlxyXG5cclxuY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBVc2VyUHJvdmlkZXIgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgdXNlcjoge30sXHJcbiAgICB0b2tlbjogXCJcIixcclxuICB9KTtcclxuXHJcbiAgLy9hdHRlbXB0aW5nIHRvIGdldCBhdXRoZW50aWNhdGlvbiBrZXkgZnJvbSBsb2NhbCBzdG9yYWdlIG9uIHN0YXJ0dXBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0U3RhdGUoSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSkpO1xyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4oXHJcbiAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWUgPSB7W3N0YXRlLHNldFN0YXRlXX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7VXNlckNvbnRleHQsIFVzZXJQcm92aWRlcn07Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsIlVzZXJDb250ZXh0IiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlciIsInRva2VuIiwiSlNPTiIsInBhcnNlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./pages/user/profile.js":
/*!*******************************!*\
  !*** ./pages/user/profile.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/index.js */ \"./context/index.js\");\n/* harmony import */ var _components_routes_UserRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/routes/UserRoute */ \"./components/routes/UserRoute.js\");\n\n\n\n\nconst Home = ()=>{\n    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_index_js__WEBPACK_IMPORTED_MODULE_2__.UserContext);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_routes_UserRoute__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\user\\\\profile.js\",\n            lineNumber: 7,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"container\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\user\\\\profile.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            },\n            __self: undefined,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"row\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\user\\\\profile.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                },\n                __self: undefined,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"col\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\user\\\\profile.js\",\n                        lineNumber: 10,\n                        columnNumber: 11\n                    },\n                    __self: undefined,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: \"display-1 text-center\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\pages\\\\user\\\\profile.js\",\n                            lineNumber: 11,\n                            columnNumber: 13\n                        },\n                        __self: undefined,\n                        children: \"Profile Page\"\n                    })\n                })\n            })\n        })\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL3Byb2ZpbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDa0I7QUFDTztBQUN6RCxLQUFLLENBQUNHLElBQUksT0FBUyxDQUFDO0lBQ2xCLEtBQUssTUFBRUMsS0FBSyxNQUFFQyxRQUFRLE1BQUlMLGlEQUFVLENBQUNDLDBEQUFXO0lBQ2hELE1BQU0sc0VBQ0hDLG9FQUFTOzs7Ozs7O3VGQUNQSSxDQUFHO1lBQUNDLFNBQVMsRUFBRyxDQUFXOzs7Ozs7OzJGQUN6QkQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFHLENBQUs7Ozs7Ozs7K0ZBQ25CRCxDQUFHO29CQUFDQyxTQUFTLEVBQUcsQ0FBSzs7Ozs7OzttR0FDbkJDLENBQUU7d0JBQUNELFNBQVMsRUFBRyxDQUF1Qjs7Ozs7OztrQ0FBQyxDQUFZOzs7Ozs7QUFNaEUsQ0FBQztBQUNELGlFQUFlSixJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy91c2VyL3Byb2ZpbGUuanM/YmRjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUNvbnRleHR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1VzZXJDb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9pbmRleC5qc1wiO1xyXG5pbXBvcnQgVXNlclJvdXRlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JvdXRlcy9Vc2VyUm91dGVcIlxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgcmV0dXJuKFxyXG4gICAgPFVzZXJSb3V0ZT5cclxuICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJjb2xcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9IFwiZGlzcGxheS0xIHRleHQtY2VudGVyXCI+UHJvZmlsZSBQYWdlPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvVXNlclJvdXRlPlxyXG4gICk7XHJcbn07ICBcclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwiVXNlclJvdXRlIiwiSG9tZSIsInN0YXRlIiwic2V0U3RhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/user/profile.js\n");

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@ant-design/icons");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/user/profile.js"));
module.exports = __webpack_exports__;

})();