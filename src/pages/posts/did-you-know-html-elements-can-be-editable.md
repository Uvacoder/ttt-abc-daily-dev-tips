---
layout: ../../layouts/Post.astro
title: 'Did you know HTML elements can be editable?'
metaTitle: 'Did you know HTML elements can be editable?'
metaDesc: 'Having some fun with the contenteditable HTML tag'
image: /images/25-08-2020.jpg
date: 2020-08-25T03:00:00.000Z
tags:
  - html
---

This is one of the `HTML` options you don't see often, but are actually really cool.

There is an `HTML` attribute called `contenteditable`, and it allows `HTML` elements to become editable 🙊.

Let me show you how it looks on this Codepen.
(Click any text!)

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="xxVgJbB" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Did you know HTML elements can be editable?">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/xxVgJbB">
  Did you know HTML elements can be editable?</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## HTML contenteditable

We can simply make an element editable by adding the `contenteditable` tag.

```html
<div class="container">
  <h1 contenteditable="true">Welcome click me 🎯</h1>
  <p contenteditable="true">
    Did you know you can click me to edit my content?<br />
    Even big paragraphs 👀
  </p>
  <a contenteditable="true" href="#">View the full article</a>
</div>
```

It can have three values:

- `contenteditable="true"` ~ We can change the content
- `contenteditable="false"` ~ Not able to change it
- `contenteditable="inherit"` ~ Whatever the parent has

## Capturing changes in JavaScript

This is cool but it doesn't do much on its own, so we can use `JavaScript` to capture the changes.

Let's bind an event listener to the input event for each `contenteditable` tag.

```js
const contents = document.querySelectorAll('[contenteditable]');

for (let content of contents) {
  content.addEventListener('input', function() {
    console.log('input changed to: ' + content.innerHTML);
  });
}
```

## Browser Support

Since this is a native `HTML` tag, it has amazing support!

![Contenteditable support](https://caniuse.bitsofco.de/image/contenteditable.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
