---
layout: ../../layouts/Post.astro
title: 'TypeScript Utility types with Generics'
metaTitle: 'TypeScript Utility types with Generics'
metaDesc: 'Making utility types even better by implementing generic types'
image: /images/27-02-2022.jpg
date: 2022-02-27T03:00:00.000Z
tags:
  - javascript
  - typescript
---

This one will be a little bit more advanced, as we'll be looking at improving our [combined utility type](https://daily-dev-tips.com/posts/combining-typescript-utility-types/) we made the other day.

The code so far looks like this:

```js
interface User {
  id?: number;
  firstname: string;
  lastname: string;
  age?: number;
}

type LoggedUser = Required<Pick<User, 'id'>> & Omit<User, 'id'>;

const u1: LoggedUser = {
  id: 1,
  firstname: 'Chris',
  lastname: 'Bongers',
};
```

The `LoggedUser` type is a modified version of the `User` interface, requiring specific fields.

In our case, we make the `id` field required.

However, this action of requiring fields might become a feature we would like to re-use throughout our application.

And by looking at [generics types](https://daily-dev-tips.com/posts/typescript-generic-types/), it's precisely what we can use to make this happen.

## Making a generic require fields utility type

We would love to have a `RequireFields` type. This type could then define a list of required fields for a specific type.

The great part about types is that we can define information in their generics section like so:

```js
type RequireFields<Type>
```

The `Type` will now be available to work with inside the function.

Let's take a step back and see what details we need.

```js
type LoggedUser = Required<Pick<User, 'id'>> & Omit<User, 'id'>;
```

Looking at the above, we see that we need the `User` type and the field we want to require, the `id`.

When we looked at generics types, I briefly mentioned there is not a limit to one type so that we can pass multiple types like this:

```js
type RequireFields<Type1, Type2>
```

The first one in our case will be `User`, which we can define as `T`.
However, the second one is slightly different since it can contain one or multiple keys from this `T` (User).

Luckily for us, TypeScript has a feature that does just that.

The function looks like this:

```js
K extends keyof T
```

Here we define `K` as our second type, and `K` should act as an extended key object of the `T`.

Let's quickly look at what this could return to see what we are working with.

![Using type of to get the keys](https://cdn.hashnode.com/res/hashnode/image/upload/v1645075545935/LFwSXQdu4z.png)

As you can see in the image above, the keys for this interface are: `"id" | "firstname" | "lastname" | "age"`.

By using `extends keyof Type`, we ensure we can only pass keys that are part of the object.

Looping back to our `RequireFields` type, we can set the generic types to be the following:

```js
type RequireFields<T, K extends keyof T>
```

In this case, the `T` will be our type, and the `K` will be the keys of this type we want to use.

> Note: Type keys can be one or multiple delimited by an `|`.

Then we can modify what we had before to work with these two generic types.

Before:

```js
type LoggedUser = Required<Pick<User, 'id'>> & Omit<User, 'id'>;
```

After:

```js
type RequireFields<T, K extends keyof T> = Required<Pick<T, K>> & Omit<T, K>;
```

We can call this `RequireFields` type and pass the type and keys we want to require.

```js
const u2: RequireFields<User, 'id' | 'age'> = {
  id: 2,
  age: 32,
  firstname: 'Chris',
  lastname: 'Bongers',
};
```

Remember when I said the `extends keyof` will check for the right keys? Let's try and modify the `age` key to a key that doesn't exist.

![Passing wrong keys](https://cdn.hashnode.com/res/hashnode/image/upload/v1645075854001/zLnkZaydF.png)

In this image, you can quickly see TypeScript will warn us that this `email` field does not exist on the `User` type.

## Conclusion

This is quite a complex concept to grasp at first, and I urge you to try it out yourself.

You should understand what this code does in detail by playing around and following the steps.

These generic types and utility types make TypeScript super exciting and versatile.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
