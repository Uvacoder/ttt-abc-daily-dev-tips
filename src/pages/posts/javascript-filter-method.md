---
layout: ../../layouts/Post.astro
title: 'JavaScript filter() method'
metaTitle: 'JavaScript filter() method'
metaDesc: 'JavaScript filter method, how it works and why you need it'
image: /images/20-11-2020.jpg
date: 2020-11-20T03:00:00.000Z
tags:
  - vanillajs
  - javascript
---

I figured I've never really done an explanation on Array method in JavaScript. These are methods to make our lives way easier.

To explain how you must understand before these methods existed, we would have to make a manual loop and create a filter in there.

## Using the Javascript filter() method

Let's make a list of items with prices.

```js
const items = [
  {name: 'T-shirt plain', price: 9},
  {name: 'T-shirt print', price: 20},
  {name: 'Jeans', price: 30},
  {name: 'Cap', price: 5}
];
```

Now let's say we want to filter out all the items over 10\$.

```js
const filter = items.filter(item => item.price > 10);
// [ { name: 'T-shirt print', price: 20 }, { name: 'Jeans', price: 30 } ]
```

How this syntax works:

```js
const new = original.filter(function);
```

Where new will be our new to use array, original is the source and we pass the function we want to apply.

So how it looked before?

Something like this.

```js
const output = [];
for (let i = 0; i < items.length; i++) {
  if (items[i].price > 10) output.push(items[i]);
}
// [ { name: 'T-shirt print', price: 20 }, { name: 'Jeans', price: 30 } ]
```

Also works fine, but especially when it comes to more advanced filters the array method makes it so much quicker.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
