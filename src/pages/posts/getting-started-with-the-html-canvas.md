---
layout: ../../layouts/Post.astro
title: 'Getting started with the HTML canvas'
metaTitle: 'Getting started with the HTML canvas'
metaDesc: 'Join me on my latest adventure to get to know the HTML Canvas'
image: /images/14-09-2020.jpg
date: 2020-09-14T03:00:00.000Z
tags:
  - html
  - vanillajs
  - javascript
---
My confession: I've never used canvas before this article.
I just have a cool idea in my head, which needs Canvas, so why not document my explorations using the `HTML` canvas element.

`<canvas>` is an `HTML` element which can be used to draw graphics via `JavaScript`. 

It can do quite a lot of cool things, including;

- Draw shapes
- Animations
- Combine photos
- User drawings

Today, we'll get started by exploring some of it's basic options.

It will look like this:

![HTML Canvas](https://cdn.hashnode.com/res/hashnode/image/upload/v1599917728951/VFbTJSiR_.png)

## Creating our first HTML Canvas

To create our first canvas, we don't need to do much:

```html
<canvas id="canvas">
```

This will create a default canvas element, which is 300x150 pixels. We can set the width and height on a canvas element, or style it via `CSS`.

It doesn't look like much, since we haven't rendered anything on it.

## Creating our first shape on the HTML Canvas

To add our first shape we need to use JavaScript to first get our canvas element.

```js
const canvas = document.getElementById('canvas');
```

Now we have our actual canvas element, we need to specify it's context:

```js
const ctx = canvas.getContext('2d');
```

> We can also get the 3D Engine, but that's for a later article.

Ok, let's add a square, maybe?

```js
ctx.fillRect(50, 50, 100, 100);
```

The parameters we are sending are as follows (x, y, width, height).

Cool, so now we see our first rectangle!

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="RwayBVW" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Getting started with the HTML canvas">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/RwayBVW">
  Getting started with the HTML canvas</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Other shapes

There are quite a lot of shapes we can make with the Canvas;

- Rectangles
- Paths
- Arcs
- Curves (Quadratic & Bezier)

With that, we can create any shape. Here are some examples:

### Canvas Circle

```js
// Cirlce
ctx.beginPath();
ctx.arc(100, 100, 50, 0, 2 * Math.PI);
ctx.stroke();
```

The parameters for arc are (x, y, Radius, startingAngle, endAngle)

### Canvas Triangle

```js
// Triangle
ctx.beginPath();
ctx.moveTo(200, 75);
ctx.lineTo(100, 75);
ctx.lineTo(100, 25);
ctx.fill();
```

As for the move argument is accepts the (x, y) coordinates.
And the lineTo (x, y) from where ever the moveTo is set.

### Canvas Heart

```js
// Hearth
ctx.beginPath();
ctx.moveTo(75, 40);
ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
ctx.stroke();
```

The bezierCurveTo accepts (x of control point 1, y of control point 1, x of control point 2, y of control point 2, x ending, y ending)

Find these on the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="RwaJVbM" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Getting started with the HTML canvas - Shapes">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/RwaJVbM">
  Getting started with the HTML canvas - Shapes</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

> Note: We will continue exploring in other articles! 

## Browser Support

The canvas element is well supported these days and is defiantly a good option if you want to draw vectors on screen.

![HTML Canvas support](https://caniuse.bitsofco.de/static/v1/mdn-html__elements__canvas-1599916182087.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
