---
layout: ../../layouts/Post.astro
title: 'JavaScript basics logical operators'
metaTitle: 'JavaScript basics logical operators'
metaDesc: 'Exploring the three JavaScript logical operators'
image: /images/26-08-2021.jpg
date: 2021-08-26T03:00:00.000Z
tags:
  - javascript
---

In today's article, we'll be looking at JavaScript logical operators.
JavaScript comes with three logical operators being `and`, `or` and `not`.

Check out the below table of the basic use cases.

| Operator          | Logic | Example                              |
| ----------------- | ----- | ------------------------------------ |
| `&&`              | And   | `a = true && b = false`              |
| <code>\|\|</code> | Or    | <code>a = true \|\| b = false</code> |
| `!`               | Not   | `let a = true`<br />`!a // false`    |

Let's have a more detailed view of each of these logical operators in JavaScript.

## JavaScript And operator

The `and` operator can be used to assess if two expressions are met.

The syntax is as follows:

```js
expression && expression;
```

Some examples might be:

```js
const a = true;
const b = 5;
a === true && b > 3;
// true
```

The return will always be an evaluation in the form of a boolean. We are returning either true if both expressions are met or false when one or both fails.

The operator is often used with a [if...else statement](https://daily-dev-tips.com/posts/javascript-basics-if-else-statement/) to perform an action based on the logic.

## JavaScript Or operator

Much like the `and` operator, we can also use the `or` operator, which is used by placing two pipes like this: `||`.
This operator is used to evaluate if both or one of the expressions is met.

```js
expression || expression;
```

Let's say we want to check if a is true or b is greater than 3. We don't need both to be truthy, just one.

```js
const a = true;
const b = 1;
a === true || b > 3;
// true
```

The above example will still return true since it will succeed to be correct.

## JavaScript Not operator

This is a bit of a funny one, as it is used to invert the value of a boolean.

So let's say we have a true boolean and want to convert it to false:

```js
let a = true;
!a;
// false
```

However, using this in an if statement will evaluate if the condition is NOT met.

```js
let a = true;

if (!a) {
  // It will never get here now
}
```

However, we mainly use this to convert a value to the opposite boolean value.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
