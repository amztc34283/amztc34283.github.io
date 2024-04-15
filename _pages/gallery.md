---
layout: gallery
title: Gallery
permalink: /gallery/
nav: true
nav_order: 4
social: true # includes social icons at the bottom of the page
---

<div id="galleryModal" class="modal">
    <span id="galleryModalClose">&times;</span>
    <img id="galleryModalContent">
</div>
<!-- order matters -->
<div class="grid">
    {% for image in site.data.assets.gallery %}
        {% include photo.liquid %}
    {% endfor %}
</div>
