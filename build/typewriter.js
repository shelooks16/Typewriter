(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("typewriter", [], factory);
	else if(typeof exports === 'object')
		exports["typewriter"] = factory();
	else
		root["typewriter"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/TypeWriter.js":
/*!***************************!*\
  !*** ./src/TypeWriter.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar TypeWriter =\n/*#__PURE__*/\nfunction () {\n  function TypeWriter(elementClass, _ref) {\n    var props = _extends({}, _ref);\n\n    _classCallCheck(this, TypeWriter);\n\n    this.el = document.querySelector(\".\".concat(elementClass));\n    this.staticText = props && props.staticText || '';\n    this.text = props && props.text || ['Default', 'Text'];\n    this.speed = props && parseInt(props.speed, 10) || 1000;\n    this.pause = props && props.pause || 1500;\n    this.cursorStyle = props && props.cursorStyle || {\n      color: '#000',\n      width: '2px'\n    };\n    this.wordsTyped = 0;\n    this.currentLetters = '';\n    this.isDeleting = false;\n    this.isTyping = false;\n    this.timer = 0;\n    this.staticEl = this.el.appendChild(document.createElement('span'));\n    this.staticEl.textContent = this.staticText;\n    this.typingEl = this.el.appendChild(document.createElement('span'));\n  }\n\n  _createClass(TypeWriter, [{\n    key: \"start\",\n    value: function start() {\n      if (this.isTyping) {\n        return this;\n      }\n\n      this.isTyping = true;\n\n      this._typeCurrentLetters();\n\n      return this;\n    }\n  }, {\n    key: \"stop\",\n    value: function stop(ms) {\n      var _this = this;\n\n      clearTimeout(this.timer);\n      this.isTyping = false;\n\n      if (ms) {\n        setTimeout(function () {\n          _this._typeCurrentLetters();\n        }, ms);\n      }\n\n      return this;\n    }\n  }, {\n    key: \"applyChanges\",\n    value: function applyChanges(changes) {\n      var _this2 = this;\n\n      Object.entries(changes).forEach(function (_ref2) {\n        var _ref3 = _slicedToArray(_ref2, 2),\n            prop = _ref3[0],\n            val = _ref3[1];\n\n        var hasProperty = Object.prototype.hasOwnProperty.call(_this2, prop);\n\n        if (!hasProperty) {\n          console.error(prop, 'is invalid thus was not applied');\n        }\n\n        if (prop === 'cursorStyle') {\n          _this2[prop] = _objectSpread({}, _this2[prop], {}, val);\n        } else if (prop === 'speed' || prop === 'pause') {\n          _this2[prop] = parseInt(val, 10);\n        } else {\n          _this2[prop] = val;\n        }\n      });\n      return this;\n    }\n  }, {\n    key: \"_typeCurrentLetters\",\n    value: function _typeCurrentLetters() {\n      var _this3 = this;\n\n      var i = this.wordsTyped % this.text.length;\n      var currentWord = this.text[i];\n      var typeSpeed = this.speed / currentWord.length;\n      typeSpeed = this.isDeleting ? typeSpeed /= 2 : typeSpeed;\n      this.currentLetters = this._getCurrentLetters(currentWord);\n      this.staticEl.textContent = \"\".concat(this.staticText, \" \");\n      this.typingEl.style.borderRight = \"\".concat(this.cursorStyle.width || '2px', \" solid \").concat(this.cursorStyle.color || '#000');\n      this.typingEl.textContent = this.currentLetters;\n\n      if (!this.isDeleting && this.currentLetters === currentWord) {\n        typeSpeed = this.pause;\n        this.isDeleting = true;\n      } else if (this.isDeleting && this.currentLetters === '') {\n        this.isDeleting = false;\n        this.wordsTyped++;\n        typeSpeed = 500;\n      }\n\n      this.timer = setTimeout(function () {\n        _this3._typeCurrentLetters();\n      }, typeSpeed);\n    }\n  }, {\n    key: \"_getCurrentLetters\",\n    value: function _getCurrentLetters(currentWord) {\n      if (this.isDeleting) {\n        return currentWord.substring(0, this.currentLetters.length - 1);\n      }\n\n      return currentWord.substring(0, this.currentLetters.length + 1);\n    }\n  }]);\n\n  return TypeWriter;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TypeWriter);\n\n//# sourceURL=webpack://typewriter/./src/TypeWriter.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TypeWriter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TypeWriter */ \"./src/TypeWriter.js\");\n\n/* eslint-disable */\n\n(function (self) {\n  self.TypeWriter = _TypeWriter__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n})(self);\n/* eslint-enable */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_TypeWriter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://typewriter/./src/index.js?");

/***/ })

/******/ });
});