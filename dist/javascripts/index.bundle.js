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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/bundles/index/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/bundles/index/components/QuestionBox.js":
/*!********************************************************!*\
  !*** ./client/bundles/index/components/QuestionBox.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _newsha = __webpack_require__(/*! newsha */ "./node_modules/newsha/lib/index.js");

var _newsha2 = _interopRequireDefault(_newsha);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var QuestionBox = function () {
    function QuestionBox() {
        _classCallCheck(this, QuestionBox);

        this.questionBox = document.querySelector('.question-box');
        this.newsha = new Newsha({ lang: 'en' });
        this.init();
        this.newsha.listen();
    }

    _createClass(QuestionBox, [{
        key: 'init',
        value: function init() {
            var newsha = this.newsha;
            newsha.any(function (text) {
                console.log(text);
            });
        }
    }]);

    return QuestionBox;
}();

module.exports = QuestionBox;

/***/ }),

/***/ "./client/bundles/index/index.js":
/*!***************************************!*\
  !*** ./client/bundles/index/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _QuestionBox = __webpack_require__(/*! ./components/QuestionBox */ "./client/bundles/index/components/QuestionBox.js");

var _QuestionBox2 = _interopRequireDefault(_QuestionBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function App() {
    _classCallCheck(this, App);

    this.questionBox = new _QuestionBox2.default();
};

window.app = new App();

/***/ }),

/***/ "./node_modules/leven/index.js":
/*!*************************************!*\
  !*** ./node_modules/leven/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable no-nested-ternary */

var arr = [];
var charCodeCache = [];

module.exports = function (a, b) {
	if (a === b) {
		return 0;
	}

	var swap = a;

	// Swapping the strings if `a` is longer than `b` so we know which one is the
	// shortest & which one is the longest
	if (a.length > b.length) {
		a = b;
		b = swap;
	}

	var aLen = a.length;
	var bLen = b.length;

	if (aLen === 0) {
		return bLen;
	}

	if (bLen === 0) {
		return aLen;
	}

	// Performing suffix trimming:
	// We can linearly drop suffix common to both strings since they
	// don't increase distance at all
	// Note: `~-` is the bitwise way to perform a `- 1` operation
	while (aLen > 0 && (a.charCodeAt(~-aLen) === b.charCodeAt(~-bLen))) {
		aLen--;
		bLen--;
	}

	if (aLen === 0) {
		return bLen;
	}

	// Performing prefix trimming
	// We can linearly drop prefix common to both strings since they
	// don't increase distance at all
	var start = 0;

	while (start < aLen && (a.charCodeAt(start) === b.charCodeAt(start))) {
		start++;
	}

	aLen -= start;
	bLen -= start;

	if (aLen === 0) {
		return bLen;
	}

	var bCharCode;
	var ret;
	var tmp;
	var tmp2;
	var i = 0;
	var j = 0;

	while (i < aLen) {
		charCodeCache[start + i] = a.charCodeAt(start + i);
		arr[i] = ++i;
	}

	while (j < bLen) {
		bCharCode = b.charCodeAt(start + j);
		tmp = j++;
		ret = j;

		for (i = 0; i < aLen; i++) {
			tmp2 = bCharCode === charCodeCache[start + i] ? tmp : tmp + 1;
			tmp = arr[i];
			ret = arr[i] = tmp > ret ? tmp2 > ret ? ret + 1 : tmp2 : tmp2 > tmp ? tmp + 1 : tmp2;
		}
	}

	return ret;
};


/***/ }),

/***/ "./node_modules/newsha/lib/index.js":
/*!******************************************!*\
  !*** ./node_modules/newsha/lib/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _similarity = __webpack_require__(/*! similarity */ "./node_modules/similarity/index.js");

var _similarity2 = _interopRequireDefault(_similarity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

String.prototype.faOptimize = function () {
    return this.replace(/ص/g, 'س').replace(/ث/g, 'س').replace(/ظ/g, 'ز').replace(/ذ/g, 'ز').replace(/ض/g, 'ز').replace(/ط/g, 'ت').replace(/ح/g, 'ه').replace(/غ/g, 'ق');
};

var Newsha = function () {
    function Newsha() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Newsha);

        this.commands = [];
        this.collections = {};
        this.minimumConfidence = 0.4;
        this.config = config;
        this.anyListeners = [];
        this.recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
        this.recognition.lang = config.lang || 'fa';
        this.recognition.continuous = config.continuous || false;
        this.recognition.onresult = this.onResult.bind(this);
        this.recognition.onend = this.onEnd.bind(this);
    }

    _createClass(Newsha, [{
        key: 'onResult',
        value: function onResult(event) {
            var ret = "";
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = event.results[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var result = _step.value;
                    ret += result[0].transcript;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.anyListeners[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var listener = _step2.value;
                    listener(ret);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            this.checkResults(ret);
        }
    }, {
        key: 'onEnd',
        value: function onEnd() {
            this.listen();
        }
    }, {
        key: 'checkSingleCommand',
        value: function checkSingleCommand(command, text) {
            command = command.trim();
            var confidence = 0;
            var openningCollection = command.indexOf('{');
            if (openningCollection !== -1) {
                var closingCollection = command.indexOf('}');
                var collectionName = command.substr(openningCollection + 1, closingCollection - openningCollection - 1);
                var choosedItem = null;
                var highestConfidence = 0;
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = this.collections[collectionName][Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var item = _step3.value;

                        confidence = 0;
                        var _iteratorNormalCompletion4 = true;
                        var _didIteratorError4 = false;
                        var _iteratorError4 = undefined;

                        try {
                            for (var _iterator4 = text.split(' ')[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                var word = _step4.value;

                                confidence = Math.max((0, _similarity2.default)(word.faOptimize(), item.name.faOptimize()), confidence);
                            }
                        } catch (err) {
                            _didIteratorError4 = true;
                            _iteratorError4 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                    _iterator4.return();
                                }
                            } finally {
                                if (_didIteratorError4) {
                                    throw _iteratorError4;
                                }
                            }
                        }

                        if (highestConfidence < confidence) {
                            highestConfidence = confidence;
                            choosedItem = item;
                        }
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }

                return {
                    collectionName: collectionName,
                    data: choosedItem,
                    confidence: highestConfidence,
                    isTrue: highestConfidence >= this.minimumConfidence
                };
            }
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                for (var _iterator5 = text.split(' ')[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var _word = _step5.value;

                    confidence = Math.max((0, _similarity2.default)(_word.faOptimize(), command.faOptimize()), confidence);
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }

            return {
                confidence: confidence,
                isTrue: confidence >= this.minimumConfidence
            };
        }
    }, {
        key: 'checkResults',
        value: function checkResults(text) {
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = this.commands[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var command = _step6.value;

                    var resultObject = {
                        command: command.command,
                        transcript: text,
                        collections: {}
                    };
                    var shouldRun = true;
                    var confidence = 0;
                    var andCommands = command.command.split('&&');
                    var _iteratorNormalCompletion7 = true;
                    var _didIteratorError7 = false;
                    var _iteratorError7 = undefined;

                    try {
                        for (var _iterator7 = andCommands[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                            var cmd = _step7.value;

                            var result = this.checkSingleCommand(cmd, text);
                            shouldRun = shouldRun && result.isTrue;
                            confidence += result.confidence;
                            if (result.data) {
                                resultObject.collections[result.collectionName] = result.data.value;
                            }
                        }
                    } catch (err) {
                        _didIteratorError7 = true;
                        _iteratorError7 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion7 && _iterator7.return) {
                                _iterator7.return();
                            }
                        } finally {
                            if (_didIteratorError7) {
                                throw _iteratorError7;
                            }
                        }
                    }

                    confidence /= andCommands.length;
                    resultObject.confidence = confidence;

                    if (shouldRun) {
                        command.callback(resultObject);
                    }
                }
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                        _iterator6.return();
                    }
                } finally {
                    if (_didIteratorError6) {
                        throw _iteratorError6;
                    }
                }
            }
        }
    }, {
        key: 'command',
        value: function command(cmd, func) {
            this.commands.push({
                command: cmd,
                callback: func
            });
        }
    }, {
        key: 'collection',
        value: function collection(name, list) {
            var middleware = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (item) {
                return item;
            };

            this.collections[name] = [];
            var _iteratorNormalCompletion8 = true;
            var _didIteratorError8 = false;
            var _iteratorError8 = undefined;

            try {
                for (var _iterator8 = list[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                    var item = _step8.value;
                    this.collections[name].push({
                        name: item,
                        value: middleware(item)
                    });
                }
            } catch (err) {
                _didIteratorError8 = true;
                _iteratorError8 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion8 && _iterator8.return) {
                        _iterator8.return();
                    }
                } finally {
                    if (_didIteratorError8) {
                        throw _iteratorError8;
                    }
                }
            }

            return this.collections[name];
        }
    }, {
        key: 'any',
        value: function any(func) {
            this.anyListeners.push(func);
        }
    }, {
        key: 'listen',
        value: function listen() {
            this.recognition.start();
        }
    }, {
        key: 'stop',
        value: function stop() {
            this.recognition.stop();
        }
    }]);

    return Newsha;
}();

module.exports = window.Newsha = Newsha;

/***/ }),

/***/ "./node_modules/similarity/index.js":
/*!******************************************!*\
  !*** ./node_modules/similarity/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var distance = __webpack_require__(/*! leven */ "./node_modules/leven/index.js")

module.exports = function(a,b) {
  if (!a || !b || !a.length || !b.length) return 0
  if (a === b) return 1
  var d = distance(a.toLowerCase(),b.toLowerCase())
  var longest = Math.max(a.length, b.length)
  return (longest-d)/longest
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2J1bmRsZXMvaW5kZXgvY29tcG9uZW50cy9RdWVzdGlvbkJveC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvYnVuZGxlcy9pbmRleC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGV2ZW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25ld3NoYS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbWlsYXJpdHkvaW5kZXguanMiXSwibmFtZXMiOlsiUXVlc3Rpb25Cb3giLCJxdWVzdGlvbkJveCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm5ld3NoYSIsIk5ld3NoYSIsImxhbmciLCJpbml0IiwibGlzdGVuIiwiYW55IiwiY29uc29sZSIsImxvZyIsInRleHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiQXBwIiwid2luZG93IiwiYXBwIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7Ozs7Ozs7O0lBRU1BLFc7QUFFRiwyQkFBZTtBQUFBOztBQUNYLGFBQUtD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Q0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVELHdDOzs7Ozs7Ozs7OztBQzNVQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2phdmFzY3JpcHRzL2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NsaWVudC9idW5kbGVzL2luZGV4L2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IG5ld3NoYSBmcm9tICduZXdzaGEnXG5cbmNsYXNzIFF1ZXN0aW9uQm94IHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5xdWVzdGlvbkJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWVzdGlvbi1ib3gnKTtcbiAgICAgICAgdGhpcy5uZXdzaGEgPSBuZXcgTmV3c2hhKHsgbGFuZzogJ2VuJyB9KTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMubmV3c2hhLmxpc3RlbigpO1xuICAgIH1cblxuICAgIGluaXQgKCkge1xuICAgICAgICBjb25zdCBuZXdzaGEgPSB0aGlzLm5ld3NoYTtcbiAgICAgICAgbmV3c2hhLmFueSh0ZXh0ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRleHQpXG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXN0aW9uQm94OyIsImltcG9ydCBRdWVzdGlvbkJveCBmcm9tICcuL2NvbXBvbmVudHMvUXVlc3Rpb25Cb3gnXG5cbmNsYXNzIEFwcCB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMucXVlc3Rpb25Cb3ggPSBuZXcgUXVlc3Rpb25Cb3goKTtcbiAgICAgICAgXG4gICAgfVxuXG59XG5cbndpbmRvdy5hcHAgPSBuZXcgQXBwIiwiLyogZXNsaW50LWRpc2FibGUgbm8tbmVzdGVkLXRlcm5hcnkgKi9cbid1c2Ugc3RyaWN0JztcbnZhciBhcnIgPSBbXTtcbnZhciBjaGFyQ29kZUNhY2hlID0gW107XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGEsIGIpIHtcblx0aWYgKGEgPT09IGIpIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdHZhciBzd2FwID0gYTtcblxuXHQvLyBTd2FwcGluZyB0aGUgc3RyaW5ncyBpZiBgYWAgaXMgbG9uZ2VyIHRoYW4gYGJgIHNvIHdlIGtub3cgd2hpY2ggb25lIGlzIHRoZVxuXHQvLyBzaG9ydGVzdCAmIHdoaWNoIG9uZSBpcyB0aGUgbG9uZ2VzdFxuXHRpZiAoYS5sZW5ndGggPiBiLmxlbmd0aCkge1xuXHRcdGEgPSBiO1xuXHRcdGIgPSBzd2FwO1xuXHR9XG5cblx0dmFyIGFMZW4gPSBhLmxlbmd0aDtcblx0dmFyIGJMZW4gPSBiLmxlbmd0aDtcblxuXHRpZiAoYUxlbiA9PT0gMCkge1xuXHRcdHJldHVybiBiTGVuO1xuXHR9XG5cblx0aWYgKGJMZW4gPT09IDApIHtcblx0XHRyZXR1cm4gYUxlbjtcblx0fVxuXG5cdC8vIFBlcmZvcm1pbmcgc3VmZml4IHRyaW1taW5nOlxuXHQvLyBXZSBjYW4gbGluZWFybHkgZHJvcCBzdWZmaXggY29tbW9uIHRvIGJvdGggc3RyaW5ncyBzaW5jZSB0aGV5XG5cdC8vIGRvbid0IGluY3JlYXNlIGRpc3RhbmNlIGF0IGFsbFxuXHQvLyBOb3RlOiBgfi1gIGlzIHRoZSBiaXR3aXNlIHdheSB0byBwZXJmb3JtIGEgYC0gMWAgb3BlcmF0aW9uXG5cdHdoaWxlIChhTGVuID4gMCAmJiAoYS5jaGFyQ29kZUF0KH4tYUxlbikgPT09IGIuY2hhckNvZGVBdCh+LWJMZW4pKSkge1xuXHRcdGFMZW4tLTtcblx0XHRiTGVuLS07XG5cdH1cblxuXHRpZiAoYUxlbiA9PT0gMCkge1xuXHRcdHJldHVybiBiTGVuO1xuXHR9XG5cblx0Ly8gUGVyZm9ybWluZyBwcmVmaXggdHJpbW1pbmdcblx0Ly8gV2UgY2FuIGxpbmVhcmx5IGRyb3AgcHJlZml4IGNvbW1vbiB0byBib3RoIHN0cmluZ3Mgc2luY2UgdGhleVxuXHQvLyBkb24ndCBpbmNyZWFzZSBkaXN0YW5jZSBhdCBhbGxcblx0dmFyIHN0YXJ0ID0gMDtcblxuXHR3aGlsZSAoc3RhcnQgPCBhTGVuICYmIChhLmNoYXJDb2RlQXQoc3RhcnQpID09PSBiLmNoYXJDb2RlQXQoc3RhcnQpKSkge1xuXHRcdHN0YXJ0Kys7XG5cdH1cblxuXHRhTGVuIC09IHN0YXJ0O1xuXHRiTGVuIC09IHN0YXJ0O1xuXG5cdGlmIChhTGVuID09PSAwKSB7XG5cdFx0cmV0dXJuIGJMZW47XG5cdH1cblxuXHR2YXIgYkNoYXJDb2RlO1xuXHR2YXIgcmV0O1xuXHR2YXIgdG1wO1xuXHR2YXIgdG1wMjtcblx0dmFyIGkgPSAwO1xuXHR2YXIgaiA9IDA7XG5cblx0d2hpbGUgKGkgPCBhTGVuKSB7XG5cdFx0Y2hhckNvZGVDYWNoZVtzdGFydCArIGldID0gYS5jaGFyQ29kZUF0KHN0YXJ0ICsgaSk7XG5cdFx0YXJyW2ldID0gKytpO1xuXHR9XG5cblx0d2hpbGUgKGogPCBiTGVuKSB7XG5cdFx0YkNoYXJDb2RlID0gYi5jaGFyQ29kZUF0KHN0YXJ0ICsgaik7XG5cdFx0dG1wID0gaisrO1xuXHRcdHJldCA9IGo7XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgYUxlbjsgaSsrKSB7XG5cdFx0XHR0bXAyID0gYkNoYXJDb2RlID09PSBjaGFyQ29kZUNhY2hlW3N0YXJ0ICsgaV0gPyB0bXAgOiB0bXAgKyAxO1xuXHRcdFx0dG1wID0gYXJyW2ldO1xuXHRcdFx0cmV0ID0gYXJyW2ldID0gdG1wID4gcmV0ID8gdG1wMiA+IHJldCA/IHJldCArIDEgOiB0bXAyIDogdG1wMiA+IHRtcCA/IHRtcCArIDEgOiB0bXAyO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3NpbWlsYXJpdHkgPSByZXF1aXJlKCdzaW1pbGFyaXR5Jyk7XG5cbnZhciBfc2ltaWxhcml0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1pbGFyaXR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuU3RyaW5nLnByb3RvdHlwZS5mYU9wdGltaXplID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2UoL9i1L2csICfYsycpLnJlcGxhY2UoL9irL2csICfYsycpLnJlcGxhY2UoL9i4L2csICfYsicpLnJlcGxhY2UoL9iwL2csICfYsicpLnJlcGxhY2UoL9i2L2csICfYsicpLnJlcGxhY2UoL9i3L2csICfYqicpLnJlcGxhY2UoL9itL2csICfZhycpLnJlcGxhY2UoL9i6L2csICfZgicpO1xufTtcblxudmFyIE5ld3NoYSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOZXdzaGEoKSB7XG4gICAgICAgIHZhciBjb25maWcgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOZXdzaGEpO1xuXG4gICAgICAgIHRoaXMuY29tbWFuZHMgPSBbXTtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLm1pbmltdW1Db25maWRlbmNlID0gMC40O1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5hbnlMaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy5yZWNvZ25pdGlvbiA9IG5ldyAod2luZG93LlNwZWVjaFJlY29nbml0aW9uIHx8IHdpbmRvdy53ZWJraXRTcGVlY2hSZWNvZ25pdGlvbiB8fCB3aW5kb3cubW96U3BlZWNoUmVjb2duaXRpb24gfHwgd2luZG93Lm1zU3BlZWNoUmVjb2duaXRpb24pKCk7XG4gICAgICAgIHRoaXMucmVjb2duaXRpb24ubGFuZyA9IGNvbmZpZy5sYW5nIHx8ICdmYSc7XG4gICAgICAgIHRoaXMucmVjb2duaXRpb24uY29udGludW91cyA9IGNvbmZpZy5jb250aW51b3VzIHx8IGZhbHNlO1xuICAgICAgICB0aGlzLnJlY29nbml0aW9uLm9ucmVzdWx0ID0gdGhpcy5vblJlc3VsdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlY29nbml0aW9uLm9uZW5kID0gdGhpcy5vbkVuZC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhOZXdzaGEsIFt7XG4gICAgICAgIGtleTogJ29uUmVzdWx0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uUmVzdWx0KGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IGV2ZW50LnJlc3VsdHNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBfc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0ICs9IHJlc3VsdFswXS50cmFuc2NyaXB0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWU7XG4gICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IyID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IyID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSB0aGlzLmFueUxpc3RlbmVyc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMjsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IChfc3RlcDIgPSBfaXRlcmF0b3IyLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBfc3RlcDIudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyKHJldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvcjIgPSBlcnI7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgJiYgX2l0ZXJhdG9yMi5yZXR1cm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvcjIucmV0dXJuKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY2hlY2tSZXN1bHRzKHJldCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uRW5kJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uRW5kKCkge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW4oKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY2hlY2tTaW5nbGVDb21tYW5kJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNoZWNrU2luZ2xlQ29tbWFuZChjb21tYW5kLCB0ZXh0KSB7XG4gICAgICAgICAgICBjb21tYW5kID0gY29tbWFuZC50cmltKCk7XG4gICAgICAgICAgICB2YXIgY29uZmlkZW5jZSA9IDA7XG4gICAgICAgICAgICB2YXIgb3Blbm5pbmdDb2xsZWN0aW9uID0gY29tbWFuZC5pbmRleE9mKCd7Jyk7XG4gICAgICAgICAgICBpZiAob3Blbm5pbmdDb2xsZWN0aW9uICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHZhciBjbG9zaW5nQ29sbGVjdGlvbiA9IGNvbW1hbmQuaW5kZXhPZignfScpO1xuICAgICAgICAgICAgICAgIHZhciBjb2xsZWN0aW9uTmFtZSA9IGNvbW1hbmQuc3Vic3RyKG9wZW5uaW5nQ29sbGVjdGlvbiArIDEsIGNsb3NpbmdDb2xsZWN0aW9uIC0gb3Blbm5pbmdDb2xsZWN0aW9uIC0gMSk7XG4gICAgICAgICAgICAgICAgdmFyIGNob29zZWRJdGVtID0gbnVsbDtcbiAgICAgICAgICAgICAgICB2YXIgaGlnaGVzdENvbmZpZGVuY2UgPSAwO1xuICAgICAgICAgICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yMyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjMgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IzID0gdGhpcy5jb2xsZWN0aW9uc1tjb2xsZWN0aW9uTmFtZV1bU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDM7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSAoX3N0ZXAzID0gX2l0ZXJhdG9yMy5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gX3N0ZXAzLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWRlbmNlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3I0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3I0ID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjQgPSB0ZXh0LnNwbGl0KCcgJylbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDQ7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjQgPSAoX3N0ZXA0ID0gX2l0ZXJhdG9yNC5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNCA9IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdvcmQgPSBfc3RlcDQudmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlkZW5jZSA9IE1hdGgubWF4KCgwLCBfc2ltaWxhcml0eTIuZGVmYXVsdCkod29yZC5mYU9wdGltaXplKCksIGl0ZW0ubmFtZS5mYU9wdGltaXplKCkpLCBjb25maWRlbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvcjQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yNCA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNCAmJiBfaXRlcmF0b3I0LnJldHVybikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yNC5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yNDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhpZ2hlc3RDb25maWRlbmNlIDwgY29uZmlkZW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hlc3RDb25maWRlbmNlID0gY29uZmlkZW5jZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaG9vc2VkSXRlbSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IzID0gZXJyO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zICYmIF9pdGVyYXRvcjMucmV0dXJuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yMy5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGNob29zZWRJdGVtLFxuICAgICAgICAgICAgICAgICAgICBjb25maWRlbmNlOiBoaWdoZXN0Q29uZmlkZW5jZSxcbiAgICAgICAgICAgICAgICAgICAgaXNUcnVlOiBoaWdoZXN0Q29uZmlkZW5jZSA+PSB0aGlzLm1pbmltdW1Db25maWRlbmNlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNSA9IHRydWU7XG4gICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3I1ID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3I1ID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjUgPSB0ZXh0LnNwbGl0KCcgJylbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDU7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjUgPSAoX3N0ZXA1ID0gX2l0ZXJhdG9yNS5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNSA9IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF93b3JkID0gX3N0ZXA1LnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZGVuY2UgPSBNYXRoLm1heCgoMCwgX3NpbWlsYXJpdHkyLmRlZmF1bHQpKF93b3JkLmZhT3B0aW1pemUoKSwgY29tbWFuZC5mYU9wdGltaXplKCkpLCBjb25maWRlbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvcjUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yNSA9IGVycjtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNSAmJiBfaXRlcmF0b3I1LnJldHVybikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yNS5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yNTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb25maWRlbmNlOiBjb25maWRlbmNlLFxuICAgICAgICAgICAgICAgIGlzVHJ1ZTogY29uZmlkZW5jZSA+PSB0aGlzLm1pbmltdW1Db25maWRlbmNlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjaGVja1Jlc3VsdHMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2hlY2tSZXN1bHRzKHRleHQpIHtcbiAgICAgICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNiA9IHRydWU7XG4gICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3I2ID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3I2ID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjYgPSB0aGlzLmNvbW1hbmRzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA2OyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb242ID0gKF9zdGVwNiA9IF9pdGVyYXRvcjYubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjYgPSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb21tYW5kID0gX3N0ZXA2LnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHRPYmplY3QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kOiBjb21tYW5kLmNvbW1hbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2NyaXB0OiB0ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbnM6IHt9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHZhciBzaG91bGRSdW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29uZmlkZW5jZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhbmRDb21tYW5kcyA9IGNvbW1hbmQuY29tbWFuZC5zcGxpdCgnJiYnKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb243ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yNyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3I3ID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3I3ID0gYW5kQ29tbWFuZHNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDc7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjcgPSAoX3N0ZXA3ID0gX2l0ZXJhdG9yNy5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNyA9IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY21kID0gX3N0ZXA3LnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuY2hlY2tTaW5nbGVDb21tYW5kKGNtZCwgdGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdWxkUnVuID0gc2hvdWxkUnVuICYmIHJlc3VsdC5pc1RydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlkZW5jZSArPSByZXN1bHQuY29uZmlkZW5jZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0T2JqZWN0LmNvbGxlY3Rpb25zW3Jlc3VsdC5jb2xsZWN0aW9uTmFtZV0gPSByZXN1bHQuZGF0YS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3I3ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yNyA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNyAmJiBfaXRlcmF0b3I3LnJldHVybikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3I3LnJldHVybigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yNykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uZmlkZW5jZSAvPSBhbmRDb21tYW5kcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdE9iamVjdC5jb25maWRlbmNlID0gY29uZmlkZW5jZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkUnVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kLmNhbGxiYWNrKHJlc3VsdE9iamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvcjYgPSB0cnVlO1xuICAgICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yNiA9IGVycjtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNiAmJiBfaXRlcmF0b3I2LnJldHVybikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yNi5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yNjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tbWFuZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21tYW5kKGNtZCwgZnVuYykge1xuICAgICAgICAgICAgdGhpcy5jb21tYW5kcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBjb21tYW5kOiBjbWQsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb2xsZWN0aW9uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbGxlY3Rpb24obmFtZSwgbGlzdCkge1xuICAgICAgICAgICAgdmFyIG1pZGRsZXdhcmUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLmNvbGxlY3Rpb25zW25hbWVdID0gW107XG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjggPSB0cnVlO1xuICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yOCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yOCA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3I4ID0gbGlzdFtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwODsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uOCA9IChfc3RlcDggPSBfaXRlcmF0b3I4Lm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb244ID0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IF9zdGVwOC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xsZWN0aW9uc1tuYW1lXS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbWlkZGxld2FyZShpdGVtKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvcjggPSB0cnVlO1xuICAgICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yOCA9IGVycjtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uOCAmJiBfaXRlcmF0b3I4LnJldHVybikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yOC5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yODtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbnNbbmFtZV07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2FueScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhbnkoZnVuYykge1xuICAgICAgICAgICAgdGhpcy5hbnlMaXN0ZW5lcnMucHVzaChmdW5jKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbGlzdGVuJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbigpIHtcbiAgICAgICAgICAgIHRoaXMucmVjb2duaXRpb24uc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc3RvcCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICAgICAgdGhpcy5yZWNvZ25pdGlvbi5zdG9wKCk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTmV3c2hhO1xufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5OZXdzaGEgPSBOZXdzaGE7IiwidmFyIGRpc3RhbmNlID0gcmVxdWlyZShcImxldmVuXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYSxiKSB7XG4gIGlmICghYSB8fCAhYiB8fCAhYS5sZW5ndGggfHwgIWIubGVuZ3RoKSByZXR1cm4gMFxuICBpZiAoYSA9PT0gYikgcmV0dXJuIDFcbiAgdmFyIGQgPSBkaXN0YW5jZShhLnRvTG93ZXJDYXNlKCksYi50b0xvd2VyQ2FzZSgpKVxuICB2YXIgbG9uZ2VzdCA9IE1hdGgubWF4KGEubGVuZ3RoLCBiLmxlbmd0aClcbiAgcmV0dXJuIChsb25nZXN0LWQpL2xvbmdlc3Rcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=