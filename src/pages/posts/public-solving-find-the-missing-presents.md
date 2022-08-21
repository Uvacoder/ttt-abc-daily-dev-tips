---
layout: ../../layouts/Post.astro
title: 'Public Solving: Find the missing presents'
metaTitle: 'Public Solving: Find the missing presents'
metaDesc: 'Comparing array differences in JavaScript'
image: /images/03-01-2022.jpg
date: 2022-01-03T03:00:00.000Z
tags:
  - devadvent
  - javascript
---

Oh no, some of the presents have gone missing, and Santa asked us to write a program to find the missing ones quickly.

Luckily for us, the elves are super organized and have a list of all presents there would be.

They also provided a manifest with all the present IDs that should be in the current sack of Santa.

[You can find the original puzzle here](https://github.com/devadvent/puzzle-23).

## Thinking about a solution

This is quite a quick assignment, by the looks of it.

We start with three arrays:

- The full item array (id + name of each present) - all items
- Manifest array (id) - items that should be in the sack
- Sack array (id) - items in the sack

I want to break this into two elements to make things readable and easy to grasp.

1. Find the missing items by comparing the manifest and the sack.
2. Return the complete item object by comparing the items with the missing array we just created.

Alright, let's get cracking on this puzzle.

## Find missing elements in two arrays in JavaScript

The first part compares the two arrays (manifest and sack).
They contain ID, so we can use the [`filter` method](https://daily-dev-tips.com/posts/javascript-filter-method/) to filter out the missing one quickly.

A present would be missing if it exists in the manifest array but not in the sack array.

```js
const missing = manifest.filter((el) => !sack.includes(el));
```

And then, we can use this array to filter the items array to output the id and name of that present.

```js
return items.filter((el) => missing.includes(el.id));
```

And we can even write this as a one-liner for those interested.

```js
export const findMissing = (manifest, sack) => {
  return items.filter((item) =>
    manifest.filter((el) => !sack.includes(el)).includes(item.id)
  );
};
```

Let's try out the test to see if it worked.

![Padding the tests](https://cdn.hashnode.com/res/hashnode/image/upload/v1640319298526/1es-AQgEE.png)

Let me know in the comments what you would do differently.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
