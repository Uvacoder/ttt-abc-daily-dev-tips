---
layout: ../../layouts/Post.astro
title: 'Get and Set Data Attributes with JavaScript'
metaTitle: 'Get data attribute Vanilla JS Tutorial [2022]'
metaDesc: 'Today we use the HTML5 Dataset API to get and set custom Data Attributes in JavaScript. See the examples in the Codepen and try it out.'
image: /images/19-04-2020.jpg
date: 2020-04-19T03:00:00.000Z
tags:
  - javascript
---

Did you ever use some weird class like `class="user-fuu"` for `JavaScript` to pick up this class?

Since the `HTML5` specification, we can use something better for this, called data attributes!

Let's dive into data attributes and get an HTML element with them.

## HTML Markup

```html
<div id="demo" data-user="fuu" data-custom-emoji="🔥"></div>
```

This is a straightforward example. We can use a data attribute `data-` with a name for each element we want to add. Note we use multiple dashes instead of spaces.

## Vanilla JS get element with the dataset API

So `HTML5` brings us the excellent Dataset API, much like the `classList`, as we [explored before](https://daily-dev-tips.com/posts/vanilla-javascript-classlist/). But it's not quite as impressive.

We can use it to get and set data attributes.

### Getting a Data Attribute

To get the value from a data attribute in JavaScript we can use the following code:

```js
const element = document.getElementById('demo');

console.log(element.dataset.user);
console.log(element.dataset.customEmoji);

// fuu
// 🔥
```

Pretty cool, right!

Note that, to get the data from the attribute, we have to use `camelCase` writing in our code for the attributes with multiple dashes. That's the rule.

### Setting Data Attributes

To set the value of data attribute, we use the same dataset API again:

```js
element.dataset.customEmoji = '⚡️';
element.dataset.bar = 'Fuu?';
console.log(element.dataset.customEmoji);
console.log(element.dataset.bar);

// ⚡️
// Fuu?
```

As you can see, we can easily overwrite data attributes and even add new values!

Magic powers, and trust me, you will use this quite often.

## Alternative method setAttribute and getAttribute

An alternative is using `setAttribute` and `getAttribute` methods in JavaScript.

```js
element.setAttribute('data-custom-emoji', '🤟');
console.log(element.getAttribute('data-custom-emoji'));
// 🤟
```

As you can see, this method needs the `dash-style` again.

## Using Data Attributes in CSS

Another strong value for data attributes is that they can be accessed in CSS!

Look at this example:

```css
[data-user] {
  width: 50px;
  height: 50px;
  background: teal;
  border-radius: 50%;
}
```

Wow, what can these bad boy data attributes not do right!

### See the JavaScript code examples in this Codepen

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="JjYGVQb" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript Data Attributes">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/JjYGVQb">
  Vanilla JS Data Attributes set and get</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser support

Outstanding browser support for dataset, so why not use it!

![browser support for data attributes](https://caniuse.bitsofco.de/image/dataset.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
