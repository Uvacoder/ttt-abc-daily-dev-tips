---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript get current timestamp'
metaTitle: 'Vanilla JavaScript get current timestamp'
metaDesc: 'Working with unix epoch timestamps in Vanilla JavaScript'
image: /images/18-01-2021.jpg
date: 2021-01-18T03:00:00.000Z
tags:
  - javascript
---

As developers, we use timestamps a lot, for storing when last a function was called, but even too safe dates for specific actions.

The Unix epoch (timestamp) started 1st January 1970 at 00:00:00 and ticks every second, so the number you see is the number of seconds since that moment.

In case you are wondering, yes there is a limit to this method and it will become obsolete in 2038. (Since we run out of space to store the seconds in this 32-bit integer).

As for now, it's still a vastly used method, you might have to store or compare to something that was previously set.

## Ways to get the timestamp in JavaScript

In JavaScript, we have multiple ways of getting the current timestamp.

This one is my favorite, since it's the most readable one, and it works on every browser.

```js
new Date().getTime();
```

Another version of this:

```js
new Date().valueOf();
```

If you don't have to support the older browser you can also use:

```js
Date.now();
```

All of these will return a timestamp like this:

```js
// 1610341839403
```

For those familiar with a timestamp, you might have noted this is longer than what you might be used to. That is because JavaScript gives us the timestamp in milliseconds.

That means we need to divide the number by 1000

```js
Math.floor(new Date().getTime() / 1000);
```

Now we will get:

```js
// 1610341839
```

You can check these timestamps on [epochconverter.com](https://www.epochconverter.com/).

## Converting a timestamp into a date

Perhaps you are wondering how to convert this timestamp back into a date?

We can simply pass the timestamp to the date object.

```js
new Date(1610341839403);
```

We can then convert that in a string for instance:

```js
new Date(1610341839403).toString();
// 'Mon Jan 11 2021 07:10:39 GMT+0200 (South Africa Standard Time)'
```

And there you go, you just learned how to use a timestamp in JavaScript!

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
