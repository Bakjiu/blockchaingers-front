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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LatestOrders\": function() { return /* binding */ LatestOrders; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-perfect-scrollbar */ \"./node_modules/react-perfect-scrollbar/lib/index.js\");\n/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_icons_material_ArrowRight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/ArrowRight */ \"./node_modules/@mui/icons-material/ArrowRight.js\");\n/* harmony import */ var _severity_pill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../severity-pill */ \"./src/components/severity-pill.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar orders = [\n    {\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(),\n        ref: \"CDD1049\",\n        amount: 30.5,\n        customer: {\n            name: \"Ekaterina Tankova\"\n        },\n        createdAt: 1555016400000,\n        status: \"pending\"\n    },\n    {\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(),\n        ref: \"CDD1048\",\n        amount: 25.1,\n        customer: {\n            name: \"Cao Yu\"\n        },\n        createdAt: 1555016400000,\n        status: \"delivered\"\n    },\n    {\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(),\n        ref: \"CDD1047\",\n        amount: 10.99,\n        customer: {\n            name: \"Alexa Richardson\"\n        },\n        createdAt: 1554930000000,\n        status: \"refunded\"\n    },\n    {\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(),\n        ref: \"CDD1046\",\n        amount: 96.43,\n        customer: {\n            name: \"Anje Keizer\"\n        },\n        createdAt: 1554757200000,\n        status: \"pending\"\n    },\n    {\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(),\n        ref: \"CDD1045\",\n        amount: 32.54,\n        customer: {\n            name: \"Clarke Gillebert\"\n        },\n        createdAt: 1554670800000,\n        status: \"delivered\"\n    },\n    {\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(),\n        ref: \"CDD1044\",\n        amount: 16.76,\n        customer: {\n            name: \"Adam Denisov\"\n        },\n        createdAt: 1554670800000,\n        status: \"delivered\"\n    }, \n];\nvar LatestOrders = function(props) {\n    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Card, _objectSpread({\n    }, props, {\n        __source: {\n            fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n            lineNumber: 84,\n            columnNumber: 3\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Driver, {\n                __source: {\n                    fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                    lineNumber: 90,\n                    columnNumber: 5\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.CardHeader, {\n                title: \"Latest Orders\",\n                __source: {\n                    fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                    lineNumber: 91,\n                    columnNumber: 5\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default()), {\n                __source: {\n                    fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                    lineNumber: 92,\n                    columnNumber: 5\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                    sx: {\n                        minWidth: 800\n                    },\n                    __source: {\n                        fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                        lineNumber: 93,\n                        columnNumber: 7\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Table, {\n                        __source: {\n                            fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                            lineNumber: 94,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableHead, {\n                                __source: {\n                                    fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableRow, {\n                                    __source: {\n                                        fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                                        lineNumber: 96,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                            __source: {\n                                                fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                                                lineNumber: 97,\n                                                columnNumber: 15\n                                            },\n                                            __self: _this,\n                                            children: \"Order Ref\"\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                            __source: {\n                                                fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                                                lineNumber: 98,\n                                                columnNumber: 15\n                                            },\n                                            __self: _this,\n                                            children: \"Customer\"\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                            sortDirection: \"desc\",\n                                            __source: {\n                                                fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                                                lineNumber: 99,\n                                                columnNumber: 15\n                                            },\n                                            __self: _this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {\n                                                enterDelay: 300,\n                                                title: \"Sort\",\n                                                __source: {\n                                                    fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                                                    lineNumber: 100,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this,\n                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableSortLabel, {\n                                                    active: true,\n                                                    direction: \"desc\",\n                                                    __source: {\n                                                        fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                                                        lineNumber: 101,\n                                                        columnNumber: 19\n                                                    },\n                                                    __self: _this,\n                                                    children: \"Date\"\n                                                })\n                                            })\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                            __source: {\n                                                fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                                                lineNumber: 106,\n                                                columnNumber: 15\n                                            },\n                                            __self: _this,\n                                            children: \"Status\"\n                                        })\n                                    ]\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableBody, {\n                                __source: {\n                                    fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                                    lineNumber: 109,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: orders.map(function(order) {\n                                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableRow, {\n                                        hover: true,\n                                        __source: {\n                                            fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                                            lineNumber: 111,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                                __source: {\n                                                    fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                                                    lineNumber: 112,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this,\n                                                children: order.ref\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                                __source: {\n                                                    fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                                                    lineNumber: 113,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this,\n                                                children: order.customer.name\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                                __source: {\n                                                    fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                                                    lineNumber: 114,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this,\n                                                children: (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)(order.createdAt, \"dd/MM/yyyy\")\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                                __source: {\n                                                    fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                                                    lineNumber: 115,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this,\n                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_severity_pill__WEBPACK_IMPORTED_MODULE_2__.SeverityPill, {\n                                                    color: order.status === \"delivered\" && \"success\" || order.status === \"refunded\" && \"error\" || \"warning\",\n                                                    __source: {\n                                                        fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                                                        lineNumber: 116,\n                                                        columnNumber: 19\n                                                    },\n                                                    __self: _this,\n                                                    children: order.status\n                                                })\n                                            })\n                                        ]\n                                    }, order.id);\n                                })\n                            })\n                        ]\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                sx: {\n                    display: \"flex\",\n                    justifyContent: \"flex-end\",\n                    p: 2\n                },\n                __source: {\n                    fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                    lineNumber: 132,\n                    columnNumber: 5\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    color: \"primary\",\n                    endIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_ArrowRight__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        fontSize: \"small\"\n                    }),\n                    size: \"small\",\n                    variant: \"text\",\n                    __source: {\n                        fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/latest-orders.js\",\n                        lineNumber: 139,\n                        columnNumber: 7\n                    },\n                    __self: _this,\n                    children: \"View all\"\n                })\n            })\n        ]\n    }));\n};\n_c = LatestOrders;\nvar _c;\n$RefreshReg$(_c, \"LatestOrders\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvbGF0ZXN0LW9yZGVycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDQTtBQUNxQjtBQWFoQztBQUNxQztBQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9DLEdBQUssQ0FBQ2lCLE1BQU0sR0FBRyxDQUFDO0lBQ2QsQ0FBQztRQUNDQyxFQUFFLEVBQUVoQix3Q0FBSTtRQUNSaUIsR0FBRyxFQUFFLENBQVM7UUFDZEMsTUFBTSxFQUFFLElBQUk7UUFDWkMsUUFBUSxFQUFFLENBQUM7WUFDVEMsSUFBSSxFQUFFLENBQW1CO1FBQzNCLENBQUM7UUFDREMsU0FBUyxFQUFFLGFBQWE7UUFDeEJDLE1BQU0sRUFBRSxDQUFTO0lBQ25CLENBQUM7SUFDRCxDQUFDO1FBQ0NOLEVBQUUsRUFBRWhCLHdDQUFJO1FBQ1JpQixHQUFHLEVBQUUsQ0FBUztRQUNkQyxNQUFNLEVBQUUsSUFBSTtRQUNaQyxRQUFRLEVBQUUsQ0FBQztZQUNUQyxJQUFJLEVBQUUsQ0FBUTtRQUNoQixDQUFDO1FBQ0RDLFNBQVMsRUFBRSxhQUFhO1FBQ3hCQyxNQUFNLEVBQUUsQ0FBVztJQUNyQixDQUFDO0lBQ0QsQ0FBQztRQUNDTixFQUFFLEVBQUVoQix3Q0FBSTtRQUNSaUIsR0FBRyxFQUFFLENBQVM7UUFDZEMsTUFBTSxFQUFFLEtBQUs7UUFDYkMsUUFBUSxFQUFFLENBQUM7WUFDVEMsSUFBSSxFQUFFLENBQWtCO1FBQzFCLENBQUM7UUFDREMsU0FBUyxFQUFFLGFBQWE7UUFDeEJDLE1BQU0sRUFBRSxDQUFVO0lBQ3BCLENBQUM7SUFDRCxDQUFDO1FBQ0NOLEVBQUUsRUFBRWhCLHdDQUFJO1FBQ1JpQixHQUFHLEVBQUUsQ0FBUztRQUNkQyxNQUFNLEVBQUUsS0FBSztRQUNiQyxRQUFRLEVBQUUsQ0FBQztZQUNUQyxJQUFJLEVBQUUsQ0FBYTtRQUNyQixDQUFDO1FBQ0RDLFNBQVMsRUFBRSxhQUFhO1FB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Ly4vc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL2xhdGVzdC1vcmRlcnMuanM/OTIyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IFBlcmZlY3RTY3JvbGxiYXIgZnJvbSBcInJlYWN0LXBlcmZlY3Qtc2Nyb2xsYmFyXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2FyZEhlYWRlcixcbiAgVGFibGUsXG4gIFRhYmxlQm9keSxcbiAgVGFibGVDZWxsLFxuICBUYWJsZUhlYWQsXG4gIFRhYmxlUm93LFxuICBUYWJsZVNvcnRMYWJlbCxcbiAgVG9vbHRpcCxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBBcnJvd1JpZ2h0SWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd1JpZ2h0XCI7XG5pbXBvcnQgeyBTZXZlcml0eVBpbGwgfSBmcm9tIFwiLi4vc2V2ZXJpdHktcGlsbFwiO1xuXG5jb25zdCBvcmRlcnMgPSBbXG4gIHtcbiAgICBpZDogdXVpZCgpLFxuICAgIHJlZjogXCJDREQxMDQ5XCIsXG4gICAgYW1vdW50OiAzMC41LFxuICAgIGN1c3RvbWVyOiB7XG4gICAgICBuYW1lOiBcIkVrYXRlcmluYSBUYW5rb3ZhXCIsXG4gICAgfSxcbiAgICBjcmVhdGVkQXQ6IDE1NTUwMTY0MDAwMDAsXG4gICAgc3RhdHVzOiBcInBlbmRpbmdcIixcbiAgfSxcbiAge1xuICAgIGlkOiB1dWlkKCksXG4gICAgcmVmOiBcIkNERDEwNDhcIixcbiAgICBhbW91bnQ6IDI1LjEsXG4gICAgY3VzdG9tZXI6IHtcbiAgICAgIG5hbWU6IFwiQ2FvIFl1XCIsXG4gICAgfSxcbiAgICBjcmVhdGVkQXQ6IDE1NTUwMTY0MDAwMDAsXG4gICAgc3RhdHVzOiBcImRlbGl2ZXJlZFwiLFxuICB9LFxuICB7XG4gICAgaWQ6IHV1aWQoKSxcbiAgICByZWY6IFwiQ0REMTA0N1wiLFxuICAgIGFtb3VudDogMTAuOTksXG4gICAgY3VzdG9tZXI6IHtcbiAgICAgIG5hbWU6IFwiQWxleGEgUmljaGFyZHNvblwiLFxuICAgIH0sXG4gICAgY3JlYXRlZEF0OiAxNTU0OTMwMDAwMDAwLFxuICAgIHN0YXR1czogXCJyZWZ1bmRlZFwiLFxuICB9LFxuICB7XG4gICAgaWQ6IHV1aWQoKSxcbiAgICByZWY6IFwiQ0REMTA0NlwiLFxuICAgIGFtb3VudDogOTYuNDMsXG4gICAgY3VzdG9tZXI6IHtcbiAgICAgIG5hbWU6IFwiQW5qZSBLZWl6ZXJcIixcbiAgICB9LFxuICAgIGNyZWF0ZWRBdDogMTU1NDc1NzIwMDAwMCxcbiAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICB9LFxuICB7XG4gICAgaWQ6IHV1aWQoKSxcbiAgICByZWY6IFwiQ0REMTA0NVwiLFxuICAgIGFtb3VudDogMzIuNTQsXG4gICAgY3VzdG9tZXI6IHtcbiAgICAgIG5hbWU6IFwiQ2xhcmtlIEdpbGxlYmVydFwiLFxuICAgIH0sXG4gICAgY3JlYXRlZEF0OiAxNTU0NjcwODAwMDAwLFxuICAgIHN0YXR1czogXCJkZWxpdmVyZWRcIixcbiAgfSxcbiAge1xuICAgIGlkOiB1dWlkKCksXG4gICAgcmVmOiBcIkNERDEwNDRcIixcbiAgICBhbW91bnQ6IDE2Ljc2LFxuICAgIGN1c3RvbWVyOiB7XG4gICAgICBuYW1lOiBcIkFkYW0gRGVuaXNvdlwiLFxuICAgIH0sXG4gICAgY3JlYXRlZEF0OiAxNTU0NjcwODAwMDAwLFxuICAgIHN0YXR1czogXCJkZWxpdmVyZWRcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBMYXRlc3RPcmRlcnMgPSAocHJvcHMpID0+IChcbiAgPENhcmRcbiAgICAvLyBzdHlsZT17e1xuICAgIC8vICAgd2lkdGg6IFwiMTAwMHB4XCIsXG4gICAgLy8gfX1cbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICA8RHJpdmVyIC8+XG4gICAgPENhcmRIZWFkZXIgdGl0bGU9XCJMYXRlc3QgT3JkZXJzXCIgLz5cbiAgICA8UGVyZmVjdFNjcm9sbGJhcj5cbiAgICAgIDxCb3ggc3g9e3sgbWluV2lkdGg6IDgwMCB9fT5cbiAgICAgICAgPFRhYmxlPlxuICAgICAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+T3JkZXIgUmVmPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+Q3VzdG9tZXI8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzb3J0RGlyZWN0aW9uPVwiZGVzY1wiPlxuICAgICAgICAgICAgICAgIDxUb29sdGlwIGVudGVyRGVsYXk9ezMwMH0gdGl0bGU9XCJTb3J0XCI+XG4gICAgICAgICAgICAgICAgICA8VGFibGVTb3J0TGFiZWwgYWN0aXZlIGRpcmVjdGlvbj1cImRlc2NcIj5cbiAgICAgICAgICAgICAgICAgICAgRGF0ZVxuICAgICAgICAgICAgICAgICAgPC9UYWJsZVNvcnRMYWJlbD5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsPlN0YXR1czwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICA8L1RhYmxlSGVhZD5cbiAgICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgICAge29yZGVycy5tYXAoKG9yZGVyKSA9PiAoXG4gICAgICAgICAgICAgIDxUYWJsZVJvdyBob3ZlciBrZXk9e29yZGVyLmlkfT5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntvcmRlci5yZWZ9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57b3JkZXIuY3VzdG9tZXIubmFtZX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntmb3JtYXQob3JkZXIuY3JlYXRlZEF0LCBcImRkL01NL3l5eXlcIil9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgIDxTZXZlcml0eVBpbGxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e1xuICAgICAgICAgICAgICAgICAgICAgIChvcmRlci5zdGF0dXMgPT09IFwiZGVsaXZlcmVkXCIgJiYgXCJzdWNjZXNzXCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgKG9yZGVyLnN0YXR1cyA9PT0gXCJyZWZ1bmRlZFwiICYmIFwiZXJyb3JcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICBcIndhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtvcmRlci5zdGF0dXN9XG4gICAgICAgICAgICAgICAgICA8L1NldmVyaXR5UGlsbD5cbiAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICA8L1RhYmxlPlxuICAgICAgPC9Cb3g+XG4gICAgPC9QZXJmZWN0U2Nyb2xsYmFyPlxuICAgIDxCb3hcbiAgICAgIHN4PXt7XG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiLFxuICAgICAgICBwOiAyLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIGVuZEljb249ezxBcnJvd1JpZ2h0SWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz59XG4gICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgIHZhcmlhbnQ9XCJ0ZXh0XCJcbiAgICAgID5cbiAgICAgICAgVmlldyBhbGxcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvQm94PlxuICA8L0NhcmQ+XG4pO1xuIl0sIm5hbWVzIjpbImZvcm1hdCIsInY0IiwidXVpZCIsIlBlcmZlY3RTY3JvbGxiYXIiLCJCb3giLCJCdXR0b24iLCJDYXJkIiwiQ2FyZEhlYWRlciIsIlRhYmxlIiwiVGFibGVCb2R5IiwiVGFibGVDZWxsIiwiVGFibGVIZWFkIiwiVGFibGVSb3ciLCJUYWJsZVNvcnRMYWJlbCIsIlRvb2x0aXAiLCJBcnJvd1JpZ2h0SWNvbiIsIlNldmVyaXR5UGlsbCIsIm9yZGVycyIsImlkIiwicmVmIiwiYW1vdW50IiwiY3VzdG9tZXIiLCJuYW1lIiwiY3JlYXRlZEF0Iiwic3RhdHVzIiwiTGF0ZXN0T3JkZXJzIiwicHJvcHMiLCJEcml2ZXIiLCJ0aXRsZSIsInN4IiwibWluV2lkdGgiLCJzb3J0RGlyZWN0aW9uIiwiZW50ZXJEZWxheSIsImFjdGl2ZSIsImRpcmVjdGlvbiIsIm1hcCIsIm9yZGVyIiwiaG92ZXIiLCJjb2xvciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInAiLCJlbmRJY29uIiwiZm9udFNpemUiLCJzaXplIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/dashboard/latest-orders.js\n");

/***/ })

});