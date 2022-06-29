---
layout: ../../layouts/Post.astro
title: 'Fetch API in Vanilla JavaScript'
metaTitle: 'Vanilla JS Fetch API Request [2022 Tutorial]'
metaDesc: 'Fetch is a better alternative to xhr and $.ajax. Learn in this tutorial how to use it and take code from the examples.'
image: /images/01-04-2020.jpg
date: 2020-04-01T02:36:00.000Z
tags:
  - javascript
---

I remember back in the days of jQuery `$.ajax` was a big, big thing. But nowadays we have `fetch` a way cooler, faster solution to fetch data from an API endpoint. It is the better alternative to XHR and AJAX.
The best part: the Fetch API request works in `Vanilla JavaScript`!

## How to make a GET request with the Fetch API

```js
fetch('https://api.fungenerators.com/fact/random');
```

That is as basic as it gets, won't do much since we are not returning any data.

### Returning json data with the Fetch API

```js
fetch('https://ghibliapi.herokuapp.com/films')
  .then(function (response) {
    // Successfull fetch return as json
    return response.json();
  })
  .then(function (data) {
    // Data now contains the json
    console.log(data[0]);
  })
  .catch(function (error) {
    // A Error occured
    console.log(error);
  });
```

Vanilla JS Fetch works with promises, so we can return a promise chain as we learned on [20-03-2020: Promise chains in JavaScript](https://daily-dev-tips.com/posts/promise-chains-in-javascript/).

The first API response will return an object, not an actual response, so we need to tell the promise that we want to return the response as JSON data.

You can play around with this codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="abOXqoV" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Fetch API in Vanilla JavaScript">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/abOXqoV">
  Fetch API in Vanilla JavaScript</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser support for Vanilla JS API requests

The Fetch API has excellent support, but not in IE. 😓

You can use a [polyfill](https://github.com/github/fetch) for this.

![graph of browser support for Fetch API](https://caniuse.bitsofco.de/image/fetch.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
