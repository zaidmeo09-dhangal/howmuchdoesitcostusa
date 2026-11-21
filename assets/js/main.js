/* How Much Does It Cost USA - shared behaviour.
   Theme toggle, hero counters, homepage search. Calculator math lives
   inline on each calculator page so every page works on its own. */
(function () {
  "use strict";

  function fmt(n) {
    return "$" + Math.round(n).toLocaleString("en-US");
  }

  /* Theme toggle: light is the default, dark only by choice. Choice is saved. */
  var toggle = document.getElementById("themeToggle");
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    if (toggle) {
      toggle.setAttribute("aria-pressed", t === "dark" ? "true" : "false");
      toggle.setAttribute("aria-label", t === "dark" ? "Switch to light theme" : "Switch to dark theme");
    }
  }
  var saved = null;
  try { localStorage.removeItem("hm-cost-theme"); saved = localStorage.getItem("hm-cost-theme-v2"); } catch (e) { saved = null; }
  applyTheme(saved || "light");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      try { localStorage.setItem("hm-cost-theme-v2", next); } catch (e) {}
      applyTheme(next);
    });
  }

  /* Mobile hamburger menu: opens the nav links hidden below 900px. */
  var navToggle = document.getElementById("navToggle");
  var header = document.querySelector(".site-header");
  var nav = document.getElementById("siteNav");
  function setMenu(open) {
    if (!header || !navToggle) return;
    header.classList.toggle("nav-open", open);
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }
  if (navToggle) {
    navToggle.addEventListener("click", function () {
      setMenu(!header.classList.contains("nav-open"));
    });
    if (nav) {
      nav.addEventListener("click", function (ev) {
        if (ev.target && ev.target.tagName === "A") setMenu(false);
      });
    }
    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape") setMenu(false);
    });
  }

  /* Visible motion, safe by design: the HTML already holds the final
     numbers and bar widths, so the page is complete without JavaScript.
     JavaScript only animates them when they scroll into view.
     Counters count up to their data-count value; price bars fill from
     0 to their inline width; cards rise in. Reduced motion shows the
     final values at once. */
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    var startVal = parseInt(el.getAttribute("data-start"), 10);
    if (isNaN(startVal)) startVal = 0;
    var prefix = el.getAttribute("data-prefix") || "";
    if (isNaN(target)) return;
    if (reduceMotion) {
      el.textContent = prefix + target.toLocaleString("en-US");
      return;
    }
    var start = null;
    var dur = 900;
    var step = function (ts) {
      if (!start) start = ts;
      var p = Math.min(1, (ts - start) / dur);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + Math.round(startVal + (target - startVal) * eased).toLocaleString("en-US");
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  var counters = document.querySelectorAll("[data-count]");
  var bars = document.querySelectorAll(".card .price-bar span");
  var risers = document.querySelectorAll(".grid .card, .how-steps li, .bands .band, .calc, .answer, .key-takeaways, .table-wrap, .hero-card, .final-cta");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var seen = function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        if (el.hasAttribute("data-count")) animateCount(el);
        if (el.classList.contains("price-bar-fill")) el.style.width = el.getAttribute("data-target-width");
        el.classList.add("rise");
        obs.unobserve(el);
      });
    };
    var io = new IntersectionObserver(seen, { threshold: 0.15 });
    counters.forEach(function (el) { io.observe(el); });
    bars.forEach(function (el) {
      el.setAttribute("data-target-width", el.style.width || "50%");
      el.classList.add("price-bar-fill");
      el.style.width = "0%";
      io.observe(el);
    });
    risers.forEach(function (el) { io.observe(el); });
  } else if (reduceMotion) {
    counters.forEach(function (el) {
      var t = parseInt(el.getAttribute("data-count"), 10);
      var pre = el.getAttribute("data-prefix") || "";
      if (!isNaN(t)) el.textContent = pre + t.toLocaleString("en-US");
    });
  }

  /* Homepage search: filter the page list, Enter or Check Price goes to the match.
     NOTE: this 15-entry page list is duplicated in tools.md (inline script).
     Keep both lists in sync: same pages, same names, same URLs, same keywords. */
  var input = document.getElementById("siteSearch");
  var results = document.getElementById("searchResults");
  var searchRoot = window.location.pathname.indexOf("/howmuchdoesitcostusa") === 0 ? "/howmuchdoesitcostusa/" : "/";
  var pages = [
    { name: "Movers Cost Calculator", url: "movers-cost-calculator/", keys: "movers moving move cost" },
    { name: "Roof Replacement Cost Calculator", url: "roof-replacement-cost-calculator/", keys: "roof replacement roofing shingle cost" },
    { name: "Fence Cost Calculator", url: "fence-cost-calculator/", keys: "fence wood vinyl chain link cost" },
    { name: "Oil Change Cost Calculator", url: "oil-change-cost-calculator/", keys: "oil change car service cost" },
    { name: "Central AC Installation Cost Calculator", url: "central-ac-installation-cost-calculator/", keys: "central air ac installation cooling cost" },
    { name: "Car Wrap Cost Calculator", url: "car-wrap-cost-calculator/", keys: "car wrap vinyl vehicle cost" },
    { name: "House Painting Cost Calculator", url: "house-painting-cost-calculator/", keys: "house painting paint car cost" },
    { name: "How Much Do Movers Cost? (Guide)", url: "blog/how-much-do-movers-cost/", keys: "movers guide cost" },
    { name: "How Much Does an Oil Change Cost? (Guide)", url: "blog/how-much-does-an-oil-change-cost/", keys: "oil change guide cost" },
    { name: "How Much Does It Cost to Replace a Roof? (Guide)", url: "blog/how-much-does-it-cost-to-replace-a-roof/", keys: "roof guide cost" },
    { name: "How Much Does a Fence Cost? (Guide)", url: "blog/how-much-does-a-fence-cost/", keys: "fence guide cost" },
    { name: "How Much Does It Cost to Install Central Air? (Guide)", url: "blog/how-much-does-it-cost-to-install-central-air/", keys: "central air guide cost" },
    { name: "How Much Does It Cost to Paint a Car? (Guide)", url: "blog/how-much-does-it-cost-to-paint-a-car/", keys: "paint car guide cost" },
    { name: "How Much Does a Car Wrap Cost? (Guide)", url: "blog/how-much-does-a-car-wrap-cost/", keys: "car wrap guide cost" },
    { name: "How Much Does It Cost to Paint a House? (Guide)", url: "blog/how-much-does-it-cost-to-paint-a-house/", keys: "paint house guide cost" }
  ];
  /* Ranked search: a title match outranks a keyword match, so "car" returns
     Car Wrap first and "paint" returns the Paint a Car guide first. Exact word
     matches score more than substring matches, so "paint" beats "painting". */
  function scorePage(p, words) {
    var title = p.name.toLowerCase();
    var titleWords = title.split(/[^a-z0-9]+/);
    var keys = p.keys.toLowerCase();
    var keyWords = keys.split(/[^a-z0-9]+/);
    var s = 0;
    words.forEach(function (w) {
      if (!w) return;
      if (titleWords.indexOf(w) !== -1) { s += 3; }
      else if (title.indexOf(w) !== -1) { s += 2; }
      if (keyWords.indexOf(w) !== -1) { s += 2; }
      else if (keys.indexOf(w) !== -1) { s += 1; }
    });
    return s;
  }
  function searchPages(q) {
    var words = q.toLowerCase().split(/\s+/);
    return pages.map(function (p) { return { p: p, s: scorePage(p, words) }; })
      .filter(function (r) { return r.s > 0; })
      .sort(function (a, b) { return b.s - a.s; })
      .map(function (r) { return r.p; });
  }
  function go(url) {
    window.location.href = searchRoot + url;
  }
  if (input && results) {
    input.addEventListener("input", function () {
      var q = input.value.trim().toLowerCase();
      results.innerHTML = "";
      if (q.length < 2) return;
      var hits = searchPages(q).slice(0, 5);
      hits.forEach(function (p) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = searchRoot + p.url;
        a.textContent = p.name;
        li.appendChild(a);
        results.appendChild(li);
      });
    });
    var form = document.getElementById("searchForm");
    if (form) {
      form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var q = input.value.trim().toLowerCase();
        var hit = q ? (searchPages(q)[0] || null) : null;
        go(hit ? hit.url : "tools/?q=" + encodeURIComponent(input.value.trim()));
      });
    }
  }

  window.hmCostFmt = fmt;

  /* Guide pages: table of contents, reading progress, copy link, calculator banner. */
  var postArticle = document.querySelector("article.post");
  if (postArticle) {
    var postBody = postArticle.querySelector(".post-body");
    function fallbackCopy(text) {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "absolute";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch (e) {}
      document.body.removeChild(ta);
    }
    /* Table of contents, built from the guide H2s. Hidden until JS fills it. */
    var toc = document.getElementById("postToc");
    var tocList = document.getElementById("postTocList");
    if (postBody && toc && tocList) {
      var headings = postBody.querySelectorAll("h2");
      var tocLinks = [];
      headings.forEach(function (h) {
        var text = h.textContent.trim();
        if (!text) return;
        if (!h.id) {
          h.id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "section";
        }
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = "#" + h.id;
        a.textContent = text;
        li.appendChild(a);
        tocList.appendChild(li);
        tocLinks.push({ h: h, a: a });
      });
      if (tocLinks.length > 1) {
        toc.classList.add("is-ready");
        var spy = function () {
          var current = tocLinks[0];
          tocLinks.forEach(function (item) {
            if (item.h.getBoundingClientRect().top <= 140) current = item;
          });
          tocLinks.forEach(function (item) {
            item.a.classList.toggle("is-active", item === current);
          });
        };
        window.addEventListener("scroll", spy, { passive: true });
        spy();
      }
    }
    /* Thin reading progress bar under the header. */
    var bar = document.getElementById("readingProgressBar");
    if (bar) {
      var onScroll = function () {
        var total = postArticle.offsetHeight - window.innerHeight;
        var done = window.scrollY - postArticle.offsetTop;
        var pct = total > 0 ? Math.min(100, Math.max(0, (done / total) * 100)) : 0;
        bar.style.width = Math.max(pct, 6) + "%";
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      onScroll();
    }
    /* Copy link buttons, top and bottom of the guide. */
    var copyBtns = postArticle.querySelectorAll(".share-copy");
    copyBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var url = btn.getAttribute("data-copy-url") || window.location.href;
        var done = function () {
          var label = btn.querySelector("span");
          if (label) {
            label.textContent = "Copied";
            setTimeout(function () { label.textContent = "Copy link"; }, 2000);
          } else {
            btn.textContent = "Copied";
            setTimeout(function () { btn.textContent = "Copy link"; }, 2000);
          }
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(url).then(done, function () { fallbackCopy(url); done(); });
        } else { fallbackCopy(url); done(); }
      });
    });
    /* Mid-guide calculator banner after the first table, driven by front matter. */
    var calcUrl = postArticle.getAttribute("data-calculator-url");
    var calcName = postArticle.getAttribute("data-calculator-name");
    var calcHeading = postArticle.getAttribute("data-calculator-heading");
    if (postBody && calcUrl && calcName) {
      var banner = document.createElement("aside");
      banner.className = "calc-banner";
      var label = document.createElement("p");
      label.className = "calc-banner-label";
      label.textContent = "Calculator";
      var head = document.createElement("p");
      head.className = "calc-banner-title";
      head.textContent = calcHeading || ("Price it with the " + calcName);
      banner.appendChild(label);
      banner.appendChild(head);
      var calcNote = postArticle.getAttribute("data-calculator-note");
      if (calcNote) {
        var np = document.createElement("p");
        np.className = "calc-banner-note";
        np.textContent = calcNote;
        banner.appendChild(np);
      }
      var link = document.createElement("a");
      link.className = "btn btn-gold";
      link.href = calcUrl;
      link.textContent = calcName;
      banner.appendChild(link);
      var firstTable = postBody.querySelector(".table-wrap");
      if (firstTable && firstTable.parentNode) {
        firstTable.parentNode.insertBefore(banner, firstTable.nextSibling);
      } else {
        var ans = postBody.querySelector(".answer");
        if (ans && ans.parentNode) ans.parentNode.insertBefore(banner, ans.nextSibling);
      }
    }
  }
})();
