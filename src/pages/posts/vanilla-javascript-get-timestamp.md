---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript get timestamp'
metaTitle: 'Vanilla JavaScript get timestamp'
metaDesc: 'Yes, I always have to google this!'
image: /images/29-05-2020.jpg
date: 2020-05-29T03:00:00.000Z
tags:
  - javascript
---

Today, I needed a timestamp to include in a unique file that I'm generating with `Node.js`.

It's one of these things that, after 17 years, I still google to this day... Call me stupid or just ignorant in not saving it in my brain.

## Getting a Timestamp in JavaScript

```js
Date.now();
```

Wow, That was the one thing I can't get in my head?!
Yes. There are other ways of doing it, so here are some alternatives that do the same:

```js
new Date().getTime();
new Date().valueOf();
```

All three methods will get a millisecond timestamp; we can convert it to seconds by doing so:

```js
Math.floor(Date.now() / 1000);
```

Feel free to have a look and play on this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="OJyeOpp" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript get Timestamp">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/OJyeOpp">
  Vanilla JavaScript get Timestamp</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
