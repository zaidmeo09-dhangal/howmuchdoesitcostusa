# How Much Does It Cost USA

Free cost calculators and guides for home, car, and moving jobs in the USA.
Jekyll site for GitHub Pages. Staging now, custom domain later.

## Status: STAGING (noindex)

This site is NOT live on howmuchdoesitcostusa.com yet. The domain is NOT bought.
Every page carries `<meta name="robots" content="noindex, nofollow">` and
`robots.txt` has `Disallow: /`, so Google cannot index the staging site.

**At launch, in the SAME deploy that connects the domain, you MUST:**
1. In `_config.yml`: set `url` to `https://howmuchdoesitcostusa.com` and `baseurl` to `""`.
2. In `_includes/head.html`: remove the noindex meta tag (replace `noindex, nofollow` with `index, follow, max-image-preview:large`).
3. In `robots.txt`: replace `Disallow: /` with `Allow: /` plus `Sitemap: https://howmuchdoesitcostusa.com/sitemap.xml`.
4. Remove the staging note from the footer in `_includes/footer.html`.
5. Verify in Search Console that pages are indexed, and submit the sitemap.

If step 2 or 3 is missed, Google will never index the live site.

## Deploy (user steps, because the agent cannot create this repo)

The agent's GitHub token is repo-scoped to `agedatecalc` only and cannot
create repos or push to a new repo (verified: POST /user/repos returns 403).
So the user creates the repo and uploads these files:

1. On GitHub, create a new PUBLIC repo named `howmuchdoesitcostusa` under
   `zaidmeo09-dhangal`. Public is required: free GitHub Pages only publishes
   from public repos.
2. Upload every file in this folder to the repo (root level, keep the folder
   structure: `_config.yml`, `_layouts`, `_includes`, `assets`, `_posts`,
   all `.md` pages, `robots.txt`, `sitemap.xml`, `favicon.svg`).
   Easiest: GitHub web, Add file, Upload files, drag the whole folder.
3. Repo Settings, Pages, Source: Deploy from a branch, Branch: main, Folder: / (root). Save.
4. Wait 1 to 3 minutes. The staging URL is
   `https://zaidmeo09-dhangal.github.io/howmuchdoesitcostusa/`
5. Check: homepage loads, a calculator page loads, `/sitemap.xml` loads,
   `/robots.txt` shows `Disallow: /`, and View Source shows `noindex, nofollow`.

## Pages (17)

- Homepage `/`
- Calculators: `/movers-cost-calculator/`, `/roof-replacement-cost-calculator/`,
  `/fence-cost-calculator/`, `/oil-change-cost-calculator/`,
  `/central-ac-installation-cost-calculator/`, `/car-wrap-cost-calculator/`,
  `/house-painting-cost-calculator/`
- Guides: `/blog/how-much-do-movers-cost/`, `/blog/how-much-does-an-oil-change-cost/`,
  `/blog/how-much-does-it-cost-to-replace-a-roof/`, `/blog/how-much-does-a-fence-cost/`,
  `/blog/how-much-does-it-cost-to-install-central-air/`,
  `/blog/how-much-does-it-cost-to-paint-a-car/`
- `/about/`, `/contact/`, `/privacy/`

## SEO, already built in

- Titles 50 to 57 chars, descriptions 140 to 147 chars on all 17 pages.
- Focus keyword in every H1, semantic headings, canonicals, Open Graph, Twitter cards.
- JSON-LD per page: WebSite + Organization on the homepage, WebPage + HowTo + FAQPage
  on calculators, Article + FAQPage on guides, BreadcrumbList where it fits.
- sitemap.xml lists all 17 staging URLs. jekyll-sitemap is also enabled in _config.yml.
- Default theme is light, dark only via the header toggle, choice saved in the browser.
- All prices are sample estimated USA ranges, not quotes. USA spelling, USA sources only.

## Still open (not this build)

- Buy howmuchdoesitcostusa.com (Namecheap cart verified $6.68 total with NEWCOM648;
  domain NOT bought, user buys it at checkout).
- Connect the custom domain (Cloudflare DNS + CNAME), remove noindex (see above).
- Google Search Console + sitemap submit, GA4, indexing requests.
- Content wording full SEO optimization (planned later).
- No traffic or ranking is promised. Traffic math is arithmetic only.
