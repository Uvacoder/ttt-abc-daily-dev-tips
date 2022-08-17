---
layout: ../../layouts/Post.astro
title: 'JavaScript find min/max from array of objects'
metaTitle: 'JavaScript find min/max from array of objects'
metaDesc: 'How to find the min or max value from an array of objects'
ogImage: /images/17-07-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/1175c07f-870c-4343-a52b-988575671100
date: 2022-07-17T03:00:00.000Z
tags:
  - javascript
---

In the previous article, we looked at [finding the min/max from an array of arrays](https://daily-dev-tips.com/posts/javascript-find-min-max-from-array-of-arrays/). Let's see how we can do the same with an array of objects.

Our array will look like this:

```js
const users = [
  { name: 'Nicole', age: 31 },
  { name: 'Chris', age: 33 },
  { name: 'Yaatree', age: 2 },
  { name: 'Sanne', age: 29 },
];
```

With this array, we want to find the highest and the lowest age users.
But not only return the age but the whole object.

Let's see how we can achieve that.

## Finding the highest value from an array of objects

We'll use the [`reduce` method](https://daily-dev-tips.com/posts/javascript-reduce-method/) to extract one item from the array. The cool thing about the reduce is that the initial value is optional, so that we can omit it for now.

```js
const highest = users.reduce((previous, current) => {
  return current.age > previous.age ? current : previous;
});

console.log('highest', highest);
// { name: 'Chris', age: 33 }
```

Within this reduce method, we loop over each of our items. For each item, we evaluate if the current item's age property is higher than we previously had.
If that is the case, we will return the new one. Else we keep returning the old one.

In our loop, it works like this:

- current = Nicole nothing exists, so Nicole becomes the highest
- current = Chris, Chris's age is higher than Nicole's, so Chris will become the returned value
- current = Yaatree, Chris is higher, so keep returning Chris as the highest
- current = Sanne, Chris is still higher, so keep Chris

We are ending in Chris being the highest value.

## Finding the lowest value from an array of objects

We can use the same approach to find the person with the lowest age.

For that to happen, we must transform the `<` arrow into a `>` arrow.

```js
const lowest = users.reduce((previous, current) => {
  return current.age < previous.age ? current : previous;
});

console.log('lowest', lowest);
// { name: 'Yaatree', age: 2 }
```

Again to explain it more verbally, this is the flow of action:

- current = Nicole, nothing exists, so Nicole becomes the lowest
- current = Chris, Nicole is lower, so keep returning Nicole as the lowest
- current = Yaatree, Yaatree is lower so return Yaatree
- current = Sanne, Yaatree is lower so return Yaatree

The result is that we return Yaatree as the lowest.

## Writing the shorthand functions

We are very explicit with the above examples by using the curly brackets and returning the object.

However, seeing we only have one line, we can write it as the shorthand function like this.

```js
const highest = users.reduce((prev, cur) => (cur.age > prev.age ? cur : prev));

const lowest = users.reduce((prev, cur) => (cur.age < prev.age ? cur : prev));
```

Way shorter, right, but it takes some of the readability in one go.

## Dealing with an empty array

What happens if we pass an empty array, though?

We will get shown the following error: `TypeError: Reduce of empty array with no initial value`.

This happens because we omitted the initial value of the reduce.
To fix that, we can bring back the initial value.

In our case, we would want to set that as `null` so that it would not return an empty object.

```js
const users = [];

const highest = users.reduce((previous, current) => {
  return previous?.age > current.age ? previous : current;
}, null);

console.log('highest', highest);
// null

// Or the shorthand:

const highest = users.reduce(
  (prev, cur) => (prev?.age > cur.age ? prev : cur),
  null
);
```

You might also have spotted that for this to work, we had to swap around the previous/current check.
This is needed so that the other value is always the current.

I created a CodePen demo where you can have a play with finding the min/max from an array of objects.

<p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="JjLGmGQ" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/JjLGmGQ">
  JavaScript find min/max from array of arrays</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
