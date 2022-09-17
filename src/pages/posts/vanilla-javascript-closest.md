---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript Closest'
metaTitle: 'Get closest element Vanilla JS Tutorial'
metaDesc: 'What is the JavaScript closest method?'
image: /images/13-07-2020.jpg
date: 2020-07-13T03:00:00.000Z
tags:
  - javascript
---

Today we will learn about the Vanilla `JavaScript` closest method. We will find out what it is, how it works, and build a demo code to use it.

## What is the JavaScript closest method?

It's a JavaScript method that finds the closest parent element to a specific HTML element. It accepts a CSS selector, so the JavaScript syntax looks like this:

```js
const closestElement = myElement.closest(selectors);
```

In this syntax, the `myElement` is from where we will start searching. The method will look upwards until it finds the selector we specified and returns the matching ancestor element.

The selector can be a `DOMString`, e.g.: `a:hover, label + input`

## HTML Structure

To test the closest method, we are going to make the following `HTML` structure:

```html
<article>
  <div class="grand-parent">
    <div class="parent">
      <a href="#">
        <div id="myElement">This is me</div>
      </a>
    </div>
  </div>
</article>
```

## Example of using the Closest Method in Vanilla JavaScript

```js
const myElement = document.getElementById('myElement');

const closest1 = myElement.closest('.parent');
console.log(closest1); // div class = parent

const closest2 = myElement.closest('div div');
console.log(closest2); // div id = myElement

const closest3 = myElement.closest('a');
console.log(closest3); // a href element

const closest4 = myElement.closest(':not(div)');
console.log(closest4); // a href element

const closest5 = myElement.closest('article');
console.log(closest5); // the Article

const closest6 = myElement.closest('article > div');
console.log(closest6); // Div with grand-parent class
```

As you can see, it's a very versatile JavaScript method. It accepts multiple ways of getting the parent elements we want.

### Try Vanilla JS `closest()` in this Codepen

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="WNryVgp" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="WNryVgp">
  <span>Closest Vanilla JavaScript method code example <a href="https://codepen.io/rebelchris/pen/WNryVgp">
  WNryVgp</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support for `closest()`

The method is not supported in IE (Boooh!), but we can use a [Polyfill](https://vanillajstoolkit.com/polyfills/closest/) for it!

![Element.closest support](https://caniuse.bitsofco.de/image/element-closest.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
