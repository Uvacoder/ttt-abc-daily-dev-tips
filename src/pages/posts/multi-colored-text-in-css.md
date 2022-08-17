---
layout: ../../layouts/Post.astro
title: 'Multi-colored text in CSS'
metaTitle: 'Multi-colored text in CSS'
metaDesc: 'How to create and animate a multi-colored gradient text effect in CSS'
image: /images/31-08-2021.jpg
date: 2021-08-31T03:00:00.000Z
tags:
  - css
---

In this article, we will be creating a super cool effect where we can have multi-colored text in CSS.

I saw this effect a while ago on Twitter done by [Adam Argyle](https://twitter.com/argyleink/status/1409590647187656706) and was blown away by how easy this can be achieved in CSS.

Below is a demo of what we'll be creating today!

<p class="codepen" data-height="440" data-theme-id="dark" data-default-tab="js,result" data-slug-hash="ExXYzbg" data-user="rebelchris" style="height: 440px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/ExXYzbg">
  </a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## CSS Multi-colored gradient text

To create this effect, let's first start with our HTML structure. This is super easy as we only need one element!

```html
<h1>multi colored text in css</h1>
```

Then it's off to our CSS file to magic some magic 🪄.

Let's start by defining our five colors and our starting angle.

```css
:root {
  --color-1: #442288;
  --color-2: #6ca2ea;
  --color-3: #b5d33d;
  --color-4: #fed23f;
  --color-5: #eb7d5b;
  --angle: 0deg;
}
```

We use the root to define variables as this is valid syntax in basic CSS. No need for SCSS here.

Then let's add some styling to our body. This is used to center our text and make our background black. The effect works better on black but will also work on different colors.

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
}
```

Then let's start on styling our `h1` element.

I'm breaking these up into a couple of steps to give more of an idea of what's happening.

### 1. Basic heading styling

For our basic styling, we want a relatively big heading.

```css
h1 {
  color: #fff;
  text-align: center;
  font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 6.5vw;
  font-weight: 900;
  line-height: 6vw;
  text-transform: uppercase;
}
```

This will give us the following output.

![Heading stying](https://cdn.hashnode.com/res/hashnode/image/upload/v1629698862225/mJelzv5WB.png)

### 2. Each word on its own line

As you can see above, it's just one big line. We can use the following CSS hack to get each word on its own line.

```css
word-spacing: 100vw;
```

Making each word space on a single line

![CSS Every word on its own line](https://cdn.hashnode.com/res/hashnode/image/upload/v1629698977760/jKn1N700v.png)

### 3. CSS Text Gradient background

Now we can move to add the gradient effect. We'll start by splitting the gradient into five steps, resulting in each word being one color.

```css
background: linear-gradient(
  var(--angle),
  var(--color-1) 19%,
  transparent 19%,
  transparent 20%,
  var(--color-2) 20%,
  var(--color-2) 39%,
  transparent 39%,
  transparent 40%,
  var(--color-3) 40%,
  var(--color-3) 59%,
  transparent 59%,
  transparent 60%,
  var(--color-4) 60%,
  var(--color-4) 79%,
  transparent 79%,
  transparent 80%,
  var(--color-5) 80%
);
background-clip: text;
-webkit-background-clip: text;
color: transparent;
```

Here, we define the colors we have in our `:root` element definition. As well as the basic angle of 0.
We add a transparent border between each color for our animation later on.
As well as set the clipping mode to text.

![CSS Multi-coloured gradient effect](https://cdn.hashnode.com/res/hashnode/image/upload/v1629699790231/t2_xUUlq-.png)

## Animating a linear background gradient in CSS

To animate the gradient is quite tricky.
We are applying the main hack by defining the `--angle` variable.

Then we can add an animation to our `h1` element.

```css
animation: 10s rotate linear infinite;
```

This animation looks as follows:

```css
@keyframes rotate {
  to {
    --angle: 360deg;
  }
}
```

However, this doesn't do much yet, because the browser doesn't know `360deg` is a value.
We can fix this by defining a `@property` for the `--angle` variable.

```css
@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}
```

> Note: This idea was taken from this cool [CSS-Tricks article](https://css-tricks.com/animating-a-css-gradient-border/)

And there we go! A super cool CSS text animation effect. I hope you enjoyed this article.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
