---
layout: default
title: "Central Air Installation Cost Calculator"
meta_title: "Central Air Installation Cost Calculator - USA Prices"
meta_description: "How much does it cost to install central air? Use our free calculator to estimate equipment, labor, and total cost by home size in the USA now."
permalink: /central-ac-installation-cost-calculator/
breadcrumb: Tools
schema: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "Central Air Installation Cost Calculator",
        "description": "How much does it cost to install central air? Use our free calculator to estimate equipment, labor, and total cost by home size in the USA now.",
        "url": "https://howmuchdoesitcostusa.com/central-ac-installation-cost-calculator/"
      },
      {
        "@type": "HowTo",
        "name": "How to estimate central air installation cost",
        "description": "Estimate the cost of central air in 4 steps using home size and efficiency.",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Step 1",
            "text": "Measure your home size. Use the cooled floor area to estimate the system size."
          },
          {
            "@type": "HowToStep",
            "name": "Step 2",
            "text": "Pick an efficiency. 13.4 SEER2 is the federal minimum in the North, and higher SEER2 units cost more up front and save on bills."
          },
          {
            "@type": "HowToStep",
            "name": "Step 3",
            "text": "Run the calculator. Enter home size and efficiency to see your low, typical, and high sample range."
          },
          {
            "@type": "HowToStep",
            "name": "Step 4",
            "text": "Get a pro load calculation. Ask an installer to confirm the size, since insulation and windows change the answer."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What size AC do I need?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "About 1 ton per 600 sq ft is a rough guide, and a pro should confirm the size."
            }
          },
          {
            "@type": "Question",
            "name": "How long does installation take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Installation usually takes 1 to 2 days."
            }
          },
          {
            "@type": "Question",
            "name": "Does central air need new ductwork?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sometimes new ductwork is needed, since old or leaky ducts may need work."
            }
          },
          {
            "@type": "Question",
            "name": "How long does a central AC last?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A central AC lasts about 15 to 20 years."
            }
          },
          {
            "@type": "Question",
            "name": "How much does it cost to replace central AC instead of installing new?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Replacing only the AC costs $3,911 to $8,067, per TrueRepairCost. Adding new ductwork raises the job to $7,500 to $16,000."
            }
          },
          {
            "@type": "Question",
            "name": "Should I repair or replace my central AC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use the $5,000 rule: multiply the age of the system in years by the cost of the repair, and replace it if the answer is over $5,000. A 12 year old system with a $500 repair gives $6,000, so replace, while the same repair on a 5 year old system gives $2,500, so repair."
            }
          },
          {
            "@type": "Question",
            "name": "Can I install central air in a home with no ducts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A home with no ducts needs a full duct install, which costs far more. With new ductwork the job runs $7,500 to $16,000, per TrueRepairCost, against $3,911 to $8,067 to replace the AC only."
            }
          },
          {
            "@type": "Question",
            "name": "How much does it cost to install central air?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A typical 2.5 ton central air system costs about $6,800 to install, with a sample range of $5,200 to $9,500. A 1.5 ton system costs $4,080 typical, and a 3.5 ton system costs $9,520 typical, at 13.4 SEER2."
            }
          }
        ]
      }
    ]
  }
---

<section class="wrap">
  <p class="crumb"><a href="{{ '/' | relative_url }}">Home</a> / <a href="{{ '/tools/' | relative_url }}">Tools</a> / Central AC Installation Cost Calculator</p>
  <p class="kicker">Free Calculator</p>
  <h1>Central Air Installation Cost Calculator</h1>
  <p class="page-byline">By <strong>How Much Does It Cost USA Team</strong> <span class="byline-dot" aria-hidden="true">|</span> Updated November 21, 2026</p>
  <div class="answer">
    <p id="answerIntro">A typical 2.5 ton central air system in the USA costs about $6,800, with a sample range of $5,200 to $9,500.</p>
    <p class="note">All prices on this page are sample estimated USA ranges, not quotes.</p>
    <p>Read the full guide: <a href="{{ '/blog/how-much-does-it-cost-to-install-central-air/' | relative_url }}">How Much Does It Cost to Install Central Air?</a></p>
    <p class="updated-line">Updated November 21, 2026</p>
  </div>

  <div class="calc">
    <h2>Central AC Installation Cost Calculator</h2>
    <p>Pick your home size and efficiency to see the cost to install central air for your home, as a sample estimated price for a new central air system.</p>
    <div class="calc-field">
      <label for="homeSize">Home size: <span id="homeSizeVal">1,500 sq ft</span></label>
      <input type="range" id="homeSize" min="800" max="3500" step="50" value="1500">
      <p class="hint">About <span id="tonsVal">2.5 tons</span> for this home size.</p>
    </div>
    <div class="calc-field">
      <label for="efficiency">Efficiency (SEER2 rating)</label>
      <select id="efficiency">
        <option value="1" selected>13.4 SEER2 (federal minimum, North)</option>
        <option value="1.15">16 SEER2</option>
        <option value="1.3">18+ SEER2 (high efficiency)</option>
      </select>
      <p class="hint">In the Southeast and Southwest the federal minimum is 14.3 SEER2, so southern buyers should read the base price as the 14.3 SEER2 price. See the SEER2 table below.</p>
    </div>
    <div class="receipt">
      <h3>Your estimated cost</h3>
      <p class="receipt-total" id="typVal">$6,800</p>
      <p class="receipt-range">Sample range: <span id="lowVal">$5,200</span> (low) to <span id="highVal">$9,500</span> (high)</p>
      <div class="price-bar receipt-bar" aria-hidden="true"><span id="rangeBar" style="width:37%"></span></div>
      <p class="note">Sample estimated USA range. Your final price depends on home size, system size, efficiency, ductwork, and local labor rates.</p>
    </div>
  </div>

  <h2>Cost to install central air: low, typical, and high</h2>
  <p>These bands update with your calculator choices. Use them to plan your budget before you request quotes.</p>
  <div class="bands">
    <div class="band">
      <p class="band-label">Low</p>
      <p class="band-price" id="bandLowVal">$5,200</p>
      <p>A smaller job with basic choices.</p>
    </div>
    <div class="band band-typical"><p class="band-tag">Most common</p>
      <p class="band-label">Typical</p>
      <p class="band-price" id="bandTypVal">$6,800</p>
      <p>Your selection at typical USA rates.</p>
    </div>
    <div class="band">
      <p class="band-label">High</p>
      <p class="band-price" id="bandHighVal">$9,500</p>
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
        <tr><td>Equipment (condenser, coil)</td><td>$2,800</td><td>$3,600</td><td>$5,100</td></tr>
        <tr><td id="laborLabel">Labor and installation (2.5 ton system, 1 to 2 days)</td><td>$1,600</td><td>$2,100</td><td>$2,900</td></tr>
        <tr><td>Ductwork modifications</td><td>$350</td><td>$500</td><td>$750</td></tr>
        <tr><td>Electrical and permits</td><td>$250</td><td>$350</td><td>$450</td></tr>
        <tr><td>Supplies and refrigerant</td><td>$200</td><td>$250</td><td>$300</td></tr>
        <tr class="total"><td>Totals</td><td>$5,200</td><td>$6,800</td><td>$9,500</td></tr>
      </tbody>
    </table>
  </div>
  <p class="note">Sample estimated USA ranges. Equipment and labor together are most of the total.</p>

  <h2>How to estimate in 4 steps</h2>
  <ol class="steps">
    <li><strong>Measure your home size.</strong> Use the cooled floor area to estimate the system size.</li>
    <li><strong>Pick an efficiency.</strong> 13.4 SEER2 is the federal minimum in the North, and higher SEER2 units cost more up front and save on bills.</li>
    <li><strong>Run the calculator.</strong> Enter home size and efficiency to see your low, typical, and high sample range.</li>
    <li><strong>Get a pro load calculation.</strong> Ask an installer to confirm the size, since insulation and windows change the answer.</li>
  </ol>

  <h2>What affects the price</h2>
  <h3>Home size</h3>
  <p>Larger homes need larger systems, and system size is the biggest driver of equipment cost. A 2,500 sq ft home needs a much larger unit than a 1,000 sq ft home.</p>
  <h3>Efficiency rating (SEER2)</h3>
  <p>Higher SEER2 units cost more to buy and can lower monthly cooling bills over time. A 16 or 18 SEER2 system costs more up front than a 13.4 SEER2 system of the same size. SEER2 is the current federal test rating, and it replaced SEER for new systems.</p>

  <h3>Insulation and windows</h3>
  <p>Insulation and windows change the size your home needs, so square feet alone do not settle it. A well insulated home with good windows needs less cooling than a drafty home of the same size, and a home with large west facing windows needs more. A pro should confirm the size with a load calculation before you buy, since insulation, windows, and climate change the answer. Sealing ducts before sizing a new system also helps, since leaky ducts waste cooled air.</p>
  <h3>Thermostat and controls</h3>
  <p>Smart thermostat upgrades are not included in the price on this page. A new thermostat can help a new system run well, but it is a separate cost, so ask for it as its own line if you want one. Check that the thermostat works with the system you pick, and ask who sets it up and shows you how to use it. A good control does not fix a wrong size, so settle the size first.</p>
  <h2>SEER2 federal minimums by region</h2>
  <p>Since January 2023, new central air systems must meet these SEER2 minimums, per TrueRepairCost. A quote below the minimum for your region is not a legal new install.</p>
  <p class="table-hint">Swipe to see the Minimum column &rarr;</p>
  <div class="table-wrap">
    <table class="cost-table">
      <caption>SEER2 federal minimums for central air systems</caption>
      <thead>
        <tr><th>Region</th><th>Minimum SEER2</th></tr>
      </thead>
      <tbody>
        <tr><td>North</td><td>13.4</td></tr>
        <tr><td>Southeast</td><td>14.3 (systems under 45,000 BTU)</td></tr>
        <tr><td>Southwest</td><td>14.3 (systems under 45,000 BTU)</td></tr>
      </tbody>
    </table>
  </div>
  <p class="note">Source: TrueRepairCost, researched November 9, 2026. A 3 ton unit-only price rises with SEER, as TrueRepairCost lists it: 14 SEER about $1,725 to $3,600, 16 SEER about $2,875 to $6,000, 18 SEER about $4,100 to $7,800, and 21 SEER about $6,325 to $10,800, per TrueRepairCost.</p>

  <h2>Refrigerant and the indoor coil</h2>
  <p>New systems use R-454B or R-32 refrigerant. R-454B has a global warming potential of 466, against 2,088 for the older R-410A, per TrueRepairCost. The indoor coil is replaced with the outdoor condenser because the coil must match the new refrigerant and the new SEER2 rating, so a condenser-only swap that keeps an old coil is a false saving.</p>

  <h2>Replacement or new install</h2>
  <p>Replacing an old system on existing ducts is a different job from adding air conditioning where there was none. Use the table to see which job you are pricing.</p>
  <p class="table-hint">Swipe to see the Sample range column &rarr;</p>
  <div class="table-wrap">
    <table class="cost-table">
      <caption>Sample estimated USA prices by project type, per TrueRepairCost</caption>
      <thead>
        <tr><th>Project type</th><th>Sample range</th></tr>
      </thead>
      <tbody>
        <tr><td>Replace AC only</td><td>$3,911 to $8,067</td></tr>
        <tr><td>Add AC to a furnace and ducts</td><td>$3,000 to $10,700</td></tr>
        <tr><td>AC plus furnace</td><td>$5,000 to $11,000</td></tr>
        <tr><td>Heat pump</td><td>$3,625 to $10,800</td></tr>
        <tr><td>With new ductwork</td><td>$7,500 to $16,000</td></tr>
      </tbody>
    </table>
  </div>
  <p class="note">Labor is 40 to 60 percent of the total, per TrueRepairCost. Ductwork alone runs $3,000 to $7,500 for 300 linear feet, per Angi.</p>

  <h2>Worked example: 3.5 ton home in Georgia</h2>
  <p>TrueRepairCost prices a 3.5 ton Georgia home at $5,650 to $7,650. Georgia is in the Southeast, so the 14.3 SEER2 minimum applies. Our calculator prices a 3.5 ton system at 3.5 x $2,720 = $9,520 before the efficiency multiplier, which is higher because it is a sample model rate, not a Georgia quote, so get a local quote before you budget.</p>

  <h2>Repair or replace: the $5,000 rule</h2>
  <p>iBuyer uses a $5,000 rule: multiply the age of the system in years by the cost of the repair, and replace it if the answer is over $5,000. Worked math: 12 years x $500 repair = $6,000, which is over $5,000, so replace. A 12 year old system that needs a $500 repair fails the test, while the same repair on a 5 year old system gives 5 x $500 = $2,500, which passes.</p>
  <h3>Ductwork condition</h3>
  <p>Old or leaky ducts may need sealing or repair, which adds labor and material cost. Homes with no ducts at all need a full duct install, which costs far more.</p>
  <h3>Electrical work</h3>
  <p>Some homes need a new circuit or panel work to support the new system. An older panel may need an upgrade before the installer can connect the condenser.</p>
  <h3>Location and permits</h3>
  <p>Labor rates and permit fees vary by city, and some areas require an inspection. Ask your installer which permits are needed and whether the fee is in the quote.</p>

  <h2>What is included and what is not</h2>
  <div class="two-col">
    <div>
      <h3>What is included</h3>
      <ul class="checklist">
        <li>Condenser and coil</li>
        <li>Labor and installation</li>
        <li>Basic ductwork modifications</li>
        <li>Refrigerant and supplies</li>
        <li>Old system removal and disposal (most companies include it; if separate, Angi prices it at $25 to $200)</li>
      </ul>
    </div>
    <div>
      <h3>What is not included</h3>
      <ul class="checklist checklist-x">
        <li>Electrical panel upgrades</li>
        <li>Full duct replacement</li>
        <li>Smart thermostat upgrades</li>
        <li>New ductwork for a home with no ducts</li>
      </ul>
    </div>
  </div>

  <h2>How we estimate</h2>
  <p>We size the system first, then price it. Tons come from home size divided by 600, rounded to the nearest half ton, with a 1.5 ton floor. The typical price is tons times $2,720 times the efficiency multiplier (1.0 for 13.4 SEER2, 1.15 for 16 SEER2, 1.3 for 18+ SEER2). At the default 1,500 sq ft home that is 2.5 tons x $2,720 x 1.0 = $6,800. Low is 76.5 percent of typical and high is 139.7 percent, so $6,800 gives $5,200 low and $9,500 high after rounding to the nearest $10.</p>
  <p>A pro should confirm the size with a load calculation before you buy, since insulation, windows, and climate change the answer.</p>

  <h2>Hiring a pro checklist</h2>
  <ul class="checklist">
    <li>Get 3 written quotes with the exact condenser and coil models and SEER2 rating listed</li>
    <li>Ask for a Manual J load calculation, not a size guess from square feet alone</li>
    <li>Ask which refrigerant the system uses, R-454B or R-32, and confirm the coil is new</li>
    <li>Ask for a duct leakage test and a written price for any duct repair</li>
    <li>Check the installer license, insurance, and reviews</li>
    <li>Confirm the warranty on parts and labor, and who pulls the permit</li>
  </ul>

  <h2>Budget tips</h2>
  <ul>
    <li>Compare 13.4 and 16 SEER2 total cost over 10 years</li>
    <li>Seal ducts before sizing a new system</li>
    <li>Schedule installation in spring or fall, when Angi says you can save 10 to 15 percent</li>
    <li>Do not count on the federal 25C tax credit: it ended December 31, 2025, under Public Law 119-21, per TrueRepairCost. Check state and utility rebates instead</li>
      <li>Ask for a Manual J load calculation, not a size guess from square feet alone</li>
    <li>Ask for a duct leakage test and a written price for any duct repair</li>
    <li>Check state and utility rebates, since the federal 25C tax credit ended December 31, 2025</li>
</ul>

  <h2>Where the $6,800 typical total goes</h2>
  <p>The table below repeats the typical column from the breakdown above, so you can see the share of each line at the calculator default.</p>
  <div class="table-wrap">
    <table class="cost-table">
      <caption>Typical cost lines for a 2.5 ton central air system</caption>
      <thead>
        <tr><th>Item</th><th>Typical</th></tr>
      </thead>
      <tbody>
        <tr><td>Equipment (condenser, coil)</td><td>$3,600</td></tr>
        <tr><td>Labor and installation (2.5 ton system, 1 to 2 days)</td><td>$2,100</td></tr>
        <tr><td>Ductwork modifications</td><td>$500</td></tr>
        <tr><td>Electrical and permits</td><td>$350</td></tr>
        <tr><td>Supplies and refrigerant</td><td>$250</td></tr>
        <tr class="total"><td>Total</td><td>$6,800</td></tr>
      </tbody>
    </table>
  </div>
  <p>Equipment at $3,600 and labor at $2,100 together are most of the $6,800 total. Labor is 40 to 60 percent of the total, per TrueRepairCost. If a quote is far above the $9,500 high end, ask whether full duct replacement or electrical panel work is in it.</p>
  <h2>Cost by system size</h2>
  <p>The calculator prices tons at $2,720 each at 13.4 SEER2, so the typical price by size is the table below. A 16 SEER2 system costs 1.15 times as much, and an 18+ SEER2 system costs 1.3 times as much.</p>
  <div class="table-wrap">
    <table class="cost-table">
      <caption>Typical installed cost by system size, at 13.4 SEER2</caption>
      <thead>
        <tr><th>System size</th><th>Typical</th></tr>
      </thead>
      <tbody>
        <tr><td>1.5 tons</td><td>$4,080</td></tr>
        <tr><td>2 tons</td><td>$5,440</td></tr>
        <tr><td>2.5 tons</td><td>$6,800</td></tr>
        <tr><td>3 tons</td><td>$8,160</td></tr>
        <tr><td>3.5 tons</td><td>$9,520</td></tr>
        <tr><td>4 tons</td><td>$10,880</td></tr>
        <tr><td>5 tons</td><td>$13,600</td></tr>
      </tbody>
    </table>
  </div>
  <p>Size is the biggest driver of equipment cost, but do not pick a size from square feet alone. A pro should confirm the size with a load calculation, since insulation, windows, and climate change the answer. If your home has no ducts, add new ductwork: with new ductwork the job runs $7,500 to $16,000, per TrueRepairCost.</p>
  <h2>References</h2>
  <p>Our estimates use public US cost data as a guide. Labor cost context comes from the US Bureau of Labor Statistics, housing cost context from HUD, remodeling trends from Harvard JCHS, and material prices from Home Depot and Lowes. AC prices in this page also use Angi, TrueRepairCost, and iBuyer. All prices on this page are sample estimated USA ranges, not quotes.</p>
  <div class="refs">
  <p><a href="https://www.bls.gov/" target="_blank" rel="noopener">US Bureau of Labor Statistics</a> <span class="ref-note">labor cost data</span></p>
  <p><a href="https://www.hud.gov/" target="_blank" rel="noopener">HUD</a> <span class="ref-note">housing cost data</span></p>
  <p><a href="https://www.jchs.harvard.edu/" target="_blank" rel="noopener">Harvard JCHS</a> <span class="ref-note">household and remodeling cost research</span></p>
  <p><a href="https://www.homedepot.com/" target="_blank" rel="noopener">Home Depot</a> <span class="ref-note">central air equipment prices</span></p>
  <p><a href="https://www.lowes.com/" target="_blank" rel="noopener">Lowes</a> <span class="ref-note">central air equipment prices</span></p>
  <p><a href="https://www.angi.com/articles/how-much-does-installing-new-ac-cost.htm" target="_blank" rel="noopener">Angi</a> <span class="ref-note">central AC installation cost, updated October 22, 2026</span></p>
  <p><a href="https://truerepaircost.com/central-ac-installation-cost/" target="_blank" rel="noopener">TrueRepairCost</a> <span class="ref-note">central AC installation cost, researched November 9, 2026</span></p>
  <p><a href="https://ibuyer.com/blog/how-much-does-it-cost-to-install-central-ac/" target="_blank" rel="noopener">iBuyer</a> <span class="ref-note">central AC installation cost and the $5,000 repair rule</span></p>
  </div>

  <h2>Related calculators and guides</h2>
  <div class="grid related-grid">
<div class="card related-card"><div class="card-art" aria-hidden="true"><svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M4 6l16 12M20 6 4 18"/><circle cx="12" cy="12" r="3"/></svg></div><div class="card-top"><span class="card-cat">Guide</span></div><h3><a href="{{ '/blog/how-much-does-it-cost-to-install-central-air/' | relative_url }}">How Much Does It Cost to Install Central Air?</a></h3><p class="price">$5,200 - $9,500</p><a class="card-cta" href="{{ '/blog/how-much-does-it-cost-to-install-central-air/' | relative_url }}">Read the guide &rarr;</a></div>
<div class="card related-card"><div class="card-art" aria-hidden="true"><svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 5h12v11H2z"/><path d="M14 9h4l3 3v4h-7"/><circle cx="6" cy="18" r="1.8"/><circle cx="17" cy="18" r="1.8"/></svg></div><div class="card-top"><span class="card-cat">Moving</span></div><h3><a href="{{ '/movers-cost-calculator/' | relative_url }}">Movers Cost Calculator</a></h3><p class="price">$843 - $1,637</p><a class="card-cta" href="{{ '/movers-cost-calculator/' | relative_url }}">Calculate your price &rarr;</a></div>
<div class="card related-card"><div class="card-art" aria-hidden="true"><svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12 12 3l10 9"/><path d="M6 10v10h12V10"/><path d="M9.5 14h2m2 0h2m-6 3h2m2 0h2"/></svg></div><div class="card-top"><span class="card-cat">Home</span></div><h3><a href="{{ '/roof-replacement-cost-calculator/' | relative_url }}">Roof Replacement Cost Calculator</a></h3><p class="price">$7,528 - $11,475</p><a class="card-cta" href="{{ '/roof-replacement-cost-calculator/' | relative_url }}">Calculate your price &rarr;</a></div>
<div class="card related-card"><div class="card-art" aria-hidden="true"><svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3v18M10 3v18M16 3v18M20 3v18"/><path d="M3 8h18M3 16h18"/></svg></div><div class="card-top"><span class="card-cat">Home</span></div><h3><a href="{{ '/fence-cost-calculator/' | relative_url }}">Fence Cost Calculator</a></h3><p class="price">$2,100 - $5,400</p><a class="card-cta" href="{{ '/fence-cost-calculator/' | relative_url }}">Calculate your price &rarr;</a></div>
</div>
<ul class="chip-list">
  <li><a href="{{ '/oil-change-cost-calculator/' | relative_url }}">Oil Change Cost Calculator <span aria-hidden="true">&rarr;</span></a></li>
  <li><a href="{{ '/car-wrap-cost-calculator/' | relative_url }}">Car Wrap Cost Calculator <span aria-hidden="true">&rarr;</span></a></li>
  <li><a href="{{ '/house-painting-cost-calculator/' | relative_url }}">House Painting Cost Calculator <span aria-hidden="true">&rarr;</span></a></li>
  <li><a href="{{ '/tools/' | relative_url }}">All calculators <span aria-hidden="true">&rarr;</span></a></li>
</ul>

  <h2>Frequently asked questions</h2>
  <details class="faq">
    <summary>What size AC do I need?</summary>
    <p>About 1 ton per 600 sq ft is a rough guide, and a pro should confirm the size.</p>
  </details>
  <details class="faq">
    <summary>How long does installation take?</summary>
    <p>Installation usually takes 1 to 2 days.</p>
  </details>
  <details class="faq">
    <summary>Does central air need new ductwork?</summary>
    <p>Sometimes new ductwork is needed, since old or leaky ducts may need work.</p>
  </details>
  <details class="faq">
    <summary>How long does a central AC last?</summary>
    <p>A central AC lasts about 15 to 20 years.</p>
  </details>
  <details class="faq">
    <summary>How much does it cost to replace central AC instead of installing new?</summary>
    <p>Replacing only the AC costs $3,911 to $8,067, per TrueRepairCost. Adding new ductwork raises the job to $7,500 to $16,000.</p>
  </details>
  <details class="faq">
    <summary>Should I repair or replace my central AC?</summary>
    <p>Use the $5,000 rule: multiply the age of the system in years by the cost of the repair, and replace it if the answer is over $5,000. A 12 year old system with a $500 repair gives $6,000, so replace, while the same repair on a 5 year old system gives $2,500, so repair.</p>
  </details>
  <details class="faq">
    <summary>Can I install central air in a home with no ducts?</summary>
    <p>A home with no ducts needs a full duct install, which costs far more. With new ductwork the job runs $7,500 to $16,000, per TrueRepairCost, against $3,911 to $8,067 to replace the AC only.</p>
  </details>
  <details class="faq">
    <summary>How much does it cost to install central air?</summary>
    <p>A typical 2.5 ton central air system costs about $6,800 to install, with a sample range of $5,200 to $9,500. A 1.5 ton system costs $4,080 typical, and a 3.5 ton system costs $9,520 typical, at 13.4 SEER2.</p>
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
    var size = parseFloat(document.getElementById("homeSize").value);
    var mult = parseFloat(document.getElementById("efficiency").value);
    document.getElementById("homeSizeVal").textContent = Math.round(size).toLocaleString("en-US") + " sq ft";
    var tons = Math.max(1.5, Math.round((size / 600) * 2) / 2);
    document.getElementById("tonsVal").textContent = tons + " tons";
    var typ = round10(tons * 2720 * mult);
    var low = round10(typ * 0.765);
    var high = round10(typ * 1.397);
    document.getElementById("lowVal").textContent = fmt(low);
    document.getElementById("typVal").textContent = fmt(typ);
    document.getElementById("highVal").textContent = fmt(high);
    var intro = "A typical " + tons + " ton central air system in the USA costs about " + fmt(typ) + ", with a sample range of " + fmt(low) + " to " + fmt(high) + ".";
    var days = tons <= 2 ? "1 day" : tons <= 3.5 ? "1 to 2 days" : "2 days";
    var labor = "Labor and installation (" + tons + " ton system, " + days + ")";
    try { if (window.hmSync) { window.hmSync(low, typ, high, 5200, 6800, 9500, { intro: intro, labor: labor }); } } catch (e) {}
  }
  document.getElementById("homeSize").addEventListener("input", update);
  document.getElementById("efficiency").addEventListener("change", update);
  update();
})();
</script>
