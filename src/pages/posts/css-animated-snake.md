---
layout: ../../layouts/Post.astro
title: 'CSS Animated snake 🐍'
metaTitle: 'CSS Animated snake 🐍'
metaDesc: 'Learn how to animate a snake just using CSS'
image: /images/18-04-2020.jpg
date: 2020-04-18T03:00:00.000Z
tags:
  - css
---

Sometimes I want to experiment and feel how powerful `CSS` these days is.

So let's create something reasonably straightforward, but cool! A animated moving snake in `CSS` only.

## Setting up the HTML

To create our snake we are going to create one main snake `div` and add some dots in this, each dot will have it's own `id` so we can animate it better.

```html
<div class="container">
  <div class="snake">
    <div class="dot dot-1"></div>
    <div class="dot dot-2"></div>
    <div class="dot dot-3"></div>
    <div class="dot dot-4"></div>
    <div class="dot dot-5"></div>
    <div class="dot dot-6"></div>
    <div class="dot dot-7"></div>
    <div class="dot dot-8"></div>
    <div class="dot dot-9"></div>
    <div class="dot dot-10"></div>
    <div class="dot dot-11"></div>
    <div class="dot dot-12"></div>
    <div class="dot dot-13"></div>
    <div class="dot dot-14"></div>
    <div class="dot dot-15"></div>
    <div class="dot dot-16"></div>
    <div class="dot dot-17"></div>
    <div class="dot dot-18"></div>
    <div class="dot dot-19"></div>
    <div class="dot dot-20"></div>
  </div>
</div>
```

## CSS for a animated snake

```css
$numberOfDots: 20;
* {
  margin: 0;
  padding: 0;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #55d6be;
}
.snake {
  .dot {
    width: 12px;
    height: 12px;
    background: #fc6471;
    border-radius: 50%;
    margin: 5px 0;
    &:nth-child(1) {
      width: 10px;
      height: 10px;
      background: #fff !important;
    }
    &:nth-child(odd) {
      background: #090909;
    }
  }
}
@for $i from 1 through $numberOfDots {
  $delay: 0.1 * $i;
  .dot-#{$i} {
    animation: dot 1.5s infinite;
    animation-delay: $delay + s;
  }
}
@keyframes dot {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-15px);
  }
}
```

This code is build in `scss`, we can compile this to plain `css`, but it will become very long, so for the sake of explaining what this does we will keep the `scss` stylesheet and explain what happens.

```css
$numberOfDots: 20;
```

We define the number of dots (body parts) of our snake 🐍we can use this `variable` later on to loop each div, a handy feature of `scss`.

```css
* {
  margin: 0;
  padding: 0;
}
```

The `*` selector is a global selector, it will select every element and in this case remove margin and padding from it.

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #55d6be;
}
```

As seen in many of my example we want to center our snake and I choose to center is with flexbox and use the `100vw` and `100vh` attributes.

- Read more about [Flexbox centering](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/) here and viewport units in [this article](https://daily-dev-tips.com/posts/how-to-work-with-css-viewport-units/).

```css
.snake {
  .dot {
    width: 12px;
    height: 12px;
    background: #fc6471;
    border-radius: 50%;
    margin: 5px 0;
    &:nth-child(1) {
      width: 10px;
      height: 10px;
      background: #fff !important;
    }
    &:nth-child(odd) {
      background: #090909;
    }
  }
}
```

Our snake self has no styling, but each dot (body part) inside it consist of a basic `width and height`. We give it a pink color, and a `border-radius: 50%` which will make the div round! Then we add some margin so it's not stacked.

`&:nth-child(1) {` This is a `pseudo-selector` in this case we want the first child and make it slightly stronger and white, this will be the snakes head.

`&:nth-child(odd) {` again a `pseudo-selector` but this time we get every odd dot element and make it black, so 1,3,5... will be be black and 2,4,6... will be pink (the default).

```css
@for $i from 1 through $numberOfDots {
  $delay: 0.1 * $i;
  .dot-#{$i} {
    animation: dot 1.5s infinite;
    animation-delay: $delay + s;
  }
}
```

So as mentioned we are using the variable here, we are going to loop through 1 to 20 and calculate a custom delay for each dot.

Then we say each dot should have the `dot` animation which will play for 1.5seconds infinite (never stops)

Uncompiled it will look like this:

```css
.dot-1 {
  animation: dot 1.5s infinite;
  animation-delay: 0.1s;
}
.dot-2 {
  animation: dot 1.5s infinite;
  animation-delay: 0.2s;
}
.dot-3 {
  animation: dot 1.5s infinite;
  animation-delay: 0.3s;
}
...
```

And then we add a unique `animation-delay` to each dot this will increase for each dot.

```css
@keyframes dot {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-15px);
  }
}
```

This is the part that makes the snake move.

We make our own @keyframe animation called `dot` and say at position 0 and 100% it should do `transform: translateX(0);` on position 50% it should `transform: translateX(-15px);`. The translateX will move the dot -15px to the left at 50% and fill the gaps in between 0-50 and 50-100% so it will look smooth.

See a working example in this Codepen:

<p class="codepen" data-height="441" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="dyYGwBz" style="height: 441px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Animated snake 🐍">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/dyYGwBz">
  CSS Animated snake 🐍</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
