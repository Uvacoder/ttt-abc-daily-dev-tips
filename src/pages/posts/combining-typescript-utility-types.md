---
layout: ../../layouts/Post.astro
title: 'Combining TypeScript utility types'
metaTitle: 'Combining TypeScript utility types'
metaDesc: 'Unleash utility types powers by combining them into powerful types'
image: /images/21-02-2022.jpg
date: 2022-02-21T03:00:00.000Z
tags:
  - javascript
  - typescript
---

By now, we had a basic introduction to some of the utility types of TypeScript.

However, the real power unleashes when you combine them.

When we used the [partial and required types](https://daily-dev-tips.com/posts/typescript-utility-types-partial-and-required/), you might have noticed that they have one downside: they affect all properties.

By combining them with [pick and omit](https://daily-dev-tips.com/posts/typescript-utility-types-pick-and-omit/), we can ensure only specific fields are affected.

Let's take a look at how this would work.

> Disclaimer: This article is for TypeScript beginners. We have not yet covered generics, so that nothing will use generics in this article.

## Making specific fields required

Let's take the following example interface:

```js
interface User {
  id?: number;
  firstname: string;
  lastname: string;
  age?: number;
}
```

What if we want to make just the `id` required but leave the age optional?

Depending on our end-use case, we have two options here.

First, let's say all other fields can be optional, but the `id` must be set.

We can choose to make a new type combining `Partial` and `Required`.

It will look like this:

```js
type LoggedUser = Partial<User> & Required<Pick<User, 'id'>>;
```

What we say here is:

- Take the user interface and make everything optional (Partial)
- Include a required type, but `Pick` only the `id` field to make required
- Assign this combination to the `LoggedUser` type.

We end up with a type with three optional fields: `firstname`, `lastname`, and `age` and one required field: `id`.

But, in some cases, this is not exactly what we wanted, as we don't want the first and last name to be optional.
We could, of course, include them in the `required` statement, but that would defeat the purpose.

In that case, we can write the following type:

```js
type LoggedUser = Required<Pick<User, 'id'>> & Omit<User, 'id'>;
```

What this one does:

- Require the `id` field by picking it from the user
- Include the remaining user interface, but omit the id field
- Assign this combination to the `LoggedUser` type

This scenario has three required fields: `firstname`, `lastname`, and `id`. And one optional field, the `age`.

As you can see, using a combination of utility types is really where they shine.
You can make crazy combinations, and once we dive into generics, we can turn these into reusable types!

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
