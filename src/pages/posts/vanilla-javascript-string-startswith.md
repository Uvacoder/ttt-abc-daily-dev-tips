---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript string startsWith'
metaTitle: 'String startswith Vanilla JS Tutorial [2022]'
metaDesc: 'Learn in this guide how to use the Vanilla JavaScript string.startsWith() function. See the code examples in the Codepen!'
image: /images/05-05-2020.jpg
date: 2020-05-05T03:00:00.000Z
tags:
  - javascript
---

A very nifty function in JavaScript is the `startsWith()` function. We can use this function to see if a **string** starts with a **substring**.

## Javascript String startswith

To use the function, we need to have a string. Then we can call the `string.startsWith('substring')` function and we will get a `boolean` value in return (true/false). The `boolean` confirms if the substring can be found at the beginning of the basestring.

```js
const string =
  "Your time is limited, so don't waste it living someone else's life";

// Check if it starts with `Your time`
console.log(string.startsWith('Your time'));
// true
```

Important to know is that the startsWith method is **case sensitive**. So the following search string would return false:

```js
const string =
  "Your time is limited, so don't waste it living someone else's life";

// Check if it starts with `your time`
console.log(string.startsWith('your time'));
// false
```

## Using an offset search position on startsWith

We now used the basic `startsWith()` function, but it accepts another parameter; the starting position.
So let's assume our string always starts with "Your time" but we want to see if the string after that is "is limited".
We can do so by offsetting the `position`.

```js
const string =
  "Your time is limited, so don't waste it living someone else's life";

// Check if it starts with `is limited`
console.log(string.startsWith('is limited', 10));
// true
```

### See the code examples in this Codepen

Feel free to try the JavaScript code here:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="LYpOaLr" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript string startsWith">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/LYpOaLr">
  Vanilla JavaScript string startsWith</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

This function works in all browsers but not in IE 😢.
We can use [this polyfill](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith) to help IE.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
