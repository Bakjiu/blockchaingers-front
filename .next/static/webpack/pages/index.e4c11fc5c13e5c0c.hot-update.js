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

/***/ "./src/components/dashboard/latest-orders.js":
/*!***************************************************!*\
  !*** ./src/components/dashboard/latest-orders.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LatestOrders\": function() { return /* binding */ LatestOrders; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-perfect-scrollbar */ \"./node_modules/react-perfect-scrollbar/lib/index.js\");\n/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_icons_material_ArrowRight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/ArrowRight */ \"./node_modules/@mui/icons-material/ArrowRight.js\");\n/* harmony import */ var _severity_pill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../severity-pill */ \"./src/components/severity-pill.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar orders = [\n    {\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(),\n        ref: \"CDD1049\",\n        amount: 30.5,\n        customer: {\n            name: \"Ekaterina Tankova\"\n        },\n        createdAt: 1555016400000,\n        status: \"pending\"\n    },\n    {\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(),\n        ref: \"CDD1048\",\n        amount: 25.1,\n        customer: {\n            name: \"Cao Yu\"\n        },\n        createdAt: 1555016400000,\n        status: \"delivered\"\n    },\n    {\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(),\n        ref: \"CDD1047\",\n        amount: 10.99,\n        customer: {\n            name: \"Alexa Richardson\"\n        },\n        createdAt: 1554930000000,\n        status: \"refunded\"\n    },\n    {\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(),\n        ref: \"CDD1046\",\n        amount: 96.43,\n        customer: {\n            name: \"Anje Keizer\"\n        },\n        createdAt: 1554757200000,\n        status: \"pending\"\n    },\n    {\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(),\n        ref: \"CDD1045\",\n        amount: 32.54,\n        customer: {\n            name: \"Clarke Gillebert\"\n        },\n        createdAt: 1554670800000,\n        status: \"delivered\"\n    },\n    {\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(),\n        ref: \"CDD1044\",\n        amount: 16.76,\n        customer: {\n            name: \"Adam Denisov\"\n        },\n        createdAt: 1554670800000,\n        status: \"delivered\"\n    }, \n];\nvar LatestOrders = function(props) {\n    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Card, _objectSpread({\n        style: {\n            maxWidth: \"1200px\",\n            width: \"1100px\"\n        }\n    }, props, {\n        __source: {\n            fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n            lineNumber: 84,\n            columnNumber: 3\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.CardHeader, {\n                title: \"Latest Orders\",\n                __source: {\n                    fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                    lineNumber: 91,\n                    columnNumber: 5\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default()), {\n                __source: {\n                    fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                    lineNumber: 92,\n                    columnNumber: 5\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                    sx: {\n                        minWidth: 800\n                    },\n                    __source: {\n                        fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                        lineNumber: 93,\n                        columnNumber: 7\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Table, {\n                        __source: {\n                            fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                            lineNumber: 94,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableHead, {\n                                __source: {\n                                    fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableRow, {\n                                    __source: {\n                                        fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                                        lineNumber: 96,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                            __source: {\n                                                fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                                                lineNumber: 97,\n                                                columnNumber: 15\n                                            },\n                                            __self: _this,\n                                            children: \"Order Ref\"\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                            __source: {\n                                                fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                                                lineNumber: 98,\n                                                columnNumber: 15\n                                            },\n                                            __self: _this,\n                                            children: \"Customer\"\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                            sortDirection: \"desc\",\n                                            __source: {\n                                                fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                                                lineNumber: 99,\n                                                columnNumber: 15\n                                            },\n                                            __self: _this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {\n                                                enterDelay: 300,\n                                                title: \"Sort\",\n                                                __source: {\n                                                    fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                                                    lineNumber: 100,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this,\n                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableSortLabel, {\n                                                    active: true,\n                                                    direction: \"desc\",\n                                                    __source: {\n                                                        fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                                                        lineNumber: 101,\n                                                        columnNumber: 19\n                                                    },\n                                                    __self: _this,\n                                                    children: \"Date\"\n                                                })\n                                            })\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                            __source: {\n                                                fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                                                lineNumber: 106,\n                                                columnNumber: 15\n                                            },\n                                            __self: _this,\n                                            children: \"Status\"\n                                        })\n                                    ]\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableBody, {\n                                __source: {\n                                    fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                                    lineNumber: 109,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: orders.map(function(order) {\n                                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableRow, {\n                                        hover: true,\n                                        __source: {\n                                            fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                                            lineNumber: 111,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                                __source: {\n                                                    fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                                                    lineNumber: 112,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this,\n                                                children: order.ref\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                                __source: {\n                                                    fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                                                    lineNumber: 113,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this,\n                                                children: order.customer.name\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                                __source: {\n                                                    fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                                                    lineNumber: 114,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this,\n                                                children: (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)(order.createdAt, \"dd/MM/yyyy\")\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                                __source: {\n                                                    fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                                                    lineNumber: 115,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this,\n                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_severity_pill__WEBPACK_IMPORTED_MODULE_2__.SeverityPill, {\n                                                    color: order.status === \"delivered\" && \"success\" || order.status === \"refunded\" && \"error\" || \"warning\",\n                                                    __source: {\n                                                        fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                                                        lineNumber: 116,\n                                                        columnNumber: 19\n                                                    },\n                                                    __self: _this,\n                                                    children: order.status\n                                                })\n                                            })\n                                        ]\n                                    }, order.id);\n                                })\n                            })\n                        ]\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                sx: {\n                    display: \"flex\",\n                    justifyContent: \"flex-end\",\n                    p: 2\n                },\n                __source: {\n                    fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                    lineNumber: 132,\n                    columnNumber: 5\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    color: \"primary\",\n                    endIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_ArrowRight__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        fontSize: \"small\"\n                    }),\n                    size: \"small\",\n                    variant: \"text\",\n                    __source: {\n                        fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                        lineNumber: 139,\n                        columnNumber: 7\n                    },\n                    __self: _this,\n                    children: \"View all\"\n                })\n            })\n        ]\n    }));\n};\n_c = LatestOrders;\nvar _c;\n$RefreshReg$(_c, \"LatestOrders\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvbGF0ZXN0LW9yZGVycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDQTtBQUNxQjtBQWFoQztBQUNxQztBQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9DLEdBQUssQ0FBQ2lCLE1BQU0sR0FBRyxDQUFDO0lBQ2QsQ0FBQztRQUNDQyxFQUFFLEVBQUVoQix3Q0FBSTtRQUNSaUIsR0FBRyxFQUFFLENBQVM7UUFDZEMsTUFBTSxFQUFFLElBQUk7UUFDWkMsUUFBUSxFQUFFLENBQUM7WUFDVEMsSUFBSSxFQUFFLENBQW1CO1FBQzNCLENBQUM7UUFDREMsU0FBUyxFQUFFLGFBQWE7UUFDeEJDLE1BQU0sRUFBRSxDQUFTO0lBQ25CLENBQUM7SUFDRCxDQUFDO1FBQ0NOLEVBQUUsRUFBRWhCLHdDQUFJO1FBQ1JpQixHQUFHLEVBQUUsQ0FBUztRQUNkQyxNQUFNLEVBQUUsSUFBSTtRQUNaQyxRQUFRLEVBQUUsQ0FBQztZQUNUQyxJQUFJLEVBQUUsQ0FBUTtRQUNoQixDQUFDO1FBQ0RDLFNBQVMsRUFBRSxhQUFhO1FBQ3hCQyxNQUFNLEVBQUUsQ0FBVztJQUNyQixDQUFDO0lBQ0QsQ0FBQztRQUNDTixFQUFFLEVBQUVoQix3Q0FBSTtRQUNSaUIsR0FBRyxFQUFFLENBQVM7UUFDZEMsTUFBTSxFQUFFLEtBQUs7UUFDYkMsUUFBUSxFQUFFLENBQUM7WUFDVEMsSUFBSSxFQUFFLENBQWtCO1FBQzFCLENBQUM7UUFDREMsU0FBUyxFQUFFLGFBQWE7UUFDeEJDLE1BQU0sRUFBRSxDQUFVO0lBQ3BCLENBQUM7SUFDRCxDQUFDO1FBQ0NOLEVBQUUsRUFBRWhCLHdDQUFJO1FBQ1JpQixHQUFHLEVBQUUsQ0FBUztRQUNkQyxNQUFNLEVBQUUsS0FBSztRQUNiQyxRQUFRLEVBQUUsQ0FBQztZQUNUQyxJQUFJLEVBQUUsQ0FBYTtRQUNyQixDQUFDO1FBQ0RDLFNBQVMsRUFBRSxhQUFhO1FB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Ozs4QkFDZixDQUVEOzs7Ozs7S0EvRE90QixZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9sYXRlc3Qtb3JkZXJzLmpzPzkyMjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCBQZXJmZWN0U2Nyb2xsYmFyIGZyb20gXCJyZWFjdC1wZXJmZWN0LXNjcm9sbGJhclwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIENhcmQsXG4gIENhcmRIZWFkZXIsXG4gIFRhYmxlLFxuICBUYWJsZUJvZHksXG4gIFRhYmxlQ2VsbCxcbiAgVGFibGVIZWFkLFxuICBUYWJsZVJvdyxcbiAgVGFibGVTb3J0TGFiZWwsXG4gIFRvb2x0aXAsXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgQXJyb3dSaWdodEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dSaWdodFwiO1xuaW1wb3J0IHsgU2V2ZXJpdHlQaWxsIH0gZnJvbSBcIi4uL3NldmVyaXR5LXBpbGxcIjtcblxuY29uc3Qgb3JkZXJzID0gW1xuICB7XG4gICAgaWQ6IHV1aWQoKSxcbiAgICByZWY6IFwiQ0REMTA0OVwiLFxuICAgIGFtb3VudDogMzAuNSxcbiAgICBjdXN0b21lcjoge1xuICAgICAgbmFtZTogXCJFa2F0ZXJpbmEgVGFua292YVwiLFxuICAgIH0sXG4gICAgY3JlYXRlZEF0OiAxNTU1MDE2NDAwMDAwLFxuICAgIHN0YXR1czogXCJwZW5kaW5nXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogdXVpZCgpLFxuICAgIHJlZjogXCJDREQxMDQ4XCIsXG4gICAgYW1vdW50OiAyNS4xLFxuICAgIGN1c3RvbWVyOiB7XG4gICAgICBuYW1lOiBcIkNhbyBZdVwiLFxuICAgIH0sXG4gICAgY3JlYXRlZEF0OiAxNTU1MDE2NDAwMDAwLFxuICAgIHN0YXR1czogXCJkZWxpdmVyZWRcIixcbiAgfSxcbiAge1xuICAgIGlkOiB1dWlkKCksXG4gICAgcmVmOiBcIkNERDEwNDdcIixcbiAgICBhbW91bnQ6IDEwLjk5LFxuICAgIGN1c3RvbWVyOiB7XG4gICAgICBuYW1lOiBcIkFsZXhhIFJpY2hhcmRzb25cIixcbiAgICB9LFxuICAgIGNyZWF0ZWRBdDogMTU1NDkzMDAwMDAwMCxcbiAgICBzdGF0dXM6IFwicmVmdW5kZWRcIixcbiAgfSxcbiAge1xuICAgIGlkOiB1dWlkKCksXG4gICAgcmVmOiBcIkNERDEwNDZcIixcbiAgICBhbW91bnQ6IDk2LjQzLFxuICAgIGN1c3RvbWVyOiB7XG4gICAgICBuYW1lOiBcIkFuamUgS2VpemVyXCIsXG4gICAgfSxcbiAgICBjcmVhdGVkQXQ6IDE1NTQ3NTcyMDAwMDAsXG4gICAgc3RhdHVzOiBcInBlbmRpbmdcIixcbiAgfSxcbiAge1xuICAgIGlkOiB1dWlkKCksXG4gICAgcmVmOiBcIkNERDEwNDVcIixcbiAgICBhbW91bnQ6IDMyLjU0LFxuICAgIGN1c3RvbWVyOiB7XG4gICAgICBuYW1lOiBcIkNsYXJrZSBHaWxsZWJlcnRcIixcbiAgICB9LFxuICAgIGNyZWF0ZWRBdDogMTU1NDY3MDgwMDAwMCxcbiAgICBzdGF0dXM6IFwiZGVsaXZlcmVkXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogdXVpZCgpLFxuICAgIHJlZjogXCJDREQxMDQ0XCIsXG4gICAgYW1vdW50OiAxNi43NixcbiAgICBjdXN0b21lcjoge1xuICAgICAgbmFtZTogXCJBZGFtIERlbmlzb3ZcIixcbiAgICB9LFxuICAgIGNyZWF0ZWRBdDogMTU1NDY3MDgwMDAwMCxcbiAgICBzdGF0dXM6IFwiZGVsaXZlcmVkXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgTGF0ZXN0T3JkZXJzID0gKHByb3BzKSA9PiAoXG4gIDxDYXJkXG4gICAgc3R5bGU9e3tcbiAgICAgIG1heFdpZHRoOiBcIjEyMDBweFwiLFxuICAgICAgd2lkdGg6IFwiMTEwMHB4XCIsXG4gICAgfX1cbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICA8Q2FyZEhlYWRlciB0aXRsZT1cIkxhdGVzdCBPcmRlcnNcIiAvPlxuICAgIDxQZXJmZWN0U2Nyb2xsYmFyPlxuICAgICAgPEJveCBzeD17eyBtaW5XaWR0aDogODAwIH19PlxuICAgICAgICA8VGFibGU+XG4gICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5PcmRlciBSZWY8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5DdXN0b21lcjwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIHNvcnREaXJlY3Rpb249XCJkZXNjXCI+XG4gICAgICAgICAgICAgICAgPFRvb2x0aXAgZW50ZXJEZWxheT17MzAwfSB0aXRsZT1cIlNvcnRcIj5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZVNvcnRMYWJlbCBhY3RpdmUgZGlyZWN0aW9uPVwiZGVzY1wiPlxuICAgICAgICAgICAgICAgICAgICBEYXRlXG4gICAgICAgICAgICAgICAgICA8L1RhYmxlU29ydExhYmVsPlxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+U3RhdHVzPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICB7b3JkZXJzLm1hcCgob3JkZXIpID0+IChcbiAgICAgICAgICAgICAgPFRhYmxlUm93IGhvdmVyIGtleT17b3JkZXIuaWR9PlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e29yZGVyLnJlZn08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntvcmRlci5jdXN0b21lci5uYW1lfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2Zvcm1hdChvcmRlci5jcmVhdGVkQXQsIFwiZGQvTU0veXl5eVwiKX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgPFNldmVyaXR5UGlsbFxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17XG4gICAgICAgICAgICAgICAgICAgICAgKG9yZGVyLnN0YXR1cyA9PT0gXCJkZWxpdmVyZWRcIiAmJiBcInN1Y2Nlc3NcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAob3JkZXIuc3RhdHVzID09PSBcInJlZnVuZGVkXCIgJiYgXCJlcnJvclwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgIFwid2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge29yZGVyLnN0YXR1c31cbiAgICAgICAgICAgICAgICAgIDwvU2V2ZXJpdHlQaWxsPlxuICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgIDwvVGFibGU+XG4gICAgICA8L0JveD5cbiAgICA8L1BlcmZlY3RTY3JvbGxiYXI+XG4gICAgPEJveFxuICAgICAgc3g9e3tcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsXG4gICAgICAgIHA6IDIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgZW5kSWNvbj17PEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiAvPn1cbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgdmFyaWFudD1cInRleHRcIlxuICAgICAgPlxuICAgICAgICBWaWV3IGFsbFxuICAgICAgPC9CdXR0b24+XG4gICAgPC9Cb3g+XG4gIDwvQ2FyZD5cbik7XG4iXSwibmFtZXMiOlsiZm9ybWF0IiwidjQiLCJ1dWlkIiwiUGVyZmVjdFNjcm9sbGJhciIsIkJveCIsIkJ1dHRvbiIsIkNhcmQiLCJDYXJkSGVhZGVyIiwiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsIlRhYmxlU29ydExhYmVsIiwiVG9vbHRpcCIsIkFycm93UmlnaHRJY29uIiwiU2V2ZXJpdHlQaWxsIiwib3JkZXJzIiwiaWQiLCJyZWYiLCJhbW91bnQiLCJjdXN0b21lciIsIm5hbWUiLCJjcmVhdGVkQXQiLCJzdGF0dXMiLCJMYXRlc3RPcmRlcnMiLCJwcm9wcyIsInN0eWxlIiwibWF4V2lkdGgiLCJ3aWR0aCIsInRpdGxlIiwic3giLCJtaW5XaWR0aCIsInNvcnREaXJlY3Rpb24iLCJlbnRlckRlbGF5IiwiYWN0aXZlIiwiZGlyZWN0aW9uIiwibWFwIiwib3JkZXIiLCJob3ZlciIsImNvbG9yIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwicCIsImVuZEljb24iLCJmb250U2l6ZSIsInNpemUiLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/dashboard/latest-orders.js\n");

/***/ })

});