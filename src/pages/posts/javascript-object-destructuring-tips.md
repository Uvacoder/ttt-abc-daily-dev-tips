---
layout: ../../layouts/Post.astro
title: 'JavaScript object destructuring tips'
metaTitle: 'JavaScript object destructuring tips'
metaDesc: 'What is object destructuring in JavaScript and how can I use it'
ogImage: /images/24-07-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/5ad353bf-a5b2-498d-ec08-5d478a4b0900
date: 2022-07-24T03:00:00.000Z
tags:
  - javascript
---

Regarding JavaScript, we get an extremely useful way of extracting properties from objects.

> Note: Destructuring also works on arrays, but let's focus on objects for this one

Let's say we have a user object and want to extract the properties of individual variables.

```js
const user = {
  name: 'Chris',
  age: 33,
};
```

Before ES2015, we would have to assign these variables by explicitly assigning them like so:

```js
var name = user.name;
```

This still works in modern JavaScript. However, it can be optimized.
We can omit the double use binding of the `name` properties and destructure the properties like this.

```js
const { name, age } = user;

console.log(name);
// Chris

console.log(age);
// 33
```

Wait, what?
Pretty much magic, right? We don't have to double name the variables and can assign them directly to their variables.

## Destructure and keep a rest object

Let's say you have an object with multiple fields. You want to extract one of the fields and keep track of whatever is left.

You might think we need to assign all the remaining properties, but this is built-in by using the spread operator.

```js
const user = {
  name: 'Chris',
  age: 33,
  username: 'DailyDevTips',
};

const { name, ...rest } = user;

console.log(name);
// Chris

console.log(rest);
// { age: 33, username: 'DailyDevTips' }
```

## Destructure nested object properties

Quite often, your object will have multiple layers.
With destructuring, we can also target nested properties.

```js
const user = {
  name: 'Chris',
  age: 33,
  username: 'DailyDevTips',
  address: {
    country: 'South Africa',
    postalCode: '7700',
  },
};
```

Let's take the above example. How can we extract the country in one go?

```js
const {
  address: { country },
} = user;

console.log(country);
// South Africa
```

But what happens if we want to extract the whole address object and the country?

In the above example, if we try to log `address` it will state: `ReferenceError: address is not defined`.

However we can simply pass another reference in the destructuring like this:

```js
const {
  address: { country },
  address,
} = user;

console.log(address);
// { country: 'South Africa', postalCode: '7700' }

console.log(country);
// South Africa
```

## Destructure with a different name

Perhaps you want to destructure some properties under a different name.

Let's take the example above and state that we want to receive the address object named `shippingAddress`.

We can use the semicolon `:` divider to address a new name.

```js
const { address: shippingAddress } = user;

console.log(shippingAddress);
// { country: 'South Africa', postalCode: '7700' }
```

This is a great way to create variables that you can directly use.

## Destructure potentially empty values

Let's retake our user object, we already destructured the age, but I forgot to mention this is an optional parameter.

Some users might have chosen not to set it. In that case, we can fall back on a default value.

> Note: This is a bit weird for the age property, so see this as an example

```js
const user = {
  name: 'Chris',
  age: 33,
};

const { age } = user;

console.log(age);
// 33
```

That works great, but let's see a user that doesn't have the age property.

```js
const user = {
  name: 'Yaatree',
};

const { age } = user;

console.log(age);
// undefined
```

We can destructure it with a value if we want to set a default age.

```js
const { age = 25 } = user;

console.log(age);
// 25
```

## Destructure inside a loop

All the above examples work based on flat objects, but a lot of the time, you'll have an array of users.

```js
const users = [
  {
    name: 'Chris',
    age: 33,
  },
  {
    name: 'Yaatree',
    age: 2,
  },
];
```

We can loop over these items and destructure them inside the loop.

```js
for (let { name, age } of users) {
  console.log(`User: ${name} is ${age} years old 🎉`);
}

// 'User: Chris is 33 years old 🎉'
// 'User: Yaatree is 2 years old 🎉'
```

## Dynamic name destructuring

What happens when we only know the variable we want to destructure at runtime?

Let's say a user clicks a button that allows them to extract a random property from the object.

The handler would have the following property.

```js
const getProperty = 'name'; // or 'age'

// How do we get this from the user now?
```

To use this, we can use the square bracket annotation.

```js
const { [getProperty]: returnValue } = user;

console.log(returnValue);
// Chris
```

## Destructure from a function

Let's say we have a function that returns an object.

```js
const getProduct = () => {
  return {
    id: 1,
    name: 'Macbook',
  };
};
```

If we call it by default, it will look like this.

```js
const product = getProduct();

console.log(product);
// { id: 1, name: 'Macbook' }
```

However, we only want the id from this function. Can we do that?

```js
const { id } = getProduct();

console.log(id);
// 1
```

Yes, we can. We can simply destructure the return value and assign the property we need.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
