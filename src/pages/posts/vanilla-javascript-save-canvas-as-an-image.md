---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript save canvas as an image'
metaTitle: 'Save Canvas as an Image Vanilla JS tutorial [2022]'
metaDesc: 'Guide explaining how exporting our Canvas drawing as an image to download. Try the Codepen to see yourself.'
image: /images/15-09-2020.jpg
date: 2020-09-15T03:00:00.000Z
tags:
  - javascript
---

Yesterday, we started our introductory [canvas course](https://daily-dev-tips.com/posts/getting-started-with-the-html-canvas/).

In this JavaScript tutorial, we will learn _how to save the canvas as an image_ and download it.

So how do we convert the canvas to export it as an **image**?

There are two ways of doing this. And we will explore both.

### Live Code example in Codepen

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="rNevrXg" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript save canvas as image ">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/rNevrXg">
  Vanilla JavaScript save canvas as image </a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 1. Canvas to Image with Right-click to save

Everyone knows this option, but we can **right-click** on the canvas to **save it as an image**.

This will only work in specific browsers. That's why it's not the correct way of saving the image.

![Canvas save to image right click](https://cdn.hashnode.com/res/hashnode/image/upload/v1599918970840/G1-S4b4nq.png)

> Note: Keep in mind the canvas has no background!

## 2. Download the button to save an image from the canvas

The second solution is to add a **download button** to our page. The button will then export the canvas content and open the base64 image in another tab. And from there, you can download the image.

Add the download button.

```html
<canvas id="canvas" height="200"></canvas>
<br />
<button id="download">Download</button>
```

Now let's add the button variable to our `JavaScript` code:

```js
const download = document.getElementById('download');
```

Awesome. We need to add an `eventListener` to it and listen to the click command.

```js
download.addEventListener('click', function (e) {
  const link = document.createElement('a');
  link.download = 'download.png';
  link.href = canvas.toDataURL();
  link.click();
  link.delete;
});
```

We create a temporary link `href` on which we will place the canvas's data URL and then click it.

We are using the `toDataURL` function, which returns a base64 image string that looks something like this:

```js
// "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNby
// blAAAADElEQVQImWNgoBMAAABpAAFEI8ARAAAAAElFTkSuQmCC"
```

## Browser Support

The canvas element is well supported these days and is defiantly a good option if you want to draw vectors on screen.

![Browser support HTML canvas](https://caniuse.bitsofco.de/static/v1/mdn-html__elements__canvas-1599916182087.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
