---
layout: ../../layouts/Post.astro
title: "Public Solving: Secret Santa in JavaScript"
metaTitle: "Public Solving: Secret Santa in JavaScript"
metaDesc: 'How to create a secret santa script in Vanilla JavaScript'
image: /images/19-12-2021.jpg
date: 2021-12-19T03:00:00.000Z
tags:
  - devadvent
  - javascript
---
The elves want us to make a secret Santa script for today's tasks.

If you are unaware of this, it's basically a system where we get provided a list of names, and we must assign random people to each other.
These people must then buy gifts for each other.

They have given us some rules to work with:

- Everyone should have a secret Santa
- You cannot be your own secret Santa
- When there are duplicate names, we should throw an error
- The secret Santa's should be randomized 

[You can find the puzzle here.](https://github.com/devadvent/puzzle-8)

## Thinking about the solution

This is actually a pretty hard one, and it took me a while to get it completely working in order.

The main issue is that it needs to be randomized.

Let's take some examples.

We have the following names: `Bob`, `Anna`, `Jim`.

When we run the script, we start with `Bob`, his secret Santa will be `Anna`.
Then we get to `Anna`, and let's just assign `Bob`.

But wait, now we can't assign anyone to `Jim`...

As you can see, it gets a bit complicated.
But no worries, we'll sort it out to be bulletproof.

## Creating secret Santa in JavaScript

Let's start with the most straightforward task. Luckily, we can throw an error if there are duplicate names in the name array.

```js
if (hasDuplicates(names)) throw Error('DUPLICATE_NAMES');
```

This `hasDuplicates` function is provided by the puzzle, but it looks like this:

```js
export const hasDuplicates = (arr) => {
  return new Set(arr).size !== arr.length;
};
```

Then we need to loop over all the names, we could opt for the [`map` method](https://daily-dev-tips.com/posts/javascript-map-method/), but this will bring one edge case (more later).

So I decided to go with the [`reduce` method](https://daily-dev-tips.com/posts/javascript-reduce-method/) instead.

```js
return names.reduce((acc, name) => {
	// Todo
	return acc;
}, []);
```

This is what the basic reduce looks like. We get the `acc` variable which is basically the previous value.
And initially, the default value, which we set to `[]`.

This is already great, but we want to keep track of our assigned names.

I decided to create a new variable outside the function to randomly sort the names.

```js
const secretSantaNames = [...names].sort(() => 0.5 - Math.random());
```


Then we want to retrieve one of those names, but it cannot be our own name.

For this, we simply use the [`sort` method](https://daily-dev-tips.com/posts/javascript-sort-array-of-objects-by-value/) and return the first hit.

```js
let secretSanta = secretSantaNames.filter(
  (secretSantaName) => secretSantaName !== name
)[0];
```
 
The filter makes sure we don't match the user's reduce loop name.
 
Then we need to remove this name from our array of possible secret Santa's for the next name.
 
This is an excellent opportunity for the [`splice` method](https://daily-dev-tips.com/posts/vanilla-javascript-slice-vs-splice/).
 
```js
secretSantaNames.splice(
  secretSantaNames.findIndex((i) => i === secretSanta),
  1
);
```
 
> Note: the splice method manipulates the original array!

And then, we can modify the `acc` variable and push this option match to it.

```js
acc.push({
  name,
  secretSanta,
});
```
 
Right, almost there.
However, there is a slight edge case where we could still have one name not assigned as we described in the problem.

To solve this, I decided to check if our `secretSanta` is undefined and swap this one with the first match.

> Note: Remember I said the reduce would be easier than map. This is why.

```js
if (secretSanta === undefined) {
  // Edge case where last person was assigned to their own name
  // Simply swap with the first one.
  secretSanta = acc[0].secretSanta;
  acc[0].secretSanta = name;
}
```
 
This function will only fire if the secret Santa is undefined and simply swap this one with the first hit.
This will also work, as we only have one name left.

Let's try it out by running the tests.

![Test going green](https://cdn.hashnode.com/res/hashnode/image/upload/v1638979472708/FxHJVlt38.png)

And yes, we did it!

I would love to hear what you think of my approach or what you would do differently.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
