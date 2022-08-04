---
layout: ../../layouts/Post.astro
title: 'CSS only expanding slider 😲'
metaTitle: 'CSS only expanding slider 😲'
metaDesc: 'Lets make a CSS only slider using flexbox'
image: /images/13-04-2020.jpg
date: 2020-04-13T03:00:00.000Z
tags:
  - css
---

Sliders are fantastic, a welcome addition to every website, but sometimes can become very complicated with text flying in and images animating from all sides.

Let's say we want a simple expandable slider. We can achieve this with just `css`; you heard me right, CSS only!

> Note: I also wrote a [Tailwind version of this article](https://daily-dev-tips.com/posts/tailwind-expanding-slider/).

## Making our CSS-only slider

For our `HTML` we are going to use the following setup:

```html
<div class="container">
  <div class="slider">
    <div class="slide">
      <img
        src="https://images.unsplash.com/photo-1533468432434-200de3b5d528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
      />
    </div>
    <div class="slide">
      <img
        src="https://images.unsplash.com/photo-1586254574632-55e4aaea7793?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
      />
    </div>
    <div class="slide">
      <img
        src="https://images.unsplash.com/photo-1536536982624-06c1776e0ca8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
      />
    </div>
    <div class="slide">
      <img
        src="https://images.unsplash.com/photo-1502827186494-9f7976a04548?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=976&q=80"
      />
    </div>
    <div class="slide">
      <img
        src="https://images.unsplash.com/photo-1545559054-8f4f9e855781?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
      />
    </div>
  </div>
</div>
```

Nothing fancy, a container (optional) and a slider `div` with five slides `divs` inside. Each slide contains an image in this case.

Now for the CSS, we use the following:

```css
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.slider {
  width: 80vw;
  height: 80vh;
  display: flex;
}
.slide {
  position: relative;
  flex: 1 0 auto;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}
.slide:hover {
  flex: 5;
}
.slide img {
  position: absolute;
  max-height: 100%;
  left: 50%;
  transform: translateX(-50%);
}
```

`.container` the container is a wrapper because I didn't want the slider to be full with.

We give the container `display: flex` and align everything horizontal and vertical as we learned [here](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/).

`.slider` The slider just has 80vw (viewport width) and 80vh (viewport height) and display flex, you can read more about the viewport elements in [this article](https://daily-dev-tips.com/posts/how-to-work-with-css-viewport-units/).

`.slide` is where the fun begins. We tell it to be relative to the center of the image. Then we add a `flex: 1 0 auto;` which will distribute them equally. Then we set `overflow: hidden;` to not show the extra image part. And we add some smooth animation with: `transition: all 0.5s ease-in-out;`.

Once you hover on the slide, we set the `flex` to 5, which will make that element bigger, and because our `transition` is in place, it will look smooth.

Last we position the image inside. We make them absolutely positioned to center them better.

We choose to align them 50% from the left and then return them -50% with transform. This will make sure the absolute positioning is entered.

This looks like the following demo:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="gOaYjpe" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS only expanding slider 😲">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/gOaYjpe">
  CSS only expanding slider 😲</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## CSS-only slider with background images

In the previous example, we used images, but we can also use background images that will look something like this:

```html
<div class="container">
  <div class="slider">
    <div class="slide slide1"></div>
    <div class="slide slide2"></div>
    <div class="slide slide3"></div>
    <div class="slide slide4"></div>
    <div class="slide slide5"></div>
  </div>
</div>
```

Then for the CSS, we can do the following:

```css
.slider {
  width: 100vw;
  height: 100vh;
  display: flex;
}
.slide {
  position: relative;
  flex: 1 0 auto;
  transition: all 0.5s ease-in-out;
}
.slide:hover {
  flex: 5;
}
.slide1 {
  background-image: url('https://images.unsplash.com/photo-1533468432434-200de3b5d528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80');
  background-position: center center;
  background-size: cover;
}
//...repeat for all your slides
```

As you can see, this is easier, but some people prefer to have the actual image element in place.

With this, you can make this:

<p class="codepen" data-height="674" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="yLYyRpp" style="height: 674px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Dragon Ball Super Slider CSS Only">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/yLYyRpp">
  Dragon Ball Super Slider CSS Only</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser support

Flex has extensive support and polyfills available. It also depends on the rest of your structure and the ones you need.

![Flex browser support](https://caniuse.bitsofco.de/image/flexbox.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
