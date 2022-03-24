---
layout: ../../layouts/Post.astro
title: 'Common Jest matchers'
metaTitle: 'Common Jest matchers'
metaDesc: 'Some common Jest matchers to evaluate your code'
image: /images/03-04-2022.jpg
date: 2022-04-03T03:00:00.000Z
tags:
  - testing
---

Jest using something called matchers to test different results.
These matchers can be used to determine if a criterion is what we expect it to be.

In the [previous article](https://daily-dev-tips.com/posts/adding-jest-test-to-a-project/) we've used `toBeTruthy` and `toBeFalsy`.

However, there are many different ones we can leverage. In this article, we'll look at some commonly used ones.

### Basic matchers

In its simplest form, we can use the `toBe` matcher to assume something needs "to be" a specific value.

For example:

```js
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});
```

This is a calculation where we always expect the result to be four.
The same can be used to determine string manipulation.

```js
test('uppercase is correct', () => {
  expect('abc'.toUpperCase()).toBe('ABC');
});
```

Often we also want to determine if an object is a particular format.
For this, we can use the `toEqual` check.

```js
test('should modify a object', () => {
  const data = { foo: 'bar' };
  data['baz'] = 'fuu';
  expect(data).toEqual({ foo: 'bar', baz: 'fuu' });
});
```

Another well-used method is to check if specific criteria are no longer met.
Sometimes we don't know the exact output, but we don't want the outcome to be something specific.

Let's say we have a dice, which is zero, and on the roll, it should be anything but zero.

```js
test('roll the dice', () => {
  let dice = 0;
  expect(rollDice(dice)).not.toBe(0);
});
```

When it comes to Arrays, we might want to check if a specific element is included in the array.

For that, we can use the `toContain` test.

```js
test('Dont forget the milk', () => {
  const shoppingList = ['coffee', 'eggs', 'milk'];
  expect(shoppingList).toContain('milk');
});
```

## Determine truthiness

As we saw, we can check for something being `true` or `false`, but we have a couple extra `truthiness` checks.

- `toBeNull`: If the output is precisely `null`
- `toBeUndefined`: If the output is precisely `undefined`
- `toBeDefined`: Anything but `undefined`
- `toBeTruthy`: Anything considered true
- `toBeFalsy`: Anything considered false

These can be super good to check for specific assertions, and especially to make sure something is not one of these.

## Calculating with numbers

So far, we have seen we can use `toBe` to match specific numbers.

But we can go one step further and even determine to which degree numbers should match.

- `toBeGreaterThan`: Should be more significant than a certain number
- `toBeGreaterThanOrEqual`: Greater than or equal to certain number
- `toBeLessThan`: Less than a certain number
- `toBeLessThanOrEqual`: Less than or equal to a certain number
- `toBeCloseTo`: For floating points to be close to a specific decimal

## String regex matches

Often we only want to match strings based on a specific part.
As we might not 100% know the rest of the value.

For this, you can use `toMatch`. It takes regular regex as its parameter.

```js
test('Test for part of string', () => {
  expect('Christian').toMatch(/Chris/);
});
```

The other way around, we can make sure that a part is not in this string.

```js
test('Make sure nothing went wrong', () => {
  expect('Something went wrong, sorry').not.toMatch(/wrong/);
});
```

> Note: The above will fail as we do have the word "wrong" in our test case

## But there is more!

These are some elementary operations, but it's not the complete list of operations we can use.

A lot of those are super cool to determine if elements are visible on the screen, so we'll get into that later.

Which test do you use all the time?

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
