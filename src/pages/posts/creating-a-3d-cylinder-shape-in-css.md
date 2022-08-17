---
layout: ../../layouts/Post.astro
title: 'Creating a 3D Cylinder shape in CSS'
metaTitle: 'Creating a 3D Cylinder shape in CSS'
metaDesc: 'Creating a 3D Cylinder shape in CSS'
ogImage: /images/29-07-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/83db691f-b950-48ac-ac73-32bae89d4800
date: 2022-07-29T03:00:00.000Z
tags:
  - css
---

Now that we created a dice and a pyramid in CSS, let's move on to a complex shape: The cylinder.

We have to mimic the cylinder because we don't have a CSS native box for round objects.

In my case, I'll be adding a lot of side panels that we skew next to each other.
This will mimic the 3D effect we are looking for.

The result for today will be this excellent-looking cylinder shape.

<!-- ![Creating a 3D Cylinder shape in CSS](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/buifd5l4ex57zcfgsjew.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1658213880/cylinder_ihos6q.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1658213880/cylinder_rxbeze.mp4" type="video/mp4" />
</video>

## HTML markup

I choose to make my demo in [Pug](https://pugjs.org/api/getting-started.html). It's easy to mock up HTML as it can use variables.

However, what it comes down to is the following HTML output.

```html
<div class="holder">
  <div class="cylinder">
    <div class="face" style="--index: 0;"></div>
    <div class="face" style="--index: 1;"></div>
    <!-- More faces! -->
  </div>
</div>
```

I've added the holder wrapper so we can put that one at an angle without interfering with our actual cylinder.

I've added the following classes to the holder to achieve the slanted look.

```css
.holder {
  transform-style: preserve-3d;
  transform: rotateX(-35deg);
}
```

## Styling a CSS 3D cylinder

Before we start, we need to define some variables as this one requires some calculation power.

I've decided to use SCSS as it's the easiest to use with variables.

Add the following variables in your CSS.

```css
$pi: 3.14159265358979;
$cylinder-width: 100vw;
$face-count: 50;
$face-deg: (360deg / $face-count);
$face-width: ($cylinder-width / $face-count);
$face-shift: ($cylinder-width / $pi / 2);
```

Let's go over each one.

- `pi`: Matches PI, which we need to calculate a perfect circle shift size
- `cylinder-width`: The width of our cylinder
- `face-count`: How many faces we render. This should match the number of divs you added
- `face-deg`: How much degree each face should cover
- `face-width`: The width of each face
- `face-shift`: We need to shift the faces outward to give it more of a round 3D effect

Now we can move on to the cylinder shape.

```css
.cylinder {
  position: relative;
  height: 50vw;
  width: $cylinder-width;
  transform-style: preserve-3d;
}
```

Nothing fancy here, but it basically will contain the wrapper for our cylinder sides.

Then we can move on to each face, sharing the same styling.

```css
.face {
  position: absolute;
  background-color: #da0060;
  opacity: 0.7;
  height: 100%;
  width: $face-width;
  top: 50%;
  left: 50%;
  transform: rotateY(calc(#{$face-deg} * var(--index))) translateZ(
      calc(#{$face-shift} - -6px)
    );
}
```

Each face is positioned with the width we calculated.
The main magic happens in the transform property.

We change the rotation on the Y axis, which places each face next to the other in a perfect circle.

So face one will get 7.2deg offset and the second one 14.4deg until we hit 360.

> Note the 7.2 comes from 360 degrees / 50 (faces)

The translateZ is to push each item back a bit more, making it appear neater and more space.

I also decided to color one face differently to see the rotation better.

```css
.face {
  &:nth-child(1) {
    background: purple;
  }
}
```

## Animating the cylinder

Let's add some animation to make the cylinder spin around.

```css
@keyframes spin {
  to {
    transform: rotateY(-360deg);
  }
}

.cylinder {
  animation: spin 7s infinite linear;
}
```

This will make the cylinder spin around the Y axis for 360 degrees.

You can see the result in this CodePen.

<p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="vYRxZLP" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/vYRxZLP">
  Untitled</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
