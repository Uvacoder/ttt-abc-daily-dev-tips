---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript random colours'
metaTitle: 'Vanilla JavaScript random colours'
metaDesc: 'Learn how to get random hex colours in JavaScript'
image: /images/28-10-2020.jpg
date: 2020-10-28T03:00:00.000Z
tags:
  - javascript
---

Have you ever wondered how to create **random colors using Vanilla JavaScript**?

We made a [JavaScript data-attribute filter](https://daily-dev-tips.com/posts/vanilla-javascript-data-attribute-filters/). I wanted to give each block a random color.

So today, we are going to do just that.

The result will be as this Codepen (Open or reload to see random new colors)

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="oNLBNPd" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript random colours">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/oNLBNPd">
  Vanilla JavaScript random colours</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## JavaScript random hex color

In our example, we will be generating a random hex number. These can be any six characters from 0-9 and A-F.

Luckily, it's even easier to create a random hex string in JavaScript.

Let's break it down.

```js
Math.random() * 10000000;
```

This will give us a random number which will look like this:

```js
2773929.134011086;
9192315.941572387;
```

The next step is to floor this number only to get the first part.

```js
Math.floor(Math.random() * 10000000);
```

This would result in the following for the above examples:

```js
2773929;
9192315;
```

Now we need to create strings. Else we would only have numbers and one too many.

We can use the `toString()` method and specify the `radix` parameter as 16.

This will convert `254` to `fe`, for instance.

```js
Math.floor(Math.random() * 10000000).toString(16);
```

This will get results like:

```js
'2a53a9';
'8c437b';
```

Excellent, Perfect hex values!

## Random color blocks in JavaScript

Now let's give our blocks all a random color.

```html
<ul>
  <li data-rating="4"><span>item 1</span><i>rating 4</i></li>
  <li data-rating="2"><span>item 2</span><i>rating 2</i></li>
  <li data-rating="3"><span>item 3</span><i>rating 3</i></li>
  <li data-rating="1"><span>item 4</span><i>rating 1</i></li>
  <li data-rating="4"><span>item 5</span><i>rating 4</i></li>
  <li data-rating="1"><span>item 6</span><i>rating 1</i></li>
  <li data-rating="4"><span>item 7</span><i>rating 4</i></li>
  <li data-rating="4"><span>item 8</span><i>rating 4</i></li>
  <li data-rating="1"><span>item 9</span><i>rating 1</i></li>
  <li data-rating="5"><span>item 10</span><i>rating 5</i></li>
  <li data-rating="1"><span>item 11</span><i>rating 1</i></li>
  <li data-rating="2"><span>item 12</span><i>rating 2</i></li>
  <li data-rating="3"><span>item 13</span><i>rating 3</i></li>
  <li data-rating="1"><span>item 14</span><i>rating 1</i></li>
  <li data-rating="3"><span>item 15</span><i>rating 3</i></li>
  <li data-rating="5"><span>item 16</span><i>rating 5</i></li>
  <li data-rating="3"><span>item 17</span><i>rating 3</i></li>
  <li data-rating="5"><span>item 18</span><i>rating 5</i></li>
  <li data-rating="1"><span>item 19</span><i>rating 1</i></li>
  <li data-rating="2"><span>item 20</span><i>rating 2</i></li>
</ul>
```

Now we need to get all our list items and loop over them.

```js
const elements = document.querySelectorAll('li');

[...elements].forEach((element) => {
  element.style.backgroundColor = `#${Math.floor(Math.random() * 1e7).toString(
    16
  )}`;
});
```

It might not have the prettiest colors, but at least they're random!

You might have noted the `1e7`, a shorthand Decimal Base Exponent.

It means one followed by seven zeroes.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
