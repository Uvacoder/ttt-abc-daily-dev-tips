---
layout: ../../layouts/Post.astro
title: 'JavaScript reduce() method'
metaTitle: 'JavaScript reduce() method'
metaDesc: 'JavaScript reduce method, how it works and why you need it'
image: /images/21-11-2020.jpg
date: 2020-11-21T03:00:00.000Z
tags:
  - javascript
---

We are checking out some helpful array methods, and today we are looking at the `reduce()` method.

The reduce method can be used to convert our array to one specific single value.

> Also, check out my article on the [JavaScript filter() method](https://daily-dev-tips.com/posts/javascript-filter-method/)

## Using the Javascript reduce() method

The reduce can be used, for instance, just to count a total. Let's say we have the following array.

```js
const items = [
  { name: 'T-shirt plain', price: 9 },
  { name: 'T-shirt print', price: 20 },
  { name: 'Jeans', price: 30 },
  { name: 'Cap', price: 5 },
];
```

How can we now get a total of all these items?

```js
const reduced = items.reduce((total, item) => {
  total += item.price;
  return total;
}, 0);

// 64
```

We are giving the argument `total`, which is the `initialValue`, the next argument is the `currentValue` then we add the price to our total value.

Then at the end, you see a `0` defined. This is the `initialValue` default.

The arguments for the `reduce` are as follows:

```js
const new = original.reduce(function(total, current, index, array), initialValue);
```

Where the following applies:

- `total`: Required, the initial value
- `current`: Required, the value of the current index
- `index`: Optional, array index of the current row
- `array`: Optional, current array row belongs to.
- `initialValue`: Optional value to be defined as a starting point.

You can of course, also only count specific items, let's say we have discounted items and only want to count those:

```js
const items = [
  { name: 'T-shirt plain', price: 9, discount: true },
  { name: 'T-shirt print', price: 20, discount: false },
  { name: 'Jeans', price: 30, discount: true },
  { name: 'Cap', price: 5, discount: false },
];

const reduced = items.reduce((total, item) => {
  if (item.discount) total += item.price;
  return total;
}, 0);

// 39
```

As you can see, very powerful but easy to implement method. It really cuts down on a lot of loop logic.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
