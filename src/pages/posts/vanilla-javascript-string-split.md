---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript String Split'
metaTitle: 'Vanilla JavaScript String Split'
metaDesc: 'Today we are splitting a string into an array'
image: /images/03-06-2020.jpg
date: 2020-06-03T03:00:00.000Z
tags:
  - javascript
---

Today we are going to look at the `JavaScript` `String.split()` method.
This method is called on a string and will return an array of whatever we are splitting on.

## Using the JavaScript string.split() method

```js
const string = 'She sells seashells by the seashore';
const array = string.split(' ');
console.log(array);
// (6) ["She", "sells", "seashells", "by", "the", "seashore"]
```

As you can se we are using the `split` method with a space as argument. This will return an array of all the words.

If you pass an empty string it will split on each character like so:

```js
const stringTwo = 'Magic words';
const arrayTwo = stringTwo.split('');
console.log(arrayTwo);
// (11) ["M", "a", "g", "i", "c", " ", "w", "o", "r", "d", "s"]
```

The `split` comes with a second argument which is the limit of our output array.

```js
const stringThree = 'She sells seashells by the seashore';
const arrayThree = stringThree.split(' ', 3);
console.log(arrayThree);
// (3) ["She", "sells", "seashells"]
```

View or modify it on this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="qBbWLrB" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript String Split">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/qBbWLrB">
  Vanilla JavaScript String Split</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
