---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript detecting the operating system'
metaTitle: 'Vanilla JavaScript detecting the operating system'
metaDesc: 'How to detect the operating system using JavaScript'
image: /images/13-11-2020.jpg
date: 2020-11-13T03:00:00.000Z
tags:
  - javascript
---

I'm sure you've ever seen this in action.
A website states, "Hey, you're on macOS, download this specific Mac version." Or download the Windows EXE here.

It mainly comes down to downloads, but there can be some cool advantages of knowing a user's browser and system.

In today's article, we will be using the `navigator` API to get the `appVersion`.

The result will look like this:

![JavaScript detect OS version](https://cdn.hashnode.com/res/hashnode/image/upload/v1604817590306/Yxv5_7KLG.png)

## HTML Document

For our demo, we will be created a simple card that we can render some information.

```html
<div class="card" id="os_card"></div>
```

## CSS Styling

Now let's make the card look more appealing by [centering it](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/) and using some colors.

```css
body {
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
  background: #f3c4fb;
}
.card {
  background: #e2afff;
  color: #fff;
  box-shadow: 0 10px 20px 0 rgba(0, 77, 115, 0.07);
  border-radius: 10px;
  padding: 30px 40px;
  font-size: 2rem;
}
```

## JavaScript detect Operating System

Now we can go ahead and find the user's OS!

As mentioned, we make use of the `navigator` API.

Let's first declare our starting variables.

```js
const card = document.getElementById('os_card');
let os = 'Unknown';
```

We also define an empty OS variable if we can't find the right one.

Now we are going to check if the OS string returns something familiar.

```js
if (navigator.appVersion.indexOf('Win') != -1) os = 'Windows';
if (navigator.appVersion.indexOf('Mac') != -1) os = 'MacOS';
if (navigator.appVersion.indexOf('X11') != -1) os = 'UNIX';
if (navigator.appVersion.indexOf('Linux') != -1) os = 'Linux';
```

An entire string would look something like this (MacOs)

```js
// 5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36
```

Now we are going to add our string to our card:

```js
card.innerHTML = 'Your OS: ' + os;
```

That's it. See the result in this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="yLJxWgJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript detecting the operating system">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/yLJxWgJ">
  Vanilla JavaScript detecting the operating system</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

The Navigator API has excellent support these days!

![JavaScript Navigator API support](https://caniuse.bitsofco.de/static/v1/mdn-api__Navigator-1604817528373.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
