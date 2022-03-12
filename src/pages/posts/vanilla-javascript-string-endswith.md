---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript string endsWith'
metaTitle: 'Vanilla JavaScript string endsWith'
metaDesc: 'How to use Vanilla JavaScript string.endsWith() function'
image: /images/06-05-2020.jpg
date: 2020-05-06T03:00:00.000Z
tags:
  - javascript
---

Yesterday we had a look at the [`startsWith()` function](https://daily-dev-tips.com/posts/vanilla-javascript-string-startswith/), and today we are looking at its brother the `endsWith()` function!
As the name suggests, this one looks if a string ends with a specific substring.

## Using endsWith function in JavaScript

To use the function, we need to have a string then we can call the `string.endsWith('substring')` function and we will get a `boolean` value in return (true/false)

```js
const string = "Life is what happens when you're busy making other plans.";

// Check if it ends with `plans.`
console.log(string.endsWith('plans.'));
// true
```

As we saw in the `startsWith()` function this one is also case sensitive.

```js
const string = "Life is what happens when you're busy making other plans.";

// Check if it ends with `Plans.`
console.log(string.endsWith('Plans.'));
// false
```

## Using an offset search position on endsWith

The `endsWith()` also has the option to offset, but from the end, so let's say we know the string always ends with "plans".
We can then offset by six characters using the `position` attribute.

```js
const string = "Life is what happens when you're busy making other plans.";

// Check if it ends with `other`
console.log(string.endsWith('Life', 4));
// true
```

With this `position`, keep in mind it will cap the string after four characters from the starting point!

Feel free to play with this Codepen:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="eYpeXjG" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript string endsWith">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/eYpeXjG">
  Vanilla JavaScript string endsWith</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

This function works in all browsers but not in IE 😢.
We can use [this polyfill](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) to help IE.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
