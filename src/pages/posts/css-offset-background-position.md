---
layout: ../../layouts/Post.astro
title: 'CSS Offset background-position'
metaTitle: 'Background-position Offset CSS Tutorial [2022]'
metaDesc: 'In this tutorial we are looking at offsetting the background position by an amount of pixels. See the code exmamples in the Codepen.'
image: /images/07-06-2020.jpg
date: 2020-06-07T03:00:00.000Z
tags:
  - css
---

Today we will learn **how to offset the CSS `background-position`**. To do that, we will use a small calculation.
We use the `background-position` CSS property to offset the position of a background element. Nowadays, we use a lot of fluid/responsive layouts, which can make this quite uneasy.

## Offset Background-Position calculation

The CSS property accepts several syntaxes.
The normal values would be: `top|right|bottom|left`.
We can also use just `center` to center on all axis.

It's accessible aligning center or from the left, but aligning from the right is not always known. Let's look into aligning from the right.

```css
background-position: right 25px bottom 25px;
```

We used the [`calc` function](https://daily-dev-tips.com/posts/css-calc-function/) for calculations. We can use the calc-function with `background-position` as well:

```css
background-position: calc(100% - 25px) calc(100% - 25px);
```

As you can see in this example, it can be as easy as this.

You can offset the image position from any direction.

### View the code example on Codepen

Play around with the pixel calculation to see how the live demo changes.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="YzwXwJP" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Offset background-position">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/YzwXwJP">
  CSS Offset background-position</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

The browser support for position offset is excellent in modern browsers. Unfortunately, it doesn't go all the way back.

![CSS background-position offset support](https://caniuse.bitsofco.de/image/css-background-offsets.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
