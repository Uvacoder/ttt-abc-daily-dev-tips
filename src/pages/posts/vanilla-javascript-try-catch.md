---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript try...catch'
metaTitle: 'Vanilla JavaScript try...catch'
metaDesc: 'Learn how to use Vanilla JavaScript try, catch and finally'
image: /images/16-04-2020.jpg
date: 2020-04-16T03:00:00.000Z
tags:
  - javascript
---

JavaScript errors are one of the worse, in my opinion, their vague, reference a million files and do not always make perfect sense.

This is where the `try...catch` can come in handy.

Let's dive into `Try` , `Catch` and `Finally`

## Simple try catch in Vanilla JavaScript

The most easy way that I tend to use is the following:

```js
try {
  // Insert your code here
} catch (e) {
  // e now contains your error
}
```

Doesn't solve or block anything, but defines your error better.

## Try Catch Finally

There is another block we can add to our `try...catch` and it's called `finally` this code will always be executed no matter what the try or catch do, see following example:

```js
try {
  throw new Error('Error made');
} catch (e) {
  console.error(e.message);
} finally {
  console.log('All done');
}
// Output:
// Error made
// All done
```

## JavaScript throw

As you can see in above example we actually use `throw` but what does that even mean?

We use the `throw` to send custom errors

## Handling specific Errors in try catch

Sometimes it's just not enough to console log the whole error, but let's say it's a specific type of error we want to return something else. For this use case we can use `instanceof`.

```js
try {
  doSomethingBad();
} catch (e) {
  if (e instanceof TypeError) {
    // statements to handle TypeError exceptions
  } else if (e instanceof RangeError) {
    // statements to handle RangeError exceptions
  } else if (e instanceof EvalError) {
    // statements to handle EvalError exceptions
  } else {
    // statements to handle any unspecified exceptions
    consoel.log(e); // Just log the error
  }
}
```

## Mix try...catch with promises

I tend to use `try...catch` a lot in promise scenarios. It's an super easy way to reject the code without it crashing.

See the following example:

```js
function getAPIBaseURL() {
  return new Promise(function (resolve, reject) {
    try {
      // Call api do function code
      resolve(returnData);
    } catch (error) {
      reject(error);
    }
  });
}
```

As your can see we use a promise as normal, but inside we include a `try...catch` block and resolve if the try function returns correct else we reject with the error.

See it in action on this Codepen:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="WNQrQad" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla Javascript try...catch">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/WNQrQad">
  Vanilla Javascript try...catch</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
