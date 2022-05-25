---
layout: ../../layouts/Post.astro
title: 'Public Solving: Making an autopilot navigator'
metaTitle: 'Public Solving: Making an autopilot navigator'
metaDesc: 'How to navigate a object in a JavaScript Matrix'
image: /images/26-12-2021.jpg
date: 2021-12-26T03:00:00.000Z
tags:
  - devadvent
  - javascript
---

**Disclaimer**: This was by far the hardest one for me. I'm sure the solution could be enhanced.

Now that we set the tone with the disclaimer let's look at the puzzle for today.

[You can find the puzzle here](https://github.com/devadvent/puzzle-16).

Santa gets very tired after a long night, and the elves decide to make an autopilot for the sled.

They have mapped out Santa's positions compared to the Northpole but need some help determining the best route.

The maps they made look like this:

```json
###N######
##########
#######S##
##########
```

You can see the `N` represents the Northpole and the `S` where Santa is.

The goal for today is to determine the direction Santa should move in. This can only be one step.
Then we must update the map with Santa in this new direction.

This is what the completed solution will look like;

<!-- ![Public Solving: Making a autopilot navigator](https://cdn.hashnode.com/res/hashnode/image/upload/v1639672122844/SyHIq3rDb.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1639672106/pilot_xevher.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1639672106/pilot_z7x6om.mp4" type="video/mp4" />
</video>

## Thinking about the solution

First, I thought about determining what movement we should do.

I think it's fair to assume we can break the map up into rows and columns.
Each one going from zero to `{X}`

In the example above, the Northpole is at X = 4 and Y = 1.

And Santa is at X = 8 and Y = 3

Our first action should thus be up-left. This can be seen as one step!

Then to navigate the map, we have to convert this string value (up-left) to the new coordinates for Santa and move him to those.
Then we need to remove the old Santa position.

## Building the find direction method

Let's start by building the find direction method.
This has one property, the map.

I decided to create a new function called `findPosition`. It takes the map and a character we are looking for, `N` or `S`.

The map is broken up into rows, and each row has the columns like this.

```json
[
  ["#", "#", "#"],
  ["#", "S", "#"],
  ["#", "N", "#"]
]
```

The function looks like this:

```js
const findPosition = (map, character) => {
  return map.reduce((out, row, i) => {
    const find = row.indexOf(character);
    if (find !== -1) {
      out = [i, find];
    }
    return out;
  }, []);
};
```

What happens is that we reduce the map and have the rows. I Also add the `I` to determine the current row index.

Then I use the `indexOf` to determine if this row has the character we are looking for.
If yes, we return the row (`I`) and the index of the character (`find`).

Let's try it out on the array I said above and find the `N` character:

```js
const northPole = findPosition(map, 'N');
// [ 2, 1 ]
```

Perfect as the `N` is at X = 1 and Y = 2.

Then we can do the same to find Santa.

```js
const santa = findPosition(map, 'S');
```

Then we must find what Santa needs to move on the x and y axes.

For this purpose, I introduced a `findAction` method. This method accepts `Santa`, `Northpole`, and the `axis`.

```js
const findAction = (santa, northPole, axis) => {
  if (santa[axis] === northPole[axis]) return;

  return santa[axis] < northPole[axis]
    ? axis === 0
      ? 'down'
      : 'right'
    : axis === 0
    ? 'up'
    : 'left';
};
```

If Santa and the Nortpole are equal for this axis, we can return immediately as we are alright there.
We must see if it's a positive or negative position and if the axis is x or y.

Then we can return both values and filter out the empty ones.

```js
export const findDirection = (map) => {
  const northPole = findPosition(map, 'N');
  if (!northPole.length) return null;
  const santa = findPosition(map, 'S');
  const yAction = findAction(santa, northPole, 0);
  const xAction = findAction(santa, northPole, 1);
  return [xAction, yAction].filter(Boolean);
};
```

## Moving Santa on the map

Now that we know the direction/movement, we can move Santa on the map.

First, we have to determine Santa on the map again.

```js
const santa = findPosition(map, 'S');
```

I then duplicate the position for the new movement.

```js
const movement = [...santa];
```

And then, we need to loop over each direction and perform a particular action.

```js
direction.forEach((dir) => {
  switch (dir) {
    case 'left':
      movement[1]--;
      break;
    case 'right':
      movement[1]++;
      break;
    case 'up':
      movement[0]--;
      break;
    case 'down':
      movement[0]++;
      break;
  }
  return movement;
});
```

This uses a simple `switch` case, and if the direction is left, we take 1 of the position for the X-axis.

This can take up to two differences as we can have `['top', 'left]` as the options.

Once this is updated, the movement array has the new position for Santa.

We can then remove the `S` character from the map by replacing it with a `#` character.

```js
map[santa[0]][santa[1]] = '#';
```

And then we set `S` to the new position:

```js
map[movement[0]][movement[1]] = 'S';
```

And there we go!
Santa is now in a new position.

The function will auto loop and return to the new position, where the process starts again.

Just one more thing to do:

Run the test!

![Autopilot movement in JavaScript](https://cdn.hashnode.com/res/hashnode/image/upload/v1639671827288/R9nMxWnOs.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
