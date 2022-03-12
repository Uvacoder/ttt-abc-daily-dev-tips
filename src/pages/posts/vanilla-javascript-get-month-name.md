---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript get Month Name'
metaTitle: 'Get Month Name from Date Vanilla JS Tutorial [2022]'
metaDesc: 'Learn in this guide how to get a localized month name from a date object in JavaScript. See the code examples in the Codepen!'
image: /images/22-05-2020.jpg
date: 2020-05-22T03:00:00.000Z
tags:
  - javascript
---

Sticking to the date theme, as we have seen how to get the [days between two dates](https://daily-dev-tips.com/posts/vanilla-javascript-days-between-two-dates/) yesterday. Today we are going to learn how we can **get a month's name** in `JavaScript`.

## How to get the month name in Javascript

So let's start off by creating a date object:

```js
const date = new Date();
// Todays date
```

We can use the JavaScript function `toLocaleString` to get a months name.

```js
console.log(date.toLocaleString('default', { month: 'long' }));
// May
```

Instead of the `long` option we can also use the short option and get the month name like for instance `Dec`

```js
const december = new Date('12/01/2020');
console.log(december.toLocaleString('default', { month: 'short' }));
// Dec
```

And as you have seen we are providing the `default` keyword. This is the placeholder for the `locale`.

So let's get a months name in a different `locale` with this code:

```js
const december = new Date('12/01/2020');
console.log(december.toLocaleString('fr-FR', { month: 'long' }));
// décembre
```

As you can see, now we got the months name from the date object for a different country/language.

### See the code examples in this Codepen

I hope you found this a useful tip and feel free to check out the Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="rNOPxYv" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript get Month Name">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/rNOPxYv">
  Vanilla JavaScript get Month Name</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

The toLocaleString method is a widely supported method. Feel free to use it.

![Date toLocalString browser support](https://caniuse.bitsofco.de/image/date-tolocaledatestring.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
