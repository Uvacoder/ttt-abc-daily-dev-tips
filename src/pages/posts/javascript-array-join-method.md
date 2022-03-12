---
layout: ../../layouts/Post.astro
title: 'JavaScript array join() method'
metaTitle: 'JavaScript array join() method'
metaDesc: 'JavaScript join method, how it works and why you need it'
image: /images/03-12-2020.jpg
date: 2020-12-03T03:00:00.000Z
tags:
  - javascript
---

Another Array method, and this time the `join()` method, we have seen this in use in yesterdays [four-digit pincode](https://daily-dev-tips.com/posts/vanilla-javascript-four-digit-pincode-field/).

What it does is it combines an array with a delimiter you specify.

## Using the Javascript join() method

In the most basic example let's convert this array into a string.

```js
const input = ['Hello', 'world', 'how', 'are', 'you'];
const output = input.join(' ');
// 'Hello world how are you'
```

In this example we used a empty string to join the words, we can use anything really:

```js
const input = ['Hello', 'world', 'how', 'are', 'you'];
const output = input.join('👀');
// 'Hello👀world👀how👀are👀you'
```

It can only take one argument which is the separator. This is a optional parameter, if we leave it empty we get the following result:

```js
const input = ['Hello', 'world', 'how', 'are', 'you'];
const output = input.join();
// 'Hello,world,how,are,you'
```

## Real-world example

An example where one would use this, is of course, like in the [four-digit JavaScript input](https://daily-dev-tips.com/posts/vanilla-javascript-four-digit-pincode-field/).

But another really good one is converting titles into slugs.
A slug would be a URL friendly version of your title.

Let's say we have the following title.

```js
const title = 'this is my article title';
```

Notice how this is not an array, so how can we join this into a slug?

First let's split it on each space:

```js
const output = title.split(' ');
// [ 'this', 'is', 'my', 'article', 'title' ]
```

Now we can join this with a dash.

```js
const output = title.split(' ').join('-');
// 'this-is-my-article-title'
```

There you go!
Super awesome function and very useful!

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
