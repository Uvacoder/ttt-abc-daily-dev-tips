---
layout: ../../layouts/Post.astro
title: 'Refactoring old code'
metaTitle: 'Refactoring old code'
metaDesc: 'Looking at some legacy code and seeing how to optimize it with modern day technology'
image: /images/14-01-2021.jpg
date: 2021-01-14T03:00:00.000Z
tags:
  - developer
  - javascript
---

As a developer, you write code (duh), but this code might be outdated in one, three, five years.

I think it's our responsibility to maintain this code if the budget allows it.

In this case, the code has been written by my colleague pre ES6 times.
I'm now asked to write an extension on this codebase.

When looking at the old code, I noted there was some legacy code that was using loops and wasn't really efficient with the tools we have nowadays.

## Introducing the old code

In the example we are looking at, we have the following datasets.

```js
const data = {
  Angular: 3,
  React: 1,
  Vue: 2,
  Next: 1,
  HTML: 2,
  Other: 3
};
const colors = ['#d17a29', '#da9554', '#e3af7f', '#edcaa9', '#f6e4d4', '#204e77'];
```

The goal is to get an output like this:

```js
[
  ['Angular', 3, '#d17a29'],
  ['Other', 3, '#204e77'],
  ['Vue', 2, '#e3af7f'],
  ['HTML', 2, '#f6e4d4'],
  ['React', 1, '#da9554'],
  ['Next', 1, '#edcaa9']
];
```

Looking at the old code, which is the following:

```js
let sortable = [];
let index = 0;

for (let temp in data) {
  sortable.push([temp, data[temp], colors[index] ? colors[index] : '#D3D3D3']);
  index++;
}

sortable.sort(function(a, b) {
  return b[1] - a[1];
});
```

The person achieved the exact goal, using a loop and manual plus on an index. Perfect solution, but perhaps we can make it even better?

## Refactoring the code

Immediately is was thinking of using the [Map method](https://daily-dev-tips.com/posts/javascript-map-method/) to map the data into the desired format.

But we can't use the Map method on an object?

Right, so let's convert this object into an array.

```js
const newOutput = Object.entries(data);
```

This will give us the following array.

```js
[['Angular', 3], ['React', 1], ['Vue', 2], ['Next', 1], ['HTML', 2], ['Other', 3]];
```

Wow, that already halfway there, it's not sorted yet, and we are missing the color, but it's a really good start.

> Note: With this, we omitted the manual push into a new array.

Now let's try and add the color based on an index.
Start by adding a [Map method](https://daily-dev-tips.com/posts/javascript-map-method/) to the entries.

```js
const newOutput = Object.entries(data).map(item => item);
```

This will return the exact same as what we had.
But did you know we can add an index to this?

```js
const newOutput = Object.entries(data).map((item, index) => item);
```

Another cool thing we can do inside this map is to break down the item into separate variables.

```js
const newOutput = Object.entries(data).map(([title, amount], index) => title);
```

The above example will return:

```js
['Angular', 'React', 'Vue', 'Next', 'HTML', 'Other'];
```

You might see where this is going now, so instead of returning just the title, we can return an array.

```js
const newOutput = Object.entries(data).map(([title, amount], index) => [
  title,
  amount,
  colors[index] || '#fff'
]);
```

There we go. We added the color to our output.

```js
[
  ['Angular', 3, '#d17a29'],
  ['React', 1, '#da9554'],
  ['Vue', 2, '#e3af7f'],
  ['Next', 1, '#edcaa9'],
  ['HTML', 2, '#f6e4d4'],
  ['Other', 3, '#204e77']
];
```

The last thing we need is to have the array sorted based on the number (second variable).

```js
const newOutput = Object.entries(data)
  .map(([title, amount], index) => [title, amount, colors[index] || '#fff'])
  .sort((a, b) => b[1] - a[1]);
```

Let's check the output now:

```js
[
  ['Angular', 3, '#d17a29'],
  ['Other', 3, '#204e77'],
  ['Vue', 2, '#e3af7f'],
  ['HTML', 2, '#f6e4d4'],
  ['React', 1, '#da9554'],
  ['Next', 1, '#edcaa9']
];
```

We did it. We refactored the old code to a single line using combined methods.

I hope you see how refactoring code makes sense and how the thinking process works.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
