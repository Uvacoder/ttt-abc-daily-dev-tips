---
layout: ../../layouts/Post.astro
title: 'JavaScript basics error handling'
metaTitle: 'JavaScript basics error handling'
metaDesc: 'Basic error handling in JavaScript introducing try and catch statements'
image: /images/30-08-2021.jpg
date: 2021-08-30T03:00:00.000Z
tags:
  - javascript
---

When writing solid code, we have to address error handling.

In JavaScript, this is managed through exceptions. But before we dive into those, let's look and see what happens when we introduce some faulty code.

```js
iDontExist();

console.log('log me');
```

This will result in an error stating:

```
Uncaught ReferenceError: iDontExist is not defined
```

And stop our code completely.

This is not ideal because we don't want our code to crash immediately.

## Catching error in JavaScript

The way to catch errors in JavaScript is to wrap them in a `try...catch` statement.

Let's do that for the code above and see what happens.

```js
try {
  iDontExist();
} catch (error) {
  console.error(error);
}

console.log('log me');
```

Now this will result in our error being logged and our custom console.log being called.

## JavaScript finally statement

To create a complete `try...catch` statement, we can introduce the `finally` block.

This block will be called once the whole code block is evaluated, and it doesn't care if it was an error.

```js
try {
  iDontExist();
} catch (error) {
  console.error(error);
} finally {
  console.log('fully done');
}
```

## Throwing new exceptions in JavaScript

By now, we have seen how to catch errors, and often these are just the errors JavaScript throws at us.

But we can also introduce our errors because there might be some user errors.

We can invoke these by using the `throw` method. This can then use an `Error` or a custom message.

```js
try {
  throw new Error('my error');
} catch (error) {
  console.error(error);
} finally {
  console.log('fully done');
}
```

Which will result in a custom error message saying `my error`.

## Nesting `try...catch` blocks

Another cool thing to note is that we can nest `try...catch` blocks.
The main thing to note when doing this is that the outer catch block will catch the exceptions.

```js
try {
  try {
    throw new Error('my error');
  } finally {
    console.log('inner done');
  }
} catch (error) {
  console.error(error);
} finally {
  console.log('fully done');
}

console.log('log me');
```

Resulting in the following flow:

```js
// inner done
// Error: my error
// fully done
// log me
```

I hope you got a good understanding of error handling in JavaScript. If you have any questions, don't hesitate to contact me.

You can also have a play with this on the following CodePen demo.

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="js,result" data-slug-hash="rNwBpzR" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/rNwBpzR">
  JavaScript basics error handling</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
