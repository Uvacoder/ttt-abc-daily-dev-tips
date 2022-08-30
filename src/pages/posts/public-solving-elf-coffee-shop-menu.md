---
layout: ../../layouts/Post.astro
title: 'Public Solving: Elf Coffee Shop menu'
metaTitle: 'Public Solving: Elf Coffee Shop menu'
metaDesc: 'Solving the dev advent calendar in public, starting with this sort and map task'
image: /images/13-12-2021.jpg
date: 2021-12-13T03:00:00.000Z
tags:
  - devadvent
  - javascript
---

By now, this will be a couple of days past the date you could submit it, so I think it's safe to start this series.

I've been participating in [Marc Backes](https://twitter.com/themarcba) his unique [Dev Advent Calendar](https://github.com/devadvent/readme).
Not to win the prizes, but to try and solve the puzzles.

The first puzzle I did was on day 02.
The query is to help the elves solve a new menu because they have new drinks and even introduce flavors!

## Describing the problem

After cloning the code and checking what we have to work with, I've noticed we got a helper function called: `createMenu`. It gets two parameters in the form of `drinks`, and `flavors`.

They look like this:

```js
const drinks = [
  { name: 'Latte', price: 3 },
  { name: 'Macchiato', price: 3.5 },
  { name: 'Cappuccino', price: 4 },
  { name: 'Hot Chocolate', price: 4.5 },
];
const flavors = [
  { name: 'Ginerbread', price: 1.5 },
  { name: 'Cinnamon', price: 1 },
  { name: 'Peppermint', price: 0.5 },
  { name: 'Chestnuts', price: 1.25 },
  { name: 'Pumpkin Spice', price: 1.75 },
  { name: 'Apple Crisp', price: 2 },
  { name: 'Mrs. Claus Special', price: 3 },
];
```

The desired output for this challenge is an array of each option on the menu.

Each drink can have the flavors + an undefined one, which will be the "normal" version.
The price is the price of the drink + the price of the flavor.

The output should also be sorted by drink name (a-z) and price (lowest to highest).

The output should be in this format:

```json
[
  { "drink": "Cappuccino", "flavor": undefined, "price": 4 },
  { "drink": "Cappuccino", "flavor": "Peppermint", "price": 4.5 },
  { "drink": "Cappuccino", "flavor": "Cinnamon", "price": 5 }
]
```

Right, let's get to it!

## Solving the puzzle

My first thought was: this is a perfect option for the [JavaScript map function](https://daily-dev-tips.com/posts/python-map-function/).

I've started by wrapping the return in the drinks map like so:

```js
return drinks.map((drink) => {
  // drink available
});
```

This will loop over each drink.
Then we need to loop over each of the flavors inside this map.
Again an excellent opportunity to use the map.

```js
return drinks.map((drink) => {
  return flavors.map((flavor) => {
    // flavor
  });
});
```

Then we can return the object we want.
This object should look like this:

```js
{ drink: 'Hot Chocolate', flavor: 'Gingerbread', price: 5.5 },
```

The price is the sum of the drink price and the flavor price.

```js
return drinks.map((drink) => {
  return flavors.map((flavor) => {
    return {
      drink: drink.name,
      flavor: flavor.name,
      price: drink.price + flavor.price,
    };
  });
});
```

However, if we run this, we get a weird array like so:

```json
[
  [{ "drink": "Latte", "flavor": "Ginerbread", "price": 4.5 }],
  [{ "drink": "Macchiato", "flavor": "Ginerbread", "price": 5 }]
]
```

Hmm, not exactly what we want, but we can quickly fix this, by changing the top map, to a `flatMap`. This makes sure it's all on one level.

```js
return drinks.flatMap((drink) => {
  return flavors.map((flavor) => {
    return {
      drink: drink.name,
      flavor: flavor.name,
      price: drink.price + flavor.price,
    };
  });
});
```

That's better. Everything is now in one array.
However, we are missing the "basic" drink option!

My solution is to add an undefined flavor to the flavor array.
I used `unshift` to add it as the first option in the array.

```js
flavors.unshift({ name: undefined, price: 0 });
```

If we run the script, the output is almost correct. We need a way to sort everything.

Let's start by using the [`sort` function](https://daily-dev-tips.com/posts/javascript-sort-array-of-objects-by-value/) to sort on the name of the drink.

```js
return drinks
  .flatMap((drink) => {
    return flavors.map((flavor) => {
      return {
        drink: drink.name,
        flavor: flavor.name,
        price: drink.price + flavor.price,
      };
    });
  })
  .sort((a, b) => (a.drink < b.drink ? -1 : 1));
```

This is the shorthand function for the sort option, ensuring the array is sorted based on the `drink` property which resembles the name.

Running the code shows that my favorite coffee, the Cappuccino, is now number one, so that's fine, but the prices are still scrambled!

No worries, we can check if the drink name is already correct. We should order based on the price.

If we would write it out completely, it looks like this:

```js
.sort((a, b) => {
  if (a.drink === b.drink) {
  return a.price < b.price ? -1 : 1;
  } else {
  return a.drink < b.drink ? -1 : 1;
  }
});
```

Using the inline ternary operator, we can also make this a bit smaller.

```js
.sort((a, b) =>
  a.drink > b.drink
    ? 1
    : a.drink === b.drink
    ? a.price > b.price
      ? 1
      : -1
    : -1
);
```

Some people like the first one better, some the second.
I would agree the entirely written one is easier to read in this case.

## The moment of truth

Now it's time to put it to the test.

I've decided to run the `npm test` to see if I pass the test.

🥁🥁🥁

![Test turning green](https://cdn.hashnode.com/res/hashnode/image/upload/v1638455714256/vrJQLs_IUY.png)

And as you can see in the image above, the test turned green!
Yes, we solved it.

I'm not stating this is the "best" solution, but I wanted to show you my approach.
Let me know what your approach was or what you would do differently 👏

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
