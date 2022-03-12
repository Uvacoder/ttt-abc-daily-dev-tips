---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript Switch statement'
metaTitle: 'Vanilla JavaScript Switch statement'
metaDesc: 'Learn all about the amazing Vanilla JavaScript Switch statement'
image: /images/05-04-2020.jpg
date: 2020-04-05T03:00:00.000Z
tags:
  - javascript
---

Today I want to walk through the switch statement, of-course everyone knows the basic `if...else` statements and if you have been around for a while you learned those can get really out of hand.

Personally, I find myself using `switch` in various programming languages quite often.

## JavaScript Switch elements

Here we see a basic switch statement:

```js
let emoji = '🔥';

switch (emoji) {
  case '🤟':
    console.log('rock on');
    break;
  case '🔥':
    console.log('on fire!');
    break;
  default:
    console.log('fake news');
}

// on fire!
```

As we can see we have `case`, `break` and `default` in the switch statement.

The switch statement will run through `cases` until it hits one that it equals that will return a `break`. The `break` will end the switch statement.
If no `case` is met, it will return the `default` statement if it's defined.

## JavaScript Switch multiple cases

We can even do multiple cases with a `switch` statement. This looks like the following example:

```js
let job = '🚒';

switch (job) {
  case '🤟':
  case '🎸':
  case '👨‍🎤':
    console.log('You must be a rock artist');
    break;
  case '🔥':
  case '🚨':
  case '🚒':
    console.log('You must be a firefighter');
    break;
  default:
    console.log('No job?');
}

// You must be a firefighter
```

## JavaScript Switch ranging case

Another cool thing we can do with for instance integers is seeing where they range.
Let's see that in action.

```js
let rickAndMortyIMDBScore = 92;

switch (true) {
  case rickAndMortyIMDBScore >= 90:
    console.log('Best show ever!');
    break;
  case rickAndMortyIMDBScore >= 80:
    console.log('Pretty good');
    break;
  case rickAndMortyIMDBScore >= 70:
    console.log('Mehh');
    break;
  default:
    console.log('Not even worth it');
}

// Best show ever!
```

As you can see `switch` statement gets very useful.

Feel free to play with this Codepen:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="rNVgRJp" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="rNVgRJp">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/rNVgRJp">
  rNVgRJp</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
