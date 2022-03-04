---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript Scroll to Top'
metaTitle: 'Scroll to Top Vanilla JS Tutorial [2022]'
metaDesc: 'Guide to learn how to smoothtly scroll back to the top of the page in Vanilla JavaScript. See the example in Codepen!'
image: /images/13-06-2020.jpg
date: 2020-06-13T03:00:00.000Z
tags:
  - vanillajs
  - javascript
---

In today's tutorial, we will learn **how to scroll to the top** of a page in `Vanilla JavaScript`.

So let's code a `JavaScript` powered scroll to top function.

We will create a button that will sit at the right bottom of the page. Once we click it, it will take us **back to the top** of the page with a smooth scroll.

> Also view my article about a [plain HTML scroll to top](https://daily-dev-tips.com/posts/plain-html-scroll-to-top/)

## HTML Structure

```html
<button onclick="scrollToTop()" class="scroll-top">☝️</button>
```

That is all we are going to need. We will define some `CSS` and build the scroll to top function in `JavaScript`.

## CSS Setup

```css
.scroll-top {
  position: fixed;
  bottom: 25px;
  right: 25px;
  z-index: 99;
  outline: none;
  background-color: #efefef;
  border: 1px solid #333;
  cursor: pointer;
  padding: 15px;
  border-radius: 4px;
}
```

The scroll button gets a `position: fixed`, and we offset it to the right bottom with the bottom and right.
We then do some general styling to make it look like a box.

## Vanilla JS Scroll to Top

It's good to note there are many ways of scrolling the browser window to the top.
We can also use the [scrollIntoView](https://daily-dev-tips.com/posts/vanilla-javascript-element-scrollintoview/) function, as shown in this article.

But today, we are using the plain JavaScript **scroll function**.

This is our scrollToTop JavaScript function. We can define the position we need to scroll to and the behavior.

```js
function scrollToTop() {
  window.scroll({top: 0, left: 0, behavior: 'smooth'});
}
```

Another way of doing the scroll can be with `scrollTo`:

```js
window.scrollTo(0, 0);
```

### See the code examples in this Codepen

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="pogyOzm" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript Scroll to Top">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/pogyOzm">
  Vanilla JavaScript Scroll to Top</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

Unfortunately, the scroll API is not fully supported!

![Scroll to top browser support](https://caniuse.bitsofco.de/image/element-scroll-methods.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
