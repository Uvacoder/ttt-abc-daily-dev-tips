---
layout: ../../layouts/Post.astro
title: 'Object destructuring in TypeScript'
metaTitle: 'Object destructuring in TypeScript'
metaDesc: 'How to typescript a destructured object in JavaScript'
image: /images/23-02-2022.jpg
date: 2022-02-23T03:00:00.000Z
tags:
  - javascript
  - typescript
---

The cool part about TypeScript is that we can define types for certain variables.
However, there is a scenario that might prove a bit difficult.

And this is destructuring an object.

Let's take the following example:

```js
const user = { firstname: 'Chris', lastname: 'Bongers', age: 32 };

const { firstname, age } = user;
```

By using this destructuring, we extract specific properties from an object.

But how do we now define the types for this destructured object?

## TypeScript casting a destructured object type

You might immediately think the following will work:

```js
const { firstname: string, age: number } = user;
```

But this assigns the `firstname` variable to be `string` and the `age` variable to be called `number`.

And when we introduce two of the same type, we are hit with an error since we are redefining a variable.

This is because when we destructure an object, we can rename the properties like so:

```js
const { firstname: userFirstname, age: userAge } = user;
```

To define these types, we have to assign them after the destructuring.

Which would look like this:

```js
const { firstname, age }: { firstname: string, age: number } = user;
```

Do note you can still rename the variables, and we must still use the types for the original names.

```js
const {
  firstname: userFirstname,
  age: userAge,
}: { firstname: string, age: number } = user;
```

We can make this a bit nicer using [TypeScript interfaces](https://daily-dev-tips.com/posts/typescript-types-and-interfaces/).

```js
interface User {
  firstname: string;
  age: number;
}
const { firstname, age }: User = user;
```

That looks way nicer, right?

And there you go, the correct way to typecast a destructured object in TypeScript.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
