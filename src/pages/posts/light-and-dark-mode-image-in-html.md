---
layout: ../../layouts/Post.astro
title: 'Light and dark mode image in HTML'
metaTitle: 'Light and dark mode image in HTML'
metaDesc: 'How to check if someone wants a light or dark image?'
image: /images/29-10-2020.jpg
date: 2020-10-29T03:00:00.000Z
tags:
  - html
---

Did you know you can change images based on the user's preferred Color-scheme?

This nifty piece of code could already be used in [`CSS`](https://daily-dev-tips.com/posts/theme-switching-favicon/), but did you know it works directly in `HTML`?

We can detect if the user prefers a dark or light color schema and show a different image to them based on that!

It will look like this:

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/prefer-scheme_j0pvdq.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/prefer-scheme_bgwjyg.mp4" type="video/mp4" />
</video>

## HTML Structure

```html
<picture>
  <source srcset="dark-mode.png" media="(prefers-color-scheme: dark)" />
  <img src="light-image.png" />
</picture>
```

That's it!

It will default show the light image, but it will show the dark image if the person prefers the dark scheme.

Feel free to have a play with this on Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="bGewmom" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Light and dark mode image in HTML">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/bGewmom">
  Light and dark mode image in HTML</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

The support for prefers-color-scheme is getting better, but still not a reliable option.

![CSS prefers-color-scheme support](https://caniuse.bitsofco.de/image/prefers-color-scheme.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
