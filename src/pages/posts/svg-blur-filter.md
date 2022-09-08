---
layout: ../../layouts/Post.astro
title: 'SVG Blur Filter'
metaTitle: 'SVG Blur Filter'
metaDesc: 'Lets look at SVG Filters, in particular the Blur filter'
image: /images/03-08-2020.jpg
date: 2020-08-03T03:00:00.000Z
tags:
  - html
---

Some time ago, we played with [`SVG` animteTransform](https://daily-dev-tips.com/posts/svg-animatetransform/). I got feedback from people saying they didn't even know it existed.
Today, we will look into `SVG` Filters, which you might never have seen before.

A filter element can be added to an `SVG` object, there are many filters, but today we are looking into the Blur filter since I recently needed one.

## HTML Setup

As for our `HTML`, we are using the following code:

```html
<svg
  aria-hidden="true"
  style="position: absolute; width: 0; height: 0; overflow: hidden;"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <defs>
    <symbol id="check" viewBox="1 1 15.6 11.9">
      <path
        d="M16.3 4l-8.6 8.6c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-5-5C1.1 7.5 1 7.2 1 7c0-.3.1-.5.3-.7l1.4-1.4c.2-.2.4-.3.7-.3.3 0 .5.1.7.3l3 3 6.6-6.6c0-.2.3-.3.5-.3.3 0 .5.1.7.3l1.4 1.4c.2.2.3.4.3.7 0 .2-.1.4-.3.6"
      />
    </symbol>
    <filter id="blur">
      <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
    </filter>
  </defs>
</svg>
```

As you see, we added our filter in our defs part.
It will apply a gaussian blur of 5. The id is `blur`, which will be used to apply it to `SVG`.

## Using the SVG Filter

To use the SVG Filter, we can use the following code.

```html
<svg aria-hidden="true" focusable="false" class="icon icon-check">
  <use xlink:href="#check" />
</svg>
<svg aria-hidden="true" focusable="false" class="icon icon-check">
  <use filter="url(#blur)" xlink:href="#check" />
</svg>
```

The first icon won't have any blur, and the second will have the blur filter applied.

## Applying the Filter Directly

We can, however also omit the sprite and use the filters as such:

```html
<svg
  width="230"
  height="120"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <filter id="blur">
    <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
  </filter>
  <rect width="60" height="60" x="20" y="20" fill="#534B62" />
  <rect
    width="60"
    height="60"
    x="120"
    y="20"
    fill="#534B62"
    filter="url(#blur)"
  />
</svg>
```

Awesome right? There are many more awesome filters in `SVG`. I'm sure we'll check in on them someday.

See the Blur Filter in action on this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="oNbKVXb" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="SVG Blur Filter">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/oNbKVXb">
  SVG Blur Filter</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

You won't believe this, but SVG Filters have good browser support!

![SVG Filter support](https://caniuse.bitsofco.de/image/svg-filters.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
