---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript get following Monday'
metaTitle: 'Vanilla JavaScript get following Monday'
metaDesc: 'How to get the next upcoming Monday in Vanilla JavaScript'
image: /images/23-12-2020.jpg
date: 2020-12-23T03:00:00.000Z
tags:
  - javascript
---

In today's article, I wanted to check something very specific.
Imagine we need to know the first upcoming Monday?

This can become tricky because you will need to know if it's a new month or even a new year.

Luckily there is a pretty easy way to do this.

So first, we'll build the code based on the day you read this.

Then we will demo an end-of-month/year date.

## JavaScript get following Monday from today

Let's start by defining what today is:

```js
let today = new Date();
```

Now we can make the wireframe of our function using an [ES6 Arrow function](https://daily-dev-tips.com/posts/javascript-arrow-function/).

```js
getNextMonday = (input) => {
  // Do something
  return input;
};
```

The function is called getNextMonday, and it accepts one input.
It then needs to do something with the input and return something.

So how do we go about finding the following Monday?

Let's modify the input we receive.

```js
input.setDate(input.getDate() + ((8 - input.getDay()) % 7));
```

What we do here is set a new Date based on whatever the input was.

The `input.getDate()` will return 23 if you read this on the 23rd of December. Which is a Wednesday (3rd day of the week)

Then add the number of days till a Monday, so in the case of the 23, it would be (23 + (8 - 3) % 7); = 28

Which happens to be a Monday! Yeey 🎉

Then we can return a [template literal](https://daily-dev-tips.com/posts/javascript-template-literals/) where we merge the dates.

```js
return `The next Monday is ${String(input.getDate()).padStart(2, '0')}-${String(
  input.getMonth() + 1
).padStart(2, '0')}-${input.getFullYear()}`;
```

Quite a chunky one, but it fixes the dates by [adding leading zeroes to our date](https://daily-dev-tips.com/posts/vanilla-javascript-add-leading-zeroes-to-date/) using the padStart method.

The full function will then be:

```js
getNextMonday = (input) => {
  input.setDate(input.getDate() + ((8 - input.getDay()) % 7));
  return `The next Monday is ${String(input.getDate()).padStart(
    2,
    '0'
  )}-${String(input.getMonth() + 1).padStart(2, '0')}-${input.getFullYear()}`;
};
```

## Make sure it's the valid end of month

This worked since 23 + 5 = 28, but what if we go further than the number of days in a month?

Let's take New Years' eve 2020, which is on a Thursday, again.
The date is now 12-31-2020 (31st of December).

```js
let today = new Date('12-31-2020');
```

Then if we run our function calculation, the day will be?

(31 + (8 - 4) % 7); = 35

Which is weird, right? There are only 31 days in December.
But still, because we are doing these modifications on a Date object, JavaScript understands it needs to count further.

That said, the first Monday from New Year's eve is:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="qBajZwR" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript get following Monday">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/qBajZwR">
  Vanilla JavaScript get following Monday</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

P.s. it's `The next Monday is 04-01-2021`.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
