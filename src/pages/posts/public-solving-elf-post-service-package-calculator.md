---
layout: ../../layouts/Post.astro
title: 'Public Solving: Elf Post Service package calculator'
metaTitle: 'Public Solving: Elf Post Service package calculator'
metaDesc: 'How to see if an item fits a box in JavaScript'
image: /images/15-12-2021.jpg
date: 2021-12-15T03:00:00.000Z
tags:
  - devadvent
  - javascript
---

In today's puzzle, we get asked by Santa himself to optimize their package performance.

[You can find the puzzle here](https://github.com/devadvent/puzzle-4).

Great idea, since Amazon seems to suck at this!
And it's wasteful to use big boxes when having smaller ones available.

So, it's up to us to find the best fit package for each item we are packing.
Luckily, we only have to work with one item per box query.
However, the item could be rotated, making it more complicated.

## Thinking out the solution

We must loop over each box to determine if an item fits in a box and find the smallest box.

The boxes are already in order of size, so we don't need to introduce a new function for this.

My first thought was actually to check if each element is equal to or smaller than the box like so:

```js
item.width <= box.width &&
  item.length <= box.width &&
  item.height <= box.height;
```

This would partially work. Sometimes, we would still get a bigger box, which means the item could be rotated inside the box to fit!

We could manually write out to check for each possible combination, but that would get very difficult to understand.

## Writing the final solution

So my new idea is to calculate the item's surface and the box surface.

Let's create a function for that.

```js
const calculateSurface = (item) => {
  return item.length * item.width * item.height;
};
```

This function will retrieve an item (box or item) and calculate the surface.

Then we can work on the `selectBox` function. The easiest way to handle this is to use the [`find` method](https://daily-dev-tips.com/posts/javascript-find-function/), which will stop the moment it has a hit.

```js
return boxes.find((box) => {
  return calculateSurface(item) <= calculateSurface(box);
});
```

This will return if the item surface is smaller than the box surface.

However, there is a catch here!

Let's take this item: `3x3x80` has a surface of `720`.
And our tool states it fits in a petit box with the following dimensions: `20x20x10`, which gives a surface of `4000`.

But there is no way this will fit, as the 80 is way bigger than the 20...

That means we have to introduce another check to find the biggest side of an item and ensure it doesn't exceed the biggest side of the box.

Let's create that function.

```js
const biggestSide = (item) => {
  return Math.max(...Object.values(item).filter(Number));
};
```

Bear with me. A lot is going on here.

First, we use `Object.values` to get all the values of the item we pass in.

Then we filter out only the numbers. This will remove the strings for the box.

Then we spread the values into a single array and retrieve the highest number using the `Math.max` function.

All we have to do is introduce this as the second option for our find method.

```js
return boxes.find((box) => {
  return (
    calculateSurface(item) <= calculateSurface(box) &&
    biggestSide(item) <= biggestSide(box)
  );
});
```

Let's give it a test run and see what happens.

![All tests succeed](https://cdn.hashnode.com/res/hashnode/image/upload/v1638617806132/zkzZtqRFh.png)

We did it!

Let me know what you think of this solution or what you would do differently.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
