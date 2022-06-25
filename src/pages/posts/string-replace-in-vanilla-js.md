---
layout: ../../layouts/Post.astro
title: String replace in Vanilla JS
metaTitle: String replace in Vanilla JS
metaDesc: How to replace string in Vanilla JS or JavaScript
image: '/images/fallback.png'
date: 2020-03-22T03:00:00.000Z
tags:
  - javascript
---

First and foremost, you will see me use Vanilla JS/Plain Javascript or JavaScript throughout my post.
I'm a big fan of [Vanilla JavaScript](http://vanilla-js.com/). This is the plain version of JavaScript without using plugins like `jQuery`. `VanillaJs` is an excellent way to start because you will learn the basics of JavaScript you need for any other plugins.

## String replace in Vanilla JS

Now, how do we replace a string in `VanillaJs`.
String replacement is a widely used developer's goto.
In plain Javascript is as simple as the following example:

```js
let input =
  "search for me, i'm hidden. You can search but it doesn't mean your search will work.";
let output = input.replace('search', 'found');
console.log(output);
```

This will output: `"found for me, i'm hidden. You can search but it doesn't mean your search will work."`

You may wonder why it only replaces 1 "search" this is what we told it to do, so we need to use a regex to replace all occurrences.

> Note: We can also use `replaceAll` these days, as you can see in [this artilce](https://daily-dev-tips.com/posts/public-solving-matching-smudged-names/).

## Regex string replace in Vanilla JS

```js
let input =
  "search for me, i'm hidden. You can search but it doesn't mean your search will work.";
const regex = new RegExp('search', 'g');
let output = input.replace(regex, 'found');
console.log(output);
```

This will output: `"found for me, i'm hidden. You can found but it doesn't mean your found will work."`

So this option worked. We made a regex to search for "search" "globally". We defined globally by using the `g` option to the `RegExp`, Read more about it [here](https://www.w3schools.com/jsref/jsref_obj_regexp.asp)

We can also use the shorthand like this:

```js
let input =
  "search for me, i'm hidden. You can search but it doesn't mean your search will work.";
let output = input.replace(/search/g, 'found');
console.log(output);
```

## Modern JavaScript solution

In modern JavaScript, we can leverage an even better method called `replaceAll` this is a mix of the above, but in a neat JavaScript function.

```js
let input =
  "search for me, i'm hidden. You can search but it doesn't mean your search will work.";
let output = input.replaceAll('search', 'found');
console.log(output);
```

Which will output:

This will output: `"found for me, i'm hidden. You can found but it doesn't mean your found will work."`

Feel free to play around with this codepen:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="vYOaRRP" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="String replace in Vanilla JS">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/vYOaRRP">
  String replace in Vanilla JS</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Now you know the string replace in VanillaJS

As always, feel free to reach out on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1) if you have any questions, tips or topics you want to see. 👋
