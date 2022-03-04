---
layout: ../../layouts/Post.astro
title: 'Happy Birthday CSS animation with confetti'
metaTitle: 'Happy birthday confetti animation CSS Tutorial (2022)'
metaDesc: 'Celebrate my birthday with me and learn how to code a CSS only party popper animation. Copy the code from the codepen example.'
image: /images/08-05-2020.jpg
date: 2020-05-08T03:00:00.000Z
tags:
  - css
---

Happy birthday to me! Yes, today is my birthday, and since we're in lockdown, I wanted to make a party popper birthday animation in pure CSS so everyone can celebrate with me!
At first, I thought about doing one in `Canvas`, but that would take a lot of time to explain.
So this one is easy to build and pure `CSS`!

## Step 1: HTML Structure

```html
<div class="container">
  <div class="hoverme">
    <h1>Birthday Hover 🎂</h1>
    <i></i>
    <i></i>
    <i></i>
    ... (50x)
  </div>
</div>
```

So what we got here is our usual [flex centered](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/) CSS container.
And inside we have a `div` which will act as our hover element.
In there we have a default heading and fifty times an `<I>` element. This is the element for the confetti effect.

## Step 2: Happy Birthday Confetti Animation in CSS

```css
.hoverme {
  width: 240px;
  text-align: center;
  padding: 10px 0;
  cursor: pointer;
  position: relative;
  h1 {
    color: #fff;
    font-size: 1.5em;
  }
  i {
    position: absolute;
    display: block;
    left: 50%;
    top: 0;
    width: 5px;
    height: 10px;
    background: red;
    opacity: 0;
  }
  &:hover {
    @for $i from 1 through 50 {
      i:nth-of-type(#{$i}) {
        transform: translate3d(random(190) - 100 + px, random(200) - 100 + px, 0)
          rotate(random(360) + deg);
        background: hsla(random(360), 100%, 50%, 1);
        animation: bang 700ms ease-out forwards;
        opacity: 0;
      }
    }
  }
}
@keyframes bang {
  from {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
```

As for the party popper animation, for the `CSS` we are using `SCSS` to use variables so we don't have to type 50 times.
Let's walk through this in more detail and see what's happening.

```css
.hoverme {
  width: 240px;
  text-align: center;
  padding: 10px 0;
  cursor: pointer;
  position: relative;
}
```

First, this is our main HTML element, we center it, add some padding and show a pointer as our cursor. We also make this a `relative` div to place our `absolute` confetti in.

```css
i {
  position: absolute;
  display: block;
  left: 50%;
  top: 0;
  width: 5px;
  height: 10px;
  background: red;
  opacity: 0;
}
```

Then for our `I` HTML elements we make them `absolute` positioned and make them invisible by setting `opacity: 0`

```css
&:hover {
  @for $i from 1 through 50 {
    i:nth-of-type(#{$i}) {
      transform: translate3d(random(190) - 100 + px, random(200) - 100 + px, 0)
        rotate(random(360) + deg);
      background: hsla(random(360), 100%, 50%, 1);
      animation: bang 700ms ease-out forwards;
      opacity: 0;
    }
  }
}
```

The hover effect is where the magic will happen.
So we use `CSS` variables to loop through fifty numbers (the amount of `I` we have). Then for each element we do a random CSS transform, the transform will place them somewhere random from the center of our hover div.
Then we give the confetti a random color and add the birthday animation.

```css
@keyframes bang {
  from {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
```

So for the happy birthday animation we transform our elements from position zero and start with full opacity to get the party popper effect.

### See the code example for the party popper CSS animation in this Codepen

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="LYpQRxM" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Happy Birthday Confetti Animation">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/LYpQRxM">
  Happy Birthday CSS animation with confetti effect</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Happy Birthday CSS confetti to me!

Again, thank you for reading my blog, that is honestly the best birthday present ever, and I hope if you ever have questions, remarks you feel free to reach out to me. 🤟

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
