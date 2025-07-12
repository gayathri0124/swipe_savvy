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
exports.id = "app/api/stripe/create-subscription/route";
exports.ids = ["app/api/stripe/create-subscription/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstripe%2Fcreate-subscription%2Froute&page=%2Fapi%2Fstripe%2Fcreate-subscription%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstripe%2Fcreate-subscription%2Froute.ts&appDir=%2FUsers%2Fgayathri%2FDesktop%2Fswipe_savvy%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fgayathri%2FDesktop%2Fswipe_savvy&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstripe%2Fcreate-subscription%2Froute&page=%2Fapi%2Fstripe%2Fcreate-subscription%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstripe%2Fcreate-subscription%2Froute.ts&appDir=%2FUsers%2Fgayathri%2FDesktop%2Fswipe_savvy%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fgayathri%2FDesktop%2Fswipe_savvy&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var _Users_gayathri_Desktop_swipe_savvy_app_api_stripe_create_subscription_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/stripe/create-subscription/route.ts */ \"(rsc)/./app/api/stripe/create-subscription/route.ts\");\n\n// @ts-ignore this need to be imported from next/dist to be external\n\n\n// @ts-expect-error - replaced by webpack/turbopack loader\n\nconst AppRouteRouteModule = next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule;\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"standalone\"\nconst routeModule = new AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/stripe/create-subscription/route\",\n        pathname: \"/api/stripe/create-subscription\",\n        filename: \"route\",\n        bundlePath: \"app/api/stripe/create-subscription/route\"\n    },\n    resolvedPagePath: \"/Users/gayathri/Desktop/swipe_savvy/app/api/stripe/create-subscription/route.ts\",\n    nextConfigOutput,\n    userland: _Users_gayathri_Desktop_swipe_savvy_app_api_stripe_create_subscription_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/stripe/create-subscription/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzdHJpcGUlMkZjcmVhdGUtc3Vic2NyaXB0aW9uJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzdHJpcGUlMkZjcmVhdGUtc3Vic2NyaXB0aW9uJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc3RyaXBlJTJGY3JlYXRlLXN1YnNjcmlwdGlvbiUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmdheWF0aHJpJTJGRGVza3RvcCUyRnN3aXBlX3NhdnZ5JTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmdheWF0aHJpJTJGRGVza3RvcCUyRnN3aXBlX3NhdnZ5JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PXN0YW5kYWxvbmUmcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNoRDtBQUMwRjtBQUMzQjtBQUMvRDtBQUM0RztBQUM1Ryw0QkFBNEIsZ0hBQTBCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ2lKOztBQUVqSiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8/Yjc5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJuZXh0L2Rpc3Qvc2VydmVyL25vZGUtcG9seWZpbGwtaGVhZGVyc1wiO1xuLy8gQHRzLWlnbm9yZSB0aGlzIG5lZWQgdG8gYmUgaW1wb3J0ZWQgZnJvbSBuZXh0L2Rpc3QgdG8gYmUgZXh0ZXJuYWxcbmltcG9ydCAqIGFzIG1vZHVsZSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuLy8gQHRzLWV4cGVjdC1lcnJvciAtIHJlcGxhY2VkIGJ5IHdlYnBhY2svdHVyYm9wYWNrIGxvYWRlclxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9nYXlhdGhyaS9EZXNrdG9wL3N3aXBlX3NhdnZ5L2FwcC9hcGkvc3RyaXBlL2NyZWF0ZS1zdWJzY3JpcHRpb24vcm91dGUudHNcIjtcbmNvbnN0IEFwcFJvdXRlUm91dGVNb2R1bGUgPSBtb2R1bGUuQXBwUm91dGVSb3V0ZU1vZHVsZTtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwic3RhbmRhbG9uZVwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zdHJpcGUvY3JlYXRlLXN1YnNjcmlwdGlvbi9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3N0cmlwZS9jcmVhdGUtc3Vic2NyaXB0aW9uXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9zdHJpcGUvY3JlYXRlLXN1YnNjcmlwdGlvbi9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9nYXlhdGhyaS9EZXNrdG9wL3N3aXBlX3NhdnZ5L2FwcC9hcGkvc3RyaXBlL2NyZWF0ZS1zdWJzY3JpcHRpb24vcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvc3RyaXBlL2NyZWF0ZS1zdWJzY3JpcHRpb24vcm91dGVcIjtcbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstripe%2Fcreate-subscription%2Froute&page=%2Fapi%2Fstripe%2Fcreate-subscription%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstripe%2Fcreate-subscription%2Froute.ts&appDir=%2FUsers%2Fgayathri%2FDesktop%2Fswipe_savvy%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fgayathri%2FDesktop%2Fswipe_savvy&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/stripe/create-subscription/route.ts":
/*!*****************************************************!*\
  !*** ./app/api/stripe/create-subscription/route.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stripe */ \"(rsc)/./node_modules/stripe/esm/stripe.esm.node.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/database */ \"(rsc)/./lib/database.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(rsc)/./node_modules/axios/lib/axios.js\");\n\n\n\n\n\nconst stripe = new stripe__WEBPACK_IMPORTED_MODULE_1__[\"default\"](process.env.STRIPE_SECRET_KEY, {\n    apiVersion: \"2024-06-20\"\n});\nasync function POST(request) {\n    try {\n        const token = request.cookies.get(\"token\")?.value;\n        if (!token) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(token, process.env.JWT_SECRET);\n        const userId = decoded.userId;\n        const client = await _lib_database__WEBPACK_IMPORTED_MODULE_3__[\"default\"].connect();\n        const userResult = await client.query(\"SELECT email, name FROM users WHERE id = $1\", [\n            userId\n        ]);\n        if (userResult.rows.length === 0) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"User not found\"\n            }, {\n                status: 404\n            });\n        }\n        const user = userResult.rows[0];\n        const customer = await stripe.customers.create({\n            email: user.email,\n            name: user.name,\n            metadata: {\n                userId: userId.toString()\n            }\n        });\n        const session = await stripe.checkout.sessions.create({\n            payment_method_types: [\n                \"card\"\n            ],\n            mode: \"subscription\",\n            customer: customer.id,\n            line_items: [\n                {\n                    price_data: {\n                        currency: \"usd\",\n                        product_data: {\n                            name: \"Shop Savvy Premium\",\n                            description: \"Premium business listing features\"\n                        },\n                        unit_amount: 3450,\n                        recurring: {\n                            interval: \"month\"\n                        }\n                    },\n                    quantity: 1\n                }\n            ],\n            subscription_data: {\n                trial_settings: {\n                    end_behavior: {\n                        missing_payment_method: \"cancel\"\n                    }\n                },\n                trial_period_days: 30,\n                metadata: {\n                    userId: userId.toString()\n                }\n            },\n            success_url: `${process.env.NEXTAUTH_URL}/dashboard?success=true`,\n            cancel_url: `${process.env.NEXTAUTH_URL}/dashboard?canceled=true`\n        });\n        await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"https://hook.us2.make.com/t8ovljado7jsaob6jflc47m9il9dia8v\", {\n            name: user.name,\n            email: user.email,\n            plan: \"premium\",\n            subscribed_on: new Date().toISOString(),\n            status: \"active\"\n        });\n        console.log(\"Stripe Checkout session URL:\", session.url);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            sessionUrl: session.url\n        });\n    } catch (error) {\n        console.error(\"Stripe Checkout error:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3N0cmlwZS9jcmVhdGUtc3Vic2NyaXB0aW9uL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0Q7QUFDNUI7QUFDRztBQUNHO0FBQ1I7QUFFMUIsTUFBTUssU0FBUyxJQUFJSiw4Q0FBTUEsQ0FBQ0ssUUFBUUMsR0FBRyxDQUFDQyxpQkFBaUIsRUFBRztJQUN4REMsWUFBWTtBQUNkO0FBRU8sZUFBZUMsS0FBS0MsT0FBb0I7SUFDN0MsSUFBSTtRQUNGLE1BQU1DLFFBQVFELFFBQVFFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVVDO1FBRTVDLElBQUksQ0FBQ0gsT0FBTztZQUNWLE9BQU9aLGtGQUFZQSxDQUFDZ0IsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQWUsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3BFO1FBRUEsTUFBTUMsVUFBVWpCLDBEQUFVLENBQUNVLE9BQU9OLFFBQVFDLEdBQUcsQ0FBQ2MsVUFBVTtRQUN4RCxNQUFNQyxTQUFTSCxRQUFRRyxNQUFNO1FBRTdCLE1BQU1DLFNBQVMsTUFBTXBCLHFEQUFJQSxDQUFDcUIsT0FBTztRQUNqQyxNQUFNQyxhQUFhLE1BQU1GLE9BQU9HLEtBQUssQ0FDbkMsK0NBQ0E7WUFBQ0o7U0FBTztRQUdWLElBQUlHLFdBQVdFLElBQUksQ0FBQ0MsTUFBTSxLQUFLLEdBQUc7WUFDaEMsT0FBTzVCLGtGQUFZQSxDQUFDZ0IsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQWlCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUN0RTtRQUVBLE1BQU1XLE9BQU9KLFdBQVdFLElBQUksQ0FBQyxFQUFFO1FBRS9CLE1BQU1HLFdBQVcsTUFBTXpCLE9BQU8wQixTQUFTLENBQUNDLE1BQU0sQ0FBQztZQUM3Q0MsT0FBT0osS0FBS0ksS0FBSztZQUNqQkMsTUFBTUwsS0FBS0ssSUFBSTtZQUNmQyxVQUFVO2dCQUNSYixRQUFRQSxPQUFPYyxRQUFRO1lBQ3pCO1FBQ0Y7UUFFQSxNQUFNQyxVQUFVLE1BQU1oQyxPQUFPaUMsUUFBUSxDQUFDQyxRQUFRLENBQUNQLE1BQU0sQ0FBQztZQUN4RFEsc0JBQXNCO2dCQUFDO2FBQU87WUFDOUJDLE1BQU07WUFDTlgsVUFBVUEsU0FBU1ksRUFBRTtZQUNyQkMsWUFBWTtnQkFDVjtvQkFDRUMsWUFBWTt3QkFDVkMsVUFBVTt3QkFDVkMsY0FBYzs0QkFDWlosTUFBTTs0QkFDTmEsYUFBYTt3QkFDZjt3QkFDQUMsYUFBYTt3QkFDYkMsV0FBVzs0QkFDVEMsVUFBVTt3QkFDWjtvQkFDRjtvQkFDQUMsVUFBVTtnQkFDWjthQUNEO1lBQ0RDLG1CQUFtQjtnQkFDakJDLGdCQUFnQjtvQkFDZEMsY0FBYzt3QkFDWkMsd0JBQXdCO29CQUMxQjtnQkFDRjtnQkFDQUMsbUJBQW1CO2dCQUNuQnJCLFVBQVU7b0JBQ1JiLFFBQVFBLE9BQU9jLFFBQVE7Z0JBQ3pCO1lBQ0Y7WUFDQXFCLGFBQWEsQ0FBQyxFQUFFbkQsUUFBUUMsR0FBRyxDQUFDbUQsWUFBWSxDQUFDLHVCQUF1QixDQUFDO1lBQ2pFQyxZQUFZLENBQUMsRUFBRXJELFFBQVFDLEdBQUcsQ0FBQ21ELFlBQVksQ0FBQyx3QkFBd0IsQ0FBQztRQUNuRTtRQUVFLE1BQU10RCw2Q0FBS0EsQ0FBQ3dELElBQUksQ0FBQyw4REFBOEQ7WUFDM0UxQixNQUFNTCxLQUFLSyxJQUFJO1lBQ2ZELE9BQU9KLEtBQUtJLEtBQUs7WUFDakI0QixNQUFNO1lBQ05DLGVBQWUsSUFBSUMsT0FBT0MsV0FBVztZQUNyQzlDLFFBQVE7UUFDVjtRQUNBK0MsUUFBUUMsR0FBRyxDQUFDLGdDQUFnQzdCLFFBQVE4QixHQUFHO1FBQ3ZELE9BQU9uRSxrRkFBWUEsQ0FBQ2dCLElBQUksQ0FBQztZQUFFb0QsWUFBWS9CLFFBQVE4QixHQUFHO1FBQUM7SUFDckQsRUFBRSxPQUFPbEQsT0FBTztRQUNkZ0QsUUFBUWhELEtBQUssQ0FBQywwQkFBMEJBO1FBQ3hDLE9BQU9qQixrRkFBWUEsQ0FBQ2dCLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXdCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQzdFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9hcHAvYXBpL3N0cmlwZS9jcmVhdGUtc3Vic2NyaXB0aW9uL3JvdXRlLnRzP2ZkOWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCBTdHJpcGUgZnJvbSAnc3RyaXBlJztcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcbmltcG9ydCBwb29sIGZyb20gJ0AvbGliL2RhdGFiYXNlJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUocHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVkhLCB7XG4gIGFwaVZlcnNpb246ICcyMDI0LTA2LTIwJyxcbn0pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHRva2VuID0gcmVxdWVzdC5jb29raWVzLmdldCgndG9rZW4nKT8udmFsdWU7XG5cbiAgICBpZiAoIXRva2VuKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1VuYXV0aG9yaXplZCcgfSwgeyBzdGF0dXM6IDQwMSB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGVkID0gand0LnZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCEpIGFzIGFueTtcbiAgICBjb25zdCB1c2VySWQgPSBkZWNvZGVkLnVzZXJJZDtcblxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHBvb2wuY29ubmVjdCgpO1xuICAgIGNvbnN0IHVzZXJSZXN1bHQgPSBhd2FpdCBjbGllbnQucXVlcnkoXG4gICAgICAnU0VMRUNUIGVtYWlsLCBuYW1lIEZST00gdXNlcnMgV0hFUkUgaWQgPSAkMScsXG4gICAgICBbdXNlcklkXVxuICAgICk7XG5cbiAgICBpZiAodXNlclJlc3VsdC5yb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdVc2VyIG5vdCBmb3VuZCcgfSwgeyBzdGF0dXM6IDQwNCB9KTtcbiAgICB9XG5cbiAgICBjb25zdCB1c2VyID0gdXNlclJlc3VsdC5yb3dzWzBdO1xuXG4gICAgY29uc3QgY3VzdG9tZXIgPSBhd2FpdCBzdHJpcGUuY3VzdG9tZXJzLmNyZWF0ZSh7XG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgIG5hbWU6IHVzZXIubmFtZSxcbiAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgIHVzZXJJZDogdXNlcklkLnRvU3RyaW5nKCksXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5jcmVhdGUoe1xuICBwYXltZW50X21ldGhvZF90eXBlczogWydjYXJkJ10sXG4gIG1vZGU6ICdzdWJzY3JpcHRpb24nLFxuICBjdXN0b21lcjogY3VzdG9tZXIuaWQsXG4gIGxpbmVfaXRlbXM6IFtcbiAgICB7XG4gICAgICBwcmljZV9kYXRhOiB7XG4gICAgICAgIGN1cnJlbmN5OiAndXNkJyxcbiAgICAgICAgcHJvZHVjdF9kYXRhOiB7XG4gICAgICAgICAgbmFtZTogJ1Nob3AgU2F2dnkgUHJlbWl1bScsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdQcmVtaXVtIGJ1c2luZXNzIGxpc3RpbmcgZmVhdHVyZXMnLFxuICAgICAgICB9LFxuICAgICAgICB1bml0X2Ftb3VudDogMzQ1MCxcbiAgICAgICAgcmVjdXJyaW5nOiB7XG4gICAgICAgICAgaW50ZXJ2YWw6ICdtb250aCcsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcXVhbnRpdHk6IDEsXG4gICAgfSxcbiAgXSxcbiAgc3Vic2NyaXB0aW9uX2RhdGE6IHtcbiAgICB0cmlhbF9zZXR0aW5nczoge1xuICAgICAgZW5kX2JlaGF2aW9yOiB7XG4gICAgICAgIG1pc3NpbmdfcGF5bWVudF9tZXRob2Q6ICdjYW5jZWwnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHRyaWFsX3BlcmlvZF9kYXlzOiAzMCwgXG4gICAgbWV0YWRhdGE6IHtcbiAgICAgIHVzZXJJZDogdXNlcklkLnRvU3RyaW5nKCksXG4gICAgfSxcbiAgfSxcbiAgc3VjY2Vzc191cmw6IGAke3Byb2Nlc3MuZW52Lk5FWFRBVVRIX1VSTH0vZGFzaGJvYXJkP3N1Y2Nlc3M9dHJ1ZWAsXG4gIGNhbmNlbF91cmw6IGAke3Byb2Nlc3MuZW52Lk5FWFRBVVRIX1VSTH0vZGFzaGJvYXJkP2NhbmNlbGVkPXRydWVgLFxufSk7XG5cbiAgYXdhaXQgYXhpb3MucG9zdCgnaHR0cHM6Ly9ob29rLnVzMi5tYWtlLmNvbS90OG92bGphZG83anNhb2I2amZsYzQ3bTlpbDlkaWE4dicsIHtcbiAgICAgIG5hbWU6IHVzZXIubmFtZSxcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgcGxhbjogJ3ByZW1pdW0nLFxuICAgICAgc3Vic2NyaWJlZF9vbjogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgc3RhdHVzOiAnYWN0aXZlJ1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCdTdHJpcGUgQ2hlY2tvdXQgc2Vzc2lvbiBVUkw6Jywgc2Vzc2lvbi51cmwpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHNlc3Npb25Vcmw6IHNlc3Npb24udXJsIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1N0cmlwZSBDaGVja291dCBlcnJvcjonLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3InIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJTdHJpcGUiLCJqd3QiLCJwb29sIiwiYXhpb3MiLCJzdHJpcGUiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX1NFQ1JFVF9LRVkiLCJhcGlWZXJzaW9uIiwiUE9TVCIsInJlcXVlc3QiLCJ0b2tlbiIsImNvb2tpZXMiLCJnZXQiLCJ2YWx1ZSIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsImRlY29kZWQiLCJ2ZXJpZnkiLCJKV1RfU0VDUkVUIiwidXNlcklkIiwiY2xpZW50IiwiY29ubmVjdCIsInVzZXJSZXN1bHQiLCJxdWVyeSIsInJvd3MiLCJsZW5ndGgiLCJ1c2VyIiwiY3VzdG9tZXIiLCJjdXN0b21lcnMiLCJjcmVhdGUiLCJlbWFpbCIsIm5hbWUiLCJtZXRhZGF0YSIsInRvU3RyaW5nIiwic2Vzc2lvbiIsImNoZWNrb3V0Iiwic2Vzc2lvbnMiLCJwYXltZW50X21ldGhvZF90eXBlcyIsIm1vZGUiLCJpZCIsImxpbmVfaXRlbXMiLCJwcmljZV9kYXRhIiwiY3VycmVuY3kiLCJwcm9kdWN0X2RhdGEiLCJkZXNjcmlwdGlvbiIsInVuaXRfYW1vdW50IiwicmVjdXJyaW5nIiwiaW50ZXJ2YWwiLCJxdWFudGl0eSIsInN1YnNjcmlwdGlvbl9kYXRhIiwidHJpYWxfc2V0dGluZ3MiLCJlbmRfYmVoYXZpb3IiLCJtaXNzaW5nX3BheW1lbnRfbWV0aG9kIiwidHJpYWxfcGVyaW9kX2RheXMiLCJzdWNjZXNzX3VybCIsIk5FWFRBVVRIX1VSTCIsImNhbmNlbF91cmwiLCJwb3N0IiwicGxhbiIsInN1YnNjcmliZWRfb24iLCJEYXRlIiwidG9JU09TdHJpbmciLCJjb25zb2xlIiwibG9nIiwidXJsIiwic2Vzc2lvblVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/stripe/create-subscription/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/database.ts":
/*!*************************!*\
  !*** ./lib/database.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   initializeDatabase: () => (/* binding */ initializeDatabase)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n\nconst pool = new pg__WEBPACK_IMPORTED_MODULE_0__.Pool({\n    connectionString: process.env.DATABASE_URL,\n    ssl:  false ? 0 : false\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pool);\n// Database initialization\nasync function initializeDatabase() {\n    const client = await pool.connect();\n    try {\n        // Create users table\n        await client.query(`\n      CREATE TABLE IF NOT EXISTS users (\n        id SERIAL PRIMARY KEY,\n        email VARCHAR(255) UNIQUE NOT NULL,\n        password VARCHAR(255) NOT NULL,\n        name VARCHAR(255) NOT NULL,\n        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n      )\n    `);\n        // Create business_listings table\n        await client.query(`\n      CREATE TABLE IF NOT EXISTS business_listings (\n        id SERIAL PRIMARY KEY,\n        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,\n        business_name VARCHAR(255) NOT NULL,\n        business_type VARCHAR(255) NOT NULL,\n        address TEXT NOT NULL,\n        phone VARCHAR(50),\n        email VARCHAR(255),\n        website VARCHAR(255),\n        description TEXT,\n        google_place_id VARCHAR(255),\n        latitude DECIMAL(10, 8),\n        longitude DECIMAL(11, 8),\n        status VARCHAR(50) DEFAULT 'pending',\n        is_premium BOOLEAN DEFAULT FALSE,\n        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n      )\n    `);\n        // Create subscriptions table\n        await client.query(`\n      CREATE TABLE IF NOT EXISTS subscriptions (\n        id SERIAL PRIMARY KEY,\n        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,\n        stripe_subscription_id VARCHAR(255) UNIQUE,\n        status VARCHAR(50) NOT NULL,\n        plan_type VARCHAR(50) NOT NULL,\n        current_period_start TIMESTAMP,\n        current_period_end TIMESTAMP,\n        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n      )\n    `);\n        console.log(\"Database tables initialized successfully\");\n    } catch (error) {\n        console.error(\"Error initializing database:\", error);\n        throw error;\n    } finally{\n        client.release();\n    }\n}\nif (true) {\n    initializeDatabase().catch((err)=>console.error(\"Database initialization failed:\", err));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGF0YWJhc2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxPQUFPLElBQUlELG9DQUFJQSxDQUFDO0lBQ3BCRSxrQkFBa0JDLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWTtJQUMxQ0MsS0FBS0gsTUFBeUIsR0FBZSxDQUE2QixHQUFHO0FBQy9FO0FBRUEsaUVBQWVGLElBQUlBLEVBQUM7QUFFcEIsMEJBQTBCO0FBQ25CLGVBQWVPO0lBQ3BCLE1BQU1DLFNBQVMsTUFBTVIsS0FBS1MsT0FBTztJQUVqQyxJQUFJO1FBQ0YscUJBQXFCO1FBQ3JCLE1BQU1ELE9BQU9FLEtBQUssQ0FBQyxDQUFDOzs7Ozs7Ozs7SUFTcEIsQ0FBQztRQUVELGlDQUFpQztRQUNqQyxNQUFNRixPQUFPRSxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW1CcEIsQ0FBQztRQUVELDZCQUE2QjtRQUM3QixNQUFNRixPQUFPRSxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0lBWXBCLENBQUM7UUFFREMsUUFBUUMsR0FBRyxDQUFDO0lBQ2QsRUFBRSxPQUFPQyxPQUFPO1FBQ2RGLFFBQVFFLEtBQUssQ0FBQyxnQ0FBZ0NBO1FBQzlDLE1BQU1BO0lBQ1IsU0FBVTtRQUNSTCxPQUFPTSxPQUFPO0lBQ2hCO0FBQ0Y7QUFFQSxJQUFJWixJQUF5QixFQUFjO0lBQ3pDSyxxQkFBcUJRLEtBQUssQ0FBQyxDQUFDQyxNQUMxQkwsUUFBUUUsS0FBSyxDQUFDLG1DQUFtQ0c7QUFFckQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9saWIvZGF0YWJhc2UudHM/NGQ0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb29sIH0gZnJvbSAncGcnO1xuXG5jb25zdCBwb29sID0gbmV3IFBvb2woe1xuICBjb25uZWN0aW9uU3RyaW5nOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwsXG4gIHNzbDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/IHsgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZSB9IDogZmFsc2UsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcG9vbDtcblxuLy8gRGF0YWJhc2UgaW5pdGlhbGl6YXRpb25cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0aWFsaXplRGF0YWJhc2UoKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IHBvb2wuY29ubmVjdCgpO1xuICBcbiAgdHJ5IHtcbiAgICAvLyBDcmVhdGUgdXNlcnMgdGFibGVcbiAgICBhd2FpdCBjbGllbnQucXVlcnkoYFxuICAgICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgdXNlcnMgKFxuICAgICAgICBpZCBTRVJJQUwgUFJJTUFSWSBLRVksXG4gICAgICAgIGVtYWlsIFZBUkNIQVIoMjU1KSBVTklRVUUgTk9UIE5VTEwsXG4gICAgICAgIHBhc3N3b3JkIFZBUkNIQVIoMjU1KSBOT1QgTlVMTCxcbiAgICAgICAgbmFtZSBWQVJDSEFSKDI1NSkgTk9UIE5VTEwsXG4gICAgICAgIGNyZWF0ZWRfYXQgVElNRVNUQU1QIERFRkFVTFQgQ1VSUkVOVF9USU1FU1RBTVAsXG4gICAgICAgIHVwZGF0ZWRfYXQgVElNRVNUQU1QIERFRkFVTFQgQ1VSUkVOVF9USU1FU1RBTVBcbiAgICAgIClcbiAgICBgKTtcblxuICAgIC8vIENyZWF0ZSBidXNpbmVzc19saXN0aW5ncyB0YWJsZVxuICAgIGF3YWl0IGNsaWVudC5xdWVyeShgXG4gICAgICBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyBidXNpbmVzc19saXN0aW5ncyAoXG4gICAgICAgIGlkIFNFUklBTCBQUklNQVJZIEtFWSxcbiAgICAgICAgdXNlcl9pZCBJTlRFR0VSIFJFRkVSRU5DRVMgdXNlcnMoaWQpIE9OIERFTEVURSBDQVNDQURFLFxuICAgICAgICBidXNpbmVzc19uYW1lIFZBUkNIQVIoMjU1KSBOT1QgTlVMTCxcbiAgICAgICAgYnVzaW5lc3NfdHlwZSBWQVJDSEFSKDI1NSkgTk9UIE5VTEwsXG4gICAgICAgIGFkZHJlc3MgVEVYVCBOT1QgTlVMTCxcbiAgICAgICAgcGhvbmUgVkFSQ0hBUig1MCksXG4gICAgICAgIGVtYWlsIFZBUkNIQVIoMjU1KSxcbiAgICAgICAgd2Vic2l0ZSBWQVJDSEFSKDI1NSksXG4gICAgICAgIGRlc2NyaXB0aW9uIFRFWFQsXG4gICAgICAgIGdvb2dsZV9wbGFjZV9pZCBWQVJDSEFSKDI1NSksXG4gICAgICAgIGxhdGl0dWRlIERFQ0lNQUwoMTAsIDgpLFxuICAgICAgICBsb25naXR1ZGUgREVDSU1BTCgxMSwgOCksXG4gICAgICAgIHN0YXR1cyBWQVJDSEFSKDUwKSBERUZBVUxUICdwZW5kaW5nJyxcbiAgICAgICAgaXNfcHJlbWl1bSBCT09MRUFOIERFRkFVTFQgRkFMU0UsXG4gICAgICAgIGNyZWF0ZWRfYXQgVElNRVNUQU1QIERFRkFVTFQgQ1VSUkVOVF9USU1FU1RBTVAsXG4gICAgICAgIHVwZGF0ZWRfYXQgVElNRVNUQU1QIERFRkFVTFQgQ1VSUkVOVF9USU1FU1RBTVBcbiAgICAgIClcbiAgICBgKTtcblxuICAgIC8vIENyZWF0ZSBzdWJzY3JpcHRpb25zIHRhYmxlXG4gICAgYXdhaXQgY2xpZW50LnF1ZXJ5KGBcbiAgICAgIENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIHN1YnNjcmlwdGlvbnMgKFxuICAgICAgICBpZCBTRVJJQUwgUFJJTUFSWSBLRVksXG4gICAgICAgIHVzZXJfaWQgSU5URUdFUiBSRUZFUkVOQ0VTIHVzZXJzKGlkKSBPTiBERUxFVEUgQ0FTQ0FERSxcbiAgICAgICAgc3RyaXBlX3N1YnNjcmlwdGlvbl9pZCBWQVJDSEFSKDI1NSkgVU5JUVVFLFxuICAgICAgICBzdGF0dXMgVkFSQ0hBUig1MCkgTk9UIE5VTEwsXG4gICAgICAgIHBsYW5fdHlwZSBWQVJDSEFSKDUwKSBOT1QgTlVMTCxcbiAgICAgICAgY3VycmVudF9wZXJpb2Rfc3RhcnQgVElNRVNUQU1QLFxuICAgICAgICBjdXJyZW50X3BlcmlvZF9lbmQgVElNRVNUQU1QLFxuICAgICAgICBjcmVhdGVkX2F0IFRJTUVTVEFNUCBERUZBVUxUIENVUlJFTlRfVElNRVNUQU1QLFxuICAgICAgICB1cGRhdGVkX2F0IFRJTUVTVEFNUCBERUZBVUxUIENVUlJFTlRfVElNRVNUQU1QXG4gICAgICApXG4gICAgYCk7XG5cbiAgICBjb25zb2xlLmxvZygnRGF0YWJhc2UgdGFibGVzIGluaXRpYWxpemVkIHN1Y2Nlc3NmdWxseScpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluaXRpYWxpemluZyBkYXRhYmFzZTonLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH0gZmluYWxseSB7XG4gICAgY2xpZW50LnJlbGVhc2UoKTtcbiAgfVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBpbml0aWFsaXplRGF0YWJhc2UoKS5jYXRjaCgoZXJyKSA9PlxuICAgIGNvbnNvbGUuZXJyb3IoJ0RhdGFiYXNlIGluaXRpYWxpemF0aW9uIGZhaWxlZDonLCBlcnIpXG4gICk7XG59Il0sIm5hbWVzIjpbIlBvb2wiLCJwb29sIiwiY29ubmVjdGlvblN0cmluZyIsInByb2Nlc3MiLCJlbnYiLCJEQVRBQkFTRV9VUkwiLCJzc2wiLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJpbml0aWFsaXplRGF0YWJhc2UiLCJjbGllbnQiLCJjb25uZWN0IiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJyZWxlYXNlIiwiY2F0Y2giLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/database.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/jwa","vendor-chunks/lodash.once","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time","vendor-chunks/stripe","vendor-chunks/axios","vendor-chunks/asynckit","vendor-chunks/math-intrinsics","vendor-chunks/es-errors","vendor-chunks/qs","vendor-chunks/call-bind-apply-helpers","vendor-chunks/debug","vendor-chunks/get-proto","vendor-chunks/object-inspect","vendor-chunks/mime-db","vendor-chunks/has-symbols","vendor-chunks/gopd","vendor-chunks/function-bind","vendor-chunks/form-data","vendor-chunks/follow-redirects","vendor-chunks/supports-color","vendor-chunks/side-channel","vendor-chunks/side-channel-weakmap","vendor-chunks/side-channel-map","vendor-chunks/side-channel-list","vendor-chunks/proxy-from-env","vendor-chunks/mime-types","vendor-chunks/hasown","vendor-chunks/has-tostringtag","vendor-chunks/has-flag","vendor-chunks/get-intrinsic","vendor-chunks/es-set-tostringtag","vendor-chunks/es-object-atoms","vendor-chunks/es-define-property","vendor-chunks/dunder-proto","vendor-chunks/delayed-stream","vendor-chunks/combined-stream","vendor-chunks/call-bound"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstripe%2Fcreate-subscription%2Froute&page=%2Fapi%2Fstripe%2Fcreate-subscription%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstripe%2Fcreate-subscription%2Froute.ts&appDir=%2FUsers%2Fgayathri%2FDesktop%2Fswipe_savvy%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fgayathri%2FDesktop%2Fswipe_savvy&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();