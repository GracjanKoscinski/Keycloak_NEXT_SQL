"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/mainPage/TodoList.jsx":
/*!**********************************************!*\
  !*** ./src/components/mainPage/TodoList.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\n\n\nconst TodoList = (param)=>{\n    let { todos, setTodos, session, setError } = param;\n    const handleToggleStatus = async (todo_id)=>{\n        try {\n            const token = session.accessToken;\n            const config = {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            };\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].patch(\"http://localhost:5000/todos/\".concat(todo_id, \"/toggle\"), {}, config);\n            // Update the local state with the new status\n            setTodos(todos.map((todo)=>todo.todo_id === todo_id ? {\n                    ...todo,\n                    achieved: response.data.new_status\n                } : todo));\n            setError(null);\n        } catch (error) {\n            setError(\"Error: \" + (error.response ? error.response.statusText : error.message));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full max-w-md mt-4\",\n        children: todos && todos.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"p-4 mb-2 rounded shadow-md \".concat(todo.achieved ? \"bg-green-200\" : \"bg-yellow-200\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: todo.description\n                        }, void 0, false, {\n                            fileName: \"/home/gkoscinski/playground/next-app/src/components/mainPage/TodoList.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 29\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Added on: \",\n                                new Date(todo.addingDate).toLocaleDateString()\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/gkoscinski/playground/next-app/src/components/mainPage/TodoList.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 29\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Status: \",\n                                todo.achieved ? \"Achieved\" : \"Not Achieved\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/gkoscinski/playground/next-app/src/components/mainPage/TodoList.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 29\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>handleToggleStatus(todo.todo_id),\n                            className: \"mt-2 bg-gray-500 text-white px-4 py-2 rounded\",\n                            children: \"Toggle Status\"\n                        }, void 0, false, {\n                            fileName: \"/home/gkoscinski/playground/next-app/src/components/mainPage/TodoList.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 29\n                        }, undefined)\n                    ]\n                }, todo.todo_id, true, {\n                    fileName: \"/home/gkoscinski/playground/next-app/src/components/mainPage/TodoList.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 25\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/home/gkoscinski/playground/next-app/src/components/mainPage/TodoList.jsx\",\n            lineNumber: 27,\n            columnNumber: 17\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"No todos found\"\n        }, void 0, false, {\n            fileName: \"/home/gkoscinski/playground/next-app/src/components/mainPage/TodoList.jsx\",\n            lineNumber: 48,\n            columnNumber: 17\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/gkoscinski/playground/next-app/src/components/mainPage/TodoList.jsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, undefined);\n};\n_c = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\nvar _c;\n$RefreshReg$(_c, \"TodoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL21haW5QYWdlL1RvZG9MaXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFDQTtBQUUxQixNQUFNRSxXQUFXO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFO0lBQ3BELE1BQU1DLHFCQUFxQixPQUFPQztRQUM5QixJQUFJO1lBQ0EsTUFBTUMsUUFBUUosUUFBUUssV0FBVztZQUNqQyxNQUFNQyxTQUFTO2dCQUNYQyxTQUFTO29CQUFFQyxlQUFlLFVBQWdCLE9BQU5KO2dCQUFRO1lBQ2hEO1lBRUEsTUFBTUssV0FBVyxNQUFNYiw2Q0FBS0EsQ0FBQ2MsS0FBSyxDQUFDLCtCQUF1QyxPQUFSUCxTQUFRLFlBQVUsQ0FBQyxHQUFHRztZQUV4Riw2Q0FBNkM7WUFDN0NQLFNBQVNELE1BQU1hLEdBQUcsQ0FBQ0MsQ0FBQUEsT0FDZkEsS0FBS1QsT0FBTyxLQUFLQSxVQUFVO29CQUFFLEdBQUdTLElBQUk7b0JBQUVDLFVBQVVKLFNBQVNLLElBQUksQ0FBQ0MsVUFBVTtnQkFBQyxJQUFJSDtZQUVqRlgsU0FBUztRQUNiLEVBQUUsT0FBT2UsT0FBTztZQUNaZixTQUFTLFlBQWFlLENBQUFBLE1BQU1QLFFBQVEsR0FBR08sTUFBTVAsUUFBUSxDQUFDUSxVQUFVLEdBQUdELE1BQU1FLE9BQU87UUFDcEY7SUFDSjtJQUVBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNWdEIsU0FBU0EsTUFBTXVCLE1BQU0sR0FBRyxrQkFDckIsOERBQUNDO3NCQUNJeEIsTUFBTWEsR0FBRyxDQUFDQyxDQUFBQSxxQkFDUCw4REFBQ1c7b0JBRUdILFdBQVcsOEJBRVYsT0FER1IsS0FBS0MsUUFBUSxHQUFHLGlCQUFpQjs7c0NBR3JDLDhEQUFDVztzQ0FBR1osS0FBS2EsV0FBVzs7Ozs7O3NDQUNwQiw4REFBQ0Q7O2dDQUFFO2dDQUFXLElBQUlFLEtBQUtkLEtBQUtlLFVBQVUsRUFBRUMsa0JBQWtCOzs7Ozs7O3NDQUMxRCw4REFBQ0o7O2dDQUFFO2dDQUFTWixLQUFLQyxRQUFRLEdBQUcsYUFBYTs7Ozs7OztzQ0FDekMsOERBQUNnQjs0QkFDR0MsU0FBUyxJQUFNNUIsbUJBQW1CVSxLQUFLVCxPQUFPOzRCQUM5Q2lCLFdBQVU7c0NBQ2I7Ozs7Ozs7bUJBWElSLEtBQUtULE9BQU87Ozs7Ozs7OztzQ0FrQjdCLDhEQUFDZ0I7c0JBQUk7Ozs7Ozs7Ozs7O0FBSXJCO0tBaERNdEI7QUFrRE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbWFpblBhZ2UvVG9kb0xpc3QuanN4PzUxZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IFRvZG9MaXN0ID0gKHsgdG9kb3MsIHNldFRvZG9zLCBzZXNzaW9uLCBzZXRFcnJvciB9KSA9PiB7XG4gICAgY29uc3QgaGFuZGxlVG9nZ2xlU3RhdHVzID0gYXN5bmMgKHRvZG9faWQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gc2Vzc2lvbi5hY2Nlc3NUb2tlbjtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucGF0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC90b2Rvcy8ke3RvZG9faWR9L3RvZ2dsZWAsIHt9LCBjb25maWcpO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIGxvY2FsIHN0YXRlIHdpdGggdGhlIG5ldyBzdGF0dXNcbiAgICAgICAgICAgIHNldFRvZG9zKHRvZG9zLm1hcCh0b2RvID0+XG4gICAgICAgICAgICAgICAgdG9kby50b2RvX2lkID09PSB0b2RvX2lkID8geyAuLi50b2RvLCBhY2hpZXZlZDogcmVzcG9uc2UuZGF0YS5uZXdfc3RhdHVzIH0gOiB0b2RvXG4gICAgICAgICAgICApKTtcbiAgICAgICAgICAgIHNldEVycm9yKG51bGwpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgc2V0RXJyb3IoJ0Vycm9yOiAnICsgKGVycm9yLnJlc3BvbnNlID8gZXJyb3IucmVzcG9uc2Uuc3RhdHVzVGV4dCA6IGVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1tZCBtdC00XCI+XG4gICAgICAgICAgICB7dG9kb3MgJiYgdG9kb3MubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIHt0b2Rvcy5tYXAodG9kbyA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RvZG8udG9kb19pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwLTQgbWItMiByb3VuZGVkIHNoYWRvdy1tZCAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvLmFjaGlldmVkID8gJ2JnLWdyZWVuLTIwMCcgOiAnYmcteWVsbG93LTIwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dG9kby5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QWRkZWQgb246IHtuZXcgRGF0ZSh0b2RvLmFkZGluZ0RhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TdGF0dXM6IHt0b2RvLmFjaGlldmVkID8gJ0FjaGlldmVkJyA6ICdOb3QgQWNoaWV2ZWQnfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRvZ2dsZVN0YXR1cyh0b2RvLnRvZG9faWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yIGJnLWdyYXktNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9nZ2xlIFN0YXR1c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGRpdj5ObyB0b2RvcyBmb3VuZDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiYXhpb3MiLCJUb2RvTGlzdCIsInRvZG9zIiwic2V0VG9kb3MiLCJzZXNzaW9uIiwic2V0RXJyb3IiLCJoYW5kbGVUb2dnbGVTdGF0dXMiLCJ0b2RvX2lkIiwidG9rZW4iLCJhY2Nlc3NUb2tlbiIsImNvbmZpZyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicmVzcG9uc2UiLCJwYXRjaCIsIm1hcCIsInRvZG8iLCJhY2hpZXZlZCIsImRhdGEiLCJuZXdfc3RhdHVzIiwiZXJyb3IiLCJzdGF0dXNUZXh0IiwibWVzc2FnZSIsImRpdiIsImNsYXNzTmFtZSIsImxlbmd0aCIsInVsIiwibGkiLCJwIiwiZGVzY3JpcHRpb24iLCJEYXRlIiwiYWRkaW5nRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/mainPage/TodoList.jsx\n"));

/***/ })

});