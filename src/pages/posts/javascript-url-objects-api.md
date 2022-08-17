---
layout: ../../layouts/Post.astro
title: 'JavaScript URL Objects API'
metaTitle: 'JavaScript URL Objects API'
metaDesc: 'What is the JavaScript URL API and how can we use it?'
ogImage: /images/23-07-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/92d2f1b5-c6be-4150-2ff8-811a71350800
date: 2022-07-23T03:00:00.000Z
tags:
  - javascript
---

When working in JavaScript, there will come times when you need to either receive or manipulate information from the URL.

Luckily for us, there is the URL API.
This is a constructor that we can call on URLs to parse them in an object way.

## JavaScript URL API

Let me demonstrate how it works.

```js
const url = new URL(
  'https://user:pass@daily-dev-tips.com:3000/folder/page?param=xyz&new=true#title2'
);
```

As you can see, I decided to make quite a full URL with many things going on.

If we log this URL, we can quickly see we get a neat object with a lot of information inside it.

- **hash**: The `#` selector and everything behind it `#title2`
- **host**: The domain and optional post `daily-dev-tips.com:3000`
- **hostname**: The domain alone `daily-dev-tips.com`
- **href**: The full URL we provided `https://user:pass@daily-dev-tips.com:3000/folder/page?param=xyz&new=true#title2`
- **origin**: The complete origin including scheme `https://daily-dev-tips.com:3000`
- **password**: If a password was provided `pass`
- **pathname**: Folder and pages behind the slash `/folder/page`
- **port**: Which port was specified `3000`
- **protocol**: The protocol that was used `https:`
- **search**: The search params including ? And & `?param=xyz&new=true`
- **searchParams**: A URLSearchParams object that can be used to get individual search params
- **username**: The specified username `user`

The exciting part is that the `window.location` (a Location object) contains all of these plus some additional fields.

When extracting multiple fields, a quick tip is to use object destructuring.

Let's say we want only to get the origin, pathname, and search.

```js
const { origin, pathname, search } = new URL(link);

console.log(origin + pathname + search);

// https://daily-dev-tips.com:3000/folder/page?param=xyz&new=true
```

## Modifying URL params

We can also take the above parameters and quickly update them.

For instance, what if we want to change the hash location.

```js
url.hash = 'title4';

// https://user:pass@daily-dev-tips.com:3000/folder/page?param=xyz&new=true#title4
```

Or if we want to change the pathname.

```js
url.pathname = 'register';

// https://user:pass@daily-dev-tips.com:3000/register?param=xyz&new=true#title4
```

After modifying the object, you might want to receive the entire string rather than an object.

You can use the `toString()` method to achieve that.

```js
url.toString();
```

## JavaScript URL SearchParams

Now let's look at the search parameters. These are all items marked after a `?` or `&`.

### JavaScript SearchParams get Specific value

To get just one specific value we use the following code:

```js
console.log(url.searchParams.get('param'));
// xyz
```

Additionally we can even get all if there are more of them:

```js
console.log(url.searchParams.getAll('param'));
// ["xyz"]
```

### Check if SearchParams has a specific key

In the above example, we are guessing we have the param, but what if we are not sure?

```js
console.log(url.searchParams.has('param'));
// true
console.log(url.searchParams.has('fake_param'));
// false
```

### Getting all SearchParams keys

But maybe we want to get all keys to loop over manually?

```js
const keys = url.searchParams.keys();
for (let key of keys) {
  console.log(key);
}
// param
// new
```

Or, perhaps we just want the values:

```js
const values = url.searchParams.values();
for (let value of values) {
  console.log(value);
}
// xyz
// true
```

We can even just loop over both:

```js
url.searchParams.forEach(function (value, key) {
  console.log(key, value);
});
// param xyz
// new true
```

### Modifying SearchParams

Another element that comes in handy is the option to modify the `SearchParams`; we can append/change or delete them.

Append:

```js
url.searchParams.append('search', 'JavaScript');
// search: "?param=xyz&new=true&search=JavaScript"
```

Set:

```js
url.searchParams.set('search', 'HTML');
// search: "?param=xyz&new=true&search=HTML"
```

Or remove:

```js
url.searchParams.delete('search');
// search: "?param=xyz&new=true"
```

### Sorting SearchParams

We can even call `sort()` on the `SearchParams` to sort them alphabetically.

```js
url.searchParams.sort();
```

You can try all of these in the following CodePen.

<p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="vYRXdQY" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/vYRXdQY">
  JavaScript find min/max from array of objects</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Browser Support

You can safely use the URL API in all modern browsers.

<picture>
<source type="image/webp" srcset="https://caniuse.bitsofco.de/image/url.webp">
<source type="image/png" srcset="https://caniuse.bitsofco.de/image/url.png">
<img src="https://caniuse.bitsofco.de/image/url.jpg" alt="Data on support for the url feature across the major browsers from caniuse.com">
</picture>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
