---
layout: ../../layouts/Post.astro
title: 'CSS Grid Introduction'
metaTitle: 'CSS Grid Introduction'
metaDesc: 'Getting started with CSS Grid!'
image: /images/15-07-2020.jpg
date: 2020-07-15T03:00:00.000Z
tags:
  - css
---

Today we'll be looking at a `flex` competitor called `CSS` Grid!
As the name suggests, it's an awesome tool to make grids and layouts.

In general, a grid is build by having a container and some children inside it.

> Extra articles: [CSS Grid Container](https://daily-dev-tips.com/posts/css-grid-container/) and [CSS Grid Item](https://daily-dev-tips.com/posts/css-grid-item/)

## CSS Basic Grid

As for our `HTML` we are using the following setup

```html
<div class="grid">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

And to style this basic grid into four equal columns:

```css
.grid {
  background: #1b9aaa;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1.5em;
}
.item {
  width: 100%;
  height: 200px;
  background: #06d6a0;
}
```

Note we add the `grid-gap` property, if we leave that out, the columns will be stuck to each other.
The template will work by defining it will have four small columns.

See and test it on Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="YzwOWRe" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Grid Introduction">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/YzwOWRe">
  CSS Grid Introduction</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Other Column Size

But what if we want the first item to span two columns? Then two small ones and the other way around for the second row?

```html
<div class="grid">
  <!-- row 1 -->
  <div class="item item-col-2"></div>
  <div class="item"></div>
  <div class="item item-row-2"></div>
  <!-- row 2 -->
  <div class="item"></div>
  <div class="item item-col-2"></div>
</div>
```

For the `CSS`:

```css
.grid {
  background: #1b9aaa;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1.5em;
}
.item {
  width: 100%;
  min-height: 200px;
  background: #06d6a0;
  &-col-2 {
    grid-column: span 2;
  }
  &-row-2 {
    grid-row: span 2;
  }
}
```

As you can see, we use `grid-column` to span the grid over two blocks horizontal.

And `grid-row` to span over two blocks vertical.

Feel free to play around with this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="MWKqeMK" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Grid Introduction - Alternative">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/MWKqeMK">
  CSS Grid Introduction - Alternative</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

CSS Grid has support from all major browsers, we have some issues in IE, but they can be [Polyfilled](https://github.com/FremyCompany/css-grid-polyfill).

![CSS Grid support](https://caniuse.bitsofco.de/image/css-grid.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
