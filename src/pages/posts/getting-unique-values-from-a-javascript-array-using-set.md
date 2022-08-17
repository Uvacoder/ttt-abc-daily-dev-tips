---
layout: ../../layouts/Post.astro
title: 'Getting unique values from a JavaScript array using Set'
metaTitle: 'Getting unique values from a JavaScript array using Set'
metaDesc: 'Using the JavaScript Set method to get unique values from an array'
image: /images/17-08-2021.jpg
date: 2021-08-17T03:00:00.000Z
tags:
  - javascript
---

Often we want to get unique values from a single array. Luckily for us, this is relatively easy in modern JavaScript.

To give you a small recap on how one would do this with a manual loop and push in JavaScript.

```js
original = ['Pizza', 'Chicken', 'Pizza', 'Fish', 'Quinoa'];

output = [];
original.forEach((item) => {
  if (output.indexOf(item) === -1) {
    output.push(item);
  }
});

// [ 'Pizza', 'Chicken', 'Fish', 'Quinoa' ]
```

As you can see, this removes the duplicate Pizza value.

## JavaScript Set to the rescue

This is something Set is super good at.

Let's say we need to loop this data first because we need to filter on other conditions.

```js
output = new Set();
original.forEach((item) => {
  output.add(item);
});

// Set(4) { 'Pizza', 'Chicken', 'Fish', 'Quinoa' }
```

As you can see in this example, we don't have to check if the value exists since the JavaScript set only accepts unique values.

However, we now get a Set object returned instead of an array.
This is not always useful.

We can convert this Set object to an array using the JavaScript spread operator.

```js
output = [...output];
```

This takes the Set object and converts that into a flat array!

## Set unique values one-liner

If you don't need to do any other filter conditions in a for loop (or array method), we can use a one-liner to convert an array into a unique valued array.

```js
original = ['Pizza', 'Chicken', 'Pizza', 'Fish', 'Quinoa'];
output = [...new Set(original)];

// [ 'Pizza', 'Chicken', 'Fish', 'Quinoa' ]
```

I've also created this Codepen, where you can view the console logs to see what happens.

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="gOgYMPy" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/gOgYMPy">
  Vanilla JavaScript date toLocaleString</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
