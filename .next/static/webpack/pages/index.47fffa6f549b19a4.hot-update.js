"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/dashboard/node_info.js":
/*!***********************************************!*\
  !*** ./src/components/dashboard/node_info.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Node_info\": function() { return /* binding */ Node_info; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_icons_material_ArrowRight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/ArrowRight */ \"./node_modules/@mui/icons-material/ArrowRight.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n// import MoneyIcon from \"@mui/icons-material/Money\";\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar info = [\n    {\n        id: 1,\n        Status: \"Start\",\n        Adrress: \"\",\n        Best_block: \"\",\n        Version: \"\"\n    }, \n];\nvar Node_info = function(props) {\n    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, _objectSpread({\n        sx: {\n            height: \"100%\"\n        }\n    }, props, {\n        __source: {\n            fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/node_info.js\",\n            lineNumber: 25,\n            columnNumber: 3\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n            __source: {\n                fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/node_info.js\",\n                lineNumber: 26,\n                columnNumber: 5\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                    container: true,\n                    spacing: 3,\n                    sx: {\n                        justifyContent: \"space-between\"\n                    },\n                    __source: {\n                        fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/node_info.js\",\n                        lineNumber: 27,\n                        columnNumber: 7\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                        item: true,\n                        __source: {\n                            fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/node_info.js\",\n                            lineNumber: 28,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                                color: \"textSecondary\",\n                                gutterBottom: true,\n                                variant: \"overline\",\n                                __source: {\n                                    fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/node_info.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: \"Selected Node Information\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                                __source: {\n                                    fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/node_info.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 11\n                                },\n                                __self: _this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                                color: \"black\",\n                                variant: \"caption\",\n                                __source: {\n                                    fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/node_info.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: [\n                                    nprogress__WEBPACK_IMPORTED_MODULE_1__.status,\n                                    name,\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        __source: {\n                                            fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/node_info.js\",\n                                            lineNumber: 36,\n                                            columnNumber: 13\n                                        },\n                                        __self: _this,\n                                        children: \"Address: \"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        __source: {\n                                            fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/node_info.js\",\n                                            lineNumber: 37,\n                                            columnNumber: 13\n                                        },\n                                        __self: _this,\n                                        children: \"Best block:\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        __source: {\n                                            fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/node_info.js\",\n                                            lineNumber: 38,\n                                            columnNumber: 13\n                                        },\n                                        __self: _this,\n                                        children: \"Version: \"\n                                    }),\n                                    \"}\"\n                                ]\n                            })\n                        ]\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                    sx: {\n                        pt: 2,\n                        display: \"flex\",\n                        alignItems: \"center\"\n                    },\n                    __source: {\n                        fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/node_info.js\",\n                        lineNumber: 43,\n                        columnNumber: 7\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        color: \"primary\",\n                        endIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_ArrowRight__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        }),\n                        size: \"small\",\n                        variant: \"text\",\n                        __source: {\n                            fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/node_info.js\",\n                            lineNumber: 50,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"View detail\"\n                    })\n                })\n            ]\n        })\n    }));\n};\n_c = Node_info;\nvar _c;\n$RefreshReg$(_c, \"Node_info\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvbm9kZV9pbmZvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFzQjtBQUMyQztBQUNqRSxFQUFxRDtBQUNNO0FBQ3pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLEdBQUssQ0FBQ1UsSUFBSSxHQUFHLENBQUM7SUFDWixDQUFDO1FBQ0NDLEVBQUUsRUFBRSxDQUFDO1FBQ0xDLE1BQU0sRUFBRSxDQUFPO1FBQ2ZDLE9BQU8sRUFBRSxDQUFFO1FBQ1hDLFVBQVUsRUFBRSxDQUFFO1FBQ2RDLE9BQU8sRUFBRSxDQUFFO0lBQ2IsQ0FBQztBQUNILENBQUM7QUFDTSxHQUFLLENBQUNDLFNBQVMsR0FBRyxRQUFRLENBQVBDLEtBQUs7a0JBQzdCLE1BQU1DLENBQUFBLHNEQUFBQSxDQUFMaEIsK0NBQUk7UUFBQ2dCLEVBQUUsRUFBRSxDQUFDO1lBQUNDLE1BQU0sRUFBRSxDQUFNO1FBQUMsQ0FBQztPQUFNRixLQUFLOzs7Ozs7O3dGQUNwQ2Qsc0RBQVc7Ozs7Ozs7O3FGQUNUQywrQ0FBSTtvQkFBQ2dCLFNBQVM7b0JBQUNDLE9BQU8sRUFBRSxDQUFDO29CQUFFSCxFQUFFLEVBQUUsQ0FBQzt3QkFBQ0ksY0FBYyxFQUFFLENBQWU7b0JBQUMsQ0FBQzs7Ozs7OztvR0FDaEVsQiwrQ0FBSTt3QkFBQ21CLElBQUk7Ozs7Ozs7O2lHQUNQbEIscURBQVU7Z0NBQUNtQixLQUFLLEVBQUMsQ0FBZTtnQ0FBQ0MsWUFBWTtnQ0FBQ0MsT0FBTyxFQUFDLENBQVU7Ozs7Ozs7MENBQUMsQ0FFbEU7O2lHQUNDQyxDQUFFOzs7Ozs7OztrR0FDRnRCLHFEQUFVO2dDQUFDbUIsS0FBSyxFQUFDLENBQU87Z0NBQUNFLE9BQU8sRUFBQyxDQUFTOzs7Ozs7OztvQ0FDeENqQiw2Q0FBTTtvQ0FDTm1CLElBQUk7eUdBQ0pDLENBQUM7Ozs7Ozs7a0RBQUMsQ0FBUzs7eUdBQ1hBLENBQUM7Ozs7Ozs7a0RBQUMsQ0FBVzs7eUdBQ2JBLENBQUM7Ozs7Ozs7a0RBQUMsQ0FBUzs7b0NBQUksQ0FDbEI7Ozs7OztxRkFJSDVCLDhDQUFHO29CQUNGaUIsRUFBRSxFQUFFLENBQUM7d0JBQ0hZLEVBQUUsRUFBRSxDQUFDO3dCQUNMQyxPQUFPLEVBQUUsQ0FBTTt3QkFDZkMsVUFBVSxFQUFFLENBQVE7b0JBQ3RCLENBQUM7Ozs7Ozs7bUdBRUExQixpREFBTTt3QkFDTGtCLEtBQUssRUFBQyxDQUFTO3dCQUNmUyxPQUFPLHVFQUFHekIsc0VBQWM7O3dCQUN4QjBCLElBQUksRUFBQyxDQUFPO3dCQUNaUixPQUFPLEVBQUMsQ0FBTTs7Ozs7OztrQ0FDZixDQUVEOzs7Ozs7O0tBakNLVixTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9ub2RlX2luZm8uanM/ZjMxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBdmF0YXIsXG4gIEJveCxcbiAgQ2FyZCxcbiAgQ2FyZENvbnRlbnQsXG4gIEdyaWQsXG4gIFR5cG9ncmFwaHksXG4gIEJ1dHRvbixcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBBcnJvd0Rvd253YXJkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0Rvd253YXJkXCI7XG4vLyBpbXBvcnQgTW9uZXlJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL01vbmV5XCI7XG5pbXBvcnQgQXJyb3dSaWdodEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dSaWdodFwiO1xuaW1wb3J0IHsgc3RhdHVzIH0gZnJvbSBcIm5wcm9ncmVzc1wiO1xuXG5jb25zdCBpbmZvID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgU3RhdHVzOiBcIlN0YXJ0XCIsXG4gICAgQWRycmVzczogXCJcIixcbiAgICBCZXN0X2Jsb2NrOiBcIlwiLFxuICAgIFZlcnNpb246IFwiXCIsXG4gIH0sXG5dO1xuZXhwb3J0IGNvbnN0IE5vZGVfaW5mbyA9IChwcm9wcykgPT4gKFxuICA8Q2FyZCBzeD17eyBoZWlnaHQ6IFwiMTAwJVwiIH19IHsuLi5wcm9wc30+XG4gICAgPENhcmRDb250ZW50PlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IHN4PXt7IGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiB9fT5cbiAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBndXR0ZXJCb3R0b20gdmFyaWFudD1cIm92ZXJsaW5lXCI+XG4gICAgICAgICAgICBTZWxlY3RlZCBOb2RlIEluZm9ybWF0aW9uXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwiYmxhY2tcIiB2YXJpYW50PVwiY2FwdGlvblwiPlxuICAgICAgICAgICAge3N0YXR1c31cbiAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgPHA+QWRkcmVzczogPC9wPlxuICAgICAgICAgICAgPHA+QmVzdCBibG9jazo8L3A+XG4gICAgICAgICAgICA8cD5WZXJzaW9uOiA8L3A+fVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuXG4gICAgICA8Qm94XG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgcHQ6IDIsXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgZW5kSWNvbj17PEFycm93UmlnaHRJY29uIC8+fVxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgdmFyaWFudD1cInRleHRcIlxuICAgICAgICA+XG4gICAgICAgICAgVmlldyBkZXRhaWxcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0JveD5cbiAgICA8L0NhcmRDb250ZW50PlxuICA8L0NhcmQ+XG4pO1xuIl0sIm5hbWVzIjpbIkF2YXRhciIsIkJveCIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkdyaWQiLCJUeXBvZ3JhcGh5IiwiQnV0dG9uIiwiQXJyb3dEb3dud2FyZEljb24iLCJBcnJvd1JpZ2h0SWNvbiIsInN0YXR1cyIsImluZm8iLCJpZCIsIlN0YXR1cyIsIkFkcnJlc3MiLCJCZXN0X2Jsb2NrIiwiVmVyc2lvbiIsIk5vZGVfaW5mbyIsInByb3BzIiwic3giLCJoZWlnaHQiLCJjb250YWluZXIiLCJzcGFjaW5nIiwianVzdGlmeUNvbnRlbnQiLCJpdGVtIiwiY29sb3IiLCJndXR0ZXJCb3R0b20iLCJ2YXJpYW50IiwiYnIiLCJuYW1lIiwicCIsInB0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJlbmRJY29uIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/dashboard/node_info.js\n");

/***/ })

});