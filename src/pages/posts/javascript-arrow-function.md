---
layout: ../../layouts/Post.astro
title: 'JavaScript Arrow Function'
metaTitle: 'JavaScript Arrow Function'
metaDesc: 'Turning regular functions into Arrow Functions'
image: /images/27-05-2020.jpg
date: 2020-05-27T03:00:00.000Z
tags:
  - javascript
---

We all know the basics of `JavaScript` functions, but since ES6 came out, we can use `JavaScript` Arrow Functions.
These arrow functions make our jobs as developers easier and are super easy to switch to.

## JavaScript functions

Before we look into the Arrow Functions, let's look at how we did functions in regular `JavaScript`.

```js
myFunction = function (name) {
  return `Hi ${name}`;
};
```

That would be a fundamental function, but let's see how this translates to an Arrow Function.

## JavaScript Arrow Functions

So let's stick with the above example. We can convert it into an Arrow Function as such:

```js
myFunction = (name) => {
  return `Hi ${name}`;
};
```

In essence we replace `function()` with just `()` and add the `=>` arrow command.

To be blunt, we can make it even shorter since Arrow Functions will return by default.

```js
hello = () => 'Hi there!';
```

## Arrow Function Parameters

You're probably wondering how we can include parameters; we can pass them into the first brackets like such:

```js
hello = (name) => `Hi ${name}`;
```

Even better, if we only have one parameter, we can forget about the brackets like such:

```js
hello = (name) => 'Hi ' + name;
```

I hope you learned something about the basic usage of Arrow Functions; I challenge you to use these in your next project!

Feel free to view this on Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="dyYLNwV" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JavaScript Arrow Function">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/dyYLNwV">
  JavaScript Arrow Function</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
