---
layout: ../../layouts/Post.astro
title: 'TypeScript generic types'
metaTitle: 'TypeScript generic types'
metaDesc: 'What are generic types in TypeScript and how to use them'
image: /images/26-02-2022.jpg
date: 2022-02-26T03:00:00.000Z
tags:
  - javascript
  - typescript
---

When working with types in TypeScript, we assume we know what type we will be working with.

For instance, to define this log function:

```js
const logAndReturn = (input: string): string => {
  console.log(input);
  return input;
};
```

In this simple function, we expect a string, return a string, and that's it.
But why should this be limited to just strings?
What if we try to pass a `number`?

![Number type error](https://cdn.hashnode.com/res/hashnode/image/upload/v1644901814375/ctmDETyQN.png)

Hmm, that's a bit silly. We can't pass numbers to this function.
And it makes total sense.

One possible way of solving this would be to use `any` as the type.

```js
const logAndReturn = (input: any): any => {
  console.log(input);
  return input;
};
```

But using this makes it impossible to identify the type from the outside.
It's basically as if you didn't use TypeScript at this point.

By the use of outside, I mean wherever we call this function, you should see what type it is being cast to like so:

![TypeScript any type](https://cdn.hashnode.com/res/hashnode/image/upload/v1644902001989/F4_0zUeyU.png)

So what, then?

## TypeScript generic type

This is precisely where generic types come in handy. They can be used to identify that specific called function as a type.

Making the function itself unaware of which type it's working with.

To identify a generic type, you must prefix the function with `<Type>` where `Type` is the generic variable.

> Note: We often use `T` for generic types. However, it's not limited to any name.

Let's redo the above function as a generic typed function.

```js
const logAndReturn = <T>(input: T): T => {
  console.log(input);
  return input;
};
```

Now, if we want to use this function and pass a string, we can do the following:

```js
logAndReturn < string > 'a string';
```

And on inspection, it states the following:

![Generic string type](https://cdn.hashnode.com/res/hashnode/image/upload/v1644902364646/wCle31fW1.png)

And if we want to convert this to our number, we can change the generic type used.

```js
logAndReturn < number > 123;
```

![Generic type number cast](https://cdn.hashnode.com/res/hashnode/image/upload/v1644902422256/G4T0SGgfZE.png)

As you can see, this is super powerful as we don't need to know the type upfront but keep the reference to the correct types.

This method is not limited to these existing types. We can even define a custom interface that we want to use.

```js
interface User {
  firstname: string;
  lastname: string;
}

logAndReturn < User > { firstname: 'Chris', lastname: 'Bongers' };
```

And in that case, our function will expect the `User` type.

## Conclusion

I hope you got an excellent first look at Generic types and how we can use them.
In the following articles, I'll go deeper into specific use-cases that will shed a broader light on them.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
