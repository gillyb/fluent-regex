/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./RegexLiteral.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./RegexLiteral.ts":
/*!*************************!*\
  !*** ./RegexLiteral.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar RegexLiteral = /** @class */ (function () {\n    function RegexLiteral(regexString) {\n        this.regexString = regexString;\n    }\n    RegexLiteral.prototype.toRegexString = function () {\n        return this.regexString;\n    };\n    RegexLiteral.prototype.toRegex = function () {\n        return new RegExp(this.toRegexString());\n    };\n    RegexLiteral.prototype.exactAmount = function (amount) {\n        this.regexQuantifier = \"{\" + amount + \"}\";\n        return this;\n    };\n    RegexLiteral.prototype.upToAmount = function (amount) {\n        this.regexQuantifier = \"{,\" + amount + \"}\";\n        return this;\n    };\n    RegexLiteral.anyDigit = function () {\n        return new this('\\\\d');\n    };\n    RegexLiteral.anyLetter = function () {\n        return new this('[a-zA-Z]');\n    };\n    return RegexLiteral;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegexLiteral);\n\n\n//# sourceURL=webpack:///./RegexLiteral.ts?");

/***/ })

/******/ });