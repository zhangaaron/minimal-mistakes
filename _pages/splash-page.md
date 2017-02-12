---
title: "Splash Page"
layout: splash
permalink: /
date: 2016-03-23T11:48:41-04:00
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/unsplash-image-1.jpg
  cta_label: "Download"
  cta_url: "https://github.com/mmistakes/minimal-mistakes/"
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
excerpt: "Aaron Zhang Aaron Zhang Aaron Zhang Aaron Zhang Aaron Zhang Aaron Zhang Aaron Zhang Aaron Zhang "
intro: 
  - excerpt: 'ALL WORK AND NO PLAY MAKES AARON A DULL BOY ALL WORK AND NO PLAY MAKES AARON A DULL BOY ALL WORK AND NO PLAY MAKES AARON A DULL BOY ALL WORK AND NO PLAY MAKES AARON A DULL BOY ALL WORK AND NO PLAY MAKES AARON A DULL BOY Centered with `type="center"`'
feature_row:
  - image_path: assets/images/unsplash-gallery-image-1-th.jpg
    alt: "placeholder image 1"
    title: "AARON"
    excerpt: "ALL WORK AND NO PLAY MAKES AARON A DULL BOY "
  - image_path: /assets/images/unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 2"
    title: "ZHANG"
    excerpt: "ALL WORK AND NO PLAY MAKES AARON A DULL BOY "
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--inverse"
  - image_path: /assets/images/unsplash-gallery-image-3-th.jpg
    title: "STUFF"
    excerpt: "ALL WORK AND NO PLAY MAKES AARON A DULL BOY"
feature_row2:
  - image_path: /assets/images/unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 2"
    title: "Placeholder Image Left Aligned"
    excerpt: 'ALL WORK AND NO PLAY MAKES AARON A DULL BOY '
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--inverse"
feature_row3:
  - image_path: /assets/images/unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 2"
    title: "Placeholder Image Right Aligned"
    excerpt: '**ALL WORK AND NO PLAY MAKES AARON A DULL BOY**  Right aligned with `type="right"`'
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--inverse"
feature_row4:
  - image_path: /assets/images/unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 2"
    title: "Placeholder Image Center Aligned"
    excerpt: 'ALL WORK AND NO PLAY MAKES AARON A DULL BOY'
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--inverse"
---

{% include feature_row id="intro" type="center" %}

{% include feature_row %}

{% include feature_row id="feature_row2" type="left" %}

{% include feature_row id="feature_row3" type="right" %}

{% include feature_row id="feature_row4" type="center" %}