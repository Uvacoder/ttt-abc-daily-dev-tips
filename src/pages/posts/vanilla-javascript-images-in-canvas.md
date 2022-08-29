---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript images in canvas'
metaTitle: 'Vanilla JavaScript images in canvas'
metaDesc: 'Learn how to add, and modify images in canvas'
image: /images/17-09-2020.jpg
date: 2020-09-17T03:00:00.000Z
tags:
  - javascript
---

Another day of canvas exploration, and today we'll be looking at using images in our canvas.

We use the `getImageData` function to read an image, which will return an `imageData` object that copies pixel data.

For each pixel, we will get the `rgba` values.

Today we will explore getting these values from an image and inverting them.

The result is this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="jOqKbVw" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript images in canvas">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/jOqKbVw">
  Vanilla JavaScript images in canvas</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

You can find my other articles about canvas modification on the following links:

- [Getting started with Canvas](https://daily-dev-tips.com/posts/getting-started-with-the-html-canvas/)
- [Save canvas as image](https://daily-dev-tips.com/posts/vanilla-javascript-save-canvas-as-an-image/)
- [Colouring our canvas elements](https://daily-dev-tips.com/posts/vanilla-javascript-colouring-our-canvas-elements/)

## Canvas adding an image

Let's first set up our `HTML` structure so we have an image and a canvas to render our new image.

```html
<img
  src="https://cdn.hashnode.com/res/hashnode/image/upload/v1600016358126/bMK5IddO3.jpeg"
  id="eeveelutions"
/>
<canvas id="canvas" width="200" height="200"></canvas>
```

There we go. We have our image, which is 200x200, and our canvas which I made for this exercise.

Next, we need to define our image and canvas in `JavaScript`.

```js
const img = document.getElementById('eeveelutions');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
```

Now we can render the image as is in our canvas:

> Note: We have to wait for the image to load. Else we will see a white image

```js
img.onload = function () {
  ctx.drawImage(img, 0, 0);
};
```

But that's for this point, not useful, so let's get the `imageData`.

```js
const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
```

> Note: For Codepen I have to add `img.crossOrigin="anonymous";` for CORS issues.

We then get an imageData object that looks something like this:

![imageData object](https://cdn.hashnode.com/res/hashnode/image/upload/v1600018317550/FnIK6xxXT.png)

As mentioned before, these are `rgba` values, so every four records is one-pixel value containing:

- red (0-255)
- green (0-255)
- blue (0-255)
- alpha (0-255, 0 = transparent, 255 = fully visible)

So to invert each pixels value, we need to do the following calculation for each of the three colors (alpha will keep 255)

- red = 255 - old value
- green = 255 - old value
- blue = 255 - old value

In code, it will look like this:

```js
for (i = 0; i < imgData.data.length; i += 4) {
  imgData.data[i] = 255 - imgData.data[i];
  imgData.data[i + 1] = 255 - imgData.data[i + 1];
  imgData.data[i + 2] = 255 - imgData.data[i + 2];
  imgData.data[i + 3] = 255;
}
```

The last step is to put this modified data back on our canvas.

```js
ctx.putImageData(imgData, 0, 0);
```

There we go. We learned how to place an image on a canvas and modify its pixel data! 🔥

> Image credit [Zerochan](https://www.zerochan.net/1995400)

## Browser Support

The imageData API, as well as canvas, have excellent support!

![HTML Canvas imageData support](https://caniuse.bitsofco.de/static/v1/mdn-api__ImageData-1600018761429.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
