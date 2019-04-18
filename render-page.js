(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@reach/router"), require("core-js/modules/es6.array.sort"), require("fs"), require("lodash"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else if(typeof define === 'function' && define.amd)
		define("lib", ["@reach/router", "core-js/modules/es6.array.sort", "fs", "lodash", "path", "react", "react-dom/server", "react-helmet"], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory(require("@reach/router"), require("core-js/modules/es6.array.sort"), require("fs"), require("lodash"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else
		root["lib"] = factory(root["@reach/router"], root["core-js/modules/es6.array.sort"], root["fs"], root["lodash"], root["path"], root["react"], root["react-dom/server"], root["react-helmet"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__reach_router__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_sort__, __WEBPACK_EXTERNAL_MODULE_fs__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_path__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__, __WEBPACK_EXTERNAL_MODULE_react_helmet__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./.cache/static-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.cache/api-runner-ssr.js":
/*!**********************************!*\
  !*** ./.cache/api-runner-ssr.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var plugins = [{
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr */ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js"),
  options: {
    "plugins": []
  }
}, {
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-manifest/gatsby-ssr */ "./node_modules/gatsby-plugin-manifest/gatsby-ssr.js"),
  options: {
    "plugins": [],
    "name": "gatsby-starter-default",
    "short_name": "starter",
    "start_url": "/",
    "background_color": "#663399",
    "theme_color": "#663399",
    "display": "minimal-ui",
    "icon": "src/images/gatsby-icon.png"
  }
}]; // During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = __webpack_require__(/*! ./api-ssr-docs */ "./.cache/api-ssr-docs.js"); // Run the specified API in any plugins that have implemented it


module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api);
  } // Run each plugin in series.
  // eslint-disable-next-line no-undef


  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined;
    }

    const result = plugin.plugin[api](args, plugin.options);

    if (result && argTransform) {
      args = argTransform({
        args,
        result
      });
    }

    return result;
  }); // Filter out undefined results.

  results = results.filter(result => typeof result !== `undefined`);

  if (results.length > 0) {
    return results;
  } else {
    return [defaultReturn];
  }
};

/***/ }),

/***/ "./.cache/api-ssr-docs.js":
/*!********************************!*\
  !*** ./.cache/api-ssr-docs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Replace the default server renderer. This is useful for integration with
 * Redux, css-in-js libraries, etc. that need custom setups for server
 * rendering.
 * @param {Object} $0
 * @param {function} $0.replaceBodyHTMLString Call this with the HTML string
 * you render. **WARNING** if multiple plugins implement this API it's the
 * last plugin that "wins". TODO implement an automated warning against this.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {Object} pluginOptions
 * @example
 * // From gatsby-plugin-glamor
 * const { renderToString } = require("react-dom/server")
 * const inline = require("glamor-inline")
 *
 * exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
 *   const bodyHTML = renderToString(bodyComponent)
 *   const inlinedHTML = inline(bodyHTML)
 *
 *   replaceBodyHTMLString(inlinedHTML)
 * }
 */
exports.replaceRenderer = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * set head and body components to be rendered in your `html.js`.
 *
 * Gatsby does a two-pass render for HTML. It loops through your pages first
 * rendering only the body and then takes the result body HTML string and
 * passes it as the `body` prop to your `html.js` to complete the render.
 *
 * It's often handy to be able to send custom components to your `html.js`.
 * For example, it's a very common pattern for React.js libraries that
 * support server rendering to pull out data generated during the render to
 * add to your HTML.
 *
 * Using this API over [`replaceRenderer`](#replaceRenderer) is preferable as
 * multiple plugins can implement this API where only one plugin can take
 * over server rendering. However, if your plugin requires taking over server
 * rendering then that's the one to
 * use
 * @param {Object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {Object} pluginOptions
 * @example
 * const Helmet = require("react-helmet")
 *
 * exports.onRenderBody = (
 *   { setHeadComponents, setHtmlAttributes, setBodyAttributes },
 *   pluginOptions
 * ) => {
 *   const helmet = Helmet.renderStatic()
 *   setHtmlAttributes(helmet.htmlAttributes.toComponent())
 *   setBodyAttributes(helmet.bodyAttributes.toComponent())
 *   setHeadComponents([
 *     helmet.title.toComponent(),
 *     helmet.link.toComponent(),
 *     helmet.meta.toComponent(),
 *     helmet.noscript.toComponent(),
 *     helmet.script.toComponent(),
 *     helmet.style.toComponent(),
 *   ])
 * }
 */

exports.onRenderBody = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * replace head components to be rendered in your `html.js`. This is useful if
 * you need to reorder scripts or styles added by other plugins.
 * @param {Object} $0
 * @param {Array} $0.getHeadComponents Returns the current `headComponents` array.
 * @param {function} $0.replaceHeadComponents Takes an array of components as its
 * first argument which replace the `headComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array} $0.getPreBodyComponents Returns the current `preBodyComponents` array.
 *  @param {function} $0.replacePreBodyComponents Takes an array of components as its
 * first argument which replace the `preBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array} $0.getPostBodyComponents Returns the current `postBodyComponents` array.
 *  @param {function} $0.replacePostBodyComponents Takes an array of components as its
 * first argument which replace the `postBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Object} pluginOptions
 * @example
 * // Move Typography.js styles to the top of the head section so they're loaded first.
 * exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
 *   const headComponents = getHeadComponents()
 *   headComponents.sort((x, y) => {
 *     if (x.key === 'TypographyStyle') {
 *       return -1
 *     } else if (y.key === 'TypographyStyle') {
 *       return 1
 *     }
 *     return 0
 *   })
 *   replaceHeadComponents(headComponents)
 * }
 */

exports.onPreRenderHTML = true;
/**
 * Allow a plugin to wrap the page element.
 *
 * This is useful for setting wrapper component around pages that won't get
 * unmounted on page change. For setting Provider components use [wrapRootElement](#wrapRootElement).
 *
 * _Note:_ [There is equivalent hook in Browser API](/docs/browser-apis/#wrapPageElement)
 * @param {object} $0
 * @param {object} $0.element The "Page" React Element built by Gatsby.
 * @param {object} $0.props Props object used by page.
 * @example
 * import React from "react"
 * import Layout from "./src/components/Layout"
 *
 * export const wrapPageElement = ({ element, props }) => {
 *   // props provide same data to Layout as Page element will get
 *   // including location, data, etc - you don't need to pass it
 *   return <Layout {...props}>{element}</Layout>
 * }
 */

exports.wrapPageElement = true;
/**
 * Allow a plugin to wrap the root element.
 *
 * This is useful to setup any Providers component that will wrap your application.
 * For setting persistent UI elements around pages use [wrapPageElement](#wrapPageElement).
 *
 * _Note:_ [There is equivalent hook in Browser API](/docs/browser-apis/#wrapRootElement)
 * @param {object} $0
 * @param {object} $0.element The "Root" React Element built by Gatsby.
 * @example
 * import React from "react"
 * import { Provider } from "react-redux"
 *
 * import createStore from "./src/state/createStore"
 * const store = createStore()
 *
 * export const wrapRootElement = ({ element }) => {
 *   return (
 *     <Provider store={store}>
 *       {element}
 *     </Provider>
 *   )
 * }
 */

exports.wrapRootElement = true;

/***/ }),

/***/ "./.cache/data.json":
/*!**************************!*\
  !*** ./.cache/data.json ***!
  \**************************/
/*! exports provided: pages, dataPaths, default */
/***/ (function(module) {

module.exports = {"pages":[{"componentChunkName":"component---src-pages-index-js","jsonName":"index","path":"/"},{"componentChunkName":"component---src-pages-404-js","jsonName":"404-html-516","path":"/404.html"},{"componentChunkName":"component---src-pages-404-js","jsonName":"404-22d","path":"/404/"},{"componentChunkName":"component---node-modules-gatsby-plugin-offline-app-shell-js","jsonName":"offline-plugin-app-shell-fallback-a30","path":"/offline-plugin-app-shell-fallback/"},{"componentChunkName":"component---src-pages-page-2-js","jsonName":"page-2-fbc","path":"/page-2/"}],"dataPaths":{"404-22d":"44/path---404-22-d-bce-NZuapzHg3X9TaN1iIixfv1W23E","404-html-516":"164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E","dev-404-page-5f9":"920/path---dev-404-page-5-f-9-fab-NZuapzHg3X9TaN1iIixfv1W23E","index":"173/path---index-6a9-NZuapzHg3X9TaN1iIixfv1W23E","offline-plugin-app-shell-fallback-a30":"520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E","page-2-fbc":"53/path---page-2-fbc-5a8-NZuapzHg3X9TaN1iIixfv1W23E","sq--src-components-layout-js":2994927498}};

/***/ }),

/***/ "./.cache/default-html.js":
/*!********************************!*\
  !*** ./.cache/default-html.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTML; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


class HTML extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", this.props.htmlAttributes, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
      charSet: "utf-8"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
      httpEquiv: "x-ua-compatible",
      content: "ie=edge"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1, shrink-to-fit=no"
    }), this.props.headComponents), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", this.props.bodyAttributes, this.props.preBodyComponents, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: `body`,
      id: "___gatsby",
      dangerouslySetInnerHTML: {
        __html: this.props.body
      }
    }), this.props.postBodyComponents));
  }

}
HTML.propTypes = {
  htmlAttributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  headComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  bodyAttributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  preBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  body: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  postBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};

/***/ }),

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/*! exports provided: Link, withPrefix, graphql, parsePath, navigate, push, replace, navigateTo, StaticQueryContext, StaticQuery, PageRenderer, waitForRouteChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var _wait_for_route_change__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wait-for-route-change */ "./.cache/wait-for-route-change.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "waitForRouteChange", function() { return _wait_for_route_change__WEBPACK_IMPORTED_MODULE_3__["waitForRouteChange"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_4___default.a; });
/* harmony import */ var _parse_path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parse-path */ "./.cache/parse-path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return _parse_path__WEBPACK_IMPORTED_MODULE_5__["default"]; });







const StaticQueryContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

const StaticQuery = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer, null, staticQueryData => {
  if (props.data || staticQueryData[props.query] && staticQueryData[props.query].data) {
    return (props.render || props.children)(props.data ? props.data.data : staticQueryData[props.query].data);
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading (StaticQuery)");
  }
});

StaticQuery.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function graphql() {
  throw new Error(`It appears like Gatsby is misconfigured. Gatsby related \`graphql\` calls ` + `are supposed to only be evaluated at compile time, and then compiled away,. ` + `Unfortunately, something went wrong and the query was left in the compiled code.\n\n.` + `Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.`);
}



/***/ }),

/***/ "./.cache/parse-path.js":
/*!******************************!*\
  !*** ./.cache/parse-path.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parsePath; });
function parsePath(path) {
  var pathname = path || `/`;
  var search = ``;
  var hash = ``;
  var hashIndex = pathname.indexOf(`#`);

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf(`?`);

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === `?` ? `` : search,
    hash: hash === `#` ? `` : hash
  };
}

/***/ }),

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const preferDefault = m => m && m.default || m;

if (false) {} else if (false) {} else {
  module.exports = () => null;
}

/***/ }),

/***/ "./.cache/static-entry.js":
/*!********************************!*\
  !*** ./.cache/static-entry.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.sort */ "core-js/modules/es6.array.sort");
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_0__);


const React = __webpack_require__(/*! react */ "react");

const fs = __webpack_require__(/*! fs */ "fs");

const {
  join
} = __webpack_require__(/*! path */ "path");

const {
  renderToString,
  renderToStaticMarkup
} = __webpack_require__(/*! react-dom/server */ "react-dom/server");

const {
  ServerLocation,
  Router,
  isRedirect
} = __webpack_require__(/*! @reach/router */ "@reach/router");

const {
  get,
  merge,
  isObject,
  flatten,
  uniqBy
} = __webpack_require__(/*! lodash */ "lodash");

const apiRunner = __webpack_require__(/*! ./api-runner-ssr */ "./.cache/api-runner-ssr.js");

const syncRequires = __webpack_require__(/*! ./sync-requires */ "./.cache/sync-requires.js");

const {
  dataPaths,
  pages
} = __webpack_require__(/*! ./data.json */ "./.cache/data.json");

const {
  version: gatsbyVersion
} = __webpack_require__(/*! gatsby/package.json */ "./node_modules/gatsby/package.json"); // Speed up looking up pages.


const pagesObjectMap = new Map();
pages.forEach(p => pagesObjectMap.set(p.path, p));
const stats = JSON.parse(fs.readFileSync(`${process.cwd()}/public/webpack.stats.json`, `utf-8`));
const chunkMapping = JSON.parse(fs.readFileSync(`${process.cwd()}/public/chunk-map.json`, `utf-8`)); // const testRequireError = require("./test-require-error")
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.

const testRequireError = (moduleName, err) => {
  const regex = new RegExp(`Error: Cannot find module\\s.${moduleName}`);
  const firstLine = err.toString().split(`\n`)[0];
  return regex.test(firstLine);
};

let Html;

try {
  Html = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../src/html'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
} catch (err) {
  if (testRequireError(`../src/html`, err)) {
    Html = __webpack_require__(/*! ./default-html */ "./.cache/default-html.js");
  } else {
    throw err;
  }
}

Html = Html && Html.__esModule ? Html.default : Html;

const getPage = path => pagesObjectMap.get(path);

const createElement = React.createElement;
/* harmony default export */ __webpack_exports__["default"] = ((pagePath, callback) => {
  let bodyHtml = ``;
  let headComponents = [React.createElement("meta", {
    name: "generator",
    content: `Gatsby ${gatsbyVersion}`
  })];
  let htmlAttributes = {};
  let bodyAttributes = {};
  let preBodyComponents = [];
  let postBodyComponents = [];
  let bodyProps = {};

  const replaceBodyHTMLString = body => {
    bodyHtml = body;
  };

  const setHeadComponents = components => {
    headComponents = headComponents.concat(components);
  };

  const setHtmlAttributes = attributes => {
    htmlAttributes = merge(htmlAttributes, attributes);
  };

  const setBodyAttributes = attributes => {
    bodyAttributes = merge(bodyAttributes, attributes);
  };

  const setPreBodyComponents = components => {
    preBodyComponents = preBodyComponents.concat(components);
  };

  const setPostBodyComponents = components => {
    postBodyComponents = postBodyComponents.concat(components);
  };

  const setBodyProps = props => {
    bodyProps = merge({}, bodyProps, props);
  };

  const getHeadComponents = () => headComponents;

  const replaceHeadComponents = components => {
    headComponents = components;
  };

  const getPreBodyComponents = () => preBodyComponents;

  const replacePreBodyComponents = components => {
    preBodyComponents = components;
  };

  const getPostBodyComponents = () => postBodyComponents;

  const replacePostBodyComponents = components => {
    postBodyComponents = components;
  };

  const page = getPage(pagePath);
  let dataAndContext = {};

  if (page.jsonName in dataPaths) {
    const pathToJsonData = `../public/` + dataPaths[page.jsonName];

    try {
      dataAndContext = JSON.parse(fs.readFileSync(`${process.cwd()}/public/static/d/${dataPaths[page.jsonName]}.json`));
    } catch (e) {
      console.log(`error`, pathToJsonData, e);
      process.exit();
    }
  }

  class RouteHandler extends React.Component {
    render() {
      const props = { ...this.props,
        ...dataAndContext,
        pathContext: dataAndContext.pageContext
      };
      const pageElement = createElement(syncRequires.components[page.componentChunkName], props);
      const wrappedPage = apiRunner(`wrapPageElement`, {
        element: pageElement,
        props
      }, pageElement, ({
        result
      }) => {
        return {
          element: result,
          props
        };
      }).pop();
      return wrappedPage;
    }

  }

  const routerElement = createElement(ServerLocation, {
    url: `${""}${pagePath}`
  }, createElement(Router, {
    baseuri: `${""}`
  }, createElement(RouteHandler, {
    path: `/*`
  })));
  const bodyComponent = apiRunner(`wrapRootElement`, {
    element: routerElement
  }, routerElement, ({
    result
  }) => {
    return {
      element: result
    };
  }).pop(); // Let the site or plugin render the page component.

  apiRunner(`replaceRenderer`, {
    bodyComponent,
    replaceBodyHTMLString,
    setHeadComponents,
    setHtmlAttributes,
    setBodyAttributes,
    setPreBodyComponents,
    setPostBodyComponents,
    setBodyProps
  }); // If no one stepped up, we'll handle it.

  if (!bodyHtml) {
    try {
      bodyHtml = renderToString(bodyComponent);
    } catch (e) {
      // ignore @reach/router redirect errors
      if (!isRedirect(e)) throw e;
    }
  } // Create paths to scripts


  let scriptsAndStyles = flatten([`app`, page.componentChunkName].map(s => {
    const fetchKey = `assetsByChunkName[${s}]`;
    let chunks = get(stats, fetchKey);
    let namedChunkGroups = get(stats, `namedChunkGroups`);

    if (!chunks) {
      return null;
    }

    chunks = chunks.map(chunk => {
      if (chunk === `/`) {
        return null;
      }

      return {
        rel: `preload`,
        name: chunk
      };
    });
    namedChunkGroups[s].assets.forEach(asset => chunks.push({
      rel: `preload`,
      name: asset
    }));
    const childAssets = namedChunkGroups[s].childAssets;

    for (const rel in childAssets) {
      chunks = merge(chunks, childAssets[rel].map(chunk => {
        return {
          rel,
          name: chunk
        };
      }));
    }

    return chunks;
  })).filter(s => isObject(s)).sort((s1, s2) => s1.rel == `preload` ? -1 : 1); // given priority to preload

  scriptsAndStyles = uniqBy(scriptsAndStyles, item => item.name);
  const scripts = scriptsAndStyles.filter(script => script.name && script.name.endsWith(`.js`));
  const styles = scriptsAndStyles.filter(style => style.name && style.name.endsWith(`.css`));
  apiRunner(`onRenderBody`, {
    setHeadComponents,
    setHtmlAttributes,
    setBodyAttributes,
    setPreBodyComponents,
    setPostBodyComponents,
    setBodyProps,
    pathname: pagePath,
    bodyHtml,
    scripts,
    styles,
    pathPrefix: ""
  });
  scripts.slice(0).reverse().forEach(script => {
    // Add preload/prefetch <link>s for scripts.
    headComponents.push(React.createElement("link", {
      as: "script",
      rel: script.rel,
      key: script.name,
      href: `${""}/${script.name}`
    }));
  });

  if (page.jsonName in dataPaths) {
    const dataPath = `${""}/static/d/${dataPaths[page.jsonName]}.json`;
    headComponents.push(React.createElement("link", {
      rel: "preload",
      key: dataPath,
      href: dataPath,
      as: "fetch",
      crossOrigin: "use-credentials"
    }));
  }

  styles.slice(0).reverse().forEach(style => {
    // Add <link>s for styles that should be prefetched
    // otherwise, inline as a <style> tag
    if (style.rel === `prefetch`) {
      headComponents.push(React.createElement("link", {
        as: "style",
        rel: style.rel,
        key: style.name,
        href: `${""}/${style.name}`
      }));
    } else {
      headComponents.unshift(React.createElement("style", {
        "data-href": `${""}/${style.name}`,
        dangerouslySetInnerHTML: {
          __html: fs.readFileSync(join(process.cwd(), `public`, style.name), `utf-8`)
        }
      }));
    }
  });
  apiRunner(`onPreRenderHTML`, {
    getHeadComponents,
    replaceHeadComponents,
    getPreBodyComponents,
    replacePreBodyComponents,
    getPostBodyComponents,
    replacePostBodyComponents
  }); // Add page metadata for the current page

  const windowData = `/*<![CDATA[*/window.page=${JSON.stringify(page)};${page.jsonName in dataPaths ? `window.dataPath="${dataPaths[page.jsonName]}";` : ``}/*]]>*/`;
  postBodyComponents.push(React.createElement("script", {
    key: `script-loader`,
    id: `gatsby-script-loader`,
    dangerouslySetInnerHTML: {
      __html: windowData
    }
  })); // Add chunk mapping metadata

  const scriptChunkMapping = `/*<![CDATA[*/window.___chunkMapping=${JSON.stringify(chunkMapping)};/*]]>*/`;
  postBodyComponents.push(React.createElement("script", {
    key: `chunk-mapping`,
    id: `gatsby-chunk-mapping`,
    dangerouslySetInnerHTML: {
      __html: scriptChunkMapping
    }
  })); // Filter out prefetched bundles as adding them as a script tag
  // would force high priority fetching.

  const bodyScripts = scripts.filter(s => s.rel !== `prefetch`).map(s => {
    const scriptPath = `${""}/${JSON.stringify(s.name).slice(1, -1)}`;
    return React.createElement("script", {
      key: scriptPath,
      src: scriptPath,
      async: true
    });
  });
  postBodyComponents.push(...bodyScripts);
  const html = `<!DOCTYPE html>${renderToStaticMarkup(React.createElement(Html, Object.assign({}, bodyProps, {
    headComponents: headComponents,
    htmlAttributes: htmlAttributes,
    bodyAttributes: bodyAttributes,
    preBodyComponents: preBodyComponents,
    postBodyComponents: postBodyComponents,
    body: bodyHtml,
    path: pagePath
  })))}`;
  callback(null, html);
});

/***/ }),

/***/ "./.cache/sync-requires.js":
/*!*********************************!*\
  !*** ./.cache/sync-requires.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// prefer default export if available
const preferDefault = m => m && m.default || m;

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": preferDefault(__webpack_require__(/*! ./node_modules/gatsby-plugin-offline/app-shell.js */ "./node_modules/gatsby-plugin-offline/app-shell.js")),
  "component---src-pages-404-js": preferDefault(__webpack_require__(/*! ./src/pages/404.js */ "./src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(__webpack_require__(/*! ./src/pages/index.js */ "./src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(__webpack_require__(/*! ./src/pages/page-2.js */ "./src/pages/page-2.js"))
};

/***/ }),

/***/ "./.cache/wait-for-route-change.js":
/*!*****************************************!*\
  !*** ./.cache/wait-for-route-change.js ***!
  \*****************************************/
/*! exports provided: waitForRouteChange, resolveRouteChangePromise, resetRouteChangePromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waitForRouteChange", function() { return waitForRouteChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveRouteChangePromise", function() { return resolveRouteChangePromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetRouteChangePromise", function() { return resetRouteChangePromise; });
let resolve, promise;

const resetRouteChangePromise = () => {
  promise = new Promise(r => {
    resolve = r;
  });
};

resetRouteChangePromise();

const waitForRouteChange = () => promise;

const resolveRouteChangePromise = () => {
  resolve(window.location);
}; // We need to set this function on the window
// so it's accessible to Cypress for tests.


if (typeof window !== `undefined`) {
  window.___waitForRouteChange = waitForRouteChange;
}



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/css-doodle/css-doodle.js":
/*!***********************************************!*\
  !*** ./node_modules/css-doodle/css-doodle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
   true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) :
  undefined;
}(function () { 'use strict';

  function iterator(input) {
    let index = 0, col = 1, line = 1;
    return {
      curr(n = 0) {
        return input[index + n];
      },
      end() {
        return input.length <= index;
      },
      info() {
        return { index, col, line };
      },
      index(n) {
        return (n === undefined ? index : index = n);
      },
      next() {
        let next = input[index++];
        if (next == '\n') line++, col = 0;
        else col++;
        return next;
      }
    };
  }

  // I'll make it work first
  function parse(it) {
    let word = '', marks = [];
    let groups = [], result = {};

    while(!it.end()) {
      let c = it.curr();
      if (c == '(') {
        marks.push(c);
        word = '';
      }
      else if (c == ')' || c == ',') {
        if (/^\-\-.+/.test(word)) {
          if (!result.name) {
            result.name = word;
          } else {
            if (!result.alternative) {
              result.alternative = [];
            }
            result.alternative.push({
              name: word
            });
          }
        }

        if (c == ')') {
          if (marks[marks.length - 1] == '(') {
            marks.pop();
          } else {
            throw new Error('bad match');
          }
        }

        if (c == ',') {
          if (!marks.length) {
            groups.push(result);
            result = {};
          }
        }

        word = '';
      }
      else if (!/\s/.test(c)) {
        word += c;
      }
      it.next();
    }

    if (marks.length) {
      return [];
    }

    if (result.name) {
      groups.push(result);
    }
    return groups;
  }

  function parse_var(input) {
    input = input.trim();
    let result = [];
    if (!/^var\(/.test(input)) {
      return result;
    }
    let it = iterator(input);
    try {
      result = parse(it);
    } catch (e) {
      console.error(e && e.message || 'Bad variables.');
    }
    return result;
  }

  function make_array(arr) {
    return Array.isArray(arr) ? arr : [arr];
  }

  function join(arr, spliter = '\n') {
    return (arr || []).join(spliter);
  }

  function last(arr) {
    return arr[arr.length - 1];
  }

  function first(arr) {
    return arr[0];
  }

  function shuffle(arr) {
    let ret = Array.from ? Array.from(arr) : arr.slice();
    let m = arr.length;
    while (m) {
      let i = ~~(Math.random() * m--);
      let t = ret[m];
      ret[m] = ret[i];
      ret[i] = t;
    }
    return ret;
  }

  function flat_map(arr, fn) {
    if (Array.prototype.flatMap) return arr.flatMap(fn);
    return arr.reduce((acc, x) => acc.concat(fn(x)), []);
  }

  const Tokens = {
    func(name = '') {
      return {
        type: 'func',
        name,
        arguments: []
      };
    },
    argument() {
      return {
        type: 'argument',
        value: []
      };
    },
    text(value = '') {
      return {
        type: 'text',
        value
      };
    },
    pseudo(selector = '') {
      return {
        type: 'pseudo',
        selector,
        styles: []
      };
    },
    cond(name = '') {
      return {
        type: 'cond',
        name,
        styles: [],
        arguments: []
      };
    },
    rule(property = '') {
      return {
        type: 'rule',
        property,
        value: []
      };
    },
    keyframes(name = '') {
      return {
        type: 'keyframes',
        name,
        steps: []
      }
    },

    step(name = '') {
      return {
        type: 'step',
        name,
        styles: []
      }
    }
  };

  const is = {
    white_space(c) {
      return /[\s\n\t]/.test(c);
    },
    line_break(c) {
      return /\n/.test(c);
    },
    number(n) {
      return !isNaN(n);
    },
    pair(n) {
      return ['"', '(', ')', "'"].includes(n);
    },
    pair_of(c, n) {
      return ({ '"': '"', "'": "'", '(': ')' })[c] == n;
    }
  };

  function throw_error(msg, { col, line }) {
    console.error(
      `(at line ${ line }, column ${ col }) ${ msg }`
    );
  }

  function get_text_value(input) {
    if (input.trim().length) {
      return is.number(+input) ? +input : input.trim()
    } else {
      return input;
    }
  }

  function read_until(fn) {
    return function(it, reset) {
      let index = it.index();
      let word = '';
      while (!it.end()) {
        let c = it.next();
        if (fn(c)) break;
        else word += c;
      }
      if (reset) {
        it.index(index);
      }
      return word;
    }
  }

  function read_word(it, reset) {
    let check = c => /[^\w@]/.test(c);
    return read_until(check)(it, reset);
  }

  function read_keyframe_name(it) {
    return read_until(c => /[\s\{]/.test(c))(it);
  }

  function read_line(it, reset) {
    let check = c => is.line_break(c) || c == '{';
    return read_until(check)(it, reset);
  }

  function read_step(it, extra) {
    let c, step = Tokens.step();
    while (!it.end()) {
      if ((c = it.curr()) == '}') break;
      if (is.white_space(c)) {
        it.next();
        continue;
      }
      else if (!step.name.length) {
        step.name = read_selector(it);
      }
      else {
        step.styles.push(read_rule(it, extra));
        if (it.curr() == '}') break;
      }
      it.next();
    }
    return step;
  }

  function read_steps(it, extra) {
    const steps = [];
    let c;
    while (!it.end()) {
      if ((c = it.curr()) == '}') break;
      else if (is.white_space(c)) {
        it.next();
        continue;
      }
      else {
        steps.push(read_step(it, extra));
      }
      it.next();
    }
    return steps;
  }

  function read_keyframes(it, extra) {
    let keyframes = Tokens.keyframes(), c;
    while (!it.end()) {
      if ((c = it.curr()) == '}') break;
      else if (!keyframes.name.length) {
        read_word(it);
        keyframes.name = read_keyframe_name(it);
        if (!keyframes.name.length) {
          throw_error('missing keyframes name', it.info());
          break;
        }
        continue;
      }
      else if (c == '{') {
        it.next();
        keyframes.steps = read_steps(it, extra);
        break;
      }
      it.next();
    }
    return keyframes;
  }

  function read_comments(it, flag = {}) {
    it.next();
    while (!it.end()) {
      let c = it.curr();
      if (flag.inline) {
        if (c == '\n') break;
      }
      else {
        if ((c = it.curr()) == '*' && it.curr(1) == '/') break;
      }
      it.next();
    }
    if (!flag.inline) {
      it.next(); it.next();
    }
  }

  function read_property(it) {
    let prop = '', c;
    while (!it.end()) {
      if ((c = it.curr()) == ':') break;
      else if (!is.white_space(c)) prop += c;
      it.next();
    }
    return prop;
  }

  function read_arguments(it) {
    let args = [], group = [], stack = [], arg = '', c;
    while (!it.end()) {
      c = it.curr();

      if ((/[\('"`]/.test(c) && it.curr(-1) !== '\\')) {
        if (stack.length) {
          if (c != '(' && c === last(stack)) {
            stack.pop();
          } else {
            stack.push(c);
          }
        } else {
          stack.push(c);
        }
        arg += c;
      }
      else if (c == '@') {
        if (!group.length) {
          arg = arg.trimLeft();
        }
        if (arg.length) {
          group.push(Tokens.text(arg));
          arg = '';
        }
        group.push(read_func(it));
      }
      else if (/[,)]/.test(c)) {
        if (stack.length) {
          if (c == ')') {
            stack.pop();
          }
          arg += c;
        }

        else {
          if (arg.length) {
            if (!group.length) {
              group.push(Tokens.text(get_text_value(arg)));
            } else {
              if (arg.length) {
                group.push(Tokens.text(arg));
              }
            }
          }

          args.push(normalize_argument(group));
          [group, arg] = [[], ''];

          if (c == ')') break;
        }
      }
      else {
        arg += c;
      }
      it.next();
    }
    return args;
  }

  function normalize_argument(group) {
    let result = group.map(arg => {
      if (arg.type == 'text' && typeof arg.value == 'string') {
        let value = String(arg.value);
        if (value.includes('`')) {
          arg.value = value = value.replace(/`/g, '"');
        }
        arg.value = value.replace(/\n+|\s+/g, ' ');
      }
      return arg;
    });

    let ft = first(result) || {};
    let ed = last(result) || {};
    if (ft.type == 'text' && ed.type == 'text') {
      let cf = first(ft.value);
      let ce  = last(ed.value);
      if (typeof ft.value == 'string' && typeof ed.value == 'string') {
        if (is.pair(cf) && is.pair_of(cf, ce)) {
          ft.value = ft.value.slice(1);
          ed.value = ed.value.slice(0, ed.value.length - 1);
        }
      }
    }
    return result;
  }

  function read_func(it) {
    let func = Tokens.func();
    let extra = '', name = '', c;
    while (!it.end()) {
      if ((c = it.curr()) == ')') break;
      if (c == '(') {
        it.next();
        func.name = name;
        func.arguments = read_arguments(it);
        if (/\d$/.test(name)) {
          func.name = name.split(/\d+/)[0];
          extra = name.split(/\D+/)[1];
        }
        if (extra.length) {
          func.arguments.unshift([{
            type: 'text',
            value: extra
          }]);
        }
        func.position = it.info().index;
        break;
      }
      else name += c;
      it.next();
    }
    return func;
  }

  function read_value(it) {
    let text = Tokens.text(), idx = 0, skip = true, c;
    const value = [], stack = [];
    value[idx] = [];

    while (!it.end()) {
      c = it.curr();

      if (skip && is.white_space(c)) {
        it.next();
        continue;
      } else {
        skip = false;
      }

      if (c == '\n' && !is.white_space(it.curr(-1))) {
        text.value += ' ';
      }
      else if (c == ',' && !stack.length) {
        if (text.value.length) {
          value[idx].push(text);
          text = Tokens.text();
        }
        value[++idx] = [];
        skip = true;
      }
      else if (/[;}]/.test(c)) {
        if (text.value.length) {
          value[idx].push(text);
          text = Tokens.text();
        }
        break;
      }
      else if (c == '@') {
        if (text.value.length) {
          value[idx].push(text);
          text = Tokens.text();
        }
        value[idx].push(read_func(it));
      }
      else if (!is.white_space(c) || !is.white_space(it.curr(-1))) {
        if (c == '(') stack.push(c);
        if (c == ')') stack.pop();
        text.value += c;
      }
      it.next();
    }
    if (text.value.length) {
      value[idx].push(text);
    }
    return value;
  }

  function read_selector(it) {
    let selector = '', c;
    while (!it.end()) {
      if ((c = it.curr()) == '{') break;
      else if (!is.white_space(c)) {
        selector += c;
      }
      it.next();
    }
    return selector;
  }

  function read_cond_selector(it) {
    let selector = { name: '', arguments: [] }, c;
    while (!it.end()) {
      if ((c = it.curr()) == '(') {
        it.next();
        selector.arguments = read_arguments(it);
      }
      else if (/[){]/.test(c)) break;
      else if (!is.white_space(c)) selector.name += c;
      it.next();
    }
    return selector;
  }

  function read_pseudo(it, extra) {
    let pseudo = Tokens.pseudo(), c;
    while (!it.end()) {
      if ((c = it.curr()) == '}') break;
      if (is.white_space(c)) {
        it.next();
        continue;
      }
      else if (!pseudo.selector) {
        pseudo.selector = read_selector(it);
      }
      else {
        let rule = read_rule(it, extra);
        if (rule.property == '@use') {
          pseudo.styles = pseudo.styles.concat(
            rule.value
          );
        } else {
          pseudo.styles.push(rule);
        }
        if (it.curr() == '}') break;
      }
      it.next();
    }
    return pseudo;
  }

  function read_rule(it, extra) {
    let rule = Tokens.rule(), c;
    while (!it.end()) {
      if ((c = it.curr()) == ';') break;
      else if (!rule.property.length) {
        rule.property = read_property(it);
        if (rule.property == '@use') {
          rule.value = read_var(it, extra);
          break;
        }
      }
      else {
        rule.value = read_value(it);
        break;
      }
      it.next();
    }
    return rule;
  }

  function read_cond(it, extra) {
    let cond = Tokens.cond(), c;
    while (!it.end()) {
      if ((c = it.curr()) == '}') break;
      else if (!cond.name.length) {
        Object.assign(cond, read_cond_selector(it));
      }
      else if (c == ':') {
        let pseudo = read_pseudo(it);
        if (pseudo.selector) cond.styles.push(pseudo);
      }
      else if (c == '@' && !read_line(it, true).includes(':')) {
        cond.styles.push(read_cond(it));
      }
      else if (!is.white_space(c)) {
        let rule = read_rule(it, extra);
        if (rule.property) cond.styles.push(rule);
        if (it.curr() == '}') break;
      }
      it.next();
    }
    return cond;
  }

  function read_property_value(extra, name) {
    let rule = '';
    if (extra && extra.get_custom_property_value) {
      rule = extra.get_custom_property_value(name);
    }
    return rule;
  }

  function evaluate_value(values, extra) {
    values.forEach && values.forEach(v => {
      if (v.type == 'text' && v.value) {
        let vars = parse_var(v.value);
        v.value = vars.reduce((ret, p) => {
          let rule = '', other = '', parsed;
          rule = read_property_value(extra, p.name);
          if (!rule && p.alternative) {
            p.alternative.every(n => {
              other = read_property_value(extra, n.name);
              if (other) {
                rule = other;
                return false;
              }
            });
          }
          try {
            parsed = parse$1(rule, extra);
          } catch (e) { }
          if (parsed) {
            ret.push.apply(ret, parsed);
          }
          return ret;
        }, []);
      }
      if (v.type == 'func' && v.arguments) {
        v.arguments.forEach(arg => {
          evaluate_value(arg, extra);
        });
      }
    });
  }

  function read_var(it, extra) {
    it.next();
    let groups = read_value(it) || [];
    return groups.reduce((ret, group) => {
      evaluate_value(group, extra);
      let [token] = group;
      if (token.value && token.value.length) {
        ret.push(...token.value);
      }
      return ret;
    }, []);
  }

  function parse$1(input, extra) {
    const it = iterator(input);
    const Tokens = [];
    while (!it.end()) {
      let c = it.curr();
      if (is.white_space(c)) {
        it.next();
        continue;
      }
      else if (c == '/' && it.curr(1) == '*') {
        read_comments(it);
      }
      else if (c == '/' && it.curr(1) == '/') {
        read_comments(it, { inline: true });
      }
      else if (c == ':') {
        let pseudo = read_pseudo(it, extra);
        if (pseudo.selector) Tokens.push(pseudo);
      }
      else if (c == '@' && read_word(it, true) === '@keyframes') {
        let keyframes = read_keyframes(it, extra);
        Tokens.push(keyframes);
      }
      else if (c == '@' && !read_line(it, true).includes(':')) {
        let cond = read_cond(it, extra);
        if (cond.name.length) Tokens.push(cond);
      }
      else if (!is.white_space(c)) {
        let rule = read_rule(it, extra);
        if (rule.property) Tokens.push(rule);
      }
      it.next();
    }
    return Tokens;
  }

  function apply_args(fn, ...args) {
    return args.reduce((f, arg) =>
      f.apply(null, make_array(arg)), fn
    );
  }

  function clamp(num, min, max) {
    return Math.max(min, Math.min(max, num));
  }

  function maybe(cond, value) {
    if (!cond) return '';
    return (typeof value === 'function') ? value() : value;
  }

  function range(start, stop, step) {
    let count = 0, old = start;
    let initial = n => (n > 0 && n < 1) ? .1 : 1;
    let length = arguments.length;
    if (length == 1) [start, stop] = [initial(start), start];
    if (length < 3) step = initial(start);
    let range = [];
    while ((step >= 0 && start <= stop)
      || (step < 0 && start > stop)) {
      range.push(start);
      start += step;
      if (count++ >= 1000) break;
    }
    if (!range.length) range.push(old);
    return range;
  }

  function alias_for(obj, names) {
    Object.keys(names).forEach(n => {
      obj[n] = obj[names[n]];
    });
    return obj;
  }

  function is_letter(c) {
    return /^[a-zA-Z]$/.test(c);
  }

  function lazy(fn) {
    let wrap = () => fn;
    wrap.lazy = true;
    return wrap;
  }

  function sequence(count, fn) {
    let ret = [];
    for (let i = 0; i < count; ++i) {
      ret.push(fn(i));
    }
    return ret;
  }

  const [ min, max, total ] = [ 1, 32, 32 * 32 ];

  function parse_grid(size) {
    let [x, y, z] = (size + '')
      .replace(/\s+/g, '')
      .replace(/[,，xX]+/g, 'x')
      .split('x')
      .map(Number);

    const max_val = (x == 1 || y == 1) ? total : max;

    const ret = {
      x: clamp(x || min, 1, max_val),
      y: clamp(y || x || min, 1, max_val),
      z: clamp(z || min, 1, max_val)
    };

    return Object.assign({}, ret,
      { count: ret.x * ret.y }
    );
  }

  function create_svg_url(svg, id) {
    if (id) {
      let blob = new Blob([svg], { type: 'image/svg+xml' });
      let url = URL.createObjectURL(blob);
      return `url(${ url }#${ id })`;
    }
    else {
      let encoded = encodeURIComponent(svg);
      return `url("data:image/svg+xml;utf8,${ encoded }")`;
    }
  }

  function normalize_svg(input) {
    const xmlns = 'xmlns="http://www.w3.org/2000/svg"';
    if (!input.includes('<svg')) {
      input = `<svg ${ xmlns }>${ input }</svg>`;
    }
    if (!input.includes('xmlns')) {
      input = input.replace(/<svg([\s>])/, `<svg ${ xmlns }$1`);
    }
    return input;
  }

  function lerp(start, end, t) {
    return start * (1 - t) + end * t;
  }

  function rand(start = 0, end = start) {
    if (arguments.length == 1) {
      start = start < 1 ? .1 : 1;
    }
    return lerp(start, end, Math.random());
  }

  function pick(...items) {
    let args = items.reduce((acc, n) => acc.concat(n), []);
    return args[~~(Math.random() * args.length)];
  }

  function unique_id(prefix = '') {
    return prefix + Math.random().toString(32).substr(2);
  }

  function by_unit(fn) {
    return (...args) => {
      let unit = get_unit(args);
      return restore(fn, unit).apply(null, args);
    }
  }

  function restore(fn, unit) {
    return (...args) => {
      args = args.map(str => Number(
        String(str).replace(/\D+$/g, '')
      ));
      let result = fn.apply(null, args);
      if (!unit.length) {
        return result;
      }
      if (Array.isArray(result)) {
        return result.map(n => n + unit);
      }
      return result + unit;
    }
  }

  function get_unit(values) {
    let unit = '';
    values.some(str => {
      let input = String(str).trim();
      if (!input) return '';
      let matched = input.match(/\d(\D+)$/);
      return (unit = matched ? matched[1] : '');
    });
    return unit;
  }

  function by_charcode(fn) {
    return (...args) => {
      let codes = args.map(n => String(n).charCodeAt(0));
      let result = fn.apply(null, codes);
      return Array.isArray(result)
        ? result.map(n => String.fromCharCode(n))
        : String.fromCharCode(result);
    }
  }

  /**
   * Based on the Shunting-yard algorithm.
   */

  function calc(input) {
    const expr = infix_to_postfix(input), stack = [];
    while (expr.length) {
      let top = expr.shift();
      if (/\d+/.test(top)) stack.push(top);
      else {
        let right = stack.pop();
        let left = stack.pop();
        stack.push(compute(
          top, Number(left), Number(right)
        ));
      }
    }
    return stack[0];
  }

  const operator = {
    '*': 3, '/': 3, '%': 3,
    '+': 2, '-': 2,
    '(': 1, ')': 1
  };

  function get_tokens(input) {
    let expr = String(input);
    let tokens = [], num = '';

    for (let i = 0; i < expr.length; ++i) {
      let c = expr[i];

      if (operator[c]) {
        if (c == '-' && expr[i - 1] == 'e') {
          num += c;
        }
        else if (!tokens.length && !num.length && /[+-]/.test(c)) {
          num += c;
        } else {
          let { type, value } = last(tokens) || {};
          if (type == 'operator'
              && !num.length
              && /[^()]/.test(c)
              && /[^()]/.test(value)) {
            num += c;
          } else {
            if (num.length) {
              tokens.push({ type: 'number', value: num });
              num = '';
            }
            tokens.push({ type: 'operator', value: c });
          }
        }
      }

      else if (/\S/.test(c)) {
        num += c;
      }
    }

    if (num.length) {
      tokens.push({ type: 'number', value: num });
    }

    return tokens;
  }

  function infix_to_postfix(input) {
    let tokens = get_tokens(input);
    const op_stack = [], expr = [];

    for (let i = 0; i < tokens.length; ++i) {
      let { type, value } = tokens[i];
      if (type == 'number') {
        expr.push(value);
      }

      else if (type == 'operator') {
        if (value == '(') {
          op_stack.push(value);
        }

        else if (value == ')') {
          while (op_stack.length && last(op_stack) != '(') {
            expr.push(op_stack.pop());
          }
          op_stack.pop();
        }

        else {
          while (op_stack.length && operator[last(op_stack)] >= operator[value]) {
            let op = op_stack.pop();
            if (!/[()]/.test(op)) expr.push(op);
          }
          op_stack.push(value);
        }
      }
    }

    while (op_stack.length) {
      expr.push(op_stack.pop());
    }

    return expr;
  }

  function compute(op, a, b) {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return a / b;
      case '%': return a % b;
    }
  }

  const store = {};

  function memo$1(prefix, fn) {
    return (...args) => {
      let key = prefix + args.join('-');
      if (store[key]) return store[key];
      return (store[key] = fn.apply(null, args));
    }
  }

  function expand(fn) {
    return (...args) => fn.apply(null, flat_map(args, n =>
      String(n).startsWith('[') ? build_range(n) : n
    ));
  }

  function Type(type, value) {
    return { type, value };
  }

  function get_tokens$1(input) {
    let expr = String(input);
    let tokens = [], stack = [];
    if (!expr.startsWith('[') || !expr.endsWith(']')) {
      return tokens;
    }

    for (let i = 1; i < expr.length - 1; ++i) {
      let c = expr[i];
      if (c == '-' && expr[i - 1] == '-') {
        continue;
      }
      if (c == '-') {
        stack.push(c);
        continue;
      }
      if (last(stack) == '-') {
        stack.pop();
        let from = stack.pop();
        tokens.push(from
          ? Type('range', [ from, c ])
          : Type('char', c)
        );
        continue;
      }
      if (stack.length) {
        tokens.push(Type('char', stack.pop()));
      }
      stack.push(c);
    }
    if (stack.length) {
      tokens.push(Type('char', stack.pop()));
    }
    return tokens;
  }

  const build_range = memo$1('build_range', (input) => {
    let tokens = get_tokens$1(input);
    return flat_map(tokens, ({ type, value }) => {
      if (type == 'char') return value;
      let [ from, to ] = value;
      let reverse = false;
      if (from > to) {
        [from, to] = [ to, from ];
        reverse = true;
      }
      let result = by_charcode(range)(from, to);
      if (reverse) result.reverse();
      return result;
    });
  });

  const { cos, sin, sqrt, pow, PI } = Math;
  const DEG = PI / 180;

  function polygon(option, fn) {
    if (typeof arguments[0] == 'function') {
      fn = option;
      option = {};
    }

    if (!fn) {
      fn = t => [ cos(t), sin(t) ];
    }

    let split = option.split || 120;
    let scale = option.scale || 1;
    let start = DEG * (option.start || 0);
    let deg = option.deg ? (option.deg * DEG) : (PI / (split / 2));
    let points = [];

    for (let i = 0; i < split; ++i) {
      let t = start + deg * i;
      let [x, y] = fn(t);
      points.push(
        ((x * 50 * scale) + 50 + '% ') +
        ((y * 50 * scale) + 50 + '%')
      );
    }

    return option.type
      ? `polygon(${ option.type }, ${ points.join(',') })`
      : `polygon(${ points.join(',') })`;
  }

  function rotate(x, y, deg) {
    let rad = DEG * deg;
    return [
      x * cos(rad) - y * sin(rad),
      y * cos(rad) + x * sin(rad)
    ];
  }

  const shapes =  {

    circle() {
      return 'circle(49%)';
    },

    triangle() {
      return polygon({ split: 3, start: -90 }, t => [
        cos(t) * 1.1,
        sin(t) * 1.1 + .2
      ]);
    },

    rhombus() {
      return polygon({ split: 4 });
    },

    pentagon() {
      return polygon({ split: 5, start: 54 });
    },

    hexgon() {
      return polygon({ split: 6, start: 30 });
    },

    hexagon() {
      return polygon({ split: 6, start: 30 });
    },

    heptagon() {
      return polygon({ split: 7, start: -90 });
    },

    octagon() {
      return polygon({ split: 8, start: 22.5 });
    },

    star() {
      return polygon({ split: 5, start: 54, deg: 144 });
    },

    diamond() {
      return 'polygon(50% 5%, 80% 50%, 50% 95%, 20% 50%)';
    },

    cross() {
      return `polygon(
      5% 35%,  35% 35%, 35% 5%,  65% 5%,
      65% 35%, 95% 35%, 95% 65%, 65% 65%,
      65% 95%, 35% 95%, 35% 65%, 5% 65%
    )`;
    },

    clover(k = 3) {
      k = clamp(k, 3, 5);
      if (k == 4) k = 2;
      return polygon({ split: 240 }, t => {
        let x = cos(k * t) * cos(t);
        let y = cos(k * t) * sin(t);
        if (k == 3) x -= .2;
        if (k == 2) {
          x /= 1.1;
          y /= 1.1;
        }
        return [x, y];
      });
    },

    hypocycloid(k = 3) {
      k = clamp(k, 3, 6);
      let m = 1 - k;
      return polygon({ scale: 1 / k  }, t => {
        let x = m * cos(t) + cos(m * (t - PI));
        let y = m * sin(t) + sin(m * (t - PI));
        if (k == 3) {
          x = x * 1.1 - .6;
          y = y * 1.1;
        }
        return [x, y];
      });
    },

    astroid() {
      return shapes.hypocycloid(4);
    },

    infinity() {
      return polygon(t => {
        let a = .7 * sqrt(2) * cos(t);
        let b = (pow(sin(t), 2) + 1);
        return [
          a / b,
          a * sin(t) / b
        ]
      });
    },

    heart() {
      return polygon(t => {
        let x = .75 * pow(sin(t), 3);
        let y =
            cos(1 * t) * (13 / 18)
          - cos(2 * t) * (5 / 18)
          - cos(3 * t) / 18
          - cos(4 * t) / 18;
        return rotate(
          x * 1.2,
          (y + .2) * 1.1,
          180
        );
      });
    },

    bean() {
      return polygon(t => {
        let [a, b] = [pow(sin(t), 3), pow(cos(t), 3)];
        return rotate(
          (a + b) * cos(t) * 1.3 - .45,
          (a + b) * sin(t) * 1.3 - .45,
          -90
        );
      });
    },

    bicorn() {
      return polygon(t => rotate(
        cos(t),
        pow(sin(t), 2) / (2 + sin(t)) - .5,
        180
      ));
    },

    pear() {
      return polygon(t => [
        sin(t),
        (1 + sin(t)) * cos(t) / 1.4
      ]);
    },

    fish() {
      return polygon(t => [
        cos(t) - pow(sin(t), 2) / sqrt(2),
        sin(2 * t) / 2
      ]);
    },

    whale() {
      return polygon({ split: 240 }, t => {
        let r = 3.4 * (pow(sin(t), 2) - .5) * cos(t);
        return rotate(
          cos(t) * r + .75,
          sin(t) * r * 1.2,
          180
        );
      });
    },

    bud(n = 3) {
      n = clamp(n, 3, 10);
      return polygon({ split: 240 }, t => [
        ((1 + .2 * cos(n * t)) * cos(t)) * .8,
        ((1 + .2 * cos(n * t)) * sin(t)) * .8
      ]);
    },

    alien(...args) {
      let [a = 1, b = 1, c = 1, d = 1, e = 1]
        = args.map(n => clamp(n, 1, 9));
      return polygon({ split: 480, type: 'evenodd' }, t => [
        (cos(t * a) + cos(t * c) + cos(t * e)) * .31,
        (sin(t * b) + sin(t * d) + sin(t)) * .31
      ]);
    }

  };

  const Expose = {

    index({ count }) {
      return _ => count;
    },

    row({ x }) {
      return _ => x;
    },

    col({ y }) {
      return _ => y;
    },

    size({ grid }) {
      return _ => grid.count;
    },

    ['size-row']({ grid }) {
      return _ => grid.x;
    },

    ['size-col']({ grid }) {
      return _ => grid.y;
    },

    n({ idx }) {
      return _ => idx || 0;
    },

    pick({ context }) {
      return expand((...args) => (
        context.last_pick = pick(args)
      ));
    },

    ['pick-n']({ idx, context, position }) {
      let counter = 'pn-counter' + position;
      return expand((...args) => {
        if (!context[counter]) context[counter] = 0;
        context[counter] += 1;
        let max = args.length;
        let pos = ((idx == undefined ? context[counter] : idx) - 1) % max;
        return context.last_pick = args[pos];
      });
    },

    ['pick-d']({ idx, context, position }) {
      let counter = 'pd-counter' + position;
      let values = 'pd-values' + position;
      return expand((...args) => {
        if (!context[counter]) context[counter] = 0;
        context[counter] += 1;
        if (!context[values]) {
          context[values] = shuffle(args);
        }
        let max = args.length;
        let pos = ((idx == undefined ? context[counter] : idx) - 1) % max;
        return context.last_pick = context[values][pos];
      });
    },

    ['last-pick']({ context }) {
      return () => context.last_pick;
    },

    multiple: lazy((n, action) => {
      if (!action || !n) return '';
      let count = clamp(n(), 0, 65536);
      return sequence(count, i => action(i + 1)).join(',');
    }),

    ['multitple-with-space']: lazy((n, action) => {
      if (!action || !n) return '';
      let count = clamp(n(), 0, 65536);
      return sequence(count, i => action(i + 1)).join(' ');
    }),

    repeat: lazy((n, action) => {
      if (!action || !n) return '';
      let count = clamp(n(), 0, 65536);
      return sequence(count, i => action(i + 1)).join('');
    }),

    rand({ context }) {
      return (...args) => {
        let transform_type = args.every(is_letter)
          ? by_charcode
          : by_unit;
        let value = transform_type(rand).apply(null, args);
        return context.last_rand = value;
      };
    },

    ['rand-int']({ context }) {
      return (...args) => {
        let transform_type = args.every(is_letter)
          ? by_charcode
          : by_unit;
        let value = parseInt(
          transform_type(rand).apply(null, args)
        );
        return context.last_rand = value;
      }
    },

    ['last-rand']({ context }) {
      return () => context.last_rand;
    },

    calc() {
      return value => calc(value);
    },

    hex() {
      return value => parseInt(value).toString(16);
    },

    svg: lazy(input => {
      if (input === undefined) return '';
      let svg = normalize_svg(input().trim());
      return create_svg_url(svg);
    }),

    ['svg-filter']: lazy(input => {
      if (input === undefined) return '';
      let id = unique_id('filter-');
      let svg = normalize_svg(input().trim())
        .replace(
          /<filter([\s>])/,
          `<filter id="${ id }"$1`
        );
      return create_svg_url(svg, id);
    }),

    var() {
      return value => `var(${ value })`;
    },

    shape() {
      return memo('shape-function', (type = '', ...args) => {
        type = type.trim();
        if (typeof shapes[type] === 'function') {
          return shapes[type](args);
        }
        return '';
      });
    }

  };

  var Func = alias_for(Expose, {
    'multi': 'multiple',
    'm':     'multiple',
    'ms':    'multiple-with-space',
    'pn':    'pick-n',
    'pd':    'pick-d',
    'r':     'rand',
    'ri':    'rand-int',
    'p':     'pick',
    'lp':    'last-pick',
    'lr':    'last-rand',
    'i':     'index',

    // legacy names
    'pick-by-turn': 'pick-n',
    'max-row': 'size-row',
    'max-col': 'size-col'
  });

  const is_seperator = c => /[,，\s]/.test(c);

  function skip_seperator(it) {
    while (!it.end()) {
      if (!is_seperator(it.curr(1))) break;
      else it.next();
    }
  }

  function parse$2(input) {
    const it = iterator(input);
    const result = [], stack = [];
    let group = '';

    while (!it.end()) {
      let c = it.curr();
      if (c == '(') {
        group += c;
        stack.push(c);
      }

      else if (c == ')') {
        group += c;
        if (stack.length) {
          stack.pop();
        }
      }

      else if (stack.length) {
        group += c;
      }

      else if (is_seperator(c)) {
        result.push(group);
        group = '';
        skip_seperator(it);
      }

      else {
        group += c;
      }

      it.next();
    }

    if (group) {
      result.push(group);
    }

    return result;
  }

  let all = [];

  function get_props(arg) {
    if (!all.length) {
      let props = new Set();
      for (let n in document.head.style) {
        if (!n.startsWith('-')) {
          props.add(n.replace(/[A-Z]/g, '-$&').toLowerCase());
        }
      }
      if (!props.has('grid-gap')) {
        props.add('grid-gap');
      }
      all = Array.from(props);
    }
    return (arg && arg.test)
      ? all.filter(n => arg.test(n))
      : all;
  }

  function build_mapping(prefix) {
    let reg = new RegExp(`\\-?${ prefix }\\-?`);
    return get_props(reg)
      .map(n => n.replace(reg, ''))
      .reduce((obj, n) => { return obj[n] = n, obj }, {});
  }

  const props_webkit_mapping = build_mapping('webkit');
  const props_moz_mapping = build_mapping('moz');

  function prefixer(prop, rule) {
    if (props_webkit_mapping[prop]) {
      return `-webkit-${ rule } ${ rule }`;
    }
    else if (props_moz_mapping[prop]) {
      return `-moz-${ rule } ${ rule }`;
    }
    return rule;
  }

  var Property = {

    ['@size'](value, { is_special_selector }) {
      let [w, h = w] = parse$2(value);
      return `
      width: ${ w };
      height: ${ h };
      ${ is_special_selector ? '' : `
        --internal-cell-width: ${ w };
        --internal-cell-height: ${ h };
      `}
    `;
    },

    ['@min-size'](value) {
      let [w, h = w] = parse$2(value);
      return `min-width: ${ w }; min-height: ${ h };`;
    },

    ['@max-size'](value) {
      let [w, h = w] = parse$2(value);
      return `max-width: ${ w }; max-height: ${ h };`;
    },

    ['@place-cell']: (() => {
      let map_left_right = {
        'center': '50%', '0': '0%',
        'left': '0%', 'right': '100%',
        'top': '50%', 'bottom': '50%'
      };
      let map_top_bottom = {
        'center': '50%', '0': '0%',
        'top': '0%', 'bottom': '100%',
        'left': '50%', 'right': '50%',
      };

      return value => {
        let [left, top = '50%'] = parse$2(value);
        left = map_left_right[left] || left;
        top = map_top_bottom[top] || top;
        const cw = 'var(--internal-cell-width, 25%)';
        const ch = 'var(--internal-cell-height, 25%)';
        return `
        position: absolute;
        left: ${ left };
        top: ${ top };
        width: ${ cw };
        height: ${ ch };
        margin-left: calc(${ cw } / -2) !important;
        margin-top: calc(${ ch } / -2) !important;
        grid-area: unset !important;
      `;
      }
    })(),

    ['@grid'](value, options) {
      let [grid, size] = value.split('/').map(s => s.trim());
      return {
        grid: parse_grid(grid),
        size: size ? this['@size'](size, options) : ''
      };
    },

    ['@shape']: memo$1('shape-property', value => {
      let [type, ...args] = parse$2(value);
      let prop = 'clip-path';
      if (!shapes[type]) return '';
      let rules = `${ prop }: ${ shapes[type].apply(null, args) };`;
      return prefixer(prop, rules) + 'overflow: hidden;';
    }),

    ['@use'](rules) {
      if (rules.length > 2) {
        return rules;
      }
    }

  };

  function build_expr(expr) {
    return n => String(expr)
      .replace(/(\d+)(n)/g, '$1*' + n)
      .replace(/n/g, n);
  }

  function nth(input, curr, max) {
    let expr = build_expr(input);
    for (let i = 0; i <= max; ++i) {
      if (calc(expr(i)) == curr) return true;
    }
  }

  const is$1 = {
    even: n => !!(n % 2),
    odd:  n => !(n % 2)
  };

  function even_or_odd(expr) {
    return /^(even|odd)$/.test(expr);
  }

  var Selector = {

    at({ x, y }) {
      return (x1, y1) => (x == x1 && y == y1);
    },

    nth({ count, grid }) {
      return (...exprs) => exprs.some(expr =>
        even_or_odd(expr)
          ? is$1[expr](count - 1)
          : nth(expr, count, grid.count)
      );
    },

    row({ x, grid }) {
      return (...exprs) => exprs.some(expr =>
        even_or_odd(expr)
          ? is$1[expr](x - 1)
          : nth(expr, x, grid.x)
      );
    },

    col({ y, grid }) {
      return (...exprs) => exprs.some(expr =>
        even_or_odd(expr)
          ? is$1[expr](y - 1)
          : nth(expr, y, grid.y)
      );
    },

    even({ count }) {
      return _ => is$1.even(count - 1);
    },

    odd({ count }) {
      return _ => is$1.odd(count - 1);
    },

    random() {
      return (ratio = .5) => {
        if (ratio >= 1 && ratio <= 0) ratio = .5;
        return Math.random() < ratio;
      }
    }

  };

  // Expose all Math functions and constants.
  const methods = Object.getOwnPropertyNames(Math);

  var MathFunc = methods.reduce((expose, n) => {
    expose[n] = () => (...args) => {
      if (typeof Math[n] === 'number') return Math[n];
      return Math[n].apply(null, args.map(calc));
    };
    return expose;
  }, {});

  function is_host_selector(s) {
    return /^\:(host|doodle)/.test(s);
  }

  function is_parent_selector(s) {
    return /^\:(container|parent)/.test(s);
  }

  function is_special_selector(s) {
    return is_host_selector(s) || is_parent_selector(s);
  }

  class Rules {

    constructor(tokens) {
      this.tokens = tokens;
      this.rules = {};
      this.props = {};
      this.keyframes = {};
      this.grid = null;
      this.coords = [];
      this.reset();
    }

    reset() {
      this.styles = {
        host: '',
        container: '',
        cells: '',
        keyframes: ''
      };
      this.coords = [];
      for (let key in this.rules) {
        if (key.startsWith('[cell]')) {
          delete this.rules[key];
        }
      }
    }

    add_rule(selector, rule) {
      let rules = this.rules[selector];
      if (!rules) {
        rules = this.rules[selector] = [];
      }

      rules.push.apply(rules, make_array(rule));
    }

    pick_func(name) {
      return Func[name] || MathFunc[name];
    }

    compose_aname(...args) {
      return args.join('-');
    }

    compose_selector(count, pseudo = '') {
      return `[cell]:nth-of-type(${ count })${ pseudo }`;
    }

    compose_argument(argument, coords, idx) {
      let result = argument.map(arg => {
        if (arg.type == 'text') {
          return arg.value;
        }
        else if (arg.type == 'func') {
          let fn = this.pick_func(arg.name.substr(1));
          if (fn) {
            coords.idx = idx;
            coords.position = arg.position;
            let args = arg.arguments.map(n => {
              return fn.lazy
                ? idx => this.compose_argument(n, coords, idx)
                : this.compose_argument(n, coords, idx);
            });
            return apply_args(fn, coords, args);
          }
        }
      });

      return (result.length >= 2)
        ? result.join('')
        : result[0];
    }

    compose_value(value, coords) {
      if (!value || !value.reduce) return '';
      return value.reduce((result, val) => {
        switch (val.type) {
          case 'text': {
            result += val.value;
            break;
          }
          case 'func': {
            let fname = val.name.substr(1);
            let fn = this.pick_func(fname);
            if (fn) {
              coords.position = val.position;
              let args = val.arguments.map(arg => {
                if (fn.lazy) {
                  return idx => this.compose_argument(arg, coords, idx);
                } else {
                  return this.compose_argument(arg, coords);
                }
              });
              result += apply_args(fn, coords, args);
            }
          }
        }
        return result;
      }, '');
    }

    compose_rule(token, _coords, selector) {
      let coords = Object.assign({}, _coords);
      let prop = token.property;
      let value_group = token.value.reduce((ret, v) => {
        let composed = this.compose_value(v, coords);
        if (composed) ret.push(composed);
        return ret;
      }, []);

      let value = value_group.join(', ');

      if (/^animation(\-name)?$/.test(prop)) {
        this.props.has_animation = true;
        if (coords.count > 1) {
          let { count } = coords;
          switch (prop) {
            case 'animation-name': {
              value = value_group
                .map(n => this.compose_aname(n, count))
                .join(', ');
              break;
            }
            case 'animation': {
              value = value_group
                .map(n => {
                  let group = (n || '').split(/\s+/);
                  group[0] = this.compose_aname(group[0], count);
                  return group.join(' ');
                })
                .join(', ');
            }
          }
        }
      }

      if (prop == 'content') {
        if (!/["']|^none$|^(var|counter|counters|attr)\(/.test(value)) {
          value = `'${ value }'`;
        }
      }

      if (prop == 'transition') {
        this.props.has_transition = true;
      }

      let rule = `${ prop }: ${ value };`;
      rule = prefixer(prop, rule);

      if (prop == 'clip-path') {
        // fix clip bug
        rule += ';overflow: hidden;';
      }

      if (prop == 'width' || prop == 'height') {
        if (!is_special_selector(selector)) {
          rule += `--internal-cell-${ prop }: ${ value };`;
        }
      }

      if (Property[prop]) {
        let transformed = Property[prop](value, {
          is_special_selector: is_special_selector(selector)
        });
        switch (prop) {
          case '@grid': {
            if (is_host_selector(selector)) {
              this.grid = transformed.grid;
              rule = transformed.size || '';
            }
            break;
          }
          case '@place-cell': {
            if (!is_host_selector(selector)) {
              rule = transformed;
            }
          }
          case '@use': {
            if (token.value.length) {
              this.compose(coords, token.value);
            }
            rule = Property[prop](token.value);
          }
          default: {
            rule = transformed;
          }
        }
      }

      return rule;
    }

    compose(coords, tokens) {
      this.coords.push(coords);
      (tokens || this.tokens).forEach((token, i) => {
        if (token.skip) return false;
        switch (token.type) {
          case 'rule':
            this.add_rule(
              this.compose_selector(coords.count),
              this.compose_rule(token, coords)
            );
            break;

          case 'pseudo': {
            if (token.selector.startsWith(':doodle')) {
              token.selector = token.selector.replace(/^\:+doodle/, ':host');
            }
            let special = is_special_selector(token.selector);
            if (special) {
              token.skip = true;
            }
            token.selector.split(',').forEach(selector => {
              let pseudo = token.styles.map(s =>
                this.compose_rule(s, coords, selector)
              );
              let composed = special
                ? selector
                : this.compose_selector(coords.count, selector);
              this.add_rule(composed, pseudo);
            });

            break;
          }

          case 'cond': {
            let fn = Selector[token.name.substr(1)];
            if (fn) {
              let args = token.arguments.map(arg => {
                return this.compose_argument(arg, coords);
              });
              let result = apply_args(fn, coords, args);
              if (result) {
                this.compose(coords, token.styles);
              }
            }
            break;
          }

          case 'keyframes': {
            if (!this.keyframes[token.name]) {
              this.keyframes[token.name] = coords => `
              ${ join(token.steps.map(step => `
                ${ step.name } {
                  ${ join(
                    step.styles.map(s => this.compose_rule(s, coords))
                  )}
                }
              `)) }
            `;
            }
          }
        }
      });
    }

    output() {
      Object.keys(this.rules).forEach((selector, i) => {
        if (is_parent_selector(selector)) {
          this.styles.container += `
          .container {
            ${ join(this.rules[selector]) }
          }
        `;
        } else {
          let target = is_host_selector(selector) ? 'host' : 'cells';
          this.styles[target] += `
          ${ selector } {
            ${ join(this.rules[selector]) }
          }
        `;
        }
      });

      let keyframes = Object.keys(this.keyframes);
      this.coords.forEach((coords, i) => {
        keyframes.forEach(name => {
          let aname = this.compose_aname(name, coords.count);
          this.styles.keyframes += `
          ${ maybe(i == 0,
            `@keyframes ${ name } {
              ${ this.keyframes[name](coords) }
            }`
          )}
          @keyframes ${ aname } {
            ${ this.keyframes[name](coords) }
          }
        `;
        });
      });

      return {
        props: this.props,
        styles: this.styles,
        grid: this.grid
      }
    }
  }

  function generator(tokens, grid_size) {
    let rules = new Rules(tokens);
    let context = {};
    rules.compose({
      x : 1, y: 1, count: 1, context: {},
      grid: { x : 1, y: 1, count: 1 }
    });
    let { grid } = rules.output();
    if (grid) grid_size = grid;
    rules.reset();

    for (let x = 1, count = 0; x <= grid_size.x; ++x) {
      for (let y = 1; y <= grid_size.y; ++y) {
        rules.compose({ x, y, count: ++count, grid: grid_size, context });
      }
    }
    return rules.output();
  }

  class Doodle extends HTMLElement {
    constructor() {
      super();
      this.doodle = this.attachShadow({ mode: 'open' });
      this.extra = {
        get_custom_property_value: this.get_custom_property_value.bind(this)
      };
    }
    connectedCallback() {
      setTimeout(() => {
        let compiled;
        let use = this.getAttribute('use') || '';
        if (use) use = `@use:${ use };`;
        if (!this.innerHTML.trim() && !use) return false;
        try {
          let parsed = parse$1(use + this.innerHTML, this.extra);
          this.grid_size = parse_grid(this.getAttribute('grid'));
          compiled = generator(parsed, this.grid_size);
          compiled.grid && (this.grid_size = compiled.grid);
          this.build_grid(compiled);
        } catch (e) {
          this.innerHTML = '';
          console.error(e && e.message || 'Error in css-doodle.');
        }
      });
    }

    get_custom_property_value(name) {
      return getComputedStyle(this).getPropertyValue(name)
        .trim()
        .replace(/^\(|\)$/g, '');
    }

    build_grid(compiled) {
      const { has_transition, has_animation } = compiled.props;
      const { keyframes, host, container, cells } = compiled.styles;

      this.doodle.innerHTML = `
      <style>
        ${ this.style_basic() }
      </style>
      <style class="style-keyframes">
        ${ keyframes }
      </style>
      <style class="style-container">
        ${ this.style_size() }
        ${ host }
        ${ container }
      </style>
      <style class="style-cells">
        ${ (has_transition || has_animation) ? '' : cells }
      </style>
      <div class="container">
        ${ this.html_cells() }
      </div>
    `;

      if (has_transition || has_animation) {
        setTimeout(() => {
          this.set_style('.style-cells', cells);
        }, 50);
      }
    }

    inherit_props(p) {
      return get_props(/grid/)
        .map(n => `${ n }: inherit;`).join('');
    }

    style_basic() {
      return `
      :host {
        display: block;
        visibility: visible;
        width: 1em;
        height: 1em;
      }
      .container, [cell]:not(:empty) {
        position: relative;
        width: 100%;
        height: 100%;
        display: grid;
        ${ this.inherit_props() }
      }
      [cell]:empty {
        position: relative;
        line-height: 1;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `;
    }

    style_size() {
      let { x, y } = this.grid_size;
      return `
      :host {
        grid-template-rows: repeat(${ x }, 1fr);
        grid-template-columns: repeat(${ y }, 1fr);
      }
    `;
    }

    html_cells() {
      let block = '<div cell></div>';
      let cells = block.repeat(this.grid_size.count);
      let depth = this.grid_size.z;

      while (depth--) {
        block = block.replace(/<div\scell><\/div>/g,
          '<div cell>' + cells + '</div>'
        );
      }
      return block.replace(/^<div\scell>|<\/div>$/g, '')
    }

    set_style(selector, styles) {
      const el = this.shadowRoot.querySelector(selector);
      el && (el.styleSheet
        ? (el.styleSheet.cssText = styles )
        : (el.innerHTML = styles));
    }

    update(styles) {
      let use = this.getAttribute('use') || '';
      if (use) use = `@use:${ use };`;

      if (!styles) styles = this.innerHTML;
      this.innerHTML = styles;

      if (!this.grid_size) {
        this.grid_size = parse_grid(this.getAttribute('grid'));
      }

      const compiled = generator(parse$1(use + styles, this.extra), this.grid_size);

      if (compiled.grid) {
        let { x, y, z } = compiled.grid;
        let { x: gx, y: gy, z: gz } = this.grid_size;
        if (gx !== x || gy !== y || gz !== z) {
          Object.assign(this.grid_size, compiled.grid);
          return this.build_grid(compiled);
        }
        Object.assign(this.grid_size, compiled.grid);
      }

      else {
        let grid = parse_grid(this.getAttribute('grid'));
        let { x, y, z } = grid;
        let { x: gx, y: gy, z: gz } = this.grid_size;
        if (gx !== x || gy !== y || gz !== z) {
          Object.assign(this.grid_size, grid);
          return this.build_grid(
            generator(parse$1(use + styles, this.extra), this.grid_size)
          );
        }
      }

      this.set_style('.style-keyframes',
        compiled.styles.keyframes
      );
      this.set_style('.style-container',
          this.style_size()
        + compiled.styles.host
        + compiled.styles.container
      );
      this.set_style('.style-cells',
        compiled.styles.cells
      );
    }

    get grid() {
      return Object.assign({}, this.grid_size);
    }

    set grid(grid) {
      this.setAttribute('grid', grid);
      this.connectedCallback();
    }

    get use() {
      return this.getAttribute('use');
    }

    set use(use) {
      this.setAttribute('use', use);
      this.connectedCallback();
    }

    static get observedAttributes() {
      return ['grid', 'use'];
    }

    attributeChangedCallback(name, old_val, new_val) {
      if (old_val == new_val) {
        return false;
      }
      if (name == 'grid' && old_val) {
        this.grid = new_val;
      }
      if (name == 'use' && old_val) {
        this.use = new_val;
      }
    }
  }

  customElements.define('css-doodle', Doodle);

}));


/***/ }),

/***/ "./node_modules/gatsby-link/index.js":
/*!*******************************************!*\
  !*** ./node_modules/gatsby-link/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.withPrefix = withPrefix;
exports.navigateTo = exports.replace = exports.push = exports.navigate = exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! @reach/router */ "@reach/router");

var _gatsby = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");

/*global __PATH_PREFIX__ */
function withPrefix(path) {
  return normalizePath("" + "/" + path);
}

function normalizePath(path) {
  return path.replace(/\/+/g, "/");
}

var NavLinkPropTypes = {
  activeClassName: _propTypes.default.string,
  activeStyle: _propTypes.default.object // Set up IntersectionObserver

};

var handleIntersection = function handleIntersection(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          io.unobserve(el);
          io.disconnect();
          cb();
        }
      }
    });
  }); // Add element to the observer

  io.observe(el);
};

var GatsbyLink =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this) || this; // Default to no support for IntersectionObserver

    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "defaultGetProps", function (_ref) {
      var isCurrent = _ref.isCurrent;

      if (isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2.default)({}, _this.props.style, _this.props.activeStyle)
        };
      }

      return null;
    });
    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    var location = props.location;
    _this.state = {
      IOSupported: IOSupported,
      location: location
    };
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // Preserve non IO functionality if no support
    if (this.props.to !== prevProps.to && !this.state.IOSupported) {
      ___loader.enqueue((0, _gatsby.parsePath)(this.props.to).pathname);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Preserve non IO functionality if no support
    if (!this.state.IOSupported) {
      ___loader.enqueue((0, _gatsby.parsePath)(this.props.to).pathname);
    }
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    this.props.innerRef && this.props.innerRef(ref);

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      handleIntersection(ref, function () {
        ___loader.enqueue((0, _gatsby.parsePath)(_this2.props.to).pathname);
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        location = _this$props.location,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $ref = _this$props.ref,
        $innerRef = _this$props.innerRef,
        state = _this$props.state,
        replace = _this$props.replace,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["to", "getProps", "onClick", "onMouseEnter", "location", "activeClassName", "activeStyle", "ref", "innerRef", "state", "replace"]);
    var prefixedTo = withPrefix(to);
    return _react.default.createElement(_router.Link, (0, _extends2.default)({
      to: prefixedTo,
      state: state,
      getProps: getProps,
      innerRef: this.handleRef,
      onMouseEnter: function onMouseEnter(e) {
        // eslint-disable-line
        _onMouseEnter && _onMouseEnter(e);

        ___loader.hovering((0, _gatsby.parsePath)(to).pathname);
      },
      onClick: function onClick(e) {
        // eslint-disable-line
        _onClick && _onClick(e);

        if (e.button === 0 && // ignore right clicks
        !_this3.props.target && // let browser handle "target=_blank"
        !e.defaultPrevented && // onClick prevented default
        !e.metaKey && // ignore clicks with modifier keys...
        !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault(); // Is this link pointing to a hash on the same page? If so,
          // just scroll there.

          var _parsePath = (0, _gatsby.parsePath)(prefixedTo),
              pathname = _parsePath.pathname,
              hash = _parsePath.hash;

          if (pathname === location.pathname || !pathname) {
            var element = hash ? document.getElementById(hash.substr(1)) : null;

            if (element !== null) {
              element.scrollIntoView();
            } else {
              // This is just a normal link to the current page so let's emulate default
              // browser behavior by scrolling now to the top of the page.
              window.scrollTo(0, 0);
            }
          } // Make sure the necessary scripts and data are
          // loaded before continuing.


          navigate(prefixedTo, {
            state: state,
            replace: replace
          });
        }

        return true;
      }
    }, rest));
  };

  return GatsbyLink;
}(_react.default.Component);

GatsbyLink.propTypes = (0, _extends2.default)({}, NavLinkPropTypes, {
  innerRef: _propTypes.default.func,
  onClick: _propTypes.default.func,
  to: _propTypes.default.string.isRequired,
  replace: _propTypes.default.bool // eslint-disable-next-line react/display-name

});

var withLocation = function withLocation(Comp) {
  return function (props) {
    return _react.default.createElement(_router.Location, null, function (_ref2) {
      var location = _ref2.location;
      return _react.default.createElement(Comp, (0, _extends2.default)({
        location: location
      }, props));
    });
  };
};

var _default = withLocation(GatsbyLink);

exports.default = _default;

var navigate = function navigate(to, options) {
  window.___navigate(to, options);
};

exports.navigate = navigate;

var push = function push(to) {
  console.warn("The \"push\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___push(to);
};

exports.push = push;

var replace = function replace(to) {
  console.warn("The \"replace\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___replace(to);
}; // TODO: Remove navigateTo for Gatsby v3


exports.replace = replace;

var navigateTo = function navigateTo(to) {
  console.warn("The \"navigateTo\" method is now deprecated and will be removed in Gatsby v3. Please use \"push\" instead.");
  return push(to);
};

exports.navigateTo = navigateTo;

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/gatsby-ssr.js":
/*!***********************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/gatsby-ssr.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _gatsby = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents;

  // If icons were generated, also add a favicon link.
  if (pluginOptions.icon) {
    setHeadComponents([_react.default.createElement("link", {
      key: "gatsby-plugin-manifest-icon-link",
      rel: "shortcut icon",
      href: (0, _gatsby.withPrefix)("/icons/icon-48x48.png")
    })]);
  }

  setHeadComponents([_react.default.createElement("link", {
    key: "gatsby-plugin-manifest-link",
    rel: "manifest",
    href: (0, _gatsby.withPrefix)("/manifest.webmanifest")
  }), _react.default.createElement("meta", {
    key: "gatsby-plugin-manifest-meta",
    name: "theme-color",
    content: pluginOptions.theme_color
  })]);
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-offline/app-shell.js":
/*!*********************************************************!*\
  !*** ./node_modules/gatsby-plugin-offline/app-shell.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var AppShell =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(AppShell, _React$Component);

  function AppShell() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = AppShell.prototype;

  _proto.render = function render() {
    return _react.default.createElement(_react.default.Fragment, null);
  };

  return AppShell;
}(_react.default.Component);

var _default = AppShell;
exports.default = _default;

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js":
/*!***************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _reactHelmet = _interopRequireDefault(__webpack_require__(/*! react-helmet */ "react-helmet"));

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents,
      setHtmlAttributes = _ref.setHtmlAttributes,
      setBodyAttributes = _ref.setBodyAttributes;

  var helmet = _reactHelmet.default.renderStatic(); // These action functions were added partway through the Gatsby 1.x cycle.


  if (setHtmlAttributes) {
    setHtmlAttributes(helmet.htmlAttributes.toComponent());
  }

  if (setBodyAttributes) {
    setBodyAttributes(helmet.bodyAttributes.toComponent());
  }

  setHeadComponents([helmet.title.toComponent(), helmet.link.toComponent(), helmet.meta.toComponent(), helmet.noscript.toComponent(), helmet.script.toComponent(), helmet.style.toComponent()]);
};

/***/ }),

/***/ "./node_modules/gatsby/package.json":
/*!******************************************!*\
  !*** ./node_modules/gatsby/package.json ***!
  \******************************************/
/*! exports provided: _args, _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _spec, _where, author, bin, bugs, dependencies, description, devDependencies, engines, files, gitHead, homepage, keywords, license, main, name, peerDependencies, repository, resolutions, scripts, types, version, yargs, default */
/***/ (function(module) {

module.exports = {"_args":[["gatsby@2.0.5","/Users/admin/MyData/projects/mix/personal"]],"_from":"gatsby@2.0.5","_id":"gatsby@2.0.5","_inBundle":false,"_integrity":"sha512-ed0+IWfm1/veUF5O+dhSe5unaUnexzkHCi6qjw/fstCEjG22T5SctgTVcF8E6NG/8ECzJ06RctkfeYBvVP/6tQ==","_location":"/gatsby","_phantomChildren":{"@babel/code-frame":"7.0.0","@babel/runtime":"7.0.0","bluebird":"3.5.2","common-tags":"1.8.0","convert-hrtime":"2.0.0","core-js":"2.5.7","envinfo":"5.10.0","execa":"0.8.0","fs-exists-cached":"1.0.0","graceful-fs":"4.1.11","hosted-git-info":"2.7.1","jsonfile":"4.0.0","lodash":"4.17.10","opentracing":"0.14.3","pretty-error":"2.1.1","resolve-cwd":"2.0.0","source-map":"0.5.7","stack-trace":"0.0.10","universalify":"0.1.2","update-notifier":"2.5.0","yargs":"11.1.0","yurnalist":"0.2.1"},"_requested":{"type":"version","registry":true,"raw":"gatsby@2.0.5","name":"gatsby","escapedName":"gatsby","rawSpec":"2.0.5","saveSpec":null,"fetchSpec":"2.0.5"},"_requiredBy":["/"],"_resolved":"https://registry.npmjs.org/gatsby/-/gatsby-2.0.5.tgz","_spec":"2.0.5","_where":"/Users/admin/MyData/projects/mix/personal","author":{"name":"Kyle Mathews","email":"mathews.kyle@gmail.com"},"bin":{"gatsby":"./dist/bin/gatsby.js"},"bugs":{"url":"https://github.com/gatsbyjs/gatsby/issues"},"dependencies":{"@babel/code-frame":"^7.0.0","@babel/core":"^7.0.0","@babel/parser":"^7.0.0","@babel/plugin-proposal-class-properties":"^7.0.0","@babel/plugin-syntax-dynamic-import":"^7.0.0","@babel/plugin-transform-runtime":"^7.0.0","@babel/polyfill":"^7.0.0","@babel/preset-env":"^7.0.0","@babel/preset-react":"^7.0.0","@babel/runtime":"^7.0.0","@babel/traverse":"^7.0.0","@reach/router":"^1.1.1","autoprefixer":"^8.6.5","babel-core":"7.0.0-bridge.0","babel-eslint":"^8.2.2","babel-loader":"8.0.0-beta.4","babel-plugin-add-module-exports":"^0.2.1","babel-plugin-dynamic-import-node":"^1.2.0","babel-plugin-macros":"^2.4.0","babel-plugin-remove-graphql-queries":"^2.0.2-rc.3","better-queue":"^3.8.6","bluebird":"^3.5.0","chalk":"^2.3.2","chokidar":"^2.0.2","common-tags":"^1.4.0","compression":"^1.7.3","convert-hrtime":"^2.0.0","copyfiles":"^1.2.0","core-js":"^2.5.0","css-loader":"^1.0.0","debug":"^3.1.0","del":"^3.0.0","detect-port":"^1.2.1","devcert-san":"^0.3.3","domready":"^1.0.8","dotenv":"^4.0.0","eslint":"^4.19.1","eslint-config-react-app":"3.0.0-next.66cc7a90","eslint-loader":"^2.0.0","eslint-plugin-flowtype":"^2.46.1","eslint-plugin-graphql":"^2.0.0","eslint-plugin-import":"^2.9.0","eslint-plugin-jsx-a11y":"^6.0.3","eslint-plugin-react":"^7.8.2","express":"^4.16.3","express-graphql":"^0.6.12","fast-levenshtein":"~2.0.4","file-loader":"^1.1.11","flat":"^4.0.0","friendly-errors-webpack-plugin":"^1.6.1","fs-extra":"^5.0.0","gatsby-cli":"^2.4.1","gatsby-link":"^2.0.0-rc.4","gatsby-plugin-page-creator":"^2.0.0","gatsby-react-router-scroll":"^2.0.0","glob":"^7.1.1","graphql":"^0.13.2","graphql-relay":"^0.5.5","graphql-skip-limit":"^2.0.0","graphql-tools":"^3.0.4","graphql-type-json":"^0.2.1","hash-mod":"^0.0.5","invariant":"^2.2.4","is-relative":"^1.0.0","is-relative-url":"^2.0.0","jest-worker":"^23.2.0","joi":"12.x.x","json-loader":"^0.5.7","json-stringify-safe":"^5.0.1","kebab-hash":"^0.1.2","lodash":"^4.17.10","md5":"^2.2.1","md5-file":"^3.1.1","mime":"^2.2.0","mini-css-extract-plugin":"^0.4.0","mitt":"^1.1.2","mkdirp":"^0.5.1","moment":"^2.21.0","name-all-modules-plugin":"^1.0.1","normalize-path":"^2.1.1","null-loader":"^0.1.1","opentracing":"^0.14.3","opn":"^5.3.0","optimize-css-assets-webpack-plugin":"^5.0.1","parse-filepath":"^1.0.1","physical-cpu-count":"^2.0.0","postcss-flexbugs-fixes":"^3.0.0","postcss-loader":"^2.1.3","raw-loader":"^0.5.1","react-dev-utils":"^4.2.1","react-error-overlay":"^3.0.0","react-hot-loader":"^4.1.0","redux":"^3.6.0","relay-compiler":"1.5.0","request":"^2.85.0","shallow-compare":"^1.2.2","sift":"^5.1.0","signal-exit":"^3.0.2","slash":"^1.0.0","socket.io":"^2.0.3","string-similarity":"^1.2.0","style-loader":"^0.21.0","terser-webpack-plugin":"^1.0.2","type-of":"^2.0.1","url-loader":"^1.0.1","uuid":"^3.1.0","v8-compile-cache":"^1.1.0","webpack":"^4.12.0","webpack-dev-middleware":"^3.0.1","webpack-dev-server":"^3.1.1","webpack-hot-middleware":"^2.21.0","webpack-merge":"^4.1.0","webpack-stats-plugin":"^0.1.5","yaml-loader":"^0.5.0"},"description":"Blazing fast modern site generator for React","devDependencies":{"@babel/cli":"^7.0.0","@babel/plugin-proposal-class-properties":"^7.0.0","@babel/plugin-transform-runtime":"^7.0.0","@babel/preset-env":"^7.0.0","@babel/preset-flow":"^7.0.0","@babel/preset-react":"^7.0.0","@babel/runtime":"^7.0.0","cross-env":"^5.1.4","lerna":"^2.9.0","nyc":"^7.0.0","rimraf":"^2.6.1"},"engines":{"node":">6.0.0"},"files":["cache-dir","dist","graphql.js","index.d.ts"],"gitHead":"208547ffd5c4c251652e09477023811ba7ed5d1c","homepage":"https://github.com/gatsbyjs/gatsby#readme","keywords":["blog","generator","jekyll","markdown","react","ssg","website"],"license":"MIT","main":"cache-dir/gatsby-browser-entry.js","name":"gatsby","peerDependencies":{"react":"^16.4.2","react-dom":"^16.4.2"},"repository":{"type":"git","url":"git+https://github.com/gatsbyjs/gatsby.git"},"resolutions":{"graphql":"^0.13.2"},"scripts":{"build":"rimraf dist && npm run build:src && npm run build:internal-plugins && npm run build:rawfiles","build:internal-plugins":"copyfiles -u 1 src/internal-plugins/**/package.json dist","build:rawfiles":"copyfiles -u 1 src/internal-plugins/**/raw_* dist","build:src":"babel src --out-dir dist --source-maps --ignore **/gatsby-cli.js,**/raw_*,**/__tests__","clean-test-bundles":"find test/ -type f -name bundle.js* -exec rm -rf {} +","prepare":"cross-env NODE_ENV=production npm run build","test-coverage":"nyc --reporter=lcov --reporter=text npm test","watch":"rimraf dist && mkdir dist && npm run build:internal-plugins && npm run build:rawfiles && npm run build:src -- --watch"},"types":"index.d.ts","version":"2.0.5","yargs":{"boolean-negation":false}};

/***/ }),

/***/ "./node_modules/prop-types/factoryWithThrowingShims.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ "./node_modules/prop-types/factoryWithThrowingShims.js")();
}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./public/static/d/2994927498.json":
/*!*****************************************!*\
  !*** ./public/static/d/2994927498.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"site":{"siteMetadata":{"title":"Haroon Abbasi Personal Site"}}}};

/***/ }),

/***/ "./src/assets/scss/main.scss":
/*!***********************************!*\
  !*** ./src/assets/scss/main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/common/doodle.js":
/*!******************************!*\
  !*** ./src/common/doodle.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var css_doodle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-doodle */ "./node_modules/css-doodle/css-doodle.js");
/* harmony import */ var css_doodle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(css_doodle__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (({
  rule = ""
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("css-doodle", null, rule));

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



const Footer = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
  id: "footer",
  style: props.timeout ? {
    display: 'none'
  } : {}
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  className: "copyright"
}, "\xA9 Built with: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://www.gatsbyjs.org/"
}, "Gatsby.js")));

Footer.propTypes = {
  timeout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



const Header = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
  id: "header",
  style: props.timeout ? {
    display: 'none'
  } : {}
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "logo"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "icon fa-diamond"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "content"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "inner"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Haroon Abbasi"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "I\u2019m Haroon Abbasi, Software Engineer and Fullstack Developer from Lahore"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "javascript:;",
  onClick: () => {
    props.onOpenArticle('intro');
  }
}, "Intro")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "javascript:;",
  onClick: () => {
    props.onOpenArticle('work');
  }
}, "Work")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "javascript:;",
  onClick: () => {
    props.onOpenArticle('about');
  }
}, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "javascript:;",
  onClick: () => {
    props.onOpenArticle('contact');
  }
}, "Contact")))));

Header.propTypes = {
  onOpenArticle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  timeout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Main.js":
/*!********************************!*\
  !*** ./src/components/Main.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_pic01_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/pic01.jpg */ "./src/images/pic01.jpg");
/* harmony import */ var _images_pic01_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_pic01_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_pic02_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/pic02.jpg */ "./src/images/pic02.jpg");
/* harmony import */ var _images_pic02_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_pic02_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_pic03_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/pic03.jpg */ "./src/images/pic03.jpg");
/* harmony import */ var _images_pic03_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_pic03_jpg__WEBPACK_IMPORTED_MODULE_4__);






class Main extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    let close = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "close",
      onClick: () => {
        this.props.onCloseArticle();
      }
    });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      ref: this.props.setWrapperRef,
      id: "main",
      style: this.props.timeout ? {
        display: 'flex'
      } : {
        display: 'none'
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
      id: "intro",
      className: `${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`,
      style: {
        display: 'none'
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "major"
    }, "Intro"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "image main"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_pic01_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "I\u2019m Haroon Abbasi, Software Engineer and Fullstack Developer from Lahore, Pakistan. I love computer programming that's why I choose it as my career. I have a very deep interest in my work. Programming is passion."), close), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
      id: "work",
      className: `${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`,
      style: {
        display: 'none'
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "major"
    }, "Work"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "image main"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_pic02_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "From Last 7 years working as Software Engineer, desktop then web. From Last 6.5 years working in web and spent year and half in Cross Platform Mobile Development as well"), close), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
      id: "about",
      className: `${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`,
      style: {
        display: 'none'
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "major"
    }, "About"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "image main"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_pic01_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "I have experience in Web Development, Mean Stack, Windows application development and now from previous From Last 6.5 years Web Application Development is my new track to drive with extreme speed for Front-End Development, drifting skills to tackle different situations, and high power mind engine to boost back-end development. I am constantly looking to further my skill set and knowledge, keeping track of modern practices, trends and technologies within the industry."), close), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
      id: "contact",
      className: `${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`,
      style: {
        display: 'none'
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "major"
    }, "Contact"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      method: "post",
      action: "https://formspree.io/haroonabbasi.ali@gmail.com"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "field half first"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "name"
    }, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      name: "name",
      id: "name"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "field half"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "email"
    }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      name: "email",
      id: "email"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "field"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "message"
    }, "Message"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
      name: "message",
      id: "message",
      rows: "4"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "actions"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "submit",
      value: "Send Message",
      className: "special"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "reset",
      value: "Reset"
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "icons"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://twitter.com/Haroonaliabbasi",
      className: "icon fa-twitter"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "label"
    }, "Twitter"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://web.facebook.com/haroon.ali.abbasi",
      className: "icon fa-facebook"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "label"
    }, "Facebook"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://www.instagram.com/haroonabbasi/",
      className: "icon fa-instagram"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "label"
    }, "Instagram"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://github.com/haroonabbasi",
      className: "icon fa-github"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "label"
    }, "GitHub")))), close));
  }

}

Main.propTypes = {
  route: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  article: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  articleTimeout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onCloseArticle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  timeout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  setWrapperRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_2994927498_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/static/d/2994927498.json */ "./public/static/d/2994927498.json");
var _public_static_d_2994927498_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/2994927498.json */ "./public/static/d/2994927498.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/scss/main.scss */ "./src/assets/scss/main.scss");
/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_5__);







const Layout = ({
  children,
  location
}) => {
  let content;

  if (location && location.pathname === '/') {
    content = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, children);
  } else {
    content = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "wrapper",
      className: "page"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, children));
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__["StaticQuery"], {
    query: "2994927498",
    render: data => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3___default.a, {
      title: data.site.siteMetadata.title,
      meta: [{
        name: 'description',
        content: 'Sample'
      }, {
        name: 'keywords',
        content: 'sample, something'
      }]
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("html", {
      lang: "en"
    })), content),
    data: _public_static_d_2994927498_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

Layout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/images/pic01.jpg":
/*!******************************!*\
  !*** ./src/images/pic01.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/pic01-83fc6fe035dfc71b707ea5b870acab99.jpg";

/***/ }),

/***/ "./src/images/pic02.jpg":
/*!******************************!*\
  !*** ./src/images/pic02.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/pic02-19b4221ead6f952378874350234b4c4e.jpg";

/***/ }),

/***/ "./src/images/pic03.jpg":
/*!******************************!*\
  !*** ./src/images/pic03.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABLAAD/4QNvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6QTYwRDg3NDg5MkFGRTYxMTk4OENDQkQ3ODNFMzUzRTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUY4OEE5MzFCMjBDMTFFNkJFOUJFN0ZBODg5MkQ4QjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUY4OEE5MzBCMjBDMTFFNkJFOUJFN0ZBODg5MkQ4QjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxODJCOTA3RTBCQjJFNjExQjY1QkUzQzhBQzNDMTU5NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBNjBEODc0ODkyQUZFNjExOTg4Q0NCRDc4M0UzNTNFNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6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"

/***/ }),

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");



const NotFoundPage = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "NOT FOUND"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You just hit a route that doesn't exist... the sadness."));

/* harmony default export */ __webpack_exports__["default"] = (NotFoundPage);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header.js");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Main */ "./src/components/Main.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _common_doodle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/doodle */ "./src/common/doodle.js");







class IndexPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading'
    };
    this.handleOpenArticle = this.handleOpenArticle.bind(this);
    this.handleCloseArticle = this.handleCloseArticle.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({
        loading: ''
      });
    }, 100);
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleOpenArticle(article) {
    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article
    });
    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      });
    }, 325);
    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout
      });
    }, 350);
  }

  handleCloseArticle() {
    this.setState({
      articleTimeout: !this.state.articleTimeout
    });
    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      });
    }, 325);
    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: ''
      });
    }, 350);
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        this.handleCloseArticle();
      }
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      location: this.props.location
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
      src: "https://cdnjs.cloudflare.com/ajax/libs/css-doodle/0.6.1/css-doodle.min.js"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_doodle__WEBPACK_IMPORTED_MODULE_5__["default"], {
      rule: `
      :doodle {
        @grid: 1x3 / 100vmax;
        position: absolute;
        top: 0; left: 0;
        z-index: 3;
      }
    
      @size: 100% 150%;
      position: absolute;
      
      background: @m(100, (
        linear-gradient(transparent, @p(
          #FFFDE1@repeat(2, @p([0-9a-f])), 
          #FB3569@repeat(2, @p([0-9a-f])) 
        ))
        @r(0%, 100%) @r(0%, 100%) /
        @r(1px) @r(23vmin)
        no-repeat
      ));
    
      will-change: transform;
      animation: f 20s linear calc(-20s / @size() * @i()) infinite;
      @keyframes f {
        from { transform: translateY(-100%) }
        to { transform: translateY(100%) }
      }`
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onOpenArticle: this.handleOpenArticle,
      timeout: this.state.timeout
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main__WEBPACK_IMPORTED_MODULE_3__["default"], {
      isArticleVisible: this.state.isArticleVisible,
      timeout: this.state.timeout,
      articleTimeout: this.state.articleTimeout,
      article: this.state.article,
      onCloseArticle: this.handleCloseArticle,
      setWrapperRef: this.setWrapperRef
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      timeout: this.state.timeout
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "bg"
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./src/pages/page-2.js":
/*!*****************************!*\
  !*** ./src/pages/page-2.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");




const SecondPage = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Hi from the second page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Welcome to page 2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  to: "/"
}, "Go back to the homepage"));

/* harmony default export */ __webpack_exports__["default"] = (SecondPage);

/***/ }),

/***/ "@reach/router":
/*!********************************!*\
  !*** external "@reach/router" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__reach_router__;

/***/ }),

/***/ "core-js/modules/es6.array.sort":
/*!*************************************************!*\
  !*** external "core-js/modules/es6.array.sort" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_sort__;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fs__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_path__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_helmet__;

/***/ })

/******/ });
});
//# sourceMappingURL=render-page.js.map