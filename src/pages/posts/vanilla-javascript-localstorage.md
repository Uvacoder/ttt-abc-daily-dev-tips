---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript localStorage'
metaTitle: 'Vanilla JavaScript localStorage Tutorial [2022]'
metaDesc: 'Today we are going to leverage the localStorage in JavaScript. We will learn how to get data from it, set data and also how to clear it.'
image: /images/14-06-2020.jpg
date: 2020-06-14T03:00:00.000Z
tags:
  - javascript
---

Now and then, during web development, it would help if you stored a small variable in the frontend for later use. It might be, for instance, a cookie bar status, a shopping cart, or whatever.

To do that, we can use the localStorage API `JavaScript`. Let's learn how to use it.

## JavaScript localStorage methods

The JavaScript localStorage comes with the following methods we can use and leverage:

- `setItem(key, value)` Allow us to set a value for a specific key we pass.
- `getItem(key)` Retrieve a specific item value based on the key.
- `removeItem(key)` Remove an item from localStorage based on the key.
- `clear()` Clears all localStorage we setup.
- `key()` Retrieves the key name on a specific number.

Let's put the method to the test and set and retrieve data.

### Set an Item with setItem(key, value)

To set an item with a specific value for a key we can do the following:

```js
window.localStorage.setItem('mood', '😃');
```

To store data like an object we can use this code:

```js
const person = {
  name: 'Chris',
  mood: '🤩',
};
window.localStorage.setItem('person', JSON.stringify(person));
```

### Get data with getItem(key)

To get data from an item in localstorage we need the key we used to identify the data:

```js
console.log(window.localStorage.getItem('mood')); // 😃
```

Or for an Object:

```js
console.log(JSON.parse(window.localStorage.getItem('person'))); // {name: "Chris", mood: "🤩"}
```

### Remove Item from localstorage with removeItem(key)

Once we are done with a specific item, we can remove it. We call `removeItem` and pass the key.

```js
window.localStorage.removeItem('mood');
```

### Clear item with clear()

When we want to clear all items from the localStorage, we can use the clear method:

```js
window.localStorage.clear();
```

### See the local storage examples in this Codepen

Feel free to play around with the example code on Codepen:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="dyGXOvQ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript localStorage">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/dyGXOvQ">
  Vanilla JavaScript localStorage</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

The browser support is relatively good we can check if the browser supports it with the following code:

```js
if (typeof Storage !== 'undefined') {
  // Yeah! It is supported. 🥳
} else {
  // No web storage Support. 😞
}
```

[View on CanIUse](https://caniuse.com/#feat=mdn-api_window_localstorage)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
