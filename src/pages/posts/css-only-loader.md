---
layout: ../../layouts/Post.astro
title: 'CSS Only Loader'
metaTitle: 'CSS Only Loader'
metaDesc: 'Today we are making an animated loader with only CSS'
image: /images/11-05-2020.jpg
date: 2020-05-11T03:00:00.000Z
tags:
  - css
---

Today I want to make a basic `CSS` Loader and show you guys and girls how easy it is to make one yourself.

We can make one with only one `div` and a couple of `CSS` lines.

But let's also dive into making some variants.

## HTML Structure

```html
<div class="loader"></div>
```

That's all, folks! Just a straightforward div.

## CSS Basic Loader

```css
.loader {
  border: 16px solid #f4f4f4; /* Background color */
  border-top: 16px solid #8f95d3; /* Animated color */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: load 2s linear infinite;
}
@keyframes load {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

Let's break down how this works exactly.

We start by setting a `border-color` on our element. We make the top border a different color, so 25% of our element is now colored differently.
`Border-radius: 50%` makes it a round object instead of a square.
We then give it a specific dimension and add our animation.
In our animation, we transform the object from zero to 360deg. This will make it spin.

You can see the result in this demo:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="zYvjjqN" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Only Loader">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/zYvjjqN">
  CSS Only Loader</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## CSS Loader alternatives

As you can see in the CodePen, we also have other options.

For option two (the two bars) we just add another border at the bottom like so:

```css
border-bottom: 16px solid #8f95d3; /* Animated color */
```

As for the three balls we add a div to our loader and style like such:

```css
.loader-three .ball {
  position: relative;
  width: 20px;
  height: 20px;
  background: red;
  border-radius: 50%;
  display: block;
  position: absolute;
  top: 3px;
}
.loader-three .ball:before {
  content: '';
  width: 20px;
  height: 20px;
  background: red;
  border-radius: 50%;
  display: block;
  position: absolute;
  left: 19px;
  top: -14px;
}
.loader-three .ball:after {
  content: '';
  width: 20px;
  height: 20px;
  background: red;
  border-radius: 50%;
  display: block;
  position: absolute;
  left: 42px;
  top: -21px;
}
```

This will create three balls on the border with [pseudo-elements](https://daily-dev-tips.com/posts/css-pseudo-elements/)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
