---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript Slice vs Splice'
metaTitle: 'Vanilla JavaScript Slice vs Splice'
metaDesc: 'What is the difference between slice and splice?'
image: /images/30-05-2020.jpg
date: 2020-05-30T03:00:00.000Z
tags:
  - javascript
---

The other day I asked the following question on Twitter: "What are the things you always have to google as a developer?".

This was the response from [Rey van den Berg](https://twitter.com/ReyTheDev).

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The difference between splice and slice 😂</p>&mdash; Rey van den Berg (@ReyTheDev) <a href="https://twitter.com/ReyTheDev/status/1266037722055090176?ref_src=twsrc%5Etfw">May 28, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

I must admit that I've had to look up the difference between the two more than once.

## JavaScript Slice

To start, these are both arrays manipulating methods, but let's see what makes the `slice` one unique.

The main difference is that the `slice` method copies a part of the original array. It does not change the original one.

```js
const array = [1, 2, 3, 'test', 5];
const sliced = array.slice(0, 4);
console.log(sliced);
// [1, 2, 3, "test"]
```

The two parameters we can pass to the `slice` method are the starting point and the endpoint. So in our example, we are stating we start at position 0 and `slice` till position 4.

**Fun fact: Slice will also work on a string!**

```js
const string = 'Hello world';
const slicedString = string.slice(0, 5);
console.log(slicedString);
// Hello
```

## JavaScript Splice

Ok, yes, the names are very similar. But they do something different.
The main difference for the `splice` method is that it will modify the existing array.

We can remove or add elements to our initial array with `splice`.

### JavaScript Splice Remove

Removing elements will work like this:

```js
const array = [1, 2, 3, 'test', 5];
array.splice(0, 4);
console.log(array);
// [5]
```

You see, we removed the first four elements from our array.
The parameters we provided are starting and the number of elements. In this case, we start at position 0 and remove four elements.

We can also forget the second parameter. It will then remove everything after the start position we set.

```js
const array = [1, 2, 3, 'test', 5];
array.splice(2);
console.log(array);
// [1, 2]
```

### JavaScript Splice Add

As mentioned, we can also add elements like this:

```js
<!-- Splice Add -->
const array = [1,2,3,'test',5];
array.splice(0,0,'random');
console.log(array);
// ["random", 1, 2, 3, "test", 5]
```

We told the `splice` to enter our new element `random` at position 0. We can even define multiple elements here!

You can have a play with these two methods on this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="LYpKqgX" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript Slice vs Splice">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/LYpKqgX">
  Vanilla JavaScript Slice vs Splice</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
