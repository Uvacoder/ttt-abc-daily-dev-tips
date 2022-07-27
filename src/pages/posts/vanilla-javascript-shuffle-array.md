---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript Shuffle Array'
metaTitle: 'Vanilla JavaScript Shuffle Array Tutorial [2022]'
metaDesc: 'Learn how to randomly shuffle the item in an array. We will have a random order of items afterwards. See the code example on Codepen.'
image: /images/21-06-2020.jpg
date: 2020-06-21T03:00:00.000Z
tags:
  - javascript
---

Now and then, you randomly need to shuffle an array in `JavaScript`. There is a super-easy way of doing it. We can use the `sort()` method and pass a random number.

So in today's tutorial, I will teach you how to shuffle an array in Javascript.

## JavaScript Shuffle Array

As the introduction mentions, we will use the `sort` method. In the end, we will have all items in a randomized order.

This method, without any parameters, will sort an array naturally like 123 and ABC.

See the following example:

```js
const charArray = ['d', 'f', 'a', 'c', 'b', 'e'];
const numArray = [1, 5, 3, 2, 4];

console.log(charArray.sort());
// ["a", "b", "c", "d", "e", "f"]

console.log(numArray.sort());
// [1, 2, 3, 4, 5]
```

As you can see, the Arrays get normalized and sorted. But we can also pass a specific argument that we will use to randomize the array sorting.

```js
const rockPaperScissor = ['💎', '📄', '✂️'];
console.log(rockPaperScissor.sort(() => 0.5 - Math.random()));
```

This will randomly shuffle the array. Let me explain in depth.

The `sort` function compares two elements, where element one is bigger than two. It will put the index lower or higher.

As for the `.5 - Math.random()` this will return a value between -0.5 and 0.5

So whenever the value is below 0, the element is placed before the other element. And otherwise, it will be positioned after the item.

> Also, read about [sorting an Array of Objects by Value](https://daily-dev-tips.com/posts/javascript-sort-array-of-objects-by-value/)

### See the code example in this Codepen

You can test this and see it in action on this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="OJMpPog" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript Shuffle Array">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/OJMpPog">
  Vanilla JavaScript Shuffle Array</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
