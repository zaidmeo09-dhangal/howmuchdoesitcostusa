/* How Much Does It Cost USA - shared behaviour (v9 design).
   Mobile menu, reveal on scroll, counters, homepage search, FAQ
   accordion, pricing toggle, job picker. Calculator math lives
   inline on each calculator page so every page works on its own. */
(function () {
  "use strict";

  function fmt(n) {
    return "$" + Math.round(n).toLocaleString("en-US");
  }

  /* Mobile hamburger menu: toggles the nav as an absolute dropdown below 1100px. */
  var menuBtn = document.querySelector(".menu-btn");
  var mainNav = document.querySelector("header .site-nav");
  if (menuBtn && mainNav) {
    menuBtn.addEventListener("click", function () {
      var open = mainNav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      menuBtn.innerHTML = open ? "&#10005;" : "&#9776;";
      menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    mainNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mainNav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open menu");
        menuBtn.innerHTML = "&#9776;";
      });
    });
    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape") {
        mainNav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open menu");
        menuBtn.innerHTML = "&#9776;";
      }
    });
  }

  /* Visible motion, safe by design: the HTML already holds the final
     numbers and bar widths, so the page is complete without JavaScript.
     JavaScript only animates them when they scroll into view. */
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
    var dur = 1400;
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
  /* Inner pages (everything except the homepage, which already places
     .reveal by hand): add reveal-on-scroll to the main content blocks so
     the calculators, guides, and info pages animate like the homepage.
     The homepage has .hero-grid; no inner page does (guide pages use
     .post-hero-grid, a different class). This runs before the
     IntersectionObserver below, so the new .reveal elements are observed.
     Base state stays visible without JavaScript (noscript fallback in
     default.html) and without IntersectionObserver (else branch below). */
  if (!document.querySelector(".hero-grid")) {
    var revealSelectors = [
      "section.hero",
      ".calc",
      ".bands",
      ".answer",
      "details.faq",
      ".two-col",
      ".table-wrap",
      ".grid .card",
      ".related-grid .card",
      ".post-hero",
      ".post-feature",
      ".post .key-takeaways",
      ".post .pull-quote",
      ".contact-form",
      "section.wrap > h2",
      ".post-body > h2"
    ];
    revealSelectors.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el) { el.classList.add("reveal"); });
    });
  }
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        if (el.hasAttribute("data-count")) animateCount(el);
        if (el.classList.contains("price-bar-fill")) el.style.width = el.getAttribute("data-target-width");
        el.classList.add("in");
        io.unobserve(el);
      });
    }, { threshold: 0.12 });
    counters.forEach(function (el) { io.observe(el); });
    bars.forEach(function (el) {
      el.setAttribute("data-target-width", el.style.width || "50%");
      el.classList.add("price-bar-fill");
      el.style.width = "0%";
      io.observe(el);
    });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    counters.forEach(function (el) {
      var t = parseInt(el.getAttribute("data-count"), 10);
      var pre = el.getAttribute("data-prefix") || "";
      if (!isNaN(t)) el.textContent = pre + t.toLocaleString("en-US");
    });
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* Homepage FAQ accordion: one open at a time, first open by default in the HTML. */
  document.querySelectorAll(".faq-q").forEach(function (q) {
    q.addEventListener("click", function () {
      var item = q.parentElement;
      var wasOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach(function (i) {
        i.classList.remove("open");
        var t = i.querySelector(".faq-toggle");
        if (t) t.textContent = "+";
      });
      if (!wasOpen) {
        item.classList.add("open");
        var tg = item.querySelector(".faq-toggle");
        if (tg) tg.textContent = "\u2212";
      }
    });
  });

  /* Movers pricing toggle: 1 bedroom / 2 bedroom. */
  var tierData = {
    "1": { low: "$646", typ: "$950", high: "$1,254" },
    "2": { low: "$843", typ: "$1,240", high: "$1,637" }
  };
  document.querySelectorAll(".toggle button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".toggle button").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var d = tierData[btn.getAttribute("data-beds")];
      var l = document.getElementById("priceLow");
      var t = document.getElementById("priceTyp");
      var h = document.getElementById("priceHigh");
      if (d && l && t && h) { l.textContent = d.low; t.textContent = d.typ; h.textContent = d.high; }
    });
  });

  /* Get Your Price job picker. */
  var jobData = {
    movers: { typ: "$1,240", range: "Range $843 to $1,637. Sample estimated USA range, not a quote." },
    roof: { typ: "$9,180", range: "Range $7,528 to $11,475. Sample estimated USA range, not a quote." },
    fence: { typ: "$3,335", range: "Range $2,100 to $5,400. Sample estimated USA range, not a quote." },
    oil: { typ: "$75", range: "Range $45 to $140. Sample estimated USA range, not a quote." },
    ac: { typ: "$6,800", range: "Range $5,200 to $9,500. Sample estimated USA range, not a quote." },
    wrap: { typ: "$3,500", range: "Range $2,500 to $5,500. Sample estimated USA range, not a quote." },
    paintcar: { typ: "$3,500", range: "Range $2,500 to $4,999. Sample estimated USA range, not a quote." },
    housepaint: { typ: "$4,200", range: "Range $2,800 to $6,800. Sample estimated USA range, not a quote." }
  };
  var picker = document.getElementById("jobPicker");
  if (picker) {
    picker.addEventListener("change", function () {
      var d = jobData[picker.value];
      var t = document.getElementById("jobTyp");
      var r = document.getElementById("jobRange");
      if (d && t && r) { t.textContent = d.typ; r.textContent = d.range; }
    });
  }

  /* Homepage search: filter the page list, Enter or Check Price goes to the match.
     NOTE: this 16-entry page list is duplicated in tools.md (inline script).
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
    { name: "Paint a Car Cost Calculator", url: "paint-a-car-cost-calculator/", keys: "paint car repaint vehicle cost" },
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
