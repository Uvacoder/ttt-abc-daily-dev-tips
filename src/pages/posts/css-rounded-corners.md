---
layout: ../../layouts/Post.astro
title: 'CSS Rounded Corners'
metaTitle: 'CSS Rounded Corners'
metaDesc: 'Lets make cool rounded boxes and even circles'
image: /images/04-06-2020.jpg
date: 2020-06-04T03:00:00.000Z
tags:
  - css
---

One awesome thing that we can do with `CSS` is to add rounded corners to elements. This gives it that neat box look and can even be used to create cool circles.

## HTML Structure

```html
<div class="box rounded"></div>
<div class="box one-side"></div>
<div class="box round"></div>
```

In this example we are going to make one neatly rounded corner box, one with just one side rounded and a circle box.

## CSS Rounder Corners

To use the rounded corners, we use `border-radius` this accepts values as you are used from `margin` or `padding`.

To make the rounded one we use the following css:

```css
.rounded {
  border-radius: 5px;
}
```

This will give it equal `border-radius` of 5px on each side.

To make just one border rounded we can give it one of 4 values like such:

```css
border-radius: top-left | top-right | bottom-right | bottom-left;
```

In our example:

```css
.one-side {
  border-radius: 0px 5px 5px 0px;
}
```

Then one that I tend to use a lot is the version that makes it round.

```css
.round {
  border-radius: 50%;
}
```

You can see these in action on this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="dyGymqr" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Rounded Corners">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/dyGymqr">
  CSS Rounded Corners</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

The border-radius is very well supported, and can safely be used.

![border-radius support](https://caniuse.bitsofco.de/image/border-radius.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
