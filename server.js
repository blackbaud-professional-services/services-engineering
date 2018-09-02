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
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(7);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _styles = __webpack_require__(14);

var _styles2 = _interopRequireDefault(_styles);

var _richText = __webpack_require__(46);

var _richText2 = _interopRequireDefault(_richText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Content = function Content(_ref) {
  var styles = _ref.styles,
      props = _objectWithoutProperties(_ref, ['styles']);

  return _react2.default.createElement(_richText2.default, _extends({
    styles: styles.root
  }, props));
};

exports.default = (0, _withStyles2.default)(_styles2.default)(Content);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("redial");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(7);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _styles = __webpack_require__(13);

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
/* 7 */
/***/ (function(module, exports) {

module.exports = require("constructicon/with-styles");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Document = __webpack_require__(15);

var _Document2 = _interopRequireDefault(_Document);

var _reactHelmet = __webpack_require__(2);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _react = __webpack_require__(0);

var _server = __webpack_require__(49);

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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(8);

var _Build = __webpack_require__(25);

var _Build2 = _interopRequireDefault(_Build);

var _Components = __webpack_require__(27);

var _Components2 = _interopRequireDefault(_Components);

var _Container = __webpack_require__(29);

var _Container2 = _interopRequireDefault(_Container);

var _Content = __webpack_require__(30);

var _Content2 = _interopRequireDefault(_Content);

var _Deploy = __webpack_require__(32);

var _Deploy2 = _interopRequireDefault(_Deploy);

var _GettingStarted = __webpack_require__(33);

var _GettingStarted2 = _interopRequireDefault(_GettingStarted);

var _Integration = __webpack_require__(35);

var _Integration2 = _interopRequireDefault(_Integration);

var _Routing = __webpack_require__(37);

var _Routing2 = _interopRequireDefault(_Routing);

var _State = __webpack_require__(39);

var _State2 = _interopRequireDefault(_State);

var _Styles = __webpack_require__(41);

var _Styles2 = _interopRequireDefault(_Styles);

var _Tests = __webpack_require__(43);

var _Tests2 = _interopRequireDefault(_Tests);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scrollBehaviour = function scrollBehaviour() {
  return false;
};

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { component: _Container2.default, scrollBehaviour: scrollBehaviour },
  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _GettingStarted2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/build', component: _Build2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/components', component: _Components2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/content', component: _Content2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/deploy', component: _Deploy2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/integration', component: _Integration2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/routing', component: _Routing2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/state', component: _State2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/styles', component: _Styles2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/tests', component: _Tests2.default })
);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureStore = undefined;

var _redux = __webpack_require__(3);

var _reduxThunk = __webpack_require__(51);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = __webpack_require__(50);

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
/* 12 */
/***/ (function(module, exports) {

module.exports = require("boiler-room-runner");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (_ref, _ref2) {
  var type = _ref.type;
  var colors = _ref2.colors,
      rhythm = _ref2.rhythm,
      scale = _ref2.scale,
      treatments = _ref2.treatments;
  return {
    root: _extends({
      position: 'relative',
      marginTop: rhythm(type ? 2.5 : 2),
      marginBottom: rhythm(2),
      padding: rhythm(0.5) + ' ' + rhythm(1),
      backgroundColor: colors.lightGrey,
      fontSize: scale(-1),
      lineHeight: 1.75
    }, treatments.code),

    type: {
      position: 'absolute',
      bottom: '100%',
      right: 0,
      padding: rhythm(0.25) + ' ' + rhythm(0.5),
      backgroundColor: colors.lightGrey,
      fontSize: scale(-2)
    }
  };
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (_ref, _ref2) {
  var maxWidth = _ref.maxWidth;
  var colors = _ref2.colors,
      rhythm = _ref2.rhythm,
      treatments = _ref2.treatments;
  return {
    root: {
      maxWidth: maxWidth && rhythm(maxWidth),

      h1: { padding: rhythm(2) + ' 0 ' + rhythm(1) },
      h2: _extends({}, treatments.body, { padding: rhythm(2) + ' 0 ' + rhythm(1) }),
      h3: _extends({}, treatments.body, { padding: rhythm(2) + ' 0 ' + rhythm(1) }),
      h4: _extends({}, treatments.body),
      h5: _extends({}, treatments.body),
      h6: _extends({}, treatments.body),

      a: {
        borderBottom: '2px solid ' + colors.dark
      },

      '.highlight': {
        display: 'inline-block',
        margin: rhythm(-0.125),
        padding: rhythm(0.125),
        backgroundColor: colors.highlight
      },

      '> :first-child': {
        paddingTop: 0
      }
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

var _cxsync = __webpack_require__(48);

var _cxsync2 = _interopRequireDefault(_cxsync);

var _favicon = __webpack_require__(45);

var _favicon2 = _interopRequireDefault(_favicon);

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
      _react2.default.createElement('link', { rel: 'icon', type: 'image/png', href: _favicon2.default }),
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

var _withStyles = __webpack_require__(7);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _styles = __webpack_require__(17);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emojis = {
  down: '🔽',
  left: '◀️',
  paperclip: '📎',
  link: '🔗',
  circle: '⚪️',
  check: '✅',
  ruler: '📐',
  swords: '⚔️',
  pretzel: '🥨',
  bat: '🏓',
  repeat: '🔁',
  computer: '🖥',
  ok: '👌',
  seeNoEvil: '🙈',
  eyes: '👀',
  cross: '❌',
  skull: '☠️',
  paintbrush: '🖌',
  palette: '🎨',
  shrug: '🤷‍♀️',
  no: '🙅‍♀️'
};

var EmojIcon = function EmojIcon(_ref) {
  var name = _ref.name,
      classNames = _ref.classNames;
  return _react2.default.createElement(
    'span',
    { className: classNames.root },
    emojis[name]
  );
};

exports.default = (0, _withStyles2.default)(_styles2.default)(EmojIcon);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return {
    root: {
      fontSize: '20px',
      position: 'relative',
      top: '0.12em',
      display: 'inline-block'
    }
  };
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(8);

var _withStyles = __webpack_require__(7);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _styles = __webpack_require__(19);

var _styles2 = _interopRequireDefault(_styles);

var _EmojIcon = __webpack_require__(16);

var _EmojIcon2 = _interopRequireDefault(_EmojIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = { top: true };
    _this.handleScroll = _this.handleScroll.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.checkIfTop();
      window.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll() {
      this.checkIfTop();
    }
  }, {
    key: 'checkIfTop',
    value: function checkIfTop() {
      var top = this.state.top;


      var y = window.scrollY;
      var isTop = y === 0;

      if (isTop && !top) {
        this.setState({ top: true });
      }

      if (!isTop && top) {
        this.setState({ top: false });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var classNames = this.props.classNames;
      var top = this.state.top;


      return _react2.default.createElement(
        'div',
        {
          style: { boxShadow: '0 15px 30px 0 rgba(0,0,0,0.0' + (top ? '0' : '3') + ')' },
          className: classNames.root
        },
        _react2.default.createElement(
          'div',
          { className: classNames.inner },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/' },
            _react2.default.createElement(_EmojIcon2.default, { name: 'computer' }),
            ' Services Engineering'
          ),
          _react2.default.createElement('div', { className: classNames.line })
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_styles2.default)(Header);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props, _ref) {
  var rhythm = _ref.rhythm;
  return {
    root: {
      transform: 'translateZ(0)',
      transition: 'all 1s ease',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'white',
      zIndex: 1
    },

    inner: {
      padding: rhythm(1),
      margin: '0 auto',
      width: '100%',
      maxWidth: rhythm(40),
      fontWeight: '500',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(8);

var _withStyles = __webpack_require__(7);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _styles = __webpack_require__(21);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function Menu(_ref) {
  var classNames = _ref.classNames;
  return _react2.default.createElement(
    'nav',
    { className: classNames.root },
    _react2.default.createElement(
      'div',
      { className: classNames.container },
      _react2.default.createElement(
        'ul',
        { className: classNames.items },
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouter.Link,
            {
              activeClassName: classNames.current,
              className: classNames.item,
              to: '/' },
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
              className: classNames.item,
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
              className: classNames.item,
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
              className: classNames.item,
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
              className: classNames.item,
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
              className: classNames.item,
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
              className: classNames.item,
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
              className: classNames.item,
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
              className: classNames.item,
              to: '/build' },
            'Build'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouter.Link,
            {
              activeClassName: classNames.current,
              className: classNames.item,
              to: '/deploy' },
            'Deploy'
          )
        )
      )
    )
  );
};

exports.default = (0, _withStyles2.default)(_styles2.default)(Menu);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props, _ref) {
  var colors = _ref.colors,
      rhythm = _ref.rhythm,
      scale = _ref.scale;
  return {
    root: {
      borderBottom: '2px solid ' + colors.lightGrey
    },

    items: {
      display: 'flex',
      flexWrap: 'wrap',
      marginLeft: rhythm(-0.5),
      marginRight: rhythm(-0.5)
    },

    item: {
      display: 'block',
      padding: rhythm(0.5),
      fontSize: scale(-0.5),
      borderBottom: '2px solid transparent'
    },

    container: {
      paddingRight: rhythm(1),
      paddingLeft: rhythm(1),
      margin: '0 auto',
      maxWidth: rhythm(40)
    },

    current: {
      borderBottom: '2px solid ' + colors.dark
    }
  };
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(7);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _styles = __webpack_require__(23);

var _styles2 = _interopRequireDefault(_styles);

var _Content = __webpack_require__(1);

var _Content2 = _interopRequireDefault(_Content);

var _Header = __webpack_require__(18);

var _Header2 = _interopRequireDefault(_Header);

var _Menu = __webpack_require__(20);

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = function Page(_ref) {
  var children = _ref.children,
      classNames = _ref.classNames;
  return _react2.default.createElement(
    'div',
    { className: classNames.root },
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(
      'div',
      { className: classNames.intro },
      _react2.default.createElement(
        _Content2.default,
        { maxWidth: 26 },
        _react2.default.createElement(
          'h1',
          null,
          'The following is a guide to how we build apps in services. We mostly build Universal JavaScript apps, and we have a collection of tools to help us.'
        )
      ),
      _react2.default.createElement(
        _Content2.default,
        { maxWidth: 18 },
        _react2.default.createElement(
          'p',
          null,
          'Universal, or Isomorphic, JavaScript describes applications where the same codebase runs both on the server and in the client.'
        )
      )
    ),
    _react2.default.createElement(_Menu2.default, null),
    _react2.default.createElement(
      'section',
      { className: classNames.content },
      _react2.default.createElement(
        'div',
        { className: classNames.contentInner },
        children
      )
    )
  );
};

exports.default = (0, _withStyles2.default)(_styles2.default)(Page);

/***/ }),
/* 23 */
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
      paddingTop: rhythm(2),
      color: colors.dark
    }, treatments.body),

    intro: {
      padding: rhythm(4) + ' ' + rhythm(1),
      margin: '0 auto',
      maxWidth: rhythm(40)
    },

    content: {
      padding: rhythm(2) + ' ' + rhythm(1),
      margin: '0 auto',
      maxWidth: rhythm(40)
    },

    contentInner: {
      maxWidth: rhythm(26)
    }
  };
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var fonts = exports.fonts = {
  head: '"helvetica neue", arial, sans-serif',
  body: '"helvetica neue", arial, sans-serif',
  code: 'monaco, Consolas, "Lucida Console", monospace'
};

var treatments = exports.treatments = {
  head: {
    fontFamily: fonts.head,
    fontWeight: 400,
    lineHeight: 1.5,
    WebkitFontSmoothing: 'antialiased'
  },
  body: {
    fontFamily: fonts.body,
    fontWeight: 500,
    lineHeight: 1.5,
    WebkitFontSmoothing: 'antialiased'
  },
  code: {
    fontFamily: fonts.code
  }
};

var colors = exports.colors = {
  primary: '#333',
  secondary: '#444',
  tertiary: '#555',
  light: '#fdfdfd',
  dark: '#282828',
  lightGrey: '#f5f5f5',
  highlight: '#eee'
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redial = __webpack_require__(5);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(3);

var _snippets = __webpack_require__(26);

var snippets = _interopRequireWildcard(_snippets);

var _CodeBlock = __webpack_require__(6);

var _CodeBlock2 = _interopRequireDefault(_CodeBlock);

var _reactHelmet = __webpack_require__(2);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _Content = __webpack_require__(1);

var _Content2 = _interopRequireDefault(_Content);

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

var Build = function Build() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactHelmet2.default, { title: 'Build | Services Engineering' }),
    _react2.default.createElement(
      _Content2.default,
      null,
      _react2.default.createElement(
        'h3',
        null,
        'Build'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The aim of the build step is to transpile our JavaScript and bundle our assets into the dist folder ready for deployment. As we are creating isomorphic JavaScript apps, the output of our build will contain the following.'
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'span',
            { className: 'highlight' },
            'server.js'
          ),
          ': this is the compiled version of our project\'s server.js'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'span',
            { className: 'highlight' },
            'main.js'
          ),
          ': this is the compiled version of our project\'s client.js'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'span',
            { className: 'highlight' },
            'main.css'
          ),
          ': any imported CSS such as our CSS reset'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Other assets such as images and fonts'
        )
      ),
      _react2.default.createElement(
        'p',
        null,
        'Note that if we run the build and ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'NODE_ENV=production'
        ),
        ', there are a couple of small differences, mainly that our main js and css files will include a hash in the filename, which is used to ensure browsers don\'t cache old versions.'
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Build Scripts'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Our build related scripts will look something like the following. The base ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'build'
        ),
        ' script is used as a baseline, whereas ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'build:staging'
        ),
        ' and ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'build:prod'
        ),
        ' are used to pass in specific environment variables.'
      ),
      _react2.default.createElement(
        _CodeBlock2.default,
        { type: 'json' },
        snippets.buildJson
      ),
      _react2.default.createElement(
        'p',
        null,
        'The ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'BASE_PATH'
        ),
        ' variable is used to set the base path that our application is served from, which we use when our app might not be served from the root e.g. when hosted on Github pages.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'So to build our app for staging, we would run:'
      ),
      _react2.default.createElement(
        _CodeBlock2.default,
        { type: 'json' },
        'yarn build:staging'
      ),
      _react2.default.createElement(
        'p',
        null,
        'So to build our app for production, we would run:'
      ),
      _react2.default.createElement(
        _CodeBlock2.default,
        { type: 'json' },
        'yarn build:prod'
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Static Routes'
      ),
      _react2.default.createElement(
        'p',
        null,
        'An important concept in our build is the concept of static routes. In our ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'source/server.js'
        ),
        ', we often specify routes in ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'app.staticRoutes'
        ),
        '. A static pre-rendered HTML file will be generated, during the build, for each of these routes.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'As opposed to other Isomorphic React apps, where a server receives requests and generates HTML at runtime, we are doing that up front during the build, which effectively lets us deploy completely static sites to S3, without having any of the usual overhead of managing a server.'
      ),
      _react2.default.createElement(
        _CodeBlock2.default,
        { type: 'javascript' },
        snippets.staticRoutes
      ),
      _react2.default.createElement(
        'p',
        null,
        'If we specified the staticRoutes as above, our build would bundle the usual assets, but also render a ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'index.html'
        ),
        ', ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'about/index.html'
        ),
        ' and ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'faqs/index.html'
        ),
        '.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'These generated HTML pages have a couple of important characteristics worth noting.'
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          'They include our ',
          _react2.default.createElement(
            'span',
            { className: 'highlight' },
            'main.js'
          ),
          ', which means our app will load and run in the browser, so subsequent route changes can be handled completely client side'
        ),
        _react2.default.createElement(
          'li',
          null,
          'The complete state of our Redux store during the build, is serialized into a script tag, which is then reloaded back into the store when it loads in the browser'
        )
      )
    )
  );
};

exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapState), (0, _redial.provideHooks)(hooks))(Build);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var buildJson = exports.buildJson = "{\n  \"scripts\": {\n    \"build\": \"brb build --config='./webpack.shared.config' --base-path=$BASE_PATH\",\n    \"build:staging\": \"BASE_PATH='/repo-name/' yarn build\",\n    \"build:prod\": \"NODE_ENV='production' yarn build\"\n  }\n}";

var staticRoutes = exports.staticRoutes = "app.staticRoutes = [\n  '/',\n  '/about',\n  '/faqs'\n]";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(8);

var _redial = __webpack_require__(5);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(3);

var _snippets = __webpack_require__(28);

var snippets = _interopRequireWildcard(_snippets);

var _CodeBlock = __webpack_require__(6);

var _CodeBlock2 = _interopRequireDefault(_CodeBlock);

var _reactHelmet = __webpack_require__(2);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _Content = __webpack_require__(1);

var _Content2 = _interopRequireDefault(_Content);

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
      _Content2.default,
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
        'h5',
        null,
        'Use Case'
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          'Wherever possible'
        )
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
        'p',
        null,
        'We can also use these when we need to hook into React component lifecycle methods, such as ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'componentDidMount'
        ),
        ' or ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'componentWillReceiveProps'
        ),
        '.'
      ),
      _react2.default.createElement(
        _CodeBlock2.default,
        { type: 'javascript' },
        snippets.lifecycleMethods
      ),
      _react2.default.createElement(
        'h5',
        null,
        'Use Case'
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          'When we need to keep simple UI state'
        ),
        _react2.default.createElement(
          'li',
          null,
          'When we need to hook into component lifecycle methods'
        )
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Connected Components'
      ),
      _react2.default.createElement(
        'p',
        null,
        'These are components that connect to your Redux store. This can allow a component to receive up-to-date data from the store, and can also prepare our action creators to be able to dispatch actions.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'These are used to connect sections of our UI to our store, and we will cover this in more detail in our ',
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/state' },
          'State'
        ),
        ' section.'
      ),
      _react2.default.createElement(
        _CodeBlock2.default,
        { type: 'javascript' },
        snippets.connectedComponent
      ),
      _react2.default.createElement(
        'h5',
        null,
        'Use Case'
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          'When we need to access data from the store'
        ),
        _react2.default.createElement(
          'li',
          null,
          'When we need to connect our action creators'
        )
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
        'If you look our connected component example, you will see that it uses ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'connect'
        ),
        ', which is actually a HOC provided by the react-redux package.'
      ),
      _react2.default.createElement(
        'h5',
        null,
        'Use Case'
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          'When we need to abstract component logic for reuse'
        )
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Constructicon'
      ),
      _react2.default.createElement(
        'p',
        null,
        'We have generated a library of re-usable components which we use extensively in our services projects, called ',
        _react2.default.createElement(
          'a',
          { href: 'https://everydayhero.github.io/constructicon/' },
          'Constructicon'
        ),
        '. The docs show each of the available components and the props they take.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'They range from simple components, like a ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'Button'
        ),
        ' or ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'Section'
        ),
        ', through to more fundraising specific ones like ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'Leaderboard'
        ),
        '.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'It is important to note these are all dumb components, that don\'t handle anything other than taking props and rendering a component. It also exports some handy utilities and higher order components.'
      ),
      _react2.default.createElement(
        _CodeBlock2.default,
        { type: 'javascript' },
        snippets.constructiconExample
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Resources'
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: 'https://reactjs.org/' },
            'React'
          ),
          ': library for building UI'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: 'https://reactjs.org/docs/react-component.html#the-component-lifecycle' },
            'Component Lifecycle'
          ),
          ': explanation of available methods'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: 'https://everydayhero.github.io/constructicon/' },
            'Constructicon'
          ),
          ': internal library of UI components'
        )
      )
    )
  );
};

exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapState), (0, _redial.provideHooks)(hooks))(Components);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var statelessComponent = exports.statelessComponent = "import React from 'react'\n\nconst Title = ({ children }) => <h1>{children}</h1>\n\nexport default Title";

var statelessComponent2 = exports.statelessComponent2 = "import React from 'react'\nimport Title from 'path/to/Title'\n\nconst Content = ({\n  title,\n  copy\n}) => (\n  <div>\n    <Title>{title}</Title>\n    <div>{copy}</div>\n  </div>\n)\n\nexport default Content";

var statefulComponent = exports.statefulComponent = "import React from 'react'\n\nclass Menu extends React.Component {\n  constructor () {\n    super()\n    this.toggleMenu = this.toggleMenu.bind(this)\n    this.state = {\n      toggled: false\n    }\n  }\n\n  toggleMenu () {\n    this.setState({\n      toggled: !this.state.toggled\n    })\n  }\n\n  render () {\n    return (\n      <div>\n        <button onClick={this.toggleMenu}>\n          {this.state.toggled ? 'Hide' : 'Show'}\n        </button>\n        {this.state.toggled && (\n          <nav>Menu here</nav>\n        )}\n      </div>\n    )\n  }\n}\n\nexport default Menu";

var lifecycleMethods = exports.lifecycleMethods = "import React from 'react'\n\nclass MyComponent extends React.Component {\n  constructor () {\n    super()\n    this.state = { foo: 'bar' }\n  }\n\n  componentDidMount () {\n    this.setState({ foo: 'baz' })\n  }\n\n  render () {\n    return (\n      <div>{this.state.foo}</div>\n    )\n  }\n}\n\nexport default MyComponent";

var connectedComponent = exports.connectedComponent = "connect(mapStateToProps, mapDispatchToProps)(Component)";

var higherOrderComponent = exports.higherOrderComponent = "import React from 'react'\nimport withToggle from 'constructicon/with-toggle'\n\nconst Menu = ({\n  onToggle,\n  toggled\n}) => (\n  <div>\n    <button onClick={onToggle}>\n      {toggled ? 'Hide' : 'Show'}\n    </button>\n    {toggled && (\n      <nav>Menu here</nav>\n    )}\n  </div>\n)\n\nexport default withToggle(Menu)";

var constructiconExample = exports.constructiconExample = "import React from 'react'\nimport Heading from 'constructicon/heading'\nimport RichText from 'constructicon/rich-text'\nimport Section from 'constructicon/section'\n\nconst MyComponent = () => (\n  <Section background='light' foreground='dark'>\n    <Heading color='primary'>My Title</Heading>\n    <RichText>\n      <p>Lorem ipsum</p>\n    </RichText>\n  </Section>\n)\n\nexport default MyComponent";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _traits = __webpack_require__(24);

var traits = _interopRequireWildcard(_traits);

var _Page = __webpack_require__(22);

var _Page2 = _interopRequireDefault(_Page);

var _traitsProvider = __webpack_require__(47);

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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redial = __webpack_require__(5);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(3);

var _snippets = __webpack_require__(31);

var snippets = _interopRequireWildcard(_snippets);

var _CodeBlock = __webpack_require__(6);

var _CodeBlock2 = _interopRequireDefault(_CodeBlock);

var _reactHelmet = __webpack_require__(2);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _Content = __webpack_require__(1);

var _Content2 = _interopRequireDefault(_Content);

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

var ContentRoute = function ContentRoute() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactHelmet2.default, { title: 'Content | Services Engineering' }),
    _react2.default.createElement(
      _Content2.default,
      null,
      _react2.default.createElement(
        'h3',
        null,
        'Prismic'
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'a',
          { href: 'https://prismic.io' },
          'Prismic'
        ),
        ' is a a hosted CMS service that allows us, and clients, to manage content for sites. Prismic has a few concepts worth understanding.'
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'span',
            { className: 'highlight' },
            'repository'
          ),
          ': each site or application lives in it\'s own repository'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'span',
            { className: 'highlight' },
            'custom types'
          ),
          ': these are our templates, from which we create documents e.g. story, page'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'span',
            { className: 'highlight' },
            'document'
          ),
          ': these are the instances of our custom types that house our actual content'
        )
      ),
      _react2.default.createElement(
        'p',
        null,
        'The steps included to setup a new project in Prismic would include:'
      ),
      _react2.default.createElement(
        'ol',
        null,
        _react2.default.createElement(
          'li',
          null,
          'Log into Prismic using the login details in 1Password'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Create a new repository, giving it a unique name and selecting the free plan'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Add our custom types using the type builder UI, or entering the JSON directly in the JSON tab'
        ),
        _react2.default.createElement(
          'li',
          null,
          'It is often a good idea to copy the JSON into your project to track it in source control'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Create document(s) based on our custom types we have set up'
        ),
        _react2.default.createElement(
          'li',
          null,
          'We can now fetch this content via the API'
        )
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Prismic Utils'
      ),
      _react2.default.createElement(
        'p',
        null,
        'We have an internal library, called ',
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/everydayhero/prismic-utils' },
          'Prismic Utils'
        ),
        ', that handles fetching and parsing documents from Prismic. We can do something like the below example to fetch a document from Prismic.'
      ),
      _react2.default.createElement(
        _CodeBlock2.default,
        { type: 'javascript' },
        snippets.fetchDocument
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Action Creators / Reducers'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Fetching document(s) and putting them in a Redux store is a very common task in services projects. Prismic Utils has an abstraction for being able to create Redux action creators and reducers for fetching Prismic documents. The below example is a common example of what you will see in many projects.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Under the hook, it is fetching document(s), and using redux-thunk to dispatch actions as it does so. And the namespace we provide allows our reducer to listen to those same actions and add the document to our store.'
      ),
      _react2.default.createElement(
        _CodeBlock2.default,
        { type: 'javascript' },
        snippets.reduxHelpers
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Deserializing Documents'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Prismic Utils provides another handy utility, which is the ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'deserializeDocument'
        ),
        ' function, which takes a Prismic doc and returns a nice object ccontaining our data. If we are using ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'createDocumentReducer'
        ),
        ', our documents are automatically parsed using this function.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'It allows us to create nicely nested objects, that make passing data around our app much simpler.'
      ),
      _react2.default.createElement(
        _CodeBlock2.default,
        { type: 'json' },
        snippets.prismicExample
      ),
      _react2.default.createElement(
        'p',
        null,
        'For example, if our Prismic schema looked something like the above, it would look something like the following in our store after it has been deserialized.'
      ),
      _react2.default.createElement(
        _CodeBlock2.default,
        { type: 'json' },
        snippets.storeExample
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Resources'
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: 'https://prismic.io' },
            'Prismic'
          ),
          ': hosted CMS platform'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: 'https://github.com/everydayhero/prismic-utils' },
            'Prismic Utils'
          ),
          ': internal tool for fetching and parsing Prismic content'
        )
      )
    )
  );
};

exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapState), (0, _redial.provideHooks)(hooks))(ContentRoute);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var fetchDocument = exports.fetchDocument = "import { fetchDocument } from 'prismic-utils'\n\nconst fetchHomeContent = fetchDocument({\n  repository: 'prismic-repo-id',\n  type: 'home'\n})";

var reduxHelpers = exports.reduxHelpers = "import { createDocumentAction, createDocumentReducer } from 'prismic-utils'\n\nconst NAMESPACE = 'app/home'\n\nexport const fetchHomeContent = () => (\n  createDocumentAction(NAMESPACE, {\n    repository: 'prismic-repo-id',\n    type: 'home'\n  })\n)\n\nexport default createDocumentReducer(NAMESPACE)";

var prismicExample = exports.prismicExample = "{\n  'hero-title': {\n    type: 'Text'\n  },\n  'hero-image': {\n    type: 'Image'\n  },\n  'intro-title': {\n    type: 'Text'\n  },\n  'intro-copy': {\n    type: 'StructuredText'\n  }\n}";

var storeExample = exports.storeExample = "{\n  hero: {\n    title: 'Our Hero Title',\n    image: {\n      url: 'https://path.to.image'\n    }\n  },\n  intro: {\n    title: 'Our Intro Title',\n    copy: [\n      { type: 'p', content: 'Lorem ipsum' },\n      { type: 'p', content: 'Lorem ipsum' }\n    ]\n  }\n}";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redial = __webpack_require__(5);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(3);

var _CodeBlock = __webpack_require__(6);

var _CodeBlock2 = _interopRequireDefault(_CodeBlock);

var _reactHelmet = __webpack_require__(2);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _Content = __webpack_require__(1);

var _Content2 = _interopRequireDefault(_Content);

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

var Deploy = function Deploy() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactHelmet2.default, { title: 'Build | Services Engineering' }),
    _react2.default.createElement(
      _Content2.default,
      null,
      _react2.default.createElement(
        'h3',
        null,
        'Targets'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Boiler Room Builder has a deploy script that works with 3 different targets.'
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'span',
            { className: 'highlight' },
            'gh-pages'
          ),
          ': deploys a site to Github Pages'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'span',
            { className: 'highlight' },
            's3'
          ),
          ': AWS S3'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'span',
            { className: 'highlight' },
            'lamdba'
          ),
          ': AWS Lambda'
        )
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Github Pages'
      ),
      _react2.default.createElement(
        'p',
        null,
        'We often use Github pages for staging. We would first run a staging build of our app, and then use a BRB script to deploy that staging build to Github Pages.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'It basically works by committing your statically built site to a ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'gh-pages'
        ),
        ' branch in your repository, which Github then hosts for us at a url like ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'https://everydayhero.github.io/repo-name'
        )
      ),
      _react2.default.createElement(
        'p',
        null,
        'You might remember we spoke about our ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'BASE_PATH'
        ),
        ' during the build step, and this is the example of when we would want to set that, to ensure our app works correctly being served from a subdirectory.'
      ),
      _react2.default.createElement(
        _CodeBlock2.default,
        { type: 'shell' },
        'brb deploy --target=gh-pages'
      ),
      _react2.default.createElement(
        'h3',
        null,
        'S3'
      ),
      _react2.default.createElement(
        'p',
        null,
        'For hosting our static sites in production, we use S3. We would first run a production build of our app, and then use a BRB script to deploys the files to S3.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Deploying to S3 requires AWS credentials information to be available as environment variables. This can be ahieved in many ways, with AWS Vault being the most common.'
      ),
      _react2.default.createElement(
        _CodeBlock2.default,
        { type: 'shell' },
        'brb deploy --target=s3 --bucket=bucket-name --prefix=domain'
      ),
      _react2.default.createElement(
        'h5',
        null,
        'blackbaud-sites.com'
      ),
      _react2.default.createElement(
        'p',
        null,
        'For small sites not requiring a custom domain, we can deploy these into a folder within ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'blackbaud-sites'
        ),
        ' bucket. If the folder name matches a subdomain of blackbaud-sites.com, the site will automatically work with SSL enabled e.g. my-site.blackbaud-sites.com.'
      ),
      _react2.default.createElement(
        'h5',
        null,
        'Custom Domains'
      ),
      _react2.default.createElement(
        'p',
        null,
        'For custom domains, we would deploy to the ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'blackbaud-professional-services-production'
        ),
        ' bucket, in a folder that shares a name with the domain of the site.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The next steps are requesting an SSL certificate via Certificate Manager for the domain, and then configuring a Cloudfront distribution which points to our folder.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'We can then pass on the details to the client to do the necessary configuration i.e. create an alias for their domain pointing to the Cloudfront url.'
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Lambda'
      ),
      _react2.default.createElement(
        'p',
        null,
        'For sites that require dynamic routes, we can deploy them to Lambda. This method creates a Lambda, uploads it to S3, and creates a Cloudformation script that configures API Gateway and sets up our lambda.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Any requests to the site will be forwarded to the Lambda, which is running our app, and will return dynamically generated HTML, as opposed to the statically generated HTML we were using in the earlier methods.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Configuring a domain name for these sites requires similar steps to above i.e. an SSL certificate and Cloudfront distribution.'
      ),
      _react2.default.createElement(
        _CodeBlock2.default,
        { type: 'shell' },
        'brb deploy --target=lambda --bucket=bucket-name --fn-name=myAppNameProd'
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Automating via Buildkite'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Our app is setup to build and deploy from the command line, but usually, we want to automate this using a CI tool, in our case Buildkite. We do this for a couple of reasons:'
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          'Deploying manually is prone to mistakes'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Eliminates the need for us to have active AWS credentials on our machines'
        )
      ),
      _react2.default.createElement(
        'p',
        null,
        'When Boilermaker generated our app, it would have included the necessary files that will be used by Buildkite to make up our pipeline.'
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'span',
            { className: 'highlight' },
            '.buildkite/pipeline.yml'
          ),
          ': these are the steps of our pipeline'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'span',
            { className: 'highlight' },
            'bin/test and bin/deploy'
          ),
          ': these are the actual scripts that the pipeline will execute'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'span',
            { className: 'highlight' },
            'docker-compose.yml'
          ),
          ': details of the docker container our app will run in'
        )
      ),
      _react2.default.createElement(
        'p',
        null,
        'To create the pipeline in Buildkite, we need to do a few steps.'
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          'Login using the credentials in 1Password'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Create a new pipeline specifying the name and Github repo of our project'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Add the necessary environment variables, which include the ',
          _react2.default.createElement(
            'span',
            { className: 'highlight' },
            'APP_NAME'
          ),
          ' and the necessary AWS credentials.'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Tell Buildkite to look at our pipeline config in our codebase, by adding ',
          _react2.default.createElement(
            'span',
            { className: 'highlight' },
            'buildkite-agent pipeline upload'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          'Configure our Github webhooks following the necessary instructions'
        )
      ),
      _react2.default.createElement(
        'p',
        null,
        'And that\'s it, when our repo is updated, the pipeline will run the tests, and deploy to staging and production. Although Boilermaker gives us a good baseline, we can configure our pipeline as needed.'
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Prismic Webhooks'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The last thing we may wish to do is configure Prismic to trigger a Buildkite build to re-deploy the site when changes are made in the CMS.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'This uses by adding a Prismic webhook that will notify ',
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/everydayhero/soundwave' },
          'Soundwave'
        ),
        ', which is an small internal app that listens to webhooks and triggers builds.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Details of how to configure the webhook can be found in the Soundwave readme.'
      )
    )
  );
};

exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapState), (0, _redial.provideHooks)(hooks))(Deploy);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redial = __webpack_require__(5);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(3);

var _snippets = __webpack_require__(34);

var snippets = _interopRequireWildcard(_snippets);

var _CodeBlock = __webpack_require__(6);

var _CodeBlock2 = _interopRequireDefault(_CodeBlock);

var _reactHelmet = __webpack_require__(2);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _Content = __webpack_require__(1);

var _Content2 = _interopRequireDefault(_Content);

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
      _Content2.default,
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
        ' is an internal tool for quickly bootstrapping new projects. Installing and running Boilermaker to setup all your boilerplate is as simple as running the below commands and following the prompts.'
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
        'p',
        null,
        'The ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'client.js'
        ),
        ' and ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'server.js'
        ),
        ' are the entry points for our app, and you will see this is where we setup our app using ',
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/everydayhero/boiler-room-runner' },
          'Boiler Room Runner'
        ),
        '.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Boiler Room Runner provides ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'createServer'
        ),
        ' and ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'createClient'
        ),
        ' functions, which take things like our routes and store among other things, and configures the app, using common libraries like React Router (routing), Redux (state management) and Redial (data fetching).'
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
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Resources'
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: 'https://github.com/everydayhero/boilermaker' },
            'Boilermaker'
          ),
          ': internal tool to bootstrap services projects'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: 'https://github.com/everydayhero/boiler-room-builder' },
            'Boiler Room Builder'
          ),
          ': internal tool for handling building, serving and deploying'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: 'https://github.com/everydayhero/boiler-room-runner' },
            'Boiler Room Runner'
          ),
          ': internal tool for setting up our app e.g. React, Redux, React-Router'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: 'https://yarnpkg.com/en/' },
            'Yarn'
          ),
          ': dependency management'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: 'https://babeljs.io/' },
            'Babel'
          ),
          ': JavaScript transpiler'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: 'https://github.com/standard/standard' },
            'Standard'
          ),
          ': JavaScript style guide and linter '
        )
      )
    )
  );
};

exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapState), (0, _redial.provideHooks)(hooks))(GettingStarted);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var bootstrap = exports.bootstrap = "yarn global add brm\nbrm create";

var start = exports.start = "yarn install\nyarn start";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redial = __webpack_require__(5);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(3);

var _snippets = __webpack_require__(36);

var snippets = _interopRequireWildcard(_snippets);

var _CodeBlock = __webpack_require__(6);

var _CodeBlock2 = _interopRequireDefault(_CodeBlock);

var _reactHelmet = __webpack_require__(2);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _Content = __webpack_require__(1);

var _Content2 = _interopRequireDefault(_Content);

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

var Integration = function Integration() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactHelmet2.default, { title: 'Integration | Services Engineering' }),
    _react2.default.createElement(
      _Content2.default,
      null,
      _react2.default.createElement(
        'p',
        null,
        'Our apps will almost always involve some sort of integration with either the Everydayhero or JustGiving platforms, which can range from a simple link to a registration form, to fetching and displaying leaderboard data, to custom registration flows that leveraging the relevant API.'
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Supporticon'
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/everydayhero/supporticon' },
          'Supporticon'
        ),
        ' is our library for handling these integrations. It started out as a library to standardise some calls to the EDH API, but now aims to standardise the EDH and JG APIs where possible.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'For example, after telling it which platform you are using, calling a function like ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'fetchLeaderboard'
        ),
        ', will make the call to the relevant API, and return the leaders in a standard format, regardless of platform.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Similar to Prismic content, fetching data from the API and storing in our Redux store is a common task, so supporticon has some helpers for that.'
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Components'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Supporticon also contains a number of data-driven ',
        _react2.default.createElement(
          'a',
          { href: 'https://everydayhero.github.io/supporticon/components/' },
          'components'
        ),
        ', composed of Constructicon components, that can be easily dropped into projects, as shown below.'
      ),
      _react2.default.createElement(
        _CodeBlock2.default,
        { type: 'javascript' },
        snippets.supporticon
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Resources'
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: 'https://github.com/everydayhero/supporticon' },
            'Supporticon'
          ),
          ': internal SDK for our APIs'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: 'https://everydayhero.github.io/supporticon/components/' },
            'Supporticon Components'
          ),
          ': library of data-driven funcraising components'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: 'http://developer.everydayhero.com/' },
            'Everydayhero API Documentation'
          ),
          ': details of the EDH API'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: 'http://api.justgiving.com/docs' },
            'JustGiving API Documentation'
          ),
          ': details of the JG API'
        )
      )
    )
  );
};

exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapState), (0, _redial.provideHooks)(hooks))(Integration);

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var supporticon = exports.supporticon = "<Leaderboard\n  campaign='au-123'\n  type='team'\n/>\n\n<PageSearch\n  campaign='au-123'\n/>\n";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redial = __webpack_require__(5);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(3);

var _snippets = __webpack_require__(38);

var snippets = _interopRequireWildcard(_snippets);

var _CodeBlock = __webpack_require__(6);

var _CodeBlock2 = _interopRequireDefault(_CodeBlock);

var _reactHelmet = __webpack_require__(2);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _Content = __webpack_require__(1);

var _Content2 = _interopRequireDefault(_Content);

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

var Routing = function Routing() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactHelmet2.default, { title: 'Routing | Services Engineering' }),
    _react2.default.createElement(
      _Content2.default,
      null,
      _react2.default.createElement(
        'p',
        null,
        'We use React Router for routing within our application. React Router allows us to define our routes in JSX syntax, providing a relatively simple API.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'React Router works nicely on the server also, which allows us to make use of server side rendering in our isomorphic apps.'
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Configuring Routes'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The below example is a typical configuration for our routes, where we specify which component to render for a given route. This route config is passed into Boiler Room Runner in our ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'client.js'
        ),
        ' and ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'server.js'
        ),
        '.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The wrapping route allows us to define a site wide header and footer in a SiteContainer component. Whereas the ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'slug'
        ),
        ' param allows us to have dynamic routes basic on URL params.'
      ),
      _react2.default.createElement(
        _CodeBlock2.default,
        { type: 'javascript' },
        snippets.basicRoutes
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Route Components'
      ),
      _react2.default.createElement(
        'p',
        null,
        'In those top level components that are being specified for each of the routes, we will usually do things like fire off requests to fetch and provide the relevent data for that component.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'So a typical route level component might look something like this. We are using redial\'s ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'provideHooks'
        ),
        ' to fetch our home content when this component is used, and we are then using react-redux\'s ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'connect'
        ),
        ' to pass that content into our component.'
      ),
      _react2.default.createElement(
        _CodeBlock2.default,
        { type: 'javascript' },
        snippets.routeComponent
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Routing Around the App'
      ),
      _react2.default.createElement(
        'p',
        null,
        'We can use the ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'Link'
        ),
        ' component to then move users around the app, in a similar way to how you would expect a traditional a tag to work, but in our case the user will be transitioning client side only i.e. not requesting the page from the server.'
      ),
      _react2.default.createElement(
        _CodeBlock2.default,
        { type: 'javascript' },
        snippets.linkExample
      ),
      _react2.default.createElement(
        'h3',
        null,
        'withRouter'
      ),
      _react2.default.createElement(
        'p',
        null,
        'React Router also provides a ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'withRouter'
        ),
        ' higher order component, which we can use to pass in routing details and functionality to a component.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'We could use this to programatically move the user to another part of the app or fetch a particular resource based on a URL param.'
      ),
      _react2.default.createElement(
        _CodeBlock2.default,
        { type: 'javascript' },
        snippets.withRouterExample
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Resources'
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: 'https://github.com/ReactTraining/react-router/tree/v3/docs' },
            'React Router'
          ),
          ': routing for React apps (we are currently locked on v3)'
        )
      )
    )
  );
};

exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapState), (0, _redial.provideHooks)(hooks))(Routing);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var basicRoutes = exports.basicRoutes = "import React from 'react'\nimport { Route, IndexRoute } from 'react-router'\n\nimport SiteContainer from 'path/to/component'\nimport Home from 'path/to/component'\nimport About from 'path/to/component'\nimport FAQs from 'path/to/component'\nimport Story from 'path/to/component'\n\nexport default (\n  <Route path='/' component={SiteContainer}>\n    <IndexRoute component={Home} />\n    <Route path='about' component={About} />\n    <Route path='faqs' component={FAQs} />\n    <Route path='story/:slug' component={Story} />\n  </Route>\n)";

var routeComponent = exports.routeComponent = "import { provideHooks } from 'redial'\nimport { connect } from 'react-redux'\nimport { compose } from 'redux'\nimport { fetchHomeContent } from 'path/to/store'\n\nimport HomeLayout from 'path/to/components'\n\nconst hooks = {\n  fetch: ({ dispatch }) => dispatch(fetchHomeContent())\n}\n\nconst mapState = ({ home }) => ({ home })\n\nexport default compose(\n  connect(mapState),\n  provideHooks(hooks)\n)(HomeLayout)\n";

var linkExample = exports.linkExample = "import React from 'react'\nimport { Link } from 'react-router'\n\nconst Menu = () => (\n  <ul>\n    <li><Link to='/'>Home</Link></li>\n    <li><Link to='/about'>About Us</Link></li>\n    <li><Link to='/faqs'>FAQs</Link></li>\n  </ul>\n)\n\nexport default Menu";

var withRouterExample = exports.withRouterExample = "import React from 'react'\nimport { withRouter } from 'react-router'\n\nclass MyProtectedRoute extends Component {\n  componentWillMount () {\n    if (!isAuthorised()) {\n      router.push('/')\n    }\n  }\n\n  render () {\n    return <div>Protected</div>\n  }\n}\n\nexport default withRouter(MyProtectedRoute)";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redial = __webpack_require__(5);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(3);

var _snippets = __webpack_require__(40);

var snippets = _interopRequireWildcard(_snippets);

var _CodeBlock = __webpack_require__(6);

var _CodeBlock2 = _interopRequireDefault(_CodeBlock);

var _reactHelmet = __webpack_require__(2);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _Content = __webpack_require__(1);

var _Content2 = _interopRequireDefault(_Content);

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

var State = function State() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactHelmet2.default, { title: 'State | Services Engineering' }),
    _react2.default.createElement(
      _Content2.default,
      null,
      _react2.default.createElement(
        'h3',
        null,
        'Redux'
      ),
      _react2.default.createElement(
        'p',
        null,
        'We use ',
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/reactjs/redux' },
          'Redux'
        ),
        ' for application state management, when our application state starts to spread and becomes harder to manage, as opposed to just storing app state in stateful components. Redux manages the state (data) of our application in a single immutable source. It is important to understand the concepts of how we access and manipulate this state, and to understand that Redux is a simple concept at it\'s core.'
      ),
      _react2.default.createElement(
        'h3',
        null,
        'State'
      ),
      _react2.default.createElement(
        'p',
        null,
        'This refers to the current state of your application, which is represented in an immutable object.'
      ),
      _react2.default.createElement(
        _CodeBlock2.default,
        { type: 'javascript' },
        snippets.state
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Actions'
      ),
      _react2.default.createElement(
        'p',
        null,
        'To make changes to the state, you need to dispatch an action, which is a plain object that describes the change. An action contains a ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'type'
        ),
        ', which describes the type of action, and usually a ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'payload'
        ),
        ', which provide extra information about the action.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Actions are generally dispatched via action creators, which are simply functions that return these actions.'
      ),
      _react2.default.createElement(
        _CodeBlock2.default,
        { type: 'javascript' },
        snippets.action
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Reducers'
      ),
      _react2.default.createElement(
        'p',
        null,
        'A reducer is a function that can modify our state by listening to actions that have been dispatched, and returns the new state of the app.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'A reducer function takes two arguments every time an action is dispatched, the current state of the application, and the action that was dispatched. A reducer will then determine if it needs to make a change to the state, and either a) return the current state if no change is required or b) return the updated state.'
      ),
      _react2.default.createElement(
        _CodeBlock2.default,
        { type: 'javascript' },
        snippets.reducer
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Middleware'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Redux middleware allows you to extend this flow, by hooking into actions before they are passed through the reducer.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'A middleware we commonly use is ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'redux-thunk'
        ),
        ', which allows us to handle asynchronous operations. Usually an action is a plain object, but if your action is a function, redux-thunk will call that action and provide ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'dispatch'
        ),
        ' as an argument, meaning you can dispatch multiple actions in a single action creator.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The example below is an asynchronous example of our earlier addUser example, in this case it will fire an action to indicate it will make the request, and then either a success or failure action depending on whether the request was successful.'
      ),
      _react2.default.createElement(
        _CodeBlock2.default,
        { type: 'javascript' },
        snippets.thunk
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Connecting Components'
      ),
      _react2.default.createElement(
        'p',
        null,
        'We mentioned in the Components section, that we can create connected components, which are able to interact with our Redux store. This is achieved using the \'connect\' higher order component from the \'react-redux\' package.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The ',
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options' },
          'connect'
        ),
        ' docs will explain in full, but basically it takes two arguments we are interested in, typically named \'mapStateToProps\' and \'mapDispatchToProps\'.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'mapStateToProps is a function that will pass you the store as the first argument, and return an object of the props that will be passed into your component.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'mapDispatchToProps can take an object of action creators that will be prepared to be dispatched, and also passed in as props to your component.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The below component will list all of the users in our store, and provides a button that will dispatch our addUser action creator.'
      ),
      _react2.default.createElement(
        _CodeBlock2.default,
        { type: 'javascript' },
        snippets.connect
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Resources'
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: 'https://redux.js.org/docs/introduction/CoreConcepts.html' },
            'Redux'
          ),
          ': state management library'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: 'https://github.com/gaearon/redux-thunk' },
            'Redux Thunk'
          ),
          ': middleware for dispatching asynchronous actions'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: 'https://github.com/reactjs/react-redux/blob/master/docs/api.md' },
            'React Redux'
          ),
          ': connects our store to our React components'
        )
      )
    )
  );
};

exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapState), (0, _redial.provideHooks)(hooks))(State);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var state = exports.state = "{\n  users: [\n    { name: 'John' },\n    { name: 'Jane' },\n    { name: 'Janet' }\n  ]\n}";

var action = exports.action = "const addUser = (name) => ({\n  type: 'ADD_USER',\n  payload: { name }\n})";

var reducer = exports.reducer = "const reducer = (state, action) => {\n  const { type, payload } = action\n\n  switch (type) {\n    case 'ADD_USER':\n      return {\n        users: [\n          ...state.users,\n          { name: payload.name }\n        ]\n      }\n    default:\n      return state\n  }\n}";

var thunk = exports.thunk = "const addUser = (name) => (dispatch) => {\n  dispatch({ type: 'ADDING_USER '})\n\n  axios.post('https://example.com/api/users', { name })\n    .then((response) => {\n      dispatch({\n        type: 'ADD_USER',\n        payload: 'name'\n      })\n    })\n    .catch((err) => {\n      dispatch({ type: 'ADD_USER_FAILED' })\n      return Promise.reject(err)\n    })\n}";

var connect = exports.connect = "import React from 'react'\nimport { connect } from 'react-redux'\nimport { addUser } from 'path/to/our/store'\n\nconst Users = ({\n  addUser,\n  users = []\n}) => (\n  <div>\n    <ul>\n      {users.map((user) => <li>{user}</li>)}\n    </ul>\n    <button onClick={() => addUser('Joe')}>Add Joe</button>\n  </div>\n)\n\nconst mapStateToProps = (state) => ({ users: state.users })\nconst mapDispatchToProps = { addUser }\n\nexport default connect(mapStateToProps, mapDispatchToProps)(Users)";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redial = __webpack_require__(5);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(3);

var _snippets = __webpack_require__(42);

var snippets = _interopRequireWildcard(_snippets);

var _CodeBlock = __webpack_require__(6);

var _CodeBlock2 = _interopRequireDefault(_CodeBlock);

var _reactHelmet = __webpack_require__(2);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _Content = __webpack_require__(1);

var _Content2 = _interopRequireDefault(_Content);

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

var Styles = function Styles() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactHelmet2.default, { title: 'Styles | Services Engineering' }),
    _react2.default.createElement(
      _Content2.default,
      null,
      _react2.default.createElement(
        'h3',
        null,
        'Reset'
      ),
      _react2.default.createElement(
        'p',
        null,
        'It is always good practice to apply a reset styles to allow us to keep most of our styling in the relevant components. We are currently using ',
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/lukebrooker/minimal.css' },
          'minimal.css'
        ),
        ' as our reset.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'To apply, this is imported in our ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'client.js'
        ),
        ', which Webpack will load and bundle into our app\'s ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'main.css'
        ),
        '.'
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Traits'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Traits our are way of re-using styling values and functions, in a similar vein to the concept of variables and mixins in Sass.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'We can use Constructicon\'s default traits, and override them using the ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'TraitsProvider'
        ),
        ' component.'
      ),
      _react2.default.createElement(
        _CodeBlock2.default,
        { type: 'javascript' },
        snippets.traitsProvider
      ),
      _react2.default.createElement(
        'p',
        null,
        'Below are some of the common traits you will likely use:'
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'span',
            { className: 'highlight' },
            'breakpoints'
          ),
          ': a list of breakpoints e.g. sm, md, lg'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'span',
            { className: 'highlight' },
            'colors'
          ),
          ': color palette'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'span',
            { className: 'highlight' },
            'mediaQuery'
          ),
          ': a function that takes one of the breakpoint sizes and generates a media query'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'span',
            { className: 'highlight' },
            'fonts'
          ),
          ': font stack'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'span',
            { className: 'highlight' },
            'rhythm'
          ),
          ': a function that takes an integer and converts to consistent rem values e.g. rhythm(1) = \'1.5rem\''
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'span',
            { className: 'highlight' },
            'scale'
          ),
          ': a function that creates a modular scale of font sizes'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'span',
            { className: 'highlight' },
            'treatments'
          ),
          ': specify other font treatments, such as weight'
        )
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Styling Components'
      ),
      _react2.default.createElement(
        'p',
        null,
        'We are currently using ',
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/benoneal/cxsync' },
          'CXSync'
        ),
        ', which is a fork of the CXS library as our CSS-in-JS solution. It works by generating CSS classes from objects of styles you pass it, which you can then add to your elements.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'We use ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'withStyles'
        ),
        ' HOC as our pattern for generating these classes. It takes a styles function as an argument, which will take both the component\'s props and the project\'s traits as arguments, and you will return a styles object.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'This pass in 2 props, a ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'classNames'
        ),
        ' object which will be a map of generated class names, and a ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'styles'
        ),
        ' which is a map of the raw styles.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'We use classNames to apply actual CSS class names to an element, where as styles is usually used to forward styles on to customise other components, which in most cases is Constructicon components'
      ),
      _react2.default.createElement(
        _CodeBlock2.default,
        { type: 'javascript' },
        snippets.withStyles
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Resources'
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: 'https://github.com/lukebrooker/minimal.css' },
            'minimal.css'
          ),
          ': a CSS reset'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: 'https://github.com/benoneal/cxsync' },
            'CXSync'
          ),
          ': our current CSS-in-JS solution (looking to move away)'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: 'https://github.com/everydayhero/constructicon/tree/master/source/components/traits-provider' },
            'TraitsProvider'
          ),
          ': Constructicon component to apply custom traits/themes'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: 'https://github.com/everydayhero/constructicon/tree/master/source/components/withStyles' },
            'withStyles'
          ),
          ': Constructicon HOC to generate class names and style objects'
        )
      )
    )
  );
};

// CXS/CXSync
// stylinh constructicon

exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapState), (0, _redial.provideHooks)(hooks))(Styles);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var traitsProvider = exports.traitsProvider = "// source/lib/traits\nexport const colors = {\n  primary: '#ff000',\n  secondary: '#00ff00'\n}\n\nexport const fonts = {\n  head: 'Montserrat, sans-serif',\n  body: 'Montserrat, sans-serif'\n}\n\nexport const treatments = {\n  head: {\n    fontFamily: fonts.head,\n    fontWeight: 700\n  },\n  body: {\n    fontFamily: fonts.body\n  }\n}\n\n// Container Components\nimport React from 'react'\nimport TraitsProvider from 'constructicon/traits-provider'\nimport * as traits from '../../lib/traits'\n\nconst Container = ({ children }) => (\n  <TraitsProvider traits={traits}>\n    {children}\n  </TraitsProvider>\n)\n\nexport default Container";

var withStyles = exports.withStyles = "import React from 'react'\nimport withStyles from 'constructicon/with-styles'\nimport Heading from 'constructicon/heading'\n\nconst MyComponent = ({\n  classNames,\n  styles\n}) => (\n  <div className={classNames.container}>\n    <Heading styles={styles.heading}>My Heading</Heading>\n  </div>\n)\n\nconst styles = (props, traits) => ({\n  container: {\n    padding: traits.rhythm(1)\n  },\n\n  heading: {\n    color: traits.colors.red\n  }\n})\n\nexport default withStyles(styles)(MyComponent)";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redial = __webpack_require__(5);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(3);

var _reactHelmet = __webpack_require__(2);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _Content = __webpack_require__(1);

var _Content2 = _interopRequireDefault(_Content);

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

var Tests = function Tests() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactHelmet2.default, { title: 'Tests | Services Engineering' }),
    _react2.default.createElement(
      _Content2.default,
      null,
      _react2.default.createElement(
        'p',
        null,
        'Our aims for test coverage vary between projects. Tests should be written for all our long lived libraries and builders, whereas many of our client projects, which often have a short lifespan, are not tested. Although the decision could be made to write tests for a larger app if needed.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Our test suite is flexible, but typically it would contain some of tools in the below resources section. Running our tests is as simple as running ',
        _react2.default.createElement(
          'span',
          { className: 'highlight' },
          'yarn test'
        ),
        '.'
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Resources'
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: 'https://mochajs.org/' },
            'Mocha'
          ),
          ': test framework'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: 'http://chaijs.com/' },
            'Chai'
          ),
          ': assertion library'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: 'https://github.com/airbnb/enzyme' },
            'Enzyme'
          ),
          ': for testing React components'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: 'http://sinonjs.org/' },
            'Sinon'
          ),
          ': spies, stubs, mocks'
        )
      )
    )
  );
};

exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapState), (0, _redial.provideHooks)(hooks))(Tests);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderDocument = undefined;

var _renderDocument = __webpack_require__(9);

Object.defineProperty(exports, 'renderDocument', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_renderDocument).default;
  }
});

var _boilerRoomRunner = __webpack_require__(12);

var _store = __webpack_require__(11);

var _routes = __webpack_require__(10);

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

  app.staticRoutes = ['/', '/build', '/components', '/content', '/deploy', '/integration', '/routing', '/state', '/styles', '/tests'];

  return app;
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3da6f308c48368a5ae9ab541b51f9c45.png";

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("constructicon/rich-text");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("constructicon/traits-provider");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("cxsync");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })
/******/ ])));