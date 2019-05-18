var APP = {};
function theme_color(e) {
    return e in APP.COLORS && APP.COLORS[e]
}
function closeShined() {
    $("body").removeClass("has-backdrop"),
        $(".shined").removeClass("shined")
}
APP.jQueryLoaded = !!window.jQuery,
    APP.guid = function() {
        function e() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return function() {
            return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
        }
    }(),
    APP.ASSETS_PATH = "./assets/",
    APP.COLORS = {
        primary: "#2949EF",
        secondary: "#6c757d",
        success: "#06b5b6",
        info: "#00bcd4",
        warning: "#fd7e14",
        danger: "#FE4D2E",
        light: "#dee2e6",
        purple: "#6f42c1",
        indigo: "#6610f2",
        pink: "#e83e8c",
        yellow: "#FDA424",
        teal: "#20c997"
    },
    $(window).on("load", function() {
        setTimeout(function() {
            $(".preloader-backdrop").fadeOut(200)
        }, 0)
    }),
    $(function() {
        for (var e = document.querySelectorAll(".custom-scroll"), t = 0; t < e.length; t++)
            new PerfectScrollbar(e[t]);
        function i(e) {
            27 == e.which && ($("body").removeClass("fullscreen-mode"),
                $(".card-fullscreen").removeClass("card-fullscreen"),
                $(window).off("keydown", i))
        }
        $('[data-toggle="tooltip"]').tooltip(),
            $('[data-toggle="popover"]').popover(),
            $.fn.backdrop = function() {
                return $(this).toggleClass("shined"),
                    $("body").toggleClass("has-backdrop"),
                    $(this)
            }
            ,
            $(".backdrop, test.js-close-backdrop").on("click", closeShined),
            $(".card-collapse").on("click", function() {
                $(this).closest(".card").toggleClass("collapsed-mode").children(".card-body").slideToggle(200)
            }),
            $(".card-remove").on("click", function() {
                $(this).closest(".card").remove()
            }),
            $(".fullscreen-link").click(function() {
                $("body").hasClass("fullscreen-mode") ? ($("body").removeClass("fullscreen-mode"),
                    $(this).closest(".card").removeClass("card-fullscreen"),
                    $(window).off("keydown", i)) : ($("body").addClass("fullscreen-mode"),
                    $(this).closest(".card").addClass("card-fullscreen"),
                    $(window).on("keydown", i))
            })
    }),
    APP.layout = {
        sidebarAlwaysDrawerMode: !1
    },
APP.layout.sidebarAlwaysDrawerMode || $("body").hasClass("sidebar-drawer-mode") || $(window).on("load resize scroll", function() {
    $("body").hasClass("sidebar-collapsed-mode") ? $(this).width() < 992 ? $("body").addClass("sidebar-hidden") : $("body").removeClass("sidebar-hidden") : $("body").hasClass("mini-sidebar") || ($(this).width() < 992 ? $("body").addClass("drawer-sidebar") : ($("body").removeClass("drawer-sidebar"),
        $("#sidebar").hasClass("shined") && closeShined()))
}),
    $(function() {
        $(".metismenu").length && $(".metismenu").metisMenu(),
            $("#sidebar-toggler").on("click", function(e) {
                e.preventDefault(),
                    $("body").hasClass("drawer-sidebar") ? $("#sidebar").backdrop() : $("body").hasClass("sidebar-collapsed-mode") ? $("body").toggleClass("sidebar-hidden") : $("body").toggleClass("mini-sidebar")
            }),
            $(".quick-sidebar-toggler").on("click", function(e) {
                e.preventDefault(),
                    $("#quick-sidebar").backdrop()
            })
    }),
    function(w) {
        APP.updateTextFields = function() {
            w("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=nuAPPer], input[type=search], textarea").each(function(e, t) {
                var i = w(this);
                0 < w(t).val().length || w(t).is(":focus") || t.autofocus || void 0 !== i.attr("placeholder") ? i.siblings("label").addClass("active") : w(t)[0].validity ? i.siblings("label").toggleClass("active", !0 === w(t)[0].validity.badInput) : i.siblings("label").removeClass("active")
            })
        }
            ,
            APP.validate_field = function(e) {
                var t = void 0 !== e.attr("data-length")
                    , i = parseInt(e.attr("data-length"))
                    , o = e.val().length;
                0 !== o || !1 !== e[0].validity.badInput || e.is(":required") ? e.hasClass("validate") && (e.is(":valid") && t && o <= i || e.is(":valid") && !t ? (e.removeClass("invalid"),
                        e.addClass("valid")) : (e.removeClass("valid"),
                        e.addClass("invalid"))) : e.hasClass("validate") && (e.removeClass("valid"),
                        e.removeClass("invalid"))
            }
            ,
            APP.textareaAutoResize = function(e) {
                var t = w(".hiddendiv").first();
                t.length || (t = w('<div class="hiddendiv common"></div>'),
                    w("body").append(t));
                var i = e.css("font-family")
                    , o = e.css("font-size")
                    , a = e.css("line-height")
                    , s = e.css("padding");
                o && t.css("font-size", o),
                i && t.css("font-family", i),
                a && t.css("line-height", a),
                s && t.css("padding", s),
                e.data("original-height") || e.data("original-height", e.outerHeight()),
                "off" === e.attr("wrap") && t.css("overflow-wrap", "normal").css("white-space", "pre"),
                    t.text(e.val() + "\n");
                var n = t.html().replace(/\n/g, "<br>");
                t.html(n),
                    e.is(":visible") ? t.css("width", e.width()) : t.css("width", w(window).width() / 2),
                    e.data("original-height") <= t.outerHeight() ? e.css("height", t.outerHeight()) : e.val().length < e.data("previous-length") && e.css("height", e.data("original-height")),
                    e.data("previous-length", e.val().length)
            }
            ,
            w(document).ready(function() {
                var e = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=nuAPPer], input[type=search], textarea";
                w(document).on("change", e, function() {
                    0 === w(this).val().length && void 0 === w(this).attr("placeholder") || w(this).siblings("label").addClass("active"),
                        APP.validate_field(w(this))
                }),
                    APP.updateTextFields(),
                    w(document).on("focus", e, function() {
                        w(this).siblings("label, .prefix").addClass("active")
                    }),
                    w(document).on("blur", e, function() {
                        var e = w(this)
                            , t = ".prefix";
                        0 === e.val().length && !0 !== e[0].validity.badInput && void 0 === e.attr("placeholder") && (t += ", label"),
                            e.siblings(t).removeClass("active"),
                            APP.validate_field(e)
                    });
                var t = "textarea.md-form-control.auto-resize";
                w(t).each(function() {
                    var e = w(this);
                    e.data("original-height", e.outerHeight()),
                        e.data("previous-length", e.val().length),
                        APP.textareaAutoResize(e)
                }),
                    w(document).on("keyup keydown", t, function() {
                        APP.textareaAutoResize(w(this))
                    })
            }),
            w.fn.autocomplete = function(b) {
                var e = {
                    data: {},
                    limit: 1 / 0,
                    onAutocomplete: null,
                    minLength: 1
                };
                return b = w.extend(e, b),
                    this.each(function() {
                        var u, h = w(this), f = b.data, v = 0, s = -1, e = h.closest(".md-form");
                        if (w.isEmptyObject(f))
                            h.off("keyup.autocomplete focus.autocomplete");
                        else {
                            var t, g = w('<ul class="autocomplete-content dropdown-content"></ul>');
                            e.length ? (t = e.children(".autocomplete-content.dropdown-content").first()).length || e.append(g) : (t = h.next(".autocomplete-content.dropdown-content")).length || h.after(g),
                            t.length && (g = t);
                            var m = function() {
                                g.empty(),
                                    s = -1,
                                    g.find(".active").removeClass("active"),
                                    u = void 0
                            };
                            h.off("blur.autocomplete").on("blur.autocomplete", function() {
                                m()
                            }),
                                h.off("keyup.autocomplete focus.autocomplete").on("keyup.autocomplete focus.autocomplete", function(e) {
                                    v = 0;
                                    var t = h.val().toLowerCase();
                                    if (13 !== e.which && 38 !== e.which && 40 !== e.which) {
                                        if (u !== t && (m(),
                                            t.length >= b.minLength))
                                            for (var i in f)
                                                if (f.hasOwnProperty(i) && -1 !== i.toLowerCase().indexOf(t)) {
                                                    if (v >= b.limit)
                                                        break;
                                                    var o = w("<li></li>");
                                                    f[i] ? o.append('<img src="' + f[i] + '" class="right circle"><span>' + i + "</span>") : o.append("<span>" + i + "</span>"),
                                                        g.append(o),
                                                        a = t,
                                                        void 0,
                                                        n = (s = o).find("img"),
                                                        l = s.text().toLowerCase().indexOf("" + a.toLowerCase()),
                                                        d = l + a.length - 1,
                                                        r = s.text().slice(0, l),
                                                        c = s.text().slice(l, d + 1),
                                                        p = s.text().slice(d + 1),
                                                        s.html("<span>" + r + "<span class='highlight'>" + c + "</span>" + p + "</span>"),
                                                    n.length && s.prepend(n),
                                                        v++
                                                }
                                        var a, s, n, l, d, r, c, p;
                                        u = t
                                    }
                                }),
                                h.off("keydown.autocomplete").on("keydown.autocomplete", function(e) {
                                    var t, i = e.which, o = g.children("li").length, a = g.children(".active").first();
                                    13 === i && 0 <= s ? (t = g.children("li").eq(s)).length && (t.trigger("mousedown.autocomplete"),
                                            e.preventDefault()) : 38 !== i && 40 !== i || (e.preventDefault(),
                                        38 === i && 0 < s && s--,
                                        40 === i && s < o - 1 && s++,
                                            a.removeClass("active"),
                                        0 <= s && g.children("li").eq(s).addClass("active"))
                                }),
                                g.off("mousedown.autocomplete touchstart.autocomplete").on("mousedown.autocomplete touchstart.autocomplete", "li", function() {
                                    var e = w(this).text().trim();
                                    h.val(e),
                                        h.trigger("change"),
                                        m(),
                                    "function" == typeof b.onAutocomplete && b.onAutocomplete.call(this, e)
                                })
                        }
                    })
            }
            ,
            w.fn.formSelect = function(g) {
                function m(e, t, i) {
                    var o = e.indexOf(t)
                        , a = -1 === o;
                    return a ? e.push(t) : e.splice(o, 1),
                        i.siblings("ul.dropdown-content").find("li:not(.optgroup)").eq(t).toggleClass("active"),
                        i.find("option").eq(t).prop("selected", a),
                        function(e, t) {
                            for (var i = "", o = 0, a = e.length; o < a; o++) {
                                var s = t.find("option").eq(e[o]).text();
                                i += 0 === o ? s : ", " + s
                            }
                            "" === i && (i = t.find("option:disabled").eq(0).text());
                            t.siblings("input.select-dropdown").val(i)
                        }(e, i),
                        a
                }
                w(this).each(function() {
                    var o = w(this);
                    if (!o.hasClass("browser-default")) {
                        var r = !!o.attr("multiple")
                            , e = o.attr("data-select-id");
                        if (e && (o.parent().find("span.caret").remove(),
                                o.parent().find("input").remove(),
                                o.unwrap(),
                                w("ul#select-options-" + e).remove()),
                            "destroy" === g)
                            return o.removeAttr("data-select-id").removeClass("initialized"),
                                void w(window).off("click.select");
                        var t = APP.guid();
                        o.attr("data-select-id", t);
                        var i = w('<div class="select-wrapper"></div>');
                        i.addClass(o.attr("class")),
                        o.is(":disabled") && i.addClass("disabled");
                        var c = w('<ul id="select-options-' + t + '" class="dropdown-content select-dropdown ' + (r ? "multiple-select-dropdown" : "") + '"></ul>')
                            , a = o.children("option, optgroup")
                            , s = []
                            , n = !1
                            , l = o.find("option:selected").html() || o.find("option:first").html() || ""
                            , d = function(e, t, i) {
                            var o = t.is(":disabled") ? "disabled " : ""
                                , a = "optgroup-option" === i ? "optgroup-option " : ""
                                , s = r ? '<label class="checkbox checkbox-primary"><input type="checkbox"' + o + "/><span>" + t.html() + "</span></label>" : t.html()
                                , n = t.data("icon")
                                , l = t.attr("class");
                            if (n) {
                                var d = "";
                                return l && (d = ' class="' + l + '"'),
                                    c.append(w('<li class="' + o + a + '"><img alt="" src="' + n + '"' + d + "><span>" + s + "</span></li>")),
                                    !0
                            }
                            c.append(w('<li class="' + o + a + '"><span>' + s + "</span></li>"))
                        };
                        a.length && a.each(function() {
                            if (w(this).is("option"))
                                r ? d(0, w(this), "multiple") : d(0, w(this));
                            else if (w(this).is("optgroup")) {
                                var e = w(this).children("option");
                                c.append(w('<li class="optgroup"><span>' + w(this).attr("label") + "</span></li>")),
                                    e.each(function() {
                                        d(0, w(this), "optgroup-option")
                                    })
                            }
                        }),
                            c.find("li:not(.optgroup)").each(function(i) {
                                w(this).click(function(e) {
                                    if (!w(this).hasClass("disabled") && !w(this).hasClass("optgroup")) {
                                        var t = !0;
                                        r ? (w('input[type="checkbox"]', this).prop("checked", function(e, t) {
                                            return !t
                                        }),
                                            t = m(s, i, o),
                                            h.trigger("focus")) : (c.find("li").removeClass("active"),
                                            w(this).toggleClass("active"),
                                            h.val(w(this).text())),
                                            f(c, w(this)),
                                            o.find("option").eq(i).prop("selected", t),
                                            o.trigger("change"),
                                        void 0 !== g && g()
                                    }
                                    e.stopPropagation()
                                })
                            }),
                            o.wrap(i);
                        var p = w('<span class="caret">&#9660;</span>')
                            , u = l.replace(/"/g, "&quot;")
                            , h = w('<input type="text" class="select-dropdown" readonly="true" ' + (o.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + t + '" value="' + u + '"/>');
                        o.before(h),
                            h.before(p),
                            h.after(c),
                        o.is(":disabled") || h.dropdown({
                            hover: !1
                        }),
                        o.attr("tabindex") && w(h[0]).attr("tabindex", o.attr("tabindex")),
                            o.addClass("initialized"),
                            h.on({
                                focus: function() {
                                    if (w("ul.select-dropdown").not(c[0]).is(":visible") && (w("input.select-dropdown").trigger("close"),
                                            w(window).off("click.select")),
                                            !c.is(":visible")) {
                                        w(this).trigger("open", ["focus"]);
                                        var e = w(this).val();
                                        r && 0 <= e.indexOf(",") && (e = e.split(",")[0]);
                                        var t = c.find("li").filter(function() {
                                            return w(this).text().toLowerCase() === e.toLowerCase()
                                        })[0];
                                        f(c, t, !0),
                                            w(window).off("click.select").on("click.select", function() {
                                                r && (n || h.trigger("close")),
                                                    w(window).off("click.select")
                                            })
                                    }
                                },
                                click: function(e) {
                                    e.stopPropagation()
                                }
                            }),
                            h.on("blur", function() {
                                r || (w(this).trigger("close"),
                                    w(window).off("click.select")),
                                    c.find("li.selected").removeClass("selected")
                            }),
                            c.hover(function() {
                                n = !0
                            }, function() {
                                n = !1
                            }),
                        r && o.find("option:selected:not(:disabled)").each(function() {
                            var e = this.index;
                            m(s, e, o),
                                c.find("li:not(.optgroup)").eq(e).find(":checkbox").prop("checked", !0)
                        });
                        var f = function(e, t, i) {
                            if (t) {
                                e.find("li.selected").removeClass("selected");
                                var o = w(t);
                                o.addClass("selected"),
                                r && !i || c.scrollTo(o)
                            }
                        }
                            , v = [];
                        h.on("keydown", function(e) {
                            if (9 != e.which)
                                if (40 != e.which || c.is(":visible")) {
                                    if (13 != e.which || c.is(":visible")) {
                                        e.preventDefault();
                                        var t = String.fromCharCode(e.which).toLowerCase();
                                        if (t && -1 === [9, 13, 27, 38, 40].indexOf(e.which)) {
                                            v.push(t);
                                            var i = v.join("")
                                                , o = c.find("li").filter(function() {
                                                return 0 === w(this).text().toLowerCase().indexOf(i)
                                            })[0];
                                            o && f(c, o)
                                        }
                                        if (13 == e.which) {
                                            var a = c.find("li.selected:not(.disabled)")[0];
                                            a && (w(a).trigger("click"),
                                            r || h.trigger("close"))
                                        }
                                        40 == e.which && (o = c.find("li.selected").length ? c.find("li.selected").next("li:not(.disabled)")[0] : c.find("li:not(.disabled)")[0],
                                            f(c, o)),
                                        27 == e.which && h.trigger("close"),
                                        38 == e.which && (o = c.find("li.selected").prev("li:not(.disabled)")[0]) && f(c, o),
                                            setTimeout(function() {
                                                v = []
                                            }, 1e3)
                                    }
                                } else
                                    h.trigger("open");
                            else
                                h.trigger("close")
                        })
                    }
                })
            }
    }(jQuery);



// Pre loader
$(window).on("load", function() {
    setTimeout(function() {
        $(".preloader-backdrop").fadeOut(200)
    }, 0);
}); 

// Header nav
$(document).ready(function () {
    var headerNavToggler = $("#header-nav-toggler");

    headerNavToggler.on('click', function () {
        $('body').toggleClass('header-nav-hidden');
    });
});



var nav_menu_width = $(".header-menu").outerWidth();
$(window).on("load resize scroll", function() {
    $(this).width() <= nav_menu_width ? $("body").hasClass("drawer-menu") || $("body").addClass("drawer-menu") : ($("body").removeClass("drawer-menu"),
    $("#header-nav").hasClass("shined") && closeShined())
});
$(function (){
    $("#header-nav-toggler").click(function() {
        $("body").hasClass("drawer-menu") ? $("#header-nav").backdrop() : $("body").toggleClass("header-nav-hidden")
    })
});

// functions

$.fn.backdrop = function() {
    return $(this).toggleClass("shined"),
    $("body").toggleClass("has-backdrop"),
    $(this);
}

function closeShined() {
    $("body").removeClass("has-backdrop"),
    $(".shined").removeClass("shined")
}

// Form Wizard

$(function () {
    var form = $('#form-wizard').show();
})