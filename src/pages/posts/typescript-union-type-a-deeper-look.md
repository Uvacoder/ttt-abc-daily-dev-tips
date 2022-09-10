---
layout: ../../layouts/Post.astro
title: 'TypeScript Union type a deeper look'
metaTitle: 'TypeScript Union type a deeper look'
metaDesc: "The TypeScript union type is super powerful, let's take another look at what it can do"
image: /images/11-03-2022.jpg
date: 2022-03-11T03:00:00.000Z
tags:
  - javascript
  - typescript
---

The TypeScript Union type is excellent if your type can consist of multiple values/types.

Using the pipe character (`|`), we define a union type.
For instance this Union type between a string and a number.

```js
type myUnion = string | number;
```

However, depending on what we want to do with this type, it can be difficult.
For one, the Union type can only perform valid actions for both types.

Let's see how that would be in an example:

```js
type myUnion = string | number;
const myUnionFunction = (property: myUnion) => {
  console.log(property);
};

myUnionFunction(123);
myUnionFunction('abc');
```

This will be valid since a console log is valid for both, but what if we only want to introduce a manipulation on the string?

```js
const myUnionFunction = (property: myUnion) => {
  console.log(property.toUpperCase());
};
```

This will quickly throw an error because we can't convert the `123` value to uppercase.

In this case, we can use narrowing to narrow down what action to perform for which type.

```js
type myUnion = string | number;
const myUnionFunction = (property: myUnion) => {
  if (typeof property === 'string') {
    property = property.toUpperCase();
  }
  console.log(property);
};

myUnionFunction(123);
myUnionFunction('abc');
```

And in the above example, we neatly get `ABC` returned, while the numeric value has not changed.

## Other use-cases of Unions

Now that we have seen the default `string` or `number` value, let's look at other use cases for the union type.

For one, we could define different user states.

```js
type IsUser = User | LoggedUser;
```

This will distinguish between a user or logged user type, and such comparisons can be super handy if you are only using a subset of both types.

Another great example is to catch certain events like this:

```js
type Event = MouseEvent | KeyboardEvent;
```

And a super powerful one is a string union type, which can act very close to the [enums we saw](https://daily-dev-tips.com/posts/typescript-how-to-use-enums/).

```js
type Status = 'not_started' | 'progress' | 'completed' | 'failed';
```

We have a function that can set this status, and we want to ensure it only accepts those values.

```js
type Status = 'not_started' | 'progress' | 'completed' | 'failed';
const setStatus = (status: Status) => {
  db.object.setStatus(status);
};
setStatus('progress');
setStatus('offline');
```

The bottom line will throw an error stating it can't set the value to `offline` as it does not exist in this union type.

## Union type limitations

A union type is only available at compile-time, meaning we can't loop over the values.

Let's say we need the array of all possible status values we just defined.

Usually we would try something like this:

```js
console.log(Object.values(Status));
```

This will throw an error stating we can't use `Status` as a value since it only exists as a type.

This is something we could achieve with an enum.

```js
enum Status {
  'not_started',
  'progress',
  'completed',
  'failed'
}
console.log(Object.values(Status));
```

However, there is another way to do this, which might even make more sense to use:

```js
const STATUS = ["not_started", "progress", "completed", "failed"] as const;
type Status = typeof STATUS[number];
```

Here we cast an array of possible values as the type of the `Status` type.

It's important to note that you must cast the variable as a `const`. You can either use the above method or the following one:

```js
const STATUS = <const>["not_started", "progress", "completed", "failed"];
```

![const Union type](https://cdn.hashnode.com/res/hashnode/image/upload/v1646201199188/gQLHddORJ.png)

This will result in the union being the same, and we can still get all the values like this:

```js
console.log(Object.values(STATUS));
```

All these little gimmicks make Typescript such a bliss to work with.
The possibilities are endless.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
