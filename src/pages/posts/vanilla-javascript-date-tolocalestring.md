---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript date toLocaleString'
metaTitle: 'Vanilla JavaScript date toLocaleString'
metaDesc: 'Converting date object to locale dates in JavaScript'
image: /images/26-03-2021.jpg
date: 2021-03-26T03:00:00.000Z
tags:
  - javascript
---

Before we checked out how to [convert numbers to locale formats using JavaScript](https://daily-dev-tips.com/posts/vanilla-javascript-number-tolocalestring/), and today we'll use the same approach but on date objects.

You often want to show a date in that user's specific format.

Today's outputs will vary depending on the locale we pass into the function.

## JavaScript date to locale format

To use this function, we will first need a date object.

```js
const date = new Date('01-10-2020');
```

This will give us a date format for the 1st of October 2020.

Depending on which locale your country uses, it might look different.

To use this function, we must call it upon our date object like so:

```js
console.log(date.toLocaleDateString('en-US'));
```

That will give us the US annotation and return:

```js
//'1/10/2020'
```

We can even specify some options on how we would like to receive the output.

```js
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
console.log(date.toLocaleDateString('de-DE', options));
```

This will return:

```js
//'Freitag, 10. Januar 2020'
```

## JavaScript Date to different locales

You might have already spotted it above, but we can format it to different locales by setting the locale on the function.

```js
console.log(date.toLocaleDateString('en-US'));
// '1/10/2020'
console.log(date.toLocaleDateString('en-GB'));
// '10/01/2020'
console.log(date.toLocaleDateString('ko-KR'));
// '2020. 1. 10.'
console.log(date.toLocaleDateString('ar-EG'));
// '١٠‏/١‏/٢٠٢٠'
console.log(date.toLocaleDateString('nl-NL'));
// '10-1-2020'
```

Pretty cool, right?
If you are wondering where to find these locales, check out this [locale list on Stackoverflow](https://stackoverflow.com/a/3191729).

I've made this Codepen for you guys to play around with and see what happens when you change options or the locales.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="gOgYMPy" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript date toLocaleString">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/gOgYMPy">
  Vanilla JavaScript date toLocaleString</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
