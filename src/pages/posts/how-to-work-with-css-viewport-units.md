---
layout: ../../layouts/Post.astro
title: How to work with CSS Viewport units
metaTitle: Learn how to use CSS Viewport units
metaDesc: Learn how to use the basic of the CSS Viewport units
image: /images/26-03-2020.jpg
date: 2020-03-26T03:00:00.000Z
tags:
  - css
---

These are so handy; I'm using them all the time because it's just an excellent way of having a section precise the size of the browser.

If you want to see a real-world demo on one of my websites, visit; [The Todoist](https://thetodoist.com/) and scroll along with the page.

## What do Viewport units mean?

CSS has four viewport-based units we can use. These are `vh`, `vw`, `vmin`, `vmax`.

- **Viewport Height** (vh); Meaning the viewport height, we can have values from 1vh to 100vh. Meaning 1vh = 1% of the viewports height.
- **Viewport Width** (vw); Meaning the viewport's width can also have values from 1vw to 100vw. Meaning 1vw = 1% of the viewports width.
- **Viewport Minumum** (vmin): This unit is based on the smallest dimension of the viewport. So if the height is smaller, then the width of 1vmin is 1% of the height.
- **Viewport Maximum** (vmax): This is the same as vmin, but based on the biggest dimension.

## CSS Viewport magic by demo

Let me demo what we can do with `viewport units` to make it easier to understand.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="wvaYbyP" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Basic css viewport demo">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/wvaYbyP">
  Basic css viewport demo</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

As you can see in the demo, we have created two sections in our HTML.

We set the width to be `100vw`, which means it's 100% of the viewport's width.
And the height is to be `100vh`, which is 100% of the viewport's height.
We then gave the `h1` a `font-size` of `4vmax`, so it will also adjust according to the size.

## How about browser support?

Good question! 🙋🏼‍♂️.
The viewport options are widely accepted.

![Viewport units browser support](https://caniuse.bitsofco.de/image/viewport-units.png)

### Let me know what you think!

As always, feel free to drop me a message on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)!
