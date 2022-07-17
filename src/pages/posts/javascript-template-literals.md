---
layout: ../../layouts/Post.astro
title: 'JavaScript template literals'
metaTitle: 'JavaScript template literals'
metaDesc: 'The how and why you should use template literals in JavaScript'
image: /images/09-11-2020.jpg
date: 2020-11-09T03:00:00.000Z
tags:
  - javascript
---

Something cool that was introduced in `JavaScript ES6` is Template Literals.

You might wonder, what the hell are Template Literals, Chris, and more importantly, why do I even need them?

Template Literals are a speedy and widely adopted new way of defining strings.

Besides that, they come with some extra new and handy methods. I will showcase some examples of the changes between the old and new ways.

## Difference between strings and template literals

If we want to define a string in JavaScript, we can do that using quotes, either single (`'`) or double (`"`) quotes.

```js
const myString = 'Cool I can be anything';
const otherString = 'Me too!';
```

We can do the same with template literals but using a backtick (`).

```js
const templateLiteral = `I can also be a string`;
```

Ok, but that almost looks the same, so what makes them so great?

## Template literals can be multiline

Creating a multiline string was always an issue when it came to JavaScript. We had to include a `\n` or use multiple strings.

```js
const multi =
  'Hello\
Also hello';
console.log(multi);
// 'HelloAlso hello'

const multi = 'Hello \n Also hello';
console.log(multi);
// 'Hello
// Also hello'
```

As you can see, this can be super annoying to include these `\n` escapes everywhere.

With template literals, this is way easier. We can type multiple lines.

```js
const multi = `Hi

Yes I'm on multiple lines
How cool`;
console.log(multi);
//"Hi
//
//Yes I'm on multiple lines
//How cool"
```

Ok, that's a big pro already!

## It can handle variables

Another thing that annoys you as a developer is that you must escape the string to use a variable.

```js
console.log('What is 2 + 3: ' + (2 + 3) + '!');
//'What is 2 + 3: 5!'
```

Jeez, such a hassle to include a simple variable or function.

With template literals, we can use variables using this syntax `${variable}`.

```js
console.log(`What is 2 + 3: ${2 + 3}!`);
//'What is 2 + 3: 5!'
```

Oh, wow, way shorted and easier on the eyes already!

Another great example and everyday use-case would be expressions.

Let's say we have a dynamic class we need to add.

With regular string, we have to escape or break this in two separate ways.

```js
let bodyClass = 'body ' + (isLargeScreen() ? 'large' : 'small');
console.log(bodyClass);
// 'body large'
```

With template literals, this can be made more accessible.

```js
let bodyClass = `body ${isLargeScreen() ? 'large' : 'small'}`;
console.log(bodyClass);
// 'body large'
```

So with this being said, create a habit of using template literals. It will make your life so much easier.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
