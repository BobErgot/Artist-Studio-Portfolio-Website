! function (e, t) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function (k, e) {
	"use strict";

	function g(e) {
		return null != e && e === e.window
	}
	var t = [],
		S = k.document,
		i = Object.getPrototypeOf,
		a = t.slice,
		m = t.concat,
		l = t.push,
		o = t.indexOf,
		n = {},
		s = n.toString,
		v = n.hasOwnProperty,
		r = v.toString,
		c = r.call(Object),
		b = {},
		y = function (e) {
			return "function" == typeof e && "number" != typeof e.nodeType
		},
		u = {
			type: !0,
			src: !0,
			noModule: !0
		};

	function w(e, t, n) {
		var i, o = (t = t || S).createElement("script");
		if (o.text = e, n)
			for (i in u) n[i] && (o[i] = n[i]);
		t.head.appendChild(o).parentNode.removeChild(o)
	}

	function x(e) {
		return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[s.call(e)] || "object" : typeof e
	}
	var T = function (e, t) {
		return new T.fn.init(e, t)
	},
		d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

	function p(e) {
		var t = !!e && "length" in e && e.length,
			n = x(e);
		return !y(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
	}
	T.fn = T.prototype = {
		jquery: "3.3.1",
		constructor: T,
		length: 0,
		toArray: function () {
			return a.call(this)
		},
		get: function (e) {
			return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
		},
		pushStack: function (e) {
			var t = T.merge(this.constructor(), e);
			return t.prevObject = this, t
		},
		each: function (e) {
			return T.each(this, e)
		},
		map: function (n) {
			return this.pushStack(T.map(this, function (e, t) {
				return n.call(e, t, e)
			}))
		},
		slice: function () {
			return this.pushStack(a.apply(this, arguments))
		},
		first: function () {
			return this.eq(0)
		},
		last: function () {
			return this.eq(-1)
		},
		eq: function (e) {
			var t = this.length,
				n = +e + (e < 0 ? t : 0);
			return this.pushStack(0 <= n && n < t ? [this[n]] : [])
		},
		end: function () {
			return this.prevObject || this.constructor()
		},
		push: l,
		sort: t.sort,
		splice: t.splice
	}, T.extend = T.fn.extend = function () {
		var e, t, n, i, o, s, r = arguments[0] || {},
			a = 1,
			l = arguments.length,
			c = !1;
		for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || y(r) || (r = {}), a === l && (r = this, a--); a < l; a++)
			if (null != (e = arguments[a]))
				for (t in e) n = r[t], r !== (i = e[t]) && (c && i && (T.isPlainObject(i) || (o = Array.isArray(i))) ? (s = o ? (o = !1, n && Array.isArray(n) ? n : []) : n && T.isPlainObject(n) ? n : {}, r[t] = T.extend(c, s, i)) : void 0 !== i && (r[t] = i));
		return r
	}, T.extend({
		expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function (e) {
			throw new Error(e)
		},
		noop: function () { },
		isPlainObject: function (e) {
			var t, n;
			return !(!e || "[object Object]" !== s.call(e) || (t = i(e)) && ("function" != typeof (n = v.call(t, "constructor") && t.constructor) || r.call(n) !== c))
		},
		isEmptyObject: function (e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		globalEval: function (e) {
			w(e)
		},
		each: function (e, t) {
			var n, i = 0;
			if (p(e))
				for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
			else
				for (i in e)
					if (!1 === t.call(e[i], i, e[i])) break; return e
		},
		trim: function (e) {
			return null == e ? "" : (e + "").replace(d, "")
		},
		makeArray: function (e, t) {
			var n = t || [];
			return null != e && (p(Object(e)) ? T.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
		},
		inArray: function (e, t, n) {
			return null == t ? -1 : o.call(t, e, n)
		},
		merge: function (e, t) {
			for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
			return e.length = o, e
		},
		grep: function (e, t, n) {
			for (var i = [], o = 0, s = e.length, r = !n; o < s; o++) !t(e[o], o) != r && i.push(e[o]);
			return i
		},
		map: function (e, t, n) {
			var i, o, s = 0,
				r = [];
			if (p(e))
				for (i = e.length; s < i; s++) null != (o = t(e[s], s, n)) && r.push(o);
			else
				for (s in e) null != (o = t(e[s], s, n)) && r.push(o);
			return m.apply([], r)
		},
		guid: 1,
		support: b
	}), "function" == typeof Symbol && (T.fn[Symbol.iterator] = t[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
		n["[object " + t + "]"] = t.toLowerCase()
	});
	var f = function (n) {
		function d(e, t, n) {
			var i = "0x" + t - 65536;
			return i != i || n ? t : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
		}

		function o() {
			C()
		}
		var e, f, w, s, r, h, p, g, x, l, c, C, k, a, S, m, u, v, b, T = "sizzle" + 1 * new Date,
			y = n.document,
			A = 0,
			i = 0,
			E = re(),
			P = re(),
			D = re(),
			O = function (e, t) {
				return e === t && (c = !0), 0
			},
			$ = {}.hasOwnProperty,
			t = [],
			R = t.pop,
			_ = t.push,
			j = t.push,
			F = t.slice,
			L = function (e, t) {
				for (var n = 0, i = e.length; n < i; n++)
					if (e[n] === t) return n;
				return -1
			},
			q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			z = "[\\x20\\t\\r\\n\\f]",
			M = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
			N = "\\[" + z + "*(" + M + ")(?:" + z + "*([*^$|!~]?=)" + z + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + z + "*\\]",
			H = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
			I = new RegExp(z + "+", "g"),
			W = new RegExp("^" + z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + z + "+$", "g"),
			V = new RegExp("^" + z + "*," + z + "*"),
			U = new RegExp("^" + z + "*([>+~]|" + z + ")" + z + "*"),
			B = new RegExp("=" + z + "*([^\\]'\"]*?)" + z + "*\\]", "g"),
			X = new RegExp(H),
			Y = new RegExp("^" + M + "$"),
			Q = {
				ID: new RegExp("^#(" + M + ")"),
				CLASS: new RegExp("^\\.(" + M + ")"),
				TAG: new RegExp("^(" + M + "|[*])"),
				ATTR: new RegExp("^" + N),
				PSEUDO: new RegExp("^" + H),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + z + "*(even|odd|(([+-]|)(\\d*)n|)" + z + "*(?:([+-]|)" + z + "*(\\d+)|))" + z + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + q + ")$", "i"),
				needsContext: new RegExp("^" + z + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + z + "*((?:-\\d)?\\d*)" + z + "*\\)|)(?=[^-]|$)", "i")
			},
			Z = /^(?:input|select|textarea|button)$/i,
			G = /^h\d$/i,
			K = /^[^{]+\{\s*\[native \w/,
			J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			ee = /[+~]/,
			te = new RegExp("\\\\([\\da-f]{1,6}" + z + "?|(" + z + ")|.)", "ig"),
			ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			ie = function (e, t) {
				return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
			},
			oe = be(function (e) {
				return !0 === e.disabled && ("form" in e || "label" in e)
			}, {
				dir: "parentNode",
				next: "legend"
			});
		try {
			j.apply(t = F.call(y.childNodes), y.childNodes), t[y.childNodes.length].nodeType
		} catch (n) {
			j = {
				apply: t.length ? function (e, t) {
					_.apply(e, F.call(t))
				} : function (e, t) {
					for (var n = e.length, i = 0; e[n++] = t[i++];);
					e.length = n - 1
				}
			}
		}

		function se(e, t, n, i) {
			var o, s, r, a, l, c, u, d = t && t.ownerDocument,
				p = t ? t.nodeType : 9;
			if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
			if (!i && ((t ? t.ownerDocument || t : y) !== k && C(t), t = t || k, S)) {
				if (11 !== p && (l = J.exec(e)))
					if (o = l[1]) {
						if (9 === p) {
							if (!(r = t.getElementById(o))) return n;
							if (r.id === o) return n.push(r), n
						} else if (d && (r = d.getElementById(o)) && b(t, r) && r.id === o) return n.push(r), n
					} else {
						if (l[2]) return j.apply(n, t.getElementsByTagName(e)), n;
						if ((o = l[3]) && f.getElementsByClassName && t.getElementsByClassName) return j.apply(n, t.getElementsByClassName(o)), n
					}
				if (f.qsa && !D[e + " "] && (!m || !m.test(e))) {
					if (1 !== p) d = t, u = e;
					else if ("object" !== t.nodeName.toLowerCase()) {
						for ((a = t.getAttribute("id")) ? a = a.replace(ne, ie) : t.setAttribute("id", a = T), s = (c = h(e)).length; s--;) c[s] = "#" + a + " " + ve(c[s]);
						u = c.join(","), d = ee.test(e) && ge(t.parentNode) || t
					}
					if (u) try {
						return j.apply(n, d.querySelectorAll(u)), n
					} catch (e) { } finally {
							a === T && t.removeAttribute("id")
						}
				}
			}
			return g(e.replace(W, "$1"), t, n, i)
		}

		function re() {
			var i = [];
			return function e(t, n) {
				return i.push(t + " ") > w.cacheLength && delete e[i.shift()], e[t + " "] = n
			}
		}

		function ae(e) {
			return e[T] = !0, e
		}

		function le(e) {
			var t = k.createElement("fieldset");
			try {
				return !!e(t)
			} catch (e) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function ce(e, t) {
			for (var n = e.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = t
		}

		function ue(e, t) {
			var n = t && e,
				i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
			if (i) return i;
			if (n)
				for (; n = n.nextSibling;)
					if (n === t) return -1;
			return e ? 1 : -1
		}

		function de(t) {
			return function (e) {
				return "input" === e.nodeName.toLowerCase() && e.type === t
			}
		}

		function pe(n) {
			return function (e) {
				var t = e.nodeName.toLowerCase();
				return ("input" === t || "button" === t) && e.type === n
			}
		}

		function fe(t) {
			return function (e) {
				return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && oe(e) === t : e.disabled === t : "label" in e && e.disabled === t
			}
		}

		function he(r) {
			return ae(function (s) {
				return s = +s, ae(function (e, t) {
					for (var n, i = r([], e.length, s), o = i.length; o--;) e[n = i[o]] && (e[n] = !(t[n] = e[n]))
				})
			})
		}

		function ge(e) {
			return e && void 0 !== e.getElementsByTagName && e
		}
		for (e in f = se.support = {}, r = se.isXML = function (e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return !!t && "HTML" !== t.nodeName
		}, C = se.setDocument = function (e) {
			var t, n, i = e ? e.ownerDocument || e : y;
			return i !== k && 9 === i.nodeType && i.documentElement && (a = (k = i).documentElement, S = !r(k), y !== k && (n = k.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", o, !1) : n.attachEvent && n.attachEvent("onunload", o)), f.attributes = le(function (e) {
				return e.className = "i", !e.getAttribute("className")
			}), f.getElementsByTagName = le(function (e) {
				return e.appendChild(k.createComment("")), !e.getElementsByTagName("*").length
			}), f.getElementsByClassName = K.test(k.getElementsByClassName), f.getById = le(function (e) {
				return a.appendChild(e).id = T, !k.getElementsByName || !k.getElementsByName(T).length
			}), f.getById ? (w.filter.ID = function (e) {
				var t = e.replace(te, d);
				return function (e) {
					return e.getAttribute("id") === t
				}
			}, w.find.ID = function (e, t) {
				if (void 0 !== t.getElementById && S) {
					var n = t.getElementById(e);
					return n ? [n] : []
				}
			}) : (w.filter.ID = function (e) {
				var n = e.replace(te, d);
				return function (e) {
					var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
					return t && t.value === n
				}
			}, w.find.ID = function (e, t) {
				if (void 0 !== t.getElementById && S) {
					var n, i, o, s = t.getElementById(e);
					if (s) {
						if ((n = s.getAttributeNode("id")) && n.value === e) return [s];
						for (o = t.getElementsByName(e), i = 0; s = o[i++];)
							if ((n = s.getAttributeNode("id")) && n.value === e) return [s]
					}
					return []
				}
			}), w.find.TAG = f.getElementsByTagName ? function (e, t) {
				return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : f.qsa ? t.querySelectorAll(e) : void 0
			} : function (e, t) {
				var n, i = [],
					o = 0,
					s = t.getElementsByTagName(e);
				if ("*" !== e) return s;
				for (; n = s[o++];) 1 === n.nodeType && i.push(n);
				return i
			}, w.find.CLASS = f.getElementsByClassName && function (e, t) {
				if (void 0 !== t.getElementsByClassName && S) return t.getElementsByClassName(e)
			}, u = [], m = [], (f.qsa = K.test(k.querySelectorAll)) && (le(function (e) {
				a.appendChild(e).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + z + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + z + "*(?:value|" + q + ")"), e.querySelectorAll("[id~=" + T + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + T + "+*").length || m.push(".#.+[+~]")
			}), le(function (e) {
				e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
				var t = k.createElement("input");
				t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + z + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
			})), (f.matchesSelector = K.test(v = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && le(function (e) {
				f.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), u.push("!=", H)
			}), m = m.length && new RegExp(m.join("|")), u = u.length && new RegExp(u.join("|")), t = K.test(a.compareDocumentPosition), b = t || K.test(a.contains) ? function (e, t) {
				var n = 9 === e.nodeType ? e.documentElement : e,
					i = t && t.parentNode;
				return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
			} : function (e, t) {
				if (t)
					for (; t = t.parentNode;)
						if (t === e) return !0;
				return !1
			}, O = t ? function (e, t) {
				if (e === t) return c = !0, 0;
				var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
				return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(e) === n ? e === k || e.ownerDocument === y && b(y, e) ? -1 : t === k || t.ownerDocument === y && b(y, t) ? 1 : l ? L(l, e) - L(l, t) : 0 : 4 & n ? -1 : 1)
			} : function (e, t) {
				if (e === t) return c = !0, 0;
				var n, i = 0,
					o = e.parentNode,
					s = t.parentNode,
					r = [e],
					a = [t];
				if (!o || !s) return e === k ? -1 : t === k ? 1 : o ? -1 : s ? 1 : l ? L(l, e) - L(l, t) : 0;
				if (o === s) return ue(e, t);
				for (n = e; n = n.parentNode;) r.unshift(n);
				for (n = t; n = n.parentNode;) a.unshift(n);
				for (; r[i] === a[i];) i++;
				return i ? ue(r[i], a[i]) : r[i] === y ? -1 : a[i] === y ? 1 : 0
			}), k
		}, se.matches = function (e, t) {
			return se(e, null, null, t)
		}, se.matchesSelector = function (e, t) {
			if ((e.ownerDocument || e) !== k && C(e), t = t.replace(B, "='$1']"), f.matchesSelector && S && !D[t + " "] && (!u || !u.test(t)) && (!m || !m.test(t))) try {
				var n = v.call(e, t);
				if (n || f.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
			} catch (e) { }
			return 0 < se(t, k, null, [e]).length
		}, se.contains = function (e, t) {
			return (e.ownerDocument || e) !== k && C(e), b(e, t)
		}, se.attr = function (e, t) {
			(e.ownerDocument || e) !== k && C(e);
			var n = w.attrHandle[t.toLowerCase()],
				i = n && $.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !S) : void 0;
			return void 0 !== i ? i : f.attributes || !S ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
		}, se.escape = function (e) {
			return (e + "").replace(ne, ie)
		}, se.error = function (e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		}, se.uniqueSort = function (e) {
			var t, n = [],
				i = 0,
				o = 0;
			if (c = !f.detectDuplicates, l = !f.sortStable && e.slice(0), e.sort(O), c) {
				for (; t = e[o++];) t === e[o] && (i = n.push(o));
				for (; i--;) e.splice(n[i], 1)
			}
			return l = null, e
		}, s = se.getText = function (e) {
			var t, n = "",
				i = 0,
				o = e.nodeType;
			if (o) {
				if (1 === o || 9 === o || 11 === o) {
					if ("string" == typeof e.textContent) return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
				} else if (3 === o || 4 === o) return e.nodeValue
			} else
				for (; t = e[i++];) n += s(t);
			return n
		}, (w = se.selectors = {
			cacheLength: 50,
			createPseudo: ae,
			match: Q,
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
				ATTR: function (e) {
					return e[1] = e[1].replace(te, d), e[3] = (e[3] || e[4] || e[5] || "").replace(te, d), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				},
				CHILD: function (e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
				},
				PSEUDO: function (e) {
					var t, n = !e[6] && e[2];
					return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function (e) {
					var t = e.replace(te, d).toLowerCase();
					return "*" === e ? function () {
						return !0
					} : function (e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				},
				CLASS: function (e) {
					var t = E[e + " "];
					return t || (t = new RegExp("(^|" + z + ")" + e + "(" + z + "|$)")) && E(e, function (e) {
						return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
					})
				},
				ATTR: function (n, i, o) {
					return function (e) {
						var t = se.attr(e, n);
						return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === o : "!=" === i ? t !== o : "^=" === i ? o && 0 === t.indexOf(o) : "*=" === i ? o && -1 < t.indexOf(o) : "$=" === i ? o && t.slice(-o.length) === o : "~=" === i ? -1 < (" " + t.replace(I, " ") + " ").indexOf(o) : "|=" === i && (t === o || t.slice(0, o.length + 1) === o + "-"))
					}
				},
				CHILD: function (h, e, t, g, m) {
					var v = "nth" !== h.slice(0, 3),
						b = "last" !== h.slice(-4),
						y = "of-type" === e;
					return 1 === g && 0 === m ? function (e) {
						return !!e.parentNode
					} : function (e, t, n) {
						var i, o, s, r, a, l, c = v != b ? "nextSibling" : "previousSibling",
							u = e.parentNode,
							d = y && e.nodeName.toLowerCase(),
							p = !n && !y,
							f = !1;
						if (u) {
							if (v) {
								for (; c;) {
									for (r = e; r = r[c];)
										if (y ? r.nodeName.toLowerCase() === d : 1 === r.nodeType) return !1;
									l = c = "only" === h && !l && "nextSibling"
								}
								return !0
							}
							if (l = [b ? u.firstChild : u.lastChild], b && p) {
								for (f = (a = (i = (o = (s = (r = u)[T] || (r[T] = {}))[r.uniqueID] || (s[r.uniqueID] = {}))[h] || [])[0] === A && i[1]) && i[2], r = a && u.childNodes[a]; r = ++a && r && r[c] || (f = a = 0) || l.pop();)
									if (1 === r.nodeType && ++f && r === e) {
										o[h] = [A, a, f];
										break
									}
							} else if (p && (f = a = (i = (o = (s = (r = e)[T] || (r[T] = {}))[r.uniqueID] || (s[r.uniqueID] = {}))[h] || [])[0] === A && i[1]), !1 === f)
								for (;
									(r = ++a && r && r[c] || (f = a = 0) || l.pop()) && ((y ? r.nodeName.toLowerCase() !== d : 1 !== r.nodeType) || !++f || (p && ((o = (s = r[T] || (r[T] = {}))[r.uniqueID] || (s[r.uniqueID] = {}))[h] = [A, f]), r !== e)););
							return (f -= m) === g || f % g == 0 && 0 <= f / g
						}
					}
				},
				PSEUDO: function (e, s) {
					var t, r = w.pseudos[e] || w.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
					return r[T] ? r(s) : 1 < r.length ? (t = [e, e, "", s], w.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function (e, t) {
						for (var n, i = r(e, s), o = i.length; o--;) e[n = L(e, i[o])] = !(t[n] = i[o])
					}) : function (e) {
						return r(e, 0, t)
					}) : r
				}
			},
			pseudos: {
				not: ae(function (e) {
					var i = [],
						o = [],
						a = p(e.replace(W, "$1"));
					return a[T] ? ae(function (e, t, n, i) {
						for (var o, s = a(e, null, i, []), r = e.length; r--;)(o = s[r]) && (e[r] = !(t[r] = o))
					}) : function (e, t, n) {
						return i[0] = e, a(i, null, n, o), i[0] = null, !o.pop()
					}
				}),
				has: ae(function (t) {
					return function (e) {
						return 0 < se(t, e).length
					}
				}),
				contains: ae(function (t) {
					return t = t.replace(te, d),
						function (e) {
							return -1 < (e.textContent || e.innerText || s(e)).indexOf(t)
						}
				}),
				lang: ae(function (n) {
					return Y.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, d).toLowerCase(),
						function (e) {
							var t;
							do {
								if (t = S ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
							} while ((e = e.parentNode) && 1 === e.nodeType);
							return !1
						}
				}),
				target: function (e) {
					var t = n.location && n.location.hash;
					return t && t.slice(1) === e.id
				},
				root: function (e) {
					return e === a
				},
				focus: function (e) {
					return e === k.activeElement && (!k.hasFocus || k.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
				},
				enabled: fe(!1),
				disabled: fe(!0),
				checked: function (e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !!e.checked || "option" === t && !!e.selected
				},
				selected: function (e) {
					return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
				},
				empty: function (e) {
					for (e = e.firstChild; e; e = e.nextSibling)
						if (e.nodeType < 6) return !1;
					return !0
				},
				parent: function (e) {
					return !w.pseudos.empty(e)
				},
				header: function (e) {
					return G.test(e.nodeName)
				},
				input: function (e) {
					return Z.test(e.nodeName)
				},
				button: function (e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				},
				text: function (e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
				},
				first: he(function () {
					return [0]
				}),
				last: he(function (e, t) {
					return [t - 1]
				}),
				eq: he(function (e, t, n) {
					return [n < 0 ? n + t : n]
				}),
				even: he(function (e, t) {
					for (var n = 0; n < t; n += 2) e.push(n);
					return e
				}),
				odd: he(function (e, t) {
					for (var n = 1; n < t; n += 2) e.push(n);
					return e
				}),
				lt: he(function (e, t, n) {
					for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
					return e
				}),
				gt: he(function (e, t, n) {
					for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
					return e
				})
			}
		}).pseudos.nth = w.pseudos.eq, {
			radio: !0,
			checkbox: !0,
			file: !0,
			password: !0,
			image: !0
		}) w.pseudos[e] = de(e);
		for (e in {
			submit: !0,
			reset: !0
		}) w.pseudos[e] = pe(e);

		function me() { }

		function ve(e) {
			for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
			return i
		}

		function be(a, e, t) {
			var l = e.dir,
				c = e.next,
				u = c || l,
				d = t && "parentNode" === u,
				p = i++;
			return e.first ? function (e, t, n) {
				for (; e = e[l];)
					if (1 === e.nodeType || d) return a(e, t, n);
				return !1
			} : function (e, t, n) {
				var i, o, s, r = [A, p];
				if (n) {
					for (; e = e[l];)
						if ((1 === e.nodeType || d) && a(e, t, n)) return !0
				} else
					for (; e = e[l];)
						if (1 === e.nodeType || d)
							if (o = (s = e[T] || (e[T] = {}))[e.uniqueID] || (s[e.uniqueID] = {}), c && c === e.nodeName.toLowerCase()) e = e[l] || e;
							else {
								if ((i = o[u]) && i[0] === A && i[1] === p) return r[2] = i[2];
								if ((o[u] = r)[2] = a(e, t, n)) return !0
							} return !1
			}
		}

		function ye(o) {
			return 1 < o.length ? function (e, t, n) {
				for (var i = o.length; i--;)
					if (!o[i](e, t, n)) return !1;
				return !0
			} : o[0]
		}

		function we(e, t, n, i, o) {
			for (var s, r = [], a = 0, l = e.length, c = null != t; a < l; a++)(s = e[a]) && (n && !n(s, i, o) || (r.push(s), c && t.push(a)));
			return r
		}

		function xe(f, h, g, m, v, e) {
			return m && !m[T] && (m = xe(m)), v && !v[T] && (v = xe(v, e)), ae(function (e, t, n, i) {
				var o, s, r, a = [],
					l = [],
					c = t.length,
					u = e || function (e, t, n) {
						for (var i = 0, o = t.length; i < o; i++) se(e, t[i], n);
						return n
					}(h || "*", n.nodeType ? [n] : n, []),
					d = !f || !e && h ? u : we(u, a, f, n, i),
					p = g ? v || (e ? f : c || m) ? [] : t : d;
				if (g && g(d, p, n, i), m)
					for (o = we(p, l), m(o, [], n, i), s = o.length; s--;)(r = o[s]) && (p[l[s]] = !(d[l[s]] = r));
				if (e) {
					if (v || f) {
						if (v) {
							for (o = [], s = p.length; s--;)(r = p[s]) && o.push(d[s] = r);
							v(null, p = [], o, i)
						}
						for (s = p.length; s--;)(r = p[s]) && -1 < (o = v ? L(e, r) : a[s]) && (e[o] = !(t[o] = r))
					}
				} else p = we(p === t ? p.splice(c, p.length) : p), v ? v(null, t, p, i) : j.apply(t, p)
			})
		}

		function Ce(e) {
			for (var o, t, n, i = e.length, s = w.relative[e[0].type], r = s || w.relative[" "], a = s ? 1 : 0, l = be(function (e) {
				return e === o
			}, r, !0), c = be(function (e) {
				return -1 < L(o, e)
			}, r, !0), u = [function (e, t, n) {
				var i = !s && (n || t !== x) || ((o = t).nodeType ? l(e, t, n) : c(e, t, n));
				return o = null, i
			}]; a < i; a++)
				if (t = w.relative[e[a].type]) u = [be(ye(u), t)];
				else {
					if ((t = w.filter[e[a].type].apply(null, e[a].matches))[T]) {
						for (n = ++a; n < i && !w.relative[e[n].type]; n++);
						return xe(1 < a && ye(u), 1 < a && ve(e.slice(0, a - 1).concat({
							value: " " === e[a - 2].type ? "*" : ""
						})).replace(W, "$1"), t, a < n && Ce(e.slice(a, n)), n < i && Ce(e = e.slice(n)), n < i && ve(e))
					}
					u.push(t)
				}
			return ye(u)
		}
		return me.prototype = w.filters = w.pseudos, w.setFilters = new me, h = se.tokenize = function (e, t) {
			var n, i, o, s, r, a, l, c = P[e + " "];
			if (c) return t ? 0 : c.slice(0);
			for (r = e, a = [], l = w.preFilter; r;) {
				for (s in n && !(i = V.exec(r)) || (i && (r = r.slice(i[0].length) || r), a.push(o = [])), n = !1, (i = U.exec(r)) && (n = i.shift(), o.push({
					value: n,
					type: i[0].replace(W, " ")
				}), r = r.slice(n.length)), w.filter) !(i = Q[s].exec(r)) || l[s] && !(i = l[s](i)) || (n = i.shift(), o.push({
					value: n,
					type: s,
					matches: i
				}), r = r.slice(n.length));
				if (!n) break
			}
			return t ? r.length : r ? se.error(e) : P(e, a).slice(0)
		}, p = se.compile = function (e, t) {
			var n, i = [],
				o = [],
				s = D[e + " "];
			if (!s) {
				for (t || (t = h(e)), n = t.length; n--;)(s = Ce(t[n]))[T] ? i.push(s) : o.push(s);
				(s = D(e, function (m, v) {
					function e(e, t, n, i, o) {
						var s, r, a, l = 0,
							c = "0",
							u = e && [],
							d = [],
							p = x,
							f = e || y && w.find.TAG("*", o),
							h = A += null == p ? 1 : Math.random() || .1,
							g = f.length;
						for (o && (x = t === k || t || o); c !== g && null != (s = f[c]); c++) {
							if (y && s) {
								for (r = 0, t || s.ownerDocument === k || (C(s), n = !S); a = m[r++];)
									if (a(s, t || k, n)) {
										i.push(s);
										break
									}
								o && (A = h)
							}
							b && ((s = !a && s) && l-- , e && u.push(s))
						}
						if (l += c, b && c !== l) {
							for (r = 0; a = v[r++];) a(u, d, t, n);
							if (e) {
								if (0 < l)
									for (; c--;) u[c] || d[c] || (d[c] = R.call(i));
								d = we(d)
							}
							j.apply(i, d), o && !e && 0 < d.length && 1 < l + v.length && se.uniqueSort(i)
						}
						return o && (A = h, x = p), u
					}
					var b = 0 < v.length,
						y = 0 < m.length;
					return b ? ae(e) : e
				}(o, i))).selector = e
			}
			return s
		}, g = se.select = function (e, t, n, i) {
			var o, s, r, a, l, c = "function" == typeof e && e,
				u = !i && h(e = c.selector || e);
			if (n = n || [], 1 === u.length) {
				if (2 < (s = u[0] = u[0].slice(0)).length && "ID" === (r = s[0]).type && 9 === t.nodeType && S && w.relative[s[1].type]) {
					if (!(t = (w.find.ID(r.matches[0].replace(te, d), t) || [])[0])) return n;
					c && (t = t.parentNode), e = e.slice(s.shift().value.length)
				}
				for (o = Q.needsContext.test(e) ? 0 : s.length; o-- && (r = s[o], !w.relative[a = r.type]);)
					if ((l = w.find[a]) && (i = l(r.matches[0].replace(te, d), ee.test(s[0].type) && ge(t.parentNode) || t))) {
						if (s.splice(o, 1), !(e = i.length && ve(s))) return j.apply(n, i), n;
						break
					}
			}
			return (c || p(e, u))(i, t, !S, n, !t || ee.test(e) && ge(t.parentNode) || t), n
		}, f.sortStable = T.split("").sort(O).join("") === T, f.detectDuplicates = !!c, C(), f.sortDetached = le(function (e) {
			return 1 & e.compareDocumentPosition(k.createElement("fieldset"))
		}), le(function (e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || ce("type|href|height|width", function (e, t, n) {
			if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), f.attributes && le(function (e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || ce("value", function (e, t, n) {
			if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
		}), le(function (e) {
			return null == e.getAttribute("disabled")
		}) || ce(q, function (e, t, n) {
			var i;
			if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
		}), se
	}(k);

	function h(e, t, n) {
		for (var i = [], o = void 0 !== n;
			(e = e[t]) && 9 !== e.nodeType;)
			if (1 === e.nodeType) {
				if (o && T(e).is(n)) break;
				i.push(e)
			}
		return i
	}

	function C(e, t) {
		for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
		return n
	}
	T.find = f, T.expr = f.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = f.uniqueSort, T.text = f.getText, T.isXMLDoc = f.isXML, T.contains = f.contains, T.escapeSelector = f.escape;
	var A = T.expr.match.needsContext;

	function E(e, t) {
		return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
	}
	var P = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

	function D(e, n, i) {
		return y(n) ? T.grep(e, function (e, t) {
			return !!n.call(e, t, e) !== i
		}) : n.nodeType ? T.grep(e, function (e) {
			return e === n !== i
		}) : "string" != typeof n ? T.grep(e, function (e) {
			return -1 < o.call(n, e) !== i
		}) : T.filter(n, e, i)
	}
	T.filter = function (e, t, n) {
		var i = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? T.find.matchesSelector(i, e) ? [i] : [] : T.find.matches(e, T.grep(t, function (e) {
			return 1 === e.nodeType
		}))
	}, T.fn.extend({
		find: function (e) {
			var t, n, i = this.length,
				o = this;
			if ("string" != typeof e) return this.pushStack(T(e).filter(function () {
				for (t = 0; t < i; t++)
					if (T.contains(o[t], this)) return !0
			}));
			for (n = this.pushStack([]), t = 0; t < i; t++) T.find(e, o[t], n);
			return 1 < i ? T.uniqueSort(n) : n
		},
		filter: function (e) {
			return this.pushStack(D(this, e || [], !1))
		},
		not: function (e) {
			return this.pushStack(D(this, e || [], !0))
		},
		is: function (e) {
			return !!D(this, "string" == typeof e && A.test(e) ? T(e) : e || [], !1).length
		}
	});
	var O, $ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	(T.fn.init = function (e, t, n) {
		var i, o;
		if (!e) return this;
		if (n = n || O, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : T.makeArray(e, this);
		if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : $.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
		if (i[1]) {
			if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : S, !0)), P.test(i[1]) && T.isPlainObject(t))
				for (i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
			return this
		}
		return (o = S.getElementById(i[2])) && (this[0] = o, this.length = 1), this
	}).prototype = T.fn, O = T(S);
	var R = /^(?:parents|prev(?:Until|All))/,
		_ = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};

	function j(e, t) {
		for (;
			(e = e[t]) && 1 !== e.nodeType;);
		return e
	}
	T.fn.extend({
		has: function (e) {
			var t = T(e, this),
				n = t.length;
			return this.filter(function () {
				for (var e = 0; e < n; e++)
					if (T.contains(this, t[e])) return !0
			})
		},
		closest: function (e, t) {
			var n, i = 0,
				o = this.length,
				s = [],
				r = "string" != typeof e && T(e);
			if (!A.test(e))
				for (; i < o; i++)
					for (n = this[i]; n && n !== t; n = n.parentNode)
						if (n.nodeType < 11 && (r ? -1 < r.index(n) : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
							s.push(n);
							break
						}
			return this.pushStack(1 < s.length ? T.uniqueSort(s) : s)
		},
		index: function (e) {
			return e ? "string" == typeof e ? o.call(T(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function (e, t) {
			return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))))
		},
		addBack: function (e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), T.each({
		parent: function (e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function (e) {
			return h(e, "parentNode")
		},
		parentsUntil: function (e, t, n) {
			return h(e, "parentNode", n)
		},
		next: function (e) {
			return j(e, "nextSibling")
		},
		prev: function (e) {
			return j(e, "previousSibling")
		},
		nextAll: function (e) {
			return h(e, "nextSibling")
		},
		prevAll: function (e) {
			return h(e, "previousSibling")
		},
		nextUntil: function (e, t, n) {
			return h(e, "nextSibling", n)
		},
		prevUntil: function (e, t, n) {
			return h(e, "previousSibling", n)
		},
		siblings: function (e) {
			return C((e.parentNode || {}).firstChild, e)
		},
		children: function (e) {
			return C(e.firstChild)
		},
		contents: function (e) {
			return E(e, "iframe") ? e.contentDocument : (E(e, "template") && (e = e.content || e), T.merge([], e.childNodes))
		}
	}, function (i, o) {
		T.fn[i] = function (e, t) {
			var n = T.map(this, o, e);
			return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = T.filter(t, n)), 1 < this.length && (_[i] || T.uniqueSort(n), R.test(i) && n.reverse()), this.pushStack(n)
		}
	});
	var F = /[^\x20\t\r\n\f]+/g;

	function L(e) {
		return e
	}

	function q(e) {
		throw e
	}

	function z(e, t, n, i) {
		var o;
		try {
			e && y(o = e.promise) ? o.call(e).done(t).fail(n) : e && y(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
		} catch (e) {
			n.apply(void 0, [e])
		}
	}
	T.Callbacks = function (i) {
		var e, n;

		function o() {
			for (a = a || i.once, r = s = !0; c.length; u = -1)
				for (t = c.shift(); ++u < l.length;) !1 === l[u].apply(t[0], t[1]) && i.stopOnFalse && (u = l.length, t = !1);
			i.memory || (t = !1), s = !1, a && (l = t ? [] : "")
		}
		i = "string" == typeof i ? (e = i, n = {}, T.each(e.match(F) || [], function (e, t) {
			n[t] = !0
		}), n) : T.extend({}, i);
		var s, t, r, a, l = [],
			c = [],
			u = -1,
			d = {
				add: function () {
					return l && (t && !s && (u = l.length - 1, c.push(t)), function n(e) {
						T.each(e, function (e, t) {
							y(t) ? i.unique && d.has(t) || l.push(t) : t && t.length && "string" !== x(t) && n(t)
						})
					}(arguments), t && !s && o()), this
				},
				remove: function () {
					return T.each(arguments, function (e, t) {
						for (var n; - 1 < (n = T.inArray(t, l, n));) l.splice(n, 1), n <= u && u--
					}), this
				},
				has: function (e) {
					return e ? -1 < T.inArray(e, l) : 0 < l.length
				},
				empty: function () {
					return l && (l = []), this
				},
				disable: function () {
					return a = c = [], l = t = "", this
				},
				disabled: function () {
					return !l
				},
				lock: function () {
					return a = c = [], t || s || (l = t = ""), this
				},
				locked: function () {
					return !!a
				},
				fireWith: function (e, t) {
					return a || (t = [e, (t = t || []).slice ? t.slice() : t], c.push(t), s || o()), this
				},
				fire: function () {
					return d.fireWith(this, arguments), this
				},
				fired: function () {
					return !!r
				}
			};
		return d
	}, T.extend({
		Deferred: function (e) {
			var s = [
				["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2],
				["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"],
				["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]
			],
				o = "pending",
				r = {
					state: function () {
						return o
					},
					always: function () {
						return a.done(arguments).fail(arguments), this
					},
					catch: function (e) {
						return r.then(null, e)
					},
					pipe: function () {
						var o = arguments;
						return T.Deferred(function (i) {
							T.each(s, function (e, t) {
								var n = y(o[t[4]]) && o[t[4]];
								a[t[1]](function () {
									var e = n && n.apply(this, arguments);
									e && y(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
								})
							}), o = null
						}).promise()
					},
					then: function (t, n, i) {
						var l = 0;

						function c(o, s, r, a) {
							return function () {
								function e() {
									var e, t;
									if (!(o < l)) {
										if ((e = r.apply(n, i)) === s.promise()) throw new TypeError("Thenable self-resolution");
										t = e && ("object" == typeof e || "function" == typeof e) && e.then, y(t) ? a ? t.call(e, c(l, s, L, a), c(l, s, q, a)) : (l++ , t.call(e, c(l, s, L, a), c(l, s, q, a), c(l, s, L, s.notifyWith))) : (r !== L && (n = void 0, i = [e]), (a || s.resolveWith)(n, i))
									}
								}
								var n = this,
									i = arguments,
									t = a ? e : function () {
										try {
											e()
										} catch (e) {
											T.Deferred.exceptionHook && T.Deferred.exceptionHook(e, t.stackTrace), l <= o + 1 && (r !== q && (n = void 0, i = [e]), s.rejectWith(n, i))
										}
									};
								o ? t() : (T.Deferred.getStackHook && (t.stackTrace = T.Deferred.getStackHook()), k.setTimeout(t))
							}
						}
						return T.Deferred(function (e) {
							s[0][3].add(c(0, e, y(i) ? i : L, e.notifyWith)), s[1][3].add(c(0, e, y(t) ? t : L)), s[2][3].add(c(0, e, y(n) ? n : q))
						}).promise()
					},
					promise: function (e) {
						return null != e ? T.extend(e, r) : r
					}
				},
				a = {};
			return T.each(s, function (e, t) {
				var n = t[2],
					i = t[5];
				r[t[1]] = n.add, i && n.add(function () {
					o = i
				}, s[3 - e][2].disable, s[3 - e][3].disable, s[0][2].lock, s[0][3].lock), n.add(t[3].fire), a[t[0]] = function () {
					return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
				}, a[t[0] + "With"] = n.fireWith
			}), r.promise(a), e && e.call(a, a), a
		},
		when: function (e) {
			function t(t) {
				return function (e) {
					o[t] = this, s[t] = 1 < arguments.length ? a.call(arguments) : e, --n || r.resolveWith(o, s)
				}
			}
			var n = arguments.length,
				i = n,
				o = Array(i),
				s = a.call(arguments),
				r = T.Deferred();
			if (n <= 1 && (z(e, r.done(t(i)).resolve, r.reject, !n), "pending" === r.state() || y(s[i] && s[i].then))) return r.then();
			for (; i--;) z(s[i], t(i), r.reject);
			return r.promise()
		}
	});
	var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	T.Deferred.exceptionHook = function (e, t) {
		k.console && k.console.warn && e && M.test(e.name) && k.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
	}, T.readyException = function (e) {
		k.setTimeout(function () {
			throw e
		})
	};
	var N = T.Deferred();

	function H() {
		S.removeEventListener("DOMContentLoaded", H), k.removeEventListener("load", H), T.ready()
	}
	T.fn.ready = function (e) {
		return N.then(e).catch(function (e) {
			T.readyException(e)
		}), this
	}, T.extend({
		isReady: !1,
		readyWait: 1,
		ready: function (e) {
			(!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0) !== e && 0 < --T.readyWait || N.resolveWith(S, [T])
		}
	}), T.ready.then = N.then, "complete" === S.readyState || "loading" !== S.readyState && !S.documentElement.doScroll ? k.setTimeout(T.ready) : (S.addEventListener("DOMContentLoaded", H), k.addEventListener("load", H));
	var I = function (e, t, n, i, o, s, r) {
		var a = 0,
			l = e.length,
			c = null == n;
		if ("object" === x(n))
			for (a in o = !0, n) I(e, t, a, n[a], !0, s, r);
		else if (void 0 !== i && (o = !0, y(i) || (r = !0), c && (t = r ? (t.call(e, i), null) : (c = t, function (e, t, n) {
			return c.call(T(e), n)
		})), t))
			for (; a < l; a++) t(e[a], n, r ? i : i.call(e[a], a, t(e[a], n)));
		return o ? e : c ? t.call(e) : l ? t(e[0], n) : s
	},
		W = /^-ms-/,
		V = /-([a-z])/g;

	function U(e, t) {
		return t.toUpperCase()
	}

	function B(e) {
		return e.replace(W, "ms-").replace(V, U)
	}

	function X(e) {
		return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
	}

	function Y() {
		this.expando = T.expando + Y.uid++
	}
	Y.uid = 1, Y.prototype = {
		cache: function (e) {
			var t = e[this.expando];
			return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
				value: t,
				configurable: !0
			}))), t
		},
		set: function (e, t, n) {
			var i, o = this.cache(e);
			if ("string" == typeof t) o[B(t)] = n;
			else
				for (i in t) o[B(i)] = t[i];
			return o
		},
		get: function (e, t) {
			return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][B(t)]
		},
		access: function (e, t, n) {
			return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
		},
		remove: function (e, t) {
			var n, i = e[this.expando];
			if (void 0 !== i) {
				if (void 0 !== t) {
					n = (t = Array.isArray(t) ? t.map(B) : (t = B(t)) in i ? [t] : t.match(F) || []).length;
					for (; n--;) delete i[t[n]]
				} (void 0 === t || T.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
			}
		},
		hasData: function (e) {
			var t = e[this.expando];
			return void 0 !== t && !T.isEmptyObject(t)
		}
	};
	var Q = new Y,
		Z = new Y,
		G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		K = /[A-Z]/g;

	function J(e, t, n) {
		var i, o;
		if (void 0 === n && 1 === e.nodeType)
			if (i = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
				try {
					n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : G.test(o) ? JSON.parse(o) : o)
				} catch (e) { }
				Z.set(e, t, n)
			} else n = void 0;
		return n
	}

	function ee(e, t, n, i) {
		var o, s, r = {};
		for (s in t) r[s] = e.style[s], e.style[s] = t[s];
		for (s in o = n.apply(e, i || []), t) e.style[s] = r[s];
		return o
	}
	T.extend({
		hasData: function (e) {
			return Z.hasData(e) || Q.hasData(e)
		},
		data: function (e, t, n) {
			return Z.access(e, t, n)
		},
		removeData: function (e, t) {
			Z.remove(e, t)
		},
		_data: function (e, t, n) {
			return Q.access(e, t, n)
		},
		_removeData: function (e, t) {
			Q.remove(e, t)
		}
	}), T.fn.extend({
		data: function (n, e) {
			var t, i, o, s = this[0],
				r = s && s.attributes;
			if (void 0 !== n) return "object" == typeof n ? this.each(function () {
				Z.set(this, n)
			}) : I(this, function (e) {
				var t;
				if (s && void 0 === e) {
					if (void 0 !== (t = Z.get(s, n))) return t;
					if (void 0 !== (t = J(s, n))) return t
				} else this.each(function () {
					Z.set(this, n, e)
				})
			}, null, e, 1 < arguments.length, null, !0);
			if (this.length && (o = Z.get(s), 1 === s.nodeType && !Q.get(s, "hasDataAttrs"))) {
				for (t = r.length; t--;) r[t] && 0 === (i = r[t].name).indexOf("data-") && (i = B(i.slice(5)), J(s, i, o[i]));
				Q.set(s, "hasDataAttrs", !0)
			}
			return o
		},
		removeData: function (e) {
			return this.each(function () {
				Z.remove(this, e)
			})
		}
	}), T.extend({
		queue: function (e, t, n) {
			var i;
			if (e) return t = (t || "fx") + "queue", i = Q.get(e, t), n && (!i || Array.isArray(n) ? i = Q.access(e, t, T.makeArray(n)) : i.push(n)), i || []
		},
		dequeue: function (e, t) {
			t = t || "fx";
			var n = T.queue(e, t),
				i = n.length,
				o = n.shift(),
				s = T._queueHooks(e, t);
			"inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete s.stop, o.call(e, function () {
				T.dequeue(e, t)
			}, s)), !i && s && s.empty.fire()
		},
		_queueHooks: function (e, t) {
			var n = t + "queueHooks";
			return Q.get(e, n) || Q.access(e, n, {
				empty: T.Callbacks("once memory").add(function () {
					Q.remove(e, [t + "queue", n])
				})
			})
		}
	}), T.fn.extend({
		queue: function (t, n) {
			var e = 2;
			return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? T.queue(this[0], t) : void 0 === n ? this : this.each(function () {
				var e = T.queue(this, t, n);
				T._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && T.dequeue(this, t)
			})
		},
		dequeue: function (e) {
			return this.each(function () {
				T.dequeue(this, e)
			})
		},
		clearQueue: function (e) {
			return this.queue(e || "fx", [])
		},
		promise: function (e, t) {
			function n() {
				--o || s.resolveWith(r, [r])
			}
			var i, o = 1,
				s = T.Deferred(),
				r = this,
				a = this.length;
			for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(i = Q.get(r[a], e + "queueHooks")) && i.empty && (o++ , i.empty.add(n));
			return n(), s.promise(t)
		}
	});
	var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
		ie = ["Top", "Right", "Bottom", "Left"],
		oe = function (e, t) {
			return "none" === (e = t || e).style.display || "" === e.style.display && T.contains(e.ownerDocument, e) && "none" === T.css(e, "display")
		};

	function se(e, t, n, i) {
		var o, s, r = 20,
			a = i ? function () {
				return i.cur()
			} : function () {
				return T.css(e, t, "")
			},
			l = a(),
			c = n && n[3] || (T.cssNumber[t] ? "" : "px"),
			u = (T.cssNumber[t] || "px" !== c && +l) && ne.exec(T.css(e, t));
		if (u && u[3] !== c) {
			for (l /= 2, c = c || u[3], u = +l || 1; r--;) T.style(e, t, u + c), (1 - s) * (1 - (s = a() / l || .5)) <= 0 && (r = 0), u /= s;
			u *= 2, T.style(e, t, u + c), n = n || []
		}
		return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
	}
	var re = {};

	function ae(e, t) {
		for (var n, i, o = [], s = 0, r = e.length; s < r; s++)(i = e[s]).style && (n = i.style.display, t ? ("none" === n && (o[s] = Q.get(i, "display") || null, o[s] || (i.style.display = "")), "" === i.style.display && oe(i) && (o[s] = (d = c = l = void 0, c = (a = i).ownerDocument, u = a.nodeName, (d = re[u]) || (l = c.body.appendChild(c.createElement(u)), d = T.css(l, "display"), l.parentNode.removeChild(l), "none" === d && (d = "block"), re[u] = d)))) : "none" !== n && (o[s] = "none", Q.set(i, "display", n)));
		var a, l, c, u, d;
		for (s = 0; s < r; s++) null != o[s] && (e[s].style.display = o[s]);
		return e
	}
	T.fn.extend({
		show: function () {
			return ae(this, !0)
		},
		hide: function () {
			return ae(this)
		},
		toggle: function (e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
				oe(this) ? T(this).show() : T(this).hide()
			})
		}
	});
	var le = /^(?:checkbox|radio)$/i,
		ce = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
		ue = /^$|^module$|\/(?:java|ecma)script/i,
		de = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};

	function pe(e, t) {
		var n;
		return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && E(e, t) ? T.merge([e], n) : n
	}

	function fe(e, t) {
		for (var n = 0, i = e.length; n < i; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
	}
	de.optgroup = de.option, de.tbody = de.tfoot = de.colgroup = de.caption = de.thead, de.th = de.td;
	var he, ge, me = /<|&#?\w+;/;

	function ve(e, t, n, i, o) {
		for (var s, r, a, l, c, u, d = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
			if ((s = e[f]) || 0 === s)
				if ("object" === x(s)) T.merge(p, s.nodeType ? [s] : s);
				else if (me.test(s)) {
					for (r = r || d.appendChild(t.createElement("div")), a = (ce.exec(s) || ["", ""])[1].toLowerCase(), l = de[a] || de._default, r.innerHTML = l[1] + T.htmlPrefilter(s) + l[2], u = l[0]; u--;) r = r.lastChild;
					T.merge(p, r.childNodes), (r = d.firstChild).textContent = ""
				} else p.push(t.createTextNode(s));
		for (d.textContent = "", f = 0; s = p[f++];)
			if (i && -1 < T.inArray(s, i)) o && o.push(s);
			else if (c = T.contains(s.ownerDocument, s), r = pe(d.appendChild(s), "script"), c && fe(r), n)
				for (u = 0; s = r[u++];) ue.test(s.type || "") && n.push(s);
		return d
	}
	he = S.createDocumentFragment().appendChild(S.createElement("div")), (ge = S.createElement("input")).setAttribute("type", "radio"), ge.setAttribute("checked", "checked"), ge.setAttribute("name", "t"), he.appendChild(ge), b.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked, he.innerHTML = "<textarea>x</textarea>", b.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue;
	var be = S.documentElement,
		ye = /^key/,
		we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		xe = /^([^.]*)(?:\.(.+)|)/;

	function Ce() {
		return !0
	}

	function ke() {
		return !1
	}

	function Se() {
		try {
			return S.activeElement
		} catch (e) { }
	}

	function Te(e, t, n, i, o, s) {
		var r, a;
		if ("object" == typeof t) {
			for (a in "string" != typeof n && (i = i || n, n = void 0), t) Te(e, a, n, i, t[a], s);
			return e
		}
		if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = ke;
		else if (!o) return e;
		return 1 === s && (r = o, (o = function (e) {
			return T().off(e), r.apply(this, arguments)
		}).guid = r.guid || (r.guid = T.guid++)), e.each(function () {
			T.event.add(this, t, o, i, n)
		})
	}
	T.event = {
		global: {},
		add: function (t, e, n, i, o) {
			var s, r, a, l, c, u, d, p, f, h, g, m = Q.get(t);
			if (m)
				for (n.handler && (n = (s = n).handler, o = s.selector), o && T.find.matchesSelector(be, o), n.guid || (n.guid = T.guid++), (l = m.events) || (l = m.events = {}), (r = m.handle) || (r = m.handle = function (e) {
					return void 0 !== T && T.event.triggered !== e.type ? T.event.dispatch.apply(t, arguments) : void 0
				}), c = (e = (e || "").match(F) || [""]).length; c--;) f = g = (a = xe.exec(e[c]) || [])[1], h = (a[2] || "").split(".").sort(), f && (d = T.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = T.event.special[f] || {}, u = T.extend({
					type: f,
					origType: g,
					data: i,
					handler: n,
					guid: n.guid,
					selector: o,
					needsContext: o && T.expr.match.needsContext.test(o),
					namespace: h.join(".")
				}, s), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, h, r) || t.addEventListener && t.addEventListener(f, r)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), T.event.global[f] = !0)
		},
		remove: function (e, t, n, i, o) {
			var s, r, a, l, c, u, d, p, f, h, g, m = Q.hasData(e) && Q.get(e);
			if (m && (l = m.events)) {
				for (c = (t = (t || "").match(F) || [""]).length; c--;)
					if (f = g = (a = xe.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
						for (d = T.event.special[f] || {}, p = l[f = (i ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = p.length; s--;) u = p[s], !o && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(s, 1), u.selector && p.delegateCount-- , d.remove && d.remove.call(e, u));
						r && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, m.handle) || T.removeEvent(e, f, m.handle), delete l[f])
					} else
						for (f in l) T.event.remove(e, f + t[c], n, i, !0);
				T.isEmptyObject(l) && Q.remove(e, "handle events")
			}
		},
		dispatch: function (e) {
			var t, n, i, o, s, r, a = T.event.fix(e),
				l = new Array(arguments.length),
				c = (Q.get(this, "events") || {})[a.type] || [],
				u = T.event.special[a.type] || {};
			for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
			if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
				for (r = T.event.handlers.call(this, a, c), t = 0;
					(o = r[t++]) && !a.isPropagationStopped();)
					for (a.currentTarget = o.elem, n = 0;
						(s = o.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s, a.data = s.data, void 0 !== (i = ((T.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
				return u.postDispatch && u.postDispatch.call(this, a), a.result
			}
		},
		handlers: function (e, t) {
			var n, i, o, s, r, a = [],
				l = t.delegateCount,
				c = e.target;
			if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
				for (; c !== this; c = c.parentNode || this)
					if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
						for (s = [], r = {}, n = 0; n < l; n++) void 0 === r[o = (i = t[n]).selector + " "] && (r[o] = i.needsContext ? -1 < T(o, this).index(c) : T.find(o, this, null, [c]).length), r[o] && s.push(i);
						s.length && a.push({
							elem: c,
							handlers: s
						})
					}
			return c = this, l < t.length && a.push({
				elem: c,
				handlers: t.slice(l)
			}), a
		},
		addProp: function (t, e) {
			Object.defineProperty(T.Event.prototype, t, {
				enumerable: !0,
				configurable: !0,
				get: y(e) ? function () {
					if (this.originalEvent) return e(this.originalEvent)
				} : function () {
					if (this.originalEvent) return this.originalEvent[t]
				},
				set: function (e) {
					Object.defineProperty(this, t, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: e
					})
				}
			})
		},
		fix: function (e) {
			return e[T.expando] ? e : new T.Event(e)
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function () {
					if (this !== Se() && this.focus) return this.focus(), !1
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function () {
					if (this === Se() && this.blur) return this.blur(), !1
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function () {
					if ("checkbox" === this.type && this.click && E(this, "input")) return this.click(), !1
				},
				_default: function (e) {
					return E(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function (e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		}
	}, T.removeEvent = function (e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n)
	}, T.Event = function (e, t) {
		if (!(this instanceof T.Event)) return new T.Event(e, t);
		e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && T.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[T.expando] = !0
	}, T.Event.prototype = {
		constructor: T.Event,
		isDefaultPrevented: ke,
		isPropagationStopped: ke,
		isImmediatePropagationStopped: ke,
		isSimulated: !1,
		preventDefault: function () {
			var e = this.originalEvent;
			this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault()
		},
		stopPropagation: function () {
			var e = this.originalEvent;
			this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation()
		},
		stopImmediatePropagation: function () {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, T.each({
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
		char: !0,
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
		which: function (e) {
			var t = e.button;
			return null == e.which && ye.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
		}
	}, T.event.addProp), T.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (e, o) {
		T.event.special[e] = {
			delegateType: o,
			bindType: o,
			handle: function (e) {
				var t, n = e.relatedTarget,
					i = e.handleObj;
				return n && (n === this || T.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = o), t
			}
		}
	}), T.fn.extend({
		on: function (e, t, n, i) {
			return Te(this, e, t, n, i)
		},
		one: function (e, t, n, i) {
			return Te(this, e, t, n, i, 1)
		},
		off: function (e, t, n) {
			var i, o;
			if (e && e.preventDefault && e.handleObj) return i = e.handleObj, T(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
				T.event.remove(this, e, n, t)
			});
			for (o in e) this.off(o, t, e[o]);
			return this
		}
	});
	var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
		Ee = /<script|<style|<link/i,
		Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
		De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function Oe(e, t) {
		return E(e, "table") && E(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e
	}

	function $e(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function Re(e) {
		return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
	}

	function _e(e, t) {
		var n, i, o, s, r, a, l, c;
		if (1 === t.nodeType) {
			if (Q.hasData(e) && (s = Q.access(e), r = Q.set(t, s), c = s.events))
				for (o in delete r.handle, r.events = {}, c)
					for (n = 0, i = c[o].length; n < i; n++) T.event.add(t, o, c[o][n]);
			Z.hasData(e) && (a = Z.access(e), l = T.extend({}, a), Z.set(t, l))
		}
	}

	function je(n, i, o, s) {
		i = m.apply([], i);
		var e, t, r, a, l, c, u = 0,
			d = n.length,
			p = d - 1,
			f = i[0],
			h = y(f);
		if (h || 1 < d && "string" == typeof f && !b.checkClone && Pe.test(f)) return n.each(function (e) {
			var t = n.eq(e);
			h && (i[0] = f.call(this, e, t.html())), je(t, i, o, s)
		});
		if (d && (t = (e = ve(i, n[0].ownerDocument, !1, n, s)).firstChild, 1 === e.childNodes.length && (e = t), t || s)) {
			for (a = (r = T.map(pe(e, "script"), $e)).length; u < d; u++) l = e, u !== p && (l = T.clone(l, !0, !0), a && T.merge(r, pe(l, "script"))), o.call(n[u], l, u);
			if (a)
				for (c = r[r.length - 1].ownerDocument, T.map(r, Re), u = 0; u < a; u++) l = r[u], ue.test(l.type || "") && !Q.access(l, "globalEval") && T.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? T._evalUrl && T._evalUrl(l.src) : w(l.textContent.replace(De, ""), c, l))
		}
		return n
	}

	function Fe(e, t, n) {
		for (var i, o = t ? T.filter(t, e) : e, s = 0; null != (i = o[s]); s++) n || 1 !== i.nodeType || T.cleanData(pe(i)), i.parentNode && (n && T.contains(i.ownerDocument, i) && fe(pe(i, "script")), i.parentNode.removeChild(i));
		return e
	}
	T.extend({
		htmlPrefilter: function (e) {
			return e.replace(Ae, "<$1></$2>")
		},
		clone: function (e, t, n) {
			var i, o, s, r, a, l, c, u = e.cloneNode(!0),
				d = T.contains(e.ownerDocument, e);
			if (!(b.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e)))
				for (r = pe(u), i = 0, o = (s = pe(e)).length; i < o; i++) a = s[i], "input" === (c = (l = r[i]).nodeName.toLowerCase()) && le.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
			if (t)
				if (n)
					for (s = s || pe(e), r = r || pe(u), i = 0, o = s.length; i < o; i++) _e(s[i], r[i]);
				else _e(e, u);
			return 0 < (r = pe(u, "script")).length && fe(r, !d && pe(e, "script")), u
		},
		cleanData: function (e) {
			for (var t, n, i, o = T.event.special, s = 0; void 0 !== (n = e[s]); s++)
				if (X(n)) {
					if (t = n[Q.expando]) {
						if (t.events)
							for (i in t.events) o[i] ? T.event.remove(n, i) : T.removeEvent(n, i, t.handle);
						n[Q.expando] = void 0
					}
					n[Z.expando] && (n[Z.expando] = void 0)
				}
		}
	}), T.fn.extend({
		detach: function (e) {
			return Fe(this, e, !0)
		},
		remove: function (e) {
			return Fe(this, e)
		},
		text: function (e) {
			return I(this, function (e) {
				return void 0 === e ? T.text(this) : this.empty().each(function () {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append: function () {
			return je(this, arguments, function (e) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
			})
		},
		prepend: function () {
			return je(this, arguments, function (e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = Oe(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function () {
			return je(this, arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function () {
			return je(this, arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		empty: function () {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (T.cleanData(pe(e, !1)), e.textContent = "");
			return this
		},
		clone: function (e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function () {
				return T.clone(this, e, t)
			})
		},
		html: function (e) {
			return I(this, function (e) {
				var t = this[0] || {},
					n = 0,
					i = this.length;
				if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof e && !Ee.test(e) && !de[(ce.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = T.htmlPrefilter(e);
					try {
						for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (T.cleanData(pe(t, !1)), t.innerHTML = e);
						t = 0
					} catch (e) { }
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function () {
			var n = [];
			return je(this, arguments, function (e) {
				var t = this.parentNode;
				T.inArray(this, n) < 0 && (T.cleanData(pe(this)), t && t.replaceChild(e, this))
			}, n)
		}
	}), T.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (e, r) {
		T.fn[e] = function (e) {
			for (var t, n = [], i = T(e), o = i.length - 1, s = 0; s <= o; s++) t = s === o ? this : this.clone(!0), T(i[s])[r](t), l.apply(n, t.get());
			return this.pushStack(n)
		}
	});
	var Le = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
		qe = function (e) {
			var t = e.ownerDocument.defaultView;
			return t && t.opener || (t = k), t.getComputedStyle(e)
		},
		ze = new RegExp(ie.join("|"), "i");

	function Me(e, t, n) {
		var i, o, s, r, a = e.style;
		return (n = n || qe(e)) && ("" !== (r = n.getPropertyValue(t) || n[t]) || T.contains(e.ownerDocument, e) || (r = T.style(e, t)), !b.pixelBoxStyles() && Le.test(r) && ze.test(t) && (i = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = n.width, a.width = i, a.minWidth = o, a.maxWidth = s)), void 0 !== r ? r + "" : r
	}

	function Ne(e, t) {
		return {
			get: function () {
				if (!e()) return (this.get = t).apply(this, arguments);
				delete this.get
			}
		}
	} ! function () {
		function e() {
			if (l) {
				a.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(a).appendChild(l);
				var e = k.getComputedStyle(l);
				n = "1%" !== e.top, r = 12 === t(e.marginLeft), l.style.right = "60%", s = 36 === t(e.right), i = 36 === t(e.width), l.style.position = "absolute", o = 36 === l.offsetWidth || "absolute", be.removeChild(a), l = null
			}
		}

		function t(e) {
			return Math.round(parseFloat(e))
		}
		var n, i, o, s, r, a = S.createElement("div"),
			l = S.createElement("div");
		l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", b.clearCloneStyle = "content-box" === l.style.backgroundClip, T.extend(b, {
			boxSizingReliable: function () {
				return e(), i
			},
			pixelBoxStyles: function () {
				return e(), s
			},
			pixelPosition: function () {
				return e(), n
			},
			reliableMarginLeft: function () {
				return e(), r
			},
			scrollboxSize: function () {
				return e(), o
			}
		}))
	}();
	var He = /^(none|table(?!-c[ea]).+)/,
		Ie = /^--/,
		We = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Ve = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Ue = ["Webkit", "Moz", "ms"],
		Be = S.createElement("div").style;

	function Xe(e) {
		var t = T.cssProps[e];
		return t || (t = T.cssProps[e] = function (e) {
			if (e in Be) return e;
			for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--;)
				if ((e = Ue[n] + t) in Be) return e
		}(e) || e), t
	}

	function Ye(e, t, n) {
		var i = ne.exec(t);
		return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
	}

	function Qe(e, t, n, i, o, s) {
		var r = "width" === t ? 1 : 0,
			a = 0,
			l = 0;
		if (n === (i ? "border" : "content")) return 0;
		for (; r < 4; r += 2) "margin" === n && (l += T.css(e, n + ie[r], !0, o)), i ? ("content" === n && (l -= T.css(e, "padding" + ie[r], !0, o)), "margin" !== n && (l -= T.css(e, "border" + ie[r] + "Width", !0, o))) : (l += T.css(e, "padding" + ie[r], !0, o), "padding" !== n ? l += T.css(e, "border" + ie[r] + "Width", !0, o) : a += T.css(e, "border" + ie[r] + "Width", !0, o));
		return !i && 0 <= s && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - s - l - a - .5))), l
	}

	function Ze(e, t, n) {
		var i = qe(e),
			o = Me(e, t, i),
			s = "border-box" === T.css(e, "boxSizing", !1, i),
			r = s;
		if (Le.test(o)) {
			if (!n) return o;
			o = "auto"
		}
		return r = r && (b.boxSizingReliable() || o === e.style[t]), ("auto" === o || !parseFloat(o) && "inline" === T.css(e, "display", !1, i)) && (o = e["offset" + t[0].toUpperCase() + t.slice(1)], r = !0), (o = parseFloat(o) || 0) + Qe(e, t, n || (s ? "border" : "content"), r, i, o) + "px"
	}

	function Ge(e, t, n, i, o) {
		return new Ge.prototype.init(e, t, n, i, o)
	}
	T.extend({
		cssHooks: {
			opacity: {
				get: function (e, t) {
					if (t) {
						var n = Me(e, "opacity");
						return "" === n ? "1" : n
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
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {},
		style: function (e, t, n, i) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var o, s, r, a = B(t),
					l = Ie.test(t),
					c = e.style;
				if (l || (t = Xe(a)), r = T.cssHooks[t] || T.cssHooks[a], void 0 === n) return r && "get" in r && void 0 !== (o = r.get(e, !1, i)) ? o : c[t];
				"string" == (s = typeof n) && (o = ne.exec(n)) && o[1] && (n = se(e, t, o), s = "number"), null != n && n == n && ("number" === s && (n += o && o[3] || (T.cssNumber[a] ? "" : "px")), b.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), r && "set" in r && void 0 === (n = r.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
			}
		},
		css: function (e, t, n, i) {
			var o, s, r, a = B(t);
			return Ie.test(t) || (t = Xe(a)), (r = T.cssHooks[t] || T.cssHooks[a]) && "get" in r && (o = r.get(e, !0, n)), void 0 === o && (o = Me(e, t, i)), "normal" === o && t in Ve && (o = Ve[t]), "" === n || n ? (s = parseFloat(o), !0 === n || isFinite(s) ? s || 0 : o) : o
		}
	}), T.each(["height", "width"], function (e, a) {
		T.cssHooks[a] = {
			get: function (e, t, n) {
				if (t) return !He.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, a, n) : ee(e, We, function () {
					return Ze(e, a, n)
				})
			},
			set: function (e, t, n) {
				var i, o = qe(e),
					s = "border-box" === T.css(e, "boxSizing", !1, o),
					r = n && Qe(e, a, n, s, o);
				return s && b.scrollboxSize() === o.position && (r -= Math.ceil(e["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(o[a]) - Qe(e, a, "border", !1, o) - .5)), r && (i = ne.exec(t)) && "px" !== (i[3] || "px") && (e.style[a] = t, t = T.css(e, a)), Ye(0, t, r)
			}
		}
	}), T.cssHooks.marginLeft = Ne(b.reliableMarginLeft, function (e, t) {
		if (t) return (parseFloat(Me(e, "marginLeft")) || e.getBoundingClientRect().left - ee(e, {
			marginLeft: 0
		}, function () {
			return e.getBoundingClientRect().left
		})) + "px"
	}), T.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (o, s) {
		T.cssHooks[o + s] = {
			expand: function (e) {
				for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + ie[t] + s] = i[t] || i[t - 2] || i[0];
				return n
			}
		}, "margin" !== o && (T.cssHooks[o + s].set = Ye)
	}), T.fn.extend({
		css: function (e, t) {
			return I(this, function (e, t, n) {
				var i, o, s = {},
					r = 0;
				if (Array.isArray(t)) {
					for (i = qe(e), o = t.length; r < o; r++) s[t[r]] = T.css(e, t[r], !1, i);
					return s
				}
				return void 0 !== n ? T.style(e, t, n) : T.css(e, t)
			}, e, t, 1 < arguments.length)
		}
	}), ((T.Tween = Ge).prototype = {
		constructor: Ge,
		init: function (e, t, n, i, o, s) {
			this.elem = e, this.prop = n, this.easing = o || T.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = s || (T.cssNumber[n] ? "" : "px")
		},
		cur: function () {
			var e = Ge.propHooks[this.prop];
			return e && e.get ? e.get(this) : Ge.propHooks._default.get(this)
		},
		run: function (e) {
			var t, n = Ge.propHooks[this.prop];
			return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ge.propHooks._default.set(this), this
		}
	}).init.prototype = Ge.prototype, (Ge.propHooks = {
		_default: {
			get: function (e) {
				var t;
				return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
			},
			set: function (e) {
				T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[T.cssProps[e.prop]] && !T.cssHooks[e.prop] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit)
			}
		}
	}).scrollTop = Ge.propHooks.scrollLeft = {
		set: function (e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, T.easing = {
		linear: function (e) {
			return e
		},
		swing: function (e) {
			return .5 - Math.cos(e * Math.PI) / 2
		},
		_default: "swing"
	}, T.fx = Ge.prototype.init, T.fx.step = {};
	var Ke, Je, et, tt, nt = /^(?:toggle|show|hide)$/,
		it = /queueHooks$/;

	function ot() {
		Je && (!1 === S.hidden && k.requestAnimationFrame ? k.requestAnimationFrame(ot) : k.setTimeout(ot, T.fx.interval), T.fx.tick())
	}

	function st() {
		return k.setTimeout(function () {
			Ke = void 0
		}), Ke = Date.now()
	}

	function rt(e, t) {
		var n, i = 0,
			o = {
				height: e
			};
		for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = ie[i])] = o["padding" + n] = e;
		return t && (o.opacity = o.width = e), o
	}

	function at(e, t, n) {
		for (var i, o = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), s = 0, r = o.length; s < r; s++)
			if (i = o[s].call(n, t, e)) return i
	}

	function lt(s, e, t) {
		var n, r, i = 0,
			o = lt.prefilters.length,
			a = T.Deferred().always(function () {
				delete l.elem
			}),
			l = function () {
				if (r) return !1;
				for (var e = Ke || st(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), i = 0, o = c.tweens.length; i < o; i++) c.tweens[i].run(n);
				return a.notifyWith(s, [c, n, t]), n < 1 && o ? t : (o || a.notifyWith(s, [c, 1, 0]), a.resolveWith(s, [c]), !1)
			},
			c = a.promise({
				elem: s,
				props: T.extend({}, e),
				opts: T.extend(!0, {
					specialEasing: {},
					easing: T.easing._default
				}, t),
				originalProperties: e,
				originalOptions: t,
				startTime: Ke || st(),
				duration: t.duration,
				tweens: [],
				createTween: function (e, t) {
					var n = T.Tween(s, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
					return c.tweens.push(n), n
				},
				stop: function (e) {
					var t = 0,
						n = e ? c.tweens.length : 0;
					if (r) return this;
					for (r = !0; t < n; t++) c.tweens[t].run(1);
					return e ? (a.notifyWith(s, [c, 1, 0]), a.resolveWith(s, [c, e])) : a.rejectWith(s, [c, e]), this
				}
			}),
			u = c.props;
		for (function (e, t) {
			var n, i, o, s, r;
			for (n in e)
				if (o = t[i = B(n)], s = e[n], Array.isArray(s) && (o = s[1], s = e[n] = s[0]), n !== i && (e[i] = s, delete e[n]), (r = T.cssHooks[i]) && "expand" in r)
					for (n in s = r.expand(s), delete e[i], s) n in e || (e[n] = s[n], t[n] = o);
				else t[i] = o
		}(u, c.opts.specialEasing); i < o; i++)
			if (n = lt.prefilters[i].call(c, s, u, c.opts)) return y(n.stop) && (T._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
		return T.map(u, at, c), y(c.opts.start) && c.opts.start.call(s, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), T.fx.timer(T.extend(l, {
			elem: s,
			anim: c,
			queue: c.opts.queue
		})), c
	}
	T.Animation = T.extend(lt, {
		tweeners: {
			"*": [function (e, t) {
				var n = this.createTween(e, t);
				return se(n.elem, e, ne.exec(t), n), n
			}]
		},
		tweener: function (e, t) {
			for (var n, i = 0, o = (e = y(e) ? (t = e, ["*"]) : e.match(F)).length; i < o; i++) n = e[i], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t)
		},
		prefilters: [function (e, t, n) {
			var i, o, s, r, a, l, c, u, d = "width" in t || "height" in t,
				p = this,
				f = {},
				h = e.style,
				g = e.nodeType && oe(e),
				m = Q.get(e, "fxshow");
			for (i in n.queue || (null == (r = T._queueHooks(e, "fx")).unqueued && (r.unqueued = 0, a = r.empty.fire, r.empty.fire = function () {
				r.unqueued || a()
			}), r.unqueued++ , p.always(function () {
				p.always(function () {
					r.unqueued-- , T.queue(e, "fx").length || r.empty.fire()
				})
			})), t)
				if (o = t[i], nt.test(o)) {
					if (delete t[i], s = s || "toggle" === o, o === (g ? "hide" : "show")) {
						if ("show" !== o || !m || void 0 === m[i]) continue;
						g = !0
					}
					f[i] = m && m[i] || T.style(e, i)
				}
			if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(f))
				for (i in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = m && m.display) && (c = Q.get(e, "display")), "none" === (u = T.css(e, "display")) && (c ? u = c : (ae([e], !0), c = e.style.display || c, u = T.css(e, "display"), ae([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === T.css(e, "float") && (l || (p.done(function () {
					h.display = c
				}), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
					h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
				})), l = !1, f) l || (m ? "hidden" in m && (g = m.hidden) : m = Q.access(e, "fxshow", {
					display: c
				}), s && (m.hidden = !g), g && ae([e], !0), p.done(function () {
					for (i in g || ae([e]), Q.remove(e, "fxshow"), f) T.style(e, i, f[i])
				})), l = at(g ? m[i] : 0, i, p), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
		}],
		prefilter: function (e, t) {
			t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
		}
	}), T.speed = function (e, t, n) {
		var i = e && "object" == typeof e ? T.extend({}, e) : {
			complete: n || !n && t || y(e) && e,
			duration: e,
			easing: n && t || t && !y(t) && t
		};
		return T.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in T.fx.speeds ? i.duration = T.fx.speeds[i.duration] : i.duration = T.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
			y(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue)
		}, i
	}, T.fn.extend({
		fadeTo: function (e, t, n, i) {
			return this.filter(oe).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, i)
		},
		animate: function (t, e, n, i) {
			function o() {
				var e = lt(this, T.extend({}, t), r);
				(s || Q.get(this, "finish")) && e.stop(!0)
			}
			var s = T.isEmptyObject(t),
				r = T.speed(e, n, i);
			return o.finish = o, s || !1 === r.queue ? this.each(o) : this.queue(r.queue, o)
		},
		stop: function (o, e, s) {
			function r(e) {
				var t = e.stop;
				delete e.stop, t(s)
			}
			return "string" != typeof o && (s = e, e = o, o = void 0), e && !1 !== o && this.queue(o || "fx", []), this.each(function () {
				var e = !0,
					t = null != o && o + "queueHooks",
					n = T.timers,
					i = Q.get(this);
				if (t) i[t] && i[t].stop && r(i[t]);
				else
					for (t in i) i[t] && i[t].stop && it.test(t) && r(i[t]);
				for (t = n.length; t--;) n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(s), e = !1, n.splice(t, 1));
				!e && s || T.dequeue(this, o)
			})
		},
		finish: function (r) {
			return !1 !== r && (r = r || "fx"), this.each(function () {
				var e, t = Q.get(this),
					n = t[r + "queue"],
					i = t[r + "queueHooks"],
					o = T.timers,
					s = n ? n.length : 0;
				for (t.finish = !0, T.queue(this, r, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === r && (o[e].anim.stop(!0), o.splice(e, 1));
				for (e = 0; e < s; e++) n[e] && n[e].finish && n[e].finish.call(this);
				delete t.finish
			})
		}
	}), T.each(["toggle", "show", "hide"], function (e, i) {
		var o = T.fn[i];
		T.fn[i] = function (e, t, n) {
			return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(rt(i, !0), e, t, n)
		}
	}), T.each({
		slideDown: rt("show"),
		slideUp: rt("hide"),
		slideToggle: rt("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function (e, i) {
		T.fn[e] = function (e, t, n) {
			return this.animate(i, e, t, n)
		}
	}), T.timers = [], T.fx.tick = function () {
		var e, t = 0,
			n = T.timers;
		for (Ke = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
		n.length || T.fx.stop(), Ke = void 0
	}, T.fx.timer = function (e) {
		T.timers.push(e), T.fx.start()
	}, T.fx.interval = 13, T.fx.start = function () {
		Je || (Je = !0, ot())
	}, T.fx.stop = function () {
		Je = null
	}, T.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, T.fn.delay = function (i, e) {
		return i = T.fx && T.fx.speeds[i] || i, e = e || "fx", this.queue(e, function (e, t) {
			var n = k.setTimeout(e, i);
			t.stop = function () {
				k.clearTimeout(n)
			}
		})
	}, et = S.createElement("input"), tt = S.createElement("select").appendChild(S.createElement("option")), et.type = "checkbox", b.checkOn = "" !== et.value, b.optSelected = tt.selected, (et = S.createElement("input")).value = "t", et.type = "radio", b.radioValue = "t" === et.value;
	var ct, ut = T.expr.attrHandle;
	T.fn.extend({
		attr: function (e, t) {
			return I(this, T.attr, e, t, 1 < arguments.length)
		},
		removeAttr: function (e) {
			return this.each(function () {
				T.removeAttr(this, e)
			})
		}
	}), T.extend({
		attr: function (e, t, n) {
			var i, o, s = e.nodeType;
			if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === s && T.isXMLDoc(e) || (o = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void T.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = T.find.attr(e, t)) ? void 0 : i)
		},
		attrHooks: {
			type: {
				set: function (e, t) {
					if (!b.radioValue && "radio" === t && E(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		removeAttr: function (e, t) {
			var n, i = 0,
				o = t && t.match(F);
			if (o && 1 === e.nodeType)
				for (; n = o[i++];) e.removeAttribute(n)
		}
	}), ct = {
		set: function (e, t, n) {
			return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
		var r = ut[t] || T.find.attr;
		ut[t] = function (e, t, n) {
			var i, o, s = t.toLowerCase();
			return n || (o = ut[s], ut[s] = i, i = null != r(e, t, n) ? s : null, ut[s] = o), i
		}
	});
	var dt = /^(?:input|select|textarea|button)$/i,
		pt = /^(?:a|area)$/i;

	function ft(e) {
		return (e.match(F) || []).join(" ")
	}

	function ht(e) {
		return e.getAttribute && e.getAttribute("class") || ""
	}

	function gt(e) {
		return Array.isArray(e) ? e : "string" == typeof e && e.match(F) || []
	}
	T.fn.extend({
		prop: function (e, t) {
			return I(this, T.prop, e, t, 1 < arguments.length)
		},
		removeProp: function (e) {
			return this.each(function () {
				delete this[T.propFix[e] || e]
			})
		}
	}), T.extend({
		prop: function (e, t, n) {
			var i, o, s = e.nodeType;
			if (3 !== s && 8 !== s && 2 !== s) return 1 === s && T.isXMLDoc(e) || (t = T.propFix[t] || t, o = T.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function (e) {
					var t = T.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : dt.test(e.nodeName) || pt.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		},
		propFix: {
			for: "htmlFor",
			class: "className"
		}
	}), b.optSelected || (T.propHooks.selected = {
		get: function (e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		},
		set: function (e) {
			var t = e.parentNode;
			t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
		}
	}), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		T.propFix[this.toLowerCase()] = this
	}), T.fn.extend({
		addClass: function (t) {
			var e, n, i, o, s, r, a, l = 0;
			if (y(t)) return this.each(function (e) {
				T(this).addClass(t.call(this, e, ht(this)))
			});
			if ((e = gt(t)).length)
				for (; n = this[l++];)
					if (o = ht(n), i = 1 === n.nodeType && " " + ft(o) + " ") {
						for (r = 0; s = e[r++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
						o !== (a = ft(i)) && n.setAttribute("class", a)
					}
			return this
		},
		removeClass: function (t) {
			var e, n, i, o, s, r, a, l = 0;
			if (y(t)) return this.each(function (e) {
				T(this).removeClass(t.call(this, e, ht(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ((e = gt(t)).length)
				for (; n = this[l++];)
					if (o = ht(n), i = 1 === n.nodeType && " " + ft(o) + " ") {
						for (r = 0; s = e[r++];)
							for (; - 1 < i.indexOf(" " + s + " ");) i = i.replace(" " + s + " ", " ");
						o !== (a = ft(i)) && n.setAttribute("class", a)
					}
			return this
		},
		toggleClass: function (o, t) {
			var s = typeof o,
				r = "string" == s || Array.isArray(o);
			return "boolean" == typeof t && r ? t ? this.addClass(o) : this.removeClass(o) : y(o) ? this.each(function (e) {
				T(this).toggleClass(o.call(this, e, ht(this), t), t)
			}) : this.each(function () {
				var e, t, n, i;
				if (r)
					for (t = 0, n = T(this), i = gt(o); e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
				else void 0 !== o && "boolean" != s || ((e = ht(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === o ? "" : Q.get(this, "__className__") || ""))
			})
		},
		hasClass: function (e) {
			var t, n, i = 0;
			for (t = " " + e + " "; n = this[i++];)
				if (1 === n.nodeType && -1 < (" " + ft(ht(n)) + " ").indexOf(t)) return !0;
			return !1
		}
	});
	var mt = /\r/g;

	function vt(e) {
		e.stopPropagation()
	}
	T.fn.extend({
		val: function (n) {
			var i, e, o, t = this[0];
			return arguments.length ? (o = y(n), this.each(function (e) {
				var t;
				1 === this.nodeType && (null == (t = o ? n.call(this, e, T(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = T.map(t, function (e) {
					return null == e ? "" : e + ""
				})), (i = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
			})) : t ? (i = T.valHooks[t.type] || T.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(mt, "") : null == e ? "" : e : void 0
		}
	}), T.extend({
		valHooks: {
			option: {
				get: function (e) {
					var t = T.find.attr(e, "value");
					return null != t ? t : ft(T.text(e))
				}
			},
			select: {
				get: function (e) {
					var t, n, i, o = e.options,
						s = e.selectedIndex,
						r = "select-one" === e.type,
						a = r ? null : [],
						l = r ? s + 1 : o.length;
					for (i = s < 0 ? l : r ? s : 0; i < l; i++)
						if (((n = o[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))) {
							if (t = T(n).val(), r) return t;
							a.push(t)
						}
					return a
				},
				set: function (e, t) {
					for (var n, i, o = e.options, s = T.makeArray(t), r = o.length; r--;)((i = o[r]).selected = -1 < T.inArray(T.valHooks.option.get(i), s)) && (n = !0);
					return n || (e.selectedIndex = -1), s
				}
			}
		}
	}), T.each(["radio", "checkbox"], function () {
		T.valHooks[this] = {
			set: function (e, t) {
				if (Array.isArray(t)) return e.checked = -1 < T.inArray(T(e).val(), t)
			}
		}, b.checkOn || (T.valHooks[this].get = function (e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	}), b.focusin = "onfocusin" in k;
	var bt = /^(?:focusinfocus|focusoutblur)$/;
	T.extend(T.event, {
		trigger: function (e, t, n, i) {
			var o, s, r, a, l, c, u, d, p = [n || S],
				f = v.call(e, "type") ? e.type : e,
				h = v.call(e, "namespace") ? e.namespace.split(".") : [];
			if (s = d = r = n = n || S, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(f + T.event.triggered) && (-1 < f.indexOf(".") && (f = (h = f.split(".")).shift(), h.sort()), l = f.indexOf(":") < 0 && "on" + f, (e = e[T.expando] ? e : new T.Event(f, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : T.makeArray(t, [e]), u = T.event.special[f] || {}, i || !u.trigger || !1 !== u.trigger.apply(n, t))) {
				if (!i && !u.noBubble && !g(n)) {
					for (a = u.delegateType || f, bt.test(a + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), r = s;
					r === (n.ownerDocument || S) && p.push(r.defaultView || r.parentWindow || k)
				}
				for (o = 0;
					(s = p[o++]) && !e.isPropagationStopped();) d = s, e.type = 1 < o ? a : u.bindType || f, (c = (Q.get(s, "events") || {})[e.type] && Q.get(s, "handle")) && c.apply(s, t), (c = l && s[l]) && c.apply && X(s) && (e.result = c.apply(s, t), !1 === e.result && e.preventDefault());
				return e.type = f, i || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(p.pop(), t) || !X(n) || l && y(n[f]) && !g(n) && ((r = n[l]) && (n[l] = null), T.event.triggered = f, e.isPropagationStopped() && d.addEventListener(f, vt), n[f](), e.isPropagationStopped() && d.removeEventListener(f, vt), T.event.triggered = void 0, r && (n[l] = r)), e.result
			}
		},
		simulate: function (e, t, n) {
			var i = T.extend(new T.Event, n, {
				type: e,
				isSimulated: !0
			});
			T.event.trigger(i, null, t)
		}
	}), T.fn.extend({
		trigger: function (e, t) {
			return this.each(function () {
				T.event.trigger(e, t, this)
			})
		},
		triggerHandler: function (e, t) {
			var n = this[0];
			if (n) return T.event.trigger(e, t, n, !0)
		}
	}), b.focusin || T.each({
		focus: "focusin",
		blur: "focusout"
	}, function (n, i) {
		function o(e) {
			T.event.simulate(i, e.target, T.event.fix(e))
		}
		T.event.special[i] = {
			setup: function () {
				var e = this.ownerDocument || this,
					t = Q.access(e, i);
				t || e.addEventListener(n, o, !0), Q.access(e, i, (t || 0) + 1)
			},
			teardown: function () {
				var e = this.ownerDocument || this,
					t = Q.access(e, i) - 1;
				t ? Q.access(e, i, t) : (e.removeEventListener(n, o, !0), Q.remove(e, i))
			}
		}
	});
	var yt = k.location,
		wt = Date.now(),
		xt = /\?/;
	T.parseXML = function (e) {
		var t;
		if (!e || "string" != typeof e) return null;
		try {
			t = (new k.DOMParser).parseFromString(e, "text/xml")
		} catch (e) {
			t = void 0
		}
		return t && !t.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + e), t
	};
	var Ct = /\[\]$/,
		kt = /\r?\n/g,
		St = /^(?:submit|button|image|reset|file)$/i,
		Tt = /^(?:input|select|textarea|keygen)/i;

	function At(n, e, i, o) {
		var t;
		if (Array.isArray(e)) T.each(e, function (e, t) {
			i || Ct.test(n) ? o(n, t) : At(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, o)
		});
		else if (i || "object" !== x(e)) o(n, e);
		else
			for (t in e) At(n + "[" + t + "]", e[t], i, o)
	}
	T.param = function (e, t) {
		function n(e, t) {
			var n = y(t) ? t() : t;
			o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
		}
		var i, o = [];
		if (Array.isArray(e) || e.jquery && !T.isPlainObject(e)) T.each(e, function () {
			n(this.name, this.value)
		});
		else
			for (i in e) At(i, e[i], t, n);
		return o.join("&")
	}, T.fn.extend({
		serialize: function () {
			return T.param(this.serializeArray())
		},
		serializeArray: function () {
			return this.map(function () {
				var e = T.prop(this, "elements");
				return e ? T.makeArray(e) : this
			}).filter(function () {
				var e = this.type;
				return this.name && !T(this).is(":disabled") && Tt.test(this.nodeName) && !St.test(e) && (this.checked || !le.test(e))
			}).map(function (e, t) {
				var n = T(this).val();
				return null == n ? null : Array.isArray(n) ? T.map(n, function (e) {
					return {
						name: t.name,
						value: e.replace(kt, "\r\n")
					}
				}) : {
						name: t.name,
						value: n.replace(kt, "\r\n")
					}
			}).get()
		}
	});
	var Et = /%20/g,
		Pt = /#.*$/,
		Dt = /([?&])_=[^&]*/,
		Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		$t = /^(?:GET|HEAD)$/,
		Rt = /^\/\//,
		_t = {},
		jt = {},
		Ft = "*/".concat("*"),
		Lt = S.createElement("a");

	function qt(s) {
		return function (e, t) {
			"string" != typeof e && (t = e, e = "*");
			var n, i = 0,
				o = e.toLowerCase().match(F) || [];
			if (y(t))
				for (; n = o[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (s[n] = s[n] || []).unshift(t)) : (s[n] = s[n] || []).push(t)
		}
	}

	function zt(t, o, s, r) {
		var a = {},
			l = t === jt;

		function c(e) {
			var i;
			return a[e] = !0, T.each(t[e] || [], function (e, t) {
				var n = t(o, s, r);
				return "string" != typeof n || l || a[n] ? l ? !(i = n) : void 0 : (o.dataTypes.unshift(n), c(n), !1)
			}), i
		}
		return c(o.dataTypes[0]) || !a["*"] && c("*")
	}

	function Mt(e, t) {
		var n, i, o = T.ajaxSettings.flatOptions || {};
		for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
		return i && T.extend(!0, e, i), e
	}
	Lt.href = yt.href, T.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: yt.href,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(yt.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Ft,
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
				"text xml": T.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function (e, t) {
			return t ? Mt(Mt(e, T.ajaxSettings), t) : Mt(T.ajaxSettings, e)
		},
		ajaxPrefilter: qt(_t),
		ajaxTransport: qt(jt),
		ajax: function (e, t) {
			"object" == typeof e && (t = e, e = void 0), t = t || {};
			var u, d, p, n, f, i, h, g, o, s, m = T.ajaxSetup({}, t),
				v = m.context || m,
				b = m.context && (v.nodeType || v.jquery) ? T(v) : T.event,
				y = T.Deferred(),
				w = T.Callbacks("once memory"),
				x = m.statusCode || {},
				r = {},
				a = {},
				l = "canceled",
				C = {
					readyState: 0,
					getResponseHeader: function (e) {
						var t;
						if (h) {
							if (!n)
								for (n = {}; t = Ot.exec(p);) n[t[1].toLowerCase()] = t[2];
							t = n[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function () {
						return h ? p : null
					},
					setRequestHeader: function (e, t) {
						return null == h && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e, r[e] = t), this
					},
					overrideMimeType: function (e) {
						return null == h && (m.mimeType = e), this
					},
					statusCode: function (e) {
						var t;
						if (e)
							if (h) C.always(e[C.status]);
							else
								for (t in e) x[t] = [x[t], e[t]];
						return this
					},
					abort: function (e) {
						var t = e || l;
						return u && u.abort(t), c(0, t), this
					}
				};
			if (y.promise(C), m.url = ((e || m.url || yt.href) + "").replace(Rt, yt.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(F) || [""], null == m.crossDomain) {
				i = S.createElement("a");
				try {
					i.href = m.url, i.href = i.href, m.crossDomain = Lt.protocol + "//" + Lt.host != i.protocol + "//" + i.host
				} catch (e) {
					m.crossDomain = !0
				}
			}
			if (m.data && m.processData && "string" != typeof m.data && (m.data = T.param(m.data, m.traditional)), zt(_t, m, t, C), h) return C;
			for (o in (g = T.event && m.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !$t.test(m.type), d = m.url.replace(Pt, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Et, "+")) : (s = m.url.slice(d.length), m.data && (m.processData || "string" == typeof m.data) && (d += (xt.test(d) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (d = d.replace(Dt, "$1"), s = (xt.test(d) ? "&" : "?") + "_=" + wt++ + s), m.url = d + s), m.ifModified && (T.lastModified[d] && C.setRequestHeader("If-Modified-Since", T.lastModified[d]), T.etag[d] && C.setRequestHeader("If-None-Match", T.etag[d])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && C.setRequestHeader("Content-Type", m.contentType), C.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : m.accepts["*"]), m.headers) C.setRequestHeader(o, m.headers[o]);
			if (m.beforeSend && (!1 === m.beforeSend.call(v, C, m) || h)) return C.abort();
			if (l = "abort", w.add(m.complete), C.done(m.success), C.fail(m.error), u = zt(jt, m, t, C)) {
				if (C.readyState = 1, g && b.trigger("ajaxSend", [C, m]), h) return C;
				m.async && 0 < m.timeout && (f = k.setTimeout(function () {
					C.abort("timeout")
				}, m.timeout));
				try {
					h = !1, u.send(r, c)
				} catch (e) {
					if (h) throw e;
					c(-1, e)
				}
			} else c(-1, "No Transport");

			function c(e, t, n, i) {
				var o, s, r, a, l, c = t;
				h || (h = !0, f && k.clearTimeout(f), u = void 0, p = i || "", C.readyState = 0 < e ? 4 : 0, o = 200 <= e && e < 300 || 304 === e, n && (a = function (e, t, n) {
					for (var i, o, s, r, a = e.contents, l = e.dataTypes;
						"*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
					if (i)
						for (o in a)
							if (a[o] && a[o].test(i)) {
								l.unshift(o);
								break
							}
					if (l[0] in n) s = l[0];
					else {
						for (o in n) {
							if (!l[0] || e.converters[o + " " + l[0]]) {
								s = o;
								break
							}
							r || (r = o)
						}
						s = s || r
					}
					if (s) return s !== l[0] && l.unshift(s), n[s]
				}(m, C, n)), a = function (e, t, n, i) {
					var o, s, r, a, l, c = {},
						u = e.dataTypes.slice();
					if (u[1])
						for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
					for (s = u.shift(); s;)
						if (e.responseFields[s] && (n[e.responseFields[s]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = u.shift())
							if ("*" === s) s = l;
							else if ("*" !== l && l !== s) {
								if (!(r = c[l + " " + s] || c["* " + s]))
									for (o in c)
										if ((a = o.split(" "))[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
											!0 === r ? r = c[o] : !0 !== c[o] && (s = a[0], u.unshift(a[1]));
											break
										}
								if (!0 !== r)
									if (r && e.throws) t = r(t);
									else try {
										t = r(t)
									} catch (e) {
										return {
											state: "parsererror",
											error: r ? e : "No conversion from " + l + " to " + s
										}
									}
							}
					return {
						state: "success",
						data: t
					}
				}(m, a, C, o), o ? (m.ifModified && ((l = C.getResponseHeader("Last-Modified")) && (T.lastModified[d] = l), (l = C.getResponseHeader("etag")) && (T.etag[d] = l)), 204 === e || "HEAD" === m.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = a.state, s = a.data, o = !(r = a.error))) : (r = c, !e && c || (c = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || c) + "", o ? y.resolveWith(v, [s, c, C]) : y.rejectWith(v, [C, c, r]), C.statusCode(x), x = void 0, g && b.trigger(o ? "ajaxSuccess" : "ajaxError", [C, m, o ? s : r]), w.fireWith(v, [C, c]), g && (b.trigger("ajaxComplete", [C, m]), --T.active || T.event.trigger("ajaxStop")))
			}
			return C
		},
		getJSON: function (e, t, n) {
			return T.get(e, t, n, "json")
		},
		getScript: function (e, t) {
			return T.get(e, void 0, t, "script")
		}
	}), T.each(["get", "post"], function (e, o) {
		T[o] = function (e, t, n, i) {
			return y(t) && (i = i || n, n = t, t = void 0), T.ajax(T.extend({
				url: e,
				type: o,
				dataType: i,
				data: t,
				success: n
			}, T.isPlainObject(e) && e))
		}
	}), T._evalUrl = function (e) {
		return T.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			throws: !0
		})
	}, T.fn.extend({
		wrapAll: function (e) {
			var t;
			return this[0] && (y(e) && (e = e.call(this[0])), t = T(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
				for (var e = this; e.firstElementChild;) e = e.firstElementChild;
				return e
			}).append(this)), this
		},
		wrapInner: function (n) {
			return y(n) ? this.each(function (e) {
				T(this).wrapInner(n.call(this, e))
			}) : this.each(function () {
				var e = T(this),
					t = e.contents();
				t.length ? t.wrapAll(n) : e.append(n)
			})
		},
		wrap: function (t) {
			var n = y(t);
			return this.each(function (e) {
				T(this).wrapAll(n ? t.call(this, e) : t)
			})
		},
		unwrap: function (e) {
			return this.parent(e).not("body").each(function () {
				T(this).replaceWith(this.childNodes)
			}), this
		}
	}), T.expr.pseudos.hidden = function (e) {
		return !T.expr.pseudos.visible(e)
	}, T.expr.pseudos.visible = function (e) {
		return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
	}, T.ajaxSettings.xhr = function () {
		try {
			return new k.XMLHttpRequest
		} catch (e) { }
	};
	var Nt = {
		0: 200,
		1223: 204
	},
		Ht = T.ajaxSettings.xhr();
	b.cors = !!Ht && "withCredentials" in Ht, b.ajax = Ht = !!Ht, T.ajaxTransport(function (o) {
		var s, r;
		if (b.cors || Ht && !o.crossDomain) return {
			send: function (e, t) {
				var n, i = o.xhr();
				if (i.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
					for (n in o.xhrFields) i[n] = o.xhrFields[n];
				for (n in o.mimeType && i.overrideMimeType && i.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
				s = function (e) {
					return function () {
						s && (s = r = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Nt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
							binary: i.response
						} : {
								text: i.responseText
							}, i.getAllResponseHeaders()))
					}
				}, i.onload = s(), r = i.onerror = i.ontimeout = s("error"), void 0 !== i.onabort ? i.onabort = r : i.onreadystatechange = function () {
					4 === i.readyState && k.setTimeout(function () {
						s && r()
					})
				}, s = s("abort");
				try {
					i.send(o.hasContent && o.data || null)
				} catch (e) {
					if (s) throw e
				}
			},
			abort: function () {
				s && s()
			}
		}
	}), T.ajaxPrefilter(function (e) {
		e.crossDomain && (e.contents.script = !1)
	}), T.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function (e) {
				return T.globalEval(e), e
			}
		}
	}), T.ajaxPrefilter("script", function (e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), T.ajaxTransport("script", function (n) {
		var i, o;
		if (n.crossDomain) return {
			send: function (e, t) {
				i = T("<script>").prop({
					charset: n.scriptCharset,
					src: n.url
				}).on("load error", o = function (e) {
					i.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
				}), S.head.appendChild(i[0])
			},
			abort: function () {
				o && o()
			}
		}
	});
	var It, Wt = [],
		Vt = /(=)\?(?=&|$)|\?\?/;
	T.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var e = Wt.pop() || T.expando + "_" + wt++;
			return this[e] = !0, e
		}
	}), T.ajaxPrefilter("json jsonp", function (e, t, n) {
		var i, o, s, r = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
		if (r || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, r ? e[r] = e[r].replace(Vt, "$1" + i) : !1 !== e.jsonp && (e.url += (xt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
			return s || T.error(i + " was not called"), s[0]
		}, e.dataTypes[0] = "json", o = k[i], k[i] = function () {
			s = arguments
		}, n.always(function () {
			void 0 === o ? T(k).removeProp(i) : k[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Wt.push(i)), s && y(o) && o(s[0]), s = o = void 0
		}), "script"
	}), b.createHTMLDocument = ((It = S.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === It.childNodes.length), T.parseHTML = function (e, t, n) {
		return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (b.createHTMLDocument ? ((i = (t = S.implementation.createHTMLDocument("")).createElement("base")).href = S.location.href, t.head.appendChild(i)) : t = S), s = !n && [], (o = P.exec(e)) ? [t.createElement(o[1])] : (o = ve([e], t, s), s && s.length && T(s).remove(), T.merge([], o.childNodes)));
		var i, o, s
	}, T.fn.load = function (e, t, n) {
		var i, o, s, r = this,
			a = e.indexOf(" ");
		return -1 < a && (i = ft(e.slice(a)), e = e.slice(0, a)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < r.length && T.ajax({
			url: e,
			type: o || "GET",
			dataType: "html",
			data: t
		}).done(function (e) {
			s = arguments, r.html(i ? T("<div>").append(T.parseHTML(e)).find(i) : e)
		}).always(n && function (e, t) {
			r.each(function () {
				n.apply(this, s || [e.responseText, t, e])
			})
		}), this
	}, T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
		T.fn[t] = function (e) {
			return this.on(t, e)
		}
	}), T.expr.pseudos.animated = function (t) {
		return T.grep(T.timers, function (e) {
			return t === e.elem
		}).length
	}, T.offset = {
		setOffset: function (e, t, n) {
			var i, o, s, r, a, l, c = T.css(e, "position"),
				u = T(e),
				d = {};
			"static" === c && (e.style.position = "relative"), a = u.offset(), s = T.css(e, "top"), l = T.css(e, "left"), o = ("absolute" === c || "fixed" === c) && -1 < (s + l).indexOf("auto") ? (r = (i = u.position()).top, i.left) : (r = parseFloat(s) || 0, parseFloat(l) || 0), y(t) && (t = t.call(e, n, T.extend({}, a))), null != t.top && (d.top = t.top - a.top + r), null != t.left && (d.left = t.left - a.left + o), "using" in t ? t.using.call(e, d) : u.css(d)
		}
	}, T.fn.extend({
		offset: function (t) {
			if (arguments.length) return void 0 === t ? this : this.each(function (e) {
				T.offset.setOffset(this, t, e)
			});
			var e, n, i = this[0];
			return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
				top: e.top + n.pageYOffset,
				left: e.left + n.pageXOffset
			}) : {
					top: 0,
					left: 0
				} : void 0
		},
		position: function () {
			if (this[0]) {
				var e, t, n, i = this[0],
					o = {
						top: 0,
						left: 0
					};
				if ("fixed" === T.css(i, "position")) t = i.getBoundingClientRect();
				else {
					for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position");) e = e.parentNode;
					e && e !== i && 1 === e.nodeType && ((o = T(e).offset()).top += T.css(e, "borderTopWidth", !0), o.left += T.css(e, "borderLeftWidth", !0))
				}
				return {
					top: t.top - o.top - T.css(i, "marginTop", !0),
					left: t.left - o.left - T.css(i, "marginLeft", !0)
				}
			}
		},
		offsetParent: function () {
			return this.map(function () {
				for (var e = this.offsetParent; e && "static" === T.css(e, "position");) e = e.offsetParent;
				return e || be
			})
		}
	}), T.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function (t, o) {
		var s = "pageYOffset" === o;
		T.fn[t] = function (e) {
			return I(this, function (e, t, n) {
				var i;
				if (g(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n) return i ? i[o] : e[t];
				i ? i.scrollTo(s ? i.pageXOffset : n, s ? n : i.pageYOffset) : e[t] = n
			}, t, e, arguments.length)
		}
	}), T.each(["top", "left"], function (e, n) {
		T.cssHooks[n] = Ne(b.pixelPosition, function (e, t) {
			if (t) return t = Me(e, n), Le.test(t) ? T(e).position()[n] + "px" : t
		})
	}), T.each({
		Height: "height",
		Width: "width"
	}, function (r, a) {
		T.each({
			padding: "inner" + r,
			content: a,
			"": "outer" + r
		}, function (i, s) {
			T.fn[s] = function (e, t) {
				var n = arguments.length && (i || "boolean" != typeof e),
					o = i || (!0 === e || !0 === t ? "margin" : "border");
				return I(this, function (e, t, n) {
					var i;
					return g(e) ? 0 === s.indexOf("outer") ? e["inner" + r] : e.document.documentElement["client" + r] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + r], i["scroll" + r], e.body["offset" + r], i["offset" + r], i["client" + r])) : void 0 === n ? T.css(e, t, o) : T.style(e, t, n, o)
				}, a, n ? e : void 0, n)
			}
		})
	}), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
		T.fn[n] = function (e, t) {
			return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
		}
	}), T.fn.extend({
		hover: function (e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}
	}), T.fn.extend({
		bind: function (e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function (e, t) {
			return this.off(e, null, t)
		},
		delegate: function (e, t, n, i) {
			return this.on(t, e, n, i)
		},
		undelegate: function (e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	}), T.proxy = function (e, t) {
		var n, i, o;
		if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return i = a.call(arguments, 2), (o = function () {
			return e.apply(t || this, i.concat(a.call(arguments)))
		}).guid = e.guid = e.guid || T.guid++ , o
	}, T.holdReady = function (e) {
		e ? T.readyWait++ : T.ready(!0)
	}, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = E, T.isFunction = y, T.isWindow = g, T.camelCase = B, T.type = x, T.now = Date.now, T.isNumeric = function (e) {
		var t = T.type(e);
		return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
	}, "function" == typeof define && define.amd && define("jquery", [], function () {
		return T
	});
	var Ut = k.jQuery,
		Bt = k.$;
	return T.noConflict = function (e) {
		return k.$ === T && (k.$ = Bt), e && k.jQuery === T && (k.jQuery = Ut), T
	}, e || (k.jQuery = k.$ = T), T
}),
	function (r, a, l, c) {
		function u(e, t) {
			var n = this;
			"object" == typeof t && (delete t.refresh, delete t.render, r.extend(this, t)), this.$element = r(e), !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src"));
			var i = (this.position + "").toLowerCase().match(/\S+/g) || [];
			if (i.length < 1 && i.push("center"), 1 == i.length && i.push(i[0]), "top" != i[0] && "bottom" != i[0] && "left" != i[1] && "right" != i[1] || (i = [i[1], i[0]]), this.positionX !== c && (i[0] = this.positionX.toLowerCase()), this.positionY !== c && (i[1] = this.positionY.toLowerCase()), n.positionX = i[0], n.positionY = i[1], "left" != this.positionX && "right" != this.positionX && (isNaN(parseInt(this.positionX)) ? this.positionX = "center" : this.positionX = parseInt(this.positionX)), "top" != this.positionY && "bottom" != this.positionY && (isNaN(parseInt(this.positionY)) ? this.positionY = "center" : this.positionY = parseInt(this.positionY)), this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px"), navigator.userAgent.match(/(iPod|iPhone|iPad)/)) return this.imageSrc && this.iosFix && !this.$element.is("img") && this.$element.css({
				backgroundImage: 'url("' + this.imageSrc + '")',
				backgroundSize: "cover",
				backgroundPosition: this.position
			}), this;
			if (navigator.userAgent.match(/(Android)/)) return this.imageSrc && this.androidFix && !this.$element.is("img") && this.$element.css({
				backgroundImage: 'url("' + this.imageSrc + '")',
				backgroundSize: "cover",
				backgroundPosition: this.position
			}), this;
			this.$mirror = r("<div />").prependTo(this.mirrorContainer);
			var o = this.$element.find(">.parallax-slider"),
				s = !1;
			0 == o.length ? this.$slider = r("<img />").prependTo(this.$mirror) : (this.$slider = o.prependTo(this.$mirror), s = !0), this.$mirror.addClass("parallax-mirror").css({
				visibility: "hidden",
				zIndex: this.zIndex,
				position: "fixed",
				top: 0,
				left: 0,
				overflow: "hidden"
			}), this.$slider.addClass("parallax-slider").one("load", function () {
				n.naturalHeight && n.naturalWidth || (n.naturalHeight = this.naturalHeight || this.height || 1, n.naturalWidth = this.naturalWidth || this.width || 1), n.aspectRatio = n.naturalWidth / n.naturalHeight, u.isSetup || u.setup(), u.sliders.push(n), u.isFresh = !1, u.requestRender()
			}), s || (this.$slider[0].src = this.imageSrc), (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || 0 < o.length) && this.$slider.trigger("load")
		} ! function () {
			for (var o = 0, e = ["ms", "moz", "webkit", "o"], t = 0; t < e.length && !a.requestAnimationFrame; ++t) a.requestAnimationFrame = a[e[t] + "RequestAnimationFrame"], a.cancelAnimationFrame = a[e[t] + "CancelAnimationFrame"] || a[e[t] + "CancelRequestAnimationFrame"];
			a.requestAnimationFrame || (a.requestAnimationFrame = function (e) {
				var t = (new Date).getTime(),
					n = Math.max(0, 16 - (t - o)),
					i = a.setTimeout(function () {
						e(t + n)
					}, n);
				return o = t + n, i
			}), a.cancelAnimationFrame || (a.cancelAnimationFrame = function (e) {
				clearTimeout(e)
			})
		}(), r.extend(u.prototype, {
			speed: .2,
			bleed: 0,
			zIndex: -100,
			iosFix: !0,
			androidFix: !0,
			position: "center",
			overScrollFix: !1,
			mirrorContainer: "body",
			refresh: function () {
				this.boxWidth = this.$element.outerWidth(), this.boxHeight = this.$element.outerHeight() + 2 * this.bleed, this.boxOffsetTop = this.$element.offset().top - this.bleed, this.boxOffsetLeft = this.$element.offset().left, this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;
				var e, t = u.winHeight,
					n = u.docHeight,
					i = Math.min(this.boxOffsetTop, n - t),
					o = Math.max(this.boxOffsetTop + this.boxHeight - t, 0),
					s = this.boxHeight + (i - o) * (1 - this.speed) | 0,
					r = (this.boxOffsetTop - i) * (1 - this.speed) | 0;
				s * this.aspectRatio >= this.boxWidth ? (this.imageWidth = s * this.aspectRatio | 0, this.imageHeight = s, this.offsetBaseTop = r, e = this.imageWidth - this.boxWidth, "left" == this.positionX ? this.offsetLeft = 0 : "right" == this.positionX ? this.offsetLeft = -e : isNaN(this.positionX) ? this.offsetLeft = -e / 2 | 0 : this.offsetLeft = Math.max(this.positionX, -e)) : (this.imageWidth = this.boxWidth, this.imageHeight = this.boxWidth / this.aspectRatio | 0, this.offsetLeft = 0, e = this.imageHeight - s, "top" == this.positionY ? this.offsetBaseTop = r : "bottom" == this.positionY ? this.offsetBaseTop = r - e : isNaN(this.positionY) ? this.offsetBaseTop = r - e / 2 | 0 : this.offsetBaseTop = r + Math.max(this.positionY, -e))
			},
			render: function () {
				var e = u.scrollTop,
					t = u.scrollLeft,
					n = this.overScrollFix ? u.overScroll : 0,
					i = e + u.winHeight;
				this.boxOffsetBottom > e && this.boxOffsetTop <= i ? (this.visibility = "visible", this.mirrorTop = this.boxOffsetTop - e, this.mirrorLeft = this.boxOffsetLeft - t, this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed)) : this.visibility = "hidden", this.$mirror.css({
					transform: "translate3d(" + this.mirrorLeft + "px, " + (this.mirrorTop - n) + "px, 0px)",
					visibility: this.visibility,
					height: this.boxHeight,
					width: this.boxWidth
				}), this.$slider.css({
					transform: "translate3d(" + this.offsetLeft + "px, " + this.offsetTop + "px, 0px)",
					position: "absolute",
					height: this.imageHeight,
					width: this.imageWidth,
					maxWidth: "none"
				})
			}
		}), r.extend(u, {
			scrollTop: 0,
			scrollLeft: 0,
			winHeight: 0,
			winWidth: 0,
			docHeight: 1 << 30,
			docWidth: 1 << 30,
			sliders: [],
			isReady: !1,
			isFresh: !1,
			isBusy: !1,
			setup: function () {
				if (!this.isReady) {
					function e() {
						u.winHeight = o.height(), u.winWidth = o.width(), u.docHeight = i.height(), u.docWidth = i.width()
					}

					function t() {
						var e = o.scrollTop(),
							t = u.docHeight - u.winHeight,
							n = u.docWidth - u.winWidth;
						u.scrollTop = Math.max(0, Math.min(t, e)), u.scrollLeft = Math.max(0, Math.min(n, o.scrollLeft())), u.overScroll = Math.max(e - t, Math.min(e, 0))
					}
					var n = this,
						i = r(l),
						o = r(a);
					o.on("resize.px.parallax load.px.parallax", function () {
						e(), n.refresh(), u.isFresh = !1, u.requestRender()
					}).on("scroll.px.parallax load.px.parallax", function () {
						t(), u.requestRender()
					}), e(), t(), this.isReady = !0;
					var s = -1;
					! function e() {
						if (s == a.pageYOffset) return a.requestAnimationFrame(e), !1;
						s = a.pageYOffset, n.render(), a.requestAnimationFrame(e)
					}()
				}
			},
			configure: function (e) {
				"object" == typeof e && (delete e.refresh, delete e.render, r.extend(this.prototype, e))
			},
			refresh: function () {
				r.each(this.sliders, function () {
					this.refresh()
				}), this.isFresh = !0
			},
			render: function () {
				this.isFresh || this.refresh(), r.each(this.sliders, function () {
					this.render()
				})
			},
			requestRender: function () {
				this.render(), this.isBusy = !1
			},
			destroy: function (e) {
				var t, n = r(e).data("px.parallax");
				for (n.$mirror.remove(), t = 0; t < this.sliders.length; t += 1) this.sliders[t] == n && this.sliders.splice(t, 1);
				r(e).data("px.parallax", !1), 0 === this.sliders.length && (r(a).off("scroll.px.parallax resize.px.parallax load.px.parallax"), this.isReady = !1, u.isSetup = !1)
			}
		});
		var e = r.fn.parallax;
		r.fn.parallax = function (n) {
			return this.each(function () {
				var e = r(this),
					t = "object" == typeof n && n;
				this == a || this == l || e.is("body") ? u.configure(t) : e.data("px.parallax") ? "object" == typeof n && r.extend(e.data("px.parallax"), t) : (t = r.extend({}, e.data(), t), e.data("px.parallax", new u(this, t))), "string" == typeof n && ("destroy" == n ? u.destroy(this) : u[n]())
			})
		}, r.fn.parallax.Constructor = u, r.fn.parallax.noConflict = function () {
			return r.fn.parallax = e, this
		}, r(function () {
			r('[data-parallax="scroll"]').parallax()
		})
	}(jQuery, window, document),
	function (l, n, o, a) {
		function c(e, t) {
			this.settings = null, this.options = l.extend({}, c.Defaults, t), this.$element = l(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
				time: null,
				target: null,
				pointer: null,
				stage: {
					start: null,
					current: null
				},
				direction: null
			}, this._states = {
				current: {},
				tags: {
					initializing: ["busy"],
					animating: ["busy"],
					dragging: ["interacting"]
				}
			}, l.each(["onResize", "onThrottledResize"], l.proxy(function (e, t) {
				this._handlers[t] = l.proxy(this[t], this)
			}, this)), l.each(c.Plugins, l.proxy(function (e, t) {
				this._plugins[e.charAt(0).toLowerCase() + e.slice(1)] = new t(this)
			}, this)), l.each(c.Workers, l.proxy(function (e, t) {
				this._pipe.push({
					filter: t.filter,
					run: l.proxy(t.run, this)
				})
			}, this)), this.setup(), this.initialize()
		}
		c.Defaults = {
			items: 3,
			loop: !1,
			center: !1,
			rewind: !1,
			checkVisibility: !0,
			mouseDrag: !0,
			touchDrag: !0,
			pullDrag: !0,
			freeDrag: !1,
			margin: 0,
			stagePadding: 0,
			merge: !1,
			mergeFit: !0,
			autoWidth: !1,
			startPosition: 0,
			rtl: !1,
			smartSpeed: 250,
			fluidSpeed: !1,
			dragEndSpeed: !1,
			responsive: {},
			responsiveRefreshRate: 200,
			responsiveBaseElement: n,
			fallbackEasing: "swing",
			slideTransition: "",
			info: !1,
			nestedItemSelector: !1,
			itemElement: "div",
			stageElement: "div",
			refreshClass: "owl-refresh",
			loadedClass: "owl-loaded",
			loadingClass: "owl-loading",
			rtlClass: "owl-rtl",
			responsiveClass: "owl-responsive",
			dragClass: "owl-drag",
			itemClass: "owl-item",
			stageClass: "owl-stage",
			stageOuterClass: "owl-stage-outer",
			grabClass: "owl-grab"
		}, c.Width = {
			Default: "default",
			Inner: "inner",
			Outer: "outer"
		}, c.Type = {
			Event: "event",
			State: "state"
		}, c.Plugins = {}, c.Workers = [{
			filter: ["width", "settings"],
			run: function () {
				this._width = this.$element.width()
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function (e) {
				e.current = this._items && this._items[this.relative(this._current)]
			}
		}, {
			filter: ["items", "settings"],
			run: function () {
				this.$stage.children(".cloned").remove()
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function (e) {
				var t = this.settings.margin || "",
					n = !this.settings.autoWidth,
					i = this.settings.rtl,
					o = {
						width: "auto",
						"margin-left": i ? t : "",
						"margin-right": i ? "" : t
					};
				!n && this.$stage.children().css(o), e.css = o
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function (e) {
				var t = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
					n = null,
					i = this._items.length,
					o = !this.settings.autoWidth,
					s = [];
				for (e.items = {
					merge: !1,
					width: t
				}; i--;) n = this._mergers[i], n = this.settings.mergeFit && Math.min(n, this.settings.items) || n, e.items.merge = 1 < n || e.items.merge, s[i] = o ? t * n : this._items[i].width();
				this._widths = s
			}
		}, {
			filter: ["items", "settings"],
			run: function () {
				var e = [],
					t = this._items,
					n = this.settings,
					i = Math.max(2 * n.items, 4),
					o = 2 * Math.ceil(t.length / 2),
					s = n.loop && t.length ? n.rewind ? i : Math.max(i, o) : 0,
					r = "",
					a = "";
				for (s /= 2; 0 < s;) e.push(this.normalize(e.length / 2, !0)), r += t[e[e.length - 1]][0].outerHTML, e.push(this.normalize(t.length - 1 - (e.length - 1) / 2, !0)), a = t[e[e.length - 1]][0].outerHTML + a, s -= 1;
				this._clones = e, l(r).addClass("cloned").appendTo(this.$stage), l(a).addClass("cloned").prependTo(this.$stage)
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function () {
				for (var e = this.settings.rtl ? 1 : -1, t = this._clones.length + this._items.length, n = -1, i = 0, o = 0, s = []; ++n < t;) i = s[n - 1] || 0, o = this._widths[this.relative(n)] + this.settings.margin, s.push(i + o * e);
				this._coordinates = s
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function () {
				var e = this.settings.stagePadding,
					t = this._coordinates,
					n = {
						width: Math.ceil(Math.abs(t[t.length - 1])) + 2 * e,
						"padding-left": e || "",
						"padding-right": e || ""
					};
				this.$stage.css(n)
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function (e) {
				var t = this._coordinates.length,
					n = !this.settings.autoWidth,
					i = this.$stage.children();
				if (n && e.items.merge)
					for (; t--;) e.css.width = this._widths[this.relative(t)], i.eq(t).css(e.css);
				else n && (e.css.width = e.items.width, i.css(e.css))
			}
		}, {
			filter: ["items"],
			run: function () {
				this._coordinates.length < 1 && this.$stage.removeAttr("style")
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function (e) {
				e.current = e.current ? this.$stage.children().index(e.current) : 0, e.current = Math.max(this.minimum(), Math.min(this.maximum(), e.current)), this.reset(e.current)
			}
		}, {
			filter: ["position"],
			run: function () {
				this.animate(this.coordinates(this._current))
			}
		}, {
			filter: ["width", "position", "items", "settings"],
			run: function () {
				var e, t, n, i, o = this.settings.rtl ? 1 : -1,
					s = 2 * this.settings.stagePadding,
					r = this.coordinates(this.current()) + s,
					a = r + this.width() * o,
					l = [];
				for (n = 0, i = this._coordinates.length; n < i; n++) e = this._coordinates[n - 1] || 0, t = Math.abs(this._coordinates[n]) + s * o, (this.op(e, "<=", r) && this.op(e, ">", a) || this.op(t, "<", r) && this.op(t, ">", a)) && l.push(n);
				this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
			}
		}], c.prototype.initializeStage = function () {
			this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = l("<" + this.settings.stageElement + ">", {
				class: this.settings.stageClass
			}).wrap(l("<div/>", {
				class: this.settings.stageOuterClass
			})), this.$element.append(this.$stage.parent()))
		}, c.prototype.initializeItems = function () {
			var e = this.$element.find(".owl-item");
			if (e.length) return this._items = e.get().map(function (e) {
				return l(e)
			}), this._mergers = this._items.map(function () {
				return 1
			}), void this.refresh();
			this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
		}, c.prototype.initialize = function () {
			var e, t, n;
			this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading") && (e = this.$element.find("img"), t = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : a, n = this.$element.children(t).width(), e.length && n <= 0 && this.preloadAutoWidthImages(e)), this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
		}, c.prototype.isVisible = function () {
			return !this.settings.checkVisibility || this.$element.is(":visible")
		}, c.prototype.setup = function () {
			var t = this.viewport(),
				e = this.options.responsive,
				n = -1,
				i = null;
			e ? (l.each(e, function (e) {
				e <= t && n < e && (n = Number(e))
			}), "function" == typeof (i = l.extend({}, this.options, e[n])).stagePadding && (i.stagePadding = i.stagePadding()), delete i.responsive, i.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : i = l.extend({}, this.options), this.trigger("change", {
				property: {
					name: "settings",
					value: i
				}
			}), this._breakpoint = n, this.settings = i, this.invalidate("settings"), this.trigger("changed", {
				property: {
					name: "settings",
					value: this.settings
				}
			})
		}, c.prototype.optionsLogic = function () {
			this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
		}, c.prototype.prepare = function (e) {
			var t = this.trigger("prepare", {
				content: e
			});
			return t.data || (t.data = l("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
				content: t.data
			}), t.data
		}, c.prototype.update = function () {
			for (var e = 0, t = this._pipe.length, n = l.proxy(function (e) {
				return this[e]
			}, this._invalidated), i = {}; e < t;)(this._invalidated.all || 0 < l.grep(this._pipe[e].filter, n).length) && this._pipe[e].run(i), e++;
			this._invalidated = {}, !this.is("valid") && this.enter("valid")
		}, c.prototype.width = function (e) {
			switch (e = e || c.Width.Default) {
				case c.Width.Inner:
				case c.Width.Outer:
					return this._width;
				default:
					return this._width - 2 * this.settings.stagePadding + this.settings.margin
			}
		}, c.prototype.refresh = function () {
			this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
		}, c.prototype.onThrottledResize = function () {
			n.clearTimeout(this.resizeTimer), this.resizeTimer = n.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
		}, c.prototype.onResize = function () {
			return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
		}, c.prototype.registerEventHandlers = function () {
			l.support.transition && this.$stage.on(l.support.transition.end + ".owl.core", l.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(n, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", l.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
				return !1
			})), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", l.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", l.proxy(this.onDragEnd, this)))
		}, c.prototype.onDragStart = function (e) {
			var t = null;
			3 !== e.which && (t = l.support.transform ? {
				x: (t = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === t.length ? 12 : 4],
				y: t[16 === t.length ? 13 : 5]
			} : (t = this.$stage.position(), {
				x: this.settings.rtl ? t.left + this.$stage.width() - this.width() + this.settings.margin : t.left,
				y: t.top
			}), this.is("animating") && (l.support.transform ? this.animate(t.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = l(e.target), this._drag.stage.start = t, this._drag.stage.current = t, this._drag.pointer = this.pointer(e), l(o).on("mouseup.owl.core touchend.owl.core", l.proxy(this.onDragEnd, this)), l(o).one("mousemove.owl.core touchmove.owl.core", l.proxy(function (e) {
				var t = this.difference(this._drag.pointer, this.pointer(e));
				l(o).on("mousemove.owl.core touchmove.owl.core", l.proxy(this.onDragMove, this)), Math.abs(t.x) < Math.abs(t.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
			}, this)))
		}, c.prototype.onDragMove = function (e) {
			var t = null,
				n = null,
				i = null,
				o = this.difference(this._drag.pointer, this.pointer(e)),
				s = this.difference(this._drag.stage.start, o);
			this.is("dragging") && (e.preventDefault(), this.settings.loop ? (t = this.coordinates(this.minimum()), n = this.coordinates(this.maximum() + 1) - t, s.x = ((s.x - t) % n + n) % n + t) : (t = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), n = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), i = this.settings.pullDrag ? -1 * o.x / 5 : 0, s.x = Math.max(Math.min(s.x, t + i), n + i)), this._drag.stage.current = s, this.animate(s.x))
		}, c.prototype.onDragEnd = function (e) {
			var t = this.difference(this._drag.pointer, this.pointer(e)),
				n = this._drag.stage.current,
				i = 0 < t.x ^ this.settings.rtl ? "left" : "right";
			l(o).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== t.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(n.x, 0 !== t.x ? i : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = i, (3 < Math.abs(t.x) || 300 < (new Date).getTime() - this._drag.time) && this._drag.target.one("click.owl.core", function () {
				return !1
			})), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
		}, c.prototype.closest = function (n, i) {
			var o = -1,
				s = this.width(),
				r = this.coordinates();
			return this.settings.freeDrag || l.each(r, l.proxy(function (e, t) {
				return "left" === i && t - 30 < n && n < t + 30 ? o = e : "right" === i && t - s - 30 < n && n < t - s + 30 ? o = e + 1 : this.op(n, "<", t) && this.op(n, ">", r[e + 1] !== a ? r[e + 1] : t - s) && (o = "left" === i ? e + 1 : e), -1 === o
			}, this)), this.settings.loop || (this.op(n, ">", r[this.minimum()]) ? o = n = this.minimum() : this.op(n, "<", r[this.maximum()]) && (o = n = this.maximum())), o
		}, c.prototype.animate = function (e) {
			var t = 0 < this.speed();
			this.is("animating") && this.onTransitionEnd(), t && (this.enter("animating"), this.trigger("translate")), l.support.transform3d && l.support.transition ? this.$stage.css({
				transform: "translate3d(" + e + "px,0px,0px)",
				transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
			}) : t ? this.$stage.animate({
				left: e + "px"
			}, this.speed(), this.settings.fallbackEasing, l.proxy(this.onTransitionEnd, this)) : this.$stage.css({
				left: e + "px"
			})
		}, c.prototype.is = function (e) {
			return this._states.current[e] && 0 < this._states.current[e]
		}, c.prototype.current = function (e) {
			if (e === a) return this._current;
			if (0 === this._items.length) return a;
			if (e = this.normalize(e), this._current !== e) {
				var t = this.trigger("change", {
					property: {
						name: "position",
						value: e
					}
				});
				t.data !== a && (e = this.normalize(t.data)), this._current = e, this.invalidate("position"), this.trigger("changed", {
					property: {
						name: "position",
						value: this._current
					}
				})
			}
			return this._current
		}, c.prototype.invalidate = function (e) {
			return "string" === l.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), l.map(this._invalidated, function (e, t) {
				return t
			})
		}, c.prototype.reset = function (e) {
			(e = this.normalize(e)) !== a && (this._speed = 0, this._current = e, this.suppress(["translate", "translated"]), this.animate(this.coordinates(e)), this.release(["translate", "translated"]))
		}, c.prototype.normalize = function (e, t) {
			var n = this._items.length,
				i = t ? 0 : this._clones.length;
			return !this.isNumeric(e) || n < 1 ? e = a : (e < 0 || n + i <= e) && (e = ((e - i / 2) % n + n) % n + i / 2), e
		}, c.prototype.relative = function (e) {
			return e -= this._clones.length / 2, this.normalize(e, !0)
		}, c.prototype.maximum = function (e) {
			var t, n, i, o = this.settings,
				s = this._coordinates.length;
			if (o.loop) s = this._clones.length / 2 + this._items.length - 1;
			else if (o.autoWidth || o.merge) {
				if (t = this._items.length)
					for (n = this._items[--t].width(), i = this.$element.width(); t-- && !((n += this._items[t].width() + this.settings.margin) > i););
				s = t + 1
			} else s = o.center ? this._items.length - 1 : this._items.length - o.items;
			return e && (s -= this._clones.length / 2), Math.max(s, 0)
		}, c.prototype.minimum = function (e) {
			return e ? 0 : this._clones.length / 2
		}, c.prototype.items = function (e) {
			return e === a ? this._items.slice() : (e = this.normalize(e, !0), this._items[e])
		}, c.prototype.mergers = function (e) {
			return e === a ? this._mergers.slice() : (e = this.normalize(e, !0), this._mergers[e])
		}, c.prototype.clones = function (n) {
			function i(e) {
				return e % 2 == 0 ? o + e / 2 : t - (e + 1) / 2
			}
			var t = this._clones.length / 2,
				o = t + this._items.length;
			return n === a ? l.map(this._clones, function (e, t) {
				return i(t)
			}) : l.map(this._clones, function (e, t) {
				return e === n ? i(t) : null
			})
		}, c.prototype.speed = function (e) {
			return e !== a && (this._speed = e), this._speed
		}, c.prototype.coordinates = function (e) {
			var t, n = 1,
				i = e - 1;
			return e === a ? l.map(this._coordinates, l.proxy(function (e, t) {
				return this.coordinates(t)
			}, this)) : (this.settings.center ? (this.settings.rtl && (n = -1, i = e + 1), t = this._coordinates[e], t += (this.width() - t + (this._coordinates[i] || 0)) / 2 * n) : t = this._coordinates[i] || 0, t = Math.ceil(t))
		}, c.prototype.duration = function (e, t, n) {
			return 0 === n ? 0 : Math.min(Math.max(Math.abs(t - e), 1), 6) * Math.abs(n || this.settings.smartSpeed)
		}, c.prototype.to = function (e, t) {
			var n = this.current(),
				i = null,
				o = e - this.relative(n),
				s = (0 < o) - (o < 0),
				r = this._items.length,
				a = this.minimum(),
				l = this.maximum();
			this.settings.loop ? (!this.settings.rewind && Math.abs(o) > r / 2 && (o += -1 * s * r), (i = (((e = n + o) - a) % r + r) % r + a) !== e && i - o <= l && 0 < i - o && (n = i - o, e = i, this.reset(n))) : e = this.settings.rewind ? (e % (l += 1) + l) % l : Math.max(a, Math.min(l, e)), this.speed(this.duration(n, e, t)), this.current(e), this.isVisible() && this.update()
		}, c.prototype.next = function (e) {
			e = e || !1, this.to(this.relative(this.current()) + 1, e)
		}, c.prototype.prev = function (e) {
			e = e || !1, this.to(this.relative(this.current()) - 1, e)
		}, c.prototype.onTransitionEnd = function (e) {
			if (e !== a && (e.stopPropagation(), (e.target || e.srcElement || e.originalTarget) !== this.$stage.get(0))) return !1;
			this.leave("animating"), this.trigger("translated")
		}, c.prototype.viewport = function () {
			var e;
			return this.options.responsiveBaseElement !== n ? e = l(this.options.responsiveBaseElement).width() : n.innerWidth ? e = n.innerWidth : o.documentElement && o.documentElement.clientWidth ? e = o.documentElement.clientWidth : console.warn("Can not detect viewport width."), e
		}, c.prototype.replace = function (e) {
			this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : l(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function () {
				return 1 === this.nodeType
			}).each(l.proxy(function (e, t) {
				t = this.prepare(t), this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
			}, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
		}, c.prototype.add = function (e, t) {
			var n = this.relative(this._current);
			t = t === a ? this._items.length : this.normalize(t, !0), e = e instanceof jQuery ? e : l(e), this.trigger("add", {
				content: e,
				position: t
			}), e = this.prepare(e), 0 === this._items.length || t === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[t - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[t].before(e), this._items.splice(t, 0, e), this._mergers.splice(t, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[n] && this.reset(this._items[n].index()), this.invalidate("items"), this.trigger("added", {
				content: e,
				position: t
			})
		}, c.prototype.remove = function (e) {
			(e = this.normalize(e, !0)) !== a && (this.trigger("remove", {
				content: this._items[e],
				position: e
			}), this._items[e].remove(), this._items.splice(e, 1), this._mergers.splice(e, 1), this.invalidate("items"), this.trigger("removed", {
				content: null,
				position: e
			}))
		}, c.prototype.preloadAutoWidthImages = function (e) {
			e.each(l.proxy(function (e, t) {
				this.enter("pre-loading"), t = l(t), l(new Image).one("load", l.proxy(function (e) {
					t.attr("src", e.target.src), t.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
				}, this)).attr("src", t.attr("src") || t.attr("data-src") || t.attr("data-src-retina"))
			}, this))
		}, c.prototype.destroy = function () {
			for (var e in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), l(o).off(".owl.core"), !1 !== this.settings.responsive && (n.clearTimeout(this.resizeTimer), this.off(n, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[e].destroy();
			this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
		}, c.prototype.op = function (e, t, n) {
			var i = this.settings.rtl;
			switch (t) {
				case "<":
					return i ? n < e : e < n;
				case ">":
					return i ? e < n : n < e;
				case ">=":
					return i ? e <= n : n <= e;
				case "<=":
					return i ? n <= e : e <= n
			}
		}, c.prototype.on = function (e, t, n, i) {
			e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent && e.attachEvent("on" + t, n)
		}, c.prototype.off = function (e, t, n, i) {
			e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent && e.detachEvent("on" + t, n)
		}, c.prototype.trigger = function (e, t, n, i, o) {
			var s = {
				item: {
					count: this._items.length,
					index: this.current()
				}
			},
				r = l.camelCase(l.grep(["on", e, n], function (e) {
					return e
				}).join("-").toLowerCase()),
				a = l.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), l.extend({
					relatedTarget: this
				}, s, t));
			return this._supress[e] || (l.each(this._plugins, function (e, t) {
				t.onTrigger && t.onTrigger(a)
			}), this.register({
				type: c.Type.Event,
				name: e
			}), this.$element.trigger(a), this.settings && "function" == typeof this.settings[r] && this.settings[r].call(this, a)), a
		}, c.prototype.enter = function (e) {
			l.each([e].concat(this._states.tags[e] || []), l.proxy(function (e, t) {
				this._states.current[t] === a && (this._states.current[t] = 0), this._states.current[t]++
			}, this))
		}, c.prototype.leave = function (e) {
			l.each([e].concat(this._states.tags[e] || []), l.proxy(function (e, t) {
				this._states.current[t]--
			}, this))
		}, c.prototype.register = function (n) {
			if (n.type === c.Type.Event) {
				if (l.event.special[n.name] || (l.event.special[n.name] = {}), !l.event.special[n.name].owl) {
					var t = l.event.special[n.name]._default;
					l.event.special[n.name]._default = function (e) {
						return !t || !t.apply || e.namespace && -1 !== e.namespace.indexOf("owl") ? e.namespace && -1 < e.namespace.indexOf("owl") : t.apply(this, arguments)
					}, l.event.special[n.name].owl = !0
				}
			} else n.type === c.Type.State && (this._states.tags[n.name] ? this._states.tags[n.name] = this._states.tags[n.name].concat(n.tags) : this._states.tags[n.name] = n.tags, this._states.tags[n.name] = l.grep(this._states.tags[n.name], l.proxy(function (e, t) {
				return l.inArray(e, this._states.tags[n.name]) === t
			}, this)))
		}, c.prototype.suppress = function (e) {
			l.each(e, l.proxy(function (e, t) {
				this._supress[t] = !0
			}, this))
		}, c.prototype.release = function (e) {
			l.each(e, l.proxy(function (e, t) {
				delete this._supress[t]
			}, this))
		}, c.prototype.pointer = function (e) {
			var t = {
				x: null,
				y: null
			};
			return (e = (e = e.originalEvent || e || n.event).touches && e.touches.length ? e.touches[0] : e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e).pageX ? (t.x = e.pageX, t.y = e.pageY) : (t.x = e.clientX, t.y = e.clientY), t
		}, c.prototype.isNumeric = function (e) {
			return !isNaN(parseFloat(e))
		}, c.prototype.difference = function (e, t) {
			return {
				x: e.x - t.x,
				y: e.y - t.y
			}
		}, l.fn.owlCarousel = function (t) {
			var i = Array.prototype.slice.call(arguments, 1);
			return this.each(function () {
				var e = l(this),
					n = e.data("owl.carousel");
				n || (n = new c(this, "object" == typeof t && t), e.data("owl.carousel", n), l.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (e, t) {
					n.register({
						type: c.Type.Event,
						name: t
					}), n.$element.on(t + ".owl.carousel.core", l.proxy(function (e) {
						e.namespace && e.relatedTarget !== this && (this.suppress([t]), n[t].apply(this, [].slice.call(arguments, 1)), this.release([t]))
					}, n))
				})), "string" == typeof t && "_" !== t.charAt(0) && n[t].apply(n, i)
			})
		}, l.fn.owlCarousel.Constructor = c
	}(window.Zepto || window.jQuery, window, document),
	function (t, n, e, i) {
		var o = function (e) {
			this._core = e, this._interval = null, this._visible = null, this._handlers = {
				"initialized.owl.carousel": t.proxy(function (e) {
					e.namespace && this._core.settings.autoRefresh && this.watch()
				}, this)
			}, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
		};
		o.Defaults = {
			autoRefresh: !0,
			autoRefreshInterval: 500
		}, o.prototype.watch = function () {
			this._interval || (this._visible = this._core.isVisible(), this._interval = n.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
		}, o.prototype.refresh = function () {
			this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
		}, o.prototype.destroy = function () {
			var e, t;
			for (e in n.clearInterval(this._interval), this._handlers) this._core.$element.off(e, this._handlers[e]);
			for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
		}, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = o
	}(window.Zepto || window.jQuery, window, document),
	function (a, s, e, t) {
		var n = function (e) {
			this._core = e, this._loaded = [], this._handlers = {
				"initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (e) {
					if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) {
						var t = this._core.settings,
							n = t.center && Math.ceil(t.items / 2) || t.items,
							i = t.center && -1 * n || 0,
							o = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + i,
							s = this._core.clones().length,
							r = a.proxy(function (e, t) {
								this.load(t)
							}, this);
						for (0 < t.lazyLoadEager && (n += t.lazyLoadEager, t.loop && (o -= t.lazyLoadEager, n++)); i++ < n;) this.load(s / 2 + this._core.relative(o)), s && a.each(this._core.clones(this._core.relative(o)), r), o++
					}
				}, this)
			}, this._core.options = a.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
		};
		n.Defaults = {
			lazyLoad: !1,
			lazyLoadEager: 0
		}, n.prototype.load = function (e) {
			var t = this._core.$stage.children().eq(e),
				n = t && t.find(".owl-lazy");
			!n || -1 < a.inArray(t.get(0), this._loaded) || (n.each(a.proxy(function (e, t) {
				var n, i = a(t),
					o = 1 < s.devicePixelRatio && i.attr("data-src-retina") || i.attr("data-src") || i.attr("data-srcset");
				this._core.trigger("load", {
					element: i,
					url: o
				}, "lazy"), i.is("img") ? i.one("load.owl.lazy", a.proxy(function () {
					i.css("opacity", 1), this._core.trigger("loaded", {
						element: i,
						url: o
					}, "lazy")
				}, this)).attr("src", o) : i.is("source") ? i.one("load.owl.lazy", a.proxy(function () {
					this._core.trigger("loaded", {
						element: i,
						url: o
					}, "lazy")
				}, this)).attr("srcset", o) : ((n = new Image).onload = a.proxy(function () {
					i.css({
						"background-image": 'url("' + o + '")',
						opacity: "1"
					}), this._core.trigger("loaded", {
						element: i,
						url: o
					}, "lazy")
				}, this), n.src = o)
			}, this)), this._loaded.push(t.get(0)))
		}, n.prototype.destroy = function () {
			var e, t;
			for (e in this.handlers) this._core.$element.off(e, this.handlers[e]);
			for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
		}, a.fn.owlCarousel.Constructor.Plugins.Lazy = n
	}(window.Zepto || window.jQuery, window, document),
	function (r, n, e, t) {
		var i = function (e) {
			this._core = e, this._previousHeight = null, this._handlers = {
				"initialized.owl.carousel refreshed.owl.carousel": r.proxy(function (e) {
					e.namespace && this._core.settings.autoHeight && this.update()
				}, this),
				"changed.owl.carousel": r.proxy(function (e) {
					e.namespace && this._core.settings.autoHeight && "position" === e.property.name && this.update()
				}, this),
				"loaded.owl.lazy": r.proxy(function (e) {
					e.namespace && this._core.settings.autoHeight && e.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
				}, this)
			}, this._core.options = r.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
			var t = this;
			r(n).on("load", function () {
				t._core.settings.autoHeight && t.update()
			}), r(n).resize(function () {
				t._core.settings.autoHeight && (null != t._intervalId && clearTimeout(t._intervalId), t._intervalId = setTimeout(function () {
					t.update()
				}, 250))
			})
		};
		i.Defaults = {
			autoHeight: !1,
			autoHeightClass: "owl-height"
		}, i.prototype.update = function () {
			var e = this._core._current,
				t = e + this._core.settings.items,
				n = this._core.settings.lazyLoad,
				i = this._core.$stage.children().toArray().slice(e, t),
				o = [],
				s = 0;
			r.each(i, function (e, t) {
				o.push(r(t).height())
			}), (s = Math.max.apply(null, o)) <= 1 && n && this._previousHeight && (s = this._previousHeight), this._previousHeight = s, this._core.$stage.parent().height(s).addClass(this._core.settings.autoHeightClass)
		}, i.prototype.destroy = function () {
			var e, t;
			for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
			for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
		}, r.fn.owlCarousel.Constructor.Plugins.AutoHeight = i
	}(window.Zepto || window.jQuery, window, document),
	function (c, e, t, n) {
		var i = function (e) {
			this._core = e, this._videos = {}, this._playing = null, this._handlers = {
				"initialized.owl.carousel": c.proxy(function (e) {
					e.namespace && this._core.register({
						type: "state",
						name: "playing",
						tags: ["interacting"]
					})
				}, this),
				"resize.owl.carousel": c.proxy(function (e) {
					e.namespace && this._core.settings.video && this.isInFullScreen() && e.preventDefault()
				}, this),
				"refreshed.owl.carousel": c.proxy(function (e) {
					e.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
				}, this),
				"changed.owl.carousel": c.proxy(function (e) {
					e.namespace && "position" === e.property.name && this._playing && this.stop()
				}, this),
				"prepared.owl.carousel": c.proxy(function (e) {
					if (e.namespace) {
						var t = c(e.content).find(".owl-video");
						t.length && (t.css("display", "none"), this.fetch(t, c(e.content)))
					}
				}, this)
			}, this._core.options = c.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", c.proxy(function (e) {
				this.play(e)
			}, this))
		};
		i.Defaults = {
			video: !1,
			videoHeight: !1,
			videoWidth: !1
		}, i.prototype.fetch = function (e, t) {
			var n = e.attr("data-vimeo-id") ? "vimeo" : e.attr("data-vzaar-id") ? "vzaar" : "youtube",
				i = e.attr("data-vimeo-id") || e.attr("data-youtube-id") || e.attr("data-vzaar-id"),
				o = e.attr("data-width") || this._core.settings.videoWidth,
				s = e.attr("data-height") || this._core.settings.videoHeight,
				r = e.attr("href");
			if (!r) throw new Error("Missing video URL.");
			if (-1 < (i = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")) n = "youtube";
			else if (-1 < i[3].indexOf("vimeo")) n = "vimeo";
			else {
				if (!(-1 < i[3].indexOf("vzaar"))) throw new Error("Video URL not supported.");
				n = "vzaar"
			}
			i = i[6], this._videos[r] = {
				type: n,
				id: i,
				width: o,
				height: s
			}, t.attr("data-video", r), this.thumbnail(e, this._videos[r])
		}, i.prototype.thumbnail = function (t, e) {
			function n(e) {
				i = l.lazyLoad ? c("<div/>", {
					class: "owl-video-tn " + a,
					srcType: e
				}) : c("<div/>", {
					class: "owl-video-tn",
					style: "opacity:1;background-image:url(" + e + ")"
				}), t.after(i), t.after('<div class="owl-video-play-icon"></div>')
			}
			var i, o = e.width && e.height ? "width:" + e.width + "px;height:" + e.height + "px;" : "",
				s = t.find("img"),
				r = "src",
				a = "",
				l = this._core.settings;
			if (t.wrap(c("<div/>", {
				class: "owl-video-wrapper",
				style: o
			})), this._core.settings.lazyLoad && (r = "data-src", a = "owl-lazy"), s.length) return n(s.attr(r)), s.remove(), !1;
			"youtube" === e.type ? n("//img.youtube.com/vi/" + e.id + "/hqdefault.jpg") : "vimeo" === e.type ? c.ajax({
				type: "GET",
				url: "//vimeo.com/api/v2/video/" + e.id + ".json",
				jsonp: "callback",
				dataType: "jsonp",
				success: function (e) {
					n(e[0].thumbnail_large)
				}
			}) : "vzaar" === e.type && c.ajax({
				type: "GET",
				url: "//vzaar.com/api/videos/" + e.id + ".json",
				jsonp: "callback",
				dataType: "jsonp",
				success: function (e) {
					n(e.framegrab_url)
				}
			})
		}, i.prototype.stop = function () {
			this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
		}, i.prototype.play = function (e) {
			var t, n = c(e.target).closest("." + this._core.settings.itemClass),
				i = this._videos[n.attr("data-video")],
				o = i.width || "100%",
				s = i.height || this._core.$stage.height();
			this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), n = this._core.items(this._core.relative(n.index())), this._core.reset(n.index()), (t = c('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", s), t.attr("width", o), "youtube" === i.type ? t.attr("src", "//www.youtube.com/embed/" + i.id + "?autoplay=1&rel=0&v=" + i.id) : "vimeo" === i.type ? t.attr("src", "//player.vimeo.com/video/" + i.id + "?autoplay=1") : "vzaar" === i.type && t.attr("src", "//view.vzaar.com/" + i.id + "/player?autoplay=true"), c(t).wrap('<div class="owl-video-frame" />').insertAfter(n.find(".owl-video")), this._playing = n.addClass("owl-video-playing"))
		}, i.prototype.isInFullScreen = function () {
			var e = t.fullscreenElement || t.mozFullScreenElement || t.webkitFullscreenElement;
			return e && c(e).parent().hasClass("owl-video-frame")
		}, i.prototype.destroy = function () {
			var e, t;
			for (e in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(e, this._handlers[e]);
			for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
		}, c.fn.owlCarousel.Constructor.Plugins.Video = i
	}(window.Zepto || window.jQuery, window, document),
	function (r, e, t, n) {
		var i = function (e) {
			this.core = e, this.core.options = r.extend({}, i.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
				"change.owl.carousel": r.proxy(function (e) {
					e.namespace && "position" == e.property.name && (this.previous = this.core.current(), this.next = e.property.value)
				}, this),
				"drag.owl.carousel dragged.owl.carousel translated.owl.carousel": r.proxy(function (e) {
					e.namespace && (this.swapping = "translated" == e.type)
				}, this),
				"translate.owl.carousel": r.proxy(function (e) {
					e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
				}, this)
			}, this.core.$element.on(this.handlers)
		};
		i.Defaults = {
			animateOut: !1,
			animateIn: !1
		}, i.prototype.swap = function () {
			if (1 === this.core.settings.items && r.support.animation && r.support.transition) {
				this.core.speed(0);
				var e, t = r.proxy(this.clear, this),
					n = this.core.$stage.children().eq(this.previous),
					i = this.core.$stage.children().eq(this.next),
					o = this.core.settings.animateIn,
					s = this.core.settings.animateOut;
				this.core.current() !== this.previous && (s && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(r.support.animation.end, t).css({
					left: e + "px"
				}).addClass("animated owl-animated-out").addClass(s)), o && i.one(r.support.animation.end, t).addClass("animated owl-animated-in").addClass(o))
			}
		}, i.prototype.clear = function (e) {
			r(e.target).css({
				left: ""
			}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
		}, i.prototype.destroy = function () {
			var e, t;
			for (e in this.handlers) this.core.$element.off(e, this.handlers[e]);
			for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
		}, r.fn.owlCarousel.Constructor.Plugins.Animate = i
	}(window.Zepto || window.jQuery, window, document),
	function (i, o, t, e) {
		var n = function (e) {
			this._core = e, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
				"changed.owl.carousel": i.proxy(function (e) {
					e.namespace && "settings" === e.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : e.namespace && "position" === e.property.name && this._paused && (this._time = 0)
				}, this),
				"initialized.owl.carousel": i.proxy(function (e) {
					e.namespace && this._core.settings.autoplay && this.play()
				}, this),
				"play.owl.autoplay": i.proxy(function (e, t, n) {
					e.namespace && this.play(t, n)
				}, this),
				"stop.owl.autoplay": i.proxy(function (e) {
					e.namespace && this.stop()
				}, this),
				"mouseover.owl.autoplay": i.proxy(function () {
					this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
				}, this),
				"mouseleave.owl.autoplay": i.proxy(function () {
					this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
				}, this),
				"touchstart.owl.core": i.proxy(function () {
					this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
				}, this),
				"touchend.owl.core": i.proxy(function () {
					this._core.settings.autoplayHoverPause && this.play()
				}, this)
			}, this._core.$element.on(this._handlers), this._core.options = i.extend({}, n.Defaults, this._core.options)
		};
		n.Defaults = {
			autoplay: !1,
			autoplayTimeout: 5e3,
			autoplayHoverPause: !1,
			autoplaySpeed: !1
		}, n.prototype._next = function (e) {
			this._call = o.setTimeout(i.proxy(this._next, this, e), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || t.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
		}, n.prototype.read = function () {
			return (new Date).getTime() - this._time
		}, n.prototype.play = function (e, t) {
			var n;
			this._core.is("rotating") || this._core.enter("rotating"), e = e || this._core.settings.autoplayTimeout, n = Math.min(this._time % (this._timeout || e), e), this._paused ? (this._time = this.read(), this._paused = !1) : o.clearTimeout(this._call), this._time += this.read() % e - n, this._timeout = e, this._call = o.setTimeout(i.proxy(this._next, this, t), e - n)
		}, n.prototype.stop = function () {
			this._core.is("rotating") && (this._time = 0, this._paused = !0, o.clearTimeout(this._call), this._core.leave("rotating"))
		}, n.prototype.pause = function () {
			this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, o.clearTimeout(this._call))
		}, n.prototype.destroy = function () {
			var e, t;
			for (e in this.stop(), this._handlers) this._core.$element.off(e, this._handlers[e]);
			for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
		}, i.fn.owlCarousel.Constructor.Plugins.autoplay = n
	}(window.Zepto || window.jQuery, window, document),
	function (s, e, t, n) {
		"use strict";
		var i = function (e) {
			this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
				next: this._core.next,
				prev: this._core.prev,
				to: this._core.to
			}, this._handlers = {
				"prepared.owl.carousel": s.proxy(function (e) {
					e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + s(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
				}, this),
				"added.owl.carousel": s.proxy(function (e) {
					e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 0, this._templates.pop())
				}, this),
				"remove.owl.carousel": s.proxy(function (e) {
					e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 1)
				}, this),
				"changed.owl.carousel": s.proxy(function (e) {
					e.namespace && "position" == e.property.name && this.draw()
				}, this),
				"initialized.owl.carousel": s.proxy(function (e) {
					e.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
				}, this),
				"refreshed.owl.carousel": s.proxy(function (e) {
					e.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
				}, this)
			}, this._core.options = s.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers)
		};
		i.Defaults = {
			nav: !1,
			navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
			navSpeed: !1,
			navElement: 'button type="button" role="presentation"',
			navContainer: !1,
			navContainerClass: "owl-nav",
			navClass: ["owl-prev", "owl-next"],
			slideBy: 1,
			dotClass: "owl-dot",
			dotsClass: "owl-dots",
			dots: !0,
			dotsEach: !1,
			dotsData: !1,
			dotsSpeed: !1,
			dotsContainer: !1
		}, i.prototype.initialize = function () {
			var e, n = this._core.settings;
			for (e in this._controls.$relative = (n.navContainer ? s(n.navContainer) : s("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = s("<" + n.navElement + ">").addClass(n.navClass[0]).html(n.navText[0]).prependTo(this._controls.$relative).on("click", s.proxy(function (e) {
				this.prev(n.navSpeed)
			}, this)), this._controls.$next = s("<" + n.navElement + ">").addClass(n.navClass[1]).html(n.navText[1]).appendTo(this._controls.$relative).on("click", s.proxy(function (e) {
				this.next(n.navSpeed)
			}, this)), n.dotsData || (this._templates = [s('<button role="button">').addClass(n.dotClass).append(s("<span>")).prop("outerHTML")]), this._controls.$absolute = (n.dotsContainer ? s(n.dotsContainer) : s("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", s.proxy(function (e) {
				var t = s(e.target).parent().is(this._controls.$absolute) ? s(e.target).index() : s(e.target).parent().index();
				e.preventDefault(), this.to(t, n.dotsSpeed)
			}, this)), this._overrides) this._core[e] = s.proxy(this[e], this)
		}, i.prototype.destroy = function () {
			var e, t, n, i, o;
			for (e in o = this._core.settings, this._handlers) this.$element.off(e, this._handlers[e]);
			for (t in this._controls) "$relative" === t && o.navContainer ? this._controls[t].html("") : this._controls[t].remove();
			for (i in this.overides) this._core[i] = this._overrides[i];
			for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
		}, i.prototype.update = function () {
			var e, t, n = this._core.clones().length / 2,
				i = n + this._core.items().length,
				o = this._core.maximum(!0),
				s = this._core.settings,
				r = s.center || s.autoWidth || s.dotsData ? 1 : s.dotsEach || s.items;
			if ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)), s.dots || "page" == s.slideBy)
				for (this._pages = [], e = n, t = 0; e < i; e++) {
					if (r <= t || 0 === t) {
						if (this._pages.push({
							start: Math.min(o, e - n),
							end: e - n + r - 1
						}), Math.min(o, e - n) === o) break;
						t = 0
					}
					t += this._core.mergers(this._core.relative(e))
				}
		}, i.prototype.draw = function () {
			var e, t = this._core.settings,
				n = this._core.items().length <= t.items,
				i = this._core.relative(this._core.current()),
				o = t.loop || t.rewind;
			this._controls.$relative.toggleClass("disabled", !t.nav || n), t.nav && (this._controls.$previous.toggleClass("disabled", !o && i <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && i >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !t.dots || n), t.dots && (e = this._pages.length - this._controls.$absolute.children().length, t.dotsData && 0 != e ? this._controls.$absolute.html(this._templates.join("")) : 0 < e ? this._controls.$absolute.append(new Array(1 + e).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(s.inArray(this.current(), this._pages)).addClass("active"))
		}, i.prototype.onTrigger = function (e) {
			var t = this._core.settings;
			e.page = {
				index: s.inArray(this.current(), this._pages),
				count: this._pages.length,
				size: t && (t.center || t.autoWidth || t.dotsData ? 1 : t.dotsEach || t.items)
			}
		}, i.prototype.current = function () {
			var n = this._core.relative(this._core.current());
			return s.grep(this._pages, s.proxy(function (e, t) {
				return e.start <= n && e.end >= n
			}, this)).pop()
		}, i.prototype.getPosition = function (e) {
			var t, n, i = this._core.settings;
			return "page" == i.slideBy ? (t = s.inArray(this.current(), this._pages), n = this._pages.length, e ? ++t : --t, t = this._pages[(t % n + n) % n].start) : (t = this._core.relative(this._core.current()), n = this._core.items().length, e ? t += i.slideBy : t -= i.slideBy), t
		}, i.prototype.next = function (e) {
			s.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
		}, i.prototype.prev = function (e) {
			s.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
		}, i.prototype.to = function (e, t, n) {
			var i;
			!n && this._pages.length ? (i = this._pages.length, s.proxy(this._overrides.to, this._core)(this._pages[(e % i + i) % i].start, t)) : s.proxy(this._overrides.to, this._core)(e, t)
		}, s.fn.owlCarousel.Constructor.Plugins.Navigation = i
	}(window.Zepto || window.jQuery, window, document),
	function (i, o, e, t) {
		"use strict";
		var n = function (e) {
			this._core = e, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
				"initialized.owl.carousel": i.proxy(function (e) {
					e.namespace && "URLHash" === this._core.settings.startPosition && i(o).trigger("hashchange.owl.navigation")
				}, this),
				"prepared.owl.carousel": i.proxy(function (e) {
					if (e.namespace) {
						var t = i(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
						if (!t) return;
						this._hashes[t] = e.content
					}
				}, this),
				"changed.owl.carousel": i.proxy(function (e) {
					if (e.namespace && "position" === e.property.name) {
						var n = this._core.items(this._core.relative(this._core.current())),
							t = i.map(this._hashes, function (e, t) {
								return e === n ? t : null
							}).join();
						if (!t || o.location.hash.slice(1) === t) return;
						o.location.hash = t
					}
				}, this)
			}, this._core.options = i.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers), i(o).on("hashchange.owl.navigation", i.proxy(function (e) {
				var t = o.location.hash.substring(1),
					n = this._core.$stage.children(),
					i = this._hashes[t] && n.index(this._hashes[t]);
				void 0 !== i && i !== this._core.current() && this._core.to(this._core.relative(i), !1, !0)
			}, this))
		};
		n.Defaults = {
			URLhashListener: !1
		}, n.prototype.destroy = function () {
			var e, t;
			for (e in i(o).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(e, this._handlers[e]);
			for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
		}, i.fn.owlCarousel.Constructor.Plugins.Hash = n
	}(window.Zepto || window.jQuery, window, document),
	function (o, e, t, s) {
		function n(e, n) {
			var i = !1,
				t = e.charAt(0).toUpperCase() + e.slice(1);
			return o.each((e + " " + a.join(t + " ") + t).split(" "), function (e, t) {
				if (r[t] !== s) return i = !n || t, !1
			}), i
		}

		function i(e) {
			return n(e, !0)
		}
		var r = o("<support>").get(0).style,
			a = "Webkit Moz O ms".split(" "),
			l = {
				transition: {
					end: {
						WebkitTransition: "webkitTransitionEnd",
						MozTransition: "transitionend",
						OTransition: "oTransitionEnd",
						transition: "transitionend"
					}
				},
				animation: {
					end: {
						WebkitAnimation: "webkitAnimationEnd",
						MozAnimation: "animationend",
						OAnimation: "oAnimationEnd",
						animation: "animationend"
					}
				}
			};
		!!n("transition") && (o.support.transition = new String(i("transition")), o.support.transition.end = l.transition.end[o.support.transition]), !!n("animation") && (o.support.animation = new String(i("animation")), o.support.animation.end = l.animation.end[o.support.animation]), n("transform") && (o.support.transform = new String(i("transform")), o.support.transform3d = !!n("perspective"))
	}(window.Zepto || window.jQuery, window, document),
	function (e) {
		"use strict";
		"function" == typeof define && define.amd ? define(["app/libs/js/jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("app/libs/js/jquery")) : e(jQuery)
	}(function (c) {
		"use strict";
		var o, r = window.Slick || {};
		o = 0, (r = function (e, t) {
			var n, i = this;
			i.defaults = {
				accessibility: !0,
				adaptiveHeight: !1,
				appendArrows: c(e),
				appendDots: c(e),
				arrows: !0,
				asNavFor: null,
				prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
				nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
				autoplay: !1,
				autoplaySpeed: 3e3,
				centerMode: !1,
				centerPadding: "50px",
				cssEase: "ease",
				customPaging: function (e, t) {
					return c('<button type="button" />').text(t + 1)
				},
				dots: !1,
				dotsClass: "slick-dots",
				draggable: !0,
				easing: "linear",
				edgeFriction: .35,
				fade: !1,
				focusOnSelect: !1,
				focusOnChange: !1,
				infinite: !0,
				initialSlide: 0,
				lazyLoad: "ondemand",
				mobileFirst: !1,
				pauseOnHover: !0,
				pauseOnFocus: !0,
				pauseOnDotsHover: !1,
				respondTo: "window",
				responsive: null,
				rows: 1,
				rtl: !1,
				slide: "",
				slidesPerRow: 1,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 500,
				swipe: !0,
				swipeToSlide: !1,
				touchMove: !0,
				touchThreshold: 5,
				useCSS: !0,
				useTransform: !0,
				variableWidth: !1,
				vertical: !1,
				verticalSwiping: !1,
				waitForAnimate: !0,
				zIndex: 1e3
			}, i.initials = {
				animating: !1,
				dragging: !1,
				autoPlayTimer: null,
				currentDirection: 0,
				currentLeft: null,
				currentSlide: 0,
				direction: 1,
				$dots: null,
				listWidth: null,
				listHeight: null,
				loadIndex: 0,
				$nextArrow: null,
				$prevArrow: null,
				scrolling: !1,
				slideCount: null,
				slideWidth: null,
				$slideTrack: null,
				$slides: null,
				sliding: !1,
				slideOffset: 0,
				swipeLeft: null,
				swiping: !1,
				$list: null,
				touchObject: {},
				transformsEnabled: !1,
				unslicked: !1
			}, c.extend(i, i.initials), i.activeBreakpoint = null, i.animType = null, i.animProp = null, i.breakpoints = [], i.breakpointSettings = [], i.cssTransitions = !1, i.focussed = !1, i.interrupted = !1, i.hidden = "hidden", i.paused = !0, i.positionProp = null, i.respondTo = null, i.rowCount = 1, i.shouldClick = !0, i.$slider = c(e), i.$slidesCache = null, i.transformType = null, i.transitionType = null, i.visibilityChange = "visibilitychange", i.windowWidth = 0, i.windowTimer = null, n = c(e).data("slick") || {}, i.options = c.extend({}, i.defaults, t, n), i.currentSlide = i.options.initialSlide, i.originalSettings = i.options, void 0 !== document.mozHidden ? (i.hidden = "mozHidden", i.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (i.hidden = "webkitHidden", i.visibilityChange = "webkitvisibilitychange"), i.autoPlay = c.proxy(i.autoPlay, i), i.autoPlayClear = c.proxy(i.autoPlayClear, i), i.autoPlayIterator = c.proxy(i.autoPlayIterator, i), i.changeSlide = c.proxy(i.changeSlide, i), i.clickHandler = c.proxy(i.clickHandler, i), i.selectHandler = c.proxy(i.selectHandler, i), i.setPosition = c.proxy(i.setPosition, i), i.swipeHandler = c.proxy(i.swipeHandler, i), i.dragHandler = c.proxy(i.dragHandler, i), i.keyHandler = c.proxy(i.keyHandler, i), i.instanceUid = o++ , i.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, i.registerBreakpoints(), i.init(!0)
		}).prototype.activateADA = function () {
			this.$slideTrack.find(".slick-active").attr({
				"aria-hidden": "false"
			}).find("a, input, button, select").attr({
				tabindex: "0"
			})
		}, r.prototype.addSlide = r.prototype.slickAdd = function (e, t, n) {
			var i = this;
			if ("boolean" == typeof t) n = t, t = null;
			else if (t < 0 || t >= i.slideCount) return !1;
			i.unload(), "number" == typeof t ? 0 === t && 0 === i.$slides.length ? c(e).appendTo(i.$slideTrack) : n ? c(e).insertBefore(i.$slides.eq(t)) : c(e).insertAfter(i.$slides.eq(t)) : !0 === n ? c(e).prependTo(i.$slideTrack) : c(e).appendTo(i.$slideTrack), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slides.each(function (e, t) {
				c(t).attr("data-slick-index", e)
			}), i.$slidesCache = i.$slides, i.reinit()
		}, r.prototype.animateHeight = function () {
			var e = this;
			if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
				var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
				e.$list.animate({
					height: t
				}, e.options.speed)
			}
		}, r.prototype.animateSlide = function (e, t) {
			var n = {},
				i = this;
			i.animateHeight(), !0 === i.options.rtl && !1 === i.options.vertical && (e = -e), !1 === i.transformsEnabled ? !1 === i.options.vertical ? i.$slideTrack.animate({
				left: e
			}, i.options.speed, i.options.easing, t) : i.$slideTrack.animate({
				top: e
			}, i.options.speed, i.options.easing, t) : !1 === i.cssTransitions ? (!0 === i.options.rtl && (i.currentLeft = -i.currentLeft), c({
				animStart: i.currentLeft
			}).animate({
				animStart: e
			}, {
				duration: i.options.speed,
				easing: i.options.easing,
				step: function (e) {
					e = Math.ceil(e), !1 === i.options.vertical ? n[i.animType] = "translate(" + e + "px, 0px)" : n[i.animType] = "translate(0px," + e + "px)", i.$slideTrack.css(n)
				},
				complete: function () {
					t && t.call()
				}
			})) : (i.applyTransition(), e = Math.ceil(e), !1 === i.options.vertical ? n[i.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[i.animType] = "translate3d(0px," + e + "px, 0px)", i.$slideTrack.css(n), t && setTimeout(function () {
				i.disableTransition(), t.call()
			}, i.options.speed))
		}, r.prototype.getNavTarget = function () {
			var e = this.options.asNavFor;
			return e && null !== e && (e = c(e).not(this.$slider)), e
		}, r.prototype.asNavFor = function (t) {
			var e = this.getNavTarget();
			null !== e && "object" == typeof e && e.each(function () {
				var e = c(this).slick("getSlick");
				e.unslicked || e.slideHandler(t, !0)
			})
		}, r.prototype.applyTransition = function (e) {
			var t = this,
				n = {};
			!1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
		}, r.prototype.autoPlay = function () {
			var e = this;
			e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
		}, r.prototype.autoPlayClear = function () {
			this.autoPlayTimer && clearInterval(this.autoPlayTimer)
		}, r.prototype.autoPlayIterator = function () {
			var e = this,
				t = e.currentSlide + e.options.slidesToScroll;
			e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
		}, r.prototype.buildArrows = function () {
			var e = this;
			!0 === e.options.arrows && (e.$prevArrow = c(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = c(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
				"aria-disabled": "true",
				tabindex: "-1"
			}))
		}, r.prototype.buildDots = function () {
			var e, t, n = this;
			if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
				for (n.$slider.addClass("slick-dotted"), t = c("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) t.append(c("<li />").append(n.options.customPaging.call(this, n, e)));
				n.$dots = t.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active")
			}
		}, r.prototype.buildOut = function () {
			var e = this;
			e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
				c(t).attr("data-slick-index", e).data("originalStyling", c(t).attr("style") || "")
			}), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? c('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), c("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
		}, r.prototype.buildRows = function () {
			var e, t, n, i, o, s, r, a = this;
			if (i = document.createDocumentFragment(), s = a.$slider.children(), 0 < a.options.rows) {
				for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), e = 0; e < o; e++) {
					var l = document.createElement("div");
					for (t = 0; t < a.options.rows; t++) {
						var c = document.createElement("div");
						for (n = 0; n < a.options.slidesPerRow; n++) {
							var u = e * r + (t * a.options.slidesPerRow + n);
							s.get(u) && c.appendChild(s.get(u))
						}
						l.appendChild(c)
					}
					i.appendChild(l)
				}
				a.$slider.empty().append(i), a.$slider.children().children().children().css({
					width: 100 / a.options.slidesPerRow + "%",
					display: "inline-block"
				})
			}
		}, r.prototype.checkResponsive = function (e, t) {
			var n, i, o, s = this,
				r = !1,
				a = s.$slider.width(),
				l = window.innerWidth || c(window).width();
			if ("window" === s.respondTo ? o = l : "slider" === s.respondTo ? o = a : "min" === s.respondTo && (o = Math.min(l, a)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
				for (n in i = null, s.breakpoints) s.breakpoints.hasOwnProperty(n) && (!1 === s.originalSettings.mobileFirst ? o < s.breakpoints[n] && (i = s.breakpoints[n]) : o > s.breakpoints[n] && (i = s.breakpoints[n]));
				null !== i ? null !== s.activeBreakpoint ? (i !== s.activeBreakpoint || t) && (s.activeBreakpoint = i, "unslick" === s.breakpointSettings[i] ? s.unslick(i) : (s.options = c.extend({}, s.originalSettings, s.breakpointSettings[i]), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)), r = i) : (s.activeBreakpoint = i, "unslick" === s.breakpointSettings[i] ? s.unslick(i) : (s.options = c.extend({}, s.originalSettings, s.breakpointSettings[i]), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)), r = i) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e), r = i), e || !1 === r || s.$slider.trigger("breakpoint", [s, r])
			}
		}, r.prototype.changeSlide = function (e, t) {
			var n, i, o = this,
				s = c(e.currentTarget);
			switch (s.is("a") && e.preventDefault(), s.is("li") || (s = s.closest("li")), n = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, e.data.message) {
				case "previous":
					i = 0 == n ? o.options.slidesToScroll : o.options.slidesToShow - n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - i, !1, t);
					break;
				case "next":
					i = 0 == n ? o.options.slidesToScroll : n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + i, !1, t);
					break;
				case "index":
					var r = 0 === e.data.index ? 0 : e.data.index || s.index() * o.options.slidesToScroll;
					o.slideHandler(o.checkNavigable(r), !1, t), s.children().trigger("focus");
					break;
				default:
					return
			}
		}, r.prototype.checkNavigable = function (e) {
			var t, n;
			if (n = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
			else
				for (var i in t) {
					if (e < t[i]) {
						e = n;
						break
					}
					n = t[i]
				}
			return e
		}, r.prototype.cleanUpEvents = function () {
			var e = this;
			e.options.dots && null !== e.$dots && (c("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", c.proxy(e.interrupt, e, !0)).off("mouseleave.slick", c.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), c(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().off("click.slick", e.selectHandler), c(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), c(window).off("resize.slick.slick-" + e.instanceUid, e.resize), c("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), c(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
		}, r.prototype.cleanUpSlideEvents = function () {
			var e = this;
			e.$list.off("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", c.proxy(e.interrupt, e, !1))
		}, r.prototype.cleanUpRows = function () {
			var e;
			0 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(e))
		}, r.prototype.clickHandler = function (e) {
			!1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
		}, r.prototype.destroy = function (e) {
			var t = this;
			t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), c(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
				c(this).attr("style", c(this).data("originalStyling"))
			}), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
		}, r.prototype.disableTransition = function (e) {
			var t = {};
			t[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(t) : this.$slides.eq(e).css(t)
		}, r.prototype.fadeSlide = function (e, t) {
			var n = this;
			!1 === n.cssTransitions ? (n.$slides.eq(e).css({
				zIndex: n.options.zIndex
			}), n.$slides.eq(e).animate({
				opacity: 1
			}, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
				opacity: 1,
				zIndex: n.options.zIndex
			}), t && setTimeout(function () {
				n.disableTransition(e), t.call()
			}, n.options.speed))
		}, r.prototype.fadeSlideOut = function (e) {
			var t = this;
			!1 === t.cssTransitions ? t.$slides.eq(e).animate({
				opacity: 0,
				zIndex: t.options.zIndex - 2
			}, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
				opacity: 0,
				zIndex: t.options.zIndex - 2
			}))
		}, r.prototype.filterSlides = r.prototype.slickFilter = function (e) {
			var t = this;
			null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
		}, r.prototype.focusHandler = function () {
			var n = this;
			n.$slider.off("focus.slick blur.slick").on("focus.slick", "*", function (e) {
				var t = c(this);
				setTimeout(function () {
					n.options.pauseOnFocus && t.is(":focus") && (n.focussed = !0, n.autoPlay())
				}, 0)
			}).on("blur.slick", "*", function (e) {
				c(this), n.options.pauseOnFocus && (n.focussed = !1, n.autoPlay())
			})
		}, r.prototype.getCurrent = r.prototype.slickCurrentSlide = function () {
			return this.currentSlide
		}, r.prototype.getDotCount = function () {
			var e = this,
				t = 0,
				n = 0,
				i = 0;
			if (!0 === e.options.infinite)
				if (e.slideCount <= e.options.slidesToShow)++i;
				else
					for (; t < e.slideCount;)++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
			else if (!0 === e.options.centerMode) i = e.slideCount;
			else if (e.options.asNavFor)
				for (; t < e.slideCount;)++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
			else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
			return i - 1
		}, r.prototype.getLeft = function (e) {
			var t, n, i, o, s = this,
				r = 0;
			return s.slideOffset = 0, n = s.$slides.first().outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, o = -1, !0 === s.options.vertical && !0 === s.options.centerMode && (2 === s.options.slidesToShow ? o = -1.5 : 1 === s.options.slidesToShow && (o = -2)), r = n * s.options.slidesToShow * o), s.slideCount % s.options.slidesToScroll != 0 && e + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (r = e > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (e - s.slideCount)) * s.slideWidth * -1, (s.options.slidesToShow - (e - s.slideCount)) * n * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, s.slideCount % s.options.slidesToScroll * n * -1))) : e + s.options.slidesToShow > s.slideCount && (s.slideOffset = (e + s.options.slidesToShow - s.slideCount) * s.slideWidth, r = (e + s.options.slidesToShow - s.slideCount) * n), s.slideCount <= s.options.slidesToShow && (r = s.slideOffset = 0), !0 === s.options.centerMode && s.slideCount <= s.options.slidesToShow ? s.slideOffset = s.slideWidth * Math.floor(s.options.slidesToShow) / 2 - s.slideWidth * s.slideCount / 2 : !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), t = !1 === s.options.vertical ? e * s.slideWidth * -1 + s.slideOffset : e * n * -1 + r, !0 === s.options.variableWidth && (i = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow), t = !0 === s.options.rtl ? i[0] ? -1 * (s.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === s.options.centerMode && (i = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow + 1), t = !0 === s.options.rtl ? i[0] ? -1 * (s.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (s.$list.width() - i.outerWidth()) / 2)), t
		}, r.prototype.getOption = r.prototype.slickGetOption = function (e) {
			return this.options[e]
		}, r.prototype.getNavigableIndexes = function () {
			var e, t = this,
				n = 0,
				i = 0,
				o = [];
			for (e = !1 === t.options.infinite ? t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, 2 * t.slideCount); n < e;) o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
			return o
		}, r.prototype.getSlick = function () {
			return this
		}, r.prototype.getSlideCount = function () {
			var o, s, e, r = this;
			return e = !0 === r.options.centerMode ? Math.floor(r.$list.width() / 2) : 0, s = -1 * r.swipeLeft + e, !0 === r.options.swipeToSlide ? (r.$slideTrack.find(".slick-slide").each(function (e, t) {
				var n, i;
				if (n = c(t).outerWidth(), i = t.offsetLeft, !0 !== r.options.centerMode && (i += n / 2), s < i + n) return o = t, !1
			}), Math.abs(c(o).attr("data-slick-index") - r.currentSlide) || 1) : r.options.slidesToScroll
		}, r.prototype.goTo = r.prototype.slickGoTo = function (e, t) {
			this.changeSlide({
				data: {
					message: "index",
					index: parseInt(e)
				}
			}, t)
		}, r.prototype.init = function (e) {
			var t = this;
			c(t.$slider).hasClass("slick-initialized") || (c(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
		}, r.prototype.initADA = function () {
			var i = this,
				n = Math.ceil(i.slideCount / i.options.slidesToShow),
				o = i.getNavigableIndexes().filter(function (e) {
					return 0 <= e && e < i.slideCount
				});
			i.$slides.add(i.$slideTrack.find(".slick-cloned")).attr({
				"aria-hidden": "true",
				tabindex: "-1"
			}).find("a, input, button, select").attr({
				tabindex: "-1"
			}), null !== i.$dots && (i.$slides.not(i.$slideTrack.find(".slick-cloned")).each(function (e) {
				var t = o.indexOf(e);
				if (c(this).attr({
					role: "tabpanel",
					id: "slick-slide" + i.instanceUid + e,
					tabindex: -1
				}), -1 !== t) {
					var n = "slick-slide-control" + i.instanceUid + t;
					c("#" + n).length && c(this).attr({
						"aria-describedby": n
					})
				}
			}), i.$dots.attr("role", "tablist").find("li").each(function (e) {
				var t = o[e];
				c(this).attr({
					role: "presentation"
				}), c(this).find("button").first().attr({
					role: "tab",
					id: "slick-slide-control" + i.instanceUid + e,
					"aria-controls": "slick-slide" + i.instanceUid + t,
					"aria-label": e + 1 + " of " + n,
					"aria-selected": null,
					tabindex: "-1"
				})
			}).eq(i.currentSlide).find("button").attr({
				"aria-selected": "true",
				tabindex: "0"
			}).end());
			for (var e = i.currentSlide, t = e + i.options.slidesToShow; e < t; e++) i.options.focusOnChange ? i.$slides.eq(e).attr({
				tabindex: "0"
			}) : i.$slides.eq(e).removeAttr("tabindex");
			i.activateADA()
		}, r.prototype.initArrowEvents = function () {
			var e = this;
			!0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
				message: "previous"
			}, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
				message: "next"
			}, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
		}, r.prototype.initDotEvents = function () {
			var e = this;
			!0 === e.options.dots && e.slideCount > e.options.slidesToShow && (c("li", e.$dots).on("click.slick", {
				message: "index"
			}, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && e.slideCount > e.options.slidesToShow && c("li", e.$dots).on("mouseenter.slick", c.proxy(e.interrupt, e, !0)).on("mouseleave.slick", c.proxy(e.interrupt, e, !1))
		}, r.prototype.initSlideEvents = function () {
			var e = this;
			e.options.pauseOnHover && (e.$list.on("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", c.proxy(e.interrupt, e, !1)))
		}, r.prototype.initializeEvents = function () {
			var e = this;
			e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
				action: "start"
			}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
				action: "move"
			}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
				action: "end"
			}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
				action: "end"
			}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), c(document).on(e.visibilityChange, c.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), c(window).on("orientationchange.slick.slick-" + e.instanceUid, c.proxy(e.orientationChange, e)), c(window).on("resize.slick.slick-" + e.instanceUid, c.proxy(e.resize, e)), c("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), c(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), c(e.setPosition)
		}, r.prototype.initUI = function () {
			var e = this;
			!0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
		}, r.prototype.keyHandler = function (e) {
			var t = this;
			e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
				data: {
					message: !0 === t.options.rtl ? "next" : "previous"
				}
			}) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
				data: {
					message: !0 === t.options.rtl ? "previous" : "next"
				}
			}))
		}, r.prototype.lazyLoad = function () {
			function e(e) {
				c("img[data-lazy]", e).each(function () {
					var e = c(this),
						t = c(this).attr("data-lazy"),
						n = c(this).attr("data-srcset"),
						i = c(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
						o = document.createElement("img");
					o.onload = function () {
						e.animate({
							opacity: 0
						}, 100, function () {
							n && (e.attr("srcset", n), i && e.attr("sizes", i)), e.attr("src", t).animate({
								opacity: 1
							}, 200, function () {
								e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
							}), s.$slider.trigger("lazyLoaded", [s, e, t])
						})
					}, o.onerror = function () {
						e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, e, t])
					}, o.src = t
				})
			}
			var t, n, i, s = this;
			if (!0 === s.options.centerMode ? i = !0 === s.options.infinite ? (n = s.currentSlide + (s.options.slidesToShow / 2 + 1)) + s.options.slidesToShow + 2 : (n = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (n = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, i = Math.ceil(n + s.options.slidesToShow), !0 === s.options.fade && (0 < n && n-- , i <= s.slideCount && i++)), t = s.$slider.find(".slick-slide").slice(n, i), "anticipated" === s.options.lazyLoad)
				for (var o = n - 1, r = i, a = s.$slider.find(".slick-slide"), l = 0; l < s.options.slidesToScroll; l++) o < 0 && (o = s.slideCount - 1), t = (t = t.add(a.eq(o))).add(a.eq(r)), o-- , r++;
			e(t), s.slideCount <= s.options.slidesToShow ? e(s.$slider.find(".slick-slide")) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? e(s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow)) : 0 === s.currentSlide && e(s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow))
		}, r.prototype.loadSlider = function () {
			var e = this;
			e.setPosition(), e.$slideTrack.css({
				opacity: 1
			}), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
		}, r.prototype.next = r.prototype.slickNext = function () {
			this.changeSlide({
				data: {
					message: "next"
				}
			})
		}, r.prototype.orientationChange = function () {
			this.checkResponsive(), this.setPosition()
		}, r.prototype.pause = r.prototype.slickPause = function () {
			this.autoPlayClear(), this.paused = !0
		}, r.prototype.play = r.prototype.slickPlay = function () {
			var e = this;
			e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
		}, r.prototype.postSlide = function (e) {
			var t = this;
			!t.unslicked && (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange)) && c(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()
		}, r.prototype.prev = r.prototype.slickPrev = function () {
			this.changeSlide({
				data: {
					message: "previous"
				}
			})
		}, r.prototype.preventDefault = function (e) {
			e.preventDefault()
		}, r.prototype.progressiveLazyLoad = function (e) {
			e = e || 1;
			var t, n, i, o, s, r = this,
				a = c("img[data-lazy]", r.$slider);
			a.length ? (t = a.first(), n = t.attr("data-lazy"), i = t.attr("data-srcset"), o = t.attr("data-sizes") || r.$slider.attr("data-sizes"), (s = document.createElement("img")).onload = function () {
				i && (t.attr("srcset", i), o && t.attr("sizes", o)), t.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === r.options.adaptiveHeight && r.setPosition(), r.$slider.trigger("lazyLoaded", [r, t, n]), r.progressiveLazyLoad()
			}, s.onerror = function () {
				e < 3 ? setTimeout(function () {
					r.progressiveLazyLoad(e + 1)
				}, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, t, n]), r.progressiveLazyLoad())
			}, s.src = n) : r.$slider.trigger("allImagesLoaded", [r])
		}, r.prototype.refresh = function (e) {
			var t, n, i = this;
			n = i.slideCount - i.options.slidesToShow, !i.options.infinite && i.currentSlide > n && (i.currentSlide = n), i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0), t = i.currentSlide, i.destroy(!0), c.extend(i, i.initials, {
				currentSlide: t
			}), i.init(), e || i.changeSlide({
				data: {
					message: "index",
					index: t
				}
			}, !1)
		}, r.prototype.registerBreakpoints = function () {
			var e, t, n, i = this,
				o = i.options.responsive || null;
			if ("array" === c.type(o) && o.length) {
				for (e in i.respondTo = i.options.respondTo || "window", o)
					if (n = i.breakpoints.length - 1, o.hasOwnProperty(e)) {
						for (t = o[e].breakpoint; 0 <= n;) i.breakpoints[n] && i.breakpoints[n] === t && i.breakpoints.splice(n, 1), n--;
						i.breakpoints.push(t), i.breakpointSettings[t] = o[e].settings
					}
				i.breakpoints.sort(function (e, t) {
					return i.options.mobileFirst ? e - t : t - e
				})
			}
		}, r.prototype.reinit = function () {
			var e = this;
			e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
		}, r.prototype.resize = function () {
			var e = this;
			c(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
				e.windowWidth = c(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
			}, 50))
		}, r.prototype.removeSlide = r.prototype.slickRemove = function (e, t, n) {
			var i = this;
			return e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e, !(i.slideCount < 1 || e < 0 || e > i.slideCount - 1) && (i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, void i.reinit())
		}, r.prototype.setCSS = function (e) {
			var t, n, i = this,
				o = {};
			!0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, !1 === i.transformsEnabled || (!(o = {}) === i.cssTransitions ? o[i.animType] = "translate(" + t + ", " + n + ")" : o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)"), i.$slideTrack.css(o)
		}, r.prototype.setDimensions = function () {
			var e = this;
			!1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
				padding: "0px " + e.options.centerPadding
			}) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
				padding: e.options.centerPadding + " 0px"
			})), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
			var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
			!1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
		}, r.prototype.setFade = function () {
			var n, i = this;
			i.$slides.each(function (e, t) {
				n = i.slideWidth * e * -1, !0 === i.options.rtl ? c(t).css({
					position: "relative",
					right: n,
					top: 0,
					zIndex: i.options.zIndex - 2,
					opacity: 0
				}) : c(t).css({
					position: "relative",
					left: n,
					top: 0,
					zIndex: i.options.zIndex - 2,
					opacity: 0
				})
			}), i.$slides.eq(i.currentSlide).css({
				zIndex: i.options.zIndex - 1,
				opacity: 1
			})
		}, r.prototype.setHeight = function () {
			var e = this;
			if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
				var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
				e.$list.css("height", t)
			}
		}, r.prototype.setOption = r.prototype.slickSetOption = function () {
			var e, t, n, i, o, s = this,
				r = !1;
			if ("object" === c.type(arguments[0]) ? (n = arguments[0], r = arguments[1], o = "multiple") : "string" === c.type(arguments[0]) && (n = arguments[0], i = arguments[1], r = arguments[2], "responsive" === arguments[0] && "array" === c.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) s.options[n] = i;
			else if ("multiple" === o) c.each(n, function (e, t) {
				s.options[e] = t
			});
			else if ("responsive" === o)
				for (t in i)
					if ("array" !== c.type(s.options.responsive)) s.options.responsive = [i[t]];
					else {
						for (e = s.options.responsive.length - 1; 0 <= e;) s.options.responsive[e].breakpoint === i[t].breakpoint && s.options.responsive.splice(e, 1), e--;
						s.options.responsive.push(i[t])
					}
			r && (s.unload(), s.reinit())
		}, r.prototype.setPosition = function () {
			var e = this;
			e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
		}, r.prototype.setProps = function () {
			var e = this,
				t = document.body.style;
			e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
		}, r.prototype.setSlideClasses = function (e) {
			var t, n, i, o, s = this;
			if (n = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(e).addClass("slick-current"), !0 === s.options.centerMode) {
				var r = s.options.slidesToShow % 2 == 0 ? 1 : 0;
				t = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (t <= e && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t + r, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = s.options.slidesToShow + e, n.slice(i - t + 1 + r, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && n.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(e).addClass("slick-center")
			} else 0 <= e && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= s.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, i = !0 === s.options.infinite ? s.options.slidesToShow + e : e, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? n.slice(i - (s.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
			"ondemand" !== s.options.lazyLoad && "anticipated" !== s.options.lazyLoad || s.lazyLoad()
		}, r.prototype.setupInfinite = function () {
			var e, t, n, i = this;
			if (!0 === i.options.fade && (i.options.centerMode = !1), !0 === i.options.infinite && !1 === i.options.fade && (t = null, i.slideCount > i.options.slidesToShow)) {
				for (n = !0 === i.options.centerMode ? i.options.slidesToShow + 1 : i.options.slidesToShow, e = i.slideCount; e > i.slideCount - n; e -= 1) t = e - 1, c(i.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - i.slideCount).prependTo(i.$slideTrack).addClass("slick-cloned");
				for (e = 0; e < n + i.slideCount; e += 1) t = e, c(i.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + i.slideCount).appendTo(i.$slideTrack).addClass("slick-cloned");
				i.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
					c(this).attr("id", "")
				})
			}
		}, r.prototype.interrupt = function (e) {
			e || this.autoPlay(), this.interrupted = e
		}, r.prototype.selectHandler = function (e) {
			var t = c(e.target).is(".slick-slide") ? c(e.target) : c(e.target).parents(".slick-slide"),
				n = parseInt(t.attr("data-slick-index"));
			return n || (n = 0), this.slideCount <= this.options.slidesToShow ? void this.slideHandler(n, !1, !0) : void this.slideHandler(n)
		}, r.prototype.slideHandler = function (e, t, n) {
			var i, o, s, r, a, l = null,
				c = this;
			if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e)) return !1 === t && c.asNavFor(e), i = e, l = c.getLeft(i), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll) ? void (!1 === c.options.fade && (i = c.currentSlide, !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(r, function () {
				c.postSlide(i)
			}) : c.postSlide(i))) : !1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll) ? void (!1 === c.options.fade && (i = c.currentSlide, !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(r, function () {
				c.postSlide(i)
			}) : c.postSlide(i))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), o = i < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), s = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade ? (!0 !== n ? (c.fadeSlideOut(s), c.fadeSlide(o, function () {
				c.postSlide(o)
			})) : c.postSlide(o), void c.animateHeight()) : void (!0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(l, function () {
				c.postSlide(o)
			}) : c.postSlide(o)))
		}, r.prototype.startLoad = function () {
			var e = this;
			!0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
		}, r.prototype.swipeDirection = function () {
			var e, t, n, i, o = this;
			return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && 0 <= i ? !1 === o.options.rtl ? "left" : "right" : i <= 360 && 315 <= i ? !1 === o.options.rtl ? "left" : "right" : 135 <= i && i <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? 35 <= i && i <= 135 ? "down" : "up" : "vertical"
		}, r.prototype.swipeEnd = function (e) {
			var t, n, i = this;
			if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1;
			if (i.interrupted = !1, i.shouldClick = !(10 < i.touchObject.swipeLength), void 0 === i.touchObject.curX) return !1;
			if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
				switch (n = i.swipeDirection()) {
					case "left":
					case "down":
						t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
						break;
					case "right":
					case "up":
						t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
				}
				"vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
			} else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
		}, r.prototype.swipeHandler = function (e) {
			var t = this;
			if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
				case "start":
					t.swipeStart(e);
					break;
				case "move":
					t.swipeMove(e);
					break;
				case "end":
					t.swipeEnd(e)
			}
		}, r.prototype.swipeMove = function (e) {
			var t, n, i, o, s, r, a = this;
			return s = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || s && 1 !== s.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX, a.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && 4 < r ? !(a.scrolling = !0) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r), n = a.swipeDirection(), void 0 !== e.originalEvent && 4 < a.touchObject.swipeLength && (a.swiping = !0, e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, (a.touchObject.edgeHit = !1) === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + i * o : a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
		}, r.prototype.swipeStart = function (e) {
			var t, n = this;
			return n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow ? !(n.touchObject = {}) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void (n.dragging = !0))
		}, r.prototype.unfilterSlides = r.prototype.slickUnfilter = function () {
			var e = this;
			null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
		}, r.prototype.unload = function () {
			var e = this;
			c(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
		}, r.prototype.unslick = function (e) {
			this.$slider.trigger("unslick", [this, e]), this.destroy()
		}, r.prototype.updateArrows = function () {
			var e = this;
			Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
		}, r.prototype.updateDots = function () {
			var e = this;
			null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
		}, r.prototype.visibility = function () {
			this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
		}, c.fn.slick = function () {
			var e, t, n = this,
				i = arguments[0],
				o = Array.prototype.slice.call(arguments, 1),
				s = n.length;
			for (e = 0; e < s; e++)
				if ("object" == typeof i || void 0 === i ? n[e].slick = new r(n[e], i) : t = n[e].slick[i].apply(n[e].slick, o), void 0 !== t) return t;
			return n
		}
	}),
	function (e) {
		"use strict";
		"function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
	}(function (h) {
		"use strict";
		var g = "animsition",
			m = {
				init: function (o) {
					o = h.extend({
						inClass: "fade-in",
						outClass: "fade-out",
						inDuration: 1500,
						outDuration: 800,
						linkElement: ".animsition-link",
						loading: !0,
						loadingParentElement: "body",
						loadingClass: "animsition-loading",
						loadingInner: "",
						timeout: !1,
						timeoutCountdown: 5e3,
						onLoadEvent: !0,
						browser: ["animation-duration", "-webkit-animation-duration"],
						overlay: !1,
						overlayClass: "animsition-overlay-slide",
						overlayParentElement: "body",
						transition: function (e) {
							window.location.href = e
						}
					}, o), m.settings = {
						timer: !1,
						data: {
							inClass: "animsition-in-class",
							inDuration: "animsition-in-duration",
							outClass: "animsition-out-class",
							outDuration: "animsition-out-duration",
							overlay: "animsition-overlay"
						},
						events: {
							inStart: "animsition.inStart",
							inEnd: "animsition.inEnd",
							outStart: "animsition.outStart",
							outEnd: "animsition.outEnd"
						}
					};
					var e = m.supportCheck.call(this, o);
					return e || !(0 < o.browser.length) || e && this.length ? (m.optionCheck.call(this, o) && h("." + o.overlayClass).length <= 0 && m.addOverlay.call(this, o), o.loading && h("." + o.loadingClass).length <= 0 && m.addLoading.call(this, o), this.each(function () {
						var i = this,
							e = h(this),
							t = h(window),
							n = h(document);
						e.data(g) || (o = h.extend({}, o), e.data(g, {
							options: o
						}), o.timeout && m.addTimer.call(i), o.onLoadEvent && t.on("load." + g, function () {
							m.settings.timer && clearTimeout(m.settings.timer), m.in.call(i)
						}), t.on("pageshow." + g, function (e) {
							e.originalEvent.persisted && m.in.call(i)
						}), t.on("unload." + g, function () { }), n.on("click." + g, o.linkElement, function (e) {
							e.preventDefault();
							var t = h(this),
								n = t.attr("href");
							2 === e.which || e.metaKey || e.shiftKey || -1 !== navigator.platform.toUpperCase().indexOf("WIN") && e.ctrlKey ? window.open(n, "_blank") : m.out.call(i, t, n)
						}))
					})) : ("console" in window || (window.console = {}, window.console.log = function (e) {
						return e
					}), this.length || console.log("Animsition: Element does not exist on page."), e || console.log("Animsition: Does not support this browser."), m.destroy.call(this))
				},
				addOverlay: function (e) {
					h(e.overlayParentElement).prepend('<div class="' + e.overlayClass + '"></div>')
				},
				addLoading: function (e) {
					h(e.loadingParentElement).append('<div class="' + e.loadingClass + '">' + e.loadingInner + "</div>")
				},
				removeLoading: function () {
					var e = h(this).data(g).options;
					h(e.loadingParentElement).children("." + e.loadingClass).fadeOut().remove()
				},
				addTimer: function () {
					var e = this,
						t = h(this).data(g).options;
					m.settings.timer = setTimeout(function () {
						m.in.call(e), h(window).off("load." + g)
					}, t.timeoutCountdown)
				},
				supportCheck: function (e) {
					var t = h(this),
						n = e.browser,
						i = n.length,
						o = !1;
					0 === i && (o = !0);
					for (var s = 0; s < i; s++)
						if ("string" == typeof t.css(n[s])) {
							o = !0;
							break
						}
					return o
				},
				optionCheck: function (e) {
					var t = h(this);
					return !(!e.overlay && !t.data(m.settings.data.overlay))
				},
				animationCheck: function (e, t, n) {
					var i = h(this).data(g).options,
						o = typeof e,
						s = !t && "number" == o,
						r = t && "string" == o && 0 < e.length;
					return s || r ? e = e : t && n ? e = i.inClass : !t && n ? e = i.inDuration : t && !n ? e = i.outClass : t || n || (e = i.outDuration), e
				},
				in: function () {
					var e = this,
						t = h(this),
						n = t.data(g).options,
						i = t.data(m.settings.data.inDuration),
						o = t.data(m.settings.data.inClass),
						s = m.animationCheck.call(e, i, !1, !0),
						r = m.animationCheck.call(e, o, !0, !0),
						a = m.optionCheck.call(e, n),
						l = t.data(g).outClass;
					n.loading && m.removeLoading.call(e), l && t.removeClass(l), a ? m.inOverlay.call(e, r, s) : m.inDefault.call(e, r, s)
				},
				inDefault: function (e, t) {
					var n = h(this);
					n.css({
						"animation-duration": t + "ms"
					}).addClass(e).trigger(m.settings.events.inStart).animateCallback(function () {
						n.removeClass(e).css({
							opacity: 1
						}).trigger(m.settings.events.inEnd)
					})
				},
				inOverlay: function (e, t) {
					var n = h(this),
						i = n.data(g).options;
					n.css({
						opacity: 1
					}).trigger(m.settings.events.inStart), h(i.overlayParentElement).children("." + i.overlayClass).css({
						"animation-duration": t + "ms"
					}).addClass(e).animateCallback(function () {
						n.trigger(m.settings.events.inEnd)
					})
				},
				out: function (e, t) {
					var n = this,
						i = h(this),
						o = i.data(g).options,
						s = e.data(m.settings.data.outClass),
						r = i.data(m.settings.data.outClass),
						a = e.data(m.settings.data.outDuration),
						l = i.data(m.settings.data.outDuration),
						c = s || r,
						u = a || l,
						d = m.animationCheck.call(n, c, !0, !1),
						p = m.animationCheck.call(n, u, !1, !1),
						f = m.optionCheck.call(n, o);
					i.data(g).outClass = d, f ? m.outOverlay.call(n, d, p, t) : m.outDefault.call(n, d, p, t)
				},
				outDefault: function (e, t, n) {
					var i = h(this),
						o = i.data(g).options;
					i.css({
						"animation-duration": t + 1 + "ms"
					}).addClass(e).trigger(m.settings.events.outStart).animateCallback(function () {
						i.trigger(m.settings.events.outEnd), o.transition(n)
					})
				},
				outOverlay: function (e, t, n) {
					var i = h(this),
						o = i.data(g).options,
						s = i.data(m.settings.data.inClass),
						r = m.animationCheck.call(this, s, !0, !0);
					h(o.overlayParentElement).children("." + o.overlayClass).css({
						"animation-duration": t + 1 + "ms"
					}).removeClass(r).addClass(e).trigger(m.settings.events.outStart).animateCallback(function () {
						i.trigger(m.settings.events.outEnd), o.transition(n)
					})
				},
				destroy: function () {
					return this.each(function () {
						var e = h(this);
						h(window).off("." + g), e.css({
							opacity: 1
						}).removeData(g)
					})
				}
			};
		h.fn.animateCallback = function (t) {
			var n = "animationend webkitAnimationEnd";
			return this.each(function () {
				var e = h(this);
				e.on(n, function () {
					return e.off(n), t.call(this)
				})
			})
		}, h.fn.animsition = function (e) {
			return m[e] ? m[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void h.error("Method " + e + " does not exist on jQuery." + g) : m.init.apply(this, arguments)
		}
	}),
	function (e, t) {
		if ("function" == typeof define && define.amd) define(["module", "exports"], t);
		else if ("undefined" != typeof exports) t(module, exports);
		else {
			var n = {
				exports: {}
			};
			t(n, n.exports), e.WOW = n.exports
		}
	}(this, function (e, t) {
		"use strict";

		function n(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function o(e, t) {
			return 0 <= t.indexOf(e)
		}

		function i(e, t, n) {
			null != e.addEventListener ? e.addEventListener(t, n, !1) : null != e.attachEvent ? e.attachEvent("on" + t, n) : e[t] = n
		}

		function s(e, t, n) {
			null != e.removeEventListener ? e.removeEventListener(t, n, !1) : null != e.detachEvent ? e.detachEvent("on" + t, n) : delete e[t]
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r, a, l = function () {
			function i(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function (e, t, n) {
				return t && i(e.prototype, t), n && i(e, n), e
			}
		}(),
			c = window.WeakMap || window.MozWeakMap || function () {
				function e() {
					n(this, e), this.keys = [], this.values = []
				}
				return l(e, [{
					key: "get",
					value: function (e) {
						for (var t = 0; t < this.keys.length; t++)
							if (this.keys[t] === e) return this.values[t]
					}
				}, {
					key: "set",
					value: function (e, t) {
						for (var n = 0; n < this.keys.length; n++)
							if (this.keys[n] === e) return this.values[n] = t, this;
						return this.keys.push(e), this.values.push(t), this
					}
				}]), e
			}(),
			u = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (a = r = function () {
				function e() {
					n(this, e), "undefined" != typeof console && null !== console && (console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))
				}
				return l(e, [{
					key: "observe",
					value: function () { }
				}]), e
			}(), r.notSupported = !0, a),
			d = window.getComputedStyle || function (n) {
				var i = /(\-([a-z]){1})/g;
				return {
					getPropertyValue: function (e) {
						"float" === e && (e = "styleFloat"), i.test(e) && e.replace(i, function (e, t) {
							return t.toUpperCase()
						});
						var t = n.currentStyle;
						return (null != t ? t[e] : void 0) || null
					}
				}
			},
			p = function () {
				function t() {
					var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
					n(this, t), this.defaults = {
						boxClass: "wow",
						animateClass: "animated",
						offset: 0,
						mobile: !0,
						live: !0,
						callback: null,
						scrollContainer: null,
						resetAnimation: !0
					}, this.animate = "requestAnimationFrame" in window ? function (e) {
						return window.requestAnimationFrame(e)
					} : function (e) {
						return e()
					}, this.vendors = ["moz", "webkit"], this.start = this.start.bind(this), this.resetAnimation = this.resetAnimation.bind(this), this.scrollHandler = this.scrollHandler.bind(this), this.scrollCallback = this.scrollCallback.bind(this), this.scrolled = !0, this.config = function (e, t) {
						for (var n in t)
							if (null == e[n]) {
								var i = t[n];
								e[n] = i
							}
						return e
					}(e, this.defaults), null != e.scrollContainer && (this.config.scrollContainer = document.querySelector(e.scrollContainer)), this.animationNameCache = new c, this.wowEvent = function (e) {
						var t = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1],
							n = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2],
							i = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3],
							o = void 0;
						return null != document.createEvent ? (o = document.createEvent("CustomEvent")).initCustomEvent(e, t, n, i) : null != document.createEventObject ? (o = document.createEventObject()).eventType = e : o.eventName = e, o
					}(this.config.boxClass)
				}
				return l(t, [{
					key: "init",
					value: function () {
						this.element = window.document.documentElement, o(document.readyState, ["interactive", "complete"]) ? this.start() : i(document, "DOMContentLoaded", this.start), this.finished = []
					}
				}, {
					key: "start",
					value: function () {
						var s = this;
						if (this.stopped = !1, this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass)), this.all = this.boxes.slice(0), this.boxes.length)
							if (this.disabled()) this.resetStyle();
							else
								for (var e = 0; e < this.boxes.length; e++) {
									var t = this.boxes[e];
									this.applyStyle(t, !0)
								}
						this.disabled() || (i(this.config.scrollContainer || window, "scroll", this.scrollHandler), i(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live && new u(function (e) {
							for (var t = 0; t < e.length; t++)
								for (var n = e[t], i = 0; i < n.addedNodes.length; i++) {
									var o = n.addedNodes[i];
									s.doSync(o)
								}
						}).observe(document.body, {
							childList: !0,
							subtree: !0
						})
					}
				}, {
					key: "stop",
					value: function () {
						this.stopped = !0, s(this.config.scrollContainer || window, "scroll", this.scrollHandler), s(window, "resize", this.scrollHandler), null != this.interval && clearInterval(this.interval)
					}
				}, {
					key: "sync",
					value: function () {
						u.notSupported && this.doSync(this.element)
					}
				}, {
					key: "doSync",
					value: function (e) {
						if (null != e || (e = this.element), 1 === e.nodeType)
							for (var t = (e = e.parentNode || e).querySelectorAll("." + this.config.boxClass), n = 0; n < t.length; n++) {
								var i = t[n];
								o(i, this.all) || (this.boxes.push(i), this.all.push(i), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(i, !0), this.scrolled = !0)
							}
					}
				}, {
					key: "show",
					value: function (e) {
						return this.applyStyle(e), e.className = e.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(e), t = e, n = this.wowEvent, null != t.dispatchEvent ? t.dispatchEvent(n) : n in (null != t) ? t[n]() : "on" + n in (null != t) && t["on" + n](), this.config.resetAnimation && (i(e, "animationend", this.resetAnimation), i(e, "oanimationend", this.resetAnimation), i(e, "webkitAnimationEnd", this.resetAnimation), i(e, "MSAnimationEnd", this.resetAnimation)), e;
						var t, n
					}
				}, {
					key: "applyStyle",
					value: function (e, t) {
						var n = this,
							i = e.getAttribute("data-wow-duration"),
							o = e.getAttribute("data-wow-delay"),
							s = e.getAttribute("data-wow-iteration");
						return this.animate(function () {
							return n.customStyle(e, t, i, o, s)
						})
					}
				}, {
					key: "resetStyle",
					value: function () {
						for (var e = 0; e < this.boxes.length; e++) this.boxes[e].style.visibility = "visible"
					}
				}, {
					key: "resetAnimation",
					value: function (e) {
						if (0 <= e.type.toLowerCase().indexOf("animationend")) {
							var t = e.target || e.srcElement;
							t.className = t.className.replace(this.config.animateClass, "").trim()
						}
					}
				}, {
					key: "customStyle",
					value: function (e, t, n, i, o) {
						return t && this.cacheAnimationName(e), e.style.visibility = t ? "hidden" : "visible", n && this.vendorSet(e.style, {
							animationDuration: n
						}), i && this.vendorSet(e.style, {
							animationDelay: i
						}), o && this.vendorSet(e.style, {
							animationIterationCount: o
						}), this.vendorSet(e.style, {
							animationName: t ? "none" : this.cachedAnimationName(e)
						}), e
					}
				}, {
					key: "vendorSet",
					value: function (e, t) {
						for (var n in t)
							if (t.hasOwnProperty(n)) {
								var i = t[n];
								e["" + n] = i;
								for (var o = 0; o < this.vendors.length; o++) e["" + this.vendors[o] + n.charAt(0).toUpperCase() + n.substr(1)] = i
							}
					}
				}, {
					key: "vendorCSS",
					value: function (e, t) {
						for (var n = d(e), i = n.getPropertyCSSValue(t), o = 0; o < this.vendors.length; o++) {
							var s = this.vendors[o];
							i = i || n.getPropertyCSSValue("-" + s + "-" + t)
						}
						return i
					}
				}, {
					key: "animationName",
					value: function (t) {
						var n = void 0;
						try {
							n = this.vendorCSS(t, "animation-name").cssText
						} catch (e) {
							n = d(t).getPropertyValue("animation-name")
						}
						return "none" === n ? "" : n
					}
				}, {
					key: "cacheAnimationName",
					value: function (e) {
						return this.animationNameCache.set(e, this.animationName(e))
					}
				}, {
					key: "cachedAnimationName",
					value: function (e) {
						return this.animationNameCache.get(e)
					}
				}, {
					key: "scrollHandler",
					value: function () {
						this.scrolled = !0
					}
				}, {
					key: "scrollCallback",
					value: function () {
						if (this.scrolled) {
							this.scrolled = !1;
							for (var e = [], t = 0; t < this.boxes.length; t++) {
								var n = this.boxes[t];
								if (n) {
									if (this.isVisible(n)) {
										this.show(n);
										continue
									}
									e.push(n)
								}
							}
							this.boxes = e, this.boxes.length || this.config.live || this.stop()
						}
					}
				}, {
					key: "offsetTop",
					value: function (e) {
						for (; void 0 === e.offsetTop;) e = e.parentNode;
						for (var t = e.offsetTop; e.offsetParent;) t += (e = e.offsetParent).offsetTop;
						return t
					}
				}, {
					key: "isVisible",
					value: function (e) {
						var t = e.getAttribute("data-wow-offset") || this.config.offset,
							n = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
							i = n + Math.min(this.element.clientHeight, "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight) - t,
							o = this.offsetTop(e),
							s = o + e.clientHeight;
						return o <= i && n <= s
					}
				}, {
					key: "disabled",
					value: function () {
						return !this.config.mobile && (e = navigator.userAgent, /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e));
						var e
					}
				}]), t
			}();
		t.default = p, e.exports = t.default
	}),
	function (g, m, v, b) {
		g.site = g.fn.site = function (e) {
			var a, l, i = (new Date).getTime(),
				o = [],
				t = e,
				n = "string" == typeof t,
				c = [].slice.call(arguments, 1),
				u = g.isPlainObject(e) ? g.extend(!0, {}, g.site.settings, e) : g.extend({}, g.site.settings),
				s = u.namespace,
				d = u.error,
				r = "module-" + s,
				p = g(v),
				f = this,
				h = p.data(r);
			return a = {
				initialize: function () {
					a.instantiate()
				},
				instantiate: function () {
					a.verbose("Storing instance of site", a), h = a, p.data(r, a)
				},
				normalize: function () {
					a.fix.console(), a.fix.requestAnimationFrame()
				},
				fix: {
					console: function () {
						a.debug("Normalizing window.console"), console !== b && console.log !== b || (a.verbose("Console not available, normalizing events"), a.disable.console()), void 0 !== console.group && void 0 !== console.groupEnd && void 0 !== console.groupCollapsed || (a.verbose("Console group not available, normalizing events"), m.console.group = function () { }, m.console.groupEnd = function () { }, m.console.groupCollapsed = function () { }), void 0 === console.markTimeline && (a.verbose("Mark timeline not available, normalizing events"), m.console.markTimeline = function () { })
					},
					consoleClear: function () {
						a.debug("Disabling programmatic console clearing"), m.console.clear = function () { }
					},
					requestAnimationFrame: function () {
						a.debug("Normalizing requestAnimationFrame"), m.requestAnimationFrame === b && (a.debug("RequestAnimationFrame not available, normalizing event"), m.requestAnimationFrame = m.requestAnimationFrame || m.mozRequestAnimationFrame || m.webkitRequestAnimationFrame || m.msRequestAnimationFrame || function (e) {
							setTimeout(e, 0)
						})
					}
				},
				moduleExists: function (e) {
					return g.fn[e] !== b && g.fn[e].settings !== b
				},
				enabled: {
					modules: function (e) {
						var n = [];
						return e = e || u.modules, g.each(e, function (e, t) {
							a.moduleExists(t) && n.push(t)
						}), n
					}
				},
				disabled: {
					modules: function (e) {
						var n = [];
						return e = e || u.modules, g.each(e, function (e, t) {
							a.moduleExists(t) || n.push(t)
						}), n
					}
				},
				change: {
					setting: function (o, s, e, r) {
						e = "string" == typeof e ? "all" === e ? u.modules : [e] : e || u.modules, r = r === b || r, g.each(e, function (e, t) {
							var n, i = !a.moduleExists(t) || g.fn[t].settings.namespace || !1;
							a.moduleExists(t) && (a.verbose("Changing default setting", o, s, t), g.fn[t].settings[o] = s, r && i && 0 < (n = g(":data(module-" + i + ")")).length && (a.verbose("Modifying existing settings", n), n[t]("setting", o, s)))
						})
					},
					settings: function (i, e, o) {
						e = "string" == typeof e ? [e] : e || u.modules, o = o === b || o, g.each(e, function (e, t) {
							var n;
							a.moduleExists(t) && (a.verbose("Changing default setting", i, t), g.extend(!0, g.fn[t].settings, i), o && s && 0 < (n = g(":data(module-" + s + ")")).length && (a.verbose("Modifying existing settings", n), n[t]("setting", i)))
						})
					}
				},
				enable: {
					console: function () {
						a.console(!0)
					},
					debug: function (e, t) {
						e = e || u.modules, a.debug("Enabling debug for modules", e), a.change.setting("debug", !0, e, t)
					},
					verbose: function (e, t) {
						e = e || u.modules, a.debug("Enabling verbose debug for modules", e), a.change.setting("verbose", !0, e, t)
					}
				},
				disable: {
					console: function () {
						a.console(!1)
					},
					debug: function (e, t) {
						e = e || u.modules, a.debug("Disabling debug for modules", e), a.change.setting("debug", !1, e, t)
					},
					verbose: function (e, t) {
						e = e || u.modules, a.debug("Disabling verbose debug for modules", e), a.change.setting("verbose", !1, e, t)
					}
				},
				console: function (e) {
					if (e) {
						if (h.cache.console === b) return void a.error(d.console);
						a.debug("Restoring console function"), m.console = h.cache.console
					} else a.debug("Disabling console function"), h.cache.console = m.console, m.console = {
						clear: function () { },
						error: function () { },
						group: function () { },
						groupCollapsed: function () { },
						groupEnd: function () { },
						info: function () { },
						log: function () { },
						markTimeline: function () { },
						warn: function () { }
					}
				},
				destroy: function () {
					a.verbose("Destroying previous site for", p), p.removeData(r)
				},
				cache: {},
				setting: function (e, t) {
					if (g.isPlainObject(e)) g.extend(!0, u, e);
					else {
						if (t === b) return u[e];
						u[e] = t
					}
				},
				internal: function (e, t) {
					if (g.isPlainObject(e)) g.extend(!0, a, e);
					else {
						if (t === b) return a[e];
						a[e] = t
					}
				},
				debug: function () {
					u.debug && (u.performance ? a.performance.log(arguments) : (a.debug = Function.prototype.bind.call(console.info, console, u.name + ":"), a.debug.apply(console, arguments)))
				},
				verbose: function () {
					u.verbose && u.debug && (u.performance ? a.performance.log(arguments) : (a.verbose = Function.prototype.bind.call(console.info, console, u.name + ":"), a.verbose.apply(console, arguments)))
				},
				error: function () {
					a.error = Function.prototype.bind.call(console.error, console, u.name + ":"), a.error.apply(console, arguments)
				},
				performance: {
					log: function (e) {
						var t, n;
						u.performance && (n = (t = (new Date).getTime()) - (i || t), i = t, o.push({
							Element: f,
							Name: e[0],
							Arguments: [].slice.call(e, 1) || "",
							"Execution Time": n
						})), clearTimeout(a.performance.timer), a.performance.timer = setTimeout(a.performance.display, 500)
					},
					display: function () {
						var e = u.name + ":",
							n = 0;
						i = !1, clearTimeout(a.performance.timer), g.each(o, function (e, t) {
							n += t["Execution Time"]
						}), e += " " + n + "ms", (console.group !== b || console.table !== b) && 0 < o.length && (console.groupCollapsed(e), console.table ? console.table(o) : g.each(o, function (e, t) {
							console.log(t.Name + ": " + t["Execution Time"] + "ms")
						}), console.groupEnd()), o = []
					}
				},
				invoke: function (i, e, t) {
					var o, s, n, r = h;
					return e = e || c, t = f || t, "string" == typeof i && r !== b && (i = i.split(/[\. ]/), o = i.length - 1, g.each(i, function (e, t) {
						var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
						if (g.isPlainObject(r[n]) && e != o) r = r[n];
						else {
							if (r[n] !== b) return s = r[n], !1;
							if (!g.isPlainObject(r[t]) || e == o) return r[t] !== b ? s = r[t] : a.error(d.method, i), !1;
							r = r[t]
						}
					})), g.isFunction(s) ? n = s.apply(t, e) : s !== b && (n = s), g.isArray(l) ? l.push(n) : l !== b ? l = [l, n] : n !== b && (l = n), s
				}
			}, n ? (h === b && a.initialize(), a.invoke(t)) : (h !== b && a.destroy(), a.initialize()), l !== b ? l : this
		}, g.site.settings = {
			name: "Site",
			namespace: "site",
			error: {
				console: "Console cannot be restored, most likely it was overwritten outside of module",
				method: "The method you called is not defined."
			},
			debug: !1,
			verbose: !1,
			performance: !0,
			modules: ["accordion", "api", "checkbox", "dimmer", "dropdown", "embed", "form", "modal", "nag", "popup", "rating", "shape", "sidebar", "state", "sticky", "tab", "transition", "visit", "visibility"],
			siteNamespace: "site",
			namespaceStub: {
				cache: {},
				config: {},
				sections: {},
				section: {},
				utilities: {}
			}
		}, g.extend(g.expr[":"], {
			data: g.expr.createPseudo ? g.expr.createPseudo(function (t) {
				return function (e) {
					return !!g.data(e, t)
				}
			}) : function (e, t, n) {
				return !!g.data(e, n[3])
			}
		})
	}(jQuery, window, document),
	function (O, e, $, R) {
		"use strict";
		e = void 0 !== e && e.Math == Math ? e : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), O.fn.form = function (w) {
			var x, C = O(this),
				k = C.selector || "",
				S = (new Date).getTime(),
				T = [],
				A = w,
				E = arguments[1],
				P = "string" == typeof A,
				D = [].slice.call(arguments, 1);
			return C.each(function () {
				var n, l, t, e, d, c, u, p, f, i, a, o, s, r, h, g, m = O(this),
					v = this,
					b = [],
					y = !1;
				(g = {
					initialize: function () {
						g.get.settings(), P ? (h === R && g.instantiate(), g.invoke(A)) : (h !== R && h.invoke("destroy"), g.verbose("Initializing form validation", m, d), g.bindEvents(), g.set.defaults(), g.instantiate())
					},
					instantiate: function () {
						g.verbose("Storing instance of module", g), h = g, m.data(s, g)
					},
					destroy: function () {
						g.verbose("Destroying previous module", h), g.removeEvents(), m.removeData(s)
					},
					refresh: function () {
						g.verbose("Refreshing selector cache"), n = m.find(p.field), l = m.find(p.group), t = m.find(p.message), m.find(p.prompt), e = m.find(p.submit), m.find(p.clear), m.find(p.reset)
					},
					submit: function () {
						g.verbose("Submitting form", m), m.submit()
					},
					attachEvents: function (e, t) {
						t = t || "submit", O(e).on("click" + r, function (e) {
							g[t](), e.preventDefault()
						})
					},
					bindEvents: function () {
						g.verbose("Attaching form events"), m.on("submit" + r, g.validate.form).on("blur" + r, p.field, g.event.field.blur).on("click" + r, p.submit, g.submit).on("click" + r, p.reset, g.reset).on("click" + r, p.clear, g.clear), d.keyboardShortcuts && m.on("keydown" + r, p.field, g.event.field.keydown), n.each(function () {
							var e = O(this),
								t = e.prop("type"),
								n = g.get.changeEvent(t, e);
							O(this).on(n + r, g.event.field.change)
						})
					},
					clear: function () {
						n.each(function () {
							var e = O(this),
								t = e.parent(),
								n = e.closest(l),
								i = n.find(p.prompt),
								o = e.data(u.defaultValue) || "",
								s = t.is(p.uiCheckbox),
								r = t.is(p.uiDropdown);
							n.hasClass(f.error) && (g.verbose("Resetting error on field", n), n.removeClass(f.error), i.remove()), r ? (g.verbose("Resetting dropdown value", t, o), t.dropdown("clear")) : s ? e.prop("checked", !1) : (g.verbose("Resetting field value", e, o), e.val(""))
						})
					},
					reset: function () {
						n.each(function () {
							var e = O(this),
								t = e.parent(),
								n = e.closest(l),
								i = n.find(p.prompt),
								o = e.data(u.defaultValue),
								s = t.is(p.uiCheckbox),
								r = t.is(p.uiDropdown),
								a = n.hasClass(f.error);
							o !== R && (a && (g.verbose("Resetting error on field", n), n.removeClass(f.error), i.remove()), r ? (g.verbose("Resetting dropdown value", t, o), t.dropdown("restore defaults")) : s ? (g.verbose("Resetting checkbox value", t, o), e.prop("checked", o)) : (g.verbose("Resetting field value", e, o), e.val(o)))
						})
					},
					determine: {
						isValid: function () {
							var n = !0;
							return O.each(c, function (e, t) {
								g.validate.field(t, e, !0) || (n = !1)
							}), n
						}
					},
					is: {
						bracketedRule: function (e) {
							return e.type && e.type.match(d.regExp.bracket)
						},
						shorthandFields: function (e) {
							var t = e[Object.keys(e)[0]];
							return g.is.shorthandRules(t)
						},
						shorthandRules: function (e) {
							return "string" == typeof e || O.isArray(e)
						},
						empty: function (e) {
							return !e || 0 === e.length || (e.is('input[type="checkbox"]') ? !e.is(":checked") : g.is.blank(e))
						},
						blank: function (e) {
							return "" === O.trim(e.val())
						},
						valid: function (e) {
							var n = !0;
							return e ? (g.verbose("Checking if field is valid", e), g.validate.field(c[e], e, !1)) : (g.verbose("Checking if form is valid"), O.each(c, function (e, t) {
								g.is.valid(e) || (n = !1)
							}), n)
						}
					},
					removeEvents: function () {
						m.off(r), n.off(r), e.off(r), n.off(r)
					},
					event: {
						field: {
							keydown: function (e) {
								var t = O(this),
									n = e.which,
									i = t.is(p.input),
									o = t.is(p.checkbox),
									s = 0 < t.closest(p.uiDropdown).length;
								27 == n && (g.verbose("Escape key pressed blurring field"), t.blur()), e.ctrlKey || 13 != n || !i || s || o || (y || (t.one("keyup" + r, g.event.field.keyup), g.submit(), g.debug("Enter pressed on input submitting form")), y = !0)
							},
							keyup: function () {
								y = !1
							},
							blur: function (e) {
								var t = O(this),
									n = t.closest(l),
									i = g.get.validation(t);
								n.hasClass(f.error) ? (g.debug("Revalidating field", t, i), i && g.validate.field(i)) : "blur" == d.on && i && g.validate.field(i)
							},
							change: function (e) {
								var t = O(this),
									n = t.closest(l),
									i = g.get.validation(t);
								i && ("change" == d.on || n.hasClass(f.error) && d.revalidate) && (clearTimeout(g.timer), g.timer = setTimeout(function () {
									g.debug("Revalidating field", t, g.get.validation(t)), g.validate.field(i)
								}, d.delay))
							}
						}
					},
					get: {
						ancillaryValue: function (e) {
							return !(!e.type || !e.value && !g.is.bracketedRule(e)) && (e.value !== R ? e.value : e.type.match(d.regExp.bracket)[1] + "")
						},
						ruleName: function (e) {
							return g.is.bracketedRule(e) ? e.type.replace(e.type.match(d.regExp.bracket)[0], "") : e.type
						},
						changeEvent: function (e, t) {
							return "checkbox" == e || "radio" == e || "hidden" == e || t.is("select") ? "change" : g.get.inputEvent()
						},
						inputEvent: function () {
							return $.createElement("input").oninput !== R ? "input" : $.createElement("input").onpropertychange !== R ? "propertychange" : "keyup"
						},
						fieldsFromShorthand: function (e) {
							var i = {};
							return O.each(e, function (n, e) {
								"string" == typeof e && (e = [e]), i[n] = {
									rules: []
								}, O.each(e, function (e, t) {
									i[n].rules.push({
										type: t
									})
								})
							}), i
						},
						prompt: function (e, t) {
							var n, i, o = g.get.ruleName(e),
								s = g.get.ancillaryValue(e),
								r = g.get.field(t.identifier),
								a = r.val(),
								l = O.isFunction(e.prompt) ? e.prompt(a) : e.prompt || d.prompt[o] || d.text.unspecifiedRule,
								c = -1 !== l.search("{value}"),
								u = -1 !== l.search("{name}");
							return c && (l = l.replace("{value}", r.val())), u && (i = 1 == (n = r.closest(p.group).find("label").eq(0)).length ? n.text() : r.prop("placeholder") || d.text.unspecifiedField, l = l.replace("{name}", i)), l = (l = l.replace("{identifier}", t.identifier)).replace("{ruleValue}", s), e.prompt || g.verbose("Using default validation prompt for type", l, o), l
						},
						settings: function () {
							if (O.isPlainObject(w)) {
								var e = Object.keys(w);
								0 < e.length && w[e[0]].identifier !== R && w[e[0]].rules !== R ? (d = O.extend(!0, {}, O.fn.form.settings, E), c = O.extend({}, O.fn.form.settings.defaults, w), g.error(d.error.oldSyntax, v), g.verbose("Extending settings from legacy parameters", c, d)) : (w.fields && g.is.shorthandFields(w.fields) && (w.fields = g.get.fieldsFromShorthand(w.fields)), d = O.extend(!0, {}, O.fn.form.settings, w), c = O.extend({}, O.fn.form.settings.defaults, d.fields), g.verbose("Extending settings", c, d))
							} else d = O.fn.form.settings, c = O.fn.form.settings.defaults, g.verbose("Using default form validation", c, d);
							o = d.namespace, u = d.metadata, p = d.selector, f = d.className, i = d.regExp, a = d.error, s = "module-" + o, r = "." + o, h = m.data(s), g.refresh()
						},
						field: function (e) {
							return g.verbose("Finding field with identifier", e), e = g.escape.string(e), 0 < n.filter("#" + e).length ? n.filter("#" + e) : 0 < n.filter('[name="' + e + '"]').length ? n.filter('[name="' + e + '"]') : 0 < n.filter('[name="' + e + '[]"]').length ? n.filter('[name="' + e + '[]"]') : 0 < n.filter("[data-" + u.validate + '="' + e + '"]').length ? n.filter("[data-" + u.validate + '="' + e + '"]') : O("<input/>")
						},
						fields: function (e) {
							var n = O();
							return O.each(e, function (e, t) {
								n = n.add(g.get.field(t))
							}), n
						},
						validation: function (n) {
							var i, o;
							return !!c && (O.each(c, function (e, t) {
								o = t.identifier || e, g.get.field(o)[0] == n[0] && (t.identifier = o, i = t)
							}), i || !1)
						},
						value: function (e) {
							var t = [];
							return t.push(e), g.get.values.call(v, t)[e]
						},
						values: function (e) {
							var t = O.isArray(e) ? g.get.fields(e) : n,
								c = {};
							return t.each(function (e, t) {
								var n = O(t),
									i = (n.prop("type"), n.prop("name")),
									o = n.val(),
									s = n.is(p.checkbox),
									r = n.is(p.radio),
									a = -1 !== i.indexOf("[]"),
									l = !!s && n.is(":checked");
								i && (a ? (i = i.replace("[]", ""), c[i] || (c[i] = []), s ? l ? c[i].push(o || !0) : c[i].push(!1) : c[i].push(o)) : r ? c[i] !== R && 0 != c[i] || (c[i] = !!l && (o || !0)) : c[i] = s ? !!l && (o || !0) : o)
							}), c
						}
					},
					has: {
						field: function (e) {
							return g.verbose("Checking for existence of a field with identifier", e), "string" != typeof (e = g.escape.string(e)) && g.error(a.identifier, e), 0 < n.filter("#" + e).length || 0 < n.filter('[name="' + e + '"]').length || 0 < n.filter("[data-" + u.validate + '="' + e + '"]').length
						}
					},
					escape: {
						string: function (e) {
							return (e = String(e)).replace(i.escape, "\\$&")
						}
					},
					add: {
						rule: function (e, t) {
							g.add.field(e, t)
						},
						field: function (n, e) {
							var i = {};
							g.is.shorthandRules(e) ? (e = O.isArray(e) ? e : [e], i[n] = {
								rules: []
							}, O.each(e, function (e, t) {
								i[n].rules.push({
									type: t
								})
							})) : i[n] = e, c = O.extend({}, c, i), g.debug("Adding rules", i, c)
						},
						fields: function (e) {
							var t;
							t = e && g.is.shorthandFields(e) ? g.get.fieldsFromShorthand(e) : e, c = O.extend({}, c, t)
						},
						prompt: function (e, t) {
							var n = g.get.field(e).closest(l),
								i = n.children(p.prompt),
								o = 0 !== i.length;
							t = "string" == typeof t ? [t] : t, g.verbose("Adding field error state", e), n.addClass(f.error), d.inline && (o || (i = d.templates.prompt(t)).appendTo(n), i.html(t[0]), o ? g.verbose("Inline errors are disabled, no inline error added", e) : d.transition && O.fn.transition !== R && m.transition("is supported") ? (g.verbose("Displaying error with css transition", d.transition), i.transition(d.transition + " in", d.duration)) : (g.verbose("Displaying error with fallback javascript animation"), i.fadeIn(d.duration)))
						},
						errors: function (e) {
							g.debug("Adding form error messages", e), g.set.error(), t.html(d.templates.error(e))
						}
					},
					remove: {
						rule: function (n, e) {
							var i = O.isArray(e) ? e : [e];
							if (e == R) return g.debug("Removed all rules"), void (c[n].rules = []);
							c[n] != R && O.isArray(c[n].rules) && O.each(c[n].rules, function (e, t) {
								-1 !== i.indexOf(t.type) && (g.debug("Removed rule", t.type), c[n].rules.splice(e, 1))
							})
						},
						field: function (e) {
							var t = O.isArray(e) ? e : [e];
							O.each(t, function (e, t) {
								g.remove.rule(t)
							})
						},
						rules: function (e, n) {
							O.isArray(e) ? O.each(fields, function (e, t) {
								g.remove.rule(t, n)
							}) : g.remove.rule(e, n)
						},
						fields: function (e) {
							g.remove.field(e)
						},
						prompt: function (e) {
							var t = g.get.field(e).closest(l),
								n = t.children(p.prompt);
							t.removeClass(f.error), d.inline && n.is(":visible") && (g.verbose("Removing prompt for field", e), d.transition && O.fn.transition !== R && m.transition("is supported") ? n.transition(d.transition + " out", d.duration, function () {
								n.remove()
							}) : n.fadeOut(d.duration, function () {
								n.remove()
							}))
						}
					},
					set: {
						success: function () {
							m.removeClass(f.error).addClass(f.success)
						},
						defaults: function () {
							n.each(function () {
								var e = O(this),
									t = 0 < e.filter(p.checkbox).length ? e.is(":checked") : e.val();
								e.data(u.defaultValue, t)
							})
						},
						error: function () {
							m.removeClass(f.success).addClass(f.error)
						},
						value: function (e, t) {
							var n = {};
							return n[e] = t, g.set.values.call(v, n)
						},
						values: function (e) {
							O.isEmptyObject(e) || O.each(e, function (e, t) {
								var n, i = g.get.field(e),
									o = i.parent(),
									s = O.isArray(t),
									r = o.is(p.uiCheckbox),
									a = o.is(p.uiDropdown),
									l = i.is(p.radio) && r;
								0 < i.length && (s && r ? (g.verbose("Selecting multiple", t, i), o.checkbox("uncheck"), O.each(t, function (e, t) {
									n = i.filter('[value="' + t + '"]'), o = n.parent(), 0 < n.length && o.checkbox("check")
								})) : l ? (g.verbose("Selecting radio value", t, i), i.filter('[value="' + t + '"]').parent(p.uiCheckbox).checkbox("check")) : r ? (g.verbose("Setting checkbox value", t, o), !0 === t ? o.checkbox("check") : o.checkbox("uncheck")) : a ? (g.verbose("Setting dropdown value", t, o), o.dropdown("set selected", t)) : (g.verbose("Setting field value", t, i), i.val(t)))
							})
						}
					},
					validate: {
						form: function (e, t) {
							var n = g.get.values();
							if (y) return !1;
							if (b = [], g.determine.isValid()) {
								if (g.debug("Form has no validation errors, submitting"), g.set.success(), !0 !== t) return d.onSuccess.call(v, e, n)
							} else if (g.debug("Form has errors"), g.set.error(), d.inline || g.add.errors(b), m.data("moduleApi") !== R && e.stopImmediatePropagation(), !0 !== t) return d.onFailure.call(v, b, n)
						},
						field: function (n, e, t) {
							t = t === R || t, "string" == typeof n && (g.verbose("Validating field", n), n = c[e = n]);
							var i = n.identifier || e,
								o = g.get.field(i),
								s = !!n.depends && g.get.field(n.depends),
								r = !0,
								a = [];
							return n.identifier || (g.debug("Using field name as identifier", i), n.identifier = i), o.prop("disabled") ? (g.debug("Field is disabled. Skipping", i), r = !0) : n.optional && g.is.blank(o) ? (g.debug("Field is optional and blank. Skipping", i), r = !0) : n.depends && g.is.empty(s) ? (g.debug("Field depends on another value that is not present or empty. Skipping", s), r = !0) : n.rules !== R && O.each(n.rules, function (e, t) {
								g.has.field(i) && !g.validate.rule(n, t) && (g.debug("Field is invalid", i, t.type), a.push(g.get.prompt(t, n)), r = !1)
							}), r ? (t && (g.remove.prompt(i, a), d.onValid.call(o)), !0) : (t && (b = b.concat(a), g.add.prompt(i, a), d.onInvalid.call(o, a)), !1)
						},
						rule: function (e, t) {
							var n = g.get.field(e.identifier),
								i = (t.type, n.val()),
								o = g.get.ancillaryValue(t),
								s = g.get.ruleName(t),
								r = d.rules[s];
							if (O.isFunction(r)) return i = i === R || "" === i || null === i ? "" : O.trim(i + ""), r.call(n, i, o);
							g.error(a.noRule, s)
						}
					},
					setting: function (e, t) {
						if (O.isPlainObject(e)) O.extend(!0, d, e);
						else {
							if (t === R) return d[e];
							d[e] = t
						}
					},
					internal: function (e, t) {
						if (O.isPlainObject(e)) O.extend(!0, g, e);
						else {
							if (t === R) return g[e];
							g[e] = t
						}
					},
					debug: function () {
						!d.silent && d.debug && (d.performance ? g.performance.log(arguments) : (g.debug = Function.prototype.bind.call(console.info, console, d.name + ":"), g.debug.apply(console, arguments)))
					},
					verbose: function () {
						!d.silent && d.verbose && d.debug && (d.performance ? g.performance.log(arguments) : (g.verbose = Function.prototype.bind.call(console.info, console, d.name + ":"), g.verbose.apply(console, arguments)))
					},
					error: function () {
						d.silent || (g.error = Function.prototype.bind.call(console.error, console, d.name + ":"), g.error.apply(console, arguments))
					},
					performance: {
						log: function (e) {
							var t, n;
							d.performance && (n = (t = (new Date).getTime()) - (S || t), S = t, T.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: v,
								"Execution Time": n
							})), clearTimeout(g.performance.timer), g.performance.timer = setTimeout(g.performance.display, 500)
						},
						display: function () {
							var e = d.name + ":",
								n = 0;
							S = !1, clearTimeout(g.performance.timer), O.each(T, function (e, t) {
								n += t["Execution Time"]
							}), e += " " + n + "ms", k && (e += " '" + k + "'"), 1 < C.length && (e += " (" + C.length + ")"), (console.group !== R || console.table !== R) && 0 < T.length && (console.groupCollapsed(e), console.table ? console.table(T) : O.each(T, function (e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), T = []
						}
					},
					invoke: function (i, e, t) {
						var o, s, n, r = h;
						return e = e || D, t = v || t, "string" == typeof i && r !== R && (i = i.split(/[\. ]/), o = i.length - 1, O.each(i, function (e, t) {
							var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
							if (O.isPlainObject(r[n]) && e != o) r = r[n];
							else {
								if (r[n] !== R) return s = r[n], !1;
								if (!O.isPlainObject(r[t]) || e == o) return r[t] !== R && (s = r[t]), !1;
								r = r[t]
							}
						})), O.isFunction(s) ? n = s.apply(t, e) : s !== R && (n = s), O.isArray(x) ? x.push(n) : x !== R ? x = [x, n] : n !== R && (x = n), s
					}
				}).initialize()
			}), x !== R ? x : this
		}, O.fn.form.settings = {
			name: "Form",
			namespace: "form",
			debug: !1,
			verbose: !1,
			performance: !0,
			fields: !1,
			keyboardShortcuts: !0,
			on: "submit",
			inline: !1,
			delay: 200,
			revalidate: !0,
			transition: "scale",
			duration: 200,
			onValid: function () { },
			onInvalid: function () { },
			onSuccess: function () {
				return !0
			},
			onFailure: function () {
				return !1
			},
			metadata: {
				defaultValue: "default",
				validate: "validate"
			},
			regExp: {
				htmlID: /^[a-zA-Z][\w:.-]*$/g,
				bracket: /\[(.*)\]/i,
				decimal: /^\d+\.?\d*$/,
				email: /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
				escape: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
				flags: /^\/(.*)\/(.*)?/,
				integer: /^\-?\d+$/,
				number: /^\-?\d*(\.\d+)?$/,
				url: /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/i
			},
			text: {
				unspecifiedRule: "Please enter a valid value",
				unspecifiedField: "This field"
			},
			prompt: {
				empty: "{name} must have a value",
				checked: "{name} must be checked",
				email: "{name} must be a valid e-mail",
				url: "{name} must be a valid url",
				regExp: "{name} is not formatted correctly",
				integer: "{name} must be an integer",
				decimal: "{name} must be a decimal number",
				number: "{name} must be set to a number",
				is: '{name} must be "{ruleValue}"',
				isExactly: '{name} must be exactly "{ruleValue}"',
				not: '{name} cannot be set to "{ruleValue}"',
				notExactly: '{name} cannot be set to exactly "{ruleValue}"',
				contain: '{name} must contain "{ruleValue}"',
				containExactly: '{name} must contain exactly "{ruleValue}"',
				doesntContain: '{name} cannot contain  "{ruleValue}"',
				doesntContainExactly: '{name} cannot contain exactly "{ruleValue}"',
				minLength: "{name} must be at least {ruleValue} characters",
				length: "{name} must be at least {ruleValue} characters",
				exactLength: "{name} must be exactly {ruleValue} characters",
				maxLength: "{name} cannot be longer than {ruleValue} characters",
				match: "{name} must match {ruleValue} field",
				different: "{name} must have a different value than {ruleValue} field",
				creditCard: "{name} must be a valid credit card number",
				minCount: "{name} must have at least {ruleValue} choices",
				exactCount: "{name} must have exactly {ruleValue} choices",
				maxCount: "{name} must have {ruleValue} or less choices"
			},
			selector: {
				checkbox: 'input[type="checkbox"], input[type="radio"]',
				clear: ".clear",
				field: "input, textarea, select",
				group: ".field",
				input: "input",
				message: ".error.message",
				prompt: ".prompt.label",
				radio: 'input[type="radio"]',
				reset: '.reset:not([type="reset"])',
				submit: '.submit:not([type="submit"])',
				uiCheckbox: ".ui.checkbox",
				uiDropdown: ".ui.dropdown"
			},
			className: {
				error: "error",
				label: "ui prompt label",
				pressed: "down",
				success: "success"
			},
			error: {
				identifier: "You must specify a string identifier for each field",
				method: "The method you called is not defined.",
				noRule: "There is no rule matching the one you specified",
				oldSyntax: "Starting in 2.0 forms now only take a single settings object. Validation settings converted to new syntax automatically."
			},
			templates: {
				error: function (e) {
					var n = '<ul class="list">';
					return O.each(e, function (e, t) {
						n += "<li>" + t + "</li>"
					}), O(n += "</ul>")
				},
				prompt: function (e) {
					return O("<div/>").addClass("ui basic red pointing prompt label").html(e[0])
				}
			},
			rules: {
				empty: function (e) {
					return !(e === R || "" === e || O.isArray(e) && 0 === e.length)
				},
				checked: function () {
					return 0 < O(this).filter(":checked").length
				},
				email: function (e) {
					return O.fn.form.settings.regExp.email.test(e)
				},
				url: function (e) {
					return O.fn.form.settings.regExp.url.test(e)
				},
				regExp: function (e, t) {
					if (t instanceof RegExp) return e.match(t);
					var n, i = t.match(O.fn.form.settings.regExp.flags);
					return i && (t = 2 <= i.length ? i[1] : t, n = 3 <= i.length ? i[2] : ""), e.match(new RegExp(t, n))
				},
				integer: function (e, t) {
					var n, i, o, s = O.fn.form.settings.regExp.integer;
					return t && -1 === ["", ".."].indexOf(t) && (-1 == t.indexOf("..") ? s.test(t) && (n = i = t - 0) : (o = t.split("..", 2), s.test(o[0]) && (n = o[0] - 0), s.test(o[1]) && (i = o[1] - 0))), s.test(e) && (n === R || n <= e) && (i === R || e <= i)
				},
				decimal: function (e) {
					return O.fn.form.settings.regExp.decimal.test(e)
				},
				number: function (e) {
					return O.fn.form.settings.regExp.number.test(e)
				},
				is: function (e, t) {
					return t = "string" == typeof t ? t.toLowerCase() : t, (e = "string" == typeof e ? e.toLowerCase() : e) == t
				},
				isExactly: function (e, t) {
					return e == t
				},
				not: function (e, t) {
					return (e = "string" == typeof e ? e.toLowerCase() : e) != ("string" == typeof t ? t.toLowerCase() : t)
				},
				notExactly: function (e, t) {
					return e != t
				},
				contains: function (e, t) {
					return t = t.replace(O.fn.form.settings.regExp.escape, "\\$&"), -1 !== e.search(new RegExp(t, "i"))
				},
				containsExactly: function (e, t) {
					return t = t.replace(O.fn.form.settings.regExp.escape, "\\$&"), -1 !== e.search(new RegExp(t))
				},
				doesntContain: function (e, t) {
					return t = t.replace(O.fn.form.settings.regExp.escape, "\\$&"), -1 === e.search(new RegExp(t, "i"))
				},
				doesntContainExactly: function (e, t) {
					return t = t.replace(O.fn.form.settings.regExp.escape, "\\$&"), -1 === e.search(new RegExp(t))
				},
				minLength: function (e, t) {
					return e !== R && e.length >= t
				},
				length: function (e, t) {
					return e !== R && e.length >= t
				},
				exactLength: function (e, t) {
					return e !== R && e.length == t
				},
				maxLength: function (e, t) {
					return e !== R && e.length <= t
				},
				match: function (e, t) {
					var n;
					return O(this), 0 < O('[data-validate="' + t + '"]').length ? n = O('[data-validate="' + t + '"]').val() : 0 < O("#" + t).length ? n = O("#" + t).val() : 0 < O('[name="' + t + '"]').length ? n = O('[name="' + t + '"]').val() : 0 < O('[name="' + t + '[]"]').length && (n = O('[name="' + t + '[]"]')), n !== R && e.toString() == n.toString()
				},
				different: function (e, t) {
					var n;
					return O(this), 0 < O('[data-validate="' + t + '"]').length ? n = O('[data-validate="' + t + '"]').val() : 0 < O("#" + t).length ? n = O("#" + t).val() : 0 < O('[name="' + t + '"]').length ? n = O('[name="' + t + '"]').val() : 0 < O('[name="' + t + '[]"]').length && (n = O('[name="' + t + '[]"]')), n !== R && e.toString() !== n.toString()
				},
				creditCard: function (n, e) {
					var t, i, o = {
						visa: {
							pattern: /^4/,
							length: [16]
						},
						amex: {
							pattern: /^3[47]/,
							length: [15]
						},
						mastercard: {
							pattern: /^5[1-5]/,
							length: [16]
						},
						discover: {
							pattern: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,
							length: [16]
						},
						unionPay: {
							pattern: /^(62|88)/,
							length: [16, 17, 18, 19]
						},
						jcb: {
							pattern: /^35(2[89]|[3-8][0-9])/,
							length: [16]
						},
						maestro: {
							pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
							length: [12, 13, 14, 15, 16, 17, 18, 19]
						},
						dinersClub: {
							pattern: /^(30[0-5]|^36)/,
							length: [14]
						},
						laser: {
							pattern: /^(6304|670[69]|6771)/,
							length: [16, 17, 18, 19]
						},
						visaElectron: {
							pattern: /^(4026|417500|4508|4844|491(3|7))/,
							length: [16]
						}
					},
						s = {},
						r = !1,
						a = "string" == typeof e && e.split(",");
					if ("string" == typeof n && 0 !== n.length) {
						if (n = n.replace(/[\-]/g, ""), a && (O.each(a, function (e, t) {
							(i = o[t]) && (s = {
								length: -1 !== O.inArray(n.length, i.length),
								pattern: -1 !== n.search(i.pattern)
							}).length && s.pattern && (r = !0)
						}), !r)) return !1;
						if ((t = {
							number: -1 !== O.inArray(n.length, o.unionPay.length),
							pattern: -1 !== n.search(o.unionPay.pattern)
						}).number && t.pattern) return !0;
						for (var l = n.length, c = 0, u = [
							[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
							[0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
						], d = 0; l--;) d += u[c][parseInt(n.charAt(l), 10)], c ^= 1;
						return d % 10 == 0 && 0 < d
					}
				},
				minCount: function (e, t) {
					return 0 == t || (1 == t ? "" !== e : e.split(",").length >= t)
				},
				exactCount: function (e, t) {
					return 0 == t ? "" === e : 1 == t ? "" !== e && -1 === e.search(",") : e.split(",").length == t
				},
				maxCount: function (e, t) {
					return 0 != t && (1 == t ? -1 === e.search(",") : e.split(",").length <= t)
				}
			}
		}
	}(jQuery, window, document),
	function (k, S, e, T) {
		"use strict";
		S = void 0 !== S && S.Math == Math ? S : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), k.fn.accordion = function (s) {
			var v, r = k(this),
				b = (new Date).getTime(),
				y = [],
				w = s,
				x = "string" == typeof w,
				C = [].slice.call(arguments, 1);
			return S.requestAnimationFrame || S.mozRequestAnimationFrame || S.webkitRequestAnimationFrame || S.msRequestAnimationFrame, r.each(function () {
				var e, c, u = k.isPlainObject(s) ? k.extend(!0, {}, k.fn.accordion.settings, s) : k.extend({}, k.fn.accordion.settings),
					d = u.className,
					t = u.namespace,
					p = u.selector,
					a = u.error,
					n = "." + t,
					i = "module-" + t,
					o = r.selector || "",
					f = k(this),
					h = f.find(p.title),
					g = f.find(p.content),
					l = this,
					m = f.data(i);
				c = {
					initialize: function () {
						c.debug("Initializing", f), c.bind.events(), u.observeChanges && c.observeChanges(), c.instantiate()
					},
					instantiate: function () {
						m = c, f.data(i, c)
					},
					destroy: function () {
						c.debug("Destroying previous instance", f), f.off(n).removeData(i)
					},
					refresh: function () {
						h = f.find(p.title), g = f.find(p.content)
					},
					observeChanges: function () {
						"MutationObserver" in S && ((e = new MutationObserver(function (e) {
							c.debug("DOM tree modified, updating selector cache"), c.refresh()
						})).observe(l, {
							childList: !0,
							subtree: !0
						}), c.debug("Setting up mutation observer", e))
					},
					bind: {
						events: function () {
							c.debug("Binding delegated events"), f.on(u.on + n, p.trigger, c.event.click)
						}
					},
					event: {
						click: function () {
							c.toggle.call(this)
						}
					},
					toggle: function (e) {
						var t = e !== T ? "number" == typeof e ? h.eq(e) : k(e).closest(p.title) : k(this).closest(p.title),
							n = t.next(g),
							i = n.hasClass(d.animating),
							o = n.hasClass(d.active),
							s = o && !i,
							r = !o && i;
						c.debug("Toggling visibility of content", t), s || r ? u.collapsible ? c.close.call(t) : c.debug("Cannot close accordion content collapsing is disabled") : c.open.call(t)
					},
					open: function (e) {
						var t = e !== T ? "number" == typeof e ? h.eq(e) : k(e).closest(p.title) : k(this).closest(p.title),
							n = t.next(g),
							i = n.hasClass(d.animating);
						n.hasClass(d.active) || i ? c.debug("Accordion already open, skipping", n) : (c.debug("Opening accordion content", t), u.onOpening.call(n), u.onChanging.call(n), u.exclusive && c.closeOthers.call(t), t.addClass(d.active), n.stop(!0, !0).addClass(d.animating), u.animateChildren && (k.fn.transition !== T && f.transition("is supported") ? n.children().transition({
							animation: "fade in",
							queue: !1,
							useFailSafe: !0,
							debug: u.debug,
							verbose: u.verbose,
							duration: u.duration
						}) : n.children().stop(!0, !0).animate({
							opacity: 1
						}, u.duration, c.resetOpacity)), n.slideDown(u.duration, u.easing, function () {
							n.removeClass(d.animating).addClass(d.active), c.reset.display.call(this), u.onOpen.call(this), u.onChange.call(this)
						}))
					},
					close: function (e) {
						var t = e !== T ? "number" == typeof e ? h.eq(e) : k(e).closest(p.title) : k(this).closest(p.title),
							n = t.next(g),
							i = n.hasClass(d.animating),
							o = n.hasClass(d.active);
						!o && (o || !i) || o && i || (c.debug("Closing accordion content", n), u.onClosing.call(n), u.onChanging.call(n), t.removeClass(d.active), n.stop(!0, !0).addClass(d.animating), u.animateChildren && (k.fn.transition !== T && f.transition("is supported") ? n.children().transition({
							animation: "fade out",
							queue: !1,
							useFailSafe: !0,
							debug: u.debug,
							verbose: u.verbose,
							duration: u.duration
						}) : n.children().stop(!0, !0).animate({
							opacity: 0
						}, u.duration, c.resetOpacity)), n.slideUp(u.duration, u.easing, function () {
							n.removeClass(d.animating).removeClass(d.active), c.reset.display.call(this), u.onClose.call(this), u.onChange.call(this)
						}))
					},
					closeOthers: function (e) {
						var t, n, i, o = e !== T ? h.eq(e) : k(this).closest(p.title),
							s = o.parents(p.content).prev(p.title),
							r = o.closest(p.accordion),
							a = p.title + "." + d.active + ":visible",
							l = p.content + "." + d.active + ":visible";
						i = u.closeNested ? (t = r.find(a).not(s)).next(g) : (t = r.find(a).not(s), n = r.find(l).find(a).not(s), (t = t.not(n)).next(g)), 0 < t.length && (c.debug("Exclusive enabled, closing other content", t), t.removeClass(d.active), i.removeClass(d.animating).stop(!0, !0), u.animateChildren && (k.fn.transition !== T && f.transition("is supported") ? i.children().transition({
							animation: "fade out",
							useFailSafe: !0,
							debug: u.debug,
							verbose: u.verbose,
							duration: u.duration
						}) : i.children().stop(!0, !0).animate({
							opacity: 0
						}, u.duration, c.resetOpacity)), i.slideUp(u.duration, u.easing, function () {
							k(this).removeClass(d.active), c.reset.display.call(this)
						}))
					},
					reset: {
						display: function () {
							c.verbose("Removing inline display from element", this), k(this).css("display", ""), "" === k(this).attr("style") && k(this).attr("style", "").removeAttr("style")
						},
						opacity: function () {
							c.verbose("Removing inline opacity from element", this), k(this).css("opacity", ""), "" === k(this).attr("style") && k(this).attr("style", "").removeAttr("style")
						}
					},
					setting: function (e, t) {
						if (c.debug("Changing setting", e, t), k.isPlainObject(e)) k.extend(!0, u, e);
						else {
							if (t === T) return u[e];
							k.isPlainObject(u[e]) ? k.extend(!0, u[e], t) : u[e] = t
						}
					},
					internal: function (e, t) {
						if (c.debug("Changing internal", e, t), t === T) return c[e];
						k.isPlainObject(e) ? k.extend(!0, c, e) : c[e] = t
					},
					debug: function () {
						!u.silent && u.debug && (u.performance ? c.performance.log(arguments) : (c.debug = Function.prototype.bind.call(console.info, console, u.name + ":"), c.debug.apply(console, arguments)))
					},
					verbose: function () {
						!u.silent && u.verbose && u.debug && (u.performance ? c.performance.log(arguments) : (c.verbose = Function.prototype.bind.call(console.info, console, u.name + ":"), c.verbose.apply(console, arguments)))
					},
					error: function () {
						u.silent || (c.error = Function.prototype.bind.call(console.error, console, u.name + ":"), c.error.apply(console, arguments))
					},
					performance: {
						log: function (e) {
							var t, n;
							u.performance && (n = (t = (new Date).getTime()) - (b || t), b = t, y.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: l,
								"Execution Time": n
							})), clearTimeout(c.performance.timer), c.performance.timer = setTimeout(c.performance.display, 500)
						},
						display: function () {
							var e = u.name + ":",
								n = 0;
							b = !1, clearTimeout(c.performance.timer), k.each(y, function (e, t) {
								n += t["Execution Time"]
							}), e += " " + n + "ms", o && (e += " '" + o + "'"), (console.group !== T || console.table !== T) && 0 < y.length && (console.groupCollapsed(e), console.table ? console.table(y) : k.each(y, function (e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), y = []
						}
					},
					invoke: function (i, e, t) {
						var o, s, n, r = m;
						return e = e || C, t = l || t, "string" == typeof i && r !== T && (i = i.split(/[\. ]/), o = i.length - 1, k.each(i, function (e, t) {
							var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
							if (k.isPlainObject(r[n]) && e != o) r = r[n];
							else {
								if (r[n] !== T) return s = r[n], !1;
								if (!k.isPlainObject(r[t]) || e == o) return r[t] !== T ? s = r[t] : c.error(a.method, i), !1;
								r = r[t]
							}
						})), k.isFunction(s) ? n = s.apply(t, e) : s !== T && (n = s), k.isArray(v) ? v.push(n) : v !== T ? v = [v, n] : n !== T && (v = n), s
					}
				}, x ? (m === T && c.initialize(), c.invoke(w)) : (m !== T && m.invoke("destroy"), c.initialize())
			}), v !== T ? v : this
		}, k.fn.accordion.settings = {
			name: "Accordion",
			namespace: "accordion",
			silent: !1,
			debug: !1,
			verbose: !1,
			performance: !0,
			on: "click",
			observeChanges: !0,
			exclusive: !0,
			collapsible: !0,
			closeNested: !1,
			animateChildren: !0,
			duration: 350,
			easing: "easeOutQuad",
			onOpening: function () { },
			onClosing: function () { },
			onChanging: function () { },
			onOpen: function () { },
			onClose: function () { },
			onChange: function () { },
			error: {
				method: "The method you called is not defined"
			},
			className: {
				active: "active",
				animating: "animating"
			},
			selector: {
				accordion: ".accordion",
				title: ".title",
				trigger: ".title",
				content: ".content"
			}
		}, k.extend(k.easing, {
			easeOutQuad: function (e, t, n, i, o) {
				return -i * (t /= o) * (t - 2) + n
			}
		})
	}(jQuery, window, document),
	function (T, A, E, P) {
		"use strict";
		A = void 0 !== A && A.Math == Math ? A : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), T.fn.checkbox = function (v) {
			var b, e = T(this),
				y = e.selector || "",
				w = (new Date).getTime(),
				x = [],
				C = v,
				k = "string" == typeof C,
				S = [].slice.call(arguments, 1);
			return e.each(function () {
				var e, a, i = T.extend(!0, {}, T.fn.checkbox.settings, v),
					t = i.className,
					n = i.namespace,
					o = i.selector,
					l = i.error,
					s = "." + n,
					r = "module-" + n,
					c = T(this),
					u = T(this).children(o.label),
					d = T(this).children(o.input),
					p = d[0],
					f = !1,
					h = !1,
					g = c.data(r),
					m = this;
				a = {
					initialize: function () {
						a.verbose("Initializing checkbox", i), a.create.label(), a.bind.events(), a.set.tabbable(), a.hide.input(), a.observeChanges(), a.instantiate(), a.setup()
					},
					instantiate: function () {
						a.verbose("Storing instance of module", a), g = a, c.data(r, a)
					},
					destroy: function () {
						a.verbose("Destroying module"), a.unbind.events(), a.show.input(), c.removeData(r)
					},
					fix: {
						reference: function () {
							c.is(o.input) && (a.debug("Behavior called on <input> adjusting invoked element"), c = c.closest(o.checkbox), a.refresh())
						}
					},
					setup: function () {
						a.set.initialLoad(), a.is.indeterminate() ? (a.debug("Initial value is indeterminate"), a.indeterminate()) : a.is.checked() ? (a.debug("Initial value is checked"), a.check()) : (a.debug("Initial value is unchecked"), a.uncheck()), a.remove.initialLoad()
					},
					refresh: function () {
						u = c.children(o.label), d = c.children(o.input), p = d[0]
					},
					hide: {
						input: function () {
							a.verbose("Modifying <input> z-index to be unselectable"), d.addClass(t.hidden)
						}
					},
					show: {
						input: function () {
							a.verbose("Modifying <input> z-index to be selectable"), d.removeClass(t.hidden)
						}
					},
					observeChanges: function () {
						"MutationObserver" in A && ((e = new MutationObserver(function (e) {
							a.debug("DOM tree modified, updating selector cache"), a.refresh()
						})).observe(m, {
							childList: !0,
							subtree: !0
						}), a.debug("Setting up mutation observer", e))
					},
					attachEvents: function (e, t) {
						var n = T(e);
						t = T.isFunction(a[t]) ? a[t] : a.toggle, 0 < n.length ? (a.debug("Attaching checkbox events to element", e, t), n.on("click" + s, t)) : a.error(l.notFound)
					},
					event: {
						click: function (e) {
							var t = T(e.target);
							t.is(o.input) ? a.verbose("Using default check action on initialized checkbox") : t.is(o.link) ? a.debug("Clicking link inside checkbox, skipping toggle") : (a.toggle(), d.focus(), e.preventDefault())
						},
						keydown: function (e) {
							var t = e.which;
							h = 27 == t ? (a.verbose("Escape key pressed blurring field"), d.blur(), !0) : !(e.ctrlKey || 32 != t && 13 != t || (a.verbose("Enter/space key pressed, toggling checkbox"), a.toggle(), 0))
						},
						keyup: function (e) {
							h && e.preventDefault()
						}
					},
					check: function () {
						a.should.allowCheck() && (a.debug("Checking checkbox", d), a.set.checked(), a.should.ignoreCallbacks() || (i.onChecked.call(p), i.onChange.call(p)))
					},
					uncheck: function () {
						a.should.allowUncheck() && (a.debug("Unchecking checkbox"), a.set.unchecked(), a.should.ignoreCallbacks() || (i.onUnchecked.call(p), i.onChange.call(p)))
					},
					indeterminate: function () {
						a.should.allowIndeterminate() ? a.debug("Checkbox is already indeterminate") : (a.debug("Making checkbox indeterminate"), a.set.indeterminate(), a.should.ignoreCallbacks() || (i.onIndeterminate.call(p), i.onChange.call(p)))
					},
					determinate: function () {
						a.should.allowDeterminate() ? a.debug("Checkbox is already determinate") : (a.debug("Making checkbox determinate"), a.set.determinate(), a.should.ignoreCallbacks() || (i.onDeterminate.call(p), i.onChange.call(p)))
					},
					enable: function () {
						a.is.enabled() ? a.debug("Checkbox is already enabled") : (a.debug("Enabling checkbox"), a.set.enabled(), i.onEnable.call(p), i.onEnabled.call(p))
					},
					disable: function () {
						a.is.disabled() ? a.debug("Checkbox is already disabled") : (a.debug("Disabling checkbox"), a.set.disabled(), i.onDisable.call(p), i.onDisabled.call(p))
					},
					get: {
						radios: function () {
							var e = a.get.name();
							return T('input[name="' + e + '"]').closest(o.checkbox)
						},
						otherRadios: function () {
							return a.get.radios().not(c)
						},
						name: function () {
							return d.attr("name")
						}
					},
					is: {
						initialLoad: function () {
							return f
						},
						radio: function () {
							return d.hasClass(t.radio) || "radio" == d.attr("type")
						},
						indeterminate: function () {
							return d.prop("indeterminate") !== P && d.prop("indeterminate")
						},
						checked: function () {
							return d.prop("checked") !== P && d.prop("checked")
						},
						disabled: function () {
							return d.prop("disabled") !== P && d.prop("disabled")
						},
						enabled: function () {
							return !a.is.disabled()
						},
						determinate: function () {
							return !a.is.indeterminate()
						},
						unchecked: function () {
							return !a.is.checked()
						}
					},
					should: {
						allowCheck: function () {
							return a.is.determinate() && a.is.checked() && !a.should.forceCallbacks() ? (a.debug("Should not allow check, checkbox is already checked"), !1) : !1 !== i.beforeChecked.apply(p) || (a.debug("Should not allow check, beforeChecked cancelled"), !1)
						},
						allowUncheck: function () {
							return a.is.determinate() && a.is.unchecked() && !a.should.forceCallbacks() ? (a.debug("Should not allow uncheck, checkbox is already unchecked"), !1) : !1 !== i.beforeUnchecked.apply(p) || (a.debug("Should not allow uncheck, beforeUnchecked cancelled"), !1)
						},
						allowIndeterminate: function () {
							return a.is.indeterminate() && !a.should.forceCallbacks() ? (a.debug("Should not allow indeterminate, checkbox is already indeterminate"), !1) : !1 !== i.beforeIndeterminate.apply(p) || (a.debug("Should not allow indeterminate, beforeIndeterminate cancelled"), !1)
						},
						allowDeterminate: function () {
							return a.is.determinate() && !a.should.forceCallbacks() ? (a.debug("Should not allow determinate, checkbox is already determinate"), !1) : !1 !== i.beforeDeterminate.apply(p) || (a.debug("Should not allow determinate, beforeDeterminate cancelled"), !1)
						},
						forceCallbacks: function () {
							return a.is.initialLoad() && i.fireOnInit
						},
						ignoreCallbacks: function () {
							return f && !i.fireOnInit
						}
					},
					can: {
						change: function () {
							return !(c.hasClass(t.disabled) || c.hasClass(t.readOnly) || d.prop("disabled") || d.prop("readonly"))
						},
						uncheck: function () {
							return "boolean" == typeof i.uncheckable ? i.uncheckable : !a.is.radio()
						}
					},
					set: {
						initialLoad: function () {
							f = !0
						},
						checked: function () {
							a.verbose("Setting class to checked"), c.removeClass(t.indeterminate).addClass(t.checked), a.is.radio() && a.uncheckOthers(), a.is.indeterminate() || !a.is.checked() ? (a.verbose("Setting state to checked", p), d.prop("indeterminate", !1).prop("checked", !0), a.trigger.change()) : a.debug("Input is already checked, skipping input property change")
						},
						unchecked: function () {
							a.verbose("Removing checked class"), c.removeClass(t.indeterminate).removeClass(t.checked), a.is.indeterminate() || !a.is.unchecked() ? (a.debug("Setting state to unchecked"), d.prop("indeterminate", !1).prop("checked", !1), a.trigger.change()) : a.debug("Input is already unchecked")
						},
						indeterminate: function () {
							a.verbose("Setting class to indeterminate"), c.addClass(t.indeterminate), a.is.indeterminate() ? a.debug("Input is already indeterminate, skipping input property change") : (a.debug("Setting state to indeterminate"), d.prop("indeterminate", !0), a.trigger.change())
						},
						determinate: function () {
							a.verbose("Removing indeterminate class"), c.removeClass(t.indeterminate), a.is.determinate() ? a.debug("Input is already determinate, skipping input property change") : (a.debug("Setting state to determinate"), d.prop("indeterminate", !1))
						},
						disabled: function () {
							a.verbose("Setting class to disabled"), c.addClass(t.disabled), a.is.disabled() ? a.debug("Input is already disabled, skipping input property change") : (a.debug("Setting state to disabled"), d.prop("disabled", "disabled"), a.trigger.change())
						},
						enabled: function () {
							a.verbose("Removing disabled class"), c.removeClass(t.disabled), a.is.enabled() ? a.debug("Input is already enabled, skipping input property change") : (a.debug("Setting state to enabled"), d.prop("disabled", !1), a.trigger.change())
						},
						tabbable: function () {
							a.verbose("Adding tabindex to checkbox"), d.attr("tabindex") === P && d.attr("tabindex", 0)
						}
					},
					remove: {
						initialLoad: function () {
							f = !1
						}
					},
					trigger: {
						change: function () {
							var e = E.createEvent("HTMLEvents"),
								t = d[0];
							t && (a.verbose("Triggering native change event"), e.initEvent("change", !0, !1), t.dispatchEvent(e))
						}
					},
					create: {
						label: function () {
							0 < d.prevAll(o.label).length ? (d.prev(o.label).detach().insertAfter(d), a.debug("Moving existing label", u)) : a.has.label() || (u = T("<label>").insertAfter(d), a.debug("Creating label", u))
						}
					},
					has: {
						label: function () {
							return 0 < u.length
						}
					},
					bind: {
						events: function () {
							a.verbose("Attaching checkbox events"), c.on("click" + s, a.event.click).on("keydown" + s, o.input, a.event.keydown).on("keyup" + s, o.input, a.event.keyup)
						}
					},
					unbind: {
						events: function () {
							a.debug("Removing events"), c.off(s)
						}
					},
					uncheckOthers: function () {
						var e = a.get.otherRadios();
						a.debug("Unchecking other radios", e), e.removeClass(t.checked)
					},
					toggle: function () {
						a.can.change() ? a.is.indeterminate() || a.is.unchecked() ? (a.debug("Currently unchecked"), a.check()) : a.is.checked() && a.can.uncheck() && (a.debug("Currently checked"), a.uncheck()) : a.is.radio() || a.debug("Checkbox is read-only or disabled, ignoring toggle")
					},
					setting: function (e, t) {
						if (a.debug("Changing setting", e, t), T.isPlainObject(e)) T.extend(!0, i, e);
						else {
							if (t === P) return i[e];
							T.isPlainObject(i[e]) ? T.extend(!0, i[e], t) : i[e] = t
						}
					},
					internal: function (e, t) {
						if (T.isPlainObject(e)) T.extend(!0, a, e);
						else {
							if (t === P) return a[e];
							a[e] = t
						}
					},
					debug: function () {
						!i.silent && i.debug && (i.performance ? a.performance.log(arguments) : (a.debug = Function.prototype.bind.call(console.info, console, i.name + ":"), a.debug.apply(console, arguments)))
					},
					verbose: function () {
						!i.silent && i.verbose && i.debug && (i.performance ? a.performance.log(arguments) : (a.verbose = Function.prototype.bind.call(console.info, console, i.name + ":"), a.verbose.apply(console, arguments)))
					},
					error: function () {
						i.silent || (a.error = Function.prototype.bind.call(console.error, console, i.name + ":"), a.error.apply(console, arguments))
					},
					performance: {
						log: function (e) {
							var t, n;
							i.performance && (n = (t = (new Date).getTime()) - (w || t), w = t, x.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: m,
								"Execution Time": n
							})), clearTimeout(a.performance.timer), a.performance.timer = setTimeout(a.performance.display, 500)
						},
						display: function () {
							var e = i.name + ":",
								n = 0;
							w = !1, clearTimeout(a.performance.timer), T.each(x, function (e, t) {
								n += t["Execution Time"]
							}), e += " " + n + "ms", y && (e += " '" + y + "'"), (console.group !== P || console.table !== P) && 0 < x.length && (console.groupCollapsed(e), console.table ? console.table(x) : T.each(x, function (e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), x = []
						}
					},
					invoke: function (i, e, t) {
						var o, s, n, r = g;
						return e = e || S, t = m || t, "string" == typeof i && r !== P && (i = i.split(/[\. ]/), o = i.length - 1, T.each(i, function (e, t) {
							var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
							if (T.isPlainObject(r[n]) && e != o) r = r[n];
							else {
								if (r[n] !== P) return s = r[n], !1;
								if (!T.isPlainObject(r[t]) || e == o) return r[t] !== P ? s = r[t] : a.error(l.method, i), !1;
								r = r[t]
							}
						})), T.isFunction(s) ? n = s.apply(t, e) : s !== P && (n = s), T.isArray(b) ? b.push(n) : b !== P ? b = [b, n] : n !== P && (b = n), s
					}
				}, k ? (g === P && a.initialize(), a.invoke(C)) : (g !== P && g.invoke("destroy"), a.initialize())
			}), b !== P ? b : this
		}, T.fn.checkbox.settings = {
			name: "Checkbox",
			namespace: "checkbox",
			silent: !1,
			debug: !1,
			verbose: !0,
			performance: !0,
			uncheckable: "auto",
			fireOnInit: !1,
			onChange: function () { },
			beforeChecked: function () { },
			beforeUnchecked: function () { },
			beforeDeterminate: function () { },
			beforeIndeterminate: function () { },
			onChecked: function () { },
			onUnchecked: function () { },
			onDeterminate: function () { },
			onIndeterminate: function () { },
			onEnable: function () { },
			onDisable: function () { },
			onEnabled: function () { },
			onDisabled: function () { },
			className: {
				checked: "checked",
				indeterminate: "indeterminate",
				disabled: "disabled",
				hidden: "hidden",
				radio: "radio",
				readOnly: "read-only"
			},
			error: {
				method: "The method you called is not defined"
			},
			selector: {
				checkbox: ".ui.checkbox",
				label: "label, .box",
				input: 'input[type="checkbox"], input[type="radio"]',
				link: "a[href]"
			}
		}
	}(jQuery, window, document),
	function (k, e, S, T) {
		"use strict";
		e = void 0 !== e && e.Math == Math ? e : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), k.fn.dimmer = function (g) {
			var m, v = k(this),
				b = (new Date).getTime(),
				y = [],
				w = g,
				x = "string" == typeof w,
				C = [].slice.call(arguments, 1);
			return v.each(function () {
				var s, t, a, r = k.isPlainObject(g) ? k.extend(!0, {}, k.fn.dimmer.settings, g) : k.extend({}, k.fn.dimmer.settings),
					n = r.selector,
					e = r.namespace,
					i = r.className,
					l = r.error,
					o = "." + e,
					c = "module-" + e,
					u = v.selector || "",
					d = "ontouchstart" in S.documentElement ? "touchstart" : "click",
					p = k(this),
					f = this,
					h = p.data(c);
				(a = {
					preinitialize: function () {
						s = a.is.dimmer() ? (t = p.parent(), p) : (t = p, a.has.dimmer() ? r.dimmerName ? t.find(n.dimmer).filter("." + r.dimmerName) : t.find(n.dimmer) : a.create())
					},
					initialize: function () {
						a.debug("Initializing dimmer", r), a.bind.events(), a.set.dimmable(), a.instantiate()
					},
					instantiate: function () {
						a.verbose("Storing instance of module", a), h = a, p.data(c, h)
					},
					destroy: function () {
						a.verbose("Destroying previous module", s), a.unbind.events(), a.remove.variation(), t.off(o)
					},
					bind: {
						events: function () {
							"hover" == r.on ? t.on("mouseenter" + o, a.show).on("mouseleave" + o, a.hide) : "click" == r.on && t.on(d + o, a.toggle), a.is.page() && (a.debug("Setting as a page dimmer", t), a.set.pageDimmer()), a.is.closable() && (a.verbose("Adding dimmer close event", s), t.on(d + o, n.dimmer, a.event.click))
						}
					},
					unbind: {
						events: function () {
							p.removeData(c), t.off(o)
						}
					},
					event: {
						click: function (e) {
							a.verbose("Determining if event occured on dimmer", e), (0 === s.find(e.target).length || k(e.target).is(n.content)) && (a.hide(), e.stopImmediatePropagation())
						}
					},
					addContent: function (e) {
						var t = k(e);
						a.debug("Add content to dimmer", t), t.parent()[0] !== s[0] && t.detach().appendTo(s)
					},
					create: function () {
						var e = k(r.template.dimmer());
						return r.dimmerName && (a.debug("Creating named dimmer", r.dimmerName), e.addClass(r.dimmerName)), e.appendTo(t), e
					},
					show: function (e) {
						e = k.isFunction(e) ? e : function () { }, a.debug("Showing dimmer", s, r), a.set.variation(), a.is.dimmed() && !a.is.animating() || !a.is.enabled() ? a.debug("Dimmer is already shown or disabled") : (a.animate.show(e), r.onShow.call(f), r.onChange.call(f))
					},
					hide: function (e) {
						e = k.isFunction(e) ? e : function () { }, a.is.dimmed() || a.is.animating() ? (a.debug("Hiding dimmer", s), a.animate.hide(e), r.onHide.call(f), r.onChange.call(f)) : a.debug("Dimmer is not visible")
					},
					toggle: function () {
						a.verbose("Toggling dimmer visibility", s), a.is.dimmed() ? a.hide() : a.show()
					},
					animate: {
						show: function (e) {
							e = k.isFunction(e) ? e : function () { }, r.useCSS && k.fn.transition !== T && s.transition("is supported") ? (r.useFlex ? (a.debug("Using flex dimmer"), a.remove.legacy()) : (a.debug("Using legacy non-flex dimmer"), a.set.legacy()), "auto" !== r.opacity && a.set.opacity(), s.transition({
								displayType: r.useFlex ? "flex" : "block",
								animation: r.transition + " in",
								queue: !1,
								duration: a.get.duration(),
								useFailSafe: !0,
								onStart: function () {
									a.set.dimmed()
								},
								onComplete: function () {
									a.set.active(), e()
								}
							})) : (a.verbose("Showing dimmer animation with javascript"), a.set.dimmed(), "auto" == r.opacity && (r.opacity = .8), s.stop().css({
								opacity: 0,
								width: "100%",
								height: "100%"
							}).fadeTo(a.get.duration(), r.opacity, function () {
								s.removeAttr("style"), a.set.active(), e()
							}))
						},
						hide: function (e) {
							e = k.isFunction(e) ? e : function () { }, r.useCSS && k.fn.transition !== T && s.transition("is supported") ? (a.verbose("Hiding dimmer with css"), s.transition({
								displayType: r.useFlex ? "flex" : "block",
								animation: r.transition + " out",
								queue: !1,
								duration: a.get.duration(),
								useFailSafe: !0,
								onStart: function () {
									a.remove.dimmed()
								},
								onComplete: function () {
									a.remove.variation(), a.remove.active(), e()
								}
							})) : (a.verbose("Hiding dimmer with javascript"), a.remove.dimmed(), s.stop().fadeOut(a.get.duration(), function () {
								a.remove.active(), s.removeAttr("style"), e()
							}))
						}
					},
					get: {
						dimmer: function () {
							return s
						},
						duration: function () {
							return "object" == typeof r.duration ? a.is.active() ? r.duration.hide : r.duration.show : r.duration
						}
					},
					has: {
						dimmer: function () {
							return r.dimmerName ? 0 < p.find(n.dimmer).filter("." + r.dimmerName).length : 0 < p.find(n.dimmer).length
						}
					},
					is: {
						active: function () {
							return s.hasClass(i.active)
						},
						animating: function () {
							return s.is(":animated") || s.hasClass(i.animating)
						},
						closable: function () {
							return "auto" == r.closable ? "hover" != r.on : r.closable
						},
						dimmer: function () {
							return p.hasClass(i.dimmer)
						},
						dimmable: function () {
							return p.hasClass(i.dimmable)
						},
						dimmed: function () {
							return t.hasClass(i.dimmed)
						},
						disabled: function () {
							return t.hasClass(i.disabled)
						},
						enabled: function () {
							return !a.is.disabled()
						},
						page: function () {
							return t.is("body")
						},
						pageDimmer: function () {
							return s.hasClass(i.pageDimmer)
						}
					},
					can: {
						show: function () {
							return !s.hasClass(i.disabled)
						}
					},
					set: {
						opacity: function (e) {
							var t = s.css("background-color"),
								n = t.split(","),
								i = n && 3 == n.length,
								o = n && 4 == n.length;
							e = 0 === r.opacity ? 0 : r.opacity || e, t = i || o ? (n[3] = e + ")", n.join(",")) : "rgba(0, 0, 0, " + e + ")", a.debug("Setting opacity to", e), s.css("background-color", t)
						},
						legacy: function () {
							s.addClass(i.legacy)
						},
						active: function () {
							s.addClass(i.active)
						},
						dimmable: function () {
							t.addClass(i.dimmable)
						},
						dimmed: function () {
							t.addClass(i.dimmed)
						},
						pageDimmer: function () {
							s.addClass(i.pageDimmer)
						},
						disabled: function () {
							s.addClass(i.disabled)
						},
						variation: function (e) {
							(e = e || r.variation) && s.addClass(e)
						}
					},
					remove: {
						active: function () {
							s.removeClass(i.active)
						},
						legacy: function () {
							s.removeClass(i.legacy)
						},
						dimmed: function () {
							t.removeClass(i.dimmed)
						},
						disabled: function () {
							s.removeClass(i.disabled)
						},
						variation: function (e) {
							(e = e || r.variation) && s.removeClass(e)
						}
					},
					setting: function (e, t) {
						if (a.debug("Changing setting", e, t), k.isPlainObject(e)) k.extend(!0, r, e);
						else {
							if (t === T) return r[e];
							k.isPlainObject(r[e]) ? k.extend(!0, r[e], t) : r[e] = t
						}
					},
					internal: function (e, t) {
						if (k.isPlainObject(e)) k.extend(!0, a, e);
						else {
							if (t === T) return a[e];
							a[e] = t
						}
					},
					debug: function () {
						!r.silent && r.debug && (r.performance ? a.performance.log(arguments) : (a.debug = Function.prototype.bind.call(console.info, console, r.name + ":"), a.debug.apply(console, arguments)))
					},
					verbose: function () {
						!r.silent && r.verbose && r.debug && (r.performance ? a.performance.log(arguments) : (a.verbose = Function.prototype.bind.call(console.info, console, r.name + ":"), a.verbose.apply(console, arguments)))
					},
					error: function () {
						r.silent || (a.error = Function.prototype.bind.call(console.error, console, r.name + ":"), a.error.apply(console, arguments))
					},
					performance: {
						log: function (e) {
							var t, n;
							r.performance && (n = (t = (new Date).getTime()) - (b || t), b = t, y.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: f,
								"Execution Time": n
							})), clearTimeout(a.performance.timer), a.performance.timer = setTimeout(a.performance.display, 500)
						},
						display: function () {
							var e = r.name + ":",
								n = 0;
							b = !1, clearTimeout(a.performance.timer), k.each(y, function (e, t) {
								n += t["Execution Time"]
							}), e += " " + n + "ms", u && (e += " '" + u + "'"), 1 < v.length && (e += " (" + v.length + ")"), (console.group !== T || console.table !== T) && 0 < y.length && (console.groupCollapsed(e), console.table ? console.table(y) : k.each(y, function (e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), y = []
						}
					},
					invoke: function (i, e, t) {
						var o, s, n, r = h;
						return e = e || C, t = f || t, "string" == typeof i && r !== T && (i = i.split(/[\. ]/), o = i.length - 1, k.each(i, function (e, t) {
							var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
							if (k.isPlainObject(r[n]) && e != o) r = r[n];
							else {
								if (r[n] !== T) return s = r[n], !1;
								if (!k.isPlainObject(r[t]) || e == o) return r[t] !== T ? s = r[t] : a.error(l.method, i), !1;
								r = r[t]
							}
						})), k.isFunction(s) ? n = s.apply(t, e) : s !== T && (n = s), k.isArray(m) ? m.push(n) : m !== T ? m = [m, n] : n !== T && (m = n), s
					}
				}).preinitialize(), x ? (h === T && a.initialize(), a.invoke(w)) : (h !== T && h.invoke("destroy"), a.initialize())
			}), m !== T ? m : this
		}, k.fn.dimmer.settings = {
			name: "Dimmer",
			namespace: "dimmer",
			silent: !1,
			debug: !1,
			verbose: !1,
			performance: !0,
			useFlex: !0,
			dimmerName: !1,
			variation: !1,
			closable: "auto",
			useCSS: !0,
			transition: "fade",
			on: !1,
			opacity: "auto",
			duration: {
				show: 500,
				hide: 500
			},
			onChange: function () { },
			onShow: function () { },
			onHide: function () { },
			error: {
				method: "The method you called is not defined."
			},
			className: {
				active: "active",
				animating: "animating",
				dimmable: "dimmable",
				dimmed: "dimmed",
				dimmer: "dimmer",
				disabled: "disabled",
				hide: "hide",
				legacy: "legacy",
				pageDimmer: "page",
				show: "show"
			},
			selector: {
				dimmer: "> .ui.dimmer",
				content: ".ui.dimmer > .content, .ui.dimmer > .content > .center"
			},
			template: {
				dimmer: function () {
					return k("<div />").attr("class", "ui dimmer")
				}
			}
		}
	}(jQuery, window, document),
	function (Y, Q, Z, G) {
		"use strict";
		Q = void 0 !== Q && Q.Math == Math ? Q : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), Y.fn.dropdown = function (q) {
			var z, M = Y(this),
				N = Y(Z),
				H = M.selector || "",
				I = "ontouchstart" in Z.documentElement,
				W = (new Date).getTime(),
				V = [],
				U = q,
				B = "string" == typeof U,
				X = [].slice.call(arguments, 1);
			return M.each(function (n) {
				var e, t, i, o, s, r, a, h, g = Y.isPlainObject(q) ? Y.extend(!0, {}, Y.fn.dropdown.settings, q) : Y.extend({}, Y.fn.dropdown.settings),
					m = g.className,
					c = g.message,
					l = g.fields,
					v = g.keys,
					b = g.metadata,
					u = g.namespace,
					d = g.regExp,
					y = g.selector,
					p = g.error,
					f = g.templates,
					w = "." + u,
					x = "module-" + u,
					C = Y(this),
					k = Y(g.context),
					S = C.find(y.text),
					T = C.find(y.search),
					A = C.find(y.sizer),
					E = C.find(y.input),
					P = C.find(y.icon),
					D = 0 < C.prev().find(y.text).length ? C.prev().find(y.text) : C.prev(),
					O = C.children(y.menu),
					$ = O.find(y.item),
					R = !1,
					_ = !1,
					j = !1,
					F = this,
					L = C.data(x);
				h = {
					initialize: function () {
						h.debug("Initializing dropdown", g), h.is.alreadySetup() ? h.setup.reference() : (h.setup.layout(), g.values && h.change.values(g.values), h.refreshData(), h.save.defaults(), h.restore.selected(), h.create.id(), h.bind.events(), h.observeChanges(), h.instantiate())
					},
					instantiate: function () {
						h.verbose("Storing instance of dropdown", h), L = h, C.data(x, h)
					},
					destroy: function () {
						h.verbose("Destroying previous dropdown", C), h.remove.tabbable(), C.off(w).removeData(x), O.off(w), N.off(o), h.disconnect.menuObserver(), h.disconnect.selectObserver()
					},
					observeChanges: function () {
						"MutationObserver" in Q && (r = new MutationObserver(h.event.select.mutation), a = new MutationObserver(h.event.menu.mutation), h.debug("Setting up mutation observer", r, a), h.observe.select(), h.observe.menu())
					},
					disconnect: {
						menuObserver: function () {
							a && a.disconnect()
						},
						selectObserver: function () {
							r && r.disconnect()
						}
					},
					observe: {
						select: function () {
							h.has.input() && r.observe(C[0], {
								childList: !0,
								subtree: !0
							})
						},
						menu: function () {
							h.has.menu() && a.observe(O[0], {
								childList: !0,
								subtree: !0
							})
						}
					},
					create: {
						id: function () {
							s = (Math.random().toString(16) + "000000000").substr(2, 8), o = "." + s, h.verbose("Creating unique id for element", s)
						},
						userChoice: function (e) {
							var n, i, o;
							return !!(e = e || h.get.userValues()) && (e = Y.isArray(e) ? e : [e], Y.each(e, function (e, t) {
								!1 === h.get.item(t) && (o = g.templates.addition(h.add.variables(c.addResult, t)), i = Y("<div />").html(o).attr("data-" + b.value, t).attr("data-" + b.text, t).addClass(m.addition).addClass(m.item), g.hideAdditions && i.addClass(m.hidden), n = n === G ? i : n.add(i), h.verbose("Creating user choices for value", t, i))
							}), n)
						},
						userLabels: function (e) {
							var t = h.get.userValues();
							t && (h.debug("Adding user labels", t), Y.each(t, function (e, t) {
								h.verbose("Adding custom user value"), h.add.label(t, t)
							}))
						},
						menu: function () {
							O = Y("<div />").addClass(m.menu).appendTo(C)
						},
						sizer: function () {
							A = Y("<span />").addClass(m.sizer).insertAfter(T)
						}
					},
					search: function (e) {
						e = e !== G ? e : h.get.query(), h.verbose("Searching for query", e), h.has.minCharacters(e) ? h.filter(e) : h.hide()
					},
					select: {
						firstUnfiltered: function () {
							h.verbose("Selecting first non-filtered element"), h.remove.selectedItem(), $.not(y.unselectable).not(y.addition + y.hidden).eq(0).addClass(m.selected)
						},
						nextAvailable: function (e) {
							var t = (e = e.eq(0)).nextAll(y.item).not(y.unselectable).eq(0),
								n = e.prevAll(y.item).not(y.unselectable).eq(0);
							0 < t.length ? (h.verbose("Moving selection to", t), t.addClass(m.selected)) : (h.verbose("Moving selection to", n), n.addClass(m.selected))
						}
					},
					setup: {
						api: function () {
							var e = {
								debug: g.debug,
								urlData: {
									value: h.get.value(),
									query: h.get.query()
								},
								on: !1
							};
							h.verbose("First request, initializing API"), C.api(e)
						},
						layout: function () {
							C.is("select") && (h.setup.select(), h.setup.returnedObject()), h.has.menu() || h.create.menu(), h.is.search() && !h.has.search() && (h.verbose("Adding search input"), T = Y("<input />").addClass(m.search).prop("autocomplete", "off").insertBefore(S)), h.is.multiple() && h.is.searchSelection() && !h.has.sizer() && h.create.sizer(), g.allowTab && h.set.tabbable()
						},
						select: function () {
							var e = h.get.selectValues();
							h.debug("Dropdown initialized on a select", e), C.is("select") && (E = C), 0 < E.parent(y.dropdown).length ? (h.debug("UI dropdown already exists. Creating dropdown menu only"), C = E.closest(y.dropdown), h.has.menu() || h.create.menu(), O = C.children(y.menu), h.setup.menu(e)) : (h.debug("Creating entire dropdown from select"), C = Y("<div />").attr("class", E.attr("class")).addClass(m.selection).addClass(m.dropdown).html(f.dropdown(e)).insertBefore(E), E.hasClass(m.multiple) && !1 === E.prop("multiple") && (h.error(p.missingMultiple), E.prop("multiple", !0)), E.is("[multiple]") && h.set.multiple(), E.prop("disabled") && (h.debug("Disabling dropdown"), C.addClass(m.disabled)), E.removeAttr("class").detach().prependTo(C)), h.refresh()
						},
						menu: function (e) {
							O.html(f.menu(e, l)), $ = O.find(y.item)
						},
						reference: function () {
							h.debug("Dropdown behavior was called on select, replacing with closest dropdown"), C = C.parent(y.dropdown), L = C.data(x), F = C.get(0), h.refresh(), h.setup.returnedObject()
						},
						returnedObject: function () {
							var e = M.slice(0, n),
								t = M.slice(n + 1);
							M = e.add(C).add(t)
						}
					},
					refresh: function () {
						h.refreshSelectors(), h.refreshData()
					},
					refreshItems: function () {
						$ = O.find(y.item)
					},
					refreshSelectors: function () {
						h.verbose("Refreshing selector cache"), S = C.find(y.text), T = C.find(y.search), E = C.find(y.input), P = C.find(y.icon), D = 0 < C.prev().find(y.text).length ? C.prev().find(y.text) : C.prev(), O = C.children(y.menu), $ = O.find(y.item)
					},
					refreshData: function () {
						h.verbose("Refreshing cached metadata"), $.removeData(b.text).removeData(b.value)
					},
					clearData: function () {
						h.verbose("Clearing metadata"), $.removeData(b.text).removeData(b.value), C.removeData(b.defaultText).removeData(b.defaultValue).removeData(b.placeholderText)
					},
					toggle: function () {
						h.verbose("Toggling menu visibility"), h.is.active() ? h.hide() : h.show()
					},
					show: function (e) {
						if (e = Y.isFunction(e) ? e : function () { }, !h.can.show() && h.is.remote() && (h.debug("No API results retrieved, searching before show"), h.queryRemote(h.get.query(), h.show)), h.can.show() && !h.is.active()) {
							if (h.debug("Showing dropdown"), !h.has.message() || h.has.maxSelections() || h.has.allResultsFiltered() || h.remove.message(), h.is.allFiltered()) return !0;
							!1 !== g.onShow.call(F) && h.animate.show(function () {
								h.can.click() && h.bind.intent(), h.has.menuSearch() && h.focusSearch(), h.set.visible(), e.call(F)
							})
						}
					},
					hide: function (e) {
						e = Y.isFunction(e) ? e : function () { }, h.is.active() && !h.is.animatingOutward() && (h.debug("Hiding dropdown"), !1 !== g.onHide.call(F) && h.animate.hide(function () {
							h.remove.visible(), e.call(F)
						}))
					},
					hideOthers: function () {
						h.verbose("Finding other dropdowns to hide"), M.not(C).has(y.menu + "." + m.visible).dropdown("hide")
					},
					hideMenu: function () {
						h.verbose("Hiding menu  instantaneously"), h.remove.active(), h.remove.visible(), O.transition("hide")
					},
					hideSubMenus: function () {
						var e = O.children(y.item).find(y.menu);
						h.verbose("Hiding sub menus", e), e.transition("hide")
					},
					bind: {
						events: function () {
							I && h.bind.touchEvents(), h.bind.keyboardEvents(), h.bind.inputEvents(), h.bind.mouseEvents()
						},
						touchEvents: function () {
							h.debug("Touch device detected binding additional touch events"), h.is.searchSelection() || h.is.single() && C.on("touchstart" + w, h.event.test.toggle), O.on("touchstart" + w, y.item, h.event.item.mouseenter)
						},
						keyboardEvents: function () {
							h.verbose("Binding keyboard events"), C.on("keydown" + w, h.event.keydown), h.has.search() && C.on(h.get.inputEvent() + w, y.search, h.event.input), h.is.multiple() && N.on("keydown" + o, h.event.document.keydown)
						},
						inputEvents: function () {
							h.verbose("Binding input change events"), C.on("change" + w, y.input, h.event.change)
						},
						mouseEvents: function () {
							h.verbose("Binding mouse events"), h.is.multiple() && C.on("click" + w, y.label, h.event.label.click).on("click" + w, y.remove, h.event.remove.click), h.is.searchSelection() ? (C.on("mousedown" + w, h.event.mousedown).on("mouseup" + w, h.event.mouseup).on("mousedown" + w, y.menu, h.event.menu.mousedown).on("mouseup" + w, y.menu, h.event.menu.mouseup).on("click" + w, y.icon, h.event.icon.click).on("focus" + w, y.search, h.event.search.focus).on("click" + w, y.search, h.event.search.focus).on("blur" + w, y.search, h.event.search.blur).on("click" + w, y.text, h.event.text.focus), h.is.multiple() && C.on("click" + w, h.event.click)) : ("click" == g.on ? C.on("click" + w, h.event.test.toggle) : "hover" == g.on ? C.on("mouseenter" + w, h.delay.show).on("mouseleave" + w, h.delay.hide) : C.on(g.on + w, h.toggle), C.on("click" + w, y.icon, h.event.icon.click).on("mousedown" + w, h.event.mousedown).on("mouseup" + w, h.event.mouseup).on("focus" + w, h.event.focus), h.has.menuSearch() ? C.on("blur" + w, y.search, h.event.search.blur) : C.on("blur" + w, h.event.blur)), O.on("mouseenter" + w, y.item, h.event.item.mouseenter).on("mouseleave" + w, y.item, h.event.item.mouseleave).on("click" + w, y.item, h.event.item.click)
						},
						intent: function () {
							h.verbose("Binding hide intent event to document"), I && N.on("touchstart" + o, h.event.test.touch).on("touchmove" + o, h.event.test.touch), N.on("click" + o, h.event.test.hide)
						}
					},
					unbind: {
						intent: function () {
							h.verbose("Removing hide intent event from document"), I && N.off("touchstart" + o).off("touchmove" + o), N.off("click" + o)
						}
					},
					filter: function (e) {
						function t() {
							h.is.multiple() && h.filterActive(), (e || !e && 0 == h.get.activeItem().length) && h.select.firstUnfiltered(), h.has.allResultsFiltered() ? g.onNoResults.call(F, n) ? g.allowAdditions ? g.hideAdditions && (h.verbose("User addition with no menu, setting empty style"), h.set.empty(), h.hideMenu()) : (h.verbose("All items filtered, showing message", n), h.add.message(c.noResults)) : (h.verbose("All items filtered, hiding dropdown", n), h.hideMenu()) : (h.remove.empty(), h.remove.message()), g.allowAdditions && h.add.userSuggestion(e), h.is.searchSelection() && h.can.show() && h.is.focusedOnSearch() && h.show()
						}
						var n = e !== G ? e : h.get.query();
						g.useLabels && h.has.maxSelections() || (g.apiSettings ? h.can.useAPI() ? h.queryRemote(n, function () {
							g.filterRemoteData && h.filterItems(n), t()
						}) : h.error(p.noAPI) : (h.filterItems(n), t()))
					},
					queryRemote: function (e, n) {
						var t = {
							errorDuration: !1,
							cache: "local",
							throttle: g.throttle,
							urlData: {
								query: e
							},
							onError: function () {
								h.add.message(c.serverError), n()
							},
							onFailure: function () {
								h.add.message(c.serverError), n()
							},
							onSuccess: function (e) {
								var t = e[l.remoteValues];
								Y.isArray(t) && 0 < t.length ? (h.remove.message(), h.setup.menu({
									values: e[l.remoteValues]
								})) : h.add.message(c.noResults), n()
							}
						};
						C.api("get request") || h.setup.api(), t = Y.extend(!0, {}, t, g.apiSettings), C.api("setting", t).api("query")
					},
					filterItems: function (e) {
						var i = e !== G ? e : h.get.query(),
							o = null,
							t = h.escape.string(i),
							s = new RegExp("^" + t, "igm");
						h.has.query() && (o = [], h.verbose("Searching for matching values", i), $.each(function () {
							var e, t, n = Y(this);
							if ("both" == g.match || "text" == g.match) {
								if (-1 !== (e = String(h.get.choiceText(n, !1))).search(s)) return o.push(this), !0;
								if ("exact" === g.fullTextSearch && h.exactSearch(i, e)) return o.push(this), !0;
								if (!0 === g.fullTextSearch && h.fuzzySearch(i, e)) return o.push(this), !0
							}
							if ("both" == g.match || "value" == g.match) {
								if (-1 !== (t = String(h.get.choiceValue(n, e))).search(s)) return o.push(this), !0;
								if ("exact" === g.fullTextSearch && h.exactSearch(i, t)) return o.push(this), !0;
								if (!0 === g.fullTextSearch && h.fuzzySearch(i, t)) return o.push(this), !0
							}
						})), h.debug("Showing only matched items", i), h.remove.filteredItem(), o && $.not(o).addClass(m.filtered)
					},
					fuzzySearch: function (e, t) {
						var n = t.length,
							i = e.length;
						if (e = e.toLowerCase(), t = t.toLowerCase(), n < i) return !1;
						if (i === n) return e === t;
						e: for (var o = 0, s = 0; o < i; o++) {
							for (var r = e.charCodeAt(o); s < n;)
								if (t.charCodeAt(s++) === r) continue e;
							return !1
						}
						return !0
					},
					exactSearch: function (e, t) {
						return e = e.toLowerCase(), -1 < (t = t.toLowerCase()).indexOf(e)
					},
					filterActive: function () {
						g.useLabels && $.filter("." + m.active).addClass(m.filtered)
					},
					focusSearch: function (e) {
						h.has.search() && !h.is.focusedOnSearch() && (e ? (C.off("focus" + w, y.search), T.focus(), C.on("focus" + w, y.search, h.event.search.focus)) : T.focus())
					},
					forceSelection: function () {
						var e = $.not(m.filtered).filter("." + m.selected).eq(0),
							t = $.not(m.filtered).filter("." + m.active).eq(0),
							n = 0 < e.length ? e : t;
						if (0 < n.length && !h.is.multiple()) return h.debug("Forcing partial selection to selected item", n), void h.event.item.click.call(n, {}, !0);
						g.allowAdditions && h.set.selected(h.get.query()), h.remove.searchTerm()
					},
					change: {
						values: function (e) {
							g.allowAdditions || h.clear(), h.debug("Creating dropdown with specified values", e), h.setup.menu({
								values: e
							}), Y.each(e, function (e, t) {
								if (1 == t.selected) return h.debug("Setting initial selection to", t.value), h.set.selected(t.value), !0
							})
						}
					},
					event: {
						change: function () {
							j || (h.debug("Input changed, updating selection"), h.set.selected())
						},
						focus: function () {
							g.showOnFocus && !R && h.is.hidden() && !t && h.show()
						},
						blur: function (e) {
							t = Z.activeElement === this, R || t || (h.remove.activeLabel(), h.hide())
						},
						mousedown: function () {
							h.is.searchSelection() ? i = !0 : R = !0
						},
						mouseup: function () {
							h.is.searchSelection() ? i = !1 : R = !1
						},
						click: function (e) {
							Y(e.target).is(C) && (h.is.focusedOnSearch() ? h.show() : h.focusSearch())
						},
						search: {
							focus: function () {
								R = !0, h.is.multiple() && h.remove.activeLabel(), g.showOnFocus && h.search()
							},
							blur: function (e) {
								t = Z.activeElement === this, h.is.searchSelection() && !i && (_ || t || (g.forceSelection && h.forceSelection(), h.hide())), i = !1
							}
						},
						icon: {
							click: function (e) {
								P.hasClass(m.clear) ? h.clear() : h.can.click() && h.toggle()
							}
						},
						text: {
							focus: function (e) {
								R = !0, h.focusSearch()
							}
						},
						input: function (e) {
							(h.is.multiple() || h.is.searchSelection()) && h.set.filtered(), clearTimeout(h.timer), h.timer = setTimeout(h.search, g.delay.search)
						},
						label: {
							click: function (e) {
								var t = Y(this),
									n = C.find(y.label),
									i = n.filter("." + m.active),
									o = t.nextAll("." + m.active),
									s = t.prevAll("." + m.active),
									r = 0 < o.length ? t.nextUntil(o).add(i).add(t) : t.prevUntil(s).add(i).add(t);
								e.shiftKey ? (i.removeClass(m.active), r.addClass(m.active)) : e.ctrlKey ? t.toggleClass(m.active) : (i.removeClass(m.active), t.addClass(m.active)), g.onLabelSelect.apply(this, n.filter("." + m.active))
							}
						},
						remove: {
							click: function () {
								var e = Y(this).parent();
								e.hasClass(m.active) ? h.remove.activeLabels() : h.remove.activeLabels(e)
							}
						},
						test: {
							toggle: function (e) {
								var t = h.is.multiple() ? h.show : h.toggle;
								h.is.bubbledLabelClick(e) || h.is.bubbledIconClick(e) || h.determine.eventOnElement(e, t) && e.preventDefault()
							},
							touch: function (e) {
								h.determine.eventOnElement(e, function () {
									"touchstart" == e.type ? h.timer = setTimeout(function () {
										h.hide()
									}, g.delay.touch) : "touchmove" == e.type && clearTimeout(h.timer)
								}), e.stopPropagation()
							},
							hide: function (e) {
								h.determine.eventInModule(e, h.hide)
							}
						},
						select: {
							mutation: function (e) {
								h.debug("<select> modified, recreating menu");
								var n = !1;
								Y.each(e, function (e, t) {
									if (Y(t.target).is("select") || Y(t.addedNodes).is("select")) return n = !0
								}), n && (h.disconnect.selectObserver(), h.refresh(), h.setup.select(), h.set.selected(), h.observe.select())
							}
						},
						menu: {
							mutation: function (e) {
								var t = e[0],
									n = t.addedNodes ? Y(t.addedNodes[0]) : Y(!1),
									i = t.removedNodes ? Y(t.removedNodes[0]) : Y(!1),
									o = n.add(i),
									s = o.is(y.addition) || 0 < o.closest(y.addition).length,
									r = o.is(y.message) || 0 < o.closest(y.message).length;
								s || r ? (h.debug("Updating item selector cache"), h.refreshItems()) : (h.debug("Menu modified, updating selector cache"), h.refresh())
							},
							mousedown: function () {
								_ = !0
							},
							mouseup: function () {
								_ = !1
							}
						},
						item: {
							mouseenter: function (e) {
								var t = Y(e.target),
									n = Y(this),
									i = n.children(y.menu),
									o = n.siblings(y.item).children(y.menu),
									s = 0 < i.length;
								!(0 < i.find(t).length) && s && (clearTimeout(h.itemTimer), h.itemTimer = setTimeout(function () {
									h.verbose("Showing sub-menu", i), Y.each(o, function () {
										h.animate.hide(!1, Y(this))
									}), h.animate.show(!1, i)
								}, g.delay.show), e.preventDefault())
							},
							mouseleave: function (e) {
								var t = Y(this).children(y.menu);
								0 < t.length && (clearTimeout(h.itemTimer), h.itemTimer = setTimeout(function () {
									h.verbose("Hiding sub-menu", t), h.animate.hide(!1, t)
								}, g.delay.hide))
							},
							click: function (e, t) {
								var n = Y(this),
									i = Y(e ? e.target : ""),
									o = n.find(y.menu),
									s = h.get.choiceText(n),
									r = h.get.choiceValue(n, s),
									a = 0 < o.length,
									l = 0 < o.find(i).length;
								h.has.menuSearch() && Y(Z.activeElement).blur(), l || a && !g.allowCategorySelection || (h.is.searchSelection() && (g.allowAdditions && h.remove.userAddition(), h.remove.searchTerm(), h.is.focusedOnSearch() || 1 == t || h.focusSearch(!0)), g.useLabels || (h.remove.filteredItem(), h.set.scrollPosition(n)), h.determine.selectAction.call(this, s, r))
							}
						},
						document: {
							keydown: function (e) {
								var t = e.which;
								if (h.is.inObject(t, v)) {
									var n = C.find(y.label),
										i = n.filter("." + m.active),
										o = (i.data(b.value), n.index(i)),
										s = n.length,
										r = 0 < i.length,
										a = 1 < i.length,
										l = 0 === o,
										c = o + 1 == s,
										u = h.is.searchSelection(),
										d = h.is.focusedOnSearch(),
										p = h.is.focused(),
										f = d && 0 === h.get.caretPosition();
									if (u && !r && !d) return;
									t == v.leftArrow ? !p && !f || r ? r && (e.shiftKey ? h.verbose("Adding previous label to selection") : (h.verbose("Selecting previous label"), n.removeClass(m.active)), l && !a ? i.addClass(m.active) : i.prev(y.siblingLabel).addClass(m.active).end(), e.preventDefault()) : (h.verbose("Selecting previous label"), n.last().addClass(m.active)) : t == v.rightArrow ? (p && !r && n.first().addClass(m.active), r && (e.shiftKey ? h.verbose("Adding next label to selection") : (h.verbose("Selecting next label"), n.removeClass(m.active)), c ? u ? d ? n.removeClass(m.active) : h.focusSearch() : a ? i.next(y.siblingLabel).addClass(m.active) : i.addClass(m.active) : i.next(y.siblingLabel).addClass(m.active), e.preventDefault())) : t == v.deleteKey || t == v.backspace ? r ? (h.verbose("Removing active labels"), c && u && !d && h.focusSearch(), i.last().next(y.siblingLabel).addClass(m.active), h.remove.activeLabels(i), e.preventDefault()) : f && !r && t == v.backspace && (h.verbose("Removing last label on input backspace"), i = n.last().addClass(m.active), h.remove.activeLabels(i)) : i.removeClass(m.active)
								}
							}
						},
						keydown: function (e) {
							var t = e.which;
							if (h.is.inObject(t, v)) {
								var n, i = $.not(y.unselectable).filter("." + m.selected).eq(0),
									o = O.children("." + m.active).eq(0),
									s = 0 < i.length ? i : o,
									r = 0 < s.length ? s.siblings(":not(." + m.filtered + ")").addBack() : O.children(":not(." + m.filtered + ")"),
									a = s.children(y.menu),
									l = s.closest(y.menu),
									c = l.hasClass(m.visible) || l.hasClass(m.animating) || 0 < l.parent(y.menu).length,
									u = 0 < a.length,
									d = 0 < s.length,
									p = 0 < s.not(y.unselectable).length,
									f = t == v.delimiter && g.allowAdditions && h.is.multiple();
								if (g.allowAdditions && g.hideAdditions && (t == v.enter || f) && p && (h.verbose("Selecting item from keyboard shortcut", s), h.event.item.click.call(s, e), h.is.searchSelection() && h.remove.searchTerm()), h.is.visible()) {
									if ((t == v.enter || f) && (t == v.enter && d && u && !g.allowCategorySelection ? (h.verbose("Pressed enter on unselectable category, opening sub menu"), t = v.rightArrow) : p && (h.verbose("Selecting item from keyboard shortcut", s), h.event.item.click.call(s, e), h.is.searchSelection() && h.remove.searchTerm()), e.preventDefault()), d && (t == v.leftArrow && l[0] !== O[0] && (h.verbose("Left key pressed, closing sub-menu"), h.animate.hide(!1, l), s.removeClass(m.selected), l.closest(y.item).addClass(m.selected), e.preventDefault()), t == v.rightArrow && u && (h.verbose("Right key pressed, opening sub-menu"), h.animate.show(!1, a), s.removeClass(m.selected), a.find(y.item).eq(0).addClass(m.selected), e.preventDefault())), t == v.upArrow) {
										if (n = d && c ? s.prevAll(y.item + ":not(" + y.unselectable + ")").eq(0) : $.eq(0), r.index(n) < 0) return h.verbose("Up key pressed but reached top of current menu"), void e.preventDefault();
										h.verbose("Up key pressed, changing active item"), s.removeClass(m.selected), n.addClass(m.selected), h.set.scrollPosition(n), g.selectOnKeydown && h.is.single() && h.set.selectedItem(n), e.preventDefault()
									}
									if (t == v.downArrow) {
										if (0 === (n = d && c ? n = s.nextAll(y.item + ":not(" + y.unselectable + ")").eq(0) : $.eq(0)).length) return h.verbose("Down key pressed but reached bottom of current menu"), void e.preventDefault();
										h.verbose("Down key pressed, changing active item"), $.removeClass(m.selected), n.addClass(m.selected), h.set.scrollPosition(n), g.selectOnKeydown && h.is.single() && h.set.selectedItem(n), e.preventDefault()
									}
									t == v.pageUp && (h.scrollPage("up"), e.preventDefault()), t == v.pageDown && (h.scrollPage("down"), e.preventDefault()), t == v.escape && (h.verbose("Escape key pressed, closing dropdown"), h.hide())
								} else f && e.preventDefault(), t != v.downArrow || h.is.visible() || (h.verbose("Down key pressed, showing dropdown"), h.show(), e.preventDefault())
							} else h.has.search() || h.set.selectedLetter(String.fromCharCode(t))
						}
					},
					trigger: {
						change: function () {
							var e = Z.createEvent("HTMLEvents"),
								t = E[0];
							t && (h.verbose("Triggering native change event"), e.initEvent("change", !0, !1), t.dispatchEvent(e))
						}
					},
					determine: {
						selectAction: function (e, t) {
							h.verbose("Determining action", g.action), Y.isFunction(h.action[g.action]) ? (h.verbose("Triggering preset action", g.action, e, t), h.action[g.action].call(F, e, t, this)) : Y.isFunction(g.action) ? (h.verbose("Triggering user action", g.action, e, t), g.action.call(F, e, t, this)) : h.error(p.action, g.action)
						},
						eventInModule: function (e, t) {
							var n = Y(e.target),
								i = 0 < n.closest(Z.documentElement).length,
								o = 0 < n.closest(C).length;
							return t = Y.isFunction(t) ? t : function () { }, i && !o ? (h.verbose("Triggering event", t), t(), !0) : (h.verbose("Event occurred in dropdown, canceling callback"), !1)
						},
						eventOnElement: function (e, t) {
							var n = Y(e.target),
								i = n.closest(y.siblingLabel),
								o = Z.body.contains(e.target),
								s = 0 === C.find(i).length,
								r = 0 === n.closest(O).length;
							return t = Y.isFunction(t) ? t : function () { }, o && s && r ? (h.verbose("Triggering event", t), t(), !0) : (h.verbose("Event occurred in dropdown menu, canceling callback"), !1)
						}
					},
					action: {
						nothing: function () { },
						activate: function (e, t, n) {
							if (t = t !== G ? t : e, h.can.activate(Y(n))) {
								if (h.set.selected(t, Y(n)), h.is.multiple() && !h.is.allFiltered()) return;
								h.hideAndClear()
							}
						},
						select: function (e, t, n) {
							if (t = t !== G ? t : e, h.can.activate(Y(n))) {
								if (h.set.value(t, e, Y(n)), h.is.multiple() && !h.is.allFiltered()) return;
								h.hideAndClear()
							}
						},
						combo: function (e, t, n) {
							t = t !== G ? t : e, h.set.selected(t, Y(n)), h.hideAndClear()
						},
						hide: function (e, t, n) {
							h.set.value(t, e, Y(n)), h.hideAndClear()
						}
					},
					get: {
						id: function () {
							return s
						},
						defaultText: function () {
							return C.data(b.defaultText)
						},
						defaultValue: function () {
							return C.data(b.defaultValue)
						},
						placeholderText: function () {
							return "auto" != g.placeholder && "string" == typeof g.placeholder ? g.placeholder : C.data(b.placeholderText) || ""
						},
						text: function () {
							return S.text()
						},
						query: function () {
							return Y.trim(T.val())
						},
						searchWidth: function (e) {
							return e = e !== G ? e : T.val(), A.text(e), Math.ceil(A.width() + 1)
						},
						selectionCount: function () {
							var e = h.get.values();
							return h.is.multiple() ? Y.isArray(e) ? e.length : 0 : "" !== h.get.value() ? 1 : 0
						},
						transition: function (e) {
							return "auto" == g.transition ? h.is.upward(e) ? "slide up" : "slide down" : g.transition
						},
						userValues: function () {
							var e = h.get.values();
							return !!e && (e = Y.isArray(e) ? e : [e], Y.grep(e, function (e) {
								return !1 === h.get.item(e)
							}))
						},
						uniqueArray: function (n) {
							return Y.grep(n, function (e, t) {
								return Y.inArray(e, n) === t
							})
						},
						caretPosition: function () {
							var e, t, n = T.get(0);
							return "selectionStart" in n ? n.selectionStart : Z.selection ? (n.focus(), t = (e = Z.selection.createRange()).text.length, e.moveStart("character", -n.value.length), e.text.length - t) : void 0
						},
						value: function () {
							var e = 0 < E.length ? E.val() : C.data(b.value),
								t = Y.isArray(e) && 1 === e.length && "" === e[0];
							return e === G || t ? "" : e
						},
						values: function () {
							var e = h.get.value();
							return "" === e ? "" : !h.has.selectInput() && h.is.multiple() ? "string" == typeof e ? e.split(g.delimiter) : "" : e
						},
						remoteValues: function () {
							var e = h.get.values(),
								i = !1;
							return e && ("string" == typeof e && (e = [e]), Y.each(e, function (e, t) {
								var n = h.read.remoteData(t);
								h.verbose("Restoring value from session data", n, t), n && (i || (i = {}), i[t] = n)
							})), i
						},
						choiceText: function (e, t) {
							if (t = t !== G ? t : g.preserveHTML, e) return 0 < e.find(y.menu).length && (h.verbose("Retrieving text of element with sub-menu"), (e = e.clone()).find(y.menu).remove(), e.find(y.menuIcon).remove()), e.data(b.text) !== G ? e.data(b.text) : t ? Y.trim(e.html()) : Y.trim(e.text())
						},
						choiceValue: function (e, t) {
							return t = t || h.get.choiceText(e), !!e && (e.data(b.value) !== G ? String(e.data(b.value)) : "string" == typeof t ? Y.trim(t.toLowerCase()) : String(t))
						},
						inputEvent: function () {
							var e = T[0];
							return !!e && (e.oninput !== G ? "input" : e.onpropertychange !== G ? "propertychange" : "keyup")
						},
						selectValues: function () {
							var o = {
								values: []
							};
							return C.find("option").each(function () {
								var e = Y(this),
									t = e.html(),
									n = e.attr("disabled"),
									i = e.attr("value") !== G ? e.attr("value") : t;
								"auto" === g.placeholder && "" === i ? o.placeholder = t : o.values.push({
									name: t,
									value: i,
									disabled: n
								})
							}), g.placeholder && "auto" !== g.placeholder && (h.debug("Setting placeholder value to", g.placeholder), o.placeholder = g.placeholder), g.sortSelect ? (o.values.sort(function (e, t) {
								return e.name > t.name ? 1 : -1
							}), h.debug("Retrieved and sorted values from select", o)) : h.debug("Retrieved values from select", o), o
						},
						activeItem: function () {
							return $.filter("." + m.active)
						},
						selectedItem: function () {
							var e = $.not(y.unselectable).filter("." + m.selected);
							return 0 < e.length ? e : $.eq(0)
						},
						itemWithAdditions: function (e) {
							var t = h.get.item(e),
								n = h.create.userChoice(e);
							return n && 0 < n.length && (t = 0 < t.length ? t.add(n) : n), t
						},
						item: function (i, o) {
							var e, s, r = !1;
							return i = i !== G ? i : h.get.values() !== G ? h.get.values() : h.get.text(), e = s ? 0 < i.length : i !== G && null !== i, s = h.is.multiple() && Y.isArray(i), o = "" === i || 0 === i || o || !1, e && $.each(function () {
								var e = Y(this),
									t = h.get.choiceText(e),
									n = h.get.choiceValue(e, t);
								if (null !== n && n !== G)
									if (s) - 1 === Y.inArray(String(n), i) && -1 === Y.inArray(t, i) || (r = r ? r.add(e) : e);
									else if (o) {
										if (h.verbose("Ambiguous dropdown value using strict type check", e, i), n === i || t === i) return r = e, !0
									} else if (String(n) == String(i) || t == i) return h.verbose("Found select item by value", n, i), r = e, !0
							}), r
						}
					},
					check: {
						maxSelections: function (e) {
							return !g.maxSelections || ((e = e !== G ? e : h.get.selectionCount()) >= g.maxSelections ? (h.debug("Maximum selection count reached"), g.useLabels && ($.addClass(m.filtered), h.add.message(c.maxSelections)), !0) : (h.verbose("No longer at maximum selection count"), h.remove.message(), h.remove.filteredItem(), h.is.searchSelection() && h.filterItems(), !1))
						}
					},
					restore: {
						defaults: function () {
							h.clear(), h.restore.defaultText(), h.restore.defaultValue()
						},
						defaultText: function () {
							var e = h.get.defaultText();
							e === h.get.placeholderText ? (h.debug("Restoring default placeholder text", e), h.set.placeholderText(e)) : (h.debug("Restoring default text", e), h.set.text(e))
						},
						placeholderText: function () {
							h.set.placeholderText()
						},
						defaultValue: function () {
							var e = h.get.defaultValue();
							e !== G && (h.debug("Restoring default value", e), "" !== e ? (h.set.value(e), h.set.selected()) : (h.remove.activeItem(), h.remove.selectedItem()))
						},
						labels: function () {
							g.allowAdditions && (g.useLabels || (h.error(p.labels), g.useLabels = !0), h.debug("Restoring selected values"), h.create.userLabels()), h.check.maxSelections()
						},
						selected: function () {
							h.restore.values(), h.is.multiple() ? (h.debug("Restoring previously selected values and labels"), h.restore.labels()) : h.debug("Restoring previously selected values")
						},
						values: function () {
							h.set.initialLoad(), g.apiSettings && g.saveRemoteData && h.get.remoteValues() ? h.restore.remoteValues() : h.set.selected(), h.remove.initialLoad()
						},
						remoteValues: function () {
							var e = h.get.remoteValues();
							h.debug("Recreating selected from session data", e), e && (h.is.single() ? Y.each(e, function (e, t) {
								h.set.text(t)
							}) : Y.each(e, function (e, t) {
								h.add.label(e, t)
							}))
						}
					},
					read: {
						remoteData: function (e) {
							var t;
							if (Q.Storage !== G) return (t = sessionStorage.getItem(e)) !== G && t;
							h.error(p.noStorage)
						}
					},
					save: {
						defaults: function () {
							h.save.defaultText(), h.save.placeholderText(), h.save.defaultValue()
						},
						defaultValue: function () {
							var e = h.get.value();
							h.verbose("Saving default value as", e), C.data(b.defaultValue, e)
						},
						defaultText: function () {
							var e = h.get.text();
							h.verbose("Saving default text as", e), C.data(b.defaultText, e)
						},
						placeholderText: function () {
							var e;
							!1 !== g.placeholder && S.hasClass(m.placeholder) && (e = h.get.text(), h.verbose("Saving placeholder text as", e), C.data(b.placeholderText, e))
						},
						remoteData: function (e, t) {
							Q.Storage !== G ? (h.verbose("Saving remote data to session storage", t, e), sessionStorage.setItem(t, e)) : h.error(p.noStorage)
						}
					},
					clear: function () {
						h.is.multiple() && g.useLabels ? h.remove.labels() : (h.remove.activeItem(), h.remove.selectedItem()), h.set.placeholderText(), h.clearValue()
					},
					clearValue: function () {
						h.set.value("")
					},
					scrollPage: function (e, t) {
						var n, i, o = t || h.get.selectedItem(),
							s = o.closest(y.menu),
							r = s.outerHeight(),
							a = s.scrollTop(),
							l = $.eq(0).outerHeight(),
							c = Math.floor(r / l),
							u = (s.prop("scrollHeight"), "up" == e ? a - l * c : a + l * c),
							d = $.not(y.unselectable);
						i = "up" == e ? d.index(o) - c : d.index(o) + c, 0 < (n = ("up" == e ? 0 <= i : i < d.length) ? d.eq(i) : "up" == e ? d.first() : d.last()).length && (h.debug("Scrolling page", e, n), o.removeClass(m.selected), n.addClass(m.selected), g.selectOnKeydown && h.is.single() && h.set.selectedItem(n), s.scrollTop(u))
					},
					set: {
						filtered: function () {
							var e = h.is.multiple(),
								t = h.is.searchSelection(),
								n = e && t,
								i = t ? h.get.query() : "",
								o = "string" == typeof i && 0 < i.length,
								s = h.get.searchWidth(),
								r = "" !== i;
							e && o && (h.verbose("Adjusting input width", s, g.glyphWidth), T.css("width", s)), o || n && r ? (h.verbose("Hiding placeholder text"), S.addClass(m.filtered)) : (!e || n && !r) && (h.verbose("Showing placeholder text"), S.removeClass(m.filtered))
						},
						empty: function () {
							C.addClass(m.empty)
						},
						loading: function () {
							C.addClass(m.loading)
						},
						placeholderText: function (e) {
							e = e || h.get.placeholderText(), h.debug("Setting placeholder text", e), h.set.text(e), S.addClass(m.placeholder)
						},
						tabbable: function () {
							h.is.searchSelection() ? (h.debug("Added tabindex to searchable dropdown"), T.val("").attr("tabindex", 0), O.attr("tabindex", -1)) : (h.debug("Added tabindex to dropdown"), C.attr("tabindex") === G && (C.attr("tabindex", 0), O.attr("tabindex", -1)))
						},
						initialLoad: function () {
							h.verbose("Setting initial load"), e = !0
						},
						activeItem: function (e) {
							g.allowAdditions && 0 < e.filter(y.addition).length ? e.addClass(m.filtered) : e.addClass(m.active)
						},
						partialSearch: function (e) {
							var t = h.get.query().length;
							T.val(e.substr(0, t))
						},
						scrollPosition: function (e, t) {
							var n, i, o, s, r, a;
							n = (e = e || h.get.selectedItem()).closest(y.menu), i = e && 0 < e.length, t = t !== G && t, e && 0 < n.length && i && (e.position().top, n.addClass(m.loading), o = (s = n.scrollTop()) - n.offset().top + e.offset().top, t || (a = s + n.height() < o + 5, r = o - 5 < s), h.debug("Scrolling to active item", o), (t || r || a) && n.scrollTop(o), n.removeClass(m.loading))
						},
						text: function (e) {
							"select" !== g.action && ("combo" == g.action ? (h.debug("Changing combo button text", e, D), g.preserveHTML ? D.html(e) : D.text(e)) : (e !== h.get.placeholderText() && S.removeClass(m.placeholder), h.debug("Changing text", e, S), S.removeClass(m.filtered), g.preserveHTML ? S.html(e) : S.text(e)))
						},
						selectedItem: function (e) {
							var t = h.get.choiceValue(e),
								n = h.get.choiceText(e, !1),
								i = h.get.choiceText(e, !0);
							h.debug("Setting user selection to item", e), h.remove.activeItem(), h.set.partialSearch(n), h.set.activeItem(e), h.set.selected(t, e), h.set.text(i)
						},
						selectedLetter: function (e) {
							var t, n = $.filter("." + m.selected),
								i = 0 < n.length && h.has.firstLetter(n, e),
								o = !1;
							i && (t = n.nextAll($).eq(0), h.has.firstLetter(t, e) && (o = t)), o || $.each(function () {
								if (h.has.firstLetter(Y(this), e)) return o = Y(this), !1
							}), o && (h.verbose("Scrolling to next value with letter", e), h.set.scrollPosition(o), n.removeClass(m.selected), o.addClass(m.selected), g.selectOnKeydown && h.is.single() && h.set.selectedItem(o))
						},
						direction: function (e) {
							"auto" == g.direction ? (h.remove.upward(), h.can.openDownward(e) ? h.remove.upward(e) : h.set.upward(e), h.is.leftward(e) || h.can.openRightward(e) || h.set.leftward(e)) : "upward" == g.direction && h.set.upward(e)
						},
						upward: function (e) {
							(e || C).addClass(m.upward)
						},
						leftward: function (e) {
							(e || O).addClass(m.leftward)
						},
						value: function (e, t, n) {
							var i = h.escape.value(e),
								o = 0 < E.length,
								s = h.get.values(),
								r = e !== G ? String(e) : e;
							if (o) {
								if (!g.allowReselection && r == s && (h.verbose("Skipping value update already same value", e, s), !h.is.initialLoad())) return;
								h.is.single() && h.has.selectInput() && h.can.extendSelect() && (h.debug("Adding user option", e), h.add.optionValue(e)), h.debug("Updating input value", i, s), j = !0, E.val(i), !1 === g.fireOnInit && h.is.initialLoad() ? h.debug("Input native change event ignored on initial load") : h.trigger.change(), j = !1
							} else h.verbose("Storing value in metadata", i, E), i !== s && C.data(b.value, r);
							h.is.single() && g.clearable && (i ? h.set.clearable() : h.remove.clearable()), !1 === g.fireOnInit && h.is.initialLoad() ? h.verbose("No callback on initial load", g.onChange) : g.onChange.call(F, e, t, n)
						},
						active: function () {
							C.addClass(m.active)
						},
						multiple: function () {
							C.addClass(m.multiple)
						},
						visible: function () {
							C.addClass(m.visible)
						},
						exactly: function (e, t) {
							h.debug("Setting selected to exact values"), h.clear(), h.set.selected(e, t)
						},
						selected: function (e, a) {
							var l = h.is.multiple();
							(a = g.allowAdditions ? a || h.get.itemWithAdditions(e) : a || h.get.item(e)) && (h.debug("Setting selected menu item to", a), h.is.multiple() && h.remove.searchWidth(), h.is.single() ? (h.remove.activeItem(), h.remove.selectedItem()) : g.useLabels && h.remove.selectedItem(), a.each(function () {
								var e = Y(this),
									t = h.get.choiceText(e),
									n = h.get.choiceValue(e, t),
									i = e.hasClass(m.filtered),
									o = e.hasClass(m.active),
									s = e.hasClass(m.addition),
									r = l && 1 == a.length;
								l ? !o || s ? (g.apiSettings && g.saveRemoteData && h.save.remoteData(t, n), g.useLabels ? (h.add.label(n, t, r), h.add.value(n, t, e), h.set.activeItem(e), h.filterActive(), h.select.nextAvailable(a)) : (h.add.value(n, t, e), h.set.text(h.add.variables(c.count)), h.set.activeItem(e))) : i || (h.debug("Selected active value, removing label"), h.remove.selected(n)) : (g.apiSettings && g.saveRemoteData && h.save.remoteData(t, n), h.set.text(t), h.set.value(n, t, e), e.addClass(m.active).addClass(m.selected))
							}))
						},
						clearable: function () {
							P.addClass(m.clear)
						}
					},
					add: {
						label: function (e, t, n) {
							var i, o = h.is.searchSelection() ? T : S,
								s = h.escape.value(e);
							g.ignoreCase && (s = s.toLowerCase()), i = Y("<a />").addClass(m.label).attr("data-" + b.value, s).html(f.label(s, t)), i = g.onLabelCreate.call(i, s, t), h.has.label(e) ? h.debug("User selection already exists, skipping", s) : (g.label.variation && i.addClass(g.label.variation), !0 === n ? (h.debug("Animating in label", i), i.addClass(m.hidden).insertBefore(o).transition(g.label.transition, g.label.duration)) : (h.debug("Adding selection label", i), i.insertBefore(o)))
						},
						message: function (e) {
							var t = O.children(y.message),
								n = g.templates.message(h.add.variables(e));
							0 < t.length ? t.html(n) : t = Y("<div/>").html(n).addClass(m.message).appendTo(O)
						},
						optionValue: function (e) {
							var t = h.escape.value(e);
							0 < E.find('option[value="' + h.escape.string(t) + '"]').length || (h.disconnect.selectObserver(), h.is.single() && (h.verbose("Removing previous user addition"), E.find("option." + m.addition).remove()), Y("<option/>").prop("value", t).addClass(m.addition).html(e).appendTo(E), h.verbose("Adding user addition as an <option>", e), h.observe.select())
						},
						userSuggestion: function (e) {
							var t, n = O.children(y.addition),
								i = h.get.item(e),
								o = i && i.not(y.addition).length,
								s = 0 < n.length;
							g.useLabels && h.has.maxSelections() || ("" === e || o ? n.remove() : (s ? (n.data(b.value, e).data(b.text, e).attr("data-" + b.value, e).attr("data-" + b.text, e).removeClass(m.filtered), g.hideAdditions || (t = g.templates.addition(h.add.variables(c.addResult, e)), n.html(t)), h.verbose("Replacing user suggestion with new value", n)) : ((n = h.create.userChoice(e)).prependTo(O), h.verbose("Adding item choice to menu corresponding with user choice addition", n)), g.hideAdditions && !h.is.allFiltered() || n.addClass(m.selected).siblings().removeClass(m.selected), h.refreshItems()))
						},
						variables: function (e, t) {
							var n, i, o = -1 !== e.search("{count}"),
								s = -1 !== e.search("{maxCount}"),
								r = -1 !== e.search("{term}");
							return h.verbose("Adding templated variables to message", e), o && (n = h.get.selectionCount(), e = e.replace("{count}", n)), s && (n = h.get.selectionCount(), e = e.replace("{maxCount}", g.maxSelections)), r && (i = t || h.get.query(), e = e.replace("{term}", i)), e
						},
						value: function (e, t, n) {
							var i, o = h.get.values();
							h.has.value(e) ? h.debug("Value already selected") : "" !== e ? (i = Y.isArray(o) ? (i = o.concat([e]), h.get.uniqueArray(i)) : [e], h.has.selectInput() ? h.can.extendSelect() && (h.debug("Adding value to select", e, i, E), h.add.optionValue(e)) : (i = i.join(g.delimiter), h.debug("Setting hidden input to delimited value", i, E)), !1 === g.fireOnInit && h.is.initialLoad() ? h.verbose("Skipping onadd callback on initial load", g.onAdd) : g.onAdd.call(F, e, t, n), h.set.value(i, e, t, n), h.check.maxSelections()) : h.debug("Cannot select blank values from multiselect")
						}
					},
					remove: {
						active: function () {
							C.removeClass(m.active)
						},
						activeLabel: function () {
							C.find(y.label).removeClass(m.active)
						},
						empty: function () {
							C.removeClass(m.empty)
						},
						loading: function () {
							C.removeClass(m.loading)
						},
						initialLoad: function () {
							e = !1
						},
						upward: function (e) {
							(e || C).removeClass(m.upward)
						},
						leftward: function (e) {
							(e || O).removeClass(m.leftward)
						},
						visible: function () {
							C.removeClass(m.visible)
						},
						activeItem: function () {
							$.removeClass(m.active)
						},
						filteredItem: function () {
							g.useLabels && h.has.maxSelections() || (g.useLabels && h.is.multiple() ? $.not("." + m.active).removeClass(m.filtered) : $.removeClass(m.filtered), h.remove.empty())
						},
						optionValue: function (e) {
							var t = h.escape.value(e),
								n = E.find('option[value="' + h.escape.string(t) + '"]');
							0 < n.length && n.hasClass(m.addition) && (r && (r.disconnect(), h.verbose("Temporarily disconnecting mutation observer")), n.remove(), h.verbose("Removing user addition as an <option>", t), r && r.observe(E[0], {
								childList: !0,
								subtree: !0
							}))
						},
						message: function () {
							O.children(y.message).remove()
						},
						searchWidth: function () {
							T.css("width", "")
						},
						searchTerm: function () {
							h.verbose("Cleared search term"), T.val(""), h.set.filtered()
						},
						userAddition: function () {
							$.filter(y.addition).remove()
						},
						selected: function (e, t) {
							if (!(t = g.allowAdditions ? t || h.get.itemWithAdditions(e) : t || h.get.item(e))) return !1;
							t.each(function () {
								var e = Y(this),
									t = h.get.choiceText(e),
									n = h.get.choiceValue(e, t);
								h.is.multiple() ? g.useLabels ? (h.remove.value(n, t, e), h.remove.label(n)) : (h.remove.value(n, t, e), 0 === h.get.selectionCount() ? h.set.placeholderText() : h.set.text(h.add.variables(c.count))) : h.remove.value(n, t, e), e.removeClass(m.filtered).removeClass(m.active), g.useLabels && e.removeClass(m.selected)
							})
						},
						selectedItem: function () {
							$.removeClass(m.selected)
						},
						value: function (e, t, n) {
							var i, o = h.get.values();
							h.has.selectInput() ? (h.verbose("Input is <select> removing selected option", e), i = h.remove.arrayValue(e, o), h.remove.optionValue(e)) : (h.verbose("Removing from delimited values", e), i = (i = h.remove.arrayValue(e, o)).join(g.delimiter)), !1 === g.fireOnInit && h.is.initialLoad() ? h.verbose("No callback on initial load", g.onRemove) : g.onRemove.call(F, e, t, n), h.set.value(i, t, n), h.check.maxSelections()
						},
						arrayValue: function (t, e) {
							return Y.isArray(e) || (e = [e]), e = Y.grep(e, function (e) {
								return t != e
							}), h.verbose("Removed value from delimited string", t, e), e
						},
						label: function (e, t) {
							var n = C.find(y.label).filter("[data-" + b.value + '="' + h.escape.string(e) + '"]');
							h.verbose("Removing label", n), n.remove()
						},
						activeLabels: function (e) {
							e = e || C.find(y.label).filter("." + m.active), h.verbose("Removing active label selections", e), h.remove.labels(e)
						},
						labels: function (e) {
							e = e || C.find(y.label), h.verbose("Removing labels", e), e.each(function () {
								var e = Y(this),
									t = e.data(b.value),
									n = t !== G ? String(t) : t,
									i = h.is.userValue(n);
								!1 !== g.onLabelRemove.call(e, t) ? (h.remove.message(), i ? (h.remove.value(n), h.remove.label(n)) : h.remove.selected(n)) : h.debug("Label remove callback cancelled removal")
							})
						},
						tabbable: function () {
							h.is.searchSelection() ? (h.debug("Searchable dropdown initialized"), T.removeAttr("tabindex")) : (h.debug("Simple selection dropdown initialized"), C.removeAttr("tabindex")), O.removeAttr("tabindex")
						},
						clearable: function () {
							P.removeClass(m.clear)
						}
					},
					has: {
						menuSearch: function () {
							return h.has.search() && 0 < T.closest(O).length
						},
						search: function () {
							return 0 < T.length
						},
						sizer: function () {
							return 0 < A.length
						},
						selectInput: function () {
							return E.is("select")
						},
						minCharacters: function (e) {
							return !g.minCharacters || (e = e !== G ? String(e) : String(h.get.query())).length >= g.minCharacters
						},
						firstLetter: function (e, t) {
							var n;
							return !(!e || 0 === e.length || "string" != typeof t) && (n = h.get.choiceText(e, !1), (t = t.toLowerCase()) == String(n).charAt(0).toLowerCase())
						},
						input: function () {
							return 0 < E.length
						},
						items: function () {
							return 0 < $.length
						},
						menu: function () {
							return 0 < O.length
						},
						message: function () {
							return 0 !== O.children(y.message).length
						},
						label: function (e) {
							var t = h.escape.value(e),
								n = C.find(y.label);
							return g.ignoreCase && (t = t.toLowerCase()), 0 < n.filter("[data-" + b.value + '="' + h.escape.string(t) + '"]').length
						},
						maxSelections: function () {
							return g.maxSelections && h.get.selectionCount() >= g.maxSelections
						},
						allResultsFiltered: function () {
							var e = $.not(y.addition);
							return e.filter(y.unselectable).length === e.length
						},
						userSuggestion: function () {
							return 0 < O.children(y.addition).length
						},
						query: function () {
							return "" !== h.get.query()
						},
						value: function (e) {
							return g.ignoreCase ? h.has.valueIgnoringCase(e) : h.has.valueMatchingCase(e)
						},
						valueMatchingCase: function (e) {
							var t = h.get.values();
							return !!(Y.isArray(t) ? t && -1 !== Y.inArray(e, t) : t == e)
						},
						valueIgnoringCase: function (n) {
							var e = h.get.values(),
								i = !1;
							return Y.isArray(e) || (e = [e]), Y.each(e, function (e, t) {
								if (String(n).toLowerCase() == String(t).toLowerCase()) return !(i = !0)
							}), i
						}
					},
					is: {
						active: function () {
							return C.hasClass(m.active)
						},
						animatingInward: function () {
							return O.transition("is inward")
						},
						animatingOutward: function () {
							return O.transition("is outward")
						},
						bubbledLabelClick: function (e) {
							return Y(e.target).is("select, input") && 0 < C.closest("label").length
						},
						bubbledIconClick: function (e) {
							return 0 < Y(e.target).closest(P).length
						},
						alreadySetup: function () {
							return C.is("select") && C.parent(y.dropdown).data(x) !== G && 0 === C.prev().length
						},
						animating: function (e) {
							return e ? e.transition && e.transition("is animating") : O.transition && O.transition("is animating")
						},
						leftward: function (e) {
							return (e || O).hasClass(m.leftward)
						},
						disabled: function () {
							return C.hasClass(m.disabled)
						},
						focused: function () {
							return Z.activeElement === C[0]
						},
						focusedOnSearch: function () {
							return Z.activeElement === T[0]
						},
						allFiltered: function () {
							return (h.is.multiple() || h.has.search()) && !(0 == g.hideAdditions && h.has.userSuggestion()) && !h.has.message() && h.has.allResultsFiltered()
						},
						hidden: function (e) {
							return !h.is.visible(e)
						},
						initialLoad: function () {
							return e
						},
						inObject: function (n, e) {
							var i = !1;
							return Y.each(e, function (e, t) {
								if (t == n) return i = !0
							}), i
						},
						multiple: function () {
							return C.hasClass(m.multiple)
						},
						remote: function () {
							return g.apiSettings && h.can.useAPI()
						},
						single: function () {
							return !h.is.multiple()
						},
						selectMutation: function (e) {
							var n = !1;
							return Y.each(e, function (e, t) {
								if (t.target && Y(t.target).is("select")) return n = !0
							}), n
						},
						search: function () {
							return C.hasClass(m.search)
						},
						searchSelection: function () {
							return h.has.search() && 1 === T.parent(y.dropdown).length
						},
						selection: function () {
							return C.hasClass(m.selection)
						},
						userValue: function (e) {
							return -1 !== Y.inArray(e, h.get.userValues())
						},
						upward: function (e) {
							return (e || C).hasClass(m.upward)
						},
						visible: function (e) {
							return e ? e.hasClass(m.visible) : O.hasClass(m.visible)
						},
						verticallyScrollableContext: function () {
							var e = k.get(0) !== Q && k.css("overflow-y");
							return "auto" == e || "scroll" == e
						},
						horizontallyScrollableContext: function () {
							var e = k.get(0) !== Q && k.css("overflow-X");
							return "auto" == e || "scroll" == e
						}
					},
					can: {
						activate: function (e) {
							return !!g.useLabels || !h.has.maxSelections() || !(!h.has.maxSelections() || !e.hasClass(m.active))
						},
						openDownward: function (e) {
							var t, n, i, o = e || O;
							return o.addClass(m.loading), n = {
								context: {
									offset: k.get(0) === Q ? {
										top: 0,
										left: 0
									} : k.offset(),
									scrollTop: k.scrollTop(),
									height: k.outerHeight()
								},
								menu: {
									offset: o.offset(),
									height: o.outerHeight()
								}
							}, h.is.verticallyScrollableContext() && (n.menu.offset.top += n.context.scrollTop), i = (t = {
								above: n.context.scrollTop <= n.menu.offset.top - n.context.offset.top - n.menu.height,
								below: n.context.scrollTop + n.context.height >= n.menu.offset.top - n.context.offset.top + n.menu.height
							}).below ? (h.verbose("Dropdown can fit in context downward", t), !0) : t.below || t.above ? (h.verbose("Dropdown cannot fit below, opening upward", t), !1) : (h.verbose("Dropdown cannot fit in either direction, favoring downward", t), !0), o.removeClass(m.loading), i
						},
						openRightward: function (e) {
							var t, n, i = e || O,
								o = !0;
							return i.addClass(m.loading), n = {
								context: {
									offset: k.get(0) === Q ? {
										top: 0,
										left: 0
									} : k.offset(),
									scrollLeft: k.scrollLeft(),
									width: k.outerWidth()
								},
								menu: {
									offset: i.offset(),
									width: i.outerWidth()
								}
							}, h.is.horizontallyScrollableContext() && (n.menu.offset.left += n.context.scrollLeft), (t = n.menu.offset.left - n.context.offset.left + n.menu.width >= n.context.scrollLeft + n.context.width) && (h.verbose("Dropdown cannot fit in context rightward", t), o = !1), i.removeClass(m.loading), o
						},
						click: function () {
							return I || "click" == g.on
						},
						extendSelect: function () {
							return g.allowAdditions || g.apiSettings
						},
						show: function () {
							return !h.is.disabled() && (h.has.items() || h.has.message())
						},
						useAPI: function () {
							return Y.fn.api !== G
						}
					},
					animate: {
						show: function (e, t) {
							var n, i = t || O,
								o = t ? function () { } : function () {
									h.hideSubMenus(), h.hideOthers(), h.set.active()
								};
							e = Y.isFunction(e) ? e : function () { }, h.verbose("Doing menu show animation", i), h.set.direction(t), n = h.get.transition(t), h.is.selection() && h.set.scrollPosition(h.get.selectedItem(), !0), (h.is.hidden(i) || h.is.animating(i)) && ("none" == n ? (o(), i.transition("show"), e.call(F)) : Y.fn.transition !== G && C.transition("is supported") ? i.transition({
								animation: n + " in",
								debug: g.debug,
								verbose: g.verbose,
								duration: g.duration,
								queue: !0,
								onStart: o,
								onComplete: function () {
									e.call(F)
								}
							}) : h.error(p.noTransition, n))
						},
						hide: function (e, t) {
							var n = t || O,
								i = (g.duration, t ? function () { } : function () {
									h.can.click() && h.unbind.intent(), h.remove.active()
								}),
								o = h.get.transition(t);
							e = Y.isFunction(e) ? e : function () { }, (h.is.visible(n) || h.is.animating(n)) && (h.verbose("Doing menu hide animation", n), "none" == o ? (i(), n.transition("hide"), e.call(F)) : Y.fn.transition !== G && C.transition("is supported") ? n.transition({
								animation: o + " out",
								duration: g.duration,
								debug: g.debug,
								verbose: g.verbose,
								queue: !1,
								onStart: i,
								onComplete: function () {
									e.call(F)
								}
							}) : h.error(p.transition))
						}
					},
					hideAndClear: function () {
						h.remove.searchTerm(), h.has.maxSelections() || (h.has.search() ? h.hide(function () {
							h.remove.filteredItem()
						}) : h.hide())
					},
					delay: {
						show: function () {
							h.verbose("Delaying show event to ensure user intent"), clearTimeout(h.timer), h.timer = setTimeout(h.show, g.delay.show)
						},
						hide: function () {
							h.verbose("Delaying hide event to ensure user intent"), clearTimeout(h.timer), h.timer = setTimeout(h.hide, g.delay.hide)
						}
					},
					escape: {
						value: function (e) {
							var t = Y.isArray(e),
								n = "string" == typeof e,
								i = !n && !t,
								o = n && -1 !== e.search(d.quote),
								s = [];
							return i || !o ? e : (h.debug("Encoding quote values for use in select", e), t ? (Y.each(e, function (e, t) {
								s.push(t.replace(d.quote, "&quot;"))
							}), s) : e.replace(d.quote, "&quot;"))
						},
						string: function (e) {
							return (e = String(e)).replace(d.escape, "\\$&")
						}
					},
					setting: function (e, t) {
						if (h.debug("Changing setting", e, t), Y.isPlainObject(e)) Y.extend(!0, g, e);
						else {
							if (t === G) return g[e];
							Y.isPlainObject(g[e]) ? Y.extend(!0, g[e], t) : g[e] = t
						}
					},
					internal: function (e, t) {
						if (Y.isPlainObject(e)) Y.extend(!0, h, e);
						else {
							if (t === G) return h[e];
							h[e] = t
						}
					},
					debug: function () {
						!g.silent && g.debug && (g.performance ? h.performance.log(arguments) : (h.debug = Function.prototype.bind.call(console.info, console, g.name + ":"), h.debug.apply(console, arguments)))
					},
					verbose: function () {
						!g.silent && g.verbose && g.debug && (g.performance ? h.performance.log(arguments) : (h.verbose = Function.prototype.bind.call(console.info, console, g.name + ":"), h.verbose.apply(console, arguments)))
					},
					error: function () {
						g.silent || (h.error = Function.prototype.bind.call(console.error, console, g.name + ":"), h.error.apply(console, arguments))
					},
					performance: {
						log: function (e) {
							var t, n;
							g.performance && (n = (t = (new Date).getTime()) - (W || t), W = t, V.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: F,
								"Execution Time": n
							})), clearTimeout(h.performance.timer), h.performance.timer = setTimeout(h.performance.display, 500)
						},
						display: function () {
							var e = g.name + ":",
								n = 0;
							W = !1, clearTimeout(h.performance.timer), Y.each(V, function (e, t) {
								n += t["Execution Time"]
							}), e += " " + n + "ms", H && (e += " '" + H + "'"), (console.group !== G || console.table !== G) && 0 < V.length && (console.groupCollapsed(e), console.table ? console.table(V) : Y.each(V, function (e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), V = []
						}
					},
					invoke: function (i, e, t) {
						var o, s, n, r = L;
						return e = e || X, t = F || t, "string" == typeof i && r !== G && (i = i.split(/[\. ]/), o = i.length - 1, Y.each(i, function (e, t) {
							var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
							if (Y.isPlainObject(r[n]) && e != o) r = r[n];
							else {
								if (r[n] !== G) return s = r[n], !1;
								if (!Y.isPlainObject(r[t]) || e == o) return r[t] !== G ? s = r[t] : h.error(p.method, i), !1;
								r = r[t]
							}
						})), Y.isFunction(s) ? n = s.apply(t, e) : s !== G && (n = s), Y.isArray(z) ? z.push(n) : z !== G ? z = [z, n] : n !== G && (z = n), s
					}
				}, B ? (L === G && h.initialize(), h.invoke(U)) : (L !== G && L.invoke("destroy"), h.initialize())
			}), z !== G ? z : M
		}, Y.fn.dropdown.settings = {
			silent: !1,
			debug: !1,
			verbose: !1,
			performance: !0,
			on: "click",
			action: "activate",
			values: !1,
			clearable: !1,
			apiSettings: !1,
			selectOnKeydown: !0,
			minCharacters: 0,
			filterRemoteData: !1,
			saveRemoteData: !0,
			throttle: 200,
			context: Q,
			direction: "auto",
			keepOnScreen: !0,
			match: "both",
			fullTextSearch: !1,
			placeholder: "auto",
			preserveHTML: !0,
			sortSelect: !1,
			forceSelection: !0,
			allowAdditions: !1,
			ignoreCase: !1,
			hideAdditions: !0,
			maxSelections: !1,
			useLabels: !0,
			delimiter: ",",
			showOnFocus: !0,
			allowReselection: !1,
			allowTab: !0,
			allowCategorySelection: !1,
			fireOnInit: !1,
			transition: "auto",
			duration: 200,
			glyphWidth: 1.037,
			label: {
				transition: "scale",
				duration: 200,
				variation: !1
			},
			delay: {
				hide: 300,
				show: 200,
				search: 20,
				touch: 50
			},
			onChange: function (e, t, n) { },
			onAdd: function (e, t, n) { },
			onRemove: function (e, t, n) { },
			onLabelSelect: function (e) { },
			onLabelCreate: function (e, t) {
				return Y(this)
			},
			onLabelRemove: function (e) {
				return !0
			},
			onNoResults: function (e) {
				return !0
			},
			onShow: function () { },
			onHide: function () { },
			name: "Dropdown",
			namespace: "dropdown",
			message: {
				addResult: "Add <b>{term}</b>",
				count: "{count} selected",
				maxSelections: "Max {maxCount} selections",
				noResults: "No results found.",
				serverError: "There was an error contacting the server"
			},
			error: {
				action: "You called a dropdown action that was not defined",
				alreadySetup: "Once a select has been initialized behaviors must be called on the created ui dropdown",
				labels: "Allowing user additions currently requires the use of labels.",
				missingMultiple: "<select> requires multiple property to be set to correctly preserve multiple values",
				method: "The method you called is not defined.",
				noAPI: "The API module is required to load resources remotely",
				noStorage: "Saving remote data requires session storage",
				noTransition: "This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>"
			},
			regExp: {
				escape: /[-[\]{}()*+?.,\\^$|#\s]/g,
				quote: /"/g
			},
			metadata: {
				defaultText: "defaultText",
				defaultValue: "defaultValue",
				placeholderText: "placeholder",
				text: "text",
				value: "value"
			},
			fields: {
				remoteValues: "results",
				values: "values",
				disabled: "disabled",
				name: "name",
				value: "value",
				text: "text"
			},
			keys: {
				backspace: 8,
				delimiter: 188,
				deleteKey: 46,
				enter: 13,
				escape: 27,
				pageUp: 33,
				pageDown: 34,
				leftArrow: 37,
				upArrow: 38,
				rightArrow: 39,
				downArrow: 40
			},
			selector: {
				addition: ".addition",
				dropdown: ".ui.dropdown",
				hidden: ".hidden",
				icon: "> .dropdown.icon",
				input: '> input[type="hidden"], > select',
				item: ".item",
				label: "> .label",
				remove: "> .label > .delete.icon",
				siblingLabel: ".label",
				menu: ".menu",
				message: ".message",
				menuIcon: ".dropdown.icon",
				search: "input.search, .menu > .search > input, .menu input.search",
				sizer: "> input.sizer",
				text: "> .text:not(.icon)",
				unselectable: ".disabled, .filtered"
			},
			className: {
				active: "active",
				addition: "addition",
				animating: "animating",
				clear: "clear",
				disabled: "disabled",
				empty: "empty",
				dropdown: "ui dropdown",
				filtered: "filtered",
				hidden: "hidden transition",
				item: "item",
				label: "ui label",
				loading: "loading",
				menu: "menu",
				message: "message",
				multiple: "multiple",
				placeholder: "default",
				sizer: "sizer",
				search: "search",
				selected: "selected",
				selection: "selection",
				upward: "upward",
				leftward: "left",
				visible: "visible"
			}
		}, Y.fn.dropdown.settings.templates = {
			dropdown: function (e) {
				var t = e.placeholder || !1,
					n = (e.values, "");
				return n += '<i class="dropdown icon"></i>', e.placeholder ? n += '<div class="default text">' + t + "</div>" : n += '<div class="text"></div>', n += '<div class="menu">', Y.each(e.values, function (e, t) {
					n += t.disabled ? '<div class="disabled item" data-value="' + t.value + '">' + t.name + "</div>" : '<div class="item" data-value="' + t.value + '">' + t.name + "</div>"
				}), n += "</div>"
			},
			menu: function (e, o) {
				var t = e[o.values] || {},
					s = "";
				return Y.each(t, function (e, t) {
					var n = t[o.text] ? 'data-text="' + t[o.text] + '"' : "",
						i = t[o.disabled] ? "disabled " : "";
					s += '<div class="' + i + 'item" data-value="' + t[o.value] + '"' + n + ">", s += t[o.name], s += "</div>"
				}), s
			},
			label: function (e, t) {
				return t + '<i class="delete icon"></i>'
			},
			message: function (e) {
				return e
			},
			addition: function (e) {
				return e
			}
		}
	}(jQuery, window, document),
	function (S, T, e, A) {
		"use strict";
		T = void 0 !== T && T.Math == Math ? T : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), S.fn.embed = function (g) {
			var m, v = S(this),
				b = v.selector || "",
				y = (new Date).getTime(),
				w = [],
				x = g,
				C = "string" == typeof x,
				k = [].slice.call(arguments, 1);
			return v.each(function () {
				var a, i = S.isPlainObject(g) ? S.extend(!0, {}, S.fn.embed.settings, g) : S.extend({}, S.fn.embed.settings),
					e = i.selector,
					t = i.className,
					o = i.sources,
					l = i.error,
					s = i.metadata,
					n = i.namespace,
					r = i.templates,
					c = "." + n,
					u = "module-" + n,
					d = (S(T), S(this)),
					p = (d.find(e.placeholder), d.find(e.icon), d.find(e.embed)),
					f = this,
					h = d.data(u);
				a = {
					initialize: function () {
						a.debug("Initializing embed"), a.determine.autoplay(), a.create(), a.bind.events(), a.instantiate()
					},
					instantiate: function () {
						a.verbose("Storing instance of module", a), h = a, d.data(u, a)
					},
					destroy: function () {
						a.verbose("Destroying previous instance of embed"), a.reset(), d.removeData(u).off(c)
					},
					refresh: function () {
						a.verbose("Refreshing selector cache"), d.find(e.placeholder), d.find(e.icon), p = d.find(e.embed)
					},
					bind: {
						events: function () {
							a.has.placeholder() && (a.debug("Adding placeholder events"), d.on("click" + c, e.placeholder, a.createAndShow).on("click" + c, e.icon, a.createAndShow))
						}
					},
					create: function () {
						a.get.placeholder() ? a.createPlaceholder() : a.createAndShow()
					},
					createPlaceholder: function (e) {
						var t = a.get.icon(),
							n = a.get.url();
						a.generate.embed(n), e = e || a.get.placeholder(), d.html(r.placeholder(e, t)), a.debug("Creating placeholder for embed", e, t)
					},
					createEmbed: function (e) {
						a.refresh(), e = e || a.get.url(), p = S("<div/>").addClass(t.embed).html(a.generate.embed(e)).appendTo(d), i.onCreate.call(f, e), a.debug("Creating embed object", p)
					},
					changeEmbed: function (e) {
						p.html(a.generate.embed(e))
					},
					createAndShow: function () {
						a.createEmbed(), a.show()
					},
					change: function (e, t, n) {
						a.debug("Changing video to ", e, t, n), d.data(s.source, e).data(s.id, t), n ? d.data(s.url, n) : d.removeData(s.url), a.has.embed() ? a.changeEmbed() : a.create()
					},
					reset: function () {
						a.debug("Clearing embed and showing placeholder"), a.remove.data(), a.remove.active(), a.remove.embed(), a.showPlaceholder(), i.onReset.call(f)
					},
					show: function () {
						a.debug("Showing embed"), a.set.active(), i.onDisplay.call(f)
					},
					hide: function () {
						a.debug("Hiding embed"), a.showPlaceholder()
					},
					showPlaceholder: function () {
						a.debug("Showing placeholder image"), a.remove.active(), i.onPlaceholderDisplay.call(f)
					},
					get: {
						id: function () {
							return i.id || d.data(s.id)
						},
						placeholder: function () {
							return i.placeholder || d.data(s.placeholder)
						},
						icon: function () {
							return i.icon ? i.icon : d.data(s.icon) !== A ? d.data(s.icon) : a.determine.icon()
						},
						source: function (e) {
							return i.source ? i.source : d.data(s.source) !== A ? d.data(s.source) : a.determine.source()
						},
						type: function () {
							var e = a.get.source();
							return o[e] !== A && o[e].type
						},
						url: function () {
							return i.url ? i.url : d.data(s.url) !== A ? d.data(s.url) : a.determine.url()
						}
					},
					determine: {
						autoplay: function () {
							a.should.autoplay() && (i.autoplay = !0)
						},
						source: function (n) {
							var i = !1;
							return (n = n || a.get.url()) && S.each(o, function (e, t) {
								if (-1 !== n.search(t.domain)) return i = e, !1
							}), i
						},
						icon: function () {
							var e = a.get.source();
							return o[e] !== A && o[e].icon
						},
						url: function () {
							var e, t = i.id || d.data(s.id),
								n = i.source || d.data(s.source);
							return (e = o[n] !== A && o[n].url.replace("{id}", t)) && d.data(s.url, e), e
						}
					},
					set: {
						active: function () {
							d.addClass(t.active)
						}
					},
					remove: {
						data: function () {
							d.removeData(s.id).removeData(s.icon).removeData(s.placeholder).removeData(s.source).removeData(s.url)
						},
						active: function () {
							d.removeClass(t.active)
						},
						embed: function () {
							p.empty()
						}
					},
					encode: {
						parameters: function (e) {
							var t, n = [];
							for (t in e) n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
							return n.join("&amp;")
						}
					},
					generate: {
						embed: function (e) {
							a.debug("Generating embed html");
							var t, n, i = a.get.source();
							return (e = a.get.url(e)) ? (n = a.generate.parameters(i), t = r.iframe(e, n)) : a.error(l.noURL, d), t
						},
						parameters: function (e, t) {
							var n = o[e] && o[e].parameters !== A ? o[e].parameters(i) : {};
							return (t = t || i.parameters) && (n = S.extend({}, n, t)), n = i.onEmbed(n), a.encode.parameters(n)
						}
					},
					has: {
						embed: function () {
							return 0 < p.length
						},
						placeholder: function () {
							return i.placeholder || d.data(s.placeholder)
						}
					},
					should: {
						autoplay: function () {
							return "auto" === i.autoplay ? i.placeholder || d.data(s.placeholder) !== A : i.autoplay
						}
					},
					is: {
						video: function () {
							return "video" == a.get.type()
						}
					},
					setting: function (e, t) {
						if (a.debug("Changing setting", e, t), S.isPlainObject(e)) S.extend(!0, i, e);
						else {
							if (t === A) return i[e];
							S.isPlainObject(i[e]) ? S.extend(!0, i[e], t) : i[e] = t
						}
					},
					internal: function (e, t) {
						if (S.isPlainObject(e)) S.extend(!0, a, e);
						else {
							if (t === A) return a[e];
							a[e] = t
						}
					},
					debug: function () {
						!i.silent && i.debug && (i.performance ? a.performance.log(arguments) : (a.debug = Function.prototype.bind.call(console.info, console, i.name + ":"), a.debug.apply(console, arguments)))
					},
					verbose: function () {
						!i.silent && i.verbose && i.debug && (i.performance ? a.performance.log(arguments) : (a.verbose = Function.prototype.bind.call(console.info, console, i.name + ":"), a.verbose.apply(console, arguments)))
					},
					error: function () {
						i.silent || (a.error = Function.prototype.bind.call(console.error, console, i.name + ":"), a.error.apply(console, arguments))
					},
					performance: {
						log: function (e) {
							var t, n;
							i.performance && (n = (t = (new Date).getTime()) - (y || t), y = t, w.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: f,
								"Execution Time": n
							})), clearTimeout(a.performance.timer), a.performance.timer = setTimeout(a.performance.display, 500)
						},
						display: function () {
							var e = i.name + ":",
								n = 0;
							y = !1, clearTimeout(a.performance.timer), S.each(w, function (e, t) {
								n += t["Execution Time"]
							}), e += " " + n + "ms", b && (e += " '" + b + "'"), 1 < v.length && (e += " (" + v.length + ")"), (console.group !== A || console.table !== A) && 0 < w.length && (console.groupCollapsed(e), console.table ? console.table(w) : S.each(w, function (e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), w = []
						}
					},
					invoke: function (i, e, t) {
						var o, s, n, r = h;
						return e = e || k, t = f || t, "string" == typeof i && r !== A && (i = i.split(/[\. ]/), o = i.length - 1, S.each(i, function (e, t) {
							var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
							if (S.isPlainObject(r[n]) && e != o) r = r[n];
							else {
								if (r[n] !== A) return s = r[n], !1;
								if (!S.isPlainObject(r[t]) || e == o) return r[t] !== A ? s = r[t] : a.error(l.method, i), !1;
								r = r[t]
							}
						})), S.isFunction(s) ? n = s.apply(t, e) : s !== A && (n = s), S.isArray(m) ? m.push(n) : m !== A ? m = [m, n] : n !== A && (m = n), s
					}
				}, C ? (h === A && a.initialize(), a.invoke(x)) : (h !== A && h.invoke("destroy"), a.initialize())
			}), m !== A ? m : this
		}, S.fn.embed.settings = {
			name: "Embed",
			namespace: "embed",
			silent: !1,
			debug: !1,
			verbose: !1,
			performance: !0,
			icon: !1,
			source: !1,
			url: !1,
			id: !1,
			autoplay: "auto",
			color: "#444444",
			hd: !0,
			brandedUI: !1,
			parameters: !1,
			onDisplay: function () { },
			onPlaceholderDisplay: function () { },
			onReset: function () { },
			onCreate: function (e) { },
			onEmbed: function (e) {
				return e
			},
			metadata: {
				id: "id",
				icon: "icon",
				placeholder: "placeholder",
				source: "source",
				url: "url"
			},
			error: {
				noURL: "No URL specified",
				method: "The method you called is not defined"
			},
			className: {
				active: "active",
				embed: "embed"
			},
			selector: {
				embed: ".embed",
				placeholder: ".placeholder",
				icon: ".icon"
			},
			sources: {
				youtube: {
					name: "youtube",
					type: "video",
					icon: "video play",
					domain: "youtube.com",
					url: "//www.youtube.com/embed/{id}",
					parameters: function (e) {
						return {
							autohide: !e.brandedUI,
							autoplay: e.autoplay,
							color: e.color || A,
							hq: e.hd,
							jsapi: e.api,
							modestbranding: !e.brandedUI
						}
					}
				},
				vimeo: {
					name: "vimeo",
					type: "video",
					icon: "video play",
					domain: "vimeo.com",
					url: "//player.vimeo.com/video/{id}",
					parameters: function (e) {
						return {
							api: e.api,
							autoplay: e.autoplay,
							byline: e.brandedUI,
							color: e.color || A,
							portrait: e.brandedUI,
							title: e.brandedUI
						}
					}
				}
			},
			templates: {
				iframe: function (e, t) {
					var n = e;
					return t && (n += "?" + t), '<iframe src="' + n + '" width="100%" height="100%" frameborder="0" scrolling="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
				},
				placeholder: function (e, t) {
					var n = "";
					return t && (n += '<i class="' + t + ' icon"></i>'), e && (n += '<img class="placeholder" src="' + e + '">'), n
				}
			},
			api: !1,
			onPause: function () { },
			onPlay: function () { },
			onStop: function () { }
		}
	}(jQuery, window, document),
	function (j, F, L, q) {
		"use strict";
		F = void 0 !== F && F.Math == Math ? F : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), j.fn.modal = function (C) {
			var k, e = j(this),
				S = j(F),
				T = j(L),
				A = j("body"),
				E = e.selector || "",
				P = (new Date).getTime(),
				D = [],
				O = C,
				$ = "string" == typeof O,
				R = [].slice.call(arguments, 1),
				_ = F.requestAnimationFrame || F.mozRequestAnimationFrame || F.webkitRequestAnimationFrame || F.msRequestAnimationFrame || function (e) {
					setTimeout(e, 0)
				};
			return e.each(function () {
				var n, i, e, o, s, t, r, a, l, c = j.isPlainObject(C) ? j.extend(!0, {}, j.fn.modal.settings, C) : j.extend({}, j.fn.modal.settings),
					u = c.selector,
					d = c.className,
					p = c.namespace,
					f = c.error,
					h = "." + p,
					g = "module-" + p,
					m = j(this),
					v = j(c.context),
					b = m.find(u.close),
					y = this,
					w = m.data(g),
					x = !1;
				l = {
					initialize: function () {
						l.verbose("Initializing dimmer", v), l.create.id(), l.create.dimmer(), l.refreshModals(), l.bind.events(), c.observeChanges && l.observeChanges(), l.instantiate()
					},
					instantiate: function () {
						l.verbose("Storing instance of modal"), w = l, m.data(g, w)
					},
					create: {
						dimmer: function () {
							var e = {
								debug: c.debug,
								variation: !c.centered && "top aligned",
								dimmerName: "modals"
							},
								t = j.extend(!0, e, c.dimmerSettings);
							j.fn.dimmer !== q ? (l.debug("Creating dimmer"), o = v.dimmer(t), c.detachable ? (l.verbose("Modal is detachable, moving content into dimmer"), o.dimmer("add content", m)) : l.set.undetached(), s = o.dimmer("get dimmer")) : l.error(f.dimmer)
						},
						id: function () {
							r = (Math.random().toString(16) + "000000000").substr(2, 8), t = "." + r, l.verbose("Creating unique id for element", r)
						}
					},
					destroy: function () {
						l.verbose("Destroying previous modal"), m.removeData(g).off(h), S.off(t), s.off(t), b.off(h), v.dimmer("destroy")
					},
					observeChanges: function () {
						"MutationObserver" in F && ((a = new MutationObserver(function (e) {
							l.debug("DOM tree modified, refreshing"), l.refresh()
						})).observe(y, {
							childList: !0,
							subtree: !0
						}), l.debug("Setting up mutation observer", a))
					},
					refresh: function () {
						l.remove.scrolling(), l.cacheSizes(), l.can.useFlex() || l.set.modalOffset(), l.set.screenHeight(), l.set.type()
					},
					refreshModals: function () {
						i = m.siblings(u.modal), n = i.add(m)
					},
					attachEvents: function (e, t) {
						var n = j(e);
						t = j.isFunction(l[t]) ? l[t] : l.toggle, 0 < n.length ? (l.debug("Attaching modal events to element", e, t), n.off(h).on("click" + h, t)) : l.error(f.notFound, e)
					},
					bind: {
						events: function () {
							l.verbose("Attaching events"), m.on("click" + h, u.close, l.event.close).on("click" + h, u.approve, l.event.approve).on("click" + h, u.deny, l.event.deny), S.on("resize" + t, l.event.resize)
						},
						scrollLock: function () {
							o.get(0).addEventListener("touchmove", l.event.preventScroll, {
								passive: !1
							})
						}
					},
					unbind: {
						scrollLock: function () {
							o.get(0).removeEventListener("touchmove", l.event.preventScroll, {
								passive: !1
							})
						}
					},
					get: {
						id: function () {
							return (Math.random().toString(16) + "000000000").substr(2, 8)
						}
					},
					event: {
						approve: function () {
							x || !1 === c.onApprove.call(y, j(this)) ? l.verbose("Approve callback returned false cancelling hide") : (x = !0, l.hide(function () {
								x = !1
							}))
						},
						preventScroll: function (e) {
							e.preventDefault()
						},
						deny: function () {
							x || !1 === c.onDeny.call(y, j(this)) ? l.verbose("Deny callback returned false cancelling hide") : (x = !0, l.hide(function () {
								x = !1
							}))
						},
						close: function () {
							l.hide()
						},
						click: function (e) {
							if (c.closable) {
								var t = 0 < j(e.target).closest(u.modal).length,
									n = j.contains(L.documentElement, e.target);
								!t && n && l.is.active() && (l.debug("Dimmer clicked, hiding all modals"), l.remove.clickaway(), c.allowMultiple ? l.hide() : l.hideAll())
							} else l.verbose("Dimmer clicked but closable setting is disabled")
						},
						debounce: function (e, t) {
							clearTimeout(l.timer), l.timer = setTimeout(e, t)
						},
						keyboard: function (e) {
							27 == e.which && (c.closable ? (l.debug("Escape key pressed hiding modal"), l.hide()) : l.debug("Escape key pressed, but closable is set to false"), e.preventDefault())
						},
						resize: function () {
							o.dimmer("is active") && (l.is.animating() || l.is.active()) && _(l.refresh)
						}
					},
					toggle: function () {
						l.is.active() || l.is.animating() ? l.hide() : l.show()
					},
					show: function (e) {
						e = j.isFunction(e) ? e : function () { }, l.refreshModals(), l.set.dimmerSettings(), l.set.dimmerStyles(), l.showModal(e)
					},
					hide: function (e) {
						e = j.isFunction(e) ? e : function () { }, l.refreshModals(), l.hideModal(e)
					},
					showModal: function (e) {
						e = j.isFunction(e) ? e : function () { }, l.is.animating() || !l.is.active() ? (l.showDimmer(), l.cacheSizes(), l.can.useFlex() ? l.remove.legacy() : (l.set.legacy(), l.set.modalOffset(), l.debug("Using non-flex legacy modal positioning.")), l.set.screenHeight(), l.set.type(), l.set.clickaway(), !c.allowMultiple && l.others.active() ? l.hideOthers(l.showModal) : (c.allowMultiple && c.detachable && m.detach().appendTo(s), c.onShow.call(y), c.transition && j.fn.transition !== q && m.transition("is supported") ? (l.debug("Showing modal with css animations"), m.transition({
							debug: c.debug,
							animation: c.transition + " in",
							queue: c.queue,
							duration: c.duration,
							useFailSafe: !0,
							onComplete: function () {
								c.onVisible.apply(y), c.keyboardShortcuts && l.add.keyboardShortcuts(), l.save.focus(), l.set.active(), c.autofocus && l.set.autofocus(), e()
							}
						})) : l.error(f.noTransition))) : l.debug("Modal is already visible")
					},
					hideModal: function (e, t) {
						e = j.isFunction(e) ? e : function () { }, l.debug("Hiding modal"), !1 !== c.onHide.call(y, j(this)) ? (l.is.animating() || l.is.active()) && (c.transition && j.fn.transition !== q && m.transition("is supported") ? (l.remove.active(), m.transition({
							debug: c.debug,
							animation: c.transition + " out",
							queue: c.queue,
							duration: c.duration,
							useFailSafe: !0,
							onStart: function () {
								l.others.active() || t || l.hideDimmer(), c.keyboardShortcuts && l.remove.keyboardShortcuts()
							},
							onComplete: function () {
								c.onHidden.call(y), l.remove.dimmerStyles(), l.restore.focus(), e()
							}
						})) : l.error(f.noTransition)) : l.verbose("Hide callback returned false cancelling hide")
					},
					showDimmer: function () {
						o.dimmer("is animating") || !o.dimmer("is active") ? (l.debug("Showing dimmer"), o.dimmer("show")) : l.debug("Dimmer already visible")
					},
					hideDimmer: function () {
						o.dimmer("is animating") || o.dimmer("is active") ? (l.unbind.scrollLock(), o.dimmer("hide", function () {
							l.remove.clickaway(), l.remove.screenHeight()
						})) : l.debug("Dimmer is not visible cannot hide")
					},
					hideAll: function (e) {
						var t = n.filter("." + d.active + ", ." + d.animating);
						e = j.isFunction(e) ? e : function () { }, 0 < t.length && (l.debug("Hiding all visible modals"), l.hideDimmer(), t.modal("hide modal", e))
					},
					hideOthers: function (e) {
						var t = i.filter("." + d.active + ", ." + d.animating);
						e = j.isFunction(e) ? e : function () { }, 0 < t.length && (l.debug("Hiding other modals", i), t.modal("hide modal", e, !0))
					},
					others: {
						active: function () {
							return 0 < i.filter("." + d.active).length
						},
						animating: function () {
							return 0 < i.filter("." + d.animating).length
						}
					},
					add: {
						keyboardShortcuts: function () {
							l.verbose("Adding keyboard shortcuts"), T.on("keyup" + h, l.event.keyboard)
						}
					},
					save: {
						focus: function () {
							0 < j(L.activeElement).closest(m).length || (e = j(L.activeElement).blur())
						}
					},
					restore: {
						focus: function () {
							e && 0 < e.length && e.focus()
						}
					},
					remove: {
						active: function () {
							m.removeClass(d.active)
						},
						legacy: function () {
							m.removeClass(d.legacy)
						},
						clickaway: function () {
							s.off("click" + t)
						},
						dimmerStyles: function () {
							s.removeClass(d.inverted), o.removeClass(d.blurring)
						},
						bodyStyle: function () {
							"" === A.attr("style") && (l.verbose("Removing style attribute"), A.removeAttr("style"))
						},
						screenHeight: function () {
							l.debug("Removing page height"), A.css("height", "")
						},
						keyboardShortcuts: function () {
							l.verbose("Removing keyboard shortcuts"), T.off("keyup" + h)
						},
						scrolling: function () {
							o.removeClass(d.scrolling), m.removeClass(d.scrolling)
						}
					},
					cacheSizes: function () {
						m.addClass(d.loading);
						var e = m.prop("scrollHeight"),
							t = m.outerWidth(),
							n = m.outerHeight();
						l.cache !== q && 0 === n || (l.cache = {
							pageHeight: j(L).outerHeight(),
							width: t,
							height: n + c.offset,
							scrollHeight: e + c.offset,
							contextHeight: "body" == c.context ? j(F).height() : o.height()
						}, l.cache.topOffset = -l.cache.height / 2), m.removeClass(d.loading), l.debug("Caching modal and container sizes", l.cache)
					},
					can: {
						useFlex: function () {
							return "auto" == c.useFlex ? c.detachable && !l.is.ie() : c.useFlex
						},
						fit: function () {
							var e = l.cache.contextHeight,
								t = l.cache.contextHeight / 2,
								n = l.cache.topOffset,
								i = l.cache.scrollHeight,
								o = l.cache.height,
								s = c.padding;
							return o < i ? t + n + i + s < e : o + 2 * s < e
						}
					},
					is: {
						active: function () {
							return m.hasClass(d.active)
						},
						ie: function () {
							return !F.ActiveXObject && "ActiveXObject" in F || "ActiveXObject" in F
						},
						animating: function () {
							return m.transition("is supported") ? m.transition("is animating") : m.is(":visible")
						},
						scrolling: function () {
							return o.hasClass(d.scrolling)
						},
						modernBrowser: function () {
							return !(F.ActiveXObject || "ActiveXObject" in F)
						}
					},
					set: {
						autofocus: function () {
							var e = m.find("[tabindex], :input").filter(":visible"),
								t = e.filter("[autofocus]"),
								n = 0 < t.length ? t.first() : e.first();
							0 < n.length && n.focus()
						},
						clickaway: function () {
							s.on("click" + t, l.event.click)
						},
						dimmerSettings: function () {
							if (j.fn.dimmer !== q) {
								var e = {
									debug: c.debug,
									dimmerName: "modals",
									closable: "auto",
									useFlex: l.can.useFlex(),
									variation: !c.centered && "top aligned",
									duration: {
										show: c.duration,
										hide: c.duration
									}
								},
									t = j.extend(!0, e, c.dimmerSettings);
								c.inverted && (t.variation = t.variation !== q ? t.variation + " inverted" : "inverted"), v.dimmer("setting", t)
							} else l.error(f.dimmer)
						},
						dimmerStyles: function () {
							c.inverted ? s.addClass(d.inverted) : s.removeClass(d.inverted), c.blurring ? o.addClass(d.blurring) : o.removeClass(d.blurring)
						},
						modalOffset: function () {
							var e = l.cache.width,
								t = l.cache.height;
							m.css({
								marginTop: c.centered && l.can.fit() ? -t / 2 : 0,
								marginLeft: -e / 2
							}), l.verbose("Setting modal offset for legacy mode")
						},
						screenHeight: function () {
							l.can.fit() ? A.css("height", "") : (l.debug("Modal is taller than page content, resizing page height"), A.css("height", l.cache.height + 2 * c.padding))
						},
						active: function () {
							m.addClass(d.active)
						},
						scrolling: function () {
							o.addClass(d.scrolling), m.addClass(d.scrolling), l.unbind.scrollLock()
						},
						legacy: function () {
							m.addClass(d.legacy)
						},
						type: function () {
							l.can.fit() ? (l.verbose("Modal fits on screen"), l.others.active() || l.others.animating() || (l.remove.scrolling(), l.bind.scrollLock())) : (l.verbose("Modal cannot fit on screen setting to scrolling"), l.set.scrolling())
						},
						undetached: function () {
							o.addClass(d.undetached)
						}
					},
					setting: function (e, t) {
						if (l.debug("Changing setting", e, t), j.isPlainObject(e)) j.extend(!0, c, e);
						else {
							if (t === q) return c[e];
							j.isPlainObject(c[e]) ? j.extend(!0, c[e], t) : c[e] = t
						}
					},
					internal: function (e, t) {
						if (j.isPlainObject(e)) j.extend(!0, l, e);
						else {
							if (t === q) return l[e];
							l[e] = t
						}
					},
					debug: function () {
						!c.silent && c.debug && (c.performance ? l.performance.log(arguments) : (l.debug = Function.prototype.bind.call(console.info, console, c.name + ":"), l.debug.apply(console, arguments)))
					},
					verbose: function () {
						!c.silent && c.verbose && c.debug && (c.performance ? l.performance.log(arguments) : (l.verbose = Function.prototype.bind.call(console.info, console, c.name + ":"), l.verbose.apply(console, arguments)))
					},
					error: function () {
						c.silent || (l.error = Function.prototype.bind.call(console.error, console, c.name + ":"), l.error.apply(console, arguments))
					},
					performance: {
						log: function (e) {
							var t, n;
							c.performance && (n = (t = (new Date).getTime()) - (P || t), P = t, D.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: y,
								"Execution Time": n
							})), clearTimeout(l.performance.timer), l.performance.timer = setTimeout(l.performance.display, 500)
						},
						display: function () {
							var e = c.name + ":",
								n = 0;
							P = !1, clearTimeout(l.performance.timer), j.each(D, function (e, t) {
								n += t["Execution Time"]
							}), e += " " + n + "ms", E && (e += " '" + E + "'"), (console.group !== q || console.table !== q) && 0 < D.length && (console.groupCollapsed(e), console.table ? console.table(D) : j.each(D, function (e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), D = []
						}
					},
					invoke: function (i, e, t) {
						var o, s, n, r = w;
						return e = e || R, t = y || t, "string" == typeof i && r !== q && (i = i.split(/[\. ]/), o = i.length - 1, j.each(i, function (e, t) {
							var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
							if (j.isPlainObject(r[n]) && e != o) r = r[n];
							else {
								if (r[n] !== q) return s = r[n], !1;
								if (!j.isPlainObject(r[t]) || e == o) return r[t] !== q && (s = r[t]), !1;
								r = r[t]
							}
						})), j.isFunction(s) ? n = s.apply(t, e) : s !== q && (n = s), j.isArray(k) ? k.push(n) : k !== q ? k = [k, n] : n !== q && (k = n), s
					}
				}, $ ? (w === q && l.initialize(), l.invoke(O)) : (w !== q && w.invoke("destroy"), l.initialize())
			}), k !== q ? k : this
		}, j.fn.modal.settings = {
			name: "Modal",
			namespace: "modal",
			useFlex: "auto",
			offset: 0,
			silent: !1,
			debug: !1,
			verbose: !1,
			performance: !0,
			observeChanges: !1,
			allowMultiple: !1,
			detachable: !0,
			closable: !0,
			autofocus: !0,
			inverted: !1,
			blurring: !1,
			centered: !0,
			dimmerSettings: {
				closable: !1,
				useCSS: !0
			},
			keyboardShortcuts: !0,
			context: "body",
			queue: !1,
			duration: 500,
			transition: "scale",
			padding: 50,
			onShow: function () { },
			onVisible: function () { },
			onHide: function () {
				return !0
			},
			onHidden: function () { },
			onApprove: function () {
				return !0
			},
			onDeny: function () {
				return !0
			},
			selector: {
				close: "> .close",
				approve: ".actions .positive, .actions .approve, .actions .ok",
				deny: ".actions .negative, .actions .deny, .actions .cancel",
				modal: ".ui.modal"
			},
			error: {
				dimmer: "UI Dimmer, a required component is not included in this page",
				method: "The method you called is not defined.",
				notFound: "The element you specified could not be found"
			},
			className: {
				active: "active",
				animating: "animating",
				blurring: "blurring",
				inverted: "inverted",
				legacy: "legacy",
				loading: "loading",
				scrolling: "scrolling",
				undetached: "undetached"
			}
		}
	}(jQuery, window, document),
	function (y, w, e, x) {
		"use strict";
		w = void 0 !== w && w.Math == Math ? w : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), y.fn.nag = function (d) {
			var p, e = y(this),
				f = e.selector || "",
				h = (new Date).getTime(),
				g = [],
				m = d,
				v = "string" == typeof m,
				b = [].slice.call(arguments, 1);
			return e.each(function () {
				var a, i = y.isPlainObject(d) ? y.extend(!0, {}, y.fn.nag.settings, d) : y.extend({}, y.fn.nag.settings),
					e = (i.className, i.selector),
					l = i.error,
					t = i.namespace,
					n = "." + t,
					o = t + "-module",
					s = y(this),
					r = (s.find(e.close), i.context ? y(i.context) : y("body")),
					c = this,
					u = s.data(o);
				w.requestAnimationFrame || w.mozRequestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame, a = {
					initialize: function () {
						a.verbose("Initializing element"), s.on("click" + n, e.close, a.dismiss).data(o, a), i.detachable && s.parent()[0] !== r[0] && s.detach().prependTo(r), 0 < i.displayTime && setTimeout(a.hide, i.displayTime), a.show()
					},
					destroy: function () {
						a.verbose("Destroying instance"), s.removeData(o).off(n)
					},
					show: function () {
						a.should.show() && !s.is(":visible") && (a.debug("Showing nag", i.animation.show), "fade" == i.animation.show ? s.fadeIn(i.duration, i.easing) : s.slideDown(i.duration, i.easing))
					},
					hide: function () {
						a.debug("Showing nag", i.animation.hide), "fade" == i.animation.show ? s.fadeIn(i.duration, i.easing) : s.slideUp(i.duration, i.easing)
					},
					onHide: function () {
						a.debug("Removing nag", i.animation.hide), s.remove(), i.onHide && i.onHide()
					},
					dismiss: function (e) {
						i.storageMethod && a.storage.set(i.key, i.value), a.hide(), e.stopImmediatePropagation(), e.preventDefault()
					},
					should: {
						show: function () {
							return i.persist ? (a.debug("Persistent nag is set, can show nag"), !0) : a.storage.get(i.key) != i.value.toString() ? (a.debug("Stored value is not set, can show nag", a.storage.get(i.key)), !0) : (a.debug("Stored value is set, cannot show nag", a.storage.get(i.key)), !1)
						}
					},
					get: {
						storageOptions: function () {
							var e = {};
							return i.expires && (e.expires = i.expires), i.domain && (e.domain = i.domain), i.path && (e.path = i.path), e
						}
					},
					clear: function () {
						a.storage.remove(i.key)
					},
					storage: {
						set: function (e, t) {
							var n = a.get.storageOptions();
							if ("localstorage" == i.storageMethod && w.localStorage !== x) w.localStorage.setItem(e, t), a.debug("Value stored using local storage", e, t);
							else if ("sessionstorage" == i.storageMethod && w.sessionStorage !== x) w.sessionStorage.setItem(e, t), a.debug("Value stored using session storage", e, t);
							else {
								if (y.cookie === x) return void a.error(l.noCookieStorage);
								y.cookie(e, t, n), a.debug("Value stored using cookie", e, t, n)
							}
						},
						get: function (e, t) {
							var n;
							return "localstorage" == i.storageMethod && w.localStorage !== x ? n = w.localStorage.getItem(e) : "sessionstorage" == i.storageMethod && w.sessionStorage !== x ? n = w.sessionStorage.getItem(e) : y.cookie !== x ? n = y.cookie(e) : a.error(l.noCookieStorage), "undefined" != n && "null" != n && n !== x && null !== n || (n = x), n
						},
						remove: function (e) {
							var t = a.get.storageOptions();
							"localstorage" == i.storageMethod && w.localStorage !== x ? w.localStorage.removeItem(e) : "sessionstorage" == i.storageMethod && w.sessionStorage !== x ? w.sessionStorage.removeItem(e) : y.cookie !== x ? y.removeCookie(e, t) : a.error(l.noStorage)
						}
					},
					setting: function (e, t) {
						if (a.debug("Changing setting", e, t), y.isPlainObject(e)) y.extend(!0, i, e);
						else {
							if (t === x) return i[e];
							y.isPlainObject(i[e]) ? y.extend(!0, i[e], t) : i[e] = t
						}
					},
					internal: function (e, t) {
						if (y.isPlainObject(e)) y.extend(!0, a, e);
						else {
							if (t === x) return a[e];
							a[e] = t
						}
					},
					debug: function () {
						!i.silent && i.debug && (i.performance ? a.performance.log(arguments) : (a.debug = Function.prototype.bind.call(console.info, console, i.name + ":"), a.debug.apply(console, arguments)))
					},
					verbose: function () {
						!i.silent && i.verbose && i.debug && (i.performance ? a.performance.log(arguments) : (a.verbose = Function.prototype.bind.call(console.info, console, i.name + ":"), a.verbose.apply(console, arguments)))
					},
					error: function () {
						i.silent || (a.error = Function.prototype.bind.call(console.error, console, i.name + ":"), a.error.apply(console, arguments))
					},
					performance: {
						log: function (e) {
							var t, n;
							i.performance && (n = (t = (new Date).getTime()) - (h || t), h = t, g.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: c,
								"Execution Time": n
							})), clearTimeout(a.performance.timer), a.performance.timer = setTimeout(a.performance.display, 500)
						},
						display: function () {
							var e = i.name + ":",
								n = 0;
							h = !1, clearTimeout(a.performance.timer), y.each(g, function (e, t) {
								n += t["Execution Time"]
							}), e += " " + n + "ms", f && (e += " '" + f + "'"), (console.group !== x || console.table !== x) && 0 < g.length && (console.groupCollapsed(e), console.table ? console.table(g) : y.each(g, function (e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), g = []
						}
					},
					invoke: function (i, e, t) {
						var o, s, n, r = u;
						return e = e || b, t = c || t, "string" == typeof i && r !== x && (i = i.split(/[\. ]/), o = i.length - 1, y.each(i, function (e, t) {
							var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
							if (y.isPlainObject(r[n]) && e != o) r = r[n];
							else {
								if (r[n] !== x) return s = r[n], !1;
								if (!y.isPlainObject(r[t]) || e == o) return r[t] !== x ? s = r[t] : a.error(l.method, i), !1;
								r = r[t]
							}
						})), y.isFunction(s) ? n = s.apply(t, e) : s !== x && (n = s), y.isArray(p) ? p.push(n) : p !== x ? p = [p, n] : n !== x && (p = n), s
					}
				}, v ? (u === x && a.initialize(), a.invoke(m)) : (u !== x && u.invoke("destroy"), a.initialize())
			}), p !== x ? p : this
		}, y.fn.nag.settings = {
			name: "Nag",
			silent: !1,
			debug: !1,
			verbose: !1,
			performance: !0,
			namespace: "Nag",
			persist: !1,
			displayTime: 0,
			animation: {
				show: "slide",
				hide: "slide"
			},
			context: !1,
			detachable: !1,
			expires: 30,
			domain: !1,
			path: "/",
			storageMethod: "cookie",
			key: "nag",
			value: "dismiss",
			error: {
				noCookieStorage: "$.cookie is not included. A storage solution is required.",
				noStorage: "Neither $.cookie or store is defined. A storage solution is required for storing state",
				method: "The method you called is not defined."
			},
			className: {
				bottom: "bottom",
				fixed: "fixed"
			},
			selector: {
				close: ".close.icon"
			},
			speed: 500,
			easing: "easeOutQuad",
			onHide: function () { }
		}, y.extend(y.easing, {
			easeOutQuad: function (e, t, n, i, o) {
				return -i * (t /= o) * (t - 2) + n
			}
		})
	}(jQuery, window, document),
	function (F, L, q, z) {
		"use strict";
		L = void 0 !== L && L.Math == Math ? L : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), F.fn.popup = function (S) {
			var T, e = F(this),
				A = F(q),
				E = F(L),
				P = F("body"),
				D = e.selector || "",
				O = (new Date).getTime(),
				$ = [],
				R = S,
				_ = "string" == typeof R,
				j = [].slice.call(arguments, 1);
			return e.each(function () {
				var u, c, e, t, n, d, p = F.isPlainObject(S) ? F.extend(!0, {}, F.fn.popup.settings, S) : F.extend({}, F.fn.popup.settings),
					o = p.selector,
					f = p.className,
					h = p.error,
					g = p.metadata,
					i = p.namespace,
					s = "." + p.namespace,
					r = "module-" + i,
					m = F(this),
					a = F(p.context),
					l = F(p.scrollContext),
					v = F(p.boundary),
					b = p.target ? F(p.target) : m,
					y = 0,
					w = !1,
					x = !1,
					C = this,
					k = m.data(r);
				d = {
					initialize: function () {
						d.debug("Initializing", m), d.createID(), d.bind.events(), !d.exists() && p.preserve && d.create(), p.observeChanges && d.observeChanges(), d.instantiate()
					},
					instantiate: function () {
						d.verbose("Storing instance", d), k = d, m.data(r, k)
					},
					observeChanges: function () {
						"MutationObserver" in L && ((e = new MutationObserver(d.event.documentChanged)).observe(q, {
							childList: !0,
							subtree: !0
						}), d.debug("Setting up mutation observer", e))
					},
					refresh: function () {
						p.popup ? u = F(p.popup).eq(0) : p.inline && (u = b.nextAll(o.popup).eq(0), p.popup = u), p.popup ? (u.addClass(f.loading), c = d.get.offsetParent(), u.removeClass(f.loading), p.movePopup && d.has.popup() && d.get.offsetParent(u)[0] !== c[0] && (d.debug("Moving popup to the same offset parent as target"), u.detach().appendTo(c))) : c = p.inline ? d.get.offsetParent(b) : d.has.popup() ? d.get.offsetParent(u) : P, c.is("html") && c[0] !== P[0] && (d.debug("Setting page as offset parent"), c = P), d.get.variation() && d.set.variation()
					},
					reposition: function () {
						d.refresh(), d.set.position()
					},
					destroy: function () {
						d.debug("Destroying previous module"), e && e.disconnect(), u && !p.preserve && d.removePopup(), clearTimeout(d.hideTimer), clearTimeout(d.showTimer), d.unbind.close(), d.unbind.events(), m.removeData(r)
					},
					event: {
						start: function (e) {
							var t = F.isPlainObject(p.delay) ? p.delay.show : p.delay;
							clearTimeout(d.hideTimer), x || (d.showTimer = setTimeout(d.show, t))
						},
						end: function () {
							var e = F.isPlainObject(p.delay) ? p.delay.hide : p.delay;
							clearTimeout(d.showTimer), d.hideTimer = setTimeout(d.hide, e)
						},
						touchstart: function (e) {
							x = !0, d.show()
						},
						resize: function () {
							d.is.visible() && d.set.position()
						},
						documentChanged: function (e) {
							[].forEach.call(e, function (e) {
								e.removedNodes && [].forEach.call(e.removedNodes, function (e) {
									(e == C || 0 < F(e).find(C).length) && (d.debug("Element removed from DOM, tearing down events"), d.destroy())
								})
							})
						},
						hideGracefully: function (e) {
							var t = F(e.target),
								n = F.contains(q.documentElement, e.target),
								i = 0 < t.closest(o.popup).length;
							e && !i && n ? (d.debug("Click occurred outside popup hiding popup"), d.hide()) : d.debug("Click was inside popup, keeping popup open")
						}
					},
					create: function () {
						var e = d.get.html(),
							t = d.get.title(),
							n = d.get.content();
						e || n || t ? (d.debug("Creating pop-up html"), e || (e = p.templates.popup({
							title: t,
							content: n
						})), u = F("<div/>").addClass(f.popup).data(g.activator, m).html(e), p.inline ? (d.verbose("Inserting popup element inline", u), u.insertAfter(m)) : (d.verbose("Appending popup element to body", u), u.appendTo(a)), d.refresh(), d.set.variation(), p.hoverable && d.bind.popup(), p.onCreate.call(u, C)) : 0 !== b.next(o.popup).length ? (d.verbose("Pre-existing popup found"), p.inline = !0, p.popup = b.next(o.popup).data(g.activator, m), d.refresh(), p.hoverable && d.bind.popup()) : p.popup ? (F(p.popup).data(g.activator, m), d.verbose("Used popup specified in settings"), d.refresh(), p.hoverable && d.bind.popup()) : d.debug("No content specified skipping display", C)
					},
					createID: function () {
						n = (Math.random().toString(16) + "000000000").substr(2, 8), t = "." + n, d.verbose("Creating unique id for element", n)
					},
					toggle: function () {
						d.debug("Toggling pop-up"), d.is.hidden() ? (d.debug("Popup is hidden, showing pop-up"), d.unbind.close(), d.show()) : (d.debug("Popup is visible, hiding pop-up"), d.hide())
					},
					show: function (e) {
						if (e = e || function () { }, d.debug("Showing pop-up", p.transition), d.is.hidden() && (!d.is.active() || !d.is.dropdown())) {
							if (d.exists() || d.create(), !1 === p.onShow.call(u, C)) return void d.debug("onShow callback returned false, cancelling popup animation");
							p.preserve || p.popup || d.refresh(), u && d.set.position() && (d.save.conditions(), p.exclusive && d.hideAll(), d.animate.show(e))
						}
					},
					hide: function (e) {
						if (e = e || function () { }, d.is.visible() || d.is.animating()) {
							if (!1 === p.onHide.call(u, C)) return void d.debug("onHide callback returned false, cancelling popup animation");
							d.remove.visible(), d.unbind.close(), d.restore.conditions(), d.animate.hide(e)
						}
					},
					hideAll: function () {
						F(o.popup).filter("." + f.popupVisible).each(function () {
							F(this).data(g.activator).popup("hide")
						})
					},
					exists: function () {
						return !!u && (p.inline || p.popup ? d.has.popup() : 1 <= u.closest(a).length)
					},
					removePopup: function () {
						d.has.popup() && !p.popup && (d.debug("Removing popup", u), u.remove(), u = z, p.onRemove.call(u, C))
					},
					save: {
						conditions: function () {
							d.cache = {
								title: m.attr("title")
							}, d.cache.title && m.removeAttr("title"), d.verbose("Saving original attributes", d.cache.title)
						}
					},
					restore: {
						conditions: function () {
							return d.cache && d.cache.title && (m.attr("title", d.cache.title), d.verbose("Restoring original attributes", d.cache.title)), !0
						}
					},
					supports: {
						svg: function () {
							return "undefined" == typeof SVGGraphicsElement
						}
					},
					animate: {
						show: function (e) {
							e = F.isFunction(e) ? e : function () { }, p.transition && F.fn.transition !== z && m.transition("is supported") ? (d.set.visible(), u.transition({
								animation: p.transition + " in",
								queue: !1,
								debug: p.debug,
								verbose: p.verbose,
								duration: p.duration,
								onComplete: function () {
									d.bind.close(), e.call(u, C), p.onVisible.call(u, C)
								}
							})) : d.error(h.noTransition)
						},
						hide: function (e) {
							e = F.isFunction(e) ? e : function () { }, d.debug("Hiding pop-up"), !1 !== p.onHide.call(u, C) ? p.transition && F.fn.transition !== z && m.transition("is supported") ? u.transition({
								animation: p.transition + " out",
								queue: !1,
								duration: p.duration,
								debug: p.debug,
								verbose: p.verbose,
								onComplete: function () {
									d.reset(), e.call(u, C), p.onHidden.call(u, C)
								}
							}) : d.error(h.noTransition) : d.debug("onHide callback returned false, cancelling popup animation")
						}
					},
					change: {
						content: function (e) {
							u.html(e)
						}
					},
					get: {
						html: function () {
							return m.removeData(g.html), m.data(g.html) || p.html
						},
						title: function () {
							return m.removeData(g.title), m.data(g.title) || p.title
						},
						content: function () {
							return m.removeData(g.content), m.data(g.content) || p.content || m.attr("title")
						},
						variation: function () {
							return m.removeData(g.variation), m.data(g.variation) || p.variation
						},
						popup: function () {
							return u
						},
						popupOffset: function () {
							return u.offset()
						},
						calculations: function () {
							var e, t = d.get.offsetParent(u),
								n = b[0],
								i = v[0] == L,
								o = p.inline || p.popup && p.movePopup ? b.position() : b.offset(),
								s = i ? {
									top: 0,
									left: 0
								} : v.offset(),
								r = {},
								a = i ? {
									top: E.scrollTop(),
									left: E.scrollLeft()
								} : {
										top: 0,
										left: 0
									};
							if (r = {
								target: {
									element: b[0],
									width: b.outerWidth(),
									height: b.outerHeight(),
									top: o.top,
									left: o.left,
									margin: {}
								},
								popup: {
									width: u.outerWidth(),
									height: u.outerHeight()
								},
								parent: {
									width: c.outerWidth(),
									height: c.outerHeight()
								},
								screen: {
									top: s.top,
									left: s.left,
									scroll: {
										top: a.top,
										left: a.left
									},
									width: v.width(),
									height: v.height()
								}
							}, t.get(0) !== c.get(0)) {
								var l = t.offset();
								r.target.top -= l.top, r.target.left -= l.left, r.parent.width = t.outerWidth(), r.parent.height = t.outerHeight()
							}
							return p.setFluidWidth && d.is.fluid() && (r.container = {
								width: u.parent().outerWidth()
							}, r.popup.width = r.container.width), r.target.margin.top = p.inline ? parseInt(L.getComputedStyle(n).getPropertyValue("margin-top"), 10) : 0, r.target.margin.left = p.inline ? d.is.rtl() ? parseInt(L.getComputedStyle(n).getPropertyValue("margin-right"), 10) : parseInt(L.getComputedStyle(n).getPropertyValue("margin-left"), 10) : 0, e = r.screen, r.boundary = {
								top: e.top + e.scroll.top,
								bottom: e.top + e.scroll.top + e.height,
								left: e.left + e.scroll.left,
								right: e.left + e.scroll.left + e.width
							}, r
						},
						id: function () {
							return n
						},
						startEvent: function () {
							return "hover" == p.on ? "mouseenter" : "focus" == p.on && "focus"
						},
						scrollEvent: function () {
							return "scroll"
						},
						endEvent: function () {
							return "hover" == p.on ? "mouseleave" : "focus" == p.on && "blur"
						},
						distanceFromBoundary: function (e, t) {
							var n, i, o = {};
							return n = (t = t || d.get.calculations()).popup, i = t.boundary, e && (o = {
								top: e.top - i.top,
								left: e.left - i.left,
								right: i.right - (e.left + n.width),
								bottom: i.bottom - (e.top + n.height)
							}, d.verbose("Distance from boundaries determined", e, o)), o
						},
						offsetParent: function (e) {
							var t = (e !== z ? e[0] : b[0]).parentNode,
								n = F(t);
							if (t)
								for (var i = "none" === n.css("transform"), o = "static" === n.css("position"), s = n.is("body"); t && !s && o && i;) t = t.parentNode, i = "none" === (n = F(t)).css("transform"), o = "static" === n.css("position"), s = n.is("body");
							return n && 0 < n.length ? n : F()
						},
						positions: function () {
							return {
								"top left": !1,
								"top center": !1,
								"top right": !1,
								"bottom left": !1,
								"bottom center": !1,
								"bottom right": !1,
								"left center": !1,
								"right center": !1
							}
						},
						nextPosition: function (e) {
							var t = e.split(" "),
								n = t[0],
								i = t[1],
								o = "top" == n || "bottom" == n,
								s = !1,
								r = !1,
								a = !1;
							return w || (d.verbose("All available positions available"), w = d.get.positions()), d.debug("Recording last position tried", e), w[e] = !0, "opposite" === p.prefer && (a = (a = [{
								top: "bottom",
								bottom: "top",
								left: "right",
								right: "left"
							}[n], i]).join(" "), s = !0 === w[a], d.debug("Trying opposite strategy", a)), "adjacent" === p.prefer && o && (a = (a = [n, {
								left: "center",
								center: "right",
								right: "left"
							}[i]]).join(" "), r = !0 === w[a], d.debug("Trying adjacent strategy", a)), (r || s) && (d.debug("Using backup position", a), a = {
								"top left": "top center",
								"top center": "top right",
								"top right": "right center",
								"right center": "bottom right",
								"bottom right": "bottom center",
								"bottom center": "bottom left",
								"bottom left": "left center",
								"left center": "top left"
							}[e]), a
						}
					},
					set: {
						position: function (e, t) {
							if (0 !== b.length && 0 !== u.length) {
								var n, i, o, s, r, a, l, c;
								if (t = t || d.get.calculations(), e = e || m.data(g.position) || p.position, n = m.data(g.offset) || p.offset, i = p.distanceAway, o = t.target, s = t.popup, r = t.parent, d.should.centerArrow(t) && (d.verbose("Adjusting offset to center arrow on small target element"), "top left" != e && "bottom left" != e || (n += o.width / 2, n -= p.arrowPixelsFromEdge), "top right" != e && "bottom right" != e || (n -= o.width / 2, n += p.arrowPixelsFromEdge)), 0 === o.width && 0 === o.height && !d.is.svg(o.element)) return d.debug("Popup target is hidden, no action taken"), !1;
								switch (p.inline && (d.debug("Adding margin to calculation", o.margin), "left center" == e || "right center" == e ? (n += o.margin.top, i += -o.margin.left) : "top left" == e || "top center" == e || "top right" == e ? (n += o.margin.left, i -= o.margin.top) : (n += o.margin.left, i += o.margin.top)), d.debug("Determining popup position from calculations", e, t), d.is.rtl() && (e = e.replace(/left|right/g, function (e) {
									return "left" == e ? "right" : "left"
								}), d.debug("RTL: Popup position updated", e)), y == p.maxSearchDepth && "string" == typeof p.lastResort && (e = p.lastResort), e) {
									case "top left":
										a = {
											top: "auto",
											bottom: r.height - o.top + i,
											left: o.left + n,
											right: "auto"
										};
										break;
									case "top center":
										a = {
											bottom: r.height - o.top + i,
											left: o.left + o.width / 2 - s.width / 2 + n,
											top: "auto",
											right: "auto"
										};
										break;
									case "top right":
										a = {
											bottom: r.height - o.top + i,
											right: r.width - o.left - o.width - n,
											top: "auto",
											left: "auto"
										};
										break;
									case "left center":
										a = {
											top: o.top + o.height / 2 - s.height / 2 + n,
											right: r.width - o.left + i,
											left: "auto",
											bottom: "auto"
										};
										break;
									case "right center":
										a = {
											top: o.top + o.height / 2 - s.height / 2 + n,
											left: o.left + o.width + i,
											bottom: "auto",
											right: "auto"
										};
										break;
									case "bottom left":
										a = {
											top: o.top + o.height + i,
											left: o.left + n,
											bottom: "auto",
											right: "auto"
										};
										break;
									case "bottom center":
										a = {
											top: o.top + o.height + i,
											left: o.left + o.width / 2 - s.width / 2 + n,
											bottom: "auto",
											right: "auto"
										};
										break;
									case "bottom right":
										a = {
											top: o.top + o.height + i,
											right: r.width - o.left - o.width - n,
											left: "auto",
											bottom: "auto"
										}
								}
								if (a === z && d.error(h.invalidPosition, e), d.debug("Calculated popup positioning values", a), u.css(a).removeClass(f.position).addClass(e).addClass(f.loading), l = d.get.popupOffset(), c = d.get.distanceFromBoundary(l, t), d.is.offstage(c, e)) {
									if (d.debug("Position is outside viewport", e), y < p.maxSearchDepth) return y++ , e = d.get.nextPosition(e), d.debug("Trying new position", e), !!u && d.set.position(e, t);
									if (!p.lastResort) return d.debug("Popup could not find a position to display", u), d.error(h.cannotPlace, C), d.remove.attempts(), d.remove.loading(), d.reset(), p.onUnplaceable.call(u, C), !1;
									d.debug("No position found, showing with last position")
								}
								return d.debug("Position is on stage", e), d.remove.attempts(), d.remove.loading(), p.setFluidWidth && d.is.fluid() && d.set.fluidWidth(t), !0
							}
							d.error(h.notFound)
						},
						fluidWidth: function (e) {
							e = e || d.get.calculations(), d.debug("Automatically setting element width to parent width", e.parent.width), u.css("width", e.container.width)
						},
						variation: function (e) {
							(e = e || d.get.variation()) && d.has.popup() && (d.verbose("Adding variation to popup", e), u.addClass(e))
						},
						visible: function () {
							m.addClass(f.visible)
						}
					},
					remove: {
						loading: function () {
							u.removeClass(f.loading)
						},
						variation: function (e) {
							(e = e || d.get.variation()) && (d.verbose("Removing variation", e), u.removeClass(e))
						},
						visible: function () {
							m.removeClass(f.visible)
						},
						attempts: function () {
							d.verbose("Resetting all searched positions"), y = 0, w = !1
						}
					},
					bind: {
						events: function () {
							d.debug("Binding popup events to module"), "click" == p.on && m.on("click" + s, d.toggle), "hover" == p.on && m.on("touchstart" + s, d.event.touchstart), d.get.startEvent() && m.on(d.get.startEvent() + s, d.event.start).on(d.get.endEvent() + s, d.event.end), p.target && d.debug("Target set to element", b), E.on("resize" + t, d.event.resize)
						},
						popup: function () {
							d.verbose("Allowing hover events on popup to prevent closing"), u && d.has.popup() && u.on("mouseenter" + s, d.event.start).on("mouseleave" + s, d.event.end)
						},
						close: function () {
							(!0 === p.hideOnScroll || "auto" == p.hideOnScroll && "click" != p.on) && d.bind.closeOnScroll(), d.is.closable() ? d.bind.clickaway() : "hover" == p.on && x && d.bind.touchClose()
						},
						closeOnScroll: function () {
							d.verbose("Binding scroll close event to document"), l.one(d.get.scrollEvent() + t, d.event.hideGracefully)
						},
						touchClose: function () {
							d.verbose("Binding popup touchclose event to document"), A.on("touchstart" + t, function (e) {
								d.verbose("Touched away from popup"), d.event.hideGracefully.call(C, e)
							})
						},
						clickaway: function () {
							d.verbose("Binding popup close event to document"), A.on("click" + t, function (e) {
								d.verbose("Clicked away from popup"), d.event.hideGracefully.call(C, e)
							})
						}
					},
					unbind: {
						events: function () {
							E.off(t), m.off(s)
						},
						close: function () {
							A.off(t), l.off(t)
						}
					},
					has: {
						popup: function () {
							return u && 0 < u.length
						}
					},
					should: {
						centerArrow: function (e) {
							return !d.is.basic() && e.target.width <= 2 * p.arrowPixelsFromEdge
						}
					},
					is: {
						closable: function () {
							return "auto" == p.closable ? "hover" != p.on : p.closable
						},
						offstage: function (e, n) {
							var i = [];
							return F.each(e, function (e, t) {
								t < -p.jitter && (d.debug("Position exceeds allowable distance from edge", e, t, n), i.push(e))
							}), 0 < i.length
						},
						svg: function (e) {
							return d.supports.svg() && e instanceof SVGGraphicsElement
						},
						basic: function () {
							return m.hasClass(f.basic)
						},
						active: function () {
							return m.hasClass(f.active)
						},
						animating: function () {
							return u !== z && u.hasClass(f.animating)
						},
						fluid: function () {
							return u !== z && u.hasClass(f.fluid)
						},
						visible: function () {
							return u !== z && u.hasClass(f.popupVisible)
						},
						dropdown: function () {
							return m.hasClass(f.dropdown)
						},
						hidden: function () {
							return !d.is.visible()
						},
						rtl: function () {
							return "rtl" == m.css("direction")
						}
					},
					reset: function () {
						d.remove.visible(), p.preserve ? F.fn.transition !== z && u.transition("remove transition") : d.removePopup()
					},
					setting: function (e, t) {
						if (F.isPlainObject(e)) F.extend(!0, p, e);
						else {
							if (t === z) return p[e];
							p[e] = t
						}
					},
					internal: function (e, t) {
						if (F.isPlainObject(e)) F.extend(!0, d, e);
						else {
							if (t === z) return d[e];
							d[e] = t
						}
					},
					debug: function () {
						!p.silent && p.debug && (p.performance ? d.performance.log(arguments) : (d.debug = Function.prototype.bind.call(console.info, console, p.name + ":"), d.debug.apply(console, arguments)))
					},
					verbose: function () {
						!p.silent && p.verbose && p.debug && (p.performance ? d.performance.log(arguments) : (d.verbose = Function.prototype.bind.call(console.info, console, p.name + ":"), d.verbose.apply(console, arguments)))
					},
					error: function () {
						p.silent || (d.error = Function.prototype.bind.call(console.error, console, p.name + ":"), d.error.apply(console, arguments))
					},
					performance: {
						log: function (e) {
							var t, n;
							p.performance && (n = (t = (new Date).getTime()) - (O || t), O = t, $.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: C,
								"Execution Time": n
							})), clearTimeout(d.performance.timer), d.performance.timer = setTimeout(d.performance.display, 500)
						},
						display: function () {
							var e = p.name + ":",
								n = 0;
							O = !1, clearTimeout(d.performance.timer), F.each($, function (e, t) {
								n += t["Execution Time"]
							}), e += " " + n + "ms", D && (e += " '" + D + "'"), (console.group !== z || console.table !== z) && 0 < $.length && (console.groupCollapsed(e), console.table ? console.table($) : F.each($, function (e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), $ = []
						}
					},
					invoke: function (i, e, t) {
						var o, s, n, r = k;
						return e = e || j, t = C || t, "string" == typeof i && r !== z && (i = i.split(/[\. ]/), o = i.length - 1, F.each(i, function (e, t) {
							var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
							if (F.isPlainObject(r[n]) && e != o) r = r[n];
							else {
								if (r[n] !== z) return s = r[n], !1;
								if (!F.isPlainObject(r[t]) || e == o) return r[t] !== z && (s = r[t]), !1;
								r = r[t]
							}
						})), F.isFunction(s) ? n = s.apply(t, e) : s !== z && (n = s), F.isArray(T) ? T.push(n) : T !== z ? T = [T, n] : n !== z && (T = n), s
					}
				}, _ ? (k === z && d.initialize(), d.invoke(R)) : (k !== z && k.invoke("destroy"), d.initialize())
			}), T !== z ? T : this
		}, F.fn.popup.settings = {
			name: "Popup",
			silent: !1,
			debug: !1,
			verbose: !1,
			performance: !0,
			namespace: "popup",
			observeChanges: !0,
			onCreate: function () { },
			onRemove: function () { },
			onShow: function () { },
			onVisible: function () { },
			onHide: function () { },
			onUnplaceable: function () { },
			onHidden: function () { },
			on: "hover",
			boundary: L,
			addTouchEvents: !0,
			position: "top left",
			variation: "",
			movePopup: !0,
			target: !1,
			popup: !1,
			inline: !1,
			preserve: !1,
			hoverable: !1,
			content: !1,
			html: !1,
			title: !1,
			closable: !0,
			hideOnScroll: "auto",
			exclusive: !1,
			context: "body",
			scrollContext: L,
			prefer: "opposite",
			lastResort: !1,
			arrowPixelsFromEdge: 20,
			delay: {
				show: 50,
				hide: 70
			},
			setFluidWidth: !0,
			duration: 200,
			transition: "scale",
			distanceAway: 0,
			jitter: 2,
			offset: 0,
			maxSearchDepth: 15,
			error: {
				invalidPosition: "The position you specified is not a valid position",
				cannotPlace: "Popup does not fit within the boundaries of the viewport",
				method: "The method you called is not defined.",
				noTransition: "This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>",
				notFound: "The target or popup you specified does not exist on the page"
			},
			metadata: {
				activator: "activator",
				content: "content",
				html: "html",
				offset: "offset",
				position: "position",
				title: "title",
				variation: "variation"
			},
			className: {
				active: "active",
				basic: "basic",
				animating: "animating",
				dropdown: "dropdown",
				fluid: "fluid",
				loading: "loading",
				popup: "ui popup",
				position: "top left center bottom right",
				visible: "visible",
				popupVisible: "visible"
			},
			selector: {
				popup: ".ui.popup"
			},
			templates: {
				escape: function (e) {
					var t = {
						"&": "&amp;",
						"<": "&lt;",
						">": "&gt;",
						'"': "&quot;",
						"'": "&#x27;",
						"`": "&#x60;"
					};
					return /[&<>"'`]/.test(e) ? e.replace(/[&<>"'`]/g, function (e) {
						return t[e]
					}) : e
				},
				popup: function (e) {
					var t = "",
						n = F.fn.popup.settings.templates.escape;
					return typeof e !== z && (typeof e.title !== z && e.title && (e.title = n(e.title), t += '<div class="header">' + e.title + "</div>"), typeof e.content !== z && e.content && (e.content = n(e.content), t += '<div class="content">' + e.content + "</div>")), t
				}
			}
		}
	}(jQuery, window, document),
	function (S, e, T, A) {
		"use strict";
		void 0 !== (e = void 0 !== e && e.Math == Math ? e : "undefined" != typeof self && self.Math == Math ? self : Function("return this")()) && e.Math == Math || ("undefined" != typeof self && self.Math == Math ? self : Function("return this")()), S.fn.progress = function (m) {
			var v, e = S(this),
				b = e.selector || "",
				y = (new Date).getTime(),
				w = [],
				x = m,
				C = "string" == typeof x,
				k = [].slice.call(arguments, 1);
			return e.each(function () {
				var a, i = S.isPlainObject(m) ? S.extend(!0, {}, S.fn.progress.settings, m) : S.extend({}, S.fn.progress.settings),
					t = i.className,
					n = i.metadata,
					e = i.namespace,
					o = i.selector,
					l = i.error,
					s = "." + e,
					r = "module-" + e,
					c = S(this),
					u = S(this).find(o.bar),
					d = S(this).find(o.progress),
					p = S(this).find(o.label),
					f = this,
					h = c.data(r),
					g = !1;
				a = {
					initialize: function () {
						a.debug("Initializing progress bar", i), a.set.duration(), a.set.transitionEvent(), a.read.metadata(), a.read.settings(), a.instantiate()
					},
					instantiate: function () {
						a.verbose("Storing instance of progress", a), h = a, c.data(r, a)
					},
					destroy: function () {
						a.verbose("Destroying previous progress for", c), clearInterval(h.interval), a.remove.state(), c.removeData(r), h = A
					},
					reset: function () {
						a.remove.nextValue(), a.update.progress(0)
					},
					complete: function () {
						(a.percent === A || a.percent < 100) && (a.remove.progressPoll(), a.set.percent(100))
					},
					read: {
						metadata: function () {
							var e = {
								percent: c.data(n.percent),
								total: c.data(n.total),
								value: c.data(n.value)
							};
							e.percent && (a.debug("Current percent value set from metadata", e.percent), a.set.percent(e.percent)), e.total && (a.debug("Total value set from metadata", e.total), a.set.total(e.total)), e.value && (a.debug("Current value set from metadata", e.value), a.set.value(e.value), a.set.progress(e.value))
						},
						settings: function () {
							!1 !== i.total && (a.debug("Current total set in settings", i.total), a.set.total(i.total)), !1 !== i.value && (a.debug("Current value set in settings", i.value), a.set.value(i.value), a.set.progress(a.value)), !1 !== i.percent && (a.debug("Current percent set in settings", i.percent), a.set.percent(i.percent))
						}
					},
					bind: {
						transitionEnd: function (t) {
							var e = a.get.transitionEnd();
							u.one(e + s, function (e) {
								clearTimeout(a.failSafeTimer), t.call(this, e)
							}), a.failSafeTimer = setTimeout(function () {
								u.triggerHandler(e)
							}, i.duration + i.failSafeDelay), a.verbose("Adding fail safe timer", a.timer)
						}
					},
					increment: function (e) {
						var t, n;
						a.has.total() ? n = (t = a.get.value()) + (e = e || 1) : (n = (t = a.get.percent()) + (e = e || a.get.randomValue()), a.debug("Incrementing percentage by", t, n)), n = a.get.normalizedValue(n), a.set.progress(n)
					},
					decrement: function (e) {
						var t, n;
						a.get.total() ? (n = (t = a.get.value()) - (e = e || 1), a.debug("Decrementing value by", e, t)) : (n = (t = a.get.percent()) - (e = e || a.get.randomValue()), a.debug("Decrementing percentage by", e, t)), n = a.get.normalizedValue(n), a.set.progress(n)
					},
					has: {
						progressPoll: function () {
							return a.progressPoll
						},
						total: function () {
							return !1 !== a.get.total()
						}
					},
					get: {
						text: function (e) {
							var t = a.value || 0,
								n = a.total || 0,
								i = g ? a.get.displayPercent() : a.percent || 0,
								o = 0 < a.total ? n - t : 100 - i;
							return e = (e = e || "").replace("{value}", t).replace("{total}", n).replace("{left}", o).replace("{percent}", i), a.verbose("Adding variables to progress bar text", e), e
						},
						normalizedValue: function (e) {
							if (e < 0) return a.debug("Value cannot decrement below 0"), 0;
							if (a.has.total()) {
								if (e > a.total) return a.debug("Value cannot increment above total", a.total), a.total
							} else if (100 < e) return a.debug("Value cannot increment above 100 percent"), 100;
							return e
						},
						updateInterval: function () {
							return "auto" == i.updateInterval ? i.duration : i.updateInterval
						},
						randomValue: function () {
							return a.debug("Generating random increment percentage"), Math.floor(Math.random() * i.random.max + i.random.min)
						},
						numericValue: function (e) {
							return "string" == typeof e ? "" !== e.replace(/[^\d.]/g, "") && +e.replace(/[^\d.]/g, "") : e
						},
						transitionEnd: function () {
							var e, t = T.createElement("element"),
								n = {
									transition: "transitionend",
									OTransition: "oTransitionEnd",
									MozTransition: "transitionend",
									WebkitTransition: "webkitTransitionEnd"
								};
							for (e in n)
								if (t.style[e] !== A) return n[e]
						},
						displayPercent: function () {
							var e = u.width(),
								t = c.width(),
								n = parseInt(u.css("min-width"), 10) < e ? e / t * 100 : a.percent;
							return 0 < i.precision ? Math.round(n * (10 * i.precision)) / (10 * i.precision) : Math.round(n)
						},
						percent: function () {
							return a.percent || 0
						},
						value: function () {
							return a.nextValue || a.value || 0
						},
						total: function () {
							return a.total || !1
						}
					},
					create: {
						progressPoll: function () {
							a.progressPoll = setTimeout(function () {
								a.update.toNextValue(), a.remove.progressPoll()
							}, a.get.updateInterval())
						}
					},
					is: {
						complete: function () {
							return a.is.success() || a.is.warning() || a.is.error()
						},
						success: function () {
							return c.hasClass(t.success)
						},
						warning: function () {
							return c.hasClass(t.warning)
						},
						error: function () {
							return c.hasClass(t.error)
						},
						active: function () {
							return c.hasClass(t.active)
						},
						visible: function () {
							return c.is(":visible")
						}
					},
					remove: {
						progressPoll: function () {
							a.verbose("Removing progress poll timer"), a.progressPoll && (clearTimeout(a.progressPoll), delete a.progressPoll)
						},
						nextValue: function () {
							a.verbose("Removing progress value stored for next update"), delete a.nextValue
						},
						state: function () {
							a.verbose("Removing stored state"), delete a.total, delete a.percent, delete a.value
						},
						active: function () {
							a.verbose("Removing active state"), c.removeClass(t.active)
						},
						success: function () {
							a.verbose("Removing success state"), c.removeClass(t.success)
						},
						warning: function () {
							a.verbose("Removing warning state"), c.removeClass(t.warning)
						},
						error: function () {
							a.verbose("Removing error state"), c.removeClass(t.error)
						}
					},
					set: {
						barWidth: function (e) {
							100 < e ? a.error(l.tooHigh, e) : e < 0 ? a.error(l.tooLow, e) : (u.css("width", e + "%"), c.attr("data-percent", parseInt(e, 10)))
						},
						duration: function (e) {
							e = "number" == typeof (e = e || i.duration) ? e + "ms" : e, a.verbose("Setting progress bar transition duration", e), u.css({
								"transition-duration": e
							})
						},
						percent: function (e) {
							e = "string" == typeof e ? +e.replace("%", "") : e, e = 0 < i.precision ? Math.round(e * (10 * i.precision)) / (10 * i.precision) : Math.round(e), a.percent = e, a.has.total() || (a.value = 0 < i.precision ? Math.round(e / 100 * a.total * (10 * i.precision)) / (10 * i.precision) : Math.round(e / 100 * a.total * 10) / 10, i.limitValues && (a.value = 100 < a.value ? 100 : a.value < 0 ? 0 : a.value)), a.set.barWidth(e), a.set.labelInterval(), a.set.labels(), i.onChange.call(f, e, a.value, a.total)
						},
						labelInterval: function () {
							clearInterval(a.interval), a.bind.transitionEnd(function () {
								a.verbose("Bar finished animating, removing continuous label updates"), clearInterval(a.interval), g = !1, a.set.labels()
							}), g = !0, a.interval = setInterval(function () {
								S.contains(T.documentElement, f) || (clearInterval(a.interval), g = !1), a.set.labels()
							}, i.framerate)
						},
						labels: function () {
							a.verbose("Setting both bar progress and outer label text"), a.set.barLabel(), a.set.state()
						},
						label: function (e) {
							(e = e || "") && (e = a.get.text(e), a.verbose("Setting label to text", e), p.text(e))
						},
						state: function (e) {
							100 === (e = e !== A ? e : a.percent) ? i.autoSuccess && !(a.is.warning() || a.is.error() || a.is.success()) ? (a.set.success(), a.debug("Automatically triggering success at 100%")) : (a.verbose("Reached 100% removing active state"), a.remove.active(), a.remove.progressPoll()) : 0 < e ? (a.verbose("Adjusting active progress bar label", e), a.set.active()) : (a.remove.active(), a.set.label(i.text.active))
						},
						barLabel: function (e) {
							e !== A ? d.text(a.get.text(e)) : "ratio" == i.label && a.total ? (a.verbose("Adding ratio to bar label"), d.text(a.get.text(i.text.ratio))) : "percent" == i.label && (a.verbose("Adding percentage to bar label"), d.text(a.get.text(i.text.percent)))
						},
						active: function (e) {
							e = e || i.text.active, a.debug("Setting active state"), i.showActivity && !a.is.active() && c.addClass(t.active), a.remove.warning(), a.remove.error(), a.remove.success(), (e = i.onLabelUpdate("active", e, a.value, a.total)) && a.set.label(e), a.bind.transitionEnd(function () {
								i.onActive.call(f, a.value, a.total)
							})
						},
						success: function (e) {
							e = e || i.text.success || i.text.active, a.debug("Setting success state"), c.addClass(t.success), a.remove.active(), a.remove.warning(), a.remove.error(), a.complete(), e = i.text.success ? i.onLabelUpdate("success", e, a.value, a.total) : i.onLabelUpdate("active", e, a.value, a.total), a.set.label(e), a.bind.transitionEnd(function () {
								i.onSuccess.call(f, a.total)
							})
						},
						warning: function (e) {
							e = e || i.text.warning, a.debug("Setting warning state"), c.addClass(t.warning), a.remove.active(), a.remove.success(), a.remove.error(), a.complete(), (e = i.onLabelUpdate("warning", e, a.value, a.total)) && a.set.label(e), a.bind.transitionEnd(function () {
								i.onWarning.call(f, a.value, a.total)
							})
						},
						error: function (e) {
							e = e || i.text.error, a.debug("Setting error state"), c.addClass(t.error), a.remove.active(), a.remove.success(), a.remove.warning(), a.complete(), (e = i.onLabelUpdate("error", e, a.value, a.total)) && a.set.label(e), a.bind.transitionEnd(function () {
								i.onError.call(f, a.value, a.total)
							})
						},
						transitionEvent: function () {
							a.get.transitionEnd()
						},
						total: function (e) {
							a.total = e
						},
						value: function (e) {
							a.value = e
						},
						progress: function (e) {
							a.has.progressPoll() ? (a.debug("Updated within interval, setting next update to use new value", e), a.set.nextValue(e)) : (a.debug("First update in progress update interval, immediately updating", e), a.update.progress(e), a.create.progressPoll())
						},
						nextValue: function (e) {
							a.nextValue = e
						}
					},
					update: {
						toNextValue: function () {
							var e = a.nextValue;
							e && (a.debug("Update interval complete using last updated value", e), a.update.progress(e), a.remove.nextValue())
						},
						progress: function (e) {
							var t;
							!1 === (e = a.get.numericValue(e)) && a.error(l.nonNumeric, e), e = a.get.normalizedValue(e), a.has.total() ? (a.set.value(e), t = e / a.total * 100, a.debug("Calculating percent complete from total", t)) : (t = e, a.debug("Setting value to exact percentage value", t)), a.set.percent(t)
						}
					},
					setting: function (e, t) {
						if (a.debug("Changing setting", e, t), S.isPlainObject(e)) S.extend(!0, i, e);
						else {
							if (t === A) return i[e];
							S.isPlainObject(i[e]) ? S.extend(!0, i[e], t) : i[e] = t
						}
					},
					internal: function (e, t) {
						if (S.isPlainObject(e)) S.extend(!0, a, e);
						else {
							if (t === A) return a[e];
							a[e] = t
						}
					},
					debug: function () {
						!i.silent && i.debug && (i.performance ? a.performance.log(arguments) : (a.debug = Function.prototype.bind.call(console.info, console, i.name + ":"), a.debug.apply(console, arguments)))
					},
					verbose: function () {
						!i.silent && i.verbose && i.debug && (i.performance ? a.performance.log(arguments) : (a.verbose = Function.prototype.bind.call(console.info, console, i.name + ":"), a.verbose.apply(console, arguments)))
					},
					error: function () {
						i.silent || (a.error = Function.prototype.bind.call(console.error, console, i.name + ":"), a.error.apply(console, arguments))
					},
					performance: {
						log: function (e) {
							var t, n;
							i.performance && (n = (t = (new Date).getTime()) - (y || t), y = t, w.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: f,
								"Execution Time": n
							})), clearTimeout(a.performance.timer), a.performance.timer = setTimeout(a.performance.display, 500)
						},
						display: function () {
							var e = i.name + ":",
								n = 0;
							y = !1, clearTimeout(a.performance.timer), S.each(w, function (e, t) {
								n += t["Execution Time"]
							}), e += " " + n + "ms", b && (e += " '" + b + "'"), (console.group !== A || console.table !== A) && 0 < w.length && (console.groupCollapsed(e), console.table ? console.table(w) : S.each(w, function (e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), w = []
						}
					},
					invoke: function (i, e, t) {
						var o, s, n, r = h;
						return e = e || k, t = f || t, "string" == typeof i && r !== A && (i = i.split(/[\. ]/), o = i.length - 1, S.each(i, function (e, t) {
							var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
							if (S.isPlainObject(r[n]) && e != o) r = r[n];
							else {
								if (r[n] !== A) return s = r[n], !1;
								if (!S.isPlainObject(r[t]) || e == o) return r[t] !== A ? s = r[t] : a.error(l.method, i), !1;
								r = r[t]
							}
						})), S.isFunction(s) ? n = s.apply(t, e) : s !== A && (n = s), S.isArray(v) ? v.push(n) : v !== A ? v = [v, n] : n !== A && (v = n), s
					}
				}, C ? (h === A && a.initialize(), a.invoke(x)) : (h !== A && h.invoke("destroy"), a.initialize())
			}), v !== A ? v : this
		}, S.fn.progress.settings = {
			name: "Progress",
			namespace: "progress",
			silent: !1,
			debug: !1,
			verbose: !1,
			performance: !0,
			random: {
				min: 2,
				max: 5
			},
			duration: 300,
			updateInterval: "auto",
			autoSuccess: !0,
			showActivity: !0,
			limitValues: !0,
			label: "percent",
			precision: 0,
			framerate: 1e3 / 30,
			percent: !1,
			total: !1,
			value: !1,
			failSafeDelay: 100,
			onLabelUpdate: function (e, t, n, i) {
				return t
			},
			onChange: function (e, t, n) { },
			onSuccess: function (e) { },
			onActive: function (e, t) { },
			onError: function (e, t) { },
			onWarning: function (e, t) { },
			error: {
				method: "The method you called is not defined.",
				nonNumeric: "Progress value is non numeric",
				tooHigh: "Value specified is above 100%",
				tooLow: "Value specified is below 0%"
			},
			regExp: {
				variable: /\{\$*[A-z0-9]+\}/g
			},
			metadata: {
				percent: "percent",
				total: "total",
				value: "value"
			},
			selector: {
				bar: "> .bar",
				label: "> .label",
				progress: ".bar > .progress"
			},
			text: {
				active: !1,
				error: !1,
				success: !1,
				warning: !1,
				percent: "{percent}%",
				ratio: "{value} of {total}"
			},
			className: {
				active: "active",
				error: "error",
				success: "success",
				warning: "warning"
			}
		}
	}(jQuery, window, document),
	function (C, e, t, k) {
		"use strict";
		e = void 0 !== e && e.Math == Math ? e : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), C.fn.rating = function (f) {
			var h, g = C(this),
				m = g.selector || "",
				v = (new Date).getTime(),
				b = [],
				y = f,
				w = "string" == typeof y,
				x = [].slice.call(arguments, 1);
			return g.each(function () {
				var e, i, o = C.isPlainObject(f) ? C.extend(!0, {}, C.fn.rating.settings, f) : C.extend({}, C.fn.rating.settings),
					t = o.namespace,
					s = o.className,
					n = o.metadata,
					r = o.selector,
					a = (o.error, "." + t),
					l = "module-" + t,
					c = this,
					u = C(this).data(l),
					d = C(this),
					p = d.find(r.icon);
				i = {
					initialize: function () {
						i.verbose("Initializing rating module", o), 0 === p.length && i.setup.layout(), o.interactive ? i.enable() : i.disable(), i.set.initialLoad(), i.set.rating(i.get.initialRating()), i.remove.initialLoad(), i.instantiate()
					},
					instantiate: function () {
						i.verbose("Instantiating module", o), u = i, d.data(l, i)
					},
					destroy: function () {
						i.verbose("Destroying previous instance", u), i.remove.events(), d.removeData(l)
					},
					refresh: function () {
						p = d.find(r.icon)
					},
					setup: {
						layout: function () {
							var e = i.get.maxRating(),
								t = C.fn.rating.settings.templates.icon(e);
							i.debug("Generating icon html dynamically"), d.html(t), i.refresh()
						}
					},
					event: {
						mouseenter: function () {
							var e = C(this);
							e.nextAll().removeClass(s.selected), d.addClass(s.selected), e.addClass(s.selected).prevAll().addClass(s.selected)
						},
						mouseleave: function () {
							d.removeClass(s.selected), p.removeClass(s.selected)
						},
						click: function () {
							var e = C(this),
								t = i.get.rating(),
								n = p.index(e) + 1;
							("auto" == o.clearable ? 1 === p.length : o.clearable) && t == n ? i.clearRating() : i.set.rating(n)
						}
					},
					clearRating: function () {
						i.debug("Clearing current rating"), i.set.rating(0)
					},
					bind: {
						events: function () {
							i.verbose("Binding events"), d.on("mouseenter" + a, r.icon, i.event.mouseenter).on("mouseleave" + a, r.icon, i.event.mouseleave).on("click" + a, r.icon, i.event.click)
						}
					},
					remove: {
						events: function () {
							i.verbose("Removing events"), d.off(a)
						},
						initialLoad: function () {
							e = !1
						}
					},
					enable: function () {
						i.debug("Setting rating to interactive mode"), i.bind.events(), d.removeClass(s.disabled)
					},
					disable: function () {
						i.debug("Setting rating to read-only mode"), i.remove.events(), d.addClass(s.disabled)
					},
					is: {
						initialLoad: function () {
							return e
						}
					},
					get: {
						initialRating: function () {
							return d.data(n.rating) !== k ? (d.removeData(n.rating), d.data(n.rating)) : o.initialRating
						},
						maxRating: function () {
							return d.data(n.maxRating) !== k ? (d.removeData(n.maxRating), d.data(n.maxRating)) : o.maxRating
						},
						rating: function () {
							var e = p.filter("." + s.active).length;
							return i.verbose("Current rating retrieved", e), e
						}
					},
					set: {
						rating: function (e) {
							var t = 0 <= e - 1 ? e - 1 : 0,
								n = p.eq(t);
							d.removeClass(s.selected), p.removeClass(s.selected).removeClass(s.active), 0 < e && (i.verbose("Setting current rating to", e), n.prevAll().addBack().addClass(s.active)), i.is.initialLoad() || o.onRate.call(c, e)
						},
						initialLoad: function () {
							e = !0
						}
					},
					setting: function (e, t) {
						if (i.debug("Changing setting", e, t), C.isPlainObject(e)) C.extend(!0, o, e);
						else {
							if (t === k) return o[e];
							C.isPlainObject(o[e]) ? C.extend(!0, o[e], t) : o[e] = t
						}
					},
					internal: function (e, t) {
						if (C.isPlainObject(e)) C.extend(!0, i, e);
						else {
							if (t === k) return i[e];
							i[e] = t
						}
					},
					debug: function () {
						!o.silent && o.debug && (o.performance ? i.performance.log(arguments) : (i.debug = Function.prototype.bind.call(console.info, console, o.name + ":"), i.debug.apply(console, arguments)))
					},
					verbose: function () {
						!o.silent && o.verbose && o.debug && (o.performance ? i.performance.log(arguments) : (i.verbose = Function.prototype.bind.call(console.info, console, o.name + ":"), i.verbose.apply(console, arguments)))
					},
					error: function () {
						o.silent || (i.error = Function.prototype.bind.call(console.error, console, o.name + ":"), i.error.apply(console, arguments))
					},
					performance: {
						log: function (e) {
							var t, n;
							o.performance && (n = (t = (new Date).getTime()) - (v || t), v = t, b.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: c,
								"Execution Time": n
							})), clearTimeout(i.performance.timer), i.performance.timer = setTimeout(i.performance.display, 500)
						},
						display: function () {
							var e = o.name + ":",
								n = 0;
							v = !1, clearTimeout(i.performance.timer), C.each(b, function (e, t) {
								n += t["Execution Time"]
							}), e += " " + n + "ms", m && (e += " '" + m + "'"), 1 < g.length && (e += " (" + g.length + ")"), (console.group !== k || console.table !== k) && 0 < b.length && (console.groupCollapsed(e), console.table ? console.table(b) : C.each(b, function (e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), b = []
						}
					},
					invoke: function (i, e, t) {
						var o, s, n, r = u;
						return e = e || x, t = c || t, "string" == typeof i && r !== k && (i = i.split(/[\. ]/), o = i.length - 1, C.each(i, function (e, t) {
							var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
							if (C.isPlainObject(r[n]) && e != o) r = r[n];
							else {
								if (r[n] !== k) return s = r[n], !1;
								if (!C.isPlainObject(r[t]) || e == o) return r[t] !== k && (s = r[t]), !1;
								r = r[t]
							}
						})), C.isFunction(s) ? n = s.apply(t, e) : s !== k && (n = s), C.isArray(h) ? h.push(n) : h !== k ? h = [h, n] : n !== k && (h = n), s
					}
				}, w ? (u === k && i.initialize(), i.invoke(y)) : (u !== k && u.invoke("destroy"), i.initialize())
			}), h !== k ? h : this
		}, C.fn.rating.settings = {
			name: "Rating",
			namespace: "rating",
			slent: !1,
			debug: !1,
			verbose: !1,
			performance: !0,
			initialRating: 0,
			interactive: !0,
			maxRating: 4,
			clearable: "auto",
			fireOnInit: !1,
			onRate: function (e) { },
			error: {
				method: "The method you called is not defined",
				noMaximum: "No maximum rating specified. Cannot generate HTML automatically"
			},
			metadata: {
				rating: "rating",
				maxRating: "maxRating"
			},
			className: {
				active: "active",
				disabled: "disabled",
				selected: "selected",
				loading: "loading"
			},
			selector: {
				icon: ".icon"
			},
			templates: {
				icon: function (e) {
					for (var t = 1, n = ""; t <= e;) n += '<i class="icon"></i>', t++;
					return n
				}
			}
		}
	}(jQuery, window, document),
	function (D, O, $, R) {
		"use strict";
		O = void 0 !== O && O.Math == Math ? O : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), D.fn.search = function (l) {
			var x, C = D(this),
				k = C.selector || "",
				S = (new Date).getTime(),
				T = [],
				A = l,
				E = "string" == typeof A,
				P = [].slice.call(arguments, 1);
			return D(this).each(function () {
				var c, u = D.isPlainObject(l) ? D.extend(!0, {}, D.fn.search.settings, l) : D.extend({}, D.fn.search.settings),
					d = u.className,
					p = u.metadata,
					f = u.regExp,
					s = u.fields,
					h = u.selector,
					g = u.error,
					e = u.namespace,
					n = "." + e,
					t = e + "-module",
					m = D(this),
					v = m.find(h.prompt),
					i = m.find(h.searchButton),
					o = m.find(h.results),
					r = m.find(h.result),
					b = (m.find(h.category), this),
					a = m.data(t),
					y = !1,
					w = !1;
				c = {
					initialize: function () {
						c.verbose("Initializing module"), c.get.settings(), c.determine.searchFields(), c.bind.events(), c.set.type(), c.create.results(), c.instantiate()
					},
					instantiate: function () {
						c.verbose("Storing instance of module", c), a = c, m.data(t, c)
					},
					destroy: function () {
						c.verbose("Destroying instance"), m.off(n).removeData(t)
					},
					refresh: function () {
						c.debug("Refreshing selector cache"), v = m.find(h.prompt), i = m.find(h.searchButton), m.find(h.category), o = m.find(h.results), r = m.find(h.result)
					},
					refreshResults: function () {
						o = m.find(h.results), r = m.find(h.result)
					},
					bind: {
						events: function () {
							c.verbose("Binding events to search"), u.automatic && (m.on(c.get.inputEvent() + n, h.prompt, c.event.input), v.attr("autocomplete", "off")), m.on("focus" + n, h.prompt, c.event.focus).on("blur" + n, h.prompt, c.event.blur).on("keydown" + n, h.prompt, c.handleKeyboard).on("click" + n, h.searchButton, c.query).on("mousedown" + n, h.results, c.event.result.mousedown).on("mouseup" + n, h.results, c.event.result.mouseup).on("click" + n, h.result, c.event.result.click)
						}
					},
					determine: {
						searchFields: function () {
							l && l.searchFields !== R && (u.searchFields = l.searchFields)
						}
					},
					event: {
						input: function () {
							u.searchDelay ? (clearTimeout(c.timer), c.timer = setTimeout(function () {
								c.is.focused() && c.query()
							}, u.searchDelay)) : c.query()
						},
						focus: function () {
							c.set.focus(), u.searchOnFocus && c.has.minimumCharacters() && c.query(function () {
								c.can.show() && c.showResults()
							})
						},
						blur: function (e) {
							function t() {
								c.cancel.query(), c.remove.focus(), c.timer = setTimeout(c.hideResults, u.hideDelay)
							}
							$.activeElement === this || (w = !1, c.resultsClicked ? (c.debug("Determining if user action caused search to close"), m.one("click.close" + n, h.results, function (e) {
								c.is.inMessage(e) || y ? v.focus() : (y = !1, c.is.animating() || c.is.hidden() || t())
							})) : (c.debug("Input blurred without user action, closing results"), t()))
						},
						result: {
							mousedown: function () {
								c.resultsClicked = !0
							},
							mouseup: function () {
								c.resultsClicked = !1
							},
							click: function (e) {
								c.debug("Search result selected");
								var t = D(this),
									n = t.find(h.title).eq(0),
									i = t.is("a[href]") ? t : t.find("a[href]").eq(0),
									o = i.attr("href") || !1,
									s = i.attr("target") || !1,
									r = (n.html(), 0 < n.length && n.text()),
									a = c.get.results(),
									l = t.data(p.result) || c.get.result(r, a);
								if (D.isFunction(u.onSelect) && !1 === u.onSelect.call(b, l, a)) return c.debug("Custom onSelect callback cancelled default select action"), void (y = !0);
								c.hideResults(), r && c.set.value(r), o && (c.verbose("Opening search link found in result", i), "_blank" == s || e.ctrlKey ? O.open(o) : O.location.href = o)
							}
						}
					},
					handleKeyboard: function (e) {
						var t, n = m.find(h.result),
							i = m.find(h.category),
							o = n.filter("." + d.active),
							s = n.index(o),
							r = n.length,
							a = 0 < o.length,
							l = e.which;
						if (27 == l && (c.verbose("Escape key pressed, blurring search field"), c.hideResults(), w = !0), c.is.visible())
							if (13 == l) {
								if (c.verbose("Enter key pressed, selecting active result"), 0 < n.filter("." + d.active).length) return c.event.result.click.call(n.filter("." + d.active), e), e.preventDefault(), !1
							} else 38 == l && a ? (c.verbose("Up key pressed, changing active result"), t = s - 1 < 0 ? s : s - 1, i.removeClass(d.active), n.removeClass(d.active).eq(t).addClass(d.active).closest(i).addClass(d.active), e.preventDefault()) : 40 == l && (c.verbose("Down key pressed, changing active result"), t = r <= s + 1 ? s : s + 1, i.removeClass(d.active), n.removeClass(d.active).eq(t).addClass(d.active).closest(i).addClass(d.active), e.preventDefault());
						else 13 == l && (c.verbose("Enter key pressed, executing query"), c.query(), c.set.buttonPressed(), v.one("keyup", c.remove.buttonFocus))
					},
					setup: {
						api: function (t, n) {
							var e = {
								debug: u.debug,
								on: !1,
								cache: u.cache,
								action: "search",
								urlData: {
									query: t
								},
								onSuccess: function (e) {
									c.parse.response.call(b, e, t), n()
								},
								onFailure: function () {
									c.displayMessage(g.serverError), n()
								},
								onAbort: function (e) { },
								onError: c.error
							};
							D.extend(!0, e, u.apiSettings), c.verbose("Setting up API request", e), m.api(e)
						}
					},
					can: {
						useAPI: function () {
							return D.fn.api !== R
						},
						show: function () {
							return c.is.focused() && !c.is.visible() && !c.is.empty()
						},
						transition: function () {
							return u.transition && D.fn.transition !== R && m.transition("is supported")
						}
					},
					is: {
						animating: function () {
							return o.hasClass(d.animating)
						},
						hidden: function () {
							return o.hasClass(d.hidden)
						},
						inMessage: function (e) {
							if (e.target) {
								var t = D(e.target);
								return D.contains($.documentElement, e.target) && 0 < t.closest(h.message).length
							}
						},
						empty: function () {
							return "" === o.html()
						},
						visible: function () {
							return 0 < o.filter(":visible").length
						},
						focused: function () {
							return 0 < v.filter(":focus").length
						}
					},
					get: {
						settings: function () {
							D.isPlainObject(l) && l.searchFullText && (u.fullTextSearch = l.searchFullText, c.error(u.error.oldSearchSyntax, b))
						},
						inputEvent: function () {
							var e = v[0];
							return e !== R && e.oninput !== R ? "input" : e !== R && e.onpropertychange !== R ? "propertychange" : "keyup"
						},
						value: function () {
							return v.val()
						},
						results: function () {
							return m.data(p.results)
						},
						result: function (n, e) {
							var i = ["title", "id"],
								o = !1;
							return n = n !== R ? n : c.get.value(), e = e !== R ? e : c.get.results(), "category" === u.type ? (c.debug("Finding result that matches", n), D.each(e, function (e, t) {
								if (D.isArray(t.results) && (o = c.search.object(n, t.results, i)[0])) return !1
							})) : (c.debug("Finding result in results object", n), o = c.search.object(n, e, i)[0]), o || !1
						}
					},
					select: {
						firstResult: function () {
							c.verbose("Selecting first result"), r.first().addClass(d.active)
						}
					},
					set: {
						focus: function () {
							m.addClass(d.focus)
						},
						loading: function () {
							m.addClass(d.loading)
						},
						value: function (e) {
							c.verbose("Setting search input value", e), v.val(e)
						},
						type: function (e) {
							e = e || u.type, "category" == u.type && m.addClass(u.type)
						},
						buttonPressed: function () {
							i.addClass(d.pressed)
						}
					},
					remove: {
						loading: function () {
							m.removeClass(d.loading)
						},
						focus: function () {
							m.removeClass(d.focus)
						},
						buttonPressed: function () {
							i.removeClass(d.pressed)
						}
					},
					query: function (e) {
						e = D.isFunction(e) ? e : function () { };
						var t = c.get.value(),
							n = c.read.cache(t);
						e = e || function () { }, c.has.minimumCharacters() ? (n ? (c.debug("Reading result from cache", t), c.save.results(n.results), c.addResults(n.html), c.inject.id(n.results), e()) : (c.debug("Querying for", t), D.isPlainObject(u.source) || D.isArray(u.source) ? (c.search.local(t), e()) : c.can.useAPI() ? c.search.remote(t, e) : (c.error(g.source), e())), u.onSearchQuery.call(b, t)) : c.hideResults()
					},
					search: {
						local: function (e) {
							var t, n = c.search.object(e, u.content);
							c.set.loading(), c.save.results(n), c.debug("Returned full local search results", n), 0 < u.maxResults && (c.debug("Using specified max results", n), n = n.slice(0, u.maxResults)), "category" == u.type && (n = c.create.categoryResults(n)), t = c.generateResults({
								results: n
							}), c.remove.loading(), c.addResults(t), c.inject.id(n), c.write.cache(e, {
								html: t,
								results: n
							})
						},
						remote: function (e, t) {
							t = D.isFunction(t) ? t : function () { }, m.api("is loading") && m.api("abort"), c.setup.api(e, t), m.api("query")
						},
						object: function (i, t, e) {
							function o(e, t) {
								var n = -1 == D.inArray(t, s),
									i = -1 == D.inArray(t, a),
									o = -1 == D.inArray(t, r);
								n && i && o && e.push(t)
							}
							var s = [],
								r = [],
								a = [],
								n = i.toString().replace(f.escape, "\\$&"),
								l = new RegExp(f.beginsWith + n, "i");
							return t = t || u.source, e = e !== R ? e : u.searchFields, D.isArray(e) || (e = [e]), t === R || !1 === t ? (c.error(g.source), []) : (D.each(e, function (e, n) {
								D.each(t, function (e, t) {
									"string" == typeof t[n] && (-1 !== t[n].search(l) ? o(s, t) : "exact" === u.fullTextSearch && c.exactSearch(i, t[n]) ? o(r, t) : 1 == u.fullTextSearch && c.fuzzySearch(i, t[n]) && o(a, t))
								})
							}), D.merge(r, a), D.merge(s, r), s)
						}
					},
					exactSearch: function (e, t) {
						return e = e.toLowerCase(), -1 < (t = t.toLowerCase()).indexOf(e)
					},
					fuzzySearch: function (e, t) {
						var n = t.length,
							i = e.length;
						if ("string" != typeof e) return !1;
						if (e = e.toLowerCase(), t = t.toLowerCase(), n < i) return !1;
						if (i === n) return e === t;
						e: for (var o = 0, s = 0; o < i; o++) {
							for (var r = e.charCodeAt(o); s < n;)
								if (t.charCodeAt(s++) === r) continue e;
							return !1
						}
						return !0
					},
					parse: {
						response: function (e, t) {
							var n = c.generateResults(e);
							c.verbose("Parsing server response", e), e !== R && t !== R && e[s.results] !== R && (c.addResults(n), c.inject.id(e[s.results]), c.write.cache(t, {
								html: n,
								results: e[s.results]
							}), c.save.results(e[s.results]))
						}
					},
					cancel: {
						query: function () {
							c.can.useAPI() && m.api("abort")
						}
					},
					has: {
						minimumCharacters: function () {
							return c.get.value().length >= u.minCharacters
						},
						results: function () {
							return 0 !== o.length && "" != o.html()
						}
					},
					clear: {
						cache: function (e) {
							var t = m.data(p.cache);
							e ? e && t && t[e] && (c.debug("Removing value from cache", e), delete t[e], m.data(p.cache, t)) : (c.debug("Clearing cache", e), m.removeData(p.cache))
						}
					},
					read: {
						cache: function (e) {
							var t = m.data(p.cache);
							return !!u.cache && (c.verbose("Checking cache for generated html for query", e), "object" == typeof t && t[e] !== R && t[e])
						}
					},
					create: {
						categoryResults: function (e) {
							var n = {};
							return D.each(e, function (e, t) {
								t.category && (n[t.category] === R ? (c.verbose("Creating new category of results", t.category), n[t.category] = {
									name: t.category,
									results: [t]
								}) : n[t.category].results.push(t))
							}), n
						},
						id: function (e, t) {
							var n, i = e + 1;
							return t !== R ? (n = String.fromCharCode(97 + t) + i, c.verbose("Creating category result id", n)) : (n = i, c.verbose("Creating result id", n)), n
						},
						results: function () {
							0 === o.length && (o = D("<div />").addClass(d.results).appendTo(m))
						}
					},
					inject: {
						result: function (e, t, n) {
							c.verbose("Injecting result into results");
							var i = n !== R ? o.children().eq(n).children(h.results).first().children(h.result).eq(t) : o.children(h.result).eq(t);
							c.verbose("Injecting results metadata", i), i.data(p.result, e)
						},
						id: function (i) {
							c.debug("Injecting unique ids into results");
							var o = 0,
								s = 0;
							return "category" === u.type ? D.each(i, function (e, i) {
								s = 0, D.each(i.results, function (e, t) {
									var n = i.results[e];
									n.id === R && (n.id = c.create.id(s, o)), c.inject.result(n, s, o), s++
								}), o++
							}) : D.each(i, function (e, t) {
								var n = i[e];
								n.id === R && (n.id = c.create.id(s)), c.inject.result(n, s), s++
							}), i
						}
					},
					save: {
						results: function (e) {
							c.verbose("Saving current search results to metadata", e), m.data(p.results, e)
						}
					},
					write: {
						cache: function (e, t) {
							var n = m.data(p.cache) !== R ? m.data(p.cache) : {};
							u.cache && (c.verbose("Writing generated html to cache", e, t), n[e] = t, m.data(p.cache, n))
						}
					},
					addResults: function (e) {
						if (D.isFunction(u.onResultsAdd) && !1 === u.onResultsAdd.call(o, e)) return c.debug("onResultsAdd callback cancelled default action"), !1;
						e ? (o.html(e), c.refreshResults(), u.selectFirstResult && c.select.firstResult(), c.showResults()) : c.hideResults(function () {
							o.empty()
						})
					},
					showResults: function (e) {
						e = D.isFunction(e) ? e : function () { }, w || !c.is.visible() && c.has.results() && (c.can.transition() ? (c.debug("Showing results with css animations"), o.transition({
							animation: u.transition + " in",
							debug: u.debug,
							verbose: u.verbose,
							duration: u.duration,
							onComplete: function () {
								e()
							},
							queue: !0
						})) : (c.debug("Showing results with javascript"), o.stop().fadeIn(u.duration, u.easing)), u.onResultsOpen.call(o))
					},
					hideResults: function (e) {
						e = D.isFunction(e) ? e : function () { }, c.is.visible() && (c.can.transition() ? (c.debug("Hiding results with css animations"), o.transition({
							animation: u.transition + " out",
							debug: u.debug,
							verbose: u.verbose,
							duration: u.duration,
							onComplete: function () {
								e()
							},
							queue: !0
						})) : (c.debug("Hiding results with javascript"), o.stop().fadeOut(u.duration, u.easing)), u.onResultsClose.call(o))
					},
					generateResults: function (e) {
						c.debug("Generating html from response", e);
						var t = u.templates[u.type],
							n = D.isPlainObject(e[s.results]) && !D.isEmptyObject(e[s.results]),
							i = D.isArray(e[s.results]) && 0 < e[s.results].length,
							o = "";
						return n || i ? (0 < u.maxResults && (n ? "standard" == u.type && c.error(g.maxResults) : e[s.results] = e[s.results].slice(0, u.maxResults)), D.isFunction(t) ? o = t(e, s) : c.error(g.noTemplate, !1)) : u.showNoResults && (o = c.displayMessage(g.noResults, "empty")), u.onResults.call(b, e), o
					},
					displayMessage: function (e, t) {
						return t = t || "standard", c.debug("Displaying message", e, t), c.addResults(u.templates.message(e, t)), u.templates.message(e, t)
					},
					setting: function (e, t) {
						if (D.isPlainObject(e)) D.extend(!0, u, e);
						else {
							if (t === R) return u[e];
							u[e] = t
						}
					},
					internal: function (e, t) {
						if (D.isPlainObject(e)) D.extend(!0, c, e);
						else {
							if (t === R) return c[e];
							c[e] = t
						}
					},
					debug: function () {
						!u.silent && u.debug && (u.performance ? c.performance.log(arguments) : (c.debug = Function.prototype.bind.call(console.info, console, u.name + ":"), c.debug.apply(console, arguments)))
					},
					verbose: function () {
						!u.silent && u.verbose && u.debug && (u.performance ? c.performance.log(arguments) : (c.verbose = Function.prototype.bind.call(console.info, console, u.name + ":"), c.verbose.apply(console, arguments)))
					},
					error: function () {
						u.silent || (c.error = Function.prototype.bind.call(console.error, console, u.name + ":"), c.error.apply(console, arguments))
					},
					performance: {
						log: function (e) {
							var t, n;
							u.performance && (n = (t = (new Date).getTime()) - (S || t), S = t, T.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: b,
								"Execution Time": n
							})), clearTimeout(c.performance.timer), c.performance.timer = setTimeout(c.performance.display, 500)
						},
						display: function () {
							var e = u.name + ":",
								n = 0;
							S = !1, clearTimeout(c.performance.timer), D.each(T, function (e, t) {
								n += t["Execution Time"]
							}), e += " " + n + "ms", k && (e += " '" + k + "'"), 1 < C.length && (e += " (" + C.length + ")"), (console.group !== R || console.table !== R) && 0 < T.length && (console.groupCollapsed(e), console.table ? console.table(T) : D.each(T, function (e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), T = []
						}
					},
					invoke: function (i, e, t) {
						var o, s, n, r = a;
						return e = e || P, t = b || t, "string" == typeof i && r !== R && (i = i.split(/[\. ]/), o = i.length - 1, D.each(i, function (e, t) {
							var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
							if (D.isPlainObject(r[n]) && e != o) r = r[n];
							else {
								if (r[n] !== R) return s = r[n], !1;
								if (!D.isPlainObject(r[t]) || e == o) return r[t] !== R && (s = r[t]), !1;
								r = r[t]
							}
						})), D.isFunction(s) ? n = s.apply(t, e) : s !== R && (n = s), D.isArray(x) ? x.push(n) : x !== R ? x = [x, n] : n !== R && (x = n), s
					}
				}, E ? (a === R && c.initialize(), c.invoke(A)) : (a !== R && a.invoke("destroy"), c.initialize())
			}), x !== R ? x : this
		}, D.fn.search.settings = {
			name: "Search",
			namespace: "search",
			silent: !1,
			debug: !1,
			verbose: !1,
			performance: !0,
			type: "standard",
			minCharacters: 1,
			selectFirstResult: !1,
			apiSettings: !1,
			source: !1,
			searchOnFocus: !0,
			searchFields: ["title", "description"],
			displayField: "",
			fullTextSearch: "exact",
			automatic: !0,
			hideDelay: 0,
			searchDelay: 200,
			maxResults: 7,
			cache: !0,
			showNoResults: !0,
			transition: "scale",
			duration: 200,
			easing: "easeOutExpo",
			onSelect: !1,
			onResultsAdd: !1,
			onSearchQuery: function (e) { },
			onResults: function (e) { },
			onResultsOpen: function () { },
			onResultsClose: function () { },
			className: {
				animating: "animating",
				active: "active",
				empty: "empty",
				focus: "focus",
				hidden: "hidden",
				loading: "loading",
				results: "results",
				pressed: "down"
			},
			error: {
				source: "Cannot search. No source used, and Semantic API module was not included",
				noResults: "Your search returned no results",
				logging: "Error in debug logging, exiting.",
				noEndpoint: "No search endpoint was specified",
				noTemplate: "A valid template name was not specified.",
				oldSearchSyntax: "searchFullText setting has been renamed fullTextSearch for consistency, please adjust your settings.",
				serverError: "There was an issue querying the server.",
				maxResults: "Results must be an array to use maxResults setting",
				method: "The method you called is not defined."
			},
			metadata: {
				cache: "cache",
				results: "results",
				result: "result"
			},
			regExp: {
				escape: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
				beginsWith: "(?:s|^)"
			},
			fields: {
				categories: "results",
				categoryName: "name",
				categoryResults: "results",
				description: "description",
				image: "image",
				price: "price",
				results: "results",
				title: "title",
				url: "url",
				action: "action",
				actionText: "text",
				actionURL: "url"
			},
			selector: {
				prompt: ".prompt",
				searchButton: ".search.button",
				results: ".results",
				message: ".results > .message",
				category: ".category",
				result: ".result",
				title: ".title, .name"
			},
			templates: {
				escape: function (e) {
					var t = {
						"&": "&amp;",
						"<": "&lt;",
						">": "&gt;",
						'"': "&quot;",
						"'": "&#x27;",
						"`": "&#x60;"
					};
					return /[&<>"'`]/.test(e) ? e.replace(/[&<>"'`]/g, function (e) {
						return t[e]
					}) : e
				},
				message: function (e, t) {
					var n = "";
					return e !== R && t !== R && (n += '<div class="message ' + t + '">', n += "empty" == t ? '<div class="header">No Results</div class="header"><div class="description">' + e + '</div class="description">' : ' <div class="description">' + e + "</div>", n += "</div>"), n
				},
				category: function (e, n) {
					var i = "";
					return D.fn.search.settings.templates.escape, e[n.categoryResults] !== R && (D.each(e[n.categoryResults], function (e, t) {
						t[n.results] !== R && 0 < t.results.length && (i += '<div class="category">', t[n.categoryName] !== R && (i += '<div class="name">' + t[n.categoryName] + "</div>"), i += '<div class="results">', D.each(t.results, function (e, t) {
							t[n.url] ? i += '<a class="result" href="' + t[n.url] + '">' : i += '<a class="result">', t[n.image] !== R && (i += '<div class="image"> <img src="' + t[n.image] + '"></div>'), i += '<div class="content">', t[n.price] !== R && (i += '<div class="price">' + t[n.price] + "</div>"), t[n.title] !== R && (i += '<div class="title">' + t[n.title] + "</div>"), t[n.description] !== R && (i += '<div class="description">' + t[n.description] + "</div>"), i += "</div>", i += "</a>"
						}), i += "</div>", i += "</div>")
					}), e[n.action] && (i += '<a href="' + e[n.action][n.actionURL] + '" class="action">' + e[n.action][n.actionText] + "</a>"), i)
				},
				standard: function (e, n) {
					var i = "";
					return e[n.results] !== R && (D.each(e[n.results], function (e, t) {
						t[n.url] ? i += '<a class="result" href="' + t[n.url] + '">' : i += '<a class="result">', t[n.image] !== R && (i += '<div class="image"> <img src="' + t[n.image] + '"></div>'), i += '<div class="content">', t[n.price] !== R && (i += '<div class="price">' + t[n.price] + "</div>"), t[n.title] !== R && (i += '<div class="title">' + t[n.title] + "</div>"), t[n.description] !== R && (i += '<div class="description">' + t[n.description] + "</div>"), i += "</div>", i += "</a>"
					}), e[n.action] && (i += '<a href="' + e[n.action][n.actionURL] + '" class="action">' + e[n.action][n.actionText] + "</a>"), i)
				}
			}
		}
	}(jQuery, window, document),
	function (A, e, E, P) {
		"use strict";
		e = void 0 !== e && e.Math == Math ? e : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), A.fn.shape = function (v) {
			var b, y = A(this),
				w = (A("body"), (new Date).getTime()),
				x = [],
				C = v,
				k = "string" == typeof C,
				S = [].slice.call(arguments, 1),
				T = e.requestAnimationFrame || e.mozRequestAnimationFrame || e.webkitRequestAnimationFrame || e.msRequestAnimationFrame || function (e) {
					setTimeout(e, 0)
				};
			return y.each(function () {
				var i, o, s, t = y.selector || "",
					r = A.isPlainObject(v) ? A.extend(!0, {}, A.fn.shape.settings, v) : A.extend({}, A.fn.shape.settings),
					e = r.namespace,
					a = r.selector,
					n = r.error,
					l = r.className,
					c = "." + e,
					u = "module-" + e,
					d = A(this),
					p = d.find(a.sides),
					f = d.find(a.side),
					h = !1,
					g = this,
					m = d.data(u);
				s = {
					initialize: function () {
						s.verbose("Initializing module for", g), s.set.defaultSide(), s.instantiate()
					},
					instantiate: function () {
						s.verbose("Storing instance of module", s), m = s, d.data(u, m)
					},
					destroy: function () {
						s.verbose("Destroying previous module for", g), d.removeData(u).off(c)
					},
					refresh: function () {
						s.verbose("Refreshing selector cache for", g), d = A(g), p = A(this).find(a.shape), f = A(this).find(a.side)
					},
					repaint: function () {
						s.verbose("Forcing repaint event"), (p[0] || E.createElement("div")).offsetWidth
					},
					animate: function (e, t) {
						s.verbose("Animating box with properties", e), t = t || function (e) {
							s.verbose("Executing animation callback"), e !== P && e.stopPropagation(), s.reset(), s.set.active()
						}, r.beforeChange.call(o[0]), s.get.transitionEvent() ? (s.verbose("Starting CSS animation"), d.addClass(l.animating), p.css(e).one(s.get.transitionEvent(), t), s.set.duration(r.duration), T(function () {
							d.addClass(l.animating), i.addClass(l.hidden)
						})) : t()
					},
					queue: function (e) {
						s.debug("Queueing animation of", e), p.one(s.get.transitionEvent(), function () {
							s.debug("Executing queued animation"), setTimeout(function () {
								d.shape(e)
							}, 0)
						})
					},
					reset: function () {
						s.verbose("Animating states reset"), d.removeClass(l.animating).attr("style", "").removeAttr("style"), p.attr("style", "").removeAttr("style"), f.attr("style", "").removeAttr("style").removeClass(l.hidden), o.removeClass(l.animating).attr("style", "").removeAttr("style")
					},
					is: {
						complete: function () {
							return f.filter("." + l.active)[0] == o[0]
						},
						animating: function () {
							return d.hasClass(l.animating)
						}
					},
					set: {
						defaultSide: function () {
							i = d.find("." + r.className.active), o = 0 < i.next(a.side).length ? i.next(a.side) : d.find(a.side).first(), h = !1, s.verbose("Active side set to", i), s.verbose("Next side set to", o)
						},
						duration: function (e) {
							e = "number" == typeof (e = e || r.duration) ? e + "ms" : e, s.verbose("Setting animation duration", e), (r.duration || 0 === r.duration) && p.add(f).css({
								"-webkit-transition-duration": e,
								"-moz-transition-duration": e,
								"-ms-transition-duration": e,
								"-o-transition-duration": e,
								"transition-duration": e
							})
						},
						currentStageSize: function () {
							var e = d.find("." + r.className.active),
								t = e.outerWidth(!0),
								n = e.outerHeight(!0);
							d.css({
								width: t,
								height: n
							})
						},
						stageSize: function () {
							var e = d.clone().addClass(l.loading),
								t = e.find("." + r.className.active),
								n = h ? e.find(a.side).eq(h) : 0 < t.next(a.side).length ? t.next(a.side) : e.find(a.side).first(),
								i = "next" == r.width ? n.outerWidth(!0) : "initial" == r.width ? d.width() : r.width,
								o = "next" == r.height ? n.outerHeight(!0) : "initial" == r.height ? d.height() : r.height;
							t.removeClass(l.active), n.addClass(l.active), e.insertAfter(d), e.remove(), "auto" != r.width && (d.css("width", i + r.jitter), s.verbose("Specifying width during animation", i)), "auto" != r.height && (d.css("height", o + r.jitter), s.verbose("Specifying height during animation", o))
						},
						nextSide: function (e) {
							h = e, o = f.filter(e), h = f.index(o), 0 === o.length && (s.set.defaultSide(), s.error(n.side)), s.verbose("Next side manually set to", o)
						},
						active: function () {
							s.verbose("Setting new side to active", o), f.removeClass(l.active), o.addClass(l.active), r.onChange.call(o[0]), s.set.defaultSide()
						}
					},
					flip: {
						up: function () {
							if (!s.is.complete() || s.is.animating() || r.allowRepeats)
								if (s.is.animating()) s.queue("flip up");
								else {
									s.debug("Flipping up", o);
									var e = s.get.transform.up();
									s.set.stageSize(), s.stage.above(), s.animate(e)
								} else s.debug("Side already visible", o)
						},
						down: function () {
							if (!s.is.complete() || s.is.animating() || r.allowRepeats)
								if (s.is.animating()) s.queue("flip down");
								else {
									s.debug("Flipping down", o);
									var e = s.get.transform.down();
									s.set.stageSize(), s.stage.below(), s.animate(e)
								} else s.debug("Side already visible", o)
						},
						left: function () {
							if (!s.is.complete() || s.is.animating() || r.allowRepeats)
								if (s.is.animating()) s.queue("flip left");
								else {
									s.debug("Flipping left", o);
									var e = s.get.transform.left();
									s.set.stageSize(), s.stage.left(), s.animate(e)
								} else s.debug("Side already visible", o)
						},
						right: function () {
							if (!s.is.complete() || s.is.animating() || r.allowRepeats)
								if (s.is.animating()) s.queue("flip right");
								else {
									s.debug("Flipping right", o);
									var e = s.get.transform.right();
									s.set.stageSize(), s.stage.right(), s.animate(e)
								} else s.debug("Side already visible", o)
						},
						over: function () {
							!s.is.complete() || s.is.animating() || r.allowRepeats ? s.is.animating() ? s.queue("flip over") : (s.debug("Flipping over", o), s.set.stageSize(), s.stage.behind(), s.animate(s.get.transform.over())) : s.debug("Side already visible", o)
						},
						back: function () {
							!s.is.complete() || s.is.animating() || r.allowRepeats ? s.is.animating() ? s.queue("flip back") : (s.debug("Flipping back", o), s.set.stageSize(), s.stage.behind(), s.animate(s.get.transform.back())) : s.debug("Side already visible", o)
						}
					},
					get: {
						transform: {
							up: function () {
								return {
									transform: "translateY(" + -(i.outerHeight(!0) - o.outerHeight(!0)) / 2 + "px) translateZ(" + -i.outerHeight(!0) / 2 + "px) rotateX(-90deg)"
								}
							},
							down: function () {
								return {
									transform: "translateY(" + -(i.outerHeight(!0) - o.outerHeight(!0)) / 2 + "px) translateZ(" + -i.outerHeight(!0) / 2 + "px) rotateX(90deg)"
								}
							},
							left: function () {
								return {
									transform: "translateX(" + -(i.outerWidth(!0) - o.outerWidth(!0)) / 2 + "px) translateZ(" + -i.outerWidth(!0) / 2 + "px) rotateY(90deg)"
								}
							},
							right: function () {
								return {
									transform: "translateX(" + -(i.outerWidth(!0) - o.outerWidth(!0)) / 2 + "px) translateZ(" + -i.outerWidth(!0) / 2 + "px) rotateY(-90deg)"
								}
							},
							over: function () {
								return {
									transform: "translateX(" + -(i.outerWidth(!0) - o.outerWidth(!0)) / 2 + "px) rotateY(180deg)"
								}
							},
							back: function () {
								return {
									transform: "translateX(" + -(i.outerWidth(!0) - o.outerWidth(!0)) / 2 + "px) rotateY(-180deg)"
								}
							}
						},
						transitionEvent: function () {
							var e, t = E.createElement("element"),
								n = {
									transition: "transitionend",
									OTransition: "oTransitionEnd",
									MozTransition: "transitionend",
									WebkitTransition: "webkitTransitionEnd"
								};
							for (e in n)
								if (t.style[e] !== P) return n[e]
						},
						nextSide: function () {
							return 0 < i.next(a.side).length ? i.next(a.side) : d.find(a.side).first()
						}
					},
					stage: {
						above: function () {
							var e = {
								origin: (i.outerHeight(!0) - o.outerHeight(!0)) / 2,
								depth: {
									active: o.outerHeight(!0) / 2,
									next: i.outerHeight(!0) / 2
								}
							};
							s.verbose("Setting the initial animation position as above", o, e), p.css({
								transform: "translateZ(-" + e.depth.active + "px)"
							}), i.css({
								transform: "rotateY(0deg) translateZ(" + e.depth.active + "px)"
							}), o.addClass(l.animating).css({
								top: e.origin + "px",
								transform: "rotateX(90deg) translateZ(" + e.depth.next + "px)"
							})
						},
						below: function () {
							var e = {
								origin: (i.outerHeight(!0) - o.outerHeight(!0)) / 2,
								depth: {
									active: o.outerHeight(!0) / 2,
									next: i.outerHeight(!0) / 2
								}
							};
							s.verbose("Setting the initial animation position as below", o, e), p.css({
								transform: "translateZ(-" + e.depth.active + "px)"
							}), i.css({
								transform: "rotateY(0deg) translateZ(" + e.depth.active + "px)"
							}), o.addClass(l.animating).css({
								top: e.origin + "px",
								transform: "rotateX(-90deg) translateZ(" + e.depth.next + "px)"
							})
						},
						left: function () {
							var e = i.outerWidth(!0),
								t = o.outerWidth(!0),
								n = {
									origin: (e - t) / 2,
									depth: {
										active: t / 2,
										next: e / 2
									}
								};
							s.verbose("Setting the initial animation position as left", o, n), p.css({
								transform: "translateZ(-" + n.depth.active + "px)"
							}), i.css({
								transform: "rotateY(0deg) translateZ(" + n.depth.active + "px)"
							}), o.addClass(l.animating).css({
								left: n.origin + "px",
								transform: "rotateY(-90deg) translateZ(" + n.depth.next + "px)"
							})
						},
						right: function () {
							var e = i.outerWidth(!0),
								t = o.outerWidth(!0),
								n = {
									origin: (e - t) / 2,
									depth: {
										active: t / 2,
										next: e / 2
									}
								};
							s.verbose("Setting the initial animation position as left", o, n), p.css({
								transform: "translateZ(-" + n.depth.active + "px)"
							}), i.css({
								transform: "rotateY(0deg) translateZ(" + n.depth.active + "px)"
							}), o.addClass(l.animating).css({
								left: n.origin + "px",
								transform: "rotateY(90deg) translateZ(" + n.depth.next + "px)"
							})
						},
						behind: function () {
							var e = i.outerWidth(!0),
								t = o.outerWidth(!0),
								n = {
									origin: (e - t) / 2,
									depth: {
										active: t / 2,
										next: e / 2
									}
								};
							s.verbose("Setting the initial animation position as behind", o, n), i.css({
								transform: "rotateY(0deg)"
							}), o.addClass(l.animating).css({
								left: n.origin + "px",
								transform: "rotateY(-180deg)"
							})
						}
					},
					setting: function (e, t) {
						if (s.debug("Changing setting", e, t), A.isPlainObject(e)) A.extend(!0, r, e);
						else {
							if (t === P) return r[e];
							A.isPlainObject(r[e]) ? A.extend(!0, r[e], t) : r[e] = t
						}
					},
					internal: function (e, t) {
						if (A.isPlainObject(e)) A.extend(!0, s, e);
						else {
							if (t === P) return s[e];
							s[e] = t
						}
					},
					debug: function () {
						!r.silent && r.debug && (r.performance ? s.performance.log(arguments) : (s.debug = Function.prototype.bind.call(console.info, console, r.name + ":"), s.debug.apply(console, arguments)))
					},
					verbose: function () {
						!r.silent && r.verbose && r.debug && (r.performance ? s.performance.log(arguments) : (s.verbose = Function.prototype.bind.call(console.info, console, r.name + ":"), s.verbose.apply(console, arguments)))
					},
					error: function () {
						r.silent || (s.error = Function.prototype.bind.call(console.error, console, r.name + ":"), s.error.apply(console, arguments))
					},
					performance: {
						log: function (e) {
							var t, n;
							r.performance && (n = (t = (new Date).getTime()) - (w || t), w = t, x.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: g,
								"Execution Time": n
							})), clearTimeout(s.performance.timer), s.performance.timer = setTimeout(s.performance.display, 500)
						},
						display: function () {
							var e = r.name + ":",
								n = 0;
							w = !1, clearTimeout(s.performance.timer), A.each(x, function (e, t) {
								n += t["Execution Time"]
							}), e += " " + n + "ms", t && (e += " '" + t + "'"), 1 < y.length && (e += " (" + y.length + ")"), (console.group !== P || console.table !== P) && 0 < x.length && (console.groupCollapsed(e), console.table ? console.table(x) : A.each(x, function (e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), x = []
						}
					},
					invoke: function (i, e, t) {
						var o, s, n, r = m;
						return e = e || S, t = g || t, "string" == typeof i && r !== P && (i = i.split(/[\. ]/), o = i.length - 1, A.each(i, function (e, t) {
							var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
							if (A.isPlainObject(r[n]) && e != o) r = r[n];
							else {
								if (r[n] !== P) return s = r[n], !1;
								if (!A.isPlainObject(r[t]) || e == o) return r[t] !== P && (s = r[t]), !1;
								r = r[t]
							}
						})), A.isFunction(s) ? n = s.apply(t, e) : s !== P && (n = s), A.isArray(b) ? b.push(n) : b !== P ? b = [b, n] : n !== P && (b = n), s
					}
				}, k ? (m === P && s.initialize(), s.invoke(C)) : (m !== P && m.invoke("destroy"), s.initialize())
			}), b !== P ? b : this
		}, A.fn.shape.settings = {
			name: "Shape",
			silent: !1,
			debug: !1,
			verbose: !1,
			jitter: 0,
			performance: !0,
			namespace: "shape",
			width: "initial",
			height: "initial",
			beforeChange: function () { },
			onChange: function () { },
			allowRepeats: !1,
			duration: !1,
			error: {
				side: "You tried to switch to a side that does not exist.",
				method: "The method you called is not defined"
			},
			className: {
				animating: "animating",
				hidden: "hidden",
				loading: "loading",
				active: "active"
			},
			selector: {
				sides: ".sides",
				side: ".side"
			}
		}
	}(jQuery, window, document),
	function (_, j, F, L) {
		"use strict";
		j = void 0 !== j && j.Math == Math ? j : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), _.fn.sidebar = function (w) {
			var x, e = _(this),
				C = _(j),
				k = _(F),
				S = _("html"),
				T = _("head"),
				A = e.selector || "",
				E = (new Date).getTime(),
				P = [],
				D = w,
				O = "string" == typeof D,
				$ = [].slice.call(arguments, 1),
				R = j.requestAnimationFrame || j.mozRequestAnimationFrame || j.webkitRequestAnimationFrame || j.msRequestAnimationFrame || function (e) {
					setTimeout(e, 0)
				};
			return e.each(function () {
				var r, a, e, t, l, c, u = _.isPlainObject(w) ? _.extend(!0, {}, _.fn.sidebar.settings, w) : _.extend({}, _.fn.sidebar.settings),
					n = u.selector,
					s = u.className,
					i = u.namespace,
					o = u.regExp,
					d = u.error,
					p = "." + i,
					f = "module-" + i,
					h = _(this),
					g = _(u.context),
					m = h.children(n.sidebar),
					v = (g.children(n.fixed), g.children(n.pusher)),
					b = this,
					y = h.data(f);
				c = {
					initialize: function () {
						c.debug("Initializing sidebar", w), c.create.id(), l = c.get.transitionEvent(), u.delaySetup ? R(c.setup.layout) : c.setup.layout(), R(function () {
							c.setup.cache()
						}), c.instantiate()
					},
					instantiate: function () {
						c.verbose("Storing instance of module", c), y = c, h.data(f, c)
					},
					create: {
						id: function () {
							e = (Math.random().toString(16) + "000000000").substr(2, 8), a = "." + e, c.verbose("Creating unique id for element", e)
						}
					},
					destroy: function () {
						c.verbose("Destroying previous module for", h), h.off(p).removeData(f), c.is.ios() && c.remove.ios(), g.off(a), C.off(a), k.off(a)
					},
					event: {
						clickaway: function (e) {
							var t = 0 < v.find(e.target).length || v.is(e.target),
								n = g.is(e.target);
							t && (c.verbose("User clicked on dimmed page"), c.hide()), n && (c.verbose("User clicked on dimmable context (scaled out page)"), c.hide())
						},
						touch: function (e) { },
						containScroll: function (e) {
							b.scrollTop <= 0 && (b.scrollTop = 1), b.scrollTop + b.offsetHeight >= b.scrollHeight && (b.scrollTop = b.scrollHeight - b.offsetHeight - 1)
						},
						scroll: function (e) {
							0 === _(e.target).closest(n.sidebar).length && e.preventDefault()
						}
					},
					bind: {
						clickaway: function () {
							c.verbose("Adding clickaway events to context", g), u.closable && g.on("click" + a, c.event.clickaway).on("touchend" + a, c.event.clickaway)
						},
						scrollLock: function () {
							u.scrollLock && (c.debug("Disabling page scroll"), C.on("DOMMouseScroll" + a, c.event.scroll)), c.verbose("Adding events to contain sidebar scroll"), k.on("touchmove" + a, c.event.touch), h.on("scroll" + p, c.event.containScroll)
						}
					},
					unbind: {
						clickaway: function () {
							c.verbose("Removing clickaway events from context", g), g.off(a)
						},
						scrollLock: function () {
							c.verbose("Removing scroll lock from page"), k.off(a), C.off(a), h.off("scroll" + p)
						}
					},
					add: {
						inlineCSS: function () {
							var e, t = c.cache.width || h.outerWidth(),
								n = c.cache.height || h.outerHeight(),
								i = c.is.rtl(),
								o = c.get.direction(),
								s = {
									left: t,
									right: -t,
									top: n,
									bottom: -n
								};
							i && (c.verbose("RTL detected, flipping widths"), s.left = -t, s.right = t), e = "<style>", "left" === o || "right" === o ? (c.debug("Adding CSS rules for animation distance", t), e += " .ui.visible." + o + ".sidebar ~ .fixed, .ui.visible." + o + ".sidebar ~ .pusher {   -webkit-transform: translate3d(" + s[o] + "px, 0, 0);           transform: translate3d(" + s[o] + "px, 0, 0); }") : "top" !== o && "bottom" != o || (e += " .ui.visible." + o + ".sidebar ~ .fixed, .ui.visible." + o + ".sidebar ~ .pusher {   -webkit-transform: translate3d(0, " + s[o] + "px, 0);           transform: translate3d(0, " + s[o] + "px, 0); }"), c.is.ie() && ("left" === o || "right" === o ? (c.debug("Adding CSS rules for animation distance", t), e += " body.pushable > .ui.visible." + o + ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(" + s[o] + "px, 0, 0);           transform: translate3d(" + s[o] + "px, 0, 0); }") : "top" !== o && "bottom" != o || (e += " body.pushable > .ui.visible." + o + ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, " + s[o] + "px, 0);           transform: translate3d(0, " + s[o] + "px, 0); }"), e += " body.pushable > .ui.visible.left.sidebar ~ .ui.visible.right.sidebar ~ .pusher:after, body.pushable > .ui.visible.right.sidebar ~ .ui.visible.left.sidebar ~ .pusher:after {   -webkit-transform: translate3d(0px, 0, 0);           transform: translate3d(0px, 0, 0); }"), r = _(e += "</style>").appendTo(T), c.debug("Adding sizing css to head", r)
						}
					},
					refresh: function () {
						c.verbose("Refreshing selector cache"), g = _(u.context), m = g.children(n.sidebar), v = g.children(n.pusher), g.children(n.fixed), c.clear.cache()
					},
					refreshSidebars: function () {
						c.verbose("Refreshing other sidebars"), m = g.children(n.sidebar)
					},
					repaint: function () {
						c.verbose("Forcing repaint event"), b.style.display = "none", b.offsetHeight, b.scrollTop = b.scrollTop, b.style.display = ""
					},
					setup: {
						cache: function () {
							c.cache = {
								width: h.outerWidth(),
								height: h.outerHeight(),
								rtl: "rtl" == h.css("direction")
							}
						},
						layout: function () {
							0 === g.children(n.pusher).length && (c.debug("Adding wrapper element for sidebar"), c.error(d.pusher), v = _('<div class="pusher" />'), g.children().not(n.omitted).not(m).wrapAll(v), c.refresh()), 0 !== h.nextAll(n.pusher).length && h.nextAll(n.pusher)[0] === v[0] || (c.debug("Moved sidebar to correct parent element"), c.error(d.movedSidebar, b), h.detach().prependTo(g), c.refresh()), c.clear.cache(), c.set.pushable(), c.set.direction()
						}
					},
					attachEvents: function (e, t) {
						var n = _(e);
						t = _.isFunction(c[t]) ? c[t] : c.toggle, 0 < n.length ? (c.debug("Attaching sidebar events to element", e, t), n.on("click" + p, t)) : c.error(d.notFound, e)
					},
					show: function (e) {
						if (e = _.isFunction(e) ? e : function () { }, c.is.hidden()) {
							if (c.refreshSidebars(), u.overlay && (c.error(d.overlay), u.transition = "overlay"), c.refresh(), c.othersActive())
								if (c.debug("Other sidebars currently visible"), u.exclusive) {
									if ("overlay" != u.transition) return void c.hideOthers(c.show);
									c.hideOthers()
								} else u.transition = "overlay";
							c.pushPage(function () {
								e.call(b), u.onShow.call(b)
							}), u.onChange.call(b), u.onVisible.call(b)
						} else c.debug("Sidebar is already visible")
					},
					hide: function (e) {
						e = _.isFunction(e) ? e : function () { }, (c.is.visible() || c.is.animating()) && (c.debug("Hiding sidebar", e), c.refreshSidebars(), c.pullPage(function () {
							e.call(b), u.onHidden.call(b)
						}), u.onChange.call(b), u.onHide.call(b))
					},
					othersAnimating: function () {
						return 0 < m.not(h).filter("." + s.animating).length
					},
					othersVisible: function () {
						return 0 < m.not(h).filter("." + s.visible).length
					},
					othersActive: function () {
						return c.othersVisible() || c.othersAnimating()
					},
					hideOthers: function (e) {
						var t = m.not(h).filter("." + s.visible),
							n = t.length,
							i = 0;
						e = e || function () { }, t.sidebar("hide", function () {
							++i == n && e()
						})
					},
					toggle: function () {
						c.verbose("Determining toggled direction"), c.is.hidden() ? c.show() : c.hide()
					},
					pushPage: function (t) {
						var e, n, i, o = c.get.transition(),
							s = "overlay" === o || c.othersActive() ? h : v;
						t = _.isFunction(t) ? t : function () { }, "scale down" == u.transition && c.scrollToTop(), c.set.transition(o), c.repaint(), e = function () {
							c.bind.clickaway(), c.add.inlineCSS(), c.set.animating(), c.set.visible()
						}, n = function () {
							c.set.dimmed()
						}, i = function (e) {
							e.target == s[0] && (s.off(l + a, i), c.remove.animating(), c.bind.scrollLock(), t.call(b))
						}, s.off(l + a), s.on(l + a, i), R(e), u.dimPage && !c.othersVisible() && R(n)
					},
					pullPage: function (t) {
						var e, n, i = c.get.transition(),
							o = "overlay" == i || c.othersActive() ? h : v;
						t = _.isFunction(t) ? t : function () { }, c.verbose("Removing context push state", c.get.direction()), c.unbind.clickaway(), c.unbind.scrollLock(), e = function () {
							c.set.transition(i), c.set.animating(), c.remove.visible(), u.dimPage && !c.othersVisible() && v.removeClass(s.dimmed)
						}, n = function (e) {
							e.target == o[0] && (o.off(l + a, n), c.remove.animating(), c.remove.transition(), c.remove.inlineCSS(), ("scale down" == i || u.returnScroll && c.is.mobile()) && c.scrollBack(), t.call(b))
						}, o.off(l + a), o.on(l + a, n), R(e)
					},
					scrollToTop: function () {
						c.verbose("Scrolling to top of page to avoid animation issues"), t = _(j).scrollTop(), h.scrollTop(0), j.scrollTo(0, 0)
					},
					scrollBack: function () {
						c.verbose("Scrolling back to original page position"), j.scrollTo(0, t)
					},
					clear: {
						cache: function () {
							c.verbose("Clearing cached dimensions"), c.cache = {}
						}
					},
					set: {
						ios: function () {
							S.addClass(s.ios)
						},
						pushed: function () {
							g.addClass(s.pushed)
						},
						pushable: function () {
							g.addClass(s.pushable)
						},
						dimmed: function () {
							v.addClass(s.dimmed)
						},
						active: function () {
							h.addClass(s.active)
						},
						animating: function () {
							h.addClass(s.animating)
						},
						transition: function (e) {
							e = e || c.get.transition(), h.addClass(e)
						},
						direction: function (e) {
							e = e || c.get.direction(), h.addClass(s[e])
						},
						visible: function () {
							h.addClass(s.visible)
						},
						overlay: function () {
							h.addClass(s.overlay)
						}
					},
					remove: {
						inlineCSS: function () {
							c.debug("Removing inline css styles", r), r && 0 < r.length && r.remove()
						},
						ios: function () {
							S.removeClass(s.ios)
						},
						pushed: function () {
							g.removeClass(s.pushed)
						},
						pushable: function () {
							g.removeClass(s.pushable)
						},
						active: function () {
							h.removeClass(s.active)
						},
						animating: function () {
							h.removeClass(s.animating)
						},
						transition: function (e) {
							e = e || c.get.transition(), h.removeClass(e)
						},
						direction: function (e) {
							e = e || c.get.direction(), h.removeClass(s[e])
						},
						visible: function () {
							h.removeClass(s.visible)
						},
						overlay: function () {
							h.removeClass(s.overlay)
						}
					},
					get: {
						direction: function () {
							return h.hasClass(s.top) ? s.top : h.hasClass(s.right) ? s.right : h.hasClass(s.bottom) ? s.bottom : s.left
						},
						transition: function () {
							var e, t = c.get.direction();
							return e = c.is.mobile() ? "auto" == u.mobileTransition ? u.defaultTransition.mobile[t] : u.mobileTransition : "auto" == u.transition ? u.defaultTransition.computer[t] : u.transition, c.verbose("Determined transition", e), e
						},
						transitionEvent: function () {
							var e, t = F.createElement("element"),
								n = {
									transition: "transitionend",
									OTransition: "oTransitionEnd",
									MozTransition: "transitionend",
									WebkitTransition: "webkitTransitionEnd"
								};
							for (e in n)
								if (t.style[e] !== L) return n[e]
						}
					},
					is: {
						ie: function () {
							return !j.ActiveXObject && "ActiveXObject" in j || "ActiveXObject" in j
						},
						ios: function () {
							var e = navigator.userAgent,
								t = e.match(o.ios),
								n = e.match(o.mobileChrome);
							return !(!t || n || (c.verbose("Browser was found to be iOS", e), 0))
						},
						mobile: function () {
							var e = navigator.userAgent;
							return e.match(o.mobile) ? (c.verbose("Browser was found to be mobile", e), !0) : (c.verbose("Browser is not mobile, using regular transition", e), !1)
						},
						hidden: function () {
							return !c.is.visible()
						},
						visible: function () {
							return h.hasClass(s.visible)
						},
						open: function () {
							return c.is.visible()
						},
						closed: function () {
							return c.is.hidden()
						},
						vertical: function () {
							return h.hasClass(s.top)
						},
						animating: function () {
							return g.hasClass(s.animating)
						},
						rtl: function () {
							return c.cache.rtl === L && (c.cache.rtl = "rtl" == h.css("direction")), c.cache.rtl
						}
					},
					setting: function (e, t) {
						if (c.debug("Changing setting", e, t), _.isPlainObject(e)) _.extend(!0, u, e);
						else {
							if (t === L) return u[e];
							_.isPlainObject(u[e]) ? _.extend(!0, u[e], t) : u[e] = t
						}
					},
					internal: function (e, t) {
						if (_.isPlainObject(e)) _.extend(!0, c, e);
						else {
							if (t === L) return c[e];
							c[e] = t
						}
					},
					debug: function () {
						!u.silent && u.debug && (u.performance ? c.performance.log(arguments) : (c.debug = Function.prototype.bind.call(console.info, console, u.name + ":"), c.debug.apply(console, arguments)))
					},
					verbose: function () {
						!u.silent && u.verbose && u.debug && (u.performance ? c.performance.log(arguments) : (c.verbose = Function.prototype.bind.call(console.info, console, u.name + ":"), c.verbose.apply(console, arguments)))
					},
					error: function () {
						u.silent || (c.error = Function.prototype.bind.call(console.error, console, u.name + ":"), c.error.apply(console, arguments))
					},
					performance: {
						log: function (e) {
							var t, n;
							u.performance && (n = (t = (new Date).getTime()) - (E || t), E = t, P.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: b,
								"Execution Time": n
							})), clearTimeout(c.performance.timer), c.performance.timer = setTimeout(c.performance.display, 500)
						},
						display: function () {
							var e = u.name + ":",
								n = 0;
							E = !1, clearTimeout(c.performance.timer), _.each(P, function (e, t) {
								n += t["Execution Time"]
							}), e += " " + n + "ms", A && (e += " '" + A + "'"), (console.group !== L || console.table !== L) && 0 < P.length && (console.groupCollapsed(e), console.table ? console.table(P) : _.each(P, function (e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), P = []
						}
					},
					invoke: function (i, e, t) {
						var o, s, n, r = y;
						return e = e || $, t = b || t, "string" == typeof i && r !== L && (i = i.split(/[\. ]/), o = i.length - 1, _.each(i, function (e, t) {
							var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
							if (_.isPlainObject(r[n]) && e != o) r = r[n];
							else {
								if (r[n] !== L) return s = r[n], !1;
								if (!_.isPlainObject(r[t]) || e == o) return r[t] !== L ? s = r[t] : c.error(d.method, i), !1;
								r = r[t]
							}
						})), _.isFunction(s) ? n = s.apply(t, e) : s !== L && (n = s), _.isArray(x) ? x.push(n) : x !== L ? x = [x, n] : n !== L && (x = n), s
					}
				}, O ? (y === L && c.initialize(), c.invoke(D)) : (y !== L && c.invoke("destroy"), c.initialize())
			}), x !== L ? x : this
		}, _.fn.sidebar.settings = {
			name: "Sidebar",
			namespace: "sidebar",
			silent: !1,
			debug: !1,
			verbose: !1,
			performance: !0,
			transition: "auto",
			mobileTransition: "auto",
			defaultTransition: {
				computer: {
					left: "uncover",
					right: "uncover",
					top: "overlay",
					bottom: "overlay"
				},
				mobile: {
					left: "uncover",
					right: "uncover",
					top: "overlay",
					bottom: "overlay"
				}
			},
			context: "body",
			exclusive: !1,
			closable: !0,
			dimPage: !0,
			scrollLock: !1,
			returnScroll: !1,
			delaySetup: !1,
			duration: 500,
			onChange: function () { },
			onShow: function () { },
			onHide: function () { },
			onHidden: function () { },
			onVisible: function () { },
			className: {
				active: "active",
				animating: "animating",
				dimmed: "dimmed",
				ios: "ios",
				pushable: "pushable",
				pushed: "pushed",
				right: "right",
				top: "top",
				left: "left",
				bottom: "bottom",
				visible: "visible"
			},
			selector: {
				fixed: ".fixed",
				omitted: "script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed",
				pusher: ".pusher",
				sidebar: ".ui.sidebar"
			},
			regExp: {
				ios: /(iPad|iPhone|iPod)/g,
				mobileChrome: /(CriOS)/g,
				mobile: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g
			},
			error: {
				method: "The method you called is not defined.",
				pusher: "Had to add pusher element. For optimal performance make sure body content is inside a pusher element",
				movedSidebar: "Had to move sidebar. For optimal performance make sure sidebar and pusher are direct children of your body tag",
				overlay: "The overlay setting is no longer supported, use animation: overlay",
				notFound: "There were no elements that matched the specified selector"
			}
		}
	}(jQuery, window, document),
	function (T, A, E, P) {
		"use strict";
		A = void 0 !== A && A.Math == Math ? A : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), T.fn.sticky = function (v) {
			var b, e = T(this),
				y = e.selector || "",
				w = (new Date).getTime(),
				x = [],
				C = v,
				k = "string" == typeof C,
				S = [].slice.call(arguments, 1);
			return e.each(function () {
				var i, o, e, t, d, p = T.isPlainObject(v) ? T.extend(!0, {}, T.fn.sticky.settings, v) : T.extend({}, T.fn.sticky.settings),
					n = p.className,
					s = p.namespace,
					r = p.error,
					a = "." + s,
					l = "module-" + s,
					c = T(this),
					u = T(A),
					f = T(p.scrollContext),
					h = (c.selector, c.data(l)),
					g = A.requestAnimationFrame || A.mozRequestAnimationFrame || A.webkitRequestAnimationFrame || A.msRequestAnimationFrame || function (e) {
						setTimeout(e, 0)
					},
					m = this;
				d = {
					initialize: function () {
						d.determineContainer(), d.determineContext(), d.verbose("Initializing sticky", p, i), d.save.positions(), d.checkErrors(), d.bind.events(), p.observeChanges && d.observeChanges(), d.instantiate()
					},
					instantiate: function () {
						d.verbose("Storing instance of module", d), h = d, c.data(l, d)
					},
					destroy: function () {
						d.verbose("Destroying previous instance"), d.reset(), e && e.disconnect(), t && t.disconnect(), u.off("load" + a, d.event.load).off("resize" + a, d.event.resize), f.off("scrollchange" + a, d.event.scrollchange), c.removeData(l)
					},
					observeChanges: function () {
						"MutationObserver" in A && (e = new MutationObserver(d.event.documentChanged), t = new MutationObserver(d.event.changed), e.observe(E, {
							childList: !0,
							subtree: !0
						}), t.observe(m, {
							childList: !0,
							subtree: !0
						}), t.observe(o[0], {
							childList: !0,
							subtree: !0
						}), d.debug("Setting up mutation observer", t))
					},
					determineContainer: function () {
						i = p.container ? T(p.container) : c.offsetParent()
					},
					determineContext: function () {
						0 !== (o = p.context ? T(p.context) : i).length || d.error(r.invalidContext, p.context, c)
					},
					checkErrors: function () {
						if (d.is.hidden() && d.error(r.visible, c), d.cache.element.height > d.cache.context.height) return d.reset(), void d.error(r.elementSize, c)
					},
					bind: {
						events: function () {
							u.on("load" + a, d.event.load).on("resize" + a, d.event.resize), f.off("scroll" + a).on("scroll" + a, d.event.scroll).on("scrollchange" + a, d.event.scrollchange)
						}
					},
					event: {
						changed: function (e) {
							clearTimeout(d.timer), d.timer = setTimeout(function () {
								d.verbose("DOM tree modified, updating sticky menu", e), d.refresh()
							}, 100)
						},
						documentChanged: function (e) {
							[].forEach.call(e, function (e) {
								e.removedNodes && [].forEach.call(e.removedNodes, function (e) {
									(e == m || 0 < T(e).find(m).length) && (d.debug("Element removed from DOM, tearing down events"), d.destroy())
								})
							})
						},
						load: function () {
							d.verbose("Page contents finished loading"), g(d.refresh)
						},
						resize: function () {
							d.verbose("Window resized"), g(d.refresh)
						},
						scroll: function () {
							g(function () {
								f.triggerHandler("scrollchange" + a, f.scrollTop())
							})
						},
						scrollchange: function (e, t) {
							d.stick(t), p.onScroll.call(m)
						}
					},
					refresh: function (e) {
						d.reset(), p.context || d.determineContext(), e && d.determineContainer(), d.save.positions(), d.stick(), p.onReposition.call(m)
					},
					supports: {
						sticky: function () {
							var e = T("<div/>");
							return e[0], e.addClass(n.supported), e.css("position").match("sticky")
						}
					},
					save: {
						lastScroll: function (e) {
							d.lastScroll = e
						},
						elementScroll: function (e) {
							d.elementScroll = e
						},
						positions: function () {
							var e = {
								height: f.height()
							},
								t = {
									margin: {
										top: parseInt(c.css("margin-top"), 10),
										bottom: parseInt(c.css("margin-bottom"), 10)
									},
									offset: c.offset(),
									width: c.outerWidth(),
									height: c.outerHeight()
								},
								n = {
									offset: o.offset(),
									height: o.outerHeight()
								};
							i.outerHeight(), d.is.standardScroll() || (d.debug("Non-standard scroll. Removing scroll offset from element offset"), e.top = f.scrollTop(), e.left = f.scrollLeft(), t.offset.top += e.top, n.offset.top += e.top, t.offset.left += e.left, n.offset.left += e.left), d.cache = {
								fits: t.height + p.offset <= e.height,
								sameHeight: t.height == n.height,
								scrollContext: {
									height: e.height
								},
								element: {
									margin: t.margin,
									top: t.offset.top - t.margin.top,
									left: t.offset.left,
									width: t.width,
									height: t.height,
									bottom: t.offset.top + t.height
								},
								context: {
									top: n.offset.top,
									height: n.height,
									bottom: n.offset.top + n.height
								}
							}, d.set.containerSize(), d.stick(), d.debug("Caching element positions", d.cache)
						}
					},
					get: {
						direction: function (e) {
							var t = "down";
							return e = e || f.scrollTop(), d.lastScroll !== P && (d.lastScroll < e ? t = "down" : d.lastScroll > e && (t = "up")), t
						},
						scrollChange: function (e) {
							return e = e || f.scrollTop(), d.lastScroll ? e - d.lastScroll : 0
						},
						currentElementScroll: function () {
							return d.elementScroll ? d.elementScroll : d.is.top() ? Math.abs(parseInt(c.css("top"), 10)) || 0 : Math.abs(parseInt(c.css("bottom"), 10)) || 0
						},
						elementScroll: function (e) {
							e = e || f.scrollTop();
							var t = d.cache.element,
								n = d.cache.scrollContext,
								i = d.get.scrollChange(e),
								o = t.height - n.height + p.offset,
								s = d.get.currentElementScroll() + i;
							return d.cache.fits || s < 0 ? 0 : o < s ? o : s
						}
					},
					remove: {
						lastScroll: function () {
							delete d.lastScroll
						},
						elementScroll: function (e) {
							delete d.elementScroll
						},
						minimumSize: function () {
							i.css("min-height", "")
						},
						offset: function () {
							c.css("margin-top", "")
						}
					},
					set: {
						offset: function () {
							d.verbose("Setting offset on element", p.offset), c.css("margin-top", p.offset)
						},
						containerSize: function () {
							var e = i.get(0).tagName;
							"HTML" === e || "body" == e ? d.determineContainer() : Math.abs(i.outerHeight() - d.cache.context.height) > p.jitter && (d.debug("Context has padding, specifying exact height for container", d.cache.context.height), i.css({
								height: d.cache.context.height
							}))
						},
						minimumSize: function () {
							var e = d.cache.element;
							i.css("min-height", e.height)
						},
						scroll: function (e) {
							d.debug("Setting scroll on element", e), d.elementScroll != e && (d.is.top() && c.css("bottom", "").css("top", -e), d.is.bottom() && c.css("top", "").css("bottom", e))
						},
						size: function () {
							0 !== d.cache.element.height && 0 !== d.cache.element.width && (m.style.setProperty("width", d.cache.element.width + "px", "important"), m.style.setProperty("height", d.cache.element.height + "px", "important"))
						}
					},
					is: {
						standardScroll: function () {
							return f[0] == A
						},
						top: function () {
							return c.hasClass(n.top)
						},
						bottom: function () {
							return c.hasClass(n.bottom)
						},
						initialPosition: function () {
							return !d.is.fixed() && !d.is.bound()
						},
						hidden: function () {
							return !c.is(":visible")
						},
						bound: function () {
							return c.hasClass(n.bound)
						},
						fixed: function () {
							return c.hasClass(n.fixed)
						}
					},
					stick: function (e) {
						var t = e || f.scrollTop(),
							n = d.cache,
							i = n.fits,
							o = n.sameHeight,
							s = n.element,
							r = n.scrollContext,
							a = n.context,
							l = d.is.bottom() && p.pushing ? p.bottomOffset : p.offset,
							c = (e = {
								top: t + l,
								bottom: t + l + r.height
							}, d.get.direction(e.top), i ? 0 : d.get.elementScroll(e.top)),
							u = !i;
						0 !== s.height && !o && (d.is.initialPosition() ? e.top >= a.bottom ? (d.debug("Initial element position is bottom of container"), d.bindBottom()) : e.top > s.top && (s.height + e.top - c >= a.bottom ? (d.debug("Initial element position is bottom of container"), d.bindBottom()) : (d.debug("Initial element position is fixed"), d.fixTop())) : d.is.fixed() ? d.is.top() ? e.top <= s.top ? (d.debug("Fixed element reached top of container"), d.setInitialPosition()) : s.height + e.top - c >= a.bottom ? (d.debug("Fixed element reached bottom of container"), d.bindBottom()) : u && (d.set.scroll(c), d.save.lastScroll(e.top), d.save.elementScroll(c)) : d.is.bottom() && (e.bottom - s.height <= s.top ? (d.debug("Bottom fixed rail has reached top of container"), d.setInitialPosition()) : e.bottom >= a.bottom ? (d.debug("Bottom fixed rail has reached bottom of container"), d.bindBottom()) : u && (d.set.scroll(c), d.save.lastScroll(e.top), d.save.elementScroll(c))) : d.is.bottom() && (e.top <= s.top ? (d.debug("Jumped from bottom fixed to top fixed, most likely used home/end button"), d.setInitialPosition()) : p.pushing ? d.is.bound() && e.bottom <= a.bottom && (d.debug("Fixing bottom attached element to bottom of browser."), d.fixBottom()) : d.is.bound() && e.top <= a.bottom - s.height && (d.debug("Fixing bottom attached element to top of browser."), d.fixTop())))
					},
					bindTop: function () {
						d.debug("Binding element to top of parent container"), d.remove.offset(), c.css({
							left: "",
							top: "",
							marginBottom: ""
						}).removeClass(n.fixed).removeClass(n.bottom).addClass(n.bound).addClass(n.top), p.onTop.call(m), p.onUnstick.call(m)
					},
					bindBottom: function () {
						d.debug("Binding element to bottom of parent container"), d.remove.offset(), c.css({
							left: "",
							top: ""
						}).removeClass(n.fixed).removeClass(n.top).addClass(n.bound).addClass(n.bottom), p.onBottom.call(m), p.onUnstick.call(m)
					},
					setInitialPosition: function () {
						d.debug("Returning to initial position"), d.unfix(), d.unbind()
					},
					fixTop: function () {
						d.debug("Fixing element to top of page"), p.setSize && d.set.size(), d.set.minimumSize(), d.set.offset(), c.css({
							left: d.cache.element.left,
							bottom: "",
							marginBottom: ""
						}).removeClass(n.bound).removeClass(n.bottom).addClass(n.fixed).addClass(n.top), p.onStick.call(m)
					},
					fixBottom: function () {
						d.debug("Sticking element to bottom of page"), p.setSize && d.set.size(), d.set.minimumSize(), d.set.offset(), c.css({
							left: d.cache.element.left,
							bottom: "",
							marginBottom: ""
						}).removeClass(n.bound).removeClass(n.top).addClass(n.fixed).addClass(n.bottom), p.onStick.call(m)
					},
					unbind: function () {
						d.is.bound() && (d.debug("Removing container bound position on element"), d.remove.offset(), c.removeClass(n.bound).removeClass(n.top).removeClass(n.bottom))
					},
					unfix: function () {
						d.is.fixed() && (d.debug("Removing fixed position on element"), d.remove.minimumSize(), d.remove.offset(), c.removeClass(n.fixed).removeClass(n.top).removeClass(n.bottom), p.onUnstick.call(m))
					},
					reset: function () {
						d.debug("Resetting elements position"), d.unbind(), d.unfix(), d.resetCSS(), d.remove.offset(), d.remove.lastScroll()
					},
					resetCSS: function () {
						c.css({
							width: "",
							height: ""
						}), i.css({
							height: ""
						})
					},
					setting: function (e, t) {
						if (T.isPlainObject(e)) T.extend(!0, p, e);
						else {
							if (t === P) return p[e];
							p[e] = t
						}
					},
					internal: function (e, t) {
						if (T.isPlainObject(e)) T.extend(!0, d, e);
						else {
							if (t === P) return d[e];
							d[e] = t
						}
					},
					debug: function () {
						!p.silent && p.debug && (p.performance ? d.performance.log(arguments) : (d.debug = Function.prototype.bind.call(console.info, console, p.name + ":"), d.debug.apply(console, arguments)))
					},
					verbose: function () {
						!p.silent && p.verbose && p.debug && (p.performance ? d.performance.log(arguments) : (d.verbose = Function.prototype.bind.call(console.info, console, p.name + ":"), d.verbose.apply(console, arguments)))
					},
					error: function () {
						p.silent || (d.error = Function.prototype.bind.call(console.error, console, p.name + ":"), d.error.apply(console, arguments))
					},
					performance: {
						log: function (e) {
							var t, n;
							p.performance && (n = (t = (new Date).getTime()) - (w || t), w = t, x.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: m,
								"Execution Time": n
							})), clearTimeout(d.performance.timer), d.performance.timer = setTimeout(d.performance.display, 0)
						},
						display: function () {
							var e = p.name + ":",
								n = 0;
							w = !1, clearTimeout(d.performance.timer), T.each(x, function (e, t) {
								n += t["Execution Time"]
							}), e += " " + n + "ms", y && (e += " '" + y + "'"), (console.group !== P || console.table !== P) && 0 < x.length && (console.groupCollapsed(e), console.table ? console.table(x) : T.each(x, function (e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), x = []
						}
					},
					invoke: function (i, e, t) {
						var o, s, n, r = h;
						return e = e || S, t = m || t, "string" == typeof i && r !== P && (i = i.split(/[\. ]/), o = i.length - 1, T.each(i, function (e, t) {
							var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
							if (T.isPlainObject(r[n]) && e != o) r = r[n];
							else {
								if (r[n] !== P) return s = r[n], !1;
								if (!T.isPlainObject(r[t]) || e == o) return r[t] !== P && (s = r[t]), !1;
								r = r[t]
							}
						})), T.isFunction(s) ? n = s.apply(t, e) : s !== P && (n = s), T.isArray(b) ? b.push(n) : b !== P ? b = [b, n] : n !== P && (b = n), s
					}
				}, k ? (h === P && d.initialize(), d.invoke(C)) : (h !== P && h.invoke("destroy"), d.initialize())
			}), b !== P ? b : this
		}, T.fn.sticky.settings = {
			name: "Sticky",
			namespace: "sticky",
			silent: !1,
			debug: !1,
			verbose: !0,
			performance: !0,
			pushing: !1,
			context: !1,
			container: !1,
			scrollContext: A,
			offset: 0,
			bottomOffset: 0,
			jitter: 5,
			setSize: !0,
			observeChanges: !1,
			onReposition: function () { },
			onScroll: function () { },
			onStick: function () { },
			onUnstick: function () { },
			onTop: function () { },
			onBottom: function () { },
			error: {
				container: "Sticky element must be inside a relative container",
				visible: "Element is hidden, you must call refresh after element becomes visible. Use silent setting to surpress this warning in production.",
				method: "The method you called is not defined.",
				invalidContext: "Context specified does not exist",
				elementSize: "Sticky element is larger than its container, cannot create sticky."
			},
			className: {
				bound: "bound",
				fixed: "fixed",
				supported: "native",
				top: "top",
				bottom: "bottom"
			}
		}
	}(jQuery, window, document),
	function (D, O, $, R) {
		"use strict";
		O = void 0 !== O && O.Math == Math ? O : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), D.fn.tab = function (r) {
			var c, u = D.isFunction(this) ? D(O) : D(this),
				d = u.selector || "",
				p = (new Date).getTime(),
				f = [],
				h = r,
				A = "string" == typeof h,
				E = [].slice.call(arguments, 1),
				P = !1;
			return u.each(function () {
				var g, s, m, v, b, y, w = D.isPlainObject(r) ? D.extend(!0, {}, D.fn.tab.settings, r) : D.extend({}, D.fn.tab.settings),
					x = w.className,
					C = w.metadata,
					t = w.selector,
					k = w.error,
					e = "." + w.namespace,
					n = "module-" + w.namespace,
					S = D(this),
					i = {},
					T = !0,
					o = 0,
					a = this,
					l = S.data(n);
				b = {
					initialize: function () {
						b.debug("Initializing tab menu item", S), b.fix.callbacks(), b.determineTabs(), b.debug("Determining tabs", w.context, s), w.auto && b.set.auto(), b.bind.events(), w.history && !P && (b.initializeHistory(), P = !0), b.instantiate()
					},
					instantiate: function () {
						b.verbose("Storing instance of module", b), l = b, S.data(n, b)
					},
					destroy: function () {
						b.debug("Destroying tabs", S), S.removeData(n).off(e)
					},
					bind: {
						events: function () {
							D.isWindow(a) || (b.debug("Attaching tab activation events to element", S), S.on("click" + e, b.event.click))
						}
					},
					determineTabs: function () {
						var e;
						"parent" === w.context ? (0 < S.closest(t.ui).length ? (e = S.closest(t.ui), b.verbose("Using closest UI element as parent", e)) : e = S, g = e.parent(), b.verbose("Determined parent element for creating context", g)) : w.context ? (g = D(w.context), b.verbose("Using selector for tab context", w.context, g)) : g = D("body"), w.childrenOnly ? (s = g.children(t.tabs), b.debug("Searching tab context children for tabs", g, s)) : (s = g.find(t.tabs), b.debug("Searching tab context for tabs", g, s))
					},
					fix: {
						callbacks: function () {
							D.isPlainObject(r) && (r.onTabLoad || r.onTabInit) && (r.onTabLoad && (r.onLoad = r.onTabLoad, delete r.onTabLoad, b.error(k.legacyLoad, r.onLoad)), r.onTabInit && (r.onFirstLoad = r.onTabInit, delete r.onTabInit, b.error(k.legacyInit, r.onFirstLoad)), w = D.extend(!0, {}, D.fn.tab.settings, r))
						}
					},
					initializeHistory: function () {
						if (b.debug("Initializing page state"), D.address === R) return b.error(k.state), !1;
						if ("state" == w.historyType) {
							if (b.debug("Using HTML5 to manage state"), !1 === w.path) return b.error(k.path), !1;
							D.address.history(!0).state(w.path)
						}
						D.address.bind("change", b.event.history.change)
					},
					event: {
						click: function (e) {
							var t = D(this).data(C.tab);
							t !== R ? (w.history ? (b.verbose("Updating page state", e), D.address.value(t)) : (b.verbose("Changing tab", e), b.changeTab(t)), e.preventDefault()) : b.debug("No tab specified")
						},
						history: {
							change: function (e) {
								var t = e.pathNames.join("/") || b.get.initialPath(),
									n = w.templates.determineTitle(t) || !1;
								b.performance.display(), b.debug("History change event", t, e), y = e, t !== R && b.changeTab(t), n && D.address.title(n)
							}
						}
					},
					refresh: function () {
						m && (b.debug("Refreshing tab", m), b.changeTab(m))
					},
					cache: {
						read: function (e) {
							return e !== R && i[e]
						},
						add: function (e, t) {
							e = e || m, b.debug("Adding cached content for", e), i[e] = t
						},
						remove: function (e) {
							e = e || m, b.debug("Removing cached content for", e), delete i[e]
						}
					},
					set: {
						auto: function () {
							var e = "string" == typeof w.path ? w.path.replace(/\/$/, "") + "/{$tab}" : "/{$tab}";
							b.verbose("Setting up automatic tab retrieval from server", e), D.isPlainObject(w.apiSettings) ? w.apiSettings.url = e : w.apiSettings = {
								url: e
							}
						},
						loading: function (e) {
							var t = b.get.tabElement(e);
							t.hasClass(x.loading) || (b.verbose("Setting loading state for", t), t.addClass(x.loading).siblings(s).removeClass(x.active + " " + x.loading), 0 < t.length && w.onRequest.call(t[0], e))
						},
						state: function (e) {
							D.address.value(e)
						}
					},
					changeTab: function (d) {
						var p = O.history && O.history.pushState && w.ignoreFirstLoad && T,
							f = w.auto || D.isPlainObject(w.apiSettings),
							h = f && !p ? b.utilities.pathToArray(d) : b.get.defaultPathArray(d);
						d = b.utilities.arrayToPath(h), D.each(h, function (e, t) {
							var n, i, o, s, r = h.slice(0, e + 1),
								a = b.utilities.arrayToPath(r),
								l = b.is.tab(a),
								c = e + 1 == h.length,
								u = b.get.tabElement(a);
							if (b.verbose("Looking for tab", t), l) {
								if (b.verbose("Tab was found", t), m = a, v = b.utilities.filterArray(h, r), c ? s = !0 : (i = h.slice(0, e + 2), o = b.utilities.arrayToPath(i), (s = !b.is.tab(o)) && b.verbose("Tab parameters found", i)), s && f) return p ? (b.debug("Ignoring remote content on first tab load", a), T = !1, b.cache.add(d, u.html()), b.activate.all(a), w.onFirstLoad.call(u[0], a, v, y), w.onLoad.call(u[0], a, v, y)) : (b.activate.navigation(a), b.fetch.content(a, d)), !1;
								b.debug("Opened local tab", a), b.activate.all(a), b.cache.read(a) || (b.cache.add(a, !0), b.debug("First time tab loaded calling tab init"), w.onFirstLoad.call(u[0], a, v, y)), w.onLoad.call(u[0], a, v, y)
							} else {
								if (-1 != d.search("/") || "" === d) return b.error(k.missingTab, S, g, a), !1;
								if (a = (n = D("#" + d + ', a[name="' + d + '"]')).closest("[data-tab]").data(C.tab), u = b.get.tabElement(a), n && 0 < n.length && a) return b.debug("Anchor link used, opening parent tab", u, n), u.hasClass(x.active) || setTimeout(function () {
									b.scrollTo(n)
								}, 0), b.activate.all(a), b.cache.read(a) || (b.cache.add(a, !0), b.debug("First time tab loaded calling tab init"), w.onFirstLoad.call(u[0], a, v, y)), w.onLoad.call(u[0], a, v, y), !1
							}
						})
					},
					scrollTo: function (e) {
						var t = !!(e && 0 < e.length) && e.offset().top;
						!1 !== t && (b.debug("Forcing scroll to an in-page link in a hidden tab", t, e), D($).scrollTop(t))
					},
					update: {
						content: function (e, t, n) {
							var i = b.get.tabElement(e),
								o = i[0];
							n = n !== R ? n : w.evaluateScripts, "string" == typeof w.cacheType && "dom" == w.cacheType.toLowerCase() && "string" != typeof t ? i.empty().append(D(t).clone(!0)) : n ? (b.debug("Updating HTML and evaluating inline scripts", e, t), i.html(t)) : (b.debug("Updating HTML", e, t), o.innerHTML = t)
						}
					},
					fetch: {
						content: function (t, n) {
							var e, i, o = b.get.tabElement(t),
								s = {
									dataType: "html",
									encodeParameters: !1,
									on: "now",
									cache: w.alwaysRefresh,
									headers: {
										"X-Remote": !0
									},
									onSuccess: function (e) {
										"response" == w.cacheType && b.cache.add(n, e), b.update.content(t, e), t == m ? (b.debug("Content loaded", t), b.activate.tab(t)) : b.debug("Content loaded in background", t), w.onFirstLoad.call(o[0], t, v, y), w.onLoad.call(o[0], t, v, y), w.loadOnce ? b.cache.add(n, !0) : "string" == typeof w.cacheType && "dom" == w.cacheType.toLowerCase() && 0 < o.children().length ? setTimeout(function () {
											var e = o.children().clone(!0);
											e = e.not("script"), b.cache.add(n, e)
										}, 0) : b.cache.add(n, o.html())
									},
									urlData: {
										tab: n
									}
								},
								r = o.api("get request") || !1,
								a = r && "pending" === r.state();
							n = n || t, i = b.cache.read(n), w.cache && i ? (b.activate.tab(t), b.debug("Adding cached content", n), w.loadOnce || ("once" == w.evaluateScripts ? b.update.content(t, i, !1) : b.update.content(t, i)), w.onLoad.call(o[0], t, v, y)) : a ? (b.set.loading(t), b.debug("Content is already loading", n)) : D.api !== R ? (e = D.extend(!0, {}, w.apiSettings, s), b.debug("Retrieving remote content", n, e), b.set.loading(t), o.api(e)) : b.error(k.api)
						}
					},
					activate: {
						all: function (e) {
							b.activate.tab(e), b.activate.navigation(e)
						},
						tab: function (e) {
							var t = b.get.tabElement(e),
								n = "siblings" == w.deactivate ? t.siblings(s) : s.not(t),
								i = t.hasClass(x.active);
							b.verbose("Showing tab content for", t), i || (t.addClass(x.active), n.removeClass(x.active + " " + x.loading), 0 < t.length && w.onVisible.call(t[0], e))
						},
						navigation: function (e) {
							var t = b.get.navElement(e),
								n = "siblings" == w.deactivate ? t.siblings(u) : u.not(t),
								i = t.hasClass(x.active);
							b.verbose("Activating tab navigation for", t, e), i || (t.addClass(x.active), n.removeClass(x.active + " " + x.loading))
						}
					},
					deactivate: {
						all: function () {
							b.deactivate.navigation(), b.deactivate.tabs()
						},
						navigation: function () {
							u.removeClass(x.active)
						},
						tabs: function () {
							s.removeClass(x.active + " " + x.loading)
						}
					},
					is: {
						tab: function (e) {
							return e !== R && 0 < b.get.tabElement(e).length
						}
					},
					get: {
						initialPath: function () {
							return u.eq(0).data(C.tab) || s.eq(0).data(C.tab)
						},
						path: function () {
							return D.address.value()
						},
						defaultPathArray: function (e) {
							return b.utilities.pathToArray(b.get.defaultPath(e))
						},
						defaultPath: function (e) {
							var t = u.filter("[data-" + C.tab + '^="' + e + '/"]').eq(0).data(C.tab) || !1;
							if (t) {
								if (b.debug("Found default tab", t), o < w.maxDepth) return o++ , b.get.defaultPath(t);
								b.error(k.recursion)
							} else b.debug("No default tabs found for", e, s);
							return o = 0, e
						},
						navElement: function (e) {
							return e = e || m, u.filter("[data-" + C.tab + '="' + e + '"]')
						},
						tabElement: function (e) {
							var t, n, i, o;
							return e = e || m, i = b.utilities.pathToArray(e), o = b.utilities.last(i), t = s.filter("[data-" + C.tab + '="' + e + '"]'), n = s.filter("[data-" + C.tab + '="' + o + '"]'), 0 < t.length ? t : n
						},
						tab: function () {
							return m
						}
					},
					utilities: {
						filterArray: function (e, t) {
							return D.grep(e, function (e) {
								return -1 == D.inArray(e, t)
							})
						},
						last: function (e) {
							return !!D.isArray(e) && e[e.length - 1]
						},
						pathToArray: function (e) {
							return e === R && (e = m), "string" == typeof e ? e.split("/") : [e]
						},
						arrayToPath: function (e) {
							return !!D.isArray(e) && e.join("/")
						}
					},
					setting: function (e, t) {
						if (b.debug("Changing setting", e, t), D.isPlainObject(e)) D.extend(!0, w, e);
						else {
							if (t === R) return w[e];
							D.isPlainObject(w[e]) ? D.extend(!0, w[e], t) : w[e] = t
						}
					},
					internal: function (e, t) {
						if (D.isPlainObject(e)) D.extend(!0, b, e);
						else {
							if (t === R) return b[e];
							b[e] = t
						}
					},
					debug: function () {
						!w.silent && w.debug && (w.performance ? b.performance.log(arguments) : (b.debug = Function.prototype.bind.call(console.info, console, w.name + ":"), b.debug.apply(console, arguments)))
					},
					verbose: function () {
						!w.silent && w.verbose && w.debug && (w.performance ? b.performance.log(arguments) : (b.verbose = Function.prototype.bind.call(console.info, console, w.name + ":"), b.verbose.apply(console, arguments)))
					},
					error: function () {
						w.silent || (b.error = Function.prototype.bind.call(console.error, console, w.name + ":"), b.error.apply(console, arguments))
					},
					performance: {
						log: function (e) {
							var t, n;
							w.performance && (n = (t = (new Date).getTime()) - (p || t), p = t, f.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: a,
								"Execution Time": n
							})), clearTimeout(b.performance.timer), b.performance.timer = setTimeout(b.performance.display, 500)
						},
						display: function () {
							var e = w.name + ":",
								n = 0;
							p = !1, clearTimeout(b.performance.timer), D.each(f, function (e, t) {
								n += t["Execution Time"]
							}), e += " " + n + "ms", d && (e += " '" + d + "'"), (console.group !== R || console.table !== R) && 0 < f.length && (console.groupCollapsed(e), console.table ? console.table(f) : D.each(f, function (e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), f = []
						}
					},
					invoke: function (i, e, t) {
						var o, s, n, r = l;
						return e = e || E, t = a || t, "string" == typeof i && r !== R && (i = i.split(/[\. ]/), o = i.length - 1, D.each(i, function (e, t) {
							var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
							if (D.isPlainObject(r[n]) && e != o) r = r[n];
							else {
								if (r[n] !== R) return s = r[n], !1;
								if (!D.isPlainObject(r[t]) || e == o) return r[t] !== R ? s = r[t] : b.error(k.method, i), !1;
								r = r[t]
							}
						})), D.isFunction(s) ? n = s.apply(t, e) : s !== R && (n = s), D.isArray(c) ? c.push(n) : c !== R ? c = [c, n] : n !== R && (c = n), s
					}
				}, A ? (l === R && b.initialize(), b.invoke(h)) : (l !== R && l.invoke("destroy"), b.initialize())
			}), c !== R ? c : this
		}, D.tab = function () {
			D(O).tab.apply(this, arguments)
		}, D.fn.tab.settings = {
			name: "Tab",
			namespace: "tab",
			silent: !1,
			debug: !1,
			verbose: !1,
			performance: !0,
			auto: !1,
			history: !1,
			historyType: "hash",
			path: !1,
			context: !1,
			childrenOnly: !1,
			maxDepth: 25,
			deactivate: "siblings",
			alwaysRefresh: !1,
			cache: !0,
			loadOnce: !1,
			cacheType: "response",
			ignoreFirstLoad: !1,
			apiSettings: !1,
			evaluateScripts: "once",
			onFirstLoad: function (e, t, n) { },
			onLoad: function (e, t, n) { },
			onVisible: function (e, t, n) { },
			onRequest: function (e, t, n) { },
			templates: {
				determineTitle: function (e) { }
			},
			error: {
				api: "You attempted to load content without API module",
				method: "The method you called is not defined",
				missingTab: "Activated tab cannot be found. Tabs are case-sensitive.",
				noContent: "The tab you specified is missing a content url.",
				path: "History enabled, but no path was specified",
				recursion: "Max recursive depth reached",
				legacyInit: "onTabInit has been renamed to onFirstLoad in 2.0, please adjust your code.",
				legacyLoad: "onTabLoad has been renamed to onLoad in 2.0. Please adjust your code",
				state: "History requires Asual's Address library <https://github.com/asual/jquery-address>"
			},
			metadata: {
				tab: "tab",
				loaded: "loaded",
				promise: "promise"
			},
			className: {
				loading: "loading",
				active: "active"
			},
			selector: {
				tabs: ".ui.tab",
				ui: ".ui"
			}
		}
	}(jQuery, window, document),
	function (x, e, C, k) {
		"use strict";
		e = void 0 !== e && e.Math == Math ? e : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), x.fn.transition = function () {
			var c, r = x(this),
				h = r.selector || "",
				g = (new Date).getTime(),
				m = [],
				v = arguments,
				b = v[0],
				y = [].slice.call(arguments, 1),
				w = "string" == typeof b;
			return e.requestAnimationFrame || e.mozRequestAnimationFrame || e.webkitRequestAnimationFrame || e.msRequestAnimationFrame, r.each(function (i) {
				var u, a, t, d, n, o, e, s, p, f = x(this),
					l = this;
				(p = {
					initialize: function () {
						u = p.get.settings.apply(l, v), d = u.className, t = u.error, n = u.metadata, s = "." + u.namespace, e = "module-" + u.namespace, a = f.data(e) || p, o = p.get.animationEndEvent(), w && (w = p.invoke(b)), !1 === w && (p.verbose("Converted arguments into settings object", u), u.interval ? p.delay(u.animate) : p.animate(), p.instantiate())
					},
					instantiate: function () {
						p.verbose("Storing instance of module", p), a = p, f.data(e, a)
					},
					destroy: function () {
						p.verbose("Destroying previous module for", l), f.removeData(e)
					},
					refresh: function () {
						p.verbose("Refreshing display type on next animation"), delete p.displayType
					},
					forceRepaint: function () {
						p.verbose("Forcing element repaint");
						var e = f.parent(),
							t = f.next();
						0 === t.length ? f.detach().appendTo(e) : f.detach().insertBefore(t)
					},
					repaint: function () {
						p.verbose("Repainting element"), l.offsetWidth
					},
					delay: function (e) {
						var t, n = p.get.animationDirection();
						n || (n = p.can.transition() ? p.get.direction() : "static"), e = e !== k ? e : u.interval, t = "auto" == u.reverse && n == d.outward || 1 == u.reverse ? (r.length - i) * u.interval : i * u.interval, p.debug("Delaying animation by", t), setTimeout(p.animate, t)
					},
					animate: function (e) {
						if (u = e || u, !p.is.supported()) return p.error(t.support), !1;
						if (p.debug("Preparing animation", u.animation), p.is.animating()) {
							if (u.queue) return !u.allowRepeats && p.has.direction() && p.is.occurring() && !0 !== p.queuing ? p.debug("Animation is currently occurring, preventing queueing same animation", u.animation) : p.queue(u.animation), !1;
							if (!u.allowRepeats && p.is.occurring()) return p.debug("Animation is already occurring, will not execute repeated animation", u.animation), !1;
							p.debug("New animation started, completing previous early", u.animation), a.complete()
						}
						p.can.animate() ? p.set.animating(u.animation) : p.error(t.noAnimation, u.animation, l)
					},
					reset: function () {
						p.debug("Resetting animation to beginning conditions"), p.remove.animationCallbacks(), p.restore.conditions(), p.remove.animating()
					},
					queue: function (e) {
						p.debug("Queueing animation of", e), p.queuing = !0, f.one(o + ".queue" + s, function () {
							p.queuing = !1, p.repaint(), p.animate.apply(this, u)
						})
					},
					complete: function (e) {
						p.debug("Animation complete", u.animation), p.remove.completeCallback(), p.remove.failSafe(), p.is.looping() || (p.is.outward() ? (p.verbose("Animation is outward, hiding element"), p.restore.conditions(), p.hide()) : p.is.inward() ? (p.verbose("Animation is outward, showing element"), p.restore.conditions(), p.show()) : (p.verbose("Static animation completed"), p.restore.conditions(), u.onComplete.call(l)))
					},
					force: {
						visible: function () {
							var e = f.attr("style"),
								t = p.get.userStyle(),
								n = p.get.displayType(),
								i = t + "display: " + n + " !important;",
								o = f.css("display"),
								s = e === k || "" === e;
							o !== n ? (p.verbose("Overriding default display to show element", n), f.attr("style", i)) : s && f.removeAttr("style")
						},
						hidden: function () {
							var e = f.attr("style"),
								t = f.css("display"),
								n = e === k || "" === e;
							"none" === t || p.is.hidden() ? n && f.removeAttr("style") : (p.verbose("Overriding default display to hide element"), f.css("display", "none"))
						}
					},
					has: {
						direction: function (e) {
							var n = !1;
							return "string" == typeof (e = e || u.animation) && (e = e.split(" "), x.each(e, function (e, t) {
								t !== d.inward && t !== d.outward || (n = !0)
							})), n
						},
						inlineDisplay: function () {
							var e = f.attr("style") || "";
							return x.isArray(e.match(/display.*?;/, ""))
						}
					},
					set: {
						animating: function (e) {
							var t;
							p.remove.completeCallback(), e = e || u.animation, t = p.get.animationClass(e), p.save.animation(t), p.force.visible(), p.remove.hidden(), p.remove.direction(), p.start.animation(t)
						},
						duration: function (e, t) {
							((t = "number" == typeof (t = t || u.duration) ? t + "ms" : t) || 0 === t) && (p.verbose("Setting animation duration", t), f.css({
								"animation-duration": t
							}))
						},
						direction: function (e) {
							(e = e || p.get.direction()) == d.inward ? p.set.inward() : p.set.outward()
						},
						looping: function () {
							p.debug("Transition set to loop"), f.addClass(d.looping)
						},
						hidden: function () {
							f.addClass(d.transition).addClass(d.hidden)
						},
						inward: function () {
							p.debug("Setting direction to inward"), f.removeClass(d.outward).addClass(d.inward)
						},
						outward: function () {
							p.debug("Setting direction to outward"), f.removeClass(d.inward).addClass(d.outward)
						},
						visible: function () {
							f.addClass(d.transition).addClass(d.visible)
						}
					},
					start: {
						animation: function (e) {
							e = e || p.get.animationClass(), p.debug("Starting tween", e), f.addClass(e).one(o + ".complete" + s, p.complete), u.useFailSafe && p.add.failSafe(), p.set.duration(u.duration), u.onStart.call(l)
						}
					},
					save: {
						animation: function (e) {
							p.cache || (p.cache = {}), p.cache.animation = e
						},
						displayType: function (e) {
							"none" !== e && f.data(n.displayType, e)
						},
						transitionExists: function (e, t) {
							x.fn.transition.exists[e] = t, p.verbose("Saving existence of transition", e, t)
						}
					},
					restore: {
						conditions: function () {
							var e = p.get.currentAnimation();
							e && (f.removeClass(e), p.verbose("Removing animation class", p.cache)), p.remove.duration()
						}
					},
					add: {
						failSafe: function () {
							var e = p.get.duration();
							p.timer = setTimeout(function () {
								f.triggerHandler(o)
							}, e + u.failSafeDelay), p.verbose("Adding fail safe timer", p.timer)
						}
					},
					remove: {
						animating: function () {
							f.removeClass(d.animating)
						},
						animationCallbacks: function () {
							p.remove.queueCallback(), p.remove.completeCallback()
						},
						queueCallback: function () {
							f.off(".queue" + s)
						},
						completeCallback: function () {
							f.off(".complete" + s)
						},
						display: function () {
							f.css("display", "")
						},
						direction: function () {
							f.removeClass(d.inward).removeClass(d.outward)
						},
						duration: function () {
							f.css("animation-duration", "")
						},
						failSafe: function () {
							p.verbose("Removing fail safe timer", p.timer), p.timer && clearTimeout(p.timer)
						},
						hidden: function () {
							f.removeClass(d.hidden)
						},
						visible: function () {
							f.removeClass(d.visible)
						},
						looping: function () {
							p.debug("Transitions are no longer looping"), p.is.looping() && (p.reset(), f.removeClass(d.looping))
						},
						transition: function () {
							f.removeClass(d.visible).removeClass(d.hidden)
						}
					},
					get: {
						settings: function (e, t, n) {
							return "object" == typeof e ? x.extend(!0, {}, x.fn.transition.settings, e) : "function" == typeof n ? x.extend({}, x.fn.transition.settings, {
								animation: e,
								onComplete: n,
								duration: t
							}) : "string" == typeof t || "number" == typeof t ? x.extend({}, x.fn.transition.settings, {
								animation: e,
								duration: t
							}) : "object" == typeof t ? x.extend({}, x.fn.transition.settings, t, {
								animation: e
							}) : "function" == typeof t ? x.extend({}, x.fn.transition.settings, {
								animation: e,
								onComplete: t
							}) : x.extend({}, x.fn.transition.settings, {
								animation: e
							})
						},
						animationClass: function (e) {
							var t = e || u.animation,
								n = p.can.transition() && !p.has.direction() ? p.get.direction() + " " : "";
							return d.animating + " " + d.transition + " " + n + t
						},
						currentAnimation: function () {
							return !(!p.cache || p.cache.animation === k) && p.cache.animation
						},
						currentDirection: function () {
							return p.is.inward() ? d.inward : d.outward
						},
						direction: function () {
							return p.is.hidden() || !p.is.visible() ? d.inward : d.outward
						},
						animationDirection: function (e) {
							var n;
							return "string" == typeof (e = e || u.animation) && (e = e.split(" "), x.each(e, function (e, t) {
								t === d.inward ? n = d.inward : t === d.outward && (n = d.outward)
							})), n || !1
						},
						duration: function (e) {
							return !1 === (e = e || u.duration) && (e = f.css("animation-duration") || 0), "string" == typeof e ? -1 < e.indexOf("ms") ? parseFloat(e) : 1e3 * parseFloat(e) : e
						},
						displayType: function (e) {
							return e = e === k || e, u.displayType ? u.displayType : (e && f.data(n.displayType) === k && p.can.transition(!0), f.data(n.displayType))
						},
						userStyle: function (e) {
							return (e = e || f.attr("style") || "").replace(/display.*?;/, "")
						},
						transitionExists: function (e) {
							return x.fn.transition.exists[e]
						},
						animationStartEvent: function () {
							var e, t = C.createElement("div"),
								n = {
									animation: "animationstart",
									OAnimation: "oAnimationStart",
									MozAnimation: "mozAnimationStart",
									WebkitAnimation: "webkitAnimationStart"
								};
							for (e in n)
								if (t.style[e] !== k) return n[e];
							return !1
						},
						animationEndEvent: function () {
							var e, t = C.createElement("div"),
								n = {
									animation: "animationend",
									OAnimation: "oAnimationEnd",
									MozAnimation: "mozAnimationEnd",
									WebkitAnimation: "webkitAnimationEnd"
								};
							for (e in n)
								if (t.style[e] !== k) return n[e];
							return !1
						}
					},
					can: {
						transition: function (e) {
							var t, n, i, o, s, r, a = u.animation,
								l = p.get.transitionExists(a),
								c = p.get.displayType(!1);
							if (l === k || e) {
								if (p.verbose("Determining whether animation exists"), t = f.attr("class"), n = f.prop("tagName"), o = (i = x("<" + n + " />").addClass(t).insertAfter(f)).addClass(a).removeClass(d.inward).removeClass(d.outward).addClass(d.animating).addClass(d.transition).css("animationName"), s = i.addClass(d.inward).css("animationName"), c || (c = i.attr("class", t).removeAttr("style").removeClass(d.hidden).removeClass(d.visible).show().css("display"), p.verbose("Determining final display state", c), p.save.displayType(c)), i.remove(), o != s) p.debug("Direction exists for animation", a), r = !0;
								else {
									if ("none" == o || !o) return void p.debug("No animation defined in css", a);
									p.debug("Static animation found", a, c), r = !1
								}
								p.save.transitionExists(a, r)
							}
							return l !== k ? l : r
						},
						animate: function () {
							return p.can.transition() !== k
						}
					},
					is: {
						animating: function () {
							return f.hasClass(d.animating)
						},
						inward: function () {
							return f.hasClass(d.inward)
						},
						outward: function () {
							return f.hasClass(d.outward)
						},
						looping: function () {
							return f.hasClass(d.looping)
						},
						occurring: function (e) {
							return e = "." + (e = e || u.animation).replace(" ", "."), 0 < f.filter(e).length
						},
						visible: function () {
							return f.is(":visible")
						},
						hidden: function () {
							return "hidden" === f.css("visibility")
						},
						supported: function () {
							return !1 !== o
						}
					},
					hide: function () {
						p.verbose("Hiding element"), p.is.animating() && p.reset(), l.blur(), p.remove.display(), p.remove.visible(), p.set.hidden(), p.force.hidden(), u.onHide.call(l), u.onComplete.call(l)
					},
					show: function (e) {
						p.verbose("Showing element", e), p.remove.hidden(), p.set.visible(), p.force.visible(), u.onShow.call(l), u.onComplete.call(l)
					},
					toggle: function () {
						p.is.visible() ? p.hide() : p.show()
					},
					stop: function () {
						p.debug("Stopping current animation"), f.triggerHandler(o)
					},
					stopAll: function () {
						p.debug("Stopping all animation"), p.remove.queueCallback(), f.triggerHandler(o)
					},
					clear: {
						queue: function () {
							p.debug("Clearing animation queue"), p.remove.queueCallback()
						}
					},
					enable: function () {
						p.verbose("Starting animation"), f.removeClass(d.disabled)
					},
					disable: function () {
						p.debug("Stopping animation"), f.addClass(d.disabled)
					},
					setting: function (e, t) {
						if (p.debug("Changing setting", e, t), x.isPlainObject(e)) x.extend(!0, u, e);
						else {
							if (t === k) return u[e];
							x.isPlainObject(u[e]) ? x.extend(!0, u[e], t) : u[e] = t
						}
					},
					internal: function (e, t) {
						if (x.isPlainObject(e)) x.extend(!0, p, e);
						else {
							if (t === k) return p[e];
							p[e] = t
						}
					},
					debug: function () {
						!u.silent && u.debug && (u.performance ? p.performance.log(arguments) : (p.debug = Function.prototype.bind.call(console.info, console, u.name + ":"), p.debug.apply(console, arguments)))
					},
					verbose: function () {
						!u.silent && u.verbose && u.debug && (u.performance ? p.performance.log(arguments) : (p.verbose = Function.prototype.bind.call(console.info, console, u.name + ":"), p.verbose.apply(console, arguments)))
					},
					error: function () {
						u.silent || (p.error = Function.prototype.bind.call(console.error, console, u.name + ":"), p.error.apply(console, arguments))
					},
					performance: {
						log: function (e) {
							var t, n;
							u.performance && (n = (t = (new Date).getTime()) - (g || t), g = t, m.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: l,
								"Execution Time": n
							})), clearTimeout(p.performance.timer), p.performance.timer = setTimeout(p.performance.display, 500)
						},
						display: function () {
							var e = u.name + ":",
								n = 0;
							g = !1, clearTimeout(p.performance.timer), x.each(m, function (e, t) {
								n += t["Execution Time"]
							}), e += " " + n + "ms", h && (e += " '" + h + "'"), 1 < r.length && (e += " (" + r.length + ")"), (console.group !== k || console.table !== k) && 0 < m.length && (console.groupCollapsed(e), console.table ? console.table(m) : x.each(m, function (e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), m = []
						}
					},
					invoke: function (i, e, t) {
						var o, s, n, r = a;
						return e = e || y, t = l || t, "string" == typeof i && r !== k && (i = i.split(/[\. ]/), o = i.length - 1, x.each(i, function (e, t) {
							var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
							if (x.isPlainObject(r[n]) && e != o) r = r[n];
							else {
								if (r[n] !== k) return s = r[n], !1;
								if (!x.isPlainObject(r[t]) || e == o) return r[t] !== k && (s = r[t]), !1;
								r = r[t]
							}
						})), x.isFunction(s) ? n = s.apply(t, e) : s !== k && (n = s), x.isArray(c) ? c.push(n) : c !== k ? c = [c, n] : n !== k && (c = n), s !== k && s
					}
				}).initialize()
			}), c !== k ? c : this
		}, x.fn.transition.exists = {}, x.fn.transition.settings = {
			name: "Transition",
			silent: !1,
			debug: !1,
			verbose: !1,
			performance: !0,
			namespace: "transition",
			interval: 0,
			reverse: "auto",
			onStart: function () { },
			onComplete: function () { },
			onShow: function () { },
			onHide: function () { },
			useFailSafe: !0,
			failSafeDelay: 100,
			allowRepeats: !1,
			displayType: !1,
			animation: "fade",
			duration: !1,
			queue: !0,
			metadata: {
				displayType: "display"
			},
			className: {
				animating: "animating",
				disabled: "disabled",
				hidden: "hidden",
				inward: "in",
				loading: "loading",
				looping: "looping",
				outward: "out",
				transition: "transition",
				visible: "visible"
			},
			error: {
				noAnimation: "Element is no longer attached to DOM. Unable to animate.  Use silent setting to surpress this warning in production.",
				repeated: "That animation is already occurring, cancelling repeated animation",
				method: "The method you called is not defined",
				support: "This browser does not support CSS animations"
			}
		}
	}(jQuery, window, document),
	function (P, D, e, O) {
		"use strict";
		D = void 0 !== D && D.Math == Math ? D : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), P.api = P.fn.api = function (w) {
			var x, e = P.isFunction(this) ? P(D) : P(this),
				C = e.selector || "",
				k = (new Date).getTime(),
				S = [],
				T = w,
				A = "string" == typeof T,
				E = [].slice.call(arguments, 1);
			return e.each(function () {
				var s, r, n, e, a, l, c = P.isPlainObject(w) ? P.extend(!0, {}, P.fn.api.settings, w) : P.extend({}, P.fn.api.settings),
					t = c.namespace,
					i = c.metadata,
					o = c.selector,
					u = c.error,
					d = c.className,
					p = "." + t,
					f = "module-" + t,
					h = P(this),
					g = h.closest(o.form),
					m = c.stateContext ? P(c.stateContext) : h,
					v = this,
					b = m[0],
					y = h.data(f);
				l = {
					initialize: function () {
						A || l.bind.events(), l.instantiate()
					},
					instantiate: function () {
						l.verbose("Storing instance of module", l), y = l, h.data(f, y)
					},
					destroy: function () {
						l.verbose("Destroying previous module for", v), h.removeData(f).off(p)
					},
					bind: {
						events: function () {
							var e = l.get.event();
							e ? (l.verbose("Attaching API events to element", e), h.on(e + p, l.event.trigger)) : "now" == c.on && (l.debug("Querying API endpoint immediately"), l.query())
						}
					},
					decode: {
						json: function (e) {
							if (e !== O && "string" == typeof e) try {
								e = JSON.parse(e)
							} catch (e) { }
							return e
						}
					},
					read: {
						cachedResponse: function (e) {
							var t;
							if (D.Storage !== O) return t = sessionStorage.getItem(e), l.debug("Using cached response", e, t), l.decode.json(t);
							l.error(u.noStorage)
						}
					},
					write: {
						cachedResponse: function (e, t) {
							t && "" === t ? l.debug("Response empty, not caching", t) : D.Storage !== O ? (P.isPlainObject(t) && (t = JSON.stringify(t)), sessionStorage.setItem(e, t), l.verbose("Storing cached response for url", e, t)) : l.error(u.noStorage)
						}
					},
					query: function () {
						if (l.is.disabled()) l.debug("Element is disabled API request aborted");
						else {
							if (l.is.loading()) {
								if (!c.interruptRequests) return void l.debug("Cancelling request, previous request is still pending");
								l.debug("Interrupting previous request"), l.abort()
							}
							if (c.defaultData && P.extend(!0, c.urlData, l.get.defaultData()), c.serializeForm && (c.data = l.add.formData(c.data)), !1 === (r = l.get.settings())) return l.cancelled = !0, void l.error(u.beforeSend);
							if (l.cancelled = !1, (n = l.get.templatedURL()) || l.is.mocked()) {
								if ((n = l.add.urlData(n)) || l.is.mocked()) {
									if (r.url = c.base + n, s = P.extend(!0, {}, c, {
										type: c.method || c.type,
										data: e,
										url: c.base + n,
										beforeSend: c.beforeXHR,
										success: function () { },
										failure: function () { },
										complete: function () { }
									}), l.debug("Querying URL", s.url), l.verbose("Using AJAX settings", s), "local" === c.cache && l.read.cachedResponse(n)) return l.debug("Response returned from local cache"), l.request = l.create.request(), void l.request.resolveWith(b, [l.read.cachedResponse(n)]);
									c.throttle ? c.throttleFirstRequest || l.timer ? (l.debug("Throttling request", c.throttle), clearTimeout(l.timer), l.timer = setTimeout(function () {
										l.timer && delete l.timer, l.debug("Sending throttled request", e, s.method), l.send.request()
									}, c.throttle)) : (l.debug("Sending request", e, s.method), l.send.request(), l.timer = setTimeout(function () { }, c.throttle)) : (l.debug("Sending request", e, s.method), l.send.request())
								}
							} else l.error(u.missingURL)
						}
					},
					should: {
						removeError: function () {
							return !0 === c.hideError || "auto" === c.hideError && !l.is.form()
						}
					},
					is: {
						disabled: function () {
							return 0 < h.filter(o.disabled).length
						},
						expectingJSON: function () {
							return "json" === c.dataType || "jsonp" === c.dataType
						},
						form: function () {
							return h.is("form") || m.is("form")
						},
						mocked: function () {
							return c.mockResponse || c.mockResponseAsync || c.response || c.responseAsync
						},
						input: function () {
							return h.is("input")
						},
						loading: function () {
							return !!l.request && "pending" == l.request.state()
						},
						abortedRequest: function (e) {
							return e && e.readyState !== O && 0 === e.readyState ? (l.verbose("XHR request determined to be aborted"), !0) : (l.verbose("XHR request was not aborted"), !1)
						},
						validResponse: function (e) {
							return l.is.expectingJSON() && P.isFunction(c.successTest) ? (l.debug("Checking JSON returned success", c.successTest, e), c.successTest(e) ? (l.debug("Response passed success test", e), !0) : (l.debug("Response failed success test", e), !1)) : (l.verbose("Response is not JSON, skipping validation", c.successTest, e), !0)
						}
					},
					was: {
						cancelled: function () {
							return l.cancelled || !1
						},
						succesful: function () {
							return l.request && "resolved" == l.request.state()
						},
						failure: function () {
							return l.request && "rejected" == l.request.state()
						},
						complete: function () {
							return l.request && ("resolved" == l.request.state() || "rejected" == l.request.state())
						}
					},
					add: {
						urlData: function (o, s) {
							var e, t;
							return o && (e = o.match(c.regExp.required), t = o.match(c.regExp.optional), s = s || c.urlData, e && (l.debug("Looking for required URL variables", e), P.each(e, function (e, t) {
								var n = -1 !== t.indexOf("$") ? t.substr(2, t.length - 3) : t.substr(1, t.length - 2),
									i = P.isPlainObject(s) && s[n] !== O ? s[n] : h.data(n) !== O ? h.data(n) : m.data(n) !== O ? m.data(n) : s[n];
								if (i === O) return l.error(u.requiredParameter, n, o), o = !1;
								l.verbose("Found required variable", n, i), i = c.encodeParameters ? l.get.urlEncodedValue(i) : i, o = o.replace(t, i)
							})), t && (l.debug("Looking for optional URL variables", e), P.each(t, function (e, t) {
								var n = -1 !== t.indexOf("$") ? t.substr(3, t.length - 4) : t.substr(2, t.length - 3),
									i = P.isPlainObject(s) && s[n] !== O ? s[n] : h.data(n) !== O ? h.data(n) : m.data(n) !== O ? m.data(n) : s[n];
								o = i !== O ? (l.verbose("Optional variable Found", n, i), o.replace(t, i)) : (l.verbose("Optional variable not found", n), -1 !== o.indexOf("/" + t) ? o.replace("/" + t, "") : o.replace(t, ""))
							}))), o
						},
						formData: function (e) {
							var t = P.fn.serializeObject !== O,
								n = t ? g.serializeObject() : g.serialize();
							return e = e || c.data, P.isPlainObject(e) ? t ? (l.debug("Extending existing data with form data", e, n), P.extend(!0, {}, e, n)) : (l.error(u.missingSerialize), l.debug("Cant extend data. Replacing data with form data", e, n), n) : (l.debug("Adding form data", n), n)
						}
					},
					send: {
						request: function () {
							l.set.loading(), l.request = l.create.request(), l.is.mocked() ? l.mockedXHR = l.create.mockedXHR() : l.xhr = l.create.xhr(), c.onRequest.call(b, l.request, l.xhr)
						}
					},
					event: {
						trigger: function (e) {
							l.query(), "submit" != e.type && "click" != e.type || e.preventDefault()
						},
						xhr: {
							always: function () { },
							done: function (e, t, n) {
								var i = this,
									o = (new Date).getTime() - a,
									s = c.loadingDuration - o,
									r = !!P.isFunction(c.onResponse) && (l.is.expectingJSON() ? c.onResponse.call(i, P.extend(!0, {}, e)) : c.onResponse.call(i, e));
								s = 0 < s ? s : 0, r && (l.debug("Modified API response in onResponse callback", c.onResponse, r, e), e = r), 0 < s && l.debug("Response completed early delaying state change by", s), setTimeout(function () {
									l.is.validResponse(e) ? l.request.resolveWith(i, [e, n]) : l.request.rejectWith(i, [n, "invalid"])
								}, s)
							},
							fail: function (e, t, n) {
								var i = this,
									o = (new Date).getTime() - a,
									s = c.loadingDuration - o;
								0 < (s = 0 < s ? s : 0) && l.debug("Response completed early delaying state change by", s), setTimeout(function () {
									l.is.abortedRequest(e) ? l.request.rejectWith(i, [e, "aborted", n]) : l.request.rejectWith(i, [e, "error", t, n])
								}, s)
							}
						},
						request: {
							done: function (e, t) {
								l.debug("Successful API Response", e), "local" === c.cache && n && (l.write.cachedResponse(n, e), l.debug("Saving server response locally", l.cache)), c.onSuccess.call(b, e, h, t)
							},
							complete: function (e, t) {
								var n, i;
								l.was.succesful() ? (i = e, n = t) : (n = e, i = l.get.responseFromXHR(n)), l.remove.loading(), c.onComplete.call(b, i, h, n)
							},
							fail: function (e, t, n) {
								var i = l.get.responseFromXHR(e),
									o = l.get.errorFromRequest(i, t, n);
								if ("aborted" == t) return l.debug("XHR Aborted (Most likely caused by page navigation or CORS Policy)", t, n), c.onAbort.call(b, t, h, e), !0;
								"invalid" == t ? l.debug("JSON did not pass success test. A server-side error has most likely occurred", i) : "error" == t && e !== O && (l.debug("XHR produced a server error", t, n), 200 != e.status && n !== O && "" !== n && l.error(u.statusMessage + n, s.url), c.onError.call(b, o, h, e)), c.errorDuration && "aborted" !== t && (l.debug("Adding error state"), l.set.error(), l.should.removeError() && setTimeout(l.remove.error, c.errorDuration)), l.debug("API Request failed", o, e), c.onFailure.call(b, i, h, e)
							}
						}
					},
					create: {
						request: function () {
							return P.Deferred().always(l.event.request.complete).done(l.event.request.done).fail(l.event.request.fail)
						},
						mockedXHR: function () {
							var e, t, n, i = c.mockResponse || c.response,
								o = c.mockResponseAsync || c.responseAsync;
							return n = P.Deferred().always(l.event.xhr.complete).done(l.event.xhr.done).fail(l.event.xhr.fail), i ? (t = P.isFunction(i) ? (l.debug("Using specified synchronous callback", i), i.call(b, r)) : (l.debug("Using settings specified response", i), i), n.resolveWith(b, [t, !1, {
								responseText: t
							}])) : P.isFunction(o) && (e = function (e) {
								l.debug("Async callback returned response", e), e ? n.resolveWith(b, [e, !1, {
									responseText: e
								}]) : n.rejectWith(b, [{
									responseText: e
								}, !1, !1])
							}, l.debug("Using specified async response callback", o), o.call(b, r, e)), n
						},
						xhr: function () {
							var e;
							return e = P.ajax(s).always(l.event.xhr.always).done(l.event.xhr.done).fail(l.event.xhr.fail), l.verbose("Created server request", e, s), e
						}
					},
					set: {
						error: function () {
							l.verbose("Adding error state to element", m), m.addClass(d.error)
						},
						loading: function () {
							l.verbose("Adding loading state to element", m), m.addClass(d.loading), a = (new Date).getTime()
						}
					},
					remove: {
						error: function () {
							l.verbose("Removing error state from element", m), m.removeClass(d.error)
						},
						loading: function () {
							l.verbose("Removing loading state from element", m), m.removeClass(d.loading)
						}
					},
					get: {
						responseFromXHR: function (e) {
							return !!P.isPlainObject(e) && (l.is.expectingJSON() ? l.decode.json(e.responseText) : e.responseText)
						},
						errorFromRequest: function (e, t, n) {
							return P.isPlainObject(e) && e.error !== O ? e.error : c.error[t] !== O ? c.error[t] : n
						},
						request: function () {
							return l.request || !1
						},
						xhr: function () {
							return l.xhr || !1
						},
						settings: function () {
							var e;
							return (e = c.beforeSend.call(b, c)) && (e.success !== O && (l.debug("Legacy success callback detected", e), l.error(u.legacyParameters, e.success), e.onSuccess = e.success), e.failure !== O && (l.debug("Legacy failure callback detected", e), l.error(u.legacyParameters, e.failure), e.onFailure = e.failure), e.complete !== O && (l.debug("Legacy complete callback detected", e), l.error(u.legacyParameters, e.complete), e.onComplete = e.complete)), e === O && l.error(u.noReturnedValue), !1 === e ? e : e !== O ? P.extend(!0, {}, e) : P.extend(!0, {}, c)
						},
						urlEncodedValue: function (e) {
							var t = D.decodeURIComponent(e),
								n = D.encodeURIComponent(e);
							return t !== e ? (l.debug("URL value is already encoded, avoiding double encoding", e), e) : (l.verbose("Encoding value using encodeURIComponent", e, n), n)
						},
						defaultData: function () {
							var e = {};
							return P.isWindow(v) || (l.is.input() ? e.value = h.val() : l.is.form() || (e.text = h.text())), e
						},
						event: function () {
							return P.isWindow(v) || "now" == c.on ? (l.debug("API called without element, no events attached"), !1) : "auto" == c.on ? h.is("input") ? v.oninput !== O ? "input" : v.onpropertychange !== O ? "propertychange" : "keyup" : h.is("form") ? "submit" : "click" : c.on
						},
						templatedURL: function (e) {
							if (e = e || h.data(i.action) || c.action || !1, n = h.data(i.url) || c.url || !1) return l.debug("Using specified url", n), n;
							if (e) {
								if (l.debug("Looking up url for action", e, c.api), c.api[e] === O && !l.is.mocked()) return void l.error(u.missingAction, c.action, c.api);
								n = c.api[e]
							} else l.is.form() && (n = h.attr("action") || m.attr("action") || !1, l.debug("No url or action specified, defaulting to form action", n));
							return n
						}
					},
					abort: function () {
						var e = l.get.xhr();
						e && "resolved" !== e.state() && (l.debug("Cancelling API request"), e.abort())
					},
					reset: function () {
						l.remove.error(), l.remove.loading()
					},
					setting: function (e, t) {
						if (l.debug("Changing setting", e, t), P.isPlainObject(e)) P.extend(!0, c, e);
						else {
							if (t === O) return c[e];
							P.isPlainObject(c[e]) ? P.extend(!0, c[e], t) : c[e] = t
						}
					},
					internal: function (e, t) {
						if (P.isPlainObject(e)) P.extend(!0, l, e);
						else {
							if (t === O) return l[e];
							l[e] = t
						}
					},
					debug: function () {
						!c.silent && c.debug && (c.performance ? l.performance.log(arguments) : (l.debug = Function.prototype.bind.call(console.info, console, c.name + ":"), l.debug.apply(console, arguments)))
					},
					verbose: function () {
						!c.silent && c.verbose && c.debug && (c.performance ? l.performance.log(arguments) : (l.verbose = Function.prototype.bind.call(console.info, console, c.name + ":"), l.verbose.apply(console, arguments)))
					},
					error: function () {
						c.silent || (l.error = Function.prototype.bind.call(console.error, console, c.name + ":"), l.error.apply(console, arguments))
					},
					performance: {
						log: function (e) {
							var t, n;
							c.performance && (n = (t = (new Date).getTime()) - (k || t), k = t, S.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								"Execution Time": n
							})), clearTimeout(l.performance.timer), l.performance.timer = setTimeout(l.performance.display, 500)
						},
						display: function () {
							var e = c.name + ":",
								n = 0;
							k = !1, clearTimeout(l.performance.timer), P.each(S, function (e, t) {
								n += t["Execution Time"]
							}), e += " " + n + "ms", C && (e += " '" + C + "'"), (console.group !== O || console.table !== O) && 0 < S.length && (console.groupCollapsed(e), console.table ? console.table(S) : P.each(S, function (e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), S = []
						}
					},
					invoke: function (i, e, t) {
						var o, s, n, r = y;
						return e = e || E, t = v || t, "string" == typeof i && r !== O && (i = i.split(/[\. ]/), o = i.length - 1, P.each(i, function (e, t) {
							var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
							if (P.isPlainObject(r[n]) && e != o) r = r[n];
							else {
								if (r[n] !== O) return s = r[n], !1;
								if (!P.isPlainObject(r[t]) || e == o) return r[t] !== O ? s = r[t] : l.error(u.method, i), !1;
								r = r[t]
							}
						})), P.isFunction(s) ? n = s.apply(t, e) : s !== O && (n = s), P.isArray(x) ? x.push(n) : x !== O ? x = [x, n] : n !== O && (x = n), s
					}
				}, A ? (y === O && l.initialize(), l.invoke(T)) : (y !== O && y.invoke("destroy"), l.initialize())
			}), x !== O ? x : this
		}, P.api.settings = {
			name: "API",
			namespace: "api",
			debug: !1,
			verbose: !1,
			performance: !0,
			api: {},
			cache: !0,
			interruptRequests: !0,
			on: "auto",
			stateContext: !1,
			loadingDuration: 0,
			hideError: "auto",
			errorDuration: 2e3,
			encodeParameters: !0,
			action: !1,
			url: !1,
			base: "",
			urlData: {},
			defaultData: !0,
			serializeForm: !1,
			throttle: 0,
			throttleFirstRequest: !0,
			method: "get",
			data: {},
			dataType: "json",
			mockResponse: !1,
			mockResponseAsync: !1,
			response: !1,
			responseAsync: !1,
			beforeSend: function (e) {
				return e
			},
			beforeXHR: function (e) { },
			onRequest: function (e, t) { },
			onResponse: !1,
			onSuccess: function (e, t) { },
			onComplete: function (e, t) { },
			onFailure: function (e, t) { },
			onError: function (e, t) { },
			onAbort: function (e, t) { },
			successTest: !1,
			error: {
				beforeSend: "The before send function has aborted the request",
				error: "There was an error with your request",
				exitConditions: "API Request Aborted. Exit conditions met",
				JSONParse: "JSON could not be parsed during error handling",
				legacyParameters: "You are using legacy API success callback names",
				method: "The method you called is not defined",
				missingAction: "API action used but no url was defined",
				missingSerialize: "jquery-serialize-object is required to add form data to an existing data object",
				missingURL: "No URL specified for api event",
				noReturnedValue: "The beforeSend callback must return a settings object, beforeSend ignored.",
				noStorage: "Caching responses locally requires session storage",
				parseError: "There was an error parsing your request",
				requiredParameter: "Missing a required URL parameter: ",
				statusMessage: "Server gave an error: ",
				timeout: "Your request timed out"
			},
			regExp: {
				required: /\{\$*[A-z0-9]+\}/g,
				optional: /\{\/\$*[A-z0-9]+\}/g
			},
			className: {
				loading: "loading",
				error: "error"
			},
			selector: {
				disabled: ".disabled",
				form: "form"
			},
			metadata: {
				action: "action",
				url: "url"
			}
		}
	}(jQuery, window, document),
	function (P, D, O, $) {
		"use strict";
		D = void 0 !== D && D.Math == Math ? D : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), P.fn.visibility = function (b) {
			var y, e = P(this),
				w = e.selector || "",
				x = (new Date).getTime(),
				C = [],
				k = b,
				S = "string" == typeof k,
				T = [].slice.call(arguments, 1),
				A = e.length,
				E = 0;
			return e.each(function () {
				var e, t, n, a, o = P.isPlainObject(b) ? P.extend(!0, {}, P.fn.visibility.settings, b) : P.extend({}, P.fn.visibility.settings),
					i = o.className,
					s = o.namespace,
					l = o.error,
					r = o.metadata,
					c = "." + s,
					u = "module-" + s,
					d = P(D),
					p = P(this),
					f = P(o.context),
					h = (p.selector, p.data(u)),
					g = D.requestAnimationFrame || D.mozRequestAnimationFrame || D.webkitRequestAnimationFrame || D.msRequestAnimationFrame || function (e) {
						setTimeout(e, 0)
					},
					m = this,
					v = !1;
				a = {
					initialize: function () {
						a.debug("Initializing", o), a.setup.cache(), a.should.trackChanges() && ("image" == o.type && a.setup.image(), "fixed" == o.type && a.setup.fixed(), o.observeChanges && a.observeChanges(), a.bind.events()), a.save.position(), a.is.visible() || a.error(l.visible, p), o.initialCheck && a.checkVisibility(), a.instantiate()
					},
					instantiate: function () {
						a.debug("Storing instance", a), p.data(u, a), h = a
					},
					destroy: function () {
						a.verbose("Destroying previous module"), n && n.disconnect(), t && t.disconnect(), d.off("load" + c, a.event.load).off("resize" + c, a.event.resize), f.off("scroll" + c, a.event.scroll).off("scrollchange" + c, a.event.scrollchange), "fixed" == o.type && (a.resetFixed(), a.remove.placeholder()), p.off(c).removeData(u)
					},
					observeChanges: function () {
						"MutationObserver" in D && (t = new MutationObserver(a.event.contextChanged), n = new MutationObserver(a.event.changed), t.observe(O, {
							childList: !0,
							subtree: !0
						}), n.observe(m, {
							childList: !0,
							subtree: !0
						}), a.debug("Setting up mutation observer", n))
					},
					bind: {
						events: function () {
							a.verbose("Binding visibility events to scroll and resize"), o.refreshOnLoad && d.on("load" + c, a.event.load), d.on("resize" + c, a.event.resize), f.off("scroll" + c).on("scroll" + c, a.event.scroll).on("scrollchange" + c, a.event.scrollchange)
						}
					},
					event: {
						changed: function (e) {
							a.verbose("DOM tree modified, updating visibility calculations"), a.timer = setTimeout(function () {
								a.verbose("DOM tree modified, updating sticky menu"), a.refresh()
							}, 100)
						},
						contextChanged: function (e) {
							[].forEach.call(e, function (e) {
								e.removedNodes && [].forEach.call(e.removedNodes, function (e) {
									(e == m || 0 < P(e).find(m).length) && (a.debug("Element removed from DOM, tearing down events"), a.destroy())
								})
							})
						},
						resize: function () {
							a.debug("Window resized"), o.refreshOnResize && g(a.refresh)
						},
						load: function () {
							a.debug("Page finished loading"), g(a.refresh)
						},
						scroll: function () {
							o.throttle ? (clearTimeout(a.timer), a.timer = setTimeout(function () {
								f.triggerHandler("scrollchange" + c, [f.scrollTop()])
							}, o.throttle)) : g(function () {
								f.triggerHandler("scrollchange" + c, [f.scrollTop()])
							})
						},
						scrollchange: function (e, t) {
							a.checkVisibility(t)
						}
					},
					precache: function (e, t) {
						e instanceof Array || (e = [e]);
						for (var n = e.length, i = 0, o = [], s = O.createElement("img"), r = function () {
							++i >= e.length && P.isFunction(t) && t()
						}; n--;)(s = O.createElement("img")).onload = r, s.onerror = r, s.src = e[n], o.push(s)
					},
					enableCallbacks: function () {
						a.debug("Allowing callbacks to occur"), v = !1
					},
					disableCallbacks: function () {
						a.debug("Disabling all callbacks temporarily"), v = !0
					},
					should: {
						trackChanges: function () {
							return S ? (a.debug("One time query, no need to bind events"), !1) : (a.debug("Callbacks being attached"), !0)
						}
					},
					setup: {
						cache: function () {
							a.cache = {
								occurred: {},
								screen: {},
								element: {}
							}
						},
						image: function () {
							var e = p.data(r.src);
							e && (a.verbose("Lazy loading image", e), o.once = !0, o.observeChanges = !1, o.onOnScreen = function () {
								a.debug("Image on screen", m), a.precache(e, function () {
									a.set.image(e, function () {
										++E == A && o.onAllLoaded.call(this), o.onLoad.call(this)
									})
								})
							})
						},
						fixed: function () {
							a.debug("Setting up fixed"), o.once = !1, o.observeChanges = !1, o.initialCheck = !0, o.refreshOnLoad = !0, b.transition || (o.transition = !1), a.create.placeholder(), a.debug("Added placeholder", e), o.onTopPassed = function () {
								a.debug("Element passed, adding fixed position", p), a.show.placeholder(), a.set.fixed(), o.transition && P.fn.transition !== $ && p.transition(o.transition, o.duration)
							}, o.onTopPassedReverse = function () {
								a.debug("Element returned to position, removing fixed", p), a.hide.placeholder(), a.remove.fixed()
							}
						}
					},
					create: {
						placeholder: function () {
							a.verbose("Creating fixed position placeholder"), e = p.clone(!1).css("display", "none").addClass(i.placeholder).insertAfter(p)
						}
					},
					show: {
						placeholder: function () {
							a.verbose("Showing placeholder"), e.css("display", "block").css("visibility", "hidden")
						}
					},
					hide: {
						placeholder: function () {
							a.verbose("Hiding placeholder"), e.css("display", "none").css("visibility", "")
						}
					},
					set: {
						fixed: function () {
							a.verbose("Setting element to fixed position"), p.addClass(i.fixed).css({
								position: "fixed",
								top: o.offset + "px",
								left: "auto",
								zIndex: o.zIndex
							}), o.onFixed.call(m)
						},
						image: function (e, t) {
							if (p.attr("src", e), o.transition)
								if (P.fn.transition !== $) {
									if (p.hasClass(i.visible)) return void a.debug("Transition already occurred on this image, skipping animation");
									p.transition(o.transition, o.duration, t)
								} else p.fadeIn(o.duration, t);
							else p.show()
						}
					},
					is: {
						onScreen: function () {
							return a.get.elementCalculations().onScreen
						},
						offScreen: function () {
							return a.get.elementCalculations().offScreen
						},
						visible: function () {
							return !(!a.cache || !a.cache.element || 0 === a.cache.element.width && 0 === a.cache.element.offset.top)
						},
						verticallyScrollableContext: function () {
							var e = f.get(0) !== D && f.css("overflow-y");
							return "auto" == e || "scroll" == e
						},
						horizontallyScrollableContext: function () {
							var e = f.get(0) !== D && f.css("overflow-x");
							return "auto" == e || "scroll" == e
						}
					},
					refresh: function () {
						a.debug("Refreshing constants (width/height)"), "fixed" == o.type && a.resetFixed(), a.reset(), a.save.position(), o.checkOnRefresh && a.checkVisibility(), o.onRefresh.call(m)
					},
					resetFixed: function () {
						a.remove.fixed(), a.remove.occurred()
					},
					reset: function () {
						a.verbose("Resetting all cached values"), P.isPlainObject(a.cache) && (a.cache.screen = {}, a.cache.element = {})
					},
					checkVisibility: function (e) {
						a.verbose("Checking visibility of element", a.cache.element), !v && a.is.visible() && (a.save.scroll(e), a.save.calculations(), a.passed(), a.passingReverse(), a.topVisibleReverse(), a.bottomVisibleReverse(), a.topPassedReverse(), a.bottomPassedReverse(), a.onScreen(), a.offScreen(), a.passing(), a.topVisible(), a.bottomVisible(), a.topPassed(), a.bottomPassed(), o.onUpdate && o.onUpdate.call(m, a.get.elementCalculations()))
					},
					passed: function (e, t) {
						var n = a.get.elementCalculations();
						if (e && t) o.onPassed[e] = t;
						else {
							if (e !== $) return a.get.pixelsPassed(e) > n.pixelsPassed;
							n.passing && P.each(o.onPassed, function (e, t) {
								n.bottomVisible || n.pixelsPassed > a.get.pixelsPassed(e) ? a.execute(t, e) : o.once || a.remove.occurred(t)
							})
						}
					},
					onScreen: function (e) {
						var t = a.get.elementCalculations(),
							n = e || o.onOnScreen;
						if (e && (a.debug("Adding callback for onScreen", e), o.onOnScreen = e), t.onScreen ? a.execute(n, "onScreen") : o.once || a.remove.occurred("onScreen"), e !== $) return t.onOnScreen
					},
					offScreen: function (e) {
						var t = a.get.elementCalculations(),
							n = e || o.onOffScreen;
						if (e && (a.debug("Adding callback for offScreen", e), o.onOffScreen = e), t.offScreen ? a.execute(n, "offScreen") : o.once || a.remove.occurred("offScreen"), e !== $) return t.onOffScreen
					},
					passing: function (e) {
						var t = a.get.elementCalculations(),
							n = e || o.onPassing;
						if (e && (a.debug("Adding callback for passing", e), o.onPassing = e), t.passing ? a.execute(n, "passing") : o.once || a.remove.occurred("passing"), e !== $) return t.passing
					},
					topVisible: function (e) {
						var t = a.get.elementCalculations(),
							n = e || o.onTopVisible,
							i = "topVisible";
						if (e && (a.debug("Adding callback for top visible", e), o.onTopVisible = e), t.topVisible ? a.execute(n, i) : o.once || a.remove.occurred(i), e === $) return t.topVisible
					},
					bottomVisible: function (e) {
						var t = a.get.elementCalculations(),
							n = e || o.onBottomVisible,
							i = "bottomVisible";
						if (e && (a.debug("Adding callback for bottom visible", e), o.onBottomVisible = e), t.bottomVisible ? a.execute(n, i) : o.once || a.remove.occurred(i), e === $) return t.bottomVisible
					},
					topPassed: function (e) {
						var t = a.get.elementCalculations(),
							n = e || o.onTopPassed;
						if (e && (a.debug("Adding callback for top passed", e), o.onTopPassed = e), t.topPassed ? a.execute(n, "topPassed") : o.once || a.remove.occurred("topPassed"), e === $) return t.topPassed
					},
					bottomPassed: function (e) {
						var t = a.get.elementCalculations(),
							n = e || o.onBottomPassed,
							i = "bottomPassed";
						if (e && (a.debug("Adding callback for bottom passed", e), o.onBottomPassed = e), t.bottomPassed ? a.execute(n, i) : o.once || a.remove.occurred(i), e === $) return t.bottomPassed
					},
					passingReverse: function (e) {
						var t = a.get.elementCalculations(),
							n = e || o.onPassingReverse,
							i = "passingReverse";
						if (e && (a.debug("Adding callback for passing reverse", e), o.onPassingReverse = e), t.passing ? o.once || a.remove.occurred(i) : a.get.occurred("passing") && a.execute(n, i), e !== $) return !t.passing
					},
					topVisibleReverse: function (e) {
						var t = a.get.elementCalculations(),
							n = e || o.onTopVisibleReverse,
							i = "topVisibleReverse";
						if (e && (a.debug("Adding callback for top visible reverse", e), o.onTopVisibleReverse = e), t.topVisible ? o.once || a.remove.occurred(i) : a.get.occurred("topVisible") && a.execute(n, i), e === $) return !t.topVisible
					},
					bottomVisibleReverse: function (e) {
						var t = a.get.elementCalculations(),
							n = e || o.onBottomVisibleReverse,
							i = "bottomVisibleReverse";
						if (e && (a.debug("Adding callback for bottom visible reverse", e), o.onBottomVisibleReverse = e), t.bottomVisible ? o.once || a.remove.occurred(i) : a.get.occurred("bottomVisible") && a.execute(n, i), e === $) return !t.bottomVisible
					},
					topPassedReverse: function (e) {
						var t = a.get.elementCalculations(),
							n = e || o.onTopPassedReverse,
							i = "topPassedReverse";
						if (e && (a.debug("Adding callback for top passed reverse", e), o.onTopPassedReverse = e), t.topPassed ? o.once || a.remove.occurred(i) : a.get.occurred("topPassed") && a.execute(n, i), e === $) return !t.onTopPassed
					},
					bottomPassedReverse: function (e) {
						var t = a.get.elementCalculations(),
							n = e || o.onBottomPassedReverse,
							i = "bottomPassedReverse";
						if (e && (a.debug("Adding callback for bottom passed reverse", e), o.onBottomPassedReverse = e), t.bottomPassed ? o.once || a.remove.occurred(i) : a.get.occurred("bottomPassed") && a.execute(n, i), e === $) return !t.bottomPassed
					},
					execute: function (e, t) {
						var n = a.get.elementCalculations(),
							i = a.get.screenCalculations();
						(e = e || !1) && (o.continuous ? (a.debug("Callback being called continuously", t, n), e.call(m, n, i)) : a.get.occurred(t) || (a.debug("Conditions met", t, n), e.call(m, n, i))), a.save.occurred(t)
					},
					remove: {
						fixed: function () {
							a.debug("Removing fixed position"), p.removeClass(i.fixed).css({
								position: "",
								top: "",
								left: "",
								zIndex: ""
							}), o.onUnfixed.call(m)
						},
						placeholder: function () {
							a.debug("Removing placeholder content"), e && e.remove()
						},
						occurred: function (e) {
							if (e) {
								var t = a.cache.occurred;
								t[e] !== $ && !0 === t[e] && (a.debug("Callback can now be called again", e), a.cache.occurred[e] = !1)
							} else a.cache.occurred = {}
						}
					},
					save: {
						calculations: function () {
							a.verbose("Saving all calculations necessary to determine positioning"), a.save.direction(), a.save.screenCalculations(), a.save.elementCalculations()
						},
						occurred: function (e) {
							e && (a.cache.occurred[e] !== $ && !0 === a.cache.occurred[e] || (a.verbose("Saving callback occurred", e), a.cache.occurred[e] = !0))
						},
						scroll: function (e) {
							e = e + o.offset || f.scrollTop() + o.offset, a.cache.scroll = e
						},
						direction: function () {
							var e, t = a.get.scroll(),
								n = a.get.lastScroll();
							return e = n < t && n ? "down" : t < n && n ? "up" : "static", a.cache.direction = e, a.cache.direction
						},
						elementPosition: function () {
							var e = a.cache.element,
								t = a.get.screenSize();
							return a.verbose("Saving element position"), e.fits = e.height < t.height, e.offset = p.offset(), e.width = p.outerWidth(), e.height = p.outerHeight(), a.is.verticallyScrollableContext() && (e.offset.top += f.scrollTop() - f.offset().top), a.is.horizontallyScrollableContext() && (e.offset.left += f.scrollLeft - f.offset().left), a.cache.element = e
						},
						elementCalculations: function () {
							var e = a.get.screenCalculations(),
								t = a.get.elementPosition();
							return o.includeMargin ? (t.margin = {}, t.margin.top = parseInt(p.css("margin-top"), 10), t.margin.bottom = parseInt(p.css("margin-bottom"), 10), t.top = t.offset.top - t.margin.top, t.bottom = t.offset.top + t.height + t.margin.bottom) : (t.top = t.offset.top, t.bottom = t.offset.top + t.height), t.topPassed = e.top >= t.top, t.bottomPassed = e.top >= t.bottom, t.topVisible = e.bottom >= t.top && !t.topPassed, t.bottomVisible = e.bottom >= t.bottom && !t.bottomPassed, t.pixelsPassed = 0, t.percentagePassed = 0, t.onScreen = (t.topVisible || t.passing) && !t.bottomPassed, t.passing = t.topPassed && !t.bottomPassed, t.offScreen = !t.onScreen, t.passing && (t.pixelsPassed = e.top - t.top, t.percentagePassed = (e.top - t.top) / t.height), a.cache.element = t, a.verbose("Updated element calculations", t), t
						},
						screenCalculations: function () {
							var e = a.get.scroll();
							return a.save.direction(), a.cache.screen.top = e, a.cache.screen.bottom = e + a.cache.screen.height, a.cache.screen
						},
						screenSize: function () {
							a.verbose("Saving window position"), a.cache.screen = {
								height: f.height()
							}
						},
						position: function () {
							a.save.screenSize(), a.save.elementPosition()
						}
					},
					get: {
						pixelsPassed: function (e) {
							var t = a.get.elementCalculations();
							return -1 < e.search("%") ? t.height * (parseInt(e, 10) / 100) : parseInt(e, 10)
						},
						occurred: function (e) {
							return a.cache.occurred !== $ && a.cache.occurred[e] || !1
						},
						direction: function () {
							return a.cache.direction === $ && a.save.direction(), a.cache.direction
						},
						elementPosition: function () {
							return a.cache.element === $ && a.save.elementPosition(), a.cache.element
						},
						elementCalculations: function () {
							return a.cache.element === $ && a.save.elementCalculations(), a.cache.element
						},
						screenCalculations: function () {
							return a.cache.screen === $ && a.save.screenCalculations(), a.cache.screen
						},
						screenSize: function () {
							return a.cache.screen === $ && a.save.screenSize(), a.cache.screen
						},
						scroll: function () {
							return a.cache.scroll === $ && a.save.scroll(), a.cache.scroll
						},
						lastScroll: function () {
							return a.cache.screen === $ ? (a.debug("First scroll event, no last scroll could be found"), !1) : a.cache.screen.top
						}
					},
					setting: function (e, t) {
						if (P.isPlainObject(e)) P.extend(!0, o, e);
						else {
							if (t === $) return o[e];
							o[e] = t
						}
					},
					internal: function (e, t) {
						if (P.isPlainObject(e)) P.extend(!0, a, e);
						else {
							if (t === $) return a[e];
							a[e] = t
						}
					},
					debug: function () {
						!o.silent && o.debug && (o.performance ? a.performance.log(arguments) : (a.debug = Function.prototype.bind.call(console.info, console, o.name + ":"), a.debug.apply(console, arguments)))
					},
					verbose: function () {
						!o.silent && o.verbose && o.debug && (o.performance ? a.performance.log(arguments) : (a.verbose = Function.prototype.bind.call(console.info, console, o.name + ":"), a.verbose.apply(console, arguments)))
					},
					error: function () {
						o.silent || (a.error = Function.prototype.bind.call(console.error, console, o.name + ":"), a.error.apply(console, arguments))
					},
					performance: {
						log: function (e) {
							var t, n;
							o.performance && (n = (t = (new Date).getTime()) - (x || t), x = t, C.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: m,
								"Execution Time": n
							})), clearTimeout(a.performance.timer), a.performance.timer = setTimeout(a.performance.display, 500)
						},
						display: function () {
							var e = o.name + ":",
								n = 0;
							x = !1, clearTimeout(a.performance.timer), P.each(C, function (e, t) {
								n += t["Execution Time"]
							}), e += " " + n + "ms", w && (e += " '" + w + "'"), (console.group !== $ || console.table !== $) && 0 < C.length && (console.groupCollapsed(e), console.table ? console.table(C) : P.each(C, function (e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), C = []
						}
					},
					invoke: function (i, e, t) {
						var o, s, n, r = h;
						return e = e || T, t = m || t, "string" == typeof i && r !== $ && (i = i.split(/[\. ]/), o = i.length - 1, P.each(i, function (e, t) {
							var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
							if (P.isPlainObject(r[n]) && e != o) r = r[n];
							else {
								if (r[n] !== $) return s = r[n], !1;
								if (!P.isPlainObject(r[t]) || e == o) return r[t] !== $ ? s = r[t] : a.error(l.method, i), !1;
								r = r[t]
							}
						})), P.isFunction(s) ? n = s.apply(t, e) : s !== $ && (n = s), P.isArray(y) ? y.push(n) : y !== $ ? y = [y, n] : n !== $ && (y = n), s
					}
				}, S ? (h === $ && a.initialize(), h.save.scroll(), h.save.calculations(), a.invoke(k)) : (h !== $ && h.invoke("destroy"), a.initialize())
			}), y !== $ ? y : this
		}, P.fn.visibility.settings = {
			name: "Visibility",
			namespace: "visibility",
			debug: !1,
			verbose: !1,
			performance: !0,
			observeChanges: !0,
			initialCheck: !0,
			refreshOnLoad: !0,
			refreshOnResize: !0,
			checkOnRefresh: !0,
			once: !0,
			continuous: !1,
			offset: 0,
			includeMargin: !1,
			context: D,
			throttle: !1,
			type: !1,
			zIndex: "10",
			transition: "fade in",
			duration: 1e3,
			onPassed: {},
			onOnScreen: !1,
			onOffScreen: !1,
			onPassing: !1,
			onTopVisible: !1,
			onBottomVisible: !1,
			onTopPassed: !1,
			onBottomPassed: !1,
			onPassingReverse: !1,
			onTopVisibleReverse: !1,
			onBottomVisibleReverse: !1,
			onTopPassedReverse: !1,
			onBottomPassedReverse: !1,
			onLoad: function () { },
			onAllLoaded: function () { },
			onFixed: function () { },
			onUnfixed: function () { },
			onUpdate: !1,
			onRefresh: function () { },
			metadata: {
				src: "src"
			},
			className: {
				fixed: "fixed",
				placeholder: "placeholder",
				visible: "visible"
			},
			error: {
				method: "The method you called is not defined.",
				visible: "Element is hidden, you must call refresh after element becomes visible"
			}
		}
	}(jQuery, window, document), window.onbeforeunload = function () {
		window.scrollTo(0, 0), window.top.scrollTo(0, 0)
	}, $(document).ready(function () {
		$(".navigation-btn").on("click", function () {
			$(this).toggleClass("active"), $(".menu-wrapper").toggleClass("show");
			$('.musictemplate, .showcase, .studio-page').toggleClass('posmenu');
		}), new WOW({
			boxClass: "wow",
			animateClass: "animated",
			offset: 0,
			mobile: !1,
			live: !0,
			callback: function (e) { },
			scrollContainer: null,
			resetAnimation: !0
		}).init(), $(".btn-slide").on("click", function (e) {
			e.preventDefault();
			var t = $(this).attr("href"),
				n = $(t).offset().top;
			$("body,html").animate({
				scrollTop: n
			}, 1e3)
		}), $(".music-slider .owl-carousel").owlCarousel({
			items: 1,
			navSpeed: 500,
			autoplay: true,
			loop: true,
			autoplayTimeout: 5000
		}), $("#studio-slider .owl-carousel").owlCarousel({
			items: 1,
			autoplay: true,
			loop: true,
			autoplayTimeout: 5000
		}), $("#scroll-non .owl-carousel").owlCarousel({
			items: 1,
			autoplay: false
		}), $(".music-studios-slider").slick({
			infinite: !0,
			dots: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay:true,
			autoplaySpeed:1500,
			arrows: !0,
			nextArrow: '<div class="next-arrow icon-arrow icon-arrow__black"></div>',
			prevArrow: '<div class="prev-arrow icon-arrow icon-arrow__black"></div>',
			responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					arrows: !1,
					dots: !0
				}
			}, {
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: !1,
					dots: !0
				}
			}]
		}), $(".wall-slider").slick({
			rows: 2,
			slidesPerRow: 4,
			arrows: !0,
			nextArrow: '<div class="next-arrow icon-arrow"></div>',
			prevArrow: '<div class="prev-arrow icon-arrow"></div>',
			speed: 1e3,
			responsive: [{
				breakpoint: 768,
				settings: {
					slidesPerRow: 2,
					infinite: !0,
					arrows: !1,
					dots: !0
				}
			}]
		}), $(".full-slider").slick({
			infinite: !0,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: !0,
			adaptiveHeight: !0,
			nextArrow: '<div class="next-arrow icon-arrow icon-arrow"></div>',
			prevArrow: '<div class="prev-arrow icon-arrow icon-arrow"></div>',
			responsive: [{
				breakpoint: 768,
				settings: {
					arrows: !1,
					dots: !0
				}
			}]
		})
	}), $(".music-toggle").on("click", function (e) {
		e.preventDefault(), $(".music-toggle").removeClass("active"), $(this).addClass("active");
		var t = $(this).attr("data-text");
		$(".music-item-text, .music-title, .music-description").addClass("hide"), $("." + t).removeClass("hide")
	}), $(".studio-tabs-toggle").on("click", function (e) {
		$(".studio-tabs-toggle").removeClass("active"), $(this).addClass("active");
		var t = $(this).attr("data-text");
		$(".studio-tabs-item-text, .studio-tabs .title, .studio-tabs .description").addClass("hide"), $("." + t).removeClass("hide")
	}), $(".case-item").on("click", function (e) {
		e.preventDefault();
		var t = $(this).attr("id");
		$('[data-modal="' + t + '"]').modal({
			transition: "fly left",
			duration: 1e3
		}).modal("show")
	}),
	$('.play-btn').click(function (e) {
		e.preventDefault();
		//e.stopPropagation()
		console.log(e.target)
		var th = $(this);
		th.addClass("YAY")
		var player = th.parent();
		console.log(player);
		var embed_url = th.next().next().data('src');
		var height = player.height();
		console.log("embed_url: " + embed_url)
		var iframe = '<iframe src="' + embed_url + '" width="100%" height="' + height + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
		player.html(iframe);
	}),
	$(".modal .close-btn, .modal .btn-text-close").click(function (e) {
		$(".modal").modal("hide")
	}),
	//  jQuery(function(i) {
	//     i(".player .play-btn").click(function(e) {
	//         e.preventDefault();
	//         var t = i(".player"),
	//             n = '<iframe src="' + i(".player .m_overlay").data("src") + '" width="100%" height="' + t.height() + '" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
	//         t.html(n)
	//     }), i(".modal .close-btn, .modal .btn-text-close").click(function(e) {
	//         i(".modal").modal("hide")
	//     })
	// }),
	$(document).ready(function () {
		$(".animsition").animsition({
			inDuration: 1500,
			outDuration: 800,
			linkElement: ".animsition-link",
			loading: !0,
			loadingParentElement: "body",
			loadingClass: "loaderArea",
			loadingInner: '<img class="loader" src="../static/images/NLYTN.svg" alt=""',
			timeout: true,
			timeoutCountdown: 1200,
			onLoadEvent: !0,
			browser: ["animation-duration", "-webkit-animation-duration"],
			overlay: !1,
			overlayClass: "animsition-overlay-slide",
			overlayParentElement: "body",
			transition: function (e) {
				window.location.href = e
			}
		})
	}), $(window).on("scroll", function () {
		100 < window.pageYOffset ? $(".header-slide").fadeOut("slow") : $(".header-slide").fadeIn("slow")
	}),

	$(document).ready(function () {
		function homeh() {
			var hometext = jQuery('.header')

			hometext.css({
				"height": jQuery(window).height() + "px"
			});
			jQuery('#scroll').css({
				"margin-top": jQuery(window).height() + "px"
			});

		}

		homeh();
		jQuery(window).resize(homeh);


		if (jQuery(window).width() > 481) {
			function promoEffect() {
				var pro = jQuery('.header');
				var where = window.pageYOffset || document.documentElement.scrollTop;
				pro.css({
					'transform': 'scale(' + (100 - where / 100) / 100 + ')',
					'opacity': (1 - (where / 20) / 19),
					//    'z-index' : -1000
				})
			}
			promoEffect();
			jQuery(window).scroll(promoEffect);
		} else {
			function promoEffect() {
				var pro = jQuery('.header');
				var where = window.pageYOffset || document.documentElement.scrollTop;
				pro.css({
					'transform': 'scale(' + (100 - where / 100) / 99 + ')',
					'opacity': (1 - (where / 20) / 15),
					//    'z-index' : -1000
				})
			}
			promoEffect();
			jQuery(window).scroll(promoEffect);

		}


		var i = $("body").attr("class");
		$(".studio-tabs-toggle").each(function () {
			var e = $(this).attr("id");
			~i.indexOf(e) && ($(this).addClass("active"), $(this).click())
		}), $(".music-nav a").each(function (e) {
			$(this).on("click", function () {
				$(".owl-dots button").eq($(this).index()).click();
			})
		}), $(".studio-tabs-nav a").each(function (e) {
			$(this).on("click", function () {
				$(".owl-dots button").eq($(this).index()).click();
			})
		}), $(".modal .close-btn, .modal .btn-text-close").on("click", function () {
			$("iframe").contents().find("video").each(function () {
				this.pause()
			}), $("video").each(function () {
				this.pause()
			})
		})
	});

$('.click-nav a').on('click', function () {
	window.location = $(this).attr('href');
});

$(document).ready(function () {

	jQuery(".modal .close-btn, .modal .btn-text-close").click(function () {
		// changes the iframe src to prevent playback or stop the video playback in our case
		$('iframe').each(function () {
			var el_src = $(this).attr("src");
			$(this).attr("src", el_src);
		});
		//click function
	});

	$('.btn-text-close').click(function () {
		$('iframe').each(function () {

			$(this).contentWindow.postMessage(
				'{"event":"command","func":"pauseVideo","args":""}',
				'*');
		});
		// ?&autoplay=1
	});

	jQuery(".modal .close-btn, .modal .btn-text-close").click(function () {
		$('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
	});

});

$(document).ready(function () {

	$(".wall-slider__item").on("mouseover", function () {
		$(this).find('.wall-name').addClass('wall-hover');
		$(this).find('img').addClass('wall-image-hover');

	});

	$(".wall-slider__item").on("mouseleave", function () {
		$(this).find('.wall-name').removeClass('wall-hover');
		$(this).find('img').removeClass('wall-image-hover');
	});


});


$(document).ready(function () {
	let url = window.location.href;
	let arrayLinks = $('.studio-tabs-toggle');
	arrayLinks.each(function (i) {
		if (url === this.href) {
			// console.log(i)
			$(this).addClass('active');
		}
	});

	$(".studio-tabs-toggle").each(function (e) {
		if ($(this).hasClass('active')) {
			$(".owl-dots button").eq($(this).index()).click();
		}
	})
});



$('.btn-filter').on('click', function () {
	$('.btn-filter').removeClass('active');
	$(this).addClass('active');
});

let startImage = $('.team-img-inner');
let secondImage = $('.team-img-inner-2');
secondImage.hide();
startImage.on('click', function () {
	let visibleElement = $(this).parent().find(secondImage);
	visibleElement.show();
	setTimeout(function () {
		visibleElement.hide();
	}, 2000);
	return false;
});


$('#music-1').click(function () {
	$(this).attr('target', '_blank');
})