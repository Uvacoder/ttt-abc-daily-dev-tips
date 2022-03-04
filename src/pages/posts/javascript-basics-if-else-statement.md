---
layout: ../../layouts/Post.astro
title: 'JavaScript basics if...else statement'
metaTitle: 'JavaScript basics if...else statement'
metaDesc: 'How to use the if else statement in JavaScript'
image: /images/24-08-2021.jpg
date: 2021-08-24T03:00:00.000Z
tags:
  - javascript
---

I sometimes forget that I write about content in a medium to advanced matter.

In these JavaScript basics series, I'll be looking at some more fundamental topics of JavaScript, so you get a good idea of how to use these methods.

In this article, we'll be looking at using if...else statements in JavaScript.

## A JavaScript if statement

An if statement can be used to execute code only when a specific condition is met.

We have a variable and want to evaluate whether it's true or false.

```js
let our_var = true;
if (our_var === true) {
  // Execute this code if true
  console.log('Value is true');
}
```

In this case, when we are checking boolean values, we don't need to specify the specific value, so we can do this:

```js
if (our_var) {
  // Execute this code if true
  console.log('Value is true');
}
```

You can also check if the value is false, like this:

```js
if (!our_var) {
  // Execute this code if false
  console.log('Value is false');
}
```

We can even write this as a one-liner, but most linters will want to see the brackets for neatness.

```js
if (our_var) console.log('Value is true');
```

## JavaScript if...else statement

Often you also want to execute some code if the first condition is not met.
We can achieve this by using the else statement as well.

```js
if (our_var) {
  console.log('Condition is met');
} else {
  console.log('Condition is not met, fallback?');
}
```

And you can even bind another if statement to this else, making it super powerful.

Let's say you want to check multiple conditions after each other.

```js
if (our_var) {
  console.log('first condition met');
} else if (our_second_var) {
  console.log('Second condition was met!');
} else {
  console.log('No condition was met');
}
```

You can make these as big as you want, but often you might want to consider using other solutions for bigger statements.

## JavaScript Ternary Operator

The JavaScript ternary operator is a quick way to express conditions and is often used for shorthand if...else.

The Syntax looks like this:

```js
condition ? truthy : falsy;
```

If we take our example, we could write code like this:

```js
our_var ? console.log('Condition is met') : console.log('Condition not met');
```

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
