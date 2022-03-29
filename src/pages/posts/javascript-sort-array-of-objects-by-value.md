---
layout: ../../layouts/Post.astro
title: 'JavaScript Sort Array of Objects by Value'
metaTitle: 'Sort Array by Price Value JS Tutorial [2022]'
metaDesc: 'Guide to learn how to sort an array of objects based on a value, like a price. See the code examples in the Codepen!'
image: /images/31-05-2020.jpg
date: 2020-05-31T03:00:00.000Z
tags:
  - javascript
---

Have you ever had an **array of objects** and needed to sort them based on a specific _value_?
This is an issue everyone will run into very often.

In our `JavaScript` example, we will look at a price list. Then we will **sort the array by price**.

> If you are looking to [randomly shuffle an array](https://daily-dev-tips.com/posts/vanilla-javascript-shuffle-array/), read this article.

## JavaScript Sort Array of Objects

Let's start with the following array of objects:

```js
const products = [
  {
    color: 'white',
    price: 10,
    name: 'Basic T-shirt',
  },
  {
    color: 'red',
    price: 5,
    name: 'Cheap T-shirt',
  },
  {
    color: 'black',
    price: 50,
    name: 'Exclusive T-shirt',
  },
];
```

So, seeing this array, we already have two options for sorting it:

1. we can sort based on **color**
2. we sort by **price**

How do we now sort the array based on the price values?

## Sort Array by Color

We can use the `sort` manipulator for `Arrays`.

```js
products.sort((a, b) => (a.color > b.color ? 1 : -1));
```

As you can see, a straightforward sorting function. It will sort based on color and replace the values until it's done.
You can think of this function as a manual `if...else` loop, but then all done for you.

## Sort Array by Price

As for the **price**, we can sort the array with the following code:

```js
products.sort((a, b) => (a.price > b.price ? 1 : -1));
```

## Sorting on the second parameter

So let's say we want to sort on color, but if the color is the same, then we want to sort on price:

```js
const productsPrice = [
  {
    color: 'white',
    price: 10,
    name: 'Basic T-shirt',
  },
  {
    color: 'white',
    price: 5,
    name: 'Cheap T-shirt',
  },
  {
    color: 'black',
    price: 50,
    name: 'Exclusive T-shirt',
  },
];

productsPrice.sort((a, b) =>
  a.color > b.color
    ? 1
    : a.color === b.color
    ? a.price > b.price
      ? 1
      : -1
    : -1
);
```

So the same setup, but we use the callback function to check if the color is the same. We then need to check on the price as well!

### See the code examples in this Codepen

You can have a play with the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="wvKVPPJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JavaScript Sort Array of Objects by Value">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/wvKVPPJ">
  JavaScript Sort Array of Objects by Value</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
