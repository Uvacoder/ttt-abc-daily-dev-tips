---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript Cookies 🍪'
metaTitle: 'Get n Set Cookies in Vanilla JS 🍪 [Tutorial]'
metaDesc: '2020 - All about working with HTTP cookies in JavaScript. Look at the code examples and explanations.'
image: /images/11-07-2020.jpg
date: 2020-07-11T03:00:00.000Z
tags:
  - javascript
---

In this tutorial, we'll be looking into working with browser cookies in Vanilla JavaScript.
It's not the most widely used functionality, but great to keep track of small things like whether someone clicked a cookie bar.

We can `set`, `get`, `change` and, `delete` a cookies.

## How to set a cookie

To set a cookie in `Vanilla JavaScript`, we use the `document.cookie` property.

First, we must understand cookies are set as a key-value pair.

```
key = value
```

So, to set an HTTP cookie, you use the following:

```js
document.cookie = 'username=Chris';
```

We can even set an expiry date:

```js
document.cookie = 'username=Chris; expires=Sun, 01 Jan 2023 12:00:00 UTC';
```

## Get cookies in Vanilla JS

To get and read a specific cookie, we can use the following:

```js
const username = document.cookie;
username = Chris;
second = bla;
```

This will return the complete cookie object, so we need to split it like so:

```js
const username = getCookie('username');
console.log(username);
// Chris

function getCookie(name) {
  // Add the = sign
  name = name + '=';

  // Get the decoded cookie
  const decodedCookie = decodeURIComponent(document.cookie);

  // Get all cookies, split on ; sign
  const cookies = decodedCookie.split(';');

  // Loop over the cookies
  for (let i = 0; i < cookies.length; i++) {
    // Define the single cookie, and remove whitespace
    const cookie = cookies[i].trim();

    // If this cookie has the name of what we are searching
    if (cookie.indexOf(name) == 0) {
      // Return everything after the cookies name
      return cookie.substring(name.length, cookie.length);
    }
  }
}
```

## How to change a cookie

Sometimes we want to update a cookie. To do that, we first get the cookie and then set it again:

```js
document.cookie = 'username=Nicole; expires=Sun, 01 Jan 2023 12:00:00 UTC';
```

## JavaScript Deleting a browser cookie

To delete a specific web cookie, we have to set its date to be passed:

```js
document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
```

### View the demo code to try getting and setting cookies in JavaScript right on Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="oNbyzwO" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JavaScript Cookies">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/oNbyzwO">
  JavaScript get and set all cookies</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
