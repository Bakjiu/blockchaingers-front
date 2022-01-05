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

/***/ "./src/components/dashboard/traffic-by-device.js":
/*!*******************************************************!*\
  !*** ./src/components/dashboard/traffic-by-device.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TrafficByDevice\": function() { return /* binding */ TrafficByDevice; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.modern.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_icons_material_LaptopMac__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/LaptopMac */ \"./node_modules/@mui/icons-material/LaptopMac.js\");\n/* harmony import */ var _mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Phone */ \"./node_modules/@mui/icons-material/Phone.js\");\n/* harmony import */ var _mui_icons_material_Tablet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Tablet */ \"./node_modules/@mui/icons-material/Tablet.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar TrafficByDevice = function(props) {\n    _s();\n    var theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();\n    var data = {\n        datasets: [\n            {\n                data: [\n                    63,\n                    15,\n                    22\n                ],\n                backgroundColor: [\n                    \"#3F51B5\",\n                    \"#e53935\",\n                    \"#FB8C00\"\n                ],\n                borderWidth: 8,\n                borderColor: \"#FFFFFF\",\n                hoverBorderColor: \"#FFFFFF\"\n            }, \n        ],\n        labels: [\n            \"Desktop\",\n            \"Tablet\",\n            \"Mobile\"\n        ]\n    };\n    var options = {\n        animation: false,\n        cutoutPercentage: 80,\n        layout: {\n            padding: 0\n        },\n        legend: {\n            display: false\n        },\n        maintainAspectRatio: false,\n        responsive: true,\n        tooltips: {\n            backgroundColor: theme.palette.background.paper,\n            bodyFontColor: theme.palette.text.secondary,\n            borderColor: theme.palette.divider,\n            borderWidth: 1,\n            enabled: true,\n            footerFontColor: theme.palette.text.secondary,\n            intersect: false,\n            mode: \"index\",\n            titleFontColor: theme.palette.text.primary\n        }\n    };\n    var devices = [\n        {\n            title: \"Desktop\",\n            value: 63,\n            icon: _mui_icons_material_LaptopMac__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            color: \"#3F51B5\"\n        },\n        {\n            title: \"Tablet\",\n            value: 15,\n            icon: _mui_icons_material_Tablet__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            color: \"#E53935\"\n        },\n        {\n            title: \"Mobile\",\n            value: 23,\n            icon: _mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            color: \"#FB8C00\"\n        }, \n    ];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, _objectSpread({\n    }, props, {\n        __source: {\n            fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/traffic-by-device.js\",\n            lineNumber: 75,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {\n                title: \"Node connection graph\",\n                __source: {\n                    fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/traffic-by-device.js\",\n                    lineNumber: 76,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {\n                __source: {\n                    fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/traffic-by-device.js\",\n                    lineNumber: 77,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                __source: {\n                    fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/traffic-by-device.js\",\n                    lineNumber: 78,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                    sx: {\n                        width: \"50px\",\n                        height: \"50px\"\n                    },\n                    __source: {\n                        fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/traffic-by-device.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                        style: {\n                            display: \"absolute\",\n                            width: \"500px\",\n                            maxHeight: \"100%\"\n                        },\n                        src: \"/static/images/node.png\",\n                        __source: {\n                            fileName: \"/Users/jiu/Desktop/Projects/blockchaingers-front/src/components/dashboard/traffic-by-device.js\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    })\n                })\n            })\n        ]\n    })));\n};\n_s(TrafficByDevice, \"VrMvFCCB9Haniz3VCRPNUiCauHs=\", false, function() {\n    return [\n        _mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme\n    ];\n});\n_c = TrafficByDevice;\nvar _c;\n$RefreshReg$(_c, \"TrafficByDevice\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvdHJhZmZpYy1ieS1kZXZpY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEwQztBQVNwQjtBQUNtQztBQUNSO0FBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVDLEdBQUssQ0FBQ1csZUFBZSxHQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7O0lBQ3pDLEdBQUssQ0FBQ0MsS0FBSyxHQUFHTix1REFBUTtJQUV0QixHQUFLLENBQUNPLElBQUksR0FBRyxDQUFDO1FBQ1pDLFFBQVEsRUFBRSxDQUFDO1lBQ1QsQ0FBQztnQkFDQ0QsSUFBSSxFQUFFLENBQUM7b0JBQUEsRUFBRTtvQkFBRSxFQUFFO29CQUFFLEVBQUU7Z0JBQUEsQ0FBQztnQkFDbEJFLGVBQWUsRUFBRSxDQUFDO29CQUFBLENBQVM7b0JBQUUsQ0FBUztvQkFBRSxDQUFTO2dCQUFBLENBQUM7Z0JBQ2xEQyxXQUFXLEVBQUUsQ0FBQztnQkFDZEMsV0FBVyxFQUFFLENBQVM7Z0JBQ3RCQyxnQkFBZ0IsRUFBRSxDQUFTO1lBQzdCLENBQUM7UUFDSCxDQUFDO1FBQ0RDLE1BQU0sRUFBRSxDQUFDO1lBQUEsQ0FBUztZQUFFLENBQVE7WUFBRSxDQUFRO1FBQUEsQ0FBQztJQUN6QyxDQUFDO0lBRUQsR0FBSyxDQUFDQyxPQUFPLEdBQUcsQ0FBQztRQUNmQyxTQUFTLEVBQUUsS0FBSztRQUNoQkMsZ0JBQWdCLEVBQUUsRUFBRTtRQUNwQkMsTUFBTSxFQUFFLENBQUM7WUFBQ0MsT0FBTyxFQUFFLENBQUM7UUFBQyxDQUFDO1FBQ3RCQyxNQUFNLEVBQUUsQ0FBQztZQUNQQyxPQUFPLEVBQUUsS0FBSztRQUNoQixDQUFDO1FBQ0RDLG1CQUFtQixFQUFFLEtBQUs7UUFDMUJDLFVBQVUsRUFBRSxJQUFJO1FBQ2hCQyxRQUFRLEVBQUUsQ0FBQztZQUNUZCxlQUFlLEVBQUVILEtBQUssQ0FBQ2tCLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDQyxLQUFLO1lBQy9DQyxhQUFhLEVBQUVyQixLQUFLLENBQUNrQixPQUFPLENBQUNJLElBQUksQ0FBQ0MsU0FBUztZQUMzQ2xCLFdBQVcsRUFBRUwsS0FBSyxDQUFDa0IsT0FBTyxDQUFDTSxPQUFPO1lBQ2xDcEIsV0FBVyxFQUFFLENBQUM7WUFDZHFCLE9BQU8sRUFBRSxJQUFJO1lBQ2JDLGVBQWUsRUFBRTFCLEtBQUssQ0FBQ2tCLE9BQU8sQ0FBQ0ksSUFBSSxDQUFDQyxTQUFTO1lBQzdDSSxTQUFTLEVBQUUsS0FBSztZQUNoQkMsSUFBSSxFQUFFLENBQU87WUFDYkMsY0FBYyxFQUFFN0IsS0FBSyxDQUFDa0IsT0FBTyxDQUFDSSxJQUFJLENBQUNRLE9BQU87UUFDNUMsQ0FBQztJQUNILENBQUM7SUFFRCxHQUFLLENBQUNDLE9BQU8sR0FBRyxDQUFDO1FBQ2YsQ0FBQztZQUNDQyxLQUFLLEVBQUUsQ0FBUztZQUNoQkMsS0FBSyxFQUFFLEVBQUU7WUFDVEMsSUFBSSxFQUFFdkMscUVBQWE7WUFDbkJ3QyxLQUFLLEVBQUUsQ0FBUztRQUNsQixDQUFDO1FBQ0QsQ0FBQztZQUNDSCxLQUFLLEVBQUUsQ0FBUTtZQUNmQyxLQUFLLEVBQUUsRUFBRTtZQUNUQyxJQUFJLEVBQUVyQyxrRUFBVTtZQUNoQnNDLEtBQUssRUFBRSxDQUFTO1FBQ2xCLENBQUM7UUFDRCxDQUFDO1lBQ0NILEtBQUssRUFBRSxDQUFRO1lBQ2ZDLEtBQUssRUFBRSxFQUFFO1lBQ1RDLElBQUksRUFBRXRDLGlFQUFTO1lBQ2Z1QyxLQUFLLEVBQUUsQ0FBUztRQUNsQixDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sdUVBQ0g5QywrQ0FBSTtPQUFLVSxLQUFLOzs7Ozs7OztpRkFDWlIscURBQVU7Z0JBQUN5QyxLQUFLLEVBQUMsQ0FBdUI7Ozs7Ozs7O2lGQUN4Q3hDLGtEQUFPOzs7Ozs7OztpRkFDUEYsc0RBQVc7Ozs7Ozs7K0ZBQ1RGLDhDQUFHO29CQUNGZ0QsRUFBRSxFQUFFLENBQUM7d0JBQ0hDLEtBQUssRUFBRSxDQUFNO3dCQUNiQyxNQUFNLEVBQUUsQ0FBTTtvQkFDaEIsQ0FBQzs7Ozs7OzttR0FFQUMsQ0FBRzt3QkFDRkMsS0FBSyxFQUFFLENBQUM7NEJBQ04xQixPQUFPLEVBQUUsQ0FBVTs0QkFDbkJ1QixLQUFLLEVBQUUsQ0FBTzs0QkFDZEksU0FBUyxFQUFFLENBQU07d0JBQ25CLENBQUM7d0JBQ0RDLEdBQUcsRUFBQyxDQUF5Qjs7Ozs7Ozs7Ozs7O0FBTXpDLENBQUM7R0FsRlk1QyxlQUFlOztRQUNaSixtREFBUTs7O0tBRFhJLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL3RyYWZmaWMtYnktZGV2aWNlLmpzP2VhMDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG91Z2hudXQgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIENhcmQsXG4gIENhcmRDb250ZW50LFxuICBDYXJkSGVhZGVyLFxuICBEaXZpZGVyLFxuICBUeXBvZ3JhcGh5LFxuICB1c2VUaGVtZSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBMYXB0b3BNYWNJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0xhcHRvcE1hY1wiO1xuaW1wb3J0IFBob25lSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9QaG9uZVwiO1xuaW1wb3J0IFRhYmxldEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvVGFibGV0XCI7XG5cbmV4cG9ydCBjb25zdCBUcmFmZmljQnlEZXZpY2UgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuXG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgZGF0YXNldHM6IFtcbiAgICAgIHtcbiAgICAgICAgZGF0YTogWzYzLCAxNSwgMjJdLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcIiMzRjUxQjVcIiwgXCIjZTUzOTM1XCIsIFwiI0ZCOEMwMFwiXSxcbiAgICAgICAgYm9yZGVyV2lkdGg6IDgsXG4gICAgICAgIGJvcmRlckNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICAgICAgaG92ZXJCb3JkZXJDb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgbGFiZWxzOiBbXCJEZXNrdG9wXCIsIFwiVGFibGV0XCIsIFwiTW9iaWxlXCJdLFxuICB9O1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgYW5pbWF0aW9uOiBmYWxzZSxcbiAgICBjdXRvdXRQZXJjZW50YWdlOiA4MCxcbiAgICBsYXlvdXQ6IHsgcGFkZGluZzogMCB9LFxuICAgIGxlZ2VuZDoge1xuICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgfSxcbiAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcbiAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgIHRvb2x0aXBzOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICAgIGJvZHlGb250Q29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUucGFsZXR0ZS5kaXZpZGVyLFxuICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgZm9vdGVyRm9udENvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICAgICAgaW50ZXJzZWN0OiBmYWxzZSxcbiAgICAgIG1vZGU6IFwiaW5kZXhcIixcbiAgICAgIHRpdGxlRm9udENvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IGRldmljZXMgPSBbXG4gICAge1xuICAgICAgdGl0bGU6IFwiRGVza3RvcFwiLFxuICAgICAgdmFsdWU6IDYzLFxuICAgICAgaWNvbjogTGFwdG9wTWFjSWNvbixcbiAgICAgIGNvbG9yOiBcIiMzRjUxQjVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlRhYmxldFwiLFxuICAgICAgdmFsdWU6IDE1LFxuICAgICAgaWNvbjogVGFibGV0SWNvbixcbiAgICAgIGNvbG9yOiBcIiNFNTM5MzVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIk1vYmlsZVwiLFxuICAgICAgdmFsdWU6IDIzLFxuICAgICAgaWNvbjogUGhvbmVJY29uLFxuICAgICAgY29sb3I6IFwiI0ZCOEMwMFwiLFxuICAgIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZCB7Li4ucHJvcHN9PlxuICAgICAgPENhcmRIZWFkZXIgdGl0bGU9XCJOb2RlIGNvbm5lY3Rpb24gZ3JhcGhcIiAvPlxuICAgICAgPERpdmlkZXIgLz5cbiAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICB3aWR0aDogXCI1MHB4XCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiNTBweFwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjUwMHB4XCIsXG4gICAgICAgICAgICAgIG1heEhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvbm9kZS5wbmdcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9DYXJkQ29udGVudD5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIkRvdWdobnV0IiwiQm94IiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZEhlYWRlciIsIkRpdmlkZXIiLCJUeXBvZ3JhcGh5IiwidXNlVGhlbWUiLCJMYXB0b3BNYWNJY29uIiwiUGhvbmVJY29uIiwiVGFibGV0SWNvbiIsIlRyYWZmaWNCeURldmljZSIsInByb3BzIiwidGhlbWUiLCJkYXRhIiwiZGF0YXNldHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJXaWR0aCIsImJvcmRlckNvbG9yIiwiaG92ZXJCb3JkZXJDb2xvciIsImxhYmVscyIsIm9wdGlvbnMiLCJhbmltYXRpb24iLCJjdXRvdXRQZXJjZW50YWdlIiwibGF5b3V0IiwicGFkZGluZyIsImxlZ2VuZCIsImRpc3BsYXkiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwicmVzcG9uc2l2ZSIsInRvb2x0aXBzIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsImJvZHlGb250Q29sb3IiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwiZGl2aWRlciIsImVuYWJsZWQiLCJmb290ZXJGb250Q29sb3IiLCJpbnRlcnNlY3QiLCJtb2RlIiwidGl0bGVGb250Q29sb3IiLCJwcmltYXJ5IiwiZGV2aWNlcyIsInRpdGxlIiwidmFsdWUiLCJpY29uIiwiY29sb3IiLCJzeCIsIndpZHRoIiwiaGVpZ2h0IiwiaW1nIiwic3R5bGUiLCJtYXhIZWlnaHQiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/dashboard/traffic-by-device.js\n");

/***/ })

});