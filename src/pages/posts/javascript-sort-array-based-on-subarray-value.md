---
layout: ../../layouts/Post.astro
title: 'JavaScript sort array based on subarray value'
metaTitle: 'JavaScript sort array based on subarray value'
metaDesc: 'How to sort an array of array based on sub value in JavaScript'
ogImage: /images/18-07-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/5cba1d92-ffa0-4db1-79bf-4e688f957a00
date: 2022-07-18T03:00:00.000Z
tags:
  - javascript
---

Now that we had a look at finding the min/max from an array of arrays, let's see how we can go a step further and sort all the items based on a sub-array value.

To sketch the problem, let's say we have the following array of users.

```js
const users = [
  ['Nicole', 31],
  ['Chris', 33],
  ['Sanne', 1],
  ['Yaatree', 2],
];
```

The users' array contains sub-arrays representing a user's first name and age.
How can we now sort this array based on the user's age?

## Sorting an array by sub-array value

We can actually use the native `sort` method to achieve our goal of sorting this array.

In its most basic form, you can call if on an array, and it will try to sort them based on the contents.
Meaning when the array contains strings, it will sort alphabetically.

It would look like this:

```js
console.log(['b', 'c', 'a'].sort());

// [ 'a', 'b', 'c' ]
```

However, it's a bit more complicated in our case as we have an array of arrays.
Calling sort would take the first array element as its sorting method, so we would end up sorting based on the name.

```js
console.log(users.sort());

// Returns:
// [
//  [ 'Chris', 33 ],
//  [ 'Nicole', 31 ],
//  [ 'Sanne', 1 ],
//  [ 'Yaatree', 2 ]
// ]
```

This is great if we want to sort on the first name, but we want to sort on the age value.

This is where the extra powers of the sort method come in.
It can take arguments we can use to enhance our sorting.

```js
users.sort((a, b) => {
  // Do something with a and b
});
```

The above example code is the syntax we can use.
It takes a first and second element for comparison.

Since we are sorting on numbers, they even give us a quick option to sort them.

```js
users.sort((a, b) => {
  return a[1] - b[1];
});

// Returns:
// [
//  [ 'Sanne', 1 ],
//  [ 'Yaatree', 2 ],
//  [ 'Nicole', 31 ],
//  [ 'Chris', 33 ]
// ]
```

We can also change the order by switching the a and b comparison around.

```js
users.sort((a, b) => {
  return b[1] - a[1];
});

// Returns:
// [
//  [ 'Chris', 33 ],
//  [ 'Nicole', 31 ],
//  [ 'Yaatree', 2 ],
//  [ 'Sanne', 1 ]
// ]
```

And to top it off, we can write this as sort hand functions to make it super clean.

```js
users.sort((a, b) => a[1] - b[1]));
```

And that's it. We learned how to sort an array based on a sub-array value.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
