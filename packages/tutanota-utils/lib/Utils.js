"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.mapObject = exports.mapNullable = exports.insideRect = exports.filterInt = exports.mapLazily = exports.getAsLazy = exports.resolveMaybeLazy = exports.typedValues = exports.typedEntries = exports.typedKeys = exports.addressDomain = exports.freezeMap = exports.getChangedProps = exports.deepEqual = exports.objectEntries = exports.errorToString = exports.randomIntFromInterval = exports.debounceStart = exports.debounce = exports.noOp = exports.identity = exports.memoized = exports.makeSingleUse = exports.lazyMemoized = exports.clone = exports.downcast = exports.assert = exports.isNotNull = exports.assertNonNull = exports.assertNotNull = exports.neverNull = exports.executeInGroups = exports.asyncFindAndMap = exports.asyncFind = exports.deferWithHandler = exports.defer = void 0;
var TypeRef_js_1 = require("./TypeRef.js");
function defer() {
    var ret = {};
    ret.promise = new Promise(function (resolve, reject) {
        ret.resolve = resolve;
        ret.reject = reject;
    });
    return ret;
}
exports.defer = defer;
function deferWithHandler(handler) {
    var deferred = {};
    deferred.promise = new Promise(function (resolve, reject) {
        deferred.resolve = resolve;
        deferred.reject = reject;
    }).then(handler);
    return deferred;
}
exports.deferWithHandler = deferWithHandler;
function asyncFind(array, finder) {
    return __awaiter(this, void 0, void 0, function () {
        var i, item;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < array.length)) return [3 /*break*/, 4];
                    item = array[i];
                    return [4 /*yield*/, finder(item, i, array.length)];
                case 2:
                    if (_a.sent()) {
                        return [2 /*return*/, item];
                    }
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/, null];
            }
        });
    });
}
exports.asyncFind = asyncFind;
function asyncFindAndMap(array, finder) {
    return __awaiter(this, void 0, void 0, function () {
        var i, item, mapped;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < array.length)) return [3 /*break*/, 4];
                    item = array[i];
                    return [4 /*yield*/, finder(item, i, array.length)];
                case 2:
                    mapped = _a.sent();
                    if (mapped) {
                        return [2 /*return*/, mapped];
                    }
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/, null];
            }
        });
    });
}
exports.asyncFindAndMap = asyncFindAndMap;
/**
 * Calls an executor function for slices of nbrOfElementsInGroup items of the given array until the executor function returns false.
 */
function executeInGroups(array, nbrOfElementsInGroup, executor) {
    if (array.length > 0) {
        var nextSlice_1 = Math.min(array.length, nbrOfElementsInGroup);
        return executor(array.slice(0, nextSlice_1)).then(function (doContinue) {
            if (doContinue) {
                return executeInGroups(array.slice(nextSlice_1), nbrOfElementsInGroup, executor);
            }
        });
    }
    else {
        return Promise.resolve();
    }
}
exports.executeInGroups = executeInGroups;
function neverNull(object) {
    return object;
}
exports.neverNull = neverNull;
/**
 * returns its argument if it is not null, throws otherwise.
 * @param value the value to check
 * @param message optional error message
 */
function assertNotNull(value, message) {
    if (message === void 0) { message = "null"; }
    if (value == null) {
        throw new Error("AssertNotNull failed : " + message);
    }
    return value;
}
exports.assertNotNull = assertNotNull;
/**
 * assertion function that only returns if the argument is non-null
 * (acts as a type guard)
 * @param value the value to check
 * @param message optional error message
 */
function assertNonNull(value, message) {
    if (message === void 0) { message = "null"; }
    if (value == null) {
        throw new Error("AssertNonNull failed: " + message);
    }
}
exports.assertNonNull = assertNonNull;
function isNotNull(t) {
    return t != null;
}
exports.isNotNull = isNotNull;
function assert(assertion, message) {
    if (!resolveMaybeLazy(assertion)) {
        throw new Error("Assertion failed: ".concat(message));
    }
}
exports.assert = assert;
function downcast(object) {
    return object;
}
exports.downcast = downcast;
function clone(instance) {
    if (instance instanceof Uint8Array) {
        return downcast(instance.slice());
    }
    else if (instance instanceof Array) {
        return downcast(instance.map(function (i) { return clone(i); }));
    }
    else if (instance instanceof Date) {
        return new Date(instance.getTime());
    }
    else if (instance instanceof TypeRef_js_1.TypeRef) {
        return instance;
    }
    else if (instance instanceof Object) {
        // Can only pass null or Object, cannot pass undefined
        var copy = Object.create(Object.getPrototypeOf(instance) || null);
        Object.assign(copy, instance);
        for (var _i = 0, _a = Object.keys(copy); _i < _a.length; _i++) {
            var key = _a[_i];
            if (key.startsWith("_finalEncrypted"))
                continue;
            copy[key] = clone(copy[key]);
        }
        return copy;
    }
    else {
        return instance;
    }
}
exports.clone = clone;
/**
 * Function which accepts another function. On first invocation
 * of this resulting function result will be remembered and returned
 * on consequent invocations.
 */
function lazyMemoized(source) {
    // Using separate variable for tracking because value can be undefined and we want to the function call only once
    var cached = false;
    var value;
    return function () {
        if (cached) {
            return value;
        }
        else {
            cached = true;
            return (value = source());
        }
    };
}
exports.lazyMemoized = lazyMemoized;
/**
 * accept a function taking exactly one argument and returning nothing and return a version of it
 * that will call the original function on the first call and ignore any further calls.
 * @param fn a function taking one argument and returning nothing
 */
function makeSingleUse(fn) {
    var called = false;
    return function (arg) {
        if (!called) {
            called = true;
            fn(arg);
        }
    };
}
exports.makeSingleUse = makeSingleUse;
/**
 * Returns a cached version of {@param fn}.
 * Cached function checks that argument is the same (with ===) and if it is then it returns the cached result.
 * If the cached argument has changed then {@param fn} will be called with new argument and result will be cached again.
 * Only remembers the last argument.
 */
function memoized(fn) {
    var lastArg;
    var lastResult;
    var didCache = false;
    return function (arg) {
        if (!didCache || arg !== lastArg) {
            lastArg = arg;
            didCache = true;
            lastResult = fn(arg);
        }
        return lastResult;
    };
}
exports.memoized = memoized;
/**
 * Function which returns what was passed into it
 */
function identity(t) {
    return t;
}
exports.identity = identity;
/**
 * Function which does nothing.
 */
function noOp() { }
exports.noOp = noOp;
/**
 * Return a function, which executed {@param toThrottle} only after it is not invoked for {@param timeout} ms.
 * Executes function with the last passed arguments
 * @return {Function}
 */
function debounce(timeout, toThrottle) {
    var timeoutId;
    var toInvoke;
    return downcast(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        toInvoke = toThrottle.bind.apply(toThrottle, __spreadArray([null], args, false));
        timeoutId = setTimeout(toInvoke, timeout);
    });
}
exports.debounce = debounce;
/**
 * Returns a debounced function. When invoked for the first time, will just invoke
 * {@param toThrottle}. On subsequent invocations it will either invoke it right away
 * (if {@param timeout} has passed) or will schedule it to be run after {@param timeout}.
 * So the first and the last invocations in a series of invocations always take place
 * but ones in the middle (which happen too often) are discarded.}
 */
function debounceStart(timeout, toThrottle) {
    var timeoutId;
    var lastInvoked = 0;
    return downcast(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (Date.now() - lastInvoked < timeout) {
            timeoutId && clearTimeout(timeoutId);
            timeoutId = setTimeout(function () {
                timeoutId = null;
                toThrottle.apply(null, args);
            }, timeout);
        }
        else {
            toThrottle.apply(null, args);
        }
        lastInvoked = Date.now();
    });
}
exports.debounceStart = debounceStart;
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
exports.randomIntFromInterval = randomIntFromInterval;
function errorToString(error) {
    var errorString = error.name ? error.name : "?";
    if (error.message) {
        errorString += "\n Error message: ".concat(error.message);
    }
    if (error.stack) {
        // the error id is included in the stacktrace
        errorString += "\nStacktrace: \n".concat(error.stack);
    }
    return errorString;
}
exports.errorToString = errorToString;
/**
 * Like {@link Object.entries} but preserves the type of the key and value
 */
function objectEntries(object) {
    return downcast(Object.entries(object));
}
exports.objectEntries = objectEntries;
/**
 * modified deepEquals from ospec is only needed as long as we use custom classes (TypeRef) and Date is not properly handled
 */
function deepEqual(a, b) {
    if (a === b)
        return true;
    if (xor(a === null, b === null) || xor(a === undefined, b === undefined))
        return false;
    if (typeof a === "object" && typeof b === "object") {
        var aIsArgs = isArguments(a), bIsArgs = isArguments(b);
        if (a.length === b.length && ((a instanceof Array && b instanceof Array) || (aIsArgs && bIsArgs))) {
            var aKeys = Object.getOwnPropertyNames(a), bKeys = Object.getOwnPropertyNames(b);
            if (aKeys.length !== bKeys.length)
                return false;
            for (var i = 0; i < aKeys.length; i++) {
                if (!hasOwn.call(b, aKeys[i]) || !deepEqual(a[aKeys[i]], b[aKeys[i]]))
                    return false;
            }
            return true;
        }
        if (a instanceof Date && b instanceof Date)
            return a.getTime() === b.getTime();
        if (a instanceof Object && b instanceof Object && !aIsArgs && !bIsArgs) {
            for (var i in a) {
                if (!(i in b) || !deepEqual(a[i], b[i]))
                    return false;
            }
            for (var i in b) {
                if (!(i in a))
                    return false;
            }
            return true;
        }
        // @ts-ignore: we would need to include all @types/node for this to work or import it explicitly. Should probably be rewritten for all typed arrays.
        if (typeof Buffer === "function" && a instanceof Buffer && b instanceof Buffer) {
            for (var i = 0; i < a.length; i++) {
                if (a[i] !== b[i])
                    return false;
            }
            return true;
        }
        if (a.valueOf() === b.valueOf())
            return true;
    }
    return false;
}
exports.deepEqual = deepEqual;
function xor(a, b) {
    var aBool = !!a;
    var bBool = !!b;
    return (aBool && !bBool) || (bBool && !aBool);
}
function isArguments(a) {
    if ("callee" in a) {
        for (var i in a)
            if (i === "callee")
                return false;
        return true;
    }
}
var hasOwn = {}.hasOwnProperty;
/**
 * returns an array of top-level properties that are in both objA and objB, but differ in value
 * does not handle functions or circular references
 * treats undefined and null as equal
 */
function getChangedProps(objA, objB) {
    if (objA == null || objB == null || objA === objB)
        return [];
    return Object.keys(objA)
        .filter(function (k) { return Object.keys(objB).includes(k); })
        .filter(function (k) { return ![null, undefined].includes(objA[k]) || ![null, undefined].includes(objB[k]); })
        .filter(function (k) { return !deepEqual(objA[k], objB[k]); });
}
exports.getChangedProps = getChangedProps;
/**
 * Disallow set, delete and clear on Map.
 * Important: It is *not* a deep freeze.
 * @param myMap
 * @return {unknown}
 */
function freezeMap(myMap) {
    function mapSet(key, value) {
        throw new Error("Can't add property " + key + ", map is not extensible");
    }
    function mapDelete(key) {
        throw new Error("Can't delete property " + key + ", map is frozen");
    }
    function mapClear() {
        throw new Error("Can't clear map, map is frozen");
    }
    var anyMap = downcast(myMap);
    anyMap.set = mapSet;
    anyMap["delete"] = mapDelete;
    anyMap.clear = mapClear;
    Object.freeze(anyMap);
    return anyMap;
}
exports.freezeMap = freezeMap;
function addressDomain(senderAddress) {
    return senderAddress.slice(senderAddress.lastIndexOf("@") + 1);
}
exports.addressDomain = addressDomain;
/**
 * Ignores the fact that Object.keys returns also not owned properties.
 */
function typedKeys(obj) {
    return downcast(Object.keys(obj));
}
exports.typedKeys = typedKeys;
/**
 * Ignores the fact that Object.keys returns also not owned properties.
 */
function typedEntries(obj) {
    return downcast(Object.entries(obj));
}
exports.typedEntries = typedEntries;
/**
 * Ignores the fact that Object.keys returns also not owned properties.
 */
function typedValues(obj) {
    return downcast(Object.values(obj));
}
exports.typedValues = typedValues;
function resolveMaybeLazy(maybe) {
    return typeof maybe === "function" ? maybe() : maybe;
}
exports.resolveMaybeLazy = resolveMaybeLazy;
function getAsLazy(maybe) {
    return typeof maybe === "function" ? downcast(maybe) : function () { return maybe; };
}
exports.getAsLazy = getAsLazy;
function mapLazily(maybe, mapping) {
    return function () { return mapping(resolveMaybeLazy(maybe)); };
}
exports.mapLazily = mapLazily;
/**
 * Stricter version of parseInt() from MDN. parseInt() allows some arbitrary characters at the end of the string.
 * Returns NaN in case there's anything non-number in the string.
 */
function filterInt(value) {
    if (/^\d+$/.test(value)) {
        return parseInt(value, 10);
    }
    else {
        return NaN;
    }
}
exports.filterInt = filterInt;
function insideRect(point, rect) {
    return point.x >= rect.left && point.x < rect.right && point.y >= rect.top && point.y < rect.bottom;
}
exports.insideRect = insideRect;
/**
 * If val is non null, returns the result of val passed to action, else null
 */
function mapNullable(val, action) {
    if (val != null) {
        var result = action(val);
        if (result != null) {
            return result;
        }
    }
    return null;
}
exports.mapNullable = mapNullable;
function mapObject(mapper, obj) {
    var newObj = {};
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var key = _a[_i];
        var typedKey = key;
        newObj[typedKey] = mapper(obj[typedKey]);
    }
    return newObj;
}
exports.mapObject = mapObject;
