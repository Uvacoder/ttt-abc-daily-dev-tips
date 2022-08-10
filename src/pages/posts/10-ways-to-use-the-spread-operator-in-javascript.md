---
layout: ../../layouts/Post.astro
title: '10 ways to use the spread operator in JavaScript'
metaTitle: '10 ways to use the spread operator in JavaScript'
metaDesc: 'Here are 10 ways to use the spread operator in JavaScript'
image: /images/12-01-2021.jpg
date: 2021-01-12T03:00:00.000Z
tags:
  - javascript
---

I'm sure you've heard of the spread operator in JavaScript (...), it's one of the most powerful operators JavaScript offers and can solve many problems like the ten you will find below.

The spread operator can be used to solve multiple problems you might encounter in JavaScript.
This article will teach you how to do the following operations using the spread operator.

In the basic form, the spread operator looks like three dots.

```js
[...arr];
```

- [Copy an array](#heading-copy-an-array)
- [Combine arrays](#heading-combine-arrays)
- [Add an item to an array](#heading-add-an-item-to-an-array)
- [Adding a property to an object](#heading-adding-a-property-to-an-object)
- [Use Math() functions](<#heading-use-math()-functions>)
- [Spread array as function arguments](#heading-spread-array-as-function-arguments)
- [Pass unlimited arguments to a function](#heading-pass-unlimited-arguments-to-a-function)
- [Converting a nodeList into an array](#heading-converting-a-nodelist-into-an-array)
- [Destructuring an object](#heading-destructuring-an-object)
- [Exploding a string](#heading-exploding-a-string)

## Copy an array

We can use the spread operator to copy an array. This is, however, still a [shallow clone](https://daily-dev-tips.com/posts/be-aware-when-cloning-objects-in-javascript/).

Let's say we have an array called `arr1`, and we want to make a clone of this array called `arr2`.

```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr2);
// [ 1, 2, 3 ]
```

So this way, we can copy a basic array, but be aware it doesn't work for multi-level arrays or arrays with dates or functions.

![Using the spread operator to copy an array](https://cdn.hashnode.com/res/hashnode/image/upload/v1609826955798/32_DiiYvx.png)

> Note: Read more about [deep-cloning in JavaScript](https://daily-dev-tips.com/posts/be-aware-when-cloning-objects-in-javascript/)

## Combine arrays

Let's say you have two arrays that you want to merge into one, this happens quite often, and we could use the `concat` method.
The spread operator makes this way easier, as you can see below.

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
// [ 1, 2, 3, 4, 5, 6 ]
```

So now the two arrays (arr1, arr2) are combined into `arr3`.

You can state which one should come first by arranging them differently.

```js
const arr3 = [...arr2, ...arr1];
console.log(arr3);
[4, 5, 6, 1, 2, 3];
```

This is a good way to combine arrays. The amount you can add is infinite, so you can keep adding spread operators.

```js
const output = [...arr1, ...arr2, ...arr3, ...arr4];
```

![Combining arrays using the spread operator](https://cdn.hashnode.com/res/hashnode/image/upload/v1609827243828/kD-xrycL_.png)

## Add an item to an array

Let's say you have an array but need to add one or multiple items.
You can leverage the Array.push, but the spread operator will also work fine.

```js
let arr1 = ['this', 'is', 'an'];
arr1 = [...arr1, 'array'];
console.log(arr1);
// [ 'this', 'is', 'an', 'array' ]
```

As you can see, this will add the new string to the end of our existing array.

You can even pass multiple strings.

```js
arr1 = [...arr1, 'array', 'cool'];
console.log(arr1);
// [ 'this', 'is', 'an', 'array', 'cool' ]
```

![Add an item to an array](https://cdn.hashnode.com/res/hashnode/image/upload/v1609828870987/xdkP2HxoT.png)

## Adding a property to an object

Let's say you have an object of a user, but it's missing an age property.

```js
const user = {
  firstname: 'Chris',
  lastname: 'Bongers',
};
```

We can again leverage the spread operator to add the age to this user object.

```js
const output = { ...user, age: 31 };
```

What happens above is that we spread the user object and add a new property called `age` to it with the value of `31`.

The whole setup will look like this.

```js
const user = {
  firstname: 'Chris',
  lastname: 'Bongers',
};
const output = { ...user, age: 31 };
console.log(output);
// { firstname: 'Chris', lastname: 'Bongers', age: 31 }
```

![Adding a property to an object using the spread operator](https://cdn.hashnode.com/res/hashnode/image/upload/v1609827475226/IXuaPjzrn.png)

## Use Math() functions

Let's say you have an array of numbers and want to get the lowest, highest, or the sum of these numbers.

That's another excellent option for the spread operator to shine.

Our input array will look like this

```js
const arr1 = [1, -1, 0, 5, 3];
```

To get the lowest number, we can use the spread operator and the `Math.min method`.

```js
const arr1 = [1, -1, 0, 5, 3];
const min = Math.min(...arr1);
console.log(min);
// -1
```

This will output `-1` because that's the lowest number. Try and remove the -1 from the array. You'll see the lowest will become `0`.

To get the highest number we can use the `Math.max` method.

```js
const arr1 = [1, -1, 0, 5, 3];
const max = Math.max(...arr1);
console.log(max);
// 5
```

As you can see, the max will return `5`. If we remove the `5` it will return `3`.

If you're curious to see what happens if we don't spread:

```js
const arr1 = [1, -1, 0, 5, 3];
const max = Math.max(arr1);
console.log(max);
// NaN
```

This will return `NaN` because JavaScript doesn't know what to max on an array.

![Using math functions by leveraging the spread operator](https://cdn.hashnode.com/res/hashnode/image/upload/v1609827985294/apuV5AG78.png)

## Spread array as function arguments

Let's say we have a function that takes three arguments.

```js
const myFunc(x1, x2, x3) => {
  console.log(x1);
  console.log(x2);
  console.log(x3);
}
```

We could call this function in the following manner:

```js
myFunc(1, 2, 3);
```

But what happens if we have an array that we want to pass.

```js
const arr1 = [1, 2, 3];
```

We can now use the spread operator to spread this array into our function.

```js
myFunc(...arr1);
// 1
// 2
// 3
```

As you can see, we spread the array into three separate arguments that we pass to the function.

The full call will look like this:

```js
const myFunc = (x1, x2, x3) => {
  console.log(x1);
  console.log(x2);
  console.log(x3);
};
const arr1 = [1, 2, 3];
myFunc(...arr1);
// 1
// 2
// 3
```

![Using the spread operator to pass an array as arguments](https://cdn.hashnode.com/res/hashnode/image/upload/v1609828315211/BzSpDCZmV.png)

## Pass unlimited arguments to a function

Let's say you have a function that takes unlimited arguments. Perhaps they are properties you want to loop over dynamically.

```js
const myFunc = (...args) => {
  console.log(args);
};
```

We see the following happening if we call this function with multiple arguments.

```js
myFunc(1, 'a', new Date());
```

It will return the following:

```js
[
  1,
  'a',
  Date {
    __proto__: Date {}
  }
]
```

We are then able to loop over the arguments dynamically.

![Accepting unlimited arguments using the spread in a function](https://cdn.hashnode.com/res/hashnode/image/upload/v1609828602736/3w02JOPau.png)

## Converting a nodeList into an array

Let's say you used the spread operator to get all the divs on your page. These will come as a `nodeList`.
We can then leverage the spread operator to convert this `nodeList` into an array.

```js
const el = [...document.querySelectorAll('div')];
console.log(el);
// (3) [div, div, div]
```

Here you can see we got three divs from the dom.

We can now easily loop over these elements because they are in an array format.

```js
const el = [...document.querySelectorAll('div')];
el.forEach((item) => {
  console.log(item);
});
// <div></div>
// <div></div>
// <div></div>
```

> Note: If you want to learn more about [looping over nodeList results](https://daily-dev-tips.com/posts/javascript-loop-queryselectorall-results/) check out this article.

![Convert nodeList results into an array](https://cdn.hashnode.com/res/hashnode/image/upload/v1609829269968/X9oetzfxp.png)

## Destructuring an object

If you're familiar with destructuring objects, you might find the spread operator to be handy to do this.

Let's say we have an object for the user again.

```js
const user = {
  firstname: 'Chris',
  lastname: 'Bongers',
  age: 31,
};
```

We can now destructure this as a single variable using the spread operator.

```js
const { firstname, ...rest } = user;
console.log(firstname);
console.log(rest);
// 'Chris'
// { lastname: 'Bongers', age: 31 }
```

As you can see, we parsed the user object and destructured the firstname into the firstname variable and the rest of the object into the `rest` variable.

![Destructure objects with spread](https://cdn.hashnode.com/res/hashnode/image/upload/v1609829601125/puXvkTp40.png)

## Exploding a string

The last use-case for the spread operator is to explode a string.

Let's say we have the following string.

```js
const str = 'Hello';
```

If we then use the spread operator on this string, we will get an array of letters.

```js
const str = 'Hello';
const arr = [...str];
console.log(arr);
// [ 'H', 'e', 'l', 'l', 'o' ]
```

There you go, an array of letters.

![Exploding strings with the spread operator](https://cdn.hashnode.com/res/hashnode/image/upload/v1609829759193/YNwRG8q9q.png)

I also live-streamed how I'm writing this article. You can view the recording on Youtube:

<iframe width="560" height="315" src="https://www.youtube.com/embed/-B4BSXhUx4k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
