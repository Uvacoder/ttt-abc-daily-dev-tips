---
layout: ../../layouts/Post.astro
title: 'CSS Text color difference based on background'
metaTitle: 'CSS Text color difference based on background'
metaDesc: 'How to use CSS mix-blend-mode to create color difference based on background'
image: /images/31-03-2020.jpg
date: 2020-03-31T02:36:00.000Z
tags:
  - css
---

Traditional `CSS` is quite lame; it only allows us to set 1 color for the text. But seeing we create more and more floating and fixed elements, we might want to have a dynamic `text-color`.

## How to create a difference based text color in CSS

Let's start by marking up the html:

```html
<div class="text-container">
  <h1>Difference</h1>
</div>
<section></section>
<section></section>
```

Then we want to include two random backgrounds for the sections. Let's do that.

```css
section {
  width: 100vw;
  height: 100vh;
  background: #000;
  &:nth-child(odd) {
    background: #fff;
  }
}
```

And make sure the text div is floating on top of everything!

```css
.text-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  mix-blend-mode: difference;
  h1 {
    font-size: 150px;
  }
}
```

We included `mix-blend-mode: difference;` this makes the color blend based on the background.

Awesome, right?! 🤩

> This also works on images/videos backgrounds and whatnot!

See a demo here:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="dyoaWRa" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Text color difference based on background">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/dyoaWRa">
  CSS Text color difference based on background</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser support

Unfortunately not supported by IE, but still overall good support!
I use this option a lot to make just that small difference!

![CSS Mix-blend-mode browser support](https://caniuse.bitsofco.de/image/css-mixblendmode.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
