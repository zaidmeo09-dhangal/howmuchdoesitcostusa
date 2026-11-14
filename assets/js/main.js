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

  /* Hero stats are static final numbers, no count-up, so they never show wrong values. */

  /* Homepage search: filter the page list, Enter or Check Price goes to the match.
     NOTE: this 13-entry page list is duplicated in tools.md (inline script).
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
    { name: "How Much Does It Cost to Paint a Car? (Guide)", url: "blog/how-much-does-it-cost-to-paint-a-car/", keys: "paint car guide cost" }
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
})();
