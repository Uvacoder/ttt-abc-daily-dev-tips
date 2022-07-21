---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript Replace All Whitespaces'
metaTitle: 'Vanilla JavaScript Replace All Whitespaces'
metaDesc: 'How can we replace or remove all whitespaces in a string?'
image: /images/12-08-2020.jpg
date: 2020-08-12T03:00:00.000Z
tags:
  - javascript
---

Today we'll look into a widespread use case; we want to replace all whitespace occurrences from a string. Think about an input we want to save as a URL, and we need to replace the whitespaces with dashes. Or an image where we need to remove them.

## JavaScript Replace All Whitespace

To remove all whitespaces, we have multiple options, but the best one is to use a regular expression.

Let's say we have the following string:

```js
const string = "You've got a friend in me.";
```

And let's first start by just removing the whitespaces:

```js
console.log(string.replace(/\s/g, ''));
// You'vegotafriendinme.
```

Now let's try and replace them all for dashes:

```js
console.log(string.replace(/\s/g, '-'));
// You've-got-a-friend-in-me.
```

Awesome!

So how does this regular expression work?

`\s` means any whitespace character, and `g` means it's a global modifier and must match any search occurrences!

You can have a play with this on Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="gOraRyP" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript Replace All Whitespaces">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/gOraRyP">
  Vanilla JavaScript Replace All Whitespaces</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
