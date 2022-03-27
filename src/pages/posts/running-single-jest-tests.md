---
layout: ../../layouts/Post.astro
title: 'Running single Jest tests'
metaTitle: 'Running single Jest tests'
metaDesc: 'Did you know you can run only one test in a Jest suite?'
image: /images/06-04-2022.jpg
date: 2022-04-06T03:00:00.000Z
tags:
  - testing
---

I found out this only after doing some research for this Jest series.

Apparently, we get the `test.only` function, which we can use to only test one test in a suite.

This can be particularly handy if one test in a whole file fails.

To use it, you can set up the following structure.

```js
test.only('Test one', () => {
  console.log(`First test`);
});

test('Test two', () => {
  console.log(`Second test`);
});
```

It will only run the first test and succeed the whole file.

## Some common issues

There are some common failures with Jest test that can give you headaches.

The most simple one is the test failing because you changed something in your functions.

Another one might be that you included a time-based check or something related to that.

You can quickly use the `.only` method to determine if a test fails when it runs isolated.

If that is the case, you can start looking at that specific test and debug it.

However, more often, we might find the individual test succeeding, but it fails when run with all the other tests.

That means something else is interfering with this test, and often you can look at the `before` or `after` functions you set up.
There might be something you are resetting or not resetting that you might have missed.

## Conclusion

Try to run them individually with `test.only` when hitting failing tests.

If they succeed, try and evaluate your recurring actions. If they fail, it's most likely a mistake in your test or function you are testing.

I hope this `test.only` function helps others, as I was not aware of it before.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
