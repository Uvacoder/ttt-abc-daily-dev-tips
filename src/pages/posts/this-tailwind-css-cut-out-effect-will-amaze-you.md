---
layout: ../../layouts/Post.astro
title: 'This Tailwind CSS cut out effect will amaze you'
metaTitle: 'This Tailwind CSS cut out effect will amaze you'
metaDesc: 'Creating a  super cool image cut out text effect in Tailwind CSS'
image: /images/05-09-2021.jpg
date: 2021-09-05T03:00:00.000Z
tags:
  - css
  - tailwind
---

We created this super cool [cut out text effect in CSS](https://daily-dev-tips.com/posts/css-cut-out-effect-that-will-blow-your-mind/), however in today's article, we'll have a look at how to do this in Tailwind CSS.

The result will be this super amazing yet straightforward to achieve effect.

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="js,result" data-slug-hash="bGREbqq" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/bGREbqq">
  </a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## HTML Structure for Tailwind cut out text

As for the HTML structure, we only need two elements.

1. The background container div, will hold the background image
2. A text element this will be positioned on top of the background for the cut-out effect

```html
<div>
  <h1>BOTANY</h1>
</div>
```

That is all that we need, and with the help of Tailwind CSS, we can easily create this amazing cut-out effect.

> Note: Check out this article for [integrating Tailwind in your project](https://daily-dev-tips.com/posts/plain-html-starter-with-tailwind-css/)

## Tailwind CSS cut out text effect

To generate this effect, let's first focus on giving out div a background image.
This will be the only custom part of the setup. However, you can use the tailwind config when using Tailwind in your project.

```css
.background {
  background-image: url('https://images.pexels.com/photos/797797/pexels-photo-797797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
}
```

Then we can add some classes to center this background and make it cover the whole area.

```html
<div class="bg-center bg-cover background"></div>
```

The second part of this tutorial is to style the `h1` element.
Let's start by making it a bit bigger and bold.

```html
<h1 class="font-bold text-9xl">BOTANY</h1>
```

And the magic comes with the following three classes, we want our text to be the opposite of our background and then use the blend mode to get the effect we need.

```html
<h1 class="font-bold text-black bg-white text-9xl mix-blend-lighten">BOTANY</h1>
```

And that's it; we now have a stunning CSS cutout text effect using Tailwind CSS.

![Tailwind CSS cut out effect](https://cdn.hashnode.com/res/hashnode/image/upload/v1630303037627/qq96is_Ag.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
