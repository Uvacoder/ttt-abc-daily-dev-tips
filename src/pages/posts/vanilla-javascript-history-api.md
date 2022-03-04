---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript History API'
metaTitle: 'Vanilla JavaScript History API'
metaDesc: 'Navigation trough the browser history in JavaScript'
image: /images/29-06-2020.jpg
date: 2020-06-29T03:00:00.000Z
tags:
  - vanillajs
  - javascript
---

Yesterday we had a brief introduction to the History API, by using the [`pushState`](https://daily-dev-tips.com/posts/vanilla-javascript-update-url-without-refresh/) method.

Today we'll be diving more into the History API and see what other elements we can use.

## JavaScript Browser API Back and Forward

So instead of refreshing the current `URL` sometimes, we want to navigate true the history programmatically. The History API has three methods of doing so:

- `back()` Same as clicking the back button in the browser
- `forward()` Same as clicking the forward button
- `go()` We can go to a specific index forward (`1`) or backward (`-1`)

In action the `back()` method looks like this:

```js
window.history.back();
```

The `forward()` in turn looks like this:

```js
window.history.forward();
```

And the `go()` we can use like this:

```js
window.history.go(-1); // back
window.history.go(1); // forward
window.history.go(0); // refresh
window.history.go(); // refresh
```

You can determine how many pages are in the history by using the following command:

```js
const numberInHistory = window.history.length;
```

## JavaScript History API replaceState

As we saw we can use [`pushState`](https://daily-dev-tips.com/posts/vanilla-javascript-update-url-without-refresh/) to change the current state, we can also use `replaceState` for this:

```js
history.replaceState({page: 'unicorn'}, 'Unicorn', '/Unicorn');
```

## Browser Support

![History support](https://caniuse.bitsofco.de/static/v1/mdn-api__History-1593269956388.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
