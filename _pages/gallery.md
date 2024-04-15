---
layout: gallery
title: Gallery
permalink: /gallery/
nav: true
nav_order: 4
social: true # includes social icons at the bottom of the page
---

<div class="grid">
    {% for image in site.data.assets.gallery %}
        {% include photo.liquid %}
    {% endfor %}
</div>
