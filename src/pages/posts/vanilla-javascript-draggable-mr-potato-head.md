---
layout: ../../layouts/Post.astro
title: 'Draggable Mr Potato Head Parts in JavaScript 🥔'
metaTitle: 'Draggable Mr Potato Head JS Tutorial [2022] 🥔'
metaDesc: 'Learn how to recreate the iconic Mr. Potato head in JavaScript by dragging parts to other positions on the screen canvas! See the example in Codepen!'
image: /images/03-10-2020.jpg
date: 2020-10-03T03:00:00.000Z
tags:
  - javascript
---

Who doesn't like Mr. and Mrs. Potato Head!

Today we will recreate the iconic Mr. Potato Head in `JavaScript`.
Then we will learn to drag all of Mr. Potato Heads parts on the screen to his body.

![Mr. Potato Head](https://media.giphy.com/media/9GimADqtnpAPe/giphy.gif)

### Try the example code on Codepen

<p class="codepen" data-height="472" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="XWdGZqq" style="height: 472px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript draggable Mr Potato Head 🥔">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/XWdGZqq">
  Vanilla JavaScript draggable Mr Potato Head 🥔</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## HTML Structure

As for our `HTML`, we have the following setup.

```html
<div class="container">
  <div class="parts">
    <img src="https://i.imgur.com/GONNbHf.png" class="draggable" />
    <img src="https://i.imgur.com/optSzq4.png" class="draggable" />
    <img src="https://i.imgur.com/qJDxc4o.png" class="draggable" />
    <img src="https://i.imgur.com/tIZGoeR.png" class="draggable" />
    <img src="https://i.imgur.com/bKlbeXU.png" class="draggable" />
    <img src="https://i.imgur.com/eUPbX3H.png" class="draggable" />
    <img src="https://i.imgur.com/voJPsR5.png" class="draggable" />
    <img src="https://i.imgur.com/dt2gqit.png" class="draggable" />
    <img src="https://i.imgur.com/2POeyJZ.png" class="draggable" />
  </div>
  <div class="body">
    <img src="https://i.imgur.com/kXbr8Tb.png" />
  </div>
</div>
```

So we use the container to wrap all image tags. Then we have the Mr. Potato Head parts div. It contains each body part with a class of `draggable`.

And we have our body, which is Mr. Potato's body. The body is where we want to **drag the elements with JavaScript**.

## CSS Styling

We use [flexbox to center](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/) our two divs.

```css
.container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 100vh;
  background: #efefef;
}
```

The Parts container is then `relative`, and we add a small border to make it look nicer.

```css
.container .parts {
  position: relative;
  border: 3px dashed black;
  width: 250px;
  height: 100vh;
}
```

Each PNG will be `absolute` so we can place it anywhere on the page.

```css
.container .parts img {
  position: absolute;
}
```

## Vanilla JavaScript draggable Mr. Potato Head elements

To make an actual Mr. Potato Head, we need to ensure all the HTML elements for his body parts are draggable!

> I did not use [the `draggable` element](https://daily-dev-tips.com/posts/vanilla-javascript-drag-n-drop/) since that requires a dropzone, and it doesn't serve this article.

Let's start by getting our elements with the class `draggable`.

```js
const draggableElements = document.querySelectorAll('.draggable');
```

Then we need to define four essential variables. We will use them to store our position.
We also add a whichDown variable to see which element is dragging.

```js
let initX, initY, firstX, firstY, whichDown;
```

Next on our list is to loop over each element.

```js
draggableElements.forEach((element) => {
  // Code here
});
```

Then we need to attach a `mousedown` event listener. This will be our starting point. We will define the current x and y position using `offsetLeft` and `offsetTop`.
Then we get the mouse positions x and y.

And we attach an event listener to `mousemove` since that will be us, dragging apart. Once we move our mouse, we call the `draggable` function, which we will make in a second.

```js
draggableElements.forEach((element) => {
  element.addEventListener('mousedown', function (e) {
    e.preventDefault();
    whichDown = this;
    initX = this.offsetLeft;
    initY = this.offsetTop;
    firstX = e.pageX;
    firstY = e.pageY;
  });
});

window.addEventListener('mousemove', draggable, false);
```

Let's start with our JS function to **drag elements** on the screen.

All this function does is change our part's `left` and `top` positions. And Set the `z-index` higher, so it's on top.

```js
function draggable(e) {
  e.preventDefault();
  if (!whichDown) return;
  whichDown.style.zIndex = 9;
  whichDown.style.left = initX + e.pageX - firstX + 'px';
  whichDown.style.top = initY + e.pageY - firstY + 'px';
}
```

We calculate the element's original position + the dragged amount - the initial mouse x.
And the same goes for the y position.

That's cool, but we cannot stop it now.
So let's add a `mouseup` listener.

```js
window.addEventListener(
  'mouseup',
  function () {
    if (whichDown) {
      whichDown.style.zIndex = 0;
    }
    whichDown = null;
  },
  false
);
```

In this section, we add a `mouseup` event to our window, and once that happens, we remove the `z-index` from our dragging element and remove the draggable which down element.

That is it. We can now drag HTML elements on the screen as showcased on Mr. Potato Head's body!

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
