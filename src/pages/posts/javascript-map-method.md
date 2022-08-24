---
layout: ../../layouts/Post.astro
title: 'JavaScript map() method'
metaTitle: 'JavaScript map() method'
metaDesc: 'JavaScript map method, how it works and why you need it'
image: /images/22-11-2020.jpg
date: 2020-11-22T03:00:00.000Z
tags:
  - javascript
---

Today yet another great array method, following [`reduce()`](https://daily-dev-tips.com/posts/javascript-reduce-method/) and [`filter()`](https://daily-dev-tips.com/posts/javascript-filter-method/), there is `map()`.

What does map especially do well?
It returns an array of specific values. Let's say you want a list of prices for all your products.

Or a combined full name based on two fields?

Let me show you how map makes our lives easier for that.

## Using the Javascript map() method

Let's start by creating an array of items.

```js
const items = [
  { name: 'T-shirt plain', price: 9 },
  { name: 'T-shirt print', price: 20 },
  { name: 'Jeans', price: 30 },
  { name: 'Cap', price: 5 },
];
```

Now next, we want the prices.

Could we loop the items and push the price to a new array?

```js
let prices = [];
items.forEach((item) => {
  prices.push(item.price);
});
// [ 9, 20, 30, 5 ]
```

Success! But we needed to define an empty array and manually loop. It can just be made easier.

```js
const prices = items.map((item) => {
  return item.price;
});
// [ 9, 20, 30, 5 ]
```

Ah cool! Same, but better.

As mentioned, you can also use it to combine things. Let's say we have a list of users.

```js
const users = [
  { firstname: 'Louise', lastname: 'Belcher' },
  { firstname: 'Bob', lastname: 'Belcher' },
  { firstname: 'Tina', lastname: 'Belcher' },
  { firstname: 'Jimmy', lastname: 'Pesto' },
];
```

Now we want to get the full names:

```js
const fullnames = users.map((item) => {
  return `${item.firstname} ${item.lastname}`;
});
// [ 'Louise Belcher', 'Bob Belcher', 'Tina Belcher', 'Jimmy Pesto' ]
```

I hope you learned what cool things the map() method could bring and give you an understanding of how to use it.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
