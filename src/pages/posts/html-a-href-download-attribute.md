---
layout: ../../layouts/Post.astro
title: 'HTML a href Download Attribute'
metaTitle: 'HTML a href Download Attribute'
metaDesc: 'Did you know you can use the download attribute on an a href?'
image: /images/24-05-2020.jpg
date: 2020-05-24T03:00:00.000Z
tags:
  - html
---

Did you know the `a href` element comes with a `download` attribute?

We can put this `download` attribute on our `a href`

## HTML Structure

```html
<a
  href="https://images.unsplash.com/photo-1589923189710-aa8f494ab9ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  download
  >Download here</a
>
```

This will download the image directly.

We can also pass a value to the download attribute; this will be the name that the downloaded file will have.

```html
<a
  href="https://images.unsplash.com/photo-1589923189710-aa8f494ab9ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  download="flowers"
  >Download here</a
>
```

Unfortunately, this does not work 100% in Codepen but feel free to get the code from Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="Vwvgpxo" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="HTML a href Download Attribute">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/Vwvgpxo">
  HTML a href Download Attribute</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

The download attribute doesn't work in IE or Opera.

![Download](https://caniuse.bitsofco.de/image/download.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
