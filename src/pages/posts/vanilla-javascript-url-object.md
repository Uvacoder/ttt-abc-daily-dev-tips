---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript URL Object'
metaTitle: 'Vanilla JavaScript URL Object'
metaDesc: 'Lets check out the URL Object and SearchParams in JavaScript'
image: /images/27-06-2020.jpg
date: 2020-06-27T03:00:00.000Z
tags:
  - javascript
---

Today we are going to be looking at the `JavaScript` `URL Object`.
In many occasions you want to read parts of the `URL` for several reasons, this can be checking if it's a secure connection, if it has a query string or hash.
The `JavaScript` `URL Object` can help us with these things.

## Making a URL Object

To make a `URL` into a `URL Object` we use the following code:

```js
const urlInput =
  'https://daily-dev-tips.com/posts/100-articles/?utm_source=facebook#comments';
const url = new URL(urlInput);
console.log(url);
```

This will return the following object:

```js
hash: "#comments"
host: "daily-dev-tips.com"
hostname: "daily-dev-tips.com"
href: "https://daily-dev-tips.com/posts/100-articles/?utm_source=facebook#comments"
origin: "https://daily-dev-tips.com"
password: ""
pathname: "/posts/100-articles/"
port: ""
protocol: "https:"
search: "?utm_sourche=facebook"
searchParams: URLSearchParams {}
username: ""
```

As you can see, we can access several different properties.

But what if we want to get the actual value of the utm_source?

## JavaScript URL SearchParams

The `URL` comes with `searchParams` with a lot of very cool features!

### JavaScript SearchParams get Specific value

To get just one specific value we use the following code:

```js
console.log(url.searchParams.get('utm_source'));
// facebook
```

Additionally we can even get all if there are more of them:

```js
console.log(url.searchParams.getAll('utm_source'));
// ["facebook"]
```

### Check if SearchParams has a specific key

In the above example, we are guessing we have the utm_source, but what if we not sure?

```js
console.log(url.searchParams.has('utm_source'));
// true
console.log(url.searchParams.has('t_source'));
// false
```

### Getting all SearchParams keys

But maybe we want to get all keys to loop over manually?

```js
const keys = url.searchParams.keys();
for (let key of keys) {
  console.log(key);
}
// utm_source
```

Or, perhaps we just want the values:

```js
const values = url.searchParams.values();
for (let value of values) {
  console.log(value);
}
// facebook
```

We can even just loop over both:

```js
url.searchParams.forEach(function (value, key) {
  console.log(key, value);
});
// utm_source facebook
```

### Modifying SearchParams

Another element that comes in handy is the option to modify the `SearchParams`; we can append/change or delete them.

Append:

```js
url.searchParams.append('search', 'JavaScript');
// search: "?utm_source=facebook&search=JavaScript"
```

Set:

```js
url.searchParams.set('search', 'HTML');
// search: "?utm_source=facebook&search=HTML"
```

Or remove:

```js
url.searchParams.delete('search');
// search: "?utm_source=facebook"
```

### Sorting SearchParams

We can even call `sort()` on the `SearchParams` to sort them alphabetically.

```js
url.searchParams.sort();
```

See these in action on Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="pogrjPB" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript URL Object">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/pogrjPB">
  Vanilla JavaScript URL Object</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
