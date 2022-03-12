---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript toggleAttribute'
metaTitle: 'toggleAttribute between TRUE & FALSE JS Tutorial [2022]'
metaDesc: 'Learn how to toggle between two attributes in Vanilla JavaScript. See the code examples in the Codepen!'
image: /images/14-07-2020.jpg
date: 2020-07-14T03:00:00.000Z
tags:
  - javascript
---

In todays article we are going to learn about the `JavaScript` `toggleAttribute()` method. This method can be used to toggle a **boolean attribute**.

What kind of attributes? We can use the method to change a _readonly_ value or a _required_ value onclick of an element, for instance.

In today's topic, we will look into toggling the attribute values of _readonly_ and _required_ in an input element.

## HTML Structure

```html
<label
  >Required + ! ReadOnly
  <input id="inp-01" value="fuu" required />
</label>
<br /><br />
<label
  >! Required + ReadOnly
  <input id="inp-02" value="bar" readonly />
</label>
<br /><br />
<button onclick="toggleRequired()">Toggle Required</button>
<button onclick="toggleReadOnly()">Toggle ReadOnly</button>
```

So, we have two inputs. The first will be by default required but not readonly and the second will be the other way around.

Then we'll add two buttons which will toggle the required and readonly attributes onclick.

## JavaScript toggleAttribute

For the JavaScript code we first get the two inputs and then define our two functions to change the attribute values:

```js
const input01 = document.getElementById('inp-01');
const input02 = document.getElementById('inp-02');

function toggleRequired() {
  input01.toggleAttribute('required');
  input02.toggleAttribute('required');
}

function toggleReadOnly() {
  input01.toggleAttribute('readonly');
  input02.toggleAttribute('readonly');
}
```

There we go. With this JS code we can now toggle the attributes on between true and false!

### See the code examples in this Codepen

View the toggleAttribute method in action here:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="mdVjxeq" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript toggleAttribute">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/mdVjxeq">
  Vanilla JavaScript toggleAttribute</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

The method is not supported in IE (😞), but we can use a [Polyfill](https://gist.github.com/rebelchris/365f26f95d7e9f432f64f21886d9b9ef) for it!

[View on CanIUse](https://caniuse.com/#feat=mdn-api_element_toggleattribute)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
