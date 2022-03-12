---
layout: ../../layouts/Post.astro
title: 'JavaScript mouse drawing on the canvas 👨‍🎨'
metaTitle: 'Draw on canvas with mouse Vanilla JS Tutorial [2022]'
metaDesc: 'Tutorial to learn how to track mouse movement and then draw on an HTML canvas with JavaScript. See the Codepen example.'
image: /images/07-10-2020.jpg
date: 2020-10-07T03:00:00.000Z
tags:
  - javascript
  - canvas
---

Today I wanted to continue to learn about the **HTML canvas element**. Let's see how to _draw on the canvas with our mouse_.

It turns out it's pretty simple and easy to implement with _JavaScript_!

### Live code example on Codepen

We'll be building this excellent drawing app. Try it out and have a peek at the code.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="wvGbEVQ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JavaScript mouse drawing on the canvas 👨‍🎨">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/wvGbEVQ">
  JavaScript mouse drawing on the canvas 👨‍🎨</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## HTML Structure

The `HTML` could not be more straightforward. All we need is one big HTML canvas element.

```html
<canvas id="canvas"></canvas>
```

## Styling for app and canvas

As for our CSS to style our code example, all we need to do is

1. remove our default margin
2. create a cool [emoji cursor](https://daily-dev-tips.com/posts/css-exploring-all-cursor-options/) and
3. set canvas width and height to be the same size as the [viewport](https://daily-dev-tips.com/posts/how-to-work-with-css-viewport-units/).

```css
* {
  margin: 0;
  padding: 0;
  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>✍️</text></svg>")
      16 0, auto;
}
canvas {
  width: 100vw;
  height: 100vh;
}
```

## Canvas mouse draw with JavaScript

The fun part is the `JavaScript` code to track our mouse movements for **drawing on the canvas**.

Let's start by defining our JS variables:

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let coord = { x: 0, y: 0 };
```

We need to get the canvas element and retrieve it based on its ID.
Then we get the canvas's context (that's where we draw on).

Next, we define our base coordinates.

Let's attach event listeners for:

- mousedown (start registering our drawing)
- mouseup (stop the drawing)
- resize (resize the canvas)

```js
document.addEventListener('mousedown', start);
document.addEventListener('mouseup', stop);
window.addEventListener('resize', resize);
```

Let's start with the resize function. This JS function will resize the canvas based on our browser viewport. It will make the canvas size 100% or change the canvas width and height.

We also call this function right away.

```js
function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

resize();
```

Let's define our mousedown (start) function.

```js
function start(event) {
  document.addEventListener('mousemove', draw);
  reposition(event);
}
```

This function will invoke the listener for mousemove, so we don't have to keep listening to it.
Then we call our reposition function, which will register our mouse position.

The reposition function will look like this:

```js
function reposition(event) {
  coord.x = event.clientX - canvas.offsetLeft;
  coord.y = event.clientY - canvas.offsetTop;
}
```

On to the stop function:

```js
function stop() {
  document.removeEventListener('mousemove', draw);
}
```

We only need to stop listening to our register mousemove function.

The last function we will make is the draw function. The **draw** function will _paint lines_ on the canvas.

```js
function draw(event) {
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#ACD3ED';
  ctx.moveTo(coord.x, coord.y);
  reposition(event);
  ctx.lineTo(coord.x, coord.y);
  ctx.stroke();
}
```

Let me explain the code snippet in order:

- We begin a new path.
- We set the line width to 5 pixels.
- We change the line endings to round.
- We set the color to blue.
- We change our position to the initial position and move the canvas point to the moved position.
- Then, we draw a line between these two points.
- Last, we call the stroke to color it.

That's it. This code can draw lines on an HTML canvas with our mouse.

If you want to read more about the canvas element, check out these articles:

- [Getting started with the HTML canvas](https://daily-dev-tips.com/posts/getting-started-with-the-html-canvas/)
- [Vanilla JavaScript save canvas as an image](https://daily-dev-tips.com/posts/vanilla-javascript-save-canvas-as-an-image/)
- [Vanilla JavaScript colouring our canvas elements 🌈](https://daily-dev-tips.com/posts/vanilla-javascript-colouring-our-canvas-elements/)
- [Vanilla JavaScript images in canvas](https://daily-dev-tips.com/posts/vanilla-javascript-images-in-canvas/)
- [Vanilla JavaScript canvas images to black and white](https://daily-dev-tips.com/posts/vanilla-javascript-canvas-images-to-black-and-white/)
- [Checkboxify your images with JavaScript ✅](https://daily-dev-tips.com/posts/checkboxify-your-images-with-javascript/)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
