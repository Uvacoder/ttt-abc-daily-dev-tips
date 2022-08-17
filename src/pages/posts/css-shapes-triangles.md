---
layout: ../../layouts/Post.astro
title: 'CSS Shapes - Triangles'
metaTitle: 'CSS Shapes - Triangles'
metaDesc: 'Creating all sort of triangles using CSS'
image: /images/24-03-2021.jpg
date: 2021-03-24T03:00:00.000Z
tags:
  - css
---

Yesterday we had our first [introduction in CSS Shapes](https://daily-dev-tips.com/posts/css-shapes-the-basics/) and started with the basic shapes.

Today I want to check out a very useful and a bit of an odd shape.
The triangle has many ways of building, but most people use the border hack to create them.

## Creating triangles in CSS

Let's create a basic down carrot.

```html
<div class="triangle-down"></div>
```

For the demo purpose, I added some colors to see what actually makes it appear like a triangle.

```css
.triangle-down {
  width: 0;
  height: 0;
  border-left: 50px solid red;
  border-right: 50px solid purple;
  border-top: 100px solid blue;
}
```

The actual magic part is the `border-top`. We'll see that's what we'll see, but we are offsetting the left and right by half of it.
In the example, I added a red and purple color.

This will result in the following:

![CSS Triangle](https://cdn.hashnode.com/res/hashnode/image/upload/v1616224807082/1_ZjpStkC.jpeg)

As you can see, the result is looking like a triangle.
To make this perfect, we need to set the sides to `transparent`.

```css
.triangle-down {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 100px solid blue;
}
```

![CSS Down triangle](https://cdn.hashnode.com/res/hashnode/image/upload/v1616224895194/lWAAOt_Dm.png)

Let's say we want the arrow to point up and not down.
We can simply switch the border-top to be border-bottom.

```css
.triangle-up {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid blue;
}
```

![CSS Arrow up](https://cdn.hashnode.com/res/hashnode/image/upload/v1616225026563/lCNey7kIB.png)

The same can be applied to make left and right arrows:

```css
.triangle-left {
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-left: 100px solid blue;
  border-bottom: 50px solid transparent;
}
.triangle-right {
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-right: 100px solid blue;
  border-bottom: 50px solid transparent;
}
```

This is basically the same concept, but we switch around by defining the top and bottom and using the left and right as offsets with a color.

![Left and right arrow in CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1616225174062/c4Nu5rjpS.png)

You can even offset triangles to point to a specific corner.
For instance point to left bottom:

```css
.triangle-left-bottom {
  width: 0;
  height: 0;
  border-bottom: 100px solid blue;
  border-right: 100px solid transparent;
}
```

![Left bottom triangle in CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1616225288854/Ek9gR-jF0.png)

Can you figure out how to create the other corners?

You can always have a play with this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="RwoXobj" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Shapes - Triangles">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/RwoXobj">
  CSS Shapes - Triangles</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
