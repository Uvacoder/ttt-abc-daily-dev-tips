---
layout: ../../layouts/Post.astro
title: 'JavaScript every() method'
metaTitle: 'JavaScript every() method'
metaDesc: 'JavaScript every method, how it works and why you need it'
image: /images/25-11-2020.jpg
date: 2020-11-25T03:00:00.000Z
tags:
  - javascript
---

Yesterday we had a look at the [JavaScript `some()` method](https://daily-dev-tips.com/posts/javascript-some-method/), and today we will focus on its brother `every()`.

The main difference between the two:

- `some()`: If at least one matches
- `every()`: All must match!

Both of them will give us a boolean value back.

## Using the Javascript every() method

Let's start by creating an array of items.

```js
const items = [
  { name: 'T-shirt plain', price: 9 },
  { name: 'T-shirt print', price: 20 },
  { name: 'Jeans', price: 30 },
  { name: 'Cap', price: 5 },
];
```

We want to check if all the items have a name.

```js
const haveNames = items.every((item) => {
  return item.name;
});

// Returns true
```

If we now remove the name on our item, it will return false.

Let's take a more accurate example.
We have a list of users with temperatures. We want to see if everyone is under 37.8, or else someone potentially risks Covid-19.

```js
const users = [
  { name: 'Bob', temperature: 36.3 },
  { name: 'Sarah', temperature: 37.9 },
  { name: 'Billy', temperature: 36.9 },
];

const temperature = users.every((user) => {
  return user.temperature < 37.8;
});

// Returns false
```

Whoops! Sarah has a high temperature, so we get a false back, which means we need to do something.

I hope this shows how one line can beat an array to loop over people.

The syntax for every is as follows:

```js
const new = original.every(function(value));
```

Inside our function, we can check on specific properties the value has.

And remember:

![Stay safe](https://media.giphy.com/media/3o72EU6W6bOv2mKw0g/giphy.gif)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
