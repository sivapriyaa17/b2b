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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Layout({ children }) {\n    const [loggedIn, setLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setLoggedIn(!!localStorage.getItem(\"token\"));\n    }, []);\n    const handleLogout = ()=>{\n        localStorage.removeItem(\"token\");\n        window.location.href = \"/login\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                style: {\n                    marginBottom: \"20px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\fullstack\\\\frontend\\\\components\\\\Layout.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    \" |\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/companies\",\n                        children: \"Companies\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\fullstack\\\\frontend\\\\components\\\\Layout.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    \" |\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/companies/new\",\n                        children: \"Create Company\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\fullstack\\\\frontend\\\\components\\\\Layout.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    \" |\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/tenders\",\n                        children: \"Tenders\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\fullstack\\\\frontend\\\\components\\\\Layout.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    \" |\",\n                    \" \",\n                    loggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/dashboard\",\n                                children: \"Dashboard\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\fullstack\\\\frontend\\\\components\\\\Layout.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, this),\n                            \" |\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleLogout,\n                                style: {\n                                    cursor: \"pointer\"\n                                },\n                                children: \"Logout\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\fullstack\\\\frontend\\\\components\\\\Layout.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/login\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\fullstack\\\\frontend\\\\components\\\\Layout.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\fullstack\\\\frontend\\\\components\\\\Layout.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: children\n            }, void 0, false, {\n                fileName: \"E:\\\\fullstack\\\\frontend\\\\components\\\\Layout.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\fullstack\\\\frontend\\\\components\\\\Layout.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDNkI7QUFDZTtBQU83QixTQUFTRyxPQUFPLEVBQUNDLFFBQVEsRUFBUztJQUMvQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0osK0NBQVFBLENBQUM7SUFFekNELGdEQUFTQSxDQUFDO1FBQ1JLLFlBQVksQ0FBQyxDQUFDQyxhQUFhQyxPQUFPLENBQUM7SUFDckMsR0FBRyxFQUFFO0lBRUwsTUFBTUMsZUFBZTtRQUNuQkYsYUFBYUcsVUFBVSxDQUFDO1FBQ3hCQyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRztJQUN6QjtJQUVBLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDO2dCQUFJQyxPQUFPO29CQUFFQyxjQUFjO2dCQUFPOztrQ0FDakMsOERBQUNqQixrREFBSUE7d0JBQUNhLE1BQUs7a0NBQUk7Ozs7OztvQkFBVztvQkFBRztrQ0FDN0IsOERBQUNiLGtEQUFJQTt3QkFBQ2EsTUFBSztrQ0FBYTs7Ozs7O29CQUFnQjtvQkFBRztrQ0FDM0MsOERBQUNiLGtEQUFJQTt3QkFBQ2EsTUFBSztrQ0FBaUI7Ozs7OztvQkFBcUI7b0JBQUc7a0NBQ3BELDhEQUFDYixrREFBSUE7d0JBQUNhLE1BQUs7a0NBQVc7Ozs7OztvQkFBYztvQkFBRztvQkFDdENSLHlCQUNDOzswQ0FDRSw4REFBQ0wsa0RBQUlBO2dDQUFDYSxNQUFLOzBDQUFhOzs7Ozs7NEJBQWdCOzRCQUFHOzBDQUMzQyw4REFBQ0s7Z0NBQU9DLFNBQVNWO2dDQUFjTyxPQUFPO29DQUFFSSxRQUFRO2dDQUFVOzBDQUFHOzs7Ozs7O3FEQUcvRCw4REFBQ3BCLGtEQUFJQTt3QkFBQ2EsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7OzBCQUd4Qiw4REFBQ0M7MEJBQUtWOzs7Ozs7Ozs7Ozs7QUFHWiIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbmRlci1mcm9udGVuZC8uL2NvbXBvbmVudHMvTGF5b3V0LnRzeD8zYzhmIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG4gIH07XHJcbiAgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoe2NoaWxkcmVufTogIFByb3BzKSB7XHJcbiAgY29uc3QgW2xvZ2dlZEluLCBzZXRMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRMb2dnZWRJbighIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2xvZ2luJztcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPG5hdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcyMHB4JyB9fT5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPkhvbWU8L0xpbms+IHx7JyAnfVxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcGFuaWVzXCI+Q29tcGFuaWVzPC9MaW5rPiB8eycgJ31cclxuICAgICAgICA8TGluayBocmVmPVwiL2NvbXBhbmllcy9uZXdcIj5DcmVhdGUgQ29tcGFueTwvTGluaz4gfHsnICd9XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi90ZW5kZXJzXCI+VGVuZGVyczwvTGluaz4gfHsnICd9XHJcbiAgICAgICAge2xvZ2dlZEluID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmRcIj5EYXNoYm9hcmQ8L0xpbms+IHx7JyAnfVxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+TG9nb3V0PC9idXR0b24+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPkxvZ2luPC9MaW5rPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgICA8ZGl2PntjaGlsZHJlbn08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxheW91dCIsImNoaWxkcmVuIiwibG9nZ2VkSW4iLCJzZXRMb2dnZWRJbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZGl2IiwibmF2Iiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJidXR0b24iLCJvbkNsaWNrIiwiY3Vyc29yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"E:\\\\fullstack\\\\frontend\\\\pages\\\\_app.tsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\fullstack\\\\frontend\\\\pages\\\\_app.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUMwQztBQUUzQixTQUFTQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzVELHFCQUNFLDhEQUFDSCwwREFBTUE7a0JBQ0wsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW5kZXItZnJvbnRlbmQvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxheW91dCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();