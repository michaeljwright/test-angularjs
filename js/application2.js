window.Modernizr = function (e, t, n) {
        function i(e) {
            h.cssText = e
        }

        function r(e, t) {
            return typeof e === t
        }
        var o, a, s, u = "2.6.2",
            l = {},
            c = !0,
            f = t.documentElement,
            d = "modernizr",
            p = t.createElement(d),
            h = p.style,
            m = {}.toString,
            g = " -webkit- -moz- -o- -ms- ".split(" "),
            v = {
                svg: "http://www.w3.org/2000/svg"
            },
            y = {},
            $ = [],
            b = $.slice,
            x = function (e, n, i, r) {
                var o, a, s, u, l = t.createElement("div"),
                    c = t.body,
                    p = c || t.createElement("body");
                if (parseInt(i, 10))
                    for (; i--;) s = t.createElement("div"), s.id = r ? r[i] : d + (i + 1), l.appendChild(s);
                return o = ["&#173;", '<style id="s', d, '">', e, "</style>"].join(""), l.id = d, (c ? l : p).innerHTML += o, p.appendChild(l), c || (p.style.background = "", p.style.overflow = "hidden", u = f.style.overflow, f.style.overflow = "hidden", f.appendChild(p)), a = n(l, e), c ? l.parentNode.removeChild(l) : (p.parentNode.removeChild(p), f.style.overflow = u), !!a
            },
            w = function (t) {
                var n = e.matchMedia || e.msMatchMedia;
                if (n) return n(t).matches;
                var i;
                return x("@media " + t + " { #" + d + " { position: absolute; } }", function (t) {
                    i = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
                }), i
            },
            C = {}.hasOwnProperty;
        s = r(C, "undefined") || r(C.call, "undefined") ? function (e, t) {
            return t in e && r(e.constructor.prototype[t], "undefined")
        } : function (e, t) {
            return C.call(e, t)
        }, Function.prototype.bind || (Function.prototype.bind = function (e) {
            var t = this;
            if ("function" != typeof t) throw new TypeError;
            var n = b.call(arguments, 1),
                i = function () {
                    if (this instanceof i) {
                        var r = function () {};
                        r.prototype = t.prototype;
                        var o = new r,
                            a = t.apply(o, n.concat(b.call(arguments)));
                        return Object(a) === a ? a : o
                    }
                    return t.apply(e, n.concat(b.call(arguments)))
                };
            return i
        }), y.touch = function () {
            var n;
            return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : x(["@media (", g.join("touch-enabled),("), d, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (e) {
                n = 9 === e.offsetTop
            }), n
        }, y.svg = function () {
            return !!t.createElementNS && !!t.createElementNS(v.svg, "svg").createSVGRect
        }, y.inlinesvg = function () {
            var e = t.createElement("div");
            return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == v.svg
        }, y.svgclippaths = function () {
            return !!t.createElementNS && /SVGClipPath/.test(m.call(t.createElementNS(v.svg, "clipPath")))
        };
        for (var k in y) s(y, k) && (a = k.toLowerCase(), l[a] = y[k](), $.push((l[a] ? "" : "no-") + a));
        return l.addTest = function (e, t) {
                if ("object" == typeof e)
                    for (var i in e) s(e, i) && l.addTest(i, e[i]);
                else {
                    if (e = e.toLowerCase(), l[e] !== n) return l;
                    t = "function" == typeof t ? t() : t, "undefined" != typeof c && c && (f.className += " " + (t ? "" : "no-") + e), l[e] = t
                }
                return l
            }, i(""), p = o = null,
            function (e, t) {
                function n(e, t) {
                    var n = e.createElement("p"),
                        i = e.getElementsByTagName("head")[0] || e.documentElement;
                    return n.innerHTML = "x<style>" + t + "</style>", i.insertBefore(n.lastChild, i.firstChild)
                }

                function i() {
                    var e = v.elements;
                    return "string" == typeof e ? e.split(" ") : e
                }

                function r(e) {
                    var t = g[e[h]];
                    return t || (t = {}, m++, e[h] = m, g[m] = t), t
                }

                function o(e, n, i) {
                    if (n || (n = t), c) return n.createElement(e);
                    i || (i = r(n));
                    var o;
                    return o = i.cache[e] ? i.cache[e].cloneNode() : p.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e), o.canHaveChildren && !d.test(e) ? i.frag.appendChild(o) : o
                }

                function a(e, n) {
                    if (e || (e = t), c) return e.createDocumentFragment();
                    n = n || r(e);
                    for (var o = n.frag.cloneNode(), a = 0, s = i(), u = s.length; u > a; a++) o.createElement(s[a]);
                    return o
                }

                function s(e, t) {
                    t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
                        return v.shivMethods ? o(n, e, t) : t.createElem(n)
                    }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/\w+/g, function (e) {
                        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                    }) + ");return n}")(v, t.frag)
                }

                function u(e) {
                    e || (e = t);
                    var i = r(e);
                    return v.shivCSS && !l && !i.hasCSS && (i.hasCSS = !!n(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), c || s(e, i), e
                }
                var l, c, f = e.html5 || {},
                    d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    h = "_html5shiv",
                    m = 0,
                    g = {};
                ! function () {
                    try {
                        var e = t.createElement("a");
                        e.innerHTML = "<xyz></xyz>", l = "hidden" in e, c = 1 == e.childNodes.length || function () {
                            t.createElement("a");
                            var e = t.createDocumentFragment();
                            return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                        }()
                    } catch (n) {
                        l = !0, c = !0
                    }
                }();
                var v = {
                    elements: f.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: f.shivCSS !== !1,
                    supportsUnknownElements: c,
                    shivMethods: f.shivMethods !== !1,
                    type: "default",
                    shivDocument: u,
                    createElement: o,
                    createDocumentFragment: a
                };
                e.html5 = v, u(t)
            }(this, t), l._version = u, l._prefixes = g, l.mq = w, l.testStyles = x, f.className = f.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (c ? " js " + $.join(" ") : ""), l
    }(this, this.document),
    function (e, t, n) {
        function i(e) {
            return "[object Function]" == g.call(e)
        }

        function r(e) {
            return "string" == typeof e
        }

        function o() {}

        function a(e) {
            return !e || "loaded" == e || "complete" == e || "uninitialized" == e
        }

        function s() {
            var e = v.shift();
            y = 1, e ? e.t ? h(function () {
                ("c" == e.t ? d.injectCss : d.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
            }, 0) : (e(), s()) : y = 0
        }

        function u(e, n, i, r, o, u, l) {
            function c(t) {
                if (!p && a(f.readyState) && ($.r = p = 1, !y && s(), f.onload = f.onreadystatechange = null, t)) {
                    "img" != e && h(function () {
                        x.removeChild(f)
                    }, 50);
                    for (var i in S[n]) S[n].hasOwnProperty(i) && S[n][i].onload()
                }
            }
            var l = l || d.errorTimeout,
                f = t.createElement(e),
                p = 0,
                g = 0,
                $ = {
                    t: i,
                    s: n,
                    e: o,
                    a: u,
                    x: l
                };
            1 === S[n] && (g = 1, S[n] = []), "object" == e ? f.data = n : (f.src = n, f.type = e), f.width = f.height = "0", f.onerror = f.onload = f.onreadystatechange = function () {
                c.call(this, g)
            }, v.splice(r, 0, $), "img" != e && (g || 2 === S[n] ? (x.insertBefore(f, b ? null : m), h(c, l)) : S[n].push(f))
        }

        function l(e, t, n, i, o) {
            return y = 0, t = t || "j", r(e) ? u("c" == t ? C : w, e, t, this.i++, n, i, o) : (v.splice(this.i++, 0, e), 1 == v.length && s()), this
        }

        function c() {
            var e = d;
            return e.loader = {
                load: l,
                i: 0
            }, e
        }
        var f, d, p = t.documentElement,
            h = e.setTimeout,
            m = t.getElementsByTagName("script")[0],
            g = {}.toString,
            v = [],
            y = 0,
            $ = "MozAppearance" in p.style,
            b = $ && !!t.createRange().compareNode,
            x = b ? p : m.parentNode,
            p = e.opera && "[object Opera]" == g.call(e.opera),
            p = !!t.attachEvent && !p,
            w = $ ? "object" : p ? "script" : "img",
            C = p ? "script" : w,
            k = Array.isArray || function (e) {
                return "[object Array]" == g.call(e)
            },
            T = [],
            S = {},
            E = {
                timeout: function (e, t) {
                    return t.length && (e.timeout = t[0]), e
                }
            };
        d = function (e) {
            function t(e) {
                var t, n, i, e = e.split("!"),
                    r = T.length,
                    o = e.pop(),
                    a = e.length,
                    o = {
                        url: o,
                        origUrl: o,
                        prefixes: e
                    };
                for (n = 0; a > n; n++) i = e[n].split("="), (t = E[i.shift()]) && (o = t(o, i));
                for (n = 0; r > n; n++) o = T[n](o);
                return o
            }

            function a(e, r, o, a, s) {
                var u = t(e),
                    l = u.autoCallback;
                u.url.split(".").pop().split("?").shift(), u.bypass || (r && (r = i(r) ? r : r[e] || r[a] || r[e.split("/").pop().split("?")[0]]), u.instead ? u.instead(e, r, o, a, s) : (S[u.url] ? u.noexec = !0 : S[u.url] = 1, o.load(u.url, u.forceCSS || !u.forceJS && "css" == u.url.split(".").pop().split("?").shift() ? "c" : n, u.noexec, u.attrs, u.timeout), (i(r) || i(l)) && o.load(function () {
                    c(), r && r(u.origUrl, s, a), l && l(u.origUrl, s, a), S[u.url] = 2
                })))
            }

            function s(e, t) {
                function n(e, n) {
                    if (e) {
                        if (r(e)) n || (f = function () {
                            var e = [].slice.call(arguments);
                            d.apply(this, e), p()
                        }), a(e, f, t, 0, l);
                        else if (Object(e) === e)
                            for (u in s = function () {
                                var t, n = 0;
                                for (t in e) e.hasOwnProperty(t) && n++;
                                return n
                            }(), e) e.hasOwnProperty(u) && (!n && !--s && (i(f) ? f = function () {
                                var e = [].slice.call(arguments);
                                d.apply(this, e), p()
                            } : f[u] = function (e) {
                                return function () {
                                    var t = [].slice.call(arguments);
                                    e && e.apply(this, t), p()
                                }
                            }(d[u])), a(e[u], f, t, u, l))
                    } else !n && p()
                }
                var s, u, l = !!e.test,
                    c = e.load || e.both,
                    f = e.callback || o,
                    d = f,
                    p = e.complete || o;
                n(l ? e.yep : e.nope, !!c), c && n(c)
            }
            var u, l, f = this.yepnope.loader;
            if (r(e)) a(e, 0, f, 0);
            else if (k(e))
                for (u = 0; u < e.length; u++) l = e[u], r(l) ? a(l, 0, f, 0) : k(l) ? d(l) : Object(l) === l && s(l, f);
            else Object(e) === e && s(e, f)
        }, d.addPrefix = function (e, t) {
            E[e] = t
        }, d.addFilter = function (e) {
            T.push(e)
        }, d.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", f = function () {
            t.removeEventListener("DOMContentLoaded", f, 0), t.readyState = "complete"
        }, 0)), e.yepnope = c(), e.yepnope.executeStack = s, e.yepnope.injectJs = function (e, n, i, r, u, l) {
            var c, f, p = t.createElement("script"),
                r = r || d.errorTimeout;
            p.src = e;
            for (f in i) p.setAttribute(f, i[f]);
            n = l ? s : n || o, p.onreadystatechange = p.onload = function () {
                !c && a(p.readyState) && (c = 1, n(), p.onload = p.onreadystatechange = null)
            }, h(function () {
                c || (c = 1, n(1))
            }, r), u ? p.onload() : m.parentNode.insertBefore(p, m)
        }, e.yepnope.injectCss = function (e, n, i, r, a, u) {
            var l, r = t.createElement("link"),
                n = u ? s : n || o;
            r.href = e, r.rel = "stylesheet", r.type = "text/css";
            for (l in i) r.setAttribute(l, i[l]);
            a || (m.parentNode.insertBefore(r, m), h(n, 0))
        }
    }(this, document), Modernizr.load = function () {
        yepnope.apply(window, [].slice.call(arguments, 0))
    }, Modernizr.addTest("ie8compat", function () {
        return !window.addEventListener && document.documentMode && 7 === document.documentMode
    }),
    /*!
     * jQuery JavaScript Library v1.8.2
     * http://jquery.com/
     *
     * Includes Sizzle.js
     * http://sizzlejs.com/
     *
     * Copyright 2012 jQuery Foundation and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: Thu Sep 20 2012 21:13:05 GMT-0400 (Eastern Daylight Time)
     */
    function (e, t) {
        function n(e) {
            var t = ht[e] = {};
            return G.each(e.split(tt), function (e, n) {
                t[n] = !0
            }), t
        }

        function i(e, n, i) {
            if (i === t && 1 === e.nodeType) {
                var r = "data-" + n.replace(gt, "-$1").toLowerCase();
                if (i = e.getAttribute(r), "string" == typeof i) {
                    try {
                        i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : mt.test(i) ? G.parseJSON(i) : i
                    } catch (o) {}
                    G.data(e, n, i)
                } else i = t
            }
            return i
        }

        function r(e) {
            var t;
            for (t in e)
                if (("data" !== t || !G.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function o() {
            return !1
        }

        function a() {
            return !0
        }

        function s(e) {
            return !e || !e.parentNode || 11 === e.parentNode.nodeType
        }

        function u(e, t) {
            do e = e[t]; while (e && 1 !== e.nodeType);
            return e
        }

        function l(e, t, n) {
            if (t = t || 0, G.isFunction(t)) return G.grep(e, function (e, i) {
                var r = !!t.call(e, i, e);
                return r === n
            });
            if (t.nodeType) return G.grep(e, function (e) {
                return e === t === n
            });
            if ("string" == typeof t) {
                var i = G.grep(e, function (e) {
                    return 1 === e.nodeType
                });
                if (Ht.test(t)) return G.filter(t, i, !n);
                t = G.filter(t, i)
            }
            return G.grep(e, function (e) {
                return G.inArray(e, t) >= 0 === n
            })
        }

        function c(e) {
            var t = Pt.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function f(e, t) {
            return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
        }

        function d(e, t) {
            if (1 === t.nodeType && G.hasData(e)) {
                var n, i, r, o = G._data(e),
                    a = G._data(t, o),
                    s = o.events;
                if (s) {
                    delete a.handle, a.events = {};
                    for (n in s)
                        for (i = 0, r = s[n].length; r > i; i++) G.event.add(t, n, s[n][i])
                }
                a.data && (a.data = G.extend({}, a.data))
            }
        }

        function p(e, t) {
            var n;
            1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), G.support.html5Clone && e.innerHTML && !G.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Qt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.selected = e.defaultSelected : "input" === n || "textarea" === n ? t.defaultValue = e.defaultValue : "script" === n && t.text !== e.text && (t.text = e.text), t.removeAttribute(G.expando))
        }

        function h(e) {
            return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName("*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll("*") : []
        }

        function m(e) {
            Qt.test(e.type) && (e.defaultChecked = e.checked)
        }

        function g(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = yn.length; r--;)
                if (t = yn[r] + n, t in e) return t;
            return i
        }

        function v(e, t) {
            return e = t || e, "none" === G.css(e, "display") || !G.contains(e.ownerDocument, e)
        }

        function y(e, t) {
            for (var n, i, r = [], o = 0, a = e.length; a > o; o++) n = e[o], n.style && (r[o] = G._data(n, "olddisplay"), t ? (r[o] || "none" !== n.style.display || (n.style.display = ""), "" === n.style.display && v(n) && (r[o] = G._data(n, "olddisplay", w(n.nodeName)))) : (i = nn(n, "display"), r[o] || "none" === i || G._data(n, "olddisplay", i)));
            for (o = 0; a > o; o++) n = e[o], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? r[o] || "" : "none"));
            return e
        }

        function $(e, t, n) {
            var i = fn.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function b(e, t, n, i) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > r; r += 2) "margin" === n && (o += G.css(e, n + vn[r], !0)), i ? ("content" === n && (o -= parseFloat(nn(e, "padding" + vn[r])) || 0), "margin" !== n && (o -= parseFloat(nn(e, "border" + vn[r] + "Width")) || 0)) : (o += parseFloat(nn(e, "padding" + vn[r])) || 0, "padding" !== n && (o += parseFloat(nn(e, "border" + vn[r] + "Width")) || 0));
            return o
        }

        function x(e, t, n) {
            var i = "width" === t ? e.offsetWidth : e.offsetHeight,
                r = !0,
                o = G.support.boxSizing && "border-box" === G.css(e, "boxSizing");
            if (0 >= i || null == i) {
                if (i = nn(e, t), (0 > i || null == i) && (i = e.style[t]), dn.test(i)) return i;
                r = o && (G.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
            }
            return i + b(e, t, n || (o ? "border" : "content"), r) + "px"
        }

        function w(e) {
            if (hn[e]) return hn[e];
            var t = G("<" + e + ">").appendTo(B.body),
                n = t.css("display");
            return t.remove(), ("none" === n || "" === n) && (rn = B.body.appendChild(rn || G.extend(B.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            })), on && rn.createElement || (on = (rn.contentWindow || rn.contentDocument).document, on.write("<!doctype html><html><body>"), on.close()), t = on.body.appendChild(on.createElement(e)), n = nn(t, "display"), B.body.removeChild(rn)), hn[e] = n, n
        }

        function C(e, t, n, i) {
            var r;
            if (G.isArray(t)) G.each(t, function (t, r) {
                n || xn.test(e) ? i(e, r) : C(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
            });
            else if (n || "object" !== G.type(t)) i(e, t);
            else
                for (r in t) C(e + "[" + r + "]", t[r], n, i)
        }

        function k(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, r, o, a = t.toLowerCase().split(tt),
                    s = 0,
                    u = a.length;
                if (G.isFunction(n))
                    for (; u > s; s++) i = a[s], o = /^\+/.test(i), o && (i = i.substr(1) || "*"), r = e[i] = e[i] || [], r[o ? "unshift" : "push"](n)
            }
        }

        function T(e, n, i, r, o, a) {
            o = o || n.dataTypes[0], a = a || {}, a[o] = !0;
            for (var s, u = e[o], l = 0, c = u ? u.length : 0, f = e === Fn; c > l && (f || !s); l++) s = u[l](n, i, r), "string" == typeof s && (!f || a[s] ? s = t : (n.dataTypes.unshift(s), s = T(e, n, i, r, s, a)));
            return !f && s || a["*"] || (s = T(e, n, i, r, "*", a)), s
        }

        function S(e, n) {
            var i, r, o = G.ajaxSettings.flatOptions || {};
            for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
            r && G.extend(!0, e, r)
        }

        function E(e, n, i) {
            var r, o, a, s, u = e.contents,
                l = e.dataTypes,
                c = e.responseFields;
            for (o in c) o in i && (n[c[o]] = i[o]);
            for (;
                "*" === l[0];) l.shift(), r === t && (r = e.mimeType || n.getResponseHeader("content-type"));
            if (r)
                for (o in u)
                    if (u[o] && u[o].test(r)) {
                        l.unshift(o);
                        break
                    }
            if (l[0] in i) a = l[0];
            else {
                for (o in i) {
                    if (!l[0] || e.converters[o + " " + l[0]]) {
                        a = o;
                        break
                    }
                    s || (s = o)
                }
                a = a || s
            }
            return a ? (a !== l[0] && l.unshift(a), i[a]) : void 0
        }

        function j(e, t) {
            var n, i, r, o, a = e.dataTypes.slice(),
                s = a[0],
                u = {},
                l = 0;
            if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), a[1])
                for (n in e.converters) u[n.toLowerCase()] = e.converters[n];
            for (; r = a[++l];)
                if ("*" !== r) {
                    if ("*" !== s && s !== r) {
                        if (n = u[s + " " + r] || u["* " + r], !n)
                            for (i in u)
                                if (o = i.split(" "), o[1] === r && (n = u[s + " " + o[0]] || u["* " + o[0]])) {
                                    n === !0 ? n = u[i] : u[i] !== !0 && (r = o[0], a.splice(l--, 0, r));
                                    break
                                }
                        if (n !== !0)
                            if (n && e["throws"]) t = n(t);
                            else try {
                                t = n(t)
                            } catch (c) {
                                return {
                                    state: "parsererror",
                                    error: n ? c : "No conversion from " + s + " to " + r
                                }
                            }
                    }
                    s = r
                }
            return {
                state: "success",
                data: t
            }
        }

        function A() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        }

        function N() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }

        function M() {
            return setTimeout(function () {
                Yn = t
            }, 0), Yn = G.now()
        }

        function _(e, t) {
            G.each(t, function (t, n) {
                for (var i = (ei[t] || []).concat(ei["*"]), r = 0, o = i.length; o > r; r++)
                    if (i[r].call(e, t, n)) return
            })
        }

        function O(e, t, n) {
            var i, r = 0,
                o = Zn.length,
                a = G.Deferred().always(function () {
                    delete s.elem
                }),
                s = function () {
                    for (var t = Yn || M(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), r = 0, o = u.tweens.length; o > r; r++) u.tweens[r].run(i);
                    return a.notifyWith(e, [u, i, n]), 1 > i && o ? n : (a.resolveWith(e, [u]), !1)
                },
                u = a.promise({
                    elem: e,
                    props: G.extend({}, t),
                    opts: G.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Yn || M(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (t, n) {
                        var i = G.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function (t) {
                        for (var n = 0, i = t ? u.tweens.length : 0; i > n; n++) u.tweens[n].run(1);
                        return t ? a.resolveWith(e, [u, t]) : a.rejectWith(e, [u, t]), this
                    }
                }),
                l = u.props;
            for (L(l, u.opts.specialEasing); o > r; r++)
                if (i = Zn[r].call(u, e, l, u.opts)) return i;
            return _(u, l), G.isFunction(u.opts.start) && u.opts.start.call(e, u), G.fx.timer(G.extend(s, {
                anim: u,
                queue: u.opts.queue,
                elem: e
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function L(e, t) {
            var n, i, r, o, a;
            for (n in e)
                if (i = G.camelCase(n), r = t[i], o = e[n], G.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = G.cssHooks[i], a && "expand" in a) {
                    o = a.expand(o), delete e[i];
                    for (n in o) n in e || (e[n] = o[n], t[n] = r)
                } else t[i] = r
        }

        function D(e, t, n) {
            var i, r, o, a, s, u, l, c, f = this,
                d = e.style,
                p = {},
                h = [],
                m = e.nodeType && v(e);
            n.queue || (l = G._queueHooks(e, "fx"), null == l.unqueued && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function () {
                l.unqueued || c()
            }), l.unqueued++, f.always(function () {
                f.always(function () {
                    l.unqueued--, G.queue(e, "fx").length || l.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === G.css(e, "display") && "none" === G.css(e, "float") && (G.support.inlineBlockNeedsLayout && "inline" !== w(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", G.support.shrinkWrapBlocks || f.done(function () {
                d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (o = t[i], Jn.exec(o)) {
                    if (delete t[i], o === (m ? "hide" : "show")) continue;
                    h.push(i)
                }
            if (a = h.length)
                for (s = G._data(e, "fxshow") || G._data(e, "fxshow", {}), m ? G(e).show() : f.done(function () {
                    G(e).hide()
                }), f.done(function () {
                    var t;
                    G.removeData(e, "fxshow", !0);
                    for (t in p) G.style(e, t, p[t])
                }), i = 0; a > i; i++) r = h[i], u = f.createTween(r, m ? s[r] : 0), p[r] = s[r] || G.style(e, r), r in s || (s[r] = u.start, m && (u.end = u.start, u.start = "width" === r || "height" === r ? 1 : 0))
        }

        function H(e, t, n, i, r) {
            return new H.prototype.init(e, t, n, i, r)
        }

        function F(e, t) {
            var n, i = {
                    height: e
                },
                r = 0;
            for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = vn[r], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function q(e) {
            return G.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
        }
        var P, R, B = e.document,
            I = e.location,
            z = e.navigator,
            W = e.jQuery,
            U = e.$,
            X = Array.prototype.push,
            V = Array.prototype.slice,
            Y = Array.prototype.indexOf,
            Q = Object.prototype.toString,
            J = Object.prototype.hasOwnProperty,
            K = String.prototype.trim,
            G = function (e, t) {
                return new G.fn.init(e, t, P)
            },
            Z = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
            et = /\S/,
            tt = /\s+/,
            nt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            it = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
            rt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ot = /^[\],:{}\s]*$/,
            at = /(?:^|:|,)(?:\s*\[)+/g,
            st = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            ut = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
            lt = /^-ms-/,
            ct = /-([\da-z])/gi,
            ft = function (e, t) {
                return (t + "").toUpperCase()
            },
            dt = function () {
                B.addEventListener ? (B.removeEventListener("DOMContentLoaded", dt, !1), G.ready()) : "complete" === B.readyState && (B.detachEvent("onreadystatechange", dt), G.ready())
            },
            pt = {};
        G.fn = G.prototype = {
            constructor: G,
            init: function (e, n, i) {
                var r, o, a;
                if (!e) return this;
                if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
                if ("string" == typeof e) {
                    if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : it.exec(e), !r || !r[1] && n) return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
                    if (r[1]) return n = n instanceof G ? n[0] : n, a = n && n.nodeType ? n.ownerDocument || n : B, e = G.parseHTML(r[1], a, !0), rt.test(r[1]) && G.isPlainObject(n) && this.attr.call(e, n, !0), G.merge(this, e);
                    if (o = B.getElementById(r[2]), o && o.parentNode) {
                        if (o.id !== r[2]) return i.find(e);
                        this.length = 1, this[0] = o
                    }
                    return this.context = B, this.selector = e, this
                }
                return G.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), G.makeArray(e, this))
            },
            selector: "",
            jquery: "1.8.2",
            length: 0,
            size: function () {
                return this.length
            },
            toArray: function () {
                return V.call(this)
            },
            get: function (e) {
                return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
            },
            pushStack: function (e, t, n) {
                var i = G.merge(this.constructor(), e);
                return i.prevObject = this, i.context = this.context, "find" === t ? i.selector = this.selector + (this.selector ? " " : "") + n : t && (i.selector = this.selector + "." + t + "(" + n + ")"), i
            },
            each: function (e, t) {
                return G.each(this, e, t)
            },
            ready: function (e) {
                return G.ready.promise().done(e), this
            },
            eq: function (e) {
                return e = +e, -1 === e ? this.slice(e) : this.slice(e, e + 1)
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            slice: function () {
                return this.pushStack(V.apply(this, arguments), "slice", V.call(arguments).join(","))
            },
            map: function (e) {
                return this.pushStack(G.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            },
            end: function () {
                return this.prevObject || this.constructor(null)
            },
            push: X,
            sort: [].sort,
            splice: [].splice
        }, G.fn.init.prototype = G.fn, G.extend = G.fn.extend = function () {
            var e, n, i, r, o, a, s = arguments[0] || {},
                u = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || G.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++)
                if (null != (e = arguments[u]))
                    for (n in e) i = s[n], r = e[n], s !== r && (c && r && (G.isPlainObject(r) || (o = G.isArray(r))) ? (o ? (o = !1, a = i && G.isArray(i) ? i : []) : a = i && G.isPlainObject(i) ? i : {}, s[n] = G.extend(c, a, r)) : r !== t && (s[n] = r));
            return s
        }, G.extend({
            noConflict: function (t) {
                return e.$ === G && (e.$ = U), t && e.jQuery === G && (e.jQuery = W), G
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function (e) {
                e ? G.readyWait++ : G.ready(!0)
            },
            ready: function (e) {
                if (e === !0 ? !--G.readyWait : !G.isReady) {
                    if (!B.body) return setTimeout(G.ready, 1);
                    G.isReady = !0, e !== !0 && --G.readyWait > 0 || (R.resolveWith(B, [G]), G.fn.trigger && G(B).trigger("ready").off("ready"))
                }
            },
            isFunction: function (e) {
                return "function" === G.type(e)
            },
            isArray: Array.isArray || function (e) {
                return "array" === G.type(e)
            },
            isWindow: function (e) {
                return null != e && e == e.window
            },
            isNumeric: function (e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            type: function (e) {
                return null == e ? String(e) : pt[Q.call(e)] || "object"
            },
            isPlainObject: function (e) {
                if (!e || "object" !== G.type(e) || e.nodeType || G.isWindow(e)) return !1;
                try {
                    if (e.constructor && !J.call(e, "constructor") && !J.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                var i;
                for (i in e);
                return i === t || J.call(e, i)
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            error: function (e) {
                throw new Error(e)
            },
            parseHTML: function (e, t, n) {
                var i;
                return e && "string" == typeof e ? ("boolean" == typeof t && (n = t, t = 0), t = t || B, (i = rt.exec(e)) ? [t.createElement(i[1])] : (i = G.buildFragment([e], t, n ? null : []), G.merge([], (i.cacheable ? G.clone(i.fragment) : i.fragment).childNodes))) : null
            },
            parseJSON: function (t) {
                return t && "string" == typeof t ? (t = G.trim(t), e.JSON && e.JSON.parse ? e.JSON.parse(t) : ot.test(t.replace(st, "@").replace(ut, "]").replace(at, "")) ? new Function("return " + t)() : (G.error("Invalid JSON: " + t), void 0)) : null
            },
            parseXML: function (n) {
                var i, r;
                if (!n || "string" != typeof n) return null;
                try {
                    e.DOMParser ? (r = new DOMParser, i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
                } catch (o) {
                    i = t
                }
                return i && i.documentElement && !i.getElementsByTagName("parsererror").length || G.error("Invalid XML: " + n), i
            },
            noop: function () {},
            globalEval: function (t) {
                t && et.test(t) && (e.execScript || function (t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function (e) {
                return e.replace(lt, "ms-").replace(ct, ft)
            },
            nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function (e, n, i) {
                var r, o = 0,
                    a = e.length,
                    s = a === t || G.isFunction(e);
                if (i)
                    if (s) {
                        for (r in e)
                            if (n.apply(e[r], i) === !1) break
                    } else
                        for (; a > o && n.apply(e[o++], i) !== !1;);
                else if (s) {
                    for (r in e)
                        if (n.call(e[r], r, e[r]) === !1) break
                } else
                    for (; a > o && n.call(e[o], o, e[o++]) !== !1;);
                return e
            },
            trim: K && !K.call("﻿ ") ? function (e) {
                return null == e ? "" : K.call(e)
            } : function (e) {
                return null == e ? "" : (e + "").replace(nt, "")
            },
            makeArray: function (e, t) {
                var n, i = t || [];
                return null != e && (n = G.type(e), null == e.length || "string" === n || "function" === n || "regexp" === n || G.isWindow(e) ? X.call(i, e) : G.merge(i, e)), i
            },
            inArray: function (e, t, n) {
                var i;
                if (t) {
                    if (Y) return Y.call(t, e, n);
                    for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function (e, n) {
                var i = n.length,
                    r = e.length,
                    o = 0;
                if ("number" == typeof i)
                    for (; i > o; o++) e[r++] = n[o];
                else
                    for (; n[o] !== t;) e[r++] = n[o++];
                return e.length = r, e
            },
            grep: function (e, t, n) {
                var i, r = [],
                    o = 0,
                    a = e.length;
                for (n = !!n; a > o; o++) i = !!t(e[o], o), n !== i && r.push(e[o]);
                return r
            },
            map: function (e, n, i) {
                var r, o, a = [],
                    s = 0,
                    u = e.length,
                    l = e instanceof G || u !== t && "number" == typeof u && (u > 0 && e[0] && e[u - 1] || 0 === u || G.isArray(e));
                if (l)
                    for (; u > s; s++) r = n(e[s], s, i), null != r && (a[a.length] = r);
                else
                    for (o in e) r = n(e[o], o, i), null != r && (a[a.length] = r);
                return a.concat.apply([], a)
            },
            guid: 1,
            proxy: function (e, n) {
                var i, r, o;
                return "string" == typeof n && (i = e[n], n = e, e = i), G.isFunction(e) ? (r = V.call(arguments, 2), o = function () {
                    return e.apply(n, r.concat(V.call(arguments)))
                }, o.guid = e.guid = e.guid || G.guid++, o) : t
            },
            access: function (e, n, i, r, o, a, s) {
                var u, l = null == i,
                    c = 0,
                    f = e.length;
                if (i && "object" == typeof i) {
                    for (c in i) G.access(e, n, c, i[c], 1, a, r);
                    o = 1
                } else if (r !== t) {
                    if (u = s === t && G.isFunction(r), l && (u ? (u = n, n = function (e, t, n) {
                        return u.call(G(e), n)
                    }) : (n.call(e, r), n = null)), n)
                        for (; f > c; c++) n(e[c], i, u ? r.call(e[c], c, n(e[c], i)) : r, s);
                    o = 1
                }
                return o ? e : l ? n.call(e) : f ? n(e[0], i) : a
            },
            now: function () {
                return (new Date).getTime()
            }
        }), G.ready.promise = function (t) {
            if (!R)
                if (R = G.Deferred(), "complete" === B.readyState) setTimeout(G.ready, 1);
                else if (B.addEventListener) B.addEventListener("DOMContentLoaded", dt, !1), e.addEventListener("load", G.ready, !1);
            else {
                B.attachEvent("onreadystatechange", dt), e.attachEvent("onload", G.ready);
                var n = !1;
                try {
                    n = null == e.frameElement && B.documentElement
                } catch (i) {}
                n && n.doScroll && function r() {
                    if (!G.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(r, 50)
                        }
                        G.ready()
                    }
                }()
            }
            return R.promise(t)
        }, G.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (e, t) {
            pt["[object " + t + "]"] = t.toLowerCase()
        }), P = G(B);
        var ht = {};
        G.Callbacks = function (e) {
            e = "string" == typeof e ? ht[e] || n(e) : G.extend({}, e);
            var i, r, o, a, s, u, l = [],
                c = !e.once && [],
                f = function (t) {
                    for (i = e.memory && t, r = !0, u = a || 0, a = 0, s = l.length, o = !0; l && s > u; u++)
                        if (l[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                            i = !1;
                            break
                        }
                    o = !1, l && (c ? c.length && f(c.shift()) : i ? l = [] : d.disable())
                },
                d = {
                    add: function () {
                        if (l) {
                            var t = l.length;
                            ! function n(t) {
                                G.each(t, function (t, i) {
                                    var r = G.type(i);
                                    "function" !== r || e.unique && d.has(i) ? i && i.length && "string" !== r && n(i) : l.push(i)
                                })
                            }(arguments), o ? s = l.length : i && (a = t, f(i))
                        }
                        return this
                    },
                    remove: function () {
                        return l && G.each(arguments, function (e, t) {
                            for (var n;
                                (n = G.inArray(t, l, n)) > -1;) l.splice(n, 1), o && (s >= n && s--, u >= n && u--)
                        }), this
                    },
                    has: function (e) {
                        return G.inArray(e, l) > -1
                    },
                    empty: function () {
                        return l = [], this
                    },
                    disable: function () {
                        return l = c = i = t, this
                    },
                    disabled: function () {
                        return !l
                    },
                    lock: function () {
                        return c = t, i || d.disable(), this
                    },
                    locked: function () {
                        return !c
                    },
                    fireWith: function (e, t) {
                        return t = t || [], t = [e, t.slice ? t.slice() : t], !l || r && !c || (o ? c.push(t) : f(t)), this
                    },
                    fire: function () {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!r
                    }
                };
            return d
        }, G.extend({
            Deferred: function (e) {
                var t = [
                        ["resolve", "done", G.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", G.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", G.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function () {
                            return n
                        },
                        always: function () {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function () {
                            var e = arguments;
                            return G.Deferred(function (n) {
                                G.each(t, function (t, i) {
                                    var o = i[0],
                                        a = e[t];
                                    r[i[1]](G.isFunction(a) ? function () {
                                        var e = a.apply(this, arguments);
                                        e && G.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n : this, [e])
                                    } : n[o])
                                }), e = null
                            }).promise()
                        },
                        promise: function (e) {
                            return null != e ? G.extend(e, i) : i
                        }
                    },
                    r = {};
                return i.pipe = i.then, G.each(t, function (e, o) {
                    var a = o[2],
                        s = o[3];
                    i[o[1]] = a.add, s && a.add(function () {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = a.fire, r[o[0] + "With"] = a.fireWith
                }), i.promise(r), e && e.call(r, r), r
            },
            when: function (e) {
                var t, n, i, r = 0,
                    o = V.call(arguments),
                    a = o.length,
                    s = 1 !== a || e && G.isFunction(e.promise) ? a : 0,
                    u = 1 === s ? e : G.Deferred(),
                    l = function (e, n, i) {
                        return function (r) {
                            n[e] = this, i[e] = arguments.length > 1 ? V.call(arguments) : r, i === t ? u.notifyWith(n, i) : --s || u.resolveWith(n, i)
                        }
                    };
                if (a > 1)
                    for (t = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) o[r] && G.isFunction(o[r].promise) ? o[r].promise().done(l(r, i, o)).fail(u.reject).progress(l(r, n, t)) : --s;
                return s || u.resolveWith(i, o), u.promise()
            }
        }), G.support = function () {
            var t, n, i, r, o, a, s, u, l, c, f, d = B.createElement("div");
            if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), i = d.getElementsByTagName("a")[0], i.style.cssText = "top:1px;float:left;opacity:.5", !n || !n.length) return {};
            r = B.createElement("select"), o = r.appendChild(B.createElement("option")), a = d.getElementsByTagName("input")[0], t = {
                leadingWhitespace: 3 === d.firstChild.nodeType,
                tbody: !d.getElementsByTagName("tbody").length,
                htmlSerialize: !!d.getElementsByTagName("link").length,
                style: /top/.test(i.getAttribute("style")),
                hrefNormalized: "/a" === i.getAttribute("href"),
                opacity: /^0.5/.test(i.style.opacity),
                cssFloat: !!i.style.cssFloat,
                checkOn: "on" === a.value,
                optSelected: o.selected,
                getSetAttribute: "t" !== d.className,
                enctype: !!B.createElement("form").enctype,
                html5Clone: "<:nav></:nav>" !== B.createElement("nav").cloneNode(!0).outerHTML,
                boxModel: "CSS1Compat" === B.compatMode,
                submitBubbles: !0,
                changeBubbles: !0,
                focusinBubbles: !1,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0,
                boxSizingReliable: !0,
                pixelPosition: !1
            }, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, r.disabled = !0, t.optDisabled = !o.disabled;
            try {
                delete d.test
            } catch (p) {
                t.deleteExpando = !1
            }
            if (!d.addEventListener && d.attachEvent && d.fireEvent && (d.attachEvent("onclick", f = function () {
                t.noCloneEvent = !1
            }), d.cloneNode(!0).fireEvent("onclick"), d.detachEvent("onclick", f)), a = B.createElement("input"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "checked"), a.setAttribute("name", "t"), d.appendChild(a), s = B.createDocumentFragment(), s.appendChild(d.lastChild), t.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = a.checked, s.removeChild(a), s.appendChild(d), d.attachEvent)
                for (l in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) u = "on" + l, c = u in d, c || (d.setAttribute(u, "return;"), c = "function" == typeof d[u]), t[l + "Bubbles"] = c;
            return G(function () {
                var n, i, r, o, a = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                    s = B.getElementsByTagName("body")[0];
                s && (n = B.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", s.insertBefore(n, s.firstChild), i = B.createElement("div"), n.appendChild(i), i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = i.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === r[0].offsetHeight, i.innerHTML = "", i.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === i.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(i, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(i, null) || {
                    width: "4px"
                }).width, o = B.createElement("div"), o.style.cssText = i.style.cssText = a, o.style.marginRight = o.style.width = "0", i.style.width = "1px", i.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), "undefined" != typeof i.style.zoom && (i.innerHTML = "", i.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === i.offsetWidth, i.style.display = "block", i.style.overflow = "visible", i.innerHTML = "<div></div>", i.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== i.offsetWidth, n.style.zoom = 1), s.removeChild(n), n = i = r = o = null)
            }), s.removeChild(d), n = i = r = o = a = s = d = null, t
        }();
        var mt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            gt = /([A-Z])/g;
        G.extend({
            cache: {},
            deletedIds: [],
            uuid: 0,
            expando: "jQuery" + (G.fn.jquery + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function (e) {
                return e = e.nodeType ? G.cache[e[G.expando]] : e[G.expando], !!e && !r(e)
            },
            data: function (e, n, i, r) {
                if (G.acceptData(e)) {
                    var o, a, s = G.expando,
                        u = "string" == typeof n,
                        l = e.nodeType,
                        c = l ? G.cache : e,
                        f = l ? e[s] : e[s] && s;
                    if (f && c[f] && (r || c[f].data) || !u || i !== t) return f || (l ? e[s] = f = G.deletedIds.pop() || G.guid++ : f = s), c[f] || (c[f] = {}, l || (c[f].toJSON = G.noop)), ("object" == typeof n || "function" == typeof n) && (r ? c[f] = G.extend(c[f], n) : c[f].data = G.extend(c[f].data, n)), o = c[f], r || (o.data || (o.data = {}), o = o.data), i !== t && (o[G.camelCase(n)] = i), u ? (a = o[n], null == a && (a = o[G.camelCase(n)])) : a = o, a
                }
            },
            removeData: function (e, t, n) {
                if (G.acceptData(e)) {
                    var i, o, a, s = e.nodeType,
                        u = s ? G.cache : e,
                        l = s ? e[G.expando] : G.expando;
                    if (u[l]) {
                        if (t && (i = n ? u[l] : u[l].data)) {
                            G.isArray(t) || (t in i ? t = [t] : (t = G.camelCase(t), t = t in i ? [t] : t.split(" ")));
                            for (o = 0, a = t.length; a > o; o++) delete i[t[o]];
                            if (!(n ? r : G.isEmptyObject)(i)) return
                        }(n || (delete u[l].data, r(u[l]))) && (s ? G.cleanData([e], !0) : G.support.deleteExpando || u != u.window ? delete u[l] : u[l] = null)
                    }
                }
            },
            _data: function (e, t, n) {
                return G.data(e, t, n, !0)
            },
            acceptData: function (e) {
                var t = e.nodeName && G.noData[e.nodeName.toLowerCase()];
                return !t || t !== !0 && e.getAttribute("classid") === t
            }
        }), G.fn.extend({
            data: function (e, n) {
                var r, o, a, s, u, l = this[0],
                    c = 0,
                    f = null;
                if (e === t) {
                    if (this.length && (f = G.data(l), 1 === l.nodeType && !G._data(l, "parsedAttrs"))) {
                        for (a = l.attributes, u = a.length; u > c; c++) s = a[c].name, s.indexOf("data-") || (s = G.camelCase(s.substring(5)), i(l, s, f[s]));
                        G._data(l, "parsedAttrs", !0)
                    }
                    return f
                }
                return "object" == typeof e ? this.each(function () {
                    G.data(this, e)
                }) : (r = e.split(".", 2), r[1] = r[1] ? "." + r[1] : "", o = r[1] + "!", G.access(this, function (n) {
                    return n === t ? (f = this.triggerHandler("getData" + o, [r[0]]), f === t && l && (f = G.data(l, e), f = i(l, e, f)), f === t && r[1] ? this.data(r[0]) : f) : (r[1] = n, this.each(function () {
                        var t = G(this);
                        t.triggerHandler("setData" + o, r), G.data(this, e, n), t.triggerHandler("changeData" + o, r)
                    }), void 0)
                }, null, n, arguments.length > 1, null, !1))
            },
            removeData: function (e) {
                return this.each(function () {
                    G.removeData(this, e)
                })
            }
        }), G.extend({
            queue: function (e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = G._data(e, t), n && (!i || G.isArray(n) ? i = G._data(e, t, G.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = G.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = G._queueHooks(e, t),
                    a = function () {
                        G.dequeue(e, t)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return G._data(e, n) || G._data(e, n, {
                    empty: G.Callbacks("once memory").add(function () {
                        G.removeData(e, t + "queue", !0), G.removeData(e, n, !0)
                    })
                })
            }
        }), G.fn.extend({
            queue: function (e, n) {
                var i = 2;
                return "string" != typeof e && (n = e, e = "fx", i--), arguments.length < i ? G.queue(this[0], e) : n === t ? this : this.each(function () {
                    var t = G.queue(this, e, n);
                    G._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && G.dequeue(this, e)
                })
            },
            dequeue: function (e) {
                return this.each(function () {
                    G.dequeue(this, e)
                })
            },
            delay: function (e, t) {
                return e = G.fx ? G.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                    var i = setTimeout(t, e);
                    n.stop = function () {
                        clearTimeout(i)
                    }
                })
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", [])
            },
            promise: function (e, n) {
                var i, r = 1,
                    o = G.Deferred(),
                    a = this,
                    s = this.length,
                    u = function () {
                        --r || o.resolveWith(a, [a])
                    };
                for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) i = G._data(a[s], e + "queueHooks"), i && i.empty && (r++, i.empty.add(u));
                return u(), o.promise(n)
            }
        });
        var vt, yt, $t, bt = /[\t\r\n]/g,
            xt = /\r/g,
            wt = /^(?:button|input)$/i,
            Ct = /^(?:button|input|object|select|textarea)$/i,
            kt = /^a(?:rea|)$/i,
            Tt = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            St = G.support.getSetAttribute;
        G.fn.extend({
            attr: function (e, t) {
                return G.access(this, G.attr, e, t, arguments.length > 1)
            },
            removeAttr: function (e) {
                return this.each(function () {
                    G.removeAttr(this, e)
                })
            },
            prop: function (e, t) {
                return G.access(this, G.prop, e, t, arguments.length > 1)
            },
            removeProp: function (e) {
                return e = G.propFix[e] || e, this.each(function () {
                    try {
                        this[e] = t, delete this[e]
                    } catch (n) {}
                })
            },
            addClass: function (e) {
                var t, n, i, r, o, a, s;
                if (G.isFunction(e)) return this.each(function (t) {
                    G(this).addClass(e.call(this, t, this.className))
                });
                if (e && "string" == typeof e)
                    for (t = e.split(tt), n = 0, i = this.length; i > n; n++)
                        if (r = this[n], 1 === r.nodeType)
                            if (r.className || 1 !== t.length) {
                                for (o = " " + r.className + " ", a = 0, s = t.length; s > a; a++) o.indexOf(" " + t[a] + " ") < 0 && (o += t[a] + " ");
                                r.className = G.trim(o)
                            } else r.className = e;
                return this
            },
            removeClass: function (e) {
                var n, i, r, o, a, s, u;
                if (G.isFunction(e)) return this.each(function (t) {
                    G(this).removeClass(e.call(this, t, this.className))
                });
                if (e && "string" == typeof e || e === t)
                    for (n = (e || "").split(tt), s = 0, u = this.length; u > s; s++)
                        if (r = this[s], 1 === r.nodeType && r.className) {
                            for (i = (" " + r.className + " ").replace(bt, " "), o = 0, a = n.length; a > o; o++)
                                for (; i.indexOf(" " + n[o] + " ") >= 0;) i = i.replace(" " + n[o] + " ", " ");
                            r.className = e ? G.trim(i) : ""
                        }
                return this
            },
            toggleClass: function (e, t) {
                var n = typeof e,
                    i = "boolean" == typeof t;
                return G.isFunction(e) ? this.each(function (n) {
                    G(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function () {
                    if ("string" === n)
                        for (var r, o = 0, a = G(this), s = t, u = e.split(tt); r = u[o++];) s = i ? s : !a.hasClass(r), a[s ? "addClass" : "removeClass"](r);
                    else("undefined" === n || "boolean" === n) && (this.className && G._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : G._data(this, "__className__") || "")
                })
            },
            hasClass: function (e) {
                for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(bt, " ").indexOf(t) >= 0) return !0;
                return !1
            },
            val: function (e) {
                var n, i, r, o = this[0]; {
                    if (arguments.length) return r = G.isFunction(e), this.each(function (i) {
                        var o, a = G(this);
                        1 === this.nodeType && (o = r ? e.call(this, i, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : G.isArray(o) && (o = G.map(o, function (e) {
                            return null == e ? "" : e + ""
                        })), n = G.valHooks[this.type] || G.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== t || (this.value = o))
                    });
                    if (o) return n = G.valHooks[o.type] || G.valHooks[o.nodeName.toLowerCase()], n && "get" in n && (i = n.get(o, "value")) !== t ? i : (i = o.value, "string" == typeof i ? i.replace(xt, "") : null == i ? "" : i)
                }
            }
        }), G.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = e.attributes.value;
                        return !t || t.specified ? e.value : e.text
                    }
                },
                select: {
                    get: function (e) {
                        var t, n, i, r, o = e.selectedIndex,
                            a = [],
                            s = e.options,
                            u = "select-one" === e.type;
                        if (0 > o) return null;
                        for (n = u ? o : 0, i = u ? o + 1 : s.length; i > n; n++)
                            if (r = s[n], !(!r.selected || (G.support.optDisabled ? r.disabled : null !== r.getAttribute("disabled")) || r.parentNode.disabled && G.nodeName(r.parentNode, "optgroup"))) {
                                if (t = G(r).val(), u) return t;
                                a.push(t)
                            }
                        return u && !a.length && s.length ? G(s[o]).val() : a
                    },
                    set: function (e, t) {
                        var n = G.makeArray(t);
                        return G(e).find("option").each(function () {
                            this.selected = G.inArray(G(this).val(), n) >= 0
                        }), n.length || (e.selectedIndex = -1), n
                    }
                }
            },
            attrFn: {},
            attr: function (e, n, i, r) {
                var o, a, s, u = e.nodeType;
                if (e && 3 !== u && 8 !== u && 2 !== u) return r && G.isFunction(G.fn[n]) ? G(e)[n](i) : "undefined" == typeof e.getAttribute ? G.prop(e, n, i) : (s = 1 !== u || !G.isXMLDoc(e), s && (n = n.toLowerCase(), a = G.attrHooks[n] || (Tt.test(n) ? yt : vt)), i !== t ? null === i ? (G.removeAttr(e, n), void 0) : a && "set" in a && s && (o = a.set(e, i, n)) !== t ? o : (e.setAttribute(n, i + ""), i) : a && "get" in a && s && null !== (o = a.get(e, n)) ? o : (o = e.getAttribute(n), null === o ? t : o))
            },
            removeAttr: function (e, t) {
                var n, i, r, o, a = 0;
                if (t && 1 === e.nodeType)
                    for (i = t.split(tt); a < i.length; a++) r = i[a], r && (n = G.propFix[r] || r, o = Tt.test(r), o || G.attr(e, r, ""), e.removeAttribute(St ? r : n), o && n in e && (e[n] = !1))
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (wt.test(e.nodeName) && e.parentNode) G.error("type property can't be changed");
                        else if (!G.support.radioValue && "radio" === t && G.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                },
                value: {
                    get: function (e, t) {
                        return vt && G.nodeName(e, "button") ? vt.get(e, t) : t in e ? e.value : null
                    },
                    set: function (e, t, n) {
                        return vt && G.nodeName(e, "button") ? vt.set(e, t, n) : (e.value = t, void 0)
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function (e, n, i) {
                var r, o, a, s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !G.isXMLDoc(e), a && (n = G.propFix[n] || n, o = G.propHooks[n]), i !== t ? o && "set" in o && (r = o.set(e, i, n)) !== t ? r : e[n] = i : o && "get" in o && null !== (r = o.get(e, n)) ? r : e[n]
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var n = e.getAttributeNode("tabindex");
                        return n && n.specified ? parseInt(n.value, 10) : Ct.test(e.nodeName) || kt.test(e.nodeName) && e.href ? 0 : t
                    }
                }
            }
        }), yt = {
            get: function (e, n) {
                var i, r = G.prop(e, n);
                return r === !0 || "boolean" != typeof r && (i = e.getAttributeNode(n)) && i.nodeValue !== !1 ? n.toLowerCase() : t
            },
            set: function (e, t, n) {
                var i;
                return t === !1 ? G.removeAttr(e, n) : (i = G.propFix[n] || n, i in e && (e[i] = !0), e.setAttribute(n, n.toLowerCase())), n
            }
        }, St || ($t = {
            name: !0,
            id: !0,
            coords: !0
        }, vt = G.valHooks.button = {
            get: function (e, n) {
                var i;
                return i = e.getAttributeNode(n), i && ($t[n] ? "" !== i.value : i.specified) ? i.value : t
            },
            set: function (e, t, n) {
                var i = e.getAttributeNode(n);
                return i || (i = B.createAttribute(n), e.setAttributeNode(i)), i.value = t + ""
            }
        }, G.each(["width", "height"], function (e, t) {
            G.attrHooks[t] = G.extend(G.attrHooks[t], {
                set: function (e, n) {
                    return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
                }
            })
        }), G.attrHooks.contenteditable = {
            get: vt.get,
            set: function (e, t, n) {
                "" === t && (t = "false"), vt.set(e, t, n)
            }
        }), G.support.hrefNormalized || G.each(["href", "src", "width", "height"], function (e, n) {
            G.attrHooks[n] = G.extend(G.attrHooks[n], {
                get: function (e) {
                    var i = e.getAttribute(n, 2);
                    return null === i ? t : i
                }
            })
        }), G.support.style || (G.attrHooks.style = {
            get: function (e) {
                return e.style.cssText.toLowerCase() || t
            },
            set: function (e, t) {
                return e.style.cssText = t + ""
            }
        }), G.support.optSelected || (G.propHooks.selected = G.extend(G.propHooks.selected, {
            get: function (e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        })), G.support.enctype || (G.propFix.enctype = "encoding"), G.support.checkOn || G.each(["radio", "checkbox"], function () {
            G.valHooks[this] = {
                get: function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
            }
        }), G.each(["radio", "checkbox"], function () {
            G.valHooks[this] = G.extend(G.valHooks[this], {
                set: function (e, t) {
                    return G.isArray(t) ? e.checked = G.inArray(G(e).val(), t) >= 0 : void 0
                }
            })
        });
        var Et = /^(?:textarea|input|select)$/i,
            jt = /^([^\.]*|)(?:\.(.+)|)$/,
            At = /(?:^|\s)hover(\.\S+|)\b/,
            Nt = /^key/,
            Mt = /^(?:mouse|contextmenu)|click/,
            _t = /^(?:focusinfocus|focusoutblur)$/,
            Ot = function (e) {
                return G.event.special.hover ? e : e.replace(At, "mouseenter$1 mouseleave$1")
            };
        G.event = {
                add: function (e, n, i, r, o) {
                    var a, s, u, l, c, f, d, p, h, m, g;
                    if (3 !== e.nodeType && 8 !== e.nodeType && n && i && (a = G._data(e))) {
                        for (i.handler && (h = i, i = h.handler, o = h.selector), i.guid || (i.guid = G.guid++), u = a.events, u || (a.events = u = {}), s = a.handle, s || (a.handle = s = function (e) {
                            return "undefined" == typeof G || e && G.event.triggered === e.type ? t : G.event.dispatch.apply(s.elem, arguments)
                        }, s.elem = e), n = G.trim(Ot(n)).split(" "), l = 0; l < n.length; l++) c = jt.exec(n[l]) || [], f = c[1], d = (c[2] || "").split(".").sort(), g = G.event.special[f] || {}, f = (o ? g.delegateType : g.bindType) || f, g = G.event.special[f] || {}, p = G.extend({
                            type: f,
                            origType: c[1],
                            data: r,
                            handler: i,
                            guid: i.guid,
                            selector: o,
                            needsContext: o && G.expr.match.needsContext.test(o),
                            namespace: d.join(".")
                        }, h), m = u[f], m || (m = u[f] = [], m.delegateCount = 0, g.setup && g.setup.call(e, r, d, s) !== !1 || (e.addEventListener ? e.addEventListener(f, s, !1) : e.attachEvent && e.attachEvent("on" + f, s))), g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = i.guid)), o ? m.splice(m.delegateCount++, 0, p) : m.push(p), G.event.global[f] = !0;
                        e = null
                    }
                },
                global: {},
                remove: function (e, t, n, i, r) {
                    var o, a, s, u, l, c, f, d, p, h, m, g = G.hasData(e) && G._data(e);
                    if (g && (d = g.events)) {
                        for (t = G.trim(Ot(t || "")).split(" "), o = 0; o < t.length; o++)
                            if (a = jt.exec(t[o]) || [], s = u = a[1], l = a[2], s) {
                                for (p = G.event.special[s] || {}, s = (i ? p.delegateType : p.bindType) || s, h = d[s] || [], c = h.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, f = 0; f < h.length; f++) m = h[f], !r && u !== m.origType || n && n.guid !== m.guid || l && !l.test(m.namespace) || i && i !== m.selector && ("**" !== i || !m.selector) || (h.splice(f--, 1), m.selector && h.delegateCount--, p.remove && p.remove.call(e, m));
                                0 === h.length && c !== h.length && (p.teardown && p.teardown.call(e, l, g.handle) !== !1 || G.removeEvent(e, s, g.handle), delete d[s])
                            } else
                                for (s in d) G.event.remove(e, s + t[o], n, i, !0);
                        G.isEmptyObject(d) && (delete g.handle, G.removeData(e, "events", !0))
                    }
                },
                customEvent: {
                    getData: !0,
                    setData: !0,
                    changeData: !0
                },
                trigger: function (n, i, r, o) {
                    if (!r || 3 !== r.nodeType && 8 !== r.nodeType) {
                        var a, s, u, l, c, f, d, p, h, m, g = n.type || n,
                            v = [];
                        if (!_t.test(g + G.event.triggered) && (g.indexOf("!") >= 0 && (g = g.slice(0, -1), s = !0), g.indexOf(".") >= 0 && (v = g.split("."), g = v.shift(), v.sort()), r && !G.event.customEvent[g] || G.event.global[g]))
                            if (n = "object" == typeof n ? n[G.expando] ? n : new G.Event(g, n) : new G.Event(g), n.type = g, n.isTrigger = !0, n.exclusive = s, n.namespace = v.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, f = g.indexOf(":") < 0 ? "on" + g : "", r) {
                                if (n.result = t, n.target || (n.target = r), i = null != i ? G.makeArray(i) : [], i.unshift(n), d = G.event.special[g] || {}, !d.trigger || d.trigger.apply(r, i) !== !1) {
                                    if (h = [
                                        [r, d.bindType || g]
                                    ], !o && !d.noBubble && !G.isWindow(r)) {
                                        for (m = d.delegateType || g, l = _t.test(m + g) ? r : r.parentNode, c = r; l; l = l.parentNode) h.push([l, m]), c = l;
                                        c === (r.ownerDocument || B) && h.push([c.defaultView || c.parentWindow || e, m])
                                    }
                                    for (u = 0; u < h.length && !n.isPropagationStopped(); u++) l = h[u][0], n.type = h[u][1], p = (G._data(l, "events") || {})[n.type] && G._data(l, "handle"), p && p.apply(l, i), p = f && l[f], p && G.acceptData(l) && p.apply && p.apply(l, i) === !1 && n.preventDefault();
                                    return n.type = g, o || n.isDefaultPrevented() || d._default && d._default.apply(r.ownerDocument, i) !== !1 || "click" === g && G.nodeName(r, "a") || !G.acceptData(r) || f && r[g] && ("focus" !== g && "blur" !== g || 0 !== n.target.offsetWidth) && !G.isWindow(r) && (c = r[f], c && (r[f] = null), G.event.triggered = g, r[g](), G.event.triggered = t, c && (r[f] = c)), n.result
                                }
                            } else {
                                a = G.cache;
                                for (u in a) a[u].events && a[u].events[g] && G.event.trigger(n, i, a[u].handle.elem, !0)
                            }
                    }
                },
                dispatch: function (n) {
                    n = G.event.fix(n || e.event);
                    var i, r, o, a, s, u, l, c, f, d = (G._data(this, "events") || {})[n.type] || [],
                        p = d.delegateCount,
                        h = V.call(arguments),
                        m = !n.exclusive && !n.namespace,
                        g = G.event.special[n.type] || {},
                        v = [];
                    if (h[0] = n, n.delegateTarget = this, !g.preDispatch || g.preDispatch.call(this, n) !== !1) {
                        if (p && (!n.button || "click" !== n.type))
                            for (o = n.target; o != this; o = o.parentNode || this)
                                if (o.disabled !== !0 || "click" !== n.type) {
                                    for (s = {}, l = [], i = 0; p > i; i++) c = d[i], f = c.selector, s[f] === t && (s[f] = c.needsContext ? G(f, this).index(o) >= 0 : G.find(f, this, null, [o]).length), s[f] && l.push(c);
                                    l.length && v.push({
                                        elem: o,
                                        matches: l
                                    })
                                }
                        for (d.length > p && v.push({
                            elem: this,
                            matches: d.slice(p)
                        }), i = 0; i < v.length && !n.isPropagationStopped(); i++)
                            for (u = v[i], n.currentTarget = u.elem, r = 0; r < u.matches.length && !n.isImmediatePropagationStopped(); r++) c = u.matches[r], (m || !n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace)) && (n.data = c.data, n.handleObj = c, a = ((G.event.special[c.origType] || {}).handle || c.handler).apply(u.elem, h), a !== t && (n.result = a, a === !1 && (n.preventDefault(), n.stopPropagation())));
                        return g.postDispatch && g.postDispatch.call(this, n), n.result
                    }
                },
                props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function (e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function (e, n) {
                        var i, r, o, a = n.button,
                            s = n.fromElement;
                        return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || B, r = i.documentElement, o = i.body, e.pageX = n.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
                    }
                },
                fix: function (e) {
                    if (e[G.expando]) return e;
                    var t, n, i = e,
                        r = G.event.fixHooks[e.type] || {},
                        o = r.props ? this.props.concat(r.props) : this.props;
                    for (e = G.Event(i), t = o.length; t;) n = o[--t], e[n] = i[n];
                    return e.target || (e.target = i.srcElement || B), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, r.filter ? r.filter(e, i) : e
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        delegateType: "focusin"
                    },
                    blur: {
                        delegateType: "focusout"
                    },
                    beforeunload: {
                        setup: function (e, t, n) {
                            G.isWindow(this) && (this.onbeforeunload = n)
                        },
                        teardown: function (e, t) {
                            this.onbeforeunload === t && (this.onbeforeunload = null)
                        }
                    }
                },
                simulate: function (e, t, n, i) {
                    var r = G.extend(new G.Event, n, {
                        type: e,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                    i ? G.event.trigger(r, null, t) : G.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
                }
            }, G.event.handle = G.event.dispatch, G.removeEvent = B.removeEventListener ? function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1)
            } : function (e, t, n) {
                var i = "on" + t;
                e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n))
            }, G.Event = function (e, t) {
                return this instanceof G.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? a : o) : this.type = e, t && G.extend(this, t), this.timeStamp = e && e.timeStamp || G.now(), this[G.expando] = !0, void 0) : new G.Event(e, t)
            }, G.Event.prototype = {
                preventDefault: function () {
                    this.isDefaultPrevented = a;
                    var e = this.originalEvent;
                    e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                },
                stopPropagation: function () {
                    this.isPropagationStopped = a;
                    var e = this.originalEvent;
                    e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
                },
                stopImmediatePropagation: function () {
                    this.isImmediatePropagationStopped = a, this.stopPropagation()
                },
                isDefaultPrevented: o,
                isPropagationStopped: o,
                isImmediatePropagationStopped: o
            }, G.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }, function (e, t) {
                G.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (e) {
                        var n, i = this,
                            r = e.relatedTarget,
                            o = e.handleObj;
                        return o.selector, (!r || r !== i && !G.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }), G.support.submitBubbles || (G.event.special.submit = {
                setup: function () {
                    return G.nodeName(this, "form") ? !1 : (G.event.add(this, "click._submit keypress._submit", function (e) {
                        var n = e.target,
                            i = G.nodeName(n, "input") || G.nodeName(n, "button") ? n.form : t;
                        i && !G._data(i, "_submit_attached") && (G.event.add(i, "submit._submit", function (e) {
                            e._submit_bubble = !0
                        }), G._data(i, "_submit_attached", !0))
                    }), void 0)
                },
                postDispatch: function (e) {
                    e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && G.event.simulate("submit", this.parentNode, e, !0))
                },
                teardown: function () {
                    return G.nodeName(this, "form") ? !1 : (G.event.remove(this, "._submit"), void 0)
                }
            }), G.support.changeBubbles || (G.event.special.change = {
                setup: function () {
                    return Et.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (G.event.add(this, "propertychange._change", function (e) {
                        "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                    }), G.event.add(this, "click._change", function (e) {
                        this._just_changed && !e.isTrigger && (this._just_changed = !1), G.event.simulate("change", this, e, !0)
                    })), !1) : (G.event.add(this, "beforeactivate._change", function (e) {
                        var t = e.target;
                        Et.test(t.nodeName) && !G._data(t, "_change_attached") && (G.event.add(t, "change._change", function (e) {
                            !this.parentNode || e.isSimulated || e.isTrigger || G.event.simulate("change", this.parentNode, e, !0)
                        }), G._data(t, "_change_attached", !0))
                    }), void 0)
                },
                handle: function (e) {
                    var t = e.target;
                    return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
                },
                teardown: function () {
                    return G.event.remove(this, "._change"), !Et.test(this.nodeName)
                }
            }), G.support.focusinBubbles || G.each({
                focus: "focusin",
                blur: "focusout"
            }, function (e, t) {
                var n = 0,
                    i = function (e) {
                        G.event.simulate(t, e.target, G.event.fix(e), !0)
                    };
                G.event.special[t] = {
                    setup: function () {
                        0 === n++ && B.addEventListener(e, i, !0)
                    },
                    teardown: function () {
                        0 === --n && B.removeEventListener(e, i, !0)
                    }
                }
            }), G.fn.extend({
                on: function (e, n, i, r, a) {
                    var s, u;
                    if ("object" == typeof e) {
                        "string" != typeof n && (i = i || n, n = t);
                        for (u in e) this.on(u, n, i, e[u], a);
                        return this
                    }
                    if (null == i && null == r ? (r = n, i = n = t) : null == r && ("string" == typeof n ? (r = i, i = t) : (r = i, i = n, n = t)), r === !1) r = o;
                    else if (!r) return this;
                    return 1 === a && (s = r, r = function (e) {
                        return G().off(e), s.apply(this, arguments)
                    }, r.guid = s.guid || (s.guid = G.guid++)), this.each(function () {
                        G.event.add(this, e, r, i, n)
                    })
                },
                one: function (e, t, n, i) {
                    return this.on(e, t, n, i, 1)
                },
                off: function (e, n, i) {
                    var r, a;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, G(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" == typeof e) {
                        for (a in e) this.off(a, n, e[a]);
                        return this
                    }
                    return (n === !1 || "function" == typeof n) && (i = n, n = t), i === !1 && (i = o), this.each(function () {
                        G.event.remove(this, e, i, n)
                    })
                },
                bind: function (e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function (e, t) {
                    return this.off(e, null, t)
                },
                live: function (e, t, n) {
                    return G(this.context).on(e, this.selector, t, n), this
                },
                die: function (e, t) {
                    return G(this.context).off(e, this.selector || "**", t), this
                },
                delegate: function (e, t, n, i) {
                    return this.on(t, e, n, i)
                },
                undelegate: function (e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                },
                trigger: function (e, t) {
                    return this.each(function () {
                        G.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function (e, t) {
                    return this[0] ? G.event.trigger(e, t, this[0], !0) : void 0
                },
                toggle: function (e) {
                    var t = arguments,
                        n = e.guid || G.guid++,
                        i = 0,
                        r = function (n) {
                            var r = (G._data(this, "lastToggle" + e.guid) || 0) % i;
                            return G._data(this, "lastToggle" + e.guid, r + 1), n.preventDefault(), t[r].apply(this, arguments) || !1
                        };
                    for (r.guid = n; i < t.length;) t[i++].guid = n;
                    return this.click(r)
                },
                hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), G.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
                G.fn[t] = function (e, n) {
                    return null == n && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }, Nt.test(t) && (G.event.fixHooks[t] = G.event.keyHooks), Mt.test(t) && (G.event.fixHooks[t] = G.event.mouseHooks)
            }),
            /*!
             * Sizzle CSS Selector Engine
             * Copyright 2012 jQuery Foundation and other contributors
             * Released under the MIT license
             * http://sizzlejs.com/
             */
            function (e, t) {
                function n(e, t, n, i) {
                    n = n || [], t = t || M;
                    var r, o, a, s, u = t.nodeType;
                    if (!e || "string" != typeof e) return n;
                    if (1 !== u && 9 !== u) return [];
                    if (a = x(t), !a && !i && (r = nt.exec(e)))
                        if (s = r[1]) {
                            if (9 === u) {
                                if (o = t.getElementById(s), !o || !o.parentNode) return n;
                                if (o.id === s) return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && w(t, o) && o.id === s) return n.push(o), n
                        } else {
                            if (r[2]) return H.apply(n, F.call(t.getElementsByTagName(e), 0)), n;
                            if ((s = r[3]) && dt && t.getElementsByClassName) return H.apply(n, F.call(t.getElementsByClassName(s), 0)), n
                        }
                    return m(e.replace(K, "$1"), t, n, i, a)
                }

                function i(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }

                function r(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function o(e) {
                    return P(function (t) {
                        return t = +t, P(function (n, i) {
                            for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                        })
                    })
                }

                function a(e, t, n) {
                    if (e === t) return n;
                    for (var i = e.nextSibling; i;) {
                        if (i === t) return -1;
                        i = i.nextSibling
                    }
                    return 1
                }

                function s(e, t) {
                    var i, r, o, a, s, u, l, c = I[A][e];
                    if (c) return t ? 0 : c.slice(0);
                    for (s = e, u = [], l = $.preFilter; s;) {
                        (!i || (r = Z.exec(s))) && (r && (s = s.slice(r[0].length)), u.push(o = [])), i = !1, (r = et.exec(s)) && (o.push(i = new N(r.shift())), s = s.slice(i.length), i.type = r[0].replace(K, " "));
                        for (a in $.filter)!(r = st[a].exec(s)) || l[a] && !(r = l[a](r, M, !0)) || (o.push(i = new N(r.shift())), s = s.slice(i.length), i.type = a, i.matches = r);
                        if (!i) break
                    }
                    return t ? s.length : s ? n.error(e) : I(e, u).slice(0)
                }

                function u(e, t, n) {
                    var i = t.dir,
                        r = n && "parentNode" === t.dir,
                        o = L++;
                    return t.first ? function (t, n, o) {
                        for (; t = t[i];)
                            if (r || 1 === t.nodeType) return e(t, n, o)
                    } : function (t, n, a) {
                        if (a) {
                            for (; t = t[i];)
                                if ((r || 1 === t.nodeType) && e(t, n, a)) return t
                        } else
                            for (var s, u = O + " " + o + " ", l = u + v; t = t[i];)
                                if (r || 1 === t.nodeType) {
                                    if ((s = t[A]) === l) return t.sizset;
                                    if ("string" == typeof s && 0 === s.indexOf(u)) {
                                        if (t.sizset) return t
                                    } else {
                                        if (t[A] = l, e(t, n, a)) return t.sizset = !0, t;
                                        t.sizset = !1
                                    }
                                }
                    }
                }

                function l(e) {
                    return e.length > 1 ? function (t, n, i) {
                        for (var r = e.length; r--;)
                            if (!e[r](t, n, i)) return !1;
                        return !0
                    } : e[0]
                }

                function c(e, t, n, i, r) {
                    for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, i, r)) && (a.push(o), l && t.push(s));
                    return a
                }

                function f(e, t, n, i, r, o) {
                    return i && !i[A] && (i = f(i)), r && !r[A] && (r = f(r, o)), P(function (o, a, s, u) {
                        if (!o || !r) {
                            var l, f, d, p = [],
                                m = [],
                                g = a.length,
                                v = o || h(t || "*", s.nodeType ? [s] : s, [], o),
                                y = !e || !o && t ? v : c(v, p, e, s, u),
                                $ = n ? r || (o ? e : g || i) ? [] : a : y;
                            if (n && n(y, $, s, u), i)
                                for (d = c($, m), i(d, [], s, u), l = d.length; l--;)(f = d[l]) && ($[m[l]] = !(y[m[l]] = f));
                            if (o)
                                for (l = e && $.length; l--;)(f = $[l]) && (o[p[l]] = !(a[p[l]] = f));
                            else $ = c($ === a ? $.splice(g, $.length) : $), r ? r(null, a, $, u) : H.apply(a, $)
                        }
                    })
                }

                function d(e) {
                    for (var t, n, i, r = e.length, o = $.relative[e[0].type], a = o || $.relative[" "], s = o ? 1 : 0, c = u(function (e) {
                        return e === t
                    }, a, !0), p = u(function (e) {
                        return q.call(t, e) > -1
                    }, a, !0), h = [

                        function (e, n, i) {
                            return !o && (i || n !== S) || ((t = n).nodeType ? c(e, n, i) : p(e, n, i))
                        }
                    ]; r > s; s++)
                        if (n = $.relative[e[s].type]) h = [u(l(h), n)];
                        else {
                            if (n = $.filter[e[s].type].apply(null, e[s].matches), n[A]) {
                                for (i = ++s; r > i && !$.relative[e[i].type]; i++);
                                return f(s > 1 && l(h), s > 1 && e.slice(0, s - 1).join("").replace(K, "$1"), n, i > s && d(e.slice(s, i)), r > i && d(e = e.slice(i)), r > i && e.join(""))
                            }
                            h.push(n)
                        }
                    return l(h)
                }

                function p(e, t) {
                    var i = t.length > 0,
                        r = e.length > 0,
                        o = function (a, s, u, l, f) {
                            var d, p, h, m = [],
                                g = 0,
                                y = "0",
                                b = a && [],
                                x = null != f,
                                w = S,
                                C = a || r && $.find.TAG("*", f && s.parentNode || s),
                                k = O += null == w ? 1 : Math.E;
                            for (x && (S = s !== M && s, v = o.el); null != (d = C[y]); y++) {
                                if (r && d) {
                                    for (p = 0; h = e[p]; p++)
                                        if (h(d, s, u)) {
                                            l.push(d);
                                            break
                                        }
                                    x && (O = k, v = ++o.el)
                                }
                                i && ((d = !h && d) && g--, a && b.push(d))
                            }
                            if (g += y, i && y !== g) {
                                for (p = 0; h = t[p]; p++) h(b, m, s, u);
                                if (a) {
                                    if (g > 0)
                                        for (; y--;) b[y] || m[y] || (m[y] = D.call(l));
                                    m = c(m)
                                }
                                H.apply(l, m), x && !a && m.length > 0 && g + t.length > 1 && n.uniqueSort(l)
                            }
                            return x && (O = k, S = w), b
                        };
                    return o.el = 0, i ? P(o) : o
                }

                function h(e, t, i, r) {
                    for (var o = 0, a = t.length; a > o; o++) n(e, t[o], i, r);
                    return i
                }

                function m(e, t, n, i, r) {
                    var o, a, u, l, c, f = s(e);
                    if (f.length, !i && 1 === f.length) {
                        if (a = f[0] = f[0].slice(0), a.length > 2 && "ID" === (u = a[0]).type && 9 === t.nodeType && !r && $.relative[a[1].type]) {
                            if (t = $.find.ID(u.matches[0].replace(at, ""), t, r)[0], !t) return n;
                            e = e.slice(a.shift().length)
                        }
                        for (o = st.POS.test(e) ? -1 : a.length - 1; o >= 0 && (u = a[o], !$.relative[l = u.type]); o--)
                            if ((c = $.find[l]) && (i = c(u.matches[0].replace(at, ""), it.test(a[0].type) && t.parentNode || t, r))) {
                                if (a.splice(o, 1), e = i.length && a.join(""), !e) return H.apply(n, F.call(i, 0)), n;
                                break
                            }
                    }
                    return C(e, f)(i, t, r, n, it.test(e)), n
                }

                function g() {}
                var v, y, $, b, x, w, C, k, T, S, E = !0,
                    j = "undefined",
                    A = ("sizcache" + Math.random()).replace(".", ""),
                    N = String,
                    M = e.document,
                    _ = M.documentElement,
                    O = 0,
                    L = 0,
                    D = [].pop,
                    H = [].push,
                    F = [].slice,
                    q = [].indexOf || function (e) {
                        for (var t = 0, n = this.length; n > t; t++)
                            if (this[t] === e) return t;
                        return -1
                    },
                    P = function (e, t) {
                        return e[A] = null == t || t, e
                    },
                    R = function () {
                        var e = {},
                            t = [];
                        return P(function (n, i) {
                            return t.push(n) > $.cacheLength && delete e[t.shift()], e[n] = i
                        }, e)
                    },
                    B = R(),
                    I = R(),
                    z = R(),
                    W = "[\\x20\\t\\r\\n\\f]",
                    U = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
                    X = U.replace("w", "w#"),
                    V = "([*^$|!~]?=)",
                    Y = "\\[" + W + "*(" + U + ")" + W + "*(?:" + V + W + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + X + ")|)|)" + W + "*\\]",
                    Q = ":(" + U + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + Y + ")|[^:]|\\\\.)*|.*))\\)|)",
                    J = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + W + "*((?:-\\d)?\\d*)" + W + "*\\)|)(?=[^-]|$)",
                    K = new RegExp("^" + W + "+|((?:^|[^\\\\])(?:\\\\.)*)" + W + "+$", "g"),
                    Z = new RegExp("^" + W + "*," + W + "*"),
                    et = new RegExp("^" + W + "*([\\x20\\t\\r\\n\\f>+~])" + W + "*"),
                    tt = new RegExp(Q),
                    nt = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
                    it = /[\x20\t\r\n\f]*[+~]/,
                    rt = /h\d/i,
                    ot = /input|select|textarea|button/i,
                    at = /\\(?!\\)/g,
                    st = {
                        ID: new RegExp("^#(" + U + ")"),
                        CLASS: new RegExp("^\\.(" + U + ")"),
                        NAME: new RegExp("^\\[name=['\"]?(" + U + ")['\"]?\\]"),
                        TAG: new RegExp("^(" + U.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + Y),
                        PSEUDO: new RegExp("^" + Q),
                        POS: new RegExp(J, "i"),
                        CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + W + "*(even|odd|(([+-]|)(\\d*)n|)" + W + "*(?:([+-]|)" + W + "*(\\d+)|))" + W + "*\\)|)", "i"),
                        needsContext: new RegExp("^" + W + "*[>+~]|" + J, "i")
                    },
                    ut = function (e) {
                        var t = M.createElement("div");
                        try {
                            return e(t)
                        } catch (n) {
                            return !1
                        } finally {
                            t = null
                        }
                    },
                    lt = ut(function (e) {
                        return e.appendChild(M.createComment("")), !e.getElementsByTagName("*").length
                    }),
                    ct = ut(function (e) {
                        return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== j && "#" === e.firstChild.getAttribute("href")
                    }),
                    ft = ut(function (e) {
                        e.innerHTML = "<select></select>";
                        var t = typeof e.lastChild.getAttribute("multiple");
                        return "boolean" !== t && "string" !== t
                    }),
                    dt = ut(function (e) {
                        return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
                    }),
                    pt = ut(function (e) {
                        e.id = A + 0, e.innerHTML = "<a name='" + A + "'></a><div name='" + A + "'></div>", _.insertBefore(e, _.firstChild);
                        var t = M.getElementsByName && M.getElementsByName(A).length === 2 + M.getElementsByName(A + 0).length;
                        return y = !M.getElementById(A), _.removeChild(e), t
                    });
                try {
                    F.call(_.childNodes, 0)[0].nodeType
                } catch (ht) {
                    F = function (e) {
                        for (var t, n = []; t = this[e]; e++) n.push(t);
                        return n
                    }
                }
                n.matches = function (e, t) {
                    return n(e, null, null, t)
                }, n.matchesSelector = function (e, t) {
                    return n(t, null, null, [e]).length > 0
                }, b = n.getText = function (e) {
                    var t, n = "",
                        i = 0,
                        r = e.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += b(e)
                        } else if (3 === r || 4 === r) return e.nodeValue
                    } else
                        for (; t = e[i]; i++) n += b(t);
                    return n
                }, x = n.isXML = function (e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName : !1
                }, w = n.contains = _.contains ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !!(i && 1 === i.nodeType && n.contains && n.contains(i))
                } : _.compareDocumentPosition ? function (e, t) {
                    return t && !!(16 & e.compareDocumentPosition(t))
                } : function (e, t) {
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                    return !1
                }, n.attr = function (e, t) {
                    var n, i = x(e);
                    return i || (t = t.toLowerCase()), (n = $.attrHandle[t]) ? n(e) : i || ft ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? "boolean" == typeof e[t] ? e[t] ? t : null : n.specified ? n.value : null : null)
                }, $ = n.selectors = {
                    cacheLength: 50,
                    createPseudo: P,
                    match: st,
                    attrHandle: ct ? {} : {
                        href: function (e) {
                            return e.getAttribute("href", 2)
                        },
                        type: function (e) {
                            return e.getAttribute("type")
                        }
                    },
                    find: {
                        ID: y ? function (e, t, n) {
                            if (typeof t.getElementById !== j && !n) {
                                var i = t.getElementById(e);
                                return i && i.parentNode ? [i] : []
                            }
                        } : function (e, n, i) {
                            if (typeof n.getElementById !== j && !i) {
                                var r = n.getElementById(e);
                                return r ? r.id === e || typeof r.getAttributeNode !== j && r.getAttributeNode("id").value === e ? [r] : t : []
                            }
                        },
                        TAG: lt ? function (e, t) {
                            return typeof t.getElementsByTagName !== j ? t.getElementsByTagName(e) : void 0
                        } : function (e, t) {
                            var n = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (var i, r = [], o = 0; i = n[o]; o++) 1 === i.nodeType && r.push(i);
                                return r
                            }
                            return n
                        },
                        NAME: pt && function (e, t) {
                            return typeof t.getElementsByName !== j ? t.getElementsByName(name) : void 0
                        },
                        CLASS: dt && function (e, t, n) {
                            return typeof t.getElementsByClassName === j || n ? void 0 : t.getElementsByClassName(e)
                        }
                    },
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
                            return e[1] = e[1].replace(at, ""), e[3] = (e[4] || e[5] || "").replace(at, ""), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function (e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1] ? (e[2] || n.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * ("even" === e[2] || "odd" === e[2])), e[4] = +(e[6] + e[7] || "odd" === e[2])) : e[2] && n.error(e[0]), e
                        },
                        PSEUDO: function (e) {
                            var t, n;
                            return st.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[3] : (t = e[4]) && (tt.test(t) && (n = s(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n), e[0] = e[0].slice(0, n)), e[2] = t), e.slice(0, 3))
                        }
                    },
                    filter: {
                        ID: y ? function (e) {
                            return e = e.replace(at, ""),
                                function (t) {
                                    return t.getAttribute("id") === e
                                }
                        } : function (e) {
                            return e = e.replace(at, ""),
                                function (t) {
                                    var n = typeof t.getAttributeNode !== j && t.getAttributeNode("id");
                                    return n && n.value === e
                                }
                        },
                        TAG: function (e) {
                            return "*" === e ? function () {
                                return !0
                            } : (e = e.replace(at, "").toLowerCase(), function (t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            })
                        },
                        CLASS: function (e) {
                            var t = B[A][e];
                            return t || (t = B(e, new RegExp("(^|" + W + ")" + e + "(" + W + "|$)"))),
                                function (e) {
                                    return t.test(e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
                                }
                        },
                        ATTR: function (e, t, i) {
                            return function (r) {
                                var o = n.attr(r, e);
                                return null == o ? "!=" === t : t ? (o += "", "=" === t ? o === i : "!=" === t ? o !== i : "^=" === t ? i && 0 === o.indexOf(i) : "*=" === t ? i && o.indexOf(i) > -1 : "$=" === t ? i && o.substr(o.length - i.length) === i : "~=" === t ? (" " + o + " ").indexOf(i) > -1 : "|=" === t ? o === i || o.substr(0, i.length + 1) === i + "-" : !1) : !0
                            }
                        },
                        CHILD: function (e, t, n, i) {
                            return "nth" === e ? function (e) {
                                var t, r, o = e.parentNode;
                                if (1 === n && 0 === i) return !0;
                                if (o)
                                    for (r = 0, t = o.firstChild; t && (1 !== t.nodeType || (r++, e !== t)); t = t.nextSibling);
                                return r -= i, r === n || 0 === r % n && r / n >= 0
                            } : function (t) {
                                var n = t;
                                switch (e) {
                                case "only":
                                case "first":
                                    for (; n = n.previousSibling;)
                                        if (1 === n.nodeType) return !1;
                                    if ("first" === e) return !0;
                                    n = t;
                                case "last":
                                    for (; n = n.nextSibling;)
                                        if (1 === n.nodeType) return !1;
                                    return !0
                                }
                            }
                        },
                        PSEUDO: function (e, t) {
                            var i, r = $.pseudos[e] || $.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                            return r[A] ? r(t) : r.length > 1 ? (i = [e, e, "", t], $.setFilters.hasOwnProperty(e.toLowerCase()) ? P(function (e, n) {
                                for (var i, o = r(e, t), a = o.length; a--;) i = q.call(e, o[a]), e[i] = !(n[i] = o[a])
                            }) : function (e) {
                                return r(e, 0, i)
                            }) : r
                        }
                    },
                    pseudos: {
                        not: P(function (e) {
                            var t = [],
                                n = [],
                                i = C(e.replace(K, "$1"));
                            return i[A] ? P(function (e, t, n, r) {
                                for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                            }) : function (e, r, o) {
                                return t[0] = e, i(t, null, o, n), !n.pop()
                            }
                        }),
                        has: P(function (e) {
                            return function (t) {
                                return n(e, t).length > 0
                            }
                        }),
                        contains: P(function (e) {
                            return function (t) {
                                return (t.textContent || t.innerText || b(t)).indexOf(e) > -1
                            }
                        }),
                        enabled: function (e) {
                            return e.disabled === !1
                        },
                        disabled: function (e) {
                            return e.disabled === !0
                        },
                        checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        },
                        parent: function (e) {
                            return !$.pseudos.empty(e)
                        },
                        empty: function (e) {
                            var t;
                            for (e = e.firstChild; e;) {
                                if (e.nodeName > "@" || 3 === (t = e.nodeType) || 4 === t) return !1;
                                e = e.nextSibling
                            }
                            return !0
                        },
                        header: function (e) {
                            return rt.test(e.nodeName)
                        },
                        text: function (e) {
                            var t, n;
                            return "input" === e.nodeName.toLowerCase() && "text" === (t = e.type) && (null == (n = e.getAttribute("type")) || n.toLowerCase() === t)
                        },
                        radio: i("radio"),
                        checkbox: i("checkbox"),
                        file: i("file"),
                        password: i("password"),
                        image: i("image"),
                        submit: r("submit"),
                        reset: r("reset"),
                        button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        input: function (e) {
                            return ot.test(e.nodeName)
                        },
                        focus: function (e) {
                            var t = e.ownerDocument;
                            return !(e !== t.activeElement || t.hasFocus && !t.hasFocus() || !e.type && !e.href)
                        },
                        active: function (e) {
                            return e === e.ownerDocument.activeElement
                        },
                        first: o(function () {
                            return [0]
                        }),
                        last: o(function (e, t) {
                            return [t - 1]
                        }),
                        eq: o(function (e, t, n) {
                            return [0 > n ? n + t : n]
                        }),
                        even: o(function (e, t) {
                            for (var n = 0; t > n; n += 2) e.push(n);
                            return e
                        }),
                        odd: o(function (e, t) {
                            for (var n = 1; t > n; n += 2) e.push(n);
                            return e
                        }),
                        lt: o(function (e, t, n) {
                            for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                            return e
                        }),
                        gt: o(function (e, t, n) {
                            for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                            return e
                        })
                    }
                }, k = _.compareDocumentPosition ? function (e, t) {
                    return e === t ? (T = !0, 0) : (e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) : e.compareDocumentPosition) ? -1 : 1
                } : function (e, t) {
                    if (e === t) return T = !0, 0;
                    if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
                    var n, i, r = [],
                        o = [],
                        s = e.parentNode,
                        u = t.parentNode,
                        l = s;
                    if (s === u) return a(e, t);
                    if (!s) return -1;
                    if (!u) return 1;
                    for (; l;) r.unshift(l), l = l.parentNode;
                    for (l = u; l;) o.unshift(l), l = l.parentNode;
                    n = r.length, i = o.length;
                    for (var c = 0; n > c && i > c; c++)
                        if (r[c] !== o[c]) return a(r[c], o[c]);
                    return c === n ? a(e, o[c], -1) : a(r[c], t, 1)
                }, [0, 0].sort(k), E = !T, n.uniqueSort = function (e) {
                    var t, n = 1;
                    if (T = E, e.sort(k), T)
                        for (; t = e[n]; n++) t === e[n - 1] && e.splice(n--, 1);
                    return e
                }, n.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, C = n.compile = function (e, t) {
                    var n, i = [],
                        r = [],
                        o = z[A][e];
                    if (!o) {
                        for (t || (t = s(e)), n = t.length; n--;) o = d(t[n]), o[A] ? i.push(o) : r.push(o);
                        o = z(e, p(r, i))
                    }
                    return o
                }, M.querySelectorAll && function () {
                    var e, t = m,
                        i = /'|\\/g,
                        r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                        o = [":focus"],
                        a = [":active", ":focus"],
                        u = _.matchesSelector || _.mozMatchesSelector || _.webkitMatchesSelector || _.oMatchesSelector || _.msMatchesSelector;
                    ut(function (e) {
                        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || o.push("\\[" + W + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || o.push(":checked")
                    }), ut(function (e) {
                        e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && o.push("[*^$]=" + W + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled")
                    }), o = new RegExp(o.join("|")), m = function (e, n, r, a, u) {
                        if (!(a || u || o && o.test(e))) {
                            var l, c, f = !0,
                                d = A,
                                p = n,
                                h = 9 === n.nodeType && e;
                            if (1 === n.nodeType && "object" !== n.nodeName.toLowerCase()) {
                                for (l = s(e), (f = n.getAttribute("id")) ? d = f.replace(i, "\\$&") : n.setAttribute("id", d), d = "[id='" + d + "'] ", c = l.length; c--;) l[c] = d + l[c].join("");
                                p = it.test(e) && n.parentNode || n, h = l.join(",")
                            }
                            if (h) try {
                                return H.apply(r, F.call(p.querySelectorAll(h), 0)), r
                            } catch (m) {} finally {
                                f || n.removeAttribute("id")
                            }
                        }
                        return t(e, n, r, a, u)
                    }, u && (ut(function (t) {
                        e = u.call(t, "div");
                        try {
                            u.call(t, "[test!='']:sizzle"), a.push("!=", Q)
                        } catch (n) {}
                    }), a = new RegExp(a.join("|")), n.matchesSelector = function (t, i) {
                        if (i = i.replace(r, "='$1']"), !(x(t) || a.test(i) || o && o.test(i))) try {
                            var s = u.call(t, i);
                            if (s || e || t.document && 11 !== t.document.nodeType) return s
                        } catch (l) {}
                        return n(i, null, null, [t]).length > 0
                    })
                }(), $.pseudos.nth = $.pseudos.eq, $.filters = g.prototype = $.pseudos, $.setFilters = new g, n.attr = G.attr, G.find = n, G.expr = n.selectors, G.expr[":"] = G.expr.pseudos, G.unique = n.uniqueSort, G.text = n.getText, G.isXMLDoc = n.isXML, G.contains = n.contains
            }(e);
        var Lt = /Until$/,
            Dt = /^(?:parents|prev(?:Until|All))/,
            Ht = /^.[^:#\[\.,]*$/,
            Ft = G.expr.match.needsContext,
            qt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        G.fn.extend({
            find: function (e) {
                var t, n, i, r, o, a, s = this;
                if ("string" != typeof e) return G(e).filter(function () {
                    for (t = 0, n = s.length; n > t; t++)
                        if (G.contains(s[t], this)) return !0
                });
                for (a = this.pushStack("", "find", e), t = 0, n = this.length; n > t; t++)
                    if (i = a.length, G.find(e, this[t], a), t > 0)
                        for (r = i; r < a.length; r++)
                            for (o = 0; i > o; o++)
                                if (a[o] === a[r]) {
                                    a.splice(r--, 1);
                                    break
                                }
                return a
            },
            has: function (e) {
                var t, n = G(e, this),
                    i = n.length;
                return this.filter(function () {
                    for (t = 0; i > t; t++)
                        if (G.contains(this, n[t])) return !0
                })
            },
            not: function (e) {
                return this.pushStack(l(this, e, !1), "not", e)
            },
            filter: function (e) {
                return this.pushStack(l(this, e, !0), "filter", e)
            },
            is: function (e) {
                return !!e && ("string" == typeof e ? Ft.test(e) ? G(e, this.context).index(this[0]) >= 0 : G.filter(e, this).length > 0 : this.filter(e).length > 0)
            },
            closest: function (e, t) {
                for (var n, i = 0, r = this.length, o = [], a = Ft.test(e) || "string" != typeof e ? G(e, t || this.context) : 0; r > i; i++)
                    for (n = this[i]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                        if (a ? a.index(n) > -1 : G.find.matchesSelector(n, e)) {
                            o.push(n);
                            break
                        }
                        n = n.parentNode
                    }
                return o = o.length > 1 ? G.unique(o) : o, this.pushStack(o, "closest", e)
            },
            index: function (e) {
                return e ? "string" == typeof e ? G.inArray(this[0], G(e)) : G.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
            },
            add: function (e, t) {
                var n = "string" == typeof e ? G(e, t) : G.makeArray(e && e.nodeType ? [e] : e),
                    i = G.merge(this.get(), n);
                return this.pushStack(s(n[0]) || s(i[0]) ? i : G.unique(i))
            },
            addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), G.fn.andSelf = G.fn.addBack, G.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function (e) {
                return G.dir(e, "parentNode")
            },
            parentsUntil: function (e, t, n) {
                return G.dir(e, "parentNode", n)
            },
            next: function (e) {
                return u(e, "nextSibling")
            },
            prev: function (e) {
                return u(e, "previousSibling")
            },
            nextAll: function (e) {
                return G.dir(e, "nextSibling")
            },
            prevAll: function (e) {
                return G.dir(e, "previousSibling")
            },
            nextUntil: function (e, t, n) {
                return G.dir(e, "nextSibling", n)
            },
            prevUntil: function (e, t, n) {
                return G.dir(e, "previousSibling", n)
            },
            siblings: function (e) {
                return G.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function (e) {
                return G.sibling(e.firstChild)
            },
            contents: function (e) {
                return G.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : G.merge([], e.childNodes)
            }
        }, function (e, t) {
            G.fn[e] = function (n, i) {
                var r = G.map(this, t, n);
                return Lt.test(e) || (i = n), i && "string" == typeof i && (r = G.filter(i, r)), r = this.length > 1 && !qt[e] ? G.unique(r) : r, this.length > 1 && Dt.test(e) && (r = r.reverse()), this.pushStack(r, e, V.call(arguments).join(","))
            }
        }), G.extend({
            filter: function (e, t, n) {
                return n && (e = ":not(" + e + ")"), 1 === t.length ? G.find.matchesSelector(t[0], e) ? [t[0]] : [] : G.find.matches(e, t)
            },
            dir: function (e, n, i) {
                for (var r = [], o = e[n]; o && 9 !== o.nodeType && (i === t || 1 !== o.nodeType || !G(o).is(i));) 1 === o.nodeType && r.push(o), o = o[n];
                return r
            },
            sibling: function (e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        });
        var Pt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Rt = / jQuery\d+="(?:null|\d+)"/g,
            Bt = /^\s+/,
            It = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            zt = /<([\w:]+)/,
            Wt = /<tbody/i,
            Ut = /<|&#?\w+;/,
            Xt = /<(?:script|style|link)/i,
            Vt = /<(?:script|object|embed|option|style)/i,
            Yt = new RegExp("<(?:" + Pt + ")[\\s/>]", "i"),
            Qt = /^(?:checkbox|radio)$/,
            Jt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Kt = /\/(java|ecma)script/i,
            Gt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
            Zt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                area: [1, "<map>", "</map>"],
                _default: [0, "", ""]
            },
            en = c(B),
            tn = en.appendChild(B.createElement("div"));
        Zt.optgroup = Zt.option, Zt.tbody = Zt.tfoot = Zt.colgroup = Zt.caption = Zt.thead, Zt.th = Zt.td, G.support.htmlSerialize || (Zt._default = [1, "X<div>", "</div>"]), G.fn.extend({
                text: function (e) {
                    return G.access(this, function (e) {
                        return e === t ? G.text(this) : this.empty().append((this[0] && this[0].ownerDocument || B).createTextNode(e))
                    }, null, e, arguments.length)
                },
                wrapAll: function (e) {
                    if (G.isFunction(e)) return this.each(function (t) {
                        G(this).wrapAll(e.call(this, t))
                    });
                    if (this[0]) {
                        var t = G(e, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                            for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                            return e
                        }).append(this)
                    }
                    return this
                },
                wrapInner: function (e) {
                    return G.isFunction(e) ? this.each(function (t) {
                        G(this).wrapInner(e.call(this, t))
                    }) : this.each(function () {
                        var t = G(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function (e) {
                    var t = G.isFunction(e);
                    return this.each(function (n) {
                        G(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function () {
                    return this.parent().each(function () {
                        G.nodeName(this, "body") || G(this).replaceWith(this.childNodes)
                    }).end()
                },
                append: function () {
                    return this.domManip(arguments, !0, function (e) {
                        (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(e)
                    })
                },
                prepend: function () {
                    return this.domManip(arguments, !0, function (e) {
                        (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(e, this.firstChild)
                    })
                },
                before: function () {
                    if (!s(this[0])) return this.domManip(arguments, !1, function (e) {
                        this.parentNode.insertBefore(e, this)
                    });
                    if (arguments.length) {
                        var e = G.clean(arguments);
                        return this.pushStack(G.merge(e, this), "before", this.selector)
                    }
                },
                after: function () {
                    if (!s(this[0])) return this.domManip(arguments, !1, function (e) {
                        this.parentNode.insertBefore(e, this.nextSibling)
                    });
                    if (arguments.length) {
                        var e = G.clean(arguments);
                        return this.pushStack(G.merge(this, e), "after", this.selector)
                    }
                },
                remove: function (e, t) {
                    for (var n, i = 0; null != (n = this[i]); i++)(!e || G.filter(e, [n]).length) && (t || 1 !== n.nodeType || (G.cleanData(n.getElementsByTagName("*")), G.cleanData([n])), n.parentNode && n.parentNode.removeChild(n));
                    return this
                },
                empty: function () {
                    for (var e, t = 0; null != (e = this[t]); t++)
                        for (1 === e.nodeType && G.cleanData(e.getElementsByTagName("*")); e.firstChild;) e.removeChild(e.firstChild);
                    return this
                },
                clone: function (e, t) {
                    return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                        return G.clone(this, e, t)
                    })
                },
                html: function (e) {
                    return G.access(this, function (e) {
                        var n = this[0] || {},
                            i = 0,
                            r = this.length;
                        if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Rt, "") : t;
                        if (!("string" != typeof e || Xt.test(e) || !G.support.htmlSerialize && Yt.test(e) || !G.support.leadingWhitespace && Bt.test(e) || Zt[(zt.exec(e) || ["", ""])[1].toLowerCase()])) {
                            e = e.replace(It, "<$1></$2>");
                            try {
                                for (; r > i; i++) n = this[i] || {}, 1 === n.nodeType && (G.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                                n = 0
                            } catch (o) {}
                        }
                        n && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function (e) {
                    return s(this[0]) ? this.length ? this.pushStack(G(G.isFunction(e) ? e() : e), "replaceWith", e) : this : G.isFunction(e) ? this.each(function (t) {
                        var n = G(this),
                            i = n.html();
                        n.replaceWith(e.call(this, t, i))
                    }) : ("string" != typeof e && (e = G(e).detach()), this.each(function () {
                        var t = this.nextSibling,
                            n = this.parentNode;
                        G(this).remove(), t ? G(t).before(e) : G(n).append(e)
                    }))
                },
                detach: function (e) {
                    return this.remove(e, !0)
                },
                domManip: function (e, n, i) {
                    e = [].concat.apply([], e);
                    var r, o, a, s, u = 0,
                        l = e[0],
                        c = [],
                        d = this.length;
                    if (!G.support.checkClone && d > 1 && "string" == typeof l && Jt.test(l)) return this.each(function () {
                        G(this).domManip(e, n, i)
                    });
                    if (G.isFunction(l)) return this.each(function (r) {
                        var o = G(this);
                        e[0] = l.call(this, r, n ? o.html() : t), o.domManip(e, n, i)
                    });
                    if (this[0]) {
                        if (r = G.buildFragment(e, this, c), a = r.fragment, o = a.firstChild, 1 === a.childNodes.length && (a = o), o)
                            for (n = n && G.nodeName(o, "tr"), s = r.cacheable || d - 1; d > u; u++) i.call(n && G.nodeName(this[u], "table") ? f(this[u], "tbody") : this[u], u === s ? a : G.clone(a, !0, !0));
                        a = o = null, c.length && G.each(c, function (e, t) {
                            t.src ? G.ajax ? G.ajax({
                                url: t.src,
                                type: "GET",
                                dataType: "script",
                                async: !1,
                                global: !1,
                                "throws": !0
                            }) : G.error("no ajax") : G.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Gt, "")), t.parentNode && t.parentNode.removeChild(t)
                        })
                    }
                    return this
                }
            }), G.buildFragment = function (e, n, i) {
                var r, o, a, s = e[0];
                return n = n || B, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, !(1 === e.length && "string" == typeof s && s.length < 512 && n === B && "<" === s.charAt(0)) || Vt.test(s) || !G.support.checkClone && Jt.test(s) || !G.support.html5Clone && Yt.test(s) || (o = !0, r = G.fragments[s], a = r !== t), r || (r = n.createDocumentFragment(), G.clean(e, n, r, i), o && (G.fragments[s] = a && r)), {
                    fragment: r,
                    cacheable: o
                }
            }, G.fragments = {}, G.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (e, t) {
                G.fn[e] = function (n) {
                    var i, r = 0,
                        o = [],
                        a = G(n),
                        s = a.length,
                        u = 1 === this.length && this[0].parentNode;
                    if ((null == u || u && 11 === u.nodeType && 1 === u.childNodes.length) && 1 === s) return a[t](this[0]), this;
                    for (; s > r; r++) i = (r > 0 ? this.clone(!0) : this).get(), G(a[r])[t](i), o = o.concat(i);
                    return this.pushStack(o, e, a.selector)
                }
            }), G.extend({
                clone: function (e, t, n) {
                    var i, r, o, a;
                    if (G.support.html5Clone || G.isXMLDoc(e) || !Yt.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (tn.innerHTML = e.outerHTML, tn.removeChild(a = tn.firstChild)), !(G.support.noCloneEvent && G.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || G.isXMLDoc(e)))
                        for (p(e, a), i = h(e), r = h(a), o = 0; i[o]; ++o) r[o] && p(i[o], r[o]);
                    if (t && (d(e, a), n))
                        for (i = h(e), r = h(a), o = 0; i[o]; ++o) d(i[o], r[o]);
                    return i = r = null, a
                },
                clean: function (e, t, n, i) {
                    var r, o, a, s, u, l, f, d, p, h, g, v = t === B && en,
                        y = [];
                    for (t && "undefined" != typeof t.createDocumentFragment || (t = B), r = 0; null != (a = e[r]); r++)
                        if ("number" == typeof a && (a += ""), a) {
                            if ("string" == typeof a)
                                if (Ut.test(a)) {
                                    for (v = v || c(t), f = t.createElement("div"), v.appendChild(f), a = a.replace(It, "<$1></$2>"), s = (zt.exec(a) || ["", ""])[1].toLowerCase(), u = Zt[s] || Zt._default, l = u[0], f.innerHTML = u[1] + a + u[2]; l--;) f = f.lastChild;
                                    if (!G.support.tbody)
                                        for (d = Wt.test(a), p = "table" !== s || d ? "<table>" !== u[1] || d ? [] : f.childNodes : f.firstChild && f.firstChild.childNodes, o = p.length - 1; o >= 0; --o) G.nodeName(p[o], "tbody") && !p[o].childNodes.length && p[o].parentNode.removeChild(p[o]);
                                    !G.support.leadingWhitespace && Bt.test(a) && f.insertBefore(t.createTextNode(Bt.exec(a)[0]), f.firstChild), a = f.childNodes, f.parentNode.removeChild(f)
                                } else a = t.createTextNode(a);
                            a.nodeType ? y.push(a) : G.merge(y, a)
                        }
                    if (f && (a = f = v = null), !G.support.appendChecked)
                        for (r = 0; null != (a = y[r]); r++) G.nodeName(a, "input") ? m(a) : "undefined" != typeof a.getElementsByTagName && G.grep(a.getElementsByTagName("input"), m);
                    if (n)
                        for (h = function (e) {
                            return !e.type || Kt.test(e.type) ? i ? i.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e) : void 0
                        }, r = 0; null != (a = y[r]); r++) G.nodeName(a, "script") && h(a) || (n.appendChild(a), "undefined" != typeof a.getElementsByTagName && (g = G.grep(G.merge([], a.getElementsByTagName("script")), h), y.splice.apply(y, [r + 1, 0].concat(g)), r += g.length));
                    return y
                },
                cleanData: function (e, t) {
                    for (var n, i, r, o, a = 0, s = G.expando, u = G.cache, l = G.support.deleteExpando, c = G.event.special; null != (r = e[a]); a++)
                        if ((t || G.acceptData(r)) && (i = r[s], n = i && u[i])) {
                            if (n.events)
                                for (o in n.events) c[o] ? G.event.remove(r, o) : G.removeEvent(r, o, n.handle);
                            u[i] && (delete u[i], l ? delete r[s] : r.removeAttribute ? r.removeAttribute(s) : r[s] = null, G.deletedIds.push(i))
                        }
                }
            }),
            function () {
                var e, t;
                G.uaMatch = function (e) {
                    e = e.toLowerCase();
                    var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
                    return {
                        browser: t[1] || "",
                        version: t[2] || "0"
                    }
                }, e = G.uaMatch(z.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), G.browser = t, G.sub = function () {
                    function e(t, n) {
                        return new e.fn.init(t, n)
                    }
                    G.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function (n, i) {
                        return i && i instanceof G && !(i instanceof e) && (i = e(i)), G.fn.init.call(this, n, i, t)
                    }, e.fn.init.prototype = e.fn;
                    var t = e(B);
                    return e
                }
            }();
        var nn, rn, on, an = /alpha\([^)]*\)/i,
            sn = /opacity=([^)]*)/,
            un = /^(top|right|bottom|left)$/,
            ln = /^(none|table(?!-c[ea]).+)/,
            cn = /^margin/,
            fn = new RegExp("^(" + Z + ")(.*)$", "i"),
            dn = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
            pn = new RegExp("^([-+])=(" + Z + ")", "i"),
            hn = {},
            mn = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            gn = {
                letterSpacing: 0,
                fontWeight: 400
            },
            vn = ["Top", "Right", "Bottom", "Left"],
            yn = ["Webkit", "O", "Moz", "ms"],
            $n = G.fn.toggle;
        G.fn.extend({
            css: function (e, n) {
                return G.access(this, function (e, n, i) {
                    return i !== t ? G.style(e, n, i) : G.css(e, n)
                }, e, n, arguments.length > 1)
            },
            show: function () {
                return y(this, !0)
            },
            hide: function () {
                return y(this)
            },
            toggle: function (e, t) {
                var n = "boolean" == typeof e;
                return G.isFunction(e) && G.isFunction(t) ? $n.apply(this, arguments) : this.each(function () {
                    (n ? e : v(this)) ? G(this).show(): G(this).hide()
                })
            }
        }), G.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = nn(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": G.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function (e, n, i, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, a, s, u = G.camelCase(n),
                        l = e.style;
                    if (n = G.cssProps[u] || (G.cssProps[u] = g(l, u)), s = G.cssHooks[n] || G.cssHooks[u], i === t) return s && "get" in s && (o = s.get(e, !1, r)) !== t ? o : l[n];
                    if (a = typeof i, "string" === a && (o = pn.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(G.css(e, n)), a = "number"), !(null == i || "number" === a && isNaN(i) || ("number" !== a || G.cssNumber[u] || (i += "px"), s && "set" in s && (i = s.set(e, i, r)) === t))) try {
                        l[n] = i
                    } catch (c) {}
                }
            },
            css: function (e, n, i, r) {
                var o, a, s, u = G.camelCase(n);
                return n = G.cssProps[u] || (G.cssProps[u] = g(e.style, u)), s = G.cssHooks[n] || G.cssHooks[u], s && "get" in s && (o = s.get(e, !0, r)), o === t && (o = nn(e, n)), "normal" === o && n in gn && (o = gn[n]), i || r !== t ? (a = parseFloat(o), i || G.isNumeric(a) ? a || 0 : o) : o
            },
            swap: function (e, t, n) {
                var i, r, o = {};
                for (r in t) o[r] = e.style[r], e.style[r] = t[r];
                i = n.call(e);
                for (r in t) e.style[r] = o[r];
                return i
            }
        }), e.getComputedStyle ? nn = function (t, n) {
            var i, r, o, a, s = e.getComputedStyle(t, null),
                u = t.style;
            return s && (i = s[n], "" !== i || G.contains(t.ownerDocument, t) || (i = G.style(t, n)), dn.test(i) && cn.test(n) && (r = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = i, i = s.width, u.width = r, u.minWidth = o, u.maxWidth = a)), i
        } : B.documentElement.currentStyle && (nn = function (e, t) {
            var n, i, r = e.currentStyle && e.currentStyle[t],
                o = e.style;
            return null == r && o && o[t] && (r = o[t]), dn.test(r) && !un.test(t) && (n = o.left, i = e.runtimeStyle && e.runtimeStyle.left, i && (e.runtimeStyle.left = e.currentStyle.left), o.left = "fontSize" === t ? "1em" : r, r = o.pixelLeft + "px", o.left = n, i && (e.runtimeStyle.left = i)), "" === r ? "auto" : r
        }), G.each(["height", "width"], function (e, t) {
            G.cssHooks[t] = {
                get: function (e, n, i) {
                    return n ? 0 === e.offsetWidth && ln.test(nn(e, "display")) ? G.swap(e, mn, function () {
                        return x(e, t, i)
                    }) : x(e, t, i) : void 0
                },
                set: function (e, n, i) {
                    return $(e, n, i ? b(e, t, i, G.support.boxSizing && "border-box" === G.css(e, "boxSizing")) : 0)
                }
            }
        }), G.support.opacity || (G.cssHooks.opacity = {
            get: function (e, t) {
                return sn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function (e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    r = G.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    o = i && i.filter || n.filter || "";
                n.zoom = 1, t >= 1 && "" === G.trim(o.replace(an, "")) && n.removeAttribute && (n.removeAttribute("filter"), i && !i.filter) || (n.filter = an.test(o) ? o.replace(an, r) : o + " " + r)
            }
        }), G(function () {
            G.support.reliableMarginRight || (G.cssHooks.marginRight = {
                get: function (e, t) {
                    return G.swap(e, {
                        display: "inline-block"
                    }, function () {
                        return t ? nn(e, "marginRight") : void 0
                    })
                }
            }), !G.support.pixelPosition && G.fn.position && G.each(["top", "left"], function (e, t) {
                G.cssHooks[t] = {
                    get: function (e, n) {
                        if (n) {
                            var i = nn(e, t);
                            return dn.test(i) ? G(e).position()[t] + "px" : i
                        }
                    }
                }
            })
        }), G.expr && G.expr.filters && (G.expr.filters.hidden = function (e) {
            return 0 === e.offsetWidth && 0 === e.offsetHeight || !G.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || nn(e, "display"))
        }, G.expr.filters.visible = function (e) {
            return !G.expr.filters.hidden(e)
        }), G.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (e, t) {
            G.cssHooks[e + t] = {
                expand: function (n) {
                    var i, r = "string" == typeof n ? n.split(" ") : [n],
                        o = {};
                    for (i = 0; 4 > i; i++) o[e + vn[i] + t] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, cn.test(e) || (G.cssHooks[e + t].set = $)
        });
        var bn = /%20/g,
            xn = /\[\]$/,
            wn = /\r?\n/g,
            Cn = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
            kn = /^(?:select|textarea)/i;
        G.fn.extend({
            serialize: function () {
                return G.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    return this.elements ? G.makeArray(this.elements) : this
                }).filter(function () {
                    return this.name && !this.disabled && (this.checked || kn.test(this.nodeName) || Cn.test(this.type))
                }).map(function (e, t) {
                    var n = G(this).val();
                    return null == n ? null : G.isArray(n) ? G.map(n, function (e) {
                        return {
                            name: t.name,
                            value: e.replace(wn, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(wn, "\r\n")
                    }
                }).get()
            }
        }), G.param = function (e, n) {
            var i, r = [],
                o = function (e, t) {
                    t = G.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (n === t && (n = G.ajaxSettings && G.ajaxSettings.traditional), G.isArray(e) || e.jquery && !G.isPlainObject(e)) G.each(e, function () {
                o(this.name, this.value)
            });
            else
                for (i in e) C(i, e[i], n, o);
            return r.join("&").replace(bn, "+")
        };
        var Tn, Sn, En = /#.*$/,
            jn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            An = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
            Nn = /^(?:GET|HEAD)$/,
            Mn = /^\/\//,
            _n = /\?/,
            On = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            Ln = /([?&])_=[^&]*/,
            Dn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            Hn = G.fn.load,
            Fn = {},
            qn = {},
            Pn = ["*/"] + ["*"];
        try {
            Sn = I.href
        } catch (Rn) {
            Sn = B.createElement("a"), Sn.href = "", Sn = Sn.href
        }
        Tn = Dn.exec(Sn.toLowerCase()) || [], G.fn.load = function (e, n, i) {
            if ("string" != typeof e && Hn) return Hn.apply(this, arguments);
            if (!this.length) return this;
            var r, o, a, s = this,
                u = e.indexOf(" ");
            return u >= 0 && (r = e.slice(u, e.length), e = e.slice(0, u)), G.isFunction(n) ? (i = n, n = t) : n && "object" == typeof n && (o = "POST"), G.ajax({
                url: e,
                type: o,
                dataType: "html",
                data: n,
                complete: function (e, t) {
                    i && s.each(i, a || [e.responseText, t, e])
                }
            }).done(function (e) {
                a = arguments, s.html(r ? G("<div>").append(e.replace(On, "")).find(r) : e)
            }), this
        }, G.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, t) {
            G.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), G.each(["get", "post"], function (e, n) {
            G[n] = function (e, i, r, o) {
                return G.isFunction(i) && (o = o || r, r = i, i = t), G.ajax({
                    type: n,
                    url: e,
                    data: i,
                    success: r,
                    dataType: o
                })
            }
        }), G.extend({
            getScript: function (e, n) {
                return G.get(e, t, n, "script")
            },
            getJSON: function (e, t, n) {
                return G.get(e, t, n, "json")
            },
            ajaxSetup: function (e, t) {
                return t ? S(e, G.ajaxSettings) : (t = e, e = G.ajaxSettings), S(e, t), e
            },
            ajaxSettings: {
                url: Sn,
                isLocal: An.test(Tn[1]),
                global: !0,
                type: "GET",
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                processData: !0,
                async: !0,
                accepts: {
                    xml: "application/xml, text/xml",
                    html: "text/html",
                    text: "text/plain",
                    json: "application/json, text/javascript",
                    "*": Pn
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": e.String,
                    "text html": !0,
                    "text json": G.parseJSON,
                    "text xml": G.parseXML
                },
                flatOptions: {
                    context: !0,
                    url: !0
                }
            },
            ajaxPrefilter: k(Fn),
            ajaxTransport: k(qn),
            ajax: function (e, n) {
                function i(e, n, i, a) {
                    var l, f, y, $, x, C = n;
                    2 !== b && (b = 2, u && clearTimeout(u), s = t, o = a || "", w.readyState = e > 0 ? 4 : 0, i && ($ = E(d, w, i)), e >= 200 && 300 > e || 304 === e ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (G.lastModified[r] = x), x = w.getResponseHeader("Etag"), x && (G.etag[r] = x)), 304 === e ? (C = "notmodified", l = !0) : (l = j(d, $), C = l.state, f = l.data, y = l.error, l = !y)) : (y = C, (!C || e) && (C = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (n || C) + "", l ? m.resolveWith(p, [f, C, w]) : m.rejectWith(p, [w, C, y]), w.statusCode(v), v = t, c && h.trigger("ajax" + (l ? "Success" : "Error"), [w, d, l ? f : y]), g.fireWith(p, [w, C]), c && (h.trigger("ajaxComplete", [w, d]), --G.active || G.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (n = e, e = t), n = n || {};
                var r, o, a, s, u, l, c, f, d = G.ajaxSetup({}, n),
                    p = d.context || d,
                    h = p !== d && (p.nodeType || p instanceof G) ? G(p) : G.event,
                    m = G.Deferred(),
                    g = G.Callbacks("once memory"),
                    v = d.statusCode || {},
                    y = {},
                    $ = {},
                    b = 0,
                    x = "canceled",
                    w = {
                        readyState: 0,
                        setRequestHeader: function (e, t) {
                            if (!b) {
                                var n = e.toLowerCase();
                                e = $[n] = $[n] || e, y[e] = t
                            }
                            return this
                        },
                        getAllResponseHeaders: function () {
                            return 2 === b ? o : null
                        },
                        getResponseHeader: function (e) {
                            var n;
                            if (2 === b) {
                                if (!a)
                                    for (a = {}; n = jn.exec(o);) a[n[1].toLowerCase()] = n[2];
                                n = a[e.toLowerCase()]
                            }
                            return n === t ? null : n
                        },
                        overrideMimeType: function (e) {
                            return b || (d.mimeType = e), this
                        },
                        abort: function (e) {
                            return e = e || x, s && s.abort(e), i(0, e), this
                        }
                    };
                if (m.promise(w), w.success = w.done, w.error = w.fail, w.complete = g.add, w.statusCode = function (e) {
                    if (e) {
                        var t;
                        if (2 > b)
                            for (t in e) v[t] = [v[t], e[t]];
                        else t = e[w.status], w.always(t)
                    }
                    return this
                }, d.url = ((e || d.url) + "").replace(En, "").replace(Mn, Tn[1] + "//"), d.dataTypes = G.trim(d.dataType || "*").toLowerCase().split(tt), null == d.crossDomain && (l = Dn.exec(d.url.toLowerCase()) || !1, d.crossDomain = l && l.join(":") + (l[3] ? "" : "http:" === l[1] ? 80 : 443) !== Tn.join(":") + (Tn[3] ? "" : "http:" === Tn[1] ? 80 : 443)), d.data && d.processData && "string" != typeof d.data && (d.data = G.param(d.data, d.traditional)), T(Fn, d, n, w), 2 === b) return w;
                if (c = d.global, d.type = d.type.toUpperCase(), d.hasContent = !Nn.test(d.type), c && 0 === G.active++ && G.event.trigger("ajaxStart"), !d.hasContent && (d.data && (d.url += (_n.test(d.url) ? "&" : "?") + d.data, delete d.data), r = d.url, d.cache === !1)) {
                    var C = G.now(),
                        k = d.url.replace(Ln, "$1_=" + C);
                    d.url = k + (k === d.url ? (_n.test(d.url) ? "&" : "?") + "_=" + C : "")
                }(d.data && d.hasContent && d.contentType !== !1 || n.contentType) && w.setRequestHeader("Content-Type", d.contentType), d.ifModified && (r = r || d.url, G.lastModified[r] && w.setRequestHeader("If-Modified-Since", G.lastModified[r]), G.etag[r] && w.setRequestHeader("If-None-Match", G.etag[r])), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Pn + "; q=0.01" : "") : d.accepts["*"]);
                for (f in d.headers) w.setRequestHeader(f, d.headers[f]);
                if (d.beforeSend && (d.beforeSend.call(p, w, d) === !1 || 2 === b)) return w.abort();
                x = "abort";
                for (f in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[f](d[f]);
                if (s = T(qn, d, n, w)) {
                    w.readyState = 1, c && h.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (u = setTimeout(function () {
                        w.abort("timeout")
                    }, d.timeout));
                    try {
                        b = 1, s.send(y, i)
                    } catch (S) {
                        if (!(2 > b)) throw S;
                        i(-1, S)
                    }
                } else i(-1, "No Transport");
                return w
            },
            active: 0,
            lastModified: {},
            etag: {}
        });
        var Bn = [],
            In = /\?/,
            zn = /(=)\?(?=&|$)|\?\?/,
            Wn = G.now();
        G.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var e = Bn.pop() || G.expando + "_" + Wn++;
                return this[e] = !0, e
            }
        }), G.ajaxPrefilter("json jsonp", function (n, i, r) {
            var o, a, s, u = n.data,
                l = n.url,
                c = n.jsonp !== !1,
                f = c && zn.test(l),
                d = c && !f && "string" == typeof u && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && zn.test(u);
            return "jsonp" === n.dataTypes[0] || f || d ? (o = n.jsonpCallback = G.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a = e[o], f ? n.url = l.replace(zn, "$1" + o) : d ? n.data = u.replace(zn, "$1" + o) : c && (n.url += (In.test(l) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
                return s || G.error(o + " was not called"), s[0]
            }, n.dataTypes[0] = "json", e[o] = function () {
                s = arguments
            }, r.always(function () {
                e[o] = a, n[o] && (n.jsonpCallback = i.jsonpCallback, Bn.push(o)), s && G.isFunction(a) && a(s[0]), s = a = t
            }), "script") : void 0
        }), G.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /javascript|ecmascript/
            },
            converters: {
                "text script": function (e) {
                    return G.globalEval(e), e
                }
            }
        }), G.ajaxPrefilter("script", function (e) {
            e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), G.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var n, i = B.head || B.getElementsByTagName("head")[0] || B.documentElement;
                return {
                    send: function (r, o) {
                        n = B.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, r) {
                            (r || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, i && n.parentNode && i.removeChild(n), n = t, r || o(200, "success"))
                        }, i.insertBefore(n, i.firstChild)
                    },
                    abort: function () {
                        n && n.onload(0, 1)
                    }
                }
            }
        });
        var Un, Xn = e.ActiveXObject ? function () {
                for (var e in Un) Un[e](0, 1)
            } : !1,
            Vn = 0;
        G.ajaxSettings.xhr = e.ActiveXObject ? function () {
                return !this.isLocal && A() || N()
            } : A,
            function (e) {
                G.extend(G.support, {
                    ajax: !!e,
                    cors: !!e && "withCredentials" in e
                })
            }(G.ajaxSettings.xhr()), G.support.ajax && G.ajaxTransport(function (n) {
                if (!n.crossDomain || G.support.cors) {
                    var i;
                    return {
                        send: function (r, o) {
                            var a, s, u = n.xhr();
                            if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields)
                                for (s in n.xhrFields) u[s] = n.xhrFields[s];
                            n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                            try {
                                for (s in r) u.setRequestHeader(s, r[s])
                            } catch (l) {}
                            u.send(n.hasContent && n.data || null), i = function (e, r) {
                                var s, l, c, f, d;
                                try {
                                    if (i && (r || 4 === u.readyState))
                                        if (i = t, a && (u.onreadystatechange = G.noop, Xn && delete Un[a]), r) 4 !== u.readyState && u.abort();
                                        else {
                                            s = u.status, c = u.getAllResponseHeaders(), f = {}, d = u.responseXML, d && d.documentElement && (f.xml = d);
                                            try {
                                                f.text = u.responseText
                                            } catch (e) {}
                                            try {
                                                l = u.statusText
                                            } catch (p) {
                                                l = ""
                                            }
                                            s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
                                        }
                                } catch (h) {
                                    r || o(-1, h)
                                }
                                f && o(s, l, f, c)
                            }, n.async ? 4 === u.readyState ? setTimeout(i, 0) : (a = ++Vn, Xn && (Un || (Un = {}, G(e).unload(Xn)), Un[a] = i), u.onreadystatechange = i) : i()
                        },
                        abort: function () {
                            i && i(0, 1)
                        }
                    }
                }
            });
        var Yn, Qn, Jn = /^(?:toggle|show|hide)$/,
            Kn = new RegExp("^(?:([-+])=|)(" + Z + ")([a-z%]*)$", "i"),
            Gn = /queueHooks$/,
            Zn = [D],
            ei = {
                "*": [

                    function (e, t) {
                        var n, i, r = this.createTween(e, t),
                            o = Kn.exec(t),
                            a = r.cur(),
                            s = +a || 0,
                            u = 1,
                            l = 20;
                        if (o) {
                            if (n = +o[2], i = o[3] || (G.cssNumber[e] ? "" : "px"), "px" !== i && s) {
                                s = G.css(r.elem, e, !0) || n || 1;
                                do u = u || ".5", s /= u, G.style(r.elem, e, s + i); while (u !== (u = r.cur() / a) && 1 !== u && --l)
                            }
                            r.unit = i, r.start = s, r.end = o[1] ? s + (o[1] + 1) * n : n
                        }
                        return r
                    }
                ]
            };
        G.Animation = G.extend(O, {
            tweener: function (e, t) {
                G.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, r = e.length; r > i; i++) n = e[i], ei[n] = ei[n] || [], ei[n].unshift(t)
            },
            prefilter: function (e, t) {
                t ? Zn.unshift(e) : Zn.push(e)
            }
        }), G.Tween = H, H.prototype = {
            constructor: H,
            init: function (e, t, n, i, r, o) {
                this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (G.cssNumber[n] ? "" : "px")
            },
            cur: function () {
                var e = H.propHooks[this.prop];
                return e && e.get ? e.get(this) : H.propHooks._default.get(this)
            },
            run: function (e) {
                var t, n = H.propHooks[this.prop];
                return this.pos = t = this.options.duration ? G.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
            }
        }, H.prototype.init.prototype = H.prototype, H.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = G.css(e.elem, e.prop, !1, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function (e) {
                    G.fx.step[e.prop] ? G.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[G.cssProps[e.prop]] || G.cssHooks[e.prop]) ? G.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, G.each(["toggle", "show", "hide"], function (e, t) {
            var n = G.fn[t];
            G.fn[t] = function (i, r, o) {
                return null == i || "boolean" == typeof i || !e && G.isFunction(i) && G.isFunction(r) ? n.apply(this, arguments) : this.animate(F(t, !0), i, r, o)
            }
        }), G.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(v).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function (e, t, n, i) {
                var r = G.isEmptyObject(e),
                    o = G.speed(t, n, i),
                    a = function () {
                        var t = O(this, G.extend({}, e), o);
                        r && t.stop(!0)
                    };
                return r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function (e, n, i) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(i)
                };
                return "string" != typeof e && (i = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        n = null != e && e + "queueHooks",
                        o = G.timers,
                        a = G._data(this);
                    if (n) a[n] && a[n].stop && r(a[n]);
                    else
                        for (n in a) a[n] && a[n].stop && Gn.test(n) && r(a[n]);
                    for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(i), t = !1, o.splice(n, 1));
                    (t || !i) && G.dequeue(this, e)
                })
            }
        }), G.each({
            slideDown: F("show"),
            slideUp: F("hide"),
            slideToggle: F("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            G.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), G.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? G.extend({}, e) : {
                complete: n || !n && t || G.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !G.isFunction(t) && t
            };
            return i.duration = G.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in G.fx.speeds ? G.fx.speeds[i.duration] : G.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                G.isFunction(i.old) && i.old.call(this), i.queue && G.dequeue(this, i.queue)
            }, i
        }, G.easing = {
            linear: function (e) {
                return e
            },
            swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, G.timers = [], G.fx = H.prototype.init, G.fx.tick = function () {
            for (var e, t = G.timers, n = 0; n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || G.fx.stop()
        }, G.fx.timer = function (e) {
            e() && G.timers.push(e) && !Qn && (Qn = setInterval(G.fx.tick, G.fx.interval))
        }, G.fx.interval = 13, G.fx.stop = function () {
            clearInterval(Qn), Qn = null
        }, G.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, G.fx.step = {}, G.expr && G.expr.filters && (G.expr.filters.animated = function (e) {
            return G.grep(G.timers, function (t) {
                return e === t.elem
            }).length
        });
        var ti = /^(?:body|html)$/i;
        G.fn.offset = function (e) {
            if (arguments.length) return e === t ? this : this.each(function (t) {
                G.offset.setOffset(this, e, t)
            });
            var n, i, r, o, a, s, u, l = {
                    top: 0,
                    left: 0
                },
                c = this[0],
                f = c && c.ownerDocument;
            if (f) return (i = f.body) === c ? G.offset.bodyOffset(c) : (n = f.documentElement, G.contains(n, c) ? ("undefined" != typeof c.getBoundingClientRect && (l = c.getBoundingClientRect()), r = q(f), o = n.clientTop || i.clientTop || 0, a = n.clientLeft || i.clientLeft || 0, s = r.pageYOffset || n.scrollTop, u = r.pageXOffset || n.scrollLeft, {
                top: l.top + s - o,
                left: l.left + u - a
            }) : l)
        }, G.offset = {
            bodyOffset: function (e) {
                var t = e.offsetTop,
                    n = e.offsetLeft;
                return G.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(G.css(e, "marginTop")) || 0, n += parseFloat(G.css(e, "marginLeft")) || 0), {
                    top: t,
                    left: n
                }
            },
            setOffset: function (e, t, n) {
                var i = G.css(e, "position");
                "static" === i && (e.style.position = "relative");
                var r, o, a = G(e),
                    s = a.offset(),
                    u = G.css(e, "top"),
                    l = G.css(e, "left"),
                    c = ("absolute" === i || "fixed" === i) && G.inArray("auto", [u, l]) > -1,
                    f = {},
                    d = {};
                c ? (d = a.position(), r = d.top, o = d.left) : (r = parseFloat(u) || 0, o = parseFloat(l) || 0), G.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + r), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : a.css(f)
            }
        }, G.fn.extend({
            position: function () {
                if (this[0]) {
                    var e = this[0],
                        t = this.offsetParent(),
                        n = this.offset(),
                        i = ti.test(t[0].nodeName) ? {
                            top: 0,
                            left: 0
                        } : t.offset();
                    return n.top -= parseFloat(G.css(e, "marginTop")) || 0, n.left -= parseFloat(G.css(e, "marginLeft")) || 0, i.top += parseFloat(G.css(t[0], "borderTopWidth")) || 0, i.left += parseFloat(G.css(t[0], "borderLeftWidth")) || 0, {
                        top: n.top - i.top,
                        left: n.left - i.left
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent || B.body; e && !ti.test(e.nodeName) && "static" === G.css(e, "position");) e = e.offsetParent;
                    return e || B.body
                })
            }
        }), G.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (e, n) {
            var i = /Y/.test(n);
            G.fn[e] = function (r) {
                return G.access(this, function (e, r, o) {
                    var a = q(e);
                    return o === t ? a ? n in a ? a[n] : a.document.documentElement[r] : e[r] : (a ? a.scrollTo(i ? G(a).scrollLeft() : o, i ? o : G(a).scrollTop()) : e[r] = o, void 0)
                }, e, r, arguments.length, null)
            }
        }), G.each({
            Height: "height",
            Width: "width"
        }, function (e, n) {
            G.each({
                padding: "inner" + e,
                content: n,
                "": "outer" + e
            }, function (i, r) {
                G.fn[r] = function (r, o) {
                    var a = arguments.length && (i || "boolean" != typeof r),
                        s = i || (r === !0 || o === !0 ? "margin" : "border");
                    return G.access(this, function (n, i, r) {
                        var o;
                        return G.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : r === t ? G.css(n, i, r, s) : G.style(n, i, r, s)
                    }, n, a ? r : t, a, null)
                }
            })
        }), e.jQuery = e.$ = G, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
            return G
        })
    }(window),
    function () {
        var e = this,
            t = e._,
            n = {},
            i = Array.prototype,
            r = Object.prototype,
            o = Function.prototype,
            a = i.push,
            s = i.slice,
            u = i.concat,
            l = r.toString,
            c = r.hasOwnProperty,
            f = i.forEach,
            d = i.map,
            p = i.reduce,
            h = i.reduceRight,
            m = i.filter,
            g = i.every,
            v = i.some,
            y = i.indexOf,
            $ = i.lastIndexOf,
            b = Array.isArray,
            x = Object.keys,
            w = o.bind,
            C = function (e) {
                return e instanceof C ? e : this instanceof C ? (this._wrapped = e, void 0) : new C(e)
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = C), exports._ = C) : e._ = C, C.VERSION = "1.4.3";
        var k = C.each = C.forEach = function (e, t, i) {
            if (null != e)
                if (f && e.forEach === f) e.forEach(t, i);
                else if (e.length === +e.length) {
                for (var r = 0, o = e.length; o > r; r++)
                    if (t.call(i, e[r], r, e) === n) return
            } else
                for (var a in e)
                    if (C.has(e, a) && t.call(i, e[a], a, e) === n) return
        };
        C.map = C.collect = function (e, t, n) {
            var i = [];
            return null == e ? i : d && e.map === d ? e.map(t, n) : (k(e, function (e, r, o) {
                i[i.length] = t.call(n, e, r, o)
            }), i)
        };
        var T = "Reduce of empty array with no initial value";
        C.reduce = C.foldl = C.inject = function (e, t, n, i) {
            var r = arguments.length > 2;
            if (null == e && (e = []), p && e.reduce === p) return i && (t = C.bind(t, i)), r ? e.reduce(t, n) : e.reduce(t);
            if (k(e, function (e, o, a) {
                r ? n = t.call(i, n, e, o, a) : (n = e, r = !0)
            }), !r) throw new TypeError(T);
            return n
        }, C.reduceRight = C.foldr = function (e, t, n, i) {
            var r = arguments.length > 2;
            if (null == e && (e = []), h && e.reduceRight === h) return i && (t = C.bind(t, i)), r ? e.reduceRight(t, n) : e.reduceRight(t);
            var o = e.length;
            if (o !== +o) {
                var a = C.keys(e);
                o = a.length
            }
            if (k(e, function (s, u, l) {
                u = a ? a[--o] : --o, r ? n = t.call(i, n, e[u], u, l) : (n = e[u], r = !0)
            }), !r) throw new TypeError(T);
            return n
        }, C.find = C.detect = function (e, t, n) {
            var i;
            return S(e, function (e, r, o) {
                return t.call(n, e, r, o) ? (i = e, !0) : void 0
            }), i
        }, C.filter = C.select = function (e, t, n) {
            var i = [];
            return null == e ? i : m && e.filter === m ? e.filter(t, n) : (k(e, function (e, r, o) {
                t.call(n, e, r, o) && (i[i.length] = e)
            }), i)
        }, C.reject = function (e, t, n) {
            return C.filter(e, function (e, i, r) {
                return !t.call(n, e, i, r)
            }, n)
        }, C.every = C.all = function (e, t, i) {
            t || (t = C.identity);
            var r = !0;
            return null == e ? r : g && e.every === g ? e.every(t, i) : (k(e, function (e, o, a) {
                return (r = r && t.call(i, e, o, a)) ? void 0 : n
            }), !!r)
        };
        var S = C.some = C.any = function (e, t, i) {
            t || (t = C.identity);
            var r = !1;
            return null == e ? r : v && e.some === v ? e.some(t, i) : (k(e, function (e, o, a) {
                return r || (r = t.call(i, e, o, a)) ? n : void 0
            }), !!r)
        };
        C.contains = C.include = function (e, t) {
            return null == e ? !1 : y && e.indexOf === y ? -1 != e.indexOf(t) : S(e, function (e) {
                return e === t
            })
        }, C.invoke = function (e, t) {
            var n = s.call(arguments, 2);
            return C.map(e, function (e) {
                return (C.isFunction(t) ? t : e[t]).apply(e, n)
            })
        }, C.pluck = function (e, t) {
            return C.map(e, function (e) {
                return e[t]
            })
        }, C.where = function (e, t) {
            return C.isEmpty(t) ? [] : C.filter(e, function (e) {
                for (var n in t)
                    if (t[n] !== e[n]) return !1;
                return !0
            })
        }, C.max = function (e, t, n) {
            if (!t && C.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
            if (!t && C.isEmpty(e)) return -1 / 0;
            var i = {
                computed: -1 / 0,
                value: -1 / 0
            };
            return k(e, function (e, r, o) {
                var a = t ? t.call(n, e, r, o) : e;
                a >= i.computed && (i = {
                    value: e,
                    computed: a
                })
            }), i.value
        }, C.min = function (e, t, n) {
            if (!t && C.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
            if (!t && C.isEmpty(e)) return 1 / 0;
            var i = {
                computed: 1 / 0,
                value: 1 / 0
            };
            return k(e, function (e, r, o) {
                var a = t ? t.call(n, e, r, o) : e;
                a < i.computed && (i = {
                    value: e,
                    computed: a
                })
            }), i.value
        }, C.shuffle = function (e) {
            var t, n = 0,
                i = [];
            return k(e, function (e) {
                t = C.random(n++), i[n - 1] = i[t], i[t] = e
            }), i
        };
        var E = function (e) {
            return C.isFunction(e) ? e : function (t) {
                return t[e]
            }
        };
        C.sortBy = function (e, t, n) {
            var i = E(t);
            return C.pluck(C.map(e, function (e, t, r) {
                return {
                    value: e,
                    index: t,
                    criteria: i.call(n, e, t, r)
                }
            }).sort(function (e, t) {
                var n = e.criteria,
                    i = t.criteria;
                if (n !== i) {
                    if (n > i || void 0 === n) return 1;
                    if (i > n || void 0 === i) return -1
                }
                return e.index < t.index ? -1 : 1
            }), "value")
        };
        var j = function (e, t, n, i) {
            var r = {},
                o = E(t || C.identity);
            return k(e, function (t, a) {
                var s = o.call(n, t, a, e);
                i(r, s, t)
            }), r
        };
        C.groupBy = function (e, t, n) {
            return j(e, t, n, function (e, t, n) {
                (C.has(e, t) ? e[t] : e[t] = []).push(n)
            })
        }, C.countBy = function (e, t, n) {
            return j(e, t, n, function (e, t) {
                C.has(e, t) || (e[t] = 0), e[t]++
            })
        }, C.sortedIndex = function (e, t, n, i) {
            n = null == n ? C.identity : E(n);
            for (var r = n.call(i, t), o = 0, a = e.length; a > o;) {
                var s = o + a >>> 1;
                n.call(i, e[s]) < r ? o = s + 1 : a = s
            }
            return o
        }, C.toArray = function (e) {
            return e ? C.isArray(e) ? s.call(e) : e.length === +e.length ? C.map(e, C.identity) : C.values(e) : []
        }, C.size = function (e) {
            return null == e ? 0 : e.length === +e.length ? e.length : C.keys(e).length
        }, C.first = C.head = C.take = function (e, t, n) {
            return null == e ? void 0 : null == t || n ? e[0] : s.call(e, 0, t)
        }, C.initial = function (e, t, n) {
            return s.call(e, 0, e.length - (null == t || n ? 1 : t))
        }, C.last = function (e, t, n) {
            return null == e ? void 0 : null == t || n ? e[e.length - 1] : s.call(e, Math.max(e.length - t, 0))
        }, C.rest = C.tail = C.drop = function (e, t, n) {
            return s.call(e, null == t || n ? 1 : t)
        }, C.compact = function (e) {
            return C.filter(e, C.identity)
        };
        var A = function (e, t, n) {
            return k(e, function (e) {
                C.isArray(e) ? t ? a.apply(n, e) : A(e, t, n) : n.push(e)
            }), n
        };
        C.flatten = function (e, t) {
            return A(e, t, [])
        }, C.without = function (e) {
            return C.difference(e, s.call(arguments, 1))
        }, C.uniq = C.unique = function (e, t, n, i) {
            C.isFunction(t) && (i = n, n = t, t = !1);
            var r = n ? C.map(e, n, i) : e,
                o = [],
                a = [];
            return k(r, function (n, i) {
                (t ? i && a[a.length - 1] === n : C.contains(a, n)) || (a.push(n), o.push(e[i]))
            }), o
        }, C.union = function () {
            return C.uniq(u.apply(i, arguments))
        }, C.intersection = function (e) {
            var t = s.call(arguments, 1);
            return C.filter(C.uniq(e), function (e) {
                return C.every(t, function (t) {
                    return C.indexOf(t, e) >= 0
                })
            })
        }, C.difference = function (e) {
            var t = u.apply(i, s.call(arguments, 1));
            return C.filter(e, function (e) {
                return !C.contains(t, e)
            })
        }, C.zip = function () {
            for (var e = s.call(arguments), t = C.max(C.pluck(e, "length")), n = new Array(t), i = 0; t > i; i++) n[i] = C.pluck(e, "" + i);
            return n
        }, C.object = function (e, t) {
            if (null == e) return {};
            for (var n = {}, i = 0, r = e.length; r > i; i++) t ? n[e[i]] = t[i] : n[e[i][0]] = e[i][1];
            return n
        }, C.indexOf = function (e, t, n) {
            if (null == e) return -1;
            var i = 0,
                r = e.length;
            if (n) {
                if ("number" != typeof n) return i = C.sortedIndex(e, t), e[i] === t ? i : -1;
                i = 0 > n ? Math.max(0, r + n) : n
            }
            if (y && e.indexOf === y) return e.indexOf(t, n);
            for (; r > i; i++)
                if (e[i] === t) return i;
            return -1
        }, C.lastIndexOf = function (e, t, n) {
            if (null == e) return -1;
            var i = null != n;
            if ($ && e.lastIndexOf === $) return i ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
            for (var r = i ? n : e.length; r--;)
                if (e[r] === t) return r;
            return -1
        }, C.range = function (e, t, n) {
            arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
            for (var i = Math.max(Math.ceil((t - e) / n), 0), r = 0, o = new Array(i); i > r;) o[r++] = e, e += n;
            return o
        };
        var N = function () {};
        C.bind = function (e, t) {
            var n, i;
            if (e.bind === w && w) return w.apply(e, s.call(arguments, 1));
            if (!C.isFunction(e)) throw new TypeError;
            return n = s.call(arguments, 2), i = function () {
                if (!(this instanceof i)) return e.apply(t, n.concat(s.call(arguments)));
                N.prototype = e.prototype;
                var r = new N;
                N.prototype = null;
                var o = e.apply(r, n.concat(s.call(arguments)));
                return Object(o) === o ? o : r
            }
        }, C.bindAll = function (e) {
            var t = s.call(arguments, 1);
            return 0 == t.length && (t = C.functions(e)), k(t, function (t) {
                e[t] = C.bind(e[t], e)
            }), e
        }, C.memoize = function (e, t) {
            var n = {};
            return t || (t = C.identity),
                function () {
                    var i = t.apply(this, arguments);
                    return C.has(n, i) ? n[i] : n[i] = e.apply(this, arguments)
                }
        }, C.delay = function (e, t) {
            var n = s.call(arguments, 2);
            return setTimeout(function () {
                return e.apply(null, n)
            }, t)
        }, C.defer = function (e) {
            return C.delay.apply(C, [e, 1].concat(s.call(arguments, 1)))
        }, C.throttle = function (e, t) {
            var n, i, r, o, a = 0,
                s = function () {
                    a = new Date, r = null, o = e.apply(n, i)
                };
            return function () {
                var u = new Date,
                    l = t - (u - a);
                return n = this, i = arguments, 0 >= l ? (clearTimeout(r), r = null, a = u, o = e.apply(n, i)) : r || (r = setTimeout(s, l)), o
            }
        }, C.debounce = function (e, t, n) {
            var i, r;
            return function () {
                var o = this,
                    a = arguments,
                    s = function () {
                        i = null, n || (r = e.apply(o, a))
                    },
                    u = n && !i;
                return clearTimeout(i), i = setTimeout(s, t), u && (r = e.apply(o, a)), r
            }
        }, C.once = function (e) {
            var t, n = !1;
            return function () {
                return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t)
            }
        }, C.wrap = function (e, t) {
            return function () {
                var n = [e];
                return a.apply(n, arguments), t.apply(this, n)
            }
        }, C.compose = function () {
            var e = arguments;
            return function () {
                for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
                return t[0]
            }
        }, C.after = function (e, t) {
            return 0 >= e ? t() : function () {
                return --e < 1 ? t.apply(this, arguments) : void 0
            }
        }, C.keys = x || function (e) {
            if (e !== Object(e)) throw new TypeError("Invalid object");
            var t = [];
            for (var n in e) C.has(e, n) && (t[t.length] = n);
            return t
        }, C.values = function (e) {
            var t = [];
            for (var n in e) C.has(e, n) && t.push(e[n]);
            return t
        }, C.pairs = function (e) {
            var t = [];
            for (var n in e) C.has(e, n) && t.push([n, e[n]]);
            return t
        }, C.invert = function (e) {
            var t = {};
            for (var n in e) C.has(e, n) && (t[e[n]] = n);
            return t
        }, C.functions = C.methods = function (e) {
            var t = [];
            for (var n in e) C.isFunction(e[n]) && t.push(n);
            return t.sort()
        }, C.extend = function (e) {
            return k(s.call(arguments, 1), function (t) {
                if (t)
                    for (var n in t) e[n] = t[n]
            }), e
        }, C.pick = function (e) {
            var t = {},
                n = u.apply(i, s.call(arguments, 1));
            return k(n, function (n) {
                n in e && (t[n] = e[n])
            }), t
        }, C.omit = function (e) {
            var t = {},
                n = u.apply(i, s.call(arguments, 1));
            for (var r in e) C.contains(n, r) || (t[r] = e[r]);
            return t
        }, C.defaults = function (e) {
            return k(s.call(arguments, 1), function (t) {
                if (t)
                    for (var n in t) null == e[n] && (e[n] = t[n])
            }), e
        }, C.clone = function (e) {
            return C.isObject(e) ? C.isArray(e) ? e.slice() : C.extend({}, e) : e
        }, C.tap = function (e, t) {
            return t(e), e
        };
        var M = function (e, t, n, i) {
            if (e === t) return 0 !== e || 1 / e == 1 / t;
            if (null == e || null == t) return e === t;
            e instanceof C && (e = e._wrapped), t instanceof C && (t = t._wrapped);
            var r = l.call(e);
            if (r != l.call(t)) return !1;
            switch (r) {
            case "[object String]":
                return e == String(t);
            case "[object Number]":
                return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +e == +t;
            case "[object RegExp]":
                return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
            }
            if ("object" != typeof e || "object" != typeof t) return !1;
            for (var o = n.length; o--;)
                if (n[o] == e) return i[o] == t;
            n.push(e), i.push(t);
            var a = 0,
                s = !0;
            if ("[object Array]" == r) {
                if (a = e.length, s = a == t.length)
                    for (; a-- && (s = M(e[a], t[a], n, i)););
            } else {
                var u = e.constructor,
                    c = t.constructor;
                if (u !== c && !(C.isFunction(u) && u instanceof u && C.isFunction(c) && c instanceof c)) return !1;
                for (var f in e)
                    if (C.has(e, f) && (a++, !(s = C.has(t, f) && M(e[f], t[f], n, i)))) break;
                if (s) {
                    for (f in t)
                        if (C.has(t, f) && !a--) break;
                    s = !a
                }
            }
            return n.pop(), i.pop(), s
        };
        C.isEqual = function (e, t) {
            return M(e, t, [], [])
        }, C.isEmpty = function (e) {
            if (null == e) return !0;
            if (C.isArray(e) || C.isString(e)) return 0 === e.length;
            for (var t in e)
                if (C.has(e, t)) return !1;
            return !0
        }, C.isElement = function (e) {
            return !(!e || 1 !== e.nodeType)
        }, C.isArray = b || function (e) {
            return "[object Array]" == l.call(e)
        }, C.isObject = function (e) {
            return e === Object(e)
        }, k(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (e) {
            C["is" + e] = function (t) {
                return l.call(t) == "[object " + e + "]"
            }
        }), C.isArguments(arguments) || (C.isArguments = function (e) {
            return !(!e || !C.has(e, "callee"))
        }), "function" != typeof / . / && (C.isFunction = function (e) {
            return "function" == typeof e
        }), C.isFinite = function (e) {
            return isFinite(e) && !isNaN(parseFloat(e))
        }, C.isNaN = function (e) {
            return C.isNumber(e) && e != +e
        }, C.isBoolean = function (e) {
            return e === !0 || e === !1 || "[object Boolean]" == l.call(e)
        }, C.isNull = function (e) {
            return null === e
        }, C.isUndefined = function (e) {
            return void 0 === e
        }, C.has = function (e, t) {
            return c.call(e, t)
        }, C.noConflict = function () {
            return e._ = t, this
        }, C.identity = function (e) {
            return e
        }, C.times = function (e, t, n) {
            for (var i = Array(e), r = 0; e > r; r++) i[r] = t.call(n, r);
            return i
        }, C.random = function (e, t) {
            return null == t && (t = e, e = 0), e + (0 | Math.random() * (t - e + 1))
        };
        var _ = {
            escape: {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "/": "&#x2F;"
            }
        };
        _.unescape = C.invert(_.escape);
        var O = {
            escape: new RegExp("[" + C.keys(_.escape).join("") + "]", "g"),
            unescape: new RegExp("(" + C.keys(_.unescape).join("|") + ")", "g")
        };
        C.each(["escape", "unescape"], function (e) {
            C[e] = function (t) {
                return null == t ? "" : ("" + t).replace(O[e], function (t) {
                    return _[e][t]
                })
            }
        }), C.result = function (e, t) {
            if (null == e) return null;
            var n = e[t];
            return C.isFunction(n) ? n.call(e) : n
        }, C.mixin = function (e) {
            k(C.functions(e), function (t) {
                var n = C[t] = e[t];
                C.prototype[t] = function () {
                    var e = [this._wrapped];
                    return a.apply(e, arguments), q.call(this, n.apply(C, e))
                }
            })
        };
        var L = 0;
        C.uniqueId = function (e) {
            var t = "" + ++L;
            return e ? e + t : t
        }, C.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var D = /(.)^/,
            H = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "	": "t",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            F = /\\|'|\r|\n|\t|\u2028|\u2029/g;
        C.template = function (e, t, n) {
            n = C.defaults({}, n, C.templateSettings);
            var i = new RegExp([(n.escape || D).source, (n.interpolate || D).source, (n.evaluate || D).source].join("|") + "|$", "g"),
                r = 0,
                o = "__p+='";
            e.replace(i, function (t, n, i, a, s) {
                return o += e.slice(r, s).replace(F, function (e) {
                    return "\\" + H[e]
                }), n && (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), i && (o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"), a && (o += "';\n" + a + "\n__p+='"), r = s + t.length, t
            }), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
            try {
                var a = new Function(n.variable || "obj", "_", o)
            } catch (s) {
                throw s.source = o, s
            }
            if (t) return a(t, C);
            var u = function (e) {
                return a.call(this, e, C)
            };
            return u.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", u
        }, C.chain = function (e) {
            return C(e).chain()
        };
        var q = function (e) {
            return this._chain ? C(e).chain() : e
        };
        C.mixin(C), k(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
            var t = i[e];
            C.prototype[e] = function () {
                var n = this._wrapped;
                return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], q.call(this, n)
            }
        }), k(["concat", "join", "slice"], function (e) {
            var t = i[e];
            C.prototype[e] = function () {
                return q.call(this, t.apply(this._wrapped, arguments))
            }
        }), C.extend(C.prototype, {
            chain: function () {
                return this._chain = !0, this
            },
            value: function () {
                return this._wrapped
            }
        })
    }.call(this),
    function (e, t, n) {
        "use strict";

        function i(e) {
            return String.fromCharCode(e)
        }

        function r(e) {
            return e && "number" == typeof e.length ? "function" != typeof e.hasOwnProperty && "function" != typeof e.constructor ? !0 : e instanceof ot || Yn && e instanceof Yn || "[object Object]" !== ei.call(e) || "function" == typeof e.callee : !1
        }

        function o(e, t, n) {
            var i;
            if (e)
                if (C(e))
                    for (i in e) "prototype" != i && "length" != i && "name" != i && e.hasOwnProperty(i) && t.call(n, e[i], i);
                else if (e.forEach && e.forEach !== o) e.forEach(t, n);
            else if (r(e))
                for (i = 0; i < e.length; i++) t.call(n, e[i], i);
            else
                for (i in e) e.hasOwnProperty(i) && t.call(n, e[i], i);
            return e
        }

        function a(e) {
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && t.push(n);
            return t.sort()
        }

        function s(e, t, n) {
            for (var i = a(e), r = 0; r < i.length; r++) t.call(n, e[i[r]], i[r]);
            return i
        }

        function u(e) {
            return function (t, n) {
                e(n, t)
            }
        }

        function l() {
            for (var e, t = ni.length; t;) {
                if (t--, e = ni[t].charCodeAt(0), 57 == e) return ni[t] = "A", ni.join("");
                if (90 != e) return ni[t] = String.fromCharCode(e + 1), ni.join("");
                ni[t] = "0"
            }
            return ni.unshift("0"), ni.join("")
        }

        function c(e) {
            return o(arguments, function (t) {
                t !== e && o(t, function (t, n) {
                    e[n] = t
                })
            }), e
        }

        function f(e) {
            return parseInt(e, 10)
        }

        function d(e, t) {
            return c(new(c(function () {}, {
                prototype: e
            })), t)
        }

        function p() {}

        function h(e) {
            return e
        }

        function m(e) {
            return function () {
                return e
            }
        }

        function g(e) {
            return "undefined" == typeof e
        }

        function v(e) {
            return "undefined" != typeof e
        }

        function y(e) {
            return null != e && "object" == typeof e
        }

        function $(e) {
            return "string" == typeof e
        }

        function b(e) {
            return "number" == typeof e
        }

        function x(e) {
            return "[object Date]" == ei.apply(e)
        }

        function w(e) {
            return "[object Array]" == ei.apply(e)
        }

        function C(e) {
            return "function" == typeof e
        }

        function k(e) {
            return e && e.document && e.location && e.alert && e.setInterval
        }

        function T(e) {
            return e && e.$evalAsync && e.$watch
        }

        function S(e) {
            return "[object File]" === ei.apply(e)
        }

        function E(e) {
            return $(e) ? e.replace(/^\s*/, "").replace(/\s*$/, "") : e
        }

        function j(e) {
            return e && (e.nodeName || e.bind && e.find)
        }

        function A(e, t, n) {
            var i = [];
            return o(e, function (e, r, o) {
                i.push(t.call(n, e, r, o))
            }), i
        }

        function N(e, t) {
            return -1 != M(e, t)
        }

        function M(e, t) {
            if (e.indexOf) return e.indexOf(t);
            for (var n = 0; n < e.length; n++)
                if (t === e[n]) return n;
            return -1
        }

        function _(e, t) {
            var n = M(e, t);
            return n >= 0 && e.splice(n, 1), t
        }

        function O(e, t) {
            if (k(e) || T(e)) throw Error("Can't copy Window or Scope");
            if (t) {
                if (e === t) throw Error("Can't copy equivalent objects or arrays");
                if (w(e)) {
                    t.length = 0;
                    for (var n = 0; n < e.length; n++) t.push(O(e[n]))
                } else {
                    o(t, function (e, n) {
                        delete t[n]
                    });
                    for (var i in e) t[i] = O(e[i])
                }
            } else t = e, e && (w(e) ? t = O(e, []) : x(e) ? t = new Date(e.getTime()) : y(e) && (t = O(e, {})));
            return t
        }

        function L(e, t) {
            t = t || {};
            for (var n in e) e.hasOwnProperty(n) && "$$" !== n.substr(0, 2) && (t[n] = e[n]);
            return t
        }

        function D(e, t) {
            if (e === t) return !0;
            if (null === e || null === t) return !1;
            if (e !== e && t !== t) return !0;
            var i, r, o, a = typeof e,
                s = typeof t;
            if (a == s && "object" == a) {
                if (!w(e)) {
                    if (x(e)) return x(t) && e.getTime() == t.getTime();
                    if (T(e) || T(t) || k(e) || k(t)) return !1;
                    o = {};
                    for (r in e)
                        if ("$" !== r.charAt(0) && !C(e[r])) {
                            if (!D(e[r], t[r])) return !1;
                            o[r] = !0
                        }
                    for (r in t)
                        if (!o[r] && "$" !== r.charAt(0) && t[r] !== n && !C(t[r])) return !1;
                    return !0
                }
                if ((i = e.length) == t.length) {
                    for (r = 0; i > r; r++)
                        if (!D(e[r], t[r])) return !1;
                    return !0
                }
            }
            return !1
        }

        function H(e, t, n) {
            return e.concat(Gn.call(t, n))
        }

        function F(e, t) {
            return Gn.call(e, t || 0)
        }

        function q(e, t) {
            var n = arguments.length > 2 ? F(arguments, 2) : [];
            return !C(t) || t instanceof RegExp ? t : n.length ? function () {
                return arguments.length ? t.apply(e, n.concat(Gn.call(arguments, 0))) : t.apply(e, n)
            } : function () {
                return arguments.length ? t.apply(e, arguments) : t.call(e)
            }
        }

        function P(e, i) {
            var r = i;
            return /^\$+/.test(e) ? r = n : k(i) ? r = "$WINDOW" : i && t === i ? r = "$DOCUMENT" : T(i) && (r = "$SCOPE"), r
        }

        function R(e, t) {
            return JSON.stringify(e, P, t ? "  " : null)
        }

        function B(e) {
            return $(e) ? JSON.parse(e) : e
        }

        function I(e) {
            if (e && 0 !== e.length) {
                var t = zn("" + e);
                e = !("f" == t || "0" == t || "false" == t || "no" == t || "n" == t || "[]" == t)
            } else e = !1;
            return e
        }

        function z(e) {
            e = Vn(e).clone();
            try {
                e.html("")
            } catch (t) {}
            var n = 3,
                i = Vn("<div>").append(e).html();
            try {
                return e[0].nodeType === n ? zn(i) : i.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (e, t) {
                    return "<" + zn(t)
                })
            } catch (t) {
                return zn(i)
            }
        }

        function W(e) {
            var t, n, i = {};
            return o((e || "").split("&"), function (e) {
                e && (t = e.split("="), n = decodeURIComponent(t[0]), i[n] = v(t[1]) ? decodeURIComponent(t[1]) : !0)
            }), i
        }

        function U(e) {
            var t = [];
            return o(e, function (e, n) {
                t.push(V(n, !0) + (e === !0 ? "" : "=" + V(e, !0)))
            }), t.length ? t.join("&") : ""
        }

        function X(e) {
            return V(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
        }

        function V(e, t) {
            return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(t ? null : /%20/g, "+")
        }

        function Y(e, n) {
            function i(e) {
                e && s.push(e)
            }
            var r, a, s = [e],
                u = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"],
                l = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
            o(u, function (n) {
                u[n] = !0, i(t.getElementById(n)), n = n.replace(":", "\\:"), e.querySelectorAll && (o(e.querySelectorAll("." + n), i), o(e.querySelectorAll("." + n + "\\:"), i), o(e.querySelectorAll("[" + n + "]"), i))
            }), o(s, function (e) {
                if (!r) {
                    var t = " " + e.className + " ",
                        n = l.exec(t);
                    n ? (r = e, a = (n[2] || "").replace(/\s+/g, ",")) : o(e.attributes, function (t) {
                        !r && u[t.name] && (r = e, a = t.value)
                    })
                }
            }), r && n(r, a ? [a] : [])
        }

        function Q(e, t) {
            e = Vn(e), t = t || [], t.unshift(["$provide",
                function (t) {
                    t.value("$rootElement", e)
                }
            ]), t.unshift("ng");
            var n = kt(t);
            return n.invoke(["$rootScope", "$rootElement", "$compile", "$injector",
                function (e, t, n, i) {
                    e.$apply(function () {
                        t.data("$injector", i), n(t)(e)
                    })
                }
            ]), n
        }

        function J(e, t) {
            return t = t || "_", e.replace(ii, function (e, n) {
                return (n ? t : "") + e.toLowerCase()
            })
        }

        function K() {
            Yn = e.jQuery, Yn ? (Vn = Yn, c(Yn.fn, {
                scope: di.scope,
                controller: di.controller,
                injector: di.injector,
                inheritedData: di.inheritedData
            }), rt("remove", !0), rt("empty"), rt("html")) : Vn = ot, ti.element = Vn
        }

        function G(e, t, n) {
            if (!e) throw new Error("Argument '" + (t || "?") + "' is " + (n || "required"));
            return e
        }

        function Z(e, t, n) {
            return n && w(e) && (e = e[e.length - 1]), G(C(e), t, "not a function, got " + (e && "object" == typeof e ? e.constructor.name || "Object" : typeof e)), e
        }

        function et(e) {
            function t(e, t, n) {
                return e[t] || (e[t] = n())
            }
            return t(t(e, "angular", Object), "module", function () {
                var e = {};
                return function (n, i, r) {
                    return i && e.hasOwnProperty(n) && (e[n] = null), t(e, n, function () {
                        function e(e, n, i) {
                            return function () {
                                return t[i || "push"]([e, n, arguments]), s
                            }
                        }
                        if (!i) throw Error("No module: " + n);
                        var t = [],
                            o = [],
                            a = e("$injector", "invoke"),
                            s = {
                                _invokeQueue: t,
                                _runBlocks: o,
                                requires: i,
                                name: n,
                                provider: e("$provide", "provider"),
                                factory: e("$provide", "factory"),
                                service: e("$provide", "service"),
                                value: e("$provide", "value"),
                                constant: e("$provide", "constant", "unshift"),
                                filter: e("$filterProvider", "register"),
                                controller: e("$controllerProvider", "register"),
                                directive: e("$compileProvider", "directive"),
                                config: a,
                                run: function (e) {
                                    return o.push(e), this
                                }
                            };
                        return r && a(r), s
                    })
                }
            })
        }

        function tt(t) {
            c(t, {
                bootstrap: Q,
                copy: O,
                extend: c,
                equals: D,
                element: Vn,
                forEach: o,
                injector: kt,
                noop: p,
                bind: q,
                toJson: R,
                fromJson: B,
                identity: h,
                isUndefined: g,
                isDefined: v,
                isString: $,
                isFunction: C,
                isObject: y,
                isNumber: b,
                isElement: j,
                isArray: w,
                version: ri,
                isDate: x,
                lowercase: zn,
                uppercase: Wn,
                callbacks: {
                    counter: 0
                }
            }), Qn = et(e);
            try {
                Qn("ngLocale")
            } catch (n) {
                Qn("ngLocale", []).provider("$locale", vn)
            }
            Qn("ng", ["ngLocale"], ["$provide",
                function (e) {
                    e.provider("$compile", Nt).directive({
                        a: Di,
                        input: Ui,
                        textarea: Ui,
                        form: Pi,
                        script: Er,
                        select: Ar,
                        style: Mr,
                        option: Nr,
                        ngBind: ir,
                        ngBindHtmlUnsafe: or,
                        ngBindTemplate: rr,
                        ngClass: ar,
                        ngClassEven: ur,
                        ngClassOdd: sr,
                        ngCsp: fr,
                        ngCloak: lr,
                        ngController: cr,
                        ngForm: Ri,
                        ngHide: br,
                        ngInclude: hr,
                        ngInit: mr,
                        ngNonBindable: gr,
                        ngPluralize: vr,
                        ngRepeat: yr,
                        ngShow: $r,
                        ngSubmit: pr,
                        ngStyle: xr,
                        ngSwitch: wr,
                        ngSwitchWhen: Cr,
                        ngSwitchDefault: kr,
                        ngOptions: jr,
                        ngView: Sr,
                        ngTransclude: Tr,
                        ngModel: Ki,
                        ngList: er,
                        ngChange: Gi,
                        required: Zi,
                        ngRequired: Zi,
                        ngValue: nr
                    }).directive(Hi).directive(dr), e.provider({
                        $anchorScroll: Tt,
                        $browser: Et,
                        $cacheFactory: jt,
                        $controller: _t,
                        $document: Ot,
                        $exceptionHandler: Lt,
                        $filter: $n,
                        $interpolate: Dt,
                        $http: hn,
                        $httpBackend: mn,
                        $location: Vt,
                        $log: Yt,
                        $parse: tn,
                        $route: on,
                        $routeParams: an,
                        $rootScope: sn,
                        $q: nn,
                        $sniffer: un,
                        $templateCache: At,
                        $timeout: yn,
                        $window: ln
                    })
                }
            ])
        }

        function nt() {
            return ++si
        }

        function it(e) {
            return e.replace(ci, function (e, t, n, i) {
                return i ? n.toUpperCase() : n
            }).replace(fi, "Moz$1")
        }

        function rt(e, t) {
            function n() {
                for (var e, n, r, o, a, s, u, l = [this], c = t; l.length;)
                    for (e = l.shift(), n = 0, r = e.length; r > n; n++)
                        for (o = Vn(e[n]), c ? o.triggerHandler("$destroy") : c = !c, a = 0, s = (u = o.children()).length; s > a; a++) l.push(Yn(u[a]));
                return i.apply(this, arguments)
            }
            var i = Yn.fn[e];
            i = i.$original || i, n.$original = i, Yn.fn[e] = n
        }

        function ot(e) {
            if (e instanceof ot) return e;
            if (!(this instanceof ot)) {
                if ($(e) && "<" != e.charAt(0)) throw Error("selectors not implemented");
                return new ot(e)
            }
            if ($(e)) {
                var n = t.createElement("div");
                n.innerHTML = "<div>&#160;</div>" + e, n.removeChild(n.firstChild), mt(this, n.childNodes), this.remove()
            } else mt(this, e)
        }

        function at(e) {
            return e.cloneNode(!0)
        }

        function st(e) {
            lt(e);
            for (var t = 0, n = e.childNodes || []; t < n.length; t++) st(n[t])
        }

        function ut(e, t, n) {
            var i = ct(e, "events"),
                r = ct(e, "handle");
            r && (g(t) ? o(i, function (t, n) {
                li(e, n, t), delete i[n]
            }) : g(n) ? (li(e, t, i[t]), delete i[t]) : _(i[t], n))
        }

        function lt(e) {
            var t = e[ai],
                i = oi[t];
            i && (i.handle && (i.events.$destroy && i.handle({}, "$destroy"), ut(e)), delete oi[t], e[ai] = n)
        }

        function ct(e, t, n) {
            var i = e[ai],
                r = oi[i || -1];
            return v(n) ? (r || (e[ai] = i = nt(), r = oi[i] = {}), r[t] = n, void 0) : r && r[t]
        }

        function ft(e, t, n) {
            var i = ct(e, "data"),
                r = v(n),
                o = !r && v(t),
                a = o && !y(t);
            if (i || a || ct(e, "data", i = {}), r) i[t] = n;
            else {
                if (!o) return i;
                if (a) return i && i[t];
                c(i, t)
            }
        }

        function dt(e, t) {
            return (" " + e.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ") > -1
        }

        function pt(e, t) {
            t && o(t.split(" "), function (t) {
                e.className = E((" " + e.className + " ").replace(/[\n\t]/g, " ").replace(" " + E(t) + " ", " "))
            })
        }

        function ht(e, t) {
            t && o(t.split(" "), function (t) {
                dt(e, t) || (e.className = E(e.className + " " + E(t)))
            })
        }

        function mt(e, t) {
            if (t) {
                t = t.nodeName || !v(t.length) || k(t) ? [t] : t;
                for (var n = 0; n < t.length; n++) e.push(t[n])
            }
        }

        function gt(e, t) {
            return vt(e, "$" + (t || "ngController") + "Controller")
        }

        function vt(e, t, n) {
            for (e = Vn(e), 9 == e[0].nodeType && (e = e.find("html")); e.length;) {
                if (n = e.data(t)) return n;
                e = e.parent()
            }
        }

        function yt(e, t) {
            var n = pi[t.toLowerCase()];
            return n && hi[e.nodeName] && n
        }

        function $t(e, n) {
            var i = function (i, r) {
                if (i.preventDefault || (i.preventDefault = function () {
                    i.returnValue = !1
                }), i.stopPropagation || (i.stopPropagation = function () {
                    i.cancelBubble = !0
                }), i.target || (i.target = i.srcElement || t), g(i.defaultPrevented)) {
                    var a = i.preventDefault;
                    i.preventDefault = function () {
                        i.defaultPrevented = !0, a.call(i)
                    }, i.defaultPrevented = !1
                }
                i.isDefaultPrevented = function () {
                    return i.defaultPrevented
                }, o(n[r || i.type], function (t) {
                    t.call(e, i)
                }), 8 >= Kn ? (i.preventDefault = null, i.stopPropagation = null, i.isDefaultPrevented = null) : (delete i.preventDefault, delete i.stopPropagation, delete i.isDefaultPrevented)
            };
            return i.elem = e, i
        }

        function bt(e) {
            var t, i = typeof e;
            return "object" == i && null !== e ? "function" == typeof (t = e.$$hashKey) ? t = e.$$hashKey() : t === n && (t = e.$$hashKey = l()) : t = e, i + ":" + t
        }

        function xt(e) {
            o(e, this.put, this)
        }

        function wt() {}

        function Ct(e) {
            var t, n, i, r;
            return "function" == typeof e ? (t = e.$inject) || (t = [], n = e.toString().replace(yi, ""), i = n.match(mi), o(i[1].split(gi), function (e) {
                e.replace(vi, function (e, n, i) {
                    t.push(i)
                })
            }), e.$inject = t) : w(e) ? (r = e.length - 1, Z(e[r], "fn"), t = e.slice(0, r)) : Z(e, "fn", !0), t
        }

        function kt(e) {
            function t(e) {
                return function (t, n) {
                    return y(t) ? (o(t, u(e)), void 0) : e(t, n)
                }
            }

            function n(e, t) {
                if ((C(t) || w(t)) && (t = x.instantiate(t)), !t.$get) throw Error("Provider " + e + " must define $get factory method.");
                return b[e + h] = t
            }

            function i(e, t) {
                return n(e, {
                    $get: t
                })
            }

            function r(e, t) {
                return i(e, ["$injector",
                    function (e) {
                        return e.instantiate(t)
                    }
                ])
            }

            function a(e, t) {
                return i(e, m(t))
            }

            function s(e, t) {
                b[e] = t, k[e] = t
            }

            function l(e, t) {
                var n = x.get(e + h),
                    i = n.$get;
                n.$get = function () {
                    var e = T.invoke(i, n);
                    return T.invoke(t, null, {
                        $delegate: e
                    })
                }
            }

            function c(e) {
                var t = [];
                return o(e, function (e) {
                    if (!v.get(e))
                        if (v.put(e, !0), $(e)) {
                            var n = Qn(e);
                            t = t.concat(c(n.requires)).concat(n._runBlocks);
                            try {
                                for (var i = n._invokeQueue, r = 0, o = i.length; o > r; r++) {
                                    var a = i[r],
                                        s = "$injector" == a[0] ? x : x.get(a[0]);
                                    s[a[1]].apply(s, a[2])
                                }
                            } catch (u) {
                                throw u.message && (u.message += " from " + e), u
                            }
                        } else if (C(e)) try {
                        t.push(x.invoke(e))
                    } catch (u) {
                        throw u.message && (u.message += " from " + e), u
                    } else if (w(e)) try {
                        t.push(x.invoke(e))
                    } catch (u) {
                        throw u.message && (u.message += " from " + String(e[e.length - 1])), u
                    } else Z(e, "module")
                }), t
            }

            function f(e, t) {
                function n(n) {
                    if ("string" != typeof n) throw Error("Service name expected");
                    if (e.hasOwnProperty(n)) {
                        if (e[n] === d) throw Error("Circular dependency: " + g.join(" <- "));
                        return e[n]
                    }
                    try {
                        return g.unshift(n), e[n] = d, e[n] = t(n)
                    } finally {
                        g.shift()
                    }
                }

                function i(e, t, i) {
                    var r, o, a, s = [],
                        u = Ct(e);
                    for (o = 0, r = u.length; r > o; o++) a = u[o], s.push(i && i.hasOwnProperty(a) ? i[a] : n(a));
                    switch (e.$inject || (e = e[r]), t ? -1 : s.length) {
                    case 0:
                        return e();
                    case 1:
                        return e(s[0]);
                    case 2:
                        return e(s[0], s[1]);
                    case 3:
                        return e(s[0], s[1], s[2]);
                    case 4:
                        return e(s[0], s[1], s[2], s[3]);
                    case 5:
                        return e(s[0], s[1], s[2], s[3], s[4]);
                    case 6:
                        return e(s[0], s[1], s[2], s[3], s[4], s[5]);
                    case 7:
                        return e(s[0], s[1], s[2], s[3], s[4], s[5], s[6]);
                    case 8:
                        return e(s[0], s[1], s[2], s[3], s[4], s[5], s[6], s[7]);
                    case 9:
                        return e(s[0], s[1], s[2], s[3], s[4], s[5], s[6], s[7], s[8]);
                    case 10:
                        return e(s[0], s[1], s[2], s[3], s[4], s[5], s[6], s[7], s[8], s[9]);
                    default:
                        return e.apply(t, s)
                    }
                }

                function r(e, t) {
                    var n, r, o = function () {};
                    return o.prototype = (w(e) ? e[e.length - 1] : e).prototype, n = new o, r = i(e, n, t), y(r) ? r : n
                }
                return {
                    invoke: i,
                    instantiate: r,
                    get: n,
                    annotate: Ct
                }
            }
            var d = {},
                h = "Provider",
                g = [],
                v = new xt,
                b = {
                    $provide: {
                        provider: t(n),
                        factory: t(i),
                        service: t(r),
                        value: t(a),
                        constant: t(s),
                        decorator: l
                    }
                },
                x = f(b, function () {
                    throw Error("Unknown provider: " + g.join(" <- "))
                }),
                k = {},
                T = k.$injector = f(k, function (e) {
                    var t = x.get(e + h);
                    return T.invoke(t.$get, t)
                });
            return o(c(e), function (e) {
                T.invoke(e || p)
            }), T
        }

        function Tt() {
            var e = !0;
            this.disableAutoScrolling = function () {
                e = !1
            }, this.$get = ["$window", "$location", "$rootScope",
                function (t, n, i) {
                    function r(e) {
                        var t = null;
                        return o(e, function (e) {
                            t || "a" !== zn(e.nodeName) || (t = e)
                        }), t
                    }

                    function a() {
                        var e, i = n.hash();
                        i ? (e = s.getElementById(i)) ? e.scrollIntoView() : (e = r(s.getElementsByName(i))) ? e.scrollIntoView() : "top" === i && t.scrollTo(0, 0) : t.scrollTo(0, 0)
                    }
                    var s = t.document;
                    return e && i.$watch(function () {
                        return n.hash()
                    }, function () {
                        i.$evalAsync(a)
                    }), a
                }
            ]
        }

        function St(e, t, i, r) {
            function a(e) {
                try {
                    e.apply(null, F(arguments, 1))
                } finally {
                    if (y--, 0 === y)
                        for (; b.length;) try {
                            b.pop()()
                        } catch (t) {
                            i.error(t)
                        }
                }
            }

            function s(e, t) {
                ! function n() {
                    o(w, function (e) {
                        e()
                    }), x = t(n, e)
                }()
            }

            function u() {
                C != l.url() && (C = l.url(), o(T, function (e) {
                    e(l.url())
                }))
            }
            var l = this,
                c = t[0],
                f = e.location,
                d = e.history,
                h = e.setTimeout,
                m = e.clearTimeout,
                v = {};
            l.isMock = !1;
            var y = 0,
                b = [];
            l.$$completeOutstandingRequest = a, l.$$incOutstandingRequestCount = function () {
                y++
            }, l.notifyWhenNoOutstandingRequests = function (e) {
                o(w, function (e) {
                    e()
                }), 0 === y ? e() : b.push(e)
            };
            var x, w = [];
            l.addPollFn = function (e) {
                return g(x) && s(100, h), w.push(e), e
            };
            var C = f.href,
                k = t.find("base");
            l.url = function (e, t) {
                if (e) {
                    if (C == e) return;
                    return C = e, r.history ? t ? d.replaceState(null, "", e) : (d.pushState(null, "", e), k.attr("href", k.attr("href"))) : t ? f.replace(e) : f.href = e, l
                }
                return f.href.replace(/%27/g, "'")
            };
            var T = [],
                S = !1;
            l.onUrlChange = function (t) {
                return S || (r.history && Vn(e).bind("popstate", u), r.hashchange ? Vn(e).bind("hashchange", u) : l.addPollFn(u), S = !0), T.push(t), t
            }, l.baseHref = function () {
                var e = k.attr("href");
                return e ? e.replace(/^https?\:\/\/[^\/]*/, "") : ""
            };
            var E = {},
                j = "",
                A = l.baseHref();
            l.cookies = function (e, t) {
                var r, o, a, s, u;
                if (!e) {
                    if (c.cookie !== j)
                        for (j = c.cookie, o = j.split("; "), E = {}, s = 0; s < o.length; s++) a = o[s], u = a.indexOf("="), u > 0 && (E[unescape(a.substring(0, u))] = unescape(a.substring(u + 1)));
                    return E
                }
                t === n ? c.cookie = escape(e) + "=;path=" + A + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : $(t) && (r = (c.cookie = escape(e) + "=" + escape(t) + ";path=" + A).length + 1, r > 4096 && i.warn("Cookie '" + e + "' possibly not set or overflowed because it was too large (" + r + " > 4096 bytes)!"))
            }, l.defer = function (e, t) {
                var n;
                return y++, n = h(function () {
                    delete v[n], a(e)
                }, t || 0), v[n] = !0, n
            }, l.defer.cancel = function (e) {
                return v[e] ? (delete v[e], m(e), a(p), !0) : !1
            }
        }

        function Et() {
            this.$get = ["$window", "$log", "$sniffer", "$document",
                function (e, t, n, i) {
                    return new St(e, i, t, n)
                }
            ]
        }

        function jt() {
            this.$get = function () {
                function e(e, n) {
                    function i(e) {
                        e != f && (d ? d == e && (d = e.n) : d = e, r(e.n, e.p), r(e, f), f = e, f.n = null)
                    }

                    function r(e, t) {
                        e != t && (e && (e.p = t), t && (t.n = e))
                    }
                    if (e in t) throw Error("cacheId " + e + " taken");
                    var o = 0,
                        a = c({}, n, {
                            id: e
                        }),
                        s = {},
                        u = n && n.capacity || Number.MAX_VALUE,
                        l = {},
                        f = null,
                        d = null;
                    return t[e] = {
                        put: function (e, t) {
                            var n = l[e] || (l[e] = {
                                key: e
                            });
                            i(n), g(t) || (e in s || o++, s[e] = t, o > u && this.remove(d.key))
                        },
                        get: function (e) {
                            var t = l[e];
                            if (t) return i(t), s[e]
                        },
                        remove: function (e) {
                            var t = l[e];
                            t && (t == f && (f = t.p), t == d && (d = t.n), r(t.n, t.p), delete l[e], delete s[e], o--)
                        },
                        removeAll: function () {
                            s = {}, o = 0, l = {}, f = d = null
                        },
                        destroy: function () {
                            s = null, a = null, l = null, delete t[e]
                        },
                        info: function () {
                            return c({}, a, {
                                size: o
                            })
                        }
                    }
                }
                var t = {};
                return e.info = function () {
                    var e = {};
                    return o(t, function (t, n) {
                        e[n] = t.info()
                    }), e
                }, e.get = function (e) {
                    return t[e]
                }, e
            }
        }

        function At() {
            this.$get = ["$cacheFactory",
                function (e) {
                    return e("templates")
                }
            ]
        }

        function Nt(e) {
            var i = {},
                r = "Directive",
                a = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,
                s = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/,
                l = "Template must have exactly one root element. was: ",
                f = /^\s*(https?|ftp|mailto):/;
            this.directive = function d(t, n) {
                return $(t) ? (G(n, "directive"), i.hasOwnProperty(t) || (i[t] = [], e.factory(t + r, ["$injector", "$exceptionHandler",
                    function (e, n) {
                        var r = [];
                        return o(i[t], function (i) {
                            try {
                                var o = e.invoke(i);
                                C(o) ? o = {
                                    compile: m(o)
                                } : !o.compile && o.link && (o.compile = m(o.link)), o.priority = o.priority || 0, o.name = o.name || t, o.require = o.require || o.controller && o.name, o.restrict = o.restrict || "A", r.push(o)
                            } catch (a) {
                                n(a)
                            }
                        }), r
                    }
                ])), i[t].push(n)) : o(t, u(d)), this
            }, this.urlSanitizationWhitelist = function (e) {
                return v(e) ? (f = e, this) : f
            }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document",
                function (e, u, d, p, g, v, b, x, k) {
                    function T(e, t, n) {
                        e instanceof Vn || (e = Vn(e)), o(e, function (t, n) {
                            3 == t.nodeType && t.nodeValue.match(/\S+/) && (e[n] = Vn(t).wrap("<span></span>").parent()[0])
                        });
                        var i = j(e, t, e, n);
                        return function (t, n) {
                            G(t, "scope");
                            for (var r = n ? di.clone.call(e) : e, o = 0, a = r.length; a > o; o++) {
                                var s = r[o];
                                (1 == s.nodeType || 9 == s.nodeType) && r.eq(o).data("$scope", t)
                            }
                            return S(r, "ng-scope"), n && n(r, t), i && i(t, r, r), r
                        }
                    }

                    function S(e, t) {
                        try {
                            e.addClass(t)
                        } catch (n) {}
                    }

                    function j(e, t, i, r) {
                        function o(e, i, r, o) {
                            var a, s, u, l, c, d, p, h, m = [];
                            for (d = 0, p = i.length; p > d; d++) m.push(i[d]);
                            for (d = 0, h = 0, p = f.length; p > d; h++) u = m[h], a = f[d++], s = f[d++], a ? (a.scope ? (l = e.$new(y(a.scope)), Vn(u).data("$scope", l)) : l = e, c = a.transclude, c || !o && t ? a(s, l, u, r, function (t) {
                                return function (n) {
                                    var i = e.$new();
                                    return i.$$transcluded = !0, t(i, n).bind("$destroy", q(i, i.$destroy))
                                }
                            }(c || t)) : a(s, l, u, n, o)) : s && s(e, u.childNodes, n, o)
                        }
                        for (var a, s, u, l, c, f = [], d = 0; d < e.length; d++) l = new B, u = A(e[d], [], l, r), a = u.length ? N(u, e[d], l, t, i) : null, s = a && a.terminal || !e[d].childNodes.length ? null : j(e[d].childNodes, a ? a.transclude : t), f.push(a), f.push(s), c = c || a || s;
                        return c ? o : null
                    }

                    function A(e, t, n, i) {
                        var r, o, u = e.nodeType,
                            l = n.$attr;
                        switch (u) {
                        case 1:
                            M(t, Mt(Jn(e).toLowerCase()), "E", i);
                            for (var c, f, d, p, h = e.attributes, m = 0, g = h && h.length; g > m; m++) c = h[m], c.specified && (f = c.name, d = Mt(f.toLowerCase()), l[d] = f, n[d] = p = E(Kn && "href" == f ? decodeURIComponent(e.getAttribute(f, 2)) : c.value), yt(e, d) && (n[d] = !0), P(e, t, p, d), M(t, d, "A", i));
                            if (o = e.className, $(o) && "" !== o)
                                for (; r = s.exec(o);) d = Mt(r[2]), M(t, d, "C", i) && (n[d] = E(r[3])), o = o.substr(r.index + r[0].length);
                            break;
                        case 3:
                            F(t, e.nodeValue);
                            break;
                        case 8:
                            try {
                                r = a.exec(e.nodeValue), r && (d = Mt(r[1]), M(t, d, "M", i) && (n[d] = E(r[2])))
                            } catch (v) {}
                        }
                        return t.sort(D), t
                    }

                    function N(e, i, r, a, s) {
                        function u(e, t) {
                            e && (e.require = p.require, M.push(e)), t && (t.require = p.require, D.push(t))
                        }

                        function c(e, t) {
                            var n, i = "data",
                                r = !1;
                            if ($(e)) {
                                for (;
                                    "^" == (n = e.charAt(0)) || "?" == n;) e = e.substr(1), "^" == n && (i = "inheritedData"), r = r || "?" == n;
                                if (n = t[i]("$" + e + "Controller"), !n && !r) throw Error("No controller: " + e);
                                return n
                            }
                            return w(e) && (n = [], o(e, function (e) {
                                n.push(c(e, t))
                            })), n
                        }

                        function f(e, t, a, s, u) {
                            var l, f, p, h, m, g;
                            if (l = i === a ? r : L(r, new B(Vn(a), r.$attr)), f = l.$$element, q) {
                                var y = /^\s*([@=&])\s*(\w*)\s*$/,
                                    $ = t.$parent || t;
                                o(q.scope, function (e, n) {
                                    var i, r, o, a = e.match(y) || [],
                                        s = a[2] || n,
                                        u = a[1];
                                    switch (t.$$isolateBindings[n] = u + s, u) {
                                    case "@":
                                        l.$observe(s, function (e) {
                                            t[n] = e
                                        }), l.$$observers[s].$$scope = $;
                                        break;
                                    case "=":
                                        r = v(l[s]), o = r.assign || function () {
                                            throw i = t[n] = r($), Error($i + l[s] + " (directive: " + q.name + ")")
                                        }, i = t[n] = r($), t.$watch(function () {
                                            var e = r($);
                                            return e !== t[n] && (e !== i ? i = t[n] = e : o($, e = i = t[n])), e
                                        });
                                        break;
                                    case "&":
                                        r = v(l[s]), t[n] = function (e) {
                                            return r($, e)
                                        };
                                        break;
                                    default:
                                        throw Error("Invalid isolate scope definition for directive " + q.name + ": " + e)
                                    }
                                })
                            }
                            for (x && o(x, function (e) {
                                var n = {
                                    $scope: t,
                                    $element: f,
                                    $attrs: l,
                                    $transclude: u
                                };
                                g = e.controller, "@" == g && (g = l[e.name]), f.data("$" + e.name + "Controller", b(g, n))
                            }), p = 0, h = M.length; h > p; p++) try {
                                m = M[p], m(t, f, l, m.require && c(m.require, f))
                            } catch (w) {
                                d(w, z(f))
                            }
                            for (e && e(t, a.childNodes, n, u), p = 0, h = D.length; h > p; p++) try {
                                m = D[p], m(t, f, l, m.require && c(m.require, f))
                            } catch (w) {
                                d(w, z(f))
                            }
                        }
                        for (var p, h, m, g, x, k, j, N = -Number.MAX_VALUE, M = [], D = [], F = null, q = null, P = null, I = r.$$element = Vn(i), W = a, U = 0, V = e.length; V > U && (p = e[U], m = n, !(N > p.priority)); U++) {
                            if ((j = p.scope) && (H("isolated scope", q, p, I), y(j) && (S(I, "ng-isolate-scope"), q = p), S(I, "ng-scope"), F = F || p), h = p.name, (j = p.controller) && (x = x || {}, H("'" + h + "' controller", x[h], p, I), x[h] = p), (j = p.transclude) && (H("transclusion", g, p, I), g = p, N = p.priority, "element" == j ? (m = Vn(i), I = r.$$element = Vn(t.createComment(" " + h + ": " + r[h] + " ")), i = I[0], R(s, Vn(m[0]), i), W = T(m, a, N)) : (m = Vn(at(i)).contents(), I.html(""), W = T(m, a))), j = p.template)
                                if (H("template", P, p, I), P = p, j = X(j), p.replace) {
                                    if (m = Vn("<div>" + E(j) + "</div>").contents(), i = m[0], 1 != m.length || 1 !== i.nodeType) throw new Error(l + j);
                                    R(s, I, i);
                                    var Y = {
                                        $attr: {}
                                    };
                                    e = e.concat(A(i, e.splice(U + 1, e.length - (U + 1)), Y)), _(r, Y), V = e.length
                                } else I.html(j);
                            if (p.templateUrl) H("template", P, p, I), P = p, f = O(e.splice(U, e.length - U), f, I, r, s, p.replace, W), V = e.length;
                            else if (p.compile) try {
                                k = p.compile(I, r, W), C(k) ? u(null, k) : k && u(k.pre, k.post)
                            } catch (Q) {
                                d(Q, z(I))
                            }
                            p.terminal && (f.terminal = !0, N = Math.max(N, p.priority))
                        }
                        return f.scope = F && F.scope, f.transclude = g && W, f
                    }

                    function M(t, o, a, s) {
                        var u = !1;
                        if (i.hasOwnProperty(o))
                            for (var l, c = e.get(o + r), f = 0, p = c.length; p > f; f++) try {
                                l = c[f], (s === n || s > l.priority) && -1 != l.restrict.indexOf(a) && (t.push(l), u = !0)
                            } catch (h) {
                                d(h)
                            }
                        return u
                    }

                    function _(e, t) {
                        var n = t.$attr,
                            i = e.$attr,
                            r = e.$$element;
                        o(e, function (i, r) {
                            "$" != r.charAt(0) && (t[r] && (i += ("style" === r ? ";" : " ") + t[r]), e.$set(r, i, !0, n[r]))
                        }), o(t, function (t, o) {
                            "class" == o ? (S(r, t), e["class"] = (e["class"] ? e["class"] + " " : "") + t) : "style" == o ? r.attr("style", r.attr("style") + ";" + t) : "$" == o.charAt(0) || e.hasOwnProperty(o) || (e[o] = t, i[o] = n[o])
                        })
                    }

                    function O(e, t, n, i, r, o, a) {
                        var s, u, f = [],
                            d = n[0],
                            h = e.shift(),
                            m = c({}, h, {
                                controller: null,
                                templateUrl: null,
                                transclude: null,
                                scope: null
                            });
                        return n.html(""), p.get(h.templateUrl, {
                                cache: g
                            }).success(function (c) {
                                var p, h, g;
                                if (c = X(c), o) {
                                    if (g = Vn("<div>" + E(c) + "</div>").contents(), p = g[0], 1 != g.length || 1 !== p.nodeType) throw new Error(l + c);
                                    h = {
                                        $attr: {}
                                    }, R(r, n, p), A(p, e, h), _(i, h)
                                } else p = d, n.html(c);
                                for (e.unshift(m), s = N(e, p, i, a), u = j(n.contents(), a); f.length;) {
                                    var v = f.pop(),
                                        y = f.pop(),
                                        $ = f.pop(),
                                        b = f.pop(),
                                        x = p;
                                    $ !== d && (x = at(p), R(y, Vn($), x)), s(function () {
                                        t(u, b, x, r, v)
                                    }, b, x, r, v)
                                }
                                f = null
                            }).error(function (e, t, n, i) {
                                throw Error("Failed to load template: " + i.url)
                            }),
                            function (e, n, i, r, o) {
                                f ? (f.push(n), f.push(i), f.push(r), f.push(o)) : s(function () {
                                    t(u, n, i, r, o)
                                }, n, i, r, o)
                            }
                    }

                    function D(e, t) {
                        return t.priority - e.priority
                    }

                    function H(e, t, n, i) {
                        if (t) throw Error("Multiple directives [" + t.name + ", " + n.name + "] asking for " + e + " on: " + z(i))
                    }

                    function F(e, t) {
                        var n = u(t, !0);
                        n && e.push({
                            priority: 0,
                            compile: m(function (e, t) {
                                var i = t.parent(),
                                    r = i.data("$binding") || [];
                                r.push(n), S(i.data("$binding", r), "ng-binding"), e.$watch(n, function (e) {
                                    t[0].nodeValue = e
                                })
                            })
                        })
                    }

                    function P(e, t, i, r) {
                        var o = u(i, !0);
                        o && t.push({
                            priority: 100,
                            compile: m(function (e, t, i) {
                                var a = i.$$observers || (i.$$observers = {});
                                "class" === r && (o = u(i[r], !0)), i[r] = n, (a[r] || (a[r] = [])).$$inter = !0, (i.$$observers && i.$$observers[r].$$scope || e).$watch(o, function (e) {
                                    i.$set(r, e)
                                })
                            })
                        })
                    }

                    function R(e, t, n) {
                        var i, r, o = t[0],
                            a = o.parentNode;
                        if (e)
                            for (i = 0, r = e.length; r > i; i++)
                                if (e[i] == o) {
                                    e[i] = n;
                                    break
                                }
                        a && a.replaceChild(n, o), n[Vn.expando] = o[Vn.expando], t[0] = n
                    }
                    var B = function (e, t) {
                        this.$$element = e, this.$attr = t || {}
                    };
                    B.prototype = {
                        $normalize: Mt,
                        $set: function (e, t, i, r) {
                            var a, s = yt(this.$$element[0], e),
                                u = this.$$observers;
                            s && (this.$$element.prop(e, t), r = s), this[e] = t, r ? this.$attr[e] = r : (r = this.$attr[e], r || (this.$attr[e] = r = J(e, "-"))), "A" === Jn(this.$$element[0]) && "href" === e && (I.setAttribute("href", t), a = I.href, a.match(f) || (this[e] = t = "unsafe:" + a)), i !== !1 && (null === t || t === n ? this.$$element.removeAttr(r) : this.$$element.attr(r, t)), u && o(u[e], function (e) {
                                try {
                                    e(t)
                                } catch (n) {
                                    d(n)
                                }
                            })
                        },
                        $observe: function (e, t) {
                            var n = this,
                                i = n.$$observers || (n.$$observers = {}),
                                r = i[e] || (i[e] = []);
                            return r.push(t), x.$evalAsync(function () {
                                r.$$inter || t(n[e])
                            }), t
                        }
                    };
                    var I = k[0].createElement("a"),
                        W = u.startSymbol(),
                        U = u.endSymbol(),
                        X = "{{" == W || "}}" == U ? h : function (e) {
                            return e.replace(/\{\{/g, W).replace(/}}/g, U)
                        };
                    return T
                }
            ]
        }

        function Mt(e) {
            return it(e.replace(bi, ""))
        }

        function _t() {
            var e = {};
            this.register = function (t, n) {
                y(t) ? c(e, t) : e[t] = n
            }, this.$get = ["$injector", "$window",
                function (t, n) {
                    return function (i, r) {
                        if ($(i)) {
                            var o = i;
                            i = e.hasOwnProperty(o) ? e[o] : Gt(r.$scope, o, !0) || Gt(n, o, !0), Z(i, o, !0)
                        }
                        return t.instantiate(i, r)
                    }
                }
            ]
        }

        function Ot() {
            this.$get = ["$window",
                function (e) {
                    return Vn(e.document)
                }
            ]
        }

        function Lt() {
            this.$get = ["$log",
                function (e) {
                    return function () {
                        e.error.apply(e, arguments)
                    }
                }
            ]
        }

        function Dt() {
            var e = "{{",
                t = "}}";
            this.startSymbol = function (t) {
                return t ? (e = t, this) : e
            }, this.endSymbol = function (e) {
                return e ? (t = e, this) : t
            }, this.$get = ["$parse",
                function (i) {
                    function r(r, s) {
                        for (var u, l, c, f, d = 0, p = [], h = r.length, m = !1, g = []; h > d;) - 1 != (u = r.indexOf(e, d)) && -1 != (l = r.indexOf(t, u + o)) ? (d != u && p.push(r.substring(d, u)), p.push(c = i(f = r.substring(u + o, l))), c.exp = f, d = l + a, m = !0) : (d != h && p.push(r.substring(d)), d = h);
                        return (h = p.length) || (p.push(""), h = 1), !s || m ? (g.length = h, c = function (e) {
                            for (var t, i = 0, r = h; r > i; i++) "function" == typeof (t = p[i]) && (t = t(e), null == t || t == n ? t = "" : "string" != typeof t && (t = R(t))), g[i] = t;
                            return g.join("")
                        }, c.exp = r, c.parts = p, c) : void 0
                    }
                    var o = e.length,
                        a = t.length;
                    return r.startSymbol = function () {
                        return e
                    }, r.endSymbol = function () {
                        return t
                    }, r
                }
            ]
        }

        function Ht(e) {
            for (var t = e.split("/"), n = t.length; n--;) t[n] = X(t[n]);
            return t.join("/")
        }

        function Ft(e, t) {
            var n = xi.exec(e);
            return n = {
                protocol: n[1],
                host: n[3],
                port: f(n[5]) || ki[n[1]] || null,
                path: n[6] || "/",
                search: n[8],
                hash: n[10]
            }, t && (t.$$protocol = n.protocol, t.$$host = n.host, t.$$port = n.port), n
        }

        function qt(e, t, n) {
            return e + "://" + t + (n == ki[e] ? "" : ":" + n)
        }

        function Pt(e) {
            return e.substr(0, e.lastIndexOf("/"))
        }

        function Rt(e, t, n) {
            var i = Ft(e);
            return decodeURIComponent(i.path) != t || g(i.hash) || 0 !== i.hash.indexOf(n) ? e : qt(i.protocol, i.host, i.port) + Pt(t) + i.hash.substr(n.length)
        }

        function Bt(e, t, n) {
            var i = Ft(e);
            if (decodeURIComponent(i.path) == t) return e;
            var r = i.search && "?" + i.search || "",
                o = i.hash && "#" + i.hash || "",
                a = Pt(t),
                s = i.path.substr(a.length);
            if (0 !== i.path.indexOf(a)) throw Error('Invalid url "' + e + '", missing path prefix "' + a + '" !');
            return qt(i.protocol, i.host, i.port) + t + "#" + n + s + r + o
        }

        function It(e, t, n) {
            t = t || "", this.$$parse = function (e) {
                var n = Ft(e, this);
                if (0 !== n.path.indexOf(t)) throw Error('Invalid url "' + e + '", missing path prefix "' + t + '" !');
                this.$$path = decodeURIComponent(n.path.substr(t.length)), this.$$search = W(n.search), this.$$hash = n.hash && decodeURIComponent(n.hash) || "", this.$$compose()
            }, this.$$compose = function () {
                var e = U(this.$$search),
                    n = this.$$hash ? "#" + X(this.$$hash) : "";
                this.$$url = Ht(this.$$path) + (e ? "?" + e : "") + n, this.$$absUrl = qt(this.$$protocol, this.$$host, this.$$port) + t + this.$$url
            }, this.$$rewriteAppUrl = function (e) {
                return 0 == e.indexOf(n) ? e : void 0
            }, this.$$parse(e)
        }

        function zt(e, t, n) {
            var i;
            this.$$parse = function (e) {
                var n = Ft(e, this);
                if (n.hash && 0 !== n.hash.indexOf(t)) throw Error('Invalid url "' + e + '", missing hash prefix "' + t + '" !');
                i = n.path + (n.search ? "?" + n.search : ""), n = Ci.exec((n.hash || "").substr(t.length)), this.$$path = n[1] ? ("/" == n[1].charAt(0) ? "" : "/") + decodeURIComponent(n[1]) : "", this.$$search = W(n[3]), this.$$hash = n[5] && decodeURIComponent(n[5]) || "", this.$$compose()
            }, this.$$compose = function () {
                var e = U(this.$$search),
                    n = this.$$hash ? "#" + X(this.$$hash) : "";
                this.$$url = Ht(this.$$path) + (e ? "?" + e : "") + n, this.$$absUrl = qt(this.$$protocol, this.$$host, this.$$port) + i + (this.$$url ? "#" + t + this.$$url : "")
            }, this.$$rewriteAppUrl = function (e) {
                return 0 == e.indexOf(n) ? e : void 0
            }, this.$$parse(e)
        }

        function Wt(e, t, n, i) {
            zt.apply(this, arguments), this.$$rewriteAppUrl = function (e) {
                return 0 == e.indexOf(n) ? n + i + "#" + t + e.substr(n.length) : void 0
            }
        }

        function Ut(e) {
            return function () {
                return this[e]
            }
        }

        function Xt(e, t) {
            return function (n) {
                return g(n) ? this[e] : (this[e] = t(n), this.$$compose(), this)
            }
        }

        function Vt() {
            var t = "",
                n = !1;
            this.hashPrefix = function (e) {
                return v(e) ? (t = e, this) : t
            }, this.html5Mode = function (e) {
                return v(e) ? (n = e, this) : n
            }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement",
                function (i, r, o, a) {
                    function s(e) {
                        i.$broadcast("$locationChangeSuccess", u.absUrl(), e)
                    }
                    var u, l, c, f, d = r.url(),
                        p = Ft(d);
                    n ? (l = r.baseHref() || "/", c = Pt(l), f = qt(p.protocol, p.host, p.port) + c + "/", u = o.history ? new It(Rt(d, l, t), c, f) : new Wt(Bt(d, l, t), t, f, l.substr(c.length + 1))) : (f = qt(p.protocol, p.host, p.port) + (p.path || "") + (p.search ? "?" + p.search : "") + "#" + t + "/", u = new zt(d, t, f)), a.bind("click", function (t) {
                        if (!t.ctrlKey && !t.metaKey && 2 != t.which) {
                            for (var n = Vn(t.target);
                                "a" !== zn(n[0].nodeName);)
                                if (n[0] === a[0] || !(n = n.parent())[0]) return;
                            var r = n.prop("href"),
                                o = u.$$rewriteAppUrl(r);
                            r && !n.attr("target") && o && (u.$$parse(o), i.$apply(), t.preventDefault(), e.angular["ff-684208-preventDefault"] = !0)
                        }
                    }), u.absUrl() != d && r.url(u.absUrl(), !0), r.onUrlChange(function (e) {
                        u.absUrl() != e && (i.$evalAsync(function () {
                            var t = u.absUrl();
                            u.$$parse(e), s(t)
                        }), i.$$phase || i.$digest())
                    });
                    var h = 0;
                    return i.$watch(function () {
                        var e = r.url(),
                            t = u.$$replace;
                        return h && e == u.absUrl() || (h++, i.$evalAsync(function () {
                            i.$broadcast("$locationChangeStart", u.absUrl(), e).defaultPrevented ? u.$$parse(e) : (r.url(u.absUrl(), t), s(e))
                        })), u.$$replace = !1, h
                    }), u
                }
            ]
        }

        function Yt() {
            this.$get = ["$window",
                function (e) {
                    function t(e) {
                        return e instanceof Error && (e.stack ? e = e.message && -1 === e.stack.indexOf(e.message) ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line)), e
                    }

                    function n(n) {
                        var i = e.console || {},
                            r = i[n] || i.log || p;
                        return r.apply ? function () {
                            var e = [];
                            return o(arguments, function (n) {
                                e.push(t(n))
                            }), r.apply(i, e)
                        } : function (e, t) {
                            r(e, t)
                        }
                    }
                    return {
                        log: n("log"),
                        warn: n("warn"),
                        info: n("info"),
                        error: n("error")
                    }
                }
            ]
        }

        function Qt(e, t) {
            function n(e) {
                return -1 != e.indexOf(m)
            }

            function i(e) {
                return -1 != e.indexOf(b)
            }

            function r() {
                return y + 1 < e.length ? e.charAt(y + 1) : !1
            }

            function o(e) {
                return e >= "0" && "9" >= e
            }

            function a(e) {
                return " " == e || "\r" == e || "	" == e || "\n" == e || "" == e || " " == e
            }

            function s(e) {
                return e >= "a" && "z" >= e || e >= "A" && "Z" >= e || "_" == e || "$" == e
            }

            function u(e) {
                return "-" == e || "+" == e || o(e)
            }

            function l(t, n, i) {
                throw i = i || y, Error("Lexer Error: " + t + " at column" + (v(n) ? "s " + n + "-" + y + " [" + e.substring(n, i) + "]" : " " + i) + " in expression [" + e + "].")
            }

            function f() {
                for (var t = "", n = y; y < e.length;) {
                    var i = zn(e.charAt(y));
                    if ("." == i || o(i)) t += i;
                    else {
                        var a = r();
                        if ("e" == i && u(a)) t += i;
                        else if (u(i) && a && o(a) && "e" == t.charAt(t.length - 1)) t += i;
                        else {
                            if (!u(i) || a && o(a) || "e" != t.charAt(t.length - 1)) break;
                            l("Invalid exponent")
                        }
                    }
                    y++
                }
                t = 1 * t, g.push({
                    index: n,
                    text: t,
                    json: !0,
                    fn: function () {
                        return t
                    }
                })
            }

            function d() {
                for (var n, i, r, u = "", l = y; y < e.length;) {
                    var f = e.charAt(y);
                    if ("." != f && !s(f) && !o(f)) break;
                    "." == f && (n = y), u += f, y++
                }
                if (n)
                    for (i = y; i < e.length;) {
                        var f = e.charAt(i);
                        if ("(" == f) {
                            r = u.substr(n - l + 1), u = u.substr(0, n - l), y = i;
                            break
                        }
                        if (!a(f)) break;
                        i++
                    }
                var d = {
                    index: l,
                    text: u
                };
                if (Ti.hasOwnProperty(u)) d.fn = d.json = Ti[u];
                else {
                    var p = en(u, t);
                    d.fn = c(function (e, t) {
                        return p(e, t)
                    }, {
                        assign: function (e, t) {
                            return Kt(e, u, t)
                        }
                    })
                }
                g.push(d), r && (g.push({
                    index: n,
                    text: ".",
                    json: !1
                }), g.push({
                    index: n + 1,
                    text: r,
                    json: !1
                }))
            }

            function p(t) {
                var n = y;
                y++;
                for (var i = "", r = t, o = !1; y < e.length;) {
                    var a = e.charAt(y);
                    if (r += a, o) {
                        if ("u" == a) {
                            var s = e.substring(y + 1, y + 5);
                            s.match(/[\da-f]{4}/i) || l("Invalid unicode escape [\\u" + s + "]"), y += 4, i += String.fromCharCode(parseInt(s, 16))
                        } else {
                            var u = Si[a];
                            i += u ? u : a
                        }
                        o = !1
                    } else if ("\\" == a) o = !0;
                    else {
                        if (a == t) return y++, g.push({
                            index: n,
                            text: r,
                            string: i,
                            json: !0,
                            fn: function () {
                                return i
                            }
                        }), void 0;
                        i += a
                    }
                    y++
                }
                l("Unterminated quote", n)
            }
            for (var h, m, g = [], y = 0, $ = [], b = ":"; y < e.length;) {
                if (m = e.charAt(y), n("\"'")) p(m);
                else if (o(m) || n(".") && o(r())) f();
                else if (s(m)) d(), i("{,") && "{" == $[0] && (h = g[g.length - 1]) && (h.json = -1 == h.text.indexOf("."));
                else if (n("(){}[].,;:")) g.push({
                    index: y,
                    text: m,
                    json: i(":[,") && n("{[") || n("}]:,")
                }), n("{[") && $.unshift(m), n("}]") && $.shift(), y++;
                else {
                    if (a(m)) {
                        y++;
                        continue
                    }
                    var x = m + r(),
                        w = Ti[m],
                        C = Ti[x];
                    C ? (g.push({
                        index: y,
                        text: x,
                        fn: C
                    }), y += 2) : w ? (g.push({
                        index: y,
                        text: m,
                        fn: w,
                        json: i("[,:") && n("+-")
                    }), y += 1) : l("Unexpected next character ", y, y + 1)
                }
                b = m
            }
            return g
        }

        function Jt(e, t, i, r) {
            function o(t, n) {
                throw Error("Syntax Error: Token '" + n.text + "' " + t + " at column " + (n.index + 1) + " of the expression [" + e + "] starting at [" + e.substring(n.index) + "].")
            }

            function a() {
                if (0 === D.length) throw Error("Unexpected end of expression: " + e);
                return D[0]
            }

            function s(e, t, n, i) {
                if (D.length > 0) {
                    var r = D[0],
                        o = r.text;
                    if (o == e || o == t || o == n || o == i || !e && !t && !n && !i) return r
                }
                return !1
            }

            function u(e, n, i, r) {
                var a = s(e, n, i, r);
                return a ? (t && !a.json && o("is not valid json", a), D.shift(), a) : !1
            }

            function l(e) {
                u(e) || o("is unexpected, expecting [" + e + "]", s())
            }

            function f(e, t) {
                return function (n, i) {
                    return e(n, i, t)
                }
            }

            function d(e, t, n) {
                return function (i, r) {
                    return t(i, r, e, n)
                }
            }

            function h() {
                for (var e = [];;)
                    if (D.length > 0 && !s("}", ")", ";", "]") && e.push(R()), !u(";")) return 1 == e.length ? e[0] : function (t, n) {
                        for (var i, r = 0; r < e.length; r++) {
                            var o = e[r];
                            o && (i = o(t, n))
                        }
                        return i
                    }
            }

            function g() {
                for (var e, t = y();;) {
                    if (!(e = u("|"))) return t;
                    t = d(t, e.fn, v())
                }
            }

            function v() {
                for (var e = u(), t = i(e.text), n = [];;) {
                    if (!(e = u(":"))) {
                        var r = function (e, i, r) {
                            for (var o = [r], a = 0; a < n.length; a++) o.push(n[a](e, i));
                            return t.apply(e, o)
                        };
                        return function () {
                            return r
                        }
                    }
                    n.push(y())
                }
            }

            function y() {
                return H()
            }

            function $() {
                var t, n, i = b();
                return (n = u("=")) ? (i.assign || o("implies assignment but [" + e.substring(0, n.index) + "] can not be assigned to", n), t = b(), function (e, n) {
                    return i.assign(e, t(e, n), n)
                }) : i
            }

            function b() {
                for (var e, t = x();;) {
                    if (!(e = u("||"))) return t;
                    t = d(t, e.fn, x())
                }
            }

            function x() {
                var e, t = w();
                return (e = u("&&")) && (t = d(t, e.fn, x())), t
            }

            function w() {
                var e, t = C();
                return (e = u("==", "!=")) && (t = d(t, e.fn, w())), t
            }

            function C() {
                var e, t = k();
                return (e = u("<", ">", "<=", ">=")) && (t = d(t, e.fn, C())), t
            }

            function k() {
                for (var e, t = T(); e = u("+", "-");) t = d(t, e.fn, T());
                return t
            }

            function T() {
                for (var e, t = S(); e = u("*", "/", "%");) t = d(t, e.fn, S());
                return t
            }

            function S() {
                var e;
                return u("+") ? E() : (e = u("-")) ? d(L, e.fn, S()) : (e = u("!")) ? f(e.fn, S()) : E()
            }

            function E() {
                var e;
                if (u("(")) e = R(), l(")");
                else if (u("[")) e = M();
                else if (u("{")) e = _();
                else {
                    var t = u();
                    e = t.fn, e || o("not a primary expression", t)
                }
                for (var n, i; n = u("(", "[", ".");) "(" === n.text ? (e = F(e, i), i = null) : "[" === n.text ? (i = e, e = P(e)) : "." === n.text ? (i = e, e = q(e)) : o("IMPOSSIBLE");
                return e
            }

            function j(e) {
                var t = u().text,
                    n = en(t, r);
                return c(function (t, i) {
                    return n(e(t, i), i)
                }, {
                    assign: function (n, i, r) {
                        return Kt(e(n, r), t, i)
                    }
                })
            }

            function A(e) {
                var t = y();
                return l("]"), c(function (i, r) {
                    var o, a, s = e(i, r),
                        u = t(i, r);
                    return s ? (o = s[u], o && o.then && (a = o, "$$v" in o || (a.$$v = n, a.then(function (e) {
                        a.$$v = e
                    })), o = o.$$v), o) : n
                }, {
                    assign: function (n, i, r) {
                        return e(n, r)[t(n, r)] = i
                    }
                })
            }

            function N(e, t) {
                var n = [];
                if (")" != a().text)
                    do n.push(y()); while (u(","));
                return l(")"),
                    function (i, r) {
                        for (var o = [], a = t ? t(i, r) : i, s = 0; s < n.length; s++) o.push(n[s](i, r));
                        var u = e(i, r) || p;
                        return u.apply ? u.apply(a, o) : u(o[0], o[1], o[2], o[3], o[4])
                    }
            }

            function M() {
                var e = [];
                if ("]" != a().text)
                    do e.push(y()); while (u(","));
                return l("]"),
                    function (t, n) {
                        for (var i = [], r = 0; r < e.length; r++) i.push(e[r](t, n));
                        return i
                    }
            }

            function _() {
                var e = [];
                if ("}" != a().text)
                    do {
                        var t = u(),
                            n = t.string || t.text;
                        l(":");
                        var i = y();
                        e.push({
                            key: n,
                            value: i
                        })
                    } while (u(","));
                return l("}"),
                    function (t, n) {
                        for (var i = {}, r = 0; r < e.length; r++) {
                            var o = e[r],
                                a = o.value(t, n);
                            i[o.key] = a
                        }
                        return i
                    }
            }
            var O, L = m(0),
                D = Qt(e, r),
                H = $,
                F = N,
                q = j,
                P = A,
                R = g;
            return t ? (H = b, F = q = P = R = function () {
                o("is not valid json", {
                    text: e,
                    index: 0
                })
            }, O = E()) : O = h(), 0 !== D.length && o("is an unexpected token", D[0]), O
        }

        function Kt(e, t, n) {
            for (var i = t.split("."), r = 0; i.length > 1; r++) {
                var o = i.shift(),
                    a = e[o];
                a || (a = {}, e[o] = a), e = a
            }
            return e[i.shift()] = n, n
        }

        function Gt(e, t, n) {
            if (!t) return e;
            for (var i, r = t.split("."), o = e, a = r.length, s = 0; a > s; s++) i = r[s], e && (e = (o = e)[i]);
            return !n && C(e) ? q(o, e) : e
        }

        function Zt(e, t, i, r, o) {
            return function (a, s) {
                var u, l = s && s.hasOwnProperty(e) ? s : a;
                return null === l || l === n ? l : (l = l[e], l && l.then && ("$$v" in l || (u = l, u.$$v = n, u.then(function (e) {
                    u.$$v = e
                })), l = l.$$v), t && null !== l && l !== n ? (l = l[t], l && l.then && ("$$v" in l || (u = l, u.$$v = n, u.then(function (e) {
                    u.$$v = e
                })), l = l.$$v), i && null !== l && l !== n ? (l = l[i], l && l.then && ("$$v" in l || (u = l, u.$$v = n, u.then(function (e) {
                    u.$$v = e
                })), l = l.$$v), r && null !== l && l !== n ? (l = l[r], l && l.then && ("$$v" in l || (u = l, u.$$v = n, u.then(function (e) {
                    u.$$v = e
                })), l = l.$$v), o && null !== l && l !== n ? (l = l[o], l && l.then && ("$$v" in l || (u = l, u.$$v = n, u.then(function (e) {
                    u.$$v = e
                })), l = l.$$v), l) : l) : l) : l) : l)
            }
        }

        function en(e, t) {
            if (Ei.hasOwnProperty(e)) return Ei[e];
            var i, r = e.split("."),
                a = r.length;
            if (t) i = 6 > a ? Zt(r[0], r[1], r[2], r[3], r[4]) : function (e, t) {
                var i, o = 0;
                do i = Zt(r[o++], r[o++], r[o++], r[o++], r[o++])(e, t), t = n, e = i; while (a > o);
                return i
            };
            else {
                var s = "var l, fn, p;\n";
                o(r, function (e, t) {
                    s += "if(s === null || s === undefined) return s;\nl=s;\ns=" + (t ? "s" : '((k&&k.hasOwnProperty("' + e + '"))?k:s)') + '["' + e + '"]' + ";\n" + "if (s && s.then) {\n" + ' if (!("$$v" in s)) {\n' + " p=s;\n" + " p.$$v = undefined;\n" + " p.then(function(v) {p.$$v=v;});\n" + "}\n" + " s=s.$$v\n" + "}\n"
                }), s += "return s;", i = Function("s", "k", s), i.toString = function () {
                    return s
                }
            }
            return Ei[e] = i
        }

        function tn() {
            var e = {};
            this.$get = ["$filter", "$sniffer",
                function (t, n) {
                    return function (i) {
                        switch (typeof i) {
                        case "string":
                            return e.hasOwnProperty(i) ? e[i] : e[i] = Jt(i, !1, t, n.csp);
                        case "function":
                            return i;
                        default:
                            return p
                        }
                    }
                }
            ]
        }

        function nn() {
            this.$get = ["$rootScope", "$exceptionHandler",
                function (e, t) {
                    return rn(function (t) {
                        e.$evalAsync(t)
                    }, t)
                }
            ]
        }

        function rn(e, t) {
            function i(e) {
                return e
            }

            function r(e) {
                return l(e)
            }

            function a(e) {
                var t = s(),
                    n = e.length,
                    i = [];
                return n ? o(e, function (e, r) {
                    u(e).then(function (e) {
                        r in i || (i[r] = e, --n || t.resolve(i))
                    }, function (e) {
                        r in i || t.reject(e)
                    })
                }) : t.resolve(i), t.promise
            }
            var s = function () {
                    var o, a, c = [];
                    return a = {
                        resolve: function (t) {
                            if (c) {
                                var i = c;
                                c = n, o = u(t), i.length && e(function () {
                                    for (var e, t = 0, n = i.length; n > t; t++) e = i[t], o.then(e[0], e[1])
                                })
                            }
                        },
                        reject: function (e) {
                            a.resolve(l(e))
                        },
                        promise: {
                            then: function (e, n) {
                                var a = s(),
                                    u = function (n) {
                                        try {
                                            a.resolve((e || i)(n))
                                        } catch (r) {
                                            t(r), a.reject(r)
                                        }
                                    },
                                    l = function (e) {
                                        try {
                                            a.resolve((n || r)(e))
                                        } catch (i) {
                                            t(i), a.reject(i)
                                        }
                                    };
                                return c ? c.push([u, l]) : o.then(u, l), a.promise
                            }
                        }
                    }
                },
                u = function (t) {
                    return t && t.then ? t : {
                        then: function (n) {
                            var i = s();
                            return e(function () {
                                i.resolve(n(t))
                            }), i.promise
                        }
                    }
                },
                l = function (t) {
                    return {
                        then: function (n, i) {
                            var o = s();
                            return e(function () {
                                o.resolve((i || r)(t))
                            }), o.promise
                        }
                    }
                },
                c = function (n, o, a) {
                    var c, f = s(),
                        d = function (e) {
                            try {
                                return (o || i)(e)
                            } catch (n) {
                                return t(n), l(n)
                            }
                        },
                        p = function (e) {
                            try {
                                return (a || r)(e)
                            } catch (n) {
                                return t(n), l(n)
                            }
                        };
                    return e(function () {
                        u(n).then(function (e) {
                            c || (c = !0, f.resolve(u(e).then(d, p)))
                        }, function (e) {
                            c || (c = !0, f.resolve(p(e)))
                        })
                    }), f.promise
                };
            return {
                defer: s,
                reject: l,
                when: c,
                all: a
            }
        }

        function on() {
            var e = {};
            this.when = function (t, n) {
                if (e[t] = c({
                    reloadOnSearch: !0
                }, n), t) {
                    var i = "/" == t[t.length - 1] ? t.substr(0, t.length - 1) : t + "/";
                    e[i] = {
                        redirectTo: t
                    }
                }
                return this
            }, this.otherwise = function (e) {
                return this.when(null, e), this
            }, this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache",
                function (t, n, i, r, a, s, u) {
                    function l(e, t) {
                        t = "^" + t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") + "$";
                        for (var n, i = "", r = [], a = {}, s = /:(\w+)/g, u = 0; null !== (n = s.exec(t));) i += t.slice(u, n.index), i += "([^\\/]*)", r.push(n[1]), u = s.lastIndex;
                        i += t.substr(u);
                        var l = e.match(new RegExp(i));
                        return l && o(r, function (e, t) {
                            a[e] = l[t + 1]
                        }), l ? a : null
                    }

                    function f() {
                        var e = p(),
                            l = g.current;
                        e && l && e.$route === l.$route && D(e.pathParams, l.pathParams) && !e.reloadOnSearch && !m ? (l.params = e.params, O(l.params, i), t.$broadcast("$routeUpdate", l)) : (e || l) && (m = !1, t.$broadcast("$routeChangeStart", e, l), g.current = e, e && e.redirectTo && ($(e.redirectTo) ? n.path(h(e.redirectTo, e.params)).search(e.params).replace() : n.url(e.redirectTo(e.pathParams, n.path(), n.search())).replace()), r.when(e).then(function () {
                            if (e) {
                                var t, n = [],
                                    i = [];
                                return o(e.resolve || {}, function (e, t) {
                                    n.push(t), i.push($(e) ? a.get(e) : a.invoke(e))
                                }), v(t = e.template) || v(t = e.templateUrl) && (t = s.get(t, {
                                    cache: u
                                }).then(function (e) {
                                    return e.data
                                })), v(t) && (n.push("$template"), i.push(t)), r.all(i).then(function (e) {
                                    var t = {};
                                    return o(e, function (e, i) {
                                        t[n[i]] = e
                                    }), t
                                })
                            }
                        }).then(function (n) {
                            e == g.current && (e && (e.locals = n, O(e.params, i)), t.$broadcast("$routeChangeSuccess", e, l))
                        }, function (n) {
                            e == g.current && t.$broadcast("$routeChangeError", e, l, n)
                        }))
                    }

                    function p() {
                        var t, i;
                        return o(e, function (e, r) {
                            !i && (t = l(n.path(), r)) && (i = d(e, {
                                params: c({}, n.search(), t),
                                pathParams: t
                            }), i.$route = e)
                        }), i || e[null] && d(e[null], {
                            params: {},
                            pathParams: {}
                        })
                    }

                    function h(e, t) {
                        var n = [];
                        return o((e || "").split(":"), function (e, i) {
                            if (0 == i) n.push(e);
                            else {
                                var r = e.match(/(\w+)(.*)/),
                                    o = r[1];
                                n.push(t[o]), n.push(r[2] || ""), delete t[o]
                            }
                        }), n.join("")
                    }
                    var m = !1,
                        g = {
                            routes: e,
                            reload: function () {
                                m = !0, t.$evalAsync(f)
                            }
                        };
                    return t.$on("$locationChangeSuccess", f), g
                }
            ]
        }

        function an() {
            this.$get = m({})
        }

        function sn() {
            var e = 10;
            this.digestTtl = function (t) {
                return arguments.length && (e = t), e
            }, this.$get = ["$injector", "$exceptionHandler", "$parse",
                function (t, n, i) {
                    function r() {
                        this.$id = l(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this["this"] = this.$root = this, this.$$destroyed = !1, this.$$asyncQueue = [], this.$$listeners = {}, this.$$isolateBindings = {}
                    }

                    function o(e) {
                        if (c.$$phase) throw Error(c.$$phase + " already in progress");
                        c.$$phase = e
                    }

                    function a() {
                        c.$$phase = null
                    }

                    function s(e, t) {
                        var n = i(e);
                        return Z(n, t), n
                    }

                    function u() {}
                    r.prototype = {
                        $new: function (e) {
                            var t, n;
                            if (C(e)) throw Error("API-CHANGE: Use $controller to instantiate controllers.");
                            return e ? (n = new r, n.$root = this.$root) : (t = function () {}, t.prototype = this, n = new t, n.$id = l()), n["this"] = n, n.$$listeners = {}, n.$parent = this, n.$$asyncQueue = [], n.$$watchers = n.$$nextSibling = n.$$childHead = n.$$childTail = null, n.$$prevSibling = this.$$childTail, this.$$childHead ? (this.$$childTail.$$nextSibling = n, this.$$childTail = n) : this.$$childHead = this.$$childTail = n, n
                        },
                        $watch: function (e, t, n) {
                            var i = this,
                                r = s(e, "watch"),
                                o = i.$$watchers,
                                a = {
                                    fn: t,
                                    last: u,
                                    get: r,
                                    exp: e,
                                    eq: !!n
                                };
                            if (!C(t)) {
                                var l = s(t || p, "listener");
                                a.fn = function (e, t, n) {
                                    l(n)
                                }
                            }
                            return o || (o = i.$$watchers = []), o.unshift(a),
                                function () {
                                    _(o, a)
                                }
                        },
                        $digest: function () {
                            var t, i, r, s, l, c, f, d, p, h, m, g = e,
                                v = this,
                                y = [];
                            o("$digest");
                            do {
                                f = !1, p = v;
                                do {
                                    for (l = p.$$asyncQueue; l.length;) try {
                                        p.$eval(l.shift())
                                    } catch ($) {
                                        n($)
                                    }
                                    if (s = p.$$watchers)
                                        for (c = s.length; c--;) try {
                                            t = s[c], (i = t.get(p)) === (r = t.last) || (t.eq ? D(i, r) : "number" == typeof i && "number" == typeof r && isNaN(i) && isNaN(r)) || (f = !0, t.last = t.eq ? O(i) : i, t.fn(i, r === u ? i : r, p), 5 > g && (h = 4 - g, y[h] || (y[h] = []), m = C(t.exp) ? "fn: " + (t.exp.name || t.exp.toString()) : t.exp, m += "; newVal: " + R(i) + "; oldVal: " + R(r), y[h].push(m)))
                                        } catch ($) {
                                            n($)
                                        }
                                    if (!(d = p.$$childHead || p !== v && p.$$nextSibling))
                                        for (; p !== v && !(d = p.$$nextSibling);) p = p.$parent
                                } while (p = d);
                                if (f && !g--) throw a(), Error(e + " $digest() iterations reached. Aborting!\n" + "Watchers fired in the last 5 iterations: " + R(y))
                            } while (f || l.length);
                            a()
                        },
                        $destroy: function () {
                            if (c != this && !this.$$destroyed) {
                                var e = this.$parent;
                                this.$broadcast("$destroy"), this.$$destroyed = !0, e.$$childHead == this && (e.$$childHead = this.$$nextSibling), e.$$childTail == this && (e.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null
                            }
                        },
                        $eval: function (e, t) {
                            return i(e)(this, t)
                        },
                        $evalAsync: function (e) {
                            this.$$asyncQueue.push(e)
                        },
                        $apply: function (e) {
                            try {
                                return o("$apply"), this.$eval(e)
                            } catch (t) {
                                n(t)
                            } finally {
                                a();
                                try {
                                    c.$digest()
                                } catch (t) {
                                    throw n(t), t
                                }
                            }
                        },
                        $on: function (e, t) {
                            var n = this.$$listeners[e];
                            return n || (this.$$listeners[e] = n = []), n.push(t),
                                function () {
                                    n[M(n, t)] = null
                                }
                        },
                        $emit: function (e) {
                            var t, i, r, o = [],
                                a = this,
                                s = !1,
                                u = {
                                    name: e,
                                    targetScope: a,
                                    stopPropagation: function () {
                                        s = !0
                                    },
                                    preventDefault: function () {
                                        u.defaultPrevented = !0
                                    },
                                    defaultPrevented: !1
                                },
                                l = H([u], arguments, 1);
                            do {
                                for (t = a.$$listeners[e] || o, u.currentScope = a, i = 0, r = t.length; r > i; i++)
                                    if (t[i]) try {
                                        if (t[i].apply(null, l), s) return u
                                    } catch (c) {
                                        n(c)
                                    } else t.splice(i, 1), i--, r--;
                                a = a.$parent
                            } while (a);
                            return u
                        },
                        $broadcast: function (e) {
                            var t, i, r, o = this,
                                a = o,
                                s = o,
                                u = {
                                    name: e,
                                    targetScope: o,
                                    preventDefault: function () {
                                        u.defaultPrevented = !0
                                    },
                                    defaultPrevented: !1
                                },
                                l = H([u], arguments, 1);
                            do {
                                for (a = s, u.currentScope = a, t = a.$$listeners[e] || [], i = 0, r = t.length; r > i; i++)
                                    if (t[i]) try {
                                        t[i].apply(null, l)
                                    } catch (c) {
                                        n(c)
                                    } else t.splice(i, 1), i--, r--;
                                if (!(s = a.$$childHead || a !== o && a.$$nextSibling))
                                    for (; a !== o && !(s = a.$$nextSibling);) a = a.$parent
                            } while (a = s);
                            return u
                        }
                    };
                    var c = new r;
                    return c
                }
            ]
        }

        function un() {
            this.$get = ["$window",
                function (e) {
                    var t = {},
                        n = f((/android (\d+)/.exec(zn(e.navigator.userAgent)) || [])[1]);
                    return {
                        history: !(!e.history || !e.history.pushState || 4 > n),
                        hashchange: "onhashchange" in e && (!e.document.documentMode || e.document.documentMode > 7),
                        hasEvent: function (n) {
                            if ("input" == n && 9 == Kn) return !1;
                            if (g(t[n])) {
                                var i = e.document.createElement("div");
                                t[n] = "on" + n in i
                            }
                            return t[n]
                        },
                        csp: !1
                    }
                }
            ]
        }

        function ln() {
            this.$get = m(e)
        }

        function cn(e) {
            var t, n, i, r = {};
            return e ? (o(e.split("\n"), function (e) {
                i = e.indexOf(":"), t = zn(E(e.substr(0, i))), n = E(e.substr(i + 1)), t && (r[t] ? r[t] += ", " + n : r[t] = n)
            }), r) : r
        }

        function fn(e) {
            var t = y(e) ? e : n;
            return function (n) {
                return t || (t = cn(e)), n ? t[zn(n)] || null : t
            }
        }

        function dn(e, t, n) {
            return C(n) ? n(e, t) : (o(n, function (n) {
                e = n(e, t)
            }), e)
        }

        function pn(e) {
            return e >= 200 && 300 > e
        }

        function hn() {
            var e = /^\s*(\[|\{[^\{])/,
                t = /[\}\]]\s*$/,
                i = /^\)\]\}',?\n/,
                r = this.defaults = {
                    transformResponse: [

                        function (n) {
                            return $(n) && (n = n.replace(i, ""), e.test(n) && t.test(n) && (n = B(n, !0))), n
                        }
                    ],
                    transformRequest: [

                        function (e) {
                            return y(e) && !S(e) ? R(e) : e
                        }
                    ],
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*",
                            "X-Requested-With": "XMLHttpRequest"
                        },
                        post: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        put: {
                            "Content-Type": "application/json;charset=utf-8"
                        }
                    }
                },
                a = this.responseInterceptors = [];
            this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector",
                function (e, t, i, u, l, f) {
                    function d(e) {
                        function n(e) {
                            var t = c({}, e, {
                                data: dn(e.data, e.headers, s)
                            });
                            return pn(e.status) ? t : l.reject(t)
                        }
                        e.method = Wn(e.method);
                        var i, a = e.transformRequest || r.transformRequest,
                            s = e.transformResponse || r.transformResponse,
                            u = r.headers,
                            f = c({
                                "X-XSRF-TOKEN": t.cookies()["XSRF-TOKEN"]
                            }, u.common, u[zn(e.method)], e.headers),
                            d = dn(e.data, fn(f), a);
                        return g(e.data) && delete f["Content-Type"], i = m(e, d, f), i = i.then(n, n), o(x, function (e) {
                            i = e(i)
                        }), i.success = function (t) {
                            return i.then(function (n) {
                                t(n.data, n.status, n.headers, e)
                            }), i
                        }, i.error = function (t) {
                            return i.then(null, function (n) {
                                t(n.data, n.status, n.headers, e)
                            }), i
                        }, i
                    }

                    function p() {
                        o(arguments, function (e) {
                            d[e] = function (t, n) {
                                return d(c(n || {}, {
                                    method: e,
                                    url: t
                                }))
                            }
                        })
                    }

                    function h() {
                        o(arguments, function (e) {
                            d[e] = function (t, n, i) {
                                return d(c(i || {}, {
                                    method: e,
                                    url: t,
                                    data: n
                                }))
                            }
                        })
                    }

                    function m(t, n, i) {
                        function r(e, t, n) {
                            s && (pn(e) ? s.put(h, [e, t, cn(n)]) : s.remove(h)), o(t, e, n), u.$apply()
                        }

                        function o(e, n, i) {
                            n = Math.max(n, 0), (pn(n) ? f.resolve : f.reject)({
                                data: e,
                                status: n,
                                headers: fn(i),
                                config: t
                            })
                        }

                        function a() {
                            var e = M(d.pendingRequests, t); - 1 !== e && d.pendingRequests.splice(e, 1)
                        }
                        var s, c, f = l.defer(),
                            p = f.promise,
                            h = v(t.url, t.params);
                        if (d.pendingRequests.push(t), p.then(a, a), t.cache && "GET" == t.method && (s = y(t.cache) ? t.cache : b), s)
                            if (c = s.get(h)) {
                                if (c.then) return c.then(a, a), c;
                                w(c) ? o(c[1], c[0], O(c[2])) : o(c, 200, {})
                            } else s.put(h, p);
                        return c || e(t.method, h, n, r, i, t.timeout, t.withCredentials), p
                    }

                    function v(e, t) {
                        if (!t) return e;
                        var i = [];
                        return s(t, function (e, t) {
                            null != e && e != n && (y(e) && (e = R(e)), i.push(encodeURIComponent(t) + "=" + encodeURIComponent(e)))
                        }), e + (-1 == e.indexOf("?") ? "?" : "&") + i.join("&")
                    }
                    var b = i("$http"),
                        x = [];
                    return o(a, function (e) {
                        x.push($(e) ? f.get(e) : f.invoke(e))
                    }), d.pendingRequests = [], p("get", "delete", "head", "jsonp"), h("post", "put"), d.defaults = r, d
                }
            ]
        }

        function mn() {
            this.$get = ["$browser", "$window", "$document",
                function (e, t, n) {
                    return gn(e, ji, e.defer, t.angular.callbacks, n[0], t.location.protocol.replace(":", ""))
                }
            ]
        }

        function gn(e, t, n, i, r, a) {
            function s(e, t) {
                var n = r.createElement("script"),
                    i = function () {
                        r.body.removeChild(n), t && t()
                    };
                n.type = "text/javascript", n.src = e, Kn ? n.onreadystatechange = function () {
                    /loaded|complete/.test(n.readyState) && i()
                } : n.onload = n.onerror = i, r.body.appendChild(n)
            }
            return function (r, u, l, c, f, d, h) {
                function m(t, n, i, r) {
                    var o = (u.match(xi) || ["", a])[1];
                    n = "file" == o ? i ? 200 : 404 : n, n = 1223 == n ? 204 : n, t(n, i, r), e.$$completeOutstandingRequest(p)
                }
                if (e.$$incOutstandingRequestCount(), u = u || e.url(), "jsonp" == zn(r)) {
                    var g = "_" + (i.counter++).toString(36);
                    i[g] = function (e) {
                        i[g].data = e
                    }, s(u.replace("JSON_CALLBACK", "angular.callbacks." + g), function () {
                        i[g].data ? m(c, 200, i[g].data) : m(c, -2), delete i[g]
                    })
                } else {
                    var v = new t;
                    v.open(r, u, !0), o(f, function (e, t) {
                        e && v.setRequestHeader(t, e)
                    });
                    var y;
                    v.onreadystatechange = function () {
                        if (4 == v.readyState) {
                            var e = v.getAllResponseHeaders(),
                                t = ["Cache-Control", "Content-Language", "Content-Type", "Expires", "Last-Modified", "Pragma"];
                            e || (e = "", o(t, function (t) {
                                var n = v.getResponseHeader(t);
                                n && (e += t + ": " + n + "\n")
                            })), m(c, y || v.status, v.responseText, e)
                        }
                    }, h && (v.withCredentials = !0), v.send(l || ""), d > 0 && n(function () {
                        y = -1, v.abort()
                    }, d)
                }
            }
        }

        function vn() {
            this.$get = function () {
                return {
                    id: "en-us",
                    NUMBER_FORMATS: {
                        DECIMAL_SEP: ".",
                        GROUP_SEP: ",",
                        PATTERNS: [{
                            minInt: 1,
                            minFrac: 0,
                            maxFrac: 3,
                            posPre: "",
                            posSuf: "",
                            negPre: "-",
                            negSuf: "",
                            gSize: 3,
                            lgSize: 3
                        }, {
                            minInt: 1,
                            minFrac: 2,
                            maxFrac: 2,
                            posPre: "¤",
                            posSuf: "",
                            negPre: "(¤",
                            negSuf: ")",
                            gSize: 3,
                            lgSize: 3
                        }],
                        CURRENCY_SYM: "$"
                    },
                    DATETIME_FORMATS: {
                        MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                        SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                        DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                        SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                        AMPMS: ["AM", "PM"],
                        medium: "MMM d, y h:mm:ss a",
                        "short": "M/d/yy h:mm a",
                        fullDate: "EEEE, MMMM d, y",
                        longDate: "MMMM d, y",
                        mediumDate: "MMM d, y",
                        shortDate: "M/d/yy",
                        mediumTime: "h:mm:ss a",
                        shortTime: "h:mm a"
                    },
                    pluralCat: function (e) {
                        return 1 === e ? "one" : "other"
                    }
                }
            }
        }

        function yn() {
            this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler",
                function (e, t, n, i) {
                    function r(r, a, s) {
                        var u, l, c = n.defer(),
                            f = c.promise,
                            d = v(s) && !s;
                        return u = t.defer(function () {
                            try {
                                c.resolve(r())
                            } catch (t) {
                                c.reject(t), i(t)
                            }
                            d || e.$apply()
                        }, a), l = function () {
                            delete o[f.$$timeoutId]
                        }, f.$$timeoutId = u, o[u] = c, f.then(l, l), f
                    }
                    var o = {};
                    return r.cancel = function (e) {
                        return e && e.$$timeoutId in o ? (o[e.$$timeoutId].reject("canceled"), t.defer.cancel(e.$$timeoutId)) : !1
                    }, r
                }
            ]
        }

        function $n(e) {
            function t(t, i) {
                return e.factory(t + n, i)
            }
            var n = "Filter";
            this.register = t, this.$get = ["$injector",
                function (e) {
                    return function (t) {
                        return e.get(t + n)
                    }
                }
            ], t("currency", xn), t("date", An), t("filter", bn), t("json", Nn), t("limitTo", Mn), t("lowercase", Oi), t("number", wn), t("orderBy", _n), t("uppercase", Li)
        }

        function bn() {
            return function (e, t) {
                if (!w(e)) return e;
                var n = [];
                n.check = function (e) {
                    for (var t = 0; t < n.length; t++)
                        if (!n[t](e)) return !1;
                    return !0
                };
                var i = function (e, t) {
                    if ("!" === t.charAt(0)) return !i(e, t.substr(1));
                    switch (typeof e) {
                    case "boolean":
                    case "number":
                    case "string":
                        return ("" + e).toLowerCase().indexOf(t) > -1;
                    case "object":
                        for (var n in e)
                            if ("$" !== n.charAt(0) && i(e[n], t)) return !0;
                        return !1;
                    case "array":
                        for (var r = 0; r < e.length; r++)
                            if (i(e[r], t)) return !0;
                        return !1;
                    default:
                        return !1
                    }
                };
                switch (typeof t) {
                case "boolean":
                case "number":
                case "string":
                    t = {
                        $: t
                    };
                case "object":
                    for (var r in t) "$" == r ? function () {
                        var e = ("" + t[r]).toLowerCase();
                        e && n.push(function (t) {
                            return i(t, e)
                        })
                    }() : function () {
                        var e = r,
                            o = ("" + t[r]).toLowerCase();
                        o && n.push(function (t) {
                            return i(Gt(t, e), o)
                        })
                    }();
                    break;
                case "function":
                    n.push(t);
                    break;
                default:
                    return e
                }
                for (var o = [], a = 0; a < e.length; a++) {
                    var s = e[a];
                    n.check(s) && o.push(s)
                }
                return o
            }
        }

        function xn(e) {
            var t = e.NUMBER_FORMATS;
            return function (e, n) {
                return g(n) && (n = t.CURRENCY_SYM), Cn(e, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, 2).replace(/\u00A4/g, n)
            }
        }

        function wn(e) {
            var t = e.NUMBER_FORMATS;
            return function (e, n) {
                return Cn(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, n)
            }
        }

        function Cn(e, t, n, i, r) {
            if (isNaN(e) || !isFinite(e)) return "";
            var o = 0 > e;
            e = Math.abs(e);
            var a = e + "",
                s = "",
                u = [],
                l = !1;
            if (-1 !== a.indexOf("e")) {
                var c = a.match(/([\d\.]+)e(-?)(\d+)/);
                c && "-" == c[2] && c[3] > r + 1 ? a = "0" : (s = a, l = !0)
            }
            if (!l) {
                var f = (a.split(Ai)[1] || "").length;
                g(r) && (r = Math.min(Math.max(t.minFrac, f), t.maxFrac));
                var d = Math.pow(10, r);
                e = Math.round(e * d) / d;
                var p = ("" + e).split(Ai),
                    h = p[0];
                p = p[1] || "";
                var m = 0,
                    v = t.lgSize,
                    y = t.gSize;
                if (h.length >= v + y) {
                    m = h.length - v;
                    for (var $ = 0; m > $; $++) 0 === (m - $) % y && 0 !== $ && (s += n), s += h.charAt($)
                }
                for ($ = m; $ < h.length; $++) 0 === (h.length - $) % v && 0 !== $ && (s += n), s += h.charAt($);
                for (; p.length < r;) p += "0";
                r && "0" !== r && (s += i + p.substr(0, r))
            }
            return u.push(o ? t.negPre : t.posPre), u.push(s), u.push(o ? t.negSuf : t.posSuf), u.join("")
        }

        function kn(e, t, n) {
            var i = "";
            for (0 > e && (i = "-", e = -e), e = "" + e; e.length < t;) e = "0" + e;
            return n && (e = e.substr(e.length - t)), i + e
        }

        function Tn(e, t, n, i) {
            return function (r) {
                var o = r["get" + e]();
                return (n > 0 || o > -n) && (o += n), 0 === o && -12 == n && (o = 12), kn(o, t, i)
            }
        }

        function Sn(e, t) {
            return function (n, i) {
                var r = n["get" + e](),
                    o = Wn(t ? "SHORT" + e : e);
                return i[o][r]
            }
        }

        function En(e) {
            var t = -1 * e.getTimezoneOffset(),
                n = t >= 0 ? "+" : "";
            return n += kn(t / 60, 2) + kn(Math.abs(t % 60), 2)
        }

        function jn(e, t) {
            return e.getHours() < 12 ? t.AMPMS[0] : t.AMPMS[1]
        }

        function An(e) {
            function t(e) {
                var t;
                if (t = e.match(n)) {
                    var i = new Date(0),
                        r = 0,
                        o = 0;
                    return t[9] && (r = f(t[9] + t[10]), o = f(t[9] + t[11])), i.setUTCFullYear(f(t[1]), f(t[2]) - 1, f(t[3])), i.setUTCHours(f(t[4] || 0) - r, f(t[5] || 0) - o, f(t[6] || 0), f(t[7] || 0)), i
                }
                return e
            }
            var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
            return function (n, i) {
                var r, a, s = "",
                    u = [];
                if (i = i || "mediumDate", i = e.DATETIME_FORMATS[i] || i, $(n) && (n = _i.test(n) ? f(n) : t(n)), b(n) && (n = new Date(n)), !x(n)) return n;
                for (; i;) a = Mi.exec(i), a ? (u = H(u, a, 1), i = u.pop()) : (u.push(i), i = null);
                return o(u, function (t) {
                    r = Ni[t], s += r ? r(n, e.DATETIME_FORMATS) : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
                }), s
            }
        }

        function Nn() {
            return function (e) {
                return R(e, !0)
            }
        }

        function Mn() {
            return function (e, t) {
                if (!(e instanceof Array)) return e;
                t = f(t);
                var n, i, r = [];
                if (!(e && e instanceof Array)) return r;
                for (t > e.length ? t = e.length : t < -e.length && (t = -e.length), t > 0 ? (n = 0, i = t) : (n = e.length + t, i = e.length); i > n; n++) r.push(e[n]);
                return r
            }
        }

        function _n(e) {
            return function (t, n, i) {
                function r(e, t) {
                    for (var i = 0; i < n.length; i++) {
                        var r = n[i](e, t);
                        if (0 !== r) return r
                    }
                    return 0
                }

                function o(e, t) {
                    return I(t) ? function (t, n) {
                        return e(n, t)
                    } : e
                }

                function a(e, t) {
                    var n = typeof e,
                        i = typeof t;
                    return n == i ? ("string" == n && (e = e.toLowerCase()), "string" == n && (t = t.toLowerCase()), e === t ? 0 : t > e ? -1 : 1) : i > n ? -1 : 1
                }
                if (!w(t)) return t;
                if (!n) return t;
                n = w(n) ? n : [n], n = A(n, function (t) {
                    var n = !1,
                        i = t || h;
                    return $(t) && (("+" == t.charAt(0) || "-" == t.charAt(0)) && (n = "-" == t.charAt(0), t = t.substring(1)), i = e(t)), o(function (e, t) {
                        return a(i(e), i(t))
                    }, n)
                });
                for (var s = [], u = 0; u < t.length; u++) s.push(t[u]);
                return s.sort(o(r, i))
            }
        }

        function On(e) {
            return C(e) && (e = {
                link: e
            }), e.restrict = e.restrict || "AC", m(e)
        }

        function Ln(e, t) {
            function n(t, n) {
                n = n ? "-" + J(n, "-") : "", e.removeClass((t ? Vi : Xi) + n).addClass((t ? Xi : Vi) + n)
            }
            var i = this,
                r = e.parent().controller("form") || Fi,
                a = 0,
                s = i.$error = {};
            i.$name = t.name, i.$dirty = !1, i.$pristine = !0, i.$valid = !0, i.$invalid = !1, r.$addControl(i), e.addClass(Yi), n(!0), i.$addControl = function (e) {
                e.$name && !i.hasOwnProperty(e.$name) && (i[e.$name] = e)
            }, i.$removeControl = function (e) {
                e.$name && i[e.$name] === e && delete i[e.$name], o(s, function (t, n) {
                    i.$setValidity(n, !0, e)
                })
            }, i.$setValidity = function (e, t, o) {
                var u = s[e];
                if (t) u && (_(u, o), u.length || (a--, a || (n(t), i.$valid = !0, i.$invalid = !1), s[e] = !1, n(!0, e), r.$setValidity(e, !0, i)));
                else {
                    if (a || n(t), u) {
                        if (N(u, o)) return
                    } else s[e] = u = [], a++, n(!1, e), r.$setValidity(e, !1, i);
                    u.push(o), i.$valid = !1, i.$invalid = !0
                }
            }, i.$setDirty = function () {
                e.removeClass(Yi).addClass(Qi), i.$dirty = !0, i.$pristine = !1, r.$setDirty()
            }
        }

        function Dn(e) {
            return g(e) || "" === e || null === e || e !== e
        }

        function Hn(e, t, i, r, o, a) {
            var s = function () {
                var n = E(t.val());
                r.$viewValue !== n && e.$apply(function () {
                    r.$setViewValue(n)
                })
            };
            if (o.hasEvent("input")) t.bind("input", s);
            else {
                var u;
                t.bind("keydown", function (e) {
                    var t = e.keyCode;
                    91 === t || t > 15 && 19 > t || t >= 37 && 40 >= t || u || (u = a.defer(function () {
                        s(), u = null
                    }))
                }), t.bind("change", s)
            }
            r.$render = function () {
                t.val(Dn(r.$viewValue) ? "" : r.$viewValue)
            };
            var l, c = i.ngPattern,
                d = function (e, t) {
                    return Dn(t) || e.test(t) ? (r.$setValidity("pattern", !0), t) : (r.$setValidity("pattern", !1), n)
                };
            if (c && (c.match(/^\/(.*)\/$/) ? (c = new RegExp(c.substr(1, c.length - 2)), l = function (e) {
                return d(c, e)
            }) : l = function (t) {
                var n = e.$eval(c);
                if (!n || !n.test) throw new Error("Expected " + c + " to be a RegExp but was " + n);
                return d(n, t)
            }, r.$formatters.push(l), r.$parsers.push(l)), i.ngMinlength) {
                var p = f(i.ngMinlength),
                    h = function (e) {
                        return !Dn(e) && e.length < p ? (r.$setValidity("minlength", !1), n) : (r.$setValidity("minlength", !0), e)
                    };
                r.$parsers.push(h), r.$formatters.push(h)
            }
            if (i.ngMaxlength) {
                var m = f(i.ngMaxlength),
                    g = function (e) {
                        return !Dn(e) && e.length > m ? (r.$setValidity("maxlength", !1), n) : (r.$setValidity("maxlength", !0), e)
                    };
                r.$parsers.push(g), r.$formatters.push(g)
            }
        }

        function Fn(e, t, i, r, o, a) {
            if (Hn(e, t, i, r, o, a), r.$parsers.push(function (e) {
                var t = Dn(e);
                return t || zi.test(e) ? (r.$setValidity("number", !0), "" === e ? null : t ? e : parseFloat(e)) : (r.$setValidity("number", !1), n)
            }), r.$formatters.push(function (e) {
                return Dn(e) ? "" : "" + e
            }), i.min) {
                var s = parseFloat(i.min),
                    u = function (e) {
                        return !Dn(e) && s > e ? (r.$setValidity("min", !1), n) : (r.$setValidity("min", !0), e)
                    };
                r.$parsers.push(u), r.$formatters.push(u)
            }
            if (i.max) {
                var l = parseFloat(i.max),
                    c = function (e) {
                        return !Dn(e) && e > l ? (r.$setValidity("max", !1), n) : (r.$setValidity("max", !0), e)
                    };
                r.$parsers.push(c), r.$formatters.push(c)
            }
            r.$formatters.push(function (e) {
                return Dn(e) || b(e) ? (r.$setValidity("number", !0), e) : (r.$setValidity("number", !1), n)
            })
        }

        function qn(e, t, i, r, o, a) {
            Hn(e, t, i, r, o, a);
            var s = function (e) {
                return Dn(e) || Bi.test(e) ? (r.$setValidity("url", !0), e) : (r.$setValidity("url", !1), n)
            };
            r.$formatters.push(s), r.$parsers.push(s)
        }

        function Pn(e, t, i, r, o, a) {
            Hn(e, t, i, r, o, a);
            var s = function (e) {
                return Dn(e) || Ii.test(e) ? (r.$setValidity("email", !0), e) : (r.$setValidity("email", !1), n)
            };
            r.$formatters.push(s), r.$parsers.push(s)
        }

        function Rn(e, t, n, i) {
            g(n.name) && t.attr("name", l()), t.bind("click", function () {
                t[0].checked && e.$apply(function () {
                    i.$setViewValue(n.value)
                })
            }), i.$render = function () {
                var e = n.value;
                t[0].checked = e == i.$viewValue
            }, n.$observe("value", i.$render)
        }

        function Bn(e, t, n, i) {
            var r = n.ngTrueValue,
                o = n.ngFalseValue;
            $(r) || (r = !0), $(o) || (o = !1), t.bind("click", function () {
                e.$apply(function () {
                    i.$setViewValue(t[0].checked)
                })
            }), i.$render = function () {
                t[0].checked = i.$viewValue
            }, i.$formatters.push(function (e) {
                return e === r
            }), i.$parsers.push(function (e) {
                return e ? r : o
            })
        }

        function In(e, t) {
            return e = "ngClass" + e, On(function (i, r, o) {
                function a(e) {
                    (t === !0 || i.$index % 2 === t) && (l && e !== l && s(l), u(e)), l = e
                }

                function s(e) {
                    y(e) && !w(e) && (e = A(e, function (e, t) {
                        return e ? t : void 0
                    })), r.removeClass(w(e) ? e.join(" ") : e)
                }

                function u(e) {
                    y(e) && !w(e) && (e = A(e, function (e, t) {
                        return e ? t : void 0
                    })), e && r.addClass(w(e) ? e.join(" ") : e)
                }
                var l = n;
                i.$watch(o[e], a, !0), o.$observe("class", function () {
                    var t = i.$eval(o[e]);
                    a(t, t)
                }), "ngClass" !== e && i.$watch("$index", function (n, r) {
                    var a = n % 2;
                    a !== r % 2 && (a == t ? u(i.$eval(o[e])) : s(i.$eval(o[e])))
                })
            })
        }
        var zn = function (e) {
                return $(e) ? e.toLowerCase() : e
            },
            Wn = function (e) {
                return $(e) ? e.toUpperCase() : e
            },
            Un = function (e) {
                return $(e) ? e.replace(/[A-Z]/g, function (e) {
                    return i(32 | e.charCodeAt(0))
                }) : e
            },
            Xn = function (e) {
                return $(e) ? e.replace(/[a-z]/g, function (e) {
                    return i(-33 & e.charCodeAt(0))
                }) : e
            };
        "i" !== "I".toLowerCase() && (zn = Un, Wn = Xn);
        var Vn, Yn, Qn, Jn, Kn = f((/msie (\d+)/.exec(zn(navigator.userAgent)) || [])[1]),
            Gn = [].slice,
            Zn = [].push,
            ei = Object.prototype.toString,
            ti = e.angular || (e.angular = {}),
            ni = ["0", "0", "0"];
        p.$inject = [], h.$inject = [], Jn = 9 > Kn ? function (e) {
            return e = e.nodeName ? e : e[0], e.scopeName && "HTML" != e.scopeName ? Wn(e.scopeName + ":" + e.nodeName) : e.nodeName
        } : function (e) {
            return e.nodeName ? e.nodeName : e[0].nodeName
        };
        var ii = /[A-Z]/g,
            ri = {
                full: "1.0.5",
                major: 1,
                minor: 0,
                dot: 5,
                codeName: "flatulent-propulsion"
            },
            oi = ot.cache = {},
            ai = ot.expando = "ng-" + (new Date).getTime(),
            si = 1,
            ui = e.document.addEventListener ? function (e, t, n) {
                e.addEventListener(t, n, !1)
            } : function (e, t, n) {
                e.attachEvent("on" + t, n)
            },
            li = e.document.removeEventListener ? function (e, t, n) {
                e.removeEventListener(t, n, !1)
            } : function (e, t, n) {
                e.detachEvent("on" + t, n)
            },
            ci = /([\:\-\_]+(.))/g,
            fi = /^moz([A-Z])/,
            di = ot.prototype = {
                ready: function (t) {
                    function n() {
                        i || (i = !0, t())
                    }
                    var i = !1;
                    this.bind("DOMContentLoaded", n), ot(e).bind("load", n)
                },
                toString: function () {
                    var e = [];
                    return o(this, function (t) {
                        e.push("" + t)
                    }), "[" + e.join(", ") + "]"
                },
                eq: function (e) {
                    return e >= 0 ? Vn(this[e]) : Vn(this[this.length + e])
                },
                length: 0,
                push: Zn,
                sort: [].sort,
                splice: [].splice
            },
            pi = {};
        o("multiple,selected,checked,disabled,readOnly,required".split(","), function (e) {
            pi[zn(e)] = e
        });
        var hi = {};
        o("input,select,option,textarea,button,form".split(","), function (e) {
            hi[Wn(e)] = !0
        }), o({
            data: ft,
            inheritedData: vt,
            scope: function (e) {
                return vt(e, "$scope")
            },
            controller: gt,
            injector: function (e) {
                return vt(e, "$injector")
            },
            removeAttr: function (e, t) {
                e.removeAttribute(t)
            },
            hasClass: dt,
            css: function (e, t, i) {
                if (t = it(t), !v(i)) {
                    var r;
                    return 8 >= Kn && (r = e.currentStyle && e.currentStyle[t], "" === r && (r = "auto")), r = r || e.style[t], 8 >= Kn && (r = "" === r ? n : r), r
                }
                e.style[t] = i
            },
            attr: function (e, t, i) {
                var r = zn(t);
                if (pi[r]) {
                    if (!v(i)) return e[t] || (e.attributes.getNamedItem(t) || p).specified ? r : n;
                    i ? (e[t] = !0, e.setAttribute(t, r)) : (e[t] = !1, e.removeAttribute(r))
                } else if (v(i)) e.setAttribute(t, i);
                else if (e.getAttribute) {
                    var o = e.getAttribute(t, 2);
                    return null === o ? n : o
                }
            },
            prop: function (e, t, n) {
                return v(n) ? (e[t] = n, void 0) : e[t]
            },
            text: c(9 > Kn ? function (e, t) {
                if (1 == e.nodeType) {
                    if (g(t)) return e.innerText;
                    e.innerText = t
                } else {
                    if (g(t)) return e.nodeValue;
                    e.nodeValue = t
                }
            } : function (e, t) {
                return g(t) ? e.textContent : (e.textContent = t, void 0)
            }, {
                $dv: ""
            }),
            val: function (e, t) {
                return g(t) ? e.value : (e.value = t, void 0)
            },
            html: function (e, t) {
                if (g(t)) return e.innerHTML;
                for (var n = 0, i = e.childNodes; n < i.length; n++) st(i[n]);
                e.innerHTML = t
            }
        }, function (e, t) {
            ot.prototype[t] = function (t, i) {
                var r, o;
                if ((2 == e.length && e !== dt && e !== gt ? t : i) !== n) {
                    for (r = 0; r < this.length; r++) e(this[r], t, i);
                    return this
                }
                if (y(t)) {
                    for (r = 0; r < this.length; r++)
                        if (e === ft) e(this[r], t);
                        else
                            for (o in t) e(this[r], o, t[o]);
                    return this
                }
                return this.length ? e(this[0], t, i) : e.$dv
            }
        }), o({
            removeData: lt,
            dealoc: st,
            bind: function _r(e, t, n) {
                var i = ct(e, "events"),
                    r = ct(e, "handle");
                i || ct(e, "events", i = {}), r || ct(e, "handle", r = $t(e, i)), o(t.split(" "), function (t) {
                    var o = i[t];
                    if (!o) {
                        if ("mouseenter" == t || "mouseleave" == t) {
                            var a = 0;
                            i.mouseenter = [], i.mouseleave = [], _r(e, "mouseover", function (e) {
                                a++, 1 == a && r(e, "mouseenter")
                            }), _r(e, "mouseout", function (e) {
                                a--, 0 == a && r(e, "mouseleave")
                            })
                        } else ui(e, t, r), i[t] = [];
                        o = i[t]
                    }
                    o.push(n)
                })
            },
            unbind: ut,
            replaceWith: function (e, t) {
                var n, i = e.parentNode;
                st(e), o(new ot(t), function (t) {
                    n ? i.insertBefore(t, n.nextSibling) : i.replaceChild(t, e), n = t
                })
            },
            children: function (e) {
                var t = [];
                return o(e.childNodes, function (e) {
                    1 === e.nodeType && t.push(e)
                }), t
            },
            contents: function (e) {
                return e.childNodes || []
            },
            append: function (e, t) {
                o(new ot(t), function (t) {
                    1 === e.nodeType && e.appendChild(t)
                })
            },
            prepend: function (e, t) {
                if (1 === e.nodeType) {
                    var n = e.firstChild;
                    o(new ot(t), function (t) {
                        n ? e.insertBefore(t, n) : (e.appendChild(t), n = t)
                    })
                }
            },
            wrap: function (e, t) {
                t = Vn(t)[0];
                var n = e.parentNode;
                n && n.replaceChild(t, e), t.appendChild(e)
            },
            remove: function (e) {
                st(e);
                var t = e.parentNode;
                t && t.removeChild(e)
            },
            after: function (e, t) {
                var n = e,
                    i = e.parentNode;
                o(new ot(t), function (e) {
                    i.insertBefore(e, n.nextSibling), n = e
                })
            },
            addClass: ht,
            removeClass: pt,
            toggleClass: function (e, t, n) {
                g(n) && (n = !dt(e, t)), (n ? ht : pt)(e, t)
            },
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            next: function (e) {
                if (e.nextElementSibling) return e.nextElementSibling;
                for (var t = e.nextSibling; null != t && 1 !== t.nodeType;) t = t.nextSibling;
                return t
            },
            find: function (e, t) {
                return e.getElementsByTagName(t)
            },
            clone: at,
            triggerHandler: function (e, t) {
                var n = (ct(e, "events") || {})[t];
                o(n, function (t) {
                    t.call(e, null)
                })
            }
        }, function (e, t) {
            ot.prototype[t] = function (t, i) {
                for (var r, o = 0; o < this.length; o++) r == n ? (r = e(this[o], t, i), r !== n && (r = Vn(r))) : mt(r, e(this[o], t, i));
                return r == n ? this : r
            }
        }), xt.prototype = {
            put: function (e, t) {
                this[bt(e)] = t
            },
            get: function (e) {
                return this[bt(e)]
            },
            remove: function (e) {
                var t = this[e = bt(e)];
                return delete this[e], t
            }
        }, wt.prototype = {
            push: function (e, t) {
                var n = this[e = bt(e)];
                n ? n.push(t) : this[e] = [t]
            },
            shift: function (e) {
                var t = this[e = bt(e)];
                return t ? 1 == t.length ? (delete this[e], t[0]) : t.shift() : void 0
            },
            peek: function (e) {
                var t = this[bt(e)];
                return t ? t[0] : void 0
            }
        };
        var mi = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
            gi = /,/,
            vi = /^\s*(_?)(\S+?)\1\s*$/,
            yi = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
            $i = "Non-assignable model expression: ";
        Nt.$inject = ["$provide"];
        var bi = /^(x[\:\-_]|data[\:\-_])/i,
            xi = /^([^:]+):\/\/(\w+:{0,1}\w*@)?([\w\.-]*)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/,
            wi = /^([^\?#]*)?(\?([^#]*))?(#(.*))?$/,
            Ci = wi,
            ki = {
                http: 80,
                https: 443,
                ftp: 21
            };
        It.prototype = {
            $$replace: !1,
            absUrl: Ut("$$absUrl"),
            url: function (e, t) {
                if (g(e)) return this.$$url;
                var n = wi.exec(e);
                return n[1] && this.path(decodeURIComponent(n[1])), (n[2] || n[1]) && this.search(n[3] || ""), this.hash(n[5] || "", t), this
            },
            protocol: Ut("$$protocol"),
            host: Ut("$$host"),
            port: Ut("$$port"),
            path: Xt("$$path", function (e) {
                return "/" == e.charAt(0) ? e : "/" + e
            }),
            search: function (e, t) {
                return g(e) ? this.$$search : (v(t) ? null === t ? delete this.$$search[e] : this.$$search[e] = t : this.$$search = $(e) ? W(e) : e, this.$$compose(), this)
            },
            hash: Xt("$$hash", h),
            replace: function () {
                return this.$$replace = !0, this
            }
        }, zt.prototype = d(It.prototype), Wt.prototype = d(zt.prototype);
        var Ti = {
                "null": function () {
                    return null
                },
                "true": function () {
                    return !0
                },
                "false": function () {
                    return !1
                },
                undefined: p,
                "+": function (e, t, i, r) {
                    return i = i(e, t), r = r(e, t), v(i) ? v(r) ? i + r : i : v(r) ? r : n
                },
                "-": function (e, t, n, i) {
                    return n = n(e, t), i = i(e, t), (v(n) ? n : 0) - (v(i) ? i : 0)
                },
                "*": function (e, t, n, i) {
                    return n(e, t) * i(e, t)
                },
                "/": function (e, t, n, i) {
                    return n(e, t) / i(e, t)
                },
                "%": function (e, t, n, i) {
                    return n(e, t) % i(e, t)
                },
                "^": function (e, t, n, i) {
                    return n(e, t) ^ i(e, t)
                },
                "=": p,
                "==": function (e, t, n, i) {
                    return n(e, t) == i(e, t)
                },
                "!=": function (e, t, n, i) {
                    return n(e, t) != i(e, t)
                },
                "<": function (e, t, n, i) {
                    return n(e, t) < i(e, t)
                },
                ">": function (e, t, n, i) {
                    return n(e, t) > i(e, t)
                },
                "<=": function (e, t, n, i) {
                    return n(e, t) <= i(e, t)
                },
                ">=": function (e, t, n, i) {
                    return n(e, t) >= i(e, t)
                },
                "&&": function (e, t, n, i) {
                    return n(e, t) && i(e, t)
                },
                "||": function (e, t, n, i) {
                    return n(e, t) || i(e, t)
                },
                "&": function (e, t, n, i) {
                    return n(e, t) & i(e, t)
                },
                "|": function (e, t, n, i) {
                    return i(e, t)(e, t, n(e, t))
                },
                "!": function (e, t, n) {
                    return !n(e, t)
                }
            },
            Si = {
                n: "\n",
                f: "\f",
                r: "\r",
                t: "	",
                v: "",
                "'": "'",
                '"': '"'
            },
            Ei = {},
            ji = e.XMLHttpRequest || function () {
                try {
                    return new ActiveXObject("Msxml2.XMLHTTP.6.0")
                } catch (e) {}
                try {
                    return new ActiveXObject("Msxml2.XMLHTTP.3.0")
                } catch (t) {}
                try {
                    return new ActiveXObject("Msxml2.XMLHTTP")
                } catch (n) {}
                throw new Error("This browser does not support XMLHttpRequest.")
            };
        $n.$inject = ["$provide"], xn.$inject = ["$locale"], wn.$inject = ["$locale"];
        var Ai = ".",
            Ni = {
                yyyy: Tn("FullYear", 4),
                yy: Tn("FullYear", 2, 0, !0),
                y: Tn("FullYear", 1),
                MMMM: Sn("Month"),
                MMM: Sn("Month", !0),
                MM: Tn("Month", 2, 1),
                M: Tn("Month", 1, 1),
                dd: Tn("Date", 2),
                d: Tn("Date", 1),
                HH: Tn("Hours", 2),
                H: Tn("Hours", 1),
                hh: Tn("Hours", 2, -12),
                h: Tn("Hours", 1, -12),
                mm: Tn("Minutes", 2),
                m: Tn("Minutes", 1),
                ss: Tn("Seconds", 2),
                s: Tn("Seconds", 1),
                EEEE: Sn("Day"),
                EEE: Sn("Day", !0),
                a: jn,
                Z: En
            },
            Mi = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
            _i = /^\d+$/;
        An.$inject = ["$locale"];
        var Oi = m(zn),
            Li = m(Wn);
        _n.$inject = ["$parse"];
        var Di = m({
                restrict: "E",
                compile: function (e, n) {
                    return 8 >= Kn && (n.href || n.name || n.$set("href", ""), e.append(t.createComment("IE fix"))),
                        function (e, t) {
                            t.bind("click", function (e) {
                                t.attr("href") || e.preventDefault()
                            })
                        }
                }
            }),
            Hi = {};
        o(pi, function (e, t) {
            var n = Mt("ng-" + t);
            Hi[n] = function () {
                return {
                    priority: 100,
                    compile: function () {
                        return function (e, i, r) {
                            e.$watch(r[n], function (e) {
                                r.$set(t, !!e)
                            })
                        }
                    }
                }
            }
        }), o(["src", "href"], function (e) {
            var t = Mt("ng-" + e);
            Hi[t] = function () {
                return {
                    priority: 99,
                    link: function (n, i, r) {
                        r.$observe(t, function (t) {
                            t && (r.$set(e, t), Kn && i.prop(e, r[e]))
                        })
                    }
                }
            }
        });
        var Fi = {
            $addControl: p,
            $removeControl: p,
            $setValidity: p,
            $setDirty: p
        };
        Ln.$inject = ["$element", "$attrs", "$scope"];
        var qi = function (e) {
                return ["$timeout",
                    function (t) {
                        var i = {
                            name: "form",
                            restrict: "E",
                            controller: Ln,
                            compile: function () {
                                return {
                                    pre: function (e, i, r, o) {
                                        if (!r.action) {
                                            var a = function (e) {
                                                e.preventDefault ? e.preventDefault() : e.returnValue = !1
                                            };
                                            ui(i[0], "submit", a), i.bind("$destroy", function () {
                                                t(function () {
                                                    li(i[0], "submit", a)
                                                }, 0, !1)
                                            })
                                        }
                                        var s = i.parent().controller("form"),
                                            u = r.name || r.ngForm;
                                        u && (e[u] = o), s && i.bind("$destroy", function () {
                                            s.$removeControl(o), u && (e[u] = n), c(o, Fi)
                                        })
                                    }
                                }
                            }
                        };
                        return e ? c(O(i), {
                            restrict: "EAC"
                        }) : i
                    }
                ]
            },
            Pi = qi(),
            Ri = qi(!0),
            Bi = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
            Ii = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
            zi = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
            Wi = {
                text: Hn,
                number: Fn,
                url: qn,
                email: Pn,
                radio: Rn,
                checkbox: Bn,
                hidden: p,
                button: p,
                submit: p,
                reset: p
            },
            Ui = ["$browser", "$sniffer",
                function (e, t) {
                    return {
                        restrict: "E",
                        require: "?ngModel",
                        link: function (n, i, r, o) {
                            o && (Wi[zn(r.type)] || Wi.text)(n, i, r, o, t, e)
                        }
                    }
                }
            ],
            Xi = "ng-valid",
            Vi = "ng-invalid",
            Yi = "ng-pristine",
            Qi = "ng-dirty",
            Ji = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse",
                function (e, t, n, i, r) {
                    function a(e, t) {
                        t = t ? "-" + J(t, "-") : "", i.removeClass((e ? Vi : Xi) + t).addClass((e ? Xi : Vi) + t)
                    }
                    this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$name = n.name;
                    var s = r(n.ngModel),
                        u = s.assign;
                    if (!u) throw Error($i + n.ngModel + " (" + z(i) + ")");
                    this.$render = p;
                    var l = i.inheritedData("$formController") || Fi,
                        c = 0,
                        f = this.$error = {};
                    i.addClass(Yi), a(!0), this.$setValidity = function (e, t) {
                        f[e] !== !t && (t ? (f[e] && c--, c || (a(!0), this.$valid = !0, this.$invalid = !1)) : (a(!1), this.$invalid = !0, this.$valid = !1, c++), f[e] = !t, a(t, e), l.$setValidity(e, t, this))
                    }, this.$setViewValue = function (n) {
                        this.$viewValue = n, this.$pristine && (this.$dirty = !0, this.$pristine = !1, i.removeClass(Yi).addClass(Qi), l.$setDirty()), o(this.$parsers, function (e) {
                            n = e(n)
                        }), this.$modelValue !== n && (this.$modelValue = n, u(e, n), o(this.$viewChangeListeners, function (e) {
                            try {
                                e()
                            } catch (n) {
                                t(n)
                            }
                        }))
                    };
                    var d = this;
                    e.$watch(function () {
                        var t = s(e);
                        if (d.$modelValue !== t) {
                            var n = d.$formatters,
                                i = n.length;
                            for (d.$modelValue = t; i--;) t = n[i](t);
                            d.$viewValue !== t && (d.$viewValue = t, d.$render())
                        }
                    })
                }
            ],
            Ki = function () {
                return {
                    require: ["ngModel", "^?form"],
                    controller: Ji,
                    link: function (e, t, n, i) {
                        var r = i[0],
                            o = i[1] || Fi;
                        o.$addControl(r), t.bind("$destroy", function () {
                            o.$removeControl(r)
                        })
                    }
                }
            },
            Gi = m({
                require: "ngModel",
                link: function (e, t, n, i) {
                    i.$viewChangeListeners.push(function () {
                        e.$eval(n.ngChange)
                    })
                }
            }),
            Zi = function () {
                return {
                    require: "?ngModel",
                    link: function (e, t, n, i) {
                        if (i) {
                            n.required = !0;
                            var r = function (e) {
                                return n.required && (Dn(e) || e === !1) ? (i.$setValidity("required", !1), void 0) : (i.$setValidity("required", !0), e)
                            };
                            i.$formatters.push(r), i.$parsers.unshift(r), n.$observe("required", function () {
                                r(i.$viewValue)
                            })
                        }
                    }
                }
            },
            er = function () {
                return {
                    require: "ngModel",
                    link: function (e, t, i, r) {
                        var a = /\/(.*)\//.exec(i.ngList),
                            s = a && new RegExp(a[1]) || i.ngList || ",",
                            u = function (e) {
                                var t = [];
                                return e && o(e.split(s), function (e) {
                                    e && t.push(E(e))
                                }), t
                            };
                        r.$parsers.push(u), r.$formatters.push(function (e) {
                            return w(e) ? e.join(", ") : n
                        })
                    }
                }
            },
            tr = /^(true|false|\d+)$/,
            nr = function () {
                return {
                    priority: 100,
                    compile: function (e, t) {
                        return tr.test(t.ngValue) ? function (e, t, n) {
                            n.$set("value", e.$eval(n.ngValue))
                        } : function (e, t, n) {
                            e.$watch(n.ngValue, function (e) {
                                n.$set("value", e, !1)
                            })
                        }
                    }
                }
            },
            ir = On(function (e, t, i) {
                t.addClass("ng-binding").data("$binding", i.ngBind), e.$watch(i.ngBind, function (e) {
                    t.text(e == n ? "" : e)
                })
            }),
            rr = ["$interpolate",
                function (e) {
                    return function (t, n, i) {
                        var r = e(n.attr(i.$attr.ngBindTemplate));
                        n.addClass("ng-binding").data("$binding", r), i.$observe("ngBindTemplate", function (e) {
                            n.text(e)
                        })
                    }
                }
            ],
            or = [

                function () {
                    return function (e, t, n) {
                        t.addClass("ng-binding").data("$binding", n.ngBindHtmlUnsafe), e.$watch(n.ngBindHtmlUnsafe, function (e) {
                            t.html(e || "")
                        })
                    }
                }
            ],
            ar = In("", !0),
            sr = In("Odd", 0),
            ur = In("Even", 1),
            lr = On({
                compile: function (e, t) {
                    t.$set("ngCloak", n), e.removeClass("ng-cloak")
                }
            }),
            cr = [

                function () {
                    return {
                        scope: !0,
                        controller: "@"
                    }
                }
            ],
            fr = ["$sniffer",
                function (e) {
                    return {
                        priority: 1e3,
                        compile: function () {
                            e.csp = !0
                        }
                    }
                }
            ],
            dr = {};
        o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave".split(" "), function (e) {
            var t = Mt("ng-" + e);
            dr[t] = ["$parse",
                function (n) {
                    return function (i, r, o) {
                        var a = n(o[t]);
                        r.bind(zn(e), function (e) {
                            i.$apply(function () {
                                a(i, {
                                    $event: e
                                })
                            })
                        })
                    }
                }
            ]
        });
        var pr = On(function (e, t, n) {
                t.bind("submit", function () {
                    e.$apply(n.ngSubmit)
                })
            }),
            hr = ["$http", "$templateCache", "$anchorScroll", "$compile",
                function (e, t, n, i) {
                    return {
                        restrict: "ECA",
                        terminal: !0,
                        compile: function (r, o) {
                            var a = o.ngInclude || o.src,
                                s = o.onload || "",
                                u = o.autoscroll;
                            return function (r, o) {
                                var l, c = 0,
                                    f = function () {
                                        l && (l.$destroy(), l = null), o.html("")
                                    };
                                r.$watch(a, function (a) {
                                    var d = ++c;
                                    a ? e.get(a, {
                                        cache: t
                                    }).success(function (e) {
                                        d === c && (l && l.$destroy(), l = r.$new(), o.html(e), i(o.contents())(l), !v(u) || u && !r.$eval(u) || n(), l.$emit("$includeContentLoaded"), r.$eval(s))
                                    }).error(function () {
                                        d === c && f()
                                    }) : f()
                                })
                            }
                        }
                    }
                }
            ],
            mr = On({
                compile: function () {
                    return {
                        pre: function (e, t, n) {
                            e.$eval(n.ngInit)
                        }
                    }
                }
            }),
            gr = On({
                terminal: !0,
                priority: 1e3
            }),
            vr = ["$locale", "$interpolate",
                function (e, t) {
                    var n = /{}/g;
                    return {
                        restrict: "EA",
                        link: function (i, r, a) {
                            var s = a.count,
                                u = r.attr(a.$attr.when),
                                l = a.offset || 0,
                                c = i.$eval(u),
                                f = {},
                                d = t.startSymbol(),
                                p = t.endSymbol();
                            o(c, function (e, i) {
                                f[i] = t(e.replace(n, d + s + "-" + l + p))
                            }), i.$watch(function () {
                                var t = parseFloat(i.$eval(s));
                                return isNaN(t) ? "" : (c[t] || (t = e.pluralCat(t - l)), f[t](i, r, !0))
                            }, function (e) {
                                r.text(e)
                            })
                        }
                    }
                }
            ],
            yr = On({
                transclude: "element",
                priority: 1e3,
                terminal: !0,
                compile: function (e, t, n) {
                    return function (e, t, i) {
                        var r, o, a, s, u = i.ngRepeat,
                            l = u.match(/^\s*(.+)\s+in\s+(.*)\s*$/);
                        if (!l) throw Error("Expected ngRepeat in form of '_item_ in _collection_' but got '" + u + "'.");
                        if (r = l[1], o = l[2], l = r.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/), !l) throw Error("'item' in 'item in collection' should be identifier or (key, value) but got '" + r + "'.");
                        a = l[3] || l[1], s = l[2];
                        var c = new wt;
                        e.$watch(function (e) {
                            var i, r, u, l, f, d, p, h, m = e.$eval(o),
                                g = t,
                                v = new wt;
                            if (w(m)) p = m || [];
                            else {
                                p = [];
                                for (f in m) m.hasOwnProperty(f) && "$" != f.charAt(0) && p.push(f);
                                p.sort()
                            }
                            for (u = p.length, i = 0, r = p.length; r > i; i++) f = m === p ? i : p[i], d = m[f], h = c.shift(d), h ? (l = h.scope, v.push(d, h), i === h.index ? g = h.element : (h.index = i, g.after(h.element), g = h.element)) : l = e.$new(), l[a] = d, s && (l[s] = f), l.$index = i, l.$first = 0 === i, l.$last = i === u - 1, l.$middle = !(l.$first || l.$last), h || n(l, function (e) {
                                g.after(e), h = {
                                    scope: l,
                                    element: g = e,
                                    index: i
                                }, v.push(d, h)
                            });
                            for (f in c)
                                if (c.hasOwnProperty(f))
                                    for (p = c[f]; p.length;) d = p.pop(), d.element.remove(), d.scope.$destroy();
                            c = v
                        })
                    }
                }
            }),
            $r = On(function (e, t, n) {
                e.$watch(n.ngShow, function (e) {
                    t.css("display", I(e) ? "" : "none")
                })
            }),
            br = On(function (e, t, n) {
                e.$watch(n.ngHide, function (e) {
                    t.css("display", I(e) ? "none" : "")
                })
            }),
            xr = On(function (e, t, n) {
                e.$watch(n.ngStyle, function (e, n) {
                    n && e !== n && o(n, function (e, n) {
                        t.css(n, "")
                    }), e && t.css(e)
                }, !0)
            }),
            wr = m({
                restrict: "EA",
                require: "ngSwitch",
                controller: ["$scope",
                    function () {
                        this.cases = {}
                    }
                ],
                link: function (e, t, n, i) {
                    var r, o, a, s = n.ngSwitch || n.on;
                    e.$watch(s, function (s) {
                        o && (a.$destroy(), o.remove(), o = a = null), (r = i.cases["!" + s] || i.cases["?"]) && (e.$eval(n.change), a = e.$new(), r(a, function (e) {
                            o = e, t.append(e)
                        }))
                    })
                }
            }),
            Cr = On({
                transclude: "element",
                priority: 500,
                require: "^ngSwitch",
                compile: function (e, t, n) {
                    return function (e, i, r, o) {
                        o.cases["!" + t.ngSwitchWhen] = n
                    }
                }
            }),
            kr = On({
                transclude: "element",
                priority: 500,
                require: "^ngSwitch",
                compile: function (e, t, n) {
                    return function (e, t, i, r) {
                        r.cases["?"] = n
                    }
                }
            }),
            Tr = On({
                controller: ["$transclude", "$element",
                    function (e, t) {
                        e(function (e) {
                            t.append(e)
                        })
                    }
                ]
            }),
            Sr = ["$http", "$templateCache", "$route", "$anchorScroll", "$compile", "$controller",
                function (e, t, n, i, r, o) {
                    return {
                        restrict: "ECA",
                        terminal: !0,
                        link: function (e, t, a) {
                            function s() {
                                c && (c.$destroy(), c = null)
                            }

                            function u() {
                                t.html(""), s()
                            }

                            function l() {
                                var a = n.current && n.current.locals,
                                    l = a && a.$template;
                                if (l) {
                                    t.html(l), s();
                                    var d, p = r(t.contents()),
                                        h = n.current;
                                    c = h.scope = e.$new(), h.controller && (a.$scope = c, d = o(h.controller, a), t.children().data("$ngControllerController", d)), p(c), c.$emit("$viewContentLoaded"), c.$eval(f), i()
                                } else u()
                            }
                            var c, f = a.onload || "";
                            e.$on("$routeChangeSuccess", l), l()
                        }
                    }
                }
            ],
            Er = ["$templateCache",
                function (e) {
                    return {
                        restrict: "E",
                        terminal: !0,
                        compile: function (t, n) {
                            if ("text/ng-template" == n.type) {
                                var i = n.id,
                                    r = t[0].text;
                                e.put(i, r)
                            }
                        }
                    }
                }
            ],
            jr = m({
                terminal: !0
            }),
            Ar = ["$compile", "$parse",
                function (e, i) {
                    var r = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/,
                        s = {
                            $setViewValue: p
                        };
                    return {
                        restrict: "E",
                        require: ["select", "?ngModel"],
                        controller: ["$element", "$scope", "$attrs",
                            function (e, t, n) {
                                var i, r, o = this,
                                    a = {},
                                    u = s;
                                o.databound = n.ngModel, o.init = function (e, t, n) {
                                    u = e, i = t, r = n
                                }, o.addOption = function (t) {
                                    a[t] = !0, u.$viewValue == t && (e.val(t), r.parent() && r.remove())
                                }, o.removeOption = function (e) {
                                    this.hasOption(e) && (delete a[e], u.$viewValue == e && this.renderUnknownOption(e))
                                }, o.renderUnknownOption = function (t) {
                                    var n = "? " + bt(t) + " ?";
                                    r.val(n), e.prepend(r), e.val(n), r.prop("selected", !0)
                                }, o.hasOption = function (e) {
                                    return a.hasOwnProperty(e)
                                }, t.$on("$destroy", function () {
                                    o.renderUnknownOption = p
                                })
                            }
                        ],
                        link: function (s, u, l, c) {
                            function f(e, t, n, i) {
                                n.$render = function () {
                                    var e = n.$viewValue;
                                    i.hasOption(e) ? (k.parent() && k.remove(), t.val(e), "" === e && h.prop("selected", !0)) : g(e) && h ? t.val("") : i.renderUnknownOption(e)
                                }, t.bind("change", function () {
                                    e.$apply(function () {
                                        k.parent() && k.remove(), n.$setViewValue(t.val())
                                    })
                                })
                            }

                            function d(e, t, n) {
                                var i;
                                n.$render = function () {
                                    var e = new xt(n.$viewValue);
                                    o(t.find("option"), function (t) {
                                        t.selected = v(e.get(t.value))
                                    })
                                }, e.$watch(function () {
                                    D(i, n.$viewValue) || (i = O(n.$viewValue), n.$render())
                                }), t.bind("change", function () {
                                    e.$apply(function () {
                                        var e = [];
                                        o(t.find("option"), function (t) {
                                            t.selected && e.push(t.value)
                                        }), n.$setViewValue(e)
                                    })
                                })
                            }

                            function p(t, o, s) {
                                function u() {
                                    var e, i, r, u, l, v, y, b, k, T, S, E, j, A, N = {
                                            "": []
                                        },
                                        M = [""],
                                        _ = s.$modelValue,
                                        O = m(t) || [],
                                        L = d ? a(O) : O,
                                        D = {},
                                        H = !1;
                                    for ($ ? H = new xt(_) : (null === _ || x) && (N[""].push({
                                        selected: null === _,
                                        id: "",
                                        label: ""
                                    }), H = !0), T = 0; b = L.length, b > T; T++) D[f] = O[d ? D[d] = L[T] : T], e = p(t, D) || "", (i = N[e]) || (i = N[e] = [], M.push(e)), $ ? S = H.remove(h(t, D)) != n : (S = _ === h(t, D), H = H || S), A = c(t, D), A = A === n ? "" : A, i.push({
                                        id: d ? L[T] : T,
                                        label: A,
                                        selected: S
                                    });
                                    for ($ || H || N[""].unshift({
                                        id: "?",
                                        label: "",
                                        selected: !0
                                    }), k = 0, y = M.length; y > k; k++) {
                                        for (e = M[k], i = N[e], g.length <= k ? (u = {
                                            element: C.clone().attr("label", e),
                                            label: i.label
                                        }, l = [u], g.push(l), o.append(u.element)) : (l = g[k], u = l[0], u.label != e && u.element.attr("label", u.label = e)), E = null, T = 0, b = i.length; b > T; T++) r = i[T], (v = l[T + 1]) ? (E = v.element, v.label !== r.label && E.text(v.label = r.label), v.id !== r.id && E.val(v.id = r.id), v.element.selected !== r.selected && E.prop("selected", v.selected = r.selected)) : ("" === r.id && x ? j = x : (j = w.clone()).val(r.id).attr("selected", r.selected).text(r.label), l.push(v = {
                                            element: j,
                                            label: r.label,
                                            id: r.id,
                                            selected: r.selected
                                        }), E ? E.after(j) : u.element.append(j), E = j);
                                        for (T++; l.length > T;) l.pop().element.remove()
                                    }
                                    for (; g.length > k;) g.pop()[0].element.remove()
                                }
                                var l;
                                if (!(l = b.match(r))) throw Error("Expected ngOptions in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '" + b + "'.");
                                var c = i(l[2] || l[1]),
                                    f = l[4] || l[6],
                                    d = l[5],
                                    p = i(l[3] || ""),
                                    h = i(l[2] ? l[1] : f),
                                    m = i(l[7]),
                                    g = [
                                        [{
                                            element: o,
                                            label: ""
                                        }]
                                    ];
                                x && (e(x)(t), x.removeClass("ng-scope"), x.remove()), o.html(""), o.bind("change", function () {
                                    t.$apply(function () {
                                        var e, i, r, a, u, l, c, p, v = m(t) || [],
                                            y = {};
                                        if ($)
                                            for (r = [], l = 0, p = g.length; p > l; l++)
                                                for (e = g[l], u = 1, c = e.length; c > u; u++)(a = e[u].element)[0].selected && (i = a.val(), d && (y[d] = i), y[f] = v[i], r.push(h(t, y)));
                                        else i = o.val(), "?" == i ? r = n : "" == i ? r = null : (y[f] = v[i], d && (y[d] = i), r = h(t, y));
                                        s.$setViewValue(r)
                                    })
                                }), s.$render = u, t.$watch(u)
                            }
                            if (c[1]) {
                                for (var h, m = c[0], y = c[1], $ = l.multiple, b = l.ngOptions, x = !1, w = Vn(t.createElement("option")), C = Vn(t.createElement("optgroup")), k = w.clone(), T = 0, S = u.children(), E = S.length; E > T; T++)
                                    if ("" == S[T].value) {
                                        h = x = S.eq(T);
                                        break
                                    }
                                if (m.init(y, x, k), $ && (l.required || l.ngRequired)) {
                                    var j = function (e) {
                                        return y.$setValidity("required", !l.required || e && e.length), e
                                    };
                                    y.$parsers.push(j), y.$formatters.unshift(j), l.$observe("required", function () {
                                        j(y.$viewValue)
                                    })
                                }
                                b ? p(s, u, y) : $ ? d(s, u, y) : f(s, u, y, m)
                            }
                        }
                    }
                }
            ],
            Nr = ["$interpolate",
                function (e) {
                    var t = {
                        addOption: p,
                        removeOption: p
                    };
                    return {
                        restrict: "E",
                        priority: 100,
                        compile: function (n, i) {
                            if (g(i.value)) {
                                var r = e(n.text(), !0);
                                r || i.$set("value", n.text())
                            }
                            return function (e, n, i) {
                                var o = "$selectController",
                                    a = n.parent(),
                                    s = a.data(o) || a.parent().data(o);
                                s && s.databound ? n.prop("selected", !1) : s = t, r ? e.$watch(r, function (e, t) {
                                    i.$set("value", e), e !== t && s.removeOption(t), s.addOption(e)
                                }) : s.addOption(i.value), n.bind("$destroy", function () {
                                    s.removeOption(i.value)
                                })
                            }
                        }
                    }
                }
            ],
            Mr = m({
                restrict: "E",
                terminal: !0
            });
        K(), tt(ti), Vn(t).ready(function () {
            Y(t, Q)
        })
    }(window, document), angular.element(document).find("head").append('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak{display:none;}ng\\:form{display:block;}</style>');
var mod;
mod = angular.module("infinite-scroll", []), mod.directive("infiniteScroll", ["$rootScope", "$window", "$timeout",
        function (e, t, n) {
            return {
                link: function (i, r, o) {
                    var a, s, u, l;
                    return t = angular.element(t), u = 0, null != o.infiniteScrollDistance && i.$watch(o.infiniteScrollDistance, function (e) {
                        return u = parseInt(e, 10)
                    }), l = !0, a = !1, null != o.infiniteScrollDisabled && i.$watch(o.infiniteScrollDisabled, function (e) {
                        return l = !e, l && a ? (a = !1, s()) : void 0
                    }), s = function () {
                        var n, s, c, f;
                        return f = t.height() + t.scrollTop(), n = r.offset().top + r.height(), s = n - f, c = s <= t.height() * u, c && l ? e.$$phase ? i.$eval(o.infiniteScroll) : i.$apply(o.infiniteScroll) : c ? a = !0 : void 0
                    }, t.on("scroll", s), i.$on("$destroy", function () {
                        return t.off("scroll", s)
                    }), n(function () {
                        return o.infiniteScrollImmediateCheck ? i.$eval(o.infiniteScrollImmediateCheck) ? s() : void 0 : s()
                    }, 0)
                }
            }
        }
    ]),
    function (e, t) {
        "use strict";
        var n = e(document),
            i = t.Modernizr;
        e(document).ready(function () {
            e.fn.foundationAlerts ? n.foundationAlerts() : null, e.fn.foundationButtons ? n.foundationButtons() : null, e.fn.foundationAccordion ? n.foundationAccordion() : null, e.fn.foundationNavigation ? n.foundationNavigation() : null, e.fn.foundationTopBar ? n.foundationTopBar() : null, e.fn.foundationCustomForms ? n.foundationCustomForms() : null, e.fn.foundationMediaQueryViewer ? n.foundationMediaQueryViewer() : null, e.fn.foundationTabs ? n.foundationTabs({
                callback: e.foundation.customForms.appendCustomMarkup
            }) : null, e.fn.foundationTooltips ? n.foundationTooltips() : null, e.fn.foundationMagellan ? n.foundationMagellan() : null, e.fn.foundationClearing ? n.foundationClearing() : null, e.fn.placeholder ? e("input, textarea").placeholder() : null
        }), i.touch && !t.location.hash && e(t).load(function () {
            setTimeout(function () {
                t.scrollTo(0, 1)
            }, 0)
        }), e("document").on("click", "a[disabled]", function (e) {
            e.preventDefault()
        })
    }(jQuery, this),
/*
 * jQuery Reveal Plugin 1.1
 * www.ZURB.com
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
function (e) {
    "use strict";
    var t = !1;
    e(document).on("click", "[data-reveal-id]", function (t) {
        t.preventDefault();
        var n = e(this).attr("data-reveal-id");
        e("#" + n).reveal(e(this).data())
    }), e.fn.reveal = function (n) {
        var i = e(document),
            r = {
                animation: "fadeAndPop",
                animationSpeed: 300,
                closeOnBackgroundClick: !0,
                dismissModalClass: "close-reveal-modal",
                open: e.noop,
                opened: e.noop,
                close: e.noop,
                closed: e.noop
            };
        return n = e.extend({}, r, n), this.not(".reveal-modal.open").each(function () {
            function r() {
                g = !1
            }

            function o() {
                g = !0
            }

            function a() {
                var n = e(".reveal-modal.open");
                1 === n.length && (t = !0, n.trigger("reveal:close"))
            }

            function s() {
                g || (o(), a(), p.addClass("open"), "fadeAndPop" === n.animation && (y.open.top = i.scrollTop() - m, y.open.opacity = 0, p.css(y.open), v.fadeIn(n.animationSpeed / 2), p.delay(n.animationSpeed / 2).animate({
                    top: i.scrollTop() + h + "px",
                    opacity: 1
                }, n.animationSpeed, function () {
                    p.trigger("reveal:opened")
                })), "fade" === n.animation && (y.open.top = i.scrollTop() + h, y.open.opacity = 0, p.css(y.open), v.fadeIn(n.animationSpeed / 2), p.delay(n.animationSpeed / 2).animate({
                    opacity: 1
                }, n.animationSpeed, function () {
                    p.trigger("reveal:opened")
                })), "none" === n.animation && (y.open.top = i.scrollTop() + h, y.open.opacity = 1, p.css(y.open), v.css({
                    display: "block"
                }), p.trigger("reveal:opened")))
            }

            function u() {
                var e = p.find(".flex-video"),
                    t = e.find("iframe");
                t.length > 0 && (t.attr("src", t.data("src")), e.fadeIn(100))
            }

            function l() {
                g || (o(), p.removeClass("open"), "fadeAndPop" === n.animation && (p.animate({
                    top: i.scrollTop() - m + "px",
                    opacity: 0
                }, n.animationSpeed / 2, function () {
                    p.css(y.close)
                }), t ? p.trigger("reveal:closed") : v.delay(n.animationSpeed).fadeOut(n.animationSpeed, function () {
                    p.trigger("reveal:closed")
                })), "fade" === n.animation && (p.animate({
                    opacity: 0
                }, n.animationSpeed, function () {
                    p.css(y.close)
                }), t ? p.trigger("reveal:closed") : v.delay(n.animationSpeed).fadeOut(n.animationSpeed, function () {
                    p.trigger("reveal:closed")
                })), "none" === n.animation && (p.css(y.close), t || v.css({
                    display: "none"
                }), p.trigger("reveal:closed")), t = !1)
            }

            function c() {
                p.unbind(".reveal"), v.unbind(".reveal"), d.unbind(".reveal"), e("body").unbind(".reveal")
            }

            function f() {
                var e = p.find(".flex-video"),
                    t = e.find("iframe");
                t.length > 0 && (t.data("src", t.attr("src")), t.attr("src", ""), e.fadeOut(100))
            }
            var d, p = e(this),
                h = parseInt(p.css("top"), 10),
                m = p.height() + h,
                g = !1,
                v = e(".reveal-modal-bg"),
                y = {
                    open: {
                        top: 0,
                        opacity: 0,
                        visibility: "visible",
                        display: "block"
                    },
                    close: {
                        top: h,
                        opacity: 1,
                        visibility: "hidden",
                        display: "none"
                    }
                };
            0 === v.length && (v = e("<div />", {
                "class": "reveal-modal-bg"
            }).insertAfter(p), v.fadeTo("fast", .8)), p.bind("reveal:open.reveal", s), p.bind("reveal:open.reveal", u), p.bind("reveal:close.reveal", l), p.bind("reveal:closed.reveal", f), p.bind("reveal:opened.reveal reveal:closed.reveal", r), p.bind("reveal:closed.reveal", c), p.bind("reveal:open.reveal", n.open), p.bind("reveal:opened.reveal", n.opened), p.bind("reveal:close.reveal", n.close), p.bind("reveal:closed.reveal", n.closed), p.trigger("reveal:open"), d = e("." + n.dismissModalClass).bind("click.reveal", function () {
                p.trigger("reveal:close")
            }), n.closeOnBackgroundClick && (v.css({
                cursor: "pointer"
            }), v.bind("click.reveal", function () {
                p.trigger("reveal:close")
            })), e("body").bind("keyup.reveal", function (e) {
                27 === e.which && p.trigger("reveal:close")
            })
        })
    }
}(jQuery),
function (e, t, n) {
    "use strict";
    var i = {
            callback: e.noop,
            init: !1
        },
        r = {
            init: function (t) {
                return i = e.extend({}, t, i), this.each(function () {
                    i.init || r.events()
                })
            },
            events: function () {
                e(n).on("click.fndtn", ".tabs a", function (t) {
                    r.set_tab(e(this).parent("dd, li"), t)
                }), i.init = !0
            },
            set_tab: function (t, n) {
                var r = t.closest("dl, ul").find(".active"),
                    o = t.children("a").attr("href"),
                    a = /^#/.test(o),
                    s = e(o + "Tab");
                a && s.length > 0 && (n.preventDefault(), s.closest(".tabs-content").children("li").removeClass("active").hide(), s.css("display", "block").addClass("active")), r.removeClass("active"), t.addClass("active"), i.callback()
            }
        };
    e.fn.foundationTabs = function (t) {
        return r[t] ? r[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? (e.error("Method " + t + " does not exist on jQuery.foundationTabs"), void 0) : r.init.apply(this, arguments)
    }
}(jQuery, this, this.document),
function (e, t, n) {
    "use strict";
    var i = {
            bodyHeight: 0,
            selector: ".has-tip",
            additionalInheritableClasses: [],
            tooltipClass: ".tooltip",
            tipTemplate: function (e, t) {
                return '<span data-selector="' + e + '" class="' + i.tooltipClass.substring(1) + '">' + t + '<span class="nub"></span></span>'
            }
        },
        r = {
            init: function (t) {
                return i = e.extend(i, t), i.selector = i.targetClass ? i.targetClass : i.selector, this.each(function () {
                    var t = e("body");
                    Modernizr.touch ? (t.on("click.tooltip touchstart.tooltip touchend.tooltip", i.selector, function (t) {
                        t.preventDefault(), e(i.tooltipClass).hide(), r.showOrCreateTip(e(this))
                    }), t.on("click.tooltip touchstart.tooltip touchend.tooltip", i.tooltipClass, function (t) {
                        t.preventDefault(), e(this).fadeOut(150)
                    })) : t.on("mouseenter.tooltip mouseleave.tooltip", i.selector, function (t) {
                        var n = e(this);
                        "mouseenter" === t.type ? r.showOrCreateTip(n) : "mouseleave" === t.type && r.hide(n)
                    }), e(this).data("tooltips", !0)
                })
            },
            showOrCreateTip: function (e) {
                var t = r.getTip(e);
                t && t.length > 0 ? r.show(e) : r.create(e)
            },
            getTip: function (t) {
                var n = r.selector(t),
                    o = null;
                return n && (o = e("span[data-selector=" + n + "]" + i.tooltipClass)), o.length > 0 ? o : !1
            },
            selector: function (e) {
                var t = e.attr("id"),
                    i = e.data("selector");
                return t === n && i === n && (i = "tooltip" + Math.random().toString(36).substring(7), e.attr("data-selector", i)), t ? t : i
            },
            create: function (t) {
                var n = e(i.tipTemplate(r.selector(t), e("<div>").html(t.attr("title")).html())),
                    o = r.inheritable_classes(t);
                n.addClass(o).appendTo("body"), Modernizr.touch && n.append('<span class="tap-to-close">tap to close </span>'), t.removeAttr("title"), r.show(t)
            },
            reposition: function (n, i, r) {
                var o, a, s, u, l, c;
                i.css("visibility", "hidden").show(), o = n.data("width"), a = i.children(".nub"), s = a.outerHeight(), u = a.outerWidth(), c = function (e, t, n, i, r, o) {
                    return e.css({
                        top: t,
                        bottom: i,
                        left: r,
                        right: n,
                        width: o ? o : "auto"
                    }).end()
                }, c(i, n.offset().top + n.outerHeight() + 10, "auto", "auto", n.offset().left, o), c(a, -s, "auto", "auto", 10), e(t).width() < 767 ? (l = n.closest(".columns"), l.length < 0 && (l = e("body")), i.width(l.outerWidth() - 25).css("left", 15).addClass("tip-override"), c(a, -s, "auto", "auto", n.offset().left)) : r && r.indexOf("tip-top") > -1 ? (c(i, n.offset().top - i.outerHeight() - s, "auto", "auto", n.offset().left, o).removeClass("tip-override"), c(a, "auto", "auto", -s, "auto")) : r && r.indexOf("tip-left") > -1 ? (c(i, n.offset().top + n.outerHeight() / 2 - s, "auto", "auto", n.offset().left - i.outerWidth() - 10, o).removeClass("tip-override"), c(a, i.outerHeight() / 2 - s / 2, -s, "auto", "auto")) : r && r.indexOf("tip-right") > -1 && (c(i, n.offset().top + n.outerHeight() / 2 - s, "auto", "auto", n.offset().left + n.outerWidth() + 10, o).removeClass("tip-override"), c(a, i.outerHeight() / 2 - s / 2, "auto", "auto", -s)), i.css("visibility", "visible").hide()
            },
            inheritable_classes: function (t) {
                var n = ["tip-top", "tip-left", "tip-bottom", "tip-right", "noradius"].concat(i.additionalInheritableClasses),
                    r = t.attr("class"),
                    o = r ? e.map(r.split(" "), function (t) {
                        return -1 !== e.inArray(t, n) ? t : void 0
                    }).join(" ") : "";
                return e.trim(o)
            },
            show: function (e) {
                var t = r.getTip(e);
                r.reposition(e, t, e.attr("class")), t.fadeIn(150)
            },
            hide: function (e) {
                var t = r.getTip(e);
                t.fadeOut(150)
            },
            reload: function () {
                var t = e(this);
                return t.data("tooltips") ? t.foundationTooltips("destroy").foundationTooltips("init") : t.foundationTooltips("init")
            },
            destroy: function () {
                return this.each(function () {
                    e(t).off(".tooltip"), e(i.selector).off(".tooltip"), e(i.tooltipClass).each(function (t) {
                        e(e(i.selector).get(t)).attr("title", e(this).text())
                    }).remove()
                })
            }
        };
    e.fn.foundationTooltips = function (t) {
        return r[t] ? r[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? (e.error("Method " + t + " does not exist on jQuery.foundationTooltips"), void 0) : r.init.apply(this, arguments)
    }
}(jQuery, this),
function (e, t) {
    "use strict";
    var n = {
            index: 0,
            initialized: !1
        },
        i = {
            init: function (r) {
                return this.each(function () {
                    n = e.extend(n, r), n.$w = e(t), n.$topbar = e("nav.top-bar"), n.$section = n.$topbar.find("section"), n.$titlebar = n.$topbar.children("ul:first");
                    var o = e("<div class='top-bar-js-breakpoint'/>").appendTo("body");
                    n.breakPoint = o.width(), o.remove(), n.initialized || (i.assemble(), n.initialized = !0), n.height || i.largestUL(), n.$topbar.parent().hasClass("fixed") && e("body").css("padding-top", n.$topbar.outerHeight()), e(".top-bar .toggle-topbar").die("click.fndtn").live("click.fndtn", function (e) {
                        e.preventDefault(), i.breakpoint() && (n.$topbar.toggleClass("expanded"), n.$topbar.css("min-height", "")), n.$topbar.hasClass("expanded") || (n.$section.css({
                            left: "0%"
                        }), n.$section.find(">.name").css({
                            left: "100%"
                        }), n.$section.find("li.moved").removeClass("moved"), n.index = 0)
                    }), e(".top-bar .has-dropdown>a").die("click.fndtn").live("click.fndtn", function (t) {
                        if ((Modernizr.touch || i.breakpoint()) && t.preventDefault(), i.breakpoint()) {
                            var r = e(this),
                                o = r.closest("li");
                            n.index += 1, o.addClass("moved"), n.$section.css({
                                left: -(100 * n.index) + "%"
                            }), n.$section.find(">.name").css({
                                left: 100 * n.index + "%"
                            }), r.siblings("ul").height(n.height + n.$titlebar.outerHeight(!0)), n.$topbar.css("min-height", n.height + 2 * n.$titlebar.outerHeight(!0))
                        }
                    }), e(t).on("resize.fndtn.topbar", function () {
                        i.breakpoint() || n.$topbar.css("min-height", "")
                    }), e(".top-bar .has-dropdown .back").die("click.fndtn").live("click.fndtn", function (t) {
                        t.preventDefault();
                        var i = e(this),
                            r = i.closest("li.moved");
                        r.parent(), n.index -= 1, n.$section.css({
                            left: -(100 * n.index) + "%"
                        }), n.$section.find(">.name").css({
                            left: 100 * n.index + "%"
                        }), 0 === n.index && n.$topbar.css("min-height", 0), setTimeout(function () {
                            r.removeClass("moved")
                        }, 300)
                    })
                })
            },
            breakpoint: function () {
                return n.$w.width() < n.breakPoint
            },
            assemble: function () {
                n.$section.detach(), n.$section.find(".has-dropdown>a").each(function () {
                    var t = e(this),
                        n = t.siblings(".dropdown"),
                        i = e('<li class="title back js-generated"><h5><a href="#"></a></h5></li>');
                    i.find("h5>a").html(t.html()), n.prepend(i)
                }), n.$section.appendTo(n.$topbar)
            },
            largestUL: function () {
                var t = n.$topbar.find("section ul ul"),
                    i = t.first(),
                    r = 0;
                t.each(function () {
                    e(this).children("li").length > i.children("li").length && (i = e(this))
                }), i.children("li").each(function () {
                    r += e(this).outerHeight(!0)
                }), n.height = r
            }
        };
    e.fn.foundationTopBar = function (t) {
        return i[t] ? i[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? (e.error("Method " + t + " does not exist on jQuery.foundationTopBar"), void 0) : i.init.apply(this, arguments)
    }
}(jQuery, this),
function (e, t, n) {
    var i = n("#topMenu"),
        r = "click.fndtn";
    i.length > 0 && i.css("margin-top", -1 * i.height());
    var o = n("#sidebarButton");
    o.length > 0 && n("#sidebarButton").on(r, function (e) {
        e.preventDefault(), n("body").toggleClass("active")
    });
    var a = n("#menuButton");
    a.length > 0 && n("#menuButton").on(r, function (e) {
        e.preventDefault(), n("body").toggleClass("active-menu")
    });
    var s = n("#switchPanels");
    s.length > 0 && n("#switchPanels dd").on(r, function (e) {
        e.preventDefault();
        var t = n(this).children("a").attr("href"),
            i = n(t).index();
        n(this).toggleClass("active").siblings().removeClass("active"), n(t).parent().css("left", -100 * i + "%")
    }), n("#nav li a").on(r, function (e) {
        e.preventDefault();
        var t = n(this).attr("href"),
            i = n(t);
        n("html, body").animate({
            scrollTop: i.offset().top
        }, 300)
    })
}(this, document, jQuery),
function (e, t, n) {
    function i(e) {
        var t = {},
            i = /^jQuery\d+$/;
        return n.each(e.attributes, function (e, n) {
            n.specified && !i.test(n.name) && (t[n.name] = n.value)
        }), t
    }

    function r(e, i) {
        var r = this,
            o = n(r);
        if (r.value == o.attr("placeholder") && o.hasClass("placeholder"))
            if (o.data("placeholder-password")) {
                if (o = o.hide().next().show().attr("id", o.removeAttr("id").data("placeholder-id")), e === !0) return o[0].value = i;
                o.focus()
            } else r.value = "", o.removeClass("placeholder"), r == t.activeElement && r.select()
    }

    function o() {
        var e, t = this,
            o = n(t),
            a = this.id;
        if ("" == t.value) {
            if ("password" == t.type) {
                if (!o.data("placeholder-textinput")) {
                    try {
                        e = o.clone().attr({
                            type: "text"
                        })
                    } catch (s) {
                        e = n("<input>").attr(n.extend(i(this), {
                            type: "text"
                        }))
                    }
                    e.removeAttr("name").data({
                        "placeholder-password": !0,
                        "placeholder-id": a
                    }).bind("focus.placeholder", r), o.data({
                        "placeholder-textinput": e,
                        "placeholder-id": a
                    }).before(e)
                }
                o = o.removeAttr("id").hide().prev().attr("id", a).show()
            }
            o.addClass("placeholder"), o[0].value = o.attr("placeholder")
        } else o.removeClass("placeholder")
    }
    var a, s, u = "placeholder" in t.createElement("input"),
        l = "placeholder" in t.createElement("textarea"),
        c = n.fn,
        f = n.valHooks;
    u && l ? (s = c.placeholder = function () {
        return this
    }, s.input = s.textarea = !0) : (s = c.placeholder = function () {
        var e = this;
        return e.filter((u ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
            "focus.placeholder": r,
            "blur.placeholder": o
        }).data("placeholder-enabled", !0).trigger("blur.placeholder"), e
    }, s.input = u, s.textarea = l, a = {
        get: function (e) {
            var t = n(e);
            return t.data("placeholder-enabled") && t.hasClass("placeholder") ? "" : e.value
        },
        set: function (e, i) {
            var a = n(e);
            return a.data("placeholder-enabled") ? ("" == i ? (e.value = i, e != t.activeElement && o.call(e)) : a.hasClass("placeholder") ? r.call(e, !0, i) || (e.value = i) : e.value = i, a) : e.value = i
        }
    }, u || (f.input = a), l || (f.textarea = a), n(function () {
        n(t).delegate("form", "submit.placeholder", function () {
            var e = n(".placeholder", this).each(r);
            setTimeout(function () {
                e.each(o)
            }, 10)
        })
    }), n(e).bind("beforeunload.placeholder", function () {
        n(".placeholder").each(function () {
            this.value = ""
        })
    }))
}(this, document, jQuery),
function () {
    var e, t = function (e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    };
    $(function () {
        var e, t;
        return e = function () {
            return location.hash = "#download"
        }, t = function () {
            return location.hash = ""
        }, "#download" === location.hash && $("#download-modal").reveal({
            close: t
        }), $("[data-show-downloads]").click(function (n) {
            return n.preventDefault(), $("#download-modal").reveal({
                open: e,
                close: t
            })
        })
    }), e = angular.module("infiniteScrollSite", ["infinite-scroll"]), e.controller("DownloadsController", ["$scope",
        function (e) {
            var t, n, i, r, o, a, s;
            return s = function (e) {
                var t, n, i, r, o;
                for (e = e.replace("v", ""), n = e.split("."), o = [], i = 0, r = n.length; r > i; i++) t = n[i], o.push(parseInt(t, 10));
                return o
            }, o = function (e) {
                var t, n;
                try {
                    return n = s(e), 0 === n[1] % 2
                } catch (i) {
                    return t = i, !1
                }
            }, a = function (e) {
                var t, n;
                try {
                    return n = s(e), 1 === n[1] % 2
                } catch (i) {
                    return t = i, !1
                }
            }, e.versions = ["master", "0.1.0", "0.2.0", "1.0.0"], e.versions = _(e.versions).sort(function (e, t) {
                var n, i, r, o, a, u;
                if ("master" === e) return -1;
                if ("master" === t) return 1;
                for (a = function () {
                    var n, r, o, a;
                    for (o = [e, t], a = [], n = 0, r = o.length; r > n; n++) i = o[n], a.push(s(i));
                    return a
                }(), e = a[0], t = a[1], u = [0, 1, 2], r = 0, o = u.length; o > r; r++) {
                    if (n = u[r], e[n] > t[n]) return -1;
                    if (e[n] < t[n]) return 1
                }
                return 0
            }), i = _(e.versions).filter(o), r = _(e.versions).filter(a), t = i[0], n = r[0], e.selectedVersion = t ? t : n ? n : "master", e.versionIsStable = o, e.versionIsUnstable = a, e.versionLabel = function (e) {
                var i;
                return i = e, e === n && (i += " (latest unstable release)"), e === t && (i += " (latest stable release)"), "master" === e && (i += " (development head)"), i
            }
        }
    ]), e.controller("BasicDemoController", ["$scope",
        function (e) {
            var t, n;
            return e.items = function () {
                for (n = [], t = 1; 64 >= t; t++) n.push(t);
                return n
            }.apply(this), e.enabled = !0, e.loadMore = function () {
                var t, n, i, r;
                for (t = e.items[e.items.length - 1], r = [], n = i = 1; 8 >= i; n = ++i) r.push(e.items.push(t + n));
                return r
            }
        }
    ]), e.factory("Reddit", ["$http",
        function (e) {
            var n;
            return n = function () {
                function n() {
                    this.nextPage = t(this.nextPage, this), this.items = [], this.busy = !1, this.after = ""
                }
                return n.prototype.nextPage = function () {
                    var t, n = this;
                    if (!this.busy) return this.busy = !0, t = "http://api.reddit.com/hot?after=&jsonp=JSON_CALLBACK", e.jsonp(t).success(function (e) {
                        var t, i, r, o;
                        for (i = e.data.children, r = 0, o = i.length; o > r; r++) t = i[r], n.items.push(t.data);
                        return n.after = n.items[n.items.length - 1].id, n.busy = !1;
                    })
                }, n
            }()
        }
    ]), e.controller("RemoteDemoController", ["$scope", "Reddit",
        function (e, t) {
            var n;
            return n = e.reddit = new t, e.nextPage = function () {
                return e.paused() ? void 0 : n.nextPage()
            }, e.paused = function () {
                return n.busy || n.items.length >= 1e3
            }
        }
    ])
}.call(this);