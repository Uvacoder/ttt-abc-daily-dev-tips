---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript add leading zeroes to date'
metaTitle: 'Vanilla JavaScript add leading zeroes to date'
metaDesc: 'How to add leading zeroes to a JavaScript Date object?'
image: /images/30-03-2020.jpg
date: 2020-03-30T02:36:00.000Z
tags:
  - javascript
---

Ever wanted to convert a date in JavaScript to look something like this `01-01-2020`.

Quite a pain if I may say so, Javascript has a bad understanding of the date object, and no option to have those leading zeroes.

## Converting a JavaScript date object to strings

First, we need to convert the `javascript` date object to separate strings.

Start by creating a new date.

```js
let date = new Date('01-01-2020');
```

Then let's make the specific elements we are going to need and see what we start off with.

```js
let day = date.getDate(); // 1
let month = date.getMonth(); // 0
let year = date.getFullYear(); // 2020
```

Huh? Why is the month 0? This is because `JavaScript` date months go from 0 to 11, so we must correct it by adding 1.

```js
let month = date.getMonth() + 1; // 1
```

## Adding leading zeroes to JavaScript date

To add the leading zeroes to the day and month object we have several options, but the following is the cleanest and quickest.

> In any case we have to convert the integer to a string.

```js
let date = new Date('01-01-2020');
let day = date.getDate(); // 1
day = day.toString().padStart(2, '0'); // '01'
let month = date.getMonth() + 1; // 1
month = month.toString().padStart(2, '0'); // '01'
let year = date.getFullYear(); // 2020
let newDate = day + '-' + month + '-' + year;
console.log(newDate); // '01-01-2020'
```

The `padStart` function will only work on a string, hence we first convert the integer to a string.
Then the `padStart` will append '0' to a maximum of two.

You can play around in this codepen demo.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="OJVrewv" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript add leading zeroes to date">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/OJVrewv">
  Vanilla JavaScript add leading zeroes to date</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

> Note: padStart unfortunately has no IE compatibility. 😭

### Thank you, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
