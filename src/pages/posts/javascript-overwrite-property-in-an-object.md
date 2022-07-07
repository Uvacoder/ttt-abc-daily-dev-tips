---
layout: ../../layouts/Post.astro
title: 'JavaScript clone and rewrite property from existing object'
metaTitle: 'JavaScript clone and rewrite property from existing object'
metaDesc: 'How to overwrite and compose a existing property in an object with JavaScript'
ogImage: /images/06-07-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/39c7dc4b-f301-49d1-ab33-b12c4e69a200
date: 2022-07-06T03:00:00.000Z
tags:
  - javascript
---

In JavaScript, we work a lot with Objects, and you'll have to modify some of the object data from time to time.

Let's take the following object as our example.

```js
const user = {
  username: 'Chris',
  online: false,
};
```

This user object is used to keep track of all the users and their status.

But what should we do when we want to set the online status to true, but the original one to remain false?

There are multiple good answers to this question, but I'll show you the easiest way to do this in this article.

## Using the spread operator to overwrite an object property

We'll use the [spread operator](https://daily-dev-tips.com/posts/10-ways-to-use-the-spread-operator-in-javascript/), which you can recognize by the three dots.

Let's say we want the status to be true. We can use the following call.

```js
console.log({ ...user, online: true });

// { username: 'Chris', online: true }
```

It's a super clean syntax and easy to see which value we are overwriting.

The only thing you must remember while using this method is that the order matters.

If we, for instance, put the property we want to overwrite. First, it won't work.
This is because the latter assignments always win.

```js
console.log({ online: true, ...user });

// { online: false, username: 'Chris' }
```

And that's the easiest way to overwrite an object value using JavaScript's spread operator.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
