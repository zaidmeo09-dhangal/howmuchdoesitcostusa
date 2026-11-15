---
layout: default
title: "How Much Does It Cost to Wrap a Car?"
meta_title: "How Much Does It Cost to Wrap a Car? Free Calculator"
meta_description: "How much does it cost to wrap a car? Get a free estimate by vehicle size and wrap type, with a full cost breakdown and price ranges included."
permalink: /car-wrap-cost-calculator/
breadcrumb: Tools
image: /assets/images/car-wrap-hero.webp
image_card: /assets/images/car-wrap-card.webp
image_alt: "Worker applying white vinyl wrap to a car hood with a heat gun in a workshop"
image_w: 1200
image_h: 675
schema: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "How Much Does It Cost to Wrap a Car?",
        "description": "How much does it cost to wrap a car? Get a free estimate by vehicle size and wrap type, with a full cost breakdown and price ranges included.",
        "url": "https://howmuchdoesitcostusa.com/car-wrap-cost-calculator/"
      },
      {
        "@type": "HowTo",
        "name": "How to estimate car wrap cost",
        "description": "Estimate the cost of a car wrap in 4 steps using vehicle size and wrap type.",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Step 1",
            "text": "Pick your vehicle size. Larger vehicles need more vinyl and more labor hours."
          },
          {
            "@type": "HowToStep",
            "name": "Step 2",
            "text": "Pick the wrap type. A full wrap covers the whole car, a partial wrap covers less, and roof and hood only is the smallest job."
          },
          {
            "@type": "HowToStep",
            "name": "Step 3",
            "text": "Run the calculator. Select vehicle size and wrap type to see your low, typical, and high sample range."
          },
          {
            "@type": "HowToStep",
            "name": "Step 4",
            "text": "Compare 3 written quotes. Ask each shop to list vinyl brand, design, and prep work separately."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does a car wrap last?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A car wrap lasts about 5 to 7 years with care."
            }
          },
          {
            "@type": "Question",
            "name": "Does a wrap damage paint?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, a wrap usually protects the paint underneath."
            }
          },
          {
            "@type": "Question",
            "name": "Can I wrap a leased car?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Often yes, you can wrap a leased car, but check your lease first."
            }
          },
          {
            "@type": "Question",
            "name": "How long does wrapping take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Wrapping usually takes 3 to 5 days."
            }
          },
          {
            "@type": "Question",
            "name": "How much does a chrome or color-shift wrap cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A chrome or color-shift wrap costs $6,000 to $10,000 or more, per CostFigure, against $2,500 to $4,000 for a gloss sedan wrap."
            }
          }
        ]
      }
    ]
  }
---

<section class="wrap">
  <p class="crumb"><a href="{{ '/' | relative_url }}">Home</a> / <a href="{{ '/tools/' | relative_url }}">Tools</a> / Car Wrap Cost Calculator</p>
  <p class="kicker">Free Calculator</p>
  <h1>How Much Does It Cost to Wrap a Car?</h1>
  <div class="answer">
    <p id="answerIntro">A typical sedan full car wrap in the USA costs about $3,500, with a sample range of $2,500 to $5,500.</p>
    <p class="note">All prices on this page are sample estimated USA ranges, not quotes.</p>
    <p class="updated-line">Updated November 14, 2026</p>
  </div>

  <img class="calc-hero-img" src="{{ page.image | relative_url }}" srcset="{{ page.image_card | relative_url }} 800w, {{ page.image | relative_url }} 1200w" sizes="(max-width: 760px) 100vw, 1200px" width="{{ page.image_w | default: 1200 }}" height="{{ page.image_h | default: 800 }}" alt="{{ page.image_alt }}" loading="lazy" decoding="async"{% if page.image_pos %} style="object-position: {{ page.image_pos }};"{% endif %}>

  <div class="calc">
    <h2>Car Wrap Cost Calculator</h2>
    <p>Pick your vehicle size and wrap type to see a sample estimated price for a car wrap.</p>
    <div class="calc-field">
      <label for="vehicleSize">Vehicle size</label>
      <select id="vehicleSize">
        <option value="2800">Compact</option>
        <option value="3500" selected>Sedan</option>
        <option value="4800">SUV</option>
        <option value="5500">Truck</option>
      </select>
    </div>
    <div class="calc-field">
      <label for="wrapType">Wrap type</label>
      <select id="wrapType">
        <option value="1" selected>Full wrap</option>
        <option value="0.55">Partial wrap</option>
        <option value="0.35">Roof and hood only</option>
      </select>
    </div>
    <div class="calc-field">
      <label for="finish">Finish</label>
      <select id="finish">
        <option value="1" selected>Gloss (base price)</option>
        <option value="1.125">Matte or satin (plus 12.5 percent)</option>
        <option value="1.85">Chrome or color-shift</option>
      </select>
      <p class="hint">Matte or satin adds 5 to 20 percent, per CostFigure, and 12.5 percent is the midpoint of that range. Chrome or color-shift is priced so a sedan typical of $6,480 sits inside the $6,000 to $10,000 plus range CostFigure gives.</p>
    </div>
    <div class="receipt">
      <h3>Your estimated cost</h3>
      <p class="receipt-total" id="typVal">$3,500</p>
      <p class="receipt-range">Sample range: <span id="lowVal">$2,500</span> (low) to <span id="highVal">$5,500</span> (high)</p>
      <div class="price-bar receipt-bar" aria-hidden="true"><span id="rangeBar" style="width:33%"></span></div>
      <p class="note">Sample estimated USA range. Your final price depends on vehicle size, wrap type, vinyl brand, and paint condition.</p>
    </div>
  </div>

  <h2>Low, typical, and high cost</h2>
  <p>These bands update with your calculator choices. Use them to plan your budget before you request quotes.</p>
  <div class="bands">
    <div class="band">
      <p class="band-label">Low</p>
      <p class="band-price" id="bandLowVal">$2,500</p>
      <p>A smaller job with basic choices.</p>
    </div>
    <div class="band band-typical"><p class="band-tag">Most common</p>
      <p class="band-label">Typical</p>
      <p class="band-price" id="bandTypVal">$3,500</p>
      <p>Your selection at typical USA rates.</p>
    </div>
    <div class="band">
      <p class="band-label">High</p>
      <p class="band-price" id="bandHighVal">$5,500</p>
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
        <tr><td>Vinyl material</td><td>$1,100</td><td>$1,500</td><td>$2,400</td></tr>
        <tr><td id="laborLabel">Labor (2 installers, 3 to 5 days)</td><td>$1,100</td><td>$1,600</td><td>$2,500</td></tr>
        <tr><td>Design and prep</td><td>$180</td><td>$250</td><td>$400</td></tr>
        <tr><td>Supplies and finishing</td><td>$120</td><td>$150</td><td>$200</td></tr>
        <tr class="total"><td>Totals</td><td>$2,500</td><td>$3,500</td><td>$5,500</td></tr>
      </tbody>
    </table>
  </div>
  <p class="note">Sample estimated USA ranges. Vinyl and labor together are most of the total.</p>

  <h2>How to estimate in 4 steps</h2>
  <ol class="steps">
    <li><strong>Pick your vehicle size.</strong> Larger vehicles need more vinyl and more labor hours.</li>
    <li><strong>Pick the wrap type.</strong> A full wrap covers the whole car, a partial wrap covers less, and roof and hood only is the smallest job.</li>
    <li><strong>Run the calculator.</strong> Select vehicle size and wrap type to see your low, typical, and high sample range.</li>
    <li><strong>Compare 3 written quotes.</strong> Ask each shop to list vinyl brand, design, and prep work separately.</li>
  </ol>

  <h2>What affects the price</h2>
  <h3>Vehicle size</h3>
  <p>Larger vehicles use more vinyl and take longer to wrap, so size drives the price. A truck wrap costs more than a compact car wrap with the same vinyl.</p>
  <h3>Wrap coverage</h3>
  <p>Full wraps cost most, partial wraps cost about half, and roof and hood only costs least. Decide how much of the car you want covered before you ask for a quote.</p>
  <h3>Vinyl quality</h3>
  <p>Premium vinyl brands cost more and last longer than budget films. A better film also looks smoother and resists fading and peeling.</p>
  <h3>Paint condition</h3>
  <p>Dents, rust, and peeling paint must be fixed first, since vinyl shows flaws underneath. A wrap does not hide bad paint, and it can lift off damaged areas.</p>
  <h3>Design complexity</h3>
  <p>Custom graphics and color changes take more design time than a single solid color. A printed design with logos costs more than a plain color wrap.</p>

  <h2>Cost by vehicle type</h2>
  <p>Film and labor rise with vehicle size. The ranges below are from ThePricer, and Kelley Blue Book gives the same shape: a 2021 Altima needs about 130 sq ft of film at $600 to $2,000 plus, with install at $1,000 to $2,500 extra, and larger vehicles run up to $5,000.</p>
  <p class="table-hint">Swipe to see the Full wrap range column &rarr;</p>
  <div class="table-wrap">
    <table class="cost-table">
      <caption>Full wrap sample ranges by vehicle type, per ThePricer</caption>
      <thead>
        <tr><th>Vehicle type</th><th>Full wrap range</th></tr>
      </thead>
      <tbody>
        <tr><td>Small car</td><td>$1,800 to $2,500</td></tr>
        <tr><td>Hatchback</td><td>$2,800 to $3,500</td></tr>
        <tr><td>Sedan</td><td>$3,000 to $4,500</td></tr>
        <tr><td>Small SUV</td><td>$3,200 to $4,500</td></tr>
        <tr><td>Large SUV or sedan</td><td>$3,500 to $5,000</td></tr>
        <tr><td>Pickup</td><td>$3,200 to $5,000</td></tr>
        <tr><td>Luxury</td><td>$5,500 to $10,000</td></tr>
      </tbody>
    </table>
  </div>
  <p class="note">Our calculator uses $2,800 for a compact, $3,500 for a sedan, $4,800 for an SUV, and $5,500 for a truck at the typical level, which sits inside the ranges above.</p>

  <h2>Cost by finish</h2>
  <p>Gloss is the base price. Matte and satin add 5 to 20 percent, and chrome or color-shift film costs far more per square foot, per CostFigure.</p>
  <p class="table-hint">Swipe to see the Price column &rarr;</p>
  <div class="table-wrap">
    <table class="cost-table">
      <caption>Full wrap cost by finish, per CostFigure and ThePricer</caption>
      <thead>
        <tr><th>Finish</th><th>Price</th></tr>
      </thead>
      <tbody>
        <tr><td>Gloss (base)</td><td>Sedan $2,500 to $4,000</td></tr>
        <tr><td>Matte or satin</td><td>Gloss price plus 5 to 20 percent</td></tr>
        <tr><td>Chrome or color-shift</td><td>$6,000 to $10,000 plus</td></tr>
      </tbody>
    </table>
  </div>
  <p class="note">Standard film costs $2.80 to $3.50 per sq ft, while chrome film costs $5 to $8 plus per sq ft, per CostFigure. A car needs about 255 sq ft of film, per TunedRides.</p>

  <h2>Partial wrap prices</h2>
  <p>If you do not need a full wrap, price the panel you want. The prices below are from ThePricer.</p>
  <p class="table-hint">Swipe to see the Price column &rarr;</p>
  <div class="table-wrap">
    <table class="cost-table">
      <caption>Partial wrap sample prices, per ThePricer</caption>
      <thead>
        <tr><th>Partial wrap</th><th>Price</th></tr>
      </thead>
      <tbody>
        <tr><td>Mirrors</td><td>About $200</td></tr>
        <tr><td>Stripes</td><td>About $300</td></tr>
        <tr><td>Chrome delete</td><td>About $350</td></tr>
        <tr><td>Hood or roof</td><td>About $350</td></tr>
        <tr><td>Hood, roof, and trunk</td><td>About $750</td></tr>
      </tbody>
    </table>
  </div>

  <h2>Hidden costs</h2>
  <p>Two costs catch buyers out: door jambs and removal of an old wrap. Both are priced apart from a standard full wrap quote, per ThePricer.</p>
  <p class="table-hint">Swipe to see the Price column &rarr;</p>
  <div class="table-wrap">
    <table class="cost-table">
      <caption>Hidden wrap costs, per ThePricer</caption>
      <thead>
        <tr><th>Extra</th><th>Price</th></tr>
      </thead>
      <tbody>
        <tr><td>Door jambs</td><td>$300 to $600</td></tr>
        <tr><td>Removal of an old wrap</td><td>$500 to $1,200</td></tr>
      </tbody>
    </table>
  </div>

  <h2>Cost per year by lifespan</h2>
  <p>A wrap that lasts longer costs less per year, even if the upfront price is the same. ThePricer works a $4,000 wrap out as $1,333 per year over 3 years, $800 per year over 5 years, and $571 per year over 7 years. The same math on our $3,500 typical sedan wrap gives $3,500 / 3 = $1,167 per year, $3,500 / 5 = $700 per year, and $3,500 / 7 = $500 per year.</p>
  <p class="table-hint">Swipe to see the Cost per year column &rarr;</p>
  <div class="table-wrap">
    <table class="cost-table">
      <caption>Cost per year for a $4,000 wrap, per ThePricer</caption>
      <thead>
        <tr><th>Lifespan</th><th>Cost per year</th></tr>
      </thead>
      <tbody>
        <tr><td>3 years</td><td>$1,333</td></tr>
        <tr><td>5 years</td><td>$800</td></tr>
        <tr><td>7 years</td><td>$571</td></tr>
      </tbody>
    </table>
  </div>

  <h2>Wrap vs paint vs paint protection film</h2>
  <p>Choose by how long you will keep the car and whether you want the change to be reversible.</p>
  <p class="table-hint">Swipe to see the Best for column &rarr;</p>
  <div class="table-wrap">
    <table class="cost-table">
      <caption>Wrap, paint, and paint protection film compared</caption>
      <thead>
        <tr><th>Option</th><th>Typical cost</th><th>Reversible</th><th>Best for</th></tr>
      </thead>
      <tbody>
        <tr><td>Vinyl wrap</td><td>$2,000 to $10,000 plus, per CostFigure</td><td>Yes</td><td>A color change you may want to undo</td></tr>
        <tr><td>Repaint</td><td>$1,500 to $10,000 by quality, see our paint a car guide</td><td>No</td><td>A car you plan to keep for many years</td></tr>
        <tr><td>Paint protection film</td><td>$1,000 to $8,000, per CostFigure</td><td>Yes</td><td>Protecting new or good paint</td></tr>
      </tbody>
    </table>
  </div>

  <h2>How long does a wrap last by film</h2>
  <p>Lifespan depends on the film and on where it sits. Vertical panels last longer than horizontal panels, which take more sun. Per ThePricer, 3M 2080 lasts up to 8 years on vertical surfaces and 3 years on horizontal surfaces, while Avery lasts up to 12 years in black and white, 10 years in colors, and 5 years in metallic. Hand wash only, wait a week before the first wash, and park out of the sun, per Kelley Blue Book.</p>

  <h2>What is included and what is not</h2>
  <div class="two-col">
    <div>
      <h3>What is included</h3>
      <ul class="checklist">
        <li>Vinyl material</li>
        <li>Labor</li>
        <li>Basic design and prep</li>
        <li>Supplies and finishing</li>
      </ul>
    </div>
    <div>
      <h3>What is not included</h3>
      <ul class="checklist checklist-x">
        <li>Paint repair</li>
        <li>Custom design work</li>
        <li>Removal of an old wrap</li>
        <li>Ceramic coating</li>
      </ul>
    </div>
  </div>

  <h2>How we estimate</h2>
  <p>We price a wrap in three steps. Start with the vehicle base: $2,800 compact, $3,500 sedan, $4,800 SUV, $5,500 truck. Multiply by the coverage multiplier (1.0 full, 0.55 partial, 0.35 roof and hood only), then by the finish multiplier (1.0 gloss, 1.125 matte or satin, 1.85 chrome or color-shift). At the default sedan full gloss wrap that is $3,500 x 1.0 x 1.0 = $3,500. Low is 71.4 percent of typical and high is 157.1 percent, so $3,500 gives $2,500 low and $5,500 high after rounding to the nearest $10. A matte sedan full wrap is $3,500 x 1.125 = $3,937.50, rounded to $3,940 typical, with low $3,940 x 0.714 = $2,813.16 rounded to $2,810 and high $3,940 x 1.571 = $6,189.74 rounded to $6,190. A chrome sedan full wrap is $3,500 x 1.85 = $6,475, rounded to $6,480 typical, with low $6,480 x 0.714 = $4,626.72 rounded to $4,630 and high $6,480 x 1.571 = $10,180.08 rounded to $10,180.</p>
  <p>Your final price depends on vinyl brand, paint condition, and the shop, so always confirm the price in writing before work starts.</p>

  <h2>Hiring a pro checklist</h2>
  <ul class="checklist">
    <li>Get 3 written quotes with the vinyl brand, film series, and finish listed</li>
    <li>Ask the shop to inspect the paint first and list any repair the wrap needs in writing</li>
    <li>Ask whether door jambs, mirrors, and removal of an old wrap are included, with prices</li>
    <li>Check the shop portfolio for your finish, matte and chrome show flaws more than gloss</li>
    <li>Ask how long the film warranty lasts on vertical and horizontal panels, in writing</li>
    <li>Ask how to wash and care for the wrap, and when the first wash is safe</li>
  </ul>

  <h2>Budget tips</h2>
  <ul>
    <li>Choose a solid color instead of custom graphics</li>
    <li>Fix paint chips before wrapping</li>
    <li>Compare vinyl brands, not just totals</li>
    <li>Wrap in the off season when shops are quieter</li>
  </ul>

  <h2>References</h2>
  <p>Our estimates use public US cost data as a guide. Labor cost context comes from the US Bureau of Labor Statistics, and material prices from Home Depot and Lowes. Wrap prices in this page also use Kelley Blue Book, ThePricer, CostFigure, and TunedRides. All prices on this page are sample estimated USA ranges, not quotes.</p>
  <div class="refs">
  <p><a href="https://www.bls.gov/" target="_blank" rel="noopener">US Bureau of Labor Statistics</a> <span class="ref-note">labor cost data</span></p>
  <p><a href="https://www.homedepot.com/" target="_blank" rel="noopener">Home Depot</a> <span class="ref-note">vinyl and supply prices</span></p>
  <p><a href="https://www.lowes.com/" target="_blank" rel="noopener">Lowes</a> <span class="ref-note">vinyl and supply prices</span></p>
  <p><a href="https://www.kbb.com/car-advice/car-wraps/" target="_blank" rel="noopener">Kelley Blue Book</a> <span class="ref-note">car wrap cost and care, updated August 15, 2026</span></p>
  <p><a href="https://www.thepricer.org/car-wrap-cost/" target="_blank" rel="noopener">ThePricer</a> <span class="ref-note">car wrap cost by vehicle and film lifespan, updated October 6, 2026</span></p>
  <p><a href="https://costfigure.com/auto/how-much-does-a-car-wrap-cost/" target="_blank" rel="noopener">CostFigure</a> <span class="ref-note">car wrap cost by finish, March 2026</span></p>
  <p><a href="https://tunedrides.com/blog/how-much-does-a-car-wrap-cost/" target="_blank" rel="noopener">TunedRides</a> <span class="ref-note">film needed per car and DIY vinyl cost</span></p>
  </div>

  <h2>Related calculators and guides</h2>
  <div class="grid related-grid">
<div class="card related-card"><img class="card-img" src="{{ '/assets/images/movers-card.webp' | relative_url }}" srcset="{{ '/assets/images/movers-card.webp' | relative_url }} 800w, {{ '/assets/images/movers-hero.webp' | relative_url }} 1200w" sizes="(max-width: 760px) 100vw, 800px" width="800" height="500" alt="Two professional movers carrying cardboard boxes in a bright room on moving day" loading="lazy" decoding="async"><div class="card-top"><span class="card-cat">Moving</span></div><h3><a href="{{ '/movers-cost-calculator/' | relative_url }}">Movers Cost Calculator</a></h3><p class="price">$843 - $1,637</p><a class="card-cta" href="{{ '/movers-cost-calculator/' | relative_url }}">Calculate your price &rarr;</a></div>
<div class="card related-card"><img class="card-img" src="{{ '/assets/images/roof-card.webp' | relative_url }}" srcset="{{ '/assets/images/roof-card.webp' | relative_url }} 800w, {{ '/assets/images/roof-hero.webp' | relative_url }} 1200w" sizes="(max-width: 760px) 100vw, 800px" width="800" height="500" alt="Roofer installing asphalt shingles on a residential roof with a nail gun" loading="lazy" decoding="async"><div class="card-top"><span class="card-cat">Home</span></div><h3><a href="{{ '/roof-replacement-cost-calculator/' | relative_url }}">Roof Replacement Cost Calculator</a></h3><p class="price">$7,528 - $11,475</p><a class="card-cta" href="{{ '/roof-replacement-cost-calculator/' | relative_url }}">Calculate your price &rarr;</a></div>
<div class="card related-card"><img class="card-img" src="{{ '/assets/images/fence-card.webp' | relative_url }}" srcset="{{ '/assets/images/fence-card.webp' | relative_url }} 800w, {{ '/assets/images/fence-hero.webp' | relative_url }} 1200w" sizes="(max-width: 760px) 100vw, 800px" width="800" height="500" alt="Wooden fence and gate beside a stone path in a sunny backyard" loading="lazy" decoding="async"><div class="card-top"><span class="card-cat">Home</span></div><h3><a href="{{ '/fence-cost-calculator/' | relative_url }}">Fence Cost Calculator</a></h3><p class="price">$2,100 - $5,400</p><a class="card-cta" href="{{ '/fence-cost-calculator/' | relative_url }}">Calculate your price &rarr;</a></div>
</div>
<ul class="chip-list">
  <li><a href="{{ '/blog/how-much-does-it-cost-to-paint-a-car/' | relative_url }}">How Much Does It Cost to Paint a Car? <span aria-hidden="true">&rarr;</span></a></li>
  <li><a href="{{ '/oil-change-cost-calculator/' | relative_url }}">Oil Change Cost Calculator <span aria-hidden="true">&rarr;</span></a></li>
  <li><a href="{{ '/central-ac-installation-cost-calculator/' | relative_url }}">Central AC Installation Cost Calculator <span aria-hidden="true">&rarr;</span></a></li>
  <li><a href="{{ '/house-painting-cost-calculator/' | relative_url }}">House Painting Cost Calculator <span aria-hidden="true">&rarr;</span></a></li>
  <li><a href="{{ '/tools/' | relative_url }}">All calculators <span aria-hidden="true">&rarr;</span></a></li>
</ul>

  <h2>Frequently asked questions</h2>
  <details class="faq">
    <summary>How long does a car wrap last?</summary>
    <p>A car wrap lasts about 5 to 7 years with care.</p>
  </details>
  <details class="faq">
    <summary>Does a wrap damage paint?</summary>
    <p>No, a wrap usually protects the paint underneath.</p>
  </details>
  <details class="faq">
    <summary>Can I wrap a leased car?</summary>
    <p>Often yes, you can wrap a leased car, but check your lease first.</p>
  </details>
  <details class="faq">
    <summary>How long does wrapping take?</summary>
    <p>Wrapping usually takes 3 to 5 days.</p>
  </details>
  <details class="faq">
    <summary>How much does a chrome or color-shift wrap cost?</summary>
    <p>A chrome or color-shift wrap costs $6,000 to $10,000 or more, per CostFigure, against $2,500 to $4,000 for a gloss sedan wrap.</p>
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
    var vehVal = document.getElementById("vehicleSize").value;
    var wrapVal = document.getElementById("wrapType").value;
    var finishVal = document.getElementById("finish").value;
    var base = parseFloat(vehVal);
    var mult = parseFloat(wrapVal);
    var finishMult = parseFloat(finishVal);
    var typ = round10(base * mult * finishMult);
    var low = round10(typ * 0.714);
    var high = round10(typ * 1.571);
    document.getElementById("lowVal").textContent = fmt(low);
    document.getElementById("typVal").textContent = fmt(typ);
    document.getElementById("highVal").textContent = fmt(high);
    var vehName = { "2800": "compact", "3500": "sedan", "4800": "SUV", "5500": "truck" }[vehVal];
    var wrapName = { "1": "full car wrap", "0.55": "partial wrap", "0.35": "roof and hood wrap" }[wrapVal];
    var finishName = { "1": "gloss", "1.125": "matte or satin", "1.85": "chrome or color-shift" }[finishVal];
    var intro = "A typical " + vehName + " " + finishName + " " + wrapName + " in the USA costs about " + fmt(typ) + ", with a sample range of " + fmt(low) + " to " + fmt(high) + ".";
    var days = wrapVal === "1" ? "3 to 5 days" : wrapVal === "0.55" ? "1 to 2 days" : "1 day";
    var labor = "Labor (2 installers, " + days + ")";
    try { if (window.hmSync) { window.hmSync(low, typ, high, 2500, 3500, 5500, { intro: intro, labor: labor }); } } catch (e) {}
  }
  document.getElementById("vehicleSize").addEventListener("change", update);
  document.getElementById("wrapType").addEventListener("change", update);
  document.getElementById("finish").addEventListener("change", update);
  update();
})();
</script>
