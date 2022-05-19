---
layout: ../../layouts/Post.astro
title: 'CSS Neon Animation'
metaTitle: 'Neon Text CSS Animation Tutorial [2022]'
metaDesc: 'Tutorial to learn how to make a cool neon effect on a text element pure in CSS. Try out the code example in my Codepen!'
image: /images/21-08-2020.jpg
date: 2020-08-21T03:00:00.000Z
tags:
  - css
---

Guys! Thank you all 🥳 I've hit 100 subscribers to my Newsletter, and I'm over the moon!

It means a lot to me that people choose to read my articles and subscribe to receive my email every day. From the bottom of my heart: Thank you! 🧁

Therefore in this tutorial, I want to make a great 100 subs **`CSS` neon animation** to celebrate.

See below what we'll be building today: this unique neon text effect in pure CSS:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="WNwGVMv" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Neon Animation">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/WNwGVMv">
  CSS Neon Animation</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## HTML Structure

As for our `HTML` we need the following structure:

```html
<div class="container">
  <div class="text">
    <b>100 s<span>u</span>bs</b>
  </div>
</div>
```

We will use the container to center the text and use the span to make a cool neon glitch/flicker effect.

## CSS Neon Text effect

First, we will import a cool [Google font](https://daily-dev-tips.com/posts/how-to-use-google-fonts/), which looks like it could be used for neon letters.

```css
@import url(//fonts.googleapis.com/css?family=Pacifico);
```

Now on to our **neon effect**!

```css
.text b {
  font: 400 25vh 'Pacifico';
  letter-spacing: -5px;
  color: #fee;
  text-shadow: 0 0px 10px, 0 0 1em #560a86, 0 0 0.5em #560a86, 0 0 0.1em #560a86,
    0 10px 3px #333;
}
```

As you see, we are setting our font to be the Google Font. Then we give it a font-weight of `25vh` (25% [Viewport Height](https://daily-dev-tips.com/posts/how-to-work-with-css-viewport-units/).

Then we use the `text-shadow` to give the letters a neon effect. We add multiple neon glow layers and end with a dark grey to make the bright glow appear thicker. Very similar to a neon light with gas.

> Note: You can use a fantastic tool like this for [creating text-shadows](http://angrytools.com/css-generator/text-shadow/)

## Neon CSS Animation

We added a glitch on the `u` letter. A flicker effect is quite familiar with neon glass tubes. So we can re-create it by using `CSS` animations.

```css
.text b span {
  animation: flicker linear infinite 2s;
}

@keyframes flicker {
  75% {
    color: inherit;
    text-shadow: inherit;
  }
  76% {
    color: #222;
  }
  77% {
    color: inherit;
    text-shadow: none;
  }
  78% {
    color: inherit;
    text-shadow: inherit;
  }
  79% {
    color: #222;
    text-shadow: none;
  }
  80% {
    color: inherit;
    text-shadow: inherit;
  }
  90% {
    color: #222;
    text-shadow: none;
  }
  90.5% {
    color: inherit;
    text-shadow: inherit;
  }
}
```

The actual animation is a mix of resetting the color and removing the text shadow for a split second. This makes the letter appear as if it is flickering due to some temporary electric discharge.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
