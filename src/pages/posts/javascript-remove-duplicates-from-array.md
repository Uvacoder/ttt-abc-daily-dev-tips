---
layout: ../../layouts/Post.astro
title: 'JavaScript Remove Duplicates from Array'
metaTitle: 'JavaScript Remove Duplicates from Array'
metaDesc: 'Today we are learning how to remove duplicates from an array'
image: /images/28-07-2020.jpg
date: 2020-07-28T03:00:00.000Z
tags:
  - javascript
---

Today I want to share with you guys the easiest way to remove duplicates in an array with `JavaScript`.

We are going to be using the [`Set`](https://daily-dev-tips.com/posts/javascript-es6-sets/) method for this.

> BTW: I have a free Giveaway on Twitter! [🚨 Free Giveaway](https://twitter.com/DailyDevTips1/status/1287735721298726912)

## JavaScript Removing Duplicates from Array

We already had a full overview of the `Set` function before, but today we are using `Set` to remove duplicates from an array.

Let's start with the following array:

```js
const array = ['🤟', '🤟', 1, 'abc', '🤟', 1];
```

As you can see, we have the emoji three times and the number one twice.

So make this a unique non-duplicate array we simply call `Set` on it.

```js
const array = ['🤟', '🤟', 1, 'abc', '🤟', 1];
const set = new Set(array);
console.log(set);
// Set(3) {"🤟", 1, "abc"}
```

Wow, awesome and simple right!

`JavaScript` is not always complicated loops and functions; we have to leverage the write commands for the right solution.

Feel free to have a go on this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="OJMGebq" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JavaScript Remove Duplicates from Array">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/OJMGebq">
  JavaScript Remove Duplicates from Array</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

Be aware; `Set` is not supported in the older IE versions!

![JavaScript Set support](https://caniuse.bitsofco.de/static/v1/mdn-javascript__builtins__Set-1595859501160.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
