---
layout: default
title: "Roof Replacement Cost Calculator"
meta_title: "Roof Replacement Cost Calculator: Price by Roof Size"
meta_description: "Use the free Roof Replacement Cost Calculator to price a new roof by size and material, with low, typical, and high sample USA ranges shown here."
permalink: /roof-replacement-cost-calculator/
breadcrumb: Tools
schema: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "Roof Replacement Cost Calculator",
        "description": "Use the free Roof Replacement Cost Calculator to price a new roof by size and material, with low, typical, and high sample USA ranges shown here.",
        "url": "https://howmuchdoesitcostusa.com/roof-replacement-cost-calculator/"
      },
      {
        "@type": "HowTo",
        "name": "How to estimate roof replacement cost",
        "description": "Estimate the cost of a new roof in 4 steps using roof size and material.",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Step 1",
            "text": "Measure your roof size. Use the roof square footage, not the home floor area, since pitch adds surface."
          },
          {
            "@type": "HowToStep",
            "name": "Step 2",
            "text": "Pick a material. Asphalt costs least, metal costs more and lasts longer, and clay tile costs most."
          },
          {
            "@type": "HowToStep",
            "name": "Step 3",
            "text": "Run the calculator. Enter size and material to see your low, typical, and high sample range."
          },
          {
            "@type": "HowToStep",
            "name": "Step 4",
            "text": "Compare 3 written quotes. Ask each roofer to list tear-off, underlayment, flashing, and permits separately."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does a new roof last?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Asphalt lasts 20 to 30 years, and metal lasts 40 to 70 years."
            }
          },
          {
            "@type": "Question",
            "name": "Does roof replacement need a permit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most US cities require a permit for roof replacement."
            }
          },
          {
            "@type": "Question",
            "name": "Can a new roof go over the old one?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sometimes a new roof can go over the old one, but tear-off is usually better."
            }
          },
          {
            "@type": "Question",
            "name": "When is the cheapest time to replace a roof?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Late fall and winter are often the cheapest times to replace a roof."
            }
          },
          {
            "@type": "Question",
            "name": "Does homeowners insurance pay for a new roof?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Storm damage is often covered, while wear and age are usually excluded. You pay the deductible first, and the insurer pays the covered cost above it."
            }
          }
        ]
      }
    ]
  }
---

<section class="wrap">
  <p class="crumb"><a href="{{ '/' | relative_url }}">Home</a> / <a href="{{ '/tools/' | relative_url }}">Tools</a> / Roof Replacement Cost Calculator</p>
  <p class="kicker">Free Calculator</p>
  <h1>Roof Replacement Cost Calculator</h1>
  <p class="page-byline">By <strong>How Much Does It Cost USA Team</strong> <span class="byline-dot" aria-hidden="true">|</span> Updated November 2026</p>
  <div class="answer">
    <p id="answerIntro">A typical 1,800 sq ft asphalt shingle roof in the USA costs about $9,180, with a sample range of $7,528 to $11,475.</p>
    <p class="note">All prices on this page are sample estimated USA ranges, not quotes.</p>
    <p class="updated-line">Updated November 14, 2026</p>
  </div>

  <div class="calc">
    <h2>Roof Replacement Cost Calculator</h2>
    <p>Pick your roof size and material to see a sample estimated price for a new roof. For prices by roof size, repair vs replace rules, and insurance, see the full <a href="{{ '/blog/how-much-does-it-cost-to-replace-a-roof/' | relative_url }}">How Much Does It Cost to Replace a Roof?</a> guide.</p>
    <div class="calc-field">
      <label for="roofSize">Roof size: <span id="roofSizeVal">1,800 sq ft</span></label>
      <input type="range" id="roofSize" min="800" max="4000" step="50" value="1800">
      <p class="hint">Use the roof surface area, not the home floor area.</p>
    </div>
    <div class="calc-field">
      <label for="roofSizeNum">Or type your roof size (sq ft)</label>
      <input type="number" id="roofSizeNum" min="800" max="4000" step="50" value="1800" inputmode="numeric">
      <p class="hint">From 800 to 4,000 sq ft, in steps of 50.</p>
    </div>
    <div class="calc-field">
      <label for="material">Roofing material</label>
      <select id="material">
        <option value="5.10" selected>Asphalt shingle ($5.10 per sq ft)</option>
        <option value="9.50">Metal ($9.50 per sq ft)</option>
        <option value="12.00">Clay tile ($12.00 per sq ft)</option>
      </select>
    </div>
    <div class="receipt">
      <h3>Your estimated cost</h3>
      <p class="receipt-total" id="typVal">$9,180</p>
      <p class="receipt-range">Sample range: <span id="lowVal">$7,528</span> (low) to <span id="highVal">$11,475</span> (high)</p>
      <div class="price-bar receipt-bar" aria-hidden="true"><span id="rangeBar" style="width:42%"></span></div>
      <p class="note">Sample estimated USA range. Your final price depends on roof size, material, pitch, and local labor rates.</p>
    </div>
  </div>

  <h2>Low, typical, and high cost</h2>
  <p>These bands update with your calculator choices. Use them to plan your budget before you request quotes.</p>
  <div class="bands">
    <div class="band">
      <p class="band-label">Low</p>
      <p class="band-price" id="bandLowVal">$7,528</p>
      <p>A smaller job with basic choices.</p>
    </div>
    <div class="band band-typical"><p class="band-tag">Most common</p>
      <p class="band-label">Typical</p>
      <p class="band-price" id="bandTypVal">$9,180</p>
      <p>Your selection at typical USA rates.</p>
    </div>
    <div class="band">
      <p class="band-label">High</p>
      <p class="band-price" id="bandHighVal">$11,475</p>
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
        <tr><td id="matLabel">Materials (asphalt shingle)</td><td>$3,250</td><td>$3,900</td><td>$4,800</td></tr>
        <tr><td id="laborLabel">Labor (4 to 6 roofers, 2 to 3 days)</td><td>$2,900</td><td>$3,600</td><td>$4,405</td></tr>
        <tr><td>Tear-off and disposal</td><td>$500</td><td>$600</td><td>$750</td></tr>
        <tr><td>Underlayment and flashing</td><td>$420</td><td>$520</td><td>$700</td></tr>
        <tr><td>Permits and fees</td><td>$180</td><td>$220</td><td>$320</td></tr>
        <tr><td>Supplies and equipment</td><td>$128</td><td>$140</td><td>$200</td></tr>
        <tr><td>Decking contingency</td><td>$150</td><td>$200</td><td>$300</td></tr>
        <tr class="total"><td>Totals</td><td>$7,528</td><td>$9,180</td><td>$11,475</td></tr>
      </tbody>
    </table>
  </div>
  <p class="note">Sample estimated USA ranges. Materials and labor together are most of the total. The decking contingency is an allowance for sheets found damaged during tear-off, inside the <a href="https://whathomecosts.com/roof-replacement-cost/" target="_blank" rel="noopener">WhatHomeCosts</a> range of $150 to $1,000. Tear-off is set lower than before so the totals stay the same.</p>

  <h2>Worked example: a 20-square architectural asphalt roof</h2>
  <p>A square is 100 sq ft, so 20 squares is a 2,000 sq ft roof. The line items below are from <a href="https://whathomecosts.com/roof-replacement-cost/" target="_blank" rel="noopener">WhatHomeCosts</a>, and the worked total uses the midpoint of each range, shown line by line.</p>
  <ul>
    <li>Shingles, $2,000 to $5,000, midpoint $3,500</li>
    <li>Underlayment, flashing, and ventilation, $300 to $1,200, midpoint $750</li>
    <li>Labor, $3,000 to $5,500, midpoint $4,250</li>
    <li>Tear-off and disposal, $1,000 to $2,500, midpoint $1,750</li>
    <li>Permits and inspections, $100 to $500, midpoint $300</li>
    <li>Decking contingency, $150 to $1,000, midpoint $575</li>
    <li><strong>Total: $3,500 + $750 + $4,250 + $1,750 + $300 + $575 = $11,125</strong></li>
  </ul>
  <p>That $11,125 sits inside the WhatHomeCosts total range of $6,600 to $15,500 for this job. For comparison, our calculator prices a 2,000 sq ft asphalt roof at $10,200 typical, from 2,000 x $5.10, with a range of $8,364 to $12,750.</p>

  <h2>Cost by material</h2>
  <p>Per sq ft ranges from <a href="https://whathomecosts.com/roof-replacement-cost/" target="_blank" rel="noopener">WhatHomeCosts</a> and lifespans from <a href="https://www.angi.com/articles/how-much-does-roof-replacement-cost.htm" target="_blank" rel="noopener">Angi</a>. The calculator default is architectural asphalt at $5.10 per sq ft, inside the $4 to $7 architectural range.</p>
  <p class="table-hint">Swipe to see the lifespan &rarr;</p>
  <div class="table-wrap">
    <table class="cost-table">
      <caption>Roof cost by material, per sq ft and lifespan</caption>
      <thead>
        <tr><th>Material</th><th>Per sq ft</th><th>Lifespan</th></tr>
      </thead>
      <tbody>
        <tr><td>3-tab asphalt</td><td>$3 to $5</td><td>15 to 30 years</td></tr>
        <tr><td>Architectural asphalt</td><td>$4 to $7</td><td>15 to 30 years</td></tr>
        <tr><td>Metal</td><td>$5 to $16</td><td>30 to 100 years</td></tr>
        <tr><td>Wood shake</td><td>$6 to $15</td><td>Not stated in sources used</td></tr>
        <tr><td>Concrete or clay tile</td><td>$10 to $20</td><td>50 to 100 years</td></tr>
        <tr><td>Slate</td><td>$15 to $30</td><td>Up to 200 years</td></tr>
      </tbody>
    </table>
  </div>
  <p>If you are budgeting the whole exterior, price the yard with the <a href="{{ '/fence-cost-calculator/' | relative_url }}">Fence Cost Calculator</a> too.</p>

  <h2>Cost by pitch</h2>
  <p>Steeper roofs cost more because the crew works slower and needs more safety gear. Percentages from <a href="https://whathomecosts.com/roof-replacement-cost/" target="_blank" rel="noopener">WhatHomeCosts</a>, applied to the calculator default of $9,180 for a 1,800 sq ft asphalt roof.</p>
  <p class="table-hint">Swipe to see the added cost &rarr;</p>
  <div class="table-wrap">
    <table class="cost-table">
      <caption>Roof cost by pitch, WhatHomeCosts percentages</caption>
      <thead>
        <tr><th>Pitch</th><th>Added cost</th><th>Example on $9,180</th></tr>
      </thead>
      <tbody>
        <tr><td>Under 4:12</td><td>Base price</td><td>$9,180</td></tr>
        <tr><td>4:12 to 8:12</td><td>Base to 5 to 10% more</td><td>$9,180 to $10,098</td></tr>
        <tr><td>8:12 to 12:12</td><td>About 15 to 25% more</td><td>$10,557 to $11,475</td></tr>
        <tr><td>12:12 and over</td><td>Up to about 30% more</td><td>Up to $11,934</td></tr>
      </tbody>
    </table>
  </div>
  <p>Example arithmetic: $9,180 x 1.10 = $10,098, $9,180 x 1.15 = $10,557, $9,180 x 1.25 = $11,475, and $9,180 x 1.30 = $11,934. Pitch is shown as a table only on this page, so the calculator totals above stay unchanged.</p>

  <h2>How to estimate in 4 steps</h2>
  <ol class="steps">
    <li><strong>Measure your roof size.</strong> Use the roof square footage, not the home floor area, since pitch adds surface.</li>
    <li><strong>Pick a material.</strong> Asphalt costs least, metal costs more and lasts longer, and clay tile costs most.</li>
    <li><strong>Run the calculator.</strong> Enter size and material to see your low, typical, and high sample range.</li>
    <li><strong>Compare 3 written quotes.</strong> Ask each roofer to list tear-off, underlayment, flashing, and permits separately.</li>
  </ol>

  <h2>What affects the price</h2>
  <h3>Roof size</h3>
  <p>Larger roofs need more shingles and more labor hours, so size drives the total more than any other factor. Measure the roof surface, since a pitched roof has more area than the floor below it.</p>
  <h3>Material</h3>
  <p>Asphalt shingles are the cheapest common choice, metal costs about 1.9 times as much, and clay tile costs most and needs a strong roof frame. The material you pick also sets how long the roof will last.</p>
  <h3>Roof pitch and shape</h3>
  <p>Steep or complex roofs take longer to work on and need more safety gear, which raises labor cost. A simple gable roof is faster and cheaper than a roof with many valleys, dormers, and angles.</p>
  <h3>Tear-off</h3>
  <p>Removing the old roof adds labor and disposal fees, and a second layer may hide damage that needs repair. A full tear-off lets the roofer check the deck and fix soft spots before the new roof goes on.</p>
  <h3>Location and permits</h3>
  <p>Labor rates and permit fees vary by city, and some areas require inspections at set stages. Ask your roofer which permits are needed and whether the fee is in the quote.</p>

  <h2>What is included and what is not</h2>
  <div class="two-col">
    <div>
      <h3>What is included</h3>
      <ul class="checklist">
        <li>Shingles and underlayment</li>
        <li>Labor and tear-off of the old roof</li>
        <li>Flashing and basic vents</li>
        <li>Basic permit fee</li>
      </ul>
    </div>
    <div>
      <h3>What is not included</h3>
      <ul class="checklist checklist-x">
        <li>Gutters and downspouts</li>
        <li>Skylights</li>
        <li>Structural repairs and rot repair</li>
        <li>Premium shingle upgrades</li>
      </ul>
    </div>
  </div>

  <h2>How we estimate</h2>
  <p>We take your roof size in square feet and multiply it by the per square foot rate for the material you pick: asphalt shingle at $5.10, metal at $9.50, and clay tile at $12.00. Low is 82 percent of the typical price and high is 125 percent. The itemized table then splits that total into materials, labor, tear-off, underlayment, permits, supplies, and a decking contingency, so the rows always add up to the total shown.</p>
  <p>Pitch is not a calculator input on this page. The pitch table above shows what a steeper roof adds, so you can adjust the estimate yourself. Your final price also depends on local labor rates and the condition of the roof deck, so always confirm the price in writing before work starts.</p>

  <h2>Hiring a pro checklist</h2>
  <ul class="checklist">
    <li>Get 3 written quotes with material brands listed</li>
    <li>Check the roofer license, insurance, and reviews</li>
    <li>Ask for the per-sheet decking price in the contract, so deck repairs are not an open bill</li>
    <li>Ask about both warranties: the workmanship warranty and the manufacturer material warranty</li>
    <li>Confirm tear-off and disposal are included</li>
    <li>Ask who pulls the permit, and check the permit is in the quote</li>
  </ul>

  <h2>Budget tips</h2>
  <ul>
    <li>Replace in late fall or winter when demand is lower</li>
    <li>Ask about mid-grade shingles for the best value</li>
    <li>Fix small leaks early before deck damage grows</li>
    <li>Compare quotes line by line, not just the total</li>
    <li>If you are moving into the home, price the move too with the <a href="{{ '/movers-cost-calculator/' | relative_url }}">Movers Cost Calculator</a></li>
  </ul>

  <h2>References</h2>
  <p>Our estimates use public US cost data as a guide. Roofer wage context comes from the US Bureau of Labor Statistics, and roofing material prices come from Home Depot and Lowes. Roof averages on this page come from Angi, This Old House, WhatHomeCosts, and Costimated. All prices on this page are sample estimated USA ranges, not quotes.</p>
  <div class="refs">
  <p><a href="https://www.bls.gov/" target="_blank" rel="noopener">US Bureau of Labor Statistics</a> <span class="ref-note">roofer wage data</span></p>
  <p><a href="https://www.homedepot.com/" target="_blank" rel="noopener">Home Depot</a> <span class="ref-note">roofing material prices</span></p>
  <p><a href="https://www.lowes.com/" target="_blank" rel="noopener">Lowes</a> <span class="ref-note">roofing material prices</span></p>
  <p><a href="https://www.angi.com/articles/how-much-does-roof-replacement-cost.htm" target="_blank" rel="noopener">Angi</a> <span class="ref-note">roof replacement averages by material</span></p>
  <p><a href="https://www.thisoldhouse.com/roofing/new-roof-cost" target="_blank" rel="noopener">This Old House</a> <span class="ref-note">roof cost by material and roof size</span></p>
  <p><a href="https://whathomecosts.com/roof-replacement-cost/" target="_blank" rel="noopener">WhatHomeCosts</a> <span class="ref-note">roof cost by material, pitch, and line items</span></p>
  <p><a href="https://www.costimated.com/costs/roof-replacement-cost/" target="_blank" rel="noopener">Costimated</a> <span class="ref-note">national turnkey roof replacement average</span></p>
  </div>

  <h2>Related calculators and guides</h2>
  <div class="grid related-grid">
<div class="card related-card"><div class="card-art" aria-hidden="true"><svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 5h12v11H2z"/><path d="M14 9h4l3 3v4h-7"/><circle cx="6" cy="18" r="1.8"/><circle cx="17" cy="18" r="1.8"/></svg></div><div class="card-top"><span class="card-cat">Moving</span></div><h3><a href="{{ '/movers-cost-calculator/' | relative_url }}">Movers Cost Calculator</a></h3><p class="price">$843 - $1,637</p><a class="card-cta" href="{{ '/movers-cost-calculator/' | relative_url }}">Calculate your price &rarr;</a></div>
<div class="card related-card"><div class="card-art" aria-hidden="true"><svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3v18M10 3v18M16 3v18M20 3v18"/><path d="M3 8h18M3 16h18"/></svg></div><div class="card-top"><span class="card-cat">Home</span></div><h3><a href="{{ '/fence-cost-calculator/' | relative_url }}">Fence Cost Calculator</a></h3><p class="price">$2,100 - $5,400</p><a class="card-cta" href="{{ '/fence-cost-calculator/' | relative_url }}">Calculate your price &rarr;</a></div>
<div class="card related-card"><div class="card-art" aria-hidden="true"><svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/><path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5"/></svg></div><div class="card-top"><span class="card-cat">Car</span></div><h3><a href="{{ '/oil-change-cost-calculator/' | relative_url }}">Oil Change Cost Calculator</a></h3><p class="price">$45 - $140</p><a class="card-cta" href="{{ '/oil-change-cost-calculator/' | relative_url }}">Calculate your price &rarr;</a></div>
<div class="card related-card"><div class="card-art" aria-hidden="true"><svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12 12 3l10 9"/><path d="M6 10v10h12V10"/><path d="M9.5 14h2m2 0h2m-6 3h2m2 0h2"/></svg></div><div class="card-top"><span class="card-cat">Guide</span></div><h3><a href="{{ '/blog/how-much-does-it-cost-to-replace-a-roof/' | relative_url }}">How Much Does It Cost to Replace a Roof?</a></h3><p class="price">$7,528 - $11,475</p><a class="card-cta" href="{{ '/blog/how-much-does-it-cost-to-replace-a-roof/' | relative_url }}">Read the guide &rarr;</a></div>
</div>
<ul class="chip-list">
  <li><a href="{{ '/central-ac-installation-cost-calculator/' | relative_url }}">Central AC Installation Cost Calculator <span aria-hidden="true">&rarr;</span></a></li>
  <li><a href="{{ '/car-wrap-cost-calculator/' | relative_url }}">Car Wrap Cost Calculator <span aria-hidden="true">&rarr;</span></a></li>
  <li><a href="{{ '/house-painting-cost-calculator/' | relative_url }}">House Painting Cost Calculator <span aria-hidden="true">&rarr;</span></a></li>
  <li><a href="{{ '/tools/' | relative_url }}">All calculators <span aria-hidden="true">&rarr;</span></a></li>
</ul>

  <h2>Frequently asked questions</h2>
  <details class="faq">
    <summary>How long does a new roof last?</summary>
    <p>Asphalt lasts 20 to 30 years, and metal lasts 40 to 70 years.</p>
  </details>
  <details class="faq">
    <summary>Does roof replacement need a permit?</summary>
    <p>Most US cities require a permit for roof replacement.</p>
  </details>
  <details class="faq">
    <summary>Can a new roof go over the old one?</summary>
    <p>Sometimes a new roof can go over the old one, but tear-off is usually better.</p>
  </details>
  <details class="faq">
    <summary>When is the cheapest time to replace a roof?</summary>
    <p>Late fall and winter are often the cheapest times to replace a roof.</p>
  </details>
  <details class="faq">
    <summary>Does homeowners insurance pay for a new roof?</summary>
    <p>Storm damage is often covered, while wear and age are usually excluded. You pay the deductible first, and the insurer pays the covered cost above it.</p>
  </details>
</section>

<script>
(function () {
  "use strict";
  function fmt(n) {
    if (window.hmCostFmt) { return window.hmCostFmt(n); }
    return "$" + Math.round(n).toLocaleString("en-US");
  }
  function update() {
    var size = parseFloat(document.getElementById("roofSize").value);
    var matVal = document.getElementById("material").value;
    var rate = parseFloat(matVal);
    document.getElementById("roofSizeVal").textContent = Math.round(size).toLocaleString("en-US") + " sq ft";
    var num = document.getElementById("roofSizeNum");
    if (num && document.activeElement !== num) { num.value = Math.round(size); }
    var typ = size * rate;
    var low = Math.round(typ * 0.82);
    var high = Math.round(typ * 1.25);
    document.getElementById("lowVal").textContent = fmt(low);
    document.getElementById("typVal").textContent = fmt(typ);
    document.getElementById("highVal").textContent = fmt(high);
    var matName = { "5.10": "asphalt shingle", "9.50": "metal", "12.00": "clay tile" }[matVal];
    var matLabel = document.getElementById("matLabel");
    if (matLabel) { matLabel.textContent = "Materials (" + matName + ")"; }
    var intro = "A typical " + Math.round(size).toLocaleString("en-US") + " sq ft " + matName + " roof in the USA costs about " + fmt(typ) + ", with a sample range of " + fmt(low) + " to " + fmt(high) + ".";
    var days = size < 1200 ? "1 to 2 days" : size < 2200 ? "2 to 3 days" : size < 3000 ? "3 to 4 days" : "4 to 6 days";
    var labor = "Labor (4 to 6 roofers, " + days + ")";
    try { if (window.hmSync) { window.hmSync(low, typ, high, 7528, 9180, 11475, { intro: intro, labor: labor }); } } catch (e) {}
  }
  document.getElementById("roofSize").addEventListener("input", update);
  document.getElementById("material").addEventListener("change", update);
  var numEl = document.getElementById("roofSizeNum");
  numEl.addEventListener("input", function () {
    var v = parseFloat(numEl.value);
    if (isNaN(v) || v < 800 || v > 4000) { return; }
    document.getElementById("roofSize").value = Math.round(v / 50) * 50;
    update();
  });
  numEl.addEventListener("change", function () {
    var v = parseFloat(numEl.value);
    if (isNaN(v)) { numEl.value = document.getElementById("roofSize").value; update(); return; }
    v = Math.max(800, Math.min(4000, Math.round(v / 50) * 50));
    document.getElementById("roofSize").value = v;
    update();
  });
  update();
})();
</script>
