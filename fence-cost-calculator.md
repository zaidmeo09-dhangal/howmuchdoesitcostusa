---
layout: default
title: "Fence Cost Calculator"
meta_title: "Free Fence Cost Calculator: Price Per Foot in the USA"
meta_description: "Use the free fence cost calculator to price a wood, vinyl, or chain link fence by length and height, with low, typical, and high USA cost bands."
permalink: /fence-cost-calculator/
breadcrumb: Tools
image: /assets/images/fence-hero.webp
image_card: /assets/images/fence-card.webp
image_alt: "Wooden fence and gate beside a stone path in a sunny backyard"
image_w: 1200
image_h: 1800
image_pos: center
schema: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "Fence Cost Calculator",
        "description": "Use the free fence cost calculator to price a wood, vinyl, or chain link fence by length and height, with low, typical, and high USA cost bands.",
        "url": "https://howmuchdoesitcostusa.com/fence-cost-calculator/"
      },
      {
        "@type": "HowTo",
        "name": "How to estimate fence cost",
        "description": "Estimate the cost of a fence in 4 steps using fence length and material.",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Step 1",
            "text": "Measure your fence length. Walk the boundary and add gate openings to the total length."
          },
          {
            "@type": "HowToStep",
            "name": "Step 2",
            "text": "Pick a material. Chain link costs least per foot, wood privacy costs least among privacy fences up front, and vinyl costs more but needs less care."
          },
          {
            "@type": "HowToStep",
            "name": "Step 3",
            "text": "Run the calculator. Enter length and material to see your low, typical, and high sample range."
          },
          {
            "@type": "HowToStep",
            "name": "Step 4",
            "text": "Compare 3 written quotes. Ask each installer to list panels, posts, gates, and permits separately."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a fence cost per foot?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A sample range is $14 to $38 per foot installed, by material."
            }
          },
          {
            "@type": "Question",
            "name": "Wood or vinyl fence, which is cheaper?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Wood costs less up front, and vinyl costs less over time."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need a permit for a fence?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Many US cities require a fence permit, so check local rules first."
            }
          },
          {
            "@type": "Question",
            "name": "How long does a wood fence last?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A wood fence lasts about 15 to 20 years with care."
            }
          },
          {
            "@type": "Question",
            "name": "How much does a fence gate cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A walk gate costs about $150 to $600, per RemodelCalculators. A double drive gate costs $600 to $1,500, and an automatic opener adds $500 to $2,000, per Quotsey."
            }
          }
        ]
      }
    ]
  }
---

<section class="wrap">
  <p class="crumb"><a href="{{ '/' | relative_url }}">Home</a> / <a href="{{ '/tools/' | relative_url }}">Tools</a> / Fence Cost Calculator</p>
  <p class="kicker">Free Calculator</p>
  <h1>Fence Cost Calculator</h1>
  <div class="answer">
    <p id="answerIntro">A typical 150 ft wood privacy fence in the USA costs about $3,335, with a sample range of $2,100 to $5,400.</p>
    <p class="note">All prices on this page are sample estimated USA ranges, not quotes. Read the full <a href="{{ '/blog/how-much-does-a-fence-cost/' | relative_url }}">fence cost guide</a> for prices by material, height, and region.</p>
    <p class="updated-line">Updated November 14, 2026</p>
  </div>

  <img class="calc-hero-img" src="{{ page.image | relative_url }}" srcset="{{ page.image_card | relative_url }} 800w, {{ page.image | relative_url }} 1200w" sizes="(max-width: 760px) 100vw, 1200px" width="{{ page.image_w | default: 1200 }}" height="{{ page.image_h | default: 800 }}" alt="{{ page.image_alt }}" loading="lazy" decoding="async"{% if page.image_pos %} style="object-position: {{ page.image_pos }};"{% endif %}>

  <div class="calc">
    <h2>Fence Cost Calculator</h2>
    <p>Pick your fence length, material, height, and gates to see a sample estimated price for your fence.</p>
    <div class="calc-field">
      <label for="fenceLength">Fence length: <span id="fenceLengthVal">150 ft</span></label>
      <input type="range" id="fenceLength" min="50" max="400" step="10" value="150">
      <p class="hint">Measure along the boundary where the fence will run.</p>
    </div>
    <div class="calc-field">
      <label for="material">Fence material</label>
      <select id="material">
        <option value="22.23" selected>Wood ($22.23 per ft)</option>
        <option value="38.00">Vinyl ($38.00 per ft)</option>
        <option value="14.00">Chain link ($14.00 per ft)</option>
      </select>
    </div>
    <div class="calc-field">
      <label for="fenceHeight">Fence height</label>
      <select id="fenceHeight">
        <option value="0.7142857">4 ft</option>
        <option value="1" selected>6 ft</option>
        <option value="1.3">8 ft</option>
      </select>
      <p class="hint">6 ft is the standard privacy height. A 4 ft fence costs less per foot, and an 8 ft fence costs more.</p>
    </div>
    <div class="calc-field">
      <label for="gateCount">Extra walk gates</label>
      <select id="gateCount">
        <option value="0" selected>0 gates</option>
        <option value="1">1 gate</option>
        <option value="2">2 gates</option>
        <option value="3">3 gates</option>
        <option value="4">4 gates</option>
      </select>
      <p class="hint">Each extra walk gate adds $150 to $600, per RemodelCalculators. Basic gate hardware is already in the breakdown below.</p>
    </div>
    <div class="receipt">
      <h3>Your estimated cost</h3>
      <p class="receipt-total" id="typVal">$3,335</p>
      <p class="receipt-range">Sample range: <span id="lowVal">$2,100</span> (low) to <span id="highVal">$5,400</span> (high)</p>
      <div class="price-bar receipt-bar" aria-hidden="true"><span id="rangeBar" style="width:37%"></span></div>
      <p class="note">Sample estimated USA range. Your final price depends on fence length, material, height, gates, and local labor rates.</p>
    </div>
  </div>

  <h2>Low, typical, and high cost</h2>
  <p>These bands update with your calculator choices. Use them to plan your budget before you request quotes.</p>
  <div class="bands">
    <div class="band">
      <p class="band-label">Low</p>
      <p class="band-price" id="bandLowVal">$2,100</p>
      <p>A smaller job with basic choices.</p>
    </div>
    <div class="band band-typical"><p class="band-tag">Most common</p>
      <p class="band-label">Typical</p>
      <p class="band-price" id="bandTypVal">$3,335</p>
      <p>Your selection at typical USA rates.</p>
    </div>
    <div class="band">
      <p class="band-label">High</p>
      <p class="band-price" id="bandHighVal">$5,400</p>
      <p>A larger job, premium choices, or extra services.</p>
    </div>
  </div>

  <h2>Itemized cost breakdown</h2>
  <p class="note live-note">Updates live with your calculator choices.</p>
  <p class="table-hint">Swipe to see the High column &rarr;</p>
  <div class="table-wrap">
    <table class="cost-table">
      <caption>Sample estimated cost breakdown, updated for your selection</caption>
      <thead>
        <tr><th>Item</th><th>Low</th><th>Typical</th><th>High</th></tr>
      </thead>
      <tbody>
        <tr id="matRow"><td>Materials (panels, posts, concrete)</td><td>$1,100</td><td>$1,750</td><td>$2,850</td></tr>
        <tr><td id="laborLabel">Labor (2 installers, 1 to 2 days)</td><td>$650</td><td>$1,050</td><td>$1,690</td></tr>
        <tr id="gateRow"><td>Gates and hardware</td><td>$120</td><td>$200</td><td>$320</td></tr>
        <tr id="stainRow"><td>Staining and sealing</td><td>$90</td><td>$150</td><td>$240</td></tr>
        <tr><td>Permits and fees</td><td>$80</td><td>$110</td><td>$190</td></tr>
        <tr><td>Supplies and equipment</td><td>$60</td><td>$75</td><td>$110</td></tr>
        <tr class="total"><td>Totals</td><td>$2,100</td><td>$3,335</td><td>$5,400</td></tr>
      </tbody>
    </table>
  </div>
  <p class="note">Sample estimated USA ranges. Materials and labor together are most of the total. Staining and sealing is $0 for vinyl and chain link, because those materials are not stained. The staining amount is moved into the materials row for those materials, so the totals still add up exactly.</p>

  <h2>How to estimate in 4 steps</h2>
  <ol class="steps">
    <li><strong>Measure your fence length.</strong> Walk the boundary and add gate openings to the total length.</li>
    <li><strong>Pick a material.</strong> Chain link costs least per foot, wood privacy costs least among privacy fences up front, and vinyl costs more but needs less care.</li>
    <li><strong>Run the calculator.</strong> Enter length, material, height, and gates to see your low, typical, and high sample range.</li>
    <li><strong>Compare 3 written quotes.</strong> Ask each installer to list panels, posts, gates, and permits separately.</li>
  </ol>

  <h2>What affects the price</h2>
  <h3>Fence length</h3>
  <p>Cost scales with length, so an accurate measurement matters more than any other input. Walk the boundary with a tape or measuring wheel, and include the space for every gate.</p>
  <h3>Material</h3>
  <p>Chain link is the cheapest per foot, and wood privacy is the cheapest full privacy fence up front. Vinyl costs more to install but needs less care, so it can cost less over its life. Your choice sets both the up front price and the long term upkeep.</p>
  <h3>Fence height and style</h3>
  <p>Taller fences and privacy styles use more material and cost more than short picket fences. Going from a 4 ft fence to a 6 ft fence adds about 30 to 50 percent per foot, per Quotsey, and an 8 ft fence adds about 25 to 35 percent over a 6 ft fence, per BuilderMuse. The calculator applies the middle of each range: 4 ft costs about 71 percent of the 6 ft rate, and 8 ft costs 130 percent of the 6 ft rate. At the 150 ft wood default, that is $2,382 for 4 ft, $3,335 for 6 ft, and $4,335 for 8 ft.</p>
  <h3>Gates and slopes</h3>
  <p>Gates add hardware and labor, and sloped ground needs stepped panels and extra posts. Each walk gate adds about $150 to $600, per RemodelCalculators, so count them before you ask for a quote. On a slope, a racked fence follows the ground on gentle slopes below about 15 degrees, while a stepped fence is used on steeper ground, per RemodelCalculators.</p>
  <h3>Permits and surveys</h3>
  <p>Many cities require a fence permit, and a survey may be needed to confirm the boundary. Permit fees vary by city, and a survey is often a separate cost.</p>

  <h2>What is included and what is not</h2>
  <div class="two-col">
    <div>
      <h3>What is included</h3>
      <ul class="checklist">
        <li>Panels, posts, and concrete</li>
        <li>Labor and installation</li>
        <li>Basic gates and hardware</li>
        <li>Staining or sealing for wood fences</li>
      </ul>
    </div>
    <div>
      <h3>What is not included</h3>
      <ul class="checklist checklist-x">
        <li>Old fence removal</li>
        <li>Land surveys</li>
        <li>Premium caps and decorative tops</li>
        <li>Retaining walls</li>
      </ul>
    </div>
  </div>

  <h2>How we estimate</h2>
  <p>We start with the fence length times the per foot rate for the material you pick, then adjust for height: 4 ft uses about 71 percent of the 6 ft rate and 8 ft uses 130 percent. The low band sits at 63 percent of the typical price and the high band at 162 percent. Each extra walk gate then adds $150 at the low end, $375 typical, and $600 at the high end. The result is a sample estimated USA range for planning, and the itemized rows always add up to the totals shown.</p>
  <p>Your final price depends on height, gates, ground slope, and local labor rates, so always confirm the price in writing before work starts.</p>

  <h2>Hiring a pro checklist</h2>
  <ul class="checklist">
    <li>Get 3 written quotes and compare them line by line</li>
    <li>Ask for the post spec: wood or metal posts, post spacing, and concrete depth</li>
    <li>Confirm the post spacing in writing, usually 6 to 8 ft apart</li>
    <li>Ask how the posts are set in concrete and how deep they go</li>
    <li>Confirm the gate count, gate size, and gate hardware in writing</li>
    <li>Ask who pulls the permit and what it costs</li>
    <li>Ask about the warranty on materials and labor</li>
    <li>Confirm the installer will call 811 before digging</li>
  </ul>

  <h2>Budget tips</h2>
  <ul>
    <li>Choose chain link for the lowest cost per foot, or wood for the lowest cost privacy fence</li>
    <li>Share a boundary fence cost with a neighbor when rules allow</li>
    <li>Keep the design simple with fewer gates</li>
    <li>Get quotes in the off season when installers are less busy</li>
  </ul>

  <h2>References</h2>
  <p>Our estimates use public US cost data as a guide. Fence prices by material and height come from RemodelCalculators, Quotsey, and BuilderMuse, labor cost context comes from the US Bureau of Labor Statistics, remodeling trends from Harvard JCHS, and material prices from Home Depot and Lowes. All prices on this page are sample estimated USA ranges, not quotes.</p>
  <div class="refs">
  <p><a href="https://remodelcalculators.com/fence-cost" target="_blank" rel="noopener">RemodelCalculators</a> <span class="ref-note">fence cost per foot, by material and height</span></p>
  <p><a href="https://www.quotsey.com/cost-guides/fence-installation-cost/" target="_blank" rel="noopener">Quotsey</a> <span class="ref-note">fence installation cost by material and region</span></p>
  <p><a href="https://buildermuse.com/residential/fence-installation-cost-2026/" target="_blank" rel="noopener">BuilderMuse</a> <span class="ref-note">fence installation cost, HomeAdvisor survey data</span></p>
  <p><a href="https://www.bls.gov/" target="_blank" rel="noopener">US Bureau of Labor Statistics</a> <span class="ref-note">labor cost data</span></p>
  <p><a href="https://www.jchs.harvard.edu/" target="_blank" rel="noopener">Harvard JCHS</a> <span class="ref-note">household and remodeling cost research</span></p>
  <p><a href="https://www.homedepot.com/" target="_blank" rel="noopener">Home Depot</a> <span class="ref-note">fence material prices</span></p>
  <p><a href="https://www.lowes.com/" target="_blank" rel="noopener">Lowes</a> <span class="ref-note">fence material prices</span></p>
  </div>

  <h2>Compare with other home projects</h2>
  <p>If you are pricing a full exterior refresh, see the <a href="{{ '/roof-replacement-cost-calculator/' | relative_url }}">Roof Replacement Cost Calculator</a> and the <a href="{{ '/house-painting-cost-calculator/' | relative_url }}">House Painting Cost Calculator</a>. If the fence is for a new home, the <a href="{{ '/movers-cost-calculator/' | relative_url }}">Movers Cost Calculator</a> prices the move itself.</p>

  <h2>Related calculators and guides</h2>
  <div class="grid related-grid">
<div class="card related-card"><img class="card-img" src="{{ '/assets/images/movers-card.webp' | relative_url }}" srcset="{{ '/assets/images/movers-card.webp' | relative_url }} 800w, {{ '/assets/images/movers-hero.webp' | relative_url }} 1200w" sizes="(max-width: 760px) 100vw, 800px" width="800" height="534" alt="Two professional movers carrying cardboard boxes in a bright room on moving day" loading="lazy" decoding="async"><div class="card-top"><span class="card-cat">Moving</span></div><h3><a href="{{ '/movers-cost-calculator/' | relative_url }}">Movers Cost Calculator</a></h3><p class="price">$843 - $1,637</p><a class="card-cta" href="{{ '/movers-cost-calculator/' | relative_url }}">Calculate your price &rarr;</a></div>
<div class="card related-card"><img class="card-img" src="{{ '/assets/images/roof-card.webp' | relative_url }}" srcset="{{ '/assets/images/roof-card.webp' | relative_url }} 800w, {{ '/assets/images/roof-hero.webp' | relative_url }} 1200w" sizes="(max-width: 760px) 100vw, 800px" width="800" height="534" alt="Roofer installing asphalt shingles on a residential roof with a nail gun" loading="lazy" decoding="async"><div class="card-top"><span class="card-cat">Home</span></div><h3><a href="{{ '/roof-replacement-cost-calculator/' | relative_url }}">Roof Replacement Cost Calculator</a></h3><p class="price">$7,528 - $11,475</p><a class="card-cta" href="{{ '/roof-replacement-cost-calculator/' | relative_url }}">Calculate your price &rarr;</a></div>
<div class="card related-card"><img class="card-img" src="{{ '/assets/images/oil-change-card.webp' | relative_url }}" srcset="{{ '/assets/images/oil-change-card.webp' | relative_url }} 800w, {{ '/assets/images/oil-change-hero.webp' | relative_url }} 1200w" sizes="(max-width: 760px) 100vw, 800px" width="800" height="534" alt="Mechanic pouring engine oil into a car engine in a garage" loading="lazy" decoding="async"><div class="card-top"><span class="card-cat">Car</span></div><h3><a href="{{ '/oil-change-cost-calculator/' | relative_url }}">Oil Change Cost Calculator</a></h3><p class="price">$45 - $140</p><a class="card-cta" href="{{ '/oil-change-cost-calculator/' | relative_url }}">Calculate your price &rarr;</a></div>
<div class="card related-card"><img class="card-img" src="{{ '/assets/images/fence-card.webp' | relative_url }}" srcset="{{ '/assets/images/fence-card.webp' | relative_url }} 800w, {{ '/assets/images/fence-hero.webp' | relative_url }} 1200w" sizes="(max-width: 760px) 100vw, 800px" width="800" height="1200" alt="Wooden fence and gate beside a stone path in a sunny backyard" loading="lazy" decoding="async"><div class="card-top"><span class="card-cat">Guide</span></div><h3><a href="{{ '/blog/how-much-does-a-fence-cost/' | relative_url }}">How Much Does a Fence Cost?</a></h3><p class="price">$2,100 - $5,400</p><a class="card-cta" href="{{ '/blog/how-much-does-a-fence-cost/' | relative_url }}">Read the guide &rarr;</a></div>
</div>
<ul class="chip-list">
  <li><a href="{{ '/central-ac-installation-cost-calculator/' | relative_url }}">Central AC Installation Cost Calculator <span aria-hidden="true">&rarr;</span></a></li>
  <li><a href="{{ '/car-wrap-cost-calculator/' | relative_url }}">Car Wrap Cost Calculator <span aria-hidden="true">&rarr;</span></a></li>
  <li><a href="{{ '/house-painting-cost-calculator/' | relative_url }}">House Painting Cost Calculator <span aria-hidden="true">&rarr;</span></a></li>
  <li><a href="{{ '/tools/' | relative_url }}">All calculators <span aria-hidden="true">&rarr;</span></a></li>
</ul>

  <h2>Frequently asked questions</h2>
  <details class="faq">
    <summary>How much does a fence cost per foot?</summary>
    <p>A sample range is $14 to $38 per foot installed, by material.</p>
  </details>
  <details class="faq">
    <summary>Wood or vinyl fence, which is cheaper?</summary>
    <p>Wood costs less up front, and vinyl costs less over time.</p>
  </details>
  <details class="faq">
    <summary>Do I need a permit for a fence?</summary>
    <p>Many US cities require a fence permit, so check local rules first.</p>
  </details>
  <details class="faq">
    <summary>How long does a wood fence last?</summary>
    <p>A wood fence lasts about 15 to 20 years with care.</p>
  </details>
  <details class="faq">
    <summary>How much does a fence gate cost?</summary>
    <p>A walk gate costs about $150 to $600, per RemodelCalculators. A double drive gate costs $600 to $1,500, and an automatic opener adds $500 to $2,000, per Quotsey.</p>
  </details>
</section>

<script>
(function () {
  "use strict";
  function fmt(n) {
    if (window.hmCostFmt) { return window.hmCostFmt(n); }
    return "$" + Math.round(n).toLocaleString("en-US");
  }
  function round10(n) { return Math.round(n / 10) * 10; }
  function num(txt) { return parseFloat(String(txt).replace(/[^0-9.]/g, "")) || 0; }
  function update() {
    var len = parseFloat(document.getElementById("fenceLength").value);
    var matVal = document.getElementById("material").value;
    var rate = parseFloat(matVal);
    var hMult = parseFloat(document.getElementById("fenceHeight").value);
    var gates = parseInt(document.getElementById("gateCount").value, 10) || 0;
    document.getElementById("fenceLengthVal").textContent = Math.round(len).toLocaleString("en-US") + " ft";
    var baseTyp = Math.round(len * rate * hMult);
    var baseLow = round10(baseTyp * 0.63);
    var baseHigh = round10(baseTyp * 1.62);
    var gateAmt = [150 * gates, 375 * gates, 600 * gates];
    var low = baseLow + gateAmt[0];
    var typ = baseTyp + gateAmt[1];
    var high = baseHigh + gateAmt[2];
    document.getElementById("lowVal").textContent = fmt(low);
    document.getElementById("typVal").textContent = fmt(typ);
    document.getElementById("highVal").textContent = fmt(high);
    var matName = { "22.23": "wood privacy", "38.00": "vinyl", "14.00": "chain link" }[matVal];
    var heightFt = document.getElementById("fenceHeight").selectedOptions[0].text;
    var intro = "A typical " + Math.round(len).toLocaleString("en-US") + " ft " + heightFt + " " + matName + " fence in the USA costs about " + fmt(typ) + ", with a sample range of " + fmt(low) + " to " + fmt(high) + ".";
    if (gates > 0) { intro += " That includes " + gates + " extra walk gate" + (gates > 1 ? "s" : "") + "."; }
    var days = len <= 100 ? "half a day" : len <= 200 ? "1 to 2 days" : len <= 300 ? "2 to 3 days" : "3 to 4 days";
    var labor = "Labor (2 installers, " + days + ")";
    try { if (window.hmSync) { window.hmSync(baseLow, baseTyp, baseHigh, 2100, 3335, 5400, { intro: intro, labor: labor }); } } catch (e) {}
    var table = document.querySelector(".cost-table");
    if (table) {
      var matCells = document.getElementById("matRow").querySelectorAll("td");
      var gateCells = document.getElementById("gateRow").querySelectorAll("td");
      var stainCells = document.getElementById("stainRow").querySelectorAll("td");
      var totalCells = table.querySelector("tbody tr.total").querySelectorAll("td");
      var bandIds = ["bandLowVal", "bandTypVal", "bandHighVal"];
      for (var c = 0; c < 3; c++) {
        if (matVal !== "22.23") {
          var stainVal = num(stainCells[c + 1].textContent);
          matCells[c + 1].textContent = fmt(num(matCells[c + 1].textContent) + stainVal);
          stainCells[c + 1].textContent = fmt(0);
        }
        if (gates > 0) {
          gateCells[c + 1].textContent = fmt(num(gateCells[c + 1].textContent) + gateAmt[c]);
          totalCells[c + 1].textContent = fmt(num(totalCells[c + 1].textContent) + gateAmt[c]);
          var band = document.getElementById(bandIds[c]);
          if (band) { band.textContent = fmt(num(band.textContent) + gateAmt[c]); }
        }
      }
    }
    var bar = document.getElementById("rangeBar");
    if (bar && high > low) {
      bar.style.width = Math.max(4, Math.min(100, Math.round((typ - low) / (high - low) * 100))) + "%";
    }
  }
  document.getElementById("fenceLength").addEventListener("input", update);
  document.getElementById("material").addEventListener("change", update);
  document.getElementById("fenceHeight").addEventListener("change", update);
  document.getElementById("gateCount").addEventListener("change", update);
  update();
})();
</script>
