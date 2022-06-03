---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript Image Magnifier 🔎'
metaTitle: 'Vanilla JS Image Zoom - Magnify on hover (2022 Tutorial)'
metaDesc: 'Lets learn how to Magnify an Image with Vanilla JavaScript'
image: /images/27-04-2020.jpg
date: 2020-04-27T03:00:00.000Z
tags:
  - javascript
---

For me, zooming into an image is a typical JavaScript functionality where people used to rely on plugins. But join me in this tutorial, and I'll show you how easy it is to create an **image magnifier** on the hover function in **Vanilla JavaScript**.

## HTML Setup

As always, let's start with the HTML structure.

```html
<div class="container">
  <div id="zoom" class="magnify-wrapper">
    <img
      src="https://images.unsplash.com/photo-1542856204-00101eb6def4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
      id="main-img"
    />
    <div id="large-img"></div>
  </div>
</div>
```

We use the container to [perfectly center our element](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/).

Then we have a magnify-wrapper, which will act as our hover div, so once we hover this `div`, the magnifying glass will show a bigger version of the image.

Then we add the image and a ghost `div` in which we will load the large image.

CSS Structure for a Magnify Effect

```css
.magnify-wrapper {
  position: relative;
  max-height: 50vh;
}
.magnify-wrapper img {
  max-height: inherit;
}
.magnify-wrapper #large-img {
  background: url('https://images.unsplash.com/photo-1542856204-00101eb6def4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80')
    no-repeat #fff;
  width: 100px;
  height: 100px;
  box-shadow: 0 5px 10px -2px rgba(0, 0, 0, 0.3);
  pointer-events: none;
  position: absolute;
  border: 4px solid #efefef;
  z-index: 99;
  border-radius: 100%;
  display: block;
  opacity: 0;
  transition: opacity 0.2s;
}
.magnify-wrapper:hover #large-img,
.magnify-wrapper:active #large-img {
  opacity: 1;
}
```

Let's go through each element in detail:

```css
.magnify-wrapper {
  position: relative;
  max-height: 50vh;
}
```

We ensure the wrapper is relative because our magnifying glass will be in an absolute position based on this element.
Then we make it only 50% of our viewport height. You can read all about [viewport units here](https://daily-dev-tips.com/posts/how-to-work-with-css-viewport-units/).

```css
.magnify-wrapper img {
  max-height: inherit;
}
```

For the image we see, we tell it to be also 50% of the viewport by inheriting the height from our wrapper.

```css
.magnify-wrapper #large-img {
  background: url('https://images.unsplash.com/photo-1542856204-00101eb6def4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80')
    no-repeat #fff;
  width: 100px;
  height: 100px;
  box-shadow: 0 5px 10px -2px rgba(0, 0, 0, 0.3);
  pointer-events: none;
  position: absolute;
  border: 4px solid #efefef;
  z-index: 99;
  border-radius: 100%;
  display: block;
  opacity: 0;
  transition: opacity 0.2s;
}
```

Now bear with me. For the large image div, we set it to have the same image as a `background-image` with no repeat.
Then we make it show as a 100px by 100px box and add a small `box-shadow` to give it some depth.
Then as mentioned, we `position: absolute` it so it can float on top of our wrapper.
And add a border to make it visually appealing. Then we make it round by doing: `border-radius: 100%`.
And we make it completely invisible by setting `opacity: 0` and adding animation on the opacity to make it fade in.

```css
.magnify-wrapper:hover #large-img,
.magnify-wrapper:active #large-img {
  opacity: 1;
}
```

This is the last element to our `CSS`, and we tell the code if we hover our wrapper of its active, we must make the opacity of our large image div 1 (100%).

## Vanilla JS image magnifier to zoom on hover

```js
document.getElementById('zoom').addEventListener(
  'mousemove',
  function (e) {
    const original = document.getElementById('main-img'),
      magnified = document.getElementById('large-img'),
      style = magnified.style,
      x = e.pageX - this.offsetLeft,
      y = e.pageY - this.offsetTop,
      imgWidth = original.width,
      imgHeight = original.height,
      xperc = (x / imgWidth) * 100,
      yperc = (y / imgHeight) * 100;

    // Add some margin for right edge
    if (x > 0.01 * imgWidth) {
      xperc += 0.15 * xperc;
    }

    // Add some margin for bottom edge
    if (y >= 0.01 * imgHeight) {
      yperc += 0.15 * yperc;
    }

    // Set the background of the magnified image horizontal
    style.backgroundPositionX = xperc - 9 + '%';
    // Set the background of the magnified image vertical
    style.backgroundPositionY = yperc - 9 + '%';

    // Move the magnifying glass with the mouse movement.
    style.left = x - 50 + 'px';
    style.top = y - 50 + 'px';
  },
  false
);
```

Let's make it more readable section by section:

```js
document
  .getElementById('zoom')
  .addEventListener('mousemove', function (e) {}, false);
```

This code adds an `eventListener` to the element with the id `zoom` and will fire every time the `mousemove` event happens.

```js
let original = document.getElementById('main-img'),
  magnified = document.getElementById('large-img'),
  style = magnified.style,
  x = e.pageX - this.offsetLeft,
  y = e.pageY - this.offsetTop,
  imgWidth = original.width,
  imgHeight = original.height,
  xperc = (x / imgWidth) * 100,
  yperc = (y / imgHeight) * 100;
```

We then define all our variables in one go.
We start by selecting the original image, the `div` with the id `main-image, and the magnified `div`, which has id `large-image.
Then we get the entry point of the mouse by calculating the page position minus the offset on the element.
Then we get the original image size and calculate the percentage where our mouse is.

```js
// Add some margin for right edge
if (x > 0.01 * imgWidth) {
  xperc += 0.15 * xperc;
}

// Add some margin for bottom edge
if (y >= 0.01 * imgHeight) {
  yperc += 0.15 * yperc;
}
```

We added these two calculations to add some overflow on the right side and the bottom. This is needed because our hover is bigger than the image, so it must be fixed with the above code.

```js
// Set the background of the magnified image horizontal
style.backgroundPositionX = xperc - 9 + '%';
// Set the background of the magnified image vertical
style.backgroundPositionY = yperc - 9 + '%';

// Move the magnifying glass with the mouse movement.
style.left = x - 50 + 'px';
style.top = y - 50 + 'px';
```

This is the magic in the whole script; it's what makes things move; we make the `background-image` position based on the percentage of our mouse position.
Then we move this `div` based on the actual mouse position.

## Example code for image zoom on Codepen

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="ExVWgpo" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript Image Magnify 🔎">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/ExVWgpo">
  Vanilla JavaScript Image Magnifier</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
