---
layout: ../../layouts/Post.astro
title: 'JavaScript if shorthand without the else'
metaTitle: 'JavaScript if shorthand without the else'
metaDesc: "Let's see some variations on writing the JavaScript if else statement without the else part"
ogImage: /images/01-08-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/fb08f192-e1dd-436a-bd47-235382738d00
date: 2022-08-01T03:00:00.000Z
tags:
  - javascript
---

At one point in your career, you'll find yourself using the [ternary operator in JavaScript](https://daily-dev-tips.com/posts/javascript-basics-if-else-statement/#javascript-ternary-operator) a lot.

It's a fancy word for the if...else shorthand version.

Let's recheck the example.

```js
// Full if else

let result = '';
if (our_value) {
  result = 'we got a value';
} else {
  result = 'no value';
}

// Ternary
result = our_value ? 'we got a value' : 'no value';
```

So that's already a set working example.

## If without the else

However, sometimes we might want to execute or set something if a specific condition is met.

Let's look at the following example.

```js
if (our_value) {
  alert('I have the value');
}
```

This piece of code should alert the user if the `our_value` condition is truthy.

There is no else involved.

We could write it like this:

```js
our_value ? alert('I have the value') : null;
```

However, we don't need the `null` value as it doesn't do anything, so we can switch to using the `&&` operator.

```js
our_value && alert('I have the value');
```

Way cleaner, we tell the script if we do have this truthy value, we should alert the user.

## Nullish default value

In some cases, you might have a function that returns some value, but you might want to return a default value if the object is nullish.

```js
const name = null;
const user = {
  username: name ? name : 'John Doe',
};

console.log(user);
// { username: 'John Doe' }
```

That example works perfectly fine. However, it's a bit duplicated again. We can leverage the `??` operator to set a default return value.

This `??` operator is called a [logical nullish operator](https://daily-dev-tips.com/posts/javascript-optional-chaining-to-the-rescue/#returning-something-better-than-undefined).

```js
const user = {
  username: name ?? 'John Doe',
};
```

This will either return the value of `name`, and if that doesn't exist, it will return `John Doe`.

> Note: Be careful when the value can be `false` as it will return false in that case.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
