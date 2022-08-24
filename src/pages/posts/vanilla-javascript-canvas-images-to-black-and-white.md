---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript canvas images to black and white'
metaTitle: 'Convert image colors to grayscale in Vanilla JavaScript'
metaDesc: 'Lets make our images black and white using JavaScript and canvas'
image: /images/18-09-2020.jpg
date: 2020-09-18T03:00:00.000Z
tags:
  - javascript
---

We saw how to [use images on our canvas](https://daily-dev-tips.com/posts/vanilla-javascript-images-in-canvas/) and even invert the colors.

But what if we want to convert them to only three color options?

The color options we will be using are;

- black
- white
- grey (only 1 type!)

This will abstract our image and teaches us how to create grayscale images with JavaScript.

Today's result will look like this:

![image converted to greyscale colors](https://cdn.hashnode.com/res/hashnode/image/upload/v1600097754806/esNKx737T.png)

## JavaScript to convert image to grayscale

As you can see in yesterday's article, we are also using the `getImageData` function.

```js
const img = document.getElementById('eeveelutions');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

img.onload = function () {
  ctx.drawImage(img, 0, 0);
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  // Code comes here
};
```

This returns `rgba` color values, so as yesterday, we need to loop over every 4th child.

```js
for (i = 0; i < imgData.data.length; i += 4) {}
```

Okay, now we get 4-pixel values, being `rgba`.
The alpha we won't use, but we want to get one combined value for the `rgb`.

Let's add up the three values for red, green, and blue.

```js
let count = imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2];
```

This will give us a pixel number between 0 (black) and 765 (white).

In our case, we also add one grayscale layer, so we get the following three calculations:

- 0-255 = black
- 256-510 = gray
- 511-765 = white

That being said, we can have the following code:

```js
let colour = 0;
if (count > 510) colour = 255;
else if (count > 255) colour = 127.5;
```

Here we defined our default colors to be black (0), white (255), and gray (127.5)

We can then append our color to the first three values of the pixel and 255 to our alpha layer.

```js
imgData.data[i] = colour;
imgData.data[i + 1] = colour;
imgData.data[i + 2] = colour;
imgData.data[i + 3] = 255;
```

Then we need to put the data back into our canvas.

```js
ctx.putImageData(imgData, 0, 0);
```

There we go. We just converted our image into three colors!

Have a play around on this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="ZEWRoMg" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript canvas images to black and white">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/ZEWRoMg">
  Vanilla JavaScript canvas images to black and white</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## JavaScript to convert image to black and white

We can even change the image to pure black and white by using the following color calculations:

- black = 0 - 382
- white = 383 - 765

And it will result in the following Javascript loop:

```js
for (i = 0; i < imgData.data.length; i += 4) {
  let count = imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2];
  let colour = 0;
  if (count > 383) colour = 255;

  imgData.data[i] = colour;
  imgData.data[i + 1] = colour;
  imgData.data[i + 2] = colour;
  imgData.data[i + 3] = 255;
}
```

### Find the JS code example for the conversion to monochrome colors on Codepen

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="WNwyyYv" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript canvas images to black and white - pure B&amp;amp;W">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/WNwyyYv">
  Vanilla JavaScript canvas images to black and white - pure B&amp;W</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

The imageData API, as well as canvas, have excellent support!

![HTML Canvas imageData support](https://caniuse.bitsofco.de/static/v1/mdn-api__ImageData-1600018761429.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
