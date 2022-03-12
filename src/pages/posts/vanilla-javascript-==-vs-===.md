---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript == vs ==='
metaTitle: 'Vanilla JavaScript == vs ==='
metaDesc: 'What exactly is the difference between == and ===?'
image: /images/08-06-2020.jpg
date: 2020-06-08T03:00:00.000Z
tags:
  - javascript
---

The difference between two or three = signs in `JavaScript` can be complicated and vague to understand at first.
I found myself in a spot where I would always use the triple === set up to be safe.
But let's try and find out the real difference today.

## JavaScript == vs ====

Let's first try and understand the basic difference on paper.
The two are comparison operators, meaning they will compare between two sides; these can be variables or values.

### JavaScript == Comparison

The == operator is used for `equal to` comparison and is the most basic of the two.

Some options are:

```js
x = 3;
console.log(x == 10); // false
console.log(x == 3); // true
console.log(x == '3'); // true
```

As you can see, we define a number, but even the string is valid.

### JavaScript === Comparison

The === comparison is the same, but stricter, it needs an equal value and equal type.

So doing the same we will get the following results:

```js
x = 3;
console.log(x === 10); // false
console.log(x === 3); // true
console.log(x === '3'); // false
```

Hopefully, this made the initial difference clear between the two. Let me know if you want to see more of this in a future article.

See it in action on this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="PoZqVbm" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript == vs ===">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/PoZqVbm">
  Vanilla JavaScript == vs ===</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
