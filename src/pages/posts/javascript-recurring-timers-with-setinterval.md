---
layout: ../../layouts/Post.astro
title: 'JavaScript recurring timers with setInterval'
metaTitle: 'JavaScript recurring timers with setInterval'
metaDesc: 'How to loop functions in JavaScript with setInterval and setTimeout'
image: /images/29-01-2022.jpg
date: 2022-01-29T03:00:00.000Z
tags:
  - javascript
---

Now that we have a good understanding of [how JavaScript setTimeout works](https://daily-dev-tips.com/posts/using-settimeout-in-javascript/) to delay a function.

Let's look at how we can act every x time.

This can be super helpful for animating stuff or checking a data feed.

## JavaScript setInterval function

Let's look at how this will work in its most basic form.

```js
setInterval(() => {
  // Run every 100 milliseconds
}, 100);
```

This function will run every 100 milliseconds.

Often you might want to achieve this to run only until a specific condition is met.

We can clear the interval by using the `clearInterval`.

```js
const timer = setInterval(() => {
  // Do something
}, 100);

clearInterval(timer);
```

Or you can even stop it from inside the interval.

```js
const timer = setInterval(() => {
  if (condition) {
    clearInterval(timer);
    return;
  }

  // Execute the function
}, 100);
```

This is a great way to stop a particular action from running.

## Attention points

When you use setInterval, it does not care how long your function runs.

Meaning it will always start a new loop at the set time.

For example, when you use it to animate, but the animations have different lengths, it might cause weird side-effects where the following animation will start, and the first one is just finished.

![setInterval example](https://cdn.hashnode.com/res/hashnode/image/upload/v1643539173110/z2co0lG0X.jpeg)

As you can see, each function can have its own time to execute.

If you need them to wait a specific time, using `setTimeout` might be a better solution.

We can set up a recursive setTimeout function.
That function calls itself once it's done doing its thing.

```js
const coolFunc = () => {
  // Execute the function

  setTimeout(coolFunc, 100);
};

setTimeout(coolFunc, 100);
```

Which will result in the following flow.

![Set Timeout recursive](https://cdn.hashnode.com/res/hashnode/image/upload/v1642656276197/IwYIM-cwX.jpeg)

If you are keen to see some more real-world examples, here is a list of articles using them.

- [Fading images with JavaScript](https://daily-dev-tips.com/posts/fading-images-using-javascript/)
- [Creating a song in JavaScript](https://daily-dev-tips.com/posts/public-solving-creating-a-song-with-javascript/)
- [Countdown clock](https://daily-dev-tips.com/posts/vanilla-javascript-countdown-clock/)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
