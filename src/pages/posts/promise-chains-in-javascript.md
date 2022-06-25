---
layout: ../../layouts/Post.astro
title: Promise chains in JavaScript
metaTitle: Promise chaining in Node js vanilla js
metaDesc: Ever wondered how to promise chain in node js or vanilla js
image: '/images/fallback.png'
date: 2020-03-20T09:00:00.000Z
tags:
  - javascript
---

In this article, I will tell you more about promise chaining. For this specific use case, I needed a promise chain in `node.js`, but the same applies to `vanilla js`

## What is a promise?

Sounds pretty logical, right, and it is. You tell the script a promise is going to end eventually.

A basic promise looks like this:

```js
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise
  .then(function (data) {
    console.log(data); // Returns 1
  })
  .catch(function (error) {
    console.log(error);
  });
```

You can see we define the promise as a let. In this case, it can as well be a function. The promise is called, and the `then` identifies the first result. We include a `catch` to catch any errors in the promise (`reject`)

## Then what is promise chaining for?

You use promise chaining if you want to run code in sequences. Let's say the following example:

1. Return default number from API
2. Multiple that number by 2
3. Multiple the multiplied number by 2

In a more real-world example, these would be API calls asynchronous but waiting for each other.

This looks as follows:

```js
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise
  .then(function (result) {
    console.log(result); // 1
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function (result) {
    console.log(result); // 2
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function (result) {
    console.log(result); // 4
  })
  .catch(function (error) {
    console.log(error);
  });
```

As you can see, we included some timeouts in this. When you run this code, you will see a 1000ms wait, then log `1` then 1000 ms wait for => log `2` another 1000ms wait log `4`.

This is our chain of promises. Each promise will wait for the previous one to complete.

See below for a demo on CodePen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="MWwBOwy" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Promise chain JavaScript">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/MWwBOwy">
  Promise chain JavaScript</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Promise chains are a boss, right?

Hopefully, you are as excited about promise chains as I am. Feel free to send me a message on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1) and let me know what topics you want to read more about!
