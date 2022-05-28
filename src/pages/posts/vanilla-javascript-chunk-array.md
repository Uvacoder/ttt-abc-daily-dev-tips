---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript Chunk Array'
metaTitle: 'Vanilla JavaScript Chunk Array'
metaDesc: 'How to chunk an array in pieces'
image: /images/28-05-2020.jpg
date: 2020-05-28T03:00:00.000Z
tags:
  - javascript
---

The other day I needed to chunk an array of over a million records in batches of a maximum of 5000.

There are multiple correct ways; I will show you the one I used for chunking an array.

## Chunk Array in JavaScript

```js
const input = new Array(10001);

function chunkArray(array, chunk_size) {
  const results = [];

  while (array.length) {
    results.push(array.splice(0, chunk_size));
  }

  return results;
}

const result = chunkArray(input, 5000);
console.log(result.length);
// 3
```

So we start by defining a new array of `10001` records.
Then we define our `chunkArray` function; it will accept an input array and a chunk_size parameter.
Inside the `chunkArray` function, we create a new results array and `while loop` over the input.
We then push the amount of `chunk_size` into our result.

Then we call the function passing it our two parameters. In this case, the result will have three arrays, two of 5000 records and one with one record.

You can view this in action on Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="PoPvePB" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript Chunk Array">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/PoPvePB">
  Vanilla JavaScript Chunk Array</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
