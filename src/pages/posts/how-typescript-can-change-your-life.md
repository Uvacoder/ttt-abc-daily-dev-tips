---
layout: ../../layouts/Post.astro
title: 'How TypeScript can change your life'
metaTitle: 'How TypeScript can change your life'
metaDesc: 'TypeScript is a superset of JavaScript and can be used to help your create more robust code'
image: /images/16-02-2022.jpg
date: 2022-02-16T03:00:00.000Z
tags:
  - javascript
  - typescript
---

JavaScript is now one of the most used programming languages, and it's fantastic at what it does.
But it's not always strict enough. It will give us a lot of freedom, which sometimes is exactly what we want.
But for big applications not ideal, as we can break parts over time.

An example of this might be a variable you have in your database, it's intended as a number, but one day it returns a stringed version of a number like `'123'`.

This might not be the end of the world, but let's say you were doing calculations with this, and always expected a number, so you don't parse it in any way.

That's precisely where TypeScript would have warned you about the value not being correctly defined.

## So, what is TypeScript?

TypesScript is a superset of JavaScript, giving us static typing, classes, and interfaces.

As a benefit of using those, our IDEs can give us a better developer experience because they will tell us what to expect from certain functions/variables.

![TypeScript IDE support](https://cdn.hashnode.com/res/hashnode/image/upload/v1644211011412/xDOogfTvs.png)

TypeScript runs before your code runs, ensuring that the types of your code are correctly typed.

For instance, let's take this as an example:

```js
let demo: number;
demo = 'string';
```

We create the let as a `number` type, so it's wrong to assign it as a string value, and TypeScript will let us know.

![TypeScript type error](https://cdn.hashnode.com/res/hashnode/image/upload/v1644211335037/KIXDDnvG3.png)

A good thing to remember is that TypeScript won't change your output code.

Eventually, your output will be plain JavaScript, but we ensured the variables and types are exactly what we expected.

You can compare it to `SASS/SCSS`. It's a different way of writing CSS, but the result is just plain CSS.

## How to get started

Before diving into TypeScript, I would suggest getting familiar with TypeScript. I'll be using the upcoming articles to go through the TypeScript basics.

But let's take an introductory look at what it takes to move from JavaScript to TypeScript.

We need to convert our existing `.js` files to `.ts` files.

Then we will need a typescript compiler to convert these `.ts` into plain `.js` files again.

The TypeScript compiler is called `tsc`.
We can install it by installing the following package.

```bash
npm install -g typescript
```

Once done, we can run `tsc file.ts` to check that specific file.

This command will determine if our TypeScript is valid and output the same name but as a `.js` file.

Let's add the wrong typed code as we discussed before:

```js
let myName: string;
myName = 123;
console.log(`Hello ${myName}`);
```

If we now try to compile this code, we get the following error.

![TypeScript compiler error](https://cdn.hashnode.com/res/hashnode/image/upload/v1644212111016/m5AQzd2we.png)

However, the `index.js` file is still generated with the converted JavaScript version.

This is because, in the end, TypeScript is there to help us, but it will assume we know what we are doing.
It warned us about something, and it's up to us to do something with this.

However, you can tell it not to compile on an error by using the `--noEmitOnError` flag.

## What's next

Now that we broadly know what TypeScript is and what it does, what can we do next?

In the next couple of articles, we'll be going through the basics of TypeScript.

- Types
- Interfaces
- Functions
- And more

Keep an eye out for the upcoming articles if you are interested in learning TypeScript with me 🙌.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
