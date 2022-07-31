---
layout: ../../layouts/Post.astro
title: 'Getting notified in JavaScript when a Media Query changes'
metaTitle: 'Getting notified in JavaScript when a Media Query changes'
metaDesc: 'Did you know JavaScript also support Media Queries?'
image: /images/29-08-2020.jpg
date: 2020-08-29T03:00:00.000Z
tags:
  - javascript
---

Media queries are fantastic and well used in modern web development.
But how can one notify JavaScript if a particular media query is met?

There is a window listener called: `matchMedia`, which does precisely this!

This is what we will be making today:

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/js-media-query_hzig7z.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/js-media-query_bbsrdy.mp4" type="video/mp4" />
</video>

## JavaScript Media Query Changes

To use `matchMedia`, we call the following:

```js
const mediaQuery = window.matchMedia('(max-width: 500px)');
```

To use it, we can add listeners to it:

```js
mediaQuery.addListener(console.log);
```

If we size our screen with the console open, it will fire a console log for each media query match.

The return will have a `MediaQueryListEvent`, which contains a value called `matches` to say true or false.

Console logs are excellent, but it doesn't do much for us, so we can also attach a function:

```js
mediaQuery.addListener(alertMe);

function alertMe(e) {
  if (e.matches) {
    document.body.style.backgroundColor = 'green';
  } else {
    document.body.style.backgroundColor = 'red';
  }
}
```

If we resize and hit the media query, our screen will turn green or red depending on yes or no.

See this Codepen for a demo.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="abNwbdY" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Getting notified in JavaScript when a Media Query changes">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/abNwbdY">
  Getting notified in JavaScript when a Media Query changes</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

> More on MediaQueryList here [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/addListener)

## Browser Support

This function has outstanding support!
For a novice function, one to use in projects.

![MediaQueryList support](https://caniuse.bitsofco.de/static/v1/mdn-api__MediaQueryList-1598621022637.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
