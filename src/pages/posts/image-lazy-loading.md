---
layout: ../../layouts/Post.astro
title: 'Image Lazy Loading'
metaTitle: 'Image Lazy Loading'
metaDesc: 'Lazy loading was never this easy! 😴'
image: /images/06-06-2020.jpg
date: 2020-06-06T03:00:00.000Z
tags:
  - html
---

Lazy loading has been a term that was hot about 15 years ago and never stopped being in fashion. The images are mostly the heaviest part of a website and tend to slow everything down.

It was always pretty tedious to make a custom `JavaScript` for lazy loading, but we now have the native lazy loading API!

It can be as simple as adding `loading="lazy"` to an image element.

## HTML Structure

```html
<img
  src="https://images.unsplash.com/photo-1591303872989-2640dc28185b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3236&q=80"
  loading="lazy"
  onload="alert('Cool right!');"
/>
```

We can define the `loading` attribute and give it the value of `lazy`, and the API comes with an `onload` callback function.

Other values we can use are:

- auto - Default behavior, browser-specific
- lazy - Loads the image when it becomes visible based on scroll
- eager - Loads the image directly

See this in action on the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="LYGEMqP" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Image Lazy Loading">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/LYGEMqP">
  Image Lazy Loading</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

Unfortunately, it's not fully supported by all browsers, but keep in mind if the browser doesn't support it, it will just show the image, so there is no harm in adding this!

<picture>
<source type="image/webp" srcset="https://caniuse.bitsofco.de/image/loading-lazy-attr.webp" />
<source type="image/png" srcset="https://caniuse.bitsofco.de/image/loading-lazy-attr.png" />
<img src="https://caniuse.bitsofco.de/image/loading-lazy-attr.jpg" alt="Lazy loading support" />
</picture>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
