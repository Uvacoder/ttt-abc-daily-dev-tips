---
layout: ../../layouts/Post.astro
title: 'SVG Sprites, defining, styling and using them'
metaTitle: 'SVG Sprites, defining, styling and using them'
metaDesc: 'Using sprites in SVG!'
image: /images/23-07-2020.jpg
date: 2020-07-23T03:00:00.000Z
tags:
  - html
---

The other day we looked at [SVG Fontawesome icons](https://daily-dev-tips.com/posts/fontawesome-svg-alternative/), and this method of using an SVG Sprite can be used in more ways!

So let's dive deeper into using SVG Sprites.

From the oldskool terms, a sprite is one image that includes multiple images; we then define which area resembles which icon and can use it in such a way.

## Defining our SVG Sprite

To define our sprite, we start by defining an inline SVG at the top of our document.

```html
<body>
  <svg
    aria-hidden="true"
    style="position: absolute; width: 0; height: 0; overflow: hidden;"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <symbol id="chevron" viewBox="1 1 7.5 12.2">
        <path
          d="M8.2 7.8l-5 5.1c-.2.2-.4.3-.7.3s-.5-.1-.7-.3l-.6-.6c-.1-.2-.2-.4-.2-.7 0-.3.1-.5.3-.7L5 7.1 1.3 3.3c-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7l.6-.6c.1-.2.4-.3.7-.3.3 0 .5.1.7.3l5 5.1c.2.2.3.4.3.7-.1.3-.2.5-.4.7"
        />
      </symbol>
      <symbol id="check" viewBox="1 1 15.6 11.9">
        <path
          d="M16.3 4l-8.6 8.6c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-5-5C1.1 7.5 1 7.2 1 7c0-.3.1-.5.3-.7l1.4-1.4c.2-.2.4-.3.7-.3.3 0 .5.1.7.3l3 3 6.6-6.6c0-.2.3-.3.5-.3.3 0 .5.1.7.3l1.4 1.4c.2.2.3.4.3.7 0 .2-.1.4-.3.6"
        />
      </symbol>
      <!-- etc -->
    </defs>
  </svg>
</body>
```

Inside the SVG, we have a `defs` element that includes the symbols. Inside each symbol, we have the code for the actual SVG. We can get this code from illustrator or online tools like [icomoon](https://icomoon.io/).

We made the SVG "invisible" by giving it no height and width.

## Using the Defined SVG Sprite Icons

To use the icons, we can use a code as follows:

```html
<svg aria-hidden="true" focusable="false" class="icon icon-chevron">
  <use xlink:href="#chevron" />
</svg>
<svg aria-hidden="true" focusable="false" class="icon icon-check">
  <use xlink:href="#check" />
</svg>
```

We define another SVG area, where we can add a specific class if needed. And then, make use of the `use` element and `Xlink` to the icon ID defined in the `symbol`.

Then we can style the icons as such:

```css
.icon {
  max-width: 50px;
  max-height: 50px;
  &-check {
    fill: #caffbf;
  }
  &-chevron {
    fill: #9bf6ff;
  }
}
```

This will turn into the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="bGEzrxx" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="SVG Sprites">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/bGEzrxx">
  SVG Sprites</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

The support is pretty great!

![SVG Fragment support](https://caniuse.bitsofco.de/image/svg-fragment.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
