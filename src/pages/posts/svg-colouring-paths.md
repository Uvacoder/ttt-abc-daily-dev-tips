---
layout: ../../layouts/Post.astro
title: 'SVG Colouring Paths'
metaTitle: 'SVG Colouring Paths'
metaDesc: 'Colouring a specific path in our SVG element'
image: /images/24-07-2020.jpg
date: 2020-07-24T03:00:00.000Z
tags:
  - html
---

Since we did our [SVG Sprites](https://daily-dev-tips.com/posts/svg-sprites/) yesterday, I wondered if it was possible to color each specific path.
And it turns out you can do so.

So for my example, I took an icon of four elements, a man and a woman, and the heads are separate from the bodies.

## HTML Structure

```html
<svg
  aria-hidden="true"
  style="position: absolute; width: 0; height: 0; overflow: hidden;"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <defs>
    <symbol id="icon-man-woman" viewBox="0 0 32 32">
      <path
        d="M8 3c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"
      ></path>
      <path
        d="M26 3c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"
      ></path>
      <path
        d="M8 8h-6c-1.105 0-2 0.895-2 2v10h2v12h2.5v-12h1v12h2.5v-12h2v-10c0-1.105-0.895-2-2-2z"
      ></path>
      <path
        d="M30.469 16l1.531-1.109-4.165-6.441c-0.185-0.281-0.499-0.45-0.835-0.45h-8c-0.336 0-0.65 0.169-0.835 0.45l-4.165 6.441 1.531 1.109 3.458-4.487 1.202 2.804-4.191 7.683h3.833l0.667 10h2v-10h1v10h2l0.667-10h3.833l-4.191-7.683 1.202-2.804 3.458 4.487z"
      ></path>
    </symbol>
  </defs>
</svg>

<svg class="icon icon-man-woman">
  <use xlink:href="#icon-man-woman"></use>
</svg>
```

As you can see, there are four paths in our definition symbol.

So how do we go about styling them all a different color?

## Styling a CSS Path

I'm going to use the nth-child selector for each specific path.

```css
#icon-man-woman {
  path {
    &:nth-child(1) {
      fill: #83c5be;
    }
    &:nth-child(2) {
      fill: #ffddd2;
    }
    &:nth-child(3) {
      fill: #006d77;
    }
    &:nth-child(4) {
      fill: #e29578;
    }
  }
}
```

This will result in the following:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="YzwgXwr" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="SVG Colouring Paths">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/YzwgXwr">
  SVG Colouring Paths</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

The support is pretty good!

![SVG Fragment support](https://caniuse.bitsofco.de/image/svg-fragment.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
