---
layout: ../../layouts/Post.astro
title: 'JavaScript optional chaining (?.) to the rescue'
metaTitle: 'JavaScript optional chaining (?.) to the rescue'
metaDesc: 'How to use optional chaining in JavaScript'
image: /images/23-08-2021.jpg
date: 2021-08-23T03:00:00.000Z
tags:
  - javascript
---

Optional chaining has been added to the ES2020 version of JavaScript and is also available in TypeScript.

Optional chaining is a warmly welcomed way to access child properties, even when they don't exist!

Let's sketch a simple user object.

```js
const user = {
  firstName: 'Chris',
  lastName: 'Bongers',
  address: {
    street: 'Some street',
  },
};
```

Sometimes we can have a sub-object called `shippingAddress`, but it's not always required.

We could write code like this to check if it exists:

```js
if (user.shippingAddress && user.shippingAddress.street) {
  console.log(user.shippingAddress.street);
}
```

However, that will quickly get out of control if we need multiple properties from this shipping address object.

So let's see how optional chaining can come to our rescue here:

```js
console.log(user.shippingAddress?.street);
```

That will now return undefined, as it is undefined, but won't throw an error.

The way this works is that it actually will evaluate the left-hand side of the question mark.
So this example will evaluate if `shipping` exists or not.

## Other ways of using optional chaining

It is common to use optional chaining for object evaluation, but it can also be used in other forms.

One of these ways is the evaluate array-like calls, talking the example above. We could write code like this:

```js
console.log(user.shippingAddress?.['street']);
```

This, in return, will evaluate on the same criteria but then call an array value instead of an object.

A third way of using optional chaining is invoking functions but passing only if the object exists.

Let's say our shippingAddress object has a function called `calculateShippingCost()`, and we want to invoke that, but as you saw, sometimes, we don't even have the shipping address object.

Yes, that's another excellent use case where optional chaining comes to our rescue.

```js
user.shippingAddress?.calculateShippingCost();
// undefined
```

That, in turn, will return undefined again since the shipping address doesn't even exist.

## Returning something better than undefined

Well, it's cool that we won't get errors anymore by calling properties of non-existing objects. Still, we rarely want to print out 'undefined', so let's see how we can use the JavaScript nullish coalescing operator to fix this issue.

The nullish coalescing operator (??) is a logical operator for those who don't know.

It uses the following syntax:

```js
evaluation ?? fallback;
```

Let's see it in action:

```js
console.log(user.shippingAddress?.calculateShippingCost() ?? 'Free shipping');
```

What happens here is that we print out the calculated shipping function if the shipping address exists. However, if it doesn't, we return the fallback, which in this case prints out "Free shipping".

That's super helpful, right!

So what we learned today is that we can use optional chaining in JavaScript to evaluate if objects exist and assess not them ourselves.
As well as a way to return something more valuable than undefined.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
