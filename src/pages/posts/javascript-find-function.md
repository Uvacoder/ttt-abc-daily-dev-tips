---
layout: ../../layouts/Post.astro
title: 'JavaScript find() method'
metaTitle: 'JavaScript find() method'
metaDesc: 'JavaScript find method, how it works and why you need it'
image: /images/29-11-2020.jpg
date: 2020-11-29T03:00:00.000Z
tags:
  - javascript
---

Today we are exploring the `find()` array method in JavaScript.
I find this method very similar to the [`some()` method](https://daily-dev-tips.com/posts/javascript-some-method/).

It searches the array for a specific hit, but instead of returning a boolean, it will return the first match it finds.

## Using the Javascript find() method

Let's start by creating an array of items.

```js
const items = [
  { name: 'T-shirt plain', price: 9 },
  { name: 'T-shirt print', price: 20 },
  { name: 'Jeans', price: 30 },
  { name: 'Cap', price: 5 },
];
```

Let's find the first item that is under the price of 10.

```js
const haveNames = items.find((item) => {
  return item.price < 10;
});

// { name: 'T-shirt plain', price: 9 }
```

This can also be written as a one-liner:

```js
const found = items.find((item) => item.price < 10);
```

Some use cases could be the first blog post in the same category.

To see this in action, let's say we are currently viewing this article:

```js
const blog = {
  name: 'JavaScript find() method',
  category: 'javascript',
};
```

And we have an array of blog items like this:

```js
const blogs = [
  {
    name: 'CSS :focus-within',
    category: 'css',
  },
  {
    name: 'JavaScript is awesome',
    category: 'javascript',
  },
  {
    name: 'Angular 10 routing',
    category: 'angular',
  },
];
```

Now we can use `find()` to get the first blog item related to our one (`javascript` based).

```js
const related = blogs.find((item) => item.category === blog.category);
console.log(related);

// { name: 'JavaScript is awesome', category: 'javascript' }
```

There you go, for example, using the find `find()` method in JavaScript.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
