---
layout: ../../layouts/Post.astro
title: "Public Solving: Creating random candy bags"
metaTitle: "Public Solving: Creating random candy bags"
metaDesc: 'Generating random candy bags with unique candies in JavaScript'
image: /images/16-12-2021.jpg
date: 2021-12-16T03:00:00.000Z
tags:
  - devadvent
  - javascript
---
For today's puzzle, we have to generate random candy bags.
Santa has asked us to create bags of candy. However, there are some rules.

[You can find the puzzle here](https://github.com/devadvent/puzzle-5).

Our program should accept and the number of bags and number of candies.
It should create a bag with a unique ID and the amount of candy. However, each candy should be unique.

Some side rules are:
- If there are no parameters, return an empty array
- If the candy count is higher than the amount of candy we have, throw an error.
- If the candy count is not defined, it should default to 3

## Thinking about the solution

My main thinking is about making sure the candies are random and unique.

For this, I'm thinking we should shuffle the candies in each loop and return a slice of this shuffled array that should give us enough "random" for this assignment.

As for the unique bag ID's we can simply use a package, and I'll be using the [UUID package](https://www.npmjs.com/package/uuid).

To install it, run the following command.

```bash
npm i uuid
```

Then let's head over to create our script to help Santa!

## Generating random candy bags

First of all, I had to import the candies to the script, which I do here:

```js
import candies from '../data/candy.js';
```

Then let's import the UUID so we can use it later on:

```js
import { v4 as uuidv4 } from 'uuid';
```

A rule set to default the candy count to three if it was not provided, so I decided to include it in the parameters.

```js
export const generateCandyBags = (bagCount, candyCount = 3) => {}
```

The first thing we should fail on is the check if the bag count is null. In that case, we should return an empty array.

```js
if (!bagCount) {
	return [];
}
```

The next check is to see if the candy count exceeds the maximum amount of candy types we have.

```js
if (candyCount > candies.length) {
	throw 'TOO_MUCH_CANDY_PER_BAG';
}
```

This will throw an error if the candy count is larger than the candy array length.

Now that we validated the errors, we must create a loop for each bag in our `bagCount` variable.

Again, I've decided to use the [`map` method](https://daily-dev-tips.com/posts/javascript-map-method/) and create an empty array to map over.

```js
return [...Array(bagCount)].map((_, i) => {
	// Todo
});
```

Inside we can return an object that includes an id and our candies.

```js
return [...Array(bagCount)].map((_, i) => {
	return {
	  id: uuidv4(),
	  candies: [],
	};
});
```

As you can see, we use the `uuidv4` function to generate a unique random id.

Now we need to randomly shuffle the candies on each of the bags.

```js
const randomizeCandies = candies.sort(() => 0.5 - Math.random());
```

This will sort the candies in a randomized order.

Once we shuffled our candies, we can simply use the `slice` function to return the amount we need.
Making the complete function look like this.

```js
return [...Array(bagCount)].map((_, i) => {
	const randomizeCandies = candies.sort(() => 0.5 - Math.random());
	return {
	  id: uuidv4(),
	  candies: randomizeCandies.slice(0, candyCount),
	};
});
```

Let's try to run the test and see if we made it work:

![Test going green](https://cdn.hashnode.com/res/hashnode/image/upload/v1638706005818/n_8fQkIVr.png)

Yes!

Random candy bags for everyone!
Do let me know what your solution would be or what you would do differently. 🍫

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
