---
layout: ../../layouts/Post.astro
title: 'JavaScript basics arithmetic operators'
metaTitle: 'JavaScript basics arithmetic operators'
metaDesc: 'Looking at arithmetic operators in JavaScript'
image: /images/29-08-2021.jpg
date: 2021-08-29T03:00:00.000Z
tags:
  - javascript
---

Doing math in JavaScript is a prevalent task. We often want to perform some sort of calculation on one or two numbers.

This is where arithmetic operators come in!
Let's see which ones we can use in JavaScript:

| Operator | Description    |
| -------- | -------------- |
| `+`      | Addition       |
| `++`     | Increment      |
| `-`      | Subtraction    |
| `--`     | Decrement      |
| `*`      | Multiplication |
| `**`     | Exponentiation |
| `/`      | Division       |
| `%`      | Modulus        |

Let's have a more detailed view of each of these arithmetic operators in JavaScript.

## JavaScript Addition (+)

This can be used to add two numbers, an example:

```js
const a = 5 + 2; // 7
const b = a + 3; // 10
```

However, be aware the plus sign is also used to combine strings, so doing something like this might surprise you:

```js
const a = '3' + 3; // 33
```

This happens because it will take the first three as a string and place the number behind it.

## JavaScript Increment (++)

This is a super handy operator to quickly increment a number, be aware it has two implementations that can return different results.

In the most basic form it's used like so:

```js
let a = 1;
a++; // 1
console.log(a); // 2
```

Not that the actual operator does not yet return the new value directly.
We can change that behavior by putting the `++` before it.

```js
let a = 1;
++a; // 2
console.log(a); // 2
```

However, you rarely want to use the value directly.

## JavaScript Subtraction (-)

As we can do addition, we can also subtract two numbers:

```js
const a = 4 - 2; // 2
```

Weird enough, this will subtract from a string!

```js
const a = '5' - 2; // 3
```

## JavaScript Decrement (--)

Or we can decrement a value.

```js
let a = 5;
a--; // 5
console.log(a); // 4
```

## JavaScript Multiplication (\*)

This is used to multiply two numbers.

```js
const a = 2 * 5; // 10
```

## JavaScript Exponentiation (\*\*)

This is a short-hand way to use the `Math.pow()` function.

It will raise the first number to the power of the second.

```js
const a = 5 ** 3; // 125
```

Which is the exact same as:

```js
const a = Math.pow(5, 3); // 125
```

## JavaScript Division (/)

The division is used to divide two numbers.

```js
const a = 10 / 2; // 5
```

## JavaScript Modulus (%)

The modulus operator is also known to get the remainder of a division operation.

```js
const a = 10 % 2; // 0
const b = 10 % 3; // 1
```

Meaning with the first division, we don't have any number left. For the second one, we will keep the number 1 as a left-over.

And with that, we reached the end of the article. I hope you have a solid understanding of JavaScript arithmetic operators.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
