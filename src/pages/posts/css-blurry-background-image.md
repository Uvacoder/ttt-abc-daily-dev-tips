---
layout: ../../layouts/Post.astro
title: 'CSS Blurry Background Image'
metaTitle: 'Blur Background Image - Pure CSS Tutorial [2022]'
metaDesc: 'Learn how to blur a background image with pure CSS. See code examples and explanations plus a live demo in Codepen.'
image: /images/11-06-2020.jpg
date: 2020-06-11T03:00:00.000Z
tags:
  - css
---

In this tutorial, we will learn how to blur a background image. It is easy to achieve with pure `CSS`.

Let's get started!

## HTML Structure

We are going to create two div elements next to each other. One div will show the example of the background image blur, and the other will be normal.

```html
<div class="container flex">
  <div class="blur flex">
    <span>BLUR</span>
  </div>
  <div class="no-blur flex">
    <span>NO-BLUR</span>
  </div>
</div>
```

Nothing fancy, just a container and two divs with a span inside.

> Do note the span content will also look blurry in this setup!

## CSS Blur Background

For the container part, we use [flex box centering](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/).

And for the divs, we make them both 50% width and 100% height.

This is going to be the clear image:

```css
.no-blur {
  background: url('https://images.unsplash.com/photo-1591775995956-a6c811374d9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
    no-repeat center center;
  background-size: cover;
  width: 50%;
  height: 100%;
}
```

And to make an image look blurry, we add the following CSS:

```css
filter: blur(8px);
-webkit-filter: blur(8px);
```

Together with the previous code, all styles compile into the following CSS:

```css
.blur {
  background: url('https://images.unsplash.com/photo-1591803452190-8f1455681025?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
    no-repeat center center;
  background-size: cover;
  width: 50%;
  height: 100%;
  filter: blur(8px);
  -webkit-filter: blur(8px);
}
```

### See the code example live in this Codepen

Play around with the blur levels to see the effect on the image.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="bGEEKrq" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Blurry Background Image">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/bGEEKrq">
  CSS Blurry Background Image</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

This is not the best-supported `CSS` function, but still very nice to use as the extra spice on your website. It will blur your images in all browsers but IE and Opera Mini.

![CSS blur filter support](https://caniuse.bitsofco.de/image/css-filters.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
