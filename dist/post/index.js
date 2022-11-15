/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/liquidjs/dist/liquid.browser.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/liquidjs/dist/liquid.browser.esm.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssertionError": () => (/* binding */ AssertionError),
/* harmony export */   "Context": () => (/* binding */ Context),
/* harmony export */   "Drop": () => (/* binding */ Drop),
/* harmony export */   "Expression": () => (/* binding */ Expression),
/* harmony export */   "Hash": () => (/* binding */ Hash),
/* harmony export */   "InternalUndefinedVariableError": () => (/* binding */ InternalUndefinedVariableError),
/* harmony export */   "Liquid": () => (/* binding */ Liquid),
/* harmony export */   "LiquidError": () => (/* binding */ LiquidError),
/* harmony export */   "ParseError": () => (/* binding */ ParseError),
/* harmony export */   "ParseStream": () => (/* binding */ ParseStream),
/* harmony export */   "RenderError": () => (/* binding */ RenderError),
/* harmony export */   "TagToken": () => (/* binding */ TagToken),
/* harmony export */   "TimezoneDate": () => (/* binding */ TimezoneDate),
/* harmony export */   "Token": () => (/* binding */ Token),
/* harmony export */   "TokenKind": () => (/* binding */ TokenKind),
/* harmony export */   "TokenizationError": () => (/* binding */ TokenizationError),
/* harmony export */   "Tokenizer": () => (/* binding */ Tokenizer),
/* harmony export */   "TypeGuards": () => (/* binding */ typeGuards),
/* harmony export */   "UndefinedVariableError": () => (/* binding */ UndefinedVariableError),
/* harmony export */   "Value": () => (/* binding */ Value),
/* harmony export */   "assert": () => (/* binding */ assert),
/* harmony export */   "createTrie": () => (/* binding */ createTrie),
/* harmony export */   "defaultOperators": () => (/* binding */ defaultOperators),
/* harmony export */   "evalQuotedToken": () => (/* binding */ evalQuotedToken),
/* harmony export */   "evalToken": () => (/* binding */ evalToken),
/* harmony export */   "filters": () => (/* binding */ builtinFilters),
/* harmony export */   "isFalsy": () => (/* binding */ isFalsy),
/* harmony export */   "isTruthy": () => (/* binding */ isTruthy),
/* harmony export */   "tags": () => (/* binding */ index),
/* harmony export */   "toPromise": () => (/* binding */ toPromise),
/* harmony export */   "toThenable": () => (/* binding */ toThenable),
/* harmony export */   "toValue": () => (/* binding */ toValue$1),
/* harmony export */   "version": () => (/* binding */ version)
/* harmony export */ });
/*
 * liquidjs@9.37.0, https://github.com/harttle/liquidjs
 * (c) 2016-2022 harttle
 * Released under the MIT License.
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var Drop = /** @class */ (function () {
    function Drop() {
    }
    Drop.prototype.valueOf = function () {
        return undefined;
    };
    Drop.prototype.liquidMethodMissing = function (key) {
        return undefined;
    };
    return Drop;
}());

var toString$1 = Object.prototype.toString;
var toLowerCase = String.prototype.toLowerCase;
var hasOwnProperty = Object.hasOwnProperty;
function isString(value) {
    return typeof value === 'string';
}
// eslint-disable-next-line @typescript-eslint/ban-types
function isFunction(value) {
    return typeof value === 'function';
}
function escapeRegex(str) {
    return str.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}
function stringify(value) {
    value = toValue$1(value);
    if (isString(value))
        return value;
    if (isNil(value))
        return '';
    if (isArray(value))
        return value.map(function (x) { return stringify(x); }).join('');
    return String(value);
}
function toValue$1(value) {
    return value instanceof Drop ? value.valueOf() : value;
}
function isNumber(value) {
    return typeof value === 'number';
}
function toLiquid(value) {
    if (value && isFunction(value.toLiquid))
        return toLiquid(value.toLiquid());
    return value;
}
function isNil(value) {
    return value == null;
}
function isArray(value) {
    // be compatible with IE 8
    return toString$1.call(value) === '[object Array]';
}
/*
 * Iterates over own enumerable string keyed properties of an object and invokes iteratee for each property.
 * The iteratee is invoked with three arguments: (value, key, object).
 * Iteratee functions may exit iteration early by explicitly returning false.
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @return {Object} Returns object.
 */
function forOwn(obj, iteratee) {
    obj = obj || {};
    for (var k in obj) {
        if (hasOwnProperty.call(obj, k)) {
            if (iteratee(obj[k], k, obj) === false)
                break;
        }
    }
    return obj;
}
function last$1(arr) {
    return arr[arr.length - 1];
}
/*
 * Checks if value is the language type of Object.
 * (e.g. arrays, functions, objects, regexes, new Number(0), and new String(''))
 * @param {any} value The value to check.
 * @return {Boolean} Returns true if value is an object, else false.
 */
function isObject(value) {
    var type = typeof value;
    return value !== null && (type === 'object' || type === 'function');
}
function range(start, stop, step) {
    if (step === void 0) { step = 1; }
    var arr = [];
    for (var i = start; i < stop; i += step) {
        arr.push(i);
    }
    return arr;
}
function padStart(str, length, ch) {
    if (ch === void 0) { ch = ' '; }
    return pad(str, length, ch, function (str, ch) { return ch + str; });
}
function padEnd(str, length, ch) {
    if (ch === void 0) { ch = ' '; }
    return pad(str, length, ch, function (str, ch) { return str + ch; });
}
function pad(str, length, ch, add) {
    str = String(str);
    var n = length - str.length;
    while (n-- > 0)
        str = add(str, ch);
    return str;
}
function identify(val) {
    return val;
}
function snakeCase(str) {
    return str.replace(/(\w?)([A-Z])/g, function (_, a, b) { return (a ? a + '_' : '') + b.toLowerCase(); });
}
function changeCase(str) {
    var hasLowerCase = __spreadArray([], __read(str), false).some(function (ch) { return ch >= 'a' && ch <= 'z'; });
    return hasLowerCase ? str.toUpperCase() : str.toLowerCase();
}
function ellipsis(str, N) {
    return str.length > N ? str.substr(0, N - 3) + '...' : str;
}
// compare string in case-insensitive way, undefined values to the tail
function caseInsensitiveCompare(a, b) {
    if (a == null && b == null)
        return 0;
    if (a == null)
        return 1;
    if (b == null)
        return -1;
    a = toLowerCase.call(a);
    b = toLowerCase.call(b);
    if (a < b)
        return -1;
    if (a > b)
        return 1;
    return 0;
}
function argumentsToValue(fn) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return fn.apply(void 0, __spreadArray([], __read(args.map(toValue$1)), false));
    };
}
function escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

var Node = /** @class */ (function () {
    function Node(key, value, next, prev) {
        this.key = key;
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
    return Node;
}());
var LRU = /** @class */ (function () {
    function LRU(limit, size) {
        if (size === void 0) { size = 0; }
        this.limit = limit;
        this.size = size;
        this.cache = {};
        this.head = new Node('HEAD', null, null, null);
        this.tail = new Node('TAIL', null, null, null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    LRU.prototype.write = function (key, value) {
        if (this.cache[key]) {
            this.cache[key].value = value;
        }
        else {
            var node = new Node(key, value, this.head.next, this.head);
            this.head.next.prev = node;
            this.head.next = node;
            this.cache[key] = node;
            this.size++;
            this.ensureLimit();
        }
    };
    LRU.prototype.read = function (key) {
        if (!this.cache[key])
            return;
        var value = this.cache[key].value;
        this.remove(key);
        this.write(key, value);
        return value;
    };
    LRU.prototype.remove = function (key) {
        var node = this.cache[key];
        node.prev.next = node.next;
        node.next.prev = node.prev;
        delete this.cache[key];
        this.size--;
    };
    LRU.prototype.clear = function () {
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0;
        this.cache = {};
    };
    LRU.prototype.ensureLimit = function () {
        if (this.size > this.limit)
            this.remove(this.tail.prev.key);
    };
    return LRU;
}());

function domResolve(root, path) {
    var base = document.createElement('base');
    base.href = root;
    var head = document.getElementsByTagName('head')[0];
    head.insertBefore(base, head.firstChild);
    var a = document.createElement('a');
    a.href = path;
    var resolved = a.href;
    head.removeChild(base);
    return resolved;
}
function resolve(root, filepath, ext) {
    if (root.length && last$1(root) !== '/')
        root += '/';
    var url = domResolve(root, filepath);
    return url.replace(/^(\w+:\/\/[^/]+)(\/[^?]+)/, function (str, origin, path) {
        var last = path.split('/').pop();
        if (/\.\w+$/.test(last))
            return str;
        return origin + path + ext;
    });
}
function readFile(url) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    var xhr = new XMLHttpRequest();
                    xhr.onload = function () {
                        if (xhr.status >= 200 && xhr.status < 300) {
                            resolve(xhr.responseText);
                        }
                        else {
                            reject(new Error(xhr.statusText));
                        }
                    };
                    xhr.onerror = function () {
                        reject(new Error('An error occurred whilst receiving the response.'));
                    };
                    xhr.open('GET', url);
                    xhr.send();
                })];
        });
    });
}
function readFileSync(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();
    if (xhr.status < 200 || xhr.status >= 300) {
        throw new Error(xhr.statusText);
    }
    return xhr.responseText;
}
function exists(filepath) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, true];
        });
    });
}
function existsSync(filepath) {
    return true;
}
function dirname(filepath) {
    return domResolve(filepath, '.');
}
var sep = '/';

var fs = /*#__PURE__*/Object.freeze({
    __proto__: null,
    resolve: resolve,
    readFile: readFile,
    readFileSync: readFileSync,
    exists: exists,
    existsSync: existsSync,
    dirname: dirname,
    sep: sep
});

function isComparable(arg) {
    return arg && isFunction(arg.equals);
}

function isTruthy(val, ctx) {
    return !isFalsy(val, ctx);
}
function isFalsy(val, ctx) {
    if (ctx.opts.jsTruthy) {
        return !val;
    }
    else {
        return val === false || undefined === val || val === null;
    }
}

var defaultOperators = {
    '==': function (l, r) {
        if (isComparable(l))
            return l.equals(r);
        if (isComparable(r))
            return r.equals(l);
        return l === r;
    },
    '!=': function (l, r) {
        if (isComparable(l))
            return !l.equals(r);
        if (isComparable(r))
            return !r.equals(l);
        return l !== r;
    },
    '>': function (l, r) {
        if (isComparable(l))
            return l.gt(r);
        if (isComparable(r))
            return r.lt(l);
        return l > r;
    },
    '<': function (l, r) {
        if (isComparable(l))
            return l.lt(r);
        if (isComparable(r))
            return r.gt(l);
        return l < r;
    },
    '>=': function (l, r) {
        if (isComparable(l))
            return l.geq(r);
        if (isComparable(r))
            return r.leq(l);
        return l >= r;
    },
    '<=': function (l, r) {
        if (isComparable(l))
            return l.leq(r);
        if (isComparable(r))
            return r.geq(l);
        return l <= r;
    },
    'contains': function (l, r) {
        l = toValue$1(l);
        r = toValue$1(r);
        return l && isFunction(l.indexOf) ? l.indexOf(r) > -1 : false;
    },
    'and': function (l, r, ctx) { return isTruthy(l, ctx) && isTruthy(r, ctx); },
    'or': function (l, r, ctx) { return isTruthy(l, ctx) || isTruthy(r, ctx); }
};

// **DO NOT CHANGE THIS FILE**
//
// This file is generated by bin/character-gen.js
// bitmask character types to boost performance
var TYPES = [0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 4, 4, 4, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 2, 8, 0, 0, 0, 0, 8, 0, 0, 0, 64, 0, 65, 0, 0, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 0, 0, 2, 2, 2, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
var IDENTIFIER = 1;
var BLANK = 4;
var QUOTE = 8;
var INLINE_BLANK = 16;
var NUMBER = 32;
var SIGN = 64;
TYPES[160] = TYPES[5760] = TYPES[6158] = TYPES[8192] = TYPES[8193] = TYPES[8194] = TYPES[8195] = TYPES[8196] = TYPES[8197] = TYPES[8198] = TYPES[8199] = TYPES[8200] = TYPES[8201] = TYPES[8202] = TYPES[8232] = TYPES[8233] = TYPES[8239] = TYPES[8287] = TYPES[12288] = BLANK;

function createTrie(operators) {
    var e_1, _a;
    var trie = {};
    try {
        for (var _b = __values(Object.entries(operators)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), name_1 = _d[0], handler = _d[1];
            var node = trie;
            for (var i = 0; i < name_1.length; i++) {
                var c = name_1[i];
                node[c] = node[c] || {};
                if (i === name_1.length - 1 && (TYPES[name_1.charCodeAt(i)] & IDENTIFIER)) {
                    node[c].needBoundary = true;
                }
                node = node[c];
            }
            node.handler = handler;
            node.end = true;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return trie;
}

var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&#34;',
    "'": '&#39;'
};
var unescapeMap = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&#34;': '"',
    '&#39;': "'"
};
function escape(str) {
    return stringify(str).replace(/&|<|>|"|'/g, function (m) { return escapeMap[m]; });
}
function unescape(str) {
    return stringify(str).replace(/&(amp|lt|gt|#34|#39);/g, function (m) { return unescapeMap[m]; });
}
function escapeOnce(str) {
    return escape(unescape(stringify(str)));
}
function newlineToBr(v) {
    return stringify(v).replace(/\n/g, '<br />\n');
}
function stripHtml(v) {
    return stringify(v).replace(/<script.*?<\/script>|<!--.*?-->|<style.*?<\/style>|<.*?>/g, '');
}

var abs = argumentsToValue(Math.abs);
var atLeast = argumentsToValue(Math.max);
var atMost = argumentsToValue(Math.min);
var ceil = argumentsToValue(Math.ceil);
var dividedBy = argumentsToValue(function (dividend, divisor, integerArithmetic) {
    if (integerArithmetic === void 0) { integerArithmetic = false; }
    return integerArithmetic ? Math.floor(dividend / divisor) : dividend / divisor;
});
var floor = argumentsToValue(Math.floor);
var minus = argumentsToValue(function (v, arg) { return v - arg; });
var modulo = argumentsToValue(function (v, arg) { return v % arg; });
var times = argumentsToValue(function (v, arg) { return v * arg; });
function round(v, arg) {
    if (arg === void 0) { arg = 0; }
    v = toValue$1(v);
    arg = toValue$1(arg);
    var amp = Math.pow(10, arg);
    return Math.round(v * amp) / amp;
}
function plus(v, arg) {
    v = toValue$1(v);
    arg = toValue$1(arg);
    return Number(v) + Number(arg);
}

var urlDecode = function (x) { return stringify(x).split('+').map(decodeURIComponent).join(' '); };
var urlEncode = function (x) { return stringify(x).split(' ').map(encodeURIComponent).join('+'); };

function toEnumerable(val) {
    if (isArray(val))
        return val;
    if (isString(val) && val.length > 0)
        return [val];
    if (isObject(val))
        return Object.keys(val).map(function (key) { return [key, val[key]]; });
    return [];
}
function toArray(val) {
    if (isNil(val))
        return [];
    if (isArray(val))
        return val;
    return [val];
}

var join = argumentsToValue(function (v, arg) { return toArray(v).join(arg === undefined ? ' ' : arg); });
var last = argumentsToValue(function (v) { return isArray(v) ? last$1(v) : ''; });
var first = argumentsToValue(function (v) { return isArray(v) ? v[0] : ''; });
var reverse = argumentsToValue(function (v) { return __spreadArray([], __read(toArray(v)), false).reverse(); });
function sort(arr, property) {
    var _this = this;
    arr = toValue$1(arr);
    var getValue = function (obj) { return property ? _this.context.getFromScope(obj, stringify(property).split('.')) : obj; };
    return __spreadArray([], __read(toArray(arr)), false).sort(function (lhs, rhs) {
        lhs = getValue(lhs);
        rhs = getValue(rhs);
        return lhs < rhs ? -1 : (lhs > rhs ? 1 : 0);
    });
}
function sortNatural(input, property) {
    input = toValue$1(input);
    var propertyString = stringify(property);
    var compare = property === undefined
        ? caseInsensitiveCompare
        : function (lhs, rhs) { return caseInsensitiveCompare(lhs[propertyString], rhs[propertyString]); };
    return __spreadArray([], __read(toArray(input)), false).sort(compare);
}
var size = function (v) { return (v && v.length) || 0; };
function map(arr, property) {
    var _this = this;
    arr = toValue$1(arr);
    return toArray(arr).map(function (obj) { return _this.context.getFromScope(obj, stringify(property).split('.')); });
}
function compact(arr) {
    arr = toValue$1(arr);
    return toArray(arr).filter(function (x) { return !isNil(toValue$1(x)); });
}
function concat(v, arg) {
    if (arg === void 0) { arg = []; }
    v = toValue$1(v);
    arg = toArray(arg).map(function (v) { return toValue$1(v); });
    return toArray(v).concat(arg);
}
function slice(v, begin, length) {
    if (length === void 0) { length = 1; }
    v = toValue$1(v);
    if (isNil(v))
        return [];
    if (!isArray(v))
        v = stringify(v);
    begin = begin < 0 ? v.length + begin : begin;
    return v.slice(begin, begin + length);
}
function where(arr, property, expected) {
    var _this = this;
    arr = toValue$1(arr);
    return toArray(arr).filter(function (obj) {
        var value = _this.context.getFromScope(obj, stringify(property).split('.'));
        if (expected === undefined)
            return isTruthy(value, _this.context);
        if (isComparable(expected))
            return expected.equals(value);
        return value === expected;
    });
}
function uniq(arr) {
    arr = toValue$1(arr);
    var u = {};
    return (arr || []).filter(function (val) {
        if (hasOwnProperty.call(u, String(val)))
            return false;
        u[String(val)] = true;
        return true;
    });
}

var rFormat = /%([-_0^#:]+)?(\d+)?([EO])?(.)/;
var monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
];
var dayNames = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];
var monthNamesShort = monthNames.map(abbr);
var dayNamesShort = dayNames.map(abbr);
var suffixes = {
    1: 'st',
    2: 'nd',
    3: 'rd',
    'default': 'th'
};
function abbr(str) {
    return str.slice(0, 3);
}
// prototype extensions
function daysInMonth(d) {
    var feb = isLeapYear(d) ? 29 : 28;
    return [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}
function getDayOfYear(d) {
    var num = 0;
    for (var i = 0; i < d.getMonth(); ++i) {
        num += daysInMonth(d)[i];
    }
    return num + d.getDate();
}
function getWeekOfYear(d, startDay) {
    // Skip to startDay of this week
    var now = getDayOfYear(d) + (startDay - d.getDay());
    // Find the first startDay of the year
    var jan1 = new Date(d.getFullYear(), 0, 1);
    var then = (7 - jan1.getDay() + startDay);
    return String(Math.floor((now - then) / 7) + 1);
}
function isLeapYear(d) {
    var year = d.getFullYear();
    return !!((year & 3) === 0 && (year % 100 || (year % 400 === 0 && year)));
}
function getSuffix(d) {
    var str = d.getDate().toString();
    var index = parseInt(str.slice(-1));
    return suffixes[index] || suffixes['default'];
}
function century(d) {
    return parseInt(d.getFullYear().toString().substring(0, 2), 10);
}
// default to 0
var padWidths = {
    d: 2,
    e: 2,
    H: 2,
    I: 2,
    j: 3,
    k: 2,
    l: 2,
    L: 3,
    m: 2,
    M: 2,
    S: 2,
    U: 2,
    W: 2
};
// default to '0'
var padChars = {
    a: ' ',
    A: ' ',
    b: ' ',
    B: ' ',
    c: ' ',
    e: ' ',
    k: ' ',
    l: ' ',
    p: ' ',
    P: ' '
};
var formatCodes = {
    a: function (d) { return dayNamesShort[d.getDay()]; },
    A: function (d) { return dayNames[d.getDay()]; },
    b: function (d) { return monthNamesShort[d.getMonth()]; },
    B: function (d) { return monthNames[d.getMonth()]; },
    c: function (d) { return d.toLocaleString(); },
    C: function (d) { return century(d); },
    d: function (d) { return d.getDate(); },
    e: function (d) { return d.getDate(); },
    H: function (d) { return d.getHours(); },
    I: function (d) { return String(d.getHours() % 12 || 12); },
    j: function (d) { return getDayOfYear(d); },
    k: function (d) { return d.getHours(); },
    l: function (d) { return String(d.getHours() % 12 || 12); },
    L: function (d) { return d.getMilliseconds(); },
    m: function (d) { return d.getMonth() + 1; },
    M: function (d) { return d.getMinutes(); },
    N: function (d, opts) {
        var width = Number(opts.width) || 9;
        var str = String(d.getMilliseconds()).substr(0, width);
        return padEnd(str, width, '0');
    },
    p: function (d) { return (d.getHours() < 12 ? 'AM' : 'PM'); },
    P: function (d) { return (d.getHours() < 12 ? 'am' : 'pm'); },
    q: function (d) { return getSuffix(d); },
    s: function (d) { return Math.round(d.getTime() / 1000); },
    S: function (d) { return d.getSeconds(); },
    u: function (d) { return d.getDay() || 7; },
    U: function (d) { return getWeekOfYear(d, 0); },
    w: function (d) { return d.getDay(); },
    W: function (d) { return getWeekOfYear(d, 1); },
    x: function (d) { return d.toLocaleDateString(); },
    X: function (d) { return d.toLocaleTimeString(); },
    y: function (d) { return d.getFullYear().toString().substring(2, 4); },
    Y: function (d) { return d.getFullYear(); },
    z: function (d, opts) {
        var nOffset = Math.abs(d.getTimezoneOffset());
        var h = Math.floor(nOffset / 60);
        var m = nOffset % 60;
        return (d.getTimezoneOffset() > 0 ? '-' : '+') +
            padStart(h, 2, '0') +
            (opts.flags[':'] ? ':' : '') +
            padStart(m, 2, '0');
    },
    't': function () { return '\t'; },
    'n': function () { return '\n'; },
    '%': function () { return '%'; }
};
formatCodes.h = formatCodes.b;
function strftime (d, formatStr) {
    var output = '';
    var remaining = formatStr;
    var match;
    while ((match = rFormat.exec(remaining))) {
        output += remaining.slice(0, match.index);
        remaining = remaining.slice(match.index + match[0].length);
        output += format(d, match);
    }
    return output + remaining;
}
function format(d, match) {
    var e_1, _a;
    var _b = __read(match, 5), input = _b[0], _c = _b[1], flagStr = _c === void 0 ? '' : _c, width = _b[2], modifier = _b[3], conversion = _b[4];
    var convert = formatCodes[conversion];
    if (!convert)
        return input;
    var flags = {};
    try {
        for (var flagStr_1 = __values(flagStr), flagStr_1_1 = flagStr_1.next(); !flagStr_1_1.done; flagStr_1_1 = flagStr_1.next()) {
            var flag = flagStr_1_1.value;
            flags[flag] = true;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (flagStr_1_1 && !flagStr_1_1.done && (_a = flagStr_1.return)) _a.call(flagStr_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var ret = String(convert(d, { flags: flags, width: width, modifier: modifier }));
    var padChar = padChars[conversion] || '0';
    var padWidth = width || padWidths[conversion] || 0;
    if (flags['^'])
        ret = ret.toUpperCase();
    else if (flags['#'])
        ret = changeCase(ret);
    if (flags['_'])
        padChar = ' ';
    else if (flags['0'])
        padChar = '0';
    if (flags['-'])
        padWidth = 0;
    return padStart(ret, padWidth, padChar);
}

// one minute in milliseconds
var OneMinute = 60000;
var hostTimezoneOffset = new Date().getTimezoneOffset();
var ISO8601_TIMEZONE_PATTERN = /([zZ]|([+-])(\d{2}):(\d{2}))$/;
/**
 * A date implementation with timezone info, just like Ruby date
 *
 * Implementation:
 * - create a Date offset by it's timezone difference, avoiding overriding a bunch of methods
 * - rewrite getTimezoneOffset() to trick strftime
 */
var TimezoneDate = /** @class */ (function () {
    function TimezoneDate(init, timezoneOffset) {
        if (init instanceof TimezoneDate) {
            this.date = init.date;
            timezoneOffset = init.timezoneOffset;
        }
        else {
            var diff = (hostTimezoneOffset - timezoneOffset) * OneMinute;
            var time = new Date(init).getTime() + diff;
            this.date = new Date(time);
        }
        this.timezoneOffset = timezoneOffset;
    }
    TimezoneDate.prototype.getTime = function () {
        return this.date.getTime();
    };
    TimezoneDate.prototype.getMilliseconds = function () {
        return this.date.getMilliseconds();
    };
    TimezoneDate.prototype.getSeconds = function () {
        return this.date.getSeconds();
    };
    TimezoneDate.prototype.getMinutes = function () {
        return this.date.getMinutes();
    };
    TimezoneDate.prototype.getHours = function () {
        return this.date.getHours();
    };
    TimezoneDate.prototype.getDay = function () {
        return this.date.getDay();
    };
    TimezoneDate.prototype.getDate = function () {
        return this.date.getDate();
    };
    TimezoneDate.prototype.getMonth = function () {
        return this.date.getMonth();
    };
    TimezoneDate.prototype.getFullYear = function () {
        return this.date.getFullYear();
    };
    TimezoneDate.prototype.toLocaleTimeString = function (locale) {
        return this.date.toLocaleTimeString(locale);
    };
    TimezoneDate.prototype.toLocaleDateString = function (locale) {
        return this.date.toLocaleDateString(locale);
    };
    TimezoneDate.prototype.getTimezoneOffset = function () {
        return this.timezoneOffset;
    };
    /**
     * Create a Date object fixed to it's declared Timezone. Both
     * - 2021-08-06T02:29:00.000Z and
     * - 2021-08-06T02:29:00.000+08:00
     * will always be displayed as
     * - 2021-08-06 02:29:00
     * regardless timezoneOffset in JavaScript realm
     *
     * The implementation hack:
     * Instead of calling `.getMonth()`/`.getUTCMonth()` respect to `preserveTimezones`,
     * we create a different Date to trick strftime, it's both simpler and more performant.
     * Given that a template is expected to be parsed fewer times than rendered.
     */
    TimezoneDate.createDateFixedToTimezone = function (dateString) {
        var m = dateString.match(ISO8601_TIMEZONE_PATTERN);
        // representing a UTC timestamp
        if (m && m[1] === 'Z') {
            return new TimezoneDate(+new Date(dateString), 0);
        }
        // has a timezone specified
        if (m && m[2] && m[3] && m[4]) {
            var _a = __read(m, 5), sign = _a[2], hours = _a[3], minutes = _a[4];
            var delta = (sign === '+' ? -1 : 1) * (parseInt(hours, 10) * 60 + parseInt(minutes, 10));
            return new TimezoneDate(+new Date(dateString), delta);
        }
        return new Date(dateString);
    };
    return TimezoneDate;
}());

function date(v, arg) {
    var opts = this.context.opts;
    var date;
    v = toValue$1(v);
    arg = stringify(arg);
    if (v === 'now' || v === 'today') {
        date = new Date();
    }
    else if (isNumber(v)) {
        date = new Date(v * 1000);
    }
    else if (isString(v)) {
        if (/^\d+$/.test(v)) {
            date = new Date(+v * 1000);
        }
        else if (opts.preserveTimezones) {
            date = TimezoneDate.createDateFixedToTimezone(v);
        }
        else {
            date = new Date(v);
        }
    }
    else {
        date = v;
    }
    if (!isValidDate(date))
        return v;
    if (opts.hasOwnProperty('timezoneOffset')) {
        date = new TimezoneDate(date, opts.timezoneOffset);
    }
    return strftime(date, arg);
}
function isValidDate(date) {
    return (date instanceof Date || date instanceof TimezoneDate) && !isNaN(date.getTime());
}

function Default(value, defaultValue) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    value = toValue$1(value);
    if (isArray(value) || isString(value))
        return value.length ? value : defaultValue;
    if (value === false && (new Map(args)).get('allow_false'))
        return false;
    return isFalsy(value, this.context) ? defaultValue : value;
}
function json(value) {
    return JSON.stringify(value);
}
var raw$1 = identify;

var LiquidError = /** @class */ (function (_super) {
    __extends(LiquidError, _super);
    function LiquidError(err, token) {
        var _this = _super.call(this, err.message) || this;
        _this.originalError = err;
        _this.token = token;
        _this.context = '';
        return _this;
    }
    LiquidError.prototype.update = function () {
        var err = this.originalError;
        this.context = mkContext(this.token);
        this.message = mkMessage(err.message, this.token);
        this.stack = this.message + '\n' + this.context +
            '\n' + this.stack + '\nFrom ' + err.stack;
    };
    return LiquidError;
}(Error));
var TokenizationError = /** @class */ (function (_super) {
    __extends(TokenizationError, _super);
    function TokenizationError(message, token) {
        var _this = _super.call(this, new Error(message), token) || this;
        _this.name = 'TokenizationError';
        _super.prototype.update.call(_this);
        return _this;
    }
    return TokenizationError;
}(LiquidError));
var ParseError = /** @class */ (function (_super) {
    __extends(ParseError, _super);
    function ParseError(err, token) {
        var _this = _super.call(this, err, token) || this;
        _this.name = 'ParseError';
        _this.message = err.message;
        _super.prototype.update.call(_this);
        return _this;
    }
    return ParseError;
}(LiquidError));
var RenderError = /** @class */ (function (_super) {
    __extends(RenderError, _super);
    function RenderError(err, tpl) {
        var _this = _super.call(this, err, tpl.token) || this;
        _this.name = 'RenderError';
        _this.message = err.message;
        _super.prototype.update.call(_this);
        return _this;
    }
    RenderError.is = function (obj) {
        return obj.name === 'RenderError';
    };
    return RenderError;
}(LiquidError));
var UndefinedVariableError = /** @class */ (function (_super) {
    __extends(UndefinedVariableError, _super);
    function UndefinedVariableError(err, token) {
        var _this = _super.call(this, err, token) || this;
        _this.name = 'UndefinedVariableError';
        _this.message = err.message;
        _super.prototype.update.call(_this);
        return _this;
    }
    return UndefinedVariableError;
}(LiquidError));
// only used internally; raised where we don't have token information,
// so it can't be an UndefinedVariableError.
var InternalUndefinedVariableError = /** @class */ (function (_super) {
    __extends(InternalUndefinedVariableError, _super);
    function InternalUndefinedVariableError(variableName) {
        var _this = _super.call(this, "undefined variable: ".concat(variableName)) || this;
        _this.name = 'InternalUndefinedVariableError';
        _this.variableName = variableName;
        return _this;
    }
    return InternalUndefinedVariableError;
}(Error));
var AssertionError = /** @class */ (function (_super) {
    __extends(AssertionError, _super);
    function AssertionError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'AssertionError';
        _this.message = message + '';
        return _this;
    }
    return AssertionError;
}(Error));
function mkContext(token) {
    var _a = __read(token.getPosition(), 1), line = _a[0];
    var lines = token.input.split('\n');
    var begin = Math.max(line - 2, 1);
    var end = Math.min(line + 3, lines.length);
    var context = range(begin, end + 1)
        .map(function (lineNumber) {
        var indicator = (lineNumber === line) ? '>> ' : '   ';
        var num = padStart(String(lineNumber), String(end).length);
        var text = lines[lineNumber - 1];
        return "".concat(indicator).concat(num, "| ").concat(text);
    })
        .join('\n');
    return context;
}
function mkMessage(msg, token) {
    if (token.file)
        msg += ", file:".concat(token.file);
    var _a = __read(token.getPosition(), 2), line = _a[0], col = _a[1];
    msg += ", line:".concat(line, ", col:").concat(col);
    return msg;
}

function assert(predicate, message) {
    if (!predicate) {
        var msg = typeof message === 'function'
            ? message()
            : (message || "expect ".concat(predicate, " to be true"));
        throw new AssertionError(msg);
    }
}

/**
 * String related filters
 *
 * * prefer stringify() to String() since `undefined`, `null` should eval ''
 */
function append(v, arg) {
    assert(arguments.length === 2, 'append expect 2 arguments');
    return stringify(v) + stringify(arg);
}
function prepend(v, arg) {
    assert(arguments.length === 2, 'prepend expect 2 arguments');
    return stringify(arg) + stringify(v);
}
function lstrip(v, chars) {
    if (chars) {
        chars = escapeRegExp(stringify(chars));
        return stringify(v).replace(new RegExp("^[".concat(chars, "]+"), 'g'), '');
    }
    return stringify(v).replace(/^\s+/, '');
}
function downcase(v) {
    return stringify(v).toLowerCase();
}
function upcase(str) {
    return stringify(str).toUpperCase();
}
function remove(v, arg) {
    return stringify(v).split(String(arg)).join('');
}
function removeFirst(v, l) {
    return stringify(v).replace(String(l), '');
}
function rstrip(str, chars) {
    if (chars) {
        chars = escapeRegExp(stringify(chars));
        return stringify(str).replace(new RegExp("[".concat(chars, "]+$"), 'g'), '');
    }
    return stringify(str).replace(/\s+$/, '');
}
function split(v, arg) {
    var arr = stringify(v).split(String(arg));
    // align to ruby split, which is the behavior of shopify/liquid
    // see: https://ruby-doc.org/core-2.4.0/String.html#method-i-split
    while (arr.length && arr[arr.length - 1] === '')
        arr.pop();
    return arr;
}
function strip(v, chars) {
    if (chars) {
        chars = escapeRegExp(stringify(chars));
        return stringify(v)
            .replace(new RegExp("^[".concat(chars, "]+"), 'g'), '')
            .replace(new RegExp("[".concat(chars, "]+$"), 'g'), '');
    }
    return stringify(v).trim();
}
function stripNewlines(v) {
    return stringify(v).replace(/\n/g, '');
}
function capitalize(str) {
    str = stringify(str);
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
function replace(v, pattern, replacement) {
    return stringify(v).split(String(pattern)).join(replacement);
}
function replaceFirst(v, arg1, arg2) {
    return stringify(v).replace(String(arg1), arg2);
}
function truncate(v, l, o) {
    if (l === void 0) { l = 50; }
    if (o === void 0) { o = '...'; }
    v = stringify(v);
    if (v.length <= l)
        return v;
    return v.substring(0, l - o.length) + o;
}
function truncatewords(v, l, o) {
    if (l === void 0) { l = 15; }
    if (o === void 0) { o = '...'; }
    var arr = stringify(v).split(/\s+/);
    var ret = arr.slice(0, l).join(' ');
    if (arr.length >= l)
        ret += o;
    return ret;
}

var builtinFilters = /*#__PURE__*/Object.freeze({
    __proto__: null,
    escape: escape,
    escapeOnce: escapeOnce,
    newlineToBr: newlineToBr,
    stripHtml: stripHtml,
    abs: abs,
    atLeast: atLeast,
    atMost: atMost,
    ceil: ceil,
    dividedBy: dividedBy,
    floor: floor,
    minus: minus,
    modulo: modulo,
    times: times,
    round: round,
    plus: plus,
    urlDecode: urlDecode,
    urlEncode: urlEncode,
    join: join,
    last: last,
    first: first,
    reverse: reverse,
    sort: sort,
    sortNatural: sortNatural,
    size: size,
    map: map,
    compact: compact,
    concat: concat,
    slice: slice,
    where: where,
    uniq: uniq,
    date: date,
    Default: Default,
    json: json,
    raw: raw$1,
    append: append,
    prepend: prepend,
    lstrip: lstrip,
    downcase: downcase,
    upcase: upcase,
    remove: remove,
    removeFirst: removeFirst,
    rstrip: rstrip,
    split: split,
    strip: strip,
    stripNewlines: stripNewlines,
    capitalize: capitalize,
    replace: replace,
    replaceFirst: replaceFirst,
    truncate: truncate,
    truncatewords: truncatewords
});

var TokenKind;
(function (TokenKind) {
    TokenKind[TokenKind["Number"] = 1] = "Number";
    TokenKind[TokenKind["Literal"] = 2] = "Literal";
    TokenKind[TokenKind["Tag"] = 4] = "Tag";
    TokenKind[TokenKind["Output"] = 8] = "Output";
    TokenKind[TokenKind["HTML"] = 16] = "HTML";
    TokenKind[TokenKind["Filter"] = 32] = "Filter";
    TokenKind[TokenKind["Hash"] = 64] = "Hash";
    TokenKind[TokenKind["PropertyAccess"] = 128] = "PropertyAccess";
    TokenKind[TokenKind["Word"] = 256] = "Word";
    TokenKind[TokenKind["Range"] = 512] = "Range";
    TokenKind[TokenKind["Quoted"] = 1024] = "Quoted";
    TokenKind[TokenKind["Operator"] = 2048] = "Operator";
    TokenKind[TokenKind["Delimited"] = 12] = "Delimited";
})(TokenKind || (TokenKind = {}));

function isDelimitedToken(val) {
    return !!(getKind(val) & TokenKind.Delimited);
}
function isOperatorToken(val) {
    return getKind(val) === TokenKind.Operator;
}
function isHTMLToken(val) {
    return getKind(val) === TokenKind.HTML;
}
function isOutputToken(val) {
    return getKind(val) === TokenKind.Output;
}
function isTagToken(val) {
    return getKind(val) === TokenKind.Tag;
}
function isQuotedToken(val) {
    return getKind(val) === TokenKind.Quoted;
}
function isLiteralToken(val) {
    return getKind(val) === TokenKind.Literal;
}
function isNumberToken(val) {
    return getKind(val) === TokenKind.Number;
}
function isPropertyAccessToken(val) {
    return getKind(val) === TokenKind.PropertyAccess;
}
function isWordToken(val) {
    return getKind(val) === TokenKind.Word;
}
function isRangeToken(val) {
    return getKind(val) === TokenKind.Range;
}
function getKind(val) {
    return val ? val.kind : -1;
}

var typeGuards = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isDelimitedToken: isDelimitedToken,
    isOperatorToken: isOperatorToken,
    isHTMLToken: isHTMLToken,
    isOutputToken: isOutputToken,
    isTagToken: isTagToken,
    isQuotedToken: isQuotedToken,
    isLiteralToken: isLiteralToken,
    isNumberToken: isNumberToken,
    isPropertyAccessToken: isPropertyAccessToken,
    isWordToken: isWordToken,
    isRangeToken: isRangeToken
});

var NullDrop = /** @class */ (function (_super) {
    __extends(NullDrop, _super);
    function NullDrop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NullDrop.prototype.equals = function (value) {
        return isNil(toValue$1(value));
    };
    NullDrop.prototype.gt = function () {
        return false;
    };
    NullDrop.prototype.geq = function () {
        return false;
    };
    NullDrop.prototype.lt = function () {
        return false;
    };
    NullDrop.prototype.leq = function () {
        return false;
    };
    NullDrop.prototype.valueOf = function () {
        return null;
    };
    return NullDrop;
}(Drop));

var EmptyDrop = /** @class */ (function (_super) {
    __extends(EmptyDrop, _super);
    function EmptyDrop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmptyDrop.prototype.equals = function (value) {
        if (value instanceof EmptyDrop)
            return false;
        value = toValue$1(value);
        if (isString(value) || isArray(value))
            return value.length === 0;
        if (isObject(value))
            return Object.keys(value).length === 0;
        return false;
    };
    EmptyDrop.prototype.gt = function () {
        return false;
    };
    EmptyDrop.prototype.geq = function () {
        return false;
    };
    EmptyDrop.prototype.lt = function () {
        return false;
    };
    EmptyDrop.prototype.leq = function () {
        return false;
    };
    EmptyDrop.prototype.valueOf = function () {
        return '';
    };
    return EmptyDrop;
}(Drop));

var BlankDrop = /** @class */ (function (_super) {
    __extends(BlankDrop, _super);
    function BlankDrop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlankDrop.prototype.equals = function (value) {
        if (value === false)
            return true;
        if (isNil(toValue$1(value)))
            return true;
        if (isString(value))
            return /^\s*$/.test(value);
        return _super.prototype.equals.call(this, value);
    };
    return BlankDrop;
}(EmptyDrop));

var nil = new NullDrop();
var literalValues = {
    'true': true,
    'false': false,
    'nil': nil,
    'null': nil,
    'empty': new EmptyDrop(),
    'blank': new BlankDrop()
};

var rHex = /[\da-fA-F]/;
var rOct = /[0-7]/;
var escapeChar = {
    b: '\b',
    f: '\f',
    n: '\n',
    r: '\r',
    t: '\t',
    v: '\x0B'
};
function hexVal(c) {
    var code = c.charCodeAt(0);
    if (code >= 97)
        return code - 87;
    if (code >= 65)
        return code - 55;
    return code - 48;
}
function parseStringLiteral(str) {
    var ret = '';
    for (var i = 1; i < str.length - 1; i++) {
        if (str[i] !== '\\') {
            ret += str[i];
            continue;
        }
        if (escapeChar[str[i + 1]] !== undefined) {
            ret += escapeChar[str[++i]];
        }
        else if (str[i + 1] === 'u') {
            var val = 0;
            var j = i + 2;
            while (j <= i + 5 && rHex.test(str[j])) {
                val = val * 16 + hexVal(str[j++]);
            }
            i = j - 1;
            ret += String.fromCharCode(val);
        }
        else if (!rOct.test(str[i + 1])) {
            ret += str[++i];
        }
        else {
            var j = i + 1;
            var val = 0;
            while (j <= i + 3 && rOct.test(str[j])) {
                val = val * 8 + hexVal(str[j++]);
            }
            i = j - 1;
            ret += String.fromCharCode(val);
        }
    }
    return ret;
}

var Expression = /** @class */ (function () {
    function Expression(tokens) {
        this.postfix = __spreadArray([], __read(toPostfix(tokens)), false);
    }
    Expression.prototype.evaluate = function (ctx, lenient) {
        var operands, _a, _b, token, r, l, result, _c, _d, e_1_1;
        var e_1, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    assert(ctx, 'unable to evaluate: context not defined');
                    operands = [];
                    _f.label = 1;
                case 1:
                    _f.trys.push([1, 9, 10, 11]);
                    _a = __values(this.postfix), _b = _a.next();
                    _f.label = 2;
                case 2:
                    if (!!_b.done) return [3 /*break*/, 8];
                    token = _b.value;
                    if (!isOperatorToken(token)) return [3 /*break*/, 5];
                    return [4 /*yield*/, operands.pop()];
                case 3:
                    r = _f.sent();
                    return [4 /*yield*/, operands.pop()];
                case 4:
                    l = _f.sent();
                    result = evalOperatorToken(ctx.opts.operators, token, l, r, ctx);
                    operands.push(result);
                    return [3 /*break*/, 7];
                case 5:
                    _d = (_c = operands).push;
                    return [4 /*yield*/, evalToken(token, ctx, lenient && this.postfix.length === 1)];
                case 6:
                    _d.apply(_c, [_f.sent()]);
                    _f.label = 7;
                case 7:
                    _b = _a.next();
                    return [3 /*break*/, 2];
                case 8: return [3 /*break*/, 11];
                case 9:
                    e_1_1 = _f.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 11];
                case 10:
                    try {
                        if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 11: return [2 /*return*/, operands[0]];
            }
        });
    };
    return Expression;
}());
function evalToken(token, ctx, lenient) {
    if (lenient === void 0) { lenient = false; }
    if (isPropertyAccessToken(token))
        return evalPropertyAccessToken(token, ctx, lenient);
    if (isRangeToken(token))
        return evalRangeToken(token, ctx);
    if (isLiteralToken(token))
        return evalLiteralToken(token);
    if (isNumberToken(token))
        return evalNumberToken(token);
    if (isWordToken(token))
        return token.getText();
    if (isQuotedToken(token))
        return evalQuotedToken(token);
}
function evalPropertyAccessToken(token, ctx, lenient) {
    var props = token.props.map(function (prop) { return evalToken(prop, ctx, false); });
    try {
        return ctx.get(__spreadArray([token.propertyName], __read(props), false));
    }
    catch (e) {
        if (lenient && e.name === 'InternalUndefinedVariableError')
            return null;
        throw (new UndefinedVariableError(e, token));
    }
}
function evalNumberToken(token) {
    var str = token.whole.content + '.' + (token.decimal ? token.decimal.content : '');
    return Number(str);
}
function evalQuotedToken(token) {
    return parseStringLiteral(token.getText());
}
function evalOperatorToken(operators, token, lhs, rhs, ctx) {
    var impl = operators[token.operator];
    return impl(lhs, rhs, ctx);
}
function evalLiteralToken(token) {
    return literalValues[token.literal];
}
function evalRangeToken(token, ctx) {
    var low = evalToken(token.lhs, ctx);
    var high = evalToken(token.rhs, ctx);
    return range(+low, +high + 1);
}
function toPostfix(tokens) {
    var ops, tokens_1, tokens_1_1, token, e_2_1;
    var e_2, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                ops = [];
                _b.label = 1;
            case 1:
                _b.trys.push([1, 10, 11, 12]);
                tokens_1 = __values(tokens), tokens_1_1 = tokens_1.next();
                _b.label = 2;
            case 2:
                if (!!tokens_1_1.done) return [3 /*break*/, 9];
                token = tokens_1_1.value;
                if (!isOperatorToken(token)) return [3 /*break*/, 6];
                _b.label = 3;
            case 3:
                if (!(ops.length && ops[ops.length - 1].getPrecedence() > token.getPrecedence())) return [3 /*break*/, 5];
                return [4 /*yield*/, ops.pop()];
            case 4:
                _b.sent();
                return [3 /*break*/, 3];
            case 5:
                ops.push(token);
                return [3 /*break*/, 8];
            case 6: return [4 /*yield*/, token];
            case 7:
                _b.sent();
                _b.label = 8;
            case 8:
                tokens_1_1 = tokens_1.next();
                return [3 /*break*/, 2];
            case 9: return [3 /*break*/, 12];
            case 10:
                e_2_1 = _b.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 12];
            case 11:
                try {
                    if (tokens_1_1 && !tokens_1_1.done && (_a = tokens_1.return)) _a.call(tokens_1);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 12:
                if (!ops.length) return [3 /*break*/, 14];
                return [4 /*yield*/, ops.pop()];
            case 13:
                _b.sent();
                return [3 /*break*/, 12];
            case 14: return [2 /*return*/];
        }
    });
}

var Token = /** @class */ (function () {
    function Token(kind, input, begin, end, file) {
        this.kind = kind;
        this.input = input;
        this.begin = begin;
        this.end = end;
        this.file = file;
    }
    Token.prototype.getText = function () {
        return this.input.slice(this.begin, this.end);
    };
    Token.prototype.getPosition = function () {
        var _a = __read([1, 1], 2), row = _a[0], col = _a[1];
        for (var i = 0; i < this.begin; i++) {
            if (this.input[i] === '\n') {
                row++;
                col = 1;
            }
            else
                col++;
        }
        return [row, col];
    };
    Token.prototype.size = function () {
        return this.end - this.begin;
    };
    return Token;
}());

var DelimitedToken = /** @class */ (function (_super) {
    __extends(DelimitedToken, _super);
    function DelimitedToken(kind, content, input, begin, end, trimLeft, trimRight, file) {
        var _this = _super.call(this, kind, input, begin, end, file) || this;
        _this.trimLeft = false;
        _this.trimRight = false;
        _this.content = _this.getText();
        var tl = content[0] === '-';
        var tr = last$1(content) === '-';
        _this.content = content
            .slice(tl ? 1 : 0, tr ? -1 : content.length)
            .trim();
        _this.trimLeft = tl || trimLeft;
        _this.trimRight = tr || trimRight;
        return _this;
    }
    return DelimitedToken;
}(Token));

function whiteSpaceCtrl(tokens, options) {
    var inRaw = false;
    for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        if (!isDelimitedToken(token))
            continue;
        if (!inRaw && token.trimLeft) {
            trimLeft(tokens[i - 1], options.greedy);
        }
        if (isTagToken(token)) {
            if (token.name === 'raw')
                inRaw = true;
            else if (token.name === 'endraw')
                inRaw = false;
        }
        if (!inRaw && token.trimRight) {
            trimRight(tokens[i + 1], options.greedy);
        }
    }
}
function trimLeft(token, greedy) {
    if (!token || !isHTMLToken(token))
        return;
    var mask = greedy ? BLANK : INLINE_BLANK;
    while (TYPES[token.input.charCodeAt(token.end - 1 - token.trimRight)] & mask)
        token.trimRight++;
}
function trimRight(token, greedy) {
    if (!token || !isHTMLToken(token))
        return;
    var mask = greedy ? BLANK : INLINE_BLANK;
    while (TYPES[token.input.charCodeAt(token.begin + token.trimLeft)] & mask)
        token.trimLeft++;
    if (token.input.charAt(token.begin + token.trimLeft) === '\n')
        token.trimLeft++;
}

var NumberToken = /** @class */ (function (_super) {
    __extends(NumberToken, _super);
    function NumberToken(whole, decimal) {
        var _this = _super.call(this, TokenKind.Number, whole.input, whole.begin, decimal ? decimal.end : whole.end, whole.file) || this;
        _this.whole = whole;
        _this.decimal = decimal;
        return _this;
    }
    return NumberToken;
}(Token));

var IdentifierToken = /** @class */ (function (_super) {
    __extends(IdentifierToken, _super);
    function IdentifierToken(input, begin, end, file) {
        var _this = _super.call(this, TokenKind.Word, input, begin, end, file) || this;
        _this.input = input;
        _this.begin = begin;
        _this.end = end;
        _this.file = file;
        _this.content = _this.getText();
        return _this;
    }
    IdentifierToken.prototype.isNumber = function (allowSign) {
        if (allowSign === void 0) { allowSign = false; }
        var begin = allowSign && TYPES[this.input.charCodeAt(this.begin)] & SIGN
            ? this.begin + 1
            : this.begin;
        for (var i = begin; i < this.end; i++) {
            if (!(TYPES[this.input.charCodeAt(i)] & NUMBER))
                return false;
        }
        return true;
    };
    return IdentifierToken;
}(Token));

var LiteralToken = /** @class */ (function (_super) {
    __extends(LiteralToken, _super);
    function LiteralToken(input, begin, end, file) {
        var _this = _super.call(this, TokenKind.Literal, input, begin, end, file) || this;
        _this.input = input;
        _this.begin = begin;
        _this.end = end;
        _this.file = file;
        _this.literal = _this.getText();
        return _this;
    }
    return LiteralToken;
}(Token));

var precedence = {
    '==': 1,
    '!=': 1,
    '>': 1,
    '<': 1,
    '>=': 1,
    '<=': 1,
    'contains': 1,
    'and': 0,
    'or': 0
};
var OperatorToken = /** @class */ (function (_super) {
    __extends(OperatorToken, _super);
    function OperatorToken(input, begin, end, file) {
        var _this = _super.call(this, TokenKind.Operator, input, begin, end, file) || this;
        _this.input = input;
        _this.begin = begin;
        _this.end = end;
        _this.file = file;
        _this.operator = _this.getText();
        return _this;
    }
    OperatorToken.prototype.getPrecedence = function () {
        var key = this.getText();
        return key in precedence ? precedence[key] : 1;
    };
    return OperatorToken;
}(Token));

var PropertyAccessToken = /** @class */ (function (_super) {
    __extends(PropertyAccessToken, _super);
    function PropertyAccessToken(variable, props, end) {
        var _this = _super.call(this, TokenKind.PropertyAccess, variable.input, variable.begin, end, variable.file) || this;
        _this.variable = variable;
        _this.props = props;
        _this.propertyName = _this.variable instanceof IdentifierToken
            ? _this.variable.getText()
            : parseStringLiteral(_this.variable.getText());
        return _this;
    }
    return PropertyAccessToken;
}(Token));

var FilterToken = /** @class */ (function (_super) {
    __extends(FilterToken, _super);
    function FilterToken(name, args, input, begin, end, file) {
        var _this = _super.call(this, TokenKind.Filter, input, begin, end, file) || this;
        _this.name = name;
        _this.args = args;
        return _this;
    }
    return FilterToken;
}(Token));

var HashToken = /** @class */ (function (_super) {
    __extends(HashToken, _super);
    function HashToken(input, begin, end, name, value, file) {
        var _this = _super.call(this, TokenKind.Hash, input, begin, end, file) || this;
        _this.input = input;
        _this.begin = begin;
        _this.end = end;
        _this.name = name;
        _this.value = value;
        _this.file = file;
        return _this;
    }
    return HashToken;
}(Token));

var QuotedToken = /** @class */ (function (_super) {
    __extends(QuotedToken, _super);
    function QuotedToken(input, begin, end, file) {
        var _this = _super.call(this, TokenKind.Quoted, input, begin, end, file) || this;
        _this.input = input;
        _this.begin = begin;
        _this.end = end;
        _this.file = file;
        return _this;
    }
    return QuotedToken;
}(Token));

var HTMLToken = /** @class */ (function (_super) {
    __extends(HTMLToken, _super);
    function HTMLToken(input, begin, end, file) {
        var _this = _super.call(this, TokenKind.HTML, input, begin, end, file) || this;
        _this.input = input;
        _this.begin = begin;
        _this.end = end;
        _this.file = file;
        _this.trimLeft = 0;
        _this.trimRight = 0;
        return _this;
    }
    HTMLToken.prototype.getContent = function () {
        return this.input.slice(this.begin + this.trimLeft, this.end - this.trimRight);
    };
    return HTMLToken;
}(Token));

var RangeToken = /** @class */ (function (_super) {
    __extends(RangeToken, _super);
    function RangeToken(input, begin, end, lhs, rhs, file) {
        var _this = _super.call(this, TokenKind.Range, input, begin, end, file) || this;
        _this.input = input;
        _this.begin = begin;
        _this.end = end;
        _this.lhs = lhs;
        _this.rhs = rhs;
        _this.file = file;
        return _this;
    }
    return RangeToken;
}(Token));

var OutputToken = /** @class */ (function (_super) {
    __extends(OutputToken, _super);
    function OutputToken(input, begin, end, options, file) {
        var _this = this;
        var trimOutputLeft = options.trimOutputLeft, trimOutputRight = options.trimOutputRight, outputDelimiterLeft = options.outputDelimiterLeft, outputDelimiterRight = options.outputDelimiterRight;
        var value = input.slice(begin + outputDelimiterLeft.length, end - outputDelimiterRight.length);
        _this = _super.call(this, TokenKind.Output, value, input, begin, end, trimOutputLeft, trimOutputRight, file) || this;
        return _this;
    }
    return OutputToken;
}(DelimitedToken));

function matchOperator(str, begin, trie, end) {
    if (end === void 0) { end = str.length; }
    var node = trie;
    var i = begin;
    var info;
    while (node[str[i]] && i < end) {
        node = node[str[i++]];
        if (node['end'])
            info = node;
    }
    if (!info)
        return -1;
    if (info['needBoundary'] && (TYPES[str.charCodeAt(i)] & IDENTIFIER))
        return -1;
    return i;
}

var LiquidTagToken = /** @class */ (function (_super) {
    __extends(LiquidTagToken, _super);
    function LiquidTagToken(input, begin, end, options, file) {
        var _this = this;
        var value = input.slice(begin, end);
        _this = _super.call(this, TokenKind.Tag, value, input, begin, end, false, false, file) || this;
        if (!/\S/.test(value)) {
            // A line that contains only whitespace.
            _this.name = '';
            _this.args = '';
        }
        else {
            var tokenizer = new Tokenizer(_this.content, options.operatorsTrie);
            _this.name = tokenizer.readIdentifier().getText();
            if (!_this.name)
                throw new TokenizationError("illegal liquid tag syntax", _this);
            tokenizer.skipBlank();
            _this.args = tokenizer.remaining();
        }
        return _this;
    }
    return LiquidTagToken;
}(DelimitedToken));

var Tokenizer = /** @class */ (function () {
    function Tokenizer(input, trie, file) {
        if (file === void 0) { file = ''; }
        this.input = input;
        this.trie = trie;
        this.file = file;
        this.p = 0;
        this.rawBeginAt = -1;
        this.N = input.length;
    }
    Tokenizer.prototype.readExpression = function () {
        return new Expression(this.readExpressionTokens());
    };
    Tokenizer.prototype.readExpressionTokens = function () {
        var operand, operator, operand_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    operand = this.readValue();
                    if (!operand)
                        return [2 /*return*/];
                    return [4 /*yield*/, operand];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (!(this.p < this.N)) return [3 /*break*/, 5];
                    operator = this.readOperator();
                    if (!operator)
                        return [2 /*return*/];
                    operand_1 = this.readValue();
                    if (!operand_1)
                        return [2 /*return*/];
                    return [4 /*yield*/, operator];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, operand_1];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/];
            }
        });
    };
    Tokenizer.prototype.readOperator = function () {
        this.skipBlank();
        var end = matchOperator(this.input, this.p, this.trie);
        if (end === -1)
            return;
        return new OperatorToken(this.input, this.p, (this.p = end), this.file);
    };
    Tokenizer.prototype.readFilters = function () {
        var filters = [];
        while (true) {
            var filter = this.readFilter();
            if (!filter)
                return filters;
            filters.push(filter);
        }
    };
    Tokenizer.prototype.readFilter = function () {
        var _this = this;
        this.skipBlank();
        if (this.end())
            return null;
        assert(this.peek() === '|', function () { return "unexpected token at ".concat(_this.snapshot()); });
        this.p++;
        var begin = this.p;
        var name = this.readIdentifier();
        if (!name.size())
            return null;
        var args = [];
        this.skipBlank();
        if (this.peek() === ':') {
            do {
                ++this.p;
                var arg = this.readFilterArg();
                arg && args.push(arg);
                this.skipBlank();
                assert(this.end() || this.peek() === ',' || this.peek() === '|', function () { return "unexpected character ".concat(_this.snapshot()); });
            } while (this.peek() === ',');
        }
        return new FilterToken(name.getText(), args, this.input, begin, this.p, this.file);
    };
    Tokenizer.prototype.readFilterArg = function () {
        var key = this.readValue();
        if (!key)
            return;
        this.skipBlank();
        if (this.peek() !== ':')
            return key;
        ++this.p;
        var value = this.readValue();
        return [key.getText(), value];
    };
    Tokenizer.prototype.readTopLevelTokens = function (options) {
        if (options === void 0) { options = defaultOptions; }
        var tokens = [];
        while (this.p < this.N) {
            var token = this.readTopLevelToken(options);
            tokens.push(token);
        }
        whiteSpaceCtrl(tokens, options);
        return tokens;
    };
    Tokenizer.prototype.readTopLevelToken = function (options) {
        var tagDelimiterLeft = options.tagDelimiterLeft, outputDelimiterLeft = options.outputDelimiterLeft;
        if (this.rawBeginAt > -1)
            return this.readEndrawOrRawContent(options);
        if (this.match(tagDelimiterLeft))
            return this.readTagToken(options);
        if (this.match(outputDelimiterLeft))
            return this.readOutputToken(options);
        return this.readHTMLToken([tagDelimiterLeft, outputDelimiterLeft]);
    };
    Tokenizer.prototype.readHTMLToken = function (stopStrings) {
        var _this = this;
        var begin = this.p;
        while (this.p < this.N) {
            if (stopStrings.some(function (str) { return _this.match(str); }))
                break;
            ++this.p;
        }
        return new HTMLToken(this.input, begin, this.p, this.file);
    };
    Tokenizer.prototype.readTagToken = function (options) {
        if (options === void 0) { options = defaultOptions; }
        var _a = this, file = _a.file, input = _a.input;
        var begin = this.p;
        if (this.readToDelimiter(options.tagDelimiterRight) === -1) {
            throw this.mkError("tag ".concat(this.snapshot(begin), " not closed"), begin);
        }
        var token = new TagToken(input, begin, this.p, options, file);
        if (token.name === 'raw')
            this.rawBeginAt = begin;
        return token;
    };
    Tokenizer.prototype.readToDelimiter = function (delimiter) {
        while (this.p < this.N) {
            if ((this.peekType() & QUOTE)) {
                this.readQuoted();
                continue;
            }
            ++this.p;
            if (this.rmatch(delimiter))
                return this.p;
        }
        return -1;
    };
    Tokenizer.prototype.readOutputToken = function (options) {
        if (options === void 0) { options = defaultOptions; }
        var _a = this, file = _a.file, input = _a.input;
        var outputDelimiterRight = options.outputDelimiterRight;
        var begin = this.p;
        if (this.readToDelimiter(outputDelimiterRight) === -1) {
            throw this.mkError("output ".concat(this.snapshot(begin), " not closed"), begin);
        }
        return new OutputToken(input, begin, this.p, options, file);
    };
    Tokenizer.prototype.readEndrawOrRawContent = function (options) {
        var tagDelimiterLeft = options.tagDelimiterLeft, tagDelimiterRight = options.tagDelimiterRight;
        var begin = this.p;
        var leftPos = this.readTo(tagDelimiterLeft) - tagDelimiterLeft.length;
        while (this.p < this.N) {
            if (this.readIdentifier().getText() !== 'endraw') {
                leftPos = this.readTo(tagDelimiterLeft) - tagDelimiterLeft.length;
                continue;
            }
            while (this.p <= this.N) {
                if (this.rmatch(tagDelimiterRight)) {
                    var end = this.p;
                    if (begin === leftPos) {
                        this.rawBeginAt = -1;
                        return new TagToken(this.input, begin, end, options, this.file);
                    }
                    else {
                        this.p = leftPos;
                        return new HTMLToken(this.input, begin, leftPos, this.file);
                    }
                }
                if (this.rmatch(tagDelimiterLeft))
                    break;
                this.p++;
            }
        }
        throw this.mkError("raw ".concat(this.snapshot(this.rawBeginAt), " not closed"), begin);
    };
    Tokenizer.prototype.readLiquidTagTokens = function (options) {
        if (options === void 0) { options = defaultOptions; }
        var tokens = [];
        while (this.p < this.N) {
            var token = this.readLiquidTagToken(options);
            if (token.name)
                tokens.push(token);
        }
        return tokens;
    };
    Tokenizer.prototype.readLiquidTagToken = function (options) {
        var _a = this, file = _a.file, input = _a.input;
        var begin = this.p;
        var end = this.N;
        if (this.readToDelimiter('\n') !== -1)
            end = this.p;
        var token = new LiquidTagToken(input, begin, end, options, file);
        return token;
    };
    Tokenizer.prototype.mkError = function (msg, begin) {
        return new TokenizationError(msg, new IdentifierToken(this.input, begin, this.N, this.file));
    };
    Tokenizer.prototype.snapshot = function (begin) {
        if (begin === void 0) { begin = this.p; }
        return JSON.stringify(ellipsis(this.input.slice(begin), 16));
    };
    /**
     * @deprecated
     */
    Tokenizer.prototype.readWord = function () {
        console.warn('Tokenizer#readWord() will be removed, use #readIdentifier instead');
        return this.readIdentifier();
    };
    Tokenizer.prototype.readIdentifier = function () {
        this.skipBlank();
        var begin = this.p;
        while (this.peekType() & IDENTIFIER)
            ++this.p;
        return new IdentifierToken(this.input, begin, this.p, this.file);
    };
    Tokenizer.prototype.readHashes = function (jekyllStyle) {
        var hashes = [];
        while (true) {
            var hash = this.readHash(jekyllStyle);
            if (!hash)
                return hashes;
            hashes.push(hash);
        }
    };
    Tokenizer.prototype.readHash = function (jekyllStyle) {
        this.skipBlank();
        if (this.peek() === ',')
            ++this.p;
        var begin = this.p;
        var name = this.readIdentifier();
        if (!name.size())
            return;
        var value;
        this.skipBlank();
        var sep = jekyllStyle ? '=' : ':';
        if (this.peek() === sep) {
            ++this.p;
            value = this.readValue();
        }
        return new HashToken(this.input, begin, this.p, name, value, this.file);
    };
    Tokenizer.prototype.remaining = function () {
        return this.input.slice(this.p);
    };
    Tokenizer.prototype.advance = function (i) {
        if (i === void 0) { i = 1; }
        this.p += i;
    };
    Tokenizer.prototype.end = function () {
        return this.p >= this.N;
    };
    Tokenizer.prototype.readTo = function (end) {
        while (this.p < this.N) {
            ++this.p;
            if (this.rmatch(end))
                return this.p;
        }
        return -1;
    };
    Tokenizer.prototype.readValue = function () {
        var value = this.readQuoted() || this.readRange();
        if (value)
            return value;
        if (this.peek() === '[') {
            this.p++;
            var prop = this.readQuoted();
            if (!prop)
                return;
            if (this.peek() !== ']')
                return;
            this.p++;
            return new PropertyAccessToken(prop, [], this.p);
        }
        var variable = this.readIdentifier();
        if (!variable.size())
            return;
        var isNumber = variable.isNumber(true);
        var props = [];
        while (true) {
            if (this.peek() === '[') {
                isNumber = false;
                this.p++;
                var prop = this.readValue() || new IdentifierToken(this.input, this.p, this.p, this.file);
                this.readTo(']');
                props.push(prop);
            }
            else if (this.peek() === '.' && this.peek(1) !== '.') { // skip range syntax
                this.p++;
                var prop = this.readIdentifier();
                if (!prop.size())
                    break;
                if (!prop.isNumber())
                    isNumber = false;
                props.push(prop);
            }
            else
                break;
        }
        if (!props.length && literalValues.hasOwnProperty(variable.content)) {
            return new LiteralToken(this.input, variable.begin, variable.end, this.file);
        }
        if (isNumber)
            return new NumberToken(variable, props[0]);
        return new PropertyAccessToken(variable, props, this.p);
    };
    Tokenizer.prototype.readRange = function () {
        this.skipBlank();
        var begin = this.p;
        if (this.peek() !== '(')
            return;
        ++this.p;
        var lhs = this.readValueOrThrow();
        this.p += 2;
        var rhs = this.readValueOrThrow();
        ++this.p;
        return new RangeToken(this.input, begin, this.p, lhs, rhs, this.file);
    };
    Tokenizer.prototype.readValueOrThrow = function () {
        var _this = this;
        var value = this.readValue();
        assert(value, function () { return "unexpected token ".concat(_this.snapshot(), ", value expected"); });
        return value;
    };
    Tokenizer.prototype.readQuoted = function () {
        this.skipBlank();
        var begin = this.p;
        if (!(this.peekType() & QUOTE))
            return;
        ++this.p;
        var escaped = false;
        while (this.p < this.N) {
            ++this.p;
            if (this.input[this.p - 1] === this.input[begin] && !escaped)
                break;
            if (escaped)
                escaped = false;
            else if (this.input[this.p - 1] === '\\')
                escaped = true;
        }
        return new QuotedToken(this.input, begin, this.p, this.file);
    };
    Tokenizer.prototype.readFileNameTemplate = function (options) {
        var outputDelimiterLeft, htmlStopStrings, htmlStopStringSet;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    outputDelimiterLeft = options.outputDelimiterLeft;
                    htmlStopStrings = [',', ' ', outputDelimiterLeft];
                    htmlStopStringSet = new Set(htmlStopStrings);
                    _a.label = 1;
                case 1:
                    if (!(this.p < this.N && !htmlStopStringSet.has(this.peek()))) return [3 /*break*/, 3];
                    return [4 /*yield*/, this.match(outputDelimiterLeft)
                            ? this.readOutputToken(options)
                            : this.readHTMLToken(htmlStopStrings)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    };
    Tokenizer.prototype.match = function (word) {
        for (var i = 0; i < word.length; i++) {
            if (word[i] !== this.input[this.p + i])
                return false;
        }
        return true;
    };
    Tokenizer.prototype.rmatch = function (pattern) {
        for (var i = 0; i < pattern.length; i++) {
            if (pattern[pattern.length - 1 - i] !== this.input[this.p - 1 - i])
                return false;
        }
        return true;
    };
    Tokenizer.prototype.peekType = function (n) {
        if (n === void 0) { n = 0; }
        return TYPES[this.input.charCodeAt(this.p + n)];
    };
    Tokenizer.prototype.peek = function (n) {
        if (n === void 0) { n = 0; }
        return this.input[this.p + n];
    };
    Tokenizer.prototype.skipBlank = function () {
        while (this.peekType() & BLANK)
            ++this.p;
    };
    return Tokenizer;
}());

var TagToken = /** @class */ (function (_super) {
    __extends(TagToken, _super);
    function TagToken(input, begin, end, options, file) {
        var _this = this;
        var trimTagLeft = options.trimTagLeft, trimTagRight = options.trimTagRight, tagDelimiterLeft = options.tagDelimiterLeft, tagDelimiterRight = options.tagDelimiterRight;
        var value = input.slice(begin + tagDelimiterLeft.length, end - tagDelimiterRight.length);
        _this = _super.call(this, TokenKind.Tag, value, input, begin, end, trimTagLeft, trimTagRight, file) || this;
        var tokenizer = new Tokenizer(_this.content, options.operatorsTrie);
        _this.name = tokenizer.readIdentifier().getText();
        if (!_this.name)
            throw new TokenizationError("illegal tag syntax", _this);
        tokenizer.skipBlank();
        _this.args = tokenizer.remaining();
        return _this;
    }
    return TagToken;
}(DelimitedToken));

var ParseStream = /** @class */ (function () {
    function ParseStream(tokens, parseToken) {
        this.handlers = {};
        this.stopRequested = false;
        this.tokens = tokens;
        this.parseToken = parseToken;
    }
    ParseStream.prototype.on = function (name, cb) {
        this.handlers[name] = cb;
        return this;
    };
    ParseStream.prototype.trigger = function (event, arg) {
        var h = this.handlers[event];
        return h ? (h.call(this, arg), true) : false;
    };
    ParseStream.prototype.start = function () {
        this.trigger('start');
        var token;
        while (!this.stopRequested && (token = this.tokens.shift())) {
            if (this.trigger('token', token))
                continue;
            if (isTagToken(token) && this.trigger("tag:".concat(token.name), token)) {
                continue;
            }
            var template = this.parseToken(token, this.tokens);
            this.trigger('template', template);
        }
        if (!this.stopRequested)
            this.trigger('end');
        return this;
    };
    ParseStream.prototype.stop = function () {
        this.stopRequested = true;
        return this;
    };
    return ParseStream;
}());

/**
 * Key-Value Pairs Representing Tag Arguments
 * Example:
 *    For the markup `, foo:'bar', coo:2 reversed %}`,
 *    hash['foo'] === 'bar'
 *    hash['coo'] === 2
 *    hash['reversed'] === undefined
 */
var Hash = /** @class */ (function () {
    function Hash(markup, jekyllStyle) {
        var e_1, _a;
        this.hash = {};
        var tokenizer = new Tokenizer(markup, {});
        try {
            for (var _b = __values(tokenizer.readHashes(jekyllStyle)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var hash = _c.value;
                this.hash[hash.name.content] = hash.value;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    Hash.prototype.render = function (ctx) {
        var hash, _a, _b, key, _c, _d, _e, e_2_1;
        var e_2, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    hash = {};
                    _g.label = 1;
                case 1:
                    _g.trys.push([1, 8, 9, 10]);
                    _a = __values(Object.keys(this.hash)), _b = _a.next();
                    _g.label = 2;
                case 2:
                    if (!!_b.done) return [3 /*break*/, 7];
                    key = _b.value;
                    _c = hash;
                    _d = key;
                    if (!(this.hash[key] === undefined)) return [3 /*break*/, 3];
                    _e = true;
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, evalToken(this.hash[key], ctx)];
                case 4:
                    _e = _g.sent();
                    _g.label = 5;
                case 5:
                    _c[_d] = _e;
                    _g.label = 6;
                case 6:
                    _b = _a.next();
                    return [3 /*break*/, 2];
                case 7: return [3 /*break*/, 10];
                case 8:
                    e_2_1 = _g.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 10];
                case 9:
                    try {
                        if (_b && !_b.done && (_f = _a.return)) _f.call(_a);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7 /*endfinally*/];
                case 10: return [2 /*return*/, hash];
            }
        });
    };
    return Hash;
}());

function isKeyValuePair(arr) {
    return isArray(arr);
}

var Filter = /** @class */ (function () {
    function Filter(name, impl, args, liquid) {
        this.name = name;
        this.impl = impl || identify;
        this.args = args;
        this.liquid = liquid;
    }
    Filter.prototype.render = function (value, context) {
        var e_1, _a;
        var argv = [];
        try {
            for (var _b = __values(this.args), _c = _b.next(); !_c.done; _c = _b.next()) {
                var arg = _c.value;
                if (isKeyValuePair(arg))
                    argv.push([arg[0], evalToken(arg[1], context)]);
                else
                    argv.push(evalToken(arg, context));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this.impl.apply({ context: context, liquid: this.liquid }, __spreadArray([value], __read(argv), false));
    };
    return Filter;
}());

var Value = /** @class */ (function () {
    /**
     * @param str the value to be valuated, eg.: "foobar" | truncate: 3
     */
    function Value(str, liquid) {
        this.filters = [];
        var tokenizer = new Tokenizer(str, liquid.options.operatorsTrie);
        this.initial = tokenizer.readExpression();
        this.filters = tokenizer.readFilters().map(function (_a) {
            var name = _a.name, args = _a.args;
            return new Filter(name, liquid.filters.get(name), args, liquid);
        });
    }
    Value.prototype.value = function (ctx, lenient) {
        var val, _a, _b, filter, e_1_1;
        var e_1, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    lenient = lenient || (ctx.opts.lenientIf && this.filters.length > 0 && this.filters[0].name === 'default');
                    return [4 /*yield*/, this.initial.evaluate(ctx, lenient)];
                case 1:
                    val = _d.sent();
                    _d.label = 2;
                case 2:
                    _d.trys.push([2, 7, 8, 9]);
                    _a = __values(this.filters), _b = _a.next();
                    _d.label = 3;
                case 3:
                    if (!!_b.done) return [3 /*break*/, 6];
                    filter = _b.value;
                    return [4 /*yield*/, filter.render(val, ctx)];
                case 4:
                    val = _d.sent();
                    _d.label = 5;
                case 5:
                    _b = _a.next();
                    return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_1_1 = _d.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 9: return [2 /*return*/, val];
            }
        });
    };
    return Value;
}());

function createResolvedThenable(value) {
    var ret = {
        then: function (resolve) { return resolve(value); },
        catch: function () { return ret; }
    };
    return ret;
}
function createRejectedThenable(err) {
    var ret = {
        then: function (resolve, reject) {
            if (reject)
                return reject(err);
            return ret;
        },
        catch: function (reject) { return reject(err); }
    };
    return ret;
}
function isThenable(val) {
    return val && isFunction(val.then);
}
function isAsyncIterator(val) {
    return val && isFunction(val.next) && isFunction(val.throw) && isFunction(val.return);
}
// convert an async iterator to a thenable (Promise compatible)
function toThenable(val) {
    if (isThenable(val))
        return val;
    if (isAsyncIterator(val))
        return reduce();
    return createResolvedThenable(val);
    function reduce(prev) {
        var state;
        try {
            state = val.next(prev);
        }
        catch (err) {
            return createRejectedThenable(err);
        }
        if (state.done)
            return createResolvedThenable(state.value);
        return toThenable(state.value).then(reduce, function (err) {
            var state;
            try {
                state = val.throw(err);
            }
            catch (e) {
                return createRejectedThenable(e);
            }
            if (state.done)
                return createResolvedThenable(state.value);
            return reduce(state.value);
        });
    }
}
function toPromise(val) {
    return Promise.resolve(toThenable(val));
}
// get the value of async iterator in synchronous manner
function toValue(val) {
    var ret;
    toThenable(val)
        .then(function (x) {
        ret = x;
        return createResolvedThenable(ret);
    })
        .catch(function (err) {
        throw err;
    });
    return ret;
}

var assign = {
    parse: function (token) {
        var tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
        this.key = tokenizer.readIdentifier().content;
        tokenizer.skipBlank();
        assert(tokenizer.peek() === '=', function () { return "illegal token ".concat(token.getText()); });
        tokenizer.advance();
        this.value = tokenizer.remaining();
    },
    render: function (ctx) {
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = ctx.bottom();
                    _b = this.key;
                    return [4 /*yield*/, this.liquid._evalValue(this.value, ctx)];
                case 1:
                    _a[_b] = _c.sent();
                    return [2 /*return*/];
            }
        });
    }
};

var ForloopDrop = /** @class */ (function (_super) {
    __extends(ForloopDrop, _super);
    function ForloopDrop(length, collection, variable) {
        var _this = _super.call(this) || this;
        _this.i = 0;
        _this.length = length;
        _this.name = "".concat(variable, "-").concat(collection);
        return _this;
    }
    ForloopDrop.prototype.next = function () {
        this.i++;
    };
    ForloopDrop.prototype.index0 = function () {
        return this.i;
    };
    ForloopDrop.prototype.index = function () {
        return this.i + 1;
    };
    ForloopDrop.prototype.first = function () {
        return this.i === 0;
    };
    ForloopDrop.prototype.last = function () {
        return this.i === this.length - 1;
    };
    ForloopDrop.prototype.rindex = function () {
        return this.length - this.i;
    };
    ForloopDrop.prototype.rindex0 = function () {
        return this.length - this.i - 1;
    };
    ForloopDrop.prototype.valueOf = function () {
        return JSON.stringify(this);
    };
    return ForloopDrop;
}(Drop));

var MODIFIERS = ['offset', 'limit', 'reversed'];
var For = {
    type: 'block',
    parse: function (token, remainTokens) {
        var _this = this;
        var tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
        var variable = tokenizer.readIdentifier();
        var inStr = tokenizer.readIdentifier();
        var collection = tokenizer.readValue();
        assert(variable.size() && inStr.content === 'in' && collection, function () { return "illegal tag: ".concat(token.getText()); });
        this.variable = variable.content;
        this.collection = collection;
        this.hash = new Hash(tokenizer.remaining());
        this.templates = [];
        this.elseTemplates = [];
        var p;
        var stream = this.liquid.parser.parseStream(remainTokens)
            .on('start', function () { return (p = _this.templates); })
            .on('tag:else', function () { return (p = _this.elseTemplates); })
            .on('tag:endfor', function () { return stream.stop(); })
            .on('template', function (tpl) { return p.push(tpl); })
            .on('end', function () {
            throw new Error("tag ".concat(token.getText(), " not closed"));
        });
        stream.start();
    },
    render: function (ctx, emitter) {
        var r, collection, _a, continueKey, hash, modifiers, scope, collection_1, collection_1_1, item, e_1_1;
        var e_1, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    r = this.liquid.renderer;
                    _a = toEnumerable;
                    return [4 /*yield*/, evalToken(this.collection, ctx)];
                case 1:
                    collection = _a.apply(void 0, [_c.sent()]);
                    if (!!collection.length) return [3 /*break*/, 3];
                    return [4 /*yield*/, r.renderTemplates(this.elseTemplates, ctx, emitter)];
                case 2:
                    _c.sent();
                    return [2 /*return*/];
                case 3:
                    continueKey = 'continue-' + this.variable + '-' + this.collection.getText();
                    ctx.push({ continue: ctx.getRegister(continueKey) });
                    return [4 /*yield*/, this.hash.render(ctx)];
                case 4:
                    hash = _c.sent();
                    ctx.pop();
                    modifiers = this.liquid.options.orderedFilterParameters
                        ? Object.keys(hash).filter(function (x) { return MODIFIERS.includes(x); })
                        : MODIFIERS.filter(function (x) { return hash[x] !== undefined; });
                    collection = modifiers.reduce(function (collection, modifier) {
                        if (modifier === 'offset')
                            return offset(collection, hash['offset']);
                        if (modifier === 'limit')
                            return limit(collection, hash['limit']);
                        return reversed(collection);
                    }, collection);
                    ctx.setRegister(continueKey, (hash['offset'] || 0) + collection.length);
                    scope = { forloop: new ForloopDrop(collection.length, this.collection.getText(), this.variable) };
                    ctx.push(scope);
                    _c.label = 5;
                case 5:
                    _c.trys.push([5, 10, 11, 12]);
                    collection_1 = __values(collection), collection_1_1 = collection_1.next();
                    _c.label = 6;
                case 6:
                    if (!!collection_1_1.done) return [3 /*break*/, 9];
                    item = collection_1_1.value;
                    scope[this.variable] = item;
                    return [4 /*yield*/, r.renderTemplates(this.templates, ctx, emitter)];
                case 7:
                    _c.sent();
                    if (emitter['break']) {
                        emitter['break'] = false;
                        return [3 /*break*/, 9];
                    }
                    emitter['continue'] = false;
                    scope.forloop.next();
                    _c.label = 8;
                case 8:
                    collection_1_1 = collection_1.next();
                    return [3 /*break*/, 6];
                case 9: return [3 /*break*/, 12];
                case 10:
                    e_1_1 = _c.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 12];
                case 11:
                    try {
                        if (collection_1_1 && !collection_1_1.done && (_b = collection_1.return)) _b.call(collection_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 12:
                    ctx.pop();
                    return [2 /*return*/];
            }
        });
    }
};
function reversed(arr) {
    return __spreadArray([], __read(arr), false).reverse();
}
function offset(arr, count) {
    return arr.slice(count);
}
function limit(arr, count) {
    return arr.slice(0, count);
}

var capture = {
    parse: function (tagToken, remainTokens) {
        var _this = this;
        var tokenizer = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie);
        this.variable = readVariableName(tokenizer);
        assert(this.variable, function () { return "".concat(tagToken.args, " not valid identifier"); });
        this.templates = [];
        var stream = this.liquid.parser.parseStream(remainTokens);
        stream.on('tag:endcapture', function () { return stream.stop(); })
            .on('template', function (tpl) { return _this.templates.push(tpl); })
            .on('end', function () {
            throw new Error("tag ".concat(tagToken.getText(), " not closed"));
        });
        stream.start();
    },
    render: function (ctx) {
        var r, html;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    r = this.liquid.renderer;
                    return [4 /*yield*/, r.renderTemplates(this.templates, ctx)];
                case 1:
                    html = _a.sent();
                    ctx.bottom()[this.variable] = html;
                    return [2 /*return*/];
            }
        });
    }
};
function readVariableName(tokenizer) {
    var word = tokenizer.readIdentifier().content;
    if (word)
        return word;
    var quoted = tokenizer.readQuoted();
    if (quoted)
        return evalQuotedToken(quoted);
}

var Case = {
    parse: function (tagToken, remainTokens) {
        var _this = this;
        this.cond = new Value(tagToken.args, this.liquid);
        this.cases = [];
        this.elseTemplates = [];
        var p = [];
        var stream = this.liquid.parser.parseStream(remainTokens)
            .on('tag:when', function (token) {
            p = [];
            var tokenizer = new Tokenizer(token.args, _this.liquid.options.operatorsTrie);
            while (!tokenizer.end()) {
                var value = tokenizer.readValue();
                _this.cases.push({
                    val: value,
                    templates: p
                });
                tokenizer.readTo(',');
            }
        })
            .on('tag:else', function () { return (p = _this.elseTemplates); })
            .on('tag:endcase', function () { return stream.stop(); })
            .on('template', function (tpl) { return p.push(tpl); })
            .on('end', function () {
            throw new Error("tag ".concat(tagToken.getText(), " not closed"));
        });
        stream.start();
    },
    render: function (ctx, emitter) {
        var r, cond, _a, _b, _c, branch, val, e_1_1;
        var e_1, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    r = this.liquid.renderer;
                    _a = toValue$1;
                    return [4 /*yield*/, this.cond.value(ctx, ctx.opts.lenientIf)];
                case 1:
                    cond = _a.apply(void 0, [_e.sent()]);
                    _e.label = 2;
                case 2:
                    _e.trys.push([2, 7, 8, 9]);
                    _b = __values(this.cases), _c = _b.next();
                    _e.label = 3;
                case 3:
                    if (!!_c.done) return [3 /*break*/, 6];
                    branch = _c.value;
                    val = evalToken(branch.val, ctx, ctx.opts.lenientIf);
                    if (!(val === cond)) return [3 /*break*/, 5];
                    return [4 /*yield*/, r.renderTemplates(branch.templates, ctx, emitter)];
                case 4:
                    _e.sent();
                    return [2 /*return*/];
                case 5:
                    _c = _b.next();
                    return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_1_1 = _e.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 9: return [4 /*yield*/, r.renderTemplates(this.elseTemplates, ctx, emitter)];
                case 10:
                    _e.sent();
                    return [2 /*return*/];
            }
        });
    }
};

var comment = {
    parse: function (tagToken, remainTokens) {
        var stream = this.liquid.parser.parseStream(remainTokens);
        stream
            .on('token', function (token) {
            if (token.name === 'endcomment')
                stream.stop();
        })
            .on('end', function () {
            throw new Error("tag ".concat(tagToken.getText(), " not closed"));
        });
        stream.start();
    }
};

var BlockMode;
(function (BlockMode) {
    /* store rendered html into blocks */
    BlockMode[BlockMode["OUTPUT"] = 0] = "OUTPUT";
    /* output rendered html directly */
    BlockMode[BlockMode["STORE"] = 1] = "STORE";
})(BlockMode || (BlockMode = {}));
var BlockMode$1 = BlockMode;

var render = {
    parseFilePath: parseFilePath,
    renderFilePath: renderFilePath,
    parse: function (token) {
        var args = token.args;
        var tokenizer = new Tokenizer(args, this.liquid.options.operatorsTrie);
        this['file'] = this.parseFilePath(tokenizer, this.liquid);
        this['currentFile'] = token.file;
        while (!tokenizer.end()) {
            tokenizer.skipBlank();
            var begin = tokenizer.p;
            var keyword = tokenizer.readIdentifier();
            if (keyword.content === 'with' || keyword.content === 'for') {
                tokenizer.skipBlank();
                // can be normal key/value pair, like "with: true"
                if (tokenizer.peek() !== ':') {
                    var value = tokenizer.readValue();
                    // can be normal key, like "with,"
                    if (value) {
                        var beforeAs = tokenizer.p;
                        var asStr = tokenizer.readIdentifier();
                        var alias = void 0;
                        if (asStr.content === 'as')
                            alias = tokenizer.readIdentifier();
                        else
                            tokenizer.p = beforeAs;
                        this[keyword.content] = { value: value, alias: alias && alias.content };
                        tokenizer.skipBlank();
                        if (tokenizer.peek() === ',')
                            tokenizer.advance();
                        // matched!
                        continue;
                    }
                }
            }
            /**
             * restore cursor if with/for not matched
             */
            tokenizer.p = begin;
            break;
        }
        this.hash = new Hash(tokenizer.remaining());
    },
    render: function (ctx, emitter) {
        var _a, liquid, hash, filepath, childCtx, scope, _b, _c, _d, value, alias, _e, value, alias, collection, collection_1, collection_1_1, item, templates, e_1_1, templates;
        var e_1, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    _a = this, liquid = _a.liquid, hash = _a.hash;
                    return [4 /*yield*/, this.renderFilePath(this['file'], ctx, liquid)];
                case 1:
                    filepath = _g.sent();
                    assert(filepath, function () { return "illegal filename \"".concat(filepath, "\""); });
                    childCtx = new Context({}, ctx.opts, { sync: ctx.sync, globals: ctx.globals, strictVariables: ctx.strictVariables });
                    scope = childCtx.bottom();
                    _b = __assign;
                    _c = [scope];
                    return [4 /*yield*/, hash.render(ctx)];
                case 2:
                    _b.apply(void 0, _c.concat([_g.sent()]));
                    if (this['with']) {
                        _d = this['with'], value = _d.value, alias = _d.alias;
                        scope[alias || filepath] = evalToken(value, ctx);
                    }
                    if (!this['for']) return [3 /*break*/, 12];
                    _e = this['for'], value = _e.value, alias = _e.alias;
                    collection = evalToken(value, ctx);
                    collection = toEnumerable(collection);
                    scope['forloop'] = new ForloopDrop(collection.length, value.getText(), alias);
                    _g.label = 3;
                case 3:
                    _g.trys.push([3, 9, 10, 11]);
                    collection_1 = __values(collection), collection_1_1 = collection_1.next();
                    _g.label = 4;
                case 4:
                    if (!!collection_1_1.done) return [3 /*break*/, 8];
                    item = collection_1_1.value;
                    scope[alias] = item;
                    return [4 /*yield*/, liquid._parsePartialFile(filepath, childCtx.sync, this['currentFile'])];
                case 5:
                    templates = _g.sent();
                    return [4 /*yield*/, liquid.renderer.renderTemplates(templates, childCtx, emitter)];
                case 6:
                    _g.sent();
                    scope['forloop'].next();
                    _g.label = 7;
                case 7:
                    collection_1_1 = collection_1.next();
                    return [3 /*break*/, 4];
                case 8: return [3 /*break*/, 11];
                case 9:
                    e_1_1 = _g.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 11];
                case 10:
                    try {
                        if (collection_1_1 && !collection_1_1.done && (_f = collection_1.return)) _f.call(collection_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 11: return [3 /*break*/, 15];
                case 12: return [4 /*yield*/, liquid._parsePartialFile(filepath, childCtx.sync, this['currentFile'])];
                case 13:
                    templates = _g.sent();
                    return [4 /*yield*/, liquid.renderer.renderTemplates(templates, childCtx, emitter)];
                case 14:
                    _g.sent();
                    _g.label = 15;
                case 15: return [2 /*return*/];
            }
        });
    }
};
/**
 * @return null for "none",
 * @return Template[] for quoted with tags and/or filters
 * @return Token for expression (not quoted)
 * @throws TypeError if cannot read next token
 */
function parseFilePath(tokenizer, liquid) {
    if (liquid.options.dynamicPartials) {
        var file = tokenizer.readValue();
        if (file === undefined)
            throw new TypeError("illegal argument \"".concat(tokenizer.input, "\""));
        if (file.getText() === 'none')
            return null;
        if (isQuotedToken(file)) {
            // for filenames like "files/{{file}}", eval as liquid template
            var templates_1 = liquid.parse(evalQuotedToken(file));
            return optimize(templates_1);
        }
        return file;
    }
    var tokens = __spreadArray([], __read(tokenizer.readFileNameTemplate(liquid.options)), false);
    var templates = optimize(liquid.parser.parseTokens(tokens));
    return templates === 'none' ? null : templates;
}
function optimize(templates) {
    // for filenames like "files/file.liquid", extract the string directly
    if (templates.length === 1 && isHTMLToken(templates[0].token))
        return templates[0].token.getContent();
    return templates;
}
function renderFilePath(file, ctx, liquid) {
    if (typeof file === 'string')
        return file;
    if (Array.isArray(file))
        return liquid.renderer.renderTemplates(file, ctx);
    return evalToken(file, ctx);
}

var include = {
    parseFilePath: parseFilePath,
    renderFilePath: renderFilePath,
    parse: function (token) {
        var args = token.args;
        var tokenizer = new Tokenizer(args, this.liquid.options.operatorsTrie);
        this['file'] = this.parseFilePath(tokenizer, this.liquid);
        this['currentFile'] = token.file;
        var begin = tokenizer.p;
        var withStr = tokenizer.readIdentifier();
        if (withStr.content === 'with') {
            tokenizer.skipBlank();
            if (tokenizer.peek() !== ':') {
                this.withVar = tokenizer.readValue();
            }
            else
                tokenizer.p = begin;
        }
        else
            tokenizer.p = begin;
        this.hash = new Hash(tokenizer.remaining(), this.liquid.options.jekyllInclude);
    },
    render: function (ctx, emitter) {
        var _a, liquid, hash, withVar, renderer, filepath, saved, scope, templates;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = this, liquid = _a.liquid, hash = _a.hash, withVar = _a.withVar;
                    renderer = liquid.renderer;
                    return [4 /*yield*/, this.renderFilePath(this['file'], ctx, liquid)];
                case 1:
                    filepath = _b.sent();
                    assert(filepath, function () { return "illegal filename \"".concat(filepath, "\""); });
                    saved = ctx.saveRegister('blocks', 'blockMode');
                    ctx.setRegister('blocks', {});
                    ctx.setRegister('blockMode', BlockMode$1.OUTPUT);
                    return [4 /*yield*/, hash.render(ctx)];
                case 2:
                    scope = _b.sent();
                    if (withVar)
                        scope[filepath] = evalToken(withVar, ctx);
                    return [4 /*yield*/, liquid._parsePartialFile(filepath, ctx.sync, this['currentFile'])];
                case 3:
                    templates = _b.sent();
                    ctx.push(ctx.opts.jekyllInclude ? { include: scope } : scope);
                    return [4 /*yield*/, renderer.renderTemplates(templates, ctx, emitter)];
                case 4:
                    _b.sent();
                    ctx.pop();
                    ctx.restoreRegister(saved);
                    return [2 /*return*/];
            }
        });
    }
};

var decrement = {
    parse: function (token) {
        var tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
        this.variable = tokenizer.readIdentifier().content;
    },
    render: function (context, emitter) {
        var scope = context.environments;
        if (!isNumber(scope[this.variable])) {
            scope[this.variable] = 0;
        }
        emitter.write(stringify(--scope[this.variable]));
    }
};

var cycle = {
    parse: function (tagToken) {
        var tokenizer = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie);
        var group = tokenizer.readValue();
        tokenizer.skipBlank();
        this.candidates = [];
        if (group) {
            if (tokenizer.peek() === ':') {
                this.group = group;
                tokenizer.advance();
            }
            else
                this.candidates.push(group);
        }
        while (!tokenizer.end()) {
            var value = tokenizer.readValue();
            if (value)
                this.candidates.push(value);
            tokenizer.readTo(',');
        }
        assert(this.candidates.length, function () { return "empty candidates: ".concat(tagToken.getText()); });
    },
    render: function (ctx, emitter) {
        var group = evalToken(this.group, ctx);
        var fingerprint = "cycle:".concat(group, ":") + this.candidates.join(',');
        var groups = ctx.getRegister('cycle');
        var idx = groups[fingerprint];
        if (idx === undefined) {
            idx = groups[fingerprint] = 0;
        }
        var candidate = this.candidates[idx];
        idx = (idx + 1) % this.candidates.length;
        groups[fingerprint] = idx;
        var html = evalToken(candidate, ctx);
        emitter.write(html);
    }
};

var If = {
    parse: function (tagToken, remainTokens) {
        var _this = this;
        this.branches = [];
        this.elseTemplates = [];
        var p;
        this.liquid.parser.parseStream(remainTokens)
            .on('start', function () { return _this.branches.push({
            predicate: new Value(tagToken.args, _this.liquid),
            templates: (p = [])
        }); })
            .on('tag:elsif', function (token) { return _this.branches.push({
            predicate: new Value(token.args, _this.liquid),
            templates: (p = [])
        }); })
            .on('tag:else', function () { return (p = _this.elseTemplates); })
            .on('tag:endif', function () { this.stop(); })
            .on('template', function (tpl) { return p.push(tpl); })
            .on('end', function () { throw new Error("tag ".concat(tagToken.getText(), " not closed")); })
            .start();
    },
    render: function (ctx, emitter) {
        var r, _a, _b, _c, predicate, templates, value, e_1_1;
        var e_1, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    r = this.liquid.renderer;
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 7, 8, 9]);
                    _a = __values(this.branches), _b = _a.next();
                    _e.label = 2;
                case 2:
                    if (!!_b.done) return [3 /*break*/, 6];
                    _c = _b.value, predicate = _c.predicate, templates = _c.templates;
                    return [4 /*yield*/, predicate.value(ctx, ctx.opts.lenientIf)];
                case 3:
                    value = _e.sent();
                    if (!isTruthy(value, ctx)) return [3 /*break*/, 5];
                    return [4 /*yield*/, r.renderTemplates(templates, ctx, emitter)];
                case 4:
                    _e.sent();
                    return [2 /*return*/];
                case 5:
                    _b = _a.next();
                    return [3 /*break*/, 2];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_1_1 = _e.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 9: return [4 /*yield*/, r.renderTemplates(this.elseTemplates, ctx, emitter)];
                case 10:
                    _e.sent();
                    return [2 /*return*/];
            }
        });
    }
};

var increment = {
    parse: function (token) {
        var tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
        this.variable = tokenizer.readIdentifier().content;
    },
    render: function (context, emitter) {
        var scope = context.environments;
        if (!isNumber(scope[this.variable])) {
            scope[this.variable] = 0;
        }
        var val = scope[this.variable];
        scope[this.variable]++;
        emitter.write(stringify(val));
    }
};

var layout = {
    parseFilePath: parseFilePath,
    renderFilePath: renderFilePath,
    parse: function (token, remainTokens) {
        var tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
        this['file'] = this.parseFilePath(tokenizer, this.liquid);
        this['currentFile'] = token.file;
        this.hash = new Hash(tokenizer.remaining());
        this.tpls = this.liquid.parser.parseTokens(remainTokens);
    },
    render: function (ctx, emitter) {
        var _a, liquid, hash, file, renderer, filepath, templates, html, blocks, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = this, liquid = _a.liquid, hash = _a.hash, file = _a.file;
                    renderer = liquid.renderer;
                    if (!(file === null)) return [3 /*break*/, 2];
                    ctx.setRegister('blockMode', BlockMode$1.OUTPUT);
                    return [4 /*yield*/, renderer.renderTemplates(this.tpls, ctx, emitter)];
                case 1:
                    _d.sent();
                    return [2 /*return*/];
                case 2: return [4 /*yield*/, this.renderFilePath(this['file'], ctx, liquid)];
                case 3:
                    filepath = _d.sent();
                    assert(filepath, function () { return "illegal filename \"".concat(filepath, "\""); });
                    return [4 /*yield*/, liquid._parseLayoutFile(filepath, ctx.sync, this['currentFile'])
                        // render remaining contents and store rendered results
                    ];
                case 4:
                    templates = _d.sent();
                    // render remaining contents and store rendered results
                    ctx.setRegister('blockMode', BlockMode$1.STORE);
                    return [4 /*yield*/, renderer.renderTemplates(this.tpls, ctx)];
                case 5:
                    html = _d.sent();
                    blocks = ctx.getRegister('blocks');
                    // set whole content to anonymous block if anonymous doesn't specified
                    if (blocks[''] === undefined)
                        blocks[''] = function (parent, emitter) { return emitter.write(html); };
                    ctx.setRegister('blockMode', BlockMode$1.OUTPUT);
                    // render the layout file use stored blocks
                    _c = (_b = ctx).push;
                    return [4 /*yield*/, hash.render(ctx)];
                case 6:
                    // render the layout file use stored blocks
                    _c.apply(_b, [_d.sent()]);
                    return [4 /*yield*/, renderer.renderTemplates(templates, ctx, emitter)];
                case 7:
                    _d.sent();
                    ctx.pop();
                    return [2 /*return*/];
            }
        });
    }
};

var BlockDrop = /** @class */ (function (_super) {
    __extends(BlockDrop, _super);
    function BlockDrop(
    // the block render from layout template
    superBlockRender) {
        if (superBlockRender === void 0) { superBlockRender = function () { return ''; }; }
        var _this = _super.call(this) || this;
        _this.superBlockRender = superBlockRender;
        return _this;
    }
    /**
     * Provide parent access in child block by
     * {{ block.super }}
     */
    BlockDrop.prototype.super = function () {
        return this.superBlockRender();
    };
    return BlockDrop;
}(Drop));

var block = {
    parse: function (token, remainTokens) {
        var _this = this;
        var match = /\w+/.exec(token.args);
        this.block = match ? match[0] : '';
        this.tpls = [];
        this.liquid.parser.parseStream(remainTokens)
            .on('tag:endblock', function () { this.stop(); })
            .on('template', function (tpl) { return _this.tpls.push(tpl); })
            .on('end', function () { throw new Error("tag ".concat(token.getText(), " not closed")); })
            .start();
    },
    render: function (ctx, emitter) {
        var blockRender;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    blockRender = this.getBlockRender(ctx);
                    if (!(ctx.getRegister('blockMode') === BlockMode$1.STORE)) return [3 /*break*/, 1];
                    ctx.getRegister('blocks')[this.block] = blockRender;
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, blockRender(new BlockDrop(), emitter)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    },
    getBlockRender: function (ctx) {
        var _a = this, liquid = _a.liquid, tpls = _a.tpls;
        var renderChild = ctx.getRegister('blocks')[this.block];
        var renderCurrent = function (superBlock, emitter) {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // add {{ block.super }} support when rendering
                        ctx.push({ block: superBlock });
                        return [4 /*yield*/, liquid.renderer.renderTemplates(tpls, ctx, emitter)];
                    case 1:
                        _a.sent();
                        ctx.pop();
                        return [2 /*return*/];
                }
            });
        };
        return renderChild
            ? function (superBlock, emitter) { return renderChild(new BlockDrop(function () { return renderCurrent(superBlock, emitter); }), emitter); }
            : renderCurrent;
    }
};

var raw = {
    parse: function (tagToken, remainTokens) {
        var _this = this;
        this.tokens = [];
        var stream = this.liquid.parser.parseStream(remainTokens);
        stream
            .on('token', function (token) {
            if (token.name === 'endraw')
                stream.stop();
            else
                _this.tokens.push(token);
        })
            .on('end', function () {
            throw new Error("tag ".concat(tagToken.getText(), " not closed"));
        });
        stream.start();
    },
    render: function () {
        return this.tokens.map(function (token) { return token.getText(); }).join('');
    }
};

var TablerowloopDrop = /** @class */ (function (_super) {
    __extends(TablerowloopDrop, _super);
    function TablerowloopDrop(length, cols, collection, variable) {
        var _this = _super.call(this, length, collection, variable) || this;
        _this.length = length;
        _this.cols = cols;
        return _this;
    }
    TablerowloopDrop.prototype.row = function () {
        return Math.floor(this.i / this.cols) + 1;
    };
    TablerowloopDrop.prototype.col0 = function () {
        return (this.i % this.cols);
    };
    TablerowloopDrop.prototype.col = function () {
        return this.col0() + 1;
    };
    TablerowloopDrop.prototype.col_first = function () {
        return this.col0() === 0;
    };
    TablerowloopDrop.prototype.col_last = function () {
        return this.col() === this.cols;
    };
    return TablerowloopDrop;
}(ForloopDrop));

var tablerow = {
    parse: function (tagToken, remainTokens) {
        var _this = this;
        var tokenizer = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie);
        var variable = tokenizer.readIdentifier();
        tokenizer.skipBlank();
        var tmp = tokenizer.readIdentifier();
        assert(tmp && tmp.content === 'in', function () { return "illegal tag: ".concat(tagToken.getText()); });
        this.variable = variable.content;
        this.collection = tokenizer.readValue();
        this.hash = new Hash(tokenizer.remaining());
        this.templates = [];
        var p;
        var stream = this.liquid.parser.parseStream(remainTokens)
            .on('start', function () { return (p = _this.templates); })
            .on('tag:endtablerow', function () { return stream.stop(); })
            .on('template', function (tpl) { return p.push(tpl); })
            .on('end', function () {
            throw new Error("tag ".concat(tagToken.getText(), " not closed"));
        });
        stream.start();
    },
    render: function (ctx, emitter) {
        var collection, _a, hash, offset, limit, cols, r, tablerowloop, scope, idx;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = toEnumerable;
                    return [4 /*yield*/, evalToken(this.collection, ctx)];
                case 1:
                    collection = _a.apply(void 0, [_b.sent()]);
                    return [4 /*yield*/, this.hash.render(ctx)];
                case 2:
                    hash = _b.sent();
                    offset = hash.offset || 0;
                    limit = (hash.limit === undefined) ? collection.length : hash.limit;
                    collection = collection.slice(offset, offset + limit);
                    cols = hash.cols || collection.length;
                    r = this.liquid.renderer;
                    tablerowloop = new TablerowloopDrop(collection.length, cols, this.collection.getText(), this.variable);
                    scope = { tablerowloop: tablerowloop };
                    ctx.push(scope);
                    idx = 0;
                    _b.label = 3;
                case 3:
                    if (!(idx < collection.length)) return [3 /*break*/, 6];
                    scope[this.variable] = collection[idx];
                    if (tablerowloop.col0() === 0) {
                        if (tablerowloop.row() !== 1)
                            emitter.write('</tr>');
                        emitter.write("<tr class=\"row".concat(tablerowloop.row(), "\">"));
                    }
                    emitter.write("<td class=\"col".concat(tablerowloop.col(), "\">"));
                    return [4 /*yield*/, r.renderTemplates(this.templates, ctx, emitter)];
                case 4:
                    _b.sent();
                    emitter.write('</td>');
                    _b.label = 5;
                case 5:
                    idx++, tablerowloop.next();
                    return [3 /*break*/, 3];
                case 6:
                    if (collection.length)
                        emitter.write('</tr>');
                    ctx.pop();
                    return [2 /*return*/];
            }
        });
    }
};

var unless = {
    parse: function (tagToken, remainTokens) {
        var _this = this;
        this.branches = [];
        this.elseTemplates = [];
        var p;
        this.liquid.parser.parseStream(remainTokens)
            .on('start', function () { return _this.branches.push({
            predicate: new Value(tagToken.args, _this.liquid),
            test: isFalsy,
            templates: (p = [])
        }); })
            .on('tag:elsif', function (token) { return _this.branches.push({
            predicate: new Value(token.args, _this.liquid),
            test: isTruthy,
            templates: (p = [])
        }); })
            .on('tag:else', function () { return (p = _this.elseTemplates); })
            .on('tag:endunless', function () { this.stop(); })
            .on('template', function (tpl) { return p.push(tpl); })
            .on('end', function () { throw new Error("tag ".concat(tagToken.getText(), " not closed")); })
            .start();
    },
    render: function (ctx, emitter) {
        var r, _a, _b, _c, predicate, test_1, templates, value, e_1_1;
        var e_1, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    r = this.liquid.renderer;
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 7, 8, 9]);
                    _a = __values(this.branches), _b = _a.next();
                    _e.label = 2;
                case 2:
                    if (!!_b.done) return [3 /*break*/, 6];
                    _c = _b.value, predicate = _c.predicate, test_1 = _c.test, templates = _c.templates;
                    return [4 /*yield*/, predicate.value(ctx, ctx.opts.lenientIf)];
                case 3:
                    value = _e.sent();
                    if (!test_1(value, ctx)) return [3 /*break*/, 5];
                    return [4 /*yield*/, r.renderTemplates(templates, ctx, emitter)];
                case 4:
                    _e.sent();
                    return [2 /*return*/];
                case 5:
                    _b = _a.next();
                    return [3 /*break*/, 2];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_1_1 = _e.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 9: return [4 /*yield*/, r.renderTemplates(this.elseTemplates, ctx, emitter)];
                case 10:
                    _e.sent();
                    return [2 /*return*/];
            }
        });
    }
};

var Break = {
    render: function (ctx, emitter) {
        emitter['break'] = true;
    }
};

var Continue = {
    render: function (ctx, emitter) {
        emitter['continue'] = true;
    }
};

var echo = {
    parse: function (token) {
        this.value = new Value(token.args, this.liquid);
    },
    render: function (ctx, emitter) {
        var val;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.value.value(ctx, false)];
                case 1:
                    val = _a.sent();
                    emitter.write(val);
                    return [2 /*return*/];
            }
        });
    }
};

var liquid = {
    parse: function (token) {
        var tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
        var tokens = tokenizer.readLiquidTagTokens(this.liquid.options);
        this.tpls = this.liquid.parser.parseTokens(tokens);
    },
    render: function (ctx, emitter) {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.liquid.renderer.renderTemplates(this.tpls, ctx, emitter)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
};

var tags = {
    assign: assign,
    'for': For,
    capture: capture,
    'case': Case,
    comment: comment,
    include: include,
    render: render,
    decrement: decrement,
    increment: increment,
    cycle: cycle,
    'if': If,
    layout: layout,
    block: block,
    raw: raw,
    tablerow: tablerow,
    unless: unless,
    'break': Break, 'continue': Continue,
    echo: echo,
    liquid: liquid
};

var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': tags
});

var filters = new Map();
forOwn(builtinFilters, function (conf, name) {
    filters.set(snakeCase(name), conf);
});
var defaultOptions = {
    root: ['.'],
    layouts: ['.'],
    partials: ['.'],
    relativeReference: true,
    jekyllInclude: false,
    cache: undefined,
    extname: '',
    fs: fs,
    dynamicPartials: true,
    jsTruthy: false,
    trimTagRight: false,
    trimTagLeft: false,
    trimOutputRight: false,
    trimOutputLeft: false,
    greedy: true,
    tagDelimiterLeft: '{%',
    tagDelimiterRight: '%}',
    outputDelimiterLeft: '{{',
    outputDelimiterRight: '}}',
    preserveTimezones: false,
    strictFilters: false,
    strictVariables: false,
    ownPropertyOnly: false,
    lenientIf: false,
    globals: {},
    keepOutputType: false,
    operators: defaultOperators,
    operatorsTrie: createTrie(defaultOperators)
};
function normalize(options) {
    if (options.hasOwnProperty('operators')) {
        options.operatorsTrie = createTrie(options.operators);
    }
    if (options.hasOwnProperty('root')) {
        if (!options.hasOwnProperty('partials'))
            options.partials = options.root;
        if (!options.hasOwnProperty('layouts'))
            options.layouts = options.root;
    }
    if (options.hasOwnProperty('cache')) {
        var cache = void 0;
        if (typeof options.cache === 'number')
            cache = options.cache > 0 ? new LRU(options.cache) : undefined;
        else if (typeof options.cache === 'object')
            cache = options.cache;
        else
            cache = options.cache ? new LRU(1024) : undefined;
        options.cache = cache;
    }
    options = __assign(__assign(__assign({}, defaultOptions), (options.jekyllInclude ? { dynamicPartials: false } : {})), options);
    if (!options.fs.dirname && options.relativeReference) {
        console.warn('[LiquidJS] `fs.dirname` is required for relativeReference, set relativeReference to `false` to suppress this warning, or provide implementation for `fs.dirname`');
        options.relativeReference = false;
    }
    options.root = normalizeDirectoryList(options.root);
    options.partials = normalizeDirectoryList(options.partials);
    options.layouts = normalizeDirectoryList(options.layouts);
    options.outputEscape = options.outputEscape && getOutputEscapeFunction(options.outputEscape);
    return options;
}
function getOutputEscapeFunction(nameOrFunction) {
    if (isString(nameOrFunction)) {
        var filterImpl = filters.get(nameOrFunction);
        assert(isFunction(filterImpl), "filter \"".concat(nameOrFunction, "\" not found"));
        return filterImpl;
    }
    else {
        assert(isFunction(nameOrFunction), '`outputEscape` need to be of type string or function');
        return nameOrFunction;
    }
}
function normalizeDirectoryList(value) {
    var list = [];
    if (isArray(value))
        list = value;
    if (isString(value))
        list = [value];
    return list;
}

var Context = /** @class */ (function () {
    function Context(env, opts, renderOptions) {
        if (env === void 0) { env = {}; }
        if (opts === void 0) { opts = defaultOptions; }
        if (renderOptions === void 0) { renderOptions = {}; }
        var _a, _b;
        /**
         * insert a Context-level empty scope,
         * for tags like `{% capture %}` `{% assign %}` to operate
         */
        this.scopes = [{}];
        this.registers = {};
        this.sync = !!renderOptions.sync;
        this.opts = opts;
        this.globals = (_a = renderOptions.globals) !== null && _a !== void 0 ? _a : opts.globals;
        this.environments = env;
        this.strictVariables = (_b = renderOptions.strictVariables) !== null && _b !== void 0 ? _b : this.opts.strictVariables;
    }
    Context.prototype.getRegister = function (key) {
        return (this.registers[key] = this.registers[key] || {});
    };
    Context.prototype.setRegister = function (key, value) {
        return (this.registers[key] = value);
    };
    Context.prototype.saveRegister = function () {
        var _this = this;
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        return keys.map(function (key) { return [key, _this.getRegister(key)]; });
    };
    Context.prototype.restoreRegister = function (keyValues) {
        var _this = this;
        return keyValues.forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            return _this.setRegister(key, value);
        });
    };
    Context.prototype.getAll = function () {
        return __spreadArray([this.globals, this.environments], __read(this.scopes), false).reduce(function (ctx, val) { return __assign(ctx, val); }, {});
    };
    Context.prototype.get = function (paths) {
        var scope = this.findScope(paths[0]);
        return this.getFromScope(scope, paths);
    };
    Context.prototype.getFromScope = function (scope, paths) {
        var _this = this;
        if (isString(paths))
            paths = paths.split('.');
        return paths.reduce(function (scope, path, i) {
            scope = readProperty(scope, path, _this.opts.ownPropertyOnly);
            if (isNil(scope) && _this.strictVariables) {
                throw new InternalUndefinedVariableError(paths.slice(0, i + 1).join('.'));
            }
            return scope;
        }, scope);
    };
    Context.prototype.push = function (ctx) {
        return this.scopes.push(ctx);
    };
    Context.prototype.pop = function () {
        return this.scopes.pop();
    };
    Context.prototype.bottom = function () {
        return this.scopes[0];
    };
    Context.prototype.findScope = function (key) {
        for (var i = this.scopes.length - 1; i >= 0; i--) {
            var candidate = this.scopes[i];
            if (key in candidate)
                return candidate;
        }
        if (key in this.environments)
            return this.environments;
        return this.globals;
    };
    return Context;
}());
function readProperty(obj, key, ownPropertyOnly) {
    if (isNil(obj))
        return obj;
    obj = toLiquid(obj);
    if (isArray(obj) && key < 0)
        return obj[obj.length + +key];
    var jsProperty = readJSProperty(obj, key, ownPropertyOnly);
    if (jsProperty === undefined && obj instanceof Drop)
        return obj.liquidMethodMissing(key);
    if (isFunction(jsProperty))
        return jsProperty.call(obj);
    if (key === 'size')
        return readSize(obj);
    else if (key === 'first')
        return readFirst(obj);
    else if (key === 'last')
        return readLast(obj);
    return jsProperty;
}
function readJSProperty(obj, key, ownPropertyOnly) {
    if (ownPropertyOnly && !Object.hasOwnProperty.call(obj, key))
        return undefined;
    return obj[key];
}
function readFirst(obj) {
    if (isArray(obj))
        return obj[0];
    return obj['first'];
}
function readLast(obj) {
    if (isArray(obj))
        return obj[obj.length - 1];
    return obj['last'];
}
function readSize(obj) {
    if (obj.hasOwnProperty('size') || obj['size'] !== undefined)
        return obj['size'];
    if (isArray(obj) || isString(obj))
        return obj.length;
    if (typeof obj === 'object')
        return Object.keys(obj).length;
}

var LookupType;
(function (LookupType) {
    LookupType["Partials"] = "partials";
    LookupType["Layouts"] = "layouts";
    LookupType["Root"] = "root";
})(LookupType || (LookupType = {}));
var Loader = /** @class */ (function () {
    function Loader(options) {
        this.options = options;
        if (options.relativeReference) {
            var sep = options.fs.sep;
            assert(sep, '`fs.sep` is required for relative reference');
            var rRelativePath_1 = new RegExp(['.' + sep, '..' + sep, './', '../'].map(function (prefix) { return escapeRegex(prefix); }).join('|'));
            this.shouldLoadRelative = function (referencedFile) { return rRelativePath_1.test(referencedFile); };
        }
        else {
            this.shouldLoadRelative = function (referencedFile) { return false; };
        }
        this.contains = this.options.fs.contains || (function () { return true; });
    }
    Loader.prototype.lookup = function (file, type, sync, currentFile) {
        var fs, dirs, _a, _b, filepath, _c, e_1_1;
        var e_1, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    fs = this.options.fs;
                    dirs = this.options[type];
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 8, 9, 10]);
                    _a = __values(this.candidates(file, dirs, currentFile, type !== LookupType.Root)), _b = _a.next();
                    _e.label = 2;
                case 2:
                    if (!!_b.done) return [3 /*break*/, 7];
                    filepath = _b.value;
                    if (!sync) return [3 /*break*/, 3];
                    _c = fs.existsSync(filepath);
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, fs.exists(filepath)];
                case 4:
                    _c = _e.sent();
                    _e.label = 5;
                case 5:
                    if (_c)
                        return [2 /*return*/, filepath];
                    _e.label = 6;
                case 6:
                    _b = _a.next();
                    return [3 /*break*/, 2];
                case 7: return [3 /*break*/, 10];
                case 8:
                    e_1_1 = _e.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 10];
                case 9:
                    try {
                        if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 10: throw this.lookupError(file, dirs);
            }
        });
    };
    Loader.prototype.candidates = function (file, dirs, currentFile, enforceRoot) {
        var _a, fs, extname, referenced, dirs_1, dirs_1_1, dir, e_2_1, dirs_2, dirs_2_1, dir, referenced, e_3_1, filepath;
        var e_2, _b, e_3, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = this.options, fs = _a.fs, extname = _a.extname;
                    if (!(this.shouldLoadRelative(file) && currentFile)) return [3 /*break*/, 8];
                    referenced = fs.resolve(this.dirname(currentFile), file, extname);
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 6, 7, 8]);
                    dirs_1 = __values(dirs), dirs_1_1 = dirs_1.next();
                    _d.label = 2;
                case 2:
                    if (!!dirs_1_1.done) return [3 /*break*/, 5];
                    dir = dirs_1_1.value;
                    if (!(!enforceRoot || this.contains(dir, referenced))) return [3 /*break*/, 4];
                    // the relatively referenced file is within one of root dirs
                    return [4 /*yield*/, referenced];
                case 3:
                    // the relatively referenced file is within one of root dirs
                    _d.sent();
                    return [3 /*break*/, 5];
                case 4:
                    dirs_1_1 = dirs_1.next();
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 8];
                case 6:
                    e_2_1 = _d.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 8];
                case 7:
                    try {
                        if (dirs_1_1 && !dirs_1_1.done && (_b = dirs_1.return)) _b.call(dirs_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7 /*endfinally*/];
                case 8:
                    _d.trys.push([8, 13, 14, 15]);
                    dirs_2 = __values(dirs), dirs_2_1 = dirs_2.next();
                    _d.label = 9;
                case 9:
                    if (!!dirs_2_1.done) return [3 /*break*/, 12];
                    dir = dirs_2_1.value;
                    referenced = fs.resolve(dir, file, extname);
                    if (!(!enforceRoot || this.contains(dir, referenced))) return [3 /*break*/, 11];
                    return [4 /*yield*/, referenced];
                case 10:
                    _d.sent();
                    _d.label = 11;
                case 11:
                    dirs_2_1 = dirs_2.next();
                    return [3 /*break*/, 9];
                case 12: return [3 /*break*/, 15];
                case 13:
                    e_3_1 = _d.sent();
                    e_3 = { error: e_3_1 };
                    return [3 /*break*/, 15];
                case 14:
                    try {
                        if (dirs_2_1 && !dirs_2_1.done && (_c = dirs_2.return)) _c.call(dirs_2);
                    }
                    finally { if (e_3) throw e_3.error; }
                    return [7 /*endfinally*/];
                case 15:
                    if (!(fs.fallback !== undefined)) return [3 /*break*/, 17];
                    filepath = fs.fallback(file);
                    if (!(filepath !== undefined)) return [3 /*break*/, 17];
                    return [4 /*yield*/, filepath];
                case 16:
                    _d.sent();
                    _d.label = 17;
                case 17: return [2 /*return*/];
            }
        });
    };
    Loader.prototype.dirname = function (path) {
        var fs = this.options.fs;
        assert(fs.dirname, '`fs.dirname` is required for relative reference');
        return fs.dirname(path);
    };
    Loader.prototype.lookupError = function (file, roots) {
        var err = new Error('ENOENT');
        err.message = "ENOENT: Failed to lookup \"".concat(file, "\" in \"").concat(roots, "\"");
        err.code = 'ENOENT';
        return err;
    };
    return Loader;
}());

var SimpleEmitter = /** @class */ (function () {
    function SimpleEmitter() {
        this.buffer = '';
    }
    SimpleEmitter.prototype.write = function (html) {
        this.buffer += stringify(html);
    };
    return SimpleEmitter;
}());

var StreamedEmitter = /** @class */ (function () {
    function StreamedEmitter() {
        this.buffer = '';
        this.stream = null;
        throw new Error('streaming not supported in browser');
    }
    return StreamedEmitter;
}());

var KeepingTypeEmitter = /** @class */ (function () {
    function KeepingTypeEmitter() {
        this.buffer = '';
    }
    KeepingTypeEmitter.prototype.write = function (html) {
        html = toValue$1(html);
        // This will only preserve the type if the value is isolated.
        // I.E:
        // {{ my-port }} -> 42
        // {{ my-host }}:{{ my-port }} -> 'host:42'
        if (typeof html !== 'string' && this.buffer === '') {
            this.buffer = html;
        }
        else {
            this.buffer = stringify(this.buffer) + stringify(html);
        }
    };
    return KeepingTypeEmitter;
}());

var Render = /** @class */ (function () {
    function Render() {
    }
    Render.prototype.renderTemplatesToNodeStream = function (templates, ctx) {
        var _this = this;
        var emitter = new StreamedEmitter();
        Promise.resolve().then(function () { return toThenable(_this.renderTemplates(templates, ctx, emitter)); })
            .then(function () { return emitter.end(); }, function (err) { return emitter.error(err); });
        return emitter.stream;
    };
    Render.prototype.renderTemplates = function (templates, ctx, emitter) {
        var templates_1, templates_1_1, tpl, html, e_1, err, e_2_1;
        var e_2, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!emitter) {
                        emitter = ctx.opts.keepOutputType ? new KeepingTypeEmitter() : new SimpleEmitter();
                    }
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 8, 9, 10]);
                    templates_1 = __values(templates), templates_1_1 = templates_1.next();
                    _b.label = 2;
                case 2:
                    if (!!templates_1_1.done) return [3 /*break*/, 7];
                    tpl = templates_1_1.value;
                    _b.label = 3;
                case 3:
                    _b.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, tpl.render(ctx, emitter)
                        // if not, it'll return an `html`, write to the emitter for it
                    ];
                case 4:
                    html = _b.sent();
                    // if not, it'll return an `html`, write to the emitter for it
                    html && emitter.write(html);
                    if (emitter['break'] || emitter['continue'])
                        return [3 /*break*/, 7];
                    return [3 /*break*/, 6];
                case 5:
                    e_1 = _b.sent();
                    err = RenderError.is(e_1) ? e_1 : new RenderError(e_1, tpl);
                    throw err;
                case 6:
                    templates_1_1 = templates_1.next();
                    return [3 /*break*/, 2];
                case 7: return [3 /*break*/, 10];
                case 8:
                    e_2_1 = _b.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 10];
                case 9:
                    try {
                        if (templates_1_1 && !templates_1_1.done && (_a = templates_1.return)) _a.call(templates_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7 /*endfinally*/];
                case 10: return [2 /*return*/, emitter.buffer];
            }
        });
    };
    return Render;
}());

var TemplateImpl = /** @class */ (function () {
    function TemplateImpl(token) {
        this.token = token;
    }
    return TemplateImpl;
}());

var Tag = /** @class */ (function (_super) {
    __extends(Tag, _super);
    function Tag(token, tokens, liquid) {
        var _this = _super.call(this, token) || this;
        _this.name = token.name;
        var impl = liquid.tags.get(token.name);
        _this.impl = Object.create(impl);
        _this.impl.liquid = liquid;
        if (_this.impl.parse) {
            _this.impl.parse(token, tokens);
        }
        return _this;
    }
    Tag.prototype.render = function (ctx, emitter) {
        var hash, impl;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new Hash(this.token.args).render(ctx)];
                case 1:
                    hash = (_a.sent());
                    impl = this.impl;
                    if (!isFunction(impl.render)) return [3 /*break*/, 3];
                    return [4 /*yield*/, impl.render(ctx, emitter, hash)];
                case 2: return [2 /*return*/, _a.sent()];
                case 3: return [2 /*return*/];
            }
        });
    };
    return Tag;
}(TemplateImpl));

var Output = /** @class */ (function (_super) {
    __extends(Output, _super);
    function Output(token, liquid) {
        var _this = _super.call(this, token) || this;
        _this.value = new Value(token.content, liquid);
        var filters = _this.value.filters;
        var outputEscape = liquid.options.outputEscape;
        if (filters.length && filters[filters.length - 1].name === 'raw') {
            filters.pop();
        }
        else if (outputEscape) {
            filters.push(new Filter(toString.call(outputEscape), outputEscape, [], liquid));
        }
        return _this;
    }
    Output.prototype.render = function (ctx, emitter) {
        var val;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.value.value(ctx, false)];
                case 1:
                    val = _a.sent();
                    emitter.write(val);
                    return [2 /*return*/];
            }
        });
    };
    return Output;
}(TemplateImpl));

var HTML = /** @class */ (function (_super) {
    __extends(HTML, _super);
    function HTML(token) {
        var _this = _super.call(this, token) || this;
        _this.str = token.getContent();
        return _this;
    }
    HTML.prototype.render = function (ctx, emitter) {
        return __generator(this, function (_a) {
            emitter.write(this.str);
            return [2 /*return*/];
        });
    };
    return HTML;
}(TemplateImpl));

var Parser = /** @class */ (function () {
    function Parser(liquid) {
        this.liquid = liquid;
        this.cache = this.liquid.options.cache;
        this.fs = this.liquid.options.fs;
        this.parseFile = this.cache ? this._parseFileCached : this._parseFile;
        this.loader = new Loader(this.liquid.options);
    }
    Parser.prototype.parse = function (html, filepath) {
        var tokenizer = new Tokenizer(html, this.liquid.options.operatorsTrie, filepath);
        var tokens = tokenizer.readTopLevelTokens(this.liquid.options);
        return this.parseTokens(tokens);
    };
    Parser.prototype.parseTokens = function (tokens) {
        var token;
        var templates = [];
        while ((token = tokens.shift())) {
            templates.push(this.parseToken(token, tokens));
        }
        return templates;
    };
    Parser.prototype.parseToken = function (token, remainTokens) {
        try {
            if (isTagToken(token)) {
                return new Tag(token, remainTokens, this.liquid);
            }
            if (isOutputToken(token)) {
                return new Output(token, this.liquid);
            }
            return new HTML(token);
        }
        catch (e) {
            throw new ParseError(e, token);
        }
    };
    Parser.prototype.parseStream = function (tokens) {
        var _this = this;
        return new ParseStream(tokens, function (token, tokens) { return _this.parseToken(token, tokens); });
    };
    Parser.prototype._parseFileCached = function (file, sync, type, currentFile) {
        var key, tpls, task;
        if (type === void 0) { type = LookupType.Root; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = this.loader.shouldLoadRelative(file)
                        ? currentFile + ',' + file
                        : type + ':' + file;
                    return [4 /*yield*/, this.cache.read(key)];
                case 1:
                    tpls = _a.sent();
                    if (tpls)
                        return [2 /*return*/, tpls];
                    task = toThenable(this._parseFile(file, sync, type, currentFile));
                    this.cache.write(key, task);
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, task];
                case 3: return [2 /*return*/, _a.sent()];
                case 4:
                    _a.sent();
                    // remove cached task if failed
                    this.cache.remove(key);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/, []];
            }
        });
    };
    Parser.prototype._parseFile = function (file, sync, type, currentFile) {
        var filepath, _a, _b, _c;
        if (type === void 0) { type = LookupType.Root; }
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, this.loader.lookup(file, type, sync, currentFile)];
                case 1:
                    filepath = _d.sent();
                    _b = (_a = this.liquid).parse;
                    if (!sync) return [3 /*break*/, 2];
                    _c = this.fs.readFileSync(filepath);
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, this.fs.readFile(filepath)];
                case 3:
                    _c = _d.sent();
                    _d.label = 4;
                case 4: return [2 /*return*/, _b.apply(_a, [_c, filepath])];
            }
        });
    };
    return Parser;
}());

var TagMap = /** @class */ (function () {
    function TagMap() {
        this.impls = {};
    }
    TagMap.prototype.get = function (name) {
        var impl = this.impls[name];
        assert(impl, function () { return "tag \"".concat(name, "\" not found"); });
        return impl;
    };
    TagMap.prototype.set = function (name, impl) {
        this.impls[name] = impl;
    };
    return TagMap;
}());

var FilterMap = /** @class */ (function () {
    function FilterMap(strictFilters, liquid) {
        this.strictFilters = strictFilters;
        this.liquid = liquid;
        this.impls = {};
    }
    FilterMap.prototype.get = function (name) {
        var impl = this.impls[name];
        assert(impl || !this.strictFilters, function () { return "undefined filter: ".concat(name); });
        return impl;
    };
    FilterMap.prototype.set = function (name, impl) {
        this.impls[name] = impl;
    };
    FilterMap.prototype.create = function (name, args) {
        return new Filter(name, this.get(name), args, this.liquid);
    };
    return FilterMap;
}());

var version = '9.37.0';
var Liquid = /** @class */ (function () {
    function Liquid(opts) {
        var _this = this;
        if (opts === void 0) { opts = {}; }
        this.options = normalize(opts);
        this.parser = new Parser(this);
        this.renderer = new Render();
        this.filters = new FilterMap(this.options.strictFilters, this);
        this.tags = new TagMap();
        forOwn(tags, function (conf, name) { return _this.registerTag(snakeCase(name), conf); });
        forOwn(builtinFilters, function (handler, name) { return _this.registerFilter(snakeCase(name), handler); });
    }
    Liquid.prototype.parse = function (html, filepath) {
        return this.parser.parse(html, filepath);
    };
    Liquid.prototype._render = function (tpl, scope, renderOptions) {
        var ctx = new Context(scope, this.options, renderOptions);
        return this.renderer.renderTemplates(tpl, ctx);
    };
    Liquid.prototype.render = function (tpl, scope, renderOptions) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, toPromise(this._render(tpl, scope, __assign(__assign({}, renderOptions), { sync: false })))];
            });
        });
    };
    Liquid.prototype.renderSync = function (tpl, scope, renderOptions) {
        return toValue(this._render(tpl, scope, __assign(__assign({}, renderOptions), { sync: true })));
    };
    Liquid.prototype.renderToNodeStream = function (tpl, scope, renderOptions) {
        if (renderOptions === void 0) { renderOptions = {}; }
        var ctx = new Context(scope, this.options, renderOptions);
        return this.renderer.renderTemplatesToNodeStream(tpl, ctx);
    };
    Liquid.prototype._parseAndRender = function (html, scope, renderOptions) {
        var tpl = this.parse(html);
        return this._render(tpl, scope, renderOptions);
    };
    Liquid.prototype.parseAndRender = function (html, scope, renderOptions) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, toPromise(this._parseAndRender(html, scope, __assign(__assign({}, renderOptions), { sync: false })))];
            });
        });
    };
    Liquid.prototype.parseAndRenderSync = function (html, scope, renderOptions) {
        return toValue(this._parseAndRender(html, scope, __assign(__assign({}, renderOptions), { sync: true })));
    };
    Liquid.prototype._parsePartialFile = function (file, sync, currentFile) {
        return this.parser.parseFile(file, sync, LookupType.Partials, currentFile);
    };
    Liquid.prototype._parseLayoutFile = function (file, sync, currentFile) {
        return this.parser.parseFile(file, sync, LookupType.Layouts, currentFile);
    };
    Liquid.prototype.parseFile = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, toPromise(this.parser.parseFile(file, false))];
            });
        });
    };
    Liquid.prototype.parseFileSync = function (file) {
        return toValue(this.parser.parseFile(file, true));
    };
    Liquid.prototype.renderFile = function (file, ctx, renderOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var templates;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.parseFile(file)];
                    case 1:
                        templates = _a.sent();
                        return [2 /*return*/, this.render(templates, ctx, renderOptions)];
                }
            });
        });
    };
    Liquid.prototype.renderFileSync = function (file, ctx, renderOptions) {
        var templates = this.parseFileSync(file);
        return this.renderSync(templates, ctx, renderOptions);
    };
    Liquid.prototype.renderFileToNodeStream = function (file, scope, renderOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var templates;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.parseFile(file)];
                    case 1:
                        templates = _a.sent();
                        return [2 /*return*/, this.renderToNodeStream(templates, scope, renderOptions)];
                }
            });
        });
    };
    Liquid.prototype._evalValue = function (str, ctx) {
        var value = new Value(str, this);
        return value.value(ctx, false);
    };
    Liquid.prototype.evalValue = function (str, ctx) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, toPromise(this._evalValue(str, ctx))];
            });
        });
    };
    Liquid.prototype.evalValueSync = function (str, ctx) {
        return toValue(this._evalValue(str, ctx));
    };
    Liquid.prototype.registerFilter = function (name, filter) {
        this.filters.set(name, filter);
    };
    Liquid.prototype.registerTag = function (name, tag) {
        this.tags.set(name, tag);
    };
    Liquid.prototype.plugin = function (plugin) {
        return plugin.call(this, Liquid);
    };
    Liquid.prototype.express = function () {
        var self = this; // eslint-disable-line
        var firstCall = true;
        return function (filePath, ctx, callback) {
            var _a, _b, _c;
            if (firstCall) {
                firstCall = false;
                var dirs = normalizeDirectoryList(this.root);
                (_a = self.options.root).unshift.apply(_a, __spreadArray([], __read(dirs), false));
                (_b = self.options.layouts).unshift.apply(_b, __spreadArray([], __read(dirs), false));
                (_c = self.options.partials).unshift.apply(_c, __spreadArray([], __read(dirs), false));
            }
            self.renderFile(filePath, ctx).then(function (html) { return callback(null, html); }, callback);
        };
    };
    return Liquid;
}());




/***/ }),

/***/ "./src/assets/posts lazy recursive ^\\.\\/.*\\.md$":
/*!**************************************************************!*\
  !*** ./src/assets/posts/ lazy ^\.\/.*\.md$ namespace object ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./post1.md": [
		"./src/assets/posts/post1.md",
		"src_assets_posts_post1_md"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src/assets/posts lazy recursive ^\\.\\/.*\\.md$";
module.exports = webpackAsyncContext;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "markdown-test:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"post": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmarkdown_test"] = self["webpackChunkmarkdown_test"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************************!*\
  !*** ./src/pages/post/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var liquidjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! liquidjs */ "./node_modules/liquidjs/dist/liquid.browser.esm.js");


function pushContents(target, content) {
  target.innerHTML = content;
}

function importMarkdown(postname) {
  return new Promise((resolve, reject) => {
    __webpack_require__("./src/assets/posts lazy recursive ^\\.\\/.*\\.md$")(`./${postname}.md`)
      .then((module) => resolve(module.default))
      .catch(reject);
  })
}

function mapPath(postname) {
  console.log(postname);
  history.replaceState(null, document.title, postname);
}

function getPostname() {
  return location.hash.replace('#', '');
}

function setTitle(post) {
  document.title = `${document.title} | ${post}`;
}

(async function init() {
  const contents = document.querySelector('#contents');
  const postname = getPostname();
  const parsedMd = await importMarkdown(postname);
  mapPath(postname);
  setTitle(postname);
  pushContents(contents, parsedMd)
})()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLHVCQUF1QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsOEJBQThCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QscUNBQXFDO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdCQUFnQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLG9CQUFvQixtQkFBbUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixjQUFjO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QseURBQXlEO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0ZBQStGLDBEQUEwRDtBQUN6SixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELDBCQUEwQjtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLDBFQUEwRTtBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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OEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw4QkFBOEI7QUFDL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsc0RBQXNEO0FBQ3pHLDZDQUE2QyxjQUFjLDRFQUE0RTtBQUN2STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSx5Q0FBeUM7QUFDM0c7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMv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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsbUVBQW1FLGlDQUFpQztXQUNwRztXQUNBO1dBQ0E7V0FDQTs7Ozs7V0N6Q0E7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztXQ0FBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUM7O1dBRWpDO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTCxlQUFlO1dBQ2Y7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNO1dBQ047V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyRmtDOztBQUVsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUkseUVBQU8sR0FBYyxFQUFFLFNBQVMsSUFBSSxDQUFDO0FBQ3pDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLGdCQUFnQixJQUFJLEtBQUs7QUFDL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJrZG93bi10ZXN0Ly4vbm9kZV9tb2R1bGVzL2xpcXVpZGpzL2Rpc3QvbGlxdWlkLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL21hcmtkb3duLXRlc3QvLi9zcmMvYXNzZXRzL3Bvc3RzLyBsYXp5IF5cXC5cXC8uKlxcLm1kJCBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21hcmtkb3duLXRlc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWFya2Rvd24tdGVzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWFya2Rvd24tdGVzdC93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL21hcmtkb3duLXRlc3Qvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL21hcmtkb3duLXRlc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tYXJrZG93bi10ZXN0L3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly9tYXJrZG93bi10ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWFya2Rvd24tdGVzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9tYXJrZG93bi10ZXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL21hcmtkb3duLXRlc3QvLi9zcmMvcGFnZXMvcG9zdC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogbGlxdWlkanNAOS4zNy4wLCBodHRwczovL2dpdGh1Yi5jb20vaGFydHRsZS9saXF1aWRqc1xuICogKGMpIDIwMTYtMjAyMiBoYXJ0dGxlXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG52YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XHJcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcclxuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcclxuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xyXG59XG5cbnZhciBEcm9wID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRHJvcCgpIHtcclxuICAgIH1cclxuICAgIERyb3AucHJvdG90eXBlLnZhbHVlT2YgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH07XHJcbiAgICBEcm9wLnByb3RvdHlwZS5saXF1aWRNZXRob2RNaXNzaW5nID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIERyb3A7XHJcbn0oKSk7XG5cbnZhciB0b1N0cmluZyQxID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcclxudmFyIHRvTG93ZXJDYXNlID0gU3RyaW5nLnByb3RvdHlwZS50b0xvd2VyQ2FzZTtcclxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0Lmhhc093blByb3BlcnR5O1xyXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XHJcbn1cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcclxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcclxufVxyXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpIHtcclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvWy0vXFxcXF4kKis/LigpfFtcXF17fV0vZywgJ1xcXFwkJicpO1xyXG59XHJcbmZ1bmN0aW9uIHN0cmluZ2lmeSh2YWx1ZSkge1xyXG4gICAgdmFsdWUgPSB0b1ZhbHVlJDEodmFsdWUpO1xyXG4gICAgaWYgKGlzU3RyaW5nKHZhbHVlKSlcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICBpZiAoaXNOaWwodmFsdWUpKVxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIGlmIChpc0FycmF5KHZhbHVlKSlcclxuICAgICAgICByZXR1cm4gdmFsdWUubWFwKGZ1bmN0aW9uICh4KSB7IHJldHVybiBzdHJpbmdpZnkoeCk7IH0pLmpvaW4oJycpO1xyXG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XHJcbn1cclxuZnVuY3Rpb24gdG9WYWx1ZSQxKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEcm9wID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XHJcbn1cclxuZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xyXG59XHJcbmZ1bmN0aW9uIHRvTGlxdWlkKHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUgJiYgaXNGdW5jdGlvbih2YWx1ZS50b0xpcXVpZCkpXHJcbiAgICAgICAgcmV0dXJuIHRvTGlxdWlkKHZhbHVlLnRvTGlxdWlkKCkpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbmZ1bmN0aW9uIGlzTmlsKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdmFsdWUgPT0gbnVsbDtcclxufVxyXG5mdW5jdGlvbiBpc0FycmF5KHZhbHVlKSB7XHJcbiAgICAvLyBiZSBjb21wYXRpYmxlIHdpdGggSUUgOFxyXG4gICAgcmV0dXJuIHRvU3RyaW5nJDEuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XSc7XHJcbn1cclxuLypcclxuICogSXRlcmF0ZXMgb3ZlciBvd24gZW51bWVyYWJsZSBzdHJpbmcga2V5ZWQgcHJvcGVydGllcyBvZiBhbiBvYmplY3QgYW5kIGludm9rZXMgaXRlcmF0ZWUgZm9yIGVhY2ggcHJvcGVydHkuXHJcbiAqIFRoZSBpdGVyYXRlZSBpcyBpbnZva2VkIHdpdGggdGhyZWUgYXJndW1lbnRzOiAodmFsdWUsIGtleSwgb2JqZWN0KS5cclxuICogSXRlcmF0ZWUgZnVuY3Rpb25zIG1heSBleGl0IGl0ZXJhdGlvbiBlYXJseSBieSBleHBsaWNpdGx5IHJldHVybmluZyBmYWxzZS5cclxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cclxuICogQHJldHVybiB7T2JqZWN0fSBSZXR1cm5zIG9iamVjdC5cclxuICovXHJcbmZ1bmN0aW9uIGZvck93bihvYmosIGl0ZXJhdGVlKSB7XHJcbiAgICBvYmogPSBvYmogfHwge307XHJcbiAgICBmb3IgKHZhciBrIGluIG9iaikge1xyXG4gICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaykpIHtcclxuICAgICAgICAgICAgaWYgKGl0ZXJhdGVlKG9ialtrXSwgaywgb2JqKSA9PT0gZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2JqO1xyXG59XHJcbmZ1bmN0aW9uIGxhc3QkMShhcnIpIHtcclxuICAgIHJldHVybiBhcnJbYXJyLmxlbmd0aCAtIDFdO1xyXG59XHJcbi8qXHJcbiAqIENoZWNrcyBpZiB2YWx1ZSBpcyB0aGUgbGFuZ3VhZ2UgdHlwZSBvZiBPYmplY3QuXHJcbiAqIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBuZXcgTnVtYmVyKDApLCBhbmQgbmV3IFN0cmluZygnJykpXHJcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiB2YWx1ZSBpcyBhbiBvYmplY3QsIGVsc2UgZmFsc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xyXG4gICAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XHJcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpO1xyXG59XHJcbmZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XHJcbiAgICBpZiAoc3RlcCA9PT0gdm9pZCAwKSB7IHN0ZXAgPSAxOyB9XHJcbiAgICB2YXIgYXJyID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBzdG9wOyBpICs9IHN0ZXApIHtcclxuICAgICAgICBhcnIucHVzaChpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnI7XHJcbn1cclxuZnVuY3Rpb24gcGFkU3RhcnQoc3RyLCBsZW5ndGgsIGNoKSB7XHJcbiAgICBpZiAoY2ggPT09IHZvaWQgMCkgeyBjaCA9ICcgJzsgfVxyXG4gICAgcmV0dXJuIHBhZChzdHIsIGxlbmd0aCwgY2gsIGZ1bmN0aW9uIChzdHIsIGNoKSB7IHJldHVybiBjaCArIHN0cjsgfSk7XHJcbn1cclxuZnVuY3Rpb24gcGFkRW5kKHN0ciwgbGVuZ3RoLCBjaCkge1xyXG4gICAgaWYgKGNoID09PSB2b2lkIDApIHsgY2ggPSAnICc7IH1cclxuICAgIHJldHVybiBwYWQoc3RyLCBsZW5ndGgsIGNoLCBmdW5jdGlvbiAoc3RyLCBjaCkgeyByZXR1cm4gc3RyICsgY2g7IH0pO1xyXG59XHJcbmZ1bmN0aW9uIHBhZChzdHIsIGxlbmd0aCwgY2gsIGFkZCkge1xyXG4gICAgc3RyID0gU3RyaW5nKHN0cik7XHJcbiAgICB2YXIgbiA9IGxlbmd0aCAtIHN0ci5sZW5ndGg7XHJcbiAgICB3aGlsZSAobi0tID4gMClcclxuICAgICAgICBzdHIgPSBhZGQoc3RyLCBjaCk7XHJcbiAgICByZXR1cm4gc3RyO1xyXG59XHJcbmZ1bmN0aW9uIGlkZW50aWZ5KHZhbCkge1xyXG4gICAgcmV0dXJuIHZhbDtcclxufVxyXG5mdW5jdGlvbiBzbmFrZUNhc2Uoc3RyKSB7XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhcXHc/KShbQS1aXSkvZywgZnVuY3Rpb24gKF8sIGEsIGIpIHsgcmV0dXJuIChhID8gYSArICdfJyA6ICcnKSArIGIudG9Mb3dlckNhc2UoKTsgfSk7XHJcbn1cclxuZnVuY3Rpb24gY2hhbmdlQ2FzZShzdHIpIHtcclxuICAgIHZhciBoYXNMb3dlckNhc2UgPSBfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQoc3RyKSwgZmFsc2UpLnNvbWUoZnVuY3Rpb24gKGNoKSB7IHJldHVybiBjaCA+PSAnYScgJiYgY2ggPD0gJ3onOyB9KTtcclxuICAgIHJldHVybiBoYXNMb3dlckNhc2UgPyBzdHIudG9VcHBlckNhc2UoKSA6IHN0ci50b0xvd2VyQ2FzZSgpO1xyXG59XHJcbmZ1bmN0aW9uIGVsbGlwc2lzKHN0ciwgTikge1xyXG4gICAgcmV0dXJuIHN0ci5sZW5ndGggPiBOID8gc3RyLnN1YnN0cigwLCBOIC0gMykgKyAnLi4uJyA6IHN0cjtcclxufVxyXG4vLyBjb21wYXJlIHN0cmluZyBpbiBjYXNlLWluc2Vuc2l0aXZlIHdheSwgdW5kZWZpbmVkIHZhbHVlcyB0byB0aGUgdGFpbFxyXG5mdW5jdGlvbiBjYXNlSW5zZW5zaXRpdmVDb21wYXJlKGEsIGIpIHtcclxuICAgIGlmIChhID09IG51bGwgJiYgYiA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgaWYgKGEgPT0gbnVsbClcclxuICAgICAgICByZXR1cm4gMTtcclxuICAgIGlmIChiID09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgYSA9IHRvTG93ZXJDYXNlLmNhbGwoYSk7XHJcbiAgICBiID0gdG9Mb3dlckNhc2UuY2FsbChiKTtcclxuICAgIGlmIChhIDwgYilcclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICBpZiAoYSA+IGIpXHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICByZXR1cm4gMDtcclxufVxyXG5mdW5jdGlvbiBhcmd1bWVudHNUb1ZhbHVlKGZuKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZm4uYXBwbHkodm9pZCAwLCBfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQoYXJncy5tYXAodG9WYWx1ZSQxKSksIGZhbHNlKSk7XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGVzY2FwZVJlZ0V4cCh0ZXh0KSB7XHJcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9bLVtcXF17fSgpKis/LixcXFxcXiR8I1xcc10vZywgJ1xcXFwkJicpO1xyXG59XG5cbnZhciBOb2RlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTm9kZShrZXksIHZhbHVlLCBuZXh0LCBwcmV2KSB7XHJcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMubmV4dCA9IG5leHQ7XHJcbiAgICAgICAgdGhpcy5wcmV2ID0gcHJldjtcclxuICAgIH1cclxuICAgIHJldHVybiBOb2RlO1xyXG59KCkpO1xyXG52YXIgTFJVID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTFJVKGxpbWl0LCBzaXplKSB7XHJcbiAgICAgICAgaWYgKHNpemUgPT09IHZvaWQgMCkgeyBzaXplID0gMDsgfVxyXG4gICAgICAgIHRoaXMubGltaXQgPSBsaW1pdDtcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgICAgIHRoaXMuY2FjaGUgPSB7fTtcclxuICAgICAgICB0aGlzLmhlYWQgPSBuZXcgTm9kZSgnSEVBRCcsIG51bGwsIG51bGwsIG51bGwpO1xyXG4gICAgICAgIHRoaXMudGFpbCA9IG5ldyBOb2RlKCdUQUlMJywgbnVsbCwgbnVsbCwgbnVsbCk7XHJcbiAgICAgICAgdGhpcy5oZWFkLm5leHQgPSB0aGlzLnRhaWw7XHJcbiAgICAgICAgdGhpcy50YWlsLnByZXYgPSB0aGlzLmhlYWQ7XHJcbiAgICB9XHJcbiAgICBMUlUucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy5jYWNoZVtrZXldKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVba2V5XS52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIG5vZGUgPSBuZXcgTm9kZShrZXksIHZhbHVlLCB0aGlzLmhlYWQubmV4dCwgdGhpcy5oZWFkKTtcclxuICAgICAgICAgICAgdGhpcy5oZWFkLm5leHQucHJldiA9IG5vZGU7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhZC5uZXh0ID0gbm9kZTtcclxuICAgICAgICAgICAgdGhpcy5jYWNoZVtrZXldID0gbm9kZTtcclxuICAgICAgICAgICAgdGhpcy5zaXplKys7XHJcbiAgICAgICAgICAgIHRoaXMuZW5zdXJlTGltaXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgTFJVLnByb3RvdHlwZS5yZWFkID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYWNoZVtrZXldKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5jYWNoZVtrZXldLnZhbHVlO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKGtleSk7XHJcbiAgICAgICAgdGhpcy53cml0ZShrZXksIHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9O1xyXG4gICAgTFJVLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLmNhY2hlW2tleV07XHJcbiAgICAgICAgbm9kZS5wcmV2Lm5leHQgPSBub2RlLm5leHQ7XHJcbiAgICAgICAgbm9kZS5uZXh0LnByZXYgPSBub2RlLnByZXY7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuY2FjaGVba2V5XTtcclxuICAgICAgICB0aGlzLnNpemUtLTtcclxuICAgIH07XHJcbiAgICBMUlUucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaGVhZC5uZXh0ID0gdGhpcy50YWlsO1xyXG4gICAgICAgIHRoaXMudGFpbC5wcmV2ID0gdGhpcy5oZWFkO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5jYWNoZSA9IHt9O1xyXG4gICAgfTtcclxuICAgIExSVS5wcm90b3R5cGUuZW5zdXJlTGltaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2l6ZSA+IHRoaXMubGltaXQpXHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKHRoaXMudGFpbC5wcmV2LmtleSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIExSVTtcclxufSgpKTtcblxuZnVuY3Rpb24gZG9tUmVzb2x2ZShyb290LCBwYXRoKSB7XHJcbiAgICB2YXIgYmFzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Jhc2UnKTtcclxuICAgIGJhc2UuaHJlZiA9IHJvb3Q7XHJcbiAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XHJcbiAgICBoZWFkLmluc2VydEJlZm9yZShiYXNlLCBoZWFkLmZpcnN0Q2hpbGQpO1xyXG4gICAgdmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBhLmhyZWYgPSBwYXRoO1xyXG4gICAgdmFyIHJlc29sdmVkID0gYS5ocmVmO1xyXG4gICAgaGVhZC5yZW1vdmVDaGlsZChiYXNlKTtcclxuICAgIHJldHVybiByZXNvbHZlZDtcclxufVxyXG5mdW5jdGlvbiByZXNvbHZlKHJvb3QsIGZpbGVwYXRoLCBleHQpIHtcclxuICAgIGlmIChyb290Lmxlbmd0aCAmJiBsYXN0JDEocm9vdCkgIT09ICcvJylcclxuICAgICAgICByb290ICs9ICcvJztcclxuICAgIHZhciB1cmwgPSBkb21SZXNvbHZlKHJvb3QsIGZpbGVwYXRoKTtcclxuICAgIHJldHVybiB1cmwucmVwbGFjZSgvXihcXHcrOlxcL1xcL1teL10rKShcXC9bXj9dKykvLCBmdW5jdGlvbiAoc3RyLCBvcmlnaW4sIHBhdGgpIHtcclxuICAgICAgICB2YXIgbGFzdCA9IHBhdGguc3BsaXQoJy8nKS5wb3AoKTtcclxuICAgICAgICBpZiAoL1xcLlxcdyskLy50ZXN0KGxhc3QpKVxyXG4gICAgICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgICAgIHJldHVybiBvcmlnaW4gKyBwYXRoICsgZXh0O1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gcmVhZEZpbGUodXJsKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoeGhyLnN0YXR1c1RleHQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxzdCByZWNlaXZpbmcgdGhlIHJlc3BvbnNlLicpKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiByZWFkRmlsZVN5bmModXJsKSB7XHJcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub3BlbignR0VUJywgdXJsLCBmYWxzZSk7XHJcbiAgICB4aHIuc2VuZCgpO1xyXG4gICAgaWYgKHhoci5zdGF0dXMgPCAyMDAgfHwgeGhyLnN0YXR1cyA+PSAzMDApIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoeGhyLnN0YXR1c1RleHQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHhoci5yZXNwb25zZVRleHQ7XHJcbn1cclxuZnVuY3Rpb24gZXhpc3RzKGZpbGVwYXRoKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdHJ1ZV07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBleGlzdHNTeW5jKGZpbGVwYXRoKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5mdW5jdGlvbiBkaXJuYW1lKGZpbGVwYXRoKSB7XHJcbiAgICByZXR1cm4gZG9tUmVzb2x2ZShmaWxlcGF0aCwgJy4nKTtcclxufVxyXG52YXIgc2VwID0gJy8nO1xuXG52YXIgZnMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgX19wcm90b19fOiBudWxsLFxuICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgcmVhZEZpbGU6IHJlYWRGaWxlLFxuICAgIHJlYWRGaWxlU3luYzogcmVhZEZpbGVTeW5jLFxuICAgIGV4aXN0czogZXhpc3RzLFxuICAgIGV4aXN0c1N5bmM6IGV4aXN0c1N5bmMsXG4gICAgZGlybmFtZTogZGlybmFtZSxcbiAgICBzZXA6IHNlcFxufSk7XG5cbmZ1bmN0aW9uIGlzQ29tcGFyYWJsZShhcmcpIHtcclxuICAgIHJldHVybiBhcmcgJiYgaXNGdW5jdGlvbihhcmcuZXF1YWxzKTtcclxufVxuXG5mdW5jdGlvbiBpc1RydXRoeSh2YWwsIGN0eCkge1xyXG4gICAgcmV0dXJuICFpc0ZhbHN5KHZhbCwgY3R4KTtcclxufVxyXG5mdW5jdGlvbiBpc0ZhbHN5KHZhbCwgY3R4KSB7XHJcbiAgICBpZiAoY3R4Lm9wdHMuanNUcnV0aHkpIHtcclxuICAgICAgICByZXR1cm4gIXZhbDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB2YWwgPT09IGZhbHNlIHx8IHVuZGVmaW5lZCA9PT0gdmFsIHx8IHZhbCA9PT0gbnVsbDtcclxuICAgIH1cclxufVxuXG52YXIgZGVmYXVsdE9wZXJhdG9ycyA9IHtcclxuICAgICc9PSc6IGZ1bmN0aW9uIChsLCByKSB7XHJcbiAgICAgICAgaWYgKGlzQ29tcGFyYWJsZShsKSlcclxuICAgICAgICAgICAgcmV0dXJuIGwuZXF1YWxzKHIpO1xyXG4gICAgICAgIGlmIChpc0NvbXBhcmFibGUocikpXHJcbiAgICAgICAgICAgIHJldHVybiByLmVxdWFscyhsKTtcclxuICAgICAgICByZXR1cm4gbCA9PT0gcjtcclxuICAgIH0sXHJcbiAgICAnIT0nOiBmdW5jdGlvbiAobCwgcikge1xyXG4gICAgICAgIGlmIChpc0NvbXBhcmFibGUobCkpXHJcbiAgICAgICAgICAgIHJldHVybiAhbC5lcXVhbHMocik7XHJcbiAgICAgICAgaWYgKGlzQ29tcGFyYWJsZShyKSlcclxuICAgICAgICAgICAgcmV0dXJuICFyLmVxdWFscyhsKTtcclxuICAgICAgICByZXR1cm4gbCAhPT0gcjtcclxuICAgIH0sXHJcbiAgICAnPic6IGZ1bmN0aW9uIChsLCByKSB7XHJcbiAgICAgICAgaWYgKGlzQ29tcGFyYWJsZShsKSlcclxuICAgICAgICAgICAgcmV0dXJuIGwuZ3Qocik7XHJcbiAgICAgICAgaWYgKGlzQ29tcGFyYWJsZShyKSlcclxuICAgICAgICAgICAgcmV0dXJuIHIubHQobCk7XHJcbiAgICAgICAgcmV0dXJuIGwgPiByO1xyXG4gICAgfSxcclxuICAgICc8JzogZnVuY3Rpb24gKGwsIHIpIHtcclxuICAgICAgICBpZiAoaXNDb21wYXJhYmxlKGwpKVxyXG4gICAgICAgICAgICByZXR1cm4gbC5sdChyKTtcclxuICAgICAgICBpZiAoaXNDb21wYXJhYmxlKHIpKVxyXG4gICAgICAgICAgICByZXR1cm4gci5ndChsKTtcclxuICAgICAgICByZXR1cm4gbCA8IHI7XHJcbiAgICB9LFxyXG4gICAgJz49JzogZnVuY3Rpb24gKGwsIHIpIHtcclxuICAgICAgICBpZiAoaXNDb21wYXJhYmxlKGwpKVxyXG4gICAgICAgICAgICByZXR1cm4gbC5nZXEocik7XHJcbiAgICAgICAgaWYgKGlzQ29tcGFyYWJsZShyKSlcclxuICAgICAgICAgICAgcmV0dXJuIHIubGVxKGwpO1xyXG4gICAgICAgIHJldHVybiBsID49IHI7XHJcbiAgICB9LFxyXG4gICAgJzw9JzogZnVuY3Rpb24gKGwsIHIpIHtcclxuICAgICAgICBpZiAoaXNDb21wYXJhYmxlKGwpKVxyXG4gICAgICAgICAgICByZXR1cm4gbC5sZXEocik7XHJcbiAgICAgICAgaWYgKGlzQ29tcGFyYWJsZShyKSlcclxuICAgICAgICAgICAgcmV0dXJuIHIuZ2VxKGwpO1xyXG4gICAgICAgIHJldHVybiBsIDw9IHI7XHJcbiAgICB9LFxyXG4gICAgJ2NvbnRhaW5zJzogZnVuY3Rpb24gKGwsIHIpIHtcclxuICAgICAgICBsID0gdG9WYWx1ZSQxKGwpO1xyXG4gICAgICAgIHIgPSB0b1ZhbHVlJDEocik7XHJcbiAgICAgICAgcmV0dXJuIGwgJiYgaXNGdW5jdGlvbihsLmluZGV4T2YpID8gbC5pbmRleE9mKHIpID4gLTEgOiBmYWxzZTtcclxuICAgIH0sXHJcbiAgICAnYW5kJzogZnVuY3Rpb24gKGwsIHIsIGN0eCkgeyByZXR1cm4gaXNUcnV0aHkobCwgY3R4KSAmJiBpc1RydXRoeShyLCBjdHgpOyB9LFxyXG4gICAgJ29yJzogZnVuY3Rpb24gKGwsIHIsIGN0eCkgeyByZXR1cm4gaXNUcnV0aHkobCwgY3R4KSB8fCBpc1RydXRoeShyLCBjdHgpOyB9XHJcbn07XG5cbi8vICoqRE8gTk9UIENIQU5HRSBUSElTIEZJTEUqKlxyXG4vL1xyXG4vLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IGJpbi9jaGFyYWN0ZXItZ2VuLmpzXHJcbi8vIGJpdG1hc2sgY2hhcmFjdGVyIHR5cGVzIHRvIGJvb3N0IHBlcmZvcm1hbmNlXHJcbnZhciBUWVBFUyA9IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAyMCwgNCwgNCwgNCwgMjAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDIwLCAyLCA4LCAwLCAwLCAwLCAwLCA4LCAwLCAwLCAwLCA2NCwgMCwgNjUsIDAsIDAsIDMzLCAzMywgMzMsIDMzLCAzMywgMzMsIDMzLCAzMywgMzMsIDMzLCAwLCAwLCAyLCAyLCAyLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwXTtcclxudmFyIElERU5USUZJRVIgPSAxO1xyXG52YXIgQkxBTksgPSA0O1xyXG52YXIgUVVPVEUgPSA4O1xyXG52YXIgSU5MSU5FX0JMQU5LID0gMTY7XHJcbnZhciBOVU1CRVIgPSAzMjtcclxudmFyIFNJR04gPSA2NDtcclxuVFlQRVNbMTYwXSA9IFRZUEVTWzU3NjBdID0gVFlQRVNbNjE1OF0gPSBUWVBFU1s4MTkyXSA9IFRZUEVTWzgxOTNdID0gVFlQRVNbODE5NF0gPSBUWVBFU1s4MTk1XSA9IFRZUEVTWzgxOTZdID0gVFlQRVNbODE5N10gPSBUWVBFU1s4MTk4XSA9IFRZUEVTWzgxOTldID0gVFlQRVNbODIwMF0gPSBUWVBFU1s4MjAxXSA9IFRZUEVTWzgyMDJdID0gVFlQRVNbODIzMl0gPSBUWVBFU1s4MjMzXSA9IFRZUEVTWzgyMzldID0gVFlQRVNbODI4N10gPSBUWVBFU1sxMjI4OF0gPSBCTEFOSztcblxuZnVuY3Rpb24gY3JlYXRlVHJpZShvcGVyYXRvcnMpIHtcclxuICAgIHZhciBlXzEsIF9hO1xyXG4gICAgdmFyIHRyaWUgPSB7fTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyhPYmplY3QuZW50cmllcyhvcGVyYXRvcnMpKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xyXG4gICAgICAgICAgICB2YXIgX2QgPSBfX3JlYWQoX2MudmFsdWUsIDIpLCBuYW1lXzEgPSBfZFswXSwgaGFuZGxlciA9IF9kWzFdO1xyXG4gICAgICAgICAgICB2YXIgbm9kZSA9IHRyaWU7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmFtZV8xLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYyA9IG5hbWVfMVtpXTtcclxuICAgICAgICAgICAgICAgIG5vZGVbY10gPSBub2RlW2NdIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IG5hbWVfMS5sZW5ndGggLSAxICYmIChUWVBFU1tuYW1lXzEuY2hhckNvZGVBdChpKV0gJiBJREVOVElGSUVSKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVbY10ubmVlZEJvdW5kYXJ5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlW2NdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5vZGUuaGFuZGxlciA9IGhhbmRsZXI7XHJcbiAgICAgICAgICAgIG5vZGUuZW5kID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJpZTtcclxufVxuXG52YXIgZXNjYXBlTWFwID0ge1xyXG4gICAgJyYnOiAnJmFtcDsnLFxyXG4gICAgJzwnOiAnJmx0OycsXHJcbiAgICAnPic6ICcmZ3Q7JyxcclxuICAgICdcIic6ICcmIzM0OycsXHJcbiAgICBcIidcIjogJyYjMzk7J1xyXG59O1xyXG52YXIgdW5lc2NhcGVNYXAgPSB7XHJcbiAgICAnJmFtcDsnOiAnJicsXHJcbiAgICAnJmx0Oyc6ICc8JyxcclxuICAgICcmZ3Q7JzogJz4nLFxyXG4gICAgJyYjMzQ7JzogJ1wiJyxcclxuICAgICcmIzM5Oyc6IFwiJ1wiXHJcbn07XHJcbmZ1bmN0aW9uIGVzY2FwZShzdHIpIHtcclxuICAgIHJldHVybiBzdHJpbmdpZnkoc3RyKS5yZXBsYWNlKC8mfDx8PnxcInwnL2csIGZ1bmN0aW9uIChtKSB7IHJldHVybiBlc2NhcGVNYXBbbV07IH0pO1xyXG59XHJcbmZ1bmN0aW9uIHVuZXNjYXBlKHN0cikge1xyXG4gICAgcmV0dXJuIHN0cmluZ2lmeShzdHIpLnJlcGxhY2UoLyYoYW1wfGx0fGd0fCMzNHwjMzkpOy9nLCBmdW5jdGlvbiAobSkgeyByZXR1cm4gdW5lc2NhcGVNYXBbbV07IH0pO1xyXG59XHJcbmZ1bmN0aW9uIGVzY2FwZU9uY2Uoc3RyKSB7XHJcbiAgICByZXR1cm4gZXNjYXBlKHVuZXNjYXBlKHN0cmluZ2lmeShzdHIpKSk7XHJcbn1cclxuZnVuY3Rpb24gbmV3bGluZVRvQnIodikge1xyXG4gICAgcmV0dXJuIHN0cmluZ2lmeSh2KS5yZXBsYWNlKC9cXG4vZywgJzxiciAvPlxcbicpO1xyXG59XHJcbmZ1bmN0aW9uIHN0cmlwSHRtbCh2KSB7XHJcbiAgICByZXR1cm4gc3RyaW5naWZ5KHYpLnJlcGxhY2UoLzxzY3JpcHQuKj88XFwvc2NyaXB0Pnw8IS0tLio/LS0+fDxzdHlsZS4qPzxcXC9zdHlsZT58PC4qPz4vZywgJycpO1xyXG59XG5cbnZhciBhYnMgPSBhcmd1bWVudHNUb1ZhbHVlKE1hdGguYWJzKTtcclxudmFyIGF0TGVhc3QgPSBhcmd1bWVudHNUb1ZhbHVlKE1hdGgubWF4KTtcclxudmFyIGF0TW9zdCA9IGFyZ3VtZW50c1RvVmFsdWUoTWF0aC5taW4pO1xyXG52YXIgY2VpbCA9IGFyZ3VtZW50c1RvVmFsdWUoTWF0aC5jZWlsKTtcclxudmFyIGRpdmlkZWRCeSA9IGFyZ3VtZW50c1RvVmFsdWUoZnVuY3Rpb24gKGRpdmlkZW5kLCBkaXZpc29yLCBpbnRlZ2VyQXJpdGhtZXRpYykge1xyXG4gICAgaWYgKGludGVnZXJBcml0aG1ldGljID09PSB2b2lkIDApIHsgaW50ZWdlckFyaXRobWV0aWMgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIGludGVnZXJBcml0aG1ldGljID8gTWF0aC5mbG9vcihkaXZpZGVuZCAvIGRpdmlzb3IpIDogZGl2aWRlbmQgLyBkaXZpc29yO1xyXG59KTtcclxudmFyIGZsb29yID0gYXJndW1lbnRzVG9WYWx1ZShNYXRoLmZsb29yKTtcclxudmFyIG1pbnVzID0gYXJndW1lbnRzVG9WYWx1ZShmdW5jdGlvbiAodiwgYXJnKSB7IHJldHVybiB2IC0gYXJnOyB9KTtcclxudmFyIG1vZHVsbyA9IGFyZ3VtZW50c1RvVmFsdWUoZnVuY3Rpb24gKHYsIGFyZykgeyByZXR1cm4gdiAlIGFyZzsgfSk7XHJcbnZhciB0aW1lcyA9IGFyZ3VtZW50c1RvVmFsdWUoZnVuY3Rpb24gKHYsIGFyZykgeyByZXR1cm4gdiAqIGFyZzsgfSk7XHJcbmZ1bmN0aW9uIHJvdW5kKHYsIGFyZykge1xyXG4gICAgaWYgKGFyZyA9PT0gdm9pZCAwKSB7IGFyZyA9IDA7IH1cclxuICAgIHYgPSB0b1ZhbHVlJDEodik7XHJcbiAgICBhcmcgPSB0b1ZhbHVlJDEoYXJnKTtcclxuICAgIHZhciBhbXAgPSBNYXRoLnBvdygxMCwgYXJnKTtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKHYgKiBhbXApIC8gYW1wO1xyXG59XHJcbmZ1bmN0aW9uIHBsdXModiwgYXJnKSB7XHJcbiAgICB2ID0gdG9WYWx1ZSQxKHYpO1xyXG4gICAgYXJnID0gdG9WYWx1ZSQxKGFyZyk7XHJcbiAgICByZXR1cm4gTnVtYmVyKHYpICsgTnVtYmVyKGFyZyk7XHJcbn1cblxudmFyIHVybERlY29kZSA9IGZ1bmN0aW9uICh4KSB7IHJldHVybiBzdHJpbmdpZnkoeCkuc3BsaXQoJysnKS5tYXAoZGVjb2RlVVJJQ29tcG9uZW50KS5qb2luKCcgJyk7IH07XHJcbnZhciB1cmxFbmNvZGUgPSBmdW5jdGlvbiAoeCkgeyByZXR1cm4gc3RyaW5naWZ5KHgpLnNwbGl0KCcgJykubWFwKGVuY29kZVVSSUNvbXBvbmVudCkuam9pbignKycpOyB9O1xuXG5mdW5jdGlvbiB0b0VudW1lcmFibGUodmFsKSB7XHJcbiAgICBpZiAoaXNBcnJheSh2YWwpKVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICBpZiAoaXNTdHJpbmcodmFsKSAmJiB2YWwubGVuZ3RoID4gMClcclxuICAgICAgICByZXR1cm4gW3ZhbF07XHJcbiAgICBpZiAoaXNPYmplY3QodmFsKSlcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModmFsKS5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gW2tleSwgdmFsW2tleV1dOyB9KTtcclxuICAgIHJldHVybiBbXTtcclxufVxyXG5mdW5jdGlvbiB0b0FycmF5KHZhbCkge1xyXG4gICAgaWYgKGlzTmlsKHZhbCkpXHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgaWYgKGlzQXJyYXkodmFsKSlcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgcmV0dXJuIFt2YWxdO1xyXG59XG5cbnZhciBqb2luID0gYXJndW1lbnRzVG9WYWx1ZShmdW5jdGlvbiAodiwgYXJnKSB7IHJldHVybiB0b0FycmF5KHYpLmpvaW4oYXJnID09PSB1bmRlZmluZWQgPyAnICcgOiBhcmcpOyB9KTtcclxudmFyIGxhc3QgPSBhcmd1bWVudHNUb1ZhbHVlKGZ1bmN0aW9uICh2KSB7IHJldHVybiBpc0FycmF5KHYpID8gbGFzdCQxKHYpIDogJyc7IH0pO1xyXG52YXIgZmlyc3QgPSBhcmd1bWVudHNUb1ZhbHVlKGZ1bmN0aW9uICh2KSB7IHJldHVybiBpc0FycmF5KHYpID8gdlswXSA6ICcnOyB9KTtcclxudmFyIHJldmVyc2UgPSBhcmd1bWVudHNUb1ZhbHVlKGZ1bmN0aW9uICh2KSB7IHJldHVybiBfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQodG9BcnJheSh2KSksIGZhbHNlKS5yZXZlcnNlKCk7IH0pO1xyXG5mdW5jdGlvbiBzb3J0KGFyciwgcHJvcGVydHkpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICBhcnIgPSB0b1ZhbHVlJDEoYXJyKTtcclxuICAgIHZhciBnZXRWYWx1ZSA9IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHByb3BlcnR5ID8gX3RoaXMuY29udGV4dC5nZXRGcm9tU2NvcGUob2JqLCBzdHJpbmdpZnkocHJvcGVydHkpLnNwbGl0KCcuJykpIDogb2JqOyB9O1xyXG4gICAgcmV0dXJuIF9fc3ByZWFkQXJyYXkoW10sIF9fcmVhZCh0b0FycmF5KGFycikpLCBmYWxzZSkuc29ydChmdW5jdGlvbiAobGhzLCByaHMpIHtcclxuICAgICAgICBsaHMgPSBnZXRWYWx1ZShsaHMpO1xyXG4gICAgICAgIHJocyA9IGdldFZhbHVlKHJocyk7XHJcbiAgICAgICAgcmV0dXJuIGxocyA8IHJocyA/IC0xIDogKGxocyA+IHJocyA/IDEgOiAwKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHNvcnROYXR1cmFsKGlucHV0LCBwcm9wZXJ0eSkge1xyXG4gICAgaW5wdXQgPSB0b1ZhbHVlJDEoaW5wdXQpO1xyXG4gICAgdmFyIHByb3BlcnR5U3RyaW5nID0gc3RyaW5naWZ5KHByb3BlcnR5KTtcclxuICAgIHZhciBjb21wYXJlID0gcHJvcGVydHkgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgID8gY2FzZUluc2Vuc2l0aXZlQ29tcGFyZVxyXG4gICAgICAgIDogZnVuY3Rpb24gKGxocywgcmhzKSB7IHJldHVybiBjYXNlSW5zZW5zaXRpdmVDb21wYXJlKGxoc1twcm9wZXJ0eVN0cmluZ10sIHJoc1twcm9wZXJ0eVN0cmluZ10pOyB9O1xyXG4gICAgcmV0dXJuIF9fc3ByZWFkQXJyYXkoW10sIF9fcmVhZCh0b0FycmF5KGlucHV0KSksIGZhbHNlKS5zb3J0KGNvbXBhcmUpO1xyXG59XHJcbnZhciBzaXplID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuICh2ICYmIHYubGVuZ3RoKSB8fCAwOyB9O1xyXG5mdW5jdGlvbiBtYXAoYXJyLCBwcm9wZXJ0eSkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIGFyciA9IHRvVmFsdWUkMShhcnIpO1xyXG4gICAgcmV0dXJuIHRvQXJyYXkoYXJyKS5tYXAoZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gX3RoaXMuY29udGV4dC5nZXRGcm9tU2NvcGUob2JqLCBzdHJpbmdpZnkocHJvcGVydHkpLnNwbGl0KCcuJykpOyB9KTtcclxufVxyXG5mdW5jdGlvbiBjb21wYWN0KGFycikge1xyXG4gICAgYXJyID0gdG9WYWx1ZSQxKGFycik7XHJcbiAgICByZXR1cm4gdG9BcnJheShhcnIpLmZpbHRlcihmdW5jdGlvbiAoeCkgeyByZXR1cm4gIWlzTmlsKHRvVmFsdWUkMSh4KSk7IH0pO1xyXG59XHJcbmZ1bmN0aW9uIGNvbmNhdCh2LCBhcmcpIHtcclxuICAgIGlmIChhcmcgPT09IHZvaWQgMCkgeyBhcmcgPSBbXTsgfVxyXG4gICAgdiA9IHRvVmFsdWUkMSh2KTtcclxuICAgIGFyZyA9IHRvQXJyYXkoYXJnKS5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHRvVmFsdWUkMSh2KTsgfSk7XHJcbiAgICByZXR1cm4gdG9BcnJheSh2KS5jb25jYXQoYXJnKTtcclxufVxyXG5mdW5jdGlvbiBzbGljZSh2LCBiZWdpbiwgbGVuZ3RoKSB7XHJcbiAgICBpZiAobGVuZ3RoID09PSB2b2lkIDApIHsgbGVuZ3RoID0gMTsgfVxyXG4gICAgdiA9IHRvVmFsdWUkMSh2KTtcclxuICAgIGlmIChpc05pbCh2KSlcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICBpZiAoIWlzQXJyYXkodikpXHJcbiAgICAgICAgdiA9IHN0cmluZ2lmeSh2KTtcclxuICAgIGJlZ2luID0gYmVnaW4gPCAwID8gdi5sZW5ndGggKyBiZWdpbiA6IGJlZ2luO1xyXG4gICAgcmV0dXJuIHYuc2xpY2UoYmVnaW4sIGJlZ2luICsgbGVuZ3RoKTtcclxufVxyXG5mdW5jdGlvbiB3aGVyZShhcnIsIHByb3BlcnR5LCBleHBlY3RlZCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIGFyciA9IHRvVmFsdWUkMShhcnIpO1xyXG4gICAgcmV0dXJuIHRvQXJyYXkoYXJyKS5maWx0ZXIoZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IF90aGlzLmNvbnRleHQuZ2V0RnJvbVNjb3BlKG9iaiwgc3RyaW5naWZ5KHByb3BlcnR5KS5zcGxpdCgnLicpKTtcclxuICAgICAgICBpZiAoZXhwZWN0ZWQgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIGlzVHJ1dGh5KHZhbHVlLCBfdGhpcy5jb250ZXh0KTtcclxuICAgICAgICBpZiAoaXNDb21wYXJhYmxlKGV4cGVjdGVkKSlcclxuICAgICAgICAgICAgcmV0dXJuIGV4cGVjdGVkLmVxdWFscyh2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBleHBlY3RlZDtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHVuaXEoYXJyKSB7XHJcbiAgICBhcnIgPSB0b1ZhbHVlJDEoYXJyKTtcclxuICAgIHZhciB1ID0ge307XHJcbiAgICByZXR1cm4gKGFyciB8fCBbXSkuZmlsdGVyKGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbCh1LCBTdHJpbmcodmFsKSkpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB1W1N0cmluZyh2YWwpXSA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxufVxuXG52YXIgckZvcm1hdCA9IC8lKFstXzBeIzpdKyk/KFxcZCspPyhbRU9dKT8oLikvO1xyXG52YXIgbW9udGhOYW1lcyA9IFtcclxuICAgICdKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JyxcclxuICAgICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlcidcclxuXTtcclxudmFyIGRheU5hbWVzID0gW1xyXG4gICAgJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J1xyXG5dO1xyXG52YXIgbW9udGhOYW1lc1Nob3J0ID0gbW9udGhOYW1lcy5tYXAoYWJicik7XHJcbnZhciBkYXlOYW1lc1Nob3J0ID0gZGF5TmFtZXMubWFwKGFiYnIpO1xyXG52YXIgc3VmZml4ZXMgPSB7XHJcbiAgICAxOiAnc3QnLFxyXG4gICAgMjogJ25kJyxcclxuICAgIDM6ICdyZCcsXHJcbiAgICAnZGVmYXVsdCc6ICd0aCdcclxufTtcclxuZnVuY3Rpb24gYWJicihzdHIpIHtcclxuICAgIHJldHVybiBzdHIuc2xpY2UoMCwgMyk7XHJcbn1cclxuLy8gcHJvdG90eXBlIGV4dGVuc2lvbnNcclxuZnVuY3Rpb24gZGF5c0luTW9udGgoZCkge1xyXG4gICAgdmFyIGZlYiA9IGlzTGVhcFllYXIoZCkgPyAyOSA6IDI4O1xyXG4gICAgcmV0dXJuIFszMSwgZmViLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XHJcbn1cclxuZnVuY3Rpb24gZ2V0RGF5T2ZZZWFyKGQpIHtcclxuICAgIHZhciBudW0gPSAwO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkLmdldE1vbnRoKCk7ICsraSkge1xyXG4gICAgICAgIG51bSArPSBkYXlzSW5Nb250aChkKVtpXTtcclxuICAgIH1cclxuICAgIHJldHVybiBudW0gKyBkLmdldERhdGUoKTtcclxufVxyXG5mdW5jdGlvbiBnZXRXZWVrT2ZZZWFyKGQsIHN0YXJ0RGF5KSB7XHJcbiAgICAvLyBTa2lwIHRvIHN0YXJ0RGF5IG9mIHRoaXMgd2Vla1xyXG4gICAgdmFyIG5vdyA9IGdldERheU9mWWVhcihkKSArIChzdGFydERheSAtIGQuZ2V0RGF5KCkpO1xyXG4gICAgLy8gRmluZCB0aGUgZmlyc3Qgc3RhcnREYXkgb2YgdGhlIHllYXJcclxuICAgIHZhciBqYW4xID0gbmV3IERhdGUoZC5nZXRGdWxsWWVhcigpLCAwLCAxKTtcclxuICAgIHZhciB0aGVuID0gKDcgLSBqYW4xLmdldERheSgpICsgc3RhcnREYXkpO1xyXG4gICAgcmV0dXJuIFN0cmluZyhNYXRoLmZsb29yKChub3cgLSB0aGVuKSAvIDcpICsgMSk7XHJcbn1cclxuZnVuY3Rpb24gaXNMZWFwWWVhcihkKSB7XHJcbiAgICB2YXIgeWVhciA9IGQuZ2V0RnVsbFllYXIoKTtcclxuICAgIHJldHVybiAhISgoeWVhciAmIDMpID09PSAwICYmICh5ZWFyICUgMTAwIHx8ICh5ZWFyICUgNDAwID09PSAwICYmIHllYXIpKSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0U3VmZml4KGQpIHtcclxuICAgIHZhciBzdHIgPSBkLmdldERhdGUoKS50b1N0cmluZygpO1xyXG4gICAgdmFyIGluZGV4ID0gcGFyc2VJbnQoc3RyLnNsaWNlKC0xKSk7XHJcbiAgICByZXR1cm4gc3VmZml4ZXNbaW5kZXhdIHx8IHN1ZmZpeGVzWydkZWZhdWx0J107XHJcbn1cclxuZnVuY3Rpb24gY2VudHVyeShkKSB7XHJcbiAgICByZXR1cm4gcGFyc2VJbnQoZC5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDIpLCAxMCk7XHJcbn1cclxuLy8gZGVmYXVsdCB0byAwXHJcbnZhciBwYWRXaWR0aHMgPSB7XHJcbiAgICBkOiAyLFxyXG4gICAgZTogMixcclxuICAgIEg6IDIsXHJcbiAgICBJOiAyLFxyXG4gICAgajogMyxcclxuICAgIGs6IDIsXHJcbiAgICBsOiAyLFxyXG4gICAgTDogMyxcclxuICAgIG06IDIsXHJcbiAgICBNOiAyLFxyXG4gICAgUzogMixcclxuICAgIFU6IDIsXHJcbiAgICBXOiAyXHJcbn07XHJcbi8vIGRlZmF1bHQgdG8gJzAnXHJcbnZhciBwYWRDaGFycyA9IHtcclxuICAgIGE6ICcgJyxcclxuICAgIEE6ICcgJyxcclxuICAgIGI6ICcgJyxcclxuICAgIEI6ICcgJyxcclxuICAgIGM6ICcgJyxcclxuICAgIGU6ICcgJyxcclxuICAgIGs6ICcgJyxcclxuICAgIGw6ICcgJyxcclxuICAgIHA6ICcgJyxcclxuICAgIFA6ICcgJ1xyXG59O1xyXG52YXIgZm9ybWF0Q29kZXMgPSB7XHJcbiAgICBhOiBmdW5jdGlvbiAoZCkgeyByZXR1cm4gZGF5TmFtZXNTaG9ydFtkLmdldERheSgpXTsgfSxcclxuICAgIEE6IGZ1bmN0aW9uIChkKSB7IHJldHVybiBkYXlOYW1lc1tkLmdldERheSgpXTsgfSxcclxuICAgIGI6IGZ1bmN0aW9uIChkKSB7IHJldHVybiBtb250aE5hbWVzU2hvcnRbZC5nZXRNb250aCgpXTsgfSxcclxuICAgIEI6IGZ1bmN0aW9uIChkKSB7IHJldHVybiBtb250aE5hbWVzW2QuZ2V0TW9udGgoKV07IH0sXHJcbiAgICBjOiBmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC50b0xvY2FsZVN0cmluZygpOyB9LFxyXG4gICAgQzogZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGNlbnR1cnkoZCk7IH0sXHJcbiAgICBkOiBmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5nZXREYXRlKCk7IH0sXHJcbiAgICBlOiBmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5nZXREYXRlKCk7IH0sXHJcbiAgICBIOiBmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5nZXRIb3VycygpOyB9LFxyXG4gICAgSTogZnVuY3Rpb24gKGQpIHsgcmV0dXJuIFN0cmluZyhkLmdldEhvdXJzKCkgJSAxMiB8fCAxMik7IH0sXHJcbiAgICBqOiBmdW5jdGlvbiAoZCkgeyByZXR1cm4gZ2V0RGF5T2ZZZWFyKGQpOyB9LFxyXG4gICAgazogZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQuZ2V0SG91cnMoKTsgfSxcclxuICAgIGw6IGZ1bmN0aW9uIChkKSB7IHJldHVybiBTdHJpbmcoZC5nZXRIb3VycygpICUgMTIgfHwgMTIpOyB9LFxyXG4gICAgTDogZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQuZ2V0TWlsbGlzZWNvbmRzKCk7IH0sXHJcbiAgICBtOiBmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5nZXRNb250aCgpICsgMTsgfSxcclxuICAgIE06IGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLmdldE1pbnV0ZXMoKTsgfSxcclxuICAgIE46IGZ1bmN0aW9uIChkLCBvcHRzKSB7XHJcbiAgICAgICAgdmFyIHdpZHRoID0gTnVtYmVyKG9wdHMud2lkdGgpIHx8IDk7XHJcbiAgICAgICAgdmFyIHN0ciA9IFN0cmluZyhkLmdldE1pbGxpc2Vjb25kcygpKS5zdWJzdHIoMCwgd2lkdGgpO1xyXG4gICAgICAgIHJldHVybiBwYWRFbmQoc3RyLCB3aWR0aCwgJzAnKTtcclxuICAgIH0sXHJcbiAgICBwOiBmdW5jdGlvbiAoZCkgeyByZXR1cm4gKGQuZ2V0SG91cnMoKSA8IDEyID8gJ0FNJyA6ICdQTScpOyB9LFxyXG4gICAgUDogZnVuY3Rpb24gKGQpIHsgcmV0dXJuIChkLmdldEhvdXJzKCkgPCAxMiA/ICdhbScgOiAncG0nKTsgfSxcclxuICAgIHE6IGZ1bmN0aW9uIChkKSB7IHJldHVybiBnZXRTdWZmaXgoZCk7IH0sXHJcbiAgICBzOiBmdW5jdGlvbiAoZCkgeyByZXR1cm4gTWF0aC5yb3VuZChkLmdldFRpbWUoKSAvIDEwMDApOyB9LFxyXG4gICAgUzogZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQuZ2V0U2Vjb25kcygpOyB9LFxyXG4gICAgdTogZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQuZ2V0RGF5KCkgfHwgNzsgfSxcclxuICAgIFU6IGZ1bmN0aW9uIChkKSB7IHJldHVybiBnZXRXZWVrT2ZZZWFyKGQsIDApOyB9LFxyXG4gICAgdzogZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQuZ2V0RGF5KCk7IH0sXHJcbiAgICBXOiBmdW5jdGlvbiAoZCkgeyByZXR1cm4gZ2V0V2Vla09mWWVhcihkLCAxKTsgfSxcclxuICAgIHg6IGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLnRvTG9jYWxlRGF0ZVN0cmluZygpOyB9LFxyXG4gICAgWDogZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQudG9Mb2NhbGVUaW1lU3RyaW5nKCk7IH0sXHJcbiAgICB5OiBmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDIsIDQpOyB9LFxyXG4gICAgWTogZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQuZ2V0RnVsbFllYXIoKTsgfSxcclxuICAgIHo6IGZ1bmN0aW9uIChkLCBvcHRzKSB7XHJcbiAgICAgICAgdmFyIG5PZmZzZXQgPSBNYXRoLmFicyhkLmdldFRpbWV6b25lT2Zmc2V0KCkpO1xyXG4gICAgICAgIHZhciBoID0gTWF0aC5mbG9vcihuT2Zmc2V0IC8gNjApO1xyXG4gICAgICAgIHZhciBtID0gbk9mZnNldCAlIDYwO1xyXG4gICAgICAgIHJldHVybiAoZC5nZXRUaW1lem9uZU9mZnNldCgpID4gMCA/ICctJyA6ICcrJykgK1xyXG4gICAgICAgICAgICBwYWRTdGFydChoLCAyLCAnMCcpICtcclxuICAgICAgICAgICAgKG9wdHMuZmxhZ3NbJzonXSA/ICc6JyA6ICcnKSArXHJcbiAgICAgICAgICAgIHBhZFN0YXJ0KG0sIDIsICcwJyk7XHJcbiAgICB9LFxyXG4gICAgJ3QnOiBmdW5jdGlvbiAoKSB7IHJldHVybiAnXFx0JzsgfSxcclxuICAgICduJzogZnVuY3Rpb24gKCkgeyByZXR1cm4gJ1xcbic7IH0sXHJcbiAgICAnJSc6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICclJzsgfVxyXG59O1xyXG5mb3JtYXRDb2Rlcy5oID0gZm9ybWF0Q29kZXMuYjtcclxuZnVuY3Rpb24gc3RyZnRpbWUgKGQsIGZvcm1hdFN0cikge1xyXG4gICAgdmFyIG91dHB1dCA9ICcnO1xyXG4gICAgdmFyIHJlbWFpbmluZyA9IGZvcm1hdFN0cjtcclxuICAgIHZhciBtYXRjaDtcclxuICAgIHdoaWxlICgobWF0Y2ggPSByRm9ybWF0LmV4ZWMocmVtYWluaW5nKSkpIHtcclxuICAgICAgICBvdXRwdXQgKz0gcmVtYWluaW5nLnNsaWNlKDAsIG1hdGNoLmluZGV4KTtcclxuICAgICAgICByZW1haW5pbmcgPSByZW1haW5pbmcuc2xpY2UobWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGgpO1xyXG4gICAgICAgIG91dHB1dCArPSBmb3JtYXQoZCwgbWF0Y2gpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dHB1dCArIHJlbWFpbmluZztcclxufVxyXG5mdW5jdGlvbiBmb3JtYXQoZCwgbWF0Y2gpIHtcclxuICAgIHZhciBlXzEsIF9hO1xyXG4gICAgdmFyIF9iID0gX19yZWFkKG1hdGNoLCA1KSwgaW5wdXQgPSBfYlswXSwgX2MgPSBfYlsxXSwgZmxhZ1N0ciA9IF9jID09PSB2b2lkIDAgPyAnJyA6IF9jLCB3aWR0aCA9IF9iWzJdLCBtb2RpZmllciA9IF9iWzNdLCBjb252ZXJzaW9uID0gX2JbNF07XHJcbiAgICB2YXIgY29udmVydCA9IGZvcm1hdENvZGVzW2NvbnZlcnNpb25dO1xyXG4gICAgaWYgKCFjb252ZXJ0KVxyXG4gICAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIHZhciBmbGFncyA9IHt9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBmb3IgKHZhciBmbGFnU3RyXzEgPSBfX3ZhbHVlcyhmbGFnU3RyKSwgZmxhZ1N0cl8xXzEgPSBmbGFnU3RyXzEubmV4dCgpOyAhZmxhZ1N0cl8xXzEuZG9uZTsgZmxhZ1N0cl8xXzEgPSBmbGFnU3RyXzEubmV4dCgpKSB7XHJcbiAgICAgICAgICAgIHZhciBmbGFnID0gZmxhZ1N0cl8xXzEudmFsdWU7XHJcbiAgICAgICAgICAgIGZsYWdzW2ZsYWddID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGZsYWdTdHJfMV8xICYmICFmbGFnU3RyXzFfMS5kb25lICYmIChfYSA9IGZsYWdTdHJfMS5yZXR1cm4pKSBfYS5jYWxsKGZsYWdTdHJfMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHZhciByZXQgPSBTdHJpbmcoY29udmVydChkLCB7IGZsYWdzOiBmbGFncywgd2lkdGg6IHdpZHRoLCBtb2RpZmllcjogbW9kaWZpZXIgfSkpO1xyXG4gICAgdmFyIHBhZENoYXIgPSBwYWRDaGFyc1tjb252ZXJzaW9uXSB8fCAnMCc7XHJcbiAgICB2YXIgcGFkV2lkdGggPSB3aWR0aCB8fCBwYWRXaWR0aHNbY29udmVyc2lvbl0gfHwgMDtcclxuICAgIGlmIChmbGFnc1snXiddKVxyXG4gICAgICAgIHJldCA9IHJldC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgZWxzZSBpZiAoZmxhZ3NbJyMnXSlcclxuICAgICAgICByZXQgPSBjaGFuZ2VDYXNlKHJldCk7XHJcbiAgICBpZiAoZmxhZ3NbJ18nXSlcclxuICAgICAgICBwYWRDaGFyID0gJyAnO1xyXG4gICAgZWxzZSBpZiAoZmxhZ3NbJzAnXSlcclxuICAgICAgICBwYWRDaGFyID0gJzAnO1xyXG4gICAgaWYgKGZsYWdzWyctJ10pXHJcbiAgICAgICAgcGFkV2lkdGggPSAwO1xyXG4gICAgcmV0dXJuIHBhZFN0YXJ0KHJldCwgcGFkV2lkdGgsIHBhZENoYXIpO1xyXG59XG5cbi8vIG9uZSBtaW51dGUgaW4gbWlsbGlzZWNvbmRzXHJcbnZhciBPbmVNaW51dGUgPSA2MDAwMDtcclxudmFyIGhvc3RUaW1lem9uZU9mZnNldCA9IG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKTtcclxudmFyIElTTzg2MDFfVElNRVpPTkVfUEFUVEVSTiA9IC8oW3paXXwoWystXSkoXFxkezJ9KTooXFxkezJ9KSkkLztcclxuLyoqXHJcbiAqIEEgZGF0ZSBpbXBsZW1lbnRhdGlvbiB3aXRoIHRpbWV6b25lIGluZm8sIGp1c3QgbGlrZSBSdWJ5IGRhdGVcclxuICpcclxuICogSW1wbGVtZW50YXRpb246XHJcbiAqIC0gY3JlYXRlIGEgRGF0ZSBvZmZzZXQgYnkgaXQncyB0aW1lem9uZSBkaWZmZXJlbmNlLCBhdm9pZGluZyBvdmVycmlkaW5nIGEgYnVuY2ggb2YgbWV0aG9kc1xyXG4gKiAtIHJld3JpdGUgZ2V0VGltZXpvbmVPZmZzZXQoKSB0byB0cmljayBzdHJmdGltZVxyXG4gKi9cclxudmFyIFRpbWV6b25lRGF0ZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFRpbWV6b25lRGF0ZShpbml0LCB0aW1lem9uZU9mZnNldCkge1xyXG4gICAgICAgIGlmIChpbml0IGluc3RhbmNlb2YgVGltZXpvbmVEYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZSA9IGluaXQuZGF0ZTtcclxuICAgICAgICAgICAgdGltZXpvbmVPZmZzZXQgPSBpbml0LnRpbWV6b25lT2Zmc2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGRpZmYgPSAoaG9zdFRpbWV6b25lT2Zmc2V0IC0gdGltZXpvbmVPZmZzZXQpICogT25lTWludXRlO1xyXG4gICAgICAgICAgICB2YXIgdGltZSA9IG5ldyBEYXRlKGluaXQpLmdldFRpbWUoKSArIGRpZmY7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKHRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRpbWV6b25lT2Zmc2V0ID0gdGltZXpvbmVPZmZzZXQ7XHJcbiAgICB9XHJcbiAgICBUaW1lem9uZURhdGUucHJvdG90eXBlLmdldFRpbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZS5nZXRUaW1lKCk7XHJcbiAgICB9O1xyXG4gICAgVGltZXpvbmVEYXRlLnByb3RvdHlwZS5nZXRNaWxsaXNlY29uZHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcclxuICAgIH07XHJcbiAgICBUaW1lem9uZURhdGUucHJvdG90eXBlLmdldFNlY29uZHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgICB9O1xyXG4gICAgVGltZXpvbmVEYXRlLnByb3RvdHlwZS5nZXRNaW51dGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGUuZ2V0TWludXRlcygpO1xyXG4gICAgfTtcclxuICAgIFRpbWV6b25lRGF0ZS5wcm90b3R5cGUuZ2V0SG91cnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZS5nZXRIb3VycygpO1xyXG4gICAgfTtcclxuICAgIFRpbWV6b25lRGF0ZS5wcm90b3R5cGUuZ2V0RGF5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGUuZ2V0RGF5KCk7XHJcbiAgICB9O1xyXG4gICAgVGltZXpvbmVEYXRlLnByb3RvdHlwZS5nZXREYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgfTtcclxuICAgIFRpbWV6b25lRGF0ZS5wcm90b3R5cGUuZ2V0TW9udGggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZS5nZXRNb250aCgpO1xyXG4gICAgfTtcclxuICAgIFRpbWV6b25lRGF0ZS5wcm90b3R5cGUuZ2V0RnVsbFllYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgfTtcclxuICAgIFRpbWV6b25lRGF0ZS5wcm90b3R5cGUudG9Mb2NhbGVUaW1lU3RyaW5nID0gZnVuY3Rpb24gKGxvY2FsZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKGxvY2FsZSk7XHJcbiAgICB9O1xyXG4gICAgVGltZXpvbmVEYXRlLnByb3RvdHlwZS50b0xvY2FsZURhdGVTdHJpbmcgPSBmdW5jdGlvbiAobG9jYWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcobG9jYWxlKTtcclxuICAgIH07XHJcbiAgICBUaW1lem9uZURhdGUucHJvdG90eXBlLmdldFRpbWV6b25lT2Zmc2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpbWV6b25lT2Zmc2V0O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgRGF0ZSBvYmplY3QgZml4ZWQgdG8gaXQncyBkZWNsYXJlZCBUaW1lem9uZS4gQm90aFxyXG4gICAgICogLSAyMDIxLTA4LTA2VDAyOjI5OjAwLjAwMFogYW5kXHJcbiAgICAgKiAtIDIwMjEtMDgtMDZUMDI6Mjk6MDAuMDAwKzA4OjAwXHJcbiAgICAgKiB3aWxsIGFsd2F5cyBiZSBkaXNwbGF5ZWQgYXNcclxuICAgICAqIC0gMjAyMS0wOC0wNiAwMjoyOTowMFxyXG4gICAgICogcmVnYXJkbGVzcyB0aW1lem9uZU9mZnNldCBpbiBKYXZhU2NyaXB0IHJlYWxtXHJcbiAgICAgKlxyXG4gICAgICogVGhlIGltcGxlbWVudGF0aW9uIGhhY2s6XHJcbiAgICAgKiBJbnN0ZWFkIG9mIGNhbGxpbmcgYC5nZXRNb250aCgpYC9gLmdldFVUQ01vbnRoKClgIHJlc3BlY3QgdG8gYHByZXNlcnZlVGltZXpvbmVzYCxcclxuICAgICAqIHdlIGNyZWF0ZSBhIGRpZmZlcmVudCBEYXRlIHRvIHRyaWNrIHN0cmZ0aW1lLCBpdCdzIGJvdGggc2ltcGxlciBhbmQgbW9yZSBwZXJmb3JtYW50LlxyXG4gICAgICogR2l2ZW4gdGhhdCBhIHRlbXBsYXRlIGlzIGV4cGVjdGVkIHRvIGJlIHBhcnNlZCBmZXdlciB0aW1lcyB0aGFuIHJlbmRlcmVkLlxyXG4gICAgICovXHJcbiAgICBUaW1lem9uZURhdGUuY3JlYXRlRGF0ZUZpeGVkVG9UaW1lem9uZSA9IGZ1bmN0aW9uIChkYXRlU3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIG0gPSBkYXRlU3RyaW5nLm1hdGNoKElTTzg2MDFfVElNRVpPTkVfUEFUVEVSTik7XHJcbiAgICAgICAgLy8gcmVwcmVzZW50aW5nIGEgVVRDIHRpbWVzdGFtcFxyXG4gICAgICAgIGlmIChtICYmIG1bMV0gPT09ICdaJykge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRpbWV6b25lRGF0ZSgrbmV3IERhdGUoZGF0ZVN0cmluZyksIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBoYXMgYSB0aW1lem9uZSBzcGVjaWZpZWRcclxuICAgICAgICBpZiAobSAmJiBtWzJdICYmIG1bM10gJiYgbVs0XSkge1xyXG4gICAgICAgICAgICB2YXIgX2EgPSBfX3JlYWQobSwgNSksIHNpZ24gPSBfYVsyXSwgaG91cnMgPSBfYVszXSwgbWludXRlcyA9IF9hWzRdO1xyXG4gICAgICAgICAgICB2YXIgZGVsdGEgPSAoc2lnbiA9PT0gJysnID8gLTEgOiAxKSAqIChwYXJzZUludChob3VycywgMTApICogNjAgKyBwYXJzZUludChtaW51dGVzLCAxMCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRpbWV6b25lRGF0ZSgrbmV3IERhdGUoZGF0ZVN0cmluZyksIGRlbHRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUaW1lem9uZURhdGU7XHJcbn0oKSk7XG5cbmZ1bmN0aW9uIGRhdGUodiwgYXJnKSB7XHJcbiAgICB2YXIgb3B0cyA9IHRoaXMuY29udGV4dC5vcHRzO1xyXG4gICAgdmFyIGRhdGU7XHJcbiAgICB2ID0gdG9WYWx1ZSQxKHYpO1xyXG4gICAgYXJnID0gc3RyaW5naWZ5KGFyZyk7XHJcbiAgICBpZiAodiA9PT0gJ25vdycgfHwgdiA9PT0gJ3RvZGF5Jykge1xyXG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNOdW1iZXIodikpIHtcclxuICAgICAgICBkYXRlID0gbmV3IERhdGUodiAqIDEwMDApO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNTdHJpbmcodikpIHtcclxuICAgICAgICBpZiAoL15cXGQrJC8udGVzdCh2KSkge1xyXG4gICAgICAgICAgICBkYXRlID0gbmV3IERhdGUoK3YgKiAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAob3B0cy5wcmVzZXJ2ZVRpbWV6b25lcykge1xyXG4gICAgICAgICAgICBkYXRlID0gVGltZXpvbmVEYXRlLmNyZWF0ZURhdGVGaXhlZFRvVGltZXpvbmUodik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRlID0gbmV3IERhdGUodik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZGF0ZSA9IHY7XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzVmFsaWREYXRlKGRhdGUpKVxyXG4gICAgICAgIHJldHVybiB2O1xyXG4gICAgaWYgKG9wdHMuaGFzT3duUHJvcGVydHkoJ3RpbWV6b25lT2Zmc2V0JykpIHtcclxuICAgICAgICBkYXRlID0gbmV3IFRpbWV6b25lRGF0ZShkYXRlLCBvcHRzLnRpbWV6b25lT2Zmc2V0KTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdHJmdGltZShkYXRlLCBhcmcpO1xyXG59XHJcbmZ1bmN0aW9uIGlzVmFsaWREYXRlKGRhdGUpIHtcclxuICAgIHJldHVybiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUgfHwgZGF0ZSBpbnN0YW5jZW9mIFRpbWV6b25lRGF0ZSkgJiYgIWlzTmFOKGRhdGUuZ2V0VGltZSgpKTtcclxufVxuXG5mdW5jdGlvbiBEZWZhdWx0KHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcclxuICAgIHZhciBhcmdzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIGFyZ3NbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICB2YWx1ZSA9IHRvVmFsdWUkMSh2YWx1ZSk7XHJcbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkgfHwgaXNTdHJpbmcodmFsdWUpKVxyXG4gICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPyB2YWx1ZSA6IGRlZmF1bHRWYWx1ZTtcclxuICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UgJiYgKG5ldyBNYXAoYXJncykpLmdldCgnYWxsb3dfZmFsc2UnKSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gaXNGYWxzeSh2YWx1ZSwgdGhpcy5jb250ZXh0KSA/IGRlZmF1bHRWYWx1ZSA6IHZhbHVlO1xyXG59XHJcbmZ1bmN0aW9uIGpzb24odmFsdWUpIHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XHJcbn1cclxudmFyIHJhdyQxID0gaWRlbnRpZnk7XG5cbnZhciBMaXF1aWRFcnJvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhMaXF1aWRFcnJvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIExpcXVpZEVycm9yKGVyciwgdG9rZW4pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBlcnIubWVzc2FnZSkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5vcmlnaW5hbEVycm9yID0gZXJyO1xyXG4gICAgICAgIF90aGlzLnRva2VuID0gdG9rZW47XHJcbiAgICAgICAgX3RoaXMuY29udGV4dCA9ICcnO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIExpcXVpZEVycm9yLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGVyciA9IHRoaXMub3JpZ2luYWxFcnJvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBta0NvbnRleHQodGhpcy50b2tlbik7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWtNZXNzYWdlKGVyci5tZXNzYWdlLCB0aGlzLnRva2VuKTtcclxuICAgICAgICB0aGlzLnN0YWNrID0gdGhpcy5tZXNzYWdlICsgJ1xcbicgKyB0aGlzLmNvbnRleHQgK1xyXG4gICAgICAgICAgICAnXFxuJyArIHRoaXMuc3RhY2sgKyAnXFxuRnJvbSAnICsgZXJyLnN0YWNrO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBMaXF1aWRFcnJvcjtcclxufShFcnJvcikpO1xyXG52YXIgVG9rZW5pemF0aW9uRXJyb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoVG9rZW5pemF0aW9uRXJyb3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBUb2tlbml6YXRpb25FcnJvcihtZXNzYWdlLCB0b2tlbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG5ldyBFcnJvcihtZXNzYWdlKSwgdG9rZW4pIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMubmFtZSA9ICdUb2tlbml6YXRpb25FcnJvcic7XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS51cGRhdGUuY2FsbChfdGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFRva2VuaXphdGlvbkVycm9yO1xyXG59KExpcXVpZEVycm9yKSk7XHJcbnZhciBQYXJzZUVycm9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFBhcnNlRXJyb3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBQYXJzZUVycm9yKGVyciwgdG9rZW4pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBlcnIsIHRva2VuKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLm5hbWUgPSAnUGFyc2VFcnJvcic7XHJcbiAgICAgICAgX3RoaXMubWVzc2FnZSA9IGVyci5tZXNzYWdlO1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwoX3RoaXMpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBQYXJzZUVycm9yO1xyXG59KExpcXVpZEVycm9yKSk7XHJcbnZhciBSZW5kZXJFcnJvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhSZW5kZXJFcnJvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFJlbmRlckVycm9yKGVyciwgdHBsKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZXJyLCB0cGwudG9rZW4pIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMubmFtZSA9ICdSZW5kZXJFcnJvcic7XHJcbiAgICAgICAgX3RoaXMubWVzc2FnZSA9IGVyci5tZXNzYWdlO1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwoX3RoaXMpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIFJlbmRlckVycm9yLmlzID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgIHJldHVybiBvYmoubmFtZSA9PT0gJ1JlbmRlckVycm9yJztcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVuZGVyRXJyb3I7XHJcbn0oTGlxdWlkRXJyb3IpKTtcclxudmFyIFVuZGVmaW5lZFZhcmlhYmxlRXJyb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoVW5kZWZpbmVkVmFyaWFibGVFcnJvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFVuZGVmaW5lZFZhcmlhYmxlRXJyb3IoZXJyLCB0b2tlbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGVyciwgdG9rZW4pIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMubmFtZSA9ICdVbmRlZmluZWRWYXJpYWJsZUVycm9yJztcclxuICAgICAgICBfdGhpcy5tZXNzYWdlID0gZXJyLm1lc3NhZ2U7XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS51cGRhdGUuY2FsbChfdGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFVuZGVmaW5lZFZhcmlhYmxlRXJyb3I7XHJcbn0oTGlxdWlkRXJyb3IpKTtcclxuLy8gb25seSB1c2VkIGludGVybmFsbHk7IHJhaXNlZCB3aGVyZSB3ZSBkb24ndCBoYXZlIHRva2VuIGluZm9ybWF0aW9uLFxyXG4vLyBzbyBpdCBjYW4ndCBiZSBhbiBVbmRlZmluZWRWYXJpYWJsZUVycm9yLlxyXG52YXIgSW50ZXJuYWxVbmRlZmluZWRWYXJpYWJsZUVycm9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEludGVybmFsVW5kZWZpbmVkVmFyaWFibGVFcnJvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEludGVybmFsVW5kZWZpbmVkVmFyaWFibGVFcnJvcih2YXJpYWJsZU5hbWUpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBcInVuZGVmaW5lZCB2YXJpYWJsZTogXCIuY29uY2F0KHZhcmlhYmxlTmFtZSkpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMubmFtZSA9ICdJbnRlcm5hbFVuZGVmaW5lZFZhcmlhYmxlRXJyb3InO1xyXG4gICAgICAgIF90aGlzLnZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gSW50ZXJuYWxVbmRlZmluZWRWYXJpYWJsZUVycm9yO1xyXG59KEVycm9yKSk7XHJcbnZhciBBc3NlcnRpb25FcnJvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhBc3NlcnRpb25FcnJvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEFzc2VydGlvbkVycm9yKG1lc3NhZ2UpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBtZXNzYWdlKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLm5hbWUgPSAnQXNzZXJ0aW9uRXJyb3InO1xyXG4gICAgICAgIF90aGlzLm1lc3NhZ2UgPSBtZXNzYWdlICsgJyc7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEFzc2VydGlvbkVycm9yO1xyXG59KEVycm9yKSk7XHJcbmZ1bmN0aW9uIG1rQ29udGV4dCh0b2tlbikge1xyXG4gICAgdmFyIF9hID0gX19yZWFkKHRva2VuLmdldFBvc2l0aW9uKCksIDEpLCBsaW5lID0gX2FbMF07XHJcbiAgICB2YXIgbGluZXMgPSB0b2tlbi5pbnB1dC5zcGxpdCgnXFxuJyk7XHJcbiAgICB2YXIgYmVnaW4gPSBNYXRoLm1heChsaW5lIC0gMiwgMSk7XHJcbiAgICB2YXIgZW5kID0gTWF0aC5taW4obGluZSArIDMsIGxpbmVzLmxlbmd0aCk7XHJcbiAgICB2YXIgY29udGV4dCA9IHJhbmdlKGJlZ2luLCBlbmQgKyAxKVxyXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKGxpbmVOdW1iZXIpIHtcclxuICAgICAgICB2YXIgaW5kaWNhdG9yID0gKGxpbmVOdW1iZXIgPT09IGxpbmUpID8gJz4+ICcgOiAnICAgJztcclxuICAgICAgICB2YXIgbnVtID0gcGFkU3RhcnQoU3RyaW5nKGxpbmVOdW1iZXIpLCBTdHJpbmcoZW5kKS5sZW5ndGgpO1xyXG4gICAgICAgIHZhciB0ZXh0ID0gbGluZXNbbGluZU51bWJlciAtIDFdO1xyXG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChpbmRpY2F0b3IpLmNvbmNhdChudW0sIFwifCBcIikuY29uY2F0KHRleHQpO1xyXG4gICAgfSlcclxuICAgICAgICAuam9pbignXFxuJyk7XHJcbiAgICByZXR1cm4gY29udGV4dDtcclxufVxyXG5mdW5jdGlvbiBta01lc3NhZ2UobXNnLCB0b2tlbikge1xyXG4gICAgaWYgKHRva2VuLmZpbGUpXHJcbiAgICAgICAgbXNnICs9IFwiLCBmaWxlOlwiLmNvbmNhdCh0b2tlbi5maWxlKTtcclxuICAgIHZhciBfYSA9IF9fcmVhZCh0b2tlbi5nZXRQb3NpdGlvbigpLCAyKSwgbGluZSA9IF9hWzBdLCBjb2wgPSBfYVsxXTtcclxuICAgIG1zZyArPSBcIiwgbGluZTpcIi5jb25jYXQobGluZSwgXCIsIGNvbDpcIikuY29uY2F0KGNvbCk7XHJcbiAgICByZXR1cm4gbXNnO1xyXG59XG5cbmZ1bmN0aW9uIGFzc2VydChwcmVkaWNhdGUsIG1lc3NhZ2UpIHtcclxuICAgIGlmICghcHJlZGljYXRlKSB7XHJcbiAgICAgICAgdmFyIG1zZyA9IHR5cGVvZiBtZXNzYWdlID09PSAnZnVuY3Rpb24nXHJcbiAgICAgICAgICAgID8gbWVzc2FnZSgpXHJcbiAgICAgICAgICAgIDogKG1lc3NhZ2UgfHwgXCJleHBlY3QgXCIuY29uY2F0KHByZWRpY2F0ZSwgXCIgdG8gYmUgdHJ1ZVwiKSk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEFzc2VydGlvbkVycm9yKG1zZyk7XHJcbiAgICB9XHJcbn1cblxuLyoqXHJcbiAqIFN0cmluZyByZWxhdGVkIGZpbHRlcnNcclxuICpcclxuICogKiBwcmVmZXIgc3RyaW5naWZ5KCkgdG8gU3RyaW5nKCkgc2luY2UgYHVuZGVmaW5lZGAsIGBudWxsYCBzaG91bGQgZXZhbCAnJ1xyXG4gKi9cclxuZnVuY3Rpb24gYXBwZW5kKHYsIGFyZykge1xyXG4gICAgYXNzZXJ0KGFyZ3VtZW50cy5sZW5ndGggPT09IDIsICdhcHBlbmQgZXhwZWN0IDIgYXJndW1lbnRzJyk7XHJcbiAgICByZXR1cm4gc3RyaW5naWZ5KHYpICsgc3RyaW5naWZ5KGFyZyk7XHJcbn1cclxuZnVuY3Rpb24gcHJlcGVuZCh2LCBhcmcpIHtcclxuICAgIGFzc2VydChhcmd1bWVudHMubGVuZ3RoID09PSAyLCAncHJlcGVuZCBleHBlY3QgMiBhcmd1bWVudHMnKTtcclxuICAgIHJldHVybiBzdHJpbmdpZnkoYXJnKSArIHN0cmluZ2lmeSh2KTtcclxufVxyXG5mdW5jdGlvbiBsc3RyaXAodiwgY2hhcnMpIHtcclxuICAgIGlmIChjaGFycykge1xyXG4gICAgICAgIGNoYXJzID0gZXNjYXBlUmVnRXhwKHN0cmluZ2lmeShjaGFycykpO1xyXG4gICAgICAgIHJldHVybiBzdHJpbmdpZnkodikucmVwbGFjZShuZXcgUmVnRXhwKFwiXltcIi5jb25jYXQoY2hhcnMsIFwiXStcIiksICdnJyksICcnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdHJpbmdpZnkodikucmVwbGFjZSgvXlxccysvLCAnJyk7XHJcbn1cclxuZnVuY3Rpb24gZG93bmNhc2Uodikge1xyXG4gICAgcmV0dXJuIHN0cmluZ2lmeSh2KS50b0xvd2VyQ2FzZSgpO1xyXG59XHJcbmZ1bmN0aW9uIHVwY2FzZShzdHIpIHtcclxuICAgIHJldHVybiBzdHJpbmdpZnkoc3RyKS50b1VwcGVyQ2FzZSgpO1xyXG59XHJcbmZ1bmN0aW9uIHJlbW92ZSh2LCBhcmcpIHtcclxuICAgIHJldHVybiBzdHJpbmdpZnkodikuc3BsaXQoU3RyaW5nKGFyZykpLmpvaW4oJycpO1xyXG59XHJcbmZ1bmN0aW9uIHJlbW92ZUZpcnN0KHYsIGwpIHtcclxuICAgIHJldHVybiBzdHJpbmdpZnkodikucmVwbGFjZShTdHJpbmcobCksICcnKTtcclxufVxyXG5mdW5jdGlvbiByc3RyaXAoc3RyLCBjaGFycykge1xyXG4gICAgaWYgKGNoYXJzKSB7XHJcbiAgICAgICAgY2hhcnMgPSBlc2NhcGVSZWdFeHAoc3RyaW5naWZ5KGNoYXJzKSk7XHJcbiAgICAgICAgcmV0dXJuIHN0cmluZ2lmeShzdHIpLnJlcGxhY2UobmV3IFJlZ0V4cChcIltcIi5jb25jYXQoY2hhcnMsIFwiXSskXCIpLCAnZycpLCAnJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyaW5naWZ5KHN0cikucmVwbGFjZSgvXFxzKyQvLCAnJyk7XHJcbn1cclxuZnVuY3Rpb24gc3BsaXQodiwgYXJnKSB7XHJcbiAgICB2YXIgYXJyID0gc3RyaW5naWZ5KHYpLnNwbGl0KFN0cmluZyhhcmcpKTtcclxuICAgIC8vIGFsaWduIHRvIHJ1Ynkgc3BsaXQsIHdoaWNoIGlzIHRoZSBiZWhhdmlvciBvZiBzaG9waWZ5L2xpcXVpZFxyXG4gICAgLy8gc2VlOiBodHRwczovL3J1YnktZG9jLm9yZy9jb3JlLTIuNC4wL1N0cmluZy5odG1sI21ldGhvZC1pLXNwbGl0XHJcbiAgICB3aGlsZSAoYXJyLmxlbmd0aCAmJiBhcnJbYXJyLmxlbmd0aCAtIDFdID09PSAnJylcclxuICAgICAgICBhcnIucG9wKCk7XHJcbiAgICByZXR1cm4gYXJyO1xyXG59XHJcbmZ1bmN0aW9uIHN0cmlwKHYsIGNoYXJzKSB7XHJcbiAgICBpZiAoY2hhcnMpIHtcclxuICAgICAgICBjaGFycyA9IGVzY2FwZVJlZ0V4cChzdHJpbmdpZnkoY2hhcnMpKTtcclxuICAgICAgICByZXR1cm4gc3RyaW5naWZ5KHYpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoXCJeW1wiLmNvbmNhdChjaGFycywgXCJdK1wiKSwgJ2cnKSwgJycpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoXCJbXCIuY29uY2F0KGNoYXJzLCBcIl0rJFwiKSwgJ2cnKSwgJycpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0cmluZ2lmeSh2KS50cmltKCk7XHJcbn1cclxuZnVuY3Rpb24gc3RyaXBOZXdsaW5lcyh2KSB7XHJcbiAgICByZXR1cm4gc3RyaW5naWZ5KHYpLnJlcGxhY2UoL1xcbi9nLCAnJyk7XHJcbn1cclxuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHIpIHtcclxuICAgIHN0ciA9IHN0cmluZ2lmeShzdHIpO1xyXG4gICAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xyXG59XHJcbmZ1bmN0aW9uIHJlcGxhY2UodiwgcGF0dGVybiwgcmVwbGFjZW1lbnQpIHtcclxuICAgIHJldHVybiBzdHJpbmdpZnkodikuc3BsaXQoU3RyaW5nKHBhdHRlcm4pKS5qb2luKHJlcGxhY2VtZW50KTtcclxufVxyXG5mdW5jdGlvbiByZXBsYWNlRmlyc3QodiwgYXJnMSwgYXJnMikge1xyXG4gICAgcmV0dXJuIHN0cmluZ2lmeSh2KS5yZXBsYWNlKFN0cmluZyhhcmcxKSwgYXJnMik7XHJcbn1cclxuZnVuY3Rpb24gdHJ1bmNhdGUodiwgbCwgbykge1xyXG4gICAgaWYgKGwgPT09IHZvaWQgMCkgeyBsID0gNTA7IH1cclxuICAgIGlmIChvID09PSB2b2lkIDApIHsgbyA9ICcuLi4nOyB9XHJcbiAgICB2ID0gc3RyaW5naWZ5KHYpO1xyXG4gICAgaWYgKHYubGVuZ3RoIDw9IGwpXHJcbiAgICAgICAgcmV0dXJuIHY7XHJcbiAgICByZXR1cm4gdi5zdWJzdHJpbmcoMCwgbCAtIG8ubGVuZ3RoKSArIG87XHJcbn1cclxuZnVuY3Rpb24gdHJ1bmNhdGV3b3Jkcyh2LCBsLCBvKSB7XHJcbiAgICBpZiAobCA9PT0gdm9pZCAwKSB7IGwgPSAxNTsgfVxyXG4gICAgaWYgKG8gPT09IHZvaWQgMCkgeyBvID0gJy4uLic7IH1cclxuICAgIHZhciBhcnIgPSBzdHJpbmdpZnkodikuc3BsaXQoL1xccysvKTtcclxuICAgIHZhciByZXQgPSBhcnIuc2xpY2UoMCwgbCkuam9pbignICcpO1xyXG4gICAgaWYgKGFyci5sZW5ndGggPj0gbClcclxuICAgICAgICByZXQgKz0gbztcclxuICAgIHJldHVybiByZXQ7XHJcbn1cblxudmFyIGJ1aWx0aW5GaWx0ZXJzID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICBlc2NhcGU6IGVzY2FwZSxcbiAgICBlc2NhcGVPbmNlOiBlc2NhcGVPbmNlLFxuICAgIG5ld2xpbmVUb0JyOiBuZXdsaW5lVG9CcixcbiAgICBzdHJpcEh0bWw6IHN0cmlwSHRtbCxcbiAgICBhYnM6IGFicyxcbiAgICBhdExlYXN0OiBhdExlYXN0LFxuICAgIGF0TW9zdDogYXRNb3N0LFxuICAgIGNlaWw6IGNlaWwsXG4gICAgZGl2aWRlZEJ5OiBkaXZpZGVkQnksXG4gICAgZmxvb3I6IGZsb29yLFxuICAgIG1pbnVzOiBtaW51cyxcbiAgICBtb2R1bG86IG1vZHVsbyxcbiAgICB0aW1lczogdGltZXMsXG4gICAgcm91bmQ6IHJvdW5kLFxuICAgIHBsdXM6IHBsdXMsXG4gICAgdXJsRGVjb2RlOiB1cmxEZWNvZGUsXG4gICAgdXJsRW5jb2RlOiB1cmxFbmNvZGUsXG4gICAgam9pbjogam9pbixcbiAgICBsYXN0OiBsYXN0LFxuICAgIGZpcnN0OiBmaXJzdCxcbiAgICByZXZlcnNlOiByZXZlcnNlLFxuICAgIHNvcnQ6IHNvcnQsXG4gICAgc29ydE5hdHVyYWw6IHNvcnROYXR1cmFsLFxuICAgIHNpemU6IHNpemUsXG4gICAgbWFwOiBtYXAsXG4gICAgY29tcGFjdDogY29tcGFjdCxcbiAgICBjb25jYXQ6IGNvbmNhdCxcbiAgICBzbGljZTogc2xpY2UsXG4gICAgd2hlcmU6IHdoZXJlLFxuICAgIHVuaXE6IHVuaXEsXG4gICAgZGF0ZTogZGF0ZSxcbiAgICBEZWZhdWx0OiBEZWZhdWx0LFxuICAgIGpzb246IGpzb24sXG4gICAgcmF3OiByYXckMSxcbiAgICBhcHBlbmQ6IGFwcGVuZCxcbiAgICBwcmVwZW5kOiBwcmVwZW5kLFxuICAgIGxzdHJpcDogbHN0cmlwLFxuICAgIGRvd25jYXNlOiBkb3duY2FzZSxcbiAgICB1cGNhc2U6IHVwY2FzZSxcbiAgICByZW1vdmU6IHJlbW92ZSxcbiAgICByZW1vdmVGaXJzdDogcmVtb3ZlRmlyc3QsXG4gICAgcnN0cmlwOiByc3RyaXAsXG4gICAgc3BsaXQ6IHNwbGl0LFxuICAgIHN0cmlwOiBzdHJpcCxcbiAgICBzdHJpcE5ld2xpbmVzOiBzdHJpcE5ld2xpbmVzLFxuICAgIGNhcGl0YWxpemU6IGNhcGl0YWxpemUsXG4gICAgcmVwbGFjZTogcmVwbGFjZSxcbiAgICByZXBsYWNlRmlyc3Q6IHJlcGxhY2VGaXJzdCxcbiAgICB0cnVuY2F0ZTogdHJ1bmNhdGUsXG4gICAgdHJ1bmNhdGV3b3JkczogdHJ1bmNhdGV3b3Jkc1xufSk7XG5cbnZhciBUb2tlbktpbmQ7XHJcbihmdW5jdGlvbiAoVG9rZW5LaW5kKSB7XHJcbiAgICBUb2tlbktpbmRbVG9rZW5LaW5kW1wiTnVtYmVyXCJdID0gMV0gPSBcIk51bWJlclwiO1xyXG4gICAgVG9rZW5LaW5kW1Rva2VuS2luZFtcIkxpdGVyYWxcIl0gPSAyXSA9IFwiTGl0ZXJhbFwiO1xyXG4gICAgVG9rZW5LaW5kW1Rva2VuS2luZFtcIlRhZ1wiXSA9IDRdID0gXCJUYWdcIjtcclxuICAgIFRva2VuS2luZFtUb2tlbktpbmRbXCJPdXRwdXRcIl0gPSA4XSA9IFwiT3V0cHV0XCI7XHJcbiAgICBUb2tlbktpbmRbVG9rZW5LaW5kW1wiSFRNTFwiXSA9IDE2XSA9IFwiSFRNTFwiO1xyXG4gICAgVG9rZW5LaW5kW1Rva2VuS2luZFtcIkZpbHRlclwiXSA9IDMyXSA9IFwiRmlsdGVyXCI7XHJcbiAgICBUb2tlbktpbmRbVG9rZW5LaW5kW1wiSGFzaFwiXSA9IDY0XSA9IFwiSGFzaFwiO1xyXG4gICAgVG9rZW5LaW5kW1Rva2VuS2luZFtcIlByb3BlcnR5QWNjZXNzXCJdID0gMTI4XSA9IFwiUHJvcGVydHlBY2Nlc3NcIjtcclxuICAgIFRva2VuS2luZFtUb2tlbktpbmRbXCJXb3JkXCJdID0gMjU2XSA9IFwiV29yZFwiO1xyXG4gICAgVG9rZW5LaW5kW1Rva2VuS2luZFtcIlJhbmdlXCJdID0gNTEyXSA9IFwiUmFuZ2VcIjtcclxuICAgIFRva2VuS2luZFtUb2tlbktpbmRbXCJRdW90ZWRcIl0gPSAxMDI0XSA9IFwiUXVvdGVkXCI7XHJcbiAgICBUb2tlbktpbmRbVG9rZW5LaW5kW1wiT3BlcmF0b3JcIl0gPSAyMDQ4XSA9IFwiT3BlcmF0b3JcIjtcclxuICAgIFRva2VuS2luZFtUb2tlbktpbmRbXCJEZWxpbWl0ZWRcIl0gPSAxMl0gPSBcIkRlbGltaXRlZFwiO1xyXG59KShUb2tlbktpbmQgfHwgKFRva2VuS2luZCA9IHt9KSk7XG5cbmZ1bmN0aW9uIGlzRGVsaW1pdGVkVG9rZW4odmFsKSB7XHJcbiAgICByZXR1cm4gISEoZ2V0S2luZCh2YWwpICYgVG9rZW5LaW5kLkRlbGltaXRlZCk7XHJcbn1cclxuZnVuY3Rpb24gaXNPcGVyYXRvclRva2VuKHZhbCkge1xyXG4gICAgcmV0dXJuIGdldEtpbmQodmFsKSA9PT0gVG9rZW5LaW5kLk9wZXJhdG9yO1xyXG59XHJcbmZ1bmN0aW9uIGlzSFRNTFRva2VuKHZhbCkge1xyXG4gICAgcmV0dXJuIGdldEtpbmQodmFsKSA9PT0gVG9rZW5LaW5kLkhUTUw7XHJcbn1cclxuZnVuY3Rpb24gaXNPdXRwdXRUb2tlbih2YWwpIHtcclxuICAgIHJldHVybiBnZXRLaW5kKHZhbCkgPT09IFRva2VuS2luZC5PdXRwdXQ7XHJcbn1cclxuZnVuY3Rpb24gaXNUYWdUb2tlbih2YWwpIHtcclxuICAgIHJldHVybiBnZXRLaW5kKHZhbCkgPT09IFRva2VuS2luZC5UYWc7XHJcbn1cclxuZnVuY3Rpb24gaXNRdW90ZWRUb2tlbih2YWwpIHtcclxuICAgIHJldHVybiBnZXRLaW5kKHZhbCkgPT09IFRva2VuS2luZC5RdW90ZWQ7XHJcbn1cclxuZnVuY3Rpb24gaXNMaXRlcmFsVG9rZW4odmFsKSB7XHJcbiAgICByZXR1cm4gZ2V0S2luZCh2YWwpID09PSBUb2tlbktpbmQuTGl0ZXJhbDtcclxufVxyXG5mdW5jdGlvbiBpc051bWJlclRva2VuKHZhbCkge1xyXG4gICAgcmV0dXJuIGdldEtpbmQodmFsKSA9PT0gVG9rZW5LaW5kLk51bWJlcjtcclxufVxyXG5mdW5jdGlvbiBpc1Byb3BlcnR5QWNjZXNzVG9rZW4odmFsKSB7XHJcbiAgICByZXR1cm4gZ2V0S2luZCh2YWwpID09PSBUb2tlbktpbmQuUHJvcGVydHlBY2Nlc3M7XHJcbn1cclxuZnVuY3Rpb24gaXNXb3JkVG9rZW4odmFsKSB7XHJcbiAgICByZXR1cm4gZ2V0S2luZCh2YWwpID09PSBUb2tlbktpbmQuV29yZDtcclxufVxyXG5mdW5jdGlvbiBpc1JhbmdlVG9rZW4odmFsKSB7XHJcbiAgICByZXR1cm4gZ2V0S2luZCh2YWwpID09PSBUb2tlbktpbmQuUmFuZ2U7XHJcbn1cclxuZnVuY3Rpb24gZ2V0S2luZCh2YWwpIHtcclxuICAgIHJldHVybiB2YWwgPyB2YWwua2luZCA6IC0xO1xyXG59XG5cbnZhciB0eXBlR3VhcmRzID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICBpc0RlbGltaXRlZFRva2VuOiBpc0RlbGltaXRlZFRva2VuLFxuICAgIGlzT3BlcmF0b3JUb2tlbjogaXNPcGVyYXRvclRva2VuLFxuICAgIGlzSFRNTFRva2VuOiBpc0hUTUxUb2tlbixcbiAgICBpc091dHB1dFRva2VuOiBpc091dHB1dFRva2VuLFxuICAgIGlzVGFnVG9rZW46IGlzVGFnVG9rZW4sXG4gICAgaXNRdW90ZWRUb2tlbjogaXNRdW90ZWRUb2tlbixcbiAgICBpc0xpdGVyYWxUb2tlbjogaXNMaXRlcmFsVG9rZW4sXG4gICAgaXNOdW1iZXJUb2tlbjogaXNOdW1iZXJUb2tlbixcbiAgICBpc1Byb3BlcnR5QWNjZXNzVG9rZW46IGlzUHJvcGVydHlBY2Nlc3NUb2tlbixcbiAgICBpc1dvcmRUb2tlbjogaXNXb3JkVG9rZW4sXG4gICAgaXNSYW5nZVRva2VuOiBpc1JhbmdlVG9rZW5cbn0pO1xuXG52YXIgTnVsbERyb3AgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoTnVsbERyb3AsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBOdWxsRHJvcCgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBOdWxsRHJvcC5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzTmlsKHRvVmFsdWUkMSh2YWx1ZSkpO1xyXG4gICAgfTtcclxuICAgIE51bGxEcm9wLnByb3RvdHlwZS5ndCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgTnVsbERyb3AucHJvdG90eXBlLmdlcSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgTnVsbERyb3AucHJvdG90eXBlLmx0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBOdWxsRHJvcC5wcm90b3R5cGUubGVxID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBOdWxsRHJvcC5wcm90b3R5cGUudmFsdWVPZiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTnVsbERyb3A7XHJcbn0oRHJvcCkpO1xuXG52YXIgRW1wdHlEcm9wID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEVtcHR5RHJvcCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEVtcHR5RHJvcCgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBFbXB0eURyb3AucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEVtcHR5RHJvcClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHZhbHVlID0gdG9WYWx1ZSQxKHZhbHVlKTtcclxuICAgICAgICBpZiAoaXNTdHJpbmcodmFsdWUpIHx8IGlzQXJyYXkodmFsdWUpKVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID09PSAwO1xyXG4gICAgICAgIGlmIChpc09iamVjdCh2YWx1ZSkpXHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBFbXB0eURyb3AucHJvdG90eXBlLmd0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBFbXB0eURyb3AucHJvdG90eXBlLmdlcSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgRW1wdHlEcm9wLnByb3RvdHlwZS5sdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgRW1wdHlEcm9wLnByb3RvdHlwZS5sZXEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIEVtcHR5RHJvcC5wcm90b3R5cGUudmFsdWVPZiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEVtcHR5RHJvcDtcclxufShEcm9wKSk7XG5cbnZhciBCbGFua0Ryb3AgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQmxhbmtEcm9wLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQmxhbmtEcm9wKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIEJsYW5rRHJvcC5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSlcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgaWYgKGlzTmlsKHRvVmFsdWUkMSh2YWx1ZSkpKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBpZiAoaXNTdHJpbmcodmFsdWUpKVxyXG4gICAgICAgICAgICByZXR1cm4gL15cXHMqJC8udGVzdCh2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUuZXF1YWxzLmNhbGwodGhpcywgdmFsdWUpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBCbGFua0Ryb3A7XHJcbn0oRW1wdHlEcm9wKSk7XG5cbnZhciBuaWwgPSBuZXcgTnVsbERyb3AoKTtcclxudmFyIGxpdGVyYWxWYWx1ZXMgPSB7XHJcbiAgICAndHJ1ZSc6IHRydWUsXHJcbiAgICAnZmFsc2UnOiBmYWxzZSxcclxuICAgICduaWwnOiBuaWwsXHJcbiAgICAnbnVsbCc6IG5pbCxcclxuICAgICdlbXB0eSc6IG5ldyBFbXB0eURyb3AoKSxcclxuICAgICdibGFuayc6IG5ldyBCbGFua0Ryb3AoKVxyXG59O1xuXG52YXIgckhleCA9IC9bXFxkYS1mQS1GXS87XHJcbnZhciByT2N0ID0gL1swLTddLztcclxudmFyIGVzY2FwZUNoYXIgPSB7XHJcbiAgICBiOiAnXFxiJyxcclxuICAgIGY6ICdcXGYnLFxyXG4gICAgbjogJ1xcbicsXHJcbiAgICByOiAnXFxyJyxcclxuICAgIHQ6ICdcXHQnLFxyXG4gICAgdjogJ1xceDBCJ1xyXG59O1xyXG5mdW5jdGlvbiBoZXhWYWwoYykge1xyXG4gICAgdmFyIGNvZGUgPSBjLmNoYXJDb2RlQXQoMCk7XHJcbiAgICBpZiAoY29kZSA+PSA5NylcclxuICAgICAgICByZXR1cm4gY29kZSAtIDg3O1xyXG4gICAgaWYgKGNvZGUgPj0gNjUpXHJcbiAgICAgICAgcmV0dXJuIGNvZGUgLSA1NTtcclxuICAgIHJldHVybiBjb2RlIC0gNDg7XHJcbn1cclxuZnVuY3Rpb24gcGFyc2VTdHJpbmdMaXRlcmFsKHN0cikge1xyXG4gICAgdmFyIHJldCA9ICcnO1xyXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBzdHIubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHN0cltpXSAhPT0gJ1xcXFwnKSB7XHJcbiAgICAgICAgICAgIHJldCArPSBzdHJbaV07XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXNjYXBlQ2hhcltzdHJbaSArIDFdXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldCArPSBlc2NhcGVDaGFyW3N0clsrK2ldXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RyW2kgKyAxXSA9PT0gJ3UnKSB7XHJcbiAgICAgICAgICAgIHZhciB2YWwgPSAwO1xyXG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAyO1xyXG4gICAgICAgICAgICB3aGlsZSAoaiA8PSBpICsgNSAmJiBySGV4LnRlc3Qoc3RyW2pdKSkge1xyXG4gICAgICAgICAgICAgICAgdmFsID0gdmFsICogMTYgKyBoZXhWYWwoc3RyW2orK10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGkgPSBqIC0gMTtcclxuICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIXJPY3QudGVzdChzdHJbaSArIDFdKSkge1xyXG4gICAgICAgICAgICByZXQgKz0gc3RyWysraV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xyXG4gICAgICAgICAgICB2YXIgdmFsID0gMDtcclxuICAgICAgICAgICAgd2hpbGUgKGogPD0gaSArIDMgJiYgck9jdC50ZXN0KHN0cltqXSkpIHtcclxuICAgICAgICAgICAgICAgIHZhbCA9IHZhbCAqIDggKyBoZXhWYWwoc3RyW2orK10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGkgPSBqIC0gMTtcclxuICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodmFsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG59XG5cbnZhciBFeHByZXNzaW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRXhwcmVzc2lvbih0b2tlbnMpIHtcclxuICAgICAgICB0aGlzLnBvc3RmaXggPSBfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQodG9Qb3N0Zml4KHRva2VucykpLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBFeHByZXNzaW9uLnByb3RvdHlwZS5ldmFsdWF0ZSA9IGZ1bmN0aW9uIChjdHgsIGxlbmllbnQpIHtcclxuICAgICAgICB2YXIgb3BlcmFuZHMsIF9hLCBfYiwgdG9rZW4sIHIsIGwsIHJlc3VsdCwgX2MsIF9kLCBlXzFfMTtcclxuICAgICAgICB2YXIgZV8xLCBfZTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9mKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2YubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBhc3NlcnQoY3R4LCAndW5hYmxlIHRvIGV2YWx1YXRlOiBjb250ZXh0IG5vdCBkZWZpbmVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BlcmFuZHMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBfZi5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgX2YudHJ5cy5wdXNoKFsxLCA5LCAxMCwgMTFdKTtcclxuICAgICAgICAgICAgICAgICAgICBfYSA9IF9fdmFsdWVzKHRoaXMucG9zdGZpeCksIF9iID0gX2EubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9mLmxhYmVsID0gMjtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISFfYi5kb25lKSByZXR1cm4gWzMgLypicmVhayovLCA4XTtcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IF9iLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNPcGVyYXRvclRva2VuKHRva2VuKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgb3BlcmFuZHMucG9wKCldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHIgPSBfZi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgb3BlcmFuZHMucG9wKCldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgIGwgPSBfZi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZXZhbE9wZXJhdG9yVG9rZW4oY3R4Lm9wdHMub3BlcmF0b3JzLCB0b2tlbiwgbCwgciwgY3R4KTtcclxuICAgICAgICAgICAgICAgICAgICBvcGVyYW5kcy5wdXNoKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgN107XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgX2QgPSAoX2MgPSBvcGVyYW5kcykucHVzaDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBldmFsVG9rZW4odG9rZW4sIGN0eCwgbGVuaWVudCAmJiB0aGlzLnBvc3RmaXgubGVuZ3RoID09PSAxKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgX2QuYXBwbHkoX2MsIFtfZi5zZW50KCldKTtcclxuICAgICAgICAgICAgICAgICAgICBfZi5sYWJlbCA9IDc7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgX2IgPSBfYS5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDg6IHJldHVybiBbMyAvKmJyZWFrKi8sIDExXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgICAgICAgICAgICBlXzFfMSA9IF9mLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBlXzEgPSB7IGVycm9yOiBlXzFfMSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDExXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9iICYmICFfYi5kb25lICYmIChfZSA9IF9hLnJldHVybikpIF9lLmNhbGwoX2EpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3IC8qZW5kZmluYWxseSovXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTE6IHJldHVybiBbMiAvKnJldHVybiovLCBvcGVyYW5kc1swXV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRXhwcmVzc2lvbjtcclxufSgpKTtcclxuZnVuY3Rpb24gZXZhbFRva2VuKHRva2VuLCBjdHgsIGxlbmllbnQpIHtcclxuICAgIGlmIChsZW5pZW50ID09PSB2b2lkIDApIHsgbGVuaWVudCA9IGZhbHNlOyB9XHJcbiAgICBpZiAoaXNQcm9wZXJ0eUFjY2Vzc1Rva2VuKHRva2VuKSlcclxuICAgICAgICByZXR1cm4gZXZhbFByb3BlcnR5QWNjZXNzVG9rZW4odG9rZW4sIGN0eCwgbGVuaWVudCk7XHJcbiAgICBpZiAoaXNSYW5nZVRva2VuKHRva2VuKSlcclxuICAgICAgICByZXR1cm4gZXZhbFJhbmdlVG9rZW4odG9rZW4sIGN0eCk7XHJcbiAgICBpZiAoaXNMaXRlcmFsVG9rZW4odG9rZW4pKVxyXG4gICAgICAgIHJldHVybiBldmFsTGl0ZXJhbFRva2VuKHRva2VuKTtcclxuICAgIGlmIChpc051bWJlclRva2VuKHRva2VuKSlcclxuICAgICAgICByZXR1cm4gZXZhbE51bWJlclRva2VuKHRva2VuKTtcclxuICAgIGlmIChpc1dvcmRUb2tlbih0b2tlbikpXHJcbiAgICAgICAgcmV0dXJuIHRva2VuLmdldFRleHQoKTtcclxuICAgIGlmIChpc1F1b3RlZFRva2VuKHRva2VuKSlcclxuICAgICAgICByZXR1cm4gZXZhbFF1b3RlZFRva2VuKHRva2VuKTtcclxufVxyXG5mdW5jdGlvbiBldmFsUHJvcGVydHlBY2Nlc3NUb2tlbih0b2tlbiwgY3R4LCBsZW5pZW50KSB7XHJcbiAgICB2YXIgcHJvcHMgPSB0b2tlbi5wcm9wcy5tYXAoZnVuY3Rpb24gKHByb3ApIHsgcmV0dXJuIGV2YWxUb2tlbihwcm9wLCBjdHgsIGZhbHNlKTsgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBjdHguZ2V0KF9fc3ByZWFkQXJyYXkoW3Rva2VuLnByb3BlcnR5TmFtZV0sIF9fcmVhZChwcm9wcyksIGZhbHNlKSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGlmIChsZW5pZW50ICYmIGUubmFtZSA9PT0gJ0ludGVybmFsVW5kZWZpbmVkVmFyaWFibGVFcnJvcicpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIHRocm93IChuZXcgVW5kZWZpbmVkVmFyaWFibGVFcnJvcihlLCB0b2tlbikpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGV2YWxOdW1iZXJUb2tlbih0b2tlbikge1xyXG4gICAgdmFyIHN0ciA9IHRva2VuLndob2xlLmNvbnRlbnQgKyAnLicgKyAodG9rZW4uZGVjaW1hbCA/IHRva2VuLmRlY2ltYWwuY29udGVudCA6ICcnKTtcclxuICAgIHJldHVybiBOdW1iZXIoc3RyKTtcclxufVxyXG5mdW5jdGlvbiBldmFsUXVvdGVkVG9rZW4odG9rZW4pIHtcclxuICAgIHJldHVybiBwYXJzZVN0cmluZ0xpdGVyYWwodG9rZW4uZ2V0VGV4dCgpKTtcclxufVxyXG5mdW5jdGlvbiBldmFsT3BlcmF0b3JUb2tlbihvcGVyYXRvcnMsIHRva2VuLCBsaHMsIHJocywgY3R4KSB7XHJcbiAgICB2YXIgaW1wbCA9IG9wZXJhdG9yc1t0b2tlbi5vcGVyYXRvcl07XHJcbiAgICByZXR1cm4gaW1wbChsaHMsIHJocywgY3R4KTtcclxufVxyXG5mdW5jdGlvbiBldmFsTGl0ZXJhbFRva2VuKHRva2VuKSB7XHJcbiAgICByZXR1cm4gbGl0ZXJhbFZhbHVlc1t0b2tlbi5saXRlcmFsXTtcclxufVxyXG5mdW5jdGlvbiBldmFsUmFuZ2VUb2tlbih0b2tlbiwgY3R4KSB7XHJcbiAgICB2YXIgbG93ID0gZXZhbFRva2VuKHRva2VuLmxocywgY3R4KTtcclxuICAgIHZhciBoaWdoID0gZXZhbFRva2VuKHRva2VuLnJocywgY3R4KTtcclxuICAgIHJldHVybiByYW5nZSgrbG93LCAraGlnaCArIDEpO1xyXG59XHJcbmZ1bmN0aW9uIHRvUG9zdGZpeCh0b2tlbnMpIHtcclxuICAgIHZhciBvcHMsIHRva2Vuc18xLCB0b2tlbnNfMV8xLCB0b2tlbiwgZV8yXzE7XHJcbiAgICB2YXIgZV8yLCBfYTtcclxuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIG9wcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgX2IubGFiZWwgPSAxO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzEsIDEwLCAxMSwgMTJdKTtcclxuICAgICAgICAgICAgICAgIHRva2Vuc18xID0gX192YWx1ZXModG9rZW5zKSwgdG9rZW5zXzFfMSA9IHRva2Vuc18xLm5leHQoKTtcclxuICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMjtcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgaWYgKCEhdG9rZW5zXzFfMS5kb25lKSByZXR1cm4gWzMgLypicmVhayovLCA5XTtcclxuICAgICAgICAgICAgICAgIHRva2VuID0gdG9rZW5zXzFfMS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmICghaXNPcGVyYXRvclRva2VuKHRva2VuKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XHJcbiAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDM7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGlmICghKG9wcy5sZW5ndGggJiYgb3BzW29wcy5sZW5ndGggLSAxXS5nZXRQcmVjZWRlbmNlKCkgPiB0b2tlbi5nZXRQcmVjZWRlbmNlKCkpKSByZXR1cm4gWzMgLypicmVhayovLCA1XTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG9wcy5wb3AoKV07XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xyXG4gICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICBvcHMucHVzaCh0b2tlbik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA4XTtcclxuICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gWzQgLyp5aWVsZCovLCB0b2tlbl07XHJcbiAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gODtcclxuICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgdG9rZW5zXzFfMSA9IHRva2Vuc18xLm5leHQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICBjYXNlIDk6IHJldHVybiBbMyAvKmJyZWFrKi8sIDEyXTtcclxuICAgICAgICAgICAgY2FzZSAxMDpcclxuICAgICAgICAgICAgICAgIGVfMl8xID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgZV8yID0geyBlcnJvcjogZV8yXzEgfTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDEyXTtcclxuICAgICAgICAgICAgY2FzZSAxMTpcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2Vuc18xXzEgJiYgIXRva2Vuc18xXzEuZG9uZSAmJiAoX2EgPSB0b2tlbnNfMS5yZXR1cm4pKSBfYS5jYWxsKHRva2Vuc18xKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7IH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBbNyAvKmVuZGZpbmFsbHkqL107XHJcbiAgICAgICAgICAgIGNhc2UgMTI6XHJcbiAgICAgICAgICAgICAgICBpZiAoIW9wcy5sZW5ndGgpIHJldHVybiBbMyAvKmJyZWFrKi8sIDE0XTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG9wcy5wb3AoKV07XHJcbiAgICAgICAgICAgIGNhc2UgMTM6XHJcbiAgICAgICAgICAgICAgICBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxMl07XHJcbiAgICAgICAgICAgIGNhc2UgMTQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxuXG52YXIgVG9rZW4gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUb2tlbihraW5kLCBpbnB1dCwgYmVnaW4sIGVuZCwgZmlsZSkge1xyXG4gICAgICAgIHRoaXMua2luZCA9IGtpbmQ7XHJcbiAgICAgICAgdGhpcy5pbnB1dCA9IGlucHV0O1xyXG4gICAgICAgIHRoaXMuYmVnaW4gPSBiZWdpbjtcclxuICAgICAgICB0aGlzLmVuZCA9IGVuZDtcclxuICAgICAgICB0aGlzLmZpbGUgPSBmaWxlO1xyXG4gICAgfVxyXG4gICAgVG9rZW4ucHJvdG90eXBlLmdldFRleHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQuc2xpY2UodGhpcy5iZWdpbiwgdGhpcy5lbmQpO1xyXG4gICAgfTtcclxuICAgIFRva2VuLnByb3RvdHlwZS5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX2EgPSBfX3JlYWQoWzEsIDFdLCAyKSwgcm93ID0gX2FbMF0sIGNvbCA9IF9hWzFdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5iZWdpbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0W2ldID09PSAnXFxuJykge1xyXG4gICAgICAgICAgICAgICAgcm93Kys7XHJcbiAgICAgICAgICAgICAgICBjb2wgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGNvbCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW3JvdywgY29sXTtcclxuICAgIH07XHJcbiAgICBUb2tlbi5wcm90b3R5cGUuc2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbmQgLSB0aGlzLmJlZ2luO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUb2tlbjtcclxufSgpKTtcblxudmFyIERlbGltaXRlZFRva2VuID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKERlbGltaXRlZFRva2VuLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRGVsaW1pdGVkVG9rZW4oa2luZCwgY29udGVudCwgaW5wdXQsIGJlZ2luLCBlbmQsIHRyaW1MZWZ0LCB0cmltUmlnaHQsIGZpbGUpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBraW5kLCBpbnB1dCwgYmVnaW4sIGVuZCwgZmlsZSkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy50cmltTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgIF90aGlzLnRyaW1SaWdodCA9IGZhbHNlO1xyXG4gICAgICAgIF90aGlzLmNvbnRlbnQgPSBfdGhpcy5nZXRUZXh0KCk7XHJcbiAgICAgICAgdmFyIHRsID0gY29udGVudFswXSA9PT0gJy0nO1xyXG4gICAgICAgIHZhciB0ciA9IGxhc3QkMShjb250ZW50KSA9PT0gJy0nO1xyXG4gICAgICAgIF90aGlzLmNvbnRlbnQgPSBjb250ZW50XHJcbiAgICAgICAgICAgIC5zbGljZSh0bCA/IDEgOiAwLCB0ciA/IC0xIDogY29udGVudC5sZW5ndGgpXHJcbiAgICAgICAgICAgIC50cmltKCk7XHJcbiAgICAgICAgX3RoaXMudHJpbUxlZnQgPSB0bCB8fCB0cmltTGVmdDtcclxuICAgICAgICBfdGhpcy50cmltUmlnaHQgPSB0ciB8fCB0cmltUmlnaHQ7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIERlbGltaXRlZFRva2VuO1xyXG59KFRva2VuKSk7XG5cbmZ1bmN0aW9uIHdoaXRlU3BhY2VDdHJsKHRva2Vucywgb3B0aW9ucykge1xyXG4gICAgdmFyIGluUmF3ID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcclxuICAgICAgICBpZiAoIWlzRGVsaW1pdGVkVG9rZW4odG9rZW4pKVxyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICBpZiAoIWluUmF3ICYmIHRva2VuLnRyaW1MZWZ0KSB7XHJcbiAgICAgICAgICAgIHRyaW1MZWZ0KHRva2Vuc1tpIC0gMV0sIG9wdGlvbnMuZ3JlZWR5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzVGFnVG9rZW4odG9rZW4pKSB7XHJcbiAgICAgICAgICAgIGlmICh0b2tlbi5uYW1lID09PSAncmF3JylcclxuICAgICAgICAgICAgICAgIGluUmF3ID0gdHJ1ZTtcclxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4ubmFtZSA9PT0gJ2VuZHJhdycpXHJcbiAgICAgICAgICAgICAgICBpblJhdyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWluUmF3ICYmIHRva2VuLnRyaW1SaWdodCkge1xyXG4gICAgICAgICAgICB0cmltUmlnaHQodG9rZW5zW2kgKyAxXSwgb3B0aW9ucy5ncmVlZHkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiB0cmltTGVmdCh0b2tlbiwgZ3JlZWR5KSB7XHJcbiAgICBpZiAoIXRva2VuIHx8ICFpc0hUTUxUb2tlbih0b2tlbikpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgdmFyIG1hc2sgPSBncmVlZHkgPyBCTEFOSyA6IElOTElORV9CTEFOSztcclxuICAgIHdoaWxlIChUWVBFU1t0b2tlbi5pbnB1dC5jaGFyQ29kZUF0KHRva2VuLmVuZCAtIDEgLSB0b2tlbi50cmltUmlnaHQpXSAmIG1hc2spXHJcbiAgICAgICAgdG9rZW4udHJpbVJpZ2h0Kys7XHJcbn1cclxuZnVuY3Rpb24gdHJpbVJpZ2h0KHRva2VuLCBncmVlZHkpIHtcclxuICAgIGlmICghdG9rZW4gfHwgIWlzSFRNTFRva2VuKHRva2VuKSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICB2YXIgbWFzayA9IGdyZWVkeSA/IEJMQU5LIDogSU5MSU5FX0JMQU5LO1xyXG4gICAgd2hpbGUgKFRZUEVTW3Rva2VuLmlucHV0LmNoYXJDb2RlQXQodG9rZW4uYmVnaW4gKyB0b2tlbi50cmltTGVmdCldICYgbWFzaylcclxuICAgICAgICB0b2tlbi50cmltTGVmdCsrO1xyXG4gICAgaWYgKHRva2VuLmlucHV0LmNoYXJBdCh0b2tlbi5iZWdpbiArIHRva2VuLnRyaW1MZWZ0KSA9PT0gJ1xcbicpXHJcbiAgICAgICAgdG9rZW4udHJpbUxlZnQrKztcclxufVxuXG52YXIgTnVtYmVyVG9rZW4gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoTnVtYmVyVG9rZW4sIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBOdW1iZXJUb2tlbih3aG9sZSwgZGVjaW1hbCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIFRva2VuS2luZC5OdW1iZXIsIHdob2xlLmlucHV0LCB3aG9sZS5iZWdpbiwgZGVjaW1hbCA/IGRlY2ltYWwuZW5kIDogd2hvbGUuZW5kLCB3aG9sZS5maWxlKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLndob2xlID0gd2hvbGU7XHJcbiAgICAgICAgX3RoaXMuZGVjaW1hbCA9IGRlY2ltYWw7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE51bWJlclRva2VuO1xyXG59KFRva2VuKSk7XG5cbnZhciBJZGVudGlmaWVyVG9rZW4gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoSWRlbnRpZmllclRva2VuLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gSWRlbnRpZmllclRva2VuKGlucHV0LCBiZWdpbiwgZW5kLCBmaWxlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgVG9rZW5LaW5kLldvcmQsIGlucHV0LCBiZWdpbiwgZW5kLCBmaWxlKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmlucHV0ID0gaW5wdXQ7XHJcbiAgICAgICAgX3RoaXMuYmVnaW4gPSBiZWdpbjtcclxuICAgICAgICBfdGhpcy5lbmQgPSBlbmQ7XHJcbiAgICAgICAgX3RoaXMuZmlsZSA9IGZpbGU7XHJcbiAgICAgICAgX3RoaXMuY29udGVudCA9IF90aGlzLmdldFRleHQoKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBJZGVudGlmaWVyVG9rZW4ucHJvdG90eXBlLmlzTnVtYmVyID0gZnVuY3Rpb24gKGFsbG93U2lnbikge1xyXG4gICAgICAgIGlmIChhbGxvd1NpZ24gPT09IHZvaWQgMCkgeyBhbGxvd1NpZ24gPSBmYWxzZTsgfVxyXG4gICAgICAgIHZhciBiZWdpbiA9IGFsbG93U2lnbiAmJiBUWVBFU1t0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5iZWdpbildICYgU0lHTlxyXG4gICAgICAgICAgICA/IHRoaXMuYmVnaW4gKyAxXHJcbiAgICAgICAgICAgIDogdGhpcy5iZWdpbjtcclxuICAgICAgICBmb3IgKHZhciBpID0gYmVnaW47IGkgPCB0aGlzLmVuZDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICghKFRZUEVTW3RoaXMuaW5wdXQuY2hhckNvZGVBdChpKV0gJiBOVU1CRVIpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSWRlbnRpZmllclRva2VuO1xyXG59KFRva2VuKSk7XG5cbnZhciBMaXRlcmFsVG9rZW4gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoTGl0ZXJhbFRva2VuLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gTGl0ZXJhbFRva2VuKGlucHV0LCBiZWdpbiwgZW5kLCBmaWxlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgVG9rZW5LaW5kLkxpdGVyYWwsIGlucHV0LCBiZWdpbiwgZW5kLCBmaWxlKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmlucHV0ID0gaW5wdXQ7XHJcbiAgICAgICAgX3RoaXMuYmVnaW4gPSBiZWdpbjtcclxuICAgICAgICBfdGhpcy5lbmQgPSBlbmQ7XHJcbiAgICAgICAgX3RoaXMuZmlsZSA9IGZpbGU7XHJcbiAgICAgICAgX3RoaXMubGl0ZXJhbCA9IF90aGlzLmdldFRleHQoKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTGl0ZXJhbFRva2VuO1xyXG59KFRva2VuKSk7XG5cbnZhciBwcmVjZWRlbmNlID0ge1xyXG4gICAgJz09JzogMSxcclxuICAgICchPSc6IDEsXHJcbiAgICAnPic6IDEsXHJcbiAgICAnPCc6IDEsXHJcbiAgICAnPj0nOiAxLFxyXG4gICAgJzw9JzogMSxcclxuICAgICdjb250YWlucyc6IDEsXHJcbiAgICAnYW5kJzogMCxcclxuICAgICdvcic6IDBcclxufTtcclxudmFyIE9wZXJhdG9yVG9rZW4gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoT3BlcmF0b3JUb2tlbiwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIE9wZXJhdG9yVG9rZW4oaW5wdXQsIGJlZ2luLCBlbmQsIGZpbGUpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBUb2tlbktpbmQuT3BlcmF0b3IsIGlucHV0LCBiZWdpbiwgZW5kLCBmaWxlKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmlucHV0ID0gaW5wdXQ7XHJcbiAgICAgICAgX3RoaXMuYmVnaW4gPSBiZWdpbjtcclxuICAgICAgICBfdGhpcy5lbmQgPSBlbmQ7XHJcbiAgICAgICAgX3RoaXMuZmlsZSA9IGZpbGU7XHJcbiAgICAgICAgX3RoaXMub3BlcmF0b3IgPSBfdGhpcy5nZXRUZXh0KCk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgT3BlcmF0b3JUb2tlbi5wcm90b3R5cGUuZ2V0UHJlY2VkZW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIga2V5ID0gdGhpcy5nZXRUZXh0KCk7XHJcbiAgICAgICAgcmV0dXJuIGtleSBpbiBwcmVjZWRlbmNlID8gcHJlY2VkZW5jZVtrZXldIDogMTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gT3BlcmF0b3JUb2tlbjtcclxufShUb2tlbikpO1xuXG52YXIgUHJvcGVydHlBY2Nlc3NUb2tlbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhQcm9wZXJ0eUFjY2Vzc1Rva2VuLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUHJvcGVydHlBY2Nlc3NUb2tlbih2YXJpYWJsZSwgcHJvcHMsIGVuZCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIFRva2VuS2luZC5Qcm9wZXJ0eUFjY2VzcywgdmFyaWFibGUuaW5wdXQsIHZhcmlhYmxlLmJlZ2luLCBlbmQsIHZhcmlhYmxlLmZpbGUpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcclxuICAgICAgICBfdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgICAgIF90aGlzLnByb3BlcnR5TmFtZSA9IF90aGlzLnZhcmlhYmxlIGluc3RhbmNlb2YgSWRlbnRpZmllclRva2VuXHJcbiAgICAgICAgICAgID8gX3RoaXMudmFyaWFibGUuZ2V0VGV4dCgpXHJcbiAgICAgICAgICAgIDogcGFyc2VTdHJpbmdMaXRlcmFsKF90aGlzLnZhcmlhYmxlLmdldFRleHQoKSk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb3BlcnR5QWNjZXNzVG9rZW47XHJcbn0oVG9rZW4pKTtcblxudmFyIEZpbHRlclRva2VuID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEZpbHRlclRva2VuLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRmlsdGVyVG9rZW4obmFtZSwgYXJncywgaW5wdXQsIGJlZ2luLCBlbmQsIGZpbGUpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBUb2tlbktpbmQuRmlsdGVyLCBpbnB1dCwgYmVnaW4sIGVuZCwgZmlsZSkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICBfdGhpcy5hcmdzID0gYXJncztcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRmlsdGVyVG9rZW47XHJcbn0oVG9rZW4pKTtcblxudmFyIEhhc2hUb2tlbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhIYXNoVG9rZW4sIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBIYXNoVG9rZW4oaW5wdXQsIGJlZ2luLCBlbmQsIG5hbWUsIHZhbHVlLCBmaWxlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgVG9rZW5LaW5kLkhhc2gsIGlucHV0LCBiZWdpbiwgZW5kLCBmaWxlKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmlucHV0ID0gaW5wdXQ7XHJcbiAgICAgICAgX3RoaXMuYmVnaW4gPSBiZWdpbjtcclxuICAgICAgICBfdGhpcy5lbmQgPSBlbmQ7XHJcbiAgICAgICAgX3RoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgX3RoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICBfdGhpcy5maWxlID0gZmlsZTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gSGFzaFRva2VuO1xyXG59KFRva2VuKSk7XG5cbnZhciBRdW90ZWRUb2tlbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhRdW90ZWRUb2tlbiwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFF1b3RlZFRva2VuKGlucHV0LCBiZWdpbiwgZW5kLCBmaWxlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgVG9rZW5LaW5kLlF1b3RlZCwgaW5wdXQsIGJlZ2luLCBlbmQsIGZpbGUpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuaW5wdXQgPSBpbnB1dDtcclxuICAgICAgICBfdGhpcy5iZWdpbiA9IGJlZ2luO1xyXG4gICAgICAgIF90aGlzLmVuZCA9IGVuZDtcclxuICAgICAgICBfdGhpcy5maWxlID0gZmlsZTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUXVvdGVkVG9rZW47XHJcbn0oVG9rZW4pKTtcblxudmFyIEhUTUxUb2tlbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhIVE1MVG9rZW4sIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBIVE1MVG9rZW4oaW5wdXQsIGJlZ2luLCBlbmQsIGZpbGUpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBUb2tlbktpbmQuSFRNTCwgaW5wdXQsIGJlZ2luLCBlbmQsIGZpbGUpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuaW5wdXQgPSBpbnB1dDtcclxuICAgICAgICBfdGhpcy5iZWdpbiA9IGJlZ2luO1xyXG4gICAgICAgIF90aGlzLmVuZCA9IGVuZDtcclxuICAgICAgICBfdGhpcy5maWxlID0gZmlsZTtcclxuICAgICAgICBfdGhpcy50cmltTGVmdCA9IDA7XHJcbiAgICAgICAgX3RoaXMudHJpbVJpZ2h0ID0gMDtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBIVE1MVG9rZW4ucHJvdG90eXBlLmdldENvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQuc2xpY2UodGhpcy5iZWdpbiArIHRoaXMudHJpbUxlZnQsIHRoaXMuZW5kIC0gdGhpcy50cmltUmlnaHQpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBIVE1MVG9rZW47XHJcbn0oVG9rZW4pKTtcblxudmFyIFJhbmdlVG9rZW4gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUmFuZ2VUb2tlbiwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFJhbmdlVG9rZW4oaW5wdXQsIGJlZ2luLCBlbmQsIGxocywgcmhzLCBmaWxlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgVG9rZW5LaW5kLlJhbmdlLCBpbnB1dCwgYmVnaW4sIGVuZCwgZmlsZSkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5pbnB1dCA9IGlucHV0O1xyXG4gICAgICAgIF90aGlzLmJlZ2luID0gYmVnaW47XHJcbiAgICAgICAgX3RoaXMuZW5kID0gZW5kO1xyXG4gICAgICAgIF90aGlzLmxocyA9IGxocztcclxuICAgICAgICBfdGhpcy5yaHMgPSByaHM7XHJcbiAgICAgICAgX3RoaXMuZmlsZSA9IGZpbGU7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFJhbmdlVG9rZW47XHJcbn0oVG9rZW4pKTtcblxudmFyIE91dHB1dFRva2VuID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKE91dHB1dFRva2VuLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gT3V0cHV0VG9rZW4oaW5wdXQsIGJlZ2luLCBlbmQsIG9wdGlvbnMsIGZpbGUpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciB0cmltT3V0cHV0TGVmdCA9IG9wdGlvbnMudHJpbU91dHB1dExlZnQsIHRyaW1PdXRwdXRSaWdodCA9IG9wdGlvbnMudHJpbU91dHB1dFJpZ2h0LCBvdXRwdXREZWxpbWl0ZXJMZWZ0ID0gb3B0aW9ucy5vdXRwdXREZWxpbWl0ZXJMZWZ0LCBvdXRwdXREZWxpbWl0ZXJSaWdodCA9IG9wdGlvbnMub3V0cHV0RGVsaW1pdGVyUmlnaHQ7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gaW5wdXQuc2xpY2UoYmVnaW4gKyBvdXRwdXREZWxpbWl0ZXJMZWZ0Lmxlbmd0aCwgZW5kIC0gb3V0cHV0RGVsaW1pdGVyUmlnaHQubGVuZ3RoKTtcclxuICAgICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIFRva2VuS2luZC5PdXRwdXQsIHZhbHVlLCBpbnB1dCwgYmVnaW4sIGVuZCwgdHJpbU91dHB1dExlZnQsIHRyaW1PdXRwdXRSaWdodCwgZmlsZSkgfHwgdGhpcztcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gT3V0cHV0VG9rZW47XHJcbn0oRGVsaW1pdGVkVG9rZW4pKTtcblxuZnVuY3Rpb24gbWF0Y2hPcGVyYXRvcihzdHIsIGJlZ2luLCB0cmllLCBlbmQpIHtcclxuICAgIGlmIChlbmQgPT09IHZvaWQgMCkgeyBlbmQgPSBzdHIubGVuZ3RoOyB9XHJcbiAgICB2YXIgbm9kZSA9IHRyaWU7XHJcbiAgICB2YXIgaSA9IGJlZ2luO1xyXG4gICAgdmFyIGluZm87XHJcbiAgICB3aGlsZSAobm9kZVtzdHJbaV1dICYmIGkgPCBlbmQpIHtcclxuICAgICAgICBub2RlID0gbm9kZVtzdHJbaSsrXV07XHJcbiAgICAgICAgaWYgKG5vZGVbJ2VuZCddKVxyXG4gICAgICAgICAgICBpbmZvID0gbm9kZTtcclxuICAgIH1cclxuICAgIGlmICghaW5mbylcclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICBpZiAoaW5mb1snbmVlZEJvdW5kYXJ5J10gJiYgKFRZUEVTW3N0ci5jaGFyQ29kZUF0KGkpXSAmIElERU5USUZJRVIpKVxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIHJldHVybiBpO1xyXG59XG5cbnZhciBMaXF1aWRUYWdUb2tlbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhMaXF1aWRUYWdUb2tlbiwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIExpcXVpZFRhZ1Rva2VuKGlucHV0LCBiZWdpbiwgZW5kLCBvcHRpb25zLCBmaWxlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgdmFsdWUgPSBpbnB1dC5zbGljZShiZWdpbiwgZW5kKTtcclxuICAgICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIFRva2VuS2luZC5UYWcsIHZhbHVlLCBpbnB1dCwgYmVnaW4sIGVuZCwgZmFsc2UsIGZhbHNlLCBmaWxlKSB8fCB0aGlzO1xyXG4gICAgICAgIGlmICghL1xcUy8udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgLy8gQSBsaW5lIHRoYXQgY29udGFpbnMgb25seSB3aGl0ZXNwYWNlLlxyXG4gICAgICAgICAgICBfdGhpcy5uYW1lID0gJyc7XHJcbiAgICAgICAgICAgIF90aGlzLmFyZ3MgPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciB0b2tlbml6ZXIgPSBuZXcgVG9rZW5pemVyKF90aGlzLmNvbnRlbnQsIG9wdGlvbnMub3BlcmF0b3JzVHJpZSk7XHJcbiAgICAgICAgICAgIF90aGlzLm5hbWUgPSB0b2tlbml6ZXIucmVhZElkZW50aWZpZXIoKS5nZXRUZXh0KCk7XHJcbiAgICAgICAgICAgIGlmICghX3RoaXMubmFtZSlcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUb2tlbml6YXRpb25FcnJvcihcImlsbGVnYWwgbGlxdWlkIHRhZyBzeW50YXhcIiwgX3RoaXMpO1xyXG4gICAgICAgICAgICB0b2tlbml6ZXIuc2tpcEJsYW5rKCk7XHJcbiAgICAgICAgICAgIF90aGlzLmFyZ3MgPSB0b2tlbml6ZXIucmVtYWluaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBMaXF1aWRUYWdUb2tlbjtcclxufShEZWxpbWl0ZWRUb2tlbikpO1xuXG52YXIgVG9rZW5pemVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVG9rZW5pemVyKGlucHV0LCB0cmllLCBmaWxlKSB7XHJcbiAgICAgICAgaWYgKGZpbGUgPT09IHZvaWQgMCkgeyBmaWxlID0gJyc7IH1cclxuICAgICAgICB0aGlzLmlucHV0ID0gaW5wdXQ7XHJcbiAgICAgICAgdGhpcy50cmllID0gdHJpZTtcclxuICAgICAgICB0aGlzLmZpbGUgPSBmaWxlO1xyXG4gICAgICAgIHRoaXMucCA9IDA7XHJcbiAgICAgICAgdGhpcy5yYXdCZWdpbkF0ID0gLTE7XHJcbiAgICAgICAgdGhpcy5OID0gaW5wdXQubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5yZWFkRXhwcmVzc2lvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEV4cHJlc3Npb24odGhpcy5yZWFkRXhwcmVzc2lvblRva2VucygpKTtcclxuICAgIH07XHJcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLnJlYWRFeHByZXNzaW9uVG9rZW5zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvcGVyYW5kLCBvcGVyYXRvciwgb3BlcmFuZF8xO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIG9wZXJhbmQgPSB0aGlzLnJlYWRWYWx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghb3BlcmFuZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG9wZXJhbmRdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodGhpcy5wIDwgdGhpcy5OKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XHJcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3IgPSB0aGlzLnJlYWRPcGVyYXRvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghb3BlcmF0b3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICBvcGVyYW5kXzEgPSB0aGlzLnJlYWRWYWx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghb3BlcmFuZF8xKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgb3BlcmF0b3JdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBvcGVyYW5kXzFdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5yZWFkT3BlcmF0b3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5za2lwQmxhbmsoKTtcclxuICAgICAgICB2YXIgZW5kID0gbWF0Y2hPcGVyYXRvcih0aGlzLmlucHV0LCB0aGlzLnAsIHRoaXMudHJpZSk7XHJcbiAgICAgICAgaWYgKGVuZCA9PT0gLTEpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICByZXR1cm4gbmV3IE9wZXJhdG9yVG9rZW4odGhpcy5pbnB1dCwgdGhpcy5wLCAodGhpcy5wID0gZW5kKSwgdGhpcy5maWxlKTtcclxuICAgIH07XHJcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLnJlYWRGaWx0ZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBmaWx0ZXJzID0gW107XHJcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgdmFyIGZpbHRlciA9IHRoaXMucmVhZEZpbHRlcigpO1xyXG4gICAgICAgICAgICBpZiAoIWZpbHRlcilcclxuICAgICAgICAgICAgICAgIHJldHVybiBmaWx0ZXJzO1xyXG4gICAgICAgICAgICBmaWx0ZXJzLnB1c2goZmlsdGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5yZWFkRmlsdGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5za2lwQmxhbmsoKTtcclxuICAgICAgICBpZiAodGhpcy5lbmQoKSlcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgYXNzZXJ0KHRoaXMucGVlaygpID09PSAnfCcsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwidW5leHBlY3RlZCB0b2tlbiBhdCBcIi5jb25jYXQoX3RoaXMuc25hcHNob3QoKSk7IH0pO1xyXG4gICAgICAgIHRoaXMucCsrO1xyXG4gICAgICAgIHZhciBiZWdpbiA9IHRoaXMucDtcclxuICAgICAgICB2YXIgbmFtZSA9IHRoaXMucmVhZElkZW50aWZpZXIoKTtcclxuICAgICAgICBpZiAoIW5hbWUuc2l6ZSgpKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2tpcEJsYW5rKCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGVlaygpID09PSAnOicpIHtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgKyt0aGlzLnA7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXJnID0gdGhpcy5yZWFkRmlsdGVyQXJnKCk7XHJcbiAgICAgICAgICAgICAgICBhcmcgJiYgYXJncy5wdXNoKGFyZyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNraXBCbGFuaygpO1xyXG4gICAgICAgICAgICAgICAgYXNzZXJ0KHRoaXMuZW5kKCkgfHwgdGhpcy5wZWVrKCkgPT09ICcsJyB8fCB0aGlzLnBlZWsoKSA9PT0gJ3wnLCBmdW5jdGlvbiAoKSB7IHJldHVybiBcInVuZXhwZWN0ZWQgY2hhcmFjdGVyIFwiLmNvbmNhdChfdGhpcy5zbmFwc2hvdCgpKTsgfSk7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMucGVlaygpID09PSAnLCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEZpbHRlclRva2VuKG5hbWUuZ2V0VGV4dCgpLCBhcmdzLCB0aGlzLmlucHV0LCBiZWdpbiwgdGhpcy5wLCB0aGlzLmZpbGUpO1xyXG4gICAgfTtcclxuICAgIFRva2VuaXplci5wcm90b3R5cGUucmVhZEZpbHRlckFyZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIga2V5ID0gdGhpcy5yZWFkVmFsdWUoKTtcclxuICAgICAgICBpZiAoIWtleSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc2tpcEJsYW5rKCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGVlaygpICE9PSAnOicpXHJcbiAgICAgICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgKyt0aGlzLnA7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5yZWFkVmFsdWUoKTtcclxuICAgICAgICByZXR1cm4gW2tleS5nZXRUZXh0KCksIHZhbHVlXTtcclxuICAgIH07XHJcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLnJlYWRUb3BMZXZlbFRva2VucyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7IH1cclxuICAgICAgICB2YXIgdG9rZW5zID0gW107XHJcbiAgICAgICAgd2hpbGUgKHRoaXMucCA8IHRoaXMuTikge1xyXG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLnJlYWRUb3BMZXZlbFRva2VuKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaXRlU3BhY2VDdHJsKHRva2Vucywgb3B0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIHRva2VucztcclxuICAgIH07XHJcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLnJlYWRUb3BMZXZlbFRva2VuID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgdGFnRGVsaW1pdGVyTGVmdCA9IG9wdGlvbnMudGFnRGVsaW1pdGVyTGVmdCwgb3V0cHV0RGVsaW1pdGVyTGVmdCA9IG9wdGlvbnMub3V0cHV0RGVsaW1pdGVyTGVmdDtcclxuICAgICAgICBpZiAodGhpcy5yYXdCZWdpbkF0ID4gLTEpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlYWRFbmRyYXdPclJhd0NvbnRlbnQob3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2godGFnRGVsaW1pdGVyTGVmdCkpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlYWRUYWdUb2tlbihvcHRpb25zKTtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChvdXRwdXREZWxpbWl0ZXJMZWZ0KSlcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVhZE91dHB1dFRva2VuKG9wdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRIVE1MVG9rZW4oW3RhZ0RlbGltaXRlckxlZnQsIG91dHB1dERlbGltaXRlckxlZnRdKTtcclxuICAgIH07XHJcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLnJlYWRIVE1MVG9rZW4gPSBmdW5jdGlvbiAoc3RvcFN0cmluZ3MpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBiZWdpbiA9IHRoaXMucDtcclxuICAgICAgICB3aGlsZSAodGhpcy5wIDwgdGhpcy5OKSB7XHJcbiAgICAgICAgICAgIGlmIChzdG9wU3RyaW5ncy5zb21lKGZ1bmN0aW9uIChzdHIpIHsgcmV0dXJuIF90aGlzLm1hdGNoKHN0cik7IH0pKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICsrdGhpcy5wO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEhUTUxUb2tlbih0aGlzLmlucHV0LCBiZWdpbiwgdGhpcy5wLCB0aGlzLmZpbGUpO1xyXG4gICAgfTtcclxuICAgIFRva2VuaXplci5wcm90b3R5cGUucmVhZFRhZ1Rva2VuID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSBkZWZhdWx0T3B0aW9uczsgfVxyXG4gICAgICAgIHZhciBfYSA9IHRoaXMsIGZpbGUgPSBfYS5maWxlLCBpbnB1dCA9IF9hLmlucHV0O1xyXG4gICAgICAgIHZhciBiZWdpbiA9IHRoaXMucDtcclxuICAgICAgICBpZiAodGhpcy5yZWFkVG9EZWxpbWl0ZXIob3B0aW9ucy50YWdEZWxpbWl0ZXJSaWdodCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRocm93IHRoaXMubWtFcnJvcihcInRhZyBcIi5jb25jYXQodGhpcy5zbmFwc2hvdChiZWdpbiksIFwiIG5vdCBjbG9zZWRcIiksIGJlZ2luKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHRva2VuID0gbmV3IFRhZ1Rva2VuKGlucHV0LCBiZWdpbiwgdGhpcy5wLCBvcHRpb25zLCBmaWxlKTtcclxuICAgICAgICBpZiAodG9rZW4ubmFtZSA9PT0gJ3JhdycpXHJcbiAgICAgICAgICAgIHRoaXMucmF3QmVnaW5BdCA9IGJlZ2luO1xyXG4gICAgICAgIHJldHVybiB0b2tlbjtcclxuICAgIH07XHJcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLnJlYWRUb0RlbGltaXRlciA9IGZ1bmN0aW9uIChkZWxpbWl0ZXIpIHtcclxuICAgICAgICB3aGlsZSAodGhpcy5wIDwgdGhpcy5OKSB7XHJcbiAgICAgICAgICAgIGlmICgodGhpcy5wZWVrVHlwZSgpICYgUVVPVEUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRRdW90ZWQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICsrdGhpcy5wO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ybWF0Y2goZGVsaW1pdGVyKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH07XHJcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLnJlYWRPdXRwdXRUb2tlbiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7IH1cclxuICAgICAgICB2YXIgX2EgPSB0aGlzLCBmaWxlID0gX2EuZmlsZSwgaW5wdXQgPSBfYS5pbnB1dDtcclxuICAgICAgICB2YXIgb3V0cHV0RGVsaW1pdGVyUmlnaHQgPSBvcHRpb25zLm91dHB1dERlbGltaXRlclJpZ2h0O1xyXG4gICAgICAgIHZhciBiZWdpbiA9IHRoaXMucDtcclxuICAgICAgICBpZiAodGhpcy5yZWFkVG9EZWxpbWl0ZXIob3V0cHV0RGVsaW1pdGVyUmlnaHQpID09PSAtMSkge1xyXG4gICAgICAgICAgICB0aHJvdyB0aGlzLm1rRXJyb3IoXCJvdXRwdXQgXCIuY29uY2F0KHRoaXMuc25hcHNob3QoYmVnaW4pLCBcIiBub3QgY2xvc2VkXCIpLCBiZWdpbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgT3V0cHV0VG9rZW4oaW5wdXQsIGJlZ2luLCB0aGlzLnAsIG9wdGlvbnMsIGZpbGUpO1xyXG4gICAgfTtcclxuICAgIFRva2VuaXplci5wcm90b3R5cGUucmVhZEVuZHJhd09yUmF3Q29udGVudCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIHRhZ0RlbGltaXRlckxlZnQgPSBvcHRpb25zLnRhZ0RlbGltaXRlckxlZnQsIHRhZ0RlbGltaXRlclJpZ2h0ID0gb3B0aW9ucy50YWdEZWxpbWl0ZXJSaWdodDtcclxuICAgICAgICB2YXIgYmVnaW4gPSB0aGlzLnA7XHJcbiAgICAgICAgdmFyIGxlZnRQb3MgPSB0aGlzLnJlYWRUbyh0YWdEZWxpbWl0ZXJMZWZ0KSAtIHRhZ0RlbGltaXRlckxlZnQubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLnAgPCB0aGlzLk4pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVhZElkZW50aWZpZXIoKS5nZXRUZXh0KCkgIT09ICdlbmRyYXcnKSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0UG9zID0gdGhpcy5yZWFkVG8odGFnRGVsaW1pdGVyTGVmdCkgLSB0YWdEZWxpbWl0ZXJMZWZ0Lmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLnAgPD0gdGhpcy5OKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ybWF0Y2godGFnRGVsaW1pdGVyUmlnaHQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVuZCA9IHRoaXMucDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmVnaW4gPT09IGxlZnRQb3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yYXdCZWdpbkF0ID0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVGFnVG9rZW4odGhpcy5pbnB1dCwgYmVnaW4sIGVuZCwgb3B0aW9ucywgdGhpcy5maWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucCA9IGxlZnRQb3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSFRNTFRva2VuKHRoaXMuaW5wdXQsIGJlZ2luLCBsZWZ0UG9zLCB0aGlzLmZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJtYXRjaCh0YWdEZWxpbWl0ZXJMZWZ0KSlcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIHRoaXMucCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IHRoaXMubWtFcnJvcihcInJhdyBcIi5jb25jYXQodGhpcy5zbmFwc2hvdCh0aGlzLnJhd0JlZ2luQXQpLCBcIiBub3QgY2xvc2VkXCIpLCBiZWdpbik7XHJcbiAgICB9O1xyXG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5yZWFkTGlxdWlkVGFnVG9rZW5zID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSBkZWZhdWx0T3B0aW9uczsgfVxyXG4gICAgICAgIHZhciB0b2tlbnMgPSBbXTtcclxuICAgICAgICB3aGlsZSAodGhpcy5wIDwgdGhpcy5OKSB7XHJcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRoaXMucmVhZExpcXVpZFRhZ1Rva2VuKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBpZiAodG9rZW4ubmFtZSlcclxuICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRva2VucztcclxuICAgIH07XHJcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLnJlYWRMaXF1aWRUYWdUb2tlbiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIF9hID0gdGhpcywgZmlsZSA9IF9hLmZpbGUsIGlucHV0ID0gX2EuaW5wdXQ7XHJcbiAgICAgICAgdmFyIGJlZ2luID0gdGhpcy5wO1xyXG4gICAgICAgIHZhciBlbmQgPSB0aGlzLk47XHJcbiAgICAgICAgaWYgKHRoaXMucmVhZFRvRGVsaW1pdGVyKCdcXG4nKSAhPT0gLTEpXHJcbiAgICAgICAgICAgIGVuZCA9IHRoaXMucDtcclxuICAgICAgICB2YXIgdG9rZW4gPSBuZXcgTGlxdWlkVGFnVG9rZW4oaW5wdXQsIGJlZ2luLCBlbmQsIG9wdGlvbnMsIGZpbGUpO1xyXG4gICAgICAgIHJldHVybiB0b2tlbjtcclxuICAgIH07XHJcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLm1rRXJyb3IgPSBmdW5jdGlvbiAobXNnLCBiZWdpbikge1xyXG4gICAgICAgIHJldHVybiBuZXcgVG9rZW5pemF0aW9uRXJyb3IobXNnLCBuZXcgSWRlbnRpZmllclRva2VuKHRoaXMuaW5wdXQsIGJlZ2luLCB0aGlzLk4sIHRoaXMuZmlsZSkpO1xyXG4gICAgfTtcclxuICAgIFRva2VuaXplci5wcm90b3R5cGUuc25hcHNob3QgPSBmdW5jdGlvbiAoYmVnaW4pIHtcclxuICAgICAgICBpZiAoYmVnaW4gPT09IHZvaWQgMCkgeyBiZWdpbiA9IHRoaXMucDsgfVxyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShlbGxpcHNpcyh0aGlzLmlucHV0LnNsaWNlKGJlZ2luKSwgMTYpKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIFRva2VuaXplci5wcm90b3R5cGUucmVhZFdvcmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdUb2tlbml6ZXIjcmVhZFdvcmQoKSB3aWxsIGJlIHJlbW92ZWQsIHVzZSAjcmVhZElkZW50aWZpZXIgaW5zdGVhZCcpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRJZGVudGlmaWVyKCk7XHJcbiAgICB9O1xyXG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5yZWFkSWRlbnRpZmllciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNraXBCbGFuaygpO1xyXG4gICAgICAgIHZhciBiZWdpbiA9IHRoaXMucDtcclxuICAgICAgICB3aGlsZSAodGhpcy5wZWVrVHlwZSgpICYgSURFTlRJRklFUilcclxuICAgICAgICAgICAgKyt0aGlzLnA7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBJZGVudGlmaWVyVG9rZW4odGhpcy5pbnB1dCwgYmVnaW4sIHRoaXMucCwgdGhpcy5maWxlKTtcclxuICAgIH07XHJcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLnJlYWRIYXNoZXMgPSBmdW5jdGlvbiAoamVreWxsU3R5bGUpIHtcclxuICAgICAgICB2YXIgaGFzaGVzID0gW107XHJcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgdmFyIGhhc2ggPSB0aGlzLnJlYWRIYXNoKGpla3lsbFN0eWxlKTtcclxuICAgICAgICAgICAgaWYgKCFoYXNoKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhc2hlcztcclxuICAgICAgICAgICAgaGFzaGVzLnB1c2goaGFzaCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFRva2VuaXplci5wcm90b3R5cGUucmVhZEhhc2ggPSBmdW5jdGlvbiAoamVreWxsU3R5bGUpIHtcclxuICAgICAgICB0aGlzLnNraXBCbGFuaygpO1xyXG4gICAgICAgIGlmICh0aGlzLnBlZWsoKSA9PT0gJywnKVxyXG4gICAgICAgICAgICArK3RoaXMucDtcclxuICAgICAgICB2YXIgYmVnaW4gPSB0aGlzLnA7XHJcbiAgICAgICAgdmFyIG5hbWUgPSB0aGlzLnJlYWRJZGVudGlmaWVyKCk7XHJcbiAgICAgICAgaWYgKCFuYW1lLnNpemUoKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZhciB2YWx1ZTtcclxuICAgICAgICB0aGlzLnNraXBCbGFuaygpO1xyXG4gICAgICAgIHZhciBzZXAgPSBqZWt5bGxTdHlsZSA/ICc9JyA6ICc6JztcclxuICAgICAgICBpZiAodGhpcy5wZWVrKCkgPT09IHNlcCkge1xyXG4gICAgICAgICAgICArK3RoaXMucDtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnJlYWRWYWx1ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEhhc2hUb2tlbih0aGlzLmlucHV0LCBiZWdpbiwgdGhpcy5wLCBuYW1lLCB2YWx1ZSwgdGhpcy5maWxlKTtcclxuICAgIH07XHJcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLnJlbWFpbmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dC5zbGljZSh0aGlzLnApO1xyXG4gICAgfTtcclxuICAgIFRva2VuaXplci5wcm90b3R5cGUuYWR2YW5jZSA9IGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgaWYgKGkgPT09IHZvaWQgMCkgeyBpID0gMTsgfVxyXG4gICAgICAgIHRoaXMucCArPSBpO1xyXG4gICAgfTtcclxuICAgIFRva2VuaXplci5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnAgPj0gdGhpcy5OO1xyXG4gICAgfTtcclxuICAgIFRva2VuaXplci5wcm90b3R5cGUucmVhZFRvID0gZnVuY3Rpb24gKGVuZCkge1xyXG4gICAgICAgIHdoaWxlICh0aGlzLnAgPCB0aGlzLk4pIHtcclxuICAgICAgICAgICAgKyt0aGlzLnA7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJtYXRjaChlbmQpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfTtcclxuICAgIFRva2VuaXplci5wcm90b3R5cGUucmVhZFZhbHVlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMucmVhZFF1b3RlZCgpIHx8IHRoaXMucmVhZFJhbmdlKCk7XHJcbiAgICAgICAgaWYgKHZhbHVlKVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgaWYgKHRoaXMucGVlaygpID09PSAnWycpIHtcclxuICAgICAgICAgICAgdGhpcy5wKys7XHJcbiAgICAgICAgICAgIHZhciBwcm9wID0gdGhpcy5yZWFkUXVvdGVkKCk7XHJcbiAgICAgICAgICAgIGlmICghcHJvcClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGVlaygpICE9PSAnXScpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMucCsrO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BlcnR5QWNjZXNzVG9rZW4ocHJvcCwgW10sIHRoaXMucCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB2YXJpYWJsZSA9IHRoaXMucmVhZElkZW50aWZpZXIoKTtcclxuICAgICAgICBpZiAoIXZhcmlhYmxlLnNpemUoKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZhciBpc051bWJlciA9IHZhcmlhYmxlLmlzTnVtYmVyKHRydWUpO1xyXG4gICAgICAgIHZhciBwcm9wcyA9IFtdO1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoKSA9PT0gJ1snKSB7XHJcbiAgICAgICAgICAgICAgICBpc051bWJlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wKys7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvcCA9IHRoaXMucmVhZFZhbHVlKCkgfHwgbmV3IElkZW50aWZpZXJUb2tlbih0aGlzLmlucHV0LCB0aGlzLnAsIHRoaXMucCwgdGhpcy5maWxlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZFRvKCddJyk7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5wdXNoKHByb3ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucGVlaygpID09PSAnLicgJiYgdGhpcy5wZWVrKDEpICE9PSAnLicpIHsgLy8gc2tpcCByYW5nZSBzeW50YXhcclxuICAgICAgICAgICAgICAgIHRoaXMucCsrO1xyXG4gICAgICAgICAgICAgICAgdmFyIHByb3AgPSB0aGlzLnJlYWRJZGVudGlmaWVyKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXByb3Auc2l6ZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFwcm9wLmlzTnVtYmVyKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgaXNOdW1iZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHByb3BzLnB1c2gocHJvcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcHJvcHMubGVuZ3RoICYmIGxpdGVyYWxWYWx1ZXMuaGFzT3duUHJvcGVydHkodmFyaWFibGUuY29udGVudCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMaXRlcmFsVG9rZW4odGhpcy5pbnB1dCwgdmFyaWFibGUuYmVnaW4sIHZhcmlhYmxlLmVuZCwgdGhpcy5maWxlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTnVtYmVyKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE51bWJlclRva2VuKHZhcmlhYmxlLCBwcm9wc1swXSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wZXJ0eUFjY2Vzc1Rva2VuKHZhcmlhYmxlLCBwcm9wcywgdGhpcy5wKTtcclxuICAgIH07XHJcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLnJlYWRSYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNraXBCbGFuaygpO1xyXG4gICAgICAgIHZhciBiZWdpbiA9IHRoaXMucDtcclxuICAgICAgICBpZiAodGhpcy5wZWVrKCkgIT09ICcoJylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICsrdGhpcy5wO1xyXG4gICAgICAgIHZhciBsaHMgPSB0aGlzLnJlYWRWYWx1ZU9yVGhyb3coKTtcclxuICAgICAgICB0aGlzLnAgKz0gMjtcclxuICAgICAgICB2YXIgcmhzID0gdGhpcy5yZWFkVmFsdWVPclRocm93KCk7XHJcbiAgICAgICAgKyt0aGlzLnA7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSYW5nZVRva2VuKHRoaXMuaW5wdXQsIGJlZ2luLCB0aGlzLnAsIGxocywgcmhzLCB0aGlzLmZpbGUpO1xyXG4gICAgfTtcclxuICAgIFRva2VuaXplci5wcm90b3R5cGUucmVhZFZhbHVlT3JUaHJvdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMucmVhZFZhbHVlKCk7XHJcbiAgICAgICAgYXNzZXJ0KHZhbHVlLCBmdW5jdGlvbiAoKSB7IHJldHVybiBcInVuZXhwZWN0ZWQgdG9rZW4gXCIuY29uY2F0KF90aGlzLnNuYXBzaG90KCksIFwiLCB2YWx1ZSBleHBlY3RlZFwiKTsgfSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfTtcclxuICAgIFRva2VuaXplci5wcm90b3R5cGUucmVhZFF1b3RlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNraXBCbGFuaygpO1xyXG4gICAgICAgIHZhciBiZWdpbiA9IHRoaXMucDtcclxuICAgICAgICBpZiAoISh0aGlzLnBlZWtUeXBlKCkgJiBRVU9URSkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICArK3RoaXMucDtcclxuICAgICAgICB2YXIgZXNjYXBlZCA9IGZhbHNlO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLnAgPCB0aGlzLk4pIHtcclxuICAgICAgICAgICAgKyt0aGlzLnA7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0W3RoaXMucCAtIDFdID09PSB0aGlzLmlucHV0W2JlZ2luXSAmJiAhZXNjYXBlZClcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBpZiAoZXNjYXBlZClcclxuICAgICAgICAgICAgICAgIGVzY2FwZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pbnB1dFt0aGlzLnAgLSAxXSA9PT0gJ1xcXFwnKVxyXG4gICAgICAgICAgICAgICAgZXNjYXBlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUXVvdGVkVG9rZW4odGhpcy5pbnB1dCwgYmVnaW4sIHRoaXMucCwgdGhpcy5maWxlKTtcclxuICAgIH07XHJcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLnJlYWRGaWxlTmFtZVRlbXBsYXRlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgb3V0cHV0RGVsaW1pdGVyTGVmdCwgaHRtbFN0b3BTdHJpbmdzLCBodG1sU3RvcFN0cmluZ1NldDtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXREZWxpbWl0ZXJMZWZ0ID0gb3B0aW9ucy5vdXRwdXREZWxpbWl0ZXJMZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWxTdG9wU3RyaW5ncyA9IFsnLCcsICcgJywgb3V0cHV0RGVsaW1pdGVyTGVmdF07XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbFN0b3BTdHJpbmdTZXQgPSBuZXcgU2V0KGh0bWxTdG9wU3RyaW5ncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHRoaXMucCA8IHRoaXMuTiAmJiAhaHRtbFN0b3BTdHJpbmdTZXQuaGFzKHRoaXMucGVlaygpKSkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMubWF0Y2gob3V0cHV0RGVsaW1pdGVyTGVmdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5yZWFkT3V0cHV0VG9rZW4ob3B0aW9ucylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5yZWFkSFRNTFRva2VuKGh0bWxTdG9wU3RyaW5ncyldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5tYXRjaCA9IGZ1bmN0aW9uICh3b3JkKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB3b3JkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh3b3JkW2ldICE9PSB0aGlzLmlucHV0W3RoaXMucCArIGldKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLnJtYXRjaCA9IGZ1bmN0aW9uIChwYXR0ZXJuKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXR0ZXJuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXR0ZXJuW3BhdHRlcm4ubGVuZ3RoIC0gMSAtIGldICE9PSB0aGlzLmlucHV0W3RoaXMucCAtIDEgLSBpXSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5wZWVrVHlwZSA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgaWYgKG4gPT09IHZvaWQgMCkgeyBuID0gMDsgfVxyXG4gICAgICAgIHJldHVybiBUWVBFU1t0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wICsgbildO1xyXG4gICAgfTtcclxuICAgIFRva2VuaXplci5wcm90b3R5cGUucGVlayA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgaWYgKG4gPT09IHZvaWQgMCkgeyBuID0gMDsgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0W3RoaXMucCArIG5dO1xyXG4gICAgfTtcclxuICAgIFRva2VuaXplci5wcm90b3R5cGUuc2tpcEJsYW5rID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHdoaWxlICh0aGlzLnBlZWtUeXBlKCkgJiBCTEFOSylcclxuICAgICAgICAgICAgKyt0aGlzLnA7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRva2VuaXplcjtcclxufSgpKTtcblxudmFyIFRhZ1Rva2VuID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFRhZ1Rva2VuLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gVGFnVG9rZW4oaW5wdXQsIGJlZ2luLCBlbmQsIG9wdGlvbnMsIGZpbGUpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciB0cmltVGFnTGVmdCA9IG9wdGlvbnMudHJpbVRhZ0xlZnQsIHRyaW1UYWdSaWdodCA9IG9wdGlvbnMudHJpbVRhZ1JpZ2h0LCB0YWdEZWxpbWl0ZXJMZWZ0ID0gb3B0aW9ucy50YWdEZWxpbWl0ZXJMZWZ0LCB0YWdEZWxpbWl0ZXJSaWdodCA9IG9wdGlvbnMudGFnRGVsaW1pdGVyUmlnaHQ7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gaW5wdXQuc2xpY2UoYmVnaW4gKyB0YWdEZWxpbWl0ZXJMZWZ0Lmxlbmd0aCwgZW5kIC0gdGFnRGVsaW1pdGVyUmlnaHQubGVuZ3RoKTtcclxuICAgICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIFRva2VuS2luZC5UYWcsIHZhbHVlLCBpbnB1dCwgYmVnaW4sIGVuZCwgdHJpbVRhZ0xlZnQsIHRyaW1UYWdSaWdodCwgZmlsZSkgfHwgdGhpcztcclxuICAgICAgICB2YXIgdG9rZW5pemVyID0gbmV3IFRva2VuaXplcihfdGhpcy5jb250ZW50LCBvcHRpb25zLm9wZXJhdG9yc1RyaWUpO1xyXG4gICAgICAgIF90aGlzLm5hbWUgPSB0b2tlbml6ZXIucmVhZElkZW50aWZpZXIoKS5nZXRUZXh0KCk7XHJcbiAgICAgICAgaWYgKCFfdGhpcy5uYW1lKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVG9rZW5pemF0aW9uRXJyb3IoXCJpbGxlZ2FsIHRhZyBzeW50YXhcIiwgX3RoaXMpO1xyXG4gICAgICAgIHRva2VuaXplci5za2lwQmxhbmsoKTtcclxuICAgICAgICBfdGhpcy5hcmdzID0gdG9rZW5pemVyLnJlbWFpbmluZygpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBUYWdUb2tlbjtcclxufShEZWxpbWl0ZWRUb2tlbikpO1xuXG52YXIgUGFyc2VTdHJlYW0gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQYXJzZVN0cmVhbSh0b2tlbnMsIHBhcnNlVG9rZW4pIHtcclxuICAgICAgICB0aGlzLmhhbmRsZXJzID0ge307XHJcbiAgICAgICAgdGhpcy5zdG9wUmVxdWVzdGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XHJcbiAgICAgICAgdGhpcy5wYXJzZVRva2VuID0gcGFyc2VUb2tlbjtcclxuICAgIH1cclxuICAgIFBhcnNlU3RyZWFtLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChuYW1lLCBjYikge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlcnNbbmFtZV0gPSBjYjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBQYXJzZVN0cmVhbS5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uIChldmVudCwgYXJnKSB7XHJcbiAgICAgICAgdmFyIGggPSB0aGlzLmhhbmRsZXJzW2V2ZW50XTtcclxuICAgICAgICByZXR1cm4gaCA/IChoLmNhbGwodGhpcywgYXJnKSwgdHJ1ZSkgOiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBQYXJzZVN0cmVhbS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyKCdzdGFydCcpO1xyXG4gICAgICAgIHZhciB0b2tlbjtcclxuICAgICAgICB3aGlsZSAoIXRoaXMuc3RvcFJlcXVlc3RlZCAmJiAodG9rZW4gPSB0aGlzLnRva2Vucy5zaGlmdCgpKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50cmlnZ2VyKCd0b2tlbicsIHRva2VuKSlcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAoaXNUYWdUb2tlbih0b2tlbikgJiYgdGhpcy50cmlnZ2VyKFwidGFnOlwiLmNvbmNhdCh0b2tlbi5uYW1lKSwgdG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLnBhcnNlVG9rZW4odG9rZW4sIHRoaXMudG9rZW5zKTtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCd0ZW1wbGF0ZScsIHRlbXBsYXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0b3BSZXF1ZXN0ZWQpXHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignZW5kJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgUGFyc2VTdHJlYW0ucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdG9wUmVxdWVzdGVkID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICByZXR1cm4gUGFyc2VTdHJlYW07XHJcbn0oKSk7XG5cbi8qKlxyXG4gKiBLZXktVmFsdWUgUGFpcnMgUmVwcmVzZW50aW5nIFRhZyBBcmd1bWVudHNcclxuICogRXhhbXBsZTpcclxuICogICAgRm9yIHRoZSBtYXJrdXAgYCwgZm9vOidiYXInLCBjb286MiByZXZlcnNlZCAlfWAsXHJcbiAqICAgIGhhc2hbJ2ZvbyddID09PSAnYmFyJ1xyXG4gKiAgICBoYXNoWydjb28nXSA9PT0gMlxyXG4gKiAgICBoYXNoWydyZXZlcnNlZCddID09PSB1bmRlZmluZWRcclxuICovXHJcbnZhciBIYXNoID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gSGFzaChtYXJrdXAsIGpla3lsbFN0eWxlKSB7XHJcbiAgICAgICAgdmFyIGVfMSwgX2E7XHJcbiAgICAgICAgdGhpcy5oYXNoID0ge307XHJcbiAgICAgICAgdmFyIHRva2VuaXplciA9IG5ldyBUb2tlbml6ZXIobWFya3VwLCB7fSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyh0b2tlbml6ZXIucmVhZEhhc2hlcyhqZWt5bGxTdHlsZSkpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaGFzaCA9IF9jLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYXNoW2hhc2gubmFtZS5jb250ZW50XSA9IGhhc2gudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgSGFzaC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgIHZhciBoYXNoLCBfYSwgX2IsIGtleSwgX2MsIF9kLCBfZSwgZV8yXzE7XHJcbiAgICAgICAgdmFyIGVfMiwgX2Y7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfZykge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9nLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzaCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIF9nLmxhYmVsID0gMTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBfZy50cnlzLnB1c2goWzEsIDgsIDksIDEwXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2EgPSBfX3ZhbHVlcyhPYmplY3Qua2V5cyh0aGlzLmhhc2gpKSwgX2IgPSBfYS5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2cubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghIV9iLmRvbmUpIHJldHVybiBbMyAvKmJyZWFrKi8sIDddO1xyXG4gICAgICAgICAgICAgICAgICAgIGtleSA9IF9iLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIF9jID0gaGFzaDtcclxuICAgICAgICAgICAgICAgICAgICBfZCA9IGtleTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0aGlzLmhhc2hba2V5XSA9PT0gdW5kZWZpbmVkKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICAgICAgX2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzQgLyp5aWVsZCovLCBldmFsVG9rZW4odGhpcy5oYXNoW2tleV0sIGN0eCldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgIF9lID0gX2cuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9nLmxhYmVsID0gNTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICBfY1tfZF0gPSBfZTtcclxuICAgICAgICAgICAgICAgICAgICBfZy5sYWJlbCA9IDY7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgX2IgPSBfYS5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IHJldHVybiBbMyAvKmJyZWFrKi8sIDEwXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgICAgICBlXzJfMSA9IF9nLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBlXzIgPSB7IGVycm9yOiBlXzJfMSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDEwXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2IgJiYgIV9iLmRvbmUgJiYgKF9mID0gX2EucmV0dXJuKSkgX2YuY2FsbChfYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7IH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzcgLyplbmRmaW5hbGx5Ki9dO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxMDogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGhhc2hdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEhhc2g7XHJcbn0oKSk7XG5cbmZ1bmN0aW9uIGlzS2V5VmFsdWVQYWlyKGFycikge1xyXG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyKTtcclxufVxuXG52YXIgRmlsdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRmlsdGVyKG5hbWUsIGltcGwsIGFyZ3MsIGxpcXVpZCkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5pbXBsID0gaW1wbCB8fCBpZGVudGlmeTtcclxuICAgICAgICB0aGlzLmFyZ3MgPSBhcmdzO1xyXG4gICAgICAgIHRoaXMubGlxdWlkID0gbGlxdWlkO1xyXG4gICAgfVxyXG4gICAgRmlsdGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAodmFsdWUsIGNvbnRleHQpIHtcclxuICAgICAgICB2YXIgZV8xLCBfYTtcclxuICAgICAgICB2YXIgYXJndiA9IFtdO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXModGhpcy5hcmdzKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFyZyA9IF9jLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzS2V5VmFsdWVQYWlyKGFyZykpXHJcbiAgICAgICAgICAgICAgICAgICAgYXJndi5wdXNoKFthcmdbMF0sIGV2YWxUb2tlbihhcmdbMV0sIGNvbnRleHQpXSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgYXJndi5wdXNoKGV2YWxUb2tlbihhcmcsIGNvbnRleHQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1wbC5hcHBseSh7IGNvbnRleHQ6IGNvbnRleHQsIGxpcXVpZDogdGhpcy5saXF1aWQgfSwgX19zcHJlYWRBcnJheShbdmFsdWVdLCBfX3JlYWQoYXJndiksIGZhbHNlKSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEZpbHRlcjtcclxufSgpKTtcblxudmFyIFZhbHVlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gc3RyIHRoZSB2YWx1ZSB0byBiZSB2YWx1YXRlZCwgZWcuOiBcImZvb2JhclwiIHwgdHJ1bmNhdGU6IDNcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gVmFsdWUoc3RyLCBsaXF1aWQpIHtcclxuICAgICAgICB0aGlzLmZpbHRlcnMgPSBbXTtcclxuICAgICAgICB2YXIgdG9rZW5pemVyID0gbmV3IFRva2VuaXplcihzdHIsIGxpcXVpZC5vcHRpb25zLm9wZXJhdG9yc1RyaWUpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbCA9IHRva2VuaXplci5yZWFkRXhwcmVzc2lvbigpO1xyXG4gICAgICAgIHRoaXMuZmlsdGVycyA9IHRva2VuaXplci5yZWFkRmlsdGVycygpLm1hcChmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgdmFyIG5hbWUgPSBfYS5uYW1lLCBhcmdzID0gX2EuYXJncztcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGaWx0ZXIobmFtZSwgbGlxdWlkLmZpbHRlcnMuZ2V0KG5hbWUpLCBhcmdzLCBsaXF1aWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgVmFsdWUucHJvdG90eXBlLnZhbHVlID0gZnVuY3Rpb24gKGN0eCwgbGVuaWVudCkge1xyXG4gICAgICAgIHZhciB2YWwsIF9hLCBfYiwgZmlsdGVyLCBlXzFfMTtcclxuICAgICAgICB2YXIgZV8xLCBfYztcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9kKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2QubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBsZW5pZW50ID0gbGVuaWVudCB8fCAoY3R4Lm9wdHMubGVuaWVudElmICYmIHRoaXMuZmlsdGVycy5sZW5ndGggPiAwICYmIHRoaXMuZmlsdGVyc1swXS5uYW1lID09PSAnZGVmYXVsdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuaW5pdGlhbC5ldmFsdWF0ZShjdHgsIGxlbmllbnQpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICB2YWwgPSBfZC5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2QubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIF9kLnRyeXMucHVzaChbMiwgNywgOCwgOV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIF9hID0gX192YWx1ZXModGhpcy5maWx0ZXJzKSwgX2IgPSBfYS5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2QubGFiZWwgPSAzO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghIV9iLmRvbmUpIHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlciA9IF9iLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZpbHRlci5yZW5kZXIodmFsLCBjdHgpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICB2YWwgPSBfZC5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2QubGFiZWwgPSA1O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgIF9iID0gX2EubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gWzMgLypicmVhayovLCA5XTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgICAgICBlXzFfMSA9IF9kLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBlXzEgPSB7IGVycm9yOiBlXzFfMSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfYiAmJiAhX2IuZG9uZSAmJiAoX2MgPSBfYS5yZXR1cm4pKSBfYy5jYWxsKF9hKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNyAvKmVuZGZpbmFsbHkqL107XHJcbiAgICAgICAgICAgICAgICBjYXNlIDk6IHJldHVybiBbMiAvKnJldHVybiovLCB2YWxdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFZhbHVlO1xyXG59KCkpO1xuXG5mdW5jdGlvbiBjcmVhdGVSZXNvbHZlZFRoZW5hYmxlKHZhbHVlKSB7XHJcbiAgICB2YXIgcmV0ID0ge1xyXG4gICAgICAgIHRoZW46IGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJldHVybiByZXNvbHZlKHZhbHVlKTsgfSxcclxuICAgICAgICBjYXRjaDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmV0OyB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHJldDtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVSZWplY3RlZFRoZW5hYmxlKGVycikge1xyXG4gICAgdmFyIHJldCA9IHtcclxuICAgICAgICB0aGVuOiBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChyZWplY3QpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYXRjaDogZnVuY3Rpb24gKHJlamVjdCkgeyByZXR1cm4gcmVqZWN0KGVycik7IH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gcmV0O1xyXG59XHJcbmZ1bmN0aW9uIGlzVGhlbmFibGUodmFsKSB7XHJcbiAgICByZXR1cm4gdmFsICYmIGlzRnVuY3Rpb24odmFsLnRoZW4pO1xyXG59XHJcbmZ1bmN0aW9uIGlzQXN5bmNJdGVyYXRvcih2YWwpIHtcclxuICAgIHJldHVybiB2YWwgJiYgaXNGdW5jdGlvbih2YWwubmV4dCkgJiYgaXNGdW5jdGlvbih2YWwudGhyb3cpICYmIGlzRnVuY3Rpb24odmFsLnJldHVybik7XHJcbn1cclxuLy8gY29udmVydCBhbiBhc3luYyBpdGVyYXRvciB0byBhIHRoZW5hYmxlIChQcm9taXNlIGNvbXBhdGlibGUpXHJcbmZ1bmN0aW9uIHRvVGhlbmFibGUodmFsKSB7XHJcbiAgICBpZiAoaXNUaGVuYWJsZSh2YWwpKVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICBpZiAoaXNBc3luY0l0ZXJhdG9yKHZhbCkpXHJcbiAgICAgICAgcmV0dXJuIHJlZHVjZSgpO1xyXG4gICAgcmV0dXJuIGNyZWF0ZVJlc29sdmVkVGhlbmFibGUodmFsKTtcclxuICAgIGZ1bmN0aW9uIHJlZHVjZShwcmV2KSB7XHJcbiAgICAgICAgdmFyIHN0YXRlO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHN0YXRlID0gdmFsLm5leHQocHJldik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVJlamVjdGVkVGhlbmFibGUoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0YXRlLmRvbmUpXHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVSZXNvbHZlZFRoZW5hYmxlKHN0YXRlLnZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdG9UaGVuYWJsZShzdGF0ZS52YWx1ZSkudGhlbihyZWR1Y2UsIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgdmFyIHN0YXRlO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUgPSB2YWwudGhyb3coZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVJlamVjdGVkVGhlbmFibGUoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHN0YXRlLmRvbmUpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlUmVzb2x2ZWRUaGVuYWJsZShzdGF0ZS52YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZWR1Y2Uoc3RhdGUudmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHRvUHJvbWlzZSh2YWwpIHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodG9UaGVuYWJsZSh2YWwpKTtcclxufVxyXG4vLyBnZXQgdGhlIHZhbHVlIG9mIGFzeW5jIGl0ZXJhdG9yIGluIHN5bmNocm9ub3VzIG1hbm5lclxyXG5mdW5jdGlvbiB0b1ZhbHVlKHZhbCkge1xyXG4gICAgdmFyIHJldDtcclxuICAgIHRvVGhlbmFibGUodmFsKVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgcmV0ID0geDtcclxuICAgICAgICByZXR1cm4gY3JlYXRlUmVzb2x2ZWRUaGVuYWJsZShyZXQpO1xyXG4gICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgIHRocm93IGVycjtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJldDtcclxufVxuXG52YXIgYXNzaWduID0ge1xyXG4gICAgcGFyc2U6IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgICAgIHZhciB0b2tlbml6ZXIgPSBuZXcgVG9rZW5pemVyKHRva2VuLmFyZ3MsIHRoaXMubGlxdWlkLm9wdGlvbnMub3BlcmF0b3JzVHJpZSk7XHJcbiAgICAgICAgdGhpcy5rZXkgPSB0b2tlbml6ZXIucmVhZElkZW50aWZpZXIoKS5jb250ZW50O1xyXG4gICAgICAgIHRva2VuaXplci5za2lwQmxhbmsoKTtcclxuICAgICAgICBhc3NlcnQodG9rZW5pemVyLnBlZWsoKSA9PT0gJz0nLCBmdW5jdGlvbiAoKSB7IHJldHVybiBcImlsbGVnYWwgdG9rZW4gXCIuY29uY2F0KHRva2VuLmdldFRleHQoKSk7IH0pO1xyXG4gICAgICAgIHRva2VuaXplci5hZHZhbmNlKCk7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRva2VuaXplci5yZW1haW5pbmcoKTtcclxuICAgIH0sXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICB2YXIgX2EsIF9iO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hID0gY3R4LmJvdHRvbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9iID0gdGhpcy5rZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5saXF1aWQuX2V2YWxWYWx1ZSh0aGlzLnZhbHVlLCBjdHgpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBfYVtfYl0gPSBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XG5cbnZhciBGb3Jsb29wRHJvcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhGb3Jsb29wRHJvcCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEZvcmxvb3BEcm9wKGxlbmd0aCwgY29sbGVjdGlvbiwgdmFyaWFibGUpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmkgPSAwO1xyXG4gICAgICAgIF90aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICBfdGhpcy5uYW1lID0gXCJcIi5jb25jYXQodmFyaWFibGUsIFwiLVwiKS5jb25jYXQoY29sbGVjdGlvbik7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgRm9ybG9vcERyb3AucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5pKys7XHJcbiAgICB9O1xyXG4gICAgRm9ybG9vcERyb3AucHJvdG90eXBlLmluZGV4MCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pO1xyXG4gICAgfTtcclxuICAgIEZvcmxvb3BEcm9wLnByb3RvdHlwZS5pbmRleCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pICsgMTtcclxuICAgIH07XHJcbiAgICBGb3Jsb29wRHJvcC5wcm90b3R5cGUuZmlyc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaSA9PT0gMDtcclxuICAgIH07XHJcbiAgICBGb3Jsb29wRHJvcC5wcm90b3R5cGUubGFzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pID09PSB0aGlzLmxlbmd0aCAtIDE7XHJcbiAgICB9O1xyXG4gICAgRm9ybG9vcERyb3AucHJvdG90eXBlLnJpbmRleCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGggLSB0aGlzLmk7XHJcbiAgICB9O1xyXG4gICAgRm9ybG9vcERyb3AucHJvdG90eXBlLnJpbmRleDAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoIC0gdGhpcy5pIC0gMTtcclxuICAgIH07XHJcbiAgICBGb3Jsb29wRHJvcC5wcm90b3R5cGUudmFsdWVPZiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEZvcmxvb3BEcm9wO1xyXG59KERyb3ApKTtcblxudmFyIE1PRElGSUVSUyA9IFsnb2Zmc2V0JywgJ2xpbWl0JywgJ3JldmVyc2VkJ107XHJcbnZhciBGb3IgPSB7XHJcbiAgICB0eXBlOiAnYmxvY2snLFxyXG4gICAgcGFyc2U6IGZ1bmN0aW9uICh0b2tlbiwgcmVtYWluVG9rZW5zKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgdG9rZW5pemVyID0gbmV3IFRva2VuaXplcih0b2tlbi5hcmdzLCB0aGlzLmxpcXVpZC5vcHRpb25zLm9wZXJhdG9yc1RyaWUpO1xyXG4gICAgICAgIHZhciB2YXJpYWJsZSA9IHRva2VuaXplci5yZWFkSWRlbnRpZmllcigpO1xyXG4gICAgICAgIHZhciBpblN0ciA9IHRva2VuaXplci5yZWFkSWRlbnRpZmllcigpO1xyXG4gICAgICAgIHZhciBjb2xsZWN0aW9uID0gdG9rZW5pemVyLnJlYWRWYWx1ZSgpO1xyXG4gICAgICAgIGFzc2VydCh2YXJpYWJsZS5zaXplKCkgJiYgaW5TdHIuY29udGVudCA9PT0gJ2luJyAmJiBjb2xsZWN0aW9uLCBmdW5jdGlvbiAoKSB7IHJldHVybiBcImlsbGVnYWwgdGFnOiBcIi5jb25jYXQodG9rZW4uZ2V0VGV4dCgpKTsgfSk7XHJcbiAgICAgICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlLmNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gY29sbGVjdGlvbjtcclxuICAgICAgICB0aGlzLmhhc2ggPSBuZXcgSGFzaCh0b2tlbml6ZXIucmVtYWluaW5nKCkpO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVzID0gW107XHJcbiAgICAgICAgdGhpcy5lbHNlVGVtcGxhdGVzID0gW107XHJcbiAgICAgICAgdmFyIHA7XHJcbiAgICAgICAgdmFyIHN0cmVhbSA9IHRoaXMubGlxdWlkLnBhcnNlci5wYXJzZVN0cmVhbShyZW1haW5Ub2tlbnMpXHJcbiAgICAgICAgICAgIC5vbignc3RhcnQnLCBmdW5jdGlvbiAoKSB7IHJldHVybiAocCA9IF90aGlzLnRlbXBsYXRlcyk7IH0pXHJcbiAgICAgICAgICAgIC5vbigndGFnOmVsc2UnLCBmdW5jdGlvbiAoKSB7IHJldHVybiAocCA9IF90aGlzLmVsc2VUZW1wbGF0ZXMpOyB9KVxyXG4gICAgICAgICAgICAub24oJ3RhZzplbmRmb3InLCBmdW5jdGlvbiAoKSB7IHJldHVybiBzdHJlYW0uc3RvcCgpOyB9KVxyXG4gICAgICAgICAgICAub24oJ3RlbXBsYXRlJywgZnVuY3Rpb24gKHRwbCkgeyByZXR1cm4gcC5wdXNoKHRwbCk7IH0pXHJcbiAgICAgICAgICAgIC5vbignZW5kJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0YWcgXCIuY29uY2F0KHRva2VuLmdldFRleHQoKSwgXCIgbm90IGNsb3NlZFwiKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3RyZWFtLnN0YXJ0KCk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoY3R4LCBlbWl0dGVyKSB7XHJcbiAgICAgICAgdmFyIHIsIGNvbGxlY3Rpb24sIF9hLCBjb250aW51ZUtleSwgaGFzaCwgbW9kaWZpZXJzLCBzY29wZSwgY29sbGVjdGlvbl8xLCBjb2xsZWN0aW9uXzFfMSwgaXRlbSwgZV8xXzE7XHJcbiAgICAgICAgdmFyIGVfMSwgX2I7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgciA9IHRoaXMubGlxdWlkLnJlbmRlcmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIF9hID0gdG9FbnVtZXJhYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGV2YWxUb2tlbih0aGlzLmNvbGxlY3Rpb24sIGN0eCldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb24gPSBfYS5hcHBseSh2b2lkIDAsIFtfYy5zZW50KCldKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISFjb2xsZWN0aW9uLmxlbmd0aCkgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgci5yZW5kZXJUZW1wbGF0ZXModGhpcy5lbHNlVGVtcGxhdGVzLCBjdHgsIGVtaXR0ZXIpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlS2V5ID0gJ2NvbnRpbnVlLScgKyB0aGlzLnZhcmlhYmxlICsgJy0nICsgdGhpcy5jb2xsZWN0aW9uLmdldFRleHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHgucHVzaCh7IGNvbnRpbnVlOiBjdHguZ2V0UmVnaXN0ZXIoY29udGludWVLZXkpIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuaGFzaC5yZW5kZXIoY3R4KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzaCA9IF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHgucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJzID0gdGhpcy5saXF1aWQub3B0aW9ucy5vcmRlcmVkRmlsdGVyUGFyYW1ldGVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IE9iamVjdC5rZXlzKGhhc2gpLmZpbHRlcihmdW5jdGlvbiAoeCkgeyByZXR1cm4gTU9ESUZJRVJTLmluY2x1ZGVzKHgpOyB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IE1PRElGSUVSUy5maWx0ZXIoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIGhhc2hbeF0gIT09IHVuZGVmaW5lZDsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbiA9IG1vZGlmaWVycy5yZWR1Y2UoZnVuY3Rpb24gKGNvbGxlY3Rpb24sIG1vZGlmaWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RpZmllciA9PT0gJ29mZnNldCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2Zmc2V0KGNvbGxlY3Rpb24sIGhhc2hbJ29mZnNldCddKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGlmaWVyID09PSAnbGltaXQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpbWl0KGNvbGxlY3Rpb24sIGhhc2hbJ2xpbWl0J10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV2ZXJzZWQoY29sbGVjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgY29sbGVjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LnNldFJlZ2lzdGVyKGNvbnRpbnVlS2V5LCAoaGFzaFsnb2Zmc2V0J10gfHwgMCkgKyBjb2xsZWN0aW9uLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUgPSB7IGZvcmxvb3A6IG5ldyBGb3Jsb29wRHJvcChjb2xsZWN0aW9uLmxlbmd0aCwgdGhpcy5jb2xsZWN0aW9uLmdldFRleHQoKSwgdGhpcy52YXJpYWJsZSkgfTtcclxuICAgICAgICAgICAgICAgICAgICBjdHgucHVzaChzY29wZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSA1O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgIF9jLnRyeXMucHVzaChbNSwgMTAsIDExLCAxMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25fMSA9IF9fdmFsdWVzKGNvbGxlY3Rpb24pLCBjb2xsZWN0aW9uXzFfMSA9IGNvbGxlY3Rpb25fMS5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSA2O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghIWNvbGxlY3Rpb25fMV8xLmRvbmUpIHJldHVybiBbMyAvKmJyZWFrKi8sIDldO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBjb2xsZWN0aW9uXzFfMS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBzY29wZVt0aGlzLnZhcmlhYmxlXSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgci5yZW5kZXJUZW1wbGF0ZXModGhpcy50ZW1wbGF0ZXMsIGN0eCwgZW1pdHRlcildO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgIF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZW1pdHRlclsnYnJlYWsnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWl0dGVyWydicmVhayddID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbWl0dGVyWydjb250aW51ZSddID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuZm9ybG9vcC5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSA4O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25fMV8xID0gY29sbGVjdGlvbl8xLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA2XTtcclxuICAgICAgICAgICAgICAgIGNhc2UgOTogcmV0dXJuIFszIC8qYnJlYWsqLywgMTJdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxMDpcclxuICAgICAgICAgICAgICAgICAgICBlXzFfMSA9IF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBlXzEgPSB7IGVycm9yOiBlXzFfMSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDEyXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTE6XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbGxlY3Rpb25fMV8xICYmICFjb2xsZWN0aW9uXzFfMS5kb25lICYmIChfYiA9IGNvbGxlY3Rpb25fMS5yZXR1cm4pKSBfYi5jYWxsKGNvbGxlY3Rpb25fMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzcgLyplbmRmaW5hbGx5Ki9dO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxMjpcclxuICAgICAgICAgICAgICAgICAgICBjdHgucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcbmZ1bmN0aW9uIHJldmVyc2VkKGFycikge1xyXG4gICAgcmV0dXJuIF9fc3ByZWFkQXJyYXkoW10sIF9fcmVhZChhcnIpLCBmYWxzZSkucmV2ZXJzZSgpO1xyXG59XHJcbmZ1bmN0aW9uIG9mZnNldChhcnIsIGNvdW50KSB7XHJcbiAgICByZXR1cm4gYXJyLnNsaWNlKGNvdW50KTtcclxufVxyXG5mdW5jdGlvbiBsaW1pdChhcnIsIGNvdW50KSB7XHJcbiAgICByZXR1cm4gYXJyLnNsaWNlKDAsIGNvdW50KTtcclxufVxuXG52YXIgY2FwdHVyZSA9IHtcclxuICAgIHBhcnNlOiBmdW5jdGlvbiAodGFnVG9rZW4sIHJlbWFpblRva2Vucykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHRva2VuaXplciA9IG5ldyBUb2tlbml6ZXIodGFnVG9rZW4uYXJncywgdGhpcy5saXF1aWQub3B0aW9ucy5vcGVyYXRvcnNUcmllKTtcclxuICAgICAgICB0aGlzLnZhcmlhYmxlID0gcmVhZFZhcmlhYmxlTmFtZSh0b2tlbml6ZXIpO1xyXG4gICAgICAgIGFzc2VydCh0aGlzLnZhcmlhYmxlLCBmdW5jdGlvbiAoKSB7IHJldHVybiBcIlwiLmNvbmNhdCh0YWdUb2tlbi5hcmdzLCBcIiBub3QgdmFsaWQgaWRlbnRpZmllclwiKTsgfSk7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXMgPSBbXTtcclxuICAgICAgICB2YXIgc3RyZWFtID0gdGhpcy5saXF1aWQucGFyc2VyLnBhcnNlU3RyZWFtKHJlbWFpblRva2Vucyk7XHJcbiAgICAgICAgc3RyZWFtLm9uKCd0YWc6ZW5kY2FwdHVyZScsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0cmVhbS5zdG9wKCk7IH0pXHJcbiAgICAgICAgICAgIC5vbigndGVtcGxhdGUnLCBmdW5jdGlvbiAodHBsKSB7IHJldHVybiBfdGhpcy50ZW1wbGF0ZXMucHVzaCh0cGwpOyB9KVxyXG4gICAgICAgICAgICAub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidGFnIFwiLmNvbmNhdCh0YWdUb2tlbi5nZXRUZXh0KCksIFwiIG5vdCBjbG9zZWRcIikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN0cmVhbS5zdGFydCgpO1xyXG4gICAgfSxcclxuICAgIHJlbmRlcjogZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgIHZhciByLCBodG1sO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHIgPSB0aGlzLmxpcXVpZC5yZW5kZXJlcjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByLnJlbmRlclRlbXBsYXRlcyh0aGlzLnRlbXBsYXRlcywgY3R4KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbCA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHguYm90dG9tKClbdGhpcy52YXJpYWJsZV0gPSBodG1sO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG5mdW5jdGlvbiByZWFkVmFyaWFibGVOYW1lKHRva2VuaXplcikge1xyXG4gICAgdmFyIHdvcmQgPSB0b2tlbml6ZXIucmVhZElkZW50aWZpZXIoKS5jb250ZW50O1xyXG4gICAgaWYgKHdvcmQpXHJcbiAgICAgICAgcmV0dXJuIHdvcmQ7XHJcbiAgICB2YXIgcXVvdGVkID0gdG9rZW5pemVyLnJlYWRRdW90ZWQoKTtcclxuICAgIGlmIChxdW90ZWQpXHJcbiAgICAgICAgcmV0dXJuIGV2YWxRdW90ZWRUb2tlbihxdW90ZWQpO1xyXG59XG5cbnZhciBDYXNlID0ge1xyXG4gICAgcGFyc2U6IGZ1bmN0aW9uICh0YWdUb2tlbiwgcmVtYWluVG9rZW5zKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmNvbmQgPSBuZXcgVmFsdWUodGFnVG9rZW4uYXJncywgdGhpcy5saXF1aWQpO1xyXG4gICAgICAgIHRoaXMuY2FzZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmVsc2VUZW1wbGF0ZXMgPSBbXTtcclxuICAgICAgICB2YXIgcCA9IFtdO1xyXG4gICAgICAgIHZhciBzdHJlYW0gPSB0aGlzLmxpcXVpZC5wYXJzZXIucGFyc2VTdHJlYW0ocmVtYWluVG9rZW5zKVxyXG4gICAgICAgICAgICAub24oJ3RhZzp3aGVuJywgZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHAgPSBbXTtcclxuICAgICAgICAgICAgdmFyIHRva2VuaXplciA9IG5ldyBUb2tlbml6ZXIodG9rZW4uYXJncywgX3RoaXMubGlxdWlkLm9wdGlvbnMub3BlcmF0b3JzVHJpZSk7XHJcbiAgICAgICAgICAgIHdoaWxlICghdG9rZW5pemVyLmVuZCgpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB0b2tlbml6ZXIucmVhZFZhbHVlKCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jYXNlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICB2YWw6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlczogcFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0b2tlbml6ZXIucmVhZFRvKCcsJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ3RhZzplbHNlJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gKHAgPSBfdGhpcy5lbHNlVGVtcGxhdGVzKTsgfSlcclxuICAgICAgICAgICAgLm9uKCd0YWc6ZW5kY2FzZScsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0cmVhbS5zdG9wKCk7IH0pXHJcbiAgICAgICAgICAgIC5vbigndGVtcGxhdGUnLCBmdW5jdGlvbiAodHBsKSB7IHJldHVybiBwLnB1c2godHBsKTsgfSlcclxuICAgICAgICAgICAgLm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRhZyBcIi5jb25jYXQodGFnVG9rZW4uZ2V0VGV4dCgpLCBcIiBub3QgY2xvc2VkXCIpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdHJlYW0uc3RhcnQoKTtcclxuICAgIH0sXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uIChjdHgsIGVtaXR0ZXIpIHtcclxuICAgICAgICB2YXIgciwgY29uZCwgX2EsIF9iLCBfYywgYnJhbmNoLCB2YWwsIGVfMV8xO1xyXG4gICAgICAgIHZhciBlXzEsIF9kO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2UpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfZS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHIgPSB0aGlzLmxpcXVpZC5yZW5kZXJlcjtcclxuICAgICAgICAgICAgICAgICAgICBfYSA9IHRvVmFsdWUkMTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmNvbmQudmFsdWUoY3R4LCBjdHgub3B0cy5sZW5pZW50SWYpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBjb25kID0gX2EuYXBwbHkodm9pZCAwLCBbX2Uuc2VudCgpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2UubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIF9lLnRyeXMucHVzaChbMiwgNywgOCwgOV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIF9iID0gX192YWx1ZXModGhpcy5jYXNlcyksIF9jID0gX2IubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9lLmxhYmVsID0gMztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISFfYy5kb25lKSByZXR1cm4gWzMgLypicmVhayovLCA2XTtcclxuICAgICAgICAgICAgICAgICAgICBicmFuY2ggPSBfYy52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWwgPSBldmFsVG9rZW4oYnJhbmNoLnZhbCwgY3R4LCBjdHgub3B0cy5sZW5pZW50SWYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHZhbCA9PT0gY29uZCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHIucmVuZGVyVGVtcGxhdGVzKGJyYW5jaC50ZW1wbGF0ZXMsIGN0eCwgZW1pdHRlcildO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgIF9lLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgX2MgPSBfYi5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICBjYXNlIDY6IHJldHVybiBbMyAvKmJyZWFrKi8sIDldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgIGVfMV8xID0gX2Uuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgOV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfZCA9IF9iLnJldHVybikpIF9kLmNhbGwoX2IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3IC8qZW5kZmluYWxseSovXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgOTogcmV0dXJuIFs0IC8qeWllbGQqLywgci5yZW5kZXJUZW1wbGF0ZXModGhpcy5lbHNlVGVtcGxhdGVzLCBjdHgsIGVtaXR0ZXIpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Uuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xuXG52YXIgY29tbWVudCA9IHtcclxuICAgIHBhcnNlOiBmdW5jdGlvbiAodGFnVG9rZW4sIHJlbWFpblRva2Vucykge1xyXG4gICAgICAgIHZhciBzdHJlYW0gPSB0aGlzLmxpcXVpZC5wYXJzZXIucGFyc2VTdHJlYW0ocmVtYWluVG9rZW5zKTtcclxuICAgICAgICBzdHJlYW1cclxuICAgICAgICAgICAgLm9uKCd0b2tlbicsIGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgICAgICAgICBpZiAodG9rZW4ubmFtZSA9PT0gJ2VuZGNvbW1lbnQnKVxyXG4gICAgICAgICAgICAgICAgc3RyZWFtLnN0b3AoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidGFnIFwiLmNvbmNhdCh0YWdUb2tlbi5nZXRUZXh0KCksIFwiIG5vdCBjbG9zZWRcIikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN0cmVhbS5zdGFydCgpO1xyXG4gICAgfVxyXG59O1xuXG52YXIgQmxvY2tNb2RlO1xyXG4oZnVuY3Rpb24gKEJsb2NrTW9kZSkge1xyXG4gICAgLyogc3RvcmUgcmVuZGVyZWQgaHRtbCBpbnRvIGJsb2NrcyAqL1xyXG4gICAgQmxvY2tNb2RlW0Jsb2NrTW9kZVtcIk9VVFBVVFwiXSA9IDBdID0gXCJPVVRQVVRcIjtcclxuICAgIC8qIG91dHB1dCByZW5kZXJlZCBodG1sIGRpcmVjdGx5ICovXHJcbiAgICBCbG9ja01vZGVbQmxvY2tNb2RlW1wiU1RPUkVcIl0gPSAxXSA9IFwiU1RPUkVcIjtcclxufSkoQmxvY2tNb2RlIHx8IChCbG9ja01vZGUgPSB7fSkpO1xyXG52YXIgQmxvY2tNb2RlJDEgPSBCbG9ja01vZGU7XG5cbnZhciByZW5kZXIgPSB7XHJcbiAgICBwYXJzZUZpbGVQYXRoOiBwYXJzZUZpbGVQYXRoLFxyXG4gICAgcmVuZGVyRmlsZVBhdGg6IHJlbmRlckZpbGVQYXRoLFxyXG4gICAgcGFyc2U6IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgICAgIHZhciBhcmdzID0gdG9rZW4uYXJncztcclxuICAgICAgICB2YXIgdG9rZW5pemVyID0gbmV3IFRva2VuaXplcihhcmdzLCB0aGlzLmxpcXVpZC5vcHRpb25zLm9wZXJhdG9yc1RyaWUpO1xyXG4gICAgICAgIHRoaXNbJ2ZpbGUnXSA9IHRoaXMucGFyc2VGaWxlUGF0aCh0b2tlbml6ZXIsIHRoaXMubGlxdWlkKTtcclxuICAgICAgICB0aGlzWydjdXJyZW50RmlsZSddID0gdG9rZW4uZmlsZTtcclxuICAgICAgICB3aGlsZSAoIXRva2VuaXplci5lbmQoKSkge1xyXG4gICAgICAgICAgICB0b2tlbml6ZXIuc2tpcEJsYW5rKCk7XHJcbiAgICAgICAgICAgIHZhciBiZWdpbiA9IHRva2VuaXplci5wO1xyXG4gICAgICAgICAgICB2YXIga2V5d29yZCA9IHRva2VuaXplci5yZWFkSWRlbnRpZmllcigpO1xyXG4gICAgICAgICAgICBpZiAoa2V5d29yZC5jb250ZW50ID09PSAnd2l0aCcgfHwga2V5d29yZC5jb250ZW50ID09PSAnZm9yJykge1xyXG4gICAgICAgICAgICAgICAgdG9rZW5pemVyLnNraXBCbGFuaygpO1xyXG4gICAgICAgICAgICAgICAgLy8gY2FuIGJlIG5vcm1hbCBrZXkvdmFsdWUgcGFpciwgbGlrZSBcIndpdGg6IHRydWVcIlxyXG4gICAgICAgICAgICAgICAgaWYgKHRva2VuaXplci5wZWVrKCkgIT09ICc6Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRva2VuaXplci5yZWFkVmFsdWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYW4gYmUgbm9ybWFsIGtleSwgbGlrZSBcIndpdGgsXCJcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJlZm9yZUFzID0gdG9rZW5pemVyLnA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhc1N0ciA9IHRva2VuaXplci5yZWFkSWRlbnRpZmllcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWxpYXMgPSB2b2lkIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhc1N0ci5jb250ZW50ID09PSAnYXMnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSB0b2tlbml6ZXIucmVhZElkZW50aWZpZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5pemVyLnAgPSBiZWZvcmVBcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXl3b3JkLmNvbnRlbnRdID0geyB2YWx1ZTogdmFsdWUsIGFsaWFzOiBhbGlhcyAmJiBhbGlhcy5jb250ZW50IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuaXplci5za2lwQmxhbmsoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuaXplci5wZWVrKCkgPT09ICcsJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuaXplci5hZHZhbmNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoZWQhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogcmVzdG9yZSBjdXJzb3IgaWYgd2l0aC9mb3Igbm90IG1hdGNoZWRcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRva2VuaXplci5wID0gYmVnaW47XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhhc2ggPSBuZXcgSGFzaCh0b2tlbml6ZXIucmVtYWluaW5nKCkpO1xyXG4gICAgfSxcclxuICAgIHJlbmRlcjogZnVuY3Rpb24gKGN0eCwgZW1pdHRlcikge1xyXG4gICAgICAgIHZhciBfYSwgbGlxdWlkLCBoYXNoLCBmaWxlcGF0aCwgY2hpbGRDdHgsIHNjb3BlLCBfYiwgX2MsIF9kLCB2YWx1ZSwgYWxpYXMsIF9lLCB2YWx1ZSwgYWxpYXMsIGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25fMSwgY29sbGVjdGlvbl8xXzEsIGl0ZW0sIHRlbXBsYXRlcywgZV8xXzEsIHRlbXBsYXRlcztcclxuICAgICAgICB2YXIgZV8xLCBfZjtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9nKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2cubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBfYSA9IHRoaXMsIGxpcXVpZCA9IF9hLmxpcXVpZCwgaGFzaCA9IF9hLmhhc2g7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5yZW5kZXJGaWxlUGF0aCh0aGlzWydmaWxlJ10sIGN0eCwgbGlxdWlkKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZXBhdGggPSBfZy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXJ0KGZpbGVwYXRoLCBmdW5jdGlvbiAoKSB7IHJldHVybiBcImlsbGVnYWwgZmlsZW5hbWUgXFxcIlwiLmNvbmNhdChmaWxlcGF0aCwgXCJcXFwiXCIpOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZEN0eCA9IG5ldyBDb250ZXh0KHt9LCBjdHgub3B0cywgeyBzeW5jOiBjdHguc3luYywgZ2xvYmFsczogY3R4Lmdsb2JhbHMsIHN0cmljdFZhcmlhYmxlczogY3R4LnN0cmljdFZhcmlhYmxlcyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzY29wZSA9IGNoaWxkQ3R4LmJvdHRvbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9iID0gX19hc3NpZ247XHJcbiAgICAgICAgICAgICAgICAgICAgX2MgPSBbc2NvcGVdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGhhc2gucmVuZGVyKGN0eCldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIF9iLmFwcGx5KHZvaWQgMCwgX2MuY29uY2F0KFtfZy5zZW50KCldKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbJ3dpdGgnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfZCA9IHRoaXNbJ3dpdGgnXSwgdmFsdWUgPSBfZC52YWx1ZSwgYWxpYXMgPSBfZC5hbGlhcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVbYWxpYXMgfHwgZmlsZXBhdGhdID0gZXZhbFRva2VuKHZhbHVlLCBjdHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXNbJ2ZvciddKSByZXR1cm4gWzMgLypicmVhayovLCAxMl07XHJcbiAgICAgICAgICAgICAgICAgICAgX2UgPSB0aGlzWydmb3InXSwgdmFsdWUgPSBfZS52YWx1ZSwgYWxpYXMgPSBfZS5hbGlhcztcclxuICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uID0gZXZhbFRva2VuKHZhbHVlLCBjdHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb24gPSB0b0VudW1lcmFibGUoY29sbGVjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVbJ2Zvcmxvb3AnXSA9IG5ldyBGb3Jsb29wRHJvcChjb2xsZWN0aW9uLmxlbmd0aCwgdmFsdWUuZ2V0VGV4dCgpLCBhbGlhcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2cubGFiZWwgPSAzO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIF9nLnRyeXMucHVzaChbMywgOSwgMTAsIDExXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbl8xID0gX192YWx1ZXMoY29sbGVjdGlvbiksIGNvbGxlY3Rpb25fMV8xID0gY29sbGVjdGlvbl8xLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBfZy5sYWJlbCA9IDQ7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhY29sbGVjdGlvbl8xXzEuZG9uZSkgcmV0dXJuIFszIC8qYnJlYWsqLywgOF07XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IGNvbGxlY3Rpb25fMV8xLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlW2FsaWFzXSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbGlxdWlkLl9wYXJzZVBhcnRpYWxGaWxlKGZpbGVwYXRoLCBjaGlsZEN0eC5zeW5jLCB0aGlzWydjdXJyZW50RmlsZSddKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVzID0gX2cuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGxpcXVpZC5yZW5kZXJlci5yZW5kZXJUZW1wbGF0ZXModGVtcGxhdGVzLCBjaGlsZEN0eCwgZW1pdHRlcildO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgIF9nLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzY29wZVsnZm9ybG9vcCddLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBfZy5sYWJlbCA9IDc7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbl8xXzEgPSBjb2xsZWN0aW9uXzEubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA4OiByZXR1cm4gWzMgLypicmVhayovLCAxMV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICAgICAgICAgICAgZV8xXzEgPSBfZy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZV8xID0geyBlcnJvcjogZV8xXzEgfTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxMV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2xsZWN0aW9uXzFfMSAmJiAhY29sbGVjdGlvbl8xXzEuZG9uZSAmJiAoX2YgPSBjb2xsZWN0aW9uXzEucmV0dXJuKSkgX2YuY2FsbChjb2xsZWN0aW9uXzEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3IC8qZW5kZmluYWxseSovXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTE6IHJldHVybiBbMyAvKmJyZWFrKi8sIDE1XTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTI6IHJldHVybiBbNCAvKnlpZWxkKi8sIGxpcXVpZC5fcGFyc2VQYXJ0aWFsRmlsZShmaWxlcGF0aCwgY2hpbGRDdHguc3luYywgdGhpc1snY3VycmVudEZpbGUnXSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxMzpcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZXMgPSBfZy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbGlxdWlkLnJlbmRlcmVyLnJlbmRlclRlbXBsYXRlcyh0ZW1wbGF0ZXMsIGNoaWxkQ3R4LCBlbWl0dGVyKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE0OlxyXG4gICAgICAgICAgICAgICAgICAgIF9nLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBfZy5sYWJlbCA9IDE1O1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxNTogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcbi8qKlxyXG4gKiBAcmV0dXJuIG51bGwgZm9yIFwibm9uZVwiLFxyXG4gKiBAcmV0dXJuIFRlbXBsYXRlW10gZm9yIHF1b3RlZCB3aXRoIHRhZ3MgYW5kL29yIGZpbHRlcnNcclxuICogQHJldHVybiBUb2tlbiBmb3IgZXhwcmVzc2lvbiAobm90IHF1b3RlZClcclxuICogQHRocm93cyBUeXBlRXJyb3IgaWYgY2Fubm90IHJlYWQgbmV4dCB0b2tlblxyXG4gKi9cclxuZnVuY3Rpb24gcGFyc2VGaWxlUGF0aCh0b2tlbml6ZXIsIGxpcXVpZCkge1xyXG4gICAgaWYgKGxpcXVpZC5vcHRpb25zLmR5bmFtaWNQYXJ0aWFscykge1xyXG4gICAgICAgIHZhciBmaWxlID0gdG9rZW5pemVyLnJlYWRWYWx1ZSgpO1xyXG4gICAgICAgIGlmIChmaWxlID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJpbGxlZ2FsIGFyZ3VtZW50IFxcXCJcIi5jb25jYXQodG9rZW5pemVyLmlucHV0LCBcIlxcXCJcIikpO1xyXG4gICAgICAgIGlmIChmaWxlLmdldFRleHQoKSA9PT0gJ25vbmUnKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICBpZiAoaXNRdW90ZWRUb2tlbihmaWxlKSkge1xyXG4gICAgICAgICAgICAvLyBmb3IgZmlsZW5hbWVzIGxpa2UgXCJmaWxlcy97e2ZpbGV9fVwiLCBldmFsIGFzIGxpcXVpZCB0ZW1wbGF0ZVxyXG4gICAgICAgICAgICB2YXIgdGVtcGxhdGVzXzEgPSBsaXF1aWQucGFyc2UoZXZhbFF1b3RlZFRva2VuKGZpbGUpKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9wdGltaXplKHRlbXBsYXRlc18xKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZpbGU7XHJcbiAgICB9XHJcbiAgICB2YXIgdG9rZW5zID0gX19zcHJlYWRBcnJheShbXSwgX19yZWFkKHRva2VuaXplci5yZWFkRmlsZU5hbWVUZW1wbGF0ZShsaXF1aWQub3B0aW9ucykpLCBmYWxzZSk7XHJcbiAgICB2YXIgdGVtcGxhdGVzID0gb3B0aW1pemUobGlxdWlkLnBhcnNlci5wYXJzZVRva2Vucyh0b2tlbnMpKTtcclxuICAgIHJldHVybiB0ZW1wbGF0ZXMgPT09ICdub25lJyA/IG51bGwgOiB0ZW1wbGF0ZXM7XHJcbn1cclxuZnVuY3Rpb24gb3B0aW1pemUodGVtcGxhdGVzKSB7XHJcbiAgICAvLyBmb3IgZmlsZW5hbWVzIGxpa2UgXCJmaWxlcy9maWxlLmxpcXVpZFwiLCBleHRyYWN0IHRoZSBzdHJpbmcgZGlyZWN0bHlcclxuICAgIGlmICh0ZW1wbGF0ZXMubGVuZ3RoID09PSAxICYmIGlzSFRNTFRva2VuKHRlbXBsYXRlc1swXS50b2tlbikpXHJcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlc1swXS50b2tlbi5nZXRDb250ZW50KCk7XHJcbiAgICByZXR1cm4gdGVtcGxhdGVzO1xyXG59XHJcbmZ1bmN0aW9uIHJlbmRlckZpbGVQYXRoKGZpbGUsIGN0eCwgbGlxdWlkKSB7XHJcbiAgICBpZiAodHlwZW9mIGZpbGUgPT09ICdzdHJpbmcnKVxyXG4gICAgICAgIHJldHVybiBmaWxlO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZmlsZSkpXHJcbiAgICAgICAgcmV0dXJuIGxpcXVpZC5yZW5kZXJlci5yZW5kZXJUZW1wbGF0ZXMoZmlsZSwgY3R4KTtcclxuICAgIHJldHVybiBldmFsVG9rZW4oZmlsZSwgY3R4KTtcclxufVxuXG52YXIgaW5jbHVkZSA9IHtcclxuICAgIHBhcnNlRmlsZVBhdGg6IHBhcnNlRmlsZVBhdGgsXHJcbiAgICByZW5kZXJGaWxlUGF0aDogcmVuZGVyRmlsZVBhdGgsXHJcbiAgICBwYXJzZTogZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSB0b2tlbi5hcmdzO1xyXG4gICAgICAgIHZhciB0b2tlbml6ZXIgPSBuZXcgVG9rZW5pemVyKGFyZ3MsIHRoaXMubGlxdWlkLm9wdGlvbnMub3BlcmF0b3JzVHJpZSk7XHJcbiAgICAgICAgdGhpc1snZmlsZSddID0gdGhpcy5wYXJzZUZpbGVQYXRoKHRva2VuaXplciwgdGhpcy5saXF1aWQpO1xyXG4gICAgICAgIHRoaXNbJ2N1cnJlbnRGaWxlJ10gPSB0b2tlbi5maWxlO1xyXG4gICAgICAgIHZhciBiZWdpbiA9IHRva2VuaXplci5wO1xyXG4gICAgICAgIHZhciB3aXRoU3RyID0gdG9rZW5pemVyLnJlYWRJZGVudGlmaWVyKCk7XHJcbiAgICAgICAgaWYgKHdpdGhTdHIuY29udGVudCA9PT0gJ3dpdGgnKSB7XHJcbiAgICAgICAgICAgIHRva2VuaXplci5za2lwQmxhbmsoKTtcclxuICAgICAgICAgICAgaWYgKHRva2VuaXplci5wZWVrKCkgIT09ICc6Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53aXRoVmFyID0gdG9rZW5pemVyLnJlYWRWYWx1ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRva2VuaXplci5wID0gYmVnaW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdG9rZW5pemVyLnAgPSBiZWdpbjtcclxuICAgICAgICB0aGlzLmhhc2ggPSBuZXcgSGFzaCh0b2tlbml6ZXIucmVtYWluaW5nKCksIHRoaXMubGlxdWlkLm9wdGlvbnMuamVreWxsSW5jbHVkZSk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoY3R4LCBlbWl0dGVyKSB7XHJcbiAgICAgICAgdmFyIF9hLCBsaXF1aWQsIGhhc2gsIHdpdGhWYXIsIHJlbmRlcmVyLCBmaWxlcGF0aCwgc2F2ZWQsIHNjb3BlLCB0ZW1wbGF0ZXM7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgX2EgPSB0aGlzLCBsaXF1aWQgPSBfYS5saXF1aWQsIGhhc2ggPSBfYS5oYXNoLCB3aXRoVmFyID0gX2Eud2l0aFZhcjtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJlciA9IGxpcXVpZC5yZW5kZXJlcjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnJlbmRlckZpbGVQYXRoKHRoaXNbJ2ZpbGUnXSwgY3R4LCBsaXF1aWQpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBmaWxlcGF0aCA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBhc3NlcnQoZmlsZXBhdGgsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiaWxsZWdhbCBmaWxlbmFtZSBcXFwiXCIuY29uY2F0KGZpbGVwYXRoLCBcIlxcXCJcIik7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNhdmVkID0gY3R4LnNhdmVSZWdpc3RlcignYmxvY2tzJywgJ2Jsb2NrTW9kZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5zZXRSZWdpc3RlcignYmxvY2tzJywge30pO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5zZXRSZWdpc3RlcignYmxvY2tNb2RlJywgQmxvY2tNb2RlJDEuT1VUUFVUKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBoYXNoLnJlbmRlcihjdHgpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBzY29wZSA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAod2l0aFZhcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVbZmlsZXBhdGhdID0gZXZhbFRva2VuKHdpdGhWYXIsIGN0eCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbGlxdWlkLl9wYXJzZVBhcnRpYWxGaWxlKGZpbGVwYXRoLCBjdHguc3luYywgdGhpc1snY3VycmVudEZpbGUnXSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlcyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHgucHVzaChjdHgub3B0cy5qZWt5bGxJbmNsdWRlID8geyBpbmNsdWRlOiBzY29wZSB9IDogc2NvcGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlbmRlcmVyLnJlbmRlclRlbXBsYXRlcyh0ZW1wbGF0ZXMsIGN0eCwgZW1pdHRlcildO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHgucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LnJlc3RvcmVSZWdpc3RlcihzYXZlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XG5cbnZhciBkZWNyZW1lbnQgPSB7XHJcbiAgICBwYXJzZTogZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAgICAgdmFyIHRva2VuaXplciA9IG5ldyBUb2tlbml6ZXIodG9rZW4uYXJncywgdGhpcy5saXF1aWQub3B0aW9ucy5vcGVyYXRvcnNUcmllKTtcclxuICAgICAgICB0aGlzLnZhcmlhYmxlID0gdG9rZW5pemVyLnJlYWRJZGVudGlmaWVyKCkuY29udGVudDtcclxuICAgIH0sXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uIChjb250ZXh0LCBlbWl0dGVyKSB7XHJcbiAgICAgICAgdmFyIHNjb3BlID0gY29udGV4dC5lbnZpcm9ubWVudHM7XHJcbiAgICAgICAgaWYgKCFpc051bWJlcihzY29wZVt0aGlzLnZhcmlhYmxlXSkpIHtcclxuICAgICAgICAgICAgc2NvcGVbdGhpcy52YXJpYWJsZV0gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbWl0dGVyLndyaXRlKHN0cmluZ2lmeSgtLXNjb3BlW3RoaXMudmFyaWFibGVdKSk7XHJcbiAgICB9XHJcbn07XG5cbnZhciBjeWNsZSA9IHtcclxuICAgIHBhcnNlOiBmdW5jdGlvbiAodGFnVG9rZW4pIHtcclxuICAgICAgICB2YXIgdG9rZW5pemVyID0gbmV3IFRva2VuaXplcih0YWdUb2tlbi5hcmdzLCB0aGlzLmxpcXVpZC5vcHRpb25zLm9wZXJhdG9yc1RyaWUpO1xyXG4gICAgICAgIHZhciBncm91cCA9IHRva2VuaXplci5yZWFkVmFsdWUoKTtcclxuICAgICAgICB0b2tlbml6ZXIuc2tpcEJsYW5rKCk7XHJcbiAgICAgICAgdGhpcy5jYW5kaWRhdGVzID0gW107XHJcbiAgICAgICAgaWYgKGdyb3VwKSB7XHJcbiAgICAgICAgICAgIGlmICh0b2tlbml6ZXIucGVlaygpID09PSAnOicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAgPSBncm91cDtcclxuICAgICAgICAgICAgICAgIHRva2VuaXplci5hZHZhbmNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5kaWRhdGVzLnB1c2goZ3JvdXApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoIXRva2VuaXplci5lbmQoKSkge1xyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0b2tlbml6ZXIucmVhZFZhbHVlKCk7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuZGlkYXRlcy5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgdG9rZW5pemVyLnJlYWRUbygnLCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhc3NlcnQodGhpcy5jYW5kaWRhdGVzLmxlbmd0aCwgZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJlbXB0eSBjYW5kaWRhdGVzOiBcIi5jb25jYXQodGFnVG9rZW4uZ2V0VGV4dCgpKTsgfSk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoY3R4LCBlbWl0dGVyKSB7XHJcbiAgICAgICAgdmFyIGdyb3VwID0gZXZhbFRva2VuKHRoaXMuZ3JvdXAsIGN0eCk7XHJcbiAgICAgICAgdmFyIGZpbmdlcnByaW50ID0gXCJjeWNsZTpcIi5jb25jYXQoZ3JvdXAsIFwiOlwiKSArIHRoaXMuY2FuZGlkYXRlcy5qb2luKCcsJyk7XHJcbiAgICAgICAgdmFyIGdyb3VwcyA9IGN0eC5nZXRSZWdpc3RlcignY3ljbGUnKTtcclxuICAgICAgICB2YXIgaWR4ID0gZ3JvdXBzW2ZpbmdlcnByaW50XTtcclxuICAgICAgICBpZiAoaWR4ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWR4ID0gZ3JvdXBzW2ZpbmdlcnByaW50XSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB0aGlzLmNhbmRpZGF0ZXNbaWR4XTtcclxuICAgICAgICBpZHggPSAoaWR4ICsgMSkgJSB0aGlzLmNhbmRpZGF0ZXMubGVuZ3RoO1xyXG4gICAgICAgIGdyb3Vwc1tmaW5nZXJwcmludF0gPSBpZHg7XHJcbiAgICAgICAgdmFyIGh0bWwgPSBldmFsVG9rZW4oY2FuZGlkYXRlLCBjdHgpO1xyXG4gICAgICAgIGVtaXR0ZXIud3JpdGUoaHRtbCk7XHJcbiAgICB9XHJcbn07XG5cbnZhciBJZiA9IHtcclxuICAgIHBhcnNlOiBmdW5jdGlvbiAodGFnVG9rZW4sIHJlbWFpblRva2Vucykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5icmFuY2hlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZWxzZVRlbXBsYXRlcyA9IFtdO1xyXG4gICAgICAgIHZhciBwO1xyXG4gICAgICAgIHRoaXMubGlxdWlkLnBhcnNlci5wYXJzZVN0cmVhbShyZW1haW5Ub2tlbnMpXHJcbiAgICAgICAgICAgIC5vbignc3RhcnQnLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5icmFuY2hlcy5wdXNoKHtcclxuICAgICAgICAgICAgcHJlZGljYXRlOiBuZXcgVmFsdWUodGFnVG9rZW4uYXJncywgX3RoaXMubGlxdWlkKSxcclxuICAgICAgICAgICAgdGVtcGxhdGVzOiAocCA9IFtdKVxyXG4gICAgICAgIH0pOyB9KVxyXG4gICAgICAgICAgICAub24oJ3RhZzplbHNpZicsIGZ1bmN0aW9uICh0b2tlbikgeyByZXR1cm4gX3RoaXMuYnJhbmNoZXMucHVzaCh7XHJcbiAgICAgICAgICAgIHByZWRpY2F0ZTogbmV3IFZhbHVlKHRva2VuLmFyZ3MsIF90aGlzLmxpcXVpZCksXHJcbiAgICAgICAgICAgIHRlbXBsYXRlczogKHAgPSBbXSlcclxuICAgICAgICB9KTsgfSlcclxuICAgICAgICAgICAgLm9uKCd0YWc6ZWxzZScsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIChwID0gX3RoaXMuZWxzZVRlbXBsYXRlcyk7IH0pXHJcbiAgICAgICAgICAgIC5vbigndGFnOmVuZGlmJywgZnVuY3Rpb24gKCkgeyB0aGlzLnN0b3AoKTsgfSlcclxuICAgICAgICAgICAgLm9uKCd0ZW1wbGF0ZScsIGZ1bmN0aW9uICh0cGwpIHsgcmV0dXJuIHAucHVzaCh0cGwpOyB9KVxyXG4gICAgICAgICAgICAub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHsgdGhyb3cgbmV3IEVycm9yKFwidGFnIFwiLmNvbmNhdCh0YWdUb2tlbi5nZXRUZXh0KCksIFwiIG5vdCBjbG9zZWRcIikpOyB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH0sXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uIChjdHgsIGVtaXR0ZXIpIHtcclxuICAgICAgICB2YXIgciwgX2EsIF9iLCBfYywgcHJlZGljYXRlLCB0ZW1wbGF0ZXMsIHZhbHVlLCBlXzFfMTtcclxuICAgICAgICB2YXIgZV8xLCBfZDtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9lKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2UubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICByID0gdGhpcy5saXF1aWQucmVuZGVyZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgX2UubGFiZWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIF9lLnRyeXMucHVzaChbMSwgNywgOCwgOV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIF9hID0gX192YWx1ZXModGhpcy5icmFuY2hlcyksIF9iID0gX2EubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9lLmxhYmVsID0gMjtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISFfYi5kb25lKSByZXR1cm4gWzMgLypicmVhayovLCA2XTtcclxuICAgICAgICAgICAgICAgICAgICBfYyA9IF9iLnZhbHVlLCBwcmVkaWNhdGUgPSBfYy5wcmVkaWNhdGUsIHRlbXBsYXRlcyA9IF9jLnRlbXBsYXRlcztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBwcmVkaWNhdGUudmFsdWUoY3R4LCBjdHgub3B0cy5sZW5pZW50SWYpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IF9lLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVHJ1dGh5KHZhbHVlLCBjdHgpKSByZXR1cm4gWzMgLypicmVhayovLCA1XTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByLnJlbmRlclRlbXBsYXRlcyh0ZW1wbGF0ZXMsIGN0eCwgZW1pdHRlcildO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgIF9lLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgX2IgPSBfYS5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDY6IHJldHVybiBbMyAvKmJyZWFrKi8sIDldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgIGVfMV8xID0gX2Uuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgOV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9iICYmICFfYi5kb25lICYmIChfZCA9IF9hLnJldHVybikpIF9kLmNhbGwoX2EpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3IC8qZW5kZmluYWxseSovXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgOTogcmV0dXJuIFs0IC8qeWllbGQqLywgci5yZW5kZXJUZW1wbGF0ZXModGhpcy5lbHNlVGVtcGxhdGVzLCBjdHgsIGVtaXR0ZXIpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Uuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xuXG52YXIgaW5jcmVtZW50ID0ge1xyXG4gICAgcGFyc2U6IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgICAgIHZhciB0b2tlbml6ZXIgPSBuZXcgVG9rZW5pemVyKHRva2VuLmFyZ3MsIHRoaXMubGlxdWlkLm9wdGlvbnMub3BlcmF0b3JzVHJpZSk7XHJcbiAgICAgICAgdGhpcy52YXJpYWJsZSA9IHRva2VuaXplci5yZWFkSWRlbnRpZmllcigpLmNvbnRlbnQ7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoY29udGV4dCwgZW1pdHRlcikge1xyXG4gICAgICAgIHZhciBzY29wZSA9IGNvbnRleHQuZW52aXJvbm1lbnRzO1xyXG4gICAgICAgIGlmICghaXNOdW1iZXIoc2NvcGVbdGhpcy52YXJpYWJsZV0pKSB7XHJcbiAgICAgICAgICAgIHNjb3BlW3RoaXMudmFyaWFibGVdID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHZhbCA9IHNjb3BlW3RoaXMudmFyaWFibGVdO1xyXG4gICAgICAgIHNjb3BlW3RoaXMudmFyaWFibGVdKys7XHJcbiAgICAgICAgZW1pdHRlci53cml0ZShzdHJpbmdpZnkodmFsKSk7XHJcbiAgICB9XHJcbn07XG5cbnZhciBsYXlvdXQgPSB7XHJcbiAgICBwYXJzZUZpbGVQYXRoOiBwYXJzZUZpbGVQYXRoLFxyXG4gICAgcmVuZGVyRmlsZVBhdGg6IHJlbmRlckZpbGVQYXRoLFxyXG4gICAgcGFyc2U6IGZ1bmN0aW9uICh0b2tlbiwgcmVtYWluVG9rZW5zKSB7XHJcbiAgICAgICAgdmFyIHRva2VuaXplciA9IG5ldyBUb2tlbml6ZXIodG9rZW4uYXJncywgdGhpcy5saXF1aWQub3B0aW9ucy5vcGVyYXRvcnNUcmllKTtcclxuICAgICAgICB0aGlzWydmaWxlJ10gPSB0aGlzLnBhcnNlRmlsZVBhdGgodG9rZW5pemVyLCB0aGlzLmxpcXVpZCk7XHJcbiAgICAgICAgdGhpc1snY3VycmVudEZpbGUnXSA9IHRva2VuLmZpbGU7XHJcbiAgICAgICAgdGhpcy5oYXNoID0gbmV3IEhhc2godG9rZW5pemVyLnJlbWFpbmluZygpKTtcclxuICAgICAgICB0aGlzLnRwbHMgPSB0aGlzLmxpcXVpZC5wYXJzZXIucGFyc2VUb2tlbnMocmVtYWluVG9rZW5zKTtcclxuICAgIH0sXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uIChjdHgsIGVtaXR0ZXIpIHtcclxuICAgICAgICB2YXIgX2EsIGxpcXVpZCwgaGFzaCwgZmlsZSwgcmVuZGVyZXIsIGZpbGVwYXRoLCB0ZW1wbGF0ZXMsIGh0bWwsIGJsb2NrcywgX2IsIF9jO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2QpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfZC5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hID0gdGhpcywgbGlxdWlkID0gX2EubGlxdWlkLCBoYXNoID0gX2EuaGFzaCwgZmlsZSA9IF9hLmZpbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyZXIgPSBsaXF1aWQucmVuZGVyZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoZmlsZSA9PT0gbnVsbCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5zZXRSZWdpc3RlcignYmxvY2tNb2RlJywgQmxvY2tNb2RlJDEuT1VUUFVUKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZW5kZXJlci5yZW5kZXJUZW1wbGF0ZXModGhpcy50cGxzLCBjdHgsIGVtaXR0ZXIpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBfZC5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnJlbmRlckZpbGVQYXRoKHRoaXNbJ2ZpbGUnXSwgY3R4LCBsaXF1aWQpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBmaWxlcGF0aCA9IF9kLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBhc3NlcnQoZmlsZXBhdGgsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiaWxsZWdhbCBmaWxlbmFtZSBcXFwiXCIuY29uY2F0KGZpbGVwYXRoLCBcIlxcXCJcIik7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGxpcXVpZC5fcGFyc2VMYXlvdXRGaWxlKGZpbGVwYXRoLCBjdHguc3luYywgdGhpc1snY3VycmVudEZpbGUnXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVuZGVyIHJlbWFpbmluZyBjb250ZW50cyBhbmQgc3RvcmUgcmVuZGVyZWQgcmVzdWx0c1xyXG4gICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVzID0gX2Quc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbmRlciByZW1haW5pbmcgY29udGVudHMgYW5kIHN0b3JlIHJlbmRlcmVkIHJlc3VsdHNcclxuICAgICAgICAgICAgICAgICAgICBjdHguc2V0UmVnaXN0ZXIoJ2Jsb2NrTW9kZScsIEJsb2NrTW9kZSQxLlNUT1JFKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZW5kZXJlci5yZW5kZXJUZW1wbGF0ZXModGhpcy50cGxzLCBjdHgpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICBodG1sID0gX2Quc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrcyA9IGN0eC5nZXRSZWdpc3RlcignYmxvY2tzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0IHdob2xlIGNvbnRlbnQgdG8gYW5vbnltb3VzIGJsb2NrIGlmIGFub255bW91cyBkb2Vzbid0IHNwZWNpZmllZFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChibG9ja3NbJyddID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2Nrc1snJ10gPSBmdW5jdGlvbiAocGFyZW50LCBlbWl0dGVyKSB7IHJldHVybiBlbWl0dGVyLndyaXRlKGh0bWwpOyB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5zZXRSZWdpc3RlcignYmxvY2tNb2RlJywgQmxvY2tNb2RlJDEuT1VUUFVUKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZW5kZXIgdGhlIGxheW91dCBmaWxlIHVzZSBzdG9yZWQgYmxvY2tzXHJcbiAgICAgICAgICAgICAgICAgICAgX2MgPSAoX2IgPSBjdHgpLnB1c2g7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaGFzaC5yZW5kZXIoY3R4KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVuZGVyIHRoZSBsYXlvdXQgZmlsZSB1c2Ugc3RvcmVkIGJsb2Nrc1xyXG4gICAgICAgICAgICAgICAgICAgIF9jLmFwcGx5KF9iLCBbX2Quc2VudCgpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVuZGVyZXIucmVuZGVyVGVtcGxhdGVzKHRlbXBsYXRlcywgY3R4LCBlbWl0dGVyKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Quc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcblxudmFyIEJsb2NrRHJvcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhCbG9ja0Ryb3AsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBCbG9ja0Ryb3AoXHJcbiAgICAvLyB0aGUgYmxvY2sgcmVuZGVyIGZyb20gbGF5b3V0IHRlbXBsYXRlXHJcbiAgICBzdXBlckJsb2NrUmVuZGVyKSB7XHJcbiAgICAgICAgaWYgKHN1cGVyQmxvY2tSZW5kZXIgPT09IHZvaWQgMCkgeyBzdXBlckJsb2NrUmVuZGVyID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJyc7IH07IH1cclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnN1cGVyQmxvY2tSZW5kZXIgPSBzdXBlckJsb2NrUmVuZGVyO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUHJvdmlkZSBwYXJlbnQgYWNjZXNzIGluIGNoaWxkIGJsb2NrIGJ5XHJcbiAgICAgKiB7eyBibG9jay5zdXBlciB9fVxyXG4gICAgICovXHJcbiAgICBCbG9ja0Ryb3AucHJvdG90eXBlLnN1cGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN1cGVyQmxvY2tSZW5kZXIoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQmxvY2tEcm9wO1xyXG59KERyb3ApKTtcblxudmFyIGJsb2NrID0ge1xyXG4gICAgcGFyc2U6IGZ1bmN0aW9uICh0b2tlbiwgcmVtYWluVG9rZW5zKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgbWF0Y2ggPSAvXFx3Ky8uZXhlYyh0b2tlbi5hcmdzKTtcclxuICAgICAgICB0aGlzLmJsb2NrID0gbWF0Y2ggPyBtYXRjaFswXSA6ICcnO1xyXG4gICAgICAgIHRoaXMudHBscyA9IFtdO1xyXG4gICAgICAgIHRoaXMubGlxdWlkLnBhcnNlci5wYXJzZVN0cmVhbShyZW1haW5Ub2tlbnMpXHJcbiAgICAgICAgICAgIC5vbigndGFnOmVuZGJsb2NrJywgZnVuY3Rpb24gKCkgeyB0aGlzLnN0b3AoKTsgfSlcclxuICAgICAgICAgICAgLm9uKCd0ZW1wbGF0ZScsIGZ1bmN0aW9uICh0cGwpIHsgcmV0dXJuIF90aGlzLnRwbHMucHVzaCh0cGwpOyB9KVxyXG4gICAgICAgICAgICAub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHsgdGhyb3cgbmV3IEVycm9yKFwidGFnIFwiLmNvbmNhdCh0b2tlbi5nZXRUZXh0KCksIFwiIG5vdCBjbG9zZWRcIikpOyB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH0sXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uIChjdHgsIGVtaXR0ZXIpIHtcclxuICAgICAgICB2YXIgYmxvY2tSZW5kZXI7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tSZW5kZXIgPSB0aGlzLmdldEJsb2NrUmVuZGVyKGN0eCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoY3R4LmdldFJlZ2lzdGVyKCdibG9ja01vZGUnKSA9PT0gQmxvY2tNb2RlJDEuU1RPUkUpKSByZXR1cm4gWzMgLypicmVhayovLCAxXTtcclxuICAgICAgICAgICAgICAgICAgICBjdHguZ2V0UmVnaXN0ZXIoJ2Jsb2NrcycpW3RoaXMuYmxvY2tdID0gYmxvY2tSZW5kZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbNCAvKnlpZWxkKi8sIGJsb2NrUmVuZGVyKG5ldyBCbG9ja0Ryb3AoKSwgZW1pdHRlcildO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDM7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGdldEJsb2NrUmVuZGVyOiBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgdmFyIF9hID0gdGhpcywgbGlxdWlkID0gX2EubGlxdWlkLCB0cGxzID0gX2EudHBscztcclxuICAgICAgICB2YXIgcmVuZGVyQ2hpbGQgPSBjdHguZ2V0UmVnaXN0ZXIoJ2Jsb2NrcycpW3RoaXMuYmxvY2tdO1xyXG4gICAgICAgIHZhciByZW5kZXJDdXJyZW50ID0gZnVuY3Rpb24gKHN1cGVyQmxvY2ssIGVtaXR0ZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkIHt7IGJsb2NrLnN1cGVyIH19IHN1cHBvcnQgd2hlbiByZW5kZXJpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnB1c2goeyBibG9jazogc3VwZXJCbG9jayB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbGlxdWlkLnJlbmRlcmVyLnJlbmRlclRlbXBsYXRlcyh0cGxzLCBjdHgsIGVtaXR0ZXIpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHJlbmRlckNoaWxkXHJcbiAgICAgICAgICAgID8gZnVuY3Rpb24gKHN1cGVyQmxvY2ssIGVtaXR0ZXIpIHsgcmV0dXJuIHJlbmRlckNoaWxkKG5ldyBCbG9ja0Ryb3AoZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVuZGVyQ3VycmVudChzdXBlckJsb2NrLCBlbWl0dGVyKTsgfSksIGVtaXR0ZXIpOyB9XHJcbiAgICAgICAgICAgIDogcmVuZGVyQ3VycmVudDtcclxuICAgIH1cclxufTtcblxudmFyIHJhdyA9IHtcclxuICAgIHBhcnNlOiBmdW5jdGlvbiAodGFnVG9rZW4sIHJlbWFpblRva2Vucykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy50b2tlbnMgPSBbXTtcclxuICAgICAgICB2YXIgc3RyZWFtID0gdGhpcy5saXF1aWQucGFyc2VyLnBhcnNlU3RyZWFtKHJlbWFpblRva2Vucyk7XHJcbiAgICAgICAgc3RyZWFtXHJcbiAgICAgICAgICAgIC5vbigndG9rZW4nLCBmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgICAgICAgICAgaWYgKHRva2VuLm5hbWUgPT09ICdlbmRyYXcnKVxyXG4gICAgICAgICAgICAgICAgc3RyZWFtLnN0b3AoKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgX3RoaXMudG9rZW5zLnB1c2godG9rZW4pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbignZW5kJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0YWcgXCIuY29uY2F0KHRhZ1Rva2VuLmdldFRleHQoKSwgXCIgbm90IGNsb3NlZFwiKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3RyZWFtLnN0YXJ0KCk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHsgcmV0dXJuIHRva2VuLmdldFRleHQoKTsgfSkuam9pbignJyk7XHJcbiAgICB9XHJcbn07XG5cbnZhciBUYWJsZXJvd2xvb3BEcm9wID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFRhYmxlcm93bG9vcERyb3AsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBUYWJsZXJvd2xvb3BEcm9wKGxlbmd0aCwgY29scywgY29sbGVjdGlvbiwgdmFyaWFibGUpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBsZW5ndGgsIGNvbGxlY3Rpb24sIHZhcmlhYmxlKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICBfdGhpcy5jb2xzID0gY29scztcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBUYWJsZXJvd2xvb3BEcm9wLnByb3RvdHlwZS5yb3cgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5pIC8gdGhpcy5jb2xzKSArIDE7XHJcbiAgICB9O1xyXG4gICAgVGFibGVyb3dsb29wRHJvcC5wcm90b3R5cGUuY29sMCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuaSAlIHRoaXMuY29scyk7XHJcbiAgICB9O1xyXG4gICAgVGFibGVyb3dsb29wRHJvcC5wcm90b3R5cGUuY29sID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbDAoKSArIDE7XHJcbiAgICB9O1xyXG4gICAgVGFibGVyb3dsb29wRHJvcC5wcm90b3R5cGUuY29sX2ZpcnN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbDAoKSA9PT0gMDtcclxuICAgIH07XHJcbiAgICBUYWJsZXJvd2xvb3BEcm9wLnByb3RvdHlwZS5jb2xfbGFzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb2woKSA9PT0gdGhpcy5jb2xzO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUYWJsZXJvd2xvb3BEcm9wO1xyXG59KEZvcmxvb3BEcm9wKSk7XG5cbnZhciB0YWJsZXJvdyA9IHtcclxuICAgIHBhcnNlOiBmdW5jdGlvbiAodGFnVG9rZW4sIHJlbWFpblRva2Vucykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHRva2VuaXplciA9IG5ldyBUb2tlbml6ZXIodGFnVG9rZW4uYXJncywgdGhpcy5saXF1aWQub3B0aW9ucy5vcGVyYXRvcnNUcmllKTtcclxuICAgICAgICB2YXIgdmFyaWFibGUgPSB0b2tlbml6ZXIucmVhZElkZW50aWZpZXIoKTtcclxuICAgICAgICB0b2tlbml6ZXIuc2tpcEJsYW5rKCk7XHJcbiAgICAgICAgdmFyIHRtcCA9IHRva2VuaXplci5yZWFkSWRlbnRpZmllcigpO1xyXG4gICAgICAgIGFzc2VydCh0bXAgJiYgdG1wLmNvbnRlbnQgPT09ICdpbicsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiaWxsZWdhbCB0YWc6IFwiLmNvbmNhdCh0YWdUb2tlbi5nZXRUZXh0KCkpOyB9KTtcclxuICAgICAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGUuY29udGVudDtcclxuICAgICAgICB0aGlzLmNvbGxlY3Rpb24gPSB0b2tlbml6ZXIucmVhZFZhbHVlKCk7XHJcbiAgICAgICAgdGhpcy5oYXNoID0gbmV3IEhhc2godG9rZW5pemVyLnJlbWFpbmluZygpKTtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlcyA9IFtdO1xyXG4gICAgICAgIHZhciBwO1xyXG4gICAgICAgIHZhciBzdHJlYW0gPSB0aGlzLmxpcXVpZC5wYXJzZXIucGFyc2VTdHJlYW0ocmVtYWluVG9rZW5zKVxyXG4gICAgICAgICAgICAub24oJ3N0YXJ0JywgZnVuY3Rpb24gKCkgeyByZXR1cm4gKHAgPSBfdGhpcy50ZW1wbGF0ZXMpOyB9KVxyXG4gICAgICAgICAgICAub24oJ3RhZzplbmR0YWJsZXJvdycsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0cmVhbS5zdG9wKCk7IH0pXHJcbiAgICAgICAgICAgIC5vbigndGVtcGxhdGUnLCBmdW5jdGlvbiAodHBsKSB7IHJldHVybiBwLnB1c2godHBsKTsgfSlcclxuICAgICAgICAgICAgLm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRhZyBcIi5jb25jYXQodGFnVG9rZW4uZ2V0VGV4dCgpLCBcIiBub3QgY2xvc2VkXCIpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdHJlYW0uc3RhcnQoKTtcclxuICAgIH0sXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uIChjdHgsIGVtaXR0ZXIpIHtcclxuICAgICAgICB2YXIgY29sbGVjdGlvbiwgX2EsIGhhc2gsIG9mZnNldCwgbGltaXQsIGNvbHMsIHIsIHRhYmxlcm93bG9vcCwgc2NvcGUsIGlkeDtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBfYSA9IHRvRW51bWVyYWJsZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBldmFsVG9rZW4odGhpcy5jb2xsZWN0aW9uLCBjdHgpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uID0gX2EuYXBwbHkodm9pZCAwLCBbX2Iuc2VudCgpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5oYXNoLnJlbmRlcihjdHgpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBoYXNoID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IGhhc2gub2Zmc2V0IHx8IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGltaXQgPSAoaGFzaC5saW1pdCA9PT0gdW5kZWZpbmVkKSA/IGNvbGxlY3Rpb24ubGVuZ3RoIDogaGFzaC5saW1pdDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uID0gY29sbGVjdGlvbi5zbGljZShvZmZzZXQsIG9mZnNldCArIGxpbWl0KTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xzID0gaGFzaC5jb2xzIHx8IGNvbGxlY3Rpb24ubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIHIgPSB0aGlzLmxpcXVpZC5yZW5kZXJlcjtcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZXJvd2xvb3AgPSBuZXcgVGFibGVyb3dsb29wRHJvcChjb2xsZWN0aW9uLmxlbmd0aCwgY29scywgdGhpcy5jb2xsZWN0aW9uLmdldFRleHQoKSwgdGhpcy52YXJpYWJsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUgPSB7IHRhYmxlcm93bG9vcDogdGFibGVyb3dsb29wIH07XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LnB1c2goc2NvcGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlkeCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAzO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKGlkeCA8IGNvbGxlY3Rpb24ubGVuZ3RoKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVbdGhpcy52YXJpYWJsZV0gPSBjb2xsZWN0aW9uW2lkeF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhYmxlcm93bG9vcC5jb2wwKCkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhYmxlcm93bG9vcC5yb3coKSAhPT0gMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtaXR0ZXIud3JpdGUoJzwvdHI+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtaXR0ZXIud3JpdGUoXCI8dHIgY2xhc3M9XFxcInJvd1wiLmNvbmNhdCh0YWJsZXJvd2xvb3Aucm93KCksIFwiXFxcIj5cIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbWl0dGVyLndyaXRlKFwiPHRkIGNsYXNzPVxcXCJjb2xcIi5jb25jYXQodGFibGVyb3dsb29wLmNvbCgpLCBcIlxcXCI+XCIpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByLnJlbmRlclRlbXBsYXRlcyh0aGlzLnRlbXBsYXRlcywgY3R4LCBlbWl0dGVyKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVtaXR0ZXIud3JpdGUoJzwvdGQ+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSA1O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgIGlkeCsrLCB0YWJsZXJvd2xvb3AubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2xsZWN0aW9uLmxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1pdHRlci53cml0ZSgnPC90cj4nKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHgucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XG5cbnZhciB1bmxlc3MgPSB7XHJcbiAgICBwYXJzZTogZnVuY3Rpb24gKHRhZ1Rva2VuLCByZW1haW5Ub2tlbnMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYnJhbmNoZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmVsc2VUZW1wbGF0ZXMgPSBbXTtcclxuICAgICAgICB2YXIgcDtcclxuICAgICAgICB0aGlzLmxpcXVpZC5wYXJzZXIucGFyc2VTdHJlYW0ocmVtYWluVG9rZW5zKVxyXG4gICAgICAgICAgICAub24oJ3N0YXJ0JywgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYnJhbmNoZXMucHVzaCh7XHJcbiAgICAgICAgICAgIHByZWRpY2F0ZTogbmV3IFZhbHVlKHRhZ1Rva2VuLmFyZ3MsIF90aGlzLmxpcXVpZCksXHJcbiAgICAgICAgICAgIHRlc3Q6IGlzRmFsc3ksXHJcbiAgICAgICAgICAgIHRlbXBsYXRlczogKHAgPSBbXSlcclxuICAgICAgICB9KTsgfSlcclxuICAgICAgICAgICAgLm9uKCd0YWc6ZWxzaWYnLCBmdW5jdGlvbiAodG9rZW4pIHsgcmV0dXJuIF90aGlzLmJyYW5jaGVzLnB1c2goe1xyXG4gICAgICAgICAgICBwcmVkaWNhdGU6IG5ldyBWYWx1ZSh0b2tlbi5hcmdzLCBfdGhpcy5saXF1aWQpLFxyXG4gICAgICAgICAgICB0ZXN0OiBpc1RydXRoeSxcclxuICAgICAgICAgICAgdGVtcGxhdGVzOiAocCA9IFtdKVxyXG4gICAgICAgIH0pOyB9KVxyXG4gICAgICAgICAgICAub24oJ3RhZzplbHNlJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gKHAgPSBfdGhpcy5lbHNlVGVtcGxhdGVzKTsgfSlcclxuICAgICAgICAgICAgLm9uKCd0YWc6ZW5kdW5sZXNzJywgZnVuY3Rpb24gKCkgeyB0aGlzLnN0b3AoKTsgfSlcclxuICAgICAgICAgICAgLm9uKCd0ZW1wbGF0ZScsIGZ1bmN0aW9uICh0cGwpIHsgcmV0dXJuIHAucHVzaCh0cGwpOyB9KVxyXG4gICAgICAgICAgICAub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHsgdGhyb3cgbmV3IEVycm9yKFwidGFnIFwiLmNvbmNhdCh0YWdUb2tlbi5nZXRUZXh0KCksIFwiIG5vdCBjbG9zZWRcIikpOyB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH0sXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uIChjdHgsIGVtaXR0ZXIpIHtcclxuICAgICAgICB2YXIgciwgX2EsIF9iLCBfYywgcHJlZGljYXRlLCB0ZXN0XzEsIHRlbXBsYXRlcywgdmFsdWUsIGVfMV8xO1xyXG4gICAgICAgIHZhciBlXzEsIF9kO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2UpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfZS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHIgPSB0aGlzLmxpcXVpZC5yZW5kZXJlcjtcclxuICAgICAgICAgICAgICAgICAgICBfZS5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgX2UudHJ5cy5wdXNoKFsxLCA3LCA4LCA5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2EgPSBfX3ZhbHVlcyh0aGlzLmJyYW5jaGVzKSwgX2IgPSBfYS5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2UubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghIV9iLmRvbmUpIHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xyXG4gICAgICAgICAgICAgICAgICAgIF9jID0gX2IudmFsdWUsIHByZWRpY2F0ZSA9IF9jLnByZWRpY2F0ZSwgdGVzdF8xID0gX2MudGVzdCwgdGVtcGxhdGVzID0gX2MudGVtcGxhdGVzO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHByZWRpY2F0ZS52YWx1ZShjdHgsIGN0eC5vcHRzLmxlbmllbnRJZildO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gX2Uuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGVzdF8xKHZhbHVlLCBjdHgpKSByZXR1cm4gWzMgLypicmVhayovLCA1XTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByLnJlbmRlclRlbXBsYXRlcyh0ZW1wbGF0ZXMsIGN0eCwgZW1pdHRlcildO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgIF9lLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgX2IgPSBfYS5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDY6IHJldHVybiBbMyAvKmJyZWFrKi8sIDldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgIGVfMV8xID0gX2Uuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgOV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9iICYmICFfYi5kb25lICYmIChfZCA9IF9hLnJldHVybikpIF9kLmNhbGwoX2EpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3IC8qZW5kZmluYWxseSovXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgOTogcmV0dXJuIFs0IC8qeWllbGQqLywgci5yZW5kZXJUZW1wbGF0ZXModGhpcy5lbHNlVGVtcGxhdGVzLCBjdHgsIGVtaXR0ZXIpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Uuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xuXG52YXIgQnJlYWsgPSB7XHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uIChjdHgsIGVtaXR0ZXIpIHtcclxuICAgICAgICBlbWl0dGVyWydicmVhayddID0gdHJ1ZTtcclxuICAgIH1cclxufTtcblxudmFyIENvbnRpbnVlID0ge1xyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoY3R4LCBlbWl0dGVyKSB7XHJcbiAgICAgICAgZW1pdHRlclsnY29udGludWUnXSA9IHRydWU7XHJcbiAgICB9XHJcbn07XG5cbnZhciBlY2hvID0ge1xyXG4gICAgcGFyc2U6IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBuZXcgVmFsdWUodG9rZW4uYXJncywgdGhpcy5saXF1aWQpO1xyXG4gICAgfSxcclxuICAgIHJlbmRlcjogZnVuY3Rpb24gKGN0eCwgZW1pdHRlcikge1xyXG4gICAgICAgIHZhciB2YWw7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMudmFsdWUudmFsdWUoY3R4LCBmYWxzZSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBlbWl0dGVyLndyaXRlKHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XG5cbnZhciBsaXF1aWQgPSB7XHJcbiAgICBwYXJzZTogZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAgICAgdmFyIHRva2VuaXplciA9IG5ldyBUb2tlbml6ZXIodG9rZW4uYXJncywgdGhpcy5saXF1aWQub3B0aW9ucy5vcGVyYXRvcnNUcmllKTtcclxuICAgICAgICB2YXIgdG9rZW5zID0gdG9rZW5pemVyLnJlYWRMaXF1aWRUYWdUb2tlbnModGhpcy5saXF1aWQub3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy50cGxzID0gdGhpcy5saXF1aWQucGFyc2VyLnBhcnNlVG9rZW5zKHRva2Vucyk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoY3R4LCBlbWl0dGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMubGlxdWlkLnJlbmRlcmVyLnJlbmRlclRlbXBsYXRlcyh0aGlzLnRwbHMsIGN0eCwgZW1pdHRlcildO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcblxudmFyIHRhZ3MgPSB7XHJcbiAgICBhc3NpZ246IGFzc2lnbixcclxuICAgICdmb3InOiBGb3IsXHJcbiAgICBjYXB0dXJlOiBjYXB0dXJlLFxyXG4gICAgJ2Nhc2UnOiBDYXNlLFxyXG4gICAgY29tbWVudDogY29tbWVudCxcclxuICAgIGluY2x1ZGU6IGluY2x1ZGUsXHJcbiAgICByZW5kZXI6IHJlbmRlcixcclxuICAgIGRlY3JlbWVudDogZGVjcmVtZW50LFxyXG4gICAgaW5jcmVtZW50OiBpbmNyZW1lbnQsXHJcbiAgICBjeWNsZTogY3ljbGUsXHJcbiAgICAnaWYnOiBJZixcclxuICAgIGxheW91dDogbGF5b3V0LFxyXG4gICAgYmxvY2s6IGJsb2NrLFxyXG4gICAgcmF3OiByYXcsXHJcbiAgICB0YWJsZXJvdzogdGFibGVyb3csXHJcbiAgICB1bmxlc3M6IHVubGVzcyxcclxuICAgICdicmVhayc6IEJyZWFrLCAnY29udGludWUnOiBDb250aW51ZSxcclxuICAgIGVjaG86IGVjaG8sXHJcbiAgICBsaXF1aWQ6IGxpcXVpZFxyXG59O1xuXG52YXIgaW5kZXggPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgX19wcm90b19fOiBudWxsLFxuICAgICdkZWZhdWx0JzogdGFnc1xufSk7XG5cbnZhciBmaWx0ZXJzID0gbmV3IE1hcCgpO1xyXG5mb3JPd24oYnVpbHRpbkZpbHRlcnMsIGZ1bmN0aW9uIChjb25mLCBuYW1lKSB7XHJcbiAgICBmaWx0ZXJzLnNldChzbmFrZUNhc2UobmFtZSksIGNvbmYpO1xyXG59KTtcclxudmFyIGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgcm9vdDogWycuJ10sXHJcbiAgICBsYXlvdXRzOiBbJy4nXSxcclxuICAgIHBhcnRpYWxzOiBbJy4nXSxcclxuICAgIHJlbGF0aXZlUmVmZXJlbmNlOiB0cnVlLFxyXG4gICAgamVreWxsSW5jbHVkZTogZmFsc2UsXHJcbiAgICBjYWNoZTogdW5kZWZpbmVkLFxyXG4gICAgZXh0bmFtZTogJycsXHJcbiAgICBmczogZnMsXHJcbiAgICBkeW5hbWljUGFydGlhbHM6IHRydWUsXHJcbiAgICBqc1RydXRoeTogZmFsc2UsXHJcbiAgICB0cmltVGFnUmlnaHQ6IGZhbHNlLFxyXG4gICAgdHJpbVRhZ0xlZnQ6IGZhbHNlLFxyXG4gICAgdHJpbU91dHB1dFJpZ2h0OiBmYWxzZSxcclxuICAgIHRyaW1PdXRwdXRMZWZ0OiBmYWxzZSxcclxuICAgIGdyZWVkeTogdHJ1ZSxcclxuICAgIHRhZ0RlbGltaXRlckxlZnQ6ICd7JScsXHJcbiAgICB0YWdEZWxpbWl0ZXJSaWdodDogJyV9JyxcclxuICAgIG91dHB1dERlbGltaXRlckxlZnQ6ICd7eycsXHJcbiAgICBvdXRwdXREZWxpbWl0ZXJSaWdodDogJ319JyxcclxuICAgIHByZXNlcnZlVGltZXpvbmVzOiBmYWxzZSxcclxuICAgIHN0cmljdEZpbHRlcnM6IGZhbHNlLFxyXG4gICAgc3RyaWN0VmFyaWFibGVzOiBmYWxzZSxcclxuICAgIG93blByb3BlcnR5T25seTogZmFsc2UsXHJcbiAgICBsZW5pZW50SWY6IGZhbHNlLFxyXG4gICAgZ2xvYmFsczoge30sXHJcbiAgICBrZWVwT3V0cHV0VHlwZTogZmFsc2UsXHJcbiAgICBvcGVyYXRvcnM6IGRlZmF1bHRPcGVyYXRvcnMsXHJcbiAgICBvcGVyYXRvcnNUcmllOiBjcmVhdGVUcmllKGRlZmF1bHRPcGVyYXRvcnMpXHJcbn07XHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZShvcHRpb25zKSB7XHJcbiAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnb3BlcmF0b3JzJykpIHtcclxuICAgICAgICBvcHRpb25zLm9wZXJhdG9yc1RyaWUgPSBjcmVhdGVUcmllKG9wdGlvbnMub3BlcmF0b3JzKTtcclxuICAgIH1cclxuICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KCdyb290JykpIHtcclxuICAgICAgICBpZiAoIW9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ3BhcnRpYWxzJykpXHJcbiAgICAgICAgICAgIG9wdGlvbnMucGFydGlhbHMgPSBvcHRpb25zLnJvb3Q7XHJcbiAgICAgICAgaWYgKCFvcHRpb25zLmhhc093blByb3BlcnR5KCdsYXlvdXRzJykpXHJcbiAgICAgICAgICAgIG9wdGlvbnMubGF5b3V0cyA9IG9wdGlvbnMucm9vdDtcclxuICAgIH1cclxuICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KCdjYWNoZScpKSB7XHJcbiAgICAgICAgdmFyIGNhY2hlID0gdm9pZCAwO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5jYWNoZSA9PT0gJ251bWJlcicpXHJcbiAgICAgICAgICAgIGNhY2hlID0gb3B0aW9ucy5jYWNoZSA+IDAgPyBuZXcgTFJVKG9wdGlvbnMuY2FjaGUpIDogdW5kZWZpbmVkO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmNhY2hlID09PSAnb2JqZWN0JylcclxuICAgICAgICAgICAgY2FjaGUgPSBvcHRpb25zLmNhY2hlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgY2FjaGUgPSBvcHRpb25zLmNhY2hlID8gbmV3IExSVSgxMDI0KSA6IHVuZGVmaW5lZDtcclxuICAgICAgICBvcHRpb25zLmNhY2hlID0gY2FjaGU7XHJcbiAgICB9XHJcbiAgICBvcHRpb25zID0gX19hc3NpZ24oX19hc3NpZ24oX19hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zKSwgKG9wdGlvbnMuamVreWxsSW5jbHVkZSA/IHsgZHluYW1pY1BhcnRpYWxzOiBmYWxzZSB9IDoge30pKSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoIW9wdGlvbnMuZnMuZGlybmFtZSAmJiBvcHRpb25zLnJlbGF0aXZlUmVmZXJlbmNlKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdbTGlxdWlkSlNdIGBmcy5kaXJuYW1lYCBpcyByZXF1aXJlZCBmb3IgcmVsYXRpdmVSZWZlcmVuY2UsIHNldCByZWxhdGl2ZVJlZmVyZW5jZSB0byBgZmFsc2VgIHRvIHN1cHByZXNzIHRoaXMgd2FybmluZywgb3IgcHJvdmlkZSBpbXBsZW1lbnRhdGlvbiBmb3IgYGZzLmRpcm5hbWVgJyk7XHJcbiAgICAgICAgb3B0aW9ucy5yZWxhdGl2ZVJlZmVyZW5jZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgb3B0aW9ucy5yb290ID0gbm9ybWFsaXplRGlyZWN0b3J5TGlzdChvcHRpb25zLnJvb3QpO1xyXG4gICAgb3B0aW9ucy5wYXJ0aWFscyA9IG5vcm1hbGl6ZURpcmVjdG9yeUxpc3Qob3B0aW9ucy5wYXJ0aWFscyk7XHJcbiAgICBvcHRpb25zLmxheW91dHMgPSBub3JtYWxpemVEaXJlY3RvcnlMaXN0KG9wdGlvbnMubGF5b3V0cyk7XHJcbiAgICBvcHRpb25zLm91dHB1dEVzY2FwZSA9IG9wdGlvbnMub3V0cHV0RXNjYXBlICYmIGdldE91dHB1dEVzY2FwZUZ1bmN0aW9uKG9wdGlvbnMub3V0cHV0RXNjYXBlKTtcclxuICAgIHJldHVybiBvcHRpb25zO1xyXG59XHJcbmZ1bmN0aW9uIGdldE91dHB1dEVzY2FwZUZ1bmN0aW9uKG5hbWVPckZ1bmN0aW9uKSB7XHJcbiAgICBpZiAoaXNTdHJpbmcobmFtZU9yRnVuY3Rpb24pKSB7XHJcbiAgICAgICAgdmFyIGZpbHRlckltcGwgPSBmaWx0ZXJzLmdldChuYW1lT3JGdW5jdGlvbik7XHJcbiAgICAgICAgYXNzZXJ0KGlzRnVuY3Rpb24oZmlsdGVySW1wbCksIFwiZmlsdGVyIFxcXCJcIi5jb25jYXQobmFtZU9yRnVuY3Rpb24sIFwiXFxcIiBub3QgZm91bmRcIikpO1xyXG4gICAgICAgIHJldHVybiBmaWx0ZXJJbXBsO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYXNzZXJ0KGlzRnVuY3Rpb24obmFtZU9yRnVuY3Rpb24pLCAnYG91dHB1dEVzY2FwZWAgbmVlZCB0byBiZSBvZiB0eXBlIHN0cmluZyBvciBmdW5jdGlvbicpO1xyXG4gICAgICAgIHJldHVybiBuYW1lT3JGdW5jdGlvbjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBub3JtYWxpemVEaXJlY3RvcnlMaXN0KHZhbHVlKSB7XHJcbiAgICB2YXIgbGlzdCA9IFtdO1xyXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKVxyXG4gICAgICAgIGxpc3QgPSB2YWx1ZTtcclxuICAgIGlmIChpc1N0cmluZyh2YWx1ZSkpXHJcbiAgICAgICAgbGlzdCA9IFt2YWx1ZV07XHJcbiAgICByZXR1cm4gbGlzdDtcclxufVxuXG52YXIgQ29udGV4dCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbnRleHQoZW52LCBvcHRzLCByZW5kZXJPcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKGVudiA9PT0gdm9pZCAwKSB7IGVudiA9IHt9OyB9XHJcbiAgICAgICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgeyBvcHRzID0gZGVmYXVsdE9wdGlvbnM7IH1cclxuICAgICAgICBpZiAocmVuZGVyT3B0aW9ucyA9PT0gdm9pZCAwKSB7IHJlbmRlck9wdGlvbnMgPSB7fTsgfVxyXG4gICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogaW5zZXJ0IGEgQ29udGV4dC1sZXZlbCBlbXB0eSBzY29wZSxcclxuICAgICAgICAgKiBmb3IgdGFncyBsaWtlIGB7JSBjYXB0dXJlICV9YCBgeyUgYXNzaWduICV9YCB0byBvcGVyYXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5zY29wZXMgPSBbe31dO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJzID0ge307XHJcbiAgICAgICAgdGhpcy5zeW5jID0gISFyZW5kZXJPcHRpb25zLnN5bmM7XHJcbiAgICAgICAgdGhpcy5vcHRzID0gb3B0cztcclxuICAgICAgICB0aGlzLmdsb2JhbHMgPSAoX2EgPSByZW5kZXJPcHRpb25zLmdsb2JhbHMpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG9wdHMuZ2xvYmFscztcclxuICAgICAgICB0aGlzLmVudmlyb25tZW50cyA9IGVudjtcclxuICAgICAgICB0aGlzLnN0cmljdFZhcmlhYmxlcyA9IChfYiA9IHJlbmRlck9wdGlvbnMuc3RyaWN0VmFyaWFibGVzKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiB0aGlzLm9wdHMuc3RyaWN0VmFyaWFibGVzO1xyXG4gICAgfVxyXG4gICAgQ29udGV4dC5wcm90b3R5cGUuZ2V0UmVnaXN0ZXIgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnJlZ2lzdGVyc1trZXldID0gdGhpcy5yZWdpc3RlcnNba2V5XSB8fCB7fSk7XHJcbiAgICB9O1xyXG4gICAgQ29udGV4dC5wcm90b3R5cGUuc2V0UmVnaXN0ZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5yZWdpc3RlcnNba2V5XSA9IHZhbHVlKTtcclxuICAgIH07XHJcbiAgICBDb250ZXh0LnByb3RvdHlwZS5zYXZlUmVnaXN0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIga2V5cyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGtleXNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGtleXMubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIFtrZXksIF90aGlzLmdldFJlZ2lzdGVyKGtleSldOyB9KTtcclxuICAgIH07XHJcbiAgICBDb250ZXh0LnByb3RvdHlwZS5yZXN0b3JlUmVnaXN0ZXIgPSBmdW5jdGlvbiAoa2V5VmFsdWVzKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICByZXR1cm4ga2V5VmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHZhciBfYiA9IF9fcmVhZChfYSwgMiksIGtleSA9IF9iWzBdLCB2YWx1ZSA9IF9iWzFdO1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuc2V0UmVnaXN0ZXIoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgQ29udGV4dC5wcm90b3R5cGUuZ2V0QWxsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX3NwcmVhZEFycmF5KFt0aGlzLmdsb2JhbHMsIHRoaXMuZW52aXJvbm1lbnRzXSwgX19yZWFkKHRoaXMuc2NvcGVzKSwgZmFsc2UpLnJlZHVjZShmdW5jdGlvbiAoY3R4LCB2YWwpIHsgcmV0dXJuIF9fYXNzaWduKGN0eCwgdmFsKTsgfSwge30pO1xyXG4gICAgfTtcclxuICAgIENvbnRleHQucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChwYXRocykge1xyXG4gICAgICAgIHZhciBzY29wZSA9IHRoaXMuZmluZFNjb3BlKHBhdGhzWzBdKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRGcm9tU2NvcGUoc2NvcGUsIHBhdGhzKTtcclxuICAgIH07XHJcbiAgICBDb250ZXh0LnByb3RvdHlwZS5nZXRGcm9tU2NvcGUgPSBmdW5jdGlvbiAoc2NvcGUsIHBhdGhzKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAoaXNTdHJpbmcocGF0aHMpKVxyXG4gICAgICAgICAgICBwYXRocyA9IHBhdGhzLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgcmV0dXJuIHBhdGhzLnJlZHVjZShmdW5jdGlvbiAoc2NvcGUsIHBhdGgsIGkpIHtcclxuICAgICAgICAgICAgc2NvcGUgPSByZWFkUHJvcGVydHkoc2NvcGUsIHBhdGgsIF90aGlzLm9wdHMub3duUHJvcGVydHlPbmx5KTtcclxuICAgICAgICAgICAgaWYgKGlzTmlsKHNjb3BlKSAmJiBfdGhpcy5zdHJpY3RWYXJpYWJsZXMpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBJbnRlcm5hbFVuZGVmaW5lZFZhcmlhYmxlRXJyb3IocGF0aHMuc2xpY2UoMCwgaSArIDEpLmpvaW4oJy4nKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHNjb3BlO1xyXG4gICAgICAgIH0sIHNjb3BlKTtcclxuICAgIH07XHJcbiAgICBDb250ZXh0LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjb3Blcy5wdXNoKGN0eCk7XHJcbiAgICB9O1xyXG4gICAgQ29udGV4dC5wcm90b3R5cGUucG9wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjb3Blcy5wb3AoKTtcclxuICAgIH07XHJcbiAgICBDb250ZXh0LnByb3RvdHlwZS5ib3R0b20gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGVzWzBdO1xyXG4gICAgfTtcclxuICAgIENvbnRleHQucHJvdG90eXBlLmZpbmRTY29wZSA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5zY29wZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHRoaXMuc2NvcGVzW2ldO1xyXG4gICAgICAgICAgICBpZiAoa2V5IGluIGNhbmRpZGF0ZSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBjYW5kaWRhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrZXkgaW4gdGhpcy5lbnZpcm9ubWVudHMpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVudmlyb25tZW50cztcclxuICAgICAgICByZXR1cm4gdGhpcy5nbG9iYWxzO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDb250ZXh0O1xyXG59KCkpO1xyXG5mdW5jdGlvbiByZWFkUHJvcGVydHkob2JqLCBrZXksIG93blByb3BlcnR5T25seSkge1xyXG4gICAgaWYgKGlzTmlsKG9iaikpXHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIG9iaiA9IHRvTGlxdWlkKG9iaik7XHJcbiAgICBpZiAoaXNBcnJheShvYmopICYmIGtleSA8IDApXHJcbiAgICAgICAgcmV0dXJuIG9ialtvYmoubGVuZ3RoICsgK2tleV07XHJcbiAgICB2YXIganNQcm9wZXJ0eSA9IHJlYWRKU1Byb3BlcnR5KG9iaiwga2V5LCBvd25Qcm9wZXJ0eU9ubHkpO1xyXG4gICAgaWYgKGpzUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBvYmogaW5zdGFuY2VvZiBEcm9wKVxyXG4gICAgICAgIHJldHVybiBvYmoubGlxdWlkTWV0aG9kTWlzc2luZyhrZXkpO1xyXG4gICAgaWYgKGlzRnVuY3Rpb24oanNQcm9wZXJ0eSkpXHJcbiAgICAgICAgcmV0dXJuIGpzUHJvcGVydHkuY2FsbChvYmopO1xyXG4gICAgaWYgKGtleSA9PT0gJ3NpemUnKVxyXG4gICAgICAgIHJldHVybiByZWFkU2l6ZShvYmopO1xyXG4gICAgZWxzZSBpZiAoa2V5ID09PSAnZmlyc3QnKVxyXG4gICAgICAgIHJldHVybiByZWFkRmlyc3Qob2JqKTtcclxuICAgIGVsc2UgaWYgKGtleSA9PT0gJ2xhc3QnKVxyXG4gICAgICAgIHJldHVybiByZWFkTGFzdChvYmopO1xyXG4gICAgcmV0dXJuIGpzUHJvcGVydHk7XHJcbn1cclxuZnVuY3Rpb24gcmVhZEpTUHJvcGVydHkob2JqLCBrZXksIG93blByb3BlcnR5T25seSkge1xyXG4gICAgaWYgKG93blByb3BlcnR5T25seSAmJiAhT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICByZXR1cm4gb2JqW2tleV07XHJcbn1cclxuZnVuY3Rpb24gcmVhZEZpcnN0KG9iaikge1xyXG4gICAgaWYgKGlzQXJyYXkob2JqKSlcclxuICAgICAgICByZXR1cm4gb2JqWzBdO1xyXG4gICAgcmV0dXJuIG9ialsnZmlyc3QnXTtcclxufVxyXG5mdW5jdGlvbiByZWFkTGFzdChvYmopIHtcclxuICAgIGlmIChpc0FycmF5KG9iaikpXHJcbiAgICAgICAgcmV0dXJuIG9ialtvYmoubGVuZ3RoIC0gMV07XHJcbiAgICByZXR1cm4gb2JqWydsYXN0J107XHJcbn1cclxuZnVuY3Rpb24gcmVhZFNpemUob2JqKSB7XHJcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KCdzaXplJykgfHwgb2JqWydzaXplJ10gIT09IHVuZGVmaW5lZClcclxuICAgICAgICByZXR1cm4gb2JqWydzaXplJ107XHJcbiAgICBpZiAoaXNBcnJheShvYmopIHx8IGlzU3RyaW5nKG9iaikpXHJcbiAgICAgICAgcmV0dXJuIG9iai5sZW5ndGg7XHJcbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpXHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoO1xyXG59XG5cbnZhciBMb29rdXBUeXBlO1xyXG4oZnVuY3Rpb24gKExvb2t1cFR5cGUpIHtcclxuICAgIExvb2t1cFR5cGVbXCJQYXJ0aWFsc1wiXSA9IFwicGFydGlhbHNcIjtcclxuICAgIExvb2t1cFR5cGVbXCJMYXlvdXRzXCJdID0gXCJsYXlvdXRzXCI7XHJcbiAgICBMb29rdXBUeXBlW1wiUm9vdFwiXSA9IFwicm9vdFwiO1xyXG59KShMb29rdXBUeXBlIHx8IChMb29rdXBUeXBlID0ge30pKTtcclxudmFyIExvYWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIExvYWRlcihvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICBpZiAob3B0aW9ucy5yZWxhdGl2ZVJlZmVyZW5jZSkge1xyXG4gICAgICAgICAgICB2YXIgc2VwID0gb3B0aW9ucy5mcy5zZXA7XHJcbiAgICAgICAgICAgIGFzc2VydChzZXAsICdgZnMuc2VwYCBpcyByZXF1aXJlZCBmb3IgcmVsYXRpdmUgcmVmZXJlbmNlJyk7XHJcbiAgICAgICAgICAgIHZhciByUmVsYXRpdmVQYXRoXzEgPSBuZXcgUmVnRXhwKFsnLicgKyBzZXAsICcuLicgKyBzZXAsICcuLycsICcuLi8nXS5tYXAoZnVuY3Rpb24gKHByZWZpeCkgeyByZXR1cm4gZXNjYXBlUmVnZXgocHJlZml4KTsgfSkuam9pbignfCcpKTtcclxuICAgICAgICAgICAgdGhpcy5zaG91bGRMb2FkUmVsYXRpdmUgPSBmdW5jdGlvbiAocmVmZXJlbmNlZEZpbGUpIHsgcmV0dXJuIHJSZWxhdGl2ZVBhdGhfMS50ZXN0KHJlZmVyZW5jZWRGaWxlKTsgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvdWxkTG9hZFJlbGF0aXZlID0gZnVuY3Rpb24gKHJlZmVyZW5jZWRGaWxlKSB7IHJldHVybiBmYWxzZTsgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb250YWlucyA9IHRoaXMub3B0aW9ucy5mcy5jb250YWlucyB8fCAoZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfSk7XHJcbiAgICB9XHJcbiAgICBMb2FkZXIucHJvdG90eXBlLmxvb2t1cCA9IGZ1bmN0aW9uIChmaWxlLCB0eXBlLCBzeW5jLCBjdXJyZW50RmlsZSkge1xyXG4gICAgICAgIHZhciBmcywgZGlycywgX2EsIF9iLCBmaWxlcGF0aCwgX2MsIGVfMV8xO1xyXG4gICAgICAgIHZhciBlXzEsIF9kO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2UpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfZS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGZzID0gdGhpcy5vcHRpb25zLmZzO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpcnMgPSB0aGlzLm9wdGlvbnNbdHlwZV07XHJcbiAgICAgICAgICAgICAgICAgICAgX2UubGFiZWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIF9lLnRyeXMucHVzaChbMSwgOCwgOSwgMTBdKTtcclxuICAgICAgICAgICAgICAgICAgICBfYSA9IF9fdmFsdWVzKHRoaXMuY2FuZGlkYXRlcyhmaWxlLCBkaXJzLCBjdXJyZW50RmlsZSwgdHlwZSAhPT0gTG9va3VwVHlwZS5Sb290KSksIF9iID0gX2EubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9lLmxhYmVsID0gMjtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISFfYi5kb25lKSByZXR1cm4gWzMgLypicmVhayovLCA3XTtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlcGF0aCA9IF9iLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghc3luYykgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICAgICAgX2MgPSBmcy5leGlzdHNTeW5jKGZpbGVwYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFs0IC8qeWllbGQqLywgZnMuZXhpc3RzKGZpbGVwYXRoKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgX2MgPSBfZS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2UubGFiZWwgPSA1O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfYylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZpbGVwYXRoXTtcclxuICAgICAgICAgICAgICAgICAgICBfZS5sYWJlbCA9IDY7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgX2IgPSBfYS5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IHJldHVybiBbMyAvKmJyZWFrKi8sIDEwXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgICAgICBlXzFfMSA9IF9lLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBlXzEgPSB7IGVycm9yOiBlXzFfMSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDEwXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2IgJiYgIV9iLmRvbmUgJiYgKF9kID0gX2EucmV0dXJuKSkgX2QuY2FsbChfYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzcgLyplbmRmaW5hbGx5Ki9dO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxMDogdGhyb3cgdGhpcy5sb29rdXBFcnJvcihmaWxlLCBkaXJzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIExvYWRlci5wcm90b3R5cGUuY2FuZGlkYXRlcyA9IGZ1bmN0aW9uIChmaWxlLCBkaXJzLCBjdXJyZW50RmlsZSwgZW5mb3JjZVJvb3QpIHtcclxuICAgICAgICB2YXIgX2EsIGZzLCBleHRuYW1lLCByZWZlcmVuY2VkLCBkaXJzXzEsIGRpcnNfMV8xLCBkaXIsIGVfMl8xLCBkaXJzXzIsIGRpcnNfMl8xLCBkaXIsIHJlZmVyZW5jZWQsIGVfM18xLCBmaWxlcGF0aDtcclxuICAgICAgICB2YXIgZV8yLCBfYiwgZV8zLCBfYztcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9kKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2QubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBfYSA9IHRoaXMub3B0aW9ucywgZnMgPSBfYS5mcywgZXh0bmFtZSA9IF9hLmV4dG5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodGhpcy5zaG91bGRMb2FkUmVsYXRpdmUoZmlsZSkgJiYgY3VycmVudEZpbGUpKSByZXR1cm4gWzMgLypicmVhayovLCA4XTtcclxuICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2VkID0gZnMucmVzb2x2ZSh0aGlzLmRpcm5hbWUoY3VycmVudEZpbGUpLCBmaWxlLCBleHRuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBfZC5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgX2QudHJ5cy5wdXNoKFsxLCA2LCA3LCA4XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlyc18xID0gX192YWx1ZXMoZGlycyksIGRpcnNfMV8xID0gZGlyc18xLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBfZC5sYWJlbCA9IDI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhZGlyc18xXzEuZG9uZSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XHJcbiAgICAgICAgICAgICAgICAgICAgZGlyID0gZGlyc18xXzEudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoIWVuZm9yY2VSb290IHx8IHRoaXMuY29udGFpbnMoZGlyLCByZWZlcmVuY2VkKSkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSByZWxhdGl2ZWx5IHJlZmVyZW5jZWQgZmlsZSBpcyB3aXRoaW4gb25lIG9mIHJvb3QgZGlyc1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlZmVyZW5jZWRdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSByZWxhdGl2ZWx5IHJlZmVyZW5jZWQgZmlsZSBpcyB3aXRoaW4gb25lIG9mIHJvb3QgZGlyc1xyXG4gICAgICAgICAgICAgICAgICAgIF9kLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICBkaXJzXzFfMSA9IGRpcnNfMS5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbMyAvKmJyZWFrKi8sIDhdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgIGVfMl8xID0gX2Quc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVfMiA9IHsgZXJyb3I6IGVfMl8xIH07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgOF07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpcnNfMV8xICYmICFkaXJzXzFfMS5kb25lICYmIChfYiA9IGRpcnNfMS5yZXR1cm4pKSBfYi5jYWxsKGRpcnNfMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7IH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzcgLyplbmRmaW5hbGx5Ki9dO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAgIF9kLnRyeXMucHVzaChbOCwgMTMsIDE0LCAxNV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpcnNfMiA9IF9fdmFsdWVzKGRpcnMpLCBkaXJzXzJfMSA9IGRpcnNfMi5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2QubGFiZWwgPSA5O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghIWRpcnNfMl8xLmRvbmUpIHJldHVybiBbMyAvKmJyZWFrKi8sIDEyXTtcclxuICAgICAgICAgICAgICAgICAgICBkaXIgPSBkaXJzXzJfMS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2VkID0gZnMucmVzb2x2ZShkaXIsIGZpbGUsIGV4dG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKCFlbmZvcmNlUm9vdCB8fCB0aGlzLmNvbnRhaW5zKGRpciwgcmVmZXJlbmNlZCkpKSByZXR1cm4gWzMgLypicmVhayovLCAxMV07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVmZXJlbmNlZF07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICAgICAgICAgIF9kLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBfZC5sYWJlbCA9IDExO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxMTpcclxuICAgICAgICAgICAgICAgICAgICBkaXJzXzJfMSA9IGRpcnNfMi5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgOV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDEyOiByZXR1cm4gWzMgLypicmVhayovLCAxNV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDEzOlxyXG4gICAgICAgICAgICAgICAgICAgIGVfM18xID0gX2Quc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVfMyA9IHsgZXJyb3I6IGVfM18xIH07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMTVdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxNDpcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlyc18yXzEgJiYgIWRpcnNfMl8xLmRvbmUgJiYgKF9jID0gZGlyc18yLnJldHVybikpIF9jLmNhbGwoZGlyc18yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzMpIHRocm93IGVfMy5lcnJvcjsgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNyAvKmVuZGZpbmFsbHkqL107XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE1OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKGZzLmZhbGxiYWNrICE9PSB1bmRlZmluZWQpKSByZXR1cm4gWzMgLypicmVhayovLCAxN107XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZXBhdGggPSBmcy5mYWxsYmFjayhmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIShmaWxlcGF0aCAhPT0gdW5kZWZpbmVkKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMTddO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZpbGVwYXRoXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTY6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Quc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9kLmxhYmVsID0gMTc7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE3OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBMb2FkZXIucHJvdG90eXBlLmRpcm5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xyXG4gICAgICAgIHZhciBmcyA9IHRoaXMub3B0aW9ucy5mcztcclxuICAgICAgICBhc3NlcnQoZnMuZGlybmFtZSwgJ2Bmcy5kaXJuYW1lYCBpcyByZXF1aXJlZCBmb3IgcmVsYXRpdmUgcmVmZXJlbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIGZzLmRpcm5hbWUocGF0aCk7XHJcbiAgICB9O1xyXG4gICAgTG9hZGVyLnByb3RvdHlwZS5sb29rdXBFcnJvciA9IGZ1bmN0aW9uIChmaWxlLCByb290cykge1xyXG4gICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ0VOT0VOVCcpO1xyXG4gICAgICAgIGVyci5tZXNzYWdlID0gXCJFTk9FTlQ6IEZhaWxlZCB0byBsb29rdXAgXFxcIlwiLmNvbmNhdChmaWxlLCBcIlxcXCIgaW4gXFxcIlwiKS5jb25jYXQocm9vdHMsIFwiXFxcIlwiKTtcclxuICAgICAgICBlcnIuY29kZSA9ICdFTk9FTlQnO1xyXG4gICAgICAgIHJldHVybiBlcnI7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIExvYWRlcjtcclxufSgpKTtcblxudmFyIFNpbXBsZUVtaXR0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTaW1wbGVFbWl0dGVyKCkge1xyXG4gICAgICAgIHRoaXMuYnVmZmVyID0gJyc7XHJcbiAgICB9XHJcbiAgICBTaW1wbGVFbWl0dGVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgdGhpcy5idWZmZXIgKz0gc3RyaW5naWZ5KGh0bWwpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTaW1wbGVFbWl0dGVyO1xyXG59KCkpO1xuXG52YXIgU3RyZWFtZWRFbWl0dGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU3RyZWFtZWRFbWl0dGVyKCkge1xyXG4gICAgICAgIHRoaXMuYnVmZmVyID0gJyc7XHJcbiAgICAgICAgdGhpcy5zdHJlYW0gPSBudWxsO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignc3RyZWFtaW5nIG5vdCBzdXBwb3J0ZWQgaW4gYnJvd3NlcicpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFN0cmVhbWVkRW1pdHRlcjtcclxufSgpKTtcblxudmFyIEtlZXBpbmdUeXBlRW1pdHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEtlZXBpbmdUeXBlRW1pdHRlcigpIHtcclxuICAgICAgICB0aGlzLmJ1ZmZlciA9ICcnO1xyXG4gICAgfVxyXG4gICAgS2VlcGluZ1R5cGVFbWl0dGVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgaHRtbCA9IHRvVmFsdWUkMShodG1sKTtcclxuICAgICAgICAvLyBUaGlzIHdpbGwgb25seSBwcmVzZXJ2ZSB0aGUgdHlwZSBpZiB0aGUgdmFsdWUgaXMgaXNvbGF0ZWQuXHJcbiAgICAgICAgLy8gSS5FOlxyXG4gICAgICAgIC8vIHt7IG15LXBvcnQgfX0gLT4gNDJcclxuICAgICAgICAvLyB7eyBteS1ob3N0IH19Ont7IG15LXBvcnQgfX0gLT4gJ2hvc3Q6NDInXHJcbiAgICAgICAgaWYgKHR5cGVvZiBodG1sICE9PSAnc3RyaW5nJyAmJiB0aGlzLmJ1ZmZlciA9PT0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy5idWZmZXIgPSBodG1sO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5idWZmZXIgPSBzdHJpbmdpZnkodGhpcy5idWZmZXIpICsgc3RyaW5naWZ5KGh0bWwpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gS2VlcGluZ1R5cGVFbWl0dGVyO1xyXG59KCkpO1xuXG52YXIgUmVuZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVuZGVyKCkge1xyXG4gICAgfVxyXG4gICAgUmVuZGVyLnByb3RvdHlwZS5yZW5kZXJUZW1wbGF0ZXNUb05vZGVTdHJlYW0gPSBmdW5jdGlvbiAodGVtcGxhdGVzLCBjdHgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBlbWl0dGVyID0gbmV3IFN0cmVhbWVkRW1pdHRlcigpO1xyXG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gdG9UaGVuYWJsZShfdGhpcy5yZW5kZXJUZW1wbGF0ZXModGVtcGxhdGVzLCBjdHgsIGVtaXR0ZXIpKTsgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gZW1pdHRlci5lbmQoKTsgfSwgZnVuY3Rpb24gKGVycikgeyByZXR1cm4gZW1pdHRlci5lcnJvcihlcnIpOyB9KTtcclxuICAgICAgICByZXR1cm4gZW1pdHRlci5zdHJlYW07XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyLnByb3RvdHlwZS5yZW5kZXJUZW1wbGF0ZXMgPSBmdW5jdGlvbiAodGVtcGxhdGVzLCBjdHgsIGVtaXR0ZXIpIHtcclxuICAgICAgICB2YXIgdGVtcGxhdGVzXzEsIHRlbXBsYXRlc18xXzEsIHRwbCwgaHRtbCwgZV8xLCBlcnIsIGVfMl8xO1xyXG4gICAgICAgIHZhciBlXzIsIF9hO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZW1pdHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWl0dGVyID0gY3R4Lm9wdHMua2VlcE91dHB1dFR5cGUgPyBuZXcgS2VlcGluZ1R5cGVFbWl0dGVyKCkgOiBuZXcgU2ltcGxlRW1pdHRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFsxLCA4LCA5LCAxMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlc18xID0gX192YWx1ZXModGVtcGxhdGVzKSwgdGVtcGxhdGVzXzFfMSA9IHRlbXBsYXRlc18xLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhdGVtcGxhdGVzXzFfMS5kb25lKSByZXR1cm4gWzMgLypicmVhayovLCA3XTtcclxuICAgICAgICAgICAgICAgICAgICB0cGwgPSB0ZW1wbGF0ZXNfMV8xLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzMsIDUsICwgNl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRwbC5yZW5kZXIoY3R4LCBlbWl0dGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBub3QsIGl0J2xsIHJldHVybiBhbiBgaHRtbGAsIHdyaXRlIHRvIHRoZSBlbWl0dGVyIGZvciBpdFxyXG4gICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbCA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiBub3QsIGl0J2xsIHJldHVybiBhbiBgaHRtbGAsIHdyaXRlIHRvIHRoZSBlbWl0dGVyIGZvciBpdFxyXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgJiYgZW1pdHRlci53cml0ZShodG1sKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZW1pdHRlclsnYnJlYWsnXSB8fCBlbWl0dGVyWydjb250aW51ZSddKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA3XTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA2XTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICBlXzEgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyID0gUmVuZGVyRXJyb3IuaXMoZV8xKSA/IGVfMSA6IG5ldyBSZW5kZXJFcnJvcihlXzEsIHRwbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlc18xXzEgPSB0ZW1wbGF0ZXNfMS5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IHJldHVybiBbMyAvKmJyZWFrKi8sIDEwXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgICAgICBlXzJfMSA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBlXzIgPSB7IGVycm9yOiBlXzJfMSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDEwXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGVtcGxhdGVzXzFfMSAmJiAhdGVtcGxhdGVzXzFfMS5kb25lICYmIChfYSA9IHRlbXBsYXRlc18xLnJldHVybikpIF9hLmNhbGwodGVtcGxhdGVzXzEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3IC8qZW5kZmluYWxseSovXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTA6IHJldHVybiBbMiAvKnJldHVybiovLCBlbWl0dGVyLmJ1ZmZlcl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVuZGVyO1xyXG59KCkpO1xuXG52YXIgVGVtcGxhdGVJbXBsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVGVtcGxhdGVJbXBsKHRva2VuKSB7XHJcbiAgICAgICAgdGhpcy50b2tlbiA9IHRva2VuO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFRlbXBsYXRlSW1wbDtcclxufSgpKTtcblxudmFyIFRhZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhUYWcsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBUYWcodG9rZW4sIHRva2VucywgbGlxdWlkKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdG9rZW4pIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMubmFtZSA9IHRva2VuLm5hbWU7XHJcbiAgICAgICAgdmFyIGltcGwgPSBsaXF1aWQudGFncy5nZXQodG9rZW4ubmFtZSk7XHJcbiAgICAgICAgX3RoaXMuaW1wbCA9IE9iamVjdC5jcmVhdGUoaW1wbCk7XHJcbiAgICAgICAgX3RoaXMuaW1wbC5saXF1aWQgPSBsaXF1aWQ7XHJcbiAgICAgICAgaWYgKF90aGlzLmltcGwucGFyc2UpIHtcclxuICAgICAgICAgICAgX3RoaXMuaW1wbC5wYXJzZSh0b2tlbiwgdG9rZW5zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgVGFnLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoY3R4LCBlbWl0dGVyKSB7XHJcbiAgICAgICAgdmFyIGhhc2gsIGltcGw7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIG5ldyBIYXNoKHRoaXMudG9rZW4uYXJncykucmVuZGVyKGN0eCldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIGhhc2ggPSAoX2Euc2VudCgpKTtcclxuICAgICAgICAgICAgICAgICAgICBpbXBsID0gdGhpcy5pbXBsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNGdW5jdGlvbihpbXBsLnJlbmRlcikpIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGltcGwucmVuZGVyKGN0eCwgZW1pdHRlciwgaGFzaCldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRhZztcclxufShUZW1wbGF0ZUltcGwpKTtcblxudmFyIE91dHB1dCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhPdXRwdXQsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBPdXRwdXQodG9rZW4sIGxpcXVpZCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRva2VuKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnZhbHVlID0gbmV3IFZhbHVlKHRva2VuLmNvbnRlbnQsIGxpcXVpZCk7XHJcbiAgICAgICAgdmFyIGZpbHRlcnMgPSBfdGhpcy52YWx1ZS5maWx0ZXJzO1xyXG4gICAgICAgIHZhciBvdXRwdXRFc2NhcGUgPSBsaXF1aWQub3B0aW9ucy5vdXRwdXRFc2NhcGU7XHJcbiAgICAgICAgaWYgKGZpbHRlcnMubGVuZ3RoICYmIGZpbHRlcnNbZmlsdGVycy5sZW5ndGggLSAxXS5uYW1lID09PSAncmF3Jykge1xyXG4gICAgICAgICAgICBmaWx0ZXJzLnBvcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChvdXRwdXRFc2NhcGUpIHtcclxuICAgICAgICAgICAgZmlsdGVycy5wdXNoKG5ldyBGaWx0ZXIodG9TdHJpbmcuY2FsbChvdXRwdXRFc2NhcGUpLCBvdXRwdXRFc2NhcGUsIFtdLCBsaXF1aWQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgT3V0cHV0LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoY3R4LCBlbWl0dGVyKSB7XHJcbiAgICAgICAgdmFyIHZhbDtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy52YWx1ZS52YWx1ZShjdHgsIGZhbHNlKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVtaXR0ZXIud3JpdGUodmFsKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gT3V0cHV0O1xyXG59KFRlbXBsYXRlSW1wbCkpO1xuXG52YXIgSFRNTCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhIVE1MLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gSFRNTCh0b2tlbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRva2VuKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnN0ciA9IHRva2VuLmdldENvbnRlbnQoKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBIVE1MLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoY3R4LCBlbWl0dGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBlbWl0dGVyLndyaXRlKHRoaXMuc3RyKTtcclxuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBIVE1MO1xyXG59KFRlbXBsYXRlSW1wbCkpO1xuXG52YXIgUGFyc2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUGFyc2VyKGxpcXVpZCkge1xyXG4gICAgICAgIHRoaXMubGlxdWlkID0gbGlxdWlkO1xyXG4gICAgICAgIHRoaXMuY2FjaGUgPSB0aGlzLmxpcXVpZC5vcHRpb25zLmNhY2hlO1xyXG4gICAgICAgIHRoaXMuZnMgPSB0aGlzLmxpcXVpZC5vcHRpb25zLmZzO1xyXG4gICAgICAgIHRoaXMucGFyc2VGaWxlID0gdGhpcy5jYWNoZSA/IHRoaXMuX3BhcnNlRmlsZUNhY2hlZCA6IHRoaXMuX3BhcnNlRmlsZTtcclxuICAgICAgICB0aGlzLmxvYWRlciA9IG5ldyBMb2FkZXIodGhpcy5saXF1aWQub3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBQYXJzZXIucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKGh0bWwsIGZpbGVwYXRoKSB7XHJcbiAgICAgICAgdmFyIHRva2VuaXplciA9IG5ldyBUb2tlbml6ZXIoaHRtbCwgdGhpcy5saXF1aWQub3B0aW9ucy5vcGVyYXRvcnNUcmllLCBmaWxlcGF0aCk7XHJcbiAgICAgICAgdmFyIHRva2VucyA9IHRva2VuaXplci5yZWFkVG9wTGV2ZWxUb2tlbnModGhpcy5saXF1aWQub3B0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VUb2tlbnModG9rZW5zKTtcclxuICAgIH07XHJcbiAgICBQYXJzZXIucHJvdG90eXBlLnBhcnNlVG9rZW5zID0gZnVuY3Rpb24gKHRva2Vucykge1xyXG4gICAgICAgIHZhciB0b2tlbjtcclxuICAgICAgICB2YXIgdGVtcGxhdGVzID0gW107XHJcbiAgICAgICAgd2hpbGUgKCh0b2tlbiA9IHRva2Vucy5zaGlmdCgpKSkge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZXMucHVzaCh0aGlzLnBhcnNlVG9rZW4odG9rZW4sIHRva2VucykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGVtcGxhdGVzO1xyXG4gICAgfTtcclxuICAgIFBhcnNlci5wcm90b3R5cGUucGFyc2VUb2tlbiA9IGZ1bmN0aW9uICh0b2tlbiwgcmVtYWluVG9rZW5zKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGlzVGFnVG9rZW4odG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRhZyh0b2tlbiwgcmVtYWluVG9rZW5zLCB0aGlzLmxpcXVpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzT3V0cHV0VG9rZW4odG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE91dHB1dCh0b2tlbiwgdGhpcy5saXF1aWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgSFRNTCh0b2tlbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBQYXJzZUVycm9yKGUsIHRva2VuKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUGFyc2VyLnByb3RvdHlwZS5wYXJzZVN0cmVhbSA9IGZ1bmN0aW9uICh0b2tlbnMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBuZXcgUGFyc2VTdHJlYW0odG9rZW5zLCBmdW5jdGlvbiAodG9rZW4sIHRva2VucykgeyByZXR1cm4gX3RoaXMucGFyc2VUb2tlbih0b2tlbiwgdG9rZW5zKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgUGFyc2VyLnByb3RvdHlwZS5fcGFyc2VGaWxlQ2FjaGVkID0gZnVuY3Rpb24gKGZpbGUsIHN5bmMsIHR5cGUsIGN1cnJlbnRGaWxlKSB7XHJcbiAgICAgICAgdmFyIGtleSwgdHBscywgdGFzaztcclxuICAgICAgICBpZiAodHlwZSA9PT0gdm9pZCAwKSB7IHR5cGUgPSBMb29rdXBUeXBlLlJvb3Q7IH1cclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBrZXkgPSB0aGlzLmxvYWRlci5zaG91bGRMb2FkUmVsYXRpdmUoZmlsZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBjdXJyZW50RmlsZSArICcsJyArIGZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0eXBlICsgJzonICsgZmlsZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmNhY2hlLnJlYWQoa2V5KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgdHBscyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHBscylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRwbHNdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2sgPSB0b1RoZW5hYmxlKHRoaXMuX3BhcnNlRmlsZShmaWxlLCBzeW5jLCB0eXBlLCBjdXJyZW50RmlsZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUud3JpdGUoa2V5LCB0YXNrKTtcclxuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsyLCA0LCAsIDVdKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0YXNrXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBjYWNoZWQgdGFzayBpZiBmYWlsZWRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnJlbW92ZShrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gWzIgLypyZXR1cm4qLywgW11dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgUGFyc2VyLnByb3RvdHlwZS5fcGFyc2VGaWxlID0gZnVuY3Rpb24gKGZpbGUsIHN5bmMsIHR5cGUsIGN1cnJlbnRGaWxlKSB7XHJcbiAgICAgICAgdmFyIGZpbGVwYXRoLCBfYSwgX2IsIF9jO1xyXG4gICAgICAgIGlmICh0eXBlID09PSB2b2lkIDApIHsgdHlwZSA9IExvb2t1cFR5cGUuUm9vdDsgfVxyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2QpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfZC5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmxvYWRlci5sb29rdXAoZmlsZSwgdHlwZSwgc3luYywgY3VycmVudEZpbGUpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBmaWxlcGF0aCA9IF9kLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBfYiA9IChfYSA9IHRoaXMubGlxdWlkKS5wYXJzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXN5bmMpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgIF9jID0gdGhpcy5mcy5yZWFkRmlsZVN5bmMoZmlsZXBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmZzLnJlYWRGaWxlKGZpbGVwYXRoKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgX2MgPSBfZC5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2QubGFiZWwgPSA0O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2IuYXBwbHkoX2EsIFtfYywgZmlsZXBhdGhdKV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUGFyc2VyO1xyXG59KCkpO1xuXG52YXIgVGFnTWFwID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVGFnTWFwKCkge1xyXG4gICAgICAgIHRoaXMuaW1wbHMgPSB7fTtcclxuICAgIH1cclxuICAgIFRhZ01hcC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICB2YXIgaW1wbCA9IHRoaXMuaW1wbHNbbmFtZV07XHJcbiAgICAgICAgYXNzZXJ0KGltcGwsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwidGFnIFxcXCJcIi5jb25jYXQobmFtZSwgXCJcXFwiIG5vdCBmb3VuZFwiKTsgfSk7XHJcbiAgICAgICAgcmV0dXJuIGltcGw7XHJcbiAgICB9O1xyXG4gICAgVGFnTWFwLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAobmFtZSwgaW1wbCkge1xyXG4gICAgICAgIHRoaXMuaW1wbHNbbmFtZV0gPSBpbXBsO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUYWdNYXA7XHJcbn0oKSk7XG5cbnZhciBGaWx0ZXJNYXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBGaWx0ZXJNYXAoc3RyaWN0RmlsdGVycywgbGlxdWlkKSB7XHJcbiAgICAgICAgdGhpcy5zdHJpY3RGaWx0ZXJzID0gc3RyaWN0RmlsdGVycztcclxuICAgICAgICB0aGlzLmxpcXVpZCA9IGxpcXVpZDtcclxuICAgICAgICB0aGlzLmltcGxzID0ge307XHJcbiAgICB9XHJcbiAgICBGaWx0ZXJNYXAucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgdmFyIGltcGwgPSB0aGlzLmltcGxzW25hbWVdO1xyXG4gICAgICAgIGFzc2VydChpbXBsIHx8ICF0aGlzLnN0cmljdEZpbHRlcnMsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwidW5kZWZpbmVkIGZpbHRlcjogXCIuY29uY2F0KG5hbWUpOyB9KTtcclxuICAgICAgICByZXR1cm4gaW1wbDtcclxuICAgIH07XHJcbiAgICBGaWx0ZXJNYXAucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChuYW1lLCBpbXBsKSB7XHJcbiAgICAgICAgdGhpcy5pbXBsc1tuYW1lXSA9IGltcGw7XHJcbiAgICB9O1xyXG4gICAgRmlsdGVyTWFwLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiAobmFtZSwgYXJncykge1xyXG4gICAgICAgIHJldHVybiBuZXcgRmlsdGVyKG5hbWUsIHRoaXMuZ2V0KG5hbWUpLCBhcmdzLCB0aGlzLmxpcXVpZCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEZpbHRlck1hcDtcclxufSgpKTtcblxudmFyIHZlcnNpb24gPSAnOS4zNy4wJztcclxudmFyIExpcXVpZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIExpcXVpZChvcHRzKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7IG9wdHMgPSB7fTsgfVxyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG5vcm1hbGl6ZShvcHRzKTtcclxuICAgICAgICB0aGlzLnBhcnNlciA9IG5ldyBQYXJzZXIodGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmZpbHRlcnMgPSBuZXcgRmlsdGVyTWFwKHRoaXMub3B0aW9ucy5zdHJpY3RGaWx0ZXJzLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnRhZ3MgPSBuZXcgVGFnTWFwKCk7XHJcbiAgICAgICAgZm9yT3duKHRhZ3MsIGZ1bmN0aW9uIChjb25mLCBuYW1lKSB7IHJldHVybiBfdGhpcy5yZWdpc3RlclRhZyhzbmFrZUNhc2UobmFtZSksIGNvbmYpOyB9KTtcclxuICAgICAgICBmb3JPd24oYnVpbHRpbkZpbHRlcnMsIGZ1bmN0aW9uIChoYW5kbGVyLCBuYW1lKSB7IHJldHVybiBfdGhpcy5yZWdpc3RlckZpbHRlcihzbmFrZUNhc2UobmFtZSksIGhhbmRsZXIpOyB9KTtcclxuICAgIH1cclxuICAgIExpcXVpZC5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoaHRtbCwgZmlsZXBhdGgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZXIucGFyc2UoaHRtbCwgZmlsZXBhdGgpO1xyXG4gICAgfTtcclxuICAgIExpcXVpZC5wcm90b3R5cGUuX3JlbmRlciA9IGZ1bmN0aW9uICh0cGwsIHNjb3BlLCByZW5kZXJPcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIGN0eCA9IG5ldyBDb250ZXh0KHNjb3BlLCB0aGlzLm9wdGlvbnMsIHJlbmRlck9wdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLnJlbmRlclRlbXBsYXRlcyh0cGwsIGN0eCk7XHJcbiAgICB9O1xyXG4gICAgTGlxdWlkLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAodHBsLCBzY29wZSwgcmVuZGVyT3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRvUHJvbWlzZSh0aGlzLl9yZW5kZXIodHBsLCBzY29wZSwgX19hc3NpZ24oX19hc3NpZ24oe30sIHJlbmRlck9wdGlvbnMpLCB7IHN5bmM6IGZhbHNlIH0pKSldO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBMaXF1aWQucHJvdG90eXBlLnJlbmRlclN5bmMgPSBmdW5jdGlvbiAodHBsLCBzY29wZSwgcmVuZGVyT3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiB0b1ZhbHVlKHRoaXMuX3JlbmRlcih0cGwsIHNjb3BlLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcmVuZGVyT3B0aW9ucyksIHsgc3luYzogdHJ1ZSB9KSkpO1xyXG4gICAgfTtcclxuICAgIExpcXVpZC5wcm90b3R5cGUucmVuZGVyVG9Ob2RlU3RyZWFtID0gZnVuY3Rpb24gKHRwbCwgc2NvcGUsIHJlbmRlck9wdGlvbnMpIHtcclxuICAgICAgICBpZiAocmVuZGVyT3B0aW9ucyA9PT0gdm9pZCAwKSB7IHJlbmRlck9wdGlvbnMgPSB7fTsgfVxyXG4gICAgICAgIHZhciBjdHggPSBuZXcgQ29udGV4dChzY29wZSwgdGhpcy5vcHRpb25zLCByZW5kZXJPcHRpb25zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5yZW5kZXJUZW1wbGF0ZXNUb05vZGVTdHJlYW0odHBsLCBjdHgpO1xyXG4gICAgfTtcclxuICAgIExpcXVpZC5wcm90b3R5cGUuX3BhcnNlQW5kUmVuZGVyID0gZnVuY3Rpb24gKGh0bWwsIHNjb3BlLCByZW5kZXJPcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIHRwbCA9IHRoaXMucGFyc2UoaHRtbCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcih0cGwsIHNjb3BlLCByZW5kZXJPcHRpb25zKTtcclxuICAgIH07XHJcbiAgICBMaXF1aWQucHJvdG90eXBlLnBhcnNlQW5kUmVuZGVyID0gZnVuY3Rpb24gKGh0bWwsIHNjb3BlLCByZW5kZXJPcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdG9Qcm9taXNlKHRoaXMuX3BhcnNlQW5kUmVuZGVyKGh0bWwsIHNjb3BlLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcmVuZGVyT3B0aW9ucyksIHsgc3luYzogZmFsc2UgfSkpKV07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIExpcXVpZC5wcm90b3R5cGUucGFyc2VBbmRSZW5kZXJTeW5jID0gZnVuY3Rpb24gKGh0bWwsIHNjb3BlLCByZW5kZXJPcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIHRvVmFsdWUodGhpcy5fcGFyc2VBbmRSZW5kZXIoaHRtbCwgc2NvcGUsIF9fYXNzaWduKF9fYXNzaWduKHt9LCByZW5kZXJPcHRpb25zKSwgeyBzeW5jOiB0cnVlIH0pKSk7XHJcbiAgICB9O1xyXG4gICAgTGlxdWlkLnByb3RvdHlwZS5fcGFyc2VQYXJ0aWFsRmlsZSA9IGZ1bmN0aW9uIChmaWxlLCBzeW5jLCBjdXJyZW50RmlsZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlci5wYXJzZUZpbGUoZmlsZSwgc3luYywgTG9va3VwVHlwZS5QYXJ0aWFscywgY3VycmVudEZpbGUpO1xyXG4gICAgfTtcclxuICAgIExpcXVpZC5wcm90b3R5cGUuX3BhcnNlTGF5b3V0RmlsZSA9IGZ1bmN0aW9uIChmaWxlLCBzeW5jLCBjdXJyZW50RmlsZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlci5wYXJzZUZpbGUoZmlsZSwgc3luYywgTG9va3VwVHlwZS5MYXlvdXRzLCBjdXJyZW50RmlsZSk7XHJcbiAgICB9O1xyXG4gICAgTGlxdWlkLnByb3RvdHlwZS5wYXJzZUZpbGUgPSBmdW5jdGlvbiAoZmlsZSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRvUHJvbWlzZSh0aGlzLnBhcnNlci5wYXJzZUZpbGUoZmlsZSwgZmFsc2UpKV07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIExpcXVpZC5wcm90b3R5cGUucGFyc2VGaWxlU3luYyA9IGZ1bmN0aW9uIChmaWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRvVmFsdWUodGhpcy5wYXJzZXIucGFyc2VGaWxlKGZpbGUsIHRydWUpKTtcclxuICAgIH07XHJcbiAgICBMaXF1aWQucHJvdG90eXBlLnJlbmRlckZpbGUgPSBmdW5jdGlvbiAoZmlsZSwgY3R4LCByZW5kZXJPcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdGVtcGxhdGVzO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBhcnNlRmlsZShmaWxlKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZXMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0aGlzLnJlbmRlcih0ZW1wbGF0ZXMsIGN0eCwgcmVuZGVyT3B0aW9ucyldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBMaXF1aWQucHJvdG90eXBlLnJlbmRlckZpbGVTeW5jID0gZnVuY3Rpb24gKGZpbGUsIGN0eCwgcmVuZGVyT3B0aW9ucykge1xyXG4gICAgICAgIHZhciB0ZW1wbGF0ZXMgPSB0aGlzLnBhcnNlRmlsZVN5bmMoZmlsZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyU3luYyh0ZW1wbGF0ZXMsIGN0eCwgcmVuZGVyT3B0aW9ucyk7XHJcbiAgICB9O1xyXG4gICAgTGlxdWlkLnByb3RvdHlwZS5yZW5kZXJGaWxlVG9Ob2RlU3RyZWFtID0gZnVuY3Rpb24gKGZpbGUsIHNjb3BlLCByZW5kZXJPcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdGVtcGxhdGVzO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBhcnNlRmlsZShmaWxlKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZXMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0aGlzLnJlbmRlclRvTm9kZVN0cmVhbSh0ZW1wbGF0ZXMsIHNjb3BlLCByZW5kZXJPcHRpb25zKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIExpcXVpZC5wcm90b3R5cGUuX2V2YWxWYWx1ZSA9IGZ1bmN0aW9uIChzdHIsIGN0eCkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IG5ldyBWYWx1ZShzdHIsIHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS52YWx1ZShjdHgsIGZhbHNlKTtcclxuICAgIH07XHJcbiAgICBMaXF1aWQucHJvdG90eXBlLmV2YWxWYWx1ZSA9IGZ1bmN0aW9uIChzdHIsIGN0eCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRvUHJvbWlzZSh0aGlzLl9ldmFsVmFsdWUoc3RyLCBjdHgpKV07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIExpcXVpZC5wcm90b3R5cGUuZXZhbFZhbHVlU3luYyA9IGZ1bmN0aW9uIChzdHIsIGN0eCkge1xyXG4gICAgICAgIHJldHVybiB0b1ZhbHVlKHRoaXMuX2V2YWxWYWx1ZShzdHIsIGN0eCkpO1xyXG4gICAgfTtcclxuICAgIExpcXVpZC5wcm90b3R5cGUucmVnaXN0ZXJGaWx0ZXIgPSBmdW5jdGlvbiAobmFtZSwgZmlsdGVyKSB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJzLnNldChuYW1lLCBmaWx0ZXIpO1xyXG4gICAgfTtcclxuICAgIExpcXVpZC5wcm90b3R5cGUucmVnaXN0ZXJUYWcgPSBmdW5jdGlvbiAobmFtZSwgdGFnKSB7XHJcbiAgICAgICAgdGhpcy50YWdzLnNldChuYW1lLCB0YWcpO1xyXG4gICAgfTtcclxuICAgIExpcXVpZC5wcm90b3R5cGUucGx1Z2luID0gZnVuY3Rpb24gKHBsdWdpbikge1xyXG4gICAgICAgIHJldHVybiBwbHVnaW4uY2FsbCh0aGlzLCBMaXF1aWQpO1xyXG4gICAgfTtcclxuICAgIExpcXVpZC5wcm90b3R5cGUuZXhwcmVzcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuICAgICAgICB2YXIgZmlyc3RDYWxsID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGZpbGVQYXRoLCBjdHgsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jO1xyXG4gICAgICAgICAgICBpZiAoZmlyc3RDYWxsKSB7XHJcbiAgICAgICAgICAgICAgICBmaXJzdENhbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHZhciBkaXJzID0gbm9ybWFsaXplRGlyZWN0b3J5TGlzdCh0aGlzLnJvb3QpO1xyXG4gICAgICAgICAgICAgICAgKF9hID0gc2VsZi5vcHRpb25zLnJvb3QpLnVuc2hpZnQuYXBwbHkoX2EsIF9fc3ByZWFkQXJyYXkoW10sIF9fcmVhZChkaXJzKSwgZmFsc2UpKTtcclxuICAgICAgICAgICAgICAgIChfYiA9IHNlbGYub3B0aW9ucy5sYXlvdXRzKS51bnNoaWZ0LmFwcGx5KF9iLCBfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQoZGlycyksIGZhbHNlKSk7XHJcbiAgICAgICAgICAgICAgICAoX2MgPSBzZWxmLm9wdGlvbnMucGFydGlhbHMpLnVuc2hpZnQuYXBwbHkoX2MsIF9fc3ByZWFkQXJyYXkoW10sIF9fcmVhZChkaXJzKSwgZmFsc2UpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWxmLnJlbmRlckZpbGUoZmlsZVBhdGgsIGN0eCkudGhlbihmdW5jdGlvbiAoaHRtbCkgeyByZXR1cm4gY2FsbGJhY2sobnVsbCwgaHRtbCk7IH0sIGNhbGxiYWNrKTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBMaXF1aWQ7XHJcbn0oKSk7XG5cbmV4cG9ydCB7IEFzc2VydGlvbkVycm9yLCBDb250ZXh0LCBEcm9wLCBFeHByZXNzaW9uLCBIYXNoLCBJbnRlcm5hbFVuZGVmaW5lZFZhcmlhYmxlRXJyb3IsIExpcXVpZCwgTGlxdWlkRXJyb3IsIFBhcnNlRXJyb3IsIFBhcnNlU3RyZWFtLCBSZW5kZXJFcnJvciwgVGFnVG9rZW4sIFRpbWV6b25lRGF0ZSwgVG9rZW4sIFRva2VuS2luZCwgVG9rZW5pemF0aW9uRXJyb3IsIFRva2VuaXplciwgdHlwZUd1YXJkcyBhcyBUeXBlR3VhcmRzLCBVbmRlZmluZWRWYXJpYWJsZUVycm9yLCBWYWx1ZSwgYXNzZXJ0LCBjcmVhdGVUcmllLCBkZWZhdWx0T3BlcmF0b3JzLCBldmFsUXVvdGVkVG9rZW4sIGV2YWxUb2tlbiwgYnVpbHRpbkZpbHRlcnMgYXMgZmlsdGVycywgaXNGYWxzeSwgaXNUcnV0aHksIGluZGV4IGFzIHRhZ3MsIHRvUHJvbWlzZSwgdG9UaGVuYWJsZSwgdG9WYWx1ZSQxIGFzIHRvVmFsdWUsIHZlcnNpb24gfTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9wb3N0MS5tZFwiOiBbXG5cdFx0XCIuL3NyYy9hc3NldHMvcG9zdHMvcG9zdDEubWRcIixcblx0XHRcInNyY19hc3NldHNfcG9zdHNfcG9zdDFfbWRcIlxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pO1xuXHR9XG5cblx0dmFyIGlkcyA9IG1hcFtyZXFdLCBpZCA9IGlkc1swXTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShpZHNbMV0pLnRoZW4oKCkgPT4ge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSAoKSA9PiAoT2JqZWN0LmtleXMobWFwKSk7XG53ZWJwYWNrQXN5bmNDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvcG9zdHMgbGF6eSByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwubWQkXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcIm1hcmtkb3duLXRlc3Q6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0O1xuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJwb3N0XCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH0gZWxzZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHRcdFx0fVxuXHRcdH1cbn07XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmttYXJrZG93bl90ZXN0XCJdID0gc2VsZltcIndlYnBhY2tDaHVua21hcmtkb3duX3Rlc3RcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsImltcG9ydCB7IExpcXVpZCB9IGZyb20gJ2xpcXVpZGpzJztcblxuZnVuY3Rpb24gcHVzaENvbnRlbnRzKHRhcmdldCwgY29udGVudCkge1xuICB0YXJnZXQuaW5uZXJIVE1MID0gY29udGVudDtcbn1cblxuZnVuY3Rpb24gaW1wb3J0TWFya2Rvd24ocG9zdG5hbWUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpbXBvcnQoYGFzc2V0cy9wb3N0cy8ke3Bvc3RuYW1lfS5tZGApXG4gICAgICAudGhlbigobW9kdWxlKSA9PiByZXNvbHZlKG1vZHVsZS5kZWZhdWx0KSlcbiAgICAgIC5jYXRjaChyZWplY3QpO1xuICB9KVxufVxuXG5mdW5jdGlvbiBtYXBQYXRoKHBvc3RuYW1lKSB7XG4gIGNvbnNvbGUubG9nKHBvc3RuYW1lKTtcbiAgaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgZG9jdW1lbnQudGl0bGUsIHBvc3RuYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0UG9zdG5hbWUoKSB7XG4gIHJldHVybiBsb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7XG59XG5cbmZ1bmN0aW9uIHNldFRpdGxlKHBvc3QpIHtcbiAgZG9jdW1lbnQudGl0bGUgPSBgJHtkb2N1bWVudC50aXRsZX0gfCAke3Bvc3R9YDtcbn1cblxuKGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gIGNvbnN0IGNvbnRlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnRzJyk7XG4gIGNvbnN0IHBvc3RuYW1lID0gZ2V0UG9zdG5hbWUoKTtcbiAgY29uc3QgcGFyc2VkTWQgPSBhd2FpdCBpbXBvcnRNYXJrZG93bihwb3N0bmFtZSk7XG4gIG1hcFBhdGgocG9zdG5hbWUpO1xuICBzZXRUaXRsZShwb3N0bmFtZSk7XG4gIHB1c2hDb250ZW50cyhjb250ZW50cywgcGFyc2VkTWQpXG59KSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9