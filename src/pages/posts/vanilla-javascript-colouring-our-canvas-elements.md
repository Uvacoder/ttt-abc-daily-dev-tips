---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript colouring our canvas elements 🌈'
metaTitle: 'Vanilla JavaScript colouring our canvas elements 🌈'
metaDesc: 'Adding some colour to our canvas art'
image: /images/16-09-2020.jpg
date: 2020-09-16T03:00:00.000Z
tags:
  - javascript
---

So far, we have learned the [basics of the canvas](https://daily-dev-tips.com/posts/getting-started-with-the-html-canvas/) and how to [export it as an image](https://daily-dev-tips.com/posts/vanilla-javascript-save-canvas-as-an-image/). But it was all plain looking, so let's go ahead and explore our coloring options for the canvas.

Today we'll learn how to make the following;

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="ZEWogag" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript colouring our canvas elements 🌈 - transparency">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/ZEWogag">
  Vanilla JavaScript colouring our canvas elements 🌈 - transparency</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Option for coloring

We have been using `fillRect` and `stroke` options.
If we want to add color to this, we can use the following two options:

- fillStyle => Colour for the inside of our element
- strokeStyle => Colour for the stroke

Let's say we want to make our block purple. All these options will result in the same result:

```js
ctx.fillStyle = 'purple';
ctx.fillStyle = '#800080';
ctx.fillStyle = 'rgb(128, 0, 128)';
ctx.fillStyle = 'rgba(128, 0, 128, 1)';
```

Let's try this out on our basic square in Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="BaKxPmW" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript colouring our canvas elements 🌈 - FillStyle">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/BaKxPmW">
  Vanilla JavaScript colouring our canvas elements 🌈 - FillStyle</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

The same can be used for our strokeStyle as such:

```js
ctx.strokeStyle = 'purple';
ctx.strokeStyle = '#800080';
ctx.strokeStyle = 'rgb(128, 0, 128)';
ctx.strokeStyle = 'rgba(128, 0, 128, 1)';
```

And that will result in the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="qBZYeVa" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript colouring our canvas elements 🌈 - StrokeStyle">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/qBZYeVa">
  Vanilla JavaScript colouring our canvas elements 🌈 - StrokeStyle</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Using transparency on canvas elements

The cool part you might have spotted is the `rgba` method.

We can set our transparency and have overlapping elements like this:

```js
ctx.fillStyle = 'rgba(46, 196, 182, 0.5)';
ctx.fillRect(25, 25, 100, 100);

ctx.fillStyle = 'rgba(231, 29, 54, 0.5)';
ctx.fillRect(75, 75, 100, 100);
```

This will result in the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="ZEWogag" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript colouring our canvas elements 🌈 - transparency">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/ZEWogag">
  Vanilla JavaScript colouring our canvas elements 🌈 - transparency</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

The canvas element is well supported these days and is defiantly a good option if you want to draw vectors on screen.

![HTML Canvas support](https://caniuse.bitsofco.de/static/v1/mdn-html__elements__canvas-1599916182087.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
