---
layout: ../../layouts/Post.astro
title: 'TypeScript Readonly Utility type'
metaTitle: 'TypeScript Readonly Utility type'
metaDesc: 'How to make a interface or type readonly in TypeScript'
image: /images/22-02-2022.jpg
date: 2022-02-22T03:00:00.000Z
tags:
  - javascript
  - typescript
---

This is the last of the commonly known interface modifying utility types.
Do note there are a few more, but we'll get to those in a later stage as they are a bit more advanced.

I want to review the `Readonly` utility type in this article.

Using the read-only type, you can transform a type to be read-only, making it impossible to change after the initial assignment.

## Using the Readonly Utility type

Let's retake this user interface.

```js
interface User {
  id?: number;
  firstname: string;
  lastname: string;
  age?: number;
}
```

If we would now assign some information to this object, we could always re-assign it later in our code.

```js
const user: User = {
  firstname: 'Chris',
  lastname: 'Bongers',
};
user.id = 123;
```

We can now modify any existing properties to be a new value.

And we don't always want that.

So to prevent this from happening, you can wrap the type used in a `Readonly` type like so:

```js
const user: Readonly<User> = {
  firstname: 'Chris',
  lastname: 'Bongers',
};
```

Which will give us the following TypeScript error.

![TypeScript readonly type](https://cdn.hashnode.com/res/hashnode/image/upload/v1644730309446/Ep9udmmle.png)

This Readonly type can be super helpful to represent frozen objects.
Or objects that should not mutate on their own.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
