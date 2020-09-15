(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("rxjs"), require("rxjs/operators"), require("zone.js/dist/zone"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "rxjs", "rxjs/operators", "zone.js/dist/zone"], factory);
	else if(typeof exports === 'object')
		exports["lazyNgZone"] = factory(require("@angular/core"), require("rxjs"), require("rxjs/operators"), require("zone.js/dist/zone"));
	else
		root["lazyNgZone"] = factory(root["@angular/core"], root["rxjs"], root["rxjs/operators"], root["zone.js/dist/zone"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__angular_core__, __WEBPACK_EXTERNAL_MODULE_rxjs__, __WEBPACK_EXTERNAL_MODULE_rxjs_operators__, __WEBPACK_EXTERNAL_MODULE_zone_js_dist_zone__) {
return (window["webpackJsonplazyNgZone"] = window["webpackJsonplazyNgZone"] || []).push([["main"],{

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: LazyNgZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyNgZone", function() { return LazyNgZone; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);



var LazyNgZone = /** @class */ (function () {
    function LazyNgZone(loader$, ngZoneEventCoalescing) {
        var _this = this;
        loader$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! zone.js/dist/zone */ "zone.js/dist/zone", 7))); })).subscribe(function () {
            _this.ngZone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]({
                enableLongStackTrace: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])(),
                shouldCoalesceEventChangeDetection: ngZoneEventCoalescing
            });
        });
    }
    Object.defineProperty(LazyNgZone.prototype, "hasPendingMacrotasks", {
        get: function () {
            return this.ngZone ? this.ngZone.hasPendingMacrotasks : false;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(LazyNgZone.prototype, "hasPendingMicrotasks", {
        get: function () {
            return this.ngZone ? this.ngZone.hasPendingMicrotasks : false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LazyNgZone.prototype, "isStable", {
        get: function () {
            return this.ngZone ? this.ngZone.isStable : true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LazyNgZone.prototype, "onUnstable", {
        get: function () {
            return this.ngZone ? this.ngZone.onUnstable : new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LazyNgZone.prototype, "onMicrotaskEmpty", {
        get: function () {
            return this.ngZone ? this.ngZone.onMicrotaskEmpty : new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LazyNgZone.prototype, "onStable", {
        get: function () {
            return this.ngZone ? this.ngZone.onStable : new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LazyNgZone.prototype, "onError", {
        get: function () {
            return this.ngZone ? this.ngZone.onError : new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        },
        enumerable: false,
        configurable: true
    });
    LazyNgZone.prototype.run = function (fn, applyThis, applyArgs) {
        return this.ngZone ? this.ngZone.run(fn, applyThis, applyArgs) : fn.apply(applyThis, applyArgs);
    };
    LazyNgZone.prototype.runTask = function (fn, applyThis, applyArgs, name) {
        return this.ngZone ? this.ngZone.runTask(fn, applyThis, applyArgs, name) : fn.apply(applyThis, applyArgs);
    };
    LazyNgZone.prototype.runGuarded = function (fn, applyThis, applyArgs) {
        return this.ngZone ? this.ngZone.runGuarded(fn, applyThis, applyArgs) : fn.apply(applyThis, applyArgs);
    };
    LazyNgZone.prototype.runOutsideAngular = function (fn) {
        return this.ngZone ? this.ngZone.runOutsideAngular(fn) : fn();
    };
    LazyNgZone.create = function (loader$, ngZoneEventCoalescing) {
        if (loader$ === void 0) { loader$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null); }
        if (ngZoneEventCoalescing === void 0) { ngZoneEventCoalescing = false; }
        LazyNgZone.lazyNgZone = new LazyNgZone(loader$, ngZoneEventCoalescing);
        return LazyNgZone.lazyNgZone;
    };
    Object.defineProperty(LazyNgZone, "get", {
        get: function () {
            return this.lazyNgZone || LazyNgZone.create();
        },
        enumerable: false,
        configurable: true
    });
    return LazyNgZone;
}());



/***/ }),

/***/ "@angular/core":
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_core__;

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_rxjs__;

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_rxjs_operators__;

/***/ }),

/***/ "zone.js/dist/zone":
/*!************************************!*\
  !*** external "zone.js/dist/zone" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_zone_js_dist_zone__;

/***/ })

},[["./src/index.ts","runtime~main"]]]);
});
//# sourceMappingURL=main.lazy-ng-zone.js.map