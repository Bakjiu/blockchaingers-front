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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Node_info\": function() { return /* binding */ Node_info; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_icons_material_ArrowRight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/ArrowRight */ \"./node_modules/@mui/icons-material/ArrowRight.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar datas = [\n    {\n        status: \"start\",\n        name: \"아무개\",\n        address: \"\",\n        best_block: \"\",\n        veersion: \"\"\n    }, \n];\nvar Node_info = function(props) {\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Card, _objectSpread({\n        sx: {\n            height: \"100%\"\n        }\n    }, props, {\n        __source: {\n            fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/node_info.js\",\n            lineNumber: 26,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardContent, {\n            __source: {\n                fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/node_info.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {\n                    container: true,\n                    spacing: 3,\n                    sx: {\n                        justifyContent: \"space-between\"\n                    },\n                    __source: {\n                        fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/node_info.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {\n                        item: true,\n                        __source: {\n                            fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/node_info.js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n                                color: \"textSecondary\",\n                                gutterBottom: true,\n                                variant: \"overline\",\n                                __source: {\n                                    fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/node_info.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: \"Selected Node Information\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                                __source: {\n                                    fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/node_info.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                },\n                                __self: _this\n                            }),\n                            datas.map(function(data) {\n                                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n                                    color: \"black\",\n                                    variant: \"caption\",\n                                    __source: {\n                                        fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/node_info.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                                            __source: {\n                                                fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/node_info.js\",\n                                                lineNumber: 36,\n                                                columnNumber: 17\n                                            },\n                                            __self: _this1,\n                                            children: [\n                                                \"Status: \",\n                                                data.status\n                                            ]\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                                            __source: {\n                                                fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/node_info.js\",\n                                                lineNumber: 37,\n                                                columnNumber: 17\n                                            },\n                                            __self: _this1,\n                                            children: [\n                                                \"Name: \",\n                                                data.name\n                                            ]\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                            __source: {\n                                                fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/node_info.js\",\n                                                lineNumber: 38,\n                                                columnNumber: 17\n                                            },\n                                            __self: _this1,\n                                            children: \"Address: \"\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                            __source: {\n                                                fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/node_info.js\",\n                                                lineNumber: 39,\n                                                columnNumber: 17\n                                            },\n                                            __self: _this1,\n                                            children: \"Best block:\"\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                            __source: {\n                                                fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/node_info.js\",\n                                                lineNumber: 40,\n                                                columnNumber: 17\n                                            },\n                                            __self: _this1,\n                                            children: \"Version: \"\n                                        })\n                                    ]\n                                });\n                            })\n                        ]\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    sx: {\n                        pt: 2,\n                        display: \"flex\",\n                        alignItems: \"center\"\n                    },\n                    __source: {\n                        fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/node_info.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n                        color: \"error\",\n                        sx: {\n                            mr: 1\n                        },\n                        variant: \"body2\",\n                        __source: {\n                            fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/node_info.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                            color: \"primary\",\n                            endIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_ArrowRight__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            }),\n                            size: \"big\",\n                            variant: \"text\",\n                            __source: {\n                                fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/node_info.js\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: \"View details\"\n                        })\n                    })\n                })\n            ]\n        })\n    })));\n};\n_c = Node_info;\nvar _c;\n$RefreshReg$(_c, \"Node_info\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvbm9kZV9pbmZvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFRc0I7QUFDMkM7QUFDaEI7QUFDVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzRCxHQUFLLENBQUNVLEtBQUssR0FBRyxDQUFDO0lBQ2IsQ0FBQztRQUNDQyxNQUFNLEVBQUUsQ0FBTztRQUNmQyxJQUFJLEVBQUUsQ0FBSztRQUNYQyxPQUFPLEVBQUUsQ0FBRTtRQUNYQyxVQUFVLEVBQUUsQ0FBRTtRQUNkQyxRQUFRLEVBQUUsQ0FBRTtJQUNkLENBQUM7QUFDSCxDQUFDO0FBRU0sR0FBSyxDQUFDQyxTQUFTLEdBQUcsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQzs7SUFDbkMsTUFBTSxzRUFDSGYsK0NBQUk7UUFBQ2dCLEVBQUUsRUFBRSxDQUFDO1lBQUNDLE1BQU0sRUFBRSxDQUFNO1FBQUMsQ0FBQztPQUFNRixLQUFLOzs7Ozs7O3dGQUNwQ2Qsc0RBQVc7Ozs7Ozs7O3FGQUNUQywrQ0FBSTtvQkFBQ2dCLFNBQVM7b0JBQUNDLE9BQU8sRUFBRSxDQUFDO29CQUFFSCxFQUFFLEVBQUUsQ0FBQzt3QkFBQ0ksY0FBYyxFQUFFLENBQWU7b0JBQUMsQ0FBQzs7Ozs7OztvR0FDaEVsQiwrQ0FBSTt3QkFBQ21CLElBQUk7Ozs7Ozs7O2lHQUNQbEIscURBQVU7Z0NBQUNtQixLQUFLLEVBQUMsQ0FBZTtnQ0FBQ0MsWUFBWTtnQ0FBQ0MsT0FBTyxFQUFDLENBQVU7Ozs7Ozs7MENBQUMsQ0FFbEU7O2lHQUNDQyxDQUFFOzs7Ozs7Ozs0QkFDRmpCLEtBQUssQ0FBQ2tCLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUk7OENBQ2QsTUFBTSx5REFBTHhCLHFEQUFVO29DQUFDbUIsS0FBSyxFQUFDLENBQU87b0NBQUNFLE9BQU8sRUFBQyxDQUFTOzs7Ozs7Ozs4R0FDeENJLENBQUM7Ozs7Ozs7O2dEQUFDLENBQVE7Z0RBQUNELElBQUksQ0FBQ2xCLE1BQU07Ozs4R0FDdEJtQixDQUFDOzs7Ozs7OztnREFBQyxDQUFNO2dEQUFDRCxJQUFJLENBQUNqQixJQUFJOzs7NkdBQ2xCa0IsQ0FBQzs7Ozs7OztzREFBQyxDQUFTOzs2R0FDWEEsQ0FBQzs7Ozs7OztzREFBQyxDQUFXOzs2R0FDYkEsQ0FBQzs7Ozs7OztzREFBQyxDQUFTOzs7Ozs7OztxRkFLbkI3Qiw4Q0FBRztvQkFDRmlCLEVBQUUsRUFBRSxDQUFDO3dCQUNIYSxFQUFFLEVBQUUsQ0FBQzt3QkFDTEMsT0FBTyxFQUFFLENBQU07d0JBQ2ZDLFVBQVUsRUFBRSxDQUFRO29CQUN0QixDQUFDOzs7Ozs7O21HQUVBNUIscURBQVU7d0JBQ1RtQixLQUFLLEVBQUMsQ0FBTzt3QkFDYk4sRUFBRSxFQUFFLENBQUM7NEJBQ0hnQixFQUFFLEVBQUUsQ0FBQzt3QkFDUCxDQUFDO3dCQUNEUixPQUFPLEVBQUMsQ0FBTzs7Ozs7Ozt1R0FFZHBCLGlEQUFNOzRCQUNMa0IsS0FBSyxFQUFDLENBQVM7NEJBQ2ZXLE9BQU8sdUVBQUcxQixzRUFBYzs7NEJBQ3hCMkIsSUFBSSxFQUFDLENBQUs7NEJBQ1ZWLE9BQU8sRUFBQyxDQUFNOzs7Ozs7O3NDQUNmLENBRUQ7Ozs7Ozs7QUFNWixDQUFDO0tBaERZVixTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9ub2RlX2luZm8uanM/ZjMxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBdmF0YXIsXG4gIEJveCxcbiAgQ2FyZCxcbiAgQ2FyZENvbnRlbnQsXG4gIEdyaWQsXG4gIFR5cG9ncmFwaHksXG4gIEJ1dHRvbixcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBBcnJvd0Rvd253YXJkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0Rvd253YXJkXCI7XG5pbXBvcnQgTW9uZXlJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL01vbmV5XCI7XG5pbXBvcnQgQXJyb3dSaWdodEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dSaWdodFwiO1xuXG5jb25zdCBkYXRhcyA9IFtcbiAge1xuICAgIHN0YXR1czogXCJzdGFydFwiLFxuICAgIG5hbWU6IFwi7JWE66y06rCcXCIsXG4gICAgYWRkcmVzczogXCJcIixcbiAgICBiZXN0X2Jsb2NrOiBcIlwiLFxuICAgIHZlZXJzaW9uOiBcIlwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IE5vZGVfaW5mbyA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDYXJkIHN4PXt7IGhlaWdodDogXCIxMDAlXCIgfX0gey4uLnByb3BzfT5cbiAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IHN4PXt7IGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiB9fT5cbiAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJvdmVybGluZVwiPlxuICAgICAgICAgICAgICBTZWxlY3RlZCBOb2RlIEluZm9ybWF0aW9uXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIHtkYXRhcy5tYXAoKGRhdGEpID0+IChcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJibGFja1wiIHZhcmlhbnQ9XCJjYXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgPHA+U3RhdHVzOiB7ZGF0YS5zdGF0dXN9PC9wPlxuICAgICAgICAgICAgICAgIDxwPk5hbWU6IHtkYXRhLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDxwPkFkZHJlc3M6IDwvcD5cbiAgICAgICAgICAgICAgICA8cD5CZXN0IGJsb2NrOjwvcD5cbiAgICAgICAgICAgICAgICA8cD5WZXJzaW9uOiA8L3A+XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIHB0OiAyLFxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgY29sb3I9XCJlcnJvclwiXG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBtcjogMSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgZW5kSWNvbj17PEFycm93UmlnaHRJY29uIC8+fVxuICAgICAgICAgICAgICBzaXplPVwiYmlnXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cInRleHRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBWaWV3IGRldGFpbHNcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiQXZhdGFyIiwiQm94IiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiR3JpZCIsIlR5cG9ncmFwaHkiLCJCdXR0b24iLCJBcnJvd0Rvd253YXJkSWNvbiIsIk1vbmV5SWNvbiIsIkFycm93UmlnaHRJY29uIiwiZGF0YXMiLCJzdGF0dXMiLCJuYW1lIiwiYWRkcmVzcyIsImJlc3RfYmxvY2siLCJ2ZWVyc2lvbiIsIk5vZGVfaW5mbyIsInByb3BzIiwic3giLCJoZWlnaHQiLCJjb250YWluZXIiLCJzcGFjaW5nIiwianVzdGlmeUNvbnRlbnQiLCJpdGVtIiwiY29sb3IiLCJndXR0ZXJCb3R0b20iLCJ2YXJpYW50IiwiYnIiLCJtYXAiLCJkYXRhIiwicCIsInB0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJtciIsImVuZEljb24iLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/dashboard/node_info.js\n");

/***/ })

});