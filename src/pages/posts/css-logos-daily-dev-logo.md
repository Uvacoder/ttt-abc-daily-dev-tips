---
layout: ../../layouts/Post.astro
title: 'CSS Logos: daily dev Logo'
metaTitle: 'CSS Logos: daily dev Logo'
metaDesc: 'Recreating the iconic daily.dev logo in CSS'
ogImage: /images/17-06-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/6cf08b59-0284-477f-8aa0-354bf358ac00
date: 2022-06-17T03:00:00.000Z
tags:
  - css
  - css-logos
---

Of course, I couldn't resist recreating my employer's logo in CSS. We are talking, of course, about [daily.dev](https://daily.dev/).

The logo itself looks like some basic shapes, as seen below.

![daily.dev logo](https://cdn.hashnode.com/res/hashnode/image/upload/v1654585555653/b4pafSL1j.png)

## Analysing the logo

Looking at the logo, we see three distinct parts to it.

- The square on the left
- The line in the middle
- The arrow on the right

Depending on how you look at it, you could see the left part as a `d`, but that would make things even harder.

There are a couple of things with this setup that make it a bit tricky.
The square has rounded corners and a square inside.
The line in the middle has some trapezoid borders.
The arrow is rounded, so we can't use an HTML arrow for this.

No worries, we'll make this work.

## CSS daily.dev logo

Let's start by setting up all the elements we need.

```html
<div class="dd">
  <div class="square"></div>
  <div class="stripe"></div>
  <div class="arrow"></div>
</div>
```

As you can see, I tried to reflect the naming in terms of what I described in the analyze section.

Alright, we also want to add some default [CSS variables](https://daily-dev-tips.com/posts/how-to-use-css-vars/) that we can re-use.

```css
:root {
  --bg: #151618;
  --radius: 20px;
  --gray: #989899;
}
```

As for the body, we want to make this our background color and center everything inside.

```css
body {
  background: var(--bg);
  display: grid;
  place-items: center;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}
```

Then we want to address our wrapping div, and I want to make it one specific size. It won't be scaleable, but you could make it so by adjusting the size and border radius.

```css
.dd {
  position: relative;
  width: 350px;
  aspect-ratio: 350/200;
  overflow: hidden;
}
```

Then let's move on to creating the square element. This is the easier one, as we need to add a square with rounded corners and use the [:before pseudo element](https://daily-dev-tips.com/posts/css-pseudo-elements/#before-pseudo-element) to overlay another square inside.
We then rotate the whole square and position it accordingly.

> Note: Throughout this article, I'll use SCSS since it's easier to make it visually explained.

```css
.square {
  width: 42.857%;
  aspect-ratio: 1;
  background: white;
  border-radius: var(--radius);
  transform: rotate(45deg);
  top: 11.5%;
  position: absolute;
  left: 6.571%;
  z-index: 1;
  display: grid;
  place-items: center;
  &:before {
    content: '';
    width: 50%;
    aspect-ratio: 1;
    background: var(--bg);
    position: absolute;
  }
}
```

With this in place, we should get the following square.

![Square element of daily.dev logo](https://cdn.hashnode.com/res/hashnode/image/upload/v1654586273040/-MT9T1Pxv.png)

The next element we need is the stripe in the middle.
This can also be a rectangle shape that we rotate.

We also set the top left and bottom right border radius to reflect the logo.

```css
.stripe {
  width: 11.429%;
  height: 130%;
  background: white;
  position: absolute;
  transform: rotate(45deg);
  border-radius: var(--radius) 0px var(--radius) 0px;
  left: 44.286%;
  top: -16%;
  z-index: 3;
}
```

![daily.dev logo square and stripe](https://cdn.hashnode.com/res/hashnode/image/upload/v1654586744581/A-LnEFJ5a.png)

The tricky part for this element is that we want the skewed triangles to cut out some pieces of the square and arrow later.
I decided again to use [pseudo elements](https://daily-dev-tips.com/posts/css-pseudo-elements/). I created another rectangle shape but used the skew transform to make it look like a trapezoid shape.

```css
.stripe {
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 35%;
    height: 100%;
    background: var(--bg);
  }
  &:before {
    left: -35%;
    bottom: 7%;
    transform: skewY(71deg);
  }
  &:after {
    right: -35%;
    top: 7%;
    transform: skewY(71deg);
  }
}
```

In the image below, I painted the shapes pink so you can see what's happening.

![Trapezoid shapes on the daily.dev logo](https://cdn.hashnode.com/res/hashnode/image/upload/v1654587329319/Icr1LttMw.png)

Perfect, if we paint those black, we have the shape we want.
All that's left now is the arrow on the right.

As mentioned, this shape has rounded corners, making things a little more complicated.

(When working with straight corners, we could have the user a square box with only two borders visible)

However, no worries, our good friends, the [pseudo elements](https://daily-dev-tips.com/posts/css-pseudo-elements/) come in handy again.
For the arrow, we use two rounded rectangles that overlap each other.

```css
.arrow {
  position: absolute;
  width: 11.429%;
  height: 150%;
  left: 78.286%;
  top: 31.5%;
  z-index: 2;
  &:before,
  &:after {
    content: '';
    position: absolute;
    background: var(--gray);
    border-radius: var(--radius);
    display: block;
    left: -5%;
    height: 50%;
    width: 100%;
    transform: rotate(45deg);
  }
  &:after {
    bottom: 76%;
    transform: rotate(-45deg);
  }
}
```

In the image below, I painted one red and one blue so you can see what's happening.

![Rounded arrow in CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1654587476609/BKI5Q9LhD.png)

And that's it. Curious to see the result?
Check out this CodePen.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="WNMgxag" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/WNMgxag">
  CSS Logos: daily dev Logo</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
