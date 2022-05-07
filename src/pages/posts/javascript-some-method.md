---
layout: ../../layouts/Post.astro
title: 'JavaScript some() method'
metaTitle: 'JavaScript some() method'
metaDesc: 'JavaScript some method, how it works and why you need it'
image: /images/24-11-2020.jpg
date: 2020-11-24T03:00:00.000Z
tags:
  - javascript
---

Did you ever need to know if one of the elements in an array passed a test?

This is where the `some()` method comes in handy.

Let's keep using our product array, but let's add a discounted product.

We then want to test if some of our products are discounted.

## Using the Javascript some() method

Let's start by creating an array of items.

```js
const items = [
  { name: 'T-shirt plain', price: 9, discount: true },
  { name: 'T-shirt print', price: 20 },
  { name: 'Jeans', price: 30 },
  { name: 'Cap', price: 5 },
];
```

Now let's use the `some()` method to test if we have a discounted product in our array.

```js
const discounted = items.some((item) => {
  return item.discount;
});

// Returns true
```

If we now remove the discount on our item, it will return false.

Another use case might be to check if all people are under a certain age.

```js
const users = [
  { name: 'Bob', age: 60 },
  { name: 'Sarah', age: 20 },
  { name: 'Billy', age: 18 },
];

const ageRestriction = users.some((user) => {
  return user.age <= 18;
});

// Returns true
```

This returns true because billy is under the age of 18!

The syntax for some is as follows:

```js
const new = original.some(function(value));
```

Inside our function, we can check on specific properties the value has.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
