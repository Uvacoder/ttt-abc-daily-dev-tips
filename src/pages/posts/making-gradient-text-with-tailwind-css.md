---
layout: ../../layouts/Post.astro
title: 'Tailwind CSS gradient text tutorial'
metaTitle: 'Tailwind CSS gradient text tutorial [2022]'
metaDesc: 'In this tutorial you will learn how to make gradient text with Tailwind CSS, there is a CodePen example demo you can try'
image: /images/26-06-2021.jpg
date: 2021-06-26T03:00:00.000Z
tags:
  - css
  - tailwind
---

CSS gradient texts are super cool, I love the vibe it gives off, and I made this [CSS gradient text effect](https://daily-dev-tips.com/posts/css-gradient-text-effect/) before.

This tutorial will explore how you can add **gradient text in Tailwind CSS** without adding any custom styles 👀.

![Tailwind CSS gradient text example](https://cdn.hashnode.com/res/hashnode/image/upload/v1643118038139/2fikdgdXE6.png)

## Tailwind CSS gradient text

Let's get started by creating our heading and adding the tailwind classes we need:

```html
<h1
  class="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
>
  Tailwind CSS
</h1>
```

This will be all we need to create this super cool **Tailwind gradient text effect**. However, let's look at what these elements do.

The general styling

- `text-8xl`: Makes the text font-size 6rem, so quite big
- `font-extrabold`: Created a bigger font-weight, so the effect pops more

The above styles are not needed for the actual effect. However, the classes below are required to get the gradient effect we want.

- `text-transparent`: This makes the actual text transparent and shows the background (which has the gradient)
- `bg-clip-text`: This makes the background only show on the text outlines
- `bg-gradient-to-{flow}`: This is used to state what direction the gradients flow. ([All directions](https://tailwindcss.com/docs/background-image))
- `from-{color}`: Set the beginning color in our case to purple-400
- `to-{color}`: This sets the end color, in our case pink-600

In the CodePen below, your can see the result of _Tailwind CSS Gradient Text_:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="NWpmEJg" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Making gradient text with Tailwind CSS">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/NWpmEJg">
  Making gradient text with Tailwind CSS</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
