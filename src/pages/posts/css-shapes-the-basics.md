---
layout: ../../layouts/Post.astro
title: 'CSS Shapes - The basics'
metaTitle: 'CSS Shapes - The basics'
metaDesc: 'How to make basic shapes using the powerful CSS'
image: /images/23-03-2021.jpg
date: 2021-03-23T03:00:00.000Z
tags:
  - css
---

When it comes to CSS, we can make cool shapes. They are often used for some web design elements.
But some people love to even make art with them!

We'll start with the basics of some shapes you can make with CSS.
Throughout this series, we'll look at some more advanced shapes and how you can create them.

In todays article:

- [Squares with CSS](#heading-squares-with-css)
- [Rectangles with CSS](#heading-rectangles-with-css)
- [Circles with CSS](#heading-circles-with-css)
- [Ovals with CSS](#heading-ovals-with-css)

## Squares with CSS

Let's start with the shape of all shapes. The square is used for a lot of other shapes.

It's as simple as having an element that has an equal width/height.

```html
<div class="square"></div>
```

```css
.square {
  width: 200px;
  height: 200px;
  background: #3e92cc;
}
```

This will result in a basic square:

![A Square in CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1616046808417/1qCe7fobO.png)

## Rectangles with CSS

From the square, we can make a rectangle by adjusting the width or height.
Making one of those bigger will give us a rectangle.

```html
<div class="rectangle"></div>
```

```css
.rectangle {
  width: 300px;
  height: 200px;
  background: #3e92cc;
}
```

![Rectangle shape in CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1616046956955/d1zB1ep8W.png)

## Circles with CSS

Now for one of my favorites, a circle.
It's a versatile element to use for avatars or buttons.

It can be created by using the square but adding a `border-radius` to it.

```html
<div class="circle"></div>
```

```css
.circle {
  width: 200px;
  height: 200px;
  background: #3e92cc;
  border-radius: 50%;
}
```

![Circles in CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1616047110703/x8GfgTdPtt.png)

## Ovals with CSS

And equally, we can add a border-radius to our rectangle to make oval shapes.

```html
<div class="oval"></div>
```

```css
.oval {
  width: 300px;
  height: 200px;
  background: #3e92cc;
  border-radius: 50%;
}
```

![Ovals in CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1616047206556/cZORJDLc5.png)

## Demonstration of CSS Shapes

I also made this Codepen for you to play around with, have some fun exploring these basic shapes, and already think about [how other shapes will work](https://daily-dev-tips.com/posts/css-shapes-other-shapes/).

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="yLVWrYZ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Shapes - The basics">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/yLVWrYZ">
  CSS Shapes - The basics</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
