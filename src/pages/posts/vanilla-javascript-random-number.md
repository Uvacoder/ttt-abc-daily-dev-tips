---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript Random Number'
metaTitle: 'Vanilla JavaScript Random Number'
metaDesc: 'Today we are retrieving a random number with JavaScript'
image: /images/01-06-2020.jpg
date: 2020-06-01T03:00:00.000Z
tags:
  - javascript
---

Let's dive into making random numbers with `JavaScript` today; this comes in handy more often than you would think.

## Random number using Math.random

We can use the `Math.random()` method to generate a random number; this is returned as a `float`. Which means it's a number between zero and one.

```js
const number = Math.random();
console.log(number);
```

This will return something like this `0.1433017075000662`.

## Getting a Number bigger than zero

But what if we need a number bigger than zero? Well we can make our own function for that.

```js
const randomFunction = function () {
  return Math.random() * 100;
};
console.log(randomFunction());
```

You can adjust the 100 to increase the number.
The current setup will return something like `34.68974860200957`.

Now you know how to leverage `Math.random()` feel free to play with this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="gOaVyXX" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript Random Number">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/gOaVyXX">
  Vanilla JavaScript Random Number</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
