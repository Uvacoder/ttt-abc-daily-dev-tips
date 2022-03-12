---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript How many Days Between Two Dates'
metaTitle: 'JavaScript Calculate the Difference between two Dates'
metaDesc: 'How to calculate the difference between two dates in JavaScript'
image: /images/21-05-2020.jpg
date: 2020-05-21T03:00:00.000Z
tags:
  - javascript
---

Today we will learn how to get the number of days between two dates in `JavaScript`.

## Calculate date difference in days

First, we are going to define two date objects.

```js
const date1 = new Date('12/25/2022');
const date2 = new Date();
```

Then we need to get the difference between these two dates.

```js
const difference = date1.getTime() - date2.getTime();
```

The date difference is now in milliseconds, so we must convert it to days.

(1000 milliseconds _ (60 minutes _ 60 seconds) \* 24 hours)

This will return the number of days between both dates:

```js
const days = Math.ceil(difference / (1000 * 3600 * 24));
console.log(days + ' days to Christmas');
```

### See the code example in this Codepen

See the result and calculate how many days are left until Christmas.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="gOaZBoo" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript Days Between Two Dates">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/gOaZBoo">
  Vanilla JavaScript Days Between Two Dates</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
