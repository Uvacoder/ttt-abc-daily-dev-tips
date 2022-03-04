---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript Update URL without Refresh'
metaTitle: 'Vanilla JavaScript Update URL without Refresh'
metaDesc: 'Changing a URL with JavaScript without refreshing'
image: /images/28-06-2020.jpg
date: 2020-06-28T03:00:00.000Z
tags:
  - vanillajs
  - javascript
---

Today we are looking into updating the `URL` without doing a refresh. We can use the History API to access and modify the `URL` states.

The cool part is it has superb browser support!

## JavaScript History API

The history API is a set of methods used to manipulate history. For instance, we can go forward and backward, just like clicking the buttons in your browser.

> Also check out this article about other [History API methods](https://daily-dev-tips.com/posts/vanilla-javascript-history-api/)

## JavaScript history.pushState

Today's focus is on the method called pushState(). We can use this method to push a new entry into the browser's history. It doesn't need a refresh and will show the new URL in the browser.

The history.pushState() method accepts three arguments:

- `state`: This is an object with details about the `URL`
- `title`: The title (usually the `<title>` attribute)
- `url`: The actual `URL` you see in your browser bar.

In code, it would look like this:

```js
history.pushState({pageID: 'unicorn'}, 'Unicorn', '/unicorn');
```

You can open up the console and paste the above code into it. And you should see the URL change.

Also, note we tell it the title, but it is not reflected anywhere. I'm not 100% sure why we even have the `title` option.

## Browser Support

![History support](https://caniuse.bitsofco.de/static/v1/mdn-api__History-1593269956388.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
