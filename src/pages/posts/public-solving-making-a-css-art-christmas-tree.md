---
layout: ../../layouts/Post.astro
title: "Public Solving: Making a CSS art Christmas tree"
metaTitle: "Public Solving: Making a CSS art Christmas tree"
metaDesc: 'How to create a Christmas tree in CSS art'
image: /images/23-12-2021.jpg
date: 2021-12-23T03:00:00.000Z
tags:
  - devadvent
  - css
---
Today's puzzle is a bit different than anything we did before, as we are asked to hand over our version of a Christmas tree in CSS art.

[You can find the complete puzzle here.](https://github.com/devadvent/puzzle-12)

Coincidental I wrote a whole article on this approach last year, as there are many ways to achieve this.
But all come with some pitfalls.

[Read the article on creating tree Christmas threes in CSS](https://daily-dev-tips.com/posts/three-christmas-trees-in-css/)

## Creating a CSS Christmas Tree

For this puzzle, I've decided to use the clip-path version. During my research last year, this was the cleanest and most versatile version.

To set it up we need the following divs:

```html
<div class="xmas-tree">
  <div class="shadow"></div>
  <div class="layer"></div>
  <div class="shadow"></div>
  <div class="layer"></div>
  <div class="layer"></div>
</div>
```

As you can see, there are three layers and two shadow layers.

As for the main wrapper I've decided to not recalculate the clip-paths but rather use a scale transform to make it a bit bigger:

```css
.xmas-tree {
  position: relative;
  margin-top: 20px;
  transform: scale(3, 3);
  top: -250px;
  left: -150px;
}
```

> Note: this is the cheap way of doing it 😅 *(We should have opted to change the clip-paths)

Then the layer element will actually do most of the work to make a conic shape.

```css
.xmas-tree .layer {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: green;
  clip-path: polygon(50% 5%, 100% 85%, 100% 100%, 0 100%, 0 85%);
}
```

This works because it actually creates a square, this gets converted to a circle, and we cut a sphere out.

![CSS Clip path in action](https://cdn.hashnode.com/res/hashnode/image/upload/v1606977063258/5OgLt-Mpe.jpeg)

The shadow layer uses the same pattern, but we slightly offset the conic sphere.

```css
.xmas-tree .shadow {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: black;
  clip-path: polygon(50% 0%, 0% 110%, 95% 100%);
  margin-top: 20px;
  margin-left: 10px;
}
```

However, now all the layers are stacked on top of each other. So let's offset them all a bit.

```css
.xmas-tree div:nth-child(1) {
  transform: translateY(5px);
  z-index: 3;
}
.xmas-tree div:nth-child(2) {
  transform: translateY(0);
  z-index: 3;
}
.xmas-tree div:nth-child(3) {
  transform: translateY(40px);
  z-index: 2;
}
.xmas-tree div:nth-child(4) {
  transform: translateY(35px);
  z-index: 2;
}
div:nth-child(5) {
  transform: translateY(70px);
  z-index: 1;
}
```

And for the cherry on top, let's add an emoji star to our tree.

```css
.xmas-tree:before {
  content: '⭐️';
  position: absolute;
  left: 42px;
  z-index: 10;
  top: -9px;
}
```

Resulting in the following:

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="OJxbbxQ" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/OJxbbxQ">
  Untitled</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
