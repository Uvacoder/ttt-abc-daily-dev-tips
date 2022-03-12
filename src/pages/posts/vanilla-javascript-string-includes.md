---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript string includes'
metaTitle: 'String includes Vanilla JS Tutorial [2022]'
metaDesc: 'Lets see how we can determine if a string contains a substring in JavaScript'
image: /images/10-05-2020.jpg
date: 2020-05-10T03:00:00.000Z
tags:
  - javascript
---

While we recently checked if a [string `startsWith`](https://daily-dev-tips.com/posts/vanilla-javascript-string-startswith/) or a [string `endsWith`](https://daily-dev-tips.com/posts/vanilla-javascript-string-endswith/) a specific substring, today we will learn how to find out if a string **includes another substring**.

To do so, we are using the `JavaScript` function `includes()`.

## JavaScript includes() function

We can use the `includes()` function by calling it on a string and passing a substring to it:

```js
const string =
  'The greatest glory in living lies not in never falling, but in rising every time we fall.';

// Check if it includes with `living`
console.log(string.includes('living'));
// true
```

It is important for the `includes()` function to know that it is a case-sensitive function. So the following code will fail:

```js
const string =
  'The greatest glory in living lies not in never falling, but in rising every time we fall.';

// Check if it includes with `Living`
console.log(string.includes('Living'));
// false
```

## String includes with offset position parameter

As the brothers startsWith() and endsWith(), this has another position parameter. This position is from where it will start to look.

```js
const string =
  'The greatest glory in living lies not in never falling, but in rising every time we fall.';

// Check if it includes with `living`
console.log(string.includes('living', 30));
// false
```

### See the code examples in this Codepen

Feel free to play with the code here:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="eYprJZd" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript string includes">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/eYprJZd">
  Vanilla JavaScript string includes</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

This function works well in all modern browsers, including edge!

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
