---
layout: ../../layouts/Post.astro
title: "Public Solving: Earth, Fire, Snow game"
metaTitle: "Public Solving: Earth, Fire, Snow game"
metaDesc: 'How to make a rock paper scissor game in JavaScript'
image: /images/25-12-2021.jpg
date: 2021-12-25T03:00:00.000Z
tags:
  - devadvent
  - javascript
---
The elves love making up games, and they have their own version of Rock, Paper, Scissor. 

Their version includes Earth, Fire, and Snow.
Let me quickly tell you how you can win with this game:

- Fire melts snow
- Snow covers earth
- Earth extinguishes fire

Alright, let's get right into coding this fun game for the elves 👏

[Click here to view the puzzle.](https://github.com/devadvent/puzzle-14)

## Thinking about a solution

I think it's safe to say there are only three options that win for this game.

Then there is a tie (both the same)

That's actually all there is, and it makes our program a bit easier to create.

Let me show you how:

## Building the earth, fire, snow game in JavaScript

Let's first define an object with the winning combinations.

```js
const winMatchUp = {
  fire: 'snow',
  snow: 'earth',
  earth: 'fire',
};
```

There is no need to define the other way around as we can abstract it, seeing we only have two players.

First, let's look at a draw. This means both players picked the same element.

```js
export const selectWinner = (user1, user2) => {
  if (user1.choice === user2.choice) return null;
};
```

Then we can check if user1's choice match up is equal to user2's choice. This would mean user 1 one.

Let's me check an example to explain a bit more:

- user one picked snow
- user two picked earth

We then query our match-up table and say give us the matchup object for `snow`. This will return `earth`.

So if we now compare this to user two choice, we won!

In our code we can do it like so:

```js
if (winMatchUp[user1.choice] === user2.choice) return user1;
```

This automatically means, if user 1 did not win, user 2 must have won!

```js
export const selectWinner = (user1, user2) => {
  if (user1.choice === user2.choice) return null;
  if (winMatchUp[user1.choice] === user2.choice) return user1;
  return user2;
};
```

And there you go!

A super simple game, but yet so much fun.

I've run the test as a sanity check, and they turn green ✅.

![All test green](https://cdn.hashnode.com/res/hashnode/image/upload/v1639507909269/SgCLLxFAz.png)

Let me know what you think of my solution and how you would do differently.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
