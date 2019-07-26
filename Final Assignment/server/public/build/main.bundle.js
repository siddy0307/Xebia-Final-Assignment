/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/public/js/application/app.js":
/*!*********************************************!*\
  !*** ./server/public/js/application/app.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _appStore = _interopRequireDefault(__webpack_require__(/*! ./store/app-store */ "./server/public/js/application/store/app-store.js"));

var _loginComponent = _interopRequireDefault(__webpack_require__(/*! ./components/login-component */ "./server/public/js/application/components/login-component.js"));

var _planetsComponent = _interopRequireDefault(__webpack_require__(/*! ./components/planets-component */ "./server/public/js/application/components/planets-component.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AppContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AppContainer, _React$Component);

  function AppContainer() {
    _classCallCheck(this, AppContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(AppContainer).call(this));
  }

  _createClass(AppContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      var store = this.context.store;
      store.subscribe(function () {
        _this.forceUpdate();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement("div", null, _react.default.createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/",
        component: _loginComponent.default
      }), _react.default.createElement(_reactRouterDom.Route, {
        path: "/planets",
        component: _planetsComponent.default
      })));
    }
  }]);

  return AppContainer;
}(_react.default.Component);

AppContainer.contextTypes = {
  store: _propTypes.default.object
};

_reactDom.default.render(_react.default.createElement(_reactRedux.Provider, {
  store: _appStore.default
}, _react.default.createElement(AppContainer, null)), document.getElementById('root')); // import React from "react";
// import ReactDOM from "react-dom";
// import App from "./routing";
// ReactDOM.render(<App />, document.getElementById("root"));
// import { createStore } from 'redux';
// const reducer = (state,action) => {
//     switch(action.type){
//         case "ADD":
//         state = state + action.payload;
//         break;
//         case "SUBTRACT":
//         state = state - action.payload;
//         break;
//     }
//     return state;
// }
// const store = createStore(reducer,1);
// // store.dispatch({
// //     type: 'ADD',
// //     payload: 10
// // })
// // store.dispatch({
// //     type: 'SUBTRACT',
// //     payload: 10
// // })
// console.log("Store Updated", store.getState())
// store.subscribe(()=>{
//     document.body.innerText = store.getState();
// })
// document.addEventListener('click',()=>{
//     store.dispatch({
//         type: 'ADD',
//         payload: 10
//     })
// })

/***/ }),

/***/ "./server/public/js/application/components/login-component.js":
/*!********************************************************************!*\
  !*** ./server/public/js/application/components/login-component.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _loginActions = __webpack_require__(/*! ../store/action-creators/login-actions */ "./server/public/js/application/store/action-creators/login-actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Login =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login() {
    var _this;

    _classCallCheck(this, Login);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Login).call(this));

    _defineProperty(_assertThisInitialized(_this), "login", function (e) {
      var username = _this.usernameField.value,
          password = _this.passwordField.value,
          userFound = false,
          props = _this.props,
          store = _this.context.store;
      e.preventDefault();
      store.dispatch((0, _loginActions.toggleLoginBtnStatus)(false));
      store.dispatch((0, _loginActions.loginAction)(props, username, password));
    });

    return _this;
  }

  _createClass(Login, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var store = this.context.store;
      var storeData = store.getState();
      var loginPageData = storeData.loginReducer;
      return _react.default.createElement("div", {
        className: "col-md-12 col-sm-12 no-padding"
      }, _react.default.createElement("div", {
        className: "login-box"
      }, _react.default.createElement("form", {
        onSubmit: this.login
      }, _react.default.createElement("label", {
        htmlFor: "username-login"
      }, "Username"), _react.default.createElement("input", {
        type: "text",
        id: "username-login",
        ref: function ref(input) {
          _this2.usernameField = input;
        }
      }), _react.default.createElement("label", {
        htmlFor: "password-login"
      }, "Password"), _react.default.createElement("input", {
        type: "password",
        id: "password-login",
        ref: function ref(input) {
          _this2.passwordField = input;
        }
      }), _react.default.createElement("span", {
        className: "error"
      }, loginPageData.errMsg), _react.default.createElement("button", {
        disabled: loginPageData.loginBtnEnabledStatus === false ? "disabled" : ""
      }, "Login"), _react.default.createElement("div", {
        className: "clearfix"
      }))));
    }
  }]);

  return Login;
}(_react.default.Component);

exports.default = Login;
;
Login.contextTypes = {
  store: _propTypes.default.object
};

/***/ }),

/***/ "./server/public/js/application/components/planets-component.js":
/*!**********************************************************************!*\
  !*** ./server/public/js/application/components/planets-component.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _searchBoxComponent = _interopRequireDefault(__webpack_require__(/*! ./search-box-component */ "./server/public/js/application/components/search-box-component.js"));

var _planetUtilities = __webpack_require__(/*! ../utilities/planet-utilities.js */ "./server/public/js/application/utilities/planet-utilities.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Planets =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Planets, _React$Component);

  function Planets() {
    var _this;

    _classCallCheck(this, Planets);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Planets).call(this));

    _defineProperty(_assertThisInitialized(_this), "search", function (searchTerm) {
      _this.setState({
        searchKeyword: searchTerm
      });
    });

    _defineProperty(_assertThisInitialized(_this), "fetchPlanetDetails", function () {
      var max = 0;
      fetch("https://swapi.co/api/planets/").then(function (response) {
        return response.json();
      }).then(function (data) {
        return _this.setState({
          planets: data.results
        });
      });

      _this.state.planets.forEach(function (planet) {
        if (planet.population != "unknown") {
          if (parseInt(planet.population, 10) > max) {
            max = parseInt(planet.population, 10);
          }
        }
      });

      _this.setState({
        maxPopulation: max
      });
    });

    _this.state = {
      planets: [],
      maxPopulation: 0,
      searchKeyword: ''
    };
    return _this;
  }

  _createClass(Planets, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchPlanetDetails();
    }
  }, {
    key: "render",
    value: function render() {
      var state = this.state;
      var store = this.context.store;
      var storeData = store.getState();
      return _react.default.createElement("div", {
        className: "col-md-12 col-sm-12 no-padding planets-component"
      }, _react.default.createElement(_searchBoxComponent.default, {
        search: this.search
      }), _react.default.createElement("div", {
        className: "loggedin-user"
      }, "Logged In User - ", storeData.loginReducer.userDetails.name), _react.default.createElement("div", {
        className: "col-md-12 col-sm-12 planets-container"
      }, this.state.planets.map(function (planet, index) {
        if (planet.name.toLowerCase().indexOf(state.searchKeyword.toLowerCase()) != -1) {
          return _react.default.createElement("div", {
            style: {
              width: planet.population === 'unknown' ? 100 : 100 + 350 * (parseInt(planet.population, 10) / state.maxPopulation) + 'px',
              background: (0, _planetUtilities.randomColor)()
            },
            className: "planets",
            title: 'Planet Name: ' + planet.name + '; Planet Population: ' + planet.population,
            key: index
          }, _react.default.createElement("span", {
            className: "planet-name"
          }, planet.name), _react.default.createElement("span", {
            className: "planet-population"
          }, (0, _planetUtilities.populationFormatConverter)(planet.population)));
        } else {
          return null;
        }
      }).filter(function (updatedPlanet) {
        if (updatedPlanet !== null) {
          return true;
        }

        return false;
      })), _react.default.createElement("div", {
        className: "col-md-12 col-sm-12 planets-container"
      }, this.state.planets.map(function (planet, index) {
        if (planet.name.toLowerCase().indexOf(state.searchKeyword.toLowerCase()) != -1) {
          return _react.default.createElement("div", {
            style: {
              width: planet.population === 'unknown' ? 100 : 100 + 350 * (parseInt(planet.population, 10) / state.maxPopulation) + 'px',
              background: (0, _planetUtilities.randomColor)()
            },
            className: "planets",
            title: 'Planet Name: ' + planet.name + '; Planet Population: ' + planet.population,
            key: index
          }, _react.default.createElement("span", {
            className: "planet-name"
          }, planet.name), _react.default.createElement("span", {
            className: "planet-population"
          }, (0, _planetUtilities.populationFormatConverter)(planet.population)));
        } else {
          return null;
        }
      }).filter(function (updatedPlanet) {
        if (updatedPlanet !== null) {
          return true;
        }

        return false;
      })));
    }
  }]);

  return Planets;
}(_react.default.Component);

;
Planets.contextTypes = {
  store: _propTypes.default.object
};
var _default = Planets;
exports.default = _default;

/***/ }),

/***/ "./server/public/js/application/components/search-box-component.js":
/*!*************************************************************************!*\
  !*** ./server/public/js/application/components/search-box-component.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SearchBox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SearchBox, _React$Component);

  function SearchBox() {
    var _this;

    _classCallCheck(this, SearchBox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchBox).call(this));

    _defineProperty(_assertThisInitialized(_this), "searchPlanets", function (e) {
      var store = _this.context.store,
          storeData = store.getState();

      if (_this.state.timerSet === false) {
        _this.state.timerSet = true;

        _this.setTimer();
      }

      if (storeData.loginReducer.userDetails.name !== "Luke Skywalker") {
        if (_this.timer && _this.state.searchCount <= 15) {
          _this.props.search(e.target.value);

          _this.setState({
            searchCount: _this.state.searchCount + 1
          });
        }

        if (_this.state.searchCount === 16) {
          _this.props.search('');

          _this.state.errorMessage = 'You are not allowed to perform more than 15 searches per minute';

          _this.setState({
            searchCount: _this.state.searchCount + 1
          });
        }
      } else {
        _this.props.search(e.target.value);
      }
    });

    _this.state = {
      timerSet: false,
      searchCount: 0,
      errorMessage: '',
      searchThresholdInSeconds: 60
    };
    return _this;
  }

  _createClass(SearchBox, [{
    key: "setTimer",
    value: function setTimer() {
      var _this2 = this;

      this.timer = setTimeout(function () {
        clearTimeout(_this2.timer);

        _this2.setState({
          searchCount: 0,
          errorMessage: '',
          timerSet: false
        });
      }, 1000 * this.state.searchThresholdInSeconds);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "col-md-12 col-sm-12 no-padding"
      }, _react.default.createElement("input", {
        className: "col-md-12 col-sm-12 search-box",
        placeholder: "Search for the planets",
        onKeyUp: this.searchPlanets
      }), _react.default.createElement("span", {
        className: "error"
      }, this.state.errorMessage));
    }
  }]);

  return SearchBox;
}(_react.default.Component);

exports.default = SearchBox;
SearchBox.contextTypes = {
  store: _propTypes.default.object
};

/***/ }),

/***/ "./server/public/js/application/store/action-creators/login-actions.js":
/*!*****************************************************************************!*\
  !*** ./server/public/js/application/store/action-creators/login-actions.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleLoginBtnStatus = toggleLoginBtnStatus;
exports.loginErrorMessageAction = loginErrorMessageAction;
exports.loggedInUserDetailsSave = loggedInUserDetailsSave;
exports.loginAction = loginAction;

var _actionTypes = _interopRequireDefault(__webpack_require__(/*! ../action-types.js */ "./server/public/js/application/store/action-types.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toggleLoginBtnStatus(status) {
  return {
    type: _actionTypes.default.TOGGLE_LOGIN_BTN_STATUS,
    status: status
  };
}

function loginErrorMessageAction(message) {
  return {
    type: _actionTypes.default.LOGIN_ERROR,
    message: message
  };
}

function loggedInUserDetailsSave(details) {
  return {
    type: _actionTypes.default.SAVE_USER_DETAILS,
    details: details
  };
}

function loginAction(props, username, password) {
  return function (dispatch, getState) {
    fetch("https://swapi.co/api/people/?search=" + username).then(function (response) {
      return response.json();
    }).then(function (data) {
      var users = data.results,
          userFound = false;

      if (users.length === 0) {
        dispatch(loginErrorMessageAction("No users found with the name of " + username));
      } else {
        users.forEach(function (user, index) {
          if (user.name === username && user.birth_year === password) {
            dispatch(loggedInUserDetailsSave(user));
            props.history.push('/planets');
            userFound = true;
          }
        });

        if (!userFound) {
          dispatch(loginErrorMessageAction("Please check your username or password"));
        }
      }

      dispatch(toggleLoginBtnStatus(true));
    }).catch(function (error) {
      dispatch(loginErrorMessageAction(error));
      dispatch(toggleLoginBtnStatus(true));
    });
  };
}

/***/ }),

/***/ "./server/public/js/application/store/action-types.js":
/*!************************************************************!*\
  !*** ./server/public/js/application/store/action-types.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var actions = {
  'TOGGLE_LOGIN_BTN_STATUS': 'TOGGLE_LOGIN_BTN_STATUS',
  'LOGIN_ERROR': 'LOGIN_ERROR_MESSAGE',
  'SAVE_USER_DETAILS': 'LOGGEDIN_USER_DETAILS_SAVE'
};
var _default = actions;
exports.default = _default;

/***/ }),

/***/ "./server/public/js/application/store/app-store.js":
/*!*********************************************************!*\
  !*** ./server/public/js/application/store/app-store.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _loginReducer = __webpack_require__(/*! ./reducers/login-reducer.js */ "./server/public/js/application/store/reducers/login-reducer.js");

var _reduxLogger = _interopRequireDefault(__webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js"));

var _reduxThunk = _interopRequireDefault(__webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
  loginReducer: _loginReducer.loginReducer
});
var store = (0, _redux.createStore)(reducers, (0, _redux.applyMiddleware)(_reduxLogger.default, _reduxThunk.default));
var _default = store;
exports.default = _default;

/***/ }),

/***/ "./server/public/js/application/store/reducers/login-reducer.js":
/*!**********************************************************************!*\
  !*** ./server/public/js/application/store/reducers/login-reducer.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginReducer = loginReducer;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function loginReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    loginBtnEnabledStatus: true,
    errMsg: '',
    userDetails: ''
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var latestState = {};

  switch (action.type) {
    case 'TOGGLE_LOGIN_BTN_STATUS':
      latestState = _objectSpread({}, state, {
        loginBtnEnabledStatus: action.status
      });
      break;

    case 'LOGIN_ERROR_MESSAGE':
      latestState = _objectSpread({}, state, {
        errMsg: action.message
      });
      break;

    case 'LOGGEDIN_USER_DETAILS_SAVE':
      latestState = _objectSpread({}, state, {
        userDetails: action.details
      });
      break;

    default:
      latestState = state;
  }

  return latestState;
}

;

/***/ }),

/***/ "./server/public/js/application/utilities/planet-utilities.js":
/*!********************************************************************!*\
  !*** ./server/public/js/application/utilities/planet-utilities.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomColor = randomColor;
exports.populationFormatConverter = populationFormatConverter;
exports.getPlanets = getPlanets;
var hexCode = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function randomColor() {
  var hexColor = '#',
      counter = 0;

  for (; counter < 6; counter++) {
    hexColor += hexCode[Math.round(Math.random() * 15)];
  }

  return hexColor;
}

function populationFormatConverter(population) {
  var milestones = [{
    value: 1000,
    format: 'K'
  }, {
    value: 1000000,
    format: 'M'
  }, {
    value: 1000000000,
    format: 'B'
  }],
      i = milestones.length - 1,
      display = '';

  for (; i >= 0; i--) {
    if (population / milestones[i].value >= 1) {
      display = Math.floor(population / milestones[i].value) + '.' + Math.floor(population % milestones[i].value / (milestones[i].value / 10)) + milestones[i].format;
      return display;
    }
  }

  return population;
}

function getPlanets(pageNo) {
  var planetData = "";
  fetch("https://swapi.co/api/planets/?page=" + pageNo).then(function (response) {
    return response.json();
  }).then(function (data) {
    planetData = data.results;
  }).catch(function (error) {
    reject(error);
  });
  console.log(planetData);
}

/***/ }),

/***/ 0:
/*!****************************************************************!*\
  !*** multi @babel/polyfill ./server/public/js/application/app ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"./node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./server/public/js/application/app */"./server/public/js/application/app.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3B1YmxpYy9qcy9hcHBsaWNhdGlvbi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3B1YmxpYy9qcy9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2xvZ2luLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcHVibGljL2pzL2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvcGxhbmV0cy1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3B1YmxpYy9qcy9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3NlYXJjaC1ib3gtY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NlcnZlci9wdWJsaWMvanMvYXBwbGljYXRpb24vc3RvcmUvYWN0aW9uLWNyZWF0b3JzL2xvZ2luLWFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3B1YmxpYy9qcy9hcHBsaWNhdGlvbi9zdG9yZS9hY3Rpb24tdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3B1YmxpYy9qcy9hcHBsaWNhdGlvbi9zdG9yZS9hcHAtc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3B1YmxpYy9qcy9hcHBsaWNhdGlvbi9zdG9yZS9yZWR1Y2Vycy9sb2dpbi1yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9wdWJsaWMvanMvYXBwbGljYXRpb24vdXRpbGl0aWVzL3BsYW5ldC11dGlsaXRpZXMuanMiXSwibmFtZXMiOlsiQXBwQ29udGFpbmVyIiwic3RvcmUiLCJjb250ZXh0Iiwic3Vic2NyaWJlIiwiZm9yY2VVcGRhdGUiLCJMb2dpbkNvbXBvbmVudCIsIlBsYW5ldHNDb21wb25lbnQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnRleHRUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsIlJlYWN0RG9tIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkxvZ2luIiwiZSIsInVzZXJuYW1lIiwidXNlcm5hbWVGaWVsZCIsInZhbHVlIiwicGFzc3dvcmQiLCJwYXNzd29yZEZpZWxkIiwidXNlckZvdW5kIiwicHJvcHMiLCJwcmV2ZW50RGVmYXVsdCIsImRpc3BhdGNoIiwic3RvcmVEYXRhIiwiZ2V0U3RhdGUiLCJsb2dpblBhZ2VEYXRhIiwibG9naW5SZWR1Y2VyIiwibG9naW4iLCJpbnB1dCIsImVyck1zZyIsImxvZ2luQnRuRW5hYmxlZFN0YXR1cyIsIlBsYW5ldHMiLCJzZWFyY2hUZXJtIiwic2V0U3RhdGUiLCJzZWFyY2hLZXl3b3JkIiwibWF4IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInBsYW5ldHMiLCJyZXN1bHRzIiwic3RhdGUiLCJmb3JFYWNoIiwicGxhbmV0IiwicG9wdWxhdGlvbiIsInBhcnNlSW50IiwibWF4UG9wdWxhdGlvbiIsImZldGNoUGxhbmV0RGV0YWlscyIsInNlYXJjaCIsInVzZXJEZXRhaWxzIiwibmFtZSIsIm1hcCIsImluZGV4IiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwid2lkdGgiLCJiYWNrZ3JvdW5kIiwiZmlsdGVyIiwidXBkYXRlZFBsYW5ldCIsIlNlYXJjaEJveCIsInRpbWVyU2V0Iiwic2V0VGltZXIiLCJ0aW1lciIsInNlYXJjaENvdW50IiwidGFyZ2V0IiwiZXJyb3JNZXNzYWdlIiwic2VhcmNoVGhyZXNob2xkSW5TZWNvbmRzIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInNlYXJjaFBsYW5ldHMiLCJ0b2dnbGVMb2dpbkJ0blN0YXR1cyIsInN0YXR1cyIsInR5cGUiLCJhY3Rpb25zIiwiVE9HR0xFX0xPR0lOX0JUTl9TVEFUVVMiLCJsb2dpbkVycm9yTWVzc2FnZUFjdGlvbiIsIm1lc3NhZ2UiLCJMT0dJTl9FUlJPUiIsImxvZ2dlZEluVXNlckRldGFpbHNTYXZlIiwiZGV0YWlscyIsIlNBVkVfVVNFUl9ERVRBSUxTIiwibG9naW5BY3Rpb24iLCJ1c2VycyIsImxlbmd0aCIsInVzZXIiLCJiaXJ0aF95ZWFyIiwiaGlzdG9yeSIsInB1c2giLCJjYXRjaCIsImVycm9yIiwicmVkdWNlcnMiLCJsb2dnZXIiLCJ0aHVuayIsImFjdGlvbiIsImxhdGVzdFN0YXRlIiwiaGV4Q29kZSIsInJhbmRvbUNvbG9yIiwiaGV4Q29sb3IiLCJjb3VudGVyIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwicG9wdWxhdGlvbkZvcm1hdENvbnZlcnRlciIsIm1pbGVzdG9uZXMiLCJmb3JtYXQiLCJpIiwiZGlzcGxheSIsImZsb29yIiwiZ2V0UGxhbmV0cyIsInBhZ2VObyIsInBsYW5ldERhdGEiLCJyZWplY3QiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBZ0IsdUJBQXVCO0FBQ3ZDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdEpBOztBQUNBOztBQUNBOztBQUlBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFk7Ozs7O0FBQ0osMEJBQWM7QUFBQTs7QUFBQTtBQUViOzs7O3dDQUVtQjtBQUFBOztBQUFBLFVBQ1pDLEtBRFksR0FDRixLQUFLQyxPQURILENBQ1pELEtBRFk7QUFFbEJBLFdBQUssQ0FBQ0UsU0FBTixDQUFnQixZQUFNO0FBQ3BCLGFBQUksQ0FBQ0MsV0FBTDtBQUNELE9BRkQ7QUFHRDs7OzZCQUVRO0FBQ1AsYUFDSSw2QkFBQyw2QkFBRCxRQUNFLDBDQUNFLDZCQUFDLHFCQUFEO0FBQU8sYUFBSyxNQUFaO0FBQWEsWUFBSSxFQUFDLEdBQWxCO0FBQXNCLGlCQUFTLEVBQUVDO0FBQWpDLFFBREYsRUFFRSw2QkFBQyxxQkFBRDtBQUFPLFlBQUksRUFBQyxVQUFaO0FBQXVCLGlCQUFTLEVBQUVDO0FBQWxDLFFBRkYsQ0FERixDQURKO0FBUUQ7Ozs7RUFyQndCQyxlQUFNQyxTOztBQXdCakNSLFlBQVksQ0FBQ1MsWUFBYixHQUE0QjtBQUMxQlIsT0FBSyxFQUFFUyxtQkFBVUM7QUFEUyxDQUE1Qjs7QUFJQUMsa0JBQVNDLE1BQVQsQ0FDRSw2QkFBQyxvQkFBRDtBQUFVLE9BQUssRUFBRVo7QUFBakIsR0FDRSw2QkFBQyxZQUFELE9BREYsQ0FERixFQUlFYSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FKRixFLENBU0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLcUJDLEs7Ozs7O0FBQ25CLG1CQUFjO0FBQUE7O0FBQUE7O0FBQ1o7O0FBRFksNERBSU4sVUFBQ0MsQ0FBRCxFQUFPO0FBQ1QsVUFBQUMsUUFBUSxHQUFHLE1BQUtDLGFBQUwsQ0FBbUJDLEtBQTlCO0FBQUEsVUFDQUMsUUFEQSxHQUNXLE1BQUtDLGFBQUwsQ0FBbUJGLEtBRDlCO0FBQUEsVUFFQUcsU0FGQSxHQUVZLEtBRlo7QUFBQSxVQUdBQyxLQUhBLEdBR1EsTUFBS0EsS0FIYjtBQUFBLFVBSUV2QixLQUpGLEdBSVksTUFBS0MsT0FKakIsQ0FJRUQsS0FKRjtBQUtKZ0IsT0FBQyxDQUFDUSxjQUFGO0FBQ0F4QixXQUFLLENBQUN5QixRQUFOLENBQWUsd0NBQXFCLEtBQXJCLENBQWY7QUFDQXpCLFdBQUssQ0FBQ3lCLFFBQU4sQ0FBZSwrQkFBWUYsS0FBWixFQUFtQk4sUUFBbkIsRUFBNkJHLFFBQTdCLENBQWY7QUFDRCxLQWJhOztBQUFBO0FBRWI7Ozs7NkJBYVE7QUFBQTs7QUFBQSxVQUNEcEIsS0FEQyxHQUNTLEtBQUtDLE9BRGQsQ0FDREQsS0FEQztBQUVQLFVBQUkwQixTQUFTLEdBQUcxQixLQUFLLENBQUMyQixRQUFOLEVBQWhCO0FBQ0EsVUFBSUMsYUFBYSxHQUFHRixTQUFTLENBQUNHLFlBQTlCO0FBRUEsYUFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBTSxnQkFBUSxFQUFFLEtBQUtDO0FBQXJCLFNBQ0U7QUFBTyxlQUFPLEVBQUM7QUFBZixvQkFERixFQUlFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxVQUFFLEVBQUMsZ0JBRkw7QUFHRSxXQUFHLEVBQUcsYUFBQ0MsS0FBRCxFQUFXO0FBQUUsZ0JBQUksQ0FBQ2IsYUFBTCxHQUFxQmEsS0FBckI7QUFBNEI7QUFIakQsUUFKRixFQVNFO0FBQU8sZUFBTyxFQUFDO0FBQWYsb0JBVEYsRUFZRTtBQUNFLFlBQUksRUFBQyxVQURQO0FBRUUsVUFBRSxFQUFDLGdCQUZMO0FBR0UsV0FBRyxFQUFHLGFBQUNBLEtBQUQsRUFBVztBQUFFLGdCQUFJLENBQUNWLGFBQUwsR0FBcUJVLEtBQXJCO0FBQTRCO0FBSGpELFFBWkYsRUFpQkU7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLFNBQ0lILGFBQWEsQ0FBQ0ksTUFEbEIsQ0FqQkYsRUFvQkU7QUFBUSxnQkFBUSxFQUFHSixhQUFhLENBQUNLLHFCQUFkLEtBQXdDLEtBQXhDLEdBQWdELFVBQWhELEdBQTZEO0FBQWhGLGlCQXBCRixFQXVCRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixRQXZCRixDQURGLENBREYsQ0FERjtBQStCRDs7OztFQXBEZ0MzQixlQUFNQyxTOzs7QUFxRHhDO0FBRURRLEtBQUssQ0FBQ1AsWUFBTixHQUFxQjtBQUNuQlIsT0FBSyxFQUFFUyxtQkFBVUM7QUFERSxDQUFyQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURBOztBQUVBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLTXdCLE87Ozs7O0FBQ0YscUJBQWM7QUFBQTs7QUFBQTs7QUFDWjs7QUFEWSw2REFhTCxVQUFDQyxVQUFELEVBQWdCO0FBQ3ZCLFlBQUtDLFFBQUwsQ0FBYztBQUFFQyxxQkFBYSxFQUFFRjtBQUFqQixPQUFkO0FBQ0QsS0FmYTs7QUFBQSx5RUFpQk8sWUFBTTtBQUN6QixVQUFJRyxHQUFHLEdBQUcsQ0FBVjtBQUNBQyxXQUFLLENBQUMsK0JBQUQsQ0FBTCxDQUNDQyxJQURELENBQ00sVUFBQUMsUUFBUTtBQUFBLGVBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0FBQUEsT0FEZCxFQUVHRixJQUZILENBRVEsVUFBQUcsSUFBSTtBQUFBLGVBQ1IsTUFBS1AsUUFBTCxDQUFjO0FBQUVRLGlCQUFPLEVBQUVELElBQUksQ0FBQ0U7QUFBaEIsU0FBZCxDQURRO0FBQUEsT0FGWjs7QUFLQSxZQUFLQyxLQUFMLENBQVdGLE9BQVgsQ0FBbUJHLE9BQW5CLENBQTJCLFVBQVVDLE1BQVYsRUFBa0I7QUFDM0MsWUFBSUEsTUFBTSxDQUFDQyxVQUFQLElBQXFCLFNBQXpCLEVBQW9DO0FBQ2xDLGNBQUlDLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDQyxVQUFSLEVBQW9CLEVBQXBCLENBQVIsR0FBa0NYLEdBQXRDLEVBQTJDO0FBQ3pDQSxlQUFHLEdBQUdZLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDQyxVQUFSLEVBQW9CLEVBQXBCLENBQWQ7QUFDRDtBQUNGO0FBQ0YsT0FORDs7QUFPQSxZQUFLYixRQUFMLENBQWM7QUFBRWUscUJBQWEsRUFBRWI7QUFBakIsT0FBZDtBQUNELEtBaENhOztBQUVaLFVBQUtRLEtBQUwsR0FBYTtBQUNYRixhQUFPLEVBQUUsRUFERTtBQUVYTyxtQkFBYSxFQUFFLENBRko7QUFHWGQsbUJBQWEsRUFBRTtBQUhKLEtBQWI7QUFGWTtBQU9iOzs7O3dDQUVtQjtBQUNsQixXQUFLZSxrQkFBTDtBQUNEOzs7NkJBdUJRO0FBQ1AsVUFBSU4sS0FBSyxHQUFHLEtBQUtBLEtBQWpCO0FBRE8sVUFFRDlDLEtBRkMsR0FFUyxLQUFLQyxPQUZkLENBRURELEtBRkM7QUFHUCxVQUFJMEIsU0FBUyxHQUFHMUIsS0FBSyxDQUFDMkIsUUFBTixFQUFoQjtBQUVBLGFBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRSw2QkFBQywyQkFBRDtBQUFXLGNBQU0sRUFBRSxLQUFLMEI7QUFBeEIsUUFERixFQUdFO0FBQUssaUJBQVMsRUFBQztBQUFmLDhCQUNxQjNCLFNBQVMsQ0FBQ0csWUFBVixDQUF1QnlCLFdBQXZCLENBQW1DQyxJQUR4RCxDQUhGLEVBT0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FFSSxLQUFLVCxLQUFMLENBQVdGLE9BQVgsQ0FBbUJZLEdBQW5CLENBQXVCLFVBQVVSLE1BQVYsRUFBa0JTLEtBQWxCLEVBQXlCO0FBQzlDLFlBQUlULE1BQU0sQ0FBQ08sSUFBUCxDQUFZRyxXQUFaLEdBQTBCQyxPQUExQixDQUFrQ2IsS0FBSyxDQUFDVCxhQUFOLENBQW9CcUIsV0FBcEIsRUFBbEMsS0FBd0UsQ0FBQyxDQUE3RSxFQUFnRjtBQUM5RSxpQkFDRTtBQUNFLGlCQUFLLEVBQUU7QUFDTEUsbUJBQUssRUFBRVosTUFBTSxDQUFDQyxVQUFQLEtBQXNCLFNBQXRCLEdBQWtDLEdBQWxDLEdBQXdDLE1BQVEsT0FBUUMsUUFBUSxDQUFDRixNQUFNLENBQUNDLFVBQVIsRUFBb0IsRUFBcEIsQ0FBUixHQUFtQ0gsS0FBSyxDQUFDSyxhQUFqRCxDQUFSLEdBQTZFLElBRHZIO0FBRUxVLHdCQUFVLEVBQUU7QUFGUCxhQURUO0FBS0UscUJBQVMsRUFBQyxTQUxaO0FBTUUsaUJBQUssRUFBRyxrQkFBa0JiLE1BQU0sQ0FBQ08sSUFBekIsR0FBZ0MsdUJBQWhDLEdBQTBEUCxNQUFNLENBQUNDLFVBTjNFO0FBT0UsZUFBRyxFQUFFUTtBQVBQLGFBU0U7QUFBTSxxQkFBUyxFQUFDO0FBQWhCLGFBQ0lULE1BQU0sQ0FBQ08sSUFEWCxDQVRGLEVBWUU7QUFBTSxxQkFBUyxFQUFDO0FBQWhCLGFBQ0ksZ0RBQTBCUCxNQUFNLENBQUNDLFVBQWpDLENBREosQ0FaRixDQURGO0FBa0JELFNBbkJELE1BbUJPO0FBQ0wsaUJBQU8sSUFBUDtBQUNEO0FBQ0YsT0F2QkQsRUF1QkdhLE1BdkJILENBdUJVLFVBQVVDLGFBQVYsRUFBeUI7QUFDakMsWUFBSUEsYUFBYSxLQUFLLElBQXRCLEVBQTRCO0FBQzFCLGlCQUFPLElBQVA7QUFDRDs7QUFDRCxlQUFPLEtBQVA7QUFDRCxPQTVCRCxDQUZKLENBUEYsRUF3Q0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FFSSxLQUFLakIsS0FBTCxDQUFXRixPQUFYLENBQW1CWSxHQUFuQixDQUF1QixVQUFVUixNQUFWLEVBQWtCUyxLQUFsQixFQUF5QjtBQUM5QyxZQUFJVCxNQUFNLENBQUNPLElBQVAsQ0FBWUcsV0FBWixHQUEwQkMsT0FBMUIsQ0FBa0NiLEtBQUssQ0FBQ1QsYUFBTixDQUFvQnFCLFdBQXBCLEVBQWxDLEtBQXdFLENBQUMsQ0FBN0UsRUFBZ0Y7QUFDOUUsaUJBQ0U7QUFDRSxpQkFBSyxFQUFFO0FBQ0xFLG1CQUFLLEVBQUVaLE1BQU0sQ0FBQ0MsVUFBUCxLQUFzQixTQUF0QixHQUFrQyxHQUFsQyxHQUF3QyxNQUFRLE9BQVFDLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDQyxVQUFSLEVBQW9CLEVBQXBCLENBQVIsR0FBbUNILEtBQUssQ0FBQ0ssYUFBakQsQ0FBUixHQUE2RSxJQUR2SDtBQUVMVSx3QkFBVSxFQUFFO0FBRlAsYUFEVDtBQUtFLHFCQUFTLEVBQUMsU0FMWjtBQU1FLGlCQUFLLEVBQUcsa0JBQWtCYixNQUFNLENBQUNPLElBQXpCLEdBQWdDLHVCQUFoQyxHQUEwRFAsTUFBTSxDQUFDQyxVQU4zRTtBQU9FLGVBQUcsRUFBRVE7QUFQUCxhQVNFO0FBQU0scUJBQVMsRUFBQztBQUFoQixhQUNJVCxNQUFNLENBQUNPLElBRFgsQ0FURixFQVlFO0FBQU0scUJBQVMsRUFBQztBQUFoQixhQUNJLGdEQUEwQlAsTUFBTSxDQUFDQyxVQUFqQyxDQURKLENBWkYsQ0FERjtBQWtCRCxTQW5CRCxNQW1CTztBQUNMLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BdkJELEVBdUJHYSxNQXZCSCxDQXVCVSxVQUFVQyxhQUFWLEVBQXlCO0FBQ2pDLFlBQUlBLGFBQWEsS0FBSyxJQUF0QixFQUE0QjtBQUMxQixpQkFBTyxJQUFQO0FBQ0Q7O0FBQ0QsZUFBTyxLQUFQO0FBQ0QsT0E1QkQsQ0FGSixDQXhDRixDQURGO0FBNkVEOzs7O0VBckhpQnpELGVBQU1DLFM7O0FBc0gzQjtBQUVEMkIsT0FBTyxDQUFDMUIsWUFBUixHQUF1QjtBQUNyQlIsT0FBSyxFQUFFUyxtQkFBVUM7QUFESSxDQUF2QjtlQUlld0IsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SWY7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQjhCLFM7Ozs7O0FBQ25CLHVCQUFjO0FBQUE7O0FBQUE7O0FBQ1o7O0FBRFksb0VBcUJFLFVBQUNoRCxDQUFELEVBQU87QUFDakIsVUFBRWhCLEtBQUYsR0FBWSxNQUFLQyxPQUFqQixDQUFFRCxLQUFGO0FBQUEsVUFBMEIwQixTQUExQixHQUFzQzFCLEtBQUssQ0FBQzJCLFFBQU4sRUFBdEM7O0FBQ0osVUFBSSxNQUFLbUIsS0FBTCxDQUFXbUIsUUFBWCxLQUF3QixLQUE1QixFQUFtQztBQUNqQyxjQUFLbkIsS0FBTCxDQUFXbUIsUUFBWCxHQUFzQixJQUF0Qjs7QUFDQSxjQUFLQyxRQUFMO0FBQ0Q7O0FBRUQsVUFBSXhDLFNBQVMsQ0FBQ0csWUFBVixDQUF1QnlCLFdBQXZCLENBQW1DQyxJQUFuQyxLQUE0QyxnQkFBaEQsRUFBa0U7QUFDaEUsWUFBSyxNQUFLWSxLQUFMLElBQWMsTUFBS3JCLEtBQUwsQ0FBV3NCLFdBQVgsSUFBMEIsRUFBN0MsRUFBa0Q7QUFDaEQsZ0JBQUs3QyxLQUFMLENBQVc4QixNQUFYLENBQWtCckMsQ0FBQyxDQUFDcUQsTUFBRixDQUFTbEQsS0FBM0I7O0FBQ0EsZ0JBQUtpQixRQUFMLENBQWM7QUFBRWdDLHVCQUFXLEVBQUUsTUFBS3RCLEtBQUwsQ0FBV3NCLFdBQVgsR0FBdUI7QUFBdEMsV0FBZDtBQUNEOztBQUVELFlBQUksTUFBS3RCLEtBQUwsQ0FBV3NCLFdBQVgsS0FBMkIsRUFBL0IsRUFBbUM7QUFDakMsZ0JBQUs3QyxLQUFMLENBQVc4QixNQUFYLENBQWtCLEVBQWxCOztBQUNBLGdCQUFLUCxLQUFMLENBQVd3QixZQUFYLEdBQTBCLGlFQUExQjs7QUFDQSxnQkFBS2xDLFFBQUwsQ0FBYztBQUFFZ0MsdUJBQVcsRUFBRSxNQUFLdEIsS0FBTCxDQUFXc0IsV0FBWCxHQUF1QjtBQUF0QyxXQUFkO0FBQ0Q7QUFDRixPQVhELE1BV087QUFDTCxjQUFLN0MsS0FBTCxDQUFXOEIsTUFBWCxDQUFrQnJDLENBQUMsQ0FBQ3FELE1BQUYsQ0FBU2xELEtBQTNCO0FBQ0Q7QUFDRixLQTFDYTs7QUFFWixVQUFLMkIsS0FBTCxHQUFhO0FBQ1htQixjQUFRLEVBQUUsS0FEQztBQUVYRyxpQkFBVyxFQUFFLENBRkY7QUFHWEUsa0JBQVksRUFBRSxFQUhIO0FBSVhDLDhCQUF3QixFQUFFO0FBSmYsS0FBYjtBQUZZO0FBUWI7Ozs7K0JBRVU7QUFBQTs7QUFDVCxXQUFLSixLQUFMLEdBQWFLLFVBQVUsQ0FBQyxZQUFNO0FBQzVCQyxvQkFBWSxDQUFDLE1BQUksQ0FBQ04sS0FBTixDQUFaOztBQUNBLGNBQUksQ0FBQy9CLFFBQUwsQ0FBYztBQUNaZ0MscUJBQVcsRUFBRSxDQUREO0FBRVpFLHNCQUFZLEVBQUUsRUFGRjtBQUdaTCxrQkFBUSxFQUFFO0FBSEUsU0FBZDtBQUtELE9BUHNCLEVBT3BCLE9BQU8sS0FBS25CLEtBQUwsQ0FBV3lCLHdCQVBFLENBQXZCO0FBUUQ7Ozs2QkF5QlE7QUFDUCxhQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFDRSxpQkFBUyxFQUFDLGdDQURaO0FBRUUsbUJBQVcsRUFBQyx3QkFGZDtBQUdFLGVBQU8sRUFBRSxLQUFLRztBQUhoQixRQURGLEVBTUU7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLFNBQ0ksS0FBSzVCLEtBQUwsQ0FBV3dCLFlBRGYsQ0FORixDQURGO0FBWUQ7Ozs7RUExRG9DaEUsZUFBTUMsUzs7O0FBNkQ3Q3lELFNBQVMsQ0FBQ3hELFlBQVYsR0FBeUI7QUFDdkJSLE9BQUssRUFBRVMsbUJBQVVDO0FBRE0sQ0FBekIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTs7OztBQUVPLFNBQVNpRSxvQkFBVCxDQUE4QkMsTUFBOUIsRUFBc0M7QUFDM0MsU0FBTztBQUNMQyxRQUFJLEVBQUVDLHFCQUFRQyx1QkFEVDtBQUVMSCxVQUFNLEVBQU5BO0FBRkssR0FBUDtBQUlEOztBQUVNLFNBQVNJLHVCQUFULENBQWlDQyxPQUFqQyxFQUEwQztBQUMvQyxTQUFPO0FBQ0xKLFFBQUksRUFBRUMscUJBQVFJLFdBRFQ7QUFFTEQsV0FBTyxFQUFQQTtBQUZLLEdBQVA7QUFJRDs7QUFFTSxTQUFTRSx1QkFBVCxDQUFpQ0MsT0FBakMsRUFBMEM7QUFDL0MsU0FBTztBQUNMUCxRQUFJLEVBQUVDLHFCQUFRTyxpQkFEVDtBQUVMRCxXQUFPLEVBQVBBO0FBRkssR0FBUDtBQUlEOztBQUVNLFNBQVNFLFdBQVQsQ0FBcUIvRCxLQUFyQixFQUE0Qk4sUUFBNUIsRUFBc0NHLFFBQXRDLEVBQWdEO0FBQ3JELFNBQU8sVUFBQ0ssUUFBRCxFQUFXRSxRQUFYLEVBQXdCO0FBQzdCWSxTQUFLLENBQUMseUNBQXdDdEIsUUFBekMsQ0FBTCxDQUNLdUIsSUFETCxDQUNVLFVBQUFDLFFBQVE7QUFBQSxhQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtBQUFBLEtBRGxCLEVBRU9GLElBRlAsQ0FFWSxVQUFBRyxJQUFJLEVBQUc7QUFDWCxVQUFJNEMsS0FBSyxHQUFHNUMsSUFBSSxDQUFDRSxPQUFqQjtBQUFBLFVBQTJCdkIsU0FBUyxHQUFHLEtBQXZDOztBQUNKLFVBQUlpRSxLQUFLLENBQUNDLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEIvRCxnQkFBUSxDQUFDdUQsdUJBQXVCLENBQUMscUNBQXFDL0QsUUFBdEMsQ0FBeEIsQ0FBUjtBQUNELE9BRkQsTUFFTztBQUNMc0UsYUFBSyxDQUFDeEMsT0FBTixDQUFjLFVBQUMwQyxJQUFELEVBQU9oQyxLQUFQLEVBQWlCO0FBQzdCLGNBQUlnQyxJQUFJLENBQUNsQyxJQUFMLEtBQWN0QyxRQUFkLElBQTJCd0UsSUFBSSxDQUFDQyxVQUFMLEtBQW9CdEUsUUFBbkQsRUFBNkQ7QUFDM0RLLG9CQUFRLENBQUMwRCx1QkFBdUIsQ0FBQ00sSUFBRCxDQUF4QixDQUFSO0FBQ0FsRSxpQkFBSyxDQUFDb0UsT0FBTixDQUFjQyxJQUFkLENBQW1CLFVBQW5CO0FBQ0F0RSxxQkFBUyxHQUFHLElBQVo7QUFDRDtBQUNGLFNBTkQ7O0FBT0EsWUFBSSxDQUFDQSxTQUFMLEVBQWdCO0FBQ2RHLGtCQUFRLENBQUN1RCx1QkFBdUIsQ0FBQyx3Q0FBRCxDQUF4QixDQUFSO0FBQ0Q7QUFDRjs7QUFDRHZELGNBQVEsQ0FBQ2tELG9CQUFvQixDQUFDLElBQUQsQ0FBckIsQ0FBUjtBQUNLLEtBbkJULEVBb0JHa0IsS0FwQkgsQ0FvQlMsVUFBVUMsS0FBVixFQUFpQjtBQUN0QnJFLGNBQVEsQ0FBQ3VELHVCQUF1QixDQUFDYyxLQUFELENBQXhCLENBQVI7QUFDQXJFLGNBQVEsQ0FBQ2tELG9CQUFvQixDQUFDLElBQUQsQ0FBckIsQ0FBUjtBQUNELEtBdkJIO0FBd0JDLEdBekJIO0FBMEJELEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xERCxJQUFNRyxPQUFPLEdBQUc7QUFDZCw2QkFBMkIseUJBRGI7QUFFZCxpQkFBZSxxQkFGRDtBQUdkLHVCQUFxQjtBQUhQLENBQWhCO2VBTWVBLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTmY7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFJaUIsUUFBUSxHQUFHLDRCQUFnQjtBQUFFbEUsY0FBWSxFQUFaQTtBQUFGLENBQWhCLENBQWY7QUFDQSxJQUFJN0IsS0FBSyxHQUFHLHdCQUNWK0YsUUFEVSxFQUVWLDRCQUFnQkMsb0JBQWhCLEVBQXdCQyxtQkFBeEIsQ0FGVSxDQUFaO2VBS2VqRyxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYUixTQUFTNkIsWUFBVCxHQUlJO0FBQUEsTUFKa0JpQixLQUlsQix1RUFKMEI7QUFDbkNiLHlCQUFxQixFQUFFLElBRFk7QUFFbkNELFVBQU0sRUFBRSxFQUYyQjtBQUduQ3NCLGVBQVcsRUFBRTtBQUhzQixHQUkxQjtBQUFBLE1BQVI0QyxNQUFRO0FBQ1QsTUFBSUMsV0FBVyxHQUFHLEVBQWxCOztBQUNBLFVBQVFELE1BQU0sQ0FBQ3JCLElBQWY7QUFDRSxTQUFLLHlCQUFMO0FBQ0VzQixpQkFBVyxxQkFBUXJELEtBQVI7QUFBZWIsNkJBQXFCLEVBQUVpRSxNQUFNLENBQUN0QjtBQUE3QyxRQUFYO0FBQ0E7O0FBQ0YsU0FBSyxxQkFBTDtBQUNFdUIsaUJBQVcscUJBQVFyRCxLQUFSO0FBQWVkLGNBQU0sRUFBRWtFLE1BQU0sQ0FBQ2pCO0FBQTlCLFFBQVg7QUFDQTs7QUFDRixTQUFLLDRCQUFMO0FBQ0VrQixpQkFBVyxxQkFBUXJELEtBQVI7QUFBZVEsbUJBQVcsRUFBRTRDLE1BQU0sQ0FBQ2Q7QUFBbkMsUUFBWDtBQUNBOztBQUNGO0FBQ0VlLGlCQUFXLEdBQUdyRCxLQUFkO0FBWEo7O0FBY0EsU0FBT3FELFdBQVA7QUFDRDs7QUFBQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCRCxJQUFJQyxPQUFPLEdBQUcsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsRUFBb0MsR0FBcEMsRUFBeUMsR0FBekMsRUFBOEMsR0FBOUMsRUFBbUQsR0FBbkQsRUFBd0QsR0FBeEQsRUFBNkQsR0FBN0QsRUFBa0UsR0FBbEUsRUFBdUUsR0FBdkUsRUFBNEUsR0FBNUUsQ0FBZDs7QUFFTyxTQUFTQyxXQUFULEdBQXVCO0FBQzVCLE1BQUlDLFFBQVEsR0FBRyxHQUFmO0FBQUEsTUFBb0JDLE9BQU8sR0FBRyxDQUE5Qjs7QUFDQSxTQUFPQSxPQUFPLEdBQUcsQ0FBakIsRUFBcUJBLE9BQU8sRUFBNUIsRUFBZ0M7QUFDOUJELFlBQVEsSUFBSUYsT0FBTyxDQUFDSSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWMsRUFBekIsQ0FBRCxDQUFuQjtBQUNEOztBQUVELFNBQU9KLFFBQVA7QUFDRDs7QUFFTSxTQUFTSyx5QkFBVCxDQUFtQzFELFVBQW5DLEVBQStDO0FBQ3BELE1BQUkyRCxVQUFVLEdBQUcsQ0FDZjtBQUFFekYsU0FBSyxFQUFFLElBQVQ7QUFBZTBGLFVBQU0sRUFBRTtBQUF2QixHQURlLEVBRWY7QUFBRTFGLFNBQUssRUFBRSxPQUFUO0FBQWtCMEYsVUFBTSxFQUFFO0FBQTFCLEdBRmUsRUFHZjtBQUFFMUYsU0FBSyxFQUFFLFVBQVQ7QUFBcUIwRixVQUFNLEVBQUU7QUFBN0IsR0FIZSxDQUFqQjtBQUFBLE1BSUdDLENBQUMsR0FBR0YsVUFBVSxDQUFDcEIsTUFBWCxHQUFvQixDQUozQjtBQUFBLE1BSThCdUIsT0FBTyxHQUFHLEVBSnhDOztBQUtBLFNBQU9ELENBQUMsSUFBSSxDQUFaLEVBQWVBLENBQUMsRUFBaEIsRUFBb0I7QUFDbEIsUUFBSzdELFVBQVUsR0FBRzJELFVBQVUsQ0FBQ0UsQ0FBRCxDQUFWLENBQWMzRixLQUE1QixJQUFzQyxDQUExQyxFQUE2QztBQUMzQzRGLGFBQU8sR0FFSFAsSUFBSSxDQUFDUSxLQUFMLENBQVcvRCxVQUFVLEdBQUcyRCxVQUFVLENBQUNFLENBQUQsQ0FBVixDQUFjM0YsS0FBdEMsSUFDRSxHQURGLEdBRUVxRixJQUFJLENBQUNRLEtBQUwsQ0FBWS9ELFVBQVUsR0FBRzJELFVBQVUsQ0FBQ0UsQ0FBRCxDQUFWLENBQWMzRixLQUE1QixJQUFzQ3lGLFVBQVUsQ0FBQ0UsQ0FBRCxDQUFWLENBQWMzRixLQUFkLEdBQXNCLEVBQTVELENBQVgsQ0FISixHQUtFeUYsVUFBVSxDQUFDRSxDQUFELENBQVYsQ0FBY0QsTUFObEI7QUFRQSxhQUFPRSxPQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPOUQsVUFBUDtBQUNEOztBQUVNLFNBQVNnRSxVQUFULENBQW9CQyxNQUFwQixFQUE0QjtBQUNqQyxNQUFJQyxVQUFVLEdBQUMsRUFBZjtBQUNFNUUsT0FBSyxDQUFDLHdDQUF3QzJFLE1BQXpDLENBQUwsQ0FDQzFFLElBREQsQ0FDTSxVQUFBQyxRQUFRO0FBQUEsV0FBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxHQURkLEVBRUdGLElBRkgsQ0FFUSxVQUFBRyxJQUFJLEVBQUk7QUFDWndFLGNBQVUsR0FBR3hFLElBQUksQ0FBQ0UsT0FBbEI7QUFDRCxHQUpILEVBTUNnRCxLQU5ELENBTU8sVUFBQ0MsS0FBRCxFQUFXO0FBQ2hCc0IsVUFBTSxDQUFDdEIsS0FBRCxDQUFOO0FBQ0QsR0FSRDtBQVNBdUIsU0FBTyxDQUFDQyxHQUFSLENBQVlILFVBQVo7QUFDSCxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RG9tIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQge1xuICBCcm93c2VyUm91dGVyIGFzIFJvdXRlcixcbiAgUm91dGUsXG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUvYXBwLXN0b3JlJztcbmltcG9ydCBMb2dpbkNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4tY29tcG9uZW50JztcbmltcG9ydCBQbGFuZXRzQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9wbGFuZXRzLWNvbXBvbmVudCc7XG5cbmNsYXNzIEFwcENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBsZXQgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuICAgIHN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Um91dGVyPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0xvZ2luQ29tcG9uZW50fSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcGxhbmV0c1wiIGNvbXBvbmVudD17UGxhbmV0c0NvbXBvbmVudH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Sb3V0ZXI+XG4gICAgKVxuICB9XG59XG5cbkFwcENvbnRhaW5lci5jb250ZXh0VHlwZXMgPSB7XG4gIHN0b3JlOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuXG5SZWFjdERvbS5yZW5kZXIoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxBcHBDb250YWluZXIgLz5cbiAgPC9Qcm92aWRlcj4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7XG5cblxuXG4vLyBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuLy8gaW1wb3J0IEFwcCBmcm9tIFwiLi9yb3V0aW5nXCI7XG5cbi8vIFJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpO1xuXG5cbi8vIGltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xuXG4vLyBjb25zdCByZWR1Y2VyID0gKHN0YXRlLGFjdGlvbikgPT4ge1xuLy8gICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XG4vLyAgICAgICAgIGNhc2UgXCJBRERcIjpcbi8vICAgICAgICAgc3RhdGUgPSBzdGF0ZSArIGFjdGlvbi5wYXlsb2FkO1xuLy8gICAgICAgICBicmVhaztcbi8vICAgICAgICAgY2FzZSBcIlNVQlRSQUNUXCI6XG4vLyAgICAgICAgIHN0YXRlID0gc3RhdGUgLSBhY3Rpb24ucGF5bG9hZDtcbi8vICAgICAgICAgYnJlYWs7XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiBzdGF0ZTtcbi8vIH1cblxuXG4vLyBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsMSk7XG5cbi8vIC8vIHN0b3JlLmRpc3BhdGNoKHtcbi8vIC8vICAgICB0eXBlOiAnQUREJyxcbi8vIC8vICAgICBwYXlsb2FkOiAxMFxuLy8gLy8gfSlcbi8vIC8vIHN0b3JlLmRpc3BhdGNoKHtcbi8vIC8vICAgICB0eXBlOiAnU1VCVFJBQ1QnLFxuLy8gLy8gICAgIHBheWxvYWQ6IDEwXG4vLyAvLyB9KVxuLy8gY29uc29sZS5sb2coXCJTdG9yZSBVcGRhdGVkXCIsIHN0b3JlLmdldFN0YXRlKCkpXG4vLyBzdG9yZS5zdWJzY3JpYmUoKCk9Pntcbi8vICAgICBkb2N1bWVudC5ib2R5LmlubmVyVGV4dCA9IHN0b3JlLmdldFN0YXRlKCk7XG4vLyB9KVxuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9Pntcbi8vICAgICBzdG9yZS5kaXNwYXRjaCh7XG4vLyAgICAgICAgIHR5cGU6ICdBREQnLFxuLy8gICAgICAgICBwYXlsb2FkOiAxMFxuLy8gICAgIH0pXG4vLyB9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtcbiAgdG9nZ2xlTG9naW5CdG5TdGF0dXMsXG4gIGxvZ2luQWN0aW9uXG59IGZyb20gJy4uL3N0b3JlL2FjdGlvbi1jcmVhdG9ycy9sb2dpbi1hY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbG9naW4gPSAoZSkgPT4ge1xuICAgIGxldCB1c2VybmFtZSA9IHRoaXMudXNlcm5hbWVGaWVsZC52YWx1ZSxcbiAgICAgICAgcGFzc3dvcmQgPSB0aGlzLnBhc3N3b3JkRmllbGQudmFsdWUsXG4gICAgICAgIHVzZXJGb3VuZCA9IGZhbHNlLFxuICAgICAgICBwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc3RvcmUuZGlzcGF0Y2godG9nZ2xlTG9naW5CdG5TdGF0dXMoZmFsc2UpKTtcbiAgICBzdG9yZS5kaXNwYXRjaChsb2dpbkFjdGlvbihwcm9wcywgdXNlcm5hbWUsIHBhc3N3b3JkKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcbiAgICBsZXQgc3RvcmVEYXRhID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICBsZXQgbG9naW5QYWdlRGF0YSA9IHN0b3JlRGF0YS5sb2dpblJlZHVjZXI7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgY29sLXNtLTEyIG5vLXBhZGRpbmdcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1ib3hcIj5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5sb2dpbn0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lLWxvZ2luXCI+XG4gICAgICAgICAgICAgIFVzZXJuYW1lXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZS1sb2dpblwiXG4gICAgICAgICAgICAgIHJlZj17IChpbnB1dCkgPT4geyB0aGlzLnVzZXJuYW1lRmllbGQgPSBpbnB1dCB9IH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkLWxvZ2luXCI+XG4gICAgICAgICAgICAgIFBhc3N3b3JkXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmQtbG9naW5cIlxuICAgICAgICAgICAgICByZWY9eyAoaW5wdXQpID0+IHsgdGhpcy5wYXNzd29yZEZpZWxkID0gaW5wdXQgfSB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JcIj5cbiAgICAgICAgICAgICAgeyBsb2dpblBhZ2VEYXRhLmVyck1zZyB9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXsgbG9naW5QYWdlRGF0YS5sb2dpbkJ0bkVuYWJsZWRTdGF0dXMgPT09IGZhbHNlID8gXCJkaXNhYmxlZFwiIDogXCJcIiB9PlxuICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCIgLz5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTtcblxuTG9naW4uY29udGV4dFR5cGVzID0ge1xuICBzdG9yZTogUHJvcFR5cGVzLm9iamVjdFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgeyBQaWVUb29sdGlwIH0gZnJvbSAncmVhY3QtZDMtdG9vbHRpcCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFNlYXJjaEJveCBmcm9tICcuL3NlYXJjaC1ib3gtY29tcG9uZW50Jztcbi8vaW1wb3J0IFBsYW5ldFRhYmxlIGZyb20gJy4vdGFibGUtY29tcG9uZW50JztcbmltcG9ydCB7XG4gIHJhbmRvbUNvbG9yLFxuICBwb3B1bGF0aW9uRm9ybWF0Q29udmVydGVyLFxufSBmcm9tICcuLi91dGlsaXRpZXMvcGxhbmV0LXV0aWxpdGllcy5qcyc7XG5cbmNsYXNzIFBsYW5ldHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIHBsYW5ldHM6IFtdLFxuICAgICAgICBtYXhQb3B1bGF0aW9uOiAwLFxuICAgICAgICBzZWFyY2hLZXl3b3JkOiAnJyxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuZmV0Y2hQbGFuZXREZXRhaWxzKCk7XG4gICAgfVxuXG4gICAgc2VhcmNoID0gKHNlYXJjaFRlcm0pID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hLZXl3b3JkOiBzZWFyY2hUZXJtIH0pO1xuICAgIH1cblxuICAgIGZldGNoUGxhbmV0RGV0YWlscyA9ICgpID0+IHtcbiAgICAgIGxldCBtYXggPSAwXG4gICAgICBmZXRjaChcImh0dHBzOi8vc3dhcGkuY28vYXBpL3BsYW5ldHMvXCIpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT5cbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGxhbmV0czogZGF0YS5yZXN1bHRzIH0pXG4gICAgICAgICAgKTtcbiAgICAgIHRoaXMuc3RhdGUucGxhbmV0cy5mb3JFYWNoKGZ1bmN0aW9uIChwbGFuZXQpIHtcbiAgICAgICAgaWYgKHBsYW5ldC5wb3B1bGF0aW9uICE9IFwidW5rbm93blwiKSB7XG4gICAgICAgICAgaWYgKHBhcnNlSW50KHBsYW5ldC5wb3B1bGF0aW9uLCAxMCkgPiBtYXgpIHtcbiAgICAgICAgICAgIG1heCA9IHBhcnNlSW50KHBsYW5ldC5wb3B1bGF0aW9uLCAxMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBtYXhQb3B1bGF0aW9uOiBtYXggfSk7ICAgIFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICBsZXQgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgbGV0IHN0b3JlRGF0YSA9IHN0b3JlLmdldFN0YXRlKCk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC1zbS0xMiBuby1wYWRkaW5nIHBsYW5ldHMtY29tcG9uZW50XCI+XG4gICAgICAgICAgPFNlYXJjaEJveCBzZWFyY2g9e3RoaXMuc2VhcmNofSAvPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dnZWRpbi11c2VyXCI+XG4gICAgICAgICAgICBMb2dnZWQgSW4gVXNlciAtIHsgc3RvcmVEYXRhLmxvZ2luUmVkdWNlci51c2VyRGV0YWlscy5uYW1lIH1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC1zbS0xMiBwbGFuZXRzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBsYW5ldHMubWFwKGZ1bmN0aW9uIChwbGFuZXQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBsYW5ldC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzdGF0ZS5zZWFyY2hLZXl3b3JkLnRvTG93ZXJDYXNlKCkpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBwbGFuZXQucG9wdWxhdGlvbiA9PT0gJ3Vua25vd24nID8gMTAwIDogMTAwICsgKCAzNTAgKiAoIHBhcnNlSW50KHBsYW5ldC5wb3B1bGF0aW9uLCAxMCkgIC8gc3RhdGUubWF4UG9wdWxhdGlvbiApICkgKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmFuZG9tQ29sb3IoKSxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsYW5ldHNcIlxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsgJ1BsYW5ldCBOYW1lOiAnICsgcGxhbmV0Lm5hbWUgKyAnOyBQbGFuZXQgUG9wdWxhdGlvbjogJyArIHBsYW5ldC5wb3B1bGF0aW9uIH1cbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGxhbmV0LW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcGxhbmV0Lm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbGFuZXQtcG9wdWxhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyBwb3B1bGF0aW9uRm9ybWF0Q29udmVydGVyKHBsYW5ldC5wb3B1bGF0aW9uKSB9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSkuZmlsdGVyKGZ1bmN0aW9uICh1cGRhdGVkUGxhbmV0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHVwZGF0ZWRQbGFuZXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgY29sLXNtLTEyIHBsYW5ldHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUucGxhbmV0cy5tYXAoZnVuY3Rpb24gKHBsYW5ldCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAocGxhbmV0Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHN0YXRlLnNlYXJjaEtleXdvcmQudG9Mb3dlckNhc2UoKSkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHBsYW5ldC5wb3B1bGF0aW9uID09PSAndW5rbm93bicgPyAxMDAgOiAxMDAgKyAoIDM1MCAqICggcGFyc2VJbnQocGxhbmV0LnBvcHVsYXRpb24sIDEwKSAgLyBzdGF0ZS5tYXhQb3B1bGF0aW9uICkgKSArICdweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByYW5kb21Db2xvcigpLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGxhbmV0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eyAnUGxhbmV0IE5hbWU6ICcgKyBwbGFuZXQubmFtZSArICc7IFBsYW5ldCBQb3B1bGF0aW9uOiAnICsgcGxhbmV0LnBvcHVsYXRpb24gfVxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbGFuZXQtbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyBwbGFuZXQubmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsYW5ldC1wb3B1bGF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IHBvcHVsYXRpb25Gb3JtYXRDb252ZXJ0ZXIocGxhbmV0LnBvcHVsYXRpb24pIH1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKHVwZGF0ZWRQbGFuZXQpIHtcbiAgICAgICAgICAgICAgICBpZiAodXBkYXRlZFBsYW5ldCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogPFBsYW5ldFRhYmxlLz4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbn07XG5cblBsYW5ldHMuY29udGV4dFR5cGVzID0ge1xuICBzdG9yZTogUHJvcFR5cGVzLm9iamVjdFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxhbmV0cztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hCb3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aW1lclNldDogZmFsc2UsXG4gICAgICBzZWFyY2hDb3VudDogMCxcbiAgICAgIGVycm9yTWVzc2FnZTogJycsXG4gICAgICBzZWFyY2hUaHJlc2hvbGRJblNlY29uZHM6IDYwLFxuICAgIH1cbiAgfVxuXG4gIHNldFRpbWVyKCkge1xuICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWFyY2hDb3VudDogMCxcbiAgICAgICAgZXJyb3JNZXNzYWdlOiAnJyxcbiAgICAgICAgdGltZXJTZXQ6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfSwgMTAwMCAqIHRoaXMuc3RhdGUuc2VhcmNoVGhyZXNob2xkSW5TZWNvbmRzKTtcbiAgfVxuXG4gIHNlYXJjaFBsYW5ldHMgPSAoZSkgPT4ge1xuICAgIGxldCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQsIHN0b3JlRGF0YSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gICAgaWYgKHRoaXMuc3RhdGUudGltZXJTZXQgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnN0YXRlLnRpbWVyU2V0ID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2V0VGltZXIoKTtcbiAgICB9XG5cbiAgICBpZiAoc3RvcmVEYXRhLmxvZ2luUmVkdWNlci51c2VyRGV0YWlscy5uYW1lICE9PSBcIkx1a2UgU2t5d2Fsa2VyXCIpIHtcbiAgICAgIGlmICggdGhpcy50aW1lciAmJiB0aGlzLnN0YXRlLnNlYXJjaENvdW50IDw9IDE1ICkge1xuICAgICAgICB0aGlzLnByb3BzLnNlYXJjaChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hDb3VudDogdGhpcy5zdGF0ZS5zZWFyY2hDb3VudCsxIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zdGF0ZS5zZWFyY2hDb3VudCA9PT0gMTYpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5zZWFyY2goJycpO1xuICAgICAgICB0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSA9ICdZb3UgYXJlIG5vdCBhbGxvd2VkIHRvIHBlcmZvcm0gbW9yZSB0aGFuIDE1IHNlYXJjaGVzIHBlciBtaW51dGUnO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoQ291bnQ6IHRoaXMuc3RhdGUuc2VhcmNoQ291bnQrMSB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9wcy5zZWFyY2goZS50YXJnZXQudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgY29sLXNtLTEyIG5vLXBhZGRpbmdcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC1zbS0xMiBzZWFyY2gtYm94XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgdGhlIHBsYW5ldHNcIlxuICAgICAgICAgIG9uS2V5VXA9e3RoaXMuc2VhcmNoUGxhbmV0c31cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JcIj5cbiAgICAgICAgICB7IHRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlIH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblNlYXJjaEJveC5jb250ZXh0VHlwZXMgPSB7XG4gIHN0b3JlOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuIiwiaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9uLXR5cGVzLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUxvZ2luQnRuU3RhdHVzKHN0YXR1cykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvbnMuVE9HR0xFX0xPR0lOX0JUTl9TVEFUVVMsXG4gICAgc3RhdHVzLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dpbkVycm9yTWVzc2FnZUFjdGlvbihtZXNzYWdlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogYWN0aW9ucy5MT0dJTl9FUlJPUixcbiAgICBtZXNzYWdlLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dnZWRJblVzZXJEZXRhaWxzU2F2ZShkZXRhaWxzKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogYWN0aW9ucy5TQVZFX1VTRVJfREVUQUlMUyxcbiAgICBkZXRhaWxzLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dpbkFjdGlvbihwcm9wcywgdXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZmV0Y2goXCJodHRwczovL3N3YXBpLmNvL2FwaS9wZW9wbGUvP3NlYXJjaD1cIisgdXNlcm5hbWUpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAudGhlbihkYXRhID0+e1xuICAgICAgICAgICAgbGV0IHVzZXJzID0gZGF0YS5yZXN1bHRzICwgdXNlckZvdW5kID0gZmFsc2U7XG4gICAgICAgIGlmICh1c2Vycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dpbkVycm9yTWVzc2FnZUFjdGlvbihcIk5vIHVzZXJzIGZvdW5kIHdpdGggdGhlIG5hbWUgb2YgXCIgKyB1c2VybmFtZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVzZXJzLmZvckVhY2goKHVzZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAodXNlci5uYW1lID09PSB1c2VybmFtZSAmJiAgdXNlci5iaXJ0aF95ZWFyID09PSBwYXNzd29yZCkge1xuICAgICAgICAgICAgICBkaXNwYXRjaChsb2dnZWRJblVzZXJEZXRhaWxzU2F2ZSh1c2VyKSk7XG4gICAgICAgICAgICAgIHByb3BzLmhpc3RvcnkucHVzaCgnL3BsYW5ldHMnKTtcbiAgICAgICAgICAgICAgdXNlckZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoIXVzZXJGb3VuZCkge1xuICAgICAgICAgICAgZGlzcGF0Y2gobG9naW5FcnJvck1lc3NhZ2VBY3Rpb24oXCJQbGVhc2UgY2hlY2sgeW91ciB1c2VybmFtZSBvciBwYXNzd29yZFwiKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRpc3BhdGNoKHRvZ2dsZUxvZ2luQnRuU3RhdHVzKHRydWUpKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGRpc3BhdGNoKGxvZ2luRXJyb3JNZXNzYWdlQWN0aW9uKGVycm9yKSk7XG4gICAgICAgIGRpc3BhdGNoKHRvZ2dsZUxvZ2luQnRuU3RhdHVzKHRydWUpKTtcbiAgICAgIH0pO1xuICAgIH07XG59XG4iLCJjb25zdCBhY3Rpb25zID0ge1xuICAnVE9HR0xFX0xPR0lOX0JUTl9TVEFUVVMnOiAnVE9HR0xFX0xPR0lOX0JUTl9TVEFUVVMnLFxuICAnTE9HSU5fRVJST1InOiAnTE9HSU5fRVJST1JfTUVTU0FHRScsXG4gICdTQVZFX1VTRVJfREVUQUlMUyc6ICdMT0dHRURJTl9VU0VSX0RFVEFJTFNfU0FWRScsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjdGlvbnM7XG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMsIGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBsb2dpblJlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXJzL2xvZ2luLXJlZHVjZXIuanMnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICdyZWR1eC1sb2dnZXInO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcblxubGV0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHsgbG9naW5SZWR1Y2VyIH0pO1xubGV0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gIHJlZHVjZXJzLFxuICBhcHBseU1pZGRsZXdhcmUobG9nZ2VyLCB0aHVuaylcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGxvZ2luUmVkdWNlcihzdGF0ZSA9IHtcbiAgbG9naW5CdG5FbmFibGVkU3RhdHVzOiB0cnVlLFxuICBlcnJNc2c6ICcnLFxuICB1c2VyRGV0YWlsczogJycsXG59LCBhY3Rpb24pIHtcbiAgbGV0IGxhdGVzdFN0YXRlID0ge307XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdUT0dHTEVfTE9HSU5fQlROX1NUQVRVUyc6XG4gICAgICBsYXRlc3RTdGF0ZSA9IHsgLi4uc3RhdGUsIGxvZ2luQnRuRW5hYmxlZFN0YXR1czogYWN0aW9uLnN0YXR1cyB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnTE9HSU5fRVJST1JfTUVTU0FHRSc6XG4gICAgICBsYXRlc3RTdGF0ZSA9IHsgLi4uc3RhdGUsIGVyck1zZzogYWN0aW9uLm1lc3NhZ2UgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0xPR0dFRElOX1VTRVJfREVUQUlMU19TQVZFJzpcbiAgICAgIGxhdGVzdFN0YXRlID0geyAuLi5zdGF0ZSwgdXNlckRldGFpbHM6IGFjdGlvbi5kZXRhaWxzIH07XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgbGF0ZXN0U3RhdGUgPSBzdGF0ZTtcbiAgfVxuXG4gIHJldHVybiBsYXRlc3RTdGF0ZTtcbn07XG4iLCJcbmxldCBoZXhDb2RlID0gWycwJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJ107XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21Db2xvcigpIHtcbiAgbGV0IGhleENvbG9yID0gJyMnLCBjb3VudGVyID0gMDtcbiAgZm9yICg7IGNvdW50ZXIgPCA2IDsgY291bnRlcisrKSB7XG4gICAgaGV4Q29sb3IgKz0gaGV4Q29kZVtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqMTUpXTtcbiAgfVxuXG4gIHJldHVybiBoZXhDb2xvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRpb25Gb3JtYXRDb252ZXJ0ZXIocG9wdWxhdGlvbikge1xuICBsZXQgbWlsZXN0b25lcyA9IFtcbiAgICB7IHZhbHVlOiAxMDAwLCBmb3JtYXQ6ICdLJyB9LFxuICAgIHsgdmFsdWU6IDEwMDAwMDAsIGZvcm1hdDogJ00nIH0sXG4gICAgeyB2YWx1ZTogMTAwMDAwMDAwMCwgZm9ybWF0OiAnQicgfVxuICBdLCBpID0gbWlsZXN0b25lcy5sZW5ndGggLSAxLCBkaXNwbGF5ID0gJyc7XG4gIGZvciAoOyBpID49IDA7IGktLSkge1xuICAgIGlmICgocG9wdWxhdGlvbiAvIG1pbGVzdG9uZXNbaV0udmFsdWUpID49IDEpIHtcbiAgICAgIGRpc3BsYXkgPSAoXG4gICAgICAgIChcbiAgICAgICAgICBNYXRoLmZsb29yKHBvcHVsYXRpb24gLyBtaWxlc3RvbmVzW2ldLnZhbHVlKVxuICAgICAgICAgICsgJy4nXG4gICAgICAgICAgKyBNYXRoLmZsb29yKChwb3B1bGF0aW9uICUgbWlsZXN0b25lc1tpXS52YWx1ZSkgLyAobWlsZXN0b25lc1tpXS52YWx1ZSAvIDEwKSlcbiAgICAgICAgKVxuICAgICAgICArIG1pbGVzdG9uZXNbaV0uZm9ybWF0XG4gICAgICApO1xuICAgICAgcmV0dXJuIGRpc3BsYXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBvcHVsYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQbGFuZXRzKHBhZ2VObykge1xuICBsZXQgcGxhbmV0RGF0YT1cIlwiO1xuICAgIGZldGNoKFwiaHR0cHM6Ly9zd2FwaS5jby9hcGkvcGxhbmV0cy8/cGFnZT1cIiArIHBhZ2VObylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgcGxhbmV0RGF0YSA9IGRhdGEucmVzdWx0c1xuICAgICAgfVxuICAgICkgXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhwbGFuZXREYXRhKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==