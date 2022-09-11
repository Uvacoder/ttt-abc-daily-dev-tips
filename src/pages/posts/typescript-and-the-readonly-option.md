---
layout: ../../layouts/Post.astro
title: 'TypeScript and the ReadOnly option'
metaTitle: 'TypeScript and the ReadOnly option'
metaDesc: "Let's look at the readonly property in TypeScript and how we can add and remove it."
image: /images/02-03-2022.jpg
date: 2022-03-02T03:00:00.000Z
tags:
  - javascript
  - typescript
---

Regarding TypeScript, there is yet another modifier we haven't touched. This is `readonly`, which can be used to make fields read-only.

Meaning we are not allowed to change them after they initialize.

To demonstrate how it works, we'll look at how we can define interface properties as read-only and how we can alter those later on.

## TypeScript readonly interface

The cool part about the `readonly` modifier is that we can even use it on the interface declaration, making specific fields read-only from the start.

It works by prefixing the type with `readonly` like this:

```js
interface User {
  readonly id?: number;
  firstname: string;
  lastname: string;
  age?: number;
}
```

The only time we can ever set this value is by initialising it like this:

```js
const user: User = {
  id: 123,
  firstname: 'Felix',
  lastname: 'Bongers',
};
```

As you know, we can change the `firstname` field, for instance:

```js
user.firstname = 'Chris';
```

But when we modify the `ID` field, we get an error.

```js
user.id = 12;
```

![TypeScript readonly error](https://cdn.hashnode.com/res/hashnode/image/upload/v1645422145618/9zp36czSU.png)

This can be very useful for fields you want to ensure can never change.

## TypeScript ReadOnly utility type

We can also leverage a utility type to change a property to read-only.

We looked at this in the article on [TypeScript Readonly Utility Type](https://daily-dev-tips.com/posts/typescript-readonly-utility-type/).

However, now that we also learned how to leverage `Pick` and `Omit`, we can narrow down the use case.

Let's say we have this `User` interface again but only want to make the ID read-only at a later stage.

```js
interface User {
  id?: number;
  firstname: string;
  lastname: string;
  age?: number;
}
```

Now we could use the hack we used for [Generics and Utility Types](https://daily-dev-tips.com/posts/typescript-utility-types-with-generics/) like this:

```js
type IdReadOnly = Readonly<Pick<User, 'id'>> & Omit<User, 'id'>;
```

Or even make this a generic re-usable type.

```js
type ReadOnlyByKey<T, K extends keyof T> = Readonly<Pick<T, K>> & Omit<T, K>;
```

In return we can use this:

```js
type IdReadOnly = ReadOnlyByKey<User, 'id'>;
```

All these versions will make the `id` field read-only from that type.

## Removing the read-only modifier

There might be cases where you want to undo the read-only modifier.
And this particular removal is unique to the read-only property.

These are called mapping modifiers, and there are only two of them: `readonly` and `?` (optional).

For instance, to remove all occurrences of a readonly attribute, we can do the following:

```js
type Mutable<T> = {
   -readonly [k in keyof T]: T[k];
};
```

This removes all `readonly` attributes since we used the `-` sign.
If you removed the `-`, all fields would be read-only.

Let's try this out for a second and take our first example.

```js
interface User {
  readonly id?: number;
  firstname: string;
  lastname: string;
  age?: number;
}
```

Before, we could not modify the id field, so let's convert this into a mutable type.

```js
type Mutable<T> = {
  -readonly [k in keyof T]: T[k];
};

const user:Mutable<User> = {
  id: 123,
  firstname: 'Felix',
  lastname: 'Bongers'
}
```

And now we can modify the `id` field again!

I hope you learned a lot about changing the read-only property of a type/interface.
Do let me know if you have any questions in this regard.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
