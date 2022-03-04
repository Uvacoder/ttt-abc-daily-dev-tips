---
layout: ../../layouts/Post.astro
title: 'CSS Only Word Rotator'
metaTitle: 'CSS Only Word Rotator'
metaDesc: 'Lets enhance your website with a simple word rotator'
image: /images/16-05-2020.jpg
date: 2020-05-16T03:00:00.000Z
tags:
  - css
---

You probably have seen these word rotators on people's portfolios or websites.
They are fantastic and quirky and rotate random words about that person or business.
Today we are looking into making that just with `CSS`!

## HTML Structure

```html
<div class="container">
  <div class="rotator-wrapper">
    <h1>
      Daily Tips about:&nbsp;
      <span class="rotator">
        <span>JavaScript</span>
        <span>CSS</span>
        <span>VanillaJS</span>
        <span>Node</span>
        <span>React</span>
      </span>
    </h1>
  </div>
</div>
```

As you can see above, we use a container to [center everything](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/), and then we have a `rotator-wrapper` which holds the whole element.
Inside it is an `h1` tag with a `span`. This `span` has five other `spans` with the words we like to rotate.

## CSS Rotator

```css
.rotator-wrapper {
  position: relative;
}
.rotator-wrapper span {
  display: inline-block;
  min-width: 155px;
  text-align: left;
}
.rotator-wrapper span span {
  position: absolute;
  font-weight: bold;
  top: -0px;
  opacity: 0;
  animation: rotateWord 18s linear infinite 0s;
  color: #ffe74c;
}
.rotator-wrapper span span:nth-child(2) {
  animation-delay: 3s;
}
.rotator-wrapper span span:nth-child(3) {
  animation-delay: 6s;
}
.rotator-wrapper span span:nth-child(4) {
  animation-delay: 9s;
}
.rotator-wrapper span span:nth-child(5) {
  animation-delay: 12s;
}
@keyframes rotateWord {
  0% {
    opacity: 0;
  }
  2% {
    opacity: 0;
    transform: translateY(-30px);
  }
  5% {
    opacity: 1;
    transform: translateY(0px);
  }
  15% {
    opacity: 1;
    transform: translateY(0px);
  }
  20% {
    opacity: 0;
    transform: translateY(30px);
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
```

So what's happening here. Let's see item per item.

```css
.rotator-wrapper {
  position: relative;
}
```

This is the complete wrapper and needs to be relative for the absolute items to sit in.

```css
.rotator-wrapper span {
  display: inline-block;
  min-width: 155px;
  text-align: left;
}
```

We give the main `span` inside a minimum width to keep inline centered.

```css
.rotator-wrapper span span {
  position: absolute;
  font-weight: bold;
  top: -0px;
  opacity: 0;
  animation: rotateWord 18s linear infinite 0s;
  color: #ffe74c;
}
```

Then every rotating word we make `position: absolute;` and invisible from the start.
We then add our `rotateWord` animation.

```css
.rotator-wrapper span span:nth-child(2) {
  animation-delay: 3s;
}
```

Every child after we increase the `animation-delay` by 3 seconds.

```css
@keyframes rotateWord {
  0% {
    opacity: 0;
  }
  2% {
    opacity: 0;
    transform: translateY(-30px);
  }
  5% {
    opacity: 1;
    transform: translateY(0px);
  }
  15% {
    opacity: 1;
    transform: translateY(0px);
  }
  20% {
    opacity: 0;
    transform: translateY(30px);
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
```

Our actual animation is happing in this keyframe animation function.
We start with `opacity: 0` and slowly translate the item from the top to center with `opacity: 1`. After that, we do the opposite to hide it.

You can see this in action on this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="PoPdyYd" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Only Word Rotator">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/PoPdyYd">
  CSS Only Word Rotator</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
