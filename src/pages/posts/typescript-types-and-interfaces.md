---
layout: ../../layouts/Post.astro
title: 'TypeScript types and interfaces'
metaTitle: 'TypeScript types and interfaces'
metaDesc: "In this article we'll look at types and interfaces and how to use them in TypeScript"
image: /images/18-02-2022.jpg
date: 2022-02-18T03:00:00.000Z
tags:
  - javascript
  - typescript
---

We have seen the basic usage of defining an object in the previous article on [TypeScript types](https://daily-dev-tips.com/posts/the-types-in-typescript/). However when we used this object it looked like this:

```js
const getFullName = (user: {firstname: string, lastname: string}): string => {
  return `${user.firstname} ${user.lastname}`;
};
```

Not that there is anything wrong with this, but let's say we need to use this user object again in a `saveUser` function?

Then we have to copy-paste this same declaration piece all over the place.

And that's where `type` and `interface` come in handy.

## Defining a type

To define a type, you use it as a variable declaration.

```js
type User = {
  firstname: string,
  lastname?: string,
};
```

Then instead of defining these loose objects, we can pass the type to our function.

```js
const getFullName = (user: User): string => {
  return `${user.firstname} ${user.lastname}`;
};
```

And this gives us the option to re-use this type for another function quickly.

```js
const saveUser = (user: User): void => {
  return await db.save(user);
};
```

## Defining an interface

A interface is also a declaration of a object and it will look like this:

```js
interface User {
  firstname: string;
  lastname?: string;
}

const getFullName = (user: User): string => {
  return `${user.firstname} ${user.lastname}`;
};
```

As you can see, not much has changed. We simply replaced the type with an interface declaration.

## The difference between a type and interface

Knowing these two, it's keen to see the actual differences between them.

First of all, it's how we declare them. The type has the extra `=`, which is unnecessary for an interface.

But that's not the main difference.

The main difference is that a type can never change, so we cannot add new properties to a `type`. And the interface, on the other hand, can be redeclared.

We have our user interface, but we want a `LoggedUser` object with an extra ID field.

With interfaces, we can extend the existing one like so:

```js
interface LoggedUser extends User {
  id: number;
}
```

Now the `id` will be available on this object.

```js
const user: LoggedUser = {
  firstname: '',
  lastname: '',
  id: 34,
};
```

With types we can however do something similar and it will look like this:

```js
type LoggedUser = User & {
  id: number,
};
```

Which comes down to the same effect.

Now let's look at changing the originals and see what happens.

```js
interface User {
  firstname: string;
  lastname?: string;
}
interface User {
  id: number;
}
```

This will be valid, and the User interface will now have these three fields.
However, I would not recommend this as you will get lost as to what kind of properties an interface should have.

On the other hand, the type will simply throw an error if we type the same.

```js
type User = {
  firstname: string,
  lastname?: string,
};
type User = {
  id: number,
};

// Duplicate identifier User
```

## So which one to pick?

It mainly comes down to preference. If you don't have one, stick to the interface until you might need something specific to a type.

For most of the time, an interface will be a perfect fit, and it's super declarative to what something is.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
