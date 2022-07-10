---
layout: ../../layouts/Post.astro
title: 'CSS makes the world go round 🌎'
metaTitle: 'CSS makes the world go round 🌎'
metaDesc: 'Animating emojis with CSS'
image: /images/06-09-2020.jpg
date: 2020-09-06T03:00:00.000Z
tags:
  - css
---

On Thursday, I came across [this great tweet](https://twitter.com/NanouuSymeon/status/1301474015760887813) by [Antonia](https://twitter.com/NanouuSymeon)

And I was inspired by it, so I wanted to have a look at this!
(Yes, I'm addicted to smileys!)

So today, we'll make the world go round with `CSS`.

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/round_hjrxf7.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/round_pogtzb.mp4" type="video/mp4" />
</video>

> It's not as smooth as Antonia's example because the world only has three emojis ☹️

## HTML Structure

Our HTML is the simplest ever.
Only one div!

```html
<div class="world"></div>
```

## CSS spinning world emoji

As for `CSS`, this is where the magic happens!

Let's start by making the body a display flex and [center everything with flex](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/).

```css
body {
  background: #333;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
```

Next up to our div!

```css
.world {
  font-size: 250px;
  width: 250px;
  height: 328px;
}
.world::before {
  position: absolute;
  content: '🌎';
  z-index: 1;
  animation: world-tween 1s infinite;
}
.world::after {
  position: absolute;
  content: '🌎';
  animation: world 1s infinite;
}
```

After class, we make the font size big and set our starting emoji 🌎 on our [pseudo](https://daily-dev-tips.com/posts/css-pseudo-elements/).

Then we set our animation to be `world`, for 1 second and loop forever!

All we need to do now is make the `world` animation:

```css
@keyframes world {
  33% {
    content: '🌍';
  }
  66% {
    content: '🌏';
  }
}
```

Spencer mentioned we could have another layer on top, which can hold a tween animation, including opacity, to make it slightly smoother.
We added a `::before` pseudo-element to make this happen.

And for our world-tween animation:

```css
@keyframes world-tween {
  16.5% {
    content: '🌍';
    opacity: 0.5;
  }
  33% {
    opacity: 0;
  }
  50% {
    content: '🌏';
    opacity: 0.5;
  }
  66% {
    opacity: 0;
  }
  83% {
    content: '🌎';
    opacity: 0.5;
  }
}
```

There are only two world emojis left, so we split our animation in two and set our content!

That's it. CSS can make the world go round!

View this demo on Codepen.

<p class="codepen" data-height="386" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="QWNOwWN" style="height: 386px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Makes the world go round 🌍">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/QWNOwWN">
  CSS Makes the world go round 🌍</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
