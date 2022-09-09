---
layout: ../../layouts/Post.astro
title: 'The Record Utility Type in TypeScript'
metaTitle: 'TypeScript | Record Utility Type - [2022 Guide]'
metaDesc: 'How does the TypeScript record utility type work'
image: /images/12-03-2022.jpg
date: 2022-03-12T03:00:00.000Z
tags:
  - javascript
  - typescript
---

I won't lie. There is a reason I skipped this one for a bit, it was a bit unclear on when to use it, but it's starting to make sense.

The TypeScript **record utility type** constructs an object type having keys and some other type.

This means you can narrow down your records by only excepting specific keys or types of keys.

Let's dive into those different scenarios

## The TypeScript Record type

Let's say we have a single user interface, as we have seen before like this:

```js
interface User {
  id: number;
  firstname: string;
  lastname: string;
  age?: number;
}
```

What happens if we want to make an array of all users?

This is precisely a cool use-case for the record type, and let's say we want to map them by a number. It could look something like this:

```js
const users: Record<number, User> = {
  0: { id: 1, firstname: 'Chris', lastname: 'Bongers' },
  1: { id: 2, firstname: 'Yaatree', lastname: 'Bongers', age: 2 },
};
```

As you can see, this will create a map of users identified by a number.

The main Syntax for the record type looks like this:

```js
Record<Keys, Type>
```

So we can also say in the above example we want the identifier to be a string.

```js
const users: Record<string, User> = {
  123: { id: 1, firstname: 'Chris', lastname: 'Bongers' },
  456: { id: 2, firstname: 'Yaatree', lastname: 'Bongers', age: 2 },
};
```

## Making sure keys match

Since the first option accepts keys, we can use a trick to pass a [union type](https://daily-dev-tips.com/posts/typescript-union-type-a-deeper-look/) to the record.

By doing this, we ensure that only valid keys can be passed.

Let's say we have a type of admin user (a weird example, but let's go with it).

```js
type Admins = 'chris' | 'nicole';
```

And we want to ensure we can only assign these keys to our list of admin users.

```js
const adminUsers: Record<Admins, User> = {
  chris: { id: 1, firstname: 'Chris', lastname: 'Bongers' },
  nicole: { id: 2, firstname: 'Nicole', lastname: 'Bongers' },
};
```

If we now try to pass anything else, we'll be hit by an error.

```js
const adminUsers: Record<Admins, User> = {
  chris: { id: 1, firstname: 'Chris', lastname: 'Bongers' },
  nicole: { id: 2, firstname: 'Nicole', lastname: 'Bongers' },
  yaatree: { id: 3, firstname: 'Yaatree', lastname: 'Bongers' },
};
```

This will throw the following error: ' Yaatree` is not a valid key.

![TypeScript record type error](https://cdn.hashnode.com/res/hashnode/image/upload/v1646284058214/kgvaYtsyt.png)

## Some other examples

In the [union type](https://daily-dev-tips.com/posts/typescript-union-type-a-deeper-look/) article, we saw a `Status` type, which was used to identify unique status objects.

```js
type Status = 'not_started' | 'progress' | 'completed' | 'failed';
```

We want to assign certain variables to this type: a color and an icon.

This is another perfect example where a record can make sure only to accept the types we defined.

```js
const statusTypes: Record<Status, { icon: string, color: string }> = {
  not_started: { icon: 'icon-not-started', color: 'gray' },
  progress: { icon: 'icon-progress', color: 'orange' },
  completed: { icon: 'icon-completed', color: 'green' },
  failed: { icon: 'icon-failed', color: 'red' },
};
```

And that's it. A super powerful and strict utility type called the Record type.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
