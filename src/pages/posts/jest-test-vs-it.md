---
layout: ../../layouts/Post.astro
title: 'Jest test vs it'
metaTitle: 'Jest test vs it'
metaDesc: 'What is the difference between test and it in Jest'
image: /images/10-04-2022.jpg
date: 2022-04-10T03:00:00.000Z
tags:
  - testing
---

When working on Jest test cases, you might come across two different approaches, as you can see below.

```js
test('if this function succeeds', () => {
  expect(1).toBeTruthy();
});

it('should test if this function succeeds', () => {
  expect(1).toBeTruthy();
});
```

As you can see, the above tests are pretty much the same function. However, the naming is different.

## The difference between test and it in Jest

Basically, `it` is an alias for `test`, so they are functionally the same.

So, what makes it different?

This alias is created to make your tests more readable from a test output point of view.

It can really help make your tests more readable from a readability point of view.

Imagine the second test to use the `test` function.

```js
test('should test if this function succeeds', () => {
  expect(1).toBeTruthy();
});
```

This immediately sounds a bit off, right?

And these outputs definitely show up weird in your test result, so try to make them look as much like English sentences as possible.

## Which one wins?

This totally depends on the use case.

I personally use `it` more for render checks. It often makes more sense.

- "it should have a button."
- "it should navigate to x."

However, it's totally up to you which one makes more sense for specific use-cases.

Which one do you prefer?

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
