---
layout: default
title: "Movers Cost Calculator"
meta_title: "Movers Cost Calculator: Price by Home Size and Distance"
meta_description: "Use the free Movers Cost Calculator to price a local or long distance move by home size and distance, with low, typical, and high USA ranges."
permalink: /movers-cost-calculator/
breadcrumb: Tools
schema: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "Movers Cost Calculator",
        "description": "Use the free Movers Cost Calculator to price a local or long distance move by home size and distance, with low, typical, and high USA ranges.",
        "url": "https://howmuchdoesitcostusa.com/movers-cost-calculator/"
      },
      {
        "@type": "HowTo",
        "name": "How to estimate movers cost",
        "description": "Estimate the cost of a move in 4 steps using home size and distance.",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Step 1",
            "text": "Measure your home size. Count bedrooms and large items so the crew size matches the load."
          },
          {
            "@type": "HowToStep",
            "name": "Step 2",
            "text": "Pick your distance. Local moves under 50 miles cost least, and longer moves add time and fuel."
          },
          {
            "@type": "HowToStep",
            "name": "Step 3",
            "text": "Run the calculator. Select home size and distance to see your low, typical, and high sample range."
          },
          {
            "@type": "HowToStep",
            "name": "Step 4",
            "text": "Compare 3 written quotes. Ask each mover what packing, stairs, and insurance cost extra."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much do movers cost per hour?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A sample range is $80 to $120 per hour for 2 movers and a truck, which is a common USA average."
            }
          },
          {
            "@type": "Question",
            "name": "How far in advance should I book movers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Book 4 to 6 weeks ahead, and 8 weeks ahead in summer."
            }
          },
          {
            "@type": "Question",
            "name": "Do movers charge extra for stairs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Many movers do charge extra for stairs, so ask before you book."
            }
          },
          {
            "@type": "Question",
            "name": "Is tipping movers expected?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tipping 10 to 20 percent of the total is common in the USA, and it is optional."
            }
          },
          {
            "@type": "Question",
            "name": "When is the cheapest time to move?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Outside the May to August peak season, when FreightWaves reports prices run 10% to 25% higher. Midweek and mid-month dates are usually cheapest."
            }
          }
        ]
      }
    ]
  }
---

<section class="wrap">
  <p class="crumb"><a href="{{ '/' | relative_url }}">Home</a> / <a href="{{ '/tools/' | relative_url }}">Tools</a> / Movers Cost Calculator</p>
  <p class="kicker">Free Calculator</p>
  <h1>Movers Cost Calculator</h1>
  <p class="page-byline">By <strong>How Much Does It Cost USA Team</strong> <span class="byline-dot" aria-hidden="true">|</span> Updated November 2026</p>
  <div class="answer">
    <p id="answerIntro">A typical 2-bedroom local move in the USA costs about $1,240, with a sample range of $843 to $1,637.</p>
    <p class="note">All prices on this page are sample estimated USA ranges, not quotes.</p>
    <p class="updated-line">Updated November 14, 2026</p>
  </div>

  <div class="calc">
    <h2>Movers Cost Calculator</h2>
    <p>Pick your home size and distance to see a sample estimated price for your move. For averages by home size and distance, and tips to save, see the full <a href="{{ '/blog/how-much-do-movers-cost/' | relative_url }}">How Much Do Movers Cost in the USA?</a> guide.</p>
    <div class="calc-field">
      <label for="homeSize">Home size</label>
      <select id="homeSize">
        <option value="750">Studio</option>
        <option value="950">1 bedroom</option>
        <option value="1240" selected>2 bedrooms</option>
        <option value="1750">3 bedrooms</option>
        <option value="2300">4+ bedrooms</option>
      </select>
    </div>
    <div class="calc-field">
      <label for="distance">Distance</label>
      <select id="distance">
        <option value="1" selected>Local, under 50 miles</option>
        <option value="1.4">50 to 100 miles</option>
        <option value="2.1">100 to 500 miles</option>
        <option value="3">Over 500 miles / interstate</option>
      </select>
    </div>
    <div class="receipt">
      <h3>Your estimated cost</h3>
      <p class="receipt-total" id="typVal">$1,240</p>
      <p class="receipt-range">Sample range: <span id="lowVal">$843</span> (low) to <span id="highVal">$1,637</span> (high)</p>
      <div class="price-bar receipt-bar" aria-hidden="true"><span id="rangeBar" style="width:50%"></span></div>
      <p class="note">Sample estimated USA range. Your final price depends on home size, distance, season, and the moving company.</p>
    </div>
  </div>

  <h2>Low, typical, and high cost</h2>
  <p>These bands update with your calculator choices. Use them to plan your budget before you request quotes.</p>
  <div class="bands">
    <div class="band">
      <p class="band-label">Low</p>
      <p class="band-price" id="bandLowVal">$843</p>
      <p>A smaller job with basic choices.</p>
    </div>
    <div class="band band-typical"><p class="band-tag">Most common</p>
      <p class="band-label">Typical</p>
      <p class="band-price" id="bandTypVal">$1,240</p>
      <p>Your selection at typical USA rates.</p>
    </div>
    <div class="band">
      <p class="band-label">High</p>
      <p class="band-price" id="bandHighVal">$1,637</p>
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
        <tr><td id="laborLabel">Labor (2 movers, 4 to 6 hours)</td><td>$420</td><td>$600</td><td>$780</td></tr>
        <tr><td>Truck and fuel</td><td>$180</td><td>$250</td><td>$320</td></tr>
        <tr><td>Packing materials</td><td>$95</td><td>$150</td><td>$190</td></tr>
        <tr><td>Insurance and fees</td><td>$85</td><td>$130</td><td>$175</td></tr>
        <tr><td>Supplies and equipment</td><td>$63</td><td>$110</td><td>$172</td></tr>
        <tr class="total"><td>Totals</td><td>$843</td><td>$1,240</td><td>$1,637</td></tr>
      </tbody>
    </table>
  </div>
  <p class="note">Sample estimated USA ranges. Labor is usually the largest share of a moving bill.</p>

  <h2>Worked example: a 2-bedroom local move</h2>
  <p>This example uses the calculator default, a 2-bedroom local move, and shows every line. The hourly rate sits inside the <a href="https://www.angi.com/articles/how-much-does-it-cost-hire-movers.htm" target="_blank" rel="noopener">Angi</a> range of $60 to $200 per hour for 2 movers.</p>
  <ul>
    <li>Labor: 5 hours x $120 per hour for a 2-mover crew = $600</li>
    <li>Truck and fuel: $250</li>
    <li>Packing materials: $150</li>
    <li>Insurance and fees: $130</li>
    <li>Supplies and equipment: $110</li>
    <li><strong>Total: $600 + $250 + $150 + $130 + $110 = $1,240</strong></li>
  </ul>
  <p>That $1,240 matches the calculator typical price for a 2-bedroom local move. Change the hours or the rate and the labor line changes with it: 4 hours x $120 per hour = $480, and 6 hours x $120 per hour = $720.</p>

  <h2>Cost by home size</h2>
  <p>Local move ranges from <a href="https://www.angi.com/articles/how-much-does-it-cost-hire-movers.htm" target="_blank" rel="noopener">Angi</a>, based on 6,434 verified projects and updated September 17, 2026. Angi reports a national average of $1,694, with most people paying $875 to $2,546 for a local move.</p>
  <p class="table-hint">Swipe to see the range &rarr;</p>
  <div class="table-wrap">
    <table class="cost-table">
      <caption>Local mover cost by home size, Angi ranges</caption>
      <thead>
        <tr><th>Home size</th><th>Local move range</th></tr>
      </thead>
      <tbody>
        <tr><td>1 bedroom</td><td>$250 to $700</td></tr>
        <tr><td>2 bedrooms</td><td>$500 to $1,200</td></tr>
        <tr><td>3 bedrooms</td><td>$900 to $2,000</td></tr>
        <tr><td>4 bedrooms</td><td>$1,200 to $3,500</td></tr>
        <tr><td>5 bedrooms</td><td>$3,000 to $4,000</td></tr>
      </tbody>
    </table>
  </div>

  <h2>Cost by distance</h2>
  <p>Long distance ranges from <a href="https://www.angi.com/articles/how-much-does-it-cost-hire-movers.htm" target="_blank" rel="noopener">Angi</a>. Angi puts long distance moves at $2,700 to $10,000 and over, while <a href="https://findmoversnow.com/moving-company-costs/" target="_blank" rel="noopener">FindMoversNow</a> puts the long distance range at $1,300 to $9,500.</p>
  <p class="table-hint">Swipe to see the range &rarr;</p>
  <div class="table-wrap">
    <table class="cost-table">
      <caption>Long distance mover cost by mileage and home size, Angi ranges</caption>
      <thead>
        <tr><th>Distance</th><th>1 to 2 bedrooms</th><th>3 to 5 bedrooms</th></tr>
      </thead>
      <tbody>
        <tr><td>250 miles</td><td>$700 to $2,500</td><td>$2,000 to $6,000</td></tr>
        <tr><td>1,000 miles</td><td>$1,400 to $3,500</td><td>$4,000 to $8,000</td></tr>
        <tr><td>2,000 miles or more</td><td>$2,000 to $6,000</td><td>$6,500 to $9,000 and over</td></tr>
      </tbody>
    </table>
  </div>

  <h2>How to estimate in 4 steps</h2>
  <ol class="steps">
    <li><strong>Measure your home size.</strong> Count bedrooms and large items so the crew size matches the load.</li>
    <li><strong>Pick your distance.</strong> Local moves under 50 miles cost least, and longer moves add time and fuel.</li>
    <li><strong>Run the calculator.</strong> Select home size and distance to see your low, typical, and high sample range.</li>
    <li><strong>Compare 3 written quotes.</strong> Ask each mover what packing, stairs, and insurance cost extra.</li>
  </ol>

  <h2>What affects the price</h2>
  <h3>Home size</h3>
  <p>More rooms mean more boxes, more furniture, and more hours on the job. A studio move can take half the time of a 4-bedroom move, so the crew size and the total both grow with the home.</p>
  <h3>Distance</h3>
  <p>Local moves usually charge by the hour, while longer moves add fuel, tolls, and driver time. A move of 100 to 500 miles can cost about twice as much as a local move for the same home size, and a move over 500 miles can cost about three times as much.</p>
  <h3>Time of year</h3>
  <p>Summer weekends are the busiest and priciest time to move in the USA. Booking midweek or in the off season can lower the price, and early booking gives you more choice of dates.</p>
  <h3>Stairs and access</h3>
  <p>Long carries, stairs, and tight parking slow the crew down and often add a fee. Tell the mover about stairs, elevators, and parking limits before you book so the quote is accurate.</p>
  <h3>Extra services</h3>
  <p>Packing, unpacking, storage, and moving pianos or safes are usually priced separately. Ask for each extra as its own line item so you can compare quotes fairly. If the move is into a home you just bought, price the roof too with the <a href="{{ '/roof-replacement-cost-calculator/' | relative_url }}">Roof Replacement Cost Calculator</a>, so the move and the roof do not land in the same month unplanned.</p>

  <h2>What is included and what is not</h2>
  <div class="two-col">
    <div>
      <h3>What is included</h3>
      <ul class="checklist">
        <li>Loading and unloading by the moving crew</li>
        <li>Truck and fuel for your move</li>
        <li>Basic furniture protection with blankets</li>
        <li>Standard liability coverage</li>
      </ul>
    </div>
    <div>
      <h3>What is not included</h3>
      <ul class="checklist checklist-x">
        <li>Packing and unpacking boxes</li>
        <li>Storage fees</li>
        <li>Specialty items such as pianos and safes</li>
        <li>Tips for the crew</li>
      </ul>
    </div>
  </div>

  <h2>How we estimate</h2>
  <p>Every home size on this calculator has its own starting price, based on the crew size and hours a home that size usually takes. We then multiply that starting price by a distance factor: local moves stay at 1.0, 50 to 100 miles at 1.4, 100 to 500 miles at 2.1, and over 500 miles at 3.0. Low is 68 percent of the typical price and high is 132 percent, which gives the sample range you see above.</p>
  <p>The Angi averages on this page are shown for comparison and come from Angi survey data, not from our calculator. Final prices vary by city, season, and company, so treat these numbers as estimates, not quotes. Always confirm the price in writing before moving day.</p>

  <h2>Hiring a pro checklist</h2>
  <ul class="checklist">
    <li>Get 3 written quotes and compare them line by line</li>
    <li>Check the mover FMCSA license for an interstate move, plus insurance and reviews</li>
    <li>Ask for a binding quote or a not-to-exceed estimate in writing</li>
    <li>Ask how the claims process works if something is damaged, and what the deadline is to file</li>
    <li>Ask what stairs, long carries, and packing cost</li>
    <li>Confirm the insurance coverage in writing</li>
    <li>Read the contract before moving day</li>
  </ul>

  <h2>Budget tips</h2>
  <ul>
    <li>Move midweek or in the off season when rates are lower</li>
    <li>Pack your own boxes to cut labor hours</li>
    <li>Declutter before you get quotes so you move less</li>
    <li>Compare binding and nonbinding estimates before you sign</li>
    <li>Price the yard too if you are moving into a new home: see the <a href="{{ '/fence-cost-calculator/' | relative_url }}">Fence Cost Calculator</a></li>
  </ul>

  <h2>References</h2>
  <p>Our estimates use public US cost data as a guide. Labor cost context comes from the US Bureau of Labor Statistics, and box and packing supply prices come from Home Depot and Lowes. Mover averages on this page come from Angi, FreightWaves, FindMoversNow, and This Old House. All prices on this page are sample estimated USA ranges, not quotes.</p>
  <div class="refs">
  <p><a href="https://www.bls.gov/" target="_blank" rel="noopener">US Bureau of Labor Statistics</a> <span class="ref-note">labor cost data</span></p>
  <p><a href="https://www.homedepot.com/" target="_blank" rel="noopener">Home Depot</a> <span class="ref-note">boxes and packing supply prices</span></p>
  <p><a href="https://www.lowes.com/" target="_blank" rel="noopener">Lowes</a> <span class="ref-note">boxes and packing supply prices</span></p>
  <p><a href="https://www.angi.com/articles/how-much-does-it-cost-hire-movers.htm" target="_blank" rel="noopener">Angi</a> <span class="ref-note">mover cost averages by home size and distance</span></p>
  <p><a href="https://www.freightwaves.com/checkpoint/moving-costs/" target="_blank" rel="noopener">FreightWaves</a> <span class="ref-note">hourly rates, peak season, and storage costs</span></p>
  <p><a href="https://findmoversnow.com/moving-company-costs/" target="_blank" rel="noopener">FindMoversNow</a> <span class="ref-note">average move cost and city hourly rates</span></p>
  <p><a href="https://www.consumervoice.org/articles/how-much-do-movers-cost" target="_blank" rel="noopener">This Old House</a> <span class="ref-note">2025 survey of 1,000 moving customers</span></p>
  </div>

  <h2>Related calculators and guides</h2>
  <div class="grid related-grid">
<div class="card related-card"><div class="card-art" aria-hidden="true"><svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12 12 3l10 9"/><path d="M6 10v10h12V10"/><path d="M9.5 14h2m2 0h2m-6 3h2m2 0h2"/></svg></div><div class="card-top"><span class="card-cat">Home</span></div><h3><a href="{{ '/roof-replacement-cost-calculator/' | relative_url }}">Roof Replacement Cost Calculator</a></h3><p class="price">$7,528 - $11,475</p><a class="card-cta" href="{{ '/roof-replacement-cost-calculator/' | relative_url }}">Calculate your price &rarr;</a></div>
<div class="card related-card"><div class="card-art" aria-hidden="true"><svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3v18M10 3v18M16 3v18M20 3v18"/><path d="M3 8h18M3 16h18"/></svg></div><div class="card-top"><span class="card-cat">Home</span></div><h3><a href="{{ '/fence-cost-calculator/' | relative_url }}">Fence Cost Calculator</a></h3><p class="price">$2,100 - $5,400</p><a class="card-cta" href="{{ '/fence-cost-calculator/' | relative_url }}">Calculate your price &rarr;</a></div>
<div class="card related-card"><div class="card-art" aria-hidden="true"><svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/><path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5"/></svg></div><div class="card-top"><span class="card-cat">Car</span></div><h3><a href="{{ '/oil-change-cost-calculator/' | relative_url }}">Oil Change Cost Calculator</a></h3><p class="price">$45 - $140</p><a class="card-cta" href="{{ '/oil-change-cost-calculator/' | relative_url }}">Calculate your price &rarr;</a></div>
<div class="card related-card"><div class="card-art" aria-hidden="true"><svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 5h12v11H2z"/><path d="M14 9h4l3 3v4h-7"/><circle cx="6" cy="18" r="1.8"/><circle cx="17" cy="18" r="1.8"/></svg></div><div class="card-top"><span class="card-cat">Guide</span></div><h3><a href="{{ '/blog/how-much-do-movers-cost/' | relative_url }}">How Much Do Movers Cost in the USA?</a></h3><p class="price">$843 - $1,637</p><a class="card-cta" href="{{ '/blog/how-much-do-movers-cost/' | relative_url }}">Read the guide &rarr;</a></div>
</div>
<ul class="chip-list">
  <li><a href="{{ '/central-ac-installation-cost-calculator/' | relative_url }}">Central AC Installation Cost Calculator <span aria-hidden="true">&rarr;</span></a></li>
  <li><a href="{{ '/car-wrap-cost-calculator/' | relative_url }}">Car Wrap Cost Calculator <span aria-hidden="true">&rarr;</span></a></li>
  <li><a href="{{ '/house-painting-cost-calculator/' | relative_url }}">House Painting Cost Calculator <span aria-hidden="true">&rarr;</span></a></li>
  <li><a href="{{ '/tools/' | relative_url }}">All calculators <span aria-hidden="true">&rarr;</span></a></li>
</ul>

  <h2>Frequently asked questions</h2>
  <details class="faq">
    <summary>How much do movers cost per hour?</summary>
    <p>A sample range is $80 to $120 per hour for 2 movers and a truck, which is a common USA average.</p>
  </details>
  <details class="faq">
    <summary>How far in advance should I book movers?</summary>
    <p>Book 4 to 6 weeks ahead, and 8 weeks ahead in summer.</p>
  </details>
  <details class="faq">
    <summary>Do movers charge extra for stairs?</summary>
    <p>Many movers do charge extra for stairs, so ask before you book.</p>
  </details>
  <details class="faq">
    <summary>Is tipping movers expected?</summary>
    <p>Tipping 10 to 20 percent of the total is common in the USA, and it is optional.</p>
  </details>
  <details class="faq">
    <summary>When is the cheapest time to move?</summary>
    <p>Outside the May to August peak season, when FreightWaves reports prices run 10% to 25% higher. Midweek and mid-month dates are usually cheapest.</p>
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
    var homeVal = document.getElementById("homeSize").value;
    var distVal = document.getElementById("distance").value;
    var base = parseFloat(homeVal);
    var mult = parseFloat(distVal);
    var typ = base * mult;
    var low = Math.round(typ * 0.68);
    var high = Math.round(typ * 1.32);
    document.getElementById("lowVal").textContent = fmt(low);
    document.getElementById("typVal").textContent = fmt(typ);
    document.getElementById("highVal").textContent = fmt(high);
    var homeText = { "750": "studio", "950": "1-bedroom", "1240": "2-bedroom", "1750": "3-bedroom", "2300": "4+ bedroom" }[homeVal];
    var distText = { "1": "local", "1.4": "50 to 100 mile", "2.1": "100 to 500 mile", "3": "over 500 mile" }[distVal];
    var intro = "A typical " + homeText + " " + distText + " move in the USA costs about " + fmt(typ) + ", with a sample range of " + fmt(low) + " to " + fmt(high) + ".";
    var labor = { "750": "Labor (2 movers, 2 to 3 hours)", "950": "Labor (2 movers, 3 to 4 hours)", "1240": "Labor (2 movers, 4 to 6 hours)", "1750": "Labor (3 movers, 6 to 8 hours)", "2300": "Labor (4 movers, 8 to 10 hours)" }[homeVal];
    try { if (window.hmSync) { window.hmSync(low, typ, high, 843, 1240, 1637, { intro: intro, labor: labor }); } } catch (e) {}
  }
  document.getElementById("homeSize").addEventListener("change", update);
  document.getElementById("distance").addEventListener("change", update);
  update();
})();
</script>
