---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript Check if Date is in the Past'
metaTitle: 'Check if Date is in the past Vanilla JS Tutorial [2022]'
metaDesc: 'Today we are looking at how to check if a date has passed. You can also use this to check if a date is in the future too.'
image: /images/10-06-2020.jpg
date: 2020-06-10T03:00:00.000Z
tags:
  - javascript
---

Now and then you need a JavaScript function to tell you if a date is in the past or future. You want to see if someone's contract or whatever has passed as of today for example.
So let's see how we can achieve this in Vanilla `JavaScript`.
We will build a custom JS function for this so it will be reusable.

## Check if a date is in the past JS code

In essence, we could use [`getTime()`](https://daily-dev-tips.com/posts/vanilla-javascript-get-timestamp/) to get the timestamp, but what happens for instance if someones contract must end on this day regardless of the time?

```js
const dateInPast = function (firstDate, secondDate) {
  if (firstDate.setHours(0, 0, 0, 0) <= secondDate.setHours(0, 0, 0, 0)) {
    return true;
  }

  return false;
};

const past = new Date('2020-05-20');
const today = new Date();
const future = new Date('2030-05-20');
dateInPast(past, today);
dateInPast(future, today);
```

## Explanation of the evaluation if the date has passed

I've written down the full JavaScript function just to explain it better.
As you can see we define a `dateInPast` function which accepts two dates.
We then check if the firstDate is [smaller than or equal](https://daily-dev-tips.com/posts/vanilla-javascript-comparison-operators/) to the second Date.

If so, the date is in the past or today!

Then we reset the hours/minutes on it so it will be a general day.

Let's now turn this into an [arrow function](https://daily-dev-tips.com/posts/javascript-arrow-function/) for cleaner code:

```js
dateInPastArrow = (firstDate, secondDate) =>
  firstDate.setHours(0, 0, 0, 0) <= secondDate.setHours(0, 0, 0, 0);

console.log(dateInPastArrow(past, today));
console.log(dateInPastArrow(future, today));
```

As you can see: much cleaner code and easier to understand why a date is evaluated to be in the past or future!

### Copy-paste or play with the Vanilla JS code in this Codepen

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="KKVdEaE" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript Check if Date is Past">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/KKVdEaE">
  Vanilla JavaScript Check if Date is Past</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
