---
layout: ../../layouts/Post.astro
title: 'JavaScript basics comparison operators'
metaTitle: 'JavaScript basics comparison operators'
metaDesc: 'Learning about comparison operators in JavaScript'
image: /images/25-08-2021.jpg
date: 2021-08-25T03:00:00.000Z
tags:
  - javascript
---

In this article on JavaScript basics, we'll look at comparison operators.
These operators can be used to compare two values returning a boolean (true or false).

These are super handy for decision-making. Let's see which ones we can use:

| Operator | Comparison               | Example                                                                       |
| -------- | ------------------------ | ----------------------------------------------------------------------------- |
| `==`     | Equal to                 | `8==8 // true`<br />`5==8 // false`<br />`'5'==5 // true`<br />`'f'=='f' // true`   |
| `!=`     | Not equal to             | `8!=8 // false`<br />`5!=8 // true`<br />`'5'!=5 // false`<br />`'f'!='f' // false` |
| `===`    | Strict equal to          | `8===8 // true`<br />`'5'===5 // false`<br />`'f'==='f' // true`                  |
| `!==`    | Strict not equal to      | `8!==8 // false`<br />`'5'!==5 // true`<br />`'f'!=='f' // false`                 |
| `>`      | Greater than             | `5>8 // false`<br />`8>5 // true`<br />`5>5 // false`                             |
| `<`      | Less than                | `5<8 // true`<br />`8<5 // false`<br />`5<5 // false`                             |
| `>=`     | Greater than or equal to | `5>=8 // false`<br />`8>=5 // true`<br />`5>=5 // true`                           |
| `<=`     | Less than or equal to    | `5<=8 // true`<br />`8<=5 // false`<br />`5<=5 // true`                           |

## JavaScript equal to operator

This operator is used to evaluate two values. However, they don't have to be of the same type.
Meaning we can assess if a string is equal to a number!

```js
`5` == 5; // true
5 == 5; // true
```

But it can also compare strings, for instance:

```js
'string' == 'string'; // true
'String' == 'string'; // false
```

> Note: It's capital sensitive, as you can see above!

## JavaScript not equal to operator

Following this is the not equal to operator, which can evaluate if a comparison is not correct.

```js
5 != 5; // false
8 != 5; // true
'8' != 5; // true
'String' != 'string'; // true
'string' != 'string'; // false
```

## JavaScript strict operators

Then we have these two as strict versions, which should be preferred over the top ones.
What this means is that it will check against the type as well.

```js
5 === 5; // true
'5' === 5; // false
```

And the same works for the not equal to strict comparison.

```js
5 !== 5; // false
8 !== 5; // true
'8' !== 5; // true
```

> Read more about [== vs === in JavaScript](https://daily-dev-tips.com/posts/vanilla-javascript-==-vs-===/).

## JavaScript Greater and Less then

Then we have the greater than and less than operators.
These can be used to assess if a value is greater or less than the compared one.

Generally, these should only be used with number values.

```js
8 > 5; // true
8 < 5; // false
5 > 8; // false
5 < 8; // true
5 > 5; // false
```

## JavaScript greater/less or equal to

We can also use the above two comparisons to check whether something hits a threshold.

We want to evaluate if a value is greater than or equal to a certain number?

```js
5 >= 5; // true
8 >= 5; // true
```

Meaning our number is greater than or equal to 5, which is the case in the above example.

This can also be used for checking less than operations.

```js
5 <= 5; // true
3 <= 5; // true
```

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
