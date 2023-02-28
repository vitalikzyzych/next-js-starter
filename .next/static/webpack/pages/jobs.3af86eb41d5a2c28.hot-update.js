"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/jobs",{

/***/ "./src/pages/jobs/components/JobItem.tsx":
/*!***********************************************!*\
  !*** ./src/pages/jobs/components/JobItem.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils */ \"./src/utils/index.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/vitalikzyzych/projects/bountiful/next-bountiful-app/src/pages/jobs/components/JobItem.tsx\",\n    _this = undefined;\n\n\n// import { IJob2 } from '../types';\n\n\n\nvar JobItem = function JobItem(_ref) {\n  var _jobs$id$reward, _jobs$id$startsAt, _jobs$id$endsAt;\n\n  var id = _ref.id,\n      jobs = _ref.jobs;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"job-item col-12 md:col-6 lg:col-4 xl:col-3\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"job-item-card card flex-column align-items-start justify-content-start m-2\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"flex justify-content-center align-items-center mb-1\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n          className: \"jobstatus \".concat(jobs[id].status.toLocaleLowerCase(), \" inline-block\")\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"label\", {\n          className: \"text-xs\",\n          children: (0,utils__WEBPACK_IMPORTED_MODULE_1__.toCamelCase)(jobs[id].status)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n        className: \"mb-1 text-lg font-medium text-purple-900\",\n        children: jobs[id].title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"label\", {\n        children: \"\".concat((_jobs$id$reward = jobs[id].reward) === null || _jobs$id$reward === void 0 ? void 0 : _jobs$id$reward.amount, \" Bounty\")\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"flex justify-content-start align-items-center\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"i\", {\n          className: \"pi pi-book mr-3\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n          children: \"\".concat(jobs[id].applicantCount, \" Applicants\")\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"flex justify-content-start align-items-center\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"i\", {\n          className: \"pi pi-amazon mr-3\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n          children: \"\".concat(jobs[id].referrerCount, \" Applicants\")\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"dates-content mt-3\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          className: \"card flex justify-content-start align-items-center\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"i\", {\n            className: \"pi pi-calendar mr-1 text-xs\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n            className: \"text-xs\",\n            children: \"\".concat((0,utils__WEBPACK_IMPORTED_MODULE_1__.formattedDate)((_jobs$id$startsAt = jobs[id].startsAt) === null || _jobs$id$startsAt === void 0 ? void 0 : _jobs$id$startsAt.seconds), \" - \").concat((0,utils__WEBPACK_IMPORTED_MODULE_1__.formattedDate)((_jobs$id$endsAt = jobs[id].endsAt) === null || _jobs$id$endsAt === void 0 ? void 0 : _jobs$id$endsAt.seconds))\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = JobItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JobItem);\n\nvar _c;\n\n$RefreshReg$(_c, \"JobItem\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvam9icy9jb21wb25lbnRzL0pvYkl0ZW0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTs7O0FBT0EsSUFBTUcsT0FBeUIsR0FBRyxTQUE1QkEsT0FBNEIsT0FBa0I7RUFBQTs7RUFBQSxJQUFmQyxFQUFlLFFBQWZBLEVBQWU7RUFBQSxJQUFYQyxJQUFXLFFBQVhBLElBQVc7RUFDbEQsb0JBQ0U7SUFBSyxTQUFTLEVBQUMsNENBQWY7SUFBQSx1QkFDRTtNQUFLLFNBQVMsRUFBQyw0RUFBZjtNQUFBLHdCQUNFO1FBQUssU0FBUyxFQUFDLHFEQUFmO1FBQUEsd0JBQ0U7VUFBTSxTQUFTLHNCQUFlQSxJQUFJLENBQUNELEVBQUQsQ0FBSixDQUFTRSxNQUFULENBQWdCQyxpQkFBaEIsRUFBZjtRQUFmO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FERixlQUVFO1VBQU8sU0FBUyxFQUFDLFNBQWpCO1VBQUEsVUFBNEJMLGtEQUFXLENBQUNHLElBQUksQ0FBQ0QsRUFBRCxDQUFKLENBQVNFLE1BQVY7UUFBdkM7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQUZGO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQURGLGVBS0U7UUFBTSxTQUFTLEVBQUMsMENBQWhCO1FBQUEsVUFBNERELElBQUksQ0FBQ0QsRUFBRCxDQUFKLENBQVNJO01BQXJFO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FMRixlQU1FO1FBQUEsdUNBQVdILElBQUksQ0FBQ0QsRUFBRCxDQUFKLENBQVNLLE1BQXBCLG9EQUFXLGdCQUFpQkMsTUFBNUI7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBTkYsZUFPRTtRQUFLLFNBQVMsRUFBQywrQ0FBZjtRQUFBLHdCQUNFO1VBQUcsU0FBUyxFQUFDO1FBQWI7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQURGLGVBRUU7VUFBQSxvQkFBT0wsSUFBSSxDQUFDRCxFQUFELENBQUosQ0FBU08sY0FBaEI7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBRkY7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBUEYsZUFXRTtRQUFLLFNBQVMsRUFBQywrQ0FBZjtRQUFBLHdCQUNFO1VBQUcsU0FBUyxFQUFDO1FBQWI7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQURGLGVBRUU7VUFBQSxvQkFBT04sSUFBSSxDQUFDRCxFQUFELENBQUosQ0FBU1EsYUFBaEI7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBRkY7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBWEYsZUFlRTtRQUFLLFNBQVMsRUFBQyxvQkFBZjtRQUFBLHVCQUNFO1VBQUssU0FBUyxFQUFDLG9EQUFmO1VBQUEsd0JBQ0U7WUFBRyxTQUFTLEVBQUM7VUFBYjtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBREYsZUFFRTtZQUFHLFNBQVMsRUFBQyxTQUFiO1lBQUEsb0JBQTJCWCxvREFBYSxzQkFBQ0ksSUFBSSxDQUFDRCxFQUFELENBQUosQ0FBU1MsUUFBVixzREFBQyxrQkFBbUJDLE9BQXBCLENBQXhDLGdCQUEwRWIsb0RBQWEsb0JBQ3JGSSxJQUFJLENBQUNELEVBQUQsQ0FBSixDQUFTVyxNQUQ0RSxvREFDckYsZ0JBQWlCRCxPQURvRSxDQUF2RjtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FGRjtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFERjtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBZkY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBREY7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBNEJELENBN0JEOztLQUFNWDtBQStCTiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvam9icy9jb21wb25lbnRzL0pvYkl0ZW0udHN4P2Y5YjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElKb2IsIFN0b3JlZERvY3VtZW50cyB9IGZyb20gJ3R5cGVzJztcbi8vIGltcG9ydCB7IElKb2IyIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBmb3JtYXR0ZWREYXRlLCB0b0NhbWVsQ2FzZSB9IGZyb20gJ3V0aWxzJztcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGlkOiBzdHJpbmc7XG4gIGpvYnM6IFN0b3JlZERvY3VtZW50czxJSm9iPjtcbn1cblxuY29uc3QgSm9iSXRlbTogUmVhY3QuRkM8SVByb3BzPiA9ICh7IGlkLCBqb2JzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImpvYi1pdGVtIGNvbC0xMiBtZDpjb2wtNiBsZzpjb2wtNCB4bDpjb2wtM1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJqb2ItaXRlbS1jYXJkIGNhcmQgZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtc3RhcnQganVzdGlmeS1jb250ZW50LXN0YXJ0IG0tMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGpvYnN0YXR1cyAke2pvYnNbaWRdLnN0YXR1cy50b0xvY2FsZUxvd2VyQ2FzZSgpfSBpbmxpbmUtYmxvY2tgfT48L3NwYW4+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHNcIj57dG9DYW1lbENhc2Uoam9ic1tpZF0uc3RhdHVzKX08L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWItMSB0ZXh0LWxnIGZvbnQtbWVkaXVtIHRleHQtcHVycGxlLTkwMFwiPntqb2JzW2lkXS50aXRsZX08L3NwYW4+XG4gICAgICAgIDxsYWJlbD57YCR7am9ic1tpZF0ucmV3YXJkPy5hbW91bnR9IEJvdW50eWB9PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY29udGVudC1zdGFydCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwaSBwaS1ib29rIG1yLTNcIj48L2k+XG4gICAgICAgICAgPHA+e2Ake2pvYnNbaWRdLmFwcGxpY2FudENvdW50fSBBcHBsaWNhbnRzYH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBpIHBpLWFtYXpvbiBtci0zXCI+PC9pPlxuICAgICAgICAgIDxwPntgJHtqb2JzW2lkXS5yZWZlcnJlckNvdW50fSBBcHBsaWNhbnRzYH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVzLWNvbnRlbnQgbXQtM1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBmbGV4IGp1c3RpZnktY29udGVudC1zdGFydCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBpIHBpLWNhbGVuZGFyIG1yLTEgdGV4dC14c1wiPjwvaT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHNcIj57YCR7Zm9ybWF0dGVkRGF0ZShqb2JzW2lkXS5zdGFydHNBdD8uc2Vjb25kcyl9IC0gJHtmb3JtYXR0ZWREYXRlKFxuICAgICAgICAgICAgICBqb2JzW2lkXS5lbmRzQXQ/LnNlY29uZHMsXG4gICAgICAgICAgICApfWB9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSm9iSXRlbTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImZvcm1hdHRlZERhdGUiLCJ0b0NhbWVsQ2FzZSIsIkpvYkl0ZW0iLCJpZCIsImpvYnMiLCJzdGF0dXMiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsInRpdGxlIiwicmV3YXJkIiwiYW1vdW50IiwiYXBwbGljYW50Q291bnQiLCJyZWZlcnJlckNvdW50Iiwic3RhcnRzQXQiLCJzZWNvbmRzIiwiZW5kc0F0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/jobs/components/JobItem.tsx\n"));

/***/ })

});