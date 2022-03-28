---
layout: ../../layouts/Post.astro
title: 'Spice up your console logs with styling'
metaTitle: 'Spice up your console logs with styling'
metaDesc: 'How to spice up console.logs by custom styling them'
image: /images/09-04-2021.jpg
date: 2021-04-09T03:00:00.000Z
tags:
  - javascript
---

Sometimes regular console logs just don't cut it. You might want to warn people to not paste random scripts they found online like Facebook.

Or maybe you want to hire them and shout in the console to potential devs?

Whatever your reasons, you can spice up your console logs with some styling!

![Facebook console log styled](https://cdn.hashnode.com/res/hashnode/image/upload/v1617635687647/cXhhoSijg.png)

## Adding some styles to our console logs

There are several specifiers we can use in the front of our console logs to state whatever it should render to get right in.

- `%s`: Format as a string
- `%i`/`%d`: Format as integer
- `%f`: Format as a float
- `%o`: Format as expendable DOM element
- `%O`: Format as an expendable JavaScript element
- `%c`: Apply CSS rules (taken from the second parameter)

Today we will be focussing on the last rule.

It looks something like this:

```js
console.log("%cI'm blue, da ba dee da ba daa", 'color: blue;');
```

This will result in the following.

![Styled console logs](https://cdn.hashnode.com/res/hashnode/image/upload/v1617635319039/yruRiKwqe.png)

But that's not all. You can write as many rules of CSS as you like.

```js
console.log(
  "%cI'm so super stylish",
  'color: #bc2e1e; font-size: 2rem; background: #edde9c; text-shadow: 0 1px 0px #378ab4, 1px 0 0px #5dabcd, 1px 2px 1px #378ab4, 2px 1px 1px #5dabcd, 2px 3px 2px #378ab4, 3px 2px 2px #5dabcd, 3px 4px 2px #378ab4, 4px 3px 3px #5dabcd, 4px 5px 3px #378ab4, 5px 4px 2px #5dabcd, 5px 6px 2px #378ab4, 6px 5px 2px #5dabcd, 6px 7px 1px #378ab4, 7px 6px 1px #5dabcd, 7px 8px 0px #378ab4, 8px 7px 0px #5dabcd;'
);
```

And it will give us this result:

![Fully styled console log](https://cdn.hashnode.com/res/hashnode/image/upload/v1617635620678/srmxcef5q.png)

As you can see, the possibilities are endless, maybe even over the top!

But it might help you to make your console logs just a bit more appealing.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
