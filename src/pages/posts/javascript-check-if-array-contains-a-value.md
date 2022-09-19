---
layout: ../../layouts/Post.astro
title: 'JavaScript check if array contains a value'
metaTitle: 'JavaScript check if array contains a value'
metaDesc: 'Different ways to check if an array includes a value in Vanilla JavaScript'
image: /images/27-01-2022.jpg
date: 2022-01-27T03:00:00.000Z
tags:
  - javascript
---

Let's sketch the use case. We have some roles that can access a particular page.
So only people with that specific role should be able to continue.

These valid roles are defined in an array.

```js
const roles = ['moderator', 'administrator', 'superman'];
```

How can we check whether a user's role is part of this list?

For the sake of this article, we'll assume the user's role is a simple string like so:

```js
const role = 'user';
```

There are a couple of options for us here. Let's take a look at each of them.

## JavaScript includes

This might be my personal most used option. It's quick and straightforward and has no weird overhead.

This [`includes` method](https://daily-dev-tips.com/posts/vanilla-javascript-string-includes/) will return true or false if it can find the string you are looking for.

```js
roles.includes('user');
// false

roles.includes('moderator');
// true
```

## JavaScript indexOf

We can also use indexOf, which will return `-1` if it can't find the item or the actual index if it does.

```js
roles.indexOf('user');
// -1

roles.indexOf('superman');
// 2
```

This could be super helpful if you need the item's index anyway, but I think `includes` should work better for you if you don't.

## JavaScript some

Another way of doing this is using the [`some` method](https://daily-dev-tips.com/posts/javascript-some-method/). This will return a boolean like the `includes` method.

It will return if some of the items in the array match the search query.

```js
roles.some((role) => role === 'user');
// false

roles.some((role) => role === 'moderator');
// true
```

Again, depending on the use case, this could be the better solution, mainly good if you have to check for multiple things to match.

## JavaScript find

The [`find` method](https://daily-dev-tips.com/posts/javascript-find-function/) is a new way of searching an array, and it will return undefined or the item.

```js
roles.find((role) => role === 'user');
// undefined

roles.find((role) => role === 'moderator');
// 'moderator'
```

This method is perfect if you need the entire object to do something with.
Imagine the roles being an object, and we want to use another property of this object.

And there you go, multiple ways of checking if an array contains a value.

You can try all of these out in the following CodePen (Note: Open your terminal)

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="ExwJjgr" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/ExwJjgr">
  JavaScript startsWith and multiple conditions</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
