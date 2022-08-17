---
layout: ../../layouts/Post.astro
title: 'Reverse an Array in Vanilla JavaScript'
metaTitle: 'Reverse Array JavaScript Tutorial [2022]'
metaDesc: "In today's guide we will learn how to reverse arrays using Vanilla JavaScript. See the code examples in Codepen!"
image: /images/09-02-2021.jpg
date: 2021-02-09T03:00:00.000Z
tags:
  - javascript
---

You will often need to **reverse an array** in JavaScript.

Imagine you're receiving data based on a date, for example. In the frontend, you'll most likely want to show the data reversed, meaning the most recent date first.

This is where the JavaScript _reverse method_ comes in handy.

It's a super cool array method, and it's easy to use.

To do an array reverse in JavaScript, call the reverse method on a variable, like this:

```js
const array = ['a', 'b', 'c'];
array.reverse();
// [ 'c', 'b', 'a' ]
```

As you can see, the method reversed our initial input array.

## JavaScript reverse array but keep original

You might not want to reverse the original array in some cases but want to create a copy.

This is where we can use the [JavaScript spread operator](https://daily-dev-tips.com/posts/10-ways-to-use-the-spread-operator-in-javascript/).

```js
const array = ['a', 'b', 'c'];
const reverse = [...array].reverse();
// array: [ 'a', 'b', 'c' ]
// reverse: [ 'c', 'b', 'a' ]
```

And that is how to reverse an array in JavaScript. You learn two methods: One changes the original array and the other creates a new array in reversed order.

Reversing arrays is pretty straightforward and comes in super handy.

### See the example code in this Codepen

You can have a play with today's code here:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="gOLaQPY" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript reverse an array">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/gOLaQPY">
  Vanilla JavaScript reverse an array</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
