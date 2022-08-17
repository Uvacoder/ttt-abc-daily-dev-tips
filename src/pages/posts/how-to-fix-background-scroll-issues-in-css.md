---
layout: ../../layouts/Post.astro
title: 'How to fix background scroll issues in CSS'
metaTitle: 'How to fix background scroll issues in CSS'
metaDesc: 'Fixing double scroll issues in CSS using overscroll-behavior'
image: /images/11-11-2021.jpg
date: 2021-11-11T03:00:00.000Z
tags:
  - css
---

I'm sure you've seen this before. You have a long page and perhaps a modal with a scroll inside it.

Super annoying if the background scrolls with when you hit bottom right?

See this example below.

<!-- ![How to fix background scroll issues in CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1635662922659/TWVbDSc4K.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1635662937/modal-scroll_brax5x.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1635662937/modal-scroll_gz2bge.mp4" type="video/mp4" />
</video>

As you can see, scrolling inside the modal and hitting bottom or top of the content will also scroll the background.

This is not what we want as we scroll inside the modal content.

## Introducing overscroll-behavior

Say hello to `overscroll-behavior`, the welcome addition to scroll element which tells how the over scroll behavior should be handled.

It takes one of the following properties:

- `auto`: What it used to be, so back to normal
- `contain`: Inside the element, your scroll is as usual, but no outside elements are affected
- `none`: No outside elements are affected, and default scroll overflow behavior is prevented.

With every overflow, you can specify on which axis it should occur.

For horizontal scrolling, use: `overscroll-behavior-x`.
And for vertical scroll use: `overscroll-behavior-y`.

Let's try it out on our demo modal by adding the following CSS to our modal element.

```css
overscroll-behavior-y: contain;
```

And now try it out in this Codepen example to see what happens!

<p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="OJjxRby" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/OJjxRby">
  Untitled</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Browser support

The support is becoming pretty good. Unfurtionally it's not a solid feature to rely on.

Let's hope we get full support soon, as this is a real live saver 👀.

<picture>
<source type="image/webp" srcset="https://caniuse.bitsofco.de/image/css-overscroll-behavior.webp" />
<source type="image/png" srcset="https://caniuse.bitsofco.de/image/css-overscroll-behavior.png" />
<img src="https://caniuse.bitsofco.de/image/css-overscroll-behavior.jpg" alt="The browser support for the overscroll-behavior feature" />
</picture>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
