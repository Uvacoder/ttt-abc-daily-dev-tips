---
layout: ../../layouts/Post.astro
title: 'JavaScript unique object properties from object array'
metaTitle: 'JavaScript unique object properties from object array'
metaDesc: 'How to create an array of unique properies from an object array'
image: /images/17-01-2021.jpg
date: 2021-01-17T03:00:00.000Z
tags:
  - javascript
---

The issue at hand, we have an array of objects with specific categories, and I want to have a list of all these categories.

I'll show you how we did this before using a manual loop and how easily this can be done with the Set and Map combination.

Our input array

```js
const data = [
  { id: 1, price: 12, category: 'T-shirt' },
  { id: 2, price: 50, category: 'Jeans' },
  { id: 3, price: 7, category: 'Cap' },
  { id: 4, price: 15, category: 'T-shirt' },
  { id: 5, price: 6.5, category: 'Cap' },
];
```

As you can see, a pretty random array. How do we go about getting the following output?

```js
const output = ['T-shirt', 'Jeans', 'Cap'];
```

## Manually looping (Old-way)

Before Set and Map, we would need to do this. We would choose to have a temporary variable and push values into it based on whether they existed.

```js
let unique = [];
for (let i = 0; i < data.length; i++) {
  if (!unique.includes(data[i].category)) unique.push(data[i].category);
}
// [ 'T-shirt', 'Jeans', 'Cap' ]
```

The outcome is precisely what we want, but it can be written way easier and friendlier.

## JavaScript array of unique properties

We first need to map input data to an array containing just the categories to get this unique properties array. We will use the [Map method](https://daily-dev-tips.com/posts/javascript-map-method/).

```js
const mapped = data.map((item) => item.category);
// [ 'T-shirt', 'Jeans', 'Cap', 'T-shirt', 'Cap' ]
```

We map our input data only to return the category, which gives us all the categories.

But, as you can see, we still have duplicates. This is where [JavaScript Set](https://daily-dev-tips.com/posts/javascript-es6-sets/) comes in handy. It will only keep unique values.

```js
const unique = [...new Set(mapped)];
// [ 'T-shirt', 'Jeans', 'Cap' ]
```

We can even write this as a one-liner:

```js
const unique = [...new Set(data.map((item) => item.category))];
```

As you can see, this can be super powerful to get unique valued properties quickly.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
