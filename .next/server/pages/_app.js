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

/***/ "./features/newsSlice.js":
/*!*******************************!*\
  !*** ./features/newsSlice.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getNewsArticles: () => (/* binding */ getNewsArticles)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _utils_fetchNews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/fetchNews */ \"./utils/fetchNews.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__]);\n_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst getNewsArticles = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('news/getNewsArticles', async (params, { rejectWithValue })=>{\n    try {\n        const articles = await (0,_utils_fetchNews__WEBPACK_IMPORTED_MODULE_1__.fetchNews)(params);\n        return articles;\n    } catch (error) {\n        return rejectWithValue(error.message);\n    }\n});\nconst newsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: 'news',\n    initialState: {\n        articles: [],\n        status: 'idle',\n        error: null\n    },\n    reducers: {},\n    extraReducers: (builder)=>{\n        builder.addCase(getNewsArticles.pending, (state)=>{\n            state.status = 'loading';\n        }).addCase(getNewsArticles.fulfilled, (state, action)=>{\n            state.status = 'succeeded';\n            state.articles = action.payload;\n        }).addCase(getNewsArticles.rejected, (state, action)=>{\n            state.status = 'failed';\n            state.error = action.payload;\n        });\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newsSlice.reducer);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mZWF0dXJlcy9uZXdzU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFnRTtBQUNuQjtBQUV0QyxNQUFNRyxrQkFBa0JGLGtFQUFnQkEsQ0FDN0Msd0JBQ0EsT0FBT0csUUFBUSxFQUFFQyxlQUFlLEVBQUU7SUFDaEMsSUFBSTtRQUNGLE1BQU1DLFdBQVcsTUFBTUosMkRBQVNBLENBQUNFO1FBQ2pDLE9BQU9FO0lBQ1QsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsT0FBT0YsZ0JBQWdCRSxNQUFNQyxPQUFPO0lBQ3RDO0FBQ0YsR0FDRDtBQUVELE1BQU1DLFlBQVlULDZEQUFXQSxDQUFDO0lBQzVCVSxNQUFNO0lBQ05DLGNBQWM7UUFDWkwsVUFBVSxFQUFFO1FBQ1pNLFFBQVE7UUFDUkwsT0FBTztJQUNUO0lBQ0FNLFVBQVUsQ0FDVjtJQUNBQyxlQUFlLENBQUNDO1FBQ2RBLFFBQ0dDLE9BQU8sQ0FBQ2IsZ0JBQWdCYyxPQUFPLEVBQUUsQ0FBQ0M7WUFDakNBLE1BQU1OLE1BQU0sR0FBRztRQUNqQixHQUNDSSxPQUFPLENBQUNiLGdCQUFnQmdCLFNBQVMsRUFBRSxDQUFDRCxPQUFPRTtZQUMxQ0YsTUFBTU4sTUFBTSxHQUFHO1lBQ2ZNLE1BQU1aLFFBQVEsR0FBR2MsT0FBT0MsT0FBTztRQUNqQyxHQUNDTCxPQUFPLENBQUNiLGdCQUFnQm1CLFFBQVEsRUFBRSxDQUFDSixPQUFPRTtZQUN6Q0YsTUFBTU4sTUFBTSxHQUFHO1lBQ2ZNLE1BQU1YLEtBQUssR0FBR2EsT0FBT0MsT0FBTztRQUM5QjtJQUNKO0FBQ0Y7QUFFQSxpRUFBZVosVUFBVWMsT0FBTyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx0YXlhbFxcT25lRHJpdmVcXERlc2t0b3BcXHRlc3RcXHNlY29uZF9zZFxcUmVzcG9uc2l2ZS1EYXNoYm9hcmQtd2l0aC1OZXdzLWFuZC1QYXlvdXQtRmVhdHVyZXNcXGZlYXR1cmVzXFxuZXdzU2xpY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgeyBmZXRjaE5ld3MgfSBmcm9tICdAL3V0aWxzL2ZldGNoTmV3cydcclxuXHJcbmV4cG9ydCBjb25zdCBnZXROZXdzQXJ0aWNsZXMgPSBjcmVhdGVBc3luY1RodW5rKFxyXG4gICduZXdzL2dldE5ld3NBcnRpY2xlcycsXHJcbiAgYXN5bmMgKHBhcmFtcywgeyByZWplY3RXaXRoVmFsdWUgfSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgYXJ0aWNsZXMgPSBhd2FpdCBmZXRjaE5ld3MocGFyYW1zKVxyXG4gICAgICByZXR1cm4gYXJ0aWNsZXNcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZXJyb3IubWVzc2FnZSlcclxuICAgIH1cclxuICB9XHJcbilcclxuXHJcbmNvbnN0IG5ld3NTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnbmV3cycsXHJcbiAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICBhcnRpY2xlczogW10sXHJcbiAgICBzdGF0dXM6ICdpZGxlJyxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gIH0sXHJcbiAgcmVkdWNlcnM6IHtcclxuICB9LFxyXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XHJcbiAgICBidWlsZGVyXHJcbiAgICAgIC5hZGRDYXNlKGdldE5ld3NBcnRpY2xlcy5wZW5kaW5nLCAoc3RhdGUpID0+IHtcclxuICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnbG9hZGluZydcclxuICAgICAgfSlcclxuICAgICAgLmFkZENhc2UoZ2V0TmV3c0FydGljbGVzLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnc3VjY2VlZGVkJ1xyXG4gICAgICAgIHN0YXRlLmFydGljbGVzID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgfSlcclxuICAgICAgLmFkZENhc2UoZ2V0TmV3c0FydGljbGVzLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHN0YXRlLnN0YXR1cyA9ICdmYWlsZWQnXHJcbiAgICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9KVxyXG4gIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXdzU2xpY2UucmVkdWNlclxyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJjcmVhdGVBc3luY1RodW5rIiwiZmV0Y2hOZXdzIiwiZ2V0TmV3c0FydGljbGVzIiwicGFyYW1zIiwicmVqZWN0V2l0aFZhbHVlIiwiYXJ0aWNsZXMiLCJlcnJvciIsIm1lc3NhZ2UiLCJuZXdzU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwic3RhdHVzIiwicmVkdWNlcnMiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwic3RhdGUiLCJmdWxmaWxsZWQiLCJhY3Rpb24iLCJwYXlsb2FkIiwicmVqZWN0ZWQiLCJyZWR1Y2VyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./features/newsSlice.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/store */ \"./store/store.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_redux__WEBPACK_IMPORTED_MODULE_2__, _store_store__WEBPACK_IMPORTED_MODULE_3__]);\n([react_redux__WEBPACK_IMPORTED_MODULE_2__, _store_store__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction App({ Component, pageProps: { session, ...pageProps } }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_1__.SessionProvider, {\n        session: session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n            store: _store_store__WEBPACK_IMPORTED_MODULE_3__.store,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tayal\\\\OneDrive\\\\Desktop\\\\test\\\\second_sd\\\\Responsive-Dashboard-with-News-and-Payout-Features\\\\pages\\\\_app.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\tayal\\\\OneDrive\\\\Desktop\\\\test\\\\second_sd\\\\Responsive-Dashboard-with-News-and-Payout-Features\\\\pages\\\\_app.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\tayal\\\\OneDrive\\\\Desktop\\\\test\\\\second_sd\\\\Responsive-Dashboard-with-News-and-Payout-Features\\\\pages\\\\_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDWDtBQUNEO0FBQ1I7QUFFZCxTQUFTRyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUUsR0FBR0QsV0FBVyxFQUFFO0lBQzdFLHFCQUNFLDhEQUFDTCw0REFBZUE7UUFBQ00sU0FBU0E7a0JBQ3hCLDRFQUFDTCxpREFBUUE7WUFBQ0MsT0FBT0EsK0NBQUtBO3NCQUNwQiw0RUFBQ0U7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx0YXlhbFxcT25lRHJpdmVcXERlc2t0b3BcXHRlc3RcXHNlY29uZF9zZFxcUmVzcG9uc2l2ZS1EYXNoYm9hcmQtd2l0aC1OZXdzLWFuZC1QYXlvdXQtRmVhdHVyZXNcXHBhZ2VzXFxfYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlc3Npb25Qcm92aWRlciB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICdAL3N0b3JlL3N0b3JlJ1xyXG5pbXBvcnQgJ0Avc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHM6IHsgc2Vzc2lvbiwgLi4ucGFnZVByb3BzIH0gfSkge1xyXG4gIHJldHVybiAoIFxyXG4gICAgPFNlc3Npb25Qcm92aWRlciBzZXNzaW9uPXtzZXNzaW9ufT5cclxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgPC9TZXNzaW9uUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJTZXNzaW9uUHJvdmlkZXIiLCJQcm92aWRlciIsInN0b3JlIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   store: () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _features_newsSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/features/newsSlice */ \"./features/newsSlice.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _features_newsSlice__WEBPACK_IMPORTED_MODULE_1__]);\n([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _features_newsSlice__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        news: _features_newsSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zdG9yZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUQ7QUFDSDtBQUV2QyxNQUFNRSxRQUFRRixnRUFBY0EsQ0FBQztJQUNsQ0csU0FBUztRQUNQQyxNQUFNSCwyREFBV0E7SUFDbkI7QUFDRixHQUFFIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXHRheWFsXFxPbmVEcml2ZVxcRGVza3RvcFxcdGVzdFxcc2Vjb25kX3NkXFxSZXNwb25zaXZlLURhc2hib2FyZC13aXRoLU5ld3MtYW5kLVBheW91dC1GZWF0dXJlc1xcc3RvcmVcXHN0b3JlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IG5ld3NSZWR1Y2VyIGZyb20gJ0AvZmVhdHVyZXMvbmV3c1NsaWNlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xyXG4gIHJlZHVjZXI6IHtcclxuICAgIG5ld3M6IG5ld3NSZWR1Y2VyLFxyXG4gIH0sXHJcbn0pXHJcbiJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsIm5ld3NSZWR1Y2VyIiwic3RvcmUiLCJyZWR1Y2VyIiwibmV3cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/store.js\n");

/***/ }),

/***/ "./utils/fetchNews.js":
/*!****************************!*\
  !*** ./utils/fetchNews.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchNews: () => (/* binding */ fetchNews)\n/* harmony export */ });\nasync function fetchNews() {\n    try {\n        const res = await fetch(\"https://newsapi.org/v2/top-headlines?country=us&apiKey=ff401e5488514020911758d511ab0a54\");\n        const data = await res.json();\n        return data.articles || [];\n    } catch (error) {\n        console.error('Error fetching news:', error);\n        throw new Error('Failed to fetch news.');\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9mZXRjaE5ld3MuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLGVBQWVBO0lBQ2xCLElBQUk7UUFDRixNQUFNQyxNQUFNLE1BQU1DLE1BQ2hCO1FBRUYsTUFBTUMsT0FBTyxNQUFNRixJQUFJRyxJQUFJO1FBQzNCLE9BQU9ELEtBQUtFLFFBQVEsSUFBSSxFQUFFO0lBQzVCLEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtRQUN0QyxNQUFNLElBQUlFLE1BQU07SUFDbEI7QUFDRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx0YXlhbFxcT25lRHJpdmVcXERlc2t0b3BcXHRlc3RcXHNlY29uZF9zZFxcUmVzcG9uc2l2ZS1EYXNoYm9hcmQtd2l0aC1OZXdzLWFuZC1QYXlvdXQtRmVhdHVyZXNcXHV0aWxzXFxmZXRjaE5ld3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoTmV3cygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIFwiaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi90b3AtaGVhZGxpbmVzP2NvdW50cnk9dXMmYXBpS2V5PWZmNDAxZTU0ODg1MTQwMjA5MTE3NThkNTExYWIwYTU0XCJcclxuICAgICAgKVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgICByZXR1cm4gZGF0YS5hcnRpY2xlcyB8fCBbXVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgbmV3czonLCBlcnJvcilcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggbmV3cy4nKVxyXG4gICAgfVxyXG4gIH1cclxuICAiXSwibmFtZXMiOlsiZmV0Y2hOZXdzIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImFydGljbGVzIiwiZXJyb3IiLCJjb25zb2xlIiwiRXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/fetchNews.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@reduxjs/toolkit");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-redux");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();