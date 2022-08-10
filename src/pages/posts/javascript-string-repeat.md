---
layout: ../../layouts/Post.astro
title: 'JavaScript string repeat'
metaTitle: 'JavaScript string repeat'
metaDesc: 'Repeating string is super easy in Vanilla JavaScript these days, learn how!'
image: /images/10-01-2021.jpg
date: 2021-01-10T03:00:00.000Z
tags:
  - javascript
---

Did you know JavaScript comes with a handy `repeat()` function?

It allows us to repeat a string an x number of times.

This used to be a tedious process using loops or while arrays.

Now we can call `repeat()` on a string.

## Making use of JavaScript string.repeat()

As mentioned, you can call this function on a string, and it will repeat it an x number of times.

This x is the only argument it takes.

```js
'two'.repeat(2);
// 'twotwo'
```

This makes it far clearer for the code to state a string is repeated two times.

Old-school, you might have found yourself doing something like this.

```js
let output = '';
for (i = 0; i < 2; i++) {
  output += 'two';
}
```

As you can see a more tedious process. (There are some alternatives, but nothing as simple as calling `repeat()`).

## Browser support

The browser support for the string.repeat is pretty good. Only IE can't deal with it.

![String repeat browser support](https://cdn.hashnode.com/res/hashnode/image/upload/v1609661532942/htggLTbjQ.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
