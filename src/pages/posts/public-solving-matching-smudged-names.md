---
layout: ../../layouts/Post.astro
title: 'Public Solving: Matching smudged names'
metaTitle: 'Public Solving: Matching smudged names'
metaDesc: 'How to match partially smudged names using regex in JavaScript'
image: /images/18-12-2021.jpg
date: 2021-12-18T03:00:00.000Z
tags:
  - devadvent
  - javascript
---

Oh no, some packages fell off the sled, and the names are only partially readable.

[You can find the puzzle here.](https://github.com/devadvent/puzzle-7)

It's up to us to predict which name is on each smudged package.

We received a list of all the children's names and a list of gifts with smudged names.

Let's think about the solution to help Santa as soon as possible.

## Thinking about the solution

My initial thought is, great. We can use the filter method to filter the list of names with whatever name roughly matches the smudged name.

To do the rough matching, we can actually use Regex and not a super-advanced one, as you might think!

## Finding the smudged names

Alright, let's get right into it.

First of all, we need to import all the kids' names.

```js
import names from '../data/names.js';
```

Then we can return the array of names using the [JavaScript `filter` method](https://daily-dev-tips.com/posts/javascript-filter-method/) to find the good ones.

```js
return names.filter((name) => {
  // Todo
});
```

Then inside this, we need to define a regex to match a part of the string.

Let's take a look at what the smudging looks like:

```js
// Some examples:

Fr#der##k
Jo#ann#
Patt#
```

For `Patt#`, we should get two potential hits: `Patti`, and `Patty`.

The cool part about this assignment is that it states a smudge is always one letter.
And Regex comes with a great tool, the dot (`.`), which says: ". matches any character (except for line terminators)"

So we can replace all `#` with `.`, and we should get far already.

```js
return names.filter((name) => {
  const regex = new RegExp(smudgedName.replaceAll('#', '.'));
  return name.match(regex);
});
```

This uses the [`RegExp` function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions), where inside, we replace all hashtags with dots.
Then we return only if the name matches this regular expression.

And the results look very promising, but not perfect!

Remember `Patt#` it also matches: `Patterson`, which surely can't be right as it's too many characters!

We can fix this by adding a `$` sign at the end of our regular expression.
The `$` stands for the end of the line.

Making our complete function look like this:

```js
return names.filter((name) => {
  const regex = new RegExp(`${smudgedName.replaceAll('#', '.')}$`);
  return name.match(regex);
});
```

Let's run the test and see what happens:

![Test running and succeeding](https://cdn.hashnode.com/res/hashnode/image/upload/v1638879949599/-qiGC7tav.png)

There we go. We fixed it.

I would love to hear your approach to this solution or what you would change.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
