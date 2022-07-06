---
layout: ../../layouts/Post.astro
title: 'JavaScript check if property exists in Object'
metaTitle: 'JavaScript check if property exists in Object'
metaDesc: 'How to check if a property exists in a Object with JavaScript'
ogImage: /images/05-07-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/e3a59344-1667-4edf-9366-e60fb3ae5900
date: 2022-07-05T03:00:00.000Z
tags:
  - javascript
---

You might need to determine if an object holds a particular property.

Let's say we have a user object. Optionally the email property can be set. If not, we want to show a form so the user can fill out their email.

How can we determine if this field exists?

```js
const userOne = {
  name: 'Chris Bongers',
  email: 'info@daily-dev-tips.com',
};

const userTwo = {
  name: 'John Do',
};
```

And to answer that, there are several ways of doing that. Let's take a look at the three most common ones.

## Using hasOwnProperty to see if an object has a property

By using `hasOwnProperty` we can evaluate if an object has `Own` property.

Let's see how it would work on our example data.

```js
console.log(userOne.hasOwnProperty('email'));
// Returns: true

console.log(userTwo.hasOwnProperty('email'));
// Returns: false
```

That is perfect. But there is a catch to using this method. It only works for `Own` properties, not extended object properties.

As you may know, objects come with the `toString` method, and if we try to check if that exists, it will return false. (While this does exist)

```js
console.log(userOne.toString());
// Returns: [object Object]

console.log(userOne.hasOwnProperty('toString'));
// Returns false
```

## Using in to see if an object has a property

Another more explicit way of checking if an object has a property is using `in`.

This one can check in own and inherited properties.

```js
console.log('email' in userOne);
// Returns: true

console.log('email' in userTwo);
// Returns: false

console.log('toString' in userOne);
// Returns: true
```

## Using undefined to see if an object has a property

The last method is to use an undefined check. This method will work for omitted properties but can cause you headaches if the property exists but has an undefined value.

```js
console.log(userOne.email !== undefined);
// Returns: true

console.log(userTwo.email !== undefined);
// Returns: false

console.log(userOne.toString !== undefined);
// Returns: true
```

Now let's see what happens in the following example:

```js
const userThree = {
  name: 'Steve Stevenson',
  email: undefined,
};

console.log(userThree.email !== undefined);
// Returns: false
```

The check is acceptable, but it's not what we might be looking for.

## Conclusion

When trying to find out if an object holds a particular property, we need to consider how safe we want to be.

I would generally not recommend using the `undefined` check.

If you only evaluate `Own` properties, the `hasOwnProperty` is a solid solution.

But you might want to be on the safe side and use the `in` check to determine if an object has a property.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
