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

  /* Hero stats are static final numbers, no count-up, so they never show wrong values. */

  /* Homepage search: filter the page list, Enter or Check Price goes to the match. */
  var input = document.getElementById("siteSearch");
  var results = document.getElementById("searchResults");
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
  function go(url) {
    var root = window.location.pathname.indexOf("/howmuchdoesitcostusa") === 0 ? "/howmuchdoesitcostusa/" : "/";
    window.location.href = root + url;
  }
  if (input && results) {
    input.addEventListener("input", function () {
      var q = input.value.trim().toLowerCase();
      results.innerHTML = "";
      if (q.length < 2) return;
      var hits = pages.filter(function (p) {
        return (p.name + " " + p.keys).toLowerCase().indexOf(q) !== -1;
      }).slice(0, 5);
      hits.forEach(function (p) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = "#";
        a.textContent = p.name;
        a.addEventListener("click", function (ev) { ev.preventDefault(); go(p.url); });
        li.appendChild(a);
        results.appendChild(li);
      });
    });
    var form = document.getElementById("searchForm");
    if (form) {
      form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var q = input.value.trim().toLowerCase();
        var hit = null;
        if (q) {
          hit = pages.filter(function (p) {
            return (p.name + " " + p.keys).toLowerCase().indexOf(q) !== -1;
          })[0] || null;
        }
        go(hit ? hit.url : "tools/");
      });
    }
  }

  window.hmCostFmt = fmt;
})();
