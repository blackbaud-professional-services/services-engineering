(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/services-engineering/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("constructicon/heading");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("constructicon/rich-text");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redial");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("constructicon/with-styles");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(7);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _styles = __webpack_require__(14);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CodeBlock = function CodeBlock(_ref) {
  var children = _ref.children,
      classNames = _ref.classNames,
      type = _ref.type;
  return _react2.default.createElement(
    'div',
    { className: classNames.root },
    type && _react2.default.createElement(
      'span',
      { className: classNames.type },
      type
    ),
    _react2.default.createElement(
      'pre',
      null,
      _react2.default.createElement(
        'code',
        null,
        children
      )
    )
  );
};

exports.default = (0, _withStyles2.default)(_styles2.default)(CodeBlock);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Document = __webpack_require__(15);

var _Document2 = _interopRequireDefault(_Document);

var _reactHelmet = __webpack_require__(1);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _react = __webpack_require__(0);

var _server = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (_ref) {
  var assets = _ref.assets,
      content = _ref.content,
      _ref$state = _ref.state,
      state = _ref$state === undefined ? {} : _ref$state;

  var styles = assets.filter(function (asset) {
    return asset.match(/\.css$/);
  });
  var scripts = assets.filter(function (asset) {
    return asset.match(/\.js$/);
  });
  return '<!doctype html>' + (0, _server.renderToStaticMarkup)((0, _react.createElement)(_Document2.default, {
    head: _reactHelmet2.default.rewind(),
    styles: styles,
    scripts: scripts,
    content: content,
    state: state
  }));
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(9);

var _BuildAndDeploy = __webpack_require__(21);

var _BuildAndDeploy2 = _interopRequireDefault(_BuildAndDeploy);

var _Components = __webpack_require__(22);

var _Components2 = _interopRequireDefault(_Components);

var _Container = __webpack_require__(24);

var _Container2 = _interopRequireDefault(_Container);

var _Content = __webpack_require__(25);

var _Content2 = _interopRequireDefault(_Content);

var _GettingStarted = __webpack_require__(26);

var _GettingStarted2 = _interopRequireDefault(_GettingStarted);

var _Home = __webpack_require__(28);

var _Home2 = _interopRequireDefault(_Home);

var _Integration = __webpack_require__(29);

var _Integration2 = _interopRequireDefault(_Integration);

var _Routing = __webpack_require__(30);

var _Routing2 = _interopRequireDefault(_Routing);

var _State = __webpack_require__(31);

var _State2 = _interopRequireDefault(_State);

var _Styles = __webpack_require__(32);

var _Styles2 = _interopRequireDefault(_Styles);

var _Tests = __webpack_require__(33);

var _Tests2 = _interopRequireDefault(_Tests);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { component: _Container2.default },
  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Home2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/build-and-deploy', component: _BuildAndDeploy2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/components', component: _Components2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/content', component: _Content2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/getting-started', component: _GettingStarted2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/integration', component: _Integration2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/routing', component: _Routing2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/state', component: _State2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/styles', component: _Styles2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/tests', component: _Tests2.default })
);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureStore = undefined;

var _redux = __webpack_require__(2);

var _reduxThunk = __webpack_require__(39);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = __webpack_require__(38);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @reducers

var middleware = process.env.NODE_ENV === 'production' ? [_reduxThunk2.default] : [_reduxThunk2.default, (0, _reduxLogger2.default)()];

var configureStore = exports.configureStore = function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _redux.createStore)((0, _redux.combineReducers)({
    blank: function blank() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return state;
    } // Remove this if you have your own reducers
  }), initialState, _redux.applyMiddleware.apply(undefined, middleware));
};

exports.default = configureStore({});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("boiler-room-runner");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref, _ref2) {
  var type = _ref.type;
  var colors = _ref2.colors,
      rhythm = _ref2.rhythm,
      scale = _ref2.scale;
  return {
    root: {
      position: 'relative',
      marginTop: type && rhythm(0.5),
      marginBottom: rhythm(1),
      padding: rhythm(0.5) + ' ' + rhythm(1),
      backgroundColor: colors.shade,
      fontSize: scale(-1),
      lineHeight: 1.75
    },

    type: {
      position: 'absolute',
      bottom: '100%',
      right: 0,
      padding: rhythm(0.25) + ' ' + rhythm(0.5),
      backgroundColor: colors.shade,
      fontSize: scale(-2)
    }
  };
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _cxsync = __webpack_require__(36);

var _cxsync2 = _interopRequireDefault(_cxsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderStyles = function renderStyles(styles) {
  return styles.map(function (style, index) {
    return _react2.default.createElement('link', { key: index, rel: 'stylesheet', href: style });
  });
};

var renderScripts = function renderScripts(scripts) {
  return scripts.map(function (script, index) {
    return _react2.default.createElement('script', { key: index, src: script });
  });
};

exports.default = function (_ref) {
  var head = _ref.head,
      content = _ref.content,
      _ref$state = _ref.state,
      state = _ref$state === undefined ? {} : _ref$state,
      _ref$styles = _ref.styles,
      styles = _ref$styles === undefined ? ['/main.css'] : _ref$styles,
      _ref$scripts = _ref.scripts,
      scripts = _ref$scripts === undefined ? ['/main.js'] : _ref$scripts;
  return _react2.default.createElement(
    'html',
    null,
    _react2.default.createElement(
      'head',
      null,
      _react2.default.createElement('meta', { charSet: 'utf-8' }),
      _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
      _react2.default.createElement('meta', { name: 'CnvHeaderVersion', content: 'v5.0' }),
      head.title.toComponent(),
      head.meta.toComponent(),
      renderStyles(styles),
      _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Montserrat:400,900', rel: 'stylesheet' }),
      _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _cxsync2.default.css || '' } }),
      _react2.default.createElement('script', { dangerouslySetInnerHTML: {
          __html: '\n          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\':\n          new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0],\n          j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src=\n          \'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);\n          })(window,document,\'script\',\'dataLayer\',\'GTM-PN6K34\');'
        } })
    ),
    _react2.default.createElement(
      'body',
      null,
      _react2.default.createElement('main', {
        id: 'mount',
        dangerouslySetInnerHTML: {
          __html: content
        }
      }),
      _react2.default.createElement('script', {
        id: 'initial-state',
        type: 'application/json',
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(state)
        }
      }),
      renderScripts(scripts),
      _react2.default.createElement(
        'noscript',
        null,
        _react2.default.createElement('iframe', { src: 'https://www.googletagmanager.com/ns.html?id=GTM-PN6K34',
          height: '0', width: '0', style: { display: 'none', visibility: 'hidden' } })
      )
    )
  );
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(9);

var _withStyles = __webpack_require__(7);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _styles = __webpack_require__(17);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function Menu(_ref) {
  var classNames = _ref.classNames;
  return _react2.default.createElement(
    'nav',
    { className: classNames.root },
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          {
            activeClassName: classNames.current,
            to: '/' },
          'Overview'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          {
            activeClassName: classNames.current,
            to: '/getting-started' },
          'Getting Started'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          {
            activeClassName: classNames.current,
            to: '/components' },
          'Components'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          {
            activeClassName: classNames.current,
            to: '/state' },
          'State'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          {
            activeClassName: classNames.current,
            to: '/routing' },
          'Routing'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          {
            activeClassName: classNames.current,
            to: '/styles' },
          'Styles'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          {
            activeClassName: classNames.current,
            to: '/content' },
          'Content'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          {
            activeClassName: classNames.current,
            to: '/integration' },
          'Integration'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          {
            activeClassName: classNames.current,
            to: '/tests' },
          'Tests'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          {
            activeClassName: classNames.current,
            to: '/build-and-deploy' },
          'Build and Deploy'
        )
      )
    )
  );
};

exports.default = (0, _withStyles2.default)(_styles2.default)(Menu);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props, _ref) {
  var rhythm = _ref.rhythm,
      treatments = _ref.treatments;
  return {
    root: {
      ul: {
        margin: rhythm(-1)
      },

      li: {
        margin: rhythm(1)
      }
    },

    current: _extends({}, treatments.head)
  };
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(7);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _styles = __webpack_require__(19);

var _styles2 = _interopRequireDefault(_styles);

var _Menu = __webpack_require__(16);

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = function Page(_ref) {
  var children = _ref.children,
      classNames = _ref.classNames;
  return _react2.default.createElement(
    'div',
    { className: classNames.root },
    _react2.default.createElement(
      'aside',
      { className: classNames.sidebar },
      _react2.default.createElement(_Menu2.default, null)
    ),
    _react2.default.createElement(
      'section',
      { className: classNames.content },
      children
    )
  );
};

exports.default = (0, _withStyles2.default)(_styles2.default)(Page);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props, _ref) {
  var colors = _ref.colors,
      rhythm = _ref.rhythm,
      treatments = _ref.treatments;
  return {
    root: _extends({
      display: 'flex',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      minHeight: '100vh',
      color: colors.dark
    }, treatments.body),

    sidebar: {
      flex: '0 0 ' + rhythm(10),
      padding: rhythm(2) + ' ' + rhythm(1),
      backgroundColor: colors.shade
    },

    content: {
      flex: 1,
      padding: rhythm(2),
      maxWidth: rhythm(40)
    }
  };
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var rhythm = exports.rhythm = function rhythm() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rem';
  var basis = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1.5;
  return '' + basis * value + unit;
};

var scale = exports.scale = function scale() {
  var exponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.2;
  return Math.pow(scale, exponent) + 'rem';
};

var transitions = exports.transitions = {
  easeOut: 'ease-out .25s'
};

var fonts = exports.fonts = {
  head: 'Montserrat, Arial, sans-serif',
  body: 'Montserrat, Arial, sans-serif'
};

var treatments = exports.treatments = {
  head: {
    fontFamily: fonts.head,
    fontWeight: 900
  },
  body: {
    fontFamily: fonts.body
  }
};

var colors = exports.colors = {
  primary: '#8BBF47',
  light: '#FFF',
  dark: '#444',
  shade: '#F4F4F4'
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redial = __webpack_require__(6);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(2);

var _heading = __webpack_require__(3);

var _heading2 = _interopRequireDefault(_heading);

var _reactHelmet = __webpack_require__(1);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _richText = __webpack_require__(4);

var _richText2 = _interopRequireDefault(_richText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hooks = {
  fetch: function fetch(_ref) {
    var dispatch = _ref.dispatch,
        state = _ref.state;
    return Promise.all([]);
  }
};

// import CodeBlock from '../../components/CodeBlock'


var mapState = function mapState() {
  return {};
};

var BuildAndDeploy = function BuildAndDeploy() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactHelmet2.default, { title: 'Build and Deploy | Services Engineering' }),
    _react2.default.createElement(
      _heading2.default,
      { size: 5 },
      'Build and Deploy'
    ),
    _react2.default.createElement(_richText2.default, null)
  );
};

exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapState), (0, _redial.provideHooks)(hooks))(BuildAndDeploy);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redial = __webpack_require__(6);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(2);

var _snippets = __webpack_require__(23);

var snippets = _interopRequireWildcard(_snippets);

var _CodeBlock = __webpack_require__(8);

var _CodeBlock2 = _interopRequireDefault(_CodeBlock);

var _heading = __webpack_require__(3);

var _heading2 = _interopRequireDefault(_heading);

var _reactHelmet = __webpack_require__(1);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _richText = __webpack_require__(4);

var _richText2 = _interopRequireDefault(_richText);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hooks = {
  fetch: function fetch(_ref) {
    var dispatch = _ref.dispatch,
        state = _ref.state;
    return Promise.all([]);
  }
};

var mapState = function mapState() {
  return {};
};

var Components = function Components() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactHelmet2.default, { title: 'Components | Services Engineering' }),
    _react2.default.createElement(
      _heading2.default,
      { size: 5 },
      'Components'
    ),
    _react2.default.createElement(
      _richText2.default,
      null,
      _react2.default.createElement(
        'p',
        null,
        'Components describe a discrete portion of the UI, by colocating all the requirements in a single place, including behaviour, logic, styles, images, tests etc. This allows us to compose our UI from modular, and potentially reusable, components.'
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Stateless Components'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Often referred to as functional components, as they are functions that simply take props as an argument, and returns an instance of the component, which will contain other React components, possibly representing DOM elements.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'These are the most common type of component we use.'
      ),
      _react2.default.createElement(
        _CodeBlock2.default,
        { type: 'javascript' },
        snippets.statelessComponent
      ),
      _react2.default.createElement(
        'p',
        null,
        'The above component is a function that takes a single prop (children), which we are using to ES6 destructuring to assign to a variable, and it returns a h1 with the supplied copy. We could use the above component in another component as follows.'
      ),
      _react2.default.createElement(
        _CodeBlock2.default,
        { type: 'javascript' },
        snippets.statelessComponent2
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Stateful Components'
      ),
      _react2.default.createElement(
        'p',
        null,
        'These components have their own internal state. This state should never be important to other parts of our application, and should only be used for storing simple UI state that we can afford to lose. We define these as ES6 classes that extend the React.Component base class.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'A good example of this might be if we have a toggle to show or hide a menu.'
      ),
      _react2.default.createElement(
        _CodeBlock2.default,
        { type: 'javascript' },
        snippets.statefulComponent
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Higher Order Components (HOC)'
      ),
      _react2.default.createElement(
        'p',
        null,
        'This is a pattern for re-using component logic. Put simply, a HOC is a function that takes a component as an argument and returns a new component.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'For example, we were constantly writing stateful components that had the toggle functionality show above, so we abstracted it into a HOC, which can be seen ',
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/everydayhero/constructicon/blob/master/source/components/with-toggle/index.js' },
          'here'
        ),
        '.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'As you can see, this HOC takes a component as an argument, wraps it in a stateful component, which returns the original component with a few extra props to toggle the flag and check the current toggled state. We could refactor our above Menu component to use this HOC.'
      ),
      _react2.default.createElement(
        _CodeBlock2.default,
        { type: 'javascript' },
        snippets.higherOrderComponent
      ),
      _react2.default.createElement(
        'p',
        null,
        'Many of the libraries we use provide HOCs as an easy way to interact with them e.g. Redux provides a HOC called \'connect\' which allows us to get state out of our Redux store, and pass it into our component, but more on that later.'
      )
    )
  );
};

exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapState), (0, _redial.provideHooks)(hooks))(Components);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var statelessComponent = exports.statelessComponent = "import React from 'react'\n\nconst Title = ({ children }) => <h1>{children}</h1>\n\nexport default Title";

var statelessComponent2 = exports.statelessComponent2 = "import React from 'react'\nimport Title from 'path/to/Title'\n\nconst Content = ({\n  title,\n  copy\n}) => (\n  <div>\n    <Title>{title}</Title>\n    <div>{copy}</div>\n  </div>\n)\n\nexport default Content";

var statefulComponent = exports.statefulComponent = "import React from 'react'\n\nclass Menu extends React.Component {\n  constructor () {\n    super()\n    this.toggleMenu = this.toggleMenu.bind(this)\n    this.state = {\n      toggled: false\n    }\n  }\n\n  toggleMenu () {\n    this.setState({\n      toggled: !this.state.toggled\n    })\n  }\n\n  render () {\n    return (\n      <div>\n        <button onClick={this.toggleMenu}>\n          {this.state.toggled ? 'Hide' : 'Show'}\n        </button>\n        {this.state.toggled && (\n          <nav>Menu here</nav>\n        )}\n      </div>\n    )\n  }\n}\n\nexport default Menu";

var higherOrderComponent = exports.higherOrderComponent = "import React from 'react'\nimport withToggle from 'constructicon/with-toggle'\n\nconst Menu = ({\n  onToggle,\n  toggled\n}) => (\n  <div>\n    <button onClick={onToggle}>\n      {toggled ? 'Hide' : 'Show'}\n    </button>\n    {toggled && (\n      <nav>Menu here</nav>\n    )}\n  </div>\n)\n\nexport default withToggle(Menu)";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _traits = __webpack_require__(20);

var traits = _interopRequireWildcard(_traits);

var _Page = __webpack_require__(18);

var _Page2 = _interopRequireDefault(_Page);

var _traitsProvider = __webpack_require__(35);

var _traitsProvider2 = _interopRequireDefault(_traitsProvider);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function Container(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    _traitsProvider2.default,
    { traits: traits },
    _react2.default.createElement(
      _Page2.default,
      null,
      children
    )
  );
};

exports.default = Container;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redial = __webpack_require__(6);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(2);

var _heading = __webpack_require__(3);

var _heading2 = _interopRequireDefault(_heading);

var _reactHelmet = __webpack_require__(1);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _richText = __webpack_require__(4);

var _richText2 = _interopRequireDefault(_richText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hooks = {
  fetch: function fetch(_ref) {
    var dispatch = _ref.dispatch,
        state = _ref.state;
    return Promise.all([]);
  }
};

// import CodeBlock from '../../components/CodeBlock'


var mapState = function mapState() {
  return {};
};

var Content = function Content() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactHelmet2.default, { title: 'Content | Services Engineering' }),
    _react2.default.createElement(
      _heading2.default,
      { size: 5 },
      'Content'
    ),
    _react2.default.createElement(_richText2.default, null)
  );
};

exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapState), (0, _redial.provideHooks)(hooks))(Content);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redial = __webpack_require__(6);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(2);

var _snippets = __webpack_require__(27);

var snippets = _interopRequireWildcard(_snippets);

var _CodeBlock = __webpack_require__(8);

var _CodeBlock2 = _interopRequireDefault(_CodeBlock);

var _heading = __webpack_require__(3);

var _heading2 = _interopRequireDefault(_heading);

var _reactHelmet = __webpack_require__(1);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _richText = __webpack_require__(4);

var _richText2 = _interopRequireDefault(_richText);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hooks = {
  fetch: function fetch(_ref) {
    var dispatch = _ref.dispatch,
        state = _ref.state;
    return Promise.all([]);
  }
};

var mapState = function mapState() {
  return {};
};

var GettingStarted = function GettingStarted() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactHelmet2.default, { title: 'Getting Started | Services Engineering' }),
    _react2.default.createElement(
      _heading2.default,
      { size: 5 },
      'Getting Started'
    ),
    _react2.default.createElement(
      _richText2.default,
      null,
      _react2.default.createElement(
        'h3',
        null,
        'Bootstrapping'
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/everydayhero/boilermaker' },
          'Boilermaker'
        ),
        ' is an internal tool for quickly bootstrapping new projects. On occasions, it can be easier to use a similar project as a baseline for your new project.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Boilermaker documentation can be found in the ',
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/everydayhero/boilermaker' },
          'Github repository'
        ),
        ', but installing and running Boilermaker is as simple as running the below commands and following the prompts.'
      ),
      _react2.default.createElement(
        _CodeBlock2.default,
        { type: 'shell' },
        snippets.bootstrap
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Getting Up and Running'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Our projects use ',
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/everydayhero/boiler-room-builder' },
          'Boiler Room Builder (BRB)'
        ),
        ' to handle the build configuration, making it simple to run and build isomorphic React apps. Thankfully, BRB does most of the dirty work for configuring our app\'s Webpack configs.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Boilermaker hooks up all the BRB scripts we need to start, build, lint and test our app. Starting a local dev server is as simple as installing our dependencies and starting the app.'
      ),
      _react2.default.createElement(
        _CodeBlock2.default,
        { type: 'shell' },
        snippets.start
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Coding Style'
      ),
      _react2.default.createElement(
        'p',
        null,
        'We are using Babel, which allows us to use all the latest JavaScript features (ES6) and transpiles our code to run on all supported browsers and environments.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Our code should follow ',
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/standard/standard' },
          'JS Standard Style'
        ),
        ', and our dev server will actually notify us on the fly of any linting issues.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'We also use JSX, which is a HTML-like syntax that we use a convenience to define the output of our React components.'
      )
    )
  );
};

exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapState), (0, _redial.provideHooks)(hooks))(GettingStarted);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var bootstrap = exports.bootstrap = "yarn global add brm\nbrm create";

var start = exports.start = "yarn install\nyarn start";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redial = __webpack_require__(6);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(2);

var _heading = __webpack_require__(3);

var _heading2 = _interopRequireDefault(_heading);

var _reactHelmet = __webpack_require__(1);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _richText = __webpack_require__(4);

var _richText2 = _interopRequireDefault(_richText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hooks = {
  fetch: function fetch(_ref) {
    var dispatch = _ref.dispatch,
        state = _ref.state;
    return Promise.all([]);
  }
};

var mapState = function mapState() {
  return {};
};

var Root = function Root() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactHelmet2.default, { title: 'Overview | Services Engineering' }),
    _react2.default.createElement(
      _heading2.default,
      { size: 5 },
      'Overview'
    ),
    _react2.default.createElement(
      _richText2.default,
      null,
      _react2.default.createElement(
        'p',
        null,
        'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'
      )
    )
  );
};

exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapState), (0, _redial.provideHooks)(hooks))(Root);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redial = __webpack_require__(6);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(2);

var _heading = __webpack_require__(3);

var _heading2 = _interopRequireDefault(_heading);

var _reactHelmet = __webpack_require__(1);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _richText = __webpack_require__(4);

var _richText2 = _interopRequireDefault(_richText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hooks = {
  fetch: function fetch(_ref) {
    var dispatch = _ref.dispatch,
        state = _ref.state;
    return Promise.all([]);
  }
};

// import CodeBlock from '../../components/CodeBlock'


var mapState = function mapState() {
  return {};
};

var Integration = function Integration() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactHelmet2.default, { title: 'Integration | Services Engineering' }),
    _react2.default.createElement(
      _heading2.default,
      { size: 5 },
      'Integration'
    ),
    _react2.default.createElement(_richText2.default, null)
  );
};

exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapState), (0, _redial.provideHooks)(hooks))(Integration);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redial = __webpack_require__(6);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(2);

var _heading = __webpack_require__(3);

var _heading2 = _interopRequireDefault(_heading);

var _reactHelmet = __webpack_require__(1);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _richText = __webpack_require__(4);

var _richText2 = _interopRequireDefault(_richText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hooks = {
  fetch: function fetch(_ref) {
    var dispatch = _ref.dispatch,
        state = _ref.state;
    return Promise.all([]);
  }
};

// import CodeBlock from '../../components/CodeBlock'


var mapState = function mapState() {
  return {};
};

var Routing = function Routing() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactHelmet2.default, { title: 'Routing | Services Engineering' }),
    _react2.default.createElement(
      _heading2.default,
      { size: 5 },
      'Routing'
    ),
    _react2.default.createElement(_richText2.default, null)
  );
};

exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapState), (0, _redial.provideHooks)(hooks))(Routing);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redial = __webpack_require__(6);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(2);

var _heading = __webpack_require__(3);

var _heading2 = _interopRequireDefault(_heading);

var _reactHelmet = __webpack_require__(1);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _richText = __webpack_require__(4);

var _richText2 = _interopRequireDefault(_richText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hooks = {
  fetch: function fetch(_ref) {
    var dispatch = _ref.dispatch,
        state = _ref.state;
    return Promise.all([]);
  }
};

// import CodeBlock from '../../components/CodeBlock'


var mapState = function mapState() {
  return {};
};

var State = function State() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactHelmet2.default, { title: 'State | Services Engineering' }),
    _react2.default.createElement(
      _heading2.default,
      { size: 5 },
      'State'
    ),
    _react2.default.createElement(
      _richText2.default,
      null,
      _react2.default.createElement(
        'p',
        null,
        'We use ',
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/reactjs/redux' },
          'Redux'
        ),
        ' for application state management, when our application state starts to spread and becomes harder to manage. Redux stores the state (data) of our application in a single immutable state tree. It is important to understand the concepts of how we access and manipulate this state, and to understand that Redux is a simple concept at it\'s core.'
      ),
      _react2.default.createElement(
        'h3',
        null,
        'State'
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Reducer'
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Actions / Dispatch'
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Middlewares'
      )
    )
  );
};

exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapState), (0, _redial.provideHooks)(hooks))(State);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redial = __webpack_require__(6);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(2);

var _heading = __webpack_require__(3);

var _heading2 = _interopRequireDefault(_heading);

var _reactHelmet = __webpack_require__(1);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _richText = __webpack_require__(4);

var _richText2 = _interopRequireDefault(_richText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hooks = {
  fetch: function fetch(_ref) {
    var dispatch = _ref.dispatch,
        state = _ref.state;
    return Promise.all([]);
  }
};

// import CodeBlock from '../../components/CodeBlock'


var mapState = function mapState() {
  return {};
};

var Styles = function Styles() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactHelmet2.default, { title: 'Styles | Services Engineering' }),
    _react2.default.createElement(
      _heading2.default,
      { size: 5 },
      'Styles'
    ),
    _react2.default.createElement(_richText2.default, null)
  );
};

exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapState), (0, _redial.provideHooks)(hooks))(Styles);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redial = __webpack_require__(6);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(2);

var _heading = __webpack_require__(3);

var _heading2 = _interopRequireDefault(_heading);

var _reactHelmet = __webpack_require__(1);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _richText = __webpack_require__(4);

var _richText2 = _interopRequireDefault(_richText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hooks = {
  fetch: function fetch(_ref) {
    var dispatch = _ref.dispatch,
        state = _ref.state;
    return Promise.all([]);
  }
};

// import CodeBlock from '../../components/CodeBlock'


var mapState = function mapState() {
  return {};
};

var Tests = function Tests() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactHelmet2.default, { title: 'Tests | Services Engineering' }),
    _react2.default.createElement(
      _heading2.default,
      { size: 5 },
      'Tests'
    ),
    _react2.default.createElement(_richText2.default, null)
  );
};

exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapState), (0, _redial.provideHooks)(hooks))(Tests);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderDocument = undefined;

var _renderDocument = __webpack_require__(10);

Object.defineProperty(exports, 'renderDocument', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_renderDocument).default;
  }
});

var _boilerRoomRunner = __webpack_require__(13);

var _store = __webpack_require__(12);

var _routes = __webpack_require__(11);

var _routes2 = _interopRequireDefault(_routes);

var _renderDocument2 = _interopRequireDefault(_renderDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _store.configureStore)();
var basepath = '/services-engineering/';

exports.default = function (_ref) {
  var assets = _ref.assets;

  var app = (0, _boilerRoomRunner.createServer)({
    basepath: basepath,
    routes: _routes2.default,
    store: store,
    renderDocument: _renderDocument2.default,
    assets: assets
  });

  app.staticRoutes = ['/', '/build-and-deploy', '/components', '/content', '/getting-started', '/integration', '/routing', '/state', '/styles', '/tests'];

  return app;
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("constructicon/traits-provider");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("cxsync");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })
/******/ ])));