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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./public/admin_assets/js/front.js":
/*!*****************************************!*\
  !*** ./public/admin_assets/js/front.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  'use strict'; // ------------------------------------------------------- //
  // Search Box
  // ------------------------------------------------------ //

  $('#search').on('click', function (e) {
    e.preventDefault();
    $('.search-box').fadeIn();
  });
  $('.dismiss').on('click', function () {
    $('.search-box').fadeOut();
  }); // ------------------------------------------------------- //
  // Card Close
  // ------------------------------------------------------ //

  $('.card-close a.remove').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.card').fadeOut();
  }); // ------------------------------------------------------- //
  // Tooltips init
  // ------------------------------------------------------ //

  $('[data-toggle="tooltip"]').tooltip(); // ------------------------------------------------------- //
  // Adding fade effect to dropdowns
  // ------------------------------------------------------ //

  $('.dropdown').on('show.bs.dropdown', function () {
    $(this).find('.dropdown-menu').first().stop(true, true).toggle();
  });
  /*
    $('.dropdown').on('hide.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).fadeOut();
    });
  */
  // ------------------------------------------------------- //
  // Sidebar Functionality
  // ------------------------------------------------------ //

  $('#toggle-btn').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.side-navbar').toggleClass('shrinked');
    $('.content-inner').toggleClass('active');
    $(document).trigger('sidebarChanged');

    if ($(window).outerWidth() > 1183) {
      if ($('#toggle-btn').hasClass('active')) {
        $('.navbar-header .brand-small').hide();
        $('.navbar-header .brand-big').show();
      } else {
        $('.navbar-header .brand-small').show();
        $('.navbar-header .brand-big').hide();
      }
    }

    if ($(window).outerWidth() < 1183) {
      $('.navbar-header .brand-small').show();
    }
  }); // ------------------------------------------------------- //
  // Universal Form Validation
  // ------------------------------------------------------ //

  $('.form-validate').each(function () {
    $(this).validate({
      errorElement: "div",
      errorClass: 'is-invalid',
      validClass: 'is-valid',
      ignore: ':hidden:not(.summernote, .checkbox-template, .form-control-custom),.note-editable.card-block',
      errorPlacement: function errorPlacement(error, element) {
        // Add the `invalid-feedback` class to the error element
        error.addClass("invalid-feedback");
        console.log(element);

        if (element.prop("type") === "checkbox") {
          error.insertAfter(element.siblings("label"));
        } else {
          error.insertAfter(element);
        }
      }
    });
  }); // ------------------------------------------------------- //
  // Material Inputs
  // ------------------------------------------------------ //

  var materialInputs = $('input.input-material'); // activate labels for prefilled values

  materialInputs.filter(function () {
    return $(this).val() !== "";
  }).siblings('.label-material').addClass('active'); // move label on focus

  materialInputs.on('focus', function () {
    $(this).siblings('.label-material').addClass('active');
  }); // remove/keep label on blur

  materialInputs.on('blur', function () {
    $(this).siblings('.label-material').removeClass('active');

    if ($(this).val() !== '') {
      $(this).siblings('.label-material').addClass('active');
    } else {
      $(this).siblings('.label-material').removeClass('active');
    }
  }); // ------------------------------------------------------- //
  // Footer
  // ------------------------------------------------------ //

  var contentInner = $('.content-inner');
  $(document).on('sidebarChanged', function () {
    adjustFooter();
  });
  $(window).on('resize', function () {
    adjustFooter();
  });

  function adjustFooter() {
    var footerBlockHeight = $('.main-footer').outerHeight();
    contentInner.css('padding-bottom', footerBlockHeight + 'px');
  } // ------------------------------------------------------- //
  // External links to new window
  // ------------------------------------------------------ //


  $('.external').on('click', function (e) {
    e.preventDefault();
    window.open($(this).attr("href"));
  }); // ------------------------------------------------------ //
  // For demo purposes, can be deleted
  // ------------------------------------------------------ //
  //

  /*
  var stylesheet = $('link#theme-stylesheet');
  $("<link id='new-stylesheet' rel='stylesheet'>").insertAfter(stylesheet);
  var alternateColour = $('link#new-stylesheet');
    if ($.cookie("theme_csspath")) {
      alternateColour.attr("href", $.cookie("theme_csspath"));
  }
   $("#colour").change(function () {
       if ($(this).val() !== '') {
           var theme_csspath = 'css/style.' + $(this).val() + '.css';
           alternateColour.attr("href", theme_csspath);
           $.cookie("theme_csspath", theme_csspath, {
              expires: 365,
              path: document.URL.substr(0, document.URL.lastIndexOf('/'))
          });
       }
       return false;
  });*/
});

/***/ }),

/***/ "./public/js/jquery-3.4.1.min.js":
/*!***************************************!*\
  !*** ./public/js/jquery-3.4.1.min.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */


!function (e, t) {
  "use strict";

  "object" == ( false ? undefined : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";

  var t = [],
      E = C.document,
      r = Object.getPrototypeOf,
      s = t.slice,
      g = t.concat,
      u = t.push,
      i = t.indexOf,
      n = {},
      o = n.toString,
      v = n.hasOwnProperty,
      a = v.toString,
      l = a.call(Object),
      y = {},
      m = function m(e) {
    return "function" == typeof e && "number" != typeof e.nodeType;
  },
      x = function x(e) {
    return null != e && e === e.window;
  },
      c = {
    type: !0,
    src: !0,
    nonce: !0,
    noModule: !0
  };

  function b(e, t, n) {
    var r,
        i,
        o = (n = n || E).createElement("script");
    if (o.text = e, t) for (r in c) {
      (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    }
    n.head.appendChild(o).parentNode.removeChild(o);
  }

  function w(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? n[o.call(e)] || "object" : _typeof(e);
  }

  var f = "3.4.1",
      k = function k(e, t) {
    return new k.fn.init(e, t);
  },
      p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  function d(e) {
    var t = !!e && "length" in e && e.length,
        n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }

  k.fn = k.prototype = {
    jquery: f,
    constructor: k,
    length: 0,
    toArray: function toArray() {
      return s.call(this);
    },
    get: function get(e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = k.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return k.each(this, e);
    },
    map: function map(n) {
      return this.pushStack(k.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function slice() {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: u,
    sort: t.sort,
    splice: t.splice
  }, k.extend = k.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;

    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        r = e[t], "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}, i = !1, a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }

    return a;
  }, k.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    globalEval: function globalEval(e, t) {
      b(e, {
        nonce: t && t.nonce
      });
    },
    each: function each(e, t) {
      var n,
          r = 0;

      if (d(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }

      return e;
    },
    trim: function trim(e) {
      return null == e ? "" : (e + "").replace(p, "");
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : i.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }

      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) {
        !t(e[i], i) !== a && r.push(e[i]);
      }

      return r;
    },
    map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          a = [];
      if (d(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && a.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && a.push(i);
      }
      return g.apply([], a);
    },
    guid: 1,
    support: y
  }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });

  var h = function (n) {
    var e,
        d,
        b,
        o,
        i,
        h,
        f,
        g,
        w,
        u,
        l,
        T,
        C,
        a,
        E,
        v,
        s,
        c,
        y,
        k = "sizzle" + 1 * new Date(),
        m = n.document,
        S = 0,
        r = 0,
        p = ue(),
        x = ue(),
        N = ue(),
        A = ue(),
        D = function D(e, t) {
      return e === t && (l = !0), 0;
    },
        j = {}.hasOwnProperty,
        t = [],
        q = t.pop,
        L = t.push,
        H = t.push,
        O = t.slice,
        P = function P(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }

      return -1;
    },
        R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
        $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
        F = new RegExp(M + "+", "g"),
        B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        _ = new RegExp("^" + M + "*," + M + "*"),
        z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp(M + "|>"),
        X = new RegExp($),
        V = new RegExp("^" + I + "$"),
        G = {
      ID: new RegExp("^#(" + I + ")"),
      CLASS: new RegExp("^\\.(" + I + ")"),
      TAG: new RegExp("^(" + I + "|[*])"),
      ATTR: new RegExp("^" + W),
      PSEUDO: new RegExp("^" + $),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + R + ")$", "i"),
      needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
    },
        Y = /HTML$/i,
        Q = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
        ne = function ne(e, t, n) {
      var r = "0x" + t - 65536;
      return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
    },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function ie(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        oe = function oe() {
      T();
    },
        ae = be(function (e) {
      return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      H.apply(t = O.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    function se(t, e, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = e && e.ownerDocument,
          p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;

      if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n;
          } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
        } else {
          if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
        }

        if (d.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && U.test(t)) {
            (s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = k), o = (l = h(t)).length;

            while (o--) {
              l[o] = "#" + s + " " + xe(l[o]);
            }

            c = l.join(","), f = ee.test(t) && ye(e.parentNode) || e;
          }

          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            A(t, !0);
          } finally {
            s === k && e.removeAttribute("id");
          }
        }
      }

      return g(t.replace(B, "$1"), e, n, r);
    }

    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }

    function le(e) {
      return e[k] = !0, e;
    }

    function ce(e) {
      var t = C.createElement("fieldset");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function fe(e, t) {
      var n = e.split("|"),
          r = n.length;

      while (r--) {
        b.attrHandle[n[r]] = t;
      }
    }

    function pe(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }

    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }

    function ge(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }

    function ve(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n,
              r = a([], e.length, o),
              i = r.length;

          while (i--) {
            e[n = r[i]] && (e[n] = !(t[n] = e[n]));
          }
        });
      });
    }

    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }

    for (e in d = se.support = {}, i = se.isXML = function (e) {
      var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
      return !Y.test(t || n && n.nodeName || "HTML");
    }, T = se.setDocument = function (e) {
      var t,
          n,
          r = e ? e.ownerDocument || e : m;
      return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), d.getElementsByTagName = ce(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
      }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
        return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length;
      }), d.getById ? (b.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(te, ne);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n,
              r,
              i,
              o = t.getElementById(e);

          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;

            while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }

          return [];
        }
      }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }

          return r;
        }

        return o;
      }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
      }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
        a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]");
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = C.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
      })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
        d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", $);
      }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, D = t ? function (e, t) {
        if (e === t) return l = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return l = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
        if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
        if (i === o) return pe(e, t);
        n = e;

        while (n = n.parentNode) {
          a.unshift(n);
        }

        n = t;

        while (n = n.parentNode) {
          s.unshift(n);
        }

        while (a[r] === s[r]) {
          r++;
        }

        return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0;
      }), C;
    }, se.matches = function (e, t) {
      return se(e, null, null, t);
    }, se.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== C && T(e), d.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
        var n = c.call(e, t);
        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        A(t, !0);
      }
      return 0 < se(t, C, null, [e]).length;
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) !== C && T(e), y(e, t);
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) !== C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
          r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, se.escape = function (e) {
      return (e + "").replace(re, ie);
    }, se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, se.uniqueSort = function (e) {
      var t,
          n = [],
          r = 0,
          i = 0;

      if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
        while (t = e[i++]) {
          t === e[i] && (r = n.push(i));
        }

        while (r--) {
          e.splice(n[r], 1);
        }
      }

      return u = null, e;
    }, o = se.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;

      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += o(e);
          }
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else while (t = e[r++]) {
        n += o(t);
      }

      return n;
    }, (b = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: G,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];
          return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = p[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function CHILD(h, e, t, g, v) {
          var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
          return 1 === g && 0 === v ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l = y !== m ? "nextSibling" : "previousSibling",
                c = e.parentNode,
                f = x && e.nodeName.toLowerCase(),
                p = !n && !x,
                d = !1;

            if (c) {
              if (y) {
                while (l) {
                  a = e;

                  while (a = a[l]) {
                    if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                  }

                  u = l = "only" === h && !u && "nextSibling";
                }

                return !0;
              }

              if (u = [m ? c.firstChild : c.lastChild], m && p) {
                d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s];

                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                  if (1 === a.nodeType && ++d && a === e) {
                    i[h] = [S, s, d];
                    break;
                  }
                }
              } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]), a === e)) break;
              }

              return (d -= v) === g || d % g == 0 && 0 <= d / g;
            }
          };
        },
        PSEUDO: function PSEUDO(e, o) {
          var t,
              a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
          return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
            var n,
                r = a(e, o),
                i = r.length;

            while (i--) {
              e[n = P(e, r[i])] = !(t[n] = r[i]);
            }
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: le(function (e) {
          var r = [],
              i = [],
              s = f(e.replace(B, "$1"));
          return s[k] ? le(function (e, t, n, r) {
            var i,
                o = s(e, null, r, []),
                a = e.length;

            while (a--) {
              (i = o[a]) && (e[a] = !(t[a] = i));
            }
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length;
          };
        }),
        contains: le(function (t) {
          return t = t.replace(te, ne), function (e) {
            return -1 < (e.textContent || o(e)).indexOf(t);
          };
        }),
        lang: le(function (n) {
          return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
            var t;

            do {
              if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);

            return !1;
          };
        }),
        target: function target(e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function root(e) {
          return e === a;
        },
        focus: function focus(e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !b.pseudos.empty(e);
        },
        header: function header(e) {
          return J.test(e.nodeName);
        },
        input: function input(e) {
          return Q.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: ve(function () {
          return [0];
        }),
        last: ve(function (e, t) {
          return [t - 1];
        }),
        eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) {
            e.push(r);
          }

          return e;
        }),
        gt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }

          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      b.pseudos[e] = de(e);
    }

    for (e in {
      submit: !0,
      reset: !0
    }) {
      b.pseudos[e] = he(e);
    }

    function me() {}

    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }

      return r;
    }

    function be(s, e, t) {
      var u = e.dir,
          l = e.next,
          c = l || u,
          f = t && "parentNode" === c,
          p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u]) {
          if (1 === e.nodeType || f) return s(e, t, n);
        }

        return !1;
      } : function (e, t, n) {
        var r,
            i,
            o,
            a = [S, p];

        if (n) {
          while (e = e[u]) {
            if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
          }
        } else while (e = e[u]) {
          if (1 === e.nodeType || f) if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
            if ((r = i[c]) && r[0] === S && r[1] === p) return a[2] = r[2];
            if ((i[c] = a)[2] = s(e, t, n)) return !0;
          }
        }

        return !1;
      };
    }

    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;

        while (r--) {
          if (!i[r](e, t, n)) return !1;
        }

        return !0;
      } : i[0];
    }

    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }

      return a;
    }

    function Ce(d, h, g, v, y, e) {
      return v && !v[k] && (v = Ce(v)), y && !y[k] && (y = Ce(y, e)), le(function (e, t, n, r) {
        var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c = e || function (e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) {
            se(e, t[r], n);
          }

          return n;
        }(h || "*", n.nodeType ? [n] : n, []),
            f = !d || !e && h ? c : Te(c, s, d, n, r),
            p = g ? y || (e ? d : l || v) ? [] : t : f;

        if (g && g(f, p, n, r), v) {
          i = Te(p, u), v(i, [], n, r), o = i.length;

          while (o--) {
            (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
        }

        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = p.length;

              while (o--) {
                (a = p[o]) && i.push(f[o] = a);
              }

              y(null, p = [], i, r);
            }

            o = p.length;

            while (o--) {
              (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
            }
          }
        } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p);
      });
    }

    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
        return e === i;
      }, a, !0), l = be(function (e) {
        return -1 < P(i, e);
      }, a, !0), c = [function (e, t, n) {
        var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
        return i = null, r;
      }]; s < r; s++) {
        if (t = b.relative[e[s].type]) c = [be(we(c), t)];else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
            for (n = ++s; n < r; n++) {
              if (b.relative[e[n].type]) break;
            }

            return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
              value: " " === e[s - 2].type ? "*" : ""
            })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
          }

          c.push(t);
        }
      }

      return we(c);
    }

    return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function (e, t) {
      var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;

      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace(B, " ")
        }), a = a.slice(n.length)), b.filter) {
          !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
            value: n,
            type: o,
            matches: r
          }), a = a.slice(n.length));
        }

        if (!n) break;
      }

      return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
    }, f = se.compile = function (e, t) {
      var n,
          v,
          y,
          m,
          x,
          r,
          i = [],
          o = [],
          a = N[e + " "];

      if (!a) {
        t || (t = h(e)), n = t.length;

        while (n--) {
          (a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
        }

        (a = N(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function r(e, t, n, _r, i) {
          var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || x && b.find.TAG("*", i),
              h = S += null == p ? 1 : Math.random() || .1,
              g = d.length;

          for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument === C || (T(o), n = !E);

              while (s = v[a++]) {
                if (s(o, t || C, n)) {
                  _r.push(o);

                  break;
                }
              }

              i && (S = h);
            }

            m && ((o = !s && o) && u--, e && c.push(o));
          }

          if (u += l, m && l !== u) {
            a = 0;

            while (s = y[a++]) {
              s(c, f, t, n);
            }

            if (e) {
              if (0 < u) while (l--) {
                c[l] || f[l] || (f[l] = q.call(_r));
              }
              f = Te(f);
            }

            H.apply(_r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(_r);
          }

          return i && (S = h, w = p), c;
        }, m ? le(r) : r))).selector = e;
      }

      return a;
    }, g = se.select = function (e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l = "function" == typeof e && e,
          c = !r && h(e = l.selector || e);

      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }

        i = G.needsContext.test(e) ? 0 : o.length;

        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;

          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
            break;
          }
        }
      }

      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
    }, d.sortStable = k.split("").sort(D).join("") === k, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), d.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ce(function (e) {
      return null == e.getAttribute("disabled");
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), se;
  }(C);

  k.find = h, k.expr = h.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = h.uniqueSort, k.text = h.getText, k.isXMLDoc = h.isXML, k.contains = h.contains, k.escapeSelector = h.escape;

  var T = function T(e, t, n) {
    var r = [],
        i = void 0 !== n;

    while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && k(e).is(n)) break;
        r.push(e);
      }
    }

    return r;
  },
      S = function S(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }

    return n;
  },
      N = k.expr.match.needsContext;

  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function j(e, n, r) {
    return m(n) ? k.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? k.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? k.grep(e, function (e) {
      return -1 < i.call(n, e) !== r;
    }) : k.filter(n, e, r);
  }

  k.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, k.fn.extend({
    find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;
      if ("string" != typeof e) return this.pushStack(k(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (k.contains(i[t], this)) return !0;
        }
      }));

      for (n = this.pushStack([]), t = 0; t < r; t++) {
        k.find(e, i[t], n);
      }

      return 1 < r ? k.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(j(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(j(this, e || [], !0));
    },
    is: function is(e) {
      return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1).length;
    }
  });
  var q,
      L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (k.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;

    if (n = n || q, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (r[1]) {
        if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), D.test(r[1]) && k.isPlainObject(t)) for (r in t) {
          m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        }
        return this;
      }

      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this);
  }).prototype = k.fn, q = k(E);
  var H = /^(?:parents|prev(?:Until|All))/,
      O = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };

  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {
      ;
    }

    return e;
  }

  k.fn.extend({
    has: function has(e) {
      var t = k(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (k.contains(this, t[e])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && k(e);
      if (!N.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
        }
      }
      return this.pushStack(1 < o.length ? k.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), k.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return T(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return T(e, "parentNode", n);
    },
    next: function next(e) {
      return P(e, "nextSibling");
    },
    prev: function prev(e) {
      return P(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return T(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return T(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return T(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return T(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return S((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return S(e.firstChild);
    },
    contents: function contents(e) {
      return "undefined" != typeof e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), k.merge([], e.childNodes));
    }
  }, function (r, i) {
    k.fn[r] = function (e, t) {
      var n = k.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var R = /[^\x20\t\r\n\f]+/g;

  function M(e) {
    return e;
  }

  function I(e) {
    throw e;
  }

  function W(e, t, n, r) {
    var i;

    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  k.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(R) || [], function (e, t) {
      n[t] = !0;
    }), n) : k.extend({}, r);

    var i,
        t,
        o,
        a,
        s = [],
        u = [],
        l = -1,
        c = function c() {
      for (a = a || r.once, o = i = !0; u.length; l = -1) {
        t = u.shift();

        while (++l < s.length) {
          !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
        }
      }

      r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
    },
        f = {
      add: function add() {
        return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
          k.each(e, function (e, t) {
            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
          });
        }(arguments), t && !i && c()), this;
      },
      remove: function remove() {
        return k.each(arguments, function (e, t) {
          var n;

          while (-1 < (n = k.inArray(t, s, n))) {
            s.splice(n, 1), n <= l && l--;
          }
        }), this;
      },
      has: function has(e) {
        return e ? -1 < k.inArray(e, s) : 0 < s.length;
      },
      empty: function empty() {
        return s && (s = []), this;
      },
      disable: function disable() {
        return a = u = [], s = t = "", this;
      },
      disabled: function disabled() {
        return !s;
      },
      lock: function lock() {
        return a = u = [], t || i || (s = t = ""), this;
      },
      locked: function locked() {
        return !!a;
      },
      fireWith: function fireWith(e, t) {
        return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
      },
      fire: function fire() {
        return f.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!o;
      }
    };

    return f;
  }, k.extend({
    Deferred: function Deferred(e) {
      var o = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          a = {
        state: function state() {
          return i;
        },
        always: function always() {
          return s.done(arguments).fail(arguments), this;
        },
        "catch": function _catch(e) {
          return a.then(null, e);
        },
        pipe: function pipe() {
          var i = arguments;
          return k.Deferred(function (r) {
            k.each(o, function (e, t) {
              var n = m(i[t[4]]) && i[t[4]];
              s[t[1]](function () {
                var e = n && n.apply(this, arguments);
                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
              });
            }), i = null;
          }).promise();
        },
        then: function then(t, n, r) {
          var u = 0;

          function l(i, o, a, s) {
            return function () {
              var n = this,
                  r = arguments,
                  e = function e() {
                var e, t;

                if (!(i < u)) {
                  if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                  t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++, t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                }
              },
                  t = s ? e : function () {
                try {
                  e();
                } catch (e) {
                  k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== I && (n = void 0, r = [e]), o.rejectWith(n, r));
                }
              };

              i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t));
            };
          }

          return k.Deferred(function (e) {
            o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : M)), o[2][3].add(l(0, e, m(n) ? n : I));
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? k.extend(e, a) : a;
        }
      },
          s = {};
      return k.each(o, function (e, t) {
        var n = t[2],
            r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function when(e) {
      var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = k.Deferred(),
          a = function a(t) {
        return function (e) {
          r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
        };
      };

      if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();

      while (t--) {
        W(i[t], a(t), o.reject);
      }

      return o.promise();
    }
  });
  var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  k.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, k.readyException = function (e) {
    C.setTimeout(function () {
      throw e;
    });
  };
  var F = k.Deferred();

  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), k.ready();
  }

  k.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      k.readyException(e);
    }), this;
  }, k.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [k]);
    }
  }), k.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));

  var _ = function _(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;
    if ("object" === w(n)) for (s in i = !0, n) {
      _(e, t, s, n[s], !0, o, a);
    } else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(k(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      z = /^-ms-/,
      U = /-([a-z])/g;

  function X(e, t) {
    return t.toUpperCase();
  }

  function V(e) {
    return e.replace(z, "ms-").replace(U, X);
  }

  var G = function G(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function Y() {
    this.expando = k.expando + Y.uid++;
  }

  Y.uid = 1, Y.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
          i = this.cache(e);
      if ("string" == typeof t) i[V(t)] = n;else for (r in t) {
        i[V(r)] = t[r];
      }
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
          r = e[this.expando];

      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length;

          while (n--) {
            delete r[t[n]];
          }
        }

        (void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !k.isEmptyObject(t);
    }
  };
  var Q = new Y(),
      J = new Y(),
      K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Z = /[A-Z]/g;

  function ee(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i);
      } catch (e) {}

      J.set(e, t, n);
    } else n = void 0;
    return n;
  }

  k.extend({
    hasData: function hasData(e) {
      return J.hasData(e) || Q.hasData(e);
    },
    data: function data(e, t, n) {
      return J.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      J.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return Q.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      Q.remove(e, t);
    }
  }), k.fn.extend({
    data: function data(n, e) {
      var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === n) {
        if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
          t = a.length;

          while (t--) {
            a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), ee(o, r, i[r]));
          }

          Q.set(o, "hasDataAttrs", !0);
        }

        return i;
      }

      return "object" == _typeof(n) ? this.each(function () {
        J.set(this, n);
      }) : _(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
        this.each(function () {
          J.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        J.remove(this, e);
      });
    }
  }), k.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = k.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = k._queueHooks(e, t);

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        k.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return Q.get(e, n) || Q.access(e, n, {
        empty: k.Callbacks("once memory").add(function () {
          Q.remove(e, [t + "queue", n]);
        })
      });
    }
  }), k.fn.extend({
    queue: function queue(t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = k.queue(this, t, n);
        k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        k.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
          r = 1,
          i = k.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };

      "string" != typeof e && (t = e, e = void 0), e = e || "fx";

      while (a--) {
        (n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }

      return s(), i.promise(t);
    }
  });

  var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
      re = ["Top", "Right", "Bottom", "Left"],
      ie = E.documentElement,
      oe = function oe(e) {
    return k.contains(e.ownerDocument, e);
  },
      ae = {
    composed: !0
  };

  ie.getRootNode && (oe = function oe(e) {
    return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument;
  });

  var se = function se(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display");
  },
      ue = function ue(e, t, n, r) {
    var i,
        o,
        a = {};

    for (o in t) {
      a[o] = e.style[o], e.style[o] = t[o];
    }

    for (o in i = n.apply(e, r || []), t) {
      e.style[o] = a[o];
    }

    return i;
  };

  function le(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return k.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
        c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t));

    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;

      while (a--) {
        k.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }

      c *= 2, k.style(e, t, c + l), n = n || [];
    }

    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }

  var ce = {};

  function fe(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) {
      (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Q.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)), u = k.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ce[s] = u)))) : "none" !== n && (l[c] = "none", Q.set(r, "display", n)));
    }

    for (c = 0; c < f; c++) {
      null != l[c] && (e[c].style.display = l[c]);
    }

    return e;
  }

  k.fn.extend({
    show: function show() {
      return fe(this, !0);
    },
    hide: function hide() {
      return fe(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        se(this) ? k(this).show() : k(this).hide();
      });
    }
  });
  var pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i,
      ge = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function ve(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? k.merge([e], n) : n;
  }

  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
    }
  }

  ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
  var me,
      xe,
      be = /<|&#?\w+;/;

  function we(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o);else if (be.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0];

        while (c--) {
          a = a.lastChild;
        }

        k.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }

    f.textContent = "", d = 0;

    while (o = p[d++]) {
      if (r && -1 < k.inArray(o, r)) i && i.push(o);else if (l = oe(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
        c = 0;

        while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }

    return f;
  }

  me = E.createDocumentFragment().appendChild(E.createElement("div")), (xe = E.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), me.appendChild(xe), y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
  var Te = /^key/,
      Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ee = /^([^.]*)(?:\.(.+)|)/;

  function ke() {
    return !0;
  }

  function Se() {
    return !1;
  }

  function Ne(e, t) {
    return e === function () {
      try {
        return E.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }

  function Ae(e, t, n, r, i, o) {
    var a, s;

    if ("object" == _typeof(t)) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) {
        Ae(e, s, n, r, t[s], o);
      }

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return k().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = k.guid++)), e.each(function () {
      k.event.add(this, t, i, r, n);
    });
  }

  function De(e, i, o) {
    o ? (Q.set(e, i, !1), k.event.add(e, i, {
      namespace: !1,
      handler: function handler(e) {
        var t,
            n,
            r = Q.get(this, i);

        if (1 & e.isTrigger && this[i]) {
          if (r.length) (k.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Q.set(this, i, r), t = o(this, i), this[i](), r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value;
        } else r.length && (Q.set(this, i, {
          value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation());
      }
    })) : void 0 === Q.get(e, i) && k.event.add(e, i, ke);
  }

  k.event = {
    global: {},
    add: function add(t, e, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Q.get(t);

      if (v) {
        n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(ie, i), n.guid || (n.guid = k.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(R) || [""]).length;

        while (l--) {
          d = g = (s = Ee.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && k.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = !0);
        }
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Q.hasData(e) && Q.get(e);

      if (v && (u = v.events)) {
        l = (t = (t || "").match(R) || [""]).length;

        while (l--) {
          if (d = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
            f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;

            while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }

            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle), delete u[d]);
          } else for (d in u) {
            k.event.remove(e, d + t[l], n, r, !0);
          }
        }

        k.isEmptyObject(u) && Q.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s = k.event.fix(e),
          u = new Array(arguments.length),
          l = (Q.get(this, "events") || {})[s.type] || [],
          c = k.event.special[s.type] || {};

      for (u[0] = s, t = 1; t < arguments.length; t++) {
        u[t] = arguments[t];
      }

      if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
        a = k.event.handlers.call(this, s, l), t = 0;

        while ((i = a[t++]) && !s.isPropagationStopped()) {
          s.currentTarget = i.elem, n = 0;

          while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped()) {
            s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
          }
        }

        return c.postDispatch && c.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length), a[i] && o.push(r);
          }

          o.length && s.push({
            elem: l,
            handlers: o
          });
        }
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(t, e) {
      Object.defineProperty(k.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        },
        set: function set(e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function fix(e) {
      return e[k.expando] ? e : new k.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function setup(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke), !1;
        },
        trigger: function trigger(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0;
        },
        _default: function _default(e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, k.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, k.Event = function (e, t) {
    if (!(this instanceof k.Event)) return new k.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0;
  }, k.Event.prototype = {
    constructor: k.Event,
    isDefaultPrevented: Se,
    isPropagationStopped: Se,
    isImmediatePropagationStopped: Se,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, k.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function which(e) {
      var t = e.button;
      return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, k.event.addProp), k.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    k.event.special[e] = {
      setup: function setup() {
        return De(this, e, Ne), !1;
      },
      trigger: function trigger() {
        return De(this, e), !0;
      },
      delegateType: t
    };
  }), k.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    k.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function handle(e) {
        var t,
            n = e.relatedTarget,
            r = e.handleObj;
        return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), k.fn.extend({
    on: function on(e, t, n, r) {
      return Ae(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return Ae(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == _typeof(e)) {
        for (i in e) {
          this.off(i, t, e[i]);
        }

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function () {
        k.event.remove(this, e, n, t);
      });
    }
  });
  var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      qe = /<script|<style|<link/i,
      Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
      He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Oe(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e;
  }

  function Pe(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function Re(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function Me(e, t) {
    var n, r, i, o, a, s, u, l;

    if (1 === t.nodeType) {
      if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events)) for (i in delete a.handle, a.events = {}, l) {
        for (n = 0, r = l[i].length; n < r; n++) {
          k.event.add(t, i, l[i][n]);
        }
      }
      J.hasData(e) && (s = J.access(e), u = k.extend({}, s), J.set(t, u));
    }
  }

  function Ie(n, r, i, o) {
    r = g.apply([], r);
    var e,
        t,
        a,
        s,
        u,
        l,
        c = 0,
        f = n.length,
        p = f - 1,
        d = r[0],
        h = m(d);
    if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o);
    });

    if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++) {
        u = e, c !== p && (u = k.clone(u, !0, !0), s && k.merge(a, ve(u, "script"))), i.call(n[c], u, c);
      }

      if (s) for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++) {
        u = a[c], he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {
          nonce: u.nonce || u.getAttribute("nonce")
        }) : b(u.textContent.replace(He, ""), u, l));
      }
    }

    return n;
  }

  function We(e, t, n) {
    for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || k.cleanData(ve(r)), r.parentNode && (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    }

    return e;
  }

  k.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(je, "<$1></$2>");
    },
    clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = e.cloneNode(!0),
          f = oe(e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) {
        s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      }
      if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) {
        Me(o[r], a[r]);
      } else Me(e, c);
      return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (G(n)) {
          if (t = n[Q.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
            }
            n[Q.expando] = void 0;
          }

          n[J.expando] && (n[J.expando] = void 0);
        }
      }
    }
  }), k.fn.extend({
    detach: function detach(e) {
      return We(this, e, !0);
    },
    remove: function remove(e) {
      return We(this, e);
    },
    text: function text(e) {
      return _(this, function (e) {
        return void 0 === e ? k.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return Ie(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return Ie(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Oe(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return Ie(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return Ie(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (k.cleanData(ve(e, !1)), e.textContent = "");
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return k.clone(this, e, t);
      });
    },
    html: function html(e) {
      return _(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = k.htmlPrefilter(e);

          try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (k.cleanData(ve(t, !1)), t.innerHTML = e);
            }

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var n = [];
      return Ie(this, arguments, function (e) {
        var t = this.parentNode;
        k.inArray(this, n) < 0 && (k.cleanData(ve(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), k.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    k.fn[e] = function (e) {
      for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) {
        t = o === i ? this : this.clone(!0), k(r[o])[a](t), u.apply(n, t.get());
      }

      return this.pushStack(n);
    };
  });

  var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
      Fe = function Fe(e) {
    var t = e.ownerDocument.defaultView;
    return t && t.opener || (t = C), t.getComputedStyle(e);
  },
      Be = new RegExp(re.join("|"), "i");

  function _e(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)), !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }

  function ze(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }

  !function () {
    function e() {
      if (u) {
        s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(s).appendChild(u);
        var e = C.getComputedStyle(u);
        n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", i = 12 === t(u.offsetWidth / 3), ie.removeChild(s), u = null;
      }
    }

    function t(e) {
      return Math.round(parseFloat(e));
    }

    var n,
        r,
        i,
        o,
        a,
        s = E.createElement("div"),
        u = E.createElement("div");
    u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(y, {
      boxSizingReliable: function boxSizingReliable() {
        return e(), r;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return e(), o;
      },
      pixelPosition: function pixelPosition() {
        return e(), n;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return e(), a;
      },
      scrollboxSize: function scrollboxSize() {
        return e(), i;
      }
    }));
  }();
  var Ue = ["Webkit", "Moz", "ms"],
      Xe = E.createElement("div").style,
      Ve = {};

  function Ge(e) {
    var t = k.cssProps[e] || Ve[e];
    return t || (e in Xe ? e : Ve[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
          n = Ue.length;

      while (n--) {
        if ((e = Ue[n] + t) in Xe) return e;
      }
    }(e) || e);
  }

  var Ye = /^(none|table(?!-c[ea]).+)/,
      Qe = /^--/,
      Je = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Ke = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function Ze(e, t, n) {
    var r = ne.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function et(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
    if (n === (r ? "border" : "content")) return 0;

    for (; a < 4; a += 2) {
      "margin" === n && (u += k.css(e, n + re[a], !0, i)), r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)), "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i), "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i));
    }

    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
  }

  function tt(e, t, n) {
    var r = Fe(e),
        i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r),
        o = i,
        a = _e(e, t, r),
        s = "offset" + t[0].toUpperCase() + t.slice(1);

    if ($e.test(a)) {
      if (!n) return a;
      a = "auto";
    }

    return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }

  function nt(e, t, n, r, i) {
    return new nt.prototype.init(e, t, n, r, i);
  }

  k.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = _e(e, "opacity");

            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = V(t),
            u = Qe.test(t),
            l = e.style;
        if (u || (t = Ge(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = _typeof(n)) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = V(t);
      return Qe.test(t) || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = _e(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), k.each(["height", "width"], function (e, u) {
    k.cssHooks[u] = {
      get: function get(e, t, n) {
        if (t) return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function () {
          return tt(e, u, n);
        });
      },
      set: function set(e, t, n) {
        var r,
            i = Fe(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i),
            s = n ? et(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - .5)), s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = k.css(e, u)), Ze(0, t, s);
      }
    };
  }), k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), k.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    k.cssHooks[i + o] = {
      expand: function expand(e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) {
          n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
        }

        return n;
      }
    }, "margin" !== i && (k.cssHooks[i + o].set = Ze);
  }), k.fn.extend({
    css: function css(e, t) {
      return _(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (Array.isArray(t)) {
          for (r = Fe(e), i = t.length; a < i; a++) {
            o[t[a]] = k.css(e, t[a], !1, r);
          }

          return o;
        }

        return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((k.Tween = nt).prototype = {
    constructor: nt,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = nt.propHooks[this.prop];
      return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = nt.propHooks[this.prop];
      return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this;
    }
  }).init.prototype = nt.prototype, (nt.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = nt.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, k.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, k.fx = nt.prototype.init, k.fx.step = {};
  var rt,
      it,
      ot,
      at,
      st = /^(?:toggle|show|hide)$/,
      ut = /queueHooks$/;

  function lt() {
    it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval), k.fx.tick());
  }

  function ct() {
    return C.setTimeout(function () {
      rt = void 0;
    }), rt = Date.now();
  }

  function ft(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = re[r])] = i["padding" + n] = e;
    }

    return t && (i.opacity = i.width = e), i;
  }

  function pt(e, t, n) {
    for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }

  function dt(o, e, t) {
    var n,
        a,
        r = 0,
        i = dt.prefilters.length,
        s = k.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (a) return !1;

      for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) {
        l.tweens[r].run(n);
      }

      return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
    },
        l = s.promise({
      elem: o,
      props: k.extend({}, e),
      opts: k.extend(!0, {
        specialEasing: {},
        easing: k.easing._default
      }, t),
      originalProperties: e,
      originalOptions: t,
      startTime: rt || ct(),
      duration: t.duration,
      tweens: [],
      createTween: function createTween(e, t) {
        var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
        return l.tweens.push(n), n;
      },
      stop: function stop(e) {
        var t = 0,
            n = e ? l.tweens.length : 0;
        if (a) return this;

        for (a = !0; t < n; t++) {
          l.tweens[t].run(1);
        }

        return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
      }
    }),
        c = l.props;

    for (!function (e, t) {
      var n, r, i, o, a;

      for (n in e) {
        if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) {
          (n in e) || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
      }
    }(c, l.opts.specialEasing); r < i; r++) {
      if (n = dt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    }

    return k.map(c, pt, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }

  k.Animation = k.extend(dt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return le(n.elem, e, ne.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(R);

      for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t);
      }
    },
    prefilters: [function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && se(e),
          v = Q.get(e, "fxshow");

      for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, k.queue(e, "fx").length || a.empty.fire();
        });
      })), t) {
        if (i = t[r], st.test(i)) {
          if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
            if ("show" !== i || !v || void 0 === v[r]) continue;
            g = !0;
          }

          d[r] = v && v[r] || k.style(e, r);
        }
      }

      if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Q.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = k.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) {
        u || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", {
          display: l
        }), o && (v.hidden = !g), g && fe([e], !0), p.done(function () {
          for (r in g || fe([e]), Q.remove(e, "fxshow"), d) {
            k.style(e, r, d[r]);
          }
        })), u = pt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }],
    prefilter: function prefilter(e, t) {
      t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
    }
  }), k.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? k.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue);
    }, r;
  }, k.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(se).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(t, e, n, r) {
      var i = k.isEmptyObject(t),
          o = k.speed(e, n, r),
          a = function a() {
        var e = dt(this, k.extend({}, t), o);
        (i || Q.get(this, "finish")) && e.stop(!0);
      };

      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(i, e, o) {
      var a = function a(e) {
        var t = e.stop;
        delete e.stop, t(o);
      };

      return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
            t = null != i && i + "queueHooks",
            n = k.timers,
            r = Q.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) {
          r[t] && r[t].stop && ut.test(t) && a(r[t]);
        }

        for (t = n.length; t--;) {
          n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        }

        !e && o || k.dequeue(this, i);
      });
    },
    finish: function finish(a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
            t = Q.get(this),
            n = t[a + "queue"],
            r = t[a + "queueHooks"],
            i = k.timers,
            o = n ? n.length : 0;

        for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) {
          i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        }

        for (e = 0; e < o; e++) {
          n[e] && n[e].finish && n[e].finish.call(this);
        }

        delete t.finish;
      });
    }
  }), k.each(["toggle", "show", "hide"], function (e, r) {
    var i = k.fn[r];

    k.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n);
    };
  }), k.each({
    slideDown: ft("show"),
    slideUp: ft("hide"),
    slideToggle: ft("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    k.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), k.timers = [], k.fx.tick = function () {
    var e,
        t = 0,
        n = k.timers;

    for (rt = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }

    n.length || k.fx.stop(), rt = void 0;
  }, k.fx.timer = function (e) {
    k.timers.push(e), k.fx.start();
  }, k.fx.interval = 13, k.fx.start = function () {
    it || (it = !0, lt());
  }, k.fx.stop = function () {
    it = null;
  }, k.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, k.fn.delay = function (r, e) {
    return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);

      t.stop = function () {
        C.clearTimeout(n);
      };
    });
  }, ot = E.createElement("input"), at = E.createElement("select").appendChild(E.createElement("option")), ot.type = "checkbox", y.checkOn = "" !== ot.value, y.optSelected = at.selected, (ot = E.createElement("input")).value = "t", ot.type = "radio", y.radioValue = "t" === ot.value;
  var ht,
      gt = k.expr.attrHandle;
  k.fn.extend({
    attr: function attr(e, t) {
      return _(this, k.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        k.removeAttr(this, e);
      });
    }
  }), k.extend({
    attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!y.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(R);
      if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    }
  }), ht = {
    set: function set(e, t, n) {
      return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = gt[t] || k.find.attr;

    gt[t] = function (e, t, n) {
      var r,
          i,
          o = t.toLowerCase();
      return n || (i = gt[o], gt[o] = r, r = null != a(e, t, n) ? o : null, gt[o] = i), r;
    };
  });
  var vt = /^(?:input|select|textarea|button)$/i,
      yt = /^(?:a|area)$/i;

  function mt(e) {
    return (e.match(R) || []).join(" ");
  }

  function xt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function bt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || [];
  }

  k.fn.extend({
    prop: function prop(e, t) {
      return _(this, k.prop, e, t, 1 < arguments.length);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[k.propFix[e] || e];
      });
    }
  }), k.extend({
    prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = k.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), y.optSelected || (k.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    k.propFix[this.toLowerCase()] = this;
  }), k.fn.extend({
    addClass: function addClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        k(this).addClass(t.call(this, e, xt(this)));
      });
      if ((e = bt(t)).length) while (n = this[u++]) {
        if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }

          i !== (s = mt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    removeClass: function removeClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        k(this).removeClass(t.call(this, e, xt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = bt(t)).length) while (n = this[u++]) {
        if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            while (-1 < r.indexOf(" " + o + " ")) {
              r = r.replace(" " + o + " ", " ");
            }
          }

          i !== (s = mt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(i, t) {
      var o = _typeof(i),
          a = "string" === o || Array.isArray(i);

      return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
        k(this).toggleClass(i.call(this, e, xt(this), t), t);
      }) : this.each(function () {
        var e, t, n, r;

        if (a) {
          t = 0, n = k(this), r = bt(i);

          while (e = r[t++]) {
            n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
          }
        } else void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;
      t = " " + e + " ";

      while (n = this[r++]) {
        if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t)) return !0;
      }

      return !1;
    }
  });
  var wt = /\r/g;
  k.fn.extend({
    val: function val(n) {
      var r,
          e,
          i,
          t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0;
    }
  }), k.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = k.find.attr(e, "value");
          return null != t ? t : mt(k.text(e));
        }
      },
      select: {
        get: function get(e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;

          for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
              if (t = k(n).val(), a) return t;
              s.push(t);
            }
          }

          return s;
        },
        set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = k.makeArray(t),
              a = i.length;

          while (a--) {
            ((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
          }

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), k.each(["radio", "checkbox"], function () {
    k.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t);
      }
    }, y.checkOn || (k.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), y.focusin = "onfocusin" in C;

  var Tt = /^(?:focusinfocus|focusoutblur)$/,
      Ct = function Ct(e) {
    e.stopPropagation();
  };

  k.extend(k.event, {
    trigger: function trigger(e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p = [n || E],
          d = v.call(e, "type") ? e.type : e,
          h = v.call(e, "namespace") ? e.namespace.split(".") : [];

      if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[k.expando] ? e : new k.Event(d, "object" == _typeof(e) && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) {
            p.push(o), a = o;
          }

          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
        }

        i = 0;

        while ((o = p[i++]) && !e.isPropagationStopped()) {
          f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        }

        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), k.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Ct), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Ct), k.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = k.extend(new k.Event(), n, {
        type: e,
        isSimulated: !0
      });
      k.event.trigger(r, null, t);
    }
  }), k.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        k.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return k.event.trigger(e, t, n, !0);
    }
  }), y.focusin || k.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, r) {
    var i = function i(e) {
      k.event.simulate(r, e.target, k.event.fix(e));
    };

    k.event.special[r] = {
      setup: function setup() {
        var e = this.ownerDocument || this,
            t = Q.access(e, r);
        t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1);
      },
      teardown: function teardown() {
        var e = this.ownerDocument || this,
            t = Q.access(e, r) - 1;
        t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0), Q.remove(e, r));
      }
    };
  });
  var Et = C.location,
      kt = Date.now(),
      St = /\?/;

  k.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;

    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }

    return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t;
  };

  var Nt = /\[\]$/,
      At = /\r?\n/g,
      Dt = /^(?:submit|button|image|reset|file)$/i,
      jt = /^(?:input|select|textarea|keygen)/i;

  function qt(n, e, r, i) {
    var t;
    if (Array.isArray(e)) k.each(e, function (e, t) {
      r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== w(e)) i(n, e);else for (t in e) {
      qt(n + "[" + t + "]", e[t], r, i);
    }
  }

  k.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = m(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      qt(n, e[n], t, i);
    }
    return r.join("&");
  }, k.fn.extend({
    serialize: function serialize() {
      return k.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = k.prop(this, "elements");
        return e ? k.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = k(this).val();
        return null == n ? null : Array.isArray(n) ? k.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(At, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(At, "\r\n")
        };
      }).get();
    }
  });
  var Lt = /%20/g,
      Ht = /#.*$/,
      Ot = /([?&])_=[^&]*/,
      Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Rt = /^(?:GET|HEAD)$/,
      Mt = /^\/\//,
      It = {},
      Wt = {},
      $t = "*/".concat("*"),
      Ft = E.createElement("a");

  function Bt(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
          r = 0,
          i = e.toLowerCase().match(R) || [];
      if (m(t)) while (n = i[r++]) {
        "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
      }
    };
  }

  function _t(t, i, o, a) {
    var s = {},
        u = t === Wt;

    function l(e) {
      var r;
      return s[e] = !0, k.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }

    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }

  function zt(e, t) {
    var n,
        r,
        i = k.ajaxSettings.flatOptions || {};

    for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }

    return r && k.extend(!0, e, r), e;
  }

  Ft.href = Et.href, k.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Et.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": $t,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": k.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e);
    },
    ajaxPrefilter: Bt(It),
    ajaxTransport: Bt(Wt),
    ajax: function ajax(e, t) {
      "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
      var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = k.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event,
          x = k.Deferred(),
          b = k.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (h) {
            if (!n) {
              n = {};

              while (t = Pt.exec(p)) {
                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
            }

            t = n[e.toLowerCase() + " "];
          }

          return null == t ? null : t.join(", ");
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return h ? p : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return null == h && (v.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          var t;
          if (e) if (h) T.always(e[T.status]);else for (t in e) {
            w[t] = [w[t], e[t]];
          }
          return this;
        },
        abort: function abort(e) {
          var t = e || u;
          return c && c.abort(t), l(0, t), this;
        }
      };

      if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""], null == v.crossDomain) {
        r = E.createElement("a");

        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host;
        } catch (e) {
          v.crossDomain = !0;
        }
      }

      if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)), _t(It, v, t, T), h) return T;

      for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Rt.test(v.type), f = v.url.replace(Ht, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Ot, "$1"), o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o), v.url = f + o), v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]), v.headers) {
        T.setRequestHeader(i, v.headers[i]);
      }

      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();

      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = _t(Wt, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = C.setTimeout(function () {
          T.abort("timeout");
        }, v.timeout));

        try {
          h = !1, c.send(a, l);
        } catch (e) {
          if (h) throw e;
          l(-1, e);
        }
      } else l(-1, "No Transport");

      function l(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = t;
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
              i,
              o,
              a,
              s = e.contents,
              u = e.dataTypes;

          while ("*" === u[0]) {
            u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          }

          if (r) for (i in s) {
            if (s[i] && s[i].test(r)) {
              u.unshift(i);
              break;
            }
          }
          if (u[0] in n) o = u[0];else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break;
              }

              a || (a = i);
            }

            o = o || a;
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }(v, T, n)), s = function (e, t, n, r) {
          var i,
              o,
              a,
              s,
              u,
              l = {},
              c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) {
            l[a.toLowerCase()] = e.converters[a];
          }
          o = c.shift();

          while (o) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
              if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                  !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                  break;
                }
              }
              if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o
                };
              }
            }
          }

          return {
            state: "success",
            data: t
          };
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --k.active || k.event.trigger("ajaxStop")));
      }

      return T;
    },
    getJSON: function getJSON(e, t, n) {
      return k.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return k.get(e, void 0, t, "script");
    }
  }), k.each(["get", "post"], function (e, i) {
    k[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, k.isPlainObject(e) && e));
    };
  }), k._evalUrl = function (e, t) {
    return k.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(e) {
        k.globalEval(e, t);
      }
    });
  }, k.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;

        while (e.firstElementChild) {
          e = e.firstElementChild;
        }

        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(n) {
      return m(n) ? this.each(function (e) {
        k(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = k(this),
            t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function wrap(t) {
      var n = m(t);
      return this.each(function (e) {
        k(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        k(this).replaceWith(this.childNodes);
      }), this;
    }
  }), k.expr.pseudos.hidden = function (e) {
    return !k.expr.pseudos.visible(e);
  }, k.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, k.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest();
    } catch (e) {}
  };
  var Ut = {
    0: 200,
    1223: 204
  },
      Xt = k.ajaxSettings.xhr();
  y.cors = !!Xt && "withCredentials" in Xt, y.ajax = Xt = !!Xt, k.ajaxTransport(function (i) {
    var _o, a;

    if (y.cors || Xt && !i.crossDomain) return {
      send: function send(e, t) {
        var n,
            r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) {
          r[n] = i.xhrFields[n];
        }

        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) {
          r.setRequestHeader(n, e[n]);
        }

        _o = function o(e) {
          return function () {
            _o && (_o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()));
          };
        }, r.onload = _o(), a = r.onerror = r.ontimeout = _o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && C.setTimeout(function () {
            _o && a();
          });
        }, _o = _o("abort");

        try {
          r.send(i.hasContent && i.data || null);
        } catch (e) {
          if (_o) throw e;
        }
      },
      abort: function abort() {
        _o && _o();
      }
    };
  }), k.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), k.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return k.globalEval(e), e;
      }
    }
  }), k.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), k.ajaxTransport("script", function (n) {
    var r, _i;

    if (n.crossDomain || n.scriptAttrs) return {
      send: function send(e, t) {
        r = k("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", _i = function i(e) {
          r.remove(), _i = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), E.head.appendChild(r[0]);
      },
      abort: function abort() {
        _i && _i();
      }
    };
  });
  var Vt,
      Gt = [],
      Yt = /(=)\?(?=&|$)|\?\?/;
  k.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = Gt.pop() || k.expando + "_" + kt++;
      return this[e] = !0, e;
    }
  }), k.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
        i,
        o,
        a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || k.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), k.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes)));
    var r, i, o;
  }, k.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return -1 < s && (r = mt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), 0 < a.length && k.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    k.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), k.expr.pseudos.animated = function (t) {
    return k.grep(k.timers, function (e) {
      return t === e.elem;
    }).length;
  }, k.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l = k.css(e, "position"),
          c = k(e),
          f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = k.css(e, "top"), u = k.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
    }
  }, k.fn.extend({
    offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        k.offset.setOffset(this, t, e);
      });
      var e,
          n,
          r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = {
          top: 0,
          left: 0
        };
        if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;

          while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position")) {
            e = e.parentNode;
          }

          e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - k.css(r, "marginTop", !0),
          left: t.left - i.left - k.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;

        while (e && "static" === k.css(e, "position")) {
          e = e.offsetParent;
        }

        return e || ie;
      });
    }
  }), k.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;

    k.fn[t] = function (e) {
      return _(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), k.each(["top", "left"], function (e, n) {
    k.cssHooks[n] = ze(y.pixelPosition, function (e, t) {
      if (t) return t = _e(e, n), $e.test(t) ? k(e).position()[n] + "px" : t;
    });
  }), k.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    k.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      k.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
        return _(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    k.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  }), k.fn.extend({
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), k.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    }
  }), k.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function i() {
      return e.apply(t || this, r.concat(s.call(arguments)));
    }).guid = e.guid = e.guid || k.guid++, i;
  }, k.holdReady = function (e) {
    e ? k.readyWait++ : k.ready(!0);
  }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = A, k.isFunction = m, k.isWindow = x, k.camelCase = V, k.type = w, k.now = Date.now, k.isNumeric = function (e) {
    var t = k.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  },  true && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return k;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  var Qt = C.jQuery,
      Jt = C.$;
  return k.noConflict = function (e) {
    return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k;
  }, e || (C.jQuery = C.$ = k), k;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./public/js/popper.min.js":
/*!*********************************!*\
  !*** ./public/js/popper.min.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @popperjs/core v2.1.0 - MIT License
 */


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? t(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function (e) {
  function t(e) {
    return {
      width: (e = e.getBoundingClientRect()).width,
      height: e.height,
      top: e.top,
      right: e.right,
      bottom: e.bottom,
      left: e.left,
      x: e.left,
      y: e.top
    };
  }

  function r(e) {
    return "[object Window]" !== e.toString() ? (e = e.ownerDocument) ? e.defaultView : window : e;
  }

  function n(e) {
    return {
      scrollLeft: (e = r(e)).pageXOffset,
      scrollTop: e.pageYOffset
    };
  }

  function o(e) {
    return e instanceof r(e).Element || e instanceof Element;
  }

  function i(e) {
    return e instanceof r(e).HTMLElement || e instanceof HTMLElement;
  }

  function a(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }

  function s(e) {
    return (o(e) ? e.ownerDocument : e.document).documentElement;
  }

  function f(e) {
    return t(s(e)).left + n(e).scrollLeft;
  }

  function p(e, o, p) {
    void 0 === p && (p = !1), e = t(e);
    var c = {
      scrollLeft: 0,
      scrollTop: 0
    },
        u = {
      x: 0,
      y: 0
    };
    return p || ("body" !== a(o) && (c = o !== r(o) && i(o) ? {
      scrollLeft: o.scrollLeft,
      scrollTop: o.scrollTop
    } : n(o)), i(o) ? ((u = t(o)).x += o.clientLeft, u.y += o.clientTop) : (o = s(o)) && (u.x = f(o))), {
      x: e.left + c.scrollLeft - u.x,
      y: e.top + c.scrollTop - u.y,
      width: e.width,
      height: e.height
    };
  }

  function c(e) {
    return {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: e.offsetWidth,
      height: e.offsetHeight
    };
  }

  function u(e) {
    return "html" === a(e) ? e : e.parentNode || e.host || document.ownerDocument || document.documentElement;
  }

  function d(e) {
    return r(e).getComputedStyle(e);
  }

  function l(e, t) {
    void 0 === t && (t = []);

    var n = function e(t) {
      if (0 <= ["html", "body", "#document"].indexOf(a(t))) return t.ownerDocument.body;

      if (i(t)) {
        var r = d(t);
        if (/auto|scroll|overlay|hidden/.test(r.overflow + r.overflowY + r.overflowX)) return t;
      }

      return e(u(t));
    }(e);

    return n = (e = "body" === a(n)) ? r(n) : n, t = t.concat(n), e ? t : t.concat(l(u(n)));
  }

  function m(e) {
    var t;
    return !i(e) || !(t = e.offsetParent) || void 0 !== window.InstallTrigger && "fixed" === d(t).position ? null : t;
  }

  function h(e) {
    var t = r(e);

    for (e = m(e); e && 0 <= ["table", "td", "th"].indexOf(a(e));) {
      e = m(e);
    }

    return e && "body" === a(e) && "static" === d(e).position ? t : e || t;
  }

  function v(e) {
    var t = new Map(),
        r = new Set(),
        n = [];
    return e.forEach(function (e) {
      t.set(e.name, e);
    }), e.forEach(function (e) {
      r.has(e.name) || function e(o) {
        r.add(o.name), [].concat(o.requires || [], o.requiresIfExists || []).forEach(function (n) {
          r.has(n) || (n = t.get(n)) && e(n);
        }), n.push(o);
      }(e);
    }), n;
  }

  function g(e) {
    var t;
    return function () {
      return t || (t = new Promise(function (r) {
        Promise.resolve().then(function () {
          t = void 0, r(e());
        });
      })), t;
    };
  }

  function b(e) {
    return e.split("-")[0];
  }

  function y() {
    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) {
      t[r] = arguments[r];
    }

    return !t.some(function (e) {
      return !(e && "function" == typeof e.getBoundingClientRect);
    });
  }

  function x(e) {
    void 0 === e && (e = {});
    var t = e.defaultModifiers,
        r = void 0 === t ? [] : t,
        n = void 0 === (e = e.defaultOptions) ? F : e;
    return function (e, t, i) {
      function a() {
        f.forEach(function (e) {
          return e();
        }), f = [];
      }

      void 0 === i && (i = n);
      var s = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, F, {}, n),
        modifiersData: {},
        elements: {
          reference: e,
          popper: t
        },
        attributes: {},
        styles: {}
      },
          f = [],
          u = !1,
          d = {
        state: s,
        setOptions: function setOptions(i) {
          return a(), s.options = Object.assign({}, n, {}, s.options, {}, i), s.scrollParents = {
            reference: o(e) ? l(e) : [],
            popper: l(t)
          }, i = function (e) {
            var t = v(e);
            return C.reduce(function (e, r) {
              return e.concat(t.filter(function (e) {
                return e.phase === r;
              }));
            }, []);
          }(function (e) {
            var t = e.reduce(function (e, t) {
              var r = e[t.name];
              return e[t.name] = r ? Object.assign({}, r, {}, t, {
                options: Object.assign({}, r.options, {}, t.options),
                data: Object.assign({}, r.data, {}, t.data)
              }) : t, e;
            }, {});
            return Object.keys(t).map(function (e) {
              return t[e];
            });
          }([].concat(r, s.options.modifiers))), s.orderedModifiers = i.filter(function (e) {
            return e.enabled;
          }), s.orderedModifiers.forEach(function (e) {
            var t = e.name,
                r = e.options;
            r = void 0 === r ? {} : r, "function" == typeof (e = e.effect) && (t = e({
              state: s,
              name: t,
              instance: d,
              options: r
            }), f.push(t || function () {}));
          }), d.update();
        },
        forceUpdate: function forceUpdate() {
          if (!u) {
            var e = s.elements,
                t = e.reference;
            if (y(t, e = e.popper)) for (s.rects = {
              reference: p(t, h(e), "fixed" === s.options.strategy),
              popper: c(e)
            }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach(function (e) {
              return s.modifiersData[e.name] = Object.assign({}, e.data);
            }), t = 0; t < s.orderedModifiers.length; t++) {
              if (!0 === s.reset) s.reset = !1, t = -1;else {
                var r = s.orderedModifiers[t];
                e = r.fn;
                var n = r.options;
                n = void 0 === n ? {} : n, r = r.name, "function" == typeof e && (s = e({
                  state: s,
                  options: n,
                  name: r,
                  instance: d
                }) || s);
              }
            }
          }
        },
        update: g(function () {
          return new Promise(function (e) {
            d.forceUpdate(), e(s);
          });
        }),
        destroy: function destroy() {
          a(), u = !0;
        }
      };
      return y(e, t) ? (d.setOptions(i).then(function (e) {
        !u && i.onFirstUpdate && i.onFirstUpdate(e);
      }), d) : d;
    };
  }

  function w(e) {
    return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y";
  }

  function O(e) {
    var t = e.reference,
        r = e.element,
        n = (e = e.placement) ? b(e) : null;
    e = e ? e.split("-")[1] : null;
    var o = t.x + t.width / 2 - r.width / 2,
        i = t.y + t.height / 2 - r.height / 2;

    switch (n) {
      case "top":
        o = {
          x: o,
          y: t.y - r.height
        };
        break;

      case "bottom":
        o = {
          x: o,
          y: t.y + t.height
        };
        break;

      case "right":
        o = {
          x: t.x + t.width,
          y: i
        };
        break;

      case "left":
        o = {
          x: t.x - r.width,
          y: i
        };
        break;

      default:
        o = {
          x: t.x,
          y: t.y
        };
    }

    if (null != (n = n ? w(n) : null)) switch (i = "y" === n ? "height" : "width", e) {
      case "start":
        o[n] = Math.floor(o[n]) - Math.floor(t[i] / 2 - r[i] / 2);
        break;

      case "end":
        o[n] = Math.floor(o[n]) + Math.ceil(t[i] / 2 - r[i] / 2);
    }
    return o;
  }

  function M(e) {
    var t,
        n = e.popper,
        o = e.popperRect,
        i = e.placement,
        a = e.offsets,
        f = e.position,
        p = e.gpuAcceleration,
        c = e.adaptive,
        u = window.devicePixelRatio || 1;
    e = Math.round(a.x * u) / u || 0, u = Math.round(a.y * u) / u || 0;
    var d = a.hasOwnProperty("x");
    a = a.hasOwnProperty("y");
    var l,
        m = "left",
        v = "top",
        g = window;

    if (c) {
      var b = h(n);
      b === r(n) && (b = s(n)), "top" === i && (v = "bottom", u -= b.clientHeight - o.height, u *= p ? 1 : -1), "left" === i && (m = "right", e -= b.clientWidth - o.width, e *= p ? 1 : -1);
    }

    return n = Object.assign({
      position: f
    }, c && N), p ? Object.assign({}, n, ((l = {})[v] = a ? "0" : "", l[m] = d ? "0" : "", l.transform = 2 > (g.devicePixelRatio || 1) ? "translate(" + e + "px, " + u + "px)" : "translate3d(" + e + "px, " + u + "px, 0)", l)) : Object.assign({}, n, ((t = {})[v] = a ? u + "px" : "", t[m] = d ? e + "px" : "", t.transform = "", t));
  }

  function j(e) {
    return e.replace(/left|right|bottom|top/g, function (e) {
      return _[e];
    });
  }

  function E(e) {
    return e.replace(/start|end/g, function (e) {
      return U[e];
    });
  }

  function D(e, t) {
    var r = !(!t.getRootNode || !t.getRootNode().host);
    if (e.contains(t)) return !0;
    if (r) do {
      if (t && e.isSameNode(t)) return !0;
      t = t.parentNode || t.host;
    } while (t);
    return !1;
  }

  function L(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    });
  }

  function k(e, o) {
    if ("viewport" === o) e = L({
      width: (e = r(e)).innerWidth,
      height: e.innerHeight,
      x: 0,
      y: 0
    });else if (i(o)) e = t(o);else {
      var a = s(e);
      e = r(a), o = n(a), (a = p(s(a), e)).height = Math.max(a.height, e.innerHeight), a.width = Math.max(a.width, e.innerWidth), a.x = -o.scrollLeft, a.y = -o.scrollTop, e = L(a);
    }
    return e;
  }

  function P(e, t, n) {
    return t = "clippingParents" === t ? function (e) {
      var t = l(e),
          r = 0 <= ["absolute", "fixed"].indexOf(d(e).position) && i(e) ? h(e) : e;
      return o(r) ? t.filter(function (e) {
        return o(e) && D(e, r);
      }) : [];
    }(e) : [].concat(t), (n = (n = [].concat(t, [n])).reduce(function (t, n) {
      var o = k(e, n),
          p = r(n = i(n) ? n : s(e)),
          c = i(n) ? d(n) : {};
      parseFloat(c.borderTopWidth);
      var u = parseFloat(c.borderRightWidth) || 0,
          l = parseFloat(c.borderBottomWidth) || 0,
          m = parseFloat(c.borderLeftWidth) || 0;
      c = "html" === a(n);
      var h = f(n),
          v = n.clientWidth + u,
          g = n.clientHeight + l;
      return c && 50 < p.innerHeight - n.clientHeight && (g = p.innerHeight - l), l = c ? 0 : n.clientTop, u = n.clientLeft > m ? u : c ? p.innerWidth - v - h : n.offsetWidth - v, p = c ? p.innerHeight - g : n.offsetHeight - g, n = c ? h : n.clientLeft, t.top = Math.max(o.top + l, t.top), t.right = Math.min(o.right - u, t.right), t.bottom = Math.min(o.bottom - p, t.bottom), t.left = Math.max(o.left + n, t.left), t;
    }, k(e, n[0]))).width = n.right - n.left, n.height = n.bottom - n.top, n.x = n.left, n.y = n.top, n;
  }

  function B(e) {
    return Object.assign({}, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, {}, e);
  }

  function T(e, t) {
    return t.reduce(function (t, r) {
      return t[r] = e, t;
    }, {});
  }

  function W(e, r) {
    void 0 === r && (r = {});
    var n = r;
    r = void 0 === (r = n.placement) ? e.placement : r;
    var i = n.boundary,
        a = void 0 === i ? "clippingParents" : i,
        f = void 0 === (i = n.rootBoundary) ? "viewport" : i;
    i = void 0 === (i = n.elementContext) ? "popper" : i;
    var p = n.altBoundary,
        c = void 0 !== p && p;
    n = B("number" != typeof (n = void 0 === (n = n.padding) ? 0 : n) ? n : T(n, q));
    var u = e.elements.reference;
    p = e.rects.popper, a = P(o(c = e.elements[c ? "popper" === i ? "reference" : "popper" : i]) ? c : s(e.elements.popper), a, f), c = O({
      reference: f = t(u),
      element: p,
      strategy: "absolute",
      placement: r
    }), p = L(Object.assign({}, p, {}, c)), f = "popper" === i ? p : f;
    var d = {
      top: a.top - f.top + n.top,
      bottom: f.bottom - a.bottom + n.bottom,
      left: a.left - f.left + n.left,
      right: f.right - a.right + n.right
    };

    if (e = e.modifiersData.offset, "popper" === i && e) {
      var l = e[r];
      Object.keys(d).forEach(function (e) {
        var t = 0 <= ["right", "bottom"].indexOf(e) ? 1 : -1,
            r = 0 <= ["top", "bottom"].indexOf(e) ? "y" : "x";
        d[e] += l[r] * t;
      });
    }

    return d;
  }

  function H(e, t, r) {
    return void 0 === r && (r = {
      x: 0,
      y: 0
    }), {
      top: e.top - t.height - r.y,
      right: e.right - t.width + r.x,
      bottom: e.bottom - t.height + r.y,
      left: e.left - t.width - r.x
    };
  }

  function R(e) {
    return ["top", "right", "bottom", "left"].some(function (t) {
      return 0 <= e[t];
    });
  }

  var q = ["top", "bottom", "right", "left"],
      A = q.reduce(function (e, t) {
    return e.concat([t + "-start", t + "-end"]);
  }, []),
      S = [].concat(q, ["auto"]).reduce(function (e, t) {
    return e.concat([t, t + "-start", t + "-end"]);
  }, []),
      C = "beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "),
      F = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  },
      I = {
    passive: !0
  },
      N = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  },
      _ = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  },
      U = {
    start: "end",
    end: "start"
  },
      V = [{
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function fn() {},
    effect: function effect(e) {
      var t = e.state,
          n = e.instance,
          o = (e = e.options).scroll,
          i = void 0 === o || o,
          a = void 0 === (e = e.resize) || e,
          s = r(t.elements.popper),
          f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
      return i && f.forEach(function (e) {
        e.addEventListener("scroll", n.update, I);
      }), a && s.addEventListener("resize", n.update, I), function () {
        i && f.forEach(function (e) {
          e.removeEventListener("scroll", n.update, I);
        }), a && s.removeEventListener("resize", n.update, I);
      };
    },
    data: {}
  }, {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: function fn(e) {
      var t = e.state;
      t.modifiersData[e.name] = O({
        reference: t.rects.reference,
        element: t.rects.popper,
        strategy: "absolute",
        placement: t.placement
      });
    },
    data: {}
  }, {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function fn(e) {
      var t = e.state,
          r = e.options;
      e = void 0 === (e = r.gpuAcceleration) || e, r = void 0 === (r = r.adaptive) || r, e = {
        placement: b(t.placement),
        popper: t.elements.popper,
        popperRect: t.rects.popper,
        gpuAcceleration: e
      }, t.styles.popper = Object.assign({}, t.styles.popper, {}, M(Object.assign({}, e, {
        offsets: t.modifiersData.popperOffsets,
        position: t.options.strategy,
        adaptive: r
      }))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, {}, M(Object.assign({}, e, {
        offsets: t.modifiersData.arrow,
        position: "absolute",
        adaptive: !1
      })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement
      });
    },
    data: {}
  }, {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function fn(e) {
      var t = e.state;
      Object.keys(t.elements).forEach(function (e) {
        var r = t.styles[e] || {},
            n = t.attributes[e] || {},
            o = t.elements[e];
        i(o) && a(o) && (Object.assign(o.style, r), Object.keys(n).forEach(function (e) {
          var t = n[e];
          !1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t);
        }));
      });
    },
    effect: function effect(e) {
      var t = e.state,
          r = {
        popper: {
          position: "absolute",
          left: "0",
          top: "0",
          margin: "0"
        },
        arrow: {
          position: "absolute"
        },
        reference: {}
      };
      return Object.assign(t.elements.popper.style, r.popper), t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function () {
        Object.keys(t.elements).forEach(function (e) {
          var n = t.elements[e],
              o = t.attributes[e] || {};
          e = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : r[e]).reduce(function (e, t) {
            return e[t] = "", e;
          }, {}), i(n) && a(n) && (Object.assign(n.style, e), Object.keys(o).forEach(function (e) {
            n.removeAttribute(e);
          }));
        });
      };
    },
    requires: ["computeStyles"]
  }, {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function fn(e) {
      var t = e.state,
          r = e.name,
          n = void 0 === (e = e.options.offset) ? [0, 0] : e,
          o = (e = S.reduce(function (e, r) {
        var o = t.rects,
            i = b(r),
            a = 0 <= ["left", "top"].indexOf(i) ? -1 : 1,
            s = "function" == typeof n ? n(Object.assign({}, o, {
          placement: r
        })) : n;
        return o = (o = s[0]) || 0, s = ((s = s[1]) || 0) * a, i = 0 <= ["left", "right"].indexOf(i) ? {
          x: s,
          y: o
        } : {
          x: o,
          y: s
        }, e[r] = i, e;
      }, {}))[t.placement],
          i = o.y;
      t.modifiersData.popperOffsets.x += o.x, t.modifiersData.popperOffsets.y += i, t.modifiersData[r] = e;
    }
  }, {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function fn(e) {
      var t = e.state,
          r = e.options;

      if (e = e.name, !t.modifiersData[e]._skip) {
        var n = r.fallbackPlacements,
            o = r.padding,
            i = r.boundary,
            a = r.rootBoundary,
            s = r.altBoundary,
            f = void 0 === (r = r.flipVariations) || r,
            p = b(r = t.options.placement);
        n = n || (p !== r && f ? function (e) {
          if ("auto" === b(e)) return [];
          var t = j(e);
          return [E(e), t, E(t)];
        }(r) : [j(r)]);
        var c = [r].concat(n).reduce(function (e, r) {
          return e.concat("auto" === b(r) ? function (e, t) {
            void 0 === t && (t = {});
            var r = t.boundary,
                n = t.rootBoundary,
                o = t.padding,
                i = t.flipVariations,
                a = t.placement.split("-")[1],
                s = (a ? i ? A : A.filter(function (e) {
              return e.split("-")[1] === a;
            }) : q).reduce(function (t, i) {
              return t[i] = W(e, {
                placement: i,
                boundary: r,
                rootBoundary: n,
                padding: o
              })[b(i)], t;
            }, {});
            return Object.keys(s).sort(function (e, t) {
              return s[e] - s[t];
            });
          }(t, {
            placement: r,
            boundary: i,
            rootBoundary: a,
            padding: o,
            flipVariations: f
          }) : r);
        }, []);
        n = t.rects.reference, r = t.rects.popper;
        var u = new Map();
        p = !0;

        for (var d = c[0], l = 0; l < c.length; l++) {
          var m = c[l],
              h = b(m),
              v = "start" === m.split("-")[1],
              g = 0 <= ["top", "bottom"].indexOf(h),
              y = g ? "width" : "height",
              x = W(t, {
            placement: m,
            boundary: i,
            rootBoundary: a,
            altBoundary: s,
            padding: o
          });

          if (v = g ? v ? "right" : "left" : v ? "bottom" : "top", n[y] > r[y] && (v = j(v)), y = j(v), (h = [0 >= x[h], 0 >= x[v], 0 >= x[y]]).every(function (e) {
            return e;
          })) {
            d = m, p = !1;
            break;
          }

          u.set(m, h);
        }

        if (p) for (s = function s(e) {
          var t = c.find(function (t) {
            if (t = u.get(t)) return t.slice(0, e).every(function (e) {
              return e;
            });
          });
          if (t) return d = t, "break";
        }, n = f ? 3 : 1; 0 < n && "break" !== s(n); n--) {
          ;
        }
        t.placement !== d && (t.modifiersData[e]._skip = !0, t.placement = d, t.reset = !0);
      }
    },
    requiresIfExists: ["offset"],
    data: {
      _skip: !1
    }
  }, {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function fn(e) {
      var t = e.state,
          r = e.options;
      e = e.name;
      var n = r.mainAxis,
          o = void 0 === n || n;
      n = void 0 !== (n = r.altAxis) && n;
      var i = r.tether;
      i = void 0 === i || i;
      var a = r.tetherOffset,
          s = void 0 === a ? 0 : a;
      r = W(t, {
        boundary: r.boundary,
        rootBoundary: r.rootBoundary,
        padding: r.padding,
        altBoundary: r.altBoundary
      }), a = b(t.placement);
      var f = t.placement.split("-")[1],
          p = !f,
          u = w(a);
      a = "x" === u ? "y" : "x";
      var d = t.modifiersData.popperOffsets,
          l = t.rects.reference,
          m = t.rects.popper,
          h = "function" == typeof s ? s(Object.assign({}, t.rects, {
        placement: t.placement
      })) : s;

      if (s = {
        x: 0,
        y: 0
      }, o) {
        var v = "y" === u ? "top" : "left",
            g = "y" === u ? "bottom" : "right",
            y = "y" === u ? "height" : "width";
        o = d[u];
        var x = d[u] + r[v],
            O = d[u] - r[g],
            M = i ? -m[y] / 2 : 0,
            j = "start" === f ? l[y] : m[y];
        f = "start" === f ? -m[y] : -l[y], m = t.elements.arrow;
        var E = i && m ? c(m) : {
          width: 0,
          height: 0
        },
            D = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        };
        v = D[v], g = D[g], E = Math.max(0, Math.min(l[y], E[y])), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement][u] : 0, j = d[u] + (p ? l[y] / 2 - M - E - v - h : j - E - v - h) - D - (m ? "y" === u ? t.elements.popper.clientTop : t.elements.popper.clientLeft : 0), p = d[u] + (p ? -l[y] / 2 + M + E + g + h : f + E + g + h) - D, i = Math.max(i ? Math.min(x, j) : x, Math.min(o, i ? Math.max(O, p) : O)), d[u] = i, s[u] = i - o;
      }

      n && (n = d[a], i = Math.max(n + r["x" === u ? "top" : "left"], Math.min(n, n - r["x" === u ? "bottom" : "right"])), t.modifiersData.popperOffsets[a] = i, s[a] = i - n), t.modifiersData[e] = s;
    },
    requiresIfExists: ["offset"]
  }, {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function fn(e) {
      var t,
          r = e.state;
      e = e.name;
      var n = r.elements.arrow,
          o = r.modifiersData.popperOffsets,
          i = b(r.placement),
          a = w(i);

      if (i = 0 <= ["left", "right"].indexOf(i) ? "height" : "width", n) {
        var s = r.modifiersData[e + "#persistent"].padding;
        n = c(n), o = Math.max(s["y" === a ? "top" : "left"], Math.min(r.rects.popper[i] / 2 - n[i] / 2 + ((r.rects.reference[i] + r.rects.reference[a] - o[a] - r.rects.popper[i]) / 2 - (o[a] - r.rects.reference[a]) / 2 - ("y" === a ? r.elements.popper.clientLeft : r.elements.popper.clientTop)), r.rects.popper[i] - n[i] - s["y" === a ? "bottom" : "right"])), r.modifiersData[e] = ((t = {})[a] = o, t);
      }
    },
    effect: function effect(e) {
      var t = e.state,
          r = e.options;
      e = e.name;
      var n = r.element;
      n = void 0 === n ? "[data-popper-arrow]" : n, r = void 0 === (r = r.padding) ? 0 : r, ("string" != typeof n || (n = t.elements.popper.querySelector(n))) && D(t.elements.popper, n) && (t.elements.arrow = n, t.modifiersData[e + "#persistent"] = {
        padding: B("number" != typeof r ? r : T(r, q))
      });
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  }, {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: function fn(e) {
      var t = e.state;
      e = e.name;
      var r = t.rects.reference,
          n = t.rects.popper,
          o = t.modifiersData.preventOverflow,
          i = W(t, {
        elementContext: "reference"
      }),
          a = W(t, {
        altBoundary: !0
      });
      r = H(i, r), n = H(a, n, o), o = R(r), a = R(n), t.modifiersData[e] = {
        referenceClippingOffsets: r,
        popperEscapeOffsets: n,
        isReferenceHidden: o,
        hasPopperEscaped: a
      }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-reference-hidden": o,
        "data-popper-escaped": a
      });
    }
  }],
      z = x({
    defaultModifiers: V
  });
  e.createPopper = z, e.defaultModifiers = V, e.popperGenerator = x, Object.defineProperty(e, "__esModule", {
    value: !0
  });
});

/***/ }),

/***/ "./public/js/propeller.js":
/*!********************************!*\
  !*** ./public/js/propeller.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Propeller v1.3.2 (http://propeller.in)
 * Copyright 2016-2019 Digicorp, Inc.
 * Licensed under MIT (http://propeller.in/LICENSE)
 */


function _typeof2(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof2 = function _typeof2(obj) {
      return typeof obj;
    };
  } else {
    _typeof2 = function _typeof2(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof2(obj);
}

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
}; // Attach Parent Selector


var commons = function commons() {
  function commons() {}

  commons.attachParentSelector = function (parentSelector, defaultSelector) {
    var customSelector = defaultSelector;

    if (parentSelector && parentSelector !== '' && parentSelector.length > 0) {
      if (parentSelector === defaultSelector) {
        customSelector = defaultSelector;
      } else if ($(parentSelector).hasClass(defaultSelector)) {
        customSelector = parentSelector + "" + defaultSelector;
      } else {
        customSelector = parentSelector + " " + defaultSelector;
      }
    }

    return customSelector;
  };

  return commons;
}; // Inherit one class to another


function _inherits(SubClass, SuperClass) {
  if (typeof SuperClass !== "function" && SuperClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof2(SuperClass));
  }

  SubClass.prototype = new SuperClass();
} // Propeller components Mapping


var propellerControlMapping = {
  "pmd-checkbox": function pmdCheckbox() {
    $('.pmd-checkbox').pmdCheckBox();
  },
  "pmd-radio": function pmdRadio() {
    $('.pmd-radio').pmdRadio();
  },
  "pmd-textfield": function pmdTextfield() {
    $('.pmd-textfield').pmdTextfield();
  },
  "pmd-dropdown": function pmdDropdown() {
    $('.pmd-dropdown').pmdDropdown();
  },
  "pmd-alert-toggle": function pmdAlertToggle() {
    $('.pmd-alert-toggle').pmdAlert();
  },
  "pmd-tabs": function pmdTabs() {
    $('.pmd-tabs').pmdTab();
  },
  "pmd-sidebar": function pmdSidebar() {
    $().pmdSidebar();
  },
  "pmd-accordion": function pmdAccordion() {
    $('.pmd-accordion').pmdAccordion();
  },
  "pmd-ripple-effect": function pmdRippleEffect() {
    $('.pmd-ripple-effect').pmdButton();
  }
}; // DOM Observer

var observeDOM = function () {
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
      eventListenerSupported = window.addEventListener;
  return function (obj, callback) {
    if (MutationObserver) {
      // define a new observer
      var obs = new MutationObserver(function (mutations, observer) {
        if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
          callback(mutations);
        }
      }); // have the observer observe foo for changes in children

      obs.observe(obj, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true
      });
    } else if (eventListenerSupported) {
      obj.addEventListener('DOMNodeInserted', callback, false);
      obj.addEventListener('DOMNodeRemoved', callback, false);
    }
  };
}();

$(document).ready(function () {
  $.propellerkit();
});

$.propellerkit = function () {
  observeDOM(document.querySelector('body'), function (mutations) {
    processMutation(0);

    function processMutation(index) {
      if (index >= mutations.length) {
        return;
      }

      var mutation = mutations[index];
      var nodes = mutation.addedNodes;
      processNodes(nodes, function () {
        processMutation(index + 1);
      });
    }

    function processNodes(nodes, callback) {
      if (nodes.length === 0) {
        callback();
        return;
      }

      processNode(nodes, 0, function () {
        callback();
      });
    }

    function processNode(nodes, index, callback) {
      if (index >= nodes.length) {
        callback();
        return;
      }

      var node = nodes[index];

      if (containsPmdClassPrefix(node)) {
        if ($(node).attr("data-toggle") !== undefined && $(node).attr("data-toggle").toLowerCase() === "popover") {
          $().pmdPopover();
        }

        var classes = $(node).attr('class');

        if (classes === undefined) {
          callback();
          return;
        }

        classes = classes.split(' ');
        classes.forEach(function (clazz) {
          if (propellerControlMapping[clazz]) {
            propellerControlMapping[clazz]();
            return true;
          }

          return false;
        });
        processNode(nodes, index + 1, function () {
          callback();
        });
      } else {
        try {
          var childNodes = node.childNodes;
          processNodes(childNodes, function () {
            processNode(nodes, index + 1, function () {
              callback();
            });
          });
        } catch (e) {}
      }
    }

    function containsPmdClassPrefix(ele) {
      if ($(ele).attr('class') === undefined) {
        return false;
      }

      var classes = $(ele).attr('class').split(' ');

      for (var i = 0; i < classes.length; i++) {
        if (propellerControlMapping.hasOwnProperty(classes[i])) {
          return true;
        }
      }

      return false;
    }
  });
};
/**
 * --------------------------------------------------------------------------
 * Propeller v1.3.2 (http://propeller.in): textfield.js
 * Copyright 2016-2019 Digicorp, Inc.
 * Licensed under MIT (http://propeller.in/LICENSE)
 * --------------------------------------------------------------------------
 */


var pmdTextfield = function ($) {
  /**
  * ------------------------------------------------------------------------
  * Variables
  * ------------------------------------------------------------------------
  */
  var NAME = 'pmdTextfield';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var ClassName = {
    PMD_TEXTFIELD: 'pmd-textfield',
    FOCUS: 'pmd-textfield-focused',
    FLOATING_COMPLETE: 'pmd-textfield-floating-label-completed',
    FLOATING_ACTIVE: 'pmd-textfield-floating-label-active'
  };
  var Selector = {
    PARENT_SELECTOR: '',
    PMD_TEXTFIELD: '.' + ClassName.PMD_TEXTFIELD,
    FOCUS: '.' + ClassName.FOCUS,
    INPUT: '.form-control'
  };
  var Template = {
    LABEL: '<span class="pmd-textfield-focused"></span>'
  };
  var Event = {
    FOCUS: 'focus',
    FOCUSOUT: 'focusout',
    CHANGE: 'change'
  };
  /**
  * ------------------------------------------------------------------------
  * Functions
  * ------------------------------------------------------------------------
  */

  function onFocus(e) {
    var $this = $(e.target);
    $this.closest(Selector.PMD_TEXTFIELD).addClass(ClassName.FLOATING_ACTIVE + " " + ClassName.FLOATING_COMPLETE);
  }

  function onFocusOut(e) {
    var $this = $(e.target);

    if ($this.val() === "") {
      $this.closest(Selector.PMD_TEXTFIELD).removeClass(ClassName.FLOATING_COMPLETE);
    }

    $this.closest(Selector.PMD_TEXTFIELD).removeClass(ClassName.FLOATING_ACTIVE);
  }

  function onChange(e) {
    var $this = $(e.target);

    if ($this.val() !== "") {
      $this.closest(Selector.PMD_TEXTFIELD).addClass(ClassName.FLOATING_COMPLETE);
    }
  }
  /**
  * ------------------------------------------------------------------------
  * Initialization
  * ------------------------------------------------------------------------
  */


  var pmdTextfield = function () {
    _inherits(pmdTextfield, commons);

    function pmdTextfield() {
      $(pmdTextfield.prototype.attachParentSelector(Selector.PARENT_SELECTOR, Selector.FOCUS)).remove();
      $(pmdTextfield.prototype.attachParentSelector(Selector.PARENT_SELECTOR, Selector.PMD_TEXTFIELD)).find(Selector.INPUT).after(Template.LABEL);
      $(pmdTextfield.prototype.attachParentSelector(Selector.PARENT_SELECTOR, Selector.PMD_TEXTFIELD)).find(Selector.INPUT).each(function () {
        if ($(this).val() !== "") {
          $(this).closest(Selector.PMD_TEXTFIELD).addClass(ClassName.FLOATING_COMPLETE);
        }
      });
    }

    return pmdTextfield;
  }();
  /**
  * ------------------------------------------------------------------------
  * jQuery
  * ------------------------------------------------------------------------
  */


  var plugInFunction = function plugInFunction() {
    if (this.selector !== "") {
      Selector.PARENT_SELECTOR = this.selector;
    }

    new pmdTextfield();
  };

  $(document).on(Event.CHANGE, Selector.PMD_TEXTFIELD + " " + Selector.INPUT, onChange);
  $(document).on(Event.FOCUS, Selector.PMD_TEXTFIELD + " " + Selector.INPUT, onFocus);
  $(document).on(Event.FOCUSOUT, Selector.PMD_TEXTFIELD + " " + Selector.INPUT, onFocusOut);
  $.fn[NAME] = plugInFunction;
  return pmdTextfield;
}(jQuery)();
/**
 * --------------------------------------------------------------------------
 * Propeller v1.3.2 (http://propeller.in): checkbox.js
 * Copyright 2016-2019 Digicorp, Inc.
 * Licensed under MIT (http://propeller.in/LICENSE)
 * --------------------------------------------------------------------------
 */


var pmdCheckBox = function ($) {
  /**
  * ------------------------------------------------------------------------
  * Variables
  * ------------------------------------------------------------------------
  */
  var NAME = 'pmdCheckBox';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var ClassName = {
    ANIMATE: 'animate',
    PMD_CHECKBOX: 'pmd-checkbox',
    TEXTFIELD_FOCUS: 'pmd-textfield-focused'
  };
  var Selector = {
    PARENT_SELECTOR: '',
    PMD_CHECKBOX: '.' + ClassName.PMD_CHECKBOX,
    INPUT: 'input:checkbox:not(.pm-ini)',
    RIPPLE: '.pmd-checkbox-ripple-effect',
    INK: '.ink'
  };
  var Template = {
    CHECK_BOX_LABEL: '<span class="pmd-checkbox-label">&nbsp;</span>',
    SPAN_LINK: '<span class="ink"></span>'
  };
  var Event = {
    CLICK: 'click',
    MOUSE_DOWN: 'mousedown'
  };
  /**
  * ------------------------------------------------------------------------
  * Functions
  * ------------------------------------------------------------------------
  */

  function onMouseDown(e) {
    var $this = $(e.target);
    var rippler = $this;
    $(Selector.INK).remove(); // create .ink element if it doesn't exist

    if (rippler.find(Selector.INK).length === 0) {
      rippler.append(Template.SPAN_LINK);
    }

    var ink = rippler.find(Selector.INK); // prevent quick double clicks

    ink.removeClass(ClassName.ANIMATE); // set .ink diametr

    if (!ink.height() && !ink.width()) {
      var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
      ink.css({
        height: 20,
        width: 20
      });
    } // get click coordinates


    var x = e.pageX - rippler.offset().left - ink.width() / 2;
    var y = e.pageY - rippler.offset().top - ink.height() / 2; // set .ink position and add class .animate

    ink.css({
      top: y + 'px',
      left: x + 'px'
    }).addClass(ClassName.ANIMATE);
    setTimeout(function () {
      ink.remove();
    }, 1500);
  }
  /**
  * ------------------------------------------------------------------------
  * Initialization
  * ------------------------------------------------------------------------
  */


  var pmdCheckBox = function () {
    _inherits(pmdCheckBox, commons);

    function pmdCheckBox() {
      var finalSelector = pmdCheckBox.prototype.attachParentSelector(Selector.PARENT_SELECTOR, Selector.PMD_CHECKBOX);
      $(finalSelector).find(Selector.INPUT).after(Template.CHECK_BOX_LABEL);
      $(finalSelector).find(Selector.INPUT).addClass("pm-ini");
    }

    return pmdCheckBox;
  }();
  /**
  * ------------------------------------------------------------------------
  * jQuery
  * ------------------------------------------------------------------------
  */


  var plugInFunction = function plugInFunction() {
    if (this.selector !== "") {
      Selector.PARENT_SELECTOR = this.selector;
    }

    new pmdCheckBox();
  };

  $(document).on(Event.MOUSE_DOWN, Selector.RIPPLE, onMouseDown);
  $.fn[NAME] = plugInFunction;
  return pmdCheckBox;
}(jQuery)();
/**
 * --------------------------------------------------------------------------
 * Propeller v1.3.2 (http://propeller.in): radio.js
 * Copyright 2016-2019 Digicorp, Inc.
 * Licensed under MIT (http://propeller.in/LICENSE)
 * --------------------------------------------------------------------------
 */


var pmdRadio = function ($) {
  /**
  * ------------------------------------------------------------------------
  * Variables
  * ------------------------------------------------------------------------
  */
  var NAME = 'pmdRadio';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var ClassName = {
    ANIMATE: 'animate',
    PMD_RADIO: 'pmd-radio',
    PM_INI: "pm-ini"
  };
  var Selector = {
    PARENT_SELECTOR: '',
    PMD_RADIO: '.' + ClassName.PMD_RADIO,
    INPUT: 'input:radio:not(.pm-ini)',
    RIPPLE: '.pmd-radio-ripple-effect',
    INK: '.ink'
  };
  var Template = {
    RADIO_LABEL: '<span class="pmd-radio-label">&nbsp;</span>',
    SPAN_LINK: '<span class="ink"></span>'
  };
  var Event = {
    MOUSE_DOWN: 'mousedown'
  };
  /**
  * ------------------------------------------------------------------------
  * Functions
  * ------------------------------------------------------------------------
  */

  function onMouseDown(e) {
    var $this = $(e.target);
    var rippler = $this;
    $(Selector.INK).remove(); // create .ink element if it doesn't exist

    if (rippler.find(Selector.INK).length === 0) {
      rippler.append('<span class="ink"></span>');
    }

    var ink = rippler.find(Selector.INK); // prevent quick double clicks

    ink.removeClass(ClassName.ANIMATE); // set .ink diametr

    if (!ink.height() && !ink.width()) {
      var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
      ink.css({
        height: 15,
        width: 15
      });
    } // get click coordinates


    var x = e.pageX - rippler.offset().left - ink.width() / 2;
    var y = e.pageY - rippler.offset().top - ink.height() / 2; // set .ink position and add class .animate

    ink.css({
      top: y + 'px',
      left: x + 'px'
    }).addClass(ClassName.ANIMATE);
    setTimeout(function () {
      ink.remove();
    }, 1500);
  }
  /**
  * ------------------------------------------------------------------------
  * Initialization
  * ------------------------------------------------------------------------
  */


  var pmdRadio = function () {
    _inherits(pmdRadio, commons);

    function pmdRadio() {
      var finalSelector = pmdRadio.prototype.attachParentSelector(Selector.PARENT_SELECTOR, Selector.PMD_RADIO);
      $(finalSelector).find(Selector.INPUT).after(Template.RADIO_LABEL);
      $(finalSelector).find(Selector.INPUT).addClass(ClassName.PM_INI);
    }

    return pmdRadio;
  }();
  /**
  * ------------------------------------------------------------------------
  * jQuery
  * ------------------------------------------------------------------------
  */


  var plugInFunction = function plugInFunction() {
    if (this.selector !== "") {
      Selector.PARENT_SELECTOR = this.selector;
    }

    new pmdRadio();
  };

  $(document).on(Event.MOUSE_DOWN, Selector.RIPPLE, onMouseDown);
  $.fn[NAME] = plugInFunction;
  return pmdRadio;
}(jQuery)();
/**
 * --------------------------------------------------------------------------
 * Propeller v1.3.2 (http://propeller.in): button.js
 * Copyright 2016-2019 Digicorp, Inc.
 * Licensed under MIT (http://propeller.in/LICENSE)
 * -------------------------------------------------------------------------- 
 */


var pmdButton = function ($) {
  /**
   * ------------------------------------------------------------------------
   * Variables
   * ------------------------------------------------------------------------
   */
  var NAME = 'pmdButton';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Selector = {
    PARENT_SELECTOR: '',
    PMD_RIPPLE_EFFECT: ".pmd-ripple-effect",
    INK: '.ink'
  };
  var ClassName = {
    ANIMATE: "animate"
  };
  var Event = {
    MOUSEDOWN: 'mousedown',
    TOUCHSTART: 'touchstart'
  };
  var Template = {
    SPAN: "<span class='ink'></span>"
  };
  /**
   * ------------------------------------------------------------------------
   * Functions
   * ------------------------------------------------------------------------
   */

  function onMouseDown(e) {
    var rippler = $(e.target);
    $(Selector.INK).remove(); // create .ink element if it doesn't exist

    if (rippler.find(Selector.INK).length === 0) {
      rippler.append(Template.SPAN);
    }

    var ink = rippler.find(Selector.INK); // prevent quick double clicks

    ink.removeClass(ClassName.ANIMATE); // set .ink diametr

    if (!ink.height() && !ink.width()) {
      var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
      ink.css({
        height: d,
        width: d
      });
    } // get click coordinates


    var x = e.pageX - rippler.offset().left - ink.width() / 2;
    var y = e.pageY - rippler.offset().top - ink.height() / 2; // set .ink position and add class .animate

    ink.css({
      top: y + 'px',
      left: x + 'px'
    }).addClass(ClassName.ANIMATE);
    setTimeout(function () {
      ink.remove();
    }, 1500);
  }
  /**
  * ------------------------------------------------------------------------
  * Initialization
  * ------------------------------------------------------------------------
  */


  var pmdButton = function () {
    _inherits(pmdButton, commons);

    function pmdButton() {
      $(pmdButton.prototype.attachParentSelector(Selector.PARENT_SELECTOR, Selector.PMD_RIPPLE_EFFECT)).on(Event.MOUSEDOWN + " " + Event.TOUCHSTART, onMouseDown);
    }

    return pmdButton;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  var plugInFunction = function plugInFunction() {
    if (this.selector !== "") {
      Selector.PARENT_SELECTOR = this.selector;
    }

    new pmdButton();
  };

  $.fn[NAME] = plugInFunction;
  return pmdButton;
}(jQuery)();
/*!
 * --------------------------------------------------------------------------
 * Propeller v1.3.2 (http://propeller.in): dropdown.js
 * Copyright 2016-2019 Digicorp, Inc.
 * Licensed under MIT (http://propeller.in/LICENSE)
 * -------------------------------------------------------------------------- 
 */


var pmdDropdown = function ($) {
  /**
  * ------------------------------------------------------------------------
  * Variables
  * ------------------------------------------------------------------------
  */
  var NAME = 'pmdDropdown';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var minimumSize = 767;
  var ClassName = {
    CENTER: 'pmd-dropdown-menu-center',
    PMD_SIDEBAR_DROPDOWN: 'pmd-sidebar-dropdown',
    RIGHT: 'dropdown-menu-right',
    BG_RIGHT: 'pmd-dropdown-menu-bg-right',
    TOP_LEFT: 'pmd-dropdown-menu-top-left',
    BG_BOTTOM_LEFT: 'pmd-dropdown-menu-bg-bottom-left',
    TOP_RIGHT: 'pmd-dropdown-menu-top-right',
    BG_BOTTOM_RIGHT: 'pmd-dropdown-menu-bg-bottom-right',
    PMD_SIDEBAR: 'pmd-sidebar',
    OPEN: "open",
    PM_INI: "pm-ini"
  };
  var Selector = {
    PARENT_SELECTOR: '',
    DROPDOWN_MENU: '.dropdown-menu',
    RIGHT: '.' + ClassName.RIGHT,
    TOP_LEFT: '.' + ClassName.TOP_LEFT,
    TOP_RIGHT: '.' + ClassName.TOP_RIGHT,
    BG: '.pmd-dropdown-menu-bg',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    PMD_DROPDOWN: '.pmd-dropdown',
    PMD_SIDEBAR: '.' + ClassName.PMD_SIDEBAR,
    CONTAINER: '.pmd-dropdown-menu-container',
    PMD_DROPDOWN_HOVER: '.pmd-dropdown-hover',
    DATA_TOGGLE_DROPDOWN: '[data-toggle="dropdown"]',
    DROPDOWN_BACKDROP: '.dropdown-backdrop'
  };
  var Template = {
    CONTAINER: "<div class='pmd-dropdown-menu-container'></div>",
    BG: '<div class="pmd-dropdown-menu-bg"></div>'
  };
  var Event = {
    CLICK: 'click',
    SHOW_BS_DROPDOWN: 'show.bs.dropdown',
    HIDE_BS_DROPDOWN: 'hide.bs.dropdown'
  };
  /**
  * ------------------------------------------------------------------------
  * Functions
  * ------------------------------------------------------------------------
  */

  function showDropdown(that) {
    var dcdmc = that.closest(Selector.CONTAINER);
    var dcdmbg = dcdmc.find(Selector.BG);
    var w = that.outerWidth();
    var h = that.outerHeight();
    dcdmc.css({
      'width': w + 'px',
      'height': h + 'px'
    });
    dcdmbg.css({
      'width': w + 'px',
      'height': h + 'px'
    });
    setTimeout(function () {
      that.css("clip", "rect(0 " + w + "px " + h + "px 0)");
    }, 10);

    if (that.hasClass(ClassName.RIGHT)) {
      dcdmbg.addClass(ClassName.BG_RIGHT);
      dcdmc.css({
        "right": "0",
        "left": "auto"
      });
    } else if (that.hasClass(ClassName.TOP_LEFT)) {
      dcdmbg.addClass(ClassName.BG_BOTTOM_LEFT);
    } else if (that.hasClass(ClassName.TOP_RIGHT)) {
      dcdmbg.addClass(ClassName.BG_BOTTOM_RIGHT);
      dcdmc.css({
        "right": "0",
        "left": "auto"
      });
    }

    $(Selector.DROPDOWN_BACKDROP).off().remove();
  }

  function showBsDropdownDesktop(e) {
    var hassidebar = $(e.target).closest(Selector.PMD_SIDEBAR).hasClass(ClassName.PMD_SIDEBAR);
    var dropdowncenter = $(e.target).find(Selector.DROPDOWN_MENU).hasClass(ClassName.CENTER);
    var that = $(e.target).find(Selector.DROPDOWN_MENU);
    var $dataSidebar = $(e.target).find(Selector.DROPDOWN_TOGGLE).attr("data-sidebar");

    if ($(window).width() < minimumSize) {
      if ($dataSidebar == 'true') {
        that.first().stop(true, true).slideDown(300);
        $(e.target).addClass(ClassName.PMD_SIDEBAR_DROPDOWN);
      } else {
        showDropdown(that);
      }

      $(".pmd-navbar").addClass("minSizeClass");
    } else {
      if (hassidebar) {
        that.first().stop(true, true).slideDown();
      } else if (dropdowncenter) {
        if (!$(e.target).parents().hasClass(ClassName.PMD_SIDEBAR)) {
          $(Selector.DROPDOWN_MENU).removeAttr('style');
        }

        that.first().stop(true, true).slideDown();
      } else {
        showDropdown(that);
      }

      $(".pmd-navbar").removeClass("minSizeClass");
    }

    e.target.closable = false;
  }

  function hideDropdown(that) {
    var dcdmc = that.closest(Selector.CONTAINER);
    var dcdmbg = dcdmc.find(Selector.BG);
    var w = that.outerWidth();
    var h = that.outerHeight();
    that.css("clip", "rect(0 0 0 0)");
    dcdmc.removeAttr('style');
    dcdmbg.removeAttr('style');

    if (that.hasClass(ClassName.RIGHT)) {
      that.css("clip", "rect(0 " + w + "px 0 " + w + "px)");
    } else if (that.hasClass(ClassName.TOP_LEFT)) {
      that.css("clip", "rect(" + h + "px 0 " + h + "px 0)");
    } else if (that.hasClass(ClassName.TOP_RIGHT)) {
      that.css("clip", "rect(" + h + "px " + w + "px " + h + "px " + w + "px)");
    }
  }

  function hideBsDropdownDesktop(e) {
    var hassidebar = $(e.target).closest(Selector.PMD_SIDEBAR).hasClass(ClassName.PMD_SIDEBAR);
    var dropdowncenter = $(e.target).find(Selector.DROPDOWN_MENU).hasClass(ClassName.CENTER);
    var that = $(e.target).find(Selector.DROPDOWN_MENU);

    if ($(window).width() < minimumSize) {
      var $dataSidebar = $(e.target).find(Selector.DROPDOWN_TOGGLE).attr("data-sidebar");

      if ($dataSidebar == 'true') {
        that.first().stop(true, true).slideUp(300);
      } else {
        hideDropdown(that);
      }

      $(".pmd-navbar").addClass("minSizeClass");
    } else {
      if ($(e.target).parents("aside").hasClass(ClassName.PMD_SIDEBAR)) {
        return e.target.closable;
      } else {
        if (hassidebar) {
          that.first().stop(true, true).slideUp(300);
        } else if (dropdowncenter) {
          if (!$(e.target).parents().hasClass(ClassName.PMD_SIDEBAR)) {
            $(Selector.DROPDOWN_MENU).removeAttr('style');
          }

          that.first().stop(true, true).slideUp(300);
        } else {
          hideDropdown(that);
        }

        $(".pmd-navbar").removeClass("minSizeClass");
      }
    }
  }

  function onClickDropdown(e) {
    var dropdown = $(Selector.PMD_DROPDOWN);
    var hassidebar = $(e.currentTarget).closest(Selector.PMD_SIDEBAR).hasClass(ClassName.PMD_SIDEBAR);

    if (hassidebar && !$(e.currentTarget).hasClass(ClassName.OPEN)) {
      dropdown.removeClass(ClassName.OPEN);
      $(Selector.DROPDOWN_MENU).slideUp(300);
    } else if ($(e.currentTarget).parents("aside").hasClass(ClassName.PMD_SIDEBAR)) {
      $(Selector.DROPDOWN_MENU).slideUp(300);
    }

    e.currentTarget.closable = true;
  }

  function pmdsidebardropdown() {
    var dropdown = $(Selector.PMD_DROPDOWN);
    var w = dropdown.find(Selector.DROPDOWN_MENU).outerWidth();
    var h = dropdown.find(Selector.DROPDOWN_MENU).outerHeight();
    dropdown.find(Selector.RIGHT).css("clip", "rect(0 " + w + "px 0 " + w + "px)");
    dropdown.find(Selector.TOP_LEFT).css("clip", "rect(" + h + "px 0 " + h + "px 0)");
    dropdown.find(Selector.TOP_RIGHT).css("clip", "rect(" + h + "px " + w + "px " + h + "px " + w + "px)");
    dropdown.off(Event.SHOW_BS_DROPDOWN);
    dropdown.on(Event.SHOW_BS_DROPDOWN, showBsDropdownDesktop); // Add slideup animation to dropdown

    dropdown.off(Event.HIDE_BS_DROPDOWN);
    dropdown.on(Event.HIDE_BS_DROPDOWN, hideBsDropdownDesktop);

    if ($(window).width() > minimumSize) {
      dropdown.off(Event.CLICK);
      dropdown.on(Event.CLICK, onClickDropdown);
    } else {
      dropdown.find(Selector.DROPDOWN_MENU).removeAttr('style');
    }

    if ($(window).width() < minimumSize) {
      $(".pmd-navbar").addClass("minSizeClass");
    } else {
      $(".pmd-navbar").removeClass("minSizeClass");
    }
  }
  /**
  * ------------------------------------------------------------------------
  * Initialization
  * ------------------------------------------------------------------------
  */


  var pmdDropdown = function () {
    _inherits(pmdDropdown, commons);

    function pmdDropdown(options) {
      var pmddropdowntest = pmdDropdown.prototype.attachParentSelector(Selector.PARENT_SELECTOR, Selector.PMD_DROPDOWN);
      var finalSelector = $(pmddropdowntest).find(Selector.DROPDOWN_MENU + ":not(." + ClassName.PM_INI + ")");
      $(finalSelector).wrap(Template.CONTAINER);
      $(finalSelector).before(Template.BG);
      $(finalSelector).addClass(ClassName.PM_INI);
      var dataTrigger = $(finalSelector).prev("button").attr("data-trigger");

      if (dataTrigger !== undefined && dataTrigger.toLowerCase() === "hover") {
        $(finalSelector).prev("button").addClass("pmd-dropdown-hover");
      } //Hover event fot mouse over


      var mainTimeout;
      $(Selector.PMD_DROPDOWN_HOVER).hover(function (event) {
        if ('ontouchstart' in document) return $this;
        window.clearTimeout(mainTimeout);
        var parent = $(event.target).parent();
        var $this = $(this);

        if (parent.hasClass('open') && parent.is(event.target)) {
          // stop this event, stop executing any code
          // in this callback but continue to propagate
          return true;
        }

        $this.attr('aria-expanded', 'true');
        parent.addClass('open');
        $this.parent().trigger(Event.SHOW_BS_DROPDOWN);
      }, function (event) {
        var $this = $(this);
        mainTimeout = window.setTimeout(function () {
          var parent = $(event.target).parent();

          if (parent.attr("class").split(" ").indexOf("isOpenReq") > -1) {
            return true;
          }

          $this.attr('aria-expanded', 'false');
          parent.removeClass('open');
          $this.parent().trigger(Event.HIDE_BS_DROPDOWN);
        }, 10);
      });
      $(Selector.PMD_DROPDOWN_HOVER).parent().find('.dropdown-menu').each(function () {
        var $this = $(this);
        var subTimeout;
        $this.hover(function () {
          window.clearTimeout(subTimeout);
          $this.parent().parent().addClass("isOpenReq");
          $this.show();
        }, function () {
          var $submenu = $this;
          subTimeout = window.setTimeout(function () {
            $this.parent().parent().removeClass('open');
            $this.parent().parent().removeClass("isOpenReq");
            $this.parent().parent().trigger(Event.HIDE_BS_DROPDOWN);
          }, 10);
        });
      });

      if (options !== undefined && options.minimumSize !== null) {
        minimumSize = parseFloat(options.minimumSize);
      }

      pmdsidebardropdown();
    }

    return pmdDropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  var plugInFunction = function plugInFunction(options) {
    if (this.selector !== "") {
      Selector.PARENT_SELECTOR = this.selector;
    }

    new pmdDropdown(options);
  };

  $(window).resize(pmdsidebardropdown);
  $.fn[NAME] = plugInFunction;
  return pmdDropdown;
}(jQuery)();
/*!
 * Propeller v1.3.2 (http://propeller.in): accordion.js
 * Copyright 2016-2019 Digicorp, Inc.
 * Licensed under MIT (http://propeller.in/LICENSE)
 */


var pmdAccordion = function ($) {
  /**
   * ------------------------------------------------------------------------
   * Variables
      * ------------------------------------------------------------------------
      */
  var NAME = 'pmdAccordion';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var ClassName = {
    IN: 'in',
    ACTIVE: 'active'
  };
  var Selector = {
    PARENT_SELECTOR: '',
    DATA_TOGGLE_COLLAPSE: 'a[data-toggle="collapse"]',
    COLLAPSE_IN: '.collapse.in',
    ACTIVE: '.' + ClassName.ACTIVE,
    PANEL: '.panel',
    EXPANDALL: '#expandAll',
    COLLAPSEALL: '#collapseAll'
  };
  var Event = {
    CLICK: 'click'
  };
  /**
      * ------------------------------------------------------------------------
      * Functions
      * ------------------------------------------------------------------------
      */

  function applyCollapse(e) {
    var $this = $(e.target);
    var objectID = $this.attr('href');
    var expandable = $this.attr('data-expandable');
    var expanded = $this.attr("aria-expanded");
    var current = $this.closest('.pmd-accordion').attr("id");

    if (expandable === 'true') {
      if (expanded === "true") {
        $this.parents(Selector.PANEL).removeClass(ClassName.ACTIVE);
      } else {
        $this.parents(Selector.PANEL).addClass(ClassName.ACTIVE);
      }

      if ($(objectID).hasClass(ClassName.IN)) {
        $(objectID).collapse('hide');
      } else {
        $(objectID).collapse('show');
      }
    } else {
      if (expanded === "true") {
        $("#" + current + " " + Selector.ACTIVE).removeClass(ClassName.ACTIVE);
      } else {
        $("#" + current + " " + Selector.ACTIVE).removeClass(ClassName.ACTIVE);
        $this.parents(Selector.PANEL).addClass(ClassName.ACTIVE);
      }
    }
  }

  function expandAll(e) {
    var $this = $(e.target);
    var targetId = $this.attr("data-target");
    $('#' + targetId + ' ' + Selector.DATA_TOGGLE_COLLAPSE).each(function (i, event) {
      var $this = $(event);
      var objectID = $this.attr('href');

      if ($(objectID).hasClass(ClassName.IN) === false) {
        $(objectID).collapse('show');
        $(objectID).parent().addClass(ClassName.ACTIVE);
      }
    });
  }

  function collapseAll(e) {
    var $this = $(e.target);
    var targetId = $this.attr("data-target");
    $('#' + targetId + ' ' + Selector.DATA_TOGGLE_COLLAPSE).each(function (i, event) {
      var $this = $(event);
      var objectID = $this.attr('href');
      $(objectID).collapse('hide');
      $(objectID).parent().removeClass(ClassName.ACTIVE);
    });
  }
  /**
   * ------------------------------------------------------------------------
   * Initialization
   * ------------------------------------------------------------------------
   */


  var pmdAccordion = function () {
    _inherits(pmdAccordion, commons);

    function pmdAccordion() {
      $(pmdAccordion.prototype.attachParentSelector(Selector.PARENT_SELECTOR, Selector.COLLAPSE_IN)).parents(Selector.PANEL).addClass(ClassName.ACTIVE);
      $(pmdAccordion.prototype.attachParentSelector(Selector.PARENT_SELECTOR, Selector.DATA_TOGGLE_COLLAPSE)).off(Event.CLICK);
      $(pmdAccordion.prototype.attachParentSelector(Selector.PARENT_SELECTOR, Selector.DATA_TOGGLE_COLLAPSE)).on(Event.CLICK, applyCollapse);
      $(pmdAccordion.prototype.attachParentSelector(Selector.PARENT_SELECTOR, Selector.EXPANDALL)).off(Event.CLICK);
      $(pmdAccordion.prototype.attachParentSelector(Selector.PARENT_SELECTOR, Selector.EXPANDALL)).on(Event.CLICK, expandAll);
      $(pmdAccordion.prototype.attachParentSelector(Selector.PARENT_SELECTOR, Selector.COLLAPSEALL)).off(Event.CLICK);
      $(pmdAccordion.prototype.attachParentSelector(Selector.PARENT_SELECTOR, Selector.COLLAPSEALL)).on(Event.CLICK, collapseAll);
    }

    return pmdAccordion;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  var plugInFunction = function plugInFunction() {
    if (this.selector !== "") {
      Selector.PARENT_SELECTOR = this.selector;
    }

    new pmdAccordion();
  };

  $.fn[NAME] = plugInFunction;
  return pmdAccordion;
}(jQuery)();
/*!
 * --------------------------------------------------------------------------
 * Propeller v1.3.2 (http://propeller.in): alert.js
 * Copyright 2016-2019 Digicorp, Inc.
 * Licensed under MIT (http://propeller.in/LICENSE)
 * -------------------------------------------------------------------------- 
 */


var pmdAlert = function ($) {
  /**
   * ------------------------------------------------------------------------
   * Variables
   * ------------------------------------------------------------------------
   */
  var NAME = 'pmdAlert';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var positionX = 'left';
  var positionY = 'top';
  var dataEffect = 'fadeInUp';
  var dataMessage = 'Alert Message';
  var dataType = 'information';
  var actionText = 'Ok';
  var action = 'false';
  var duration = 3000;

  var actionCallback = function () {
    return;
  }();

  var ClassName = {
    CONTAINER: 'pmd-alert-container',
    PMD_ALERT: 'pmd-alert',
    CLOSE: 'pmd-alert-close',
    VISIBLE: 'visible'
  };
  var Selector = {
    PARENT_SELECTOR: '',
    TOGGLE: '.pmd-alert-toggle',
    BODY: 'body',
    CONTAINER: '.' + ClassName.CONTAINER,
    PMD_ALERT: '.' + ClassName.PMD_ALERT,
    CENTER: ".center",
    CLOSE: '.' + ClassName.CLOSE
  };
  var Event = {
    CLICK: 'click'
  };
  /**
   * ------------------------------------------------------------------------
   * Functions
   * ------------------------------------------------------------------------
   */

  function getNotificationValue() {
    if (action == "true") {
      if (actionText == null) {
        return "<div class='pmd-alert' data-action='true'>" + dataMessage + "<a href='javascript:void(0)' class='pmd-alert-close' onclick='(" + actionCallback + ")()'>×</a></div>";
      } else {
        return "<div class='pmd-alert' data-action='true'>" + dataMessage + "<a href='javascript:void(0)' class='pmd-alert-close' onclick='(" + actionCallback + ")()'>" + actionText + "</a></div>";
      }
    } else {
      if (actionText == null) {
        return "<div class='pmd-alert' data-action='false'>" + dataMessage + "</div>";
      } else {
        return "<div class='pmd-alert' data-action='true'>" + dataMessage + "<a href='javascript:void(0)' class='pmd-alert-close'>" + actionText + "</a></div>";
      }
    }
  }

  function closeAlertNotification(e) {
    var $this = $(e.target);
    $this.parents(Selector.PMD_ALERT).slideUp(function () {
      $(this).removeClass(ClassName.VISIBLE).remove();
    });
  }
  /**
  * ------------------------------------------------------------------------
  * Initialization
  * ------------------------------------------------------------------------
  */


  var pmdAlert = function () {
    _inherits(pmdAlert, commons);

    function pmdAlert(options) {
      $(pmdAlert.prototype.attachParentSelector(Selector.PARENT_SELECTOR, Selector.TOGGLE)).unbind("click");
      $(pmdAlert.prototype.attachParentSelector(Selector.PARENT_SELECTOR, Selector.TOGGLE)).on("click", function () {
        positionX = $(this).attr("data-positionX");
        positionY = $(this).attr("data-positionY");
        dataEffect = $(this).attr("data-effect");
        dataMessage = $(this).attr("data-message");
        dataType = $(this).attr("data-type");
        actionText = $(this).attr("data-action-text");
        action = $(this).attr("data-action");

        actionCallback = function () {
          return;
        }();

        actionCallback = $(this).attr("data-action-event") !== undefined && $(this).attr("data-action-event") !== "" ? $(this).attr("data-action-event") : actionCallback;

        if ($(window).width() < 768) {
          positionX = "center";
        }

        if (!$(Selector.CONTAINER + "." + positionX + "." + positionY).length) {
          $('body').append("<div class='" + ClassName.CONTAINER + " " + positionX + " " + positionY + "'></div>");
        }

        var currentPath = $(Selector.CONTAINER + "." + positionX + "." + positionY);
        var notification = getNotificationValue();
        var boxLength = $(Selector.CONTAINER + "." + positionX + "." + positionY + " " + Selector.PMD_ALERT).length;

        if ($(this).attr("data-duration") !== undefined) {
          duration = $(this).attr("data-duration");
        }

        if (options !== undefined && options.dataDuration !== null) {
          duration = parseFloat(options.dataDuration);
        }

        if (boxLength > 0 && positionY !== 'top') {
          currentPath.prepend(notification);
        } else {
          currentPath.append(notification);
        }

        currentPath.width($(Selector.CONTAINER).outerWidth());

        if (action === "true") {
          currentPath.children("[data-action='true']").addClass(ClassName.VISIBLE + " " + dataEffect);
        } else {
          currentPath.children("[data-action='false']").addClass(ClassName.VISIBLE + " " + dataEffect).delay(duration).slideUp(function () {
            $(this).removeClass(ClassName.VISIBLE + " " + dataEffect).remove();
          });
        }

        currentPath.children(Selector.PMD_ALERT).eq(boxLength).addClass(dataType);
        var middle = $(Selector.CONTAINER).outerWidth() / 2;
        $(Selector.CONTAINER + Selector.CENTER).css("marginLeft", "-" + middle + "px");
        $(document).on(Event.CLICK, Selector.CLOSE, closeAlertNotification);
      });
    }

    return pmdAlert;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  var plugInFunction = function plugInFunction(options) {
    if (this.selector !== "") {
      Selector.PARENT_SELECTOR = this.selector;
    }

    new pmdAlert(options);
  };

  $.fn[NAME] = plugInFunction;
  return pmdAlert;
}(jQuery)();
/**
 * --------------------------------------------------------------------------
 * Propeller v1.3.2 (http://propeller.in): popover.js
 * Copyright 2016-2019 Digicorp, Inc.
 * Licensed under MIT (http://propeller.in/LICENSE)
 * --------------------------------------------------------------------------
 */


var pmdPopover = function ($) {
  /**
  * ------------------------------------------------------------------------
  * Variables
  * ------------------------------------------------------------------------
  */
  var NAME = 'pmdPopover';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Selector = {
    PARENT_SELECTOR: '',
    POPOVER_HTML_DATA_TOGGLE: '.popover-html[data-toggle="popover"]',
    DATA_TOGGLE: '[data-toggle="popover"]',
    POPOVER: '.popover'
  };
  var Event = {
    CLICK: 'click',
    SHOW_BS_POPOVER: 'shown.bs.popover',
    HIDE_BS_POPOVER: 'hidden.bs.popover'
  };
  /**
  * ------------------------------------------------------------------------
  * Functions
  * ------------------------------------------------------------------------
  */

  function placementFunction(pop, dom_el) {
    var range = 200;
    var curPlacement = $(dom_el).attr("data-placement");
    var scrolled = $(window).scrollTop();
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    var elWidth = $(dom_el).outerWidth();
    var elHeight = $(dom_el).outerHeight();
    var elTop = $(dom_el).offset().top;
    var elLeft = $(dom_el).offset().left;
    var curPosTop = elTop - scrolled;
    var curPosLeft = elLeft;
    var curPosRight = winWidth - curPosLeft - elWidth;
    var curPosBottom = winHeight - curPosTop - elHeight;

    if (curPlacement === "left" && curPosLeft <= range) {
      return 'right';
    } else if (curPlacement === "right" && curPosRight <= range) {
      return 'left';
    } else if (curPlacement === "top" && curPosTop <= range) {
      return 'bottom';
    }

    if (curPlacement === "bottom" && curPosBottom <= range) {
      return 'top';
    } else {
      return curPlacement;
    }
  }

  var popoverHtmlDataToggleOptions = {
    html: true,
    content: function content() {
      var currentID = $(this).attr("data-id");
      var currentHTML = $(currentID).html();
      return currentHTML;
    },
    placement: placementFunction
  };
  var dataToggleOptions = {
    placement: placementFunction
  };
  /**
  * ------------------------------------------------------------------------
  * Initialization
  * ------------------------------------------------------------------------
  */

  var pmdPopover = function () {
    function pmdPopover() {
      $(Selector.POPOVER_HTML_DATA_TOGGLE).popover(popoverHtmlDataToggleOptions);
      $(Selector.DATA_TOGGLE).popover(dataToggleOptions);
      $(Selector.DATA_TOGGLE).on(Event.SHOW_BS_POPOVER, function (e) {
        var colorClass = $(e.target).attr("data-color");
        $(Selector.POPOVER).addClass(colorClass);
      }).on(Event.HIDE_BS_POPOVER, function (e) {
        var colorClass = $(e.target).attr("data-color");
        $(Selector.POPOVER).removeClass(colorClass);
      });
    }

    return pmdPopover;
  }();
  /**
  * ------------------------------------------------------------------------
  * jQuery
  * ------------------------------------------------------------------------
  */


  var plugInFunction = function plugInFunction() {
    if (this.selector !== "") {
      Selector.PARENT_SELECTOR = this.selector;
    }

    new pmdPopover();
  };

  $.fn[NAME] = plugInFunction;
  return pmdPopover;
}(jQuery)();
/**
 * --------------------------------------------------------------------------
 * Propeller v1.3.2 (http://propeller.in): tab-scrollable.js
 * Copyright 2016-2019 Digicorp, Inc.
 * Licensed under MIT (http://propeller.in/LICENSE)
 * --------------------------------------------------------------------------
 */


var pmdTab = function ($) {
  /**
   * ------------------------------------------------------------------------
   * Variables
   * ------------------------------------------------------------------------
   */
  var NAME = 'pmdTab';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var ClassName = {
    PMD_TAB: 'pmd-tabs',
    NAV_JUSTIFIED: 'nav-justified',
    PREV_TAB: 'prev-tab',
    LAST_TAB: 'last-tab',
    PM_INI: "pm-ini",
    SCROLL: "pmd-tabs-scroll",
    SCROLL_CONTAINER: 'pmd-tabs-scroll-container',
    ACTIVE_BAR: 'pmd-tab-active-bar'
  };
  var Selector = {
    PARENT_SELECTOR: '',
    PMD_TAB: '.' + ClassName.PMD_TAB,
    UL_NAV_TABS: 'ul.nav-tabs',
    LI: 'li',
    SCROLL_CONTAINER: '.' + ClassName.SCROLL_CONTAINER,
    NAV_TAB: '.nav-tabs',
    SCROLL_RIGHT: '.pmd-tabs-scroll-right',
    SCROLL_LEFT: '.pmd-tabs-scroll-left',
    UL_LI_ACTIVE: 'ul li.active',
    ACTIVE_BAR: '.' + ClassName.ACTIVE_BAR,
    NAV: '.nav',
    UL_LI: 'ul li',
    NAV_TABS_LI: '.nav-tabs li',
    LAST_TAB: '.' + ClassName.LAST_TAB,
    PREV_TAB: '.' + ClassName.PREV_TAB,
    PM_INI: '.' + ClassName.PM_INI
  };
  var Template = {
    ACTIVE_BAR_DIV: "<div class='pmd-tab-active-bar'></div>",
    SCROLL_LEFT: "<div class='pmd-tabs-scroll-left'><i class='material-icons pmd-sm'>chevron_left</i></div>",
    SCROLL_RIGHT: "<div class='pmd-tabs-scroll-right'><i class='material-icons pmd-sm'>chevron_right</i></div>",
    SCROLL_CONTAINER: "<div class='pmd-tabs-scroll-container'></div>"
  };
  /**
  * ------------------------------------------------------------------------
  * Functions
  * ------------------------------------------------------------------------
  */

  function widthOfList($this) {
    var itemsWidth = 0;
    $this.find(Selector.LI).each(function () {
      var itemWidth = $(this)[0].getBoundingClientRect().width;
      itemsWidth += itemWidth;
    });
    return itemsWidth;
  }

  function appendulwidth($this) {
    if ($this.find(Selector.UL_NAV_TABS).hasClass(ClassName.NAV_JUSTIFIED)) {
      $this.find(Selector.UL_NAV_TABS).width("100%");
    } else {
      $this.find(Selector.UL_NAV_TABS).width(widthOfList($this));
    }
  }

  function getLeftPosi($this) {
    return $this.find(Selector.UL_NAV_TABS).position().left;
  }

  function reAdjust($this) {
    if ($this.outerWidth() < widthOfList($this)) {
      var navScrolledRight = $this.find(Selector.SCROLL_CONTAINER).scrollLeft(),
          navWrapWidth = $this.width(),
          navWidth = $this.find(Selector.NAV_TAB).width(),
          ammountRight = navWidth - navScrolledRight - navWrapWidth;

      if (ammountRight > 0) {
        $this.find(Selector.SCROLL_RIGHT).show();
      }
    } else {
      $this.find(Selector.SCROLL_RIGHT).hide();
    }

    if (getLeftPosi($this) < 0) {
      var navScrolledLeft = $this.find(Selector.SCROLL_CONTAINER).scrollLeft(),
          ammountLeft = navScrolledLeft;

      if (ammountLeft > 0) {
        $this.find(Selector.SCROLL_LEFT).show();
      }
    } else {
      $this.find(Selector.SCROLL_LEFT).hide();
    }
  }

  function activeTabCenter($this) {
    var $tabWidth = $this.outerWidth(),
        $middlePosition = $tabWidth / 2,
        $tabWrapperLeft = $this.offset().left,
        $sliderActive = $this.find(Selector.UL_LI_ACTIVE),
        $activeWidth = $sliderActive.outerWidth(),
        $tabHalfWidth = $activeWidth / 2,
        $tableftScroll = $this.find(Selector.SCROLL_CONTAINER).scrollLeft(),
        $tableftPosi = $this.find(Selector.UL_LI_ACTIVE).offset().left,
        $tabCenterPosi = $tableftPosi - $middlePosition - $tabWrapperLeft + $tableftScroll + $tabHalfWidth;
    $this.find(Selector.SCROLL_CONTAINER).animate({
      scrollLeft: $tabCenterPosi
    }, 1);
  }

  function sliderLoad($this) {
    var $slider = $this.find(Selector.ACTIVE_BAR),
        $sliderActive = $this.find(Selector.UL_LI_ACTIVE),
        $isX = $sliderActive.offset().left,
        $navX = $this.find(Selector.NAV).offset().left,
        $wrapperLeft = $this.offset().left,
        $sliderLeft = $isX - $wrapperLeft,
        $finalPossion = $wrapperLeft - $navX + $isX - $wrapperLeft;

    if ($navX < $wrapperLeft) {
      $slider.width($sliderActive.width() + "px").css("left", $finalPossion + "px");
    } else {
      $slider.width($sliderActive.width() + "px").css("left", $sliderLeft + "px");
    }

    $this.find(Selector.UL_LI).click(function () {
      var $thisWidth = $(this).width() + "px",
          $newLeft = $(this).offset().left - $wrapperLeft,
          $navX = $(this).closest(Selector.NAV).offset().left;
      $finalPossion = $wrapperLeft - $navX + $newLeft;
      $slider.width($thisWidth).css("left", $finalPossion + "px");
    });
  }

  function onResizeWindow(event) {
    var $this = event.data.param1;
    setTimeout(function () {
      appendulwidth($this);
      reAdjust($this);
      activeTabCenter($this);
    }, 150);
    sliderLoad($this);
  }

  function onPmdTabScrollRightClick(event) {
    var $this = event.data.param1;
    var $tabSet = '',
        $wrapper = $(event.currentTarget).prev(Selector.SCROLL_CONTAINER),
        $tab = $wrapper.find(Selector.NAV_TABS_LI),
        $thisWidht = $(event.currentTarget).outerWidth(),
        $navCotainer = $this.outerWidth(),
        $wrapperRight = $this.offset().left + $navCotainer;
    $tab.each(function () {
      var SuspectTabLeft = $(this).offset().left;
      var SuspectTabRight = $(this).offset().left + $(this).outerWidth();
      $(this).removeClass(ClassName.PREV_TAB);

      if (SuspectTabLeft < $wrapperRight && SuspectTabRight > $wrapperRight) {
        $tabSet = SuspectTabRight - $wrapperRight + $thisWidht;
        $(this).addClass(ClassName.LAST_TAB);
        $(this).prev().removeClass(ClassName.LAST_TAB);
      }
    });
    var finalTab = $wrapper.find(Selector.LAST_TAB).next().length;

    if (finalTab === 0) {
      var lastTabRight = $wrapper.find(Selector.LAST_TAB).offset().left + $wrapper.find(Selector.LAST_TAB).outerWidth();
      var NewScrollAmount = lastTabRight - $wrapperRight;
      $wrapper.animate({
        scrollLeft: '+=' + NewScrollAmount
      });
      $(event.currentTarget).fadeOut('slow');
    } else {
      $wrapper.animate({
        scrollLeft: '+=' + $tabSet
      });
    }

    $(event.currentTarget).parents(Selector.PMD_TAB).find(Selector.SCROLL_LEFT).fadeIn('slow');
  }

  function onPmdTabScrollLeftClick(event) {
    var $this = event.data.param1;
    var $wrapper = $(event.currentTarget).next(Selector.SCROLL_CONTAINER),
        $tab = $wrapper.find(Selector.NAV_TABS_LI),
        $thisWidht = $(event.currentTarget).outerWidth(),
        $wrapperLeft = $this.offset().left,
        $tabSetLeft = '';
    $tab.each(function () {
      var SuspectTabLeft = $(this).offset().left;
      var SuspectTabRight = $(this).offset().left + $(this).outerWidth();
      $(this).removeClass(ClassName.LAST_TAB);

      if (SuspectTabLeft < $wrapperLeft && SuspectTabRight > $wrapperLeft) {
        $tabSetLeft = $wrapperLeft - SuspectTabLeft + $thisWidht;
        $(this).addClass(ClassName.PREV_TAB);
        $(this).next().removeClass(ClassName.PREV_TAB);
      }
    });
    var finalTab = $wrapper.find(Selector.PREV_TAB).prev().length;

    if (finalTab === 0) {
      var lastTableft = $wrapper.find(Selector.PREV_TAB).offset().left;
      var NewScrollAmount = $wrapperLeft - lastTableft;
      $wrapper.animate({
        scrollLeft: '-=' + NewScrollAmount
      });
      $(event.currentTarget).fadeOut('slow');
    } else {
      $wrapper.animate({
        scrollLeft: '-=' + $tabSetLeft
      });
    }

    $(event.currentTarget).parents(Selector.PMD_TAB).find(Selector.SCROLL_RIGHT).fadeIn('slow');
  }

  function onUlLiClick(event) {
    var $this = event.data.param1;
    var $wrapper = $(event.target).closest(Selector.SCROLL_CONTAINER);
    var activeLeft = $(event.target).offset().left;
    var activeRight = $(event.target).offset().left + $(event.target).outerWidth();
    var $navCotainer = $this.outerWidth();
    var $wrapperRight = $this.offset().left + $navCotainer;
    var $buttonWidth = $(Selector.SCROLL_RIGHT).outerWidth();
    var $wrapperLeft = $this.offset().left;
    var cuttRight = $wrapperRight - $buttonWidth;
    var cuttleft = $wrapperLeft + $buttonWidth;

    if (activeLeft < cuttleft && activeRight > cuttleft) {
      var setLeft = $wrapperLeft - activeLeft + $buttonWidth;
      $wrapper.animate({
        scrollLeft: '-=' + setLeft
      });
      $(event.target).parents(Selector.PMD_TAB).find(Selector.SCROLL_RIGHT).fadeIn('slow');
    }

    if (activeLeft < cuttRight && activeRight > cuttRight) {
      var setRight = activeRight - $wrapperRight + $buttonWidth;
      $wrapper.animate({
        scrollLeft: '+=' + setRight
      });
      $(event.target).parents(Selector.PMD_TAB).find(Selector.SCROLL_LEFT).fadeIn('slow');
    }
  }
  /**
  * ------------------------------------------------------------------------
  * Initialization
  * ------------------------------------------------------------------------
  */


  var pmdTab = function () {
    _inherits(pmdTab, commons);

    function pmdTab(options) {
      $(window).unbind("resize");
      $(pmdTab.prototype.attachParentSelector(Selector.PARENT_SELECTOR, Selector.PMD_TAB)).each(function () {
        var $this = $(this);

        if (options !== undefined && options.scroll !== null && (options.scroll === true || options.scroll === "true")) {
          $this.addClass(ClassName.SCROLL);
        } else {
          $this.removeClass(ClassName.SCROLL);

          if (options !== undefined && $this.attr("scroll") !== undefined && $this.attr("scroll").toLowerCase() === "true") {
            $this.attr("scroll", "false");
          }

          if ($this.find(".nav.nav-tabs").parent().attr("class").split(" ").indexOf(ClassName.SCROLL_CONTAINER) > -1) {
            $this.find(".nav.nav-tabs").unwrap();
            $this.find(Selector.ACTIVE_BAR).remove();
            $this.find(Selector.SCROLL_LEFT).remove();
            $this.find(Selector.SCROLL_RIGHT).remove();
          }
        }

        if ($this.attr("scroll") !== undefined && $this.attr("scroll").toLowerCase() === "true") {
          $this.addClass(ClassName.SCROLL);
        }

        if ($this.attr("class").split(" ").indexOf(ClassName.SCROLL) > -1) {
          if ($this.find(".nav.nav-tabs").parent().attr("class").split(" ").indexOf(ClassName.SCROLL_CONTAINER) < 0) {
            $this.find(".nav.nav-tabs").wrap(Template.SCROLL_CONTAINER);
            $this.find(Selector.SCROLL_CONTAINER).append(Template.ACTIVE_BAR_DIV);
            $this.find(Selector.SCROLL_CONTAINER).before(Template.SCROLL_LEFT);
            $this.append(Template.SCROLL_RIGHT);
          }
        } else {
          if ($this.find(Selector.ACTIVE_BAR).length === 0) {
            $this.find(".nav.nav-tabs").before(Template.ACTIVE_BAR_DIV);
          }
        }

        appendulwidth($this);
        reAdjust($this);
        activeTabCenter($this);
        sliderLoad($this);
        $this.find(Selector.SCROLL_RIGHT).off("click");
        $this.find(Selector.SCROLL_LEFT).off("click");
        $this.find(Selector.SCROLL_RIGHT).click({
          param1: $this
        }, onPmdTabScrollRightClick);
        $this.find(Selector.SCROLL_LEFT).click({
          param1: $this
        }, onPmdTabScrollLeftClick);
        $this.find(Selector.UL_LI).click({
          param1: $this
        }, onUlLiClick);
        $(window).resize({
          param1: $this
        }, onResizeWindow);
      });
    }

    return pmdTab;
  }();
  /**
  * ------------------------------------------------------------------------
  * jQuery
  * ------------------------------------------------------------------------
  */


  var plugInFunction = function plugInFunction(options) {
    if (this.selector !== "") {
      Selector.PARENT_SELECTOR = this.selector;
    }

    new pmdTab(options);
  };

  $.fn[NAME] = plugInFunction;
  return pmdTab;
}(jQuery)();
/**
 * --------------------------------------------------------------------------
 * Propeller v1.3.2 (http://propeller.in): sidebar.js
 * Copyright 2016-2019 Digicorp, Inc.
 * Licensed under MIT (http://propeller.in/LICENSE)
 * --------------------------------------------------------------------------
 */


var pmdSidebar = function ($) {
  /**
  * ------------------------------------------------------------------------
  * Variables
  * ------------------------------------------------------------------------
  */
  var NAME = 'pmdSidebar';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var isOpenWidth = 1200;
  var ClassName = {
    OPEN: 'pmd-sidebar-open',
    SLIDE_PUSH: 'pmd-sidebar-slide-push',
    RIGHT_FIXED: 'pmd-sidebar-right-fixed',
    LEFT_FIXED: 'pmd-sidebar-left-fixed',
    OVERLAY_ACTIVE: 'pmd-sidebar-overlay-active',
    BODY_OPEN: 'pmd-body-open',
    RIGHT: 'pmd-sidebar-right',
    NAVBAR_SIDEBAR: 'pmd-navbar-sidebar',
    LEFT: 'pmd-sidebar-left',
    PM_INI: ".pm-ini",
    IS_SLIDEPUSH: "is-slidepush"
  };
  var Selector = {
    BODY: 'body',
    PARENT_SELECTOR: '',
    OVERLAY: '.pmd-sidebar-overlay',
    SIDEBAR: '.pmd-sidebar',
    LEFT: '.' + ClassName.LEFT,
    RIGHT_FIXED: '.' + ClassName.RIGHT_FIXED,
    NAVBAR_SIDEBAR: '.' + ClassName.NAVBAR_SIDEBAR,
    SIDEBAR_HEADER: '#sidebar .sidebar-header',
    TOGGLE: '.pmd-sidebar-toggle',
    TOPBAR_FIXED: '.topbar-fixed',
    SIDEBAR_DROPDOWN: '.pmd-sidebar-nav .dropdown-menu',
    TOGGLE_RIGHT: '.pmd-sidebar-toggle-right',
    TOPBAR_TOGGLE: '.pmd-topbar-toggle',
    TOPBAR_CLOSE: '.topbar-close',
    NAVBAR_TOGGLE: '.pmd-navbar-toggle',
    PM_INI: ".pm-ini",
    IS_SLIDEPUSH: '.' + ClassName.IS_SLIDEPUSH
  };
  var Event = {
    CLICK: 'click'
  };
  /**
  * ------------------------------------------------------------------------
  * Functions
  * ------------------------------------------------------------------------
  */
  // Left sidebar toggle

  function onSidebarToggle(e) {
    var dataTarget = "#" + $(e.currentTarget).attr("data-target");
    $(dataTarget).toggleClass(ClassName.OPEN);

    if (($(dataTarget).hasClass(ClassName.LEFT_FIXED) || $(dataTarget).hasClass(ClassName.RIGHT_FIXED)) && $(dataTarget).hasClass(ClassName.OPEN)) {
      $(Selector.OVERLAY).addClass(ClassName.OVERLAY_ACTIVE);
      $(Selector.BODY).addClass(ClassName.BODY_OPEN);
    } else {
      $(Selector.OVERLAY).removeClass(ClassName.OVERLAY_ACTIVE);
      $(Selector.BODY).removeClass(ClassName.BODY_OPEN);
    }
  } // Nave bar in Sidebar


  function onNavBarToggle() {
    $(Selector.NAVBAR_SIDEBAR).toggleClass(ClassName.OPEN);

    if ($(Selector.NAVBAR_SIDEBAR).hasClass(ClassName.NAVBAR_SIDEBAR) && $(Selector.NAVBAR_SIDEBAR).hasClass(ClassName.OPEN)) {
      $(Selector.OVERLAY).addClass(ClassName.OVERLAY_ACTIVE);
      $(Selector.BODY).addClass(ClassName.BODY_OPEN);
    } else {
      $(Selector.OVERLAY).removeClass(ClassName.OVERLAY_ACTIVE);
      $(Selector.BODY).addClass(ClassName.BODY_OPEN);
    }
  } // Overlay


  function onOverlayClick(event) {
    var $this = $(event.currentTarget);
    $this.removeClass(ClassName.OVERLAY_ACTIVE);
    $(Selector.SIDEBAR).removeClass(ClassName.OPEN);
    $(Selector.NAVBAR_SIDEBAR).removeClass(ClassName.OPEN);
    $(Selector.BODY).removeClass(ClassName.BODY_OPEN);
    event.stopPropagation();
  } // On Window Resize


  function onResizeWindow(e) {
    var options = e.data.param1;
    var sideBarSelector = Selector.SIDEBAR;
    $(sideBarSelector).each(function () {
      var $this = $(this);
      var sideBarId = $this.attr("id");
      var isOpenWidth = $("a[data-target=" + sideBarId + "]").attr("is-open-width");

      if ($(window).width() < isOpenWidth) {
        if ($("#" + sideBarId).hasClass(ClassName.LEFT && ClassName.SLIDE_PUSH)) {
          $("#" + sideBarId).removeClass(ClassName.OPEN + ' ' + ClassName.SLIDE_PUSH);
          $("#" + sideBarId).addClass(ClassName.LEFT_FIXED + ' ' + ClassName.IS_SLIDEPUSH);
        } else {
          $("#" + sideBarId).removeClass(ClassName.OPEN);
        }
      } else {
        if ($("#" + sideBarId).hasClass(ClassName.IS_SLIDEPUSH)) {
          $("#" + sideBarId).addClass(ClassName.OPEN + ' ' + ClassName.SLIDE_PUSH);
          $("#" + sideBarId).removeClass(ClassName.LEFT_FIXED);
        } else {
          $("#" + sideBarId).addClass(ClassName.OPEN);
        }
      }
    });
    $(pmdSidebar.prototype.attachParentSelector(Selector.PARENT_SELECTOR, Selector.OVERLAY)).removeClass(ClassName.OVERLAY_ACTIVE);
    $(Selector.BODY).removeClass(ClassName.BODY_OPEN);
  }
  /**
  * ------------------------------------------------------------------------
  * Initialization
  * ------------------------------------------------------------------------
  */


  var pmdSidebar = function () {
    _inherits(pmdSidebar, commons);

    function pmdSidebar(options) {
      var sideBarSelector = Selector.TOGGLE;

      if (Selector.PARENT_SELECTOR !== "" && Selector.PARENT_SELECTOR !== undefined) {
        sideBarSelector = Selector.TOGGLE + "[data-target=" + Selector.PARENT_SELECTOR.substr(1, Selector.PARENT_SELECTOR.length) + "]";
      }

      $(sideBarSelector).each(function () {
        var $this = $(this);
        var dataTarget = "#" + $this.attr("data-target");
        var dataPlacement = $this.attr("data-placement");
        var dataPosition = $this.attr("data-position");
        var isopen = $this.attr("is-open");
        var minsize = $this.attr("minsize");
        dataPlacement = dataPlacement || "";
        dataPosition = dataPosition || "";

        if ($(sideBarSelector).attr("data-target") === undefined) {
          console.warn("You need to define 'data-target' attribute in the action button.");
        }

        if ($(Selector.SIDEBAR).attr("id") === undefined) {
          console.warn("You need to add id='" + $this.attr("data-target") + "'in the sidebar container div like <aside id='" + $this.attr("data-target") + "'class='pmd-sidebar'>");
        }

        if (dataPlacement.toLowerCase() === "left") {
          $(dataTarget).addClass(ClassName.LEFT);
        } else if (dataPlacement.toLowerCase() === "right") {
          $(dataTarget).addClass(ClassName.RIGHT_FIXED);
        } else {
          $(dataTarget).addClass(ClassName.LEFT);
        }

        if (dataPlacement.toLowerCase() === "left" && dataPosition.toLowerCase() === "slidepush") {
          $(dataTarget).addClass(ClassName.SLIDE_PUSH);
        } else if (dataPlacement.toLowerCase() === "left" && dataPosition.toLowerCase() === "fixed") {
          $(dataTarget).addClass(ClassName.LEFT_FIXED);
        } else if (dataPlacement.toLowerCase() === "right" && dataPosition.toLowerCase() === "slidepush") {} else if (dataPlacement.toLowerCase() === "right" && dataPosition.toLowerCase() === "fixed") {
          $(dataTarget).addClass(ClassName.RIGHT_FIXED);
        } else {
          $(dataTarget).addClass(ClassName.LEFT_FIXED);
        }

        if (isopen !== undefined && isopen !== null && (isopen === true || isopen === "true")) {
          $(dataTarget).addClass(ClassName.OPEN);
        } else {
          $(dataTarget).removeClass(ClassName.OPEN);
        }

        $(dataTarget + ' ' + Selector.SIDEBAR_DROPDOWN).off();
        $(dataTarget + ' ' + Selector.SIDEBAR_DROPDOWN).on(Event.CLICK, function (event) {
          event.stopPropagation();
        });
        $(pmdSidebar.prototype.attachParentSelector(Selector.PARENT_SELECTOR, Selector.TOPBAR_TOGGLE)).off(Event.CLICK);
        $(pmdSidebar.prototype.attachParentSelector(Selector.PARENT_SELECTOR, Selector.TOPBAR_TOGGLE)).on(Event.CLICK, function (e) {
          $(Selector.TOPBAR_FIXED).toggleClass(ClassName.OPEN);
        });
        $(pmdSidebar.prototype.attachParentSelector(Selector.PARENT_SELECTOR, Selector.TOPBAR_CLOSE)).off(Event.CLICK);
        $(pmdSidebar.prototype.attachParentSelector(Selector.PARENT_SELECTOR, Selector.TOPBAR_CLOSE)).on(Event.CLICK, function () {
          $(Selector.TOPBAR_FIXED).removeClass(ClassName.OPEN);
        });
        $this.off(Event.CLICK);
        $this.on(Event.CLICK, onSidebarToggle);
        var isOpenWidth = $this.attr("is-open-width");

        if ($(window).width() < isOpenWidth) {
          if ($(dataTarget).hasClass(ClassName.LEFT && ClassName.SLIDE_PUSH)) {
            $(dataTarget).removeClass(ClassName.OPEN + ' ' + ClassName.SLIDE_PUSH);
            $(dataTarget).addClass(ClassName.LEFT_FIXED + ' ' + ClassName.IS_SLIDEPUSH);
          } else {
            $(dataTarget).removeClass(ClassName.OPEN);
          }
        } else {
          if ($(dataTarget).hasClass(ClassName.IS_SLIDEPUSH)) {
            $(dataTarget).addClass(ClassName.OPEN + ' ' + ClassName.SLIDE_PUSH);
            $(dataTarget).removeClass(ClassName.LEFT_FIXED);
          } else {//			$(dataTarget).addClass(ClassName.OPEN);
          }
        }
      });
      $(pmdSidebar.prototype.attachParentSelector(Selector.PARENT_SELECTOR, Selector.NAVBAR_TOGGLE)).off(Event.CLICK);
      $(pmdSidebar.prototype.attachParentSelector(Selector.PARENT_SELECTOR, Selector.NAVBAR_TOGGLE)).on(Event.CLICK, onNavBarToggle);
      $(pmdSidebar.prototype.attachParentSelector(Selector.PARENT_SELECTOR, Selector.OVERLAY)).off(Event.CLICK);
      $(pmdSidebar.prototype.attachParentSelector(Selector.PARENT_SELECTOR, Selector.OVERLAY)).on(Event.CLICK, onOverlayClick); //	$(window).unbind("resize");

      $(window).resize({
        param1: options
      }, onResizeWindow);

      (function (removeClass) {
        jQuery.fn.removeClass = function (value) {
          if (value && typeof value.test === "function") {
            for (var i = 0, l = this.length; i < l; i++) {
              var elem = this[i];

              if (elem.nodeType === 1 && elem.className) {
                var classNames = elem.className.split(/\s+/);

                for (var n = classNames.length; n--;) {
                  if (value.test(classNames[n])) {
                    classNames.splice(n, 1);
                  }
                }

                elem.className = jQuery.trim(classNames.join(" "));
              }
            }
          } else {
            removeClass.call(this, value);
          }

          return this;
        };
      })(jQuery.fn.removeClass);
    }

    return pmdSidebar;
  }();
  /**
  * ------------------------------------------------------------------------
  * jQuery
  * ------------------------------------------------------------------------
  */


  var plugInFunction = function plugInFunction(arg) {
    if (this.selector !== "") {
      Selector.PARENT_SELECTOR = this.selector;
    }

    new pmdSidebar(arg);
  };

  $.fn[NAME] = plugInFunction;
  return pmdSidebar;
}(jQuery)();

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!************************************************************************************************************************************************************!*\
  !*** multi ./public/js/jquery-3.4.1.min.js ./public/js/popper.min.js ./public/js/propeller.js ./public/admin_assets/js/front.js ./resources/sass/app.scss ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\xampp\htdocs\ehop\public\js\jquery-3.4.1.min.js */"./public/js/jquery-3.4.1.min.js");
__webpack_require__(/*! C:\xampp\htdocs\ehop\public\js\popper.min.js */"./public/js/popper.min.js");
__webpack_require__(/*! C:\xampp\htdocs\ehop\public\js\propeller.js */"./public/js/propeller.js");
__webpack_require__(/*! C:\xampp\htdocs\ehop\public\admin_assets\js\front.js */"./public/admin_assets/js/front.js");
module.exports = __webpack_require__(/*! C:\xampp\htdocs\ehop\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });