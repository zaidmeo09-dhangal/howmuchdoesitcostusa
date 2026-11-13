---
layout: default
title: "How Much Does It Cost to Paint a House?"
meta_title: "How Much Does It Cost to Paint a House? Calculator"
meta_description: "How much does it cost to paint a house? Estimate interior and exterior painting by home size, with low, typical, and high prices in the USA."
permalink: /house-painting-cost-calculator/
breadcrumb: Tools
schema: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "How Much Does It Cost to Paint a House?",
        "description": "How much does it cost to paint a house? Estimate interior and exterior painting by home size, with low, typical, and high prices in the USA.",
        "url": "https://howmuchdoesitcostusa.com/house-painting-cost-calculator/"
      },
      {
        "@type": "HowTo",
        "name": "How to estimate house painting cost",
        "description": "Estimate the cost of painting a house in 4 steps using job type and home size.",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Step 1",
            "text": "Measure your home size. Use the home floor area as the starting point for the estimate."
          },
          {
            "@type": "HowToStep",
            "name": "Step 2",
            "text": "Pick the job type. Exterior and interior jobs use different paint and prep, so prices differ."
          },
          {
            "@type": "HowToStep",
            "name": "Step 3",
            "text": "Run the calculator. Select job type and home size to see your low, typical, and high sample range."
          },
          {
            "@type": "HowToStep",
            "name": "Step 4",
            "text": "Compare 3 written quotes. Ask each painter to list paint brand, coats, prep, and repairs separately."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How often should I repaint my house exterior?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Repaint your house exterior every 5 to 10 years, by climate and paint quality."
            }
          },
          {
            "@type": "Question",
            "name": "How long does a paint job take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A paint job takes about 3 to 5 days for an average home."
            }
          },
          {
            "@type": "Question",
            "name": "Is primer included?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Primer is usually included, but ask your painter to confirm."
            }
          },
          {
            "@type": "Question",
            "name": "What paint is best?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "100 percent acrylic latex is the common USA choice."
            }
          },
          {
            "@type": "Question",
            "name": "What is not included?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Rot repair, lead paint removal, and deck staining are often extra."
            }
          }
        ]
      }
    ]
  }
---

<section class="wrap">
  <p class="crumb"><a href="{{ '/' | relative_url }}">Home</a> / <a href="{{ '/tools/' | relative_url }}">Tools</a> / House Painting Cost Calculator</p>
  <p class="kicker">Free Calculator</p>
  <h1>How Much Does It Cost to Paint a House?</h1>
  <div class="answer">
    <p>A typical exterior paint job for a 1,800 sq ft home in the USA costs about $4,200, with a sample range of $2,800 to $6,800.</p>
    <p class="note">All prices on this page are sample estimated USA ranges, not quotes.</p>
  </div>

  <div class="calc">
    <h2>House Painting Cost Calculator</h2>
    <p>Pick your job type and home size to see a sample estimated price for painting your house.</p>
    <div class="calc-field">
      <label for="jobType">Job type</label>
      <select id="jobType">
        <option value="2.33" selected>Exterior ($2.33 per sq ft)</option>
        <option value="1.85">Interior ($1.85 per sq ft)</option>
      </select>
    </div>
    <div class="calc-field">
      <label for="homeSize">Home size: <span id="homeSizeVal">1,800 sq ft</span></label>
      <input type="range" id="homeSize" min="800" max="4000" step="50" value="1800">
      <p class="hint">Use the home floor area as the starting point.</p>
    </div>
    <div class="receipt">
      <h3>Your estimated cost</h3>
      <p class="receipt-total" id="typVal">$4,200</p>
      <p class="receipt-range">Sample range: <span id="lowVal">$2,800</span> (low) to <span id="highVal">$6,800</span> (high)</p>
      <p class="note">Sample estimated USA range. Your final price depends on job type, home size, prep needs, paint brand, and local labor rates.</p>
    </div>
  </div>

  <h2>Low, typical, and high cost</h2>
  <p>These bands show what an exterior paint job for a 1,800 sq ft home usually costs in the USA. Use them to plan your budget before you request quotes.</p>
  <div class="bands">
    <div class="band">
      <p class="band-label">Low</p>
      <p class="band-price">$2,800</p>
      <p>A simple home, one coat, and light prep work.</p>
    </div>
    <div class="band band-typical">
      <p class="band-label">Typical</p>
      <p class="band-price">$4,200</p>
      <p>An exterior paint job for a 1,800 sq ft home with prep and primer.</p>
    </div>
    <div class="band">
      <p class="band-label">High</p>
      <p class="band-price">$6,800</p>
      <p>Two coats, premium paint, or heavy prep and repairs.</p>
    </div>
  </div>

  <h2>Itemized cost breakdown</h2>
  <div class="table-wrap">
    <table class="cost-table">
      <caption>Sample estimated cost breakdown for an exterior paint job on a 1,800 sq ft home</caption>
      <thead>
        <tr><th>Item</th><th>Low</th><th>Typical</th><th>High</th></tr>
      </thead>
      <tbody>
        <tr><td>Paint and primer</td><td>$900</td><td>$1,300</td><td>$2,100</td></tr>
        <tr><td>Labor</td><td>$1,500</td><td>$2,300</td><td>$3,800</td></tr>
        <tr><td>Prep and repairs</td><td>$220</td><td>$350</td><td>$550</td></tr>
        <tr><td>Supplies and equipment</td><td>$130</td><td>$180</td><td>$250</td></tr>
        <tr><td>Permits and fees</td><td>$50</td><td>$70</td><td>$100</td></tr>
        <tr class="total"><td>Totals</td><td>$2,800</td><td>$4,200</td><td>$6,800</td></tr>
      </tbody>
    </table>
  </div>
  <p class="note">Sample estimated USA ranges. Labor is usually the largest share of a paint job.</p>

  <h2>How to estimate in 4 steps</h2>
  <ol class="steps">
    <li><strong>Measure your home size.</strong> Use the home floor area as the starting point for the estimate.</li>
    <li><strong>Pick the job type.</strong> Exterior and interior jobs use different paint and prep, so prices differ.</li>
    <li><strong>Run the calculator.</strong> Select job type and home size to see your low, typical, and high sample range.</li>
    <li><strong>Compare 3 written quotes.</strong> Ask each painter to list paint brand, coats, prep, and repairs separately.</li>
  </ol>

  <h2>What affects the price</h2>
  <h3>Home size</h3>
  <p>Larger homes need more paint and more labor hours, so size drives the total. A 3,000 sq ft home needs far more paint and time than a 1,000 sq ft home.</p>
  <h3>Job type</h3>
  <p>Exterior jobs face weather and need tougher paint, while interior jobs need more care around furniture and floors. Exterior work also needs ladders and weather-safe days.</p>
  <h3>Prep work</h3>
  <p>Cleaning, sanding, caulking, and minor repairs add time before any paint goes on. Homes with peeling paint or cracks need more prep than homes in good shape.</p>
  <h3>Paint quality</h3>
  <p>Premium paint costs more per gallon and often covers better and lasts longer. A cheaper paint may need an extra coat, which can erase the saving.</p>
  <h3>Number of coats</h3>
  <p>Two coats cost more than one and usually look better and last longer. A color change almost always needs two coats for full coverage.</p>

  <h2>What is included and what is not</h2>
  <div class="two-col">
    <div>
      <h3>What is included</h3>
      <ul class="checklist">
        <li>Paint and primer</li>
        <li>Labor</li>
        <li>Prep and minor repairs</li>
        <li>Supplies and equipment</li>
      </ul>
    </div>
    <div>
      <h3>What is not included</h3>
      <ul class="checklist checklist-x">
        <li>Rot repair</li>
        <li>Lead paint removal</li>
        <li>Deck staining</li>
        <li>Wallpaper removal</li>
      </ul>
    </div>
  </div>

  <h2>How we estimate</h2>
  <p>We multiply home size by a per square foot rate for exterior or interior work, then set low at 66.7 percent and high at 161.9 percent of the typical price. The result is a sample estimated USA range for planning.</p>
  <p>Your final price depends on prep needs, paint brand, and local labor rates, so always confirm the price in writing before work starts.</p>

  <h2>Hiring a pro checklist</h2>
  <ul class="checklist">
    <li>Get 3 written quotes with paint brand and coats listed</li>
    <li>Check the painter license, insurance, and reviews</li>
    <li>Ask how prep and repairs are priced</li>
    <li>Confirm the cleanup plan in writing</li>
    <li>Ask about the warranty on the work</li>
  </ul>

  <h2>Budget tips</h2>
  <ul>
    <li>Paint in the off season for better rates</li>
    <li>Choose a mid-grade paint for the best value</li>
    <li>Do your own moving and light prep</li>
    <li>Compare quotes line by line, not just the total</li>
  </ul>

  <h2>References</h2>
  <p>Our estimates use public US cost data as a guide. Labor cost context comes from the US Bureau of Labor Statistics, housing cost context from HUD, remodeling trends from Harvard JCHS, and material prices from Home Depot and Lowes. All prices on this page are sample estimated USA ranges, not quotes.</p>
  <ul class="ref-chips">
  <li><a class="ref-chip" href="https://www.bls.gov/" rel="noopener"><span class="ref-name">US Bureau of Labor Statistics</span><span class="ref-note">labor cost data</span><span class="ref-arrow" aria-hidden="true">&nearr;</span></a></li>
  <li><a class="ref-chip" href="https://www.hud.gov/" rel="noopener"><span class="ref-name">HUD</span><span class="ref-note">housing cost data</span><span class="ref-arrow" aria-hidden="true">&nearr;</span></a></li>
  <li><a class="ref-chip" href="https://www.jchs.harvard.edu/" rel="noopener"><span class="ref-name">Harvard JCHS</span><span class="ref-note">household and remodeling cost research</span><span class="ref-arrow" aria-hidden="true">&nearr;</span></a></li>
  <li><a class="ref-chip" href="https://www.homedepot.com/" rel="noopener"><span class="ref-name">Home Depot</span><span class="ref-note">paint and primer prices</span><span class="ref-arrow" aria-hidden="true">&nearr;</span></a></li>
  <li><a class="ref-chip" href="https://www.lowes.com/" rel="noopener"><span class="ref-name">Lowes</span><span class="ref-note">paint and primer prices</span><span class="ref-arrow" aria-hidden="true">&nearr;</span></a></li>
</ul>

  <h2>Related calculators and guides</h2>
  <div class="grid related-grid">
<div class="card related-card"><div class="card-top"><span class="card-icon" aria-hidden="true">🚚</span><span class="card-cat">Moving</span></div><h3><a href="{{ '/movers-cost-calculator/' | relative_url }}">Movers Cost Calculator</a></h3><p class="price">$843 - $1,637</p><a class="card-cta" href="{{ '/movers-cost-calculator/' | relative_url }}">Calculate your price &rarr;</a></div>
<div class="card related-card"><div class="card-top"><span class="card-icon" aria-hidden="true">🏠</span><span class="card-cat">Home</span></div><h3><a href="{{ '/roof-replacement-cost-calculator/' | relative_url }}">Roof Replacement Cost Calculator</a></h3><p class="price">$7,528 - $11,475</p><a class="card-cta" href="{{ '/roof-replacement-cost-calculator/' | relative_url }}">Calculate your price &rarr;</a></div>
<div class="card related-card"><div class="card-top"><span class="card-icon" aria-hidden="true">🧱</span><span class="card-cat">Home</span></div><h3><a href="{{ '/fence-cost-calculator/' | relative_url }}">Fence Cost Calculator</a></h3><p class="price">$2,100 - $5,400</p><a class="card-cta" href="{{ '/fence-cost-calculator/' | relative_url }}">Calculate your price &rarr;</a></div>
</div>
<ul class="chip-list">
  <li><a href="{{ '/oil-change-cost-calculator/' | relative_url }}">Oil Change Cost Calculator <span aria-hidden="true">&rarr;</span></a></li>
  <li><a href="{{ '/central-ac-installation-cost-calculator/' | relative_url }}">Central AC Installation Cost Calculator <span aria-hidden="true">&rarr;</span></a></li>
  <li><a href="{{ '/car-wrap-cost-calculator/' | relative_url }}">Car Wrap Cost Calculator <span aria-hidden="true">&rarr;</span></a></li>
  <li><a href="{{ '/tools/' | relative_url }}">All calculators <span aria-hidden="true">&rarr;</span></a></li>
</ul>

  <h2>Frequently asked questions</h2>
  <details class="faq">
    <summary>How often should I repaint my house exterior?</summary>
    <p>Repaint your house exterior every 5 to 10 years, by climate and paint quality.</p>
  </details>
  <details class="faq">
    <summary>How long does a paint job take?</summary>
    <p>A paint job takes about 3 to 5 days for an average home.</p>
  </details>
  <details class="faq">
    <summary>Is primer included?</summary>
    <p>Primer is usually included, but ask your painter to confirm.</p>
  </details>
  <details class="faq">
    <summary>What paint is best?</summary>
    <p>100 percent acrylic latex is the common USA choice.</p>
  </details>
  <details class="faq">
    <summary>What is not included?</summary>
    <p>Rot repair, lead paint removal, and deck staining are often extra.</p>
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
  function update() {
    var rate = parseFloat(document.getElementById("jobType").value);
    var size = parseFloat(document.getElementById("homeSize").value);
    document.getElementById("homeSizeVal").textContent = Math.round(size).toLocaleString("en-US") + " sq ft";
    var typ = Math.round((size * rate) / 50) * 50;
    var low = round10(typ * 0.667);
    var high = round10(typ * 1.619);
    document.getElementById("lowVal").textContent = fmt(low);
    document.getElementById("typVal").textContent = fmt(typ);
    document.getElementById("highVal").textContent = fmt(high);
  }
  document.getElementById("jobType").addEventListener("change", update);
  document.getElementById("homeSize").addEventListener("input", update);
  update();
})();
</script>
