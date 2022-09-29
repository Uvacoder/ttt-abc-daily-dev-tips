---
layout: ../../layouts/Post.astro
title: 'CSS Writing Mode'
metaTitle: 'CSS Writing Mode'
metaDesc: 'Lets explore the CSS Writing Mode property today'
image: /images/09-07-2020.jpg
date: 2020-07-09T03:00:00.000Z
tags:
  - css
---

The other day I came across the CSS `writing-mode` property and must admit I've never used it, so I decided to see what we can do with it.

It's a fantastic property that tells us how text should flow, horizontal or vertical.

## HTML Structure

We are testing the three values we can use and a default benchmark text:

```html
<p>This text is your basic paragraph and flows naturally</p>
<p class="vertical-rl">This text goes Vertical from Right to Left</p>
<p class="vertical-lr">This text goes Vertical from Left to Right</p>
<p class="horizontal-tb">This text goes Horizontal from Top to Bottom</p>
```

## CSS Writing Mode

As mentioned, `CSS` `writing-mode` can be used to define how a text should flow.

It comes with three possible options:

- `vertical-rl`: Goes Vertical from Right to Left
- `vertical-lr`: Goes Vertical from Left to Right
- `horizontal-tb`: Goes Horizontal from Top to Bottom (Default)

The horizontal is the default and the standard value.

```css
.vertical-rl {
  writing-mode: vertical-rl;
}
.vertical-lr {
  writing-mode: vertical-lr;
}
.horizontal-tb {
  writing-mode: horizontal-tb;
}
```

This results in the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="wvMjvKL" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="wvMjvKL">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/wvMjvKL">
  wvMjvKL</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

Writing mode comes with relatively good support. It's missing some IE features and Opera Mini (as many cool features).

![CSS Writing Mode support](https://caniuse.bitsofco.de/image/css-writing-mode.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
