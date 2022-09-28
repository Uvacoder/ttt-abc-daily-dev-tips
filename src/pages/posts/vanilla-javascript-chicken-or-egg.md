---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript Chicken or Egg?'
metaTitle: 'Vanilla JavaScript Chicken or Egg?'
metaDesc: 'Solving the Chicken vs. Egg with JavaScript'
image: /images/27-07-2020.jpg
date: 2020-07-27T03:00:00.000Z
tags:
  - javascript
---

I saw this a couple of days ago and thought it was finally a solution to this age-old problem!

Who was there first, the chicken or the egg?

## JavaScript Chicken or Egg Sort

```js
const array = ['🥚', '🐔'];
console.log(array.sort());
// (2) ["🐔", "🥚"]
```

There you go, the answer is `Chicken`!

But let's dive deeper and see how this worked out for the egg?

```js
const array2 = ['🐔', '🐣', '🐤', '🥚'];
console.log(array2.sort());
// (4) ["🐔", "🐣", "🐤", "🥚"]
```

Hmm weird? Yes, this complicates things.

What are your opinions on this Chicken vs. Egg complication?

View the code on Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="vYLMVym" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript Chicken or Egg?">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/vYLMVym">
  Vanilla JavaScript Chicken or Egg?</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
