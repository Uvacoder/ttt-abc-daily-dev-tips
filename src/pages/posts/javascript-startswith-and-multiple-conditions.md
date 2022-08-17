---
layout: ../../layouts/Post.astro
title: 'JavaScript startsWith and multiple conditions'
metaTitle: 'JavaScript startsWith and multiple conditions'
metaDesc: 'How to use startsWith to check for multiple starting strings in JavaScript'
image: /images/01-12-2021.jpg
date: 2021-12-01T03:00:00.000Z
tags:
  - javascript
---

You might have heard of the [JavaScript `startsWith` method](https://daily-dev-tips.com/posts/vanilla-javascript-string-startswith/). It can check if a particular string starts with another string.

To give you a demonstration it would work something like this:

```js
const string = 'Hi, and welcome from JavaScript';
console.log(string.startsWith('Hi'));
// true
console.log(string.startsWith('Hello'));
// false
```

## Checking for multiple conditions with startsWith

But what if we want to check if a string starts with a multiplication of strings?

So let's say `Hi` and `Hello` would be fine.

We could use a conditional statement. However, this might get very unorganized if we decide to allow more strings at a later stage.

However, it would look like this:

```js
const string = 'Hi, and welcome from JavaScript';
const result = string.startsWith('Hi') || string.startsWith('Hello');
console.log(result);
// true
```

Another way is to use the same method on a predefined array. I quite like the simplicity and naming of this method as it states what's happening.

This is what it looks like:

```js
const result = ['Hi', 'Hello'].some((word) => string.startsWith(word));
console.log(result);
// true
```

Feel free to try these out in the following CodePen.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="wvqOQde" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/wvqOQde">
  JavaScript startsWith and multiple conditions</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
