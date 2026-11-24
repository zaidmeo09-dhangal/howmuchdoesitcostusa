---
layout: default
title: Debug Counts
meta_title: "Debug Counts"
meta_description: "Temporary debug page."
permalink: /debug-counts/
---

<p>pages_size: {{ site.pages.size }}</p>
<p>posts_size: {{ site.posts.size }}</p>
<p>page_urls:</p>
<ul>
{% for p in site.pages %}
<li>{{ p.url }}</li>
{% endfor %}
</ul>
