(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["group-group-module"], {
    /***/
    "8xUH":
    /*!***************************************!*\
      !*** ./src/app/group/group.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function xUH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-rating-2-color: #aa6c39;\n  --page-rating-1-color: #bbb2b2;\n}\n\n.tab-title {\n  size: 9px;\n}\n\nion-segment-button {\n  background-color: var(--page-background);\n}\n\n.filters-toolbar {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n  --border-style: 10px;\n}\n\n.filters-toolbar .searchbar-row {\n  --ion-grid-column-padding: 0px;\n}\n\n.filters-toolbar .searchbar-row ion-searchbar.items-searchbar {\n  padding: 0px;\n  height: 100%;\n  contain: content;\n}\n\n.filters-toolbar .searchbar-row .call-to-action-col {\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  flex-shrink: 0;\n  flex-grow: 0;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.filters-toolbar .searchbar-row .call-to-action-col .filters-btn {\n  --padding-start: 6px;\n  --padding-end: 6px;\n  margin: 0px;\n  font-size: 15px;\n  height: initial;\n}\n\n.listing-item {\n  background-color: var(--page-background);\n}\n\n.icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.text {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 3px;\n  text-transform: capitalize !important;\n}\n\n.addedByTitle {\n  margin-left: 10px;\n  line-height: 5px;\n  text-decoration: none;\n}\n\n.addedByDate {\n  margin-left: 10px;\n  font-style: italic;\n}\n\n.addedByImg {\n  width: 50px;\n  float: left;\n  vertical-align: middle;\n}\n\n.newIcon {\n  margin-left: 10px;\n  height: 40px;\n  vertical-align: middle;\n}\n\n.message {\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 19px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.message .slider {\n  margin-bottom: 5px;\n}\n\n.message .slider .bgSizeContain {\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 100%;\n  width: 100%;\n  height: 200px;\n  text-shadow: white 0px 0px 2px;\n  font-size: 16px;\n  border-radius: 10px;\n}\n\n.message .reactions {\n  margin-bottom: 0px;\n  margin-left: -10px;\n}\n\n.message .tags-wrapper {\n  padding-top: 5px;\n}\n\n.message .tags-wrapper .tags {\n  padding-right: 5px;\n}\n\n.message .tags-wrapper .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  padding-right: 15px;\n  font-size: 12px;\n  font-weight: bold;\n  width: 100%;\n  display: block;\n  text-align: center;\n  color: #aa6c39;\n}\n\n.group-info {\n  margin: var(--page-margin) var(--page-margin) var(--page-margin) var(--page-margin);\n}\n\n.group-info .group-name {\n  padding-top: var(--page-margin);\n  padding-bottom: var(--page-margin);\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  text-align: left;\n  font-weight: bold;\n  font-size: 19px;\n}\n\n.group-info .group-tags {\n  padding-bottom: calc(var(--page-margin) / 3);\n}\n\n.group-info .group-tags .tags {\n  padding-right: 5px;\n}\n\n.group-info .group-tags .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.group-info .group-tags .tags .item-rating[ratingBase=\"0\"] {\n  color: var(--page-rating-1-color);\n}\n\n.group-info .group-tags .tags .item-rating[ratingBase=\"1\"] {\n  color: var(--page-rating-2-color);\n}\n\n.group-info .group-member-name {\n  padding-left: var(--page-margin);\n}\n\n.empty-list {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXAvZ3JvdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQUE7RUFDQSx3Q0FBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFDQTtFQUNFLFNBQUE7QUFFRjs7QUFBQTtFQUNFLHdDQUFBO0FBR0Y7O0FBQUE7RUFDRSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLG9CQUFBO0FBR0Y7O0FBREU7RUFDRSw4QkFBQTtBQUdKOztBQURJO0VBQ0UsWUFBQTtFQUVBLFlBQUE7RUFFQSxnQkFBQTtBQUNOOztBQUVJO0VBRUUsMkJBQUE7RUFBQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLHlCQUFBO0FBRk47O0FBSU07RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNBLGVBQUE7RUFFQSxlQUFBO0FBSlI7O0FBV0E7RUFDQSx3Q0FBQTtBQVJBOztBQVdBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQVJBOztBQVdBO0VBQ0MscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7QUFSRDs7QUFVQTtFQUNDLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQVBEOztBQVNBO0VBQ0EsaUJBQUE7RUFDQyxrQkFBQTtBQU5EOztBQVFBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQUxGOztBQU9BO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFKRjs7QUFNQTtFQUNFLGtHQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUhGOztBQUtFO0VBQ0Usa0JBQUE7QUFISjs7QUFJSTtFQUNFLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBR0EsbUJBQUE7QUFGTjs7QUFNRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFKSjs7QUFNRTtFQUNFLGdCQUFBO0FBSko7O0FBTUk7RUFDRSxrQkFBQTtBQUpOOztBQU1JO0VBQ0UsbURBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBSk47O0FBVUE7RUFDRSxtRkFBQTtBQVBGOztBQVdFO0VBQ0UsK0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGtHQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFUSjs7QUFXRTtFQUNFLDRDQUFBO0FBVEo7O0FBV0k7RUFDRSxrQkFBQTtBQVROOztBQVdJO0VBRUUsbURBQUE7RUFNUSwyQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFmZDs7QUFnQmM7RUFDRSxpQ0FBQTtBQWRoQjs7QUFnQmM7RUFDRSxpQ0FBQTtBQWRoQjs7QUFxQkU7RUFDRSxnQ0FBQTtBQW5CSjs7QUF1QkE7RUFDRSxrQkFBQTtBQXBCRiIsImZpbGUiOiJzcmMvYXBwL2dyb3VwL2dyb3VwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbiAgLS1wYWdlLXJhdGluZy0yLWNvbG9yOiAjYWE2YzM5O1xuICAtLXBhZ2UtcmF0aW5nLTEtY29sb3I6ICNiYmIyYjI7XG59XG4udGFiLXRpdGxlIHtcbiAgc2l6ZTogOXB4O1xufVxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cblxuLmZpbHRlcnMtdG9vbGJhciB7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLWJvcmRlci1zdHlsZTogMTBweDtcblxuICAuc2VhcmNoYmFyLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgaW9uLXNlYXJjaGJhci5pdGVtcy1zZWFyY2hiYXIge1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgLy8gb3ZlcnJpZGUgSW9uaWMgZml4ZWQgaGVpZ2h0XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAvLyBMZWFybiBtb3JlIGFib3V0IENTUyBjb250YWluIHByb3BlcnR5IGhlcmU6IGh0dHBzOi8vdGVybXZhZGVyLmdpdGh1Yi5pby9jc3MtY29udGFpbi9cbiAgICAgIGNvbnRhaW46IGNvbnRlbnQ7XG4gICAgfVxuXG4gICAgLmNhbGwtdG8tYWN0aW9uLWNvbCB7XG4gICAgICAvL3BhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICBmbGV4LWdyb3c6IDA7XG5cbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgICAuZmlsdGVycy1idG4ge1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDZweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogNnB4O1xuXG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIC8vIG92ZXJyaWRlIElvbmljIGZpeGVkIGhlaWdodFxuICAgICAgICBoZWlnaHQ6IGluaXRpYWw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuLmxpc3RpbmctaXRlbSB7XG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuXG4uaWNvbiB7XG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG52ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4udGV4dHtcbiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiBwYWRkaW5nLWxlZnQ6IDNweDtcbiB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xufVxuLmFkZGVkQnlUaXRsZSB7XG4gbWFyZ2luLWxlZnQ6IDEwcHg7XG4gbGluZS1oZWlnaHQ6IDVweDtcbiB0ZXh0LWRlY29yYXRpb246IG5vbmUgXG59XG4uYWRkZWRCeURhdGUge1xubWFyZ2luLWxlZnQ6IDEwcHg7XG4gZm9udC1zdHlsZTogaXRhbGljO1xufVxuLmFkZGVkQnlJbWcge1xuICB3aWR0aDogNTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ubmV3SWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ubWVzc2FnZSB7XG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhTmV1ZScsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgJ1JvYm90bycsICdTZWdvZSBVSScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBzdWJwaXhlbC1hbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47IFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblxuICAuc2xpZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgLmJnU2l6ZUNvbnRhaW4ge1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICB0ZXh0LXNoYWRvdzogd2hpdGUgMHB4IDBweCAycHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIH1cblxuICAucmVhY3Rpb25zIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICB9IFxuICAudGFncy13cmFwcGVyIHtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgXG4gICAgLnRhZ3Mge1xuICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuXG4gICAgLml0ZW0tcmF0aW5nIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcGFnZS1jb2xvci1yZ2IpLCAuMzUpO1xuICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjYWE2YzM5O1xuICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmdyb3VwLWluZm8ge1xuICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLmdyb3VwLWltZyB7XG5cbiAgfVxuICAuZ3JvdXAtbmFtZSB7XG4gICAgcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhTmV1ZScsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgJ1JvYm90bycsICdTZWdvZSBVSScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICB9XG4gIC5ncm91cC10YWdzIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcbiAgIFxuICAgIC50YWdzIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcblxuICAgIC5pdGVtLXJhdGluZyB7XG4gICAgICAvLyBEZWZhdWx0IGJhY2tncm91bmRcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcGFnZS1jb2xvci1yZ2IpLCAuMzUpO1xuICAgICAgICAgICAgICAvLyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgICAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICAgICAgICAgICAgICAvLyBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAxKTtcbiAgICAgICAgICAgICAgLy9wYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcbiAgICAgICAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgJltyYXRpbmdCYXNlPVwiMFwiXSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTEtY29sb3IpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICZbcmF0aW5nQmFzZT1cIjFcIl0ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLXJhdGluZy0yLWNvbG9yKTtcbiAgICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIC5ncm91cC1tZW1iZXItbmFtZSB7XG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIH1cbn1cblxuLmVtcHR5LWxpc3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "J4zT":
    /*!***************************************!*\
      !*** ./src/app/group/group.module.ts ***!
      \***************************************/

    /*! exports provided: GroupPageModule */

    /***/
    function J4zT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupPageModule", function () {
        return GroupPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _group_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./group.page */
      "mbZD");
      /* harmony import */


      var _services_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/share.module */
      "vxGH");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../components/components.module */
      "j1ZV");

      var routes = [{
        path: '',
        component: _group_page__WEBPACK_IMPORTED_MODULE_6__["GroupPage"]
      }];

      var GroupPageModule = /*#__PURE__*/_createClass(function GroupPageModule() {
        _classCallCheck(this, GroupPageModule);
      });

      GroupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _services_share_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_group_page__WEBPACK_IMPORTED_MODULE_6__["GroupPage"]]
      })], GroupPageModule);
      /***/
    },

    /***/
    "mbZD":
    /*!*************************************!*\
      !*** ./src/app/group/group.page.ts ***!
      \*************************************/

    /*! exports provided: GroupPage */

    /***/
    function mbZD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupPage", function () {
        return GroupPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_group_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./group.page.html */
      "rrFO");
      /* harmony import */


      var _group_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./group.page.scss */
      "8xUH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/data.service */
      "EnSQ");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/keyboard/ngx */
      "PLH8");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/contacts/ngx */
      "TzAO");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "Bfh1");
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../services/loading.service */
      "7ch9");
      /* harmony import */


      var _services_image_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../services/image.service */
      "mnRn");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! firebase */
      "JZFu");
      /* harmony import */


      var _popover_popover_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../popover/popover.page */
      "M0Xy");
      /* harmony import */


      var _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../reaction-list-modal/reaction-list-modal.page */
      "7ONW");

      var GroupPage = /*#__PURE__*/function () {
        // GroupPage
        // This is the page where the user can chat with other group members and view group info.
        function GroupPage(dataProvider, navCtrl, modalCtrl, firestore, alertCtrl, imageProvider, loadingProvider, camera, keyboard, actionSheet, contacts, geolocation, route, router, popoverCtrl) {
          _classCallCheck(this, GroupPage);

          this.dataProvider = dataProvider;
          this.navCtrl = navCtrl;
          this.modalCtrl = modalCtrl;
          this.firestore = firestore;
          this.alertCtrl = alertCtrl;
          this.imageProvider = imageProvider;
          this.loadingProvider = loadingProvider;
          this.camera = camera;
          this.keyboard = keyboard;
          this.actionSheet = actionSheet;
          this.contacts = contacts;
          this.geolocation = geolocation;
          this.route = route;
          this.router = router;
          this.popoverCtrl = popoverCtrl;
          this.startIndex = -1;
          this.scrollDirection = 'bottom'; // Set number of messages to show.

          this.numberOfMessages = 10;
          this.polls = [];
          this.resources = [];
          this.events = [];
          this.loggedInUserIsMember = 'false';
          this.resourceTags = [];
          this.notifications = [];
          this.toggled = false; // posts

          this.posts = [];
          this.numberOfPosts = 10;
          this.maxNoOfPosts = 1000;
          this.maxNoOfEvents = 1000;
          this.maxNoOfPolls = 1000;
          this.maxNoOfResources = 1000;
          this.loggedInUserId = firebase__WEBPACK_IMPORTED_MODULE_14__["default"].auth().currentUser.uid;
        }

        return _createClass(GroupPage, [{
          key: "handleSelection",
          value: function handleSelection(event) {
            this.emojitext = this.emojitext + ' ' + event["char"];
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.loadingProvider.show();
            this.tab = 'posts';
            this.title = 'Posts';
            this.loggedInUserId = firebase__WEBPACK_IMPORTED_MODULE_14__["default"].auth().currentUser.uid; // Get Posts

            this.dataProvider.getCurrentUser().then(function (u) {
              u.get().subscribe(function (user) {
                // this.userReactions = user.data().userReactions;
                // this.userNotifications = user.data().userNotifications;
                _this.loggedInUser = user.data();

                _this.getGroupDetailsandPosts();
              });
            });
            this.loadingProvider.hide();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {} // Update messagesRead when user lefts this page.

        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            if (this.messages) {
              this.setMessagesRead(this.messages);
            }
          } // Check if currentPage is active, then update user's messagesRead.

        }, {
          key: "setMessagesRead",
          value: function setMessagesRead(messages) {
            // if (this.navCtrl.getActive().instance instanceof GroupPage) {
            // Update user's messagesRead on database.
            this.firestore.doc('/accounts/' + firebase__WEBPACK_IMPORTED_MODULE_14__["default"].auth().currentUser.uid + '/groups/' + this.groupId).update({
              messagesRead: this.messages.length
            }); // }
          } // Check if 'return' button is pressed and send the message.

        }, {
          key: "onType",
          value: function onType(keyCode) {
            if (keyCode == 13) {// this.keyboard.close();
              // this.send();
            }
          } // Scroll to bottom of page after a short delay.

        }, {
          key: "scrollBottom",
          value: function scrollBottom() {
            var that = this;
            setTimeout(function () {
              that.content.nativeElement.scrollBottom = that.content.nativeElement.scrollHeight;
            }, 300);
          } // Scroll to top of the page after a short delay.

        }, {
          key: "scrollTop",
          value: function scrollTop() {
            var that = this;
            setTimeout(function () {
              that.content.nativeElement.scrollTop = that.content.nativeElement.scrollHeight;
            }, 300);
          } // Scroll depending on the direction.

        }, {
          key: "doScroll",
          value: function doScroll() {
            if (this.scrollDirection === 'bottom') {
              this.scrollBottom();
            } else if (this.scrollDirection === 'top') {
              this.scrollTop();
            }
          } // Check if the user is the sender of the message.

        }, {
          key: "isSender",
          value: function isSender(message) {
            if (message.sender === firebase__WEBPACK_IMPORTED_MODULE_14__["default"].auth().currentUser.uid) {
              return true;
            } else {
              return false;
            }
          } // Check if the message is a system message.

        }, {
          key: "isSystemMessage",
          value: function isSystemMessage(message) {
            if (message.type === 'system') {
              return true;
            } else {
              return false;
            }
          } // View user info

        }, {
          key: "viewUser",
          value: function viewUser(userId) {
            this.router.navigateByUrl('/userinfo/' + userId);
          } // Send text message to the group.

        }, {
          key: "send",
          value: function send(type) {
            // Clone an instance of messages object so it will not directly be updated.
            // The messages object should be updated by our observer declared on ionViewDidLoad.
            var messages = JSON.parse(JSON.stringify(this.messages));
            messages.push({
              date: new Date().toString(),
              sender: firebase__WEBPACK_IMPORTED_MODULE_14__["default"].auth().currentUser.uid,
              // tslint:disable-next-line: object-literal-shorthand
              type: type,
              message: this.message
            }); // Update group messages.

            this.dataProvider.getGroup(this.groupId).update({
              // tslint:disable-next-line: object-literal-shorthand
              messages: messages
            }); // Clear messagebox.

            this.message = '';
          } // Enlarge image messages.

        }, {
          key: "enlargeImage",
          value: function enlargeImage(img) {// let imageModal = this.modalCtrl.create("ImageModalPage", { img: img });
            // imageModal.present();
          }
        }, {
          key: "attach",
          value: function attach() {
            var _this2 = this;

            var action = this.actionSheet.create({
              header: 'Choose attachments',
              buttons: [{
                text: 'Camera',
                handler: function handler() {
                  _this2.imageProvider.uploadGroupPhotoMessage(_this2.groupId, _this2.camera.PictureSourceType.CAMERA).then(function (url) {
                    // Process image message.
                    _this2.sendPhotoMessage(url);
                  });
                }
              }, {
                text: 'Photo Library',
                handler: function handler() {
                  _this2.imageProvider.uploadGroupPhotoMessage(_this2.groupId, _this2.camera.PictureSourceType.PHOTOLIBRARY).then(function (url) {
                    // Process image message.
                    _this2.sendPhotoMessage(url);
                  });
                }
              }, {
                text: 'Video',
                handler: function handler() {
                  _this2.imageProvider.uploadGroupVideoMessage(_this2.groupId).then(function (url) {
                    _this2.sendVideoMessage(url);
                  });
                }
              }, {
                text: 'Location',
                handler: function handler() {
                  _this2.geolocation.getCurrentPosition({
                    timeout: 2000
                  }).then(function (res) {
                    var locationMessage = 'current location: lat:' + res.coords.latitude + ' lng:' + res.coords.longitude;
                    var mapUrl = '<a href=\'https://www.google.com/maps/search/' + res.coords.latitude + ',' + res.coords.longitude + '\'>View on Map</a>';

                    var confirm = _this2.alertCtrl.create({
                      header: 'Your Location',
                      message: locationMessage,
                      buttons: [{
                        text: 'cancel',
                        handler: function handler() {}
                      }, {
                        text: 'Share',
                        handler: function handler() {
                          _this2.message = locationMessage + '<br>' + mapUrl;

                          _this2.send('location');
                        }
                      }]
                    }).then(function (r) {
                      return r.present();
                    });
                  }, function (locationErr) {});
                }
              }, {
                text: 'Contact',
                handler: function handler() {
                  _this2.contacts.pickContact().then(function (data) {
                    _this2.message = '<b>Name:</b> ' + data.displayName + '<br><b>Mobile:</b> <a href=\'tel:' + data.phoneNumbers[0].value + '\'>' + data.phoneNumbers[0].value + '</a>';

                    _this2.send('contact');
                  }, function (err) {});
                }
              }, {
                text: 'cancel',
                role: 'cancel',
                handler: function handler() {}
              }]
            }).then(function (r) {
              return r.present();
            });
          }
        }, {
          key: "takePhoto",
          value: function takePhoto() {
            var _this3 = this;

            this.imageProvider.uploadGroupPhotoMessage(this.groupId, this.camera.PictureSourceType.CAMERA).then(function (url) {
              // Process image message.
              _this3.sendPhotoMessage(url);
            });
          } // Process photoMessage on database.

        }, {
          key: "sendPhotoMessage",
          value: function sendPhotoMessage(url) {
            var messages = JSON.parse(JSON.stringify(this.messages));
            messages.push({
              date: new Date().toString(),
              sender: firebase__WEBPACK_IMPORTED_MODULE_14__["default"].auth().currentUser.uid,
              type: 'image',
              url: url
            });
            this.dataProvider.getGroup(this.groupId).update({
              messages: messages
            });
            this.message = '';
          }
        }, {
          key: "sendVideoMessage",
          value: function sendVideoMessage(url) {
            var messages = JSON.parse(JSON.stringify(this.messages));
            messages.push({
              date: new Date().toString(),
              sender: firebase__WEBPACK_IMPORTED_MODULE_14__["default"].auth().currentUser.uid,
              type: 'video',
              url: url
            });
            this.dataProvider.getGroup(this.groupId).update({
              messages: messages
            });
            this.message = '';
          } // View group info.

        }, {
          key: "groupInfo",
          value: function groupInfo() {
            this.router.navigateByUrl('/groupinfo/' + this.groupId);
          } // Controller Functions

        }, {
          key: "onPress",
          value: function onPress($event) {}
        }, {
          key: "onPressUp",
          value: function onPressUp(event, message) {
            this.presentPopover(event, message);
          }
        }, {
          key: "joinGroup",
          value: function joinGroup() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this4 = this;

              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    this.alert = this.alertCtrl.create({
                      header: 'Join Group',
                      message: 'Are you sure you want to join this group?',
                      buttons: [{
                        text: 'Cancel'
                      }, {
                        text: 'Join',
                        handler: function handler(data) {
                          // Proceed
                          _this4.loadingProvider.show(); // Add groupInfo to each friend added to the group.


                          _this4.firestore.doc('/accounts/' + firebase__WEBPACK_IMPORTED_MODULE_14__["default"].auth().currentUser.uid + '/groups/' + _this4.groupId).update({
                            messagesRead: 0
                          }); // Add friend as members of the group.


                          _this4.group.members.push(firebase__WEBPACK_IMPORTED_MODULE_14__["default"].auth().currentUser.uid); // Add system message that the members are added to the group.


                          _this4.group.messages.push({
                            date: new Date().toString(),
                            sender: firebase__WEBPACK_IMPORTED_MODULE_14__["default"].auth().currentUser.uid,
                            type: 'system',
                            message: _this4.user.name + ' has joined the group.',
                            icon: 'md-contacts'
                          }); // Update group data on the database.


                          _this4.dataProvider.getGroup(_this4.groupId).update({
                            members: _this4.group.members,
                            messages: _this4.group.messages
                          }).then(function () {
                            // Back.
                            _this4.loadingProvider.hide();

                            _this4.navCtrl.back();
                          });
                        }
                      }]
                    }).then(function (r) {
                      return r.present();
                    });

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentPopover",
          value: function presentPopover(myEvent, message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var ev, popover;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    ev = {
                      target: {
                        getBoundingClientRect: function getBoundingClientRect() {
                          return {
                            top: myEvent.center.y,
                            left: myEvent.center.x
                          };
                        }
                      }
                    };
                    _context2.next = 3;
                    return this.popoverCtrl.create({
                      component: _popover_popover_page__WEBPACK_IMPORTED_MODULE_15__["PopoverPage"],
                      componentProps: {
                        message: message,
                        groupId: this.groupId
                      },
                      event: ev,
                      translucent: true
                    });

                  case 3:
                    popover = _context2.sent;
                    _context2.next = 6;
                    return popover.present();

                  case 6:
                    return _context2.abrupt("return", _context2.sent);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getGroupDetailsandMessages",
          value: function getGroupDetailsandMessages() {
            var _this5 = this;

            // Get group details
            this.groupId = this.route.snapshot.params.id;
            this.subscription = this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe(function (group) {
              _this5.group = group.payload.data();
              _this5.title = group.payload.data().name; // Get Group Members

              if (_this5.group.members) {
                _this5.group.members.forEach(function (memberId) {
                  _this5.dataProvider.getUser(memberId).snapshotChanges().subscribe(function (member) {
                    if (member.key != null) {
                      member = Object.assign({
                        $key: member.key
                      }, member.payload.data());

                      _this5.addUpdateOrRemoveMember(member);
                    }
                  });
                });
              } // Get group messages


              _this5.dataProvider.getGroupMessages(_this5.groupId).snapshotChanges().subscribe(function (messagesRes) {
                var messages = messagesRes.payload.data();

                if (messages == null || messages == undefined) {
                  messages = [];
                }

                if (_this5.messages != null && _this5.messages != undefined) {
                  // Just append newly added messages to the bottom of the view.
                  if (messages.length > _this5.messages.length) {
                    var message = messages[messages.length - 1];

                    _this5.dataProvider.getUser(message.sender).snapshotChanges().subscribe(function (user) {
                      message.avatar = user.payload.data().img;
                    });

                    _this5.messages.push(message); // Also append to messagesToShow.


                    _this5.messagesToShow.push(message); // Reset scrollDirection to bottom.


                    _this5.scrollDirection = 'bottom';
                  }
                } else {
                  // Get all messages, this will be used as reference object for messagesToShow.
                  _this5.messages = [];
                  messages.forEach(function (message) {
                    _this5.dataProvider.getUser(message.sender).snapshotChanges().subscribe(function (user) {
                      if (user.key != null) {
                        message.avatar = user.payload.data().img;
                      }
                    });

                    _this5.messages.push(message);
                  }); // Load messages in relation to numOfMessages.

                  if (_this5.startIndex === -1) {
                    // Get initial index for numberOfMessages to show.
                    if (_this5.messages.length - _this5.numberOfMessages > 0) {
                      _this5.startIndex = _this5.messages.length - _this5.numberOfMessages;
                    } else {
                      _this5.startIndex = 0;
                    }
                  }

                  if (!_this5.messagesToShow) {
                    _this5.messagesToShow = [];
                  } // Set messagesToShow


                  for (var i = _this5.startIndex; i < _this5.messages.length; i++) {
                    _this5.messagesToShow.push(_this5.messages[i]);
                  }

                  _this5.loadingProvider.hide();
                }
              });

              _this5.dataProvider.getGroupMembers(_this5.groupId).snapshotChanges().subscribe(function (memberIdsRes) {
                var memberIds = memberIdsRes.payload.data();

                if (memberIds.includes(firebase__WEBPACK_IMPORTED_MODULE_14__["default"].auth().currentUser.uid)) {
                  _this5.loggedInUserIsMember = true;
                } else {
                  _this5.loggedInUserIsMember = false;
                }
              });
            }); // Update messages' date time elapsed every minute based on Moment.js.

            var that = this;

            if (!that.updateDateTime) {
              that.updateDateTime = setInterval(function () {
                if (that.messages) {
                  that.messages.forEach(function (message) {
                    var date = message.date;
                    message.date = new Date(date);
                  });
                }
              }, 60000);
            }
          }
        }, {
          key: "getGroupDetailsandPosts",
          value: function getGroupDetailsandPosts() {
            var _this6 = this;

            // Get group details
            this.posts = [];
            this.groupId = this.route.snapshot.params.id;
            this.subscription = this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe(function (group) {
              _this6.group = group.payload.data();
              _this6.title = group.payload.data().name; // Get Group Members

              if (_this6.group.members) {
                _this6.group.members.forEach(function (memberId) {
                  _this6.dataProvider.getUser(memberId).snapshotChanges().subscribe(function (member) {
                    if (member.payload.exists) {
                      member = Object.assign({
                        $key: member.payload.id
                      }, member.payload.data());

                      _this6.addUpdateOrRemoveMember(member);
                    }
                  });
                });
              } // Get group posts


              _this6.firstDataSetPost = _this6.firestore.collection('posts').ref.where('groupId', '==', _this6.groupId).where('type', '==', 'general').orderBy('date', 'desc').limit(5);

              _this6.firstDataSetPost.onSnapshot(function (po) {
                _this6.lastDataSetPost = po.docs[po.docs.length - 1];
                _this6.posts = [];

                _this6.loadEachPostData(po);
              });
            }); // Update messages' date time elapsed every minute based on Moment.js.

            var that = this;

            if (!that.updateDateTime) {
              that.updateDateTime = setInterval(function () {
                if (that.posts) {
                  that.posts.forEach(function (post) {
                    var date = post.date;
                    post.date = new Date(date);
                  });
                }
              }, 60000);
            }
          }
        }, {
          key: "loadEachPostData",
          value: function loadEachPostData(po) {
            var _this7 = this;

            po.forEach(function (p) {
              var post;
              post = p.data();
              post.key = p.id;
              var startDate = new Date(post.date); // Do your operations

              var endDate = new Date();
              var seconds = (endDate.getTime() - startDate.getTime()) / 1000;

              if (seconds > 120) {
                post.showNewIcon = false;
              } else {
                post.showNewIcon = true;
              } // get reactions list


              _this7.firestore.collection('posts').doc(post.key).collection('reactions').snapshotChanges().subscribe(function (reactions) {
                post.reactions = [];
                reactions.forEach(function (element) {
                  var reaction = element.payload.doc.data();
                  reaction.key = element.payload.doc.id;
                  post.reactions.push(reaction);
                }); // Check for Thanks

                if (reactions.length > 0) {
                  var foundSmiley = false;

                  if (post.reactions !== undefined) {
                    var r = post.reactions.find(function (el) {
                      return el.addedByUser.addedByKey === _this7.dataProvider.getCurrentUserId();
                    });
                    foundSmiley = r.reactionType.some(function (r) {
                      return r === 'Thanks';
                    });
                  }

                  if (foundSmiley) {
                    post.showSmiley = true;
                  } else {
                    post.showSmiley = false;
                  } // Check for Hugs


                  var foundHug = false;

                  if (post.reactions !== undefined) {
                    var _r = post.reactions.find(function (el) {
                      return el.addedByUser.addedByKey === _this7.dataProvider.getCurrentUserId();
                    });

                    foundHug = _r.reactionType.some(function (r) {
                      return r === 'Hug';
                    });
                  }

                  if (foundHug) {
                    post.showHug = true;
                  } else {
                    post.showHug = false;
                  }
                }
              });

              post.postTags = post.postTags.filter(function (x) {
                return x.isChecked !== false;
              });

              _this7.addOrUpdatePost(post);
            });
          }
        }, {
          key: "addUpdateOrRemoveMember",
          value: function addUpdateOrRemoveMember(member) {
            if (this.group) {
              if (this.group.members.indexOf(member.$key) > -1) {
                // User exists in the group.
                if (!this.groupMembers) {
                  this.groupMembers = [member];
                } else {
                  var index = -1;

                  for (var i = 0; i < this.groupMembers.length; i++) {
                    if (this.groupMembers[i].$key === member.$key) {
                      index = i;
                    }
                  } // Add/Update User.


                  if (index > -1) {
                    this.groupMembers[index] = member;
                  } else {
                    this.groupMembers.push(member);
                  }
                }
              } else {
                // User already left the group, remove member from list.
                var index1 = -1;

                for (var j = 0; j < this.groupMembers.length; j++) {
                  if (this.groupMembers[j].$key === member.$key) {
                    index1 = j;
                  }
                }

                if (index1 > -1) {
                  this.groupMembers.splice(index1, 1);
                }
              }
            }
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged($event) {
            if (this.tab === 'groups') {
              this.title = this.group.name;
              this.getGroupDetailsandMessages();
            } else if (this.tab === 'posts') {
              this.title = this.group.name;
              this.getGroupDetailsandPosts();
            } else if (this.tab === 'polls') {
              this.title = this.group.name;
              this.getPolls();
            } else if (this.tab === 'resources') {
              this.title = this.group.name;
              this.getResources();
            } else if (this.tab === 'events') {
              this.title = this.group.name;
              this.getEvents();
            } else if (this.tab === 'groupInfo') {
              this.title = this.group.name;
            }
          }
        }, {
          key: "getPolls",
          value: function getPolls() {
            var _this8 = this;

            // Get group posts
            this.firstDataSetPoll = this.firestore.collection('posts').ref.where('groupId', '==', this.groupId).where('type', '==', 'poll').orderBy('date', 'desc').limit(5); // Get group posts

            this.firstDataSetPoll.onSnapshot(function (po) {
              _this8.lastDataSetPoll = po.docs[po.docs.length - 1];
              _this8.polls = [];

              _this8.loadEachPollData(po);
            });
          }
        }, {
          key: "loadEachPollData",
          value: function loadEachPollData(po) {
            var _this9 = this;

            po.forEach(function (p) {
              var post;
              post = p.data();
              post.key = p.id;
              var startDate = new Date(post.date); // Do your operations

              var endDate = new Date();
              var seconds = (endDate.getTime() - startDate.getTime()) / 1000;

              if (seconds > 120) {
                post.showNewIcon = false;
              } else {
                post.showNewIcon = true;
              }

              post.postTags = post.postTags.filter(function (x) {
                return x.isChecked !== false;
              });

              _this9.addOrUpdatePoll(post);
            });
          }
        }, {
          key: "viewPoll",
          value: function viewPoll(poll) {
            this.router.navigateByUrl('post/' + poll.key);
          }
        }, {
          key: "viewResource",
          value: function viewResource(resource) {
            this.router.navigateByUrl('post/' + resource.key);
          }
        }, {
          key: "viewPost",
          value: function viewPost(post) {
            this.router.navigateByUrl('post/' + post.key);
          }
        }, {
          key: "viewEvent",
          value: function viewEvent(event) {
            this.router.navigateByUrl('post/' + event.key);
          }
        }, {
          key: "newPoll",
          value: function newPoll() {
            this.router.navigateByUrl('/new-poll/' + this.groupId);
          }
        }, {
          key: "newPost",
          value: function newPost() {
            this.router.navigateByUrl('/new-post/' + this.groupId);
          }
        }, {
          key: "newResource",
          value: function newResource() {
            this.router.navigateByUrl('/new-resource/' + this.groupId);
          }
        }, {
          key: "newEvent",
          value: function newEvent() {
            this.router.navigateByUrl('/new-event/' + this.groupId);
          }
        }, {
          key: "getResources",
          value: function getResources() {
            var _this10 = this;

            // Get group posts
            this.firstDataSetResources = this.firestore.collection('posts').ref.where('groupId', '==', this.groupId).where('type', '==', 'resource').orderBy('date', 'desc').limit(5); // Get group posts

            this.firstDataSetResources.onSnapshot(function (po) {
              _this10.lastDataSetResources = po.docs[po.docs.length - 1];
              _this10.resources = [];

              _this10.loadEachResourceData(po);
            });
          }
        }, {
          key: "loadEachResourceData",
          value: function loadEachResourceData(po) {
            var _this11 = this;

            po.forEach(function (p) {
              var post;
              post = p.data();
              post.key = p.id;
              var startDate = new Date(post.date); // Do your operations

              var endDate = new Date();
              var seconds = (endDate.getTime() - startDate.getTime()) / 1000;

              if (seconds > 120) {
                post.showNewIcon = false;
              } else {
                post.showNewIcon = true;
              } // get reactions list


              _this11.firestore.collection('posts').doc(post.key).collection('reactions').snapshotChanges().subscribe(function (reactions) {
                post.reactions = [];
                reactions.forEach(function (element) {
                  var reaction = element.payload.doc.data();
                  reaction.key = element.payload.doc.id;
                  post.reactions.push(reaction);
                }); // Check for Thanks

                if (reactions) {
                  var foundSmiley = false;

                  if (post.reactions !== undefined) {
                    foundSmiley = post.reactions.some(function (el) {
                      return el.addedByUser.addedByKey === _this11.dataProvider.getCurrentUserId() && el.reactionType === 'Thanks';
                    });
                  }

                  if (foundSmiley) {
                    post.showSmiley = true;
                  } else {
                    post.showSmiley = false;
                  } // Check for Bookmark


                  var foundBookmark = false;

                  if (post.reactions !== undefined) {
                    foundBookmark = post.reactions.some(function (el) {
                      return el.addedByUser.addedByKey === _this11.dataProvider.getCurrentUserId() && el.reactionType === 'Bookmark';
                    });
                  }

                  if (foundBookmark) {
                    post.showBookmark = true;
                  } else {
                    post.showBookmark = false;
                  }
                }
              });

              post.postTags = post.postTags.filter(function (x) {
                return x.isChecked !== false;
              });

              _this11.addOrUpdateResource(post);
            });
          }
        }, {
          key: "getEvents",
          value: function getEvents() {
            var _this12 = this;

            // Get group posts
            this.firstDataSetEvent = this.firestore.collection('posts').ref.where('groupId', '==', this.groupId).where('type', '==', 'event').orderBy('date', 'desc').limit(5); // Get group posts

            this.firstDataSetEvent.onSnapshot(function (po) {
              _this12.lastDataSetEvent = po.docs[po.docs.length - 1];
              _this12.events = [];

              _this12.loadEachEventData(po);
            });
          }
        }, {
          key: "loadEachEventData",
          value: function loadEachEventData(po) {
            var _this13 = this;

            po.forEach(function (p) {
              var post;
              post = p.data();
              post.key = p.id;
              var startDate = new Date(post.date); // Do your operations

              var endDate = new Date();
              var seconds = (endDate.getTime() - startDate.getTime()) / 1000;

              if (seconds > 120) {
                post.showNewIcon = false;
              } else {
                post.showNewIcon = true;
              } // get reactions list


              _this13.firestore.collection('posts').doc(post.key).collection('reactions').snapshotChanges().subscribe(function (reactions) {
                post.reactions = [];
                reactions.forEach(function (element) {
                  var reaction = element.payload.doc.data();
                  reaction.key = element.payload.doc.id;
                  post.reactions.push(reaction);
                }); // Check for Thanks

                if (reactions) {
                  var foundSmiley = false;

                  if (post.reactions !== undefined) {
                    foundSmiley = post.reactions.some(function (el) {
                      return el.addedByUser.addedByKey === _this13.dataProvider.getCurrentUserId() && el.reactionType === 'Thanks';
                    });
                  }

                  if (foundSmiley) {
                    post.showSmiley = true;
                  } else {
                    post.showSmiley = false;
                  } // Check for Checkin


                  var foundCheckin = false;

                  if (post.reactions !== undefined) {
                    foundCheckin = post.reactions.some(function (el) {
                      return el.addedByUser.addedByKey === _this13.dataProvider.getCurrentUserId() && el.reactionType === 'Checkin';
                    });
                  }

                  if (foundCheckin) {
                    post.showCheckin = true;
                  } else {
                    post.showCheckin = false;
                  }
                }
              });

              post.postTags = post.postTags.filter(function (x) {
                return x.isChecked !== false;
              });

              _this13.addOrUpdateEvent(post);
            });
          }
        }, {
          key: "addOrUpdatePoll",
          value: function addOrUpdatePoll(poll) {
            var totalPollCount = 0; // Add total poll count

            if (poll.pollOptions) {
              poll.pollOptions.forEach(function (element) {
                if (element.members !== undefined) {
                  totalPollCount = totalPollCount + element.members.length;
                }
              });
            }

            poll.totalPollCount = totalPollCount; // Add NEW Icon

            var startDate = new Date(poll.dateCreated);
            var endDate = new Date();
            var seconds = (endDate.getTime() - startDate.getTime()) / 1000;

            if (seconds > 120) {
              poll.showNewIcon = false;
            } else {
              poll.showNewIcon = true;
            }

            if (!this.polls) {
              this.polls = [poll];
            } else {
              var index = -1;

              for (var i = 0; i < this.polls.length; i++) {
                if (this.polls[i].key == poll.key) {
                  index = i;
                }
              }

              if (index > -1) {
                this.polls[index] = poll;
              } else {
                this.polls.push(poll);
              }
            }
          }
        }, {
          key: "addOrUpdateResource",
          value: function addOrUpdateResource(resource) {
            // Add NEW Icon
            var startDate = new Date(resource.dateCreated);
            var endDate = new Date();
            var seconds = (endDate.getTime() - startDate.getTime()) / 1000;

            if (seconds > 120) {
              resource.showNewIcon = false;
            } else {
              resource.showNewIcon = true;
            }

            if (!this.resources) {
              this.resources = [resource];
            } else {
              var index = -1;

              for (var i = 0; i < this.resources.length; i++) {
                if (this.resources[i].key == resource.key) {
                  index = i;
                }
              }

              if (index > -1) {
                this.resources[index] = resource;
              } else {
                this.resources.push(resource);
              }
            }
          }
        }, {
          key: "addOrUpdatePost",
          value: function addOrUpdatePost(post) {
            if (!this.posts) {
              this.posts = [post];
            } else {
              var index = -1;

              for (var i = 0; i < this.posts.length; i++) {
                if (this.posts[i].key == post.key) {
                  index = i;
                }
              }

              if (index > -1) {
                this.posts[index] = post;
              } else {
                this.posts.push(post);
              }
            }
          }
        }, {
          key: "addOrUpdateEvent",
          value: function addOrUpdateEvent(event) {
            // Add NEW Icon
            var startDate = new Date(event.dateCreated);
            var endDate = new Date();
            var seconds = (endDate.getTime() - startDate.getTime()) / 1000;

            if (seconds > 120) {
              event.showNewIcon = false;
            } else {
              event.showNewIcon = true;
            }

            if (!this.events) {
              this.events = [event];
            } else {
              var index = -1;

              for (var i = 0; i < this.events.length; i++) {
                if (this.events[i].key === event.key) {
                  index = i;
                }
              }

              if (index > -1) {
                this.events[index] = event;
              } else {
                this.events.push(event);
              }
            }
          }
        }, {
          key: "showGroupOptions",
          value: function showGroupOptions() {
            var _this14 = this;

            var action = this.actionSheet.create({
              header: 'Create a new ...',
              backdropDismiss: true,
              mode: 'md',
              cssClass: 'GroupAction',
              buttons: [{
                text: 'Post',
                icon: 'chatbubbles',
                handler: function handler() {
                  _this14.newPost();
                }
              }, {
                text: 'Resource',
                icon: 'document',
                handler: function handler() {
                  _this14.newResource();
                }
              }, {
                text: 'Poll',
                icon: 'podium',
                handler: function handler() {
                  _this14.newPoll();
                }
              }, {
                text: 'Event',
                icon: 'calendar',
                cssClass: 'cancelAction',
                handler: function handler() {
                  _this14.newEvent();
                }
              }]
            }).then(function (r) {
              return r.present();
            });
          }
        }, {
          key: "submitReactionPost",
          value: function submitReactionPost(post, reactionType) {
            switch (reactionType) {
              case 'Thanks':
                {
                  if (!post.showSmiley) {
                    this.addPostReaction(post, reactionType);
                    post.showSmiley = true;
                    post.totalReactionCount += 1;
                  } else {
                    this.removePostReaction(post, reactionType);
                    post.showSmiley = false;
                    post.totalReactionCount -= 1;
                  }

                  break;
                }

              case 'Hug':
                {
                  if (!post.showHug) {
                    this.addPostReaction(post, reactionType);
                    post.showHug = true;
                    post.totalReactionCount += 1;
                  } else {
                    this.removePostReaction(post, reactionType);
                    post.showHug = false;
                    post.totalReactionCount -= 1;
                  }

                  break;
                }

              case 'Checkin':
                {
                  if (!post.showCheckin) {
                    this.addPostReaction(post, reactionType);
                    post.showCheckin = true;
                    post.totalReactionCount += 1;
                  } else {
                    this.removePostReaction(post, reactionType);
                    post.showCheckin = false;
                    post.totalReactionCount -= 1;
                  }

                  break;
                }

              case 'Bookmark':
                {
                  if (!post.showBookmark) {
                    this.addPostReaction(post, reactionType);
                    post.showBookmark = true;
                    post.totalReactionCount += 1;
                  } else {
                    this.removePostReaction(post, reactionType);
                    post.showBookmark = false;
                    post.totalReactionCount -= 1;
                  }

                  break;
                }
            }
          }
        }, {
          key: "addPostReaction",
          value: function addPostReaction(post, reactionType) {
            var _this15 = this;

            // first find the post in the collection
            var postIndex;
            var p;

            if (post.type === 'general') {
              postIndex = this.posts.findIndex(function (el) {
                return el.key === post.key;
              });
              p = this.posts[postIndex];
            } else if (post.type === 'event') {
              postIndex = this.events.findIndex(function (el) {
                return el.key === post.key;
              });
              p = this.events[postIndex];
            } else if (post.type === 'poll') {
              postIndex = this.polls.findIndex(function (el) {
                return el.key === post.key;
              });
              p = this.polls[postIndex];
            } else if (post.type === 'resource') {
              postIndex = this.resources.findIndex(function (el) {
                return el.key === post.key;
              });
              p = this.resources[postIndex];
            }

            var r = p.reactions.find(function (el) {
              return el.addedByUser.addedByKey === _this15.dataProvider.getCurrentUserId();
            });

            if (!r) {
              var react = {
                dateCreated: new Date(),
                addedByUser: {
                  addedByKey: this.dataProvider.getCurrentUserId(),
                  addedByUsername: this.loggedInUser.username,
                  addedByImg: this.loggedInUser.img
                },
                reactionType: [reactionType]
              };
              this.dataProvider.addPostReactions(post.key, react).then(function () {// // Update user notifications.
                // if (!this.userNotifications.some(p => p !== this.postId)) {
                //   this.userNotifications.push(this.postId);
                //   this.dataProvider.getUser(this.loggedInUserId).update({
                //     userNotifications: this.userNotifications
                //   });
                // }
                // // Update user activity.
                // if (!this.userReactions && this.userReactions.some(p => p !== this.postId)) {
                //   this.userReactions.push(this.postId);
                //   this.dataProvider.getUser(this.loggedInUserId).update({
                //     userReactions: this.userReactions
                //   });
                // }
              });
            } else {
              this.firestore.collection('posts').doc(post.key).collection('reactions').doc(r.key).update({
                reactionType: firebase__WEBPACK_IMPORTED_MODULE_14__["default"].firestore.FieldValue.arrayUnion(reactionType)
              }).then(function () {
                var increment = firebase__WEBPACK_IMPORTED_MODULE_14__["default"].firestore.FieldValue.increment(1);

                _this15.firestore.collection('posts').doc(post.key).update({
                  totalReactionCount: increment
                });
              });
            }
          }
        }, {
          key: "removePostReaction",
          value: function removePostReaction(post, reactionType) {
            var _this16 = this;

            var postIndex;
            var p;

            if (post.type === 'general') {
              postIndex = this.posts.findIndex(function (el) {
                return el.key === post.key;
              });
              p = this.posts[postIndex];
            } else if (post.type === 'event') {
              postIndex = this.events.findIndex(function (el) {
                return el.key === post.key;
              });
              p = this.events[postIndex];
            } else if (post.type === 'poll') {
              postIndex = this.polls.findIndex(function (el) {
                return el.key === post.key;
              });
              p = this.polls[postIndex];
            } else if (post.type === 'resource') {
              postIndex = this.resources.findIndex(function (el) {
                return el.key === post.key;
              });
              p = this.resources[postIndex];
            }

            var found = false;

            if (p.reactions !== undefined) {
              var values = Object.keys(p.reactions).map(function (e) {
                return p.reactions[e];
              });
              var reaction = p.reactions.find(function (el) {
                return el.addedByUser.addedByKey === _this16.dataProvider.getCurrentUserId();
              });

              if (reaction.reactionType.length === 1 && reaction.reactionType.some(function (e) {
                return e === reactionType;
              })) {
                this.dataProvider.removePostReaction(post.key, reaction.key);
              } else {
                // reaction.reactionType = reaction.reactionType.filter(x => x !== reactionType);
                // this.dataProvider.updatePostReactions(post.key, reaction, true);
                this.firestore.collection('posts').doc(post.key).collection('reactions').doc(reaction.key).update({
                  reactionType: firebase__WEBPACK_IMPORTED_MODULE_14__["default"].firestore.FieldValue.arrayRemove(reactionType)
                }).then(function () {
                  var increment = firebase__WEBPACK_IMPORTED_MODULE_14__["default"].firestore.FieldValue.increment(-1);

                  _this16.firestore.collection('posts').doc(post.key).update({
                    totalReactionCount: increment
                  });
                });
              }
            }
          }
        }, {
          key: "showReactionsList",
          value: function showReactionsList(post) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var postIndex, p, modal;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(post.totalReactionCount === 0)) {
                      _context3.next = 2;
                      break;
                    }

                    return _context3.abrupt("return");

                  case 2:
                    if (post.type === 'general') {
                      postIndex = this.posts.findIndex(function (el) {
                        return el.key === post.key;
                      });
                      p = this.posts[postIndex];
                    } else if (post.type === 'event') {
                      postIndex = this.events.findIndex(function (el) {
                        return el.key === post.key;
                      });
                      p = this.events[postIndex];
                    } else if (post.type === 'poll') {
                      postIndex = this.polls.findIndex(function (el) {
                        return el.key === post.key;
                      });
                      p = this.polls[postIndex];
                    } else if (post.type === 'resource') {
                      postIndex = this.resources.findIndex(function (el) {
                        return el.key === post.key;
                      });
                      p = this.resources[postIndex];
                    }

                    _context3.next = 5;
                    return this.modalCtrl.create({
                      component: _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_16__["ReactionListModalPage"],
                      componentProps: {
                        reactions: p.reactions
                      }
                    });

                  case 5:
                    modal = _context3.sent;
                    _context3.next = 8;
                    return modal.present();

                  case 8:
                    return _context3.abrupt("return", _context3.sent);

                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "showPostOptions",
          value: function showPostOptions(post) {
            var action = this.actionSheet.create({
              header: 'Post options',
              backdropDismiss: true,
              mode: 'md',
              cssClass: 'GroupAction',
              buttons: this.createPostOptionButtons(post)
            }).then(function (r) {
              return r.present();
            });
          }
        }, {
          key: "followPost",
          value: function followPost(post) {
            var _this17 = this;

            if (!this.notifications) {
              this.notifications = [post.key];
            } else {
              this.notifications.push(post.key);
            }

            this.dataProvider.getUser(this.loggedInUserId).update({
              notifications: this.notifications
            }).then(function () {
              _this17.loadingProvider.showToast('You will be notified when there are new replies');
            });
          }
        }, {
          key: "unFollowPost",
          value: function unFollowPost(post) {
            var _this18 = this;

            var index = this.notifications.indexOf(post.key, 0);

            if (index > -1) {
              this.notifications.splice(index, 1);
            }

            this.dataProvider.getUser(this.loggedInUserId).update({
              notifications: this.notifications
            }).then(function () {
              _this18.loadingProvider.showToast('You won\'t get notifications for this post');
            });
          }
        }, {
          key: "reportPost",
          value: function reportPost(post) {
            var _this19 = this;

            this.dataProvider.addReports(this.loggedInUserId, post).then(function () {
              _this19.loadingProvider.showToast('Thank you for reporting the post.');
            });
          }
        }, {
          key: "deletePost",
          value: function deletePost(post) {
            var _this20 = this;

            this.alertCtrl.create({
              header: 'Delete Post',
              message: 'Are you sure you want to delete this post?',
              buttons: [{
                text: 'Cancel'
              }, {
                text: 'Yes',
                handler: function handler(data) {
                  _this20.firestore.doc('posts/' + post.key)["delete"]();
                }
              }]
            }).then(function (r) {
              return r.present();
            });
          }
        }, {
          key: "createPostOptionButtons",
          value: function createPostOptionButtons(post) {
            var _this21 = this;

            var buttons = [];
            var cancelButton = {
              text: 'Cancel',
              icon: 'close',
              role: 'cancel',
              handler: function handler() {}
            };
            var reportButton = {
              text: 'Report Post',
              icon: 'flag-outline',
              handler: function handler() {
                _this21.reportPost(post);
              }
            };
            var notificationButton = {};

            if (post.addedByUser.addedByKey === this.loggedInUserId) {
              var deletePostButton = {
                text: 'Delete Post',
                icon: 'trash-outline',
                cssClass: 'actionicon',
                handler: function handler() {
                  _this21.deletePost(post);
                }
              };
              buttons.push(deletePostButton);
            } else {
              if (this.notifications && this.notifications.some(function (el) {
                return el === post.key;
              })) {
                notificationButton = {
                  text: 'Turn Off Notifications',
                  icon: 'notifications-off-outline',
                  cssClass: 'actionicon',
                  handler: function handler() {
                    _this21.unFollowPost(post);
                  }
                };
              } else {
                notificationButton = {
                  text: 'Turn On Notifications',
                  icon: 'notifications-outline',
                  cssClass: 'actionicon',
                  handler: function handler() {
                    _this21.followPost(post);
                  }
                };
              }

              buttons.push(notificationButton);
            }

            buttons.push(reportButton);
            buttons.push(cancelButton);
            return buttons;
          }
        }, {
          key: "loadDataPosts",
          value: function loadDataPosts(event) {
            var _this22 = this;

            if (this.posts.length > this.maxNoOfPosts) {
              event.target.disabled = true;
            } else {
              if (this.lastDataSetPost) {
                this.nextDataSetPost = this.firestore.collection('posts').ref.where('groupId', '==', this.groupId).where('type', '==', 'general').orderBy('date', 'desc').startAfter(this.lastDataSetPost).limit(5);
                this.nextDataSetPost.onSnapshot(function (po) {
                  _this22.lastDataSetPost = po.docs[po.docs.length - 1];

                  if (po.docs.length > 0) {
                    _this22.loadEachPostData(po);
                  }

                  event.target.complete();
                });
              } else {
                event.target.complete();
              }
            }
          }
        }, {
          key: "loadDataPolls",
          value: function loadDataPolls(event) {
            var _this23 = this;

            if (this.polls.length > this.maxNoOfPolls) {
              event.target.disabled = true;
            } else {
              if (this.lastDataSetPoll) {
                this.nextDataSetPoll = this.firestore.collection('posts').ref.where('groupId', '==', this.groupId).where('type', '==', 'poll').orderBy('date', 'desc').startAfter(this.lastDataSetPoll).limit(5);
                this.nextDataSetPoll.onSnapshot(function (po) {
                  _this23.lastDataSetPoll = po.docs[po.docs.length - 1];

                  if (po.docs.length > 0) {
                    _this23.loadEachPollData(po);
                  }

                  event.target.complete();
                });
              } else {
                event.target.complete();
              }
            }
          }
        }, {
          key: "loadDataEvents",
          value: function loadDataEvents(event) {
            var _this24 = this;

            if (this.events.length > this.maxNoOfEvents) {
              event.target.disabled = true;
            } else {
              if (this.lastDataSetEvent) {
                this.nextDataSetEvent = this.firestore.collection('posts').ref.where('groupId', '==', this.groupId).where('type', '==', 'event').orderBy('date', 'desc').startAfter(this.lastDataSetEvent).limit(5);
                this.nextDataSetEvent.onSnapshot(function (po) {
                  _this24.lastDataSetEvent = po.docs[po.docs.length - 1];

                  if (po.docs.length > 0) {
                    _this24.loadEachEventData(po);
                  }

                  event.target.complete();
                });
              } else {
                event.target.complete();
              }
            }
          }
        }, {
          key: "loadDataResources",
          value: function loadDataResources(event) {
            var _this25 = this;

            if (this.events.length > this.maxNoOfResources) {
              event.target.disabled = true;
            } else {
              if (this.lastDataSetResources) {
                this.nextDataSetResources = this.firestore.collection('posts').ref.where('groupId', '==', this.groupId).where('type', '==', 'resource').orderBy('date', 'desc').startAfter(this.lastDataSetResources).limit(5);
                this.nextDataSetResources.onSnapshot(function (po) {
                  _this25.lastDataSetResources = po.docs[po.docs.length - 1];

                  if (po.docs.length > 0) {
                    _this25.loadEachResourceData(po);
                  }

                  event.target.complete();
                });
              } else {
                event.target.complete();
              }
            }
          }
        }]);
      }();

      GroupPage.ctorParameters = function () {
        return [{
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["AngularFirestore"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }, {
          type: _services_image_service__WEBPACK_IMPORTED_MODULE_11__["ImageService"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_10__["LoadingService"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"]
        }, {
          type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_6__["Keyboard"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"]
        }, {
          type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_8__["Contacts"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"]
        }];
      };

      GroupPage.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['content', null]
        }],
        infiniteScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonInfiniteScroll"], {
            "static": true
          }]
        }]
      };
      GroupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-group',
        template: _raw_loader_group_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_group_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["AngularFirestore"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"], _services_image_service__WEBPACK_IMPORTED_MODULE_11__["ImageService"], _services_loading_service__WEBPACK_IMPORTED_MODULE_10__["LoadingService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_6__["Keyboard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"], _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_8__["Contacts"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"]])], GroupPage);
      /***/
    },

    /***/
    "rrFO":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/group/group.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function rrFO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title (click)=\"groupInfo()\">{{title}}</ion-title>\n    <ion-buttons slot=\"end\"> \n      <ion-button *ngIf=\"loggedInUserIsMember == true\" (click)=\"showGroupOptions()\" ><ion-icon name=\"ellipsis-vertical\"></ion-icon></ion-button>\n   <ion-button *ngIf=\"loggedInUserIsMember == false\" (click)=\"joinGroup()\" >Join Group</ion-button>\n    <ion-button *ngIf=\"loggedInUserIsMember == true && tab=='posts'\" (click)=\"newPost()\" ><ion-icon name=\"add-circle-outline\"></ion-icon></ion-button>\n    <ion-button *ngIf=\"loggedInUserIsMember == true && tab=='polls'\" (click)=\"newPoll()\" ><ion-icon name=\"add-circle-outline\"></ion-icon></ion-button>\n\t\t<ion-button *ngIf=\"loggedInUserIsMember == true && tab=='resources'\" (click)=\"newResource()\" ><ion-icon name=\"add-circle-outline\"></ion-icon></ion-button>\n\t\t<ion-button *ngIf=\"loggedInUserIsMember == true && tab=='events'\" (click)=\"newEvent()\" ><ion-icon name=\"add-circle-outline\"></ion-icon></ion-button>\n\t</ion-buttons>\n\n  </ion-toolbar>\n\n  <ion-segment value=\"posts\" color=\"secondary\" [(ngModel)]=\"tab\" (ionChange)=\"segmentChanged($event)\">\n\t\t<!-- <ion-segment-button value=\"group\">\n  \t\t\t<ion-icon name=\"chatbubbles\"></ion-icon>\n    </ion-segment-button> -->\n\t\t<!-- <ion-segment-button value=\"groupInfo\">\n      <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n\t\t</ion-segment-button> -->\n    <ion-segment-button value=\"posts\">\n      <ion-icon size=\"medium\" name=\"chatbubbles\"></ion-icon>\n      <!-- <span class=\"tab-title\">Posts</span> -->\n    </ion-segment-button>\n\t\t<ion-segment-button value=\"polls\">\n      <ion-icon size=\"medium\" name=\"podium\"></ion-icon>\n      <!-- <span class=\"tab-title\">Polls</span> -->\n\t\t</ion-segment-button>\n\t\t<ion-segment-button value=\"resources\">\n      <ion-icon size=\"medium\" name=\"library\"></ion-icon>\n      <!-- <span class=\"tab-title\">Resources</span> -->\n    </ion-segment-button>\n    <ion-segment-button value=\"events\">\n      <ion-icon size=\"medium\" name=\"calendar\"></ion-icon>\n      <!-- <span class=\"tab-title\">Events</span> -->\n    </ion-segment-button>\n</ion-segment>\n</ion-header>\n\n<ion-content fullscreen>\n  <div [ngSwitch]=\"tab\" >\n\n  <div *ngSwitchCase=\"'posts'\">\n    <!-- No Posts to show -->\n     <div class=\"empty-list\" *ngIf=\"posts && posts.length == 0\">\n     <h1><ion-icon name=\"chatbubbles-outline\"></ion-icon></h1>\n     <p>No new Posts added to this group.</p>\n     </div>\n     <!-- Show Posts -->\n     <div *ngIf=\"posts && posts.length > 0\" >\n     <div class=\"listing-item\" *ngFor=\"let item of posts\" >\n      <ion-card>\n        <ion-card-header>\n          <ion-row>\n            <ion-col size=10>\n           <ion-card-subtitle class=\"addedBy\">\n            <img class=\"addedByImg\" src=\"{{item.avatar}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> \n             <p><a class=\"addedByTitle\" (click)=\"viewUser(item.addedByUser.addedByKey)\" ><b>{{item.addedByUser.addedByUsername}}</b></a><!-- <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" />  -->\n              <br/>\n             <span class=\"addedByDate\">posted {{item.date.toDate() | DateFormat}}</span><br/>\n            <a (click)=\"viewGroup(item.groupId)\" class=\"addedByTitle\">in <b>{{item.groupName}}</b></a></p>\n          </ion-card-subtitle>\n        </ion-col>\n        <ion-col size=2>\n          <ion-buttons>\n            <ion-button (click)=\"showPostOptions(item)\">\n              <ion-icon slot=\"end\" name=\"chevron-down-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-col>\n        </ion-row>\n        </ion-card-header>\n        <ion-card-content class=\"message\" *ngIf=\"item.type === 'general'\">\n          <div (click)=\"viewPost(item)\">\n            <div>\n              <ion-slides class=\"slider\" pager=\"true\" [options]=\"slideOptsOne\" #slideWithNav>\n              <ion-slide *ngFor=\"let s of item.postMedia\">\n                <div class=\"bgSizeContain\" \n                [ngStyle]=\"{'background-image':'url('+s+')'}\">\n              </div>\n              </ion-slide>\n            </ion-slides>\n            </div>\n          <ion-label><b>{{item.title}}.</b> {{item.data.message}} <br/></ion-label>\n        </div>\n          <div class=\"tags-wrapper\">\n          <ion-row>\n            <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\n              <span class=\"item-rating\">#{{tag.val}}</span>\n            </div>\n          </ion-row>\n          </div>\n          <div class=\"reactions\">\n          <ion-row >\n            <ion-col size=3>\n              <ion-buttons>\n                <ion-button (click)=\"submitReactionPost(item, 'Thanks')\">\n               <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n               <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n              </ion-button>\n              </ion-buttons> \n            </ion-col>\n            <ion-col size=3>\n              <ion-buttons>\n                <ion-button (click)=\"submitReactionPost(item, 'Hug')\">\n               <div *ngIf=\"item.showHug\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/hug-active.svg\" ></ion-icon> <span class=\"text\">Hug</span></div> \n               <div *ngIf=\"!item.showHug\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/hug.svg\" ></ion-icon> <span class=\"text\">Hug</span></div> \n              </ion-button>\n              </ion-buttons> \n            </ion-col>\n            <ion-col size=2></ion-col>\n            <ion-col size=2>\n              <ion-buttons>\n                <ion-button (click)=\"showReactionsList(item)\">\n              <div><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/hug-active.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{item.totalReactionCount}}</span></div>\n            </ion-button>\n          </ion-buttons> \n            </ion-col>\n            <ion-col size=2>\n              <ion-buttons>\n                <ion-button>\n              <div><ion-icon size=\"small\" class=\"icon\" name=\"chatbox-outline\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\n            </ion-button>\n          </ion-buttons> \n            </ion-col>\n          </ion-row>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n     </div>\n    </div>\n     <div *ngSwitchCase=\"'polls'\">\n    <!-- No polls to show -->\n     <div class=\"empty-list\" *ngIf=\"polls && polls.length == 0\">\n     <h1><ion-icon name=\"md-chatbubbles\"></ion-icon></h1>\n     <p>No new polls yet.</p>\n     </div>\n     <!-- Show polls -->\n     <div *ngIf=\"polls && polls.length > 0\">\n      <div class=\"listing-item\" *ngFor=\"let item of polls\">\n     <ion-card>\n      <ion-card-header>\n        <ion-row>\n          <ion-col size=10>\n         <ion-card-subtitle class=\"addedBy\">\n          <img class=\"addedByImg\" src=\"{{item.avatar}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> \n           <p><a class=\"addedByTitle\" (click)=\"viewUser(item.addedByUser.addedByKey)\" ><b>{{item.addedByUser.addedByUsername}}</b></a><!-- <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" />  -->\n            <br/>\n           <span class=\"addedByDate\">posted {{item.date.toDate() | DateFormat}}</span><br/>\n          <a (click)=\"viewGroup(item.groupId)\" class=\"addedByTitle\">in <b>{{item.groupName}}</b></a></p>\n        </ion-card-subtitle>\n      </ion-col>\n      <ion-col size=2>\n        <ion-buttons>\n          <ion-button (click)=\"showPostOptions(item)\">\n            <ion-icon slot=\"end\" name=\"chevron-down-outline\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-col>\n      </ion-row>\n      </ion-card-header>\n\n      <ion-card-content class=\"message\" *ngIf=\"item.type === 'poll'\" >\n        <div (click)=\"viewPoll(item)\">\n        <b>{{item.title}}.</b><br/>\n        <ion-row  *ngFor=\"let pollOption of item.data.pollOptions\">\n          <ion-col >\n             <div><ion-icon class=\"poll-icon\" name=\"checkbox-outline\"></ion-icon> <span>{{pollOption.name}}</span></div>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div class=\"tags-wrapper\">\n        <ion-row>\n          <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\n            <span class=\"item-rating\">#{{tag.val}}</span>\n          </div>\n        </ion-row>\n        </div>\n\n              <ion-row class=\"info-row\" >\n         <ion-col size=\"8\">\n                   <span class=\"text\" *ngIf=\"!item.pollClosed\">Poll ends {{item.data.dateEnding.toDate() | DateFormat}}</span> \n                   <span class=\"text\" *ngIf=\"item.pollClosed\">Poll closed</span> \n                </ion-col>\n          <ion-col size=\"1\">\n          </ion-col>\n                <ion-col size=\"3\">\n                  <div><span class=\"text\">{{item.totalPollCount}} voted</span></div>\n                </ion-col>\n              </ion-row>\n      </ion-card-content>\n      </ion-card>\n   </div>\n      </div>\n    </div>\n    <div *ngSwitchCase=\"'resources'\">\n    <!-- No Resources to show -->\n     <div class=\"empty-list\" *ngIf=\"resources && resources.length == 0\">\n     <h1><ion-icon name=\"chatbubbles-outline\"></ion-icon></h1>\n     <p>No new Resources added to this group.</p>\n     </div>\n     <!-- Show Resources -->\n     <div *ngIf=\"resources && resources.length > 0\" >\n      <div class=\"listing-item\" *ngFor=\"let item of resources\">\n       <div>\n     <ion-card>\n      <ion-card-header>\n        <ion-row>\n          <ion-col size=10>\n         <ion-card-subtitle class=\"addedBy\">\n          <img class=\"addedByImg\" src=\"{{item.avatar}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> \n           <p><a class=\"addedByTitle\" (click)=\"viewUser(item.addedByUser.addedByKey)\" ><b>{{item.addedByUser.addedByUsername}}</b></a><!-- <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" />  -->\n            <br/>\n           <span class=\"addedByDate\">posted {{item.date.toDate() | DateFormat}}</span><br/>\n          <a (click)=\"viewGroup(item.groupId)\" class=\"addedByTitle\">in <b>{{item.groupName}}</b></a></p>\n        </ion-card-subtitle>\n      </ion-col>\n      <ion-col size=2>\n        <ion-buttons>\n          <ion-button (click)=\"showPostOptions(item)\">\n            <ion-icon slot=\"end\" name=\"chevron-down-outline\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-col>\n      </ion-row>\n      </ion-card-header>\n      <ion-card-content class=\"message\" *ngIf=\"item.type === 'resource'\">\n        <div (click)=\"viewResource(item)\">\n        <b>{{item.title}}.</b><br/>\n        <div *ngIf=\"item?.data.type == 'contact'\">\n          {{item.data.name}}<br/>\n          <div [innerHtml]=\"item.data.address\"></div><br/>\n          {{item.data.email}}<br/>\n          {{item.data.phones}}<br/>\n        </div>\n        <div *ngIf=\"item?.data.type == 'upload'\">\n          <div *ngIf=\"item.data.uploadtype == 'location'\" [innerHtml]=\"item.data.url\"></div>\n          <div *ngIf=\"item.data.uploadtype == 'contact'\">\n          {{item.data.name}}<br/>\n          {{item.data.address}}<br/>\n          {{item.data.phones}}<br/>\n          {{item.data.email}}<br/>\n          </div>\n          <div *ngIf=\"item.data.uploadtype == 'image'\">\n          <img src=\"{{item.data.resolvedurl}}\" />\n          </div>\n          <div *ngIf=\"item.data.uploadtype == 'video'\">\n            <video controls width=\"100%\" src=\"{{item.data.resolvedurl}}\" ></video>\n          </div>\n        </div>\n        <div *ngIf=\"item?.data.type == 'weblink'\">\n        {{item.data.metatitle}}<br/>\n        <img [src]=\"item.data.metaicon\"/> \n        {{item.data.metadescription}}<br/><br/>\n        <a href=\"{{item.data.metasite}}\">{{item.data.metasite}}</a>\n        </div>\n      </div>\n      <div class=\"tags-wrapper\">\n        <ion-row>\n          <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\n            <span class=\"item-rating\">#{{tag.val}}</span>\n          </div>\n        </ion-row>\n        </div>\n        <div class=\"reactions\">\n           <ion-row>\n            <ion-col size=3>\n              <ion-buttons>\n              <ion-button (click)=\"submitReactionPost(item, 'Thanks')\">\n             <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n             <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n              </ion-button>\n              </ion-buttons> \n            </ion-col>\n            <ion-col size=3>\n                 <ion-buttons>\n                 <ion-button (click)=\"submitReactionPost(item, 'Bookmark')\">\n                <div *ngIf=\"item.showBookmark\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/bookmark-active.svg\" ></ion-icon> <span class=\"text\">Bookmark</span></div> \n                <div *ngIf=\"!item.showBookmark\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/bookmark.svg\" ></ion-icon> <span class=\"text\">Bookmark</span></div> \n                 </ion-button>\n                 </ion-buttons> \n            </ion-col>\n          <ion-col size=2></ion-col>\n          <ion-col size=2>\n                 <ion-buttons>\n                 <ion-button (click)=\"showReactionsList(item)\">\n                 <div><ion-icon size=\"small\" src=\"./assets/icon/bookmark-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><span class=\"text\">{{item.totalReactionCount}}</span></div>\n               </ion-button>\n               </ion-buttons> \n               </ion-col>\n               <ion-col size=2>\n                 <ion-buttons>\n                 <ion-button>\n                  <div><ion-icon size=\"small\" class=\"icon\" name=\"chatbox-outline\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\n                </ion-button>\n               </ion-buttons> \n               </ion-col>\n          </ion-row>\n        \n        </div>\n      </ion-card-content>\n        </ion-card>\n           </div>\n     </div>\n      </div>\n    </div>\n    <div *ngSwitchCase=\"'events'\">\n      <!-- No Events to show -->\n       <div class=\"empty-list\" *ngIf=\"events && events.length == 0\">\n       <h1><ion-icon name=\"chatbubbles\"></ion-icon></h1>\n       <p>No new upcoming Events added to this group.</p>\n       </div>\n       <!-- Show Events -->\n       <div *ngIf=\"events && events.length > 0\" >\n        <div class=\"listing-item\" *ngFor=\"let item of events\">\n          <ion-card>\n            <ion-card-header>\n              <ion-row>\n                <ion-col size=10>\n               <ion-card-subtitle class=\"addedBy\">\n                <img class=\"addedByImg\" src=\"{{item.avatar}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> \n                 <p><a class=\"addedByTitle\" (click)=\"viewUser(item.addedByUser.addedByKey)\" ><b>{{item.addedByUser.addedByUsername}}</b></a><!-- <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" />  -->\n                  <br/>\n                 <span class=\"addedByDate\">posted {{item.date.toDate() | DateFormat}}</span><br/>\n                <a (click)=\"viewGroup(item.groupId)\" class=\"addedByTitle\">in <b>{{item.groupName}}</b></a></p>\n              </ion-card-subtitle>\n            </ion-col>\n            <ion-col size=2>\n              <ion-buttons>\n                <ion-button (click)=\"showPostOptions(item)\">\n                  <ion-icon slot=\"end\" name=\"chevron-down-outline\"></ion-icon>\n                </ion-button>\n              </ion-buttons>\n            </ion-col>\n            </ion-row>\n            </ion-card-header>\n            <ion-card-content class=\"message\" *ngIf=\"item.type === 'event'\">\n              <div (click)=\"viewEvent(item)\">\n              <b>{{item.title}}.</b> <br/>{{item.data.eventDate}} at {{item.data.eventTime}}<br/><br/>\n                {{item.data.address}}<br/><br/>\n                {{item.data.link}}\n              </div>\n              <div class=\"tags-wrapper\">\n                <ion-row>\n                  <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\n                    <span class=\"item-rating\">#{{tag.val}}</span>\n                  </div>\n                </ion-row>\n                </div>\n              <div class=\"reactions\">\n                <ion-row>\n                  <ion-col size=3>\n                    <ion-buttons>\n                      <ion-button (click)=\"submitReactionPost(item, 'Thanks')\">\n                      <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n                      <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n                    </ion-button>\n                    </ion-buttons> \n                  </ion-col>\n                  <ion-col size=3>\n                    <ion-buttons>\n                      <ion-button (click)=\"submitReactionPost(item, 'Checkin')\">\n                      <div *ngIf=\"item.showCheckin\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/checkin-active.svg\" ></ion-icon> <span class=\"text\">Checkin</span></div> \n                      <div *ngIf=\"!item.showCheckin\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/checkin.svg\" ></ion-icon> <span class=\"text\">Checkin</span></div> \n                    </ion-button>\n                    </ion-buttons> \n                  </ion-col>\n                  <ion-col size=2></ion-col>\n                  <ion-col size=2>\n                          <ion-buttons>\n                            <ion-button (click)=\"showReactionsList(item)\">\n                          <div><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/checkin-active.svg\" class=\"icon\"></ion-icon><span class=\"text\">{{item.totalReactionCount}}</span></div>\n                        </ion-button>\n                      </ion-buttons> \n                  </ion-col>\n                  <ion-col size=2>\n                          <ion-buttons>\n                            <ion-button>\n                              <div><ion-icon size=\"small\" class=\"icon\" name=\"chatbox-outline\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\n                            </ion-button>\n                      </ion-buttons> \n                  </ion-col>\n                 </ion-row>\n             </div>\n            </ion-card-content>\n        </ion-card>\n        </div>\n       </div>\n      </div>\n      <!-- Group Info -->\n <div  class=\"group-info\" *ngSwitchCase=\"'groupInfo'\">\n  <div>\n\n    <div class=\"group-img\">\n      <img src=\"{{group.img}}\">\n    </div>\n    <div class=\"group-name\">    \n      {{group.name}}\n    </div>\n    <div class=\"group-desc\">\n      {{group.description}}\n    </div>\n</div>\n<div class=\"group-name\"> \nGroup Tags\n</div>\n<div class=\"group-tags\">\n  <ion-row>\n    <div class=\"tags\" *ngFor=\"let tag of group.groupTags\">\n      <span class=\"item-rating\" [attr.ratingBase]=\"1\">#{{tag}}</span>\n    </div>\n  </ion-row>\n</div>\n<div class=\"group-name\"> \n  Group Members ({{groupMembers.length}})\n  </div>\n   <ion-list *ngIf=\"groupMembers\">\n    <!-- <ion-item (click)=\"addMembers()\">\n     <ion-icon name=\"add\" item-left></ion-icon>\n     <h2>Add Members</h2>\n     </ion-item>-->\n     <ion-item *ngFor=\"let member of groupMembers\" (click)=\"viewUser(member.$key)\">\n     <ion-avatar>\n       <img src=\"{{member.img}}\" onError=\"this.src='./assets/images/default-dp.png'\"/>\n     </ion-avatar>\n     <ion-label class=\"group-member-name\">{{member.name}}</ion-label>\n     <p>{{member.description}}</p>\n     </ion-item>\n   </ion-list>\n   <ion-list-header *ngIf=\"loggedInUserIsMember == true\" >\n     More\n   </ion-list-header>\n   <ion-list *ngIf=\"loggedInUserIsMember == true\"  style=\"text-align: center;\">  \n     <ion-item no-lines tappable (click)=\"leaveGroup()\" *ngIf=\"groupMembers && groupMembers.length > 1\">\n     Leave Group\n     </ion-item>\n     <!-- When there's only one member left, allow deleting of group. -->\n     <ion-item color=\"danger\" no-lines tappable (click)=\"deleteGroup()\" *ngIf=\"groupMembers && groupMembers.length <= 1\">\n     Delete Group\n     </ion-item>\n   </ion-list>\n   <p padding style=\"color:#aaa\">Started {{group.dateCreated | DateFormat}}</p>\n   </div>\n  </div>\n\n  <ion-infinite-scroll *ngIf=\"tab=='posts'\" threshold=\"100px\" (ionInfinite)=\"loadDataPosts($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <ion-infinite-scroll *ngIf=\"tab=='events'\" threshold=\"100px\" (ionInfinite)=\"loadDataEvents($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <ion-infinite-scroll *ngIf=\"tab=='polls'\" threshold=\"100px\" (ionInfinite)=\"loadDataPolls($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <ion-infinite-scroll *ngIf=\"tab=='resources'\" threshold=\"100px\" (ionInfinite)=\"loadDataResources($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=group-group-module-es5.js.map