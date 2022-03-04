---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript Trim White Space'
metaTitle: 'Trim Whitespace Vanilla JS Tutorial [2022]'
metaDesc: 'Today we are exploring the JavaScript trim methods in order to remove whitespace from text.'
image: /images/13-05-2020.jpg
date: 2020-05-13T03:00:00.000Z
tags:
  - vanillajs
  - javascript
---

Let's dive into the `JavaScript` methods for removing white space from a string.

To trim the whitespace, we are going to use the `trim`, `trimStart`, and `trimEnd` methods in `Vanilla JavaScript`.

## Trim whitespace at the beginning and end

The `trim()` method is an easy way to remove white space from the **beginning and end** of a string. After the trimming it will return a new string.

```js
const quote = "  Gotta Catch 'Em All.      ";
console.log(quote.trim());
// "Gotta Catch 'Em All."
```

Super simple as you can see, we removed all trailing and ending whitespace.

## Remove white space from the beginning

The `trimStart` method removes whitespace from the beginning of a string only.

```js
const quote = "  Gotta Catch 'Em All.      ";
console.log(quote.trimStart());
// "Gotta Catch 'Em All.      "
```

## Vanilla JavaScript delete whitespace at the end

Yes, you guessed it right. The `trimEnd` method will delete the extra whitespace at a strings ending.

```js
const quote = "  Gotta Catch 'Em All.      ";
console.log(quote.trimEnd());
// "  Gotta Catch 'Em All."
```

### See the code exmples in this Codepen

Feel free to play around with this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="NWGzVRG" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript Trim White Space">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/NWGzVRG">
  Vanilla JavaScript Trim White Space</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
