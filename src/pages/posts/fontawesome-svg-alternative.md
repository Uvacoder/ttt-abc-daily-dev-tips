---
layout: ../../layouts/Post.astro
title: 'Fontawesome SVG Alternative'
metaTitle: 'Fontawesome SVG Alternative'
metaDesc: 'Alternative to loading the font'
image: /images/24-06-2020.jpg
date: 2020-06-24T03:00:00.000Z
tags:
  - html
---

We made our first start in [using Fontawesome](https://daily-dev-tips.com/posts/how-to-use-fontawesome/) for our website. And some people pointed out it's quite a heavy resource to load and use.

They are right, Fontawesome is fantastic because it has a lot of icons, but the downside is you're loading a lot of icons.

Today we are going to be looking at loading just the SVG icons.

## Loading Raw SVG

One method that I personally use because of the better browser support is just using the raw SVG code in the html:

```html
<svg
  width="16px"
  height="16px"
  viewBox="0 0 16 16"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g id="sun-solid" fill="#173854" fill-rule="nonzero">
      <path
        d="M8,5 C6.346875,5 5,6.346875 5,8 C5,9.653125 6.346875,11 8,11 C9.653125,11 11,9.653125 11,8 C11,6.346875 9.653125,5 8,5 Z M15.7,7.515625 L12.740625,6.0375 L13.7875,2.9 C13.928125,2.475 13.525,2.071875 13.103125,2.215625 L9.965625,3.2625 L8.484375,0.3 C8.284375,-0.1 7.715625,-0.1 7.515625,0.3 L6.0375,3.259375 L2.896875,2.2125 C2.471875,2.071875 2.06875,2.475 2.2125,2.896875 L3.259375,6.034375 L0.3,7.515625 C-0.1,7.715625 -0.1,8.284375 0.3,8.484375 L3.259375,9.9625 L2.2125,13.103125 C2.071875,13.528125 2.475,13.93125 2.896875,13.7875 L6.034375,12.740625 L7.5125,15.7 C7.7125,16.1 8.28125,16.1 8.48125,15.7 L9.959375,12.740625 L13.096875,13.7875 C13.521875,13.928125 13.925,13.525 13.78125,13.103125 L12.734375,9.965625 L15.69375,8.4875 C16.1,8.284375 16.1,7.715625 15.7,7.515625 Z M10.828125,10.828125 C9.26875,12.3875 6.73125,12.3875 5.171875,10.828125 C3.6125,9.26875 3.6125,6.73125 5.171875,5.171875 C6.73125,3.6125 9.26875,3.6125 10.828125,5.171875 C12.3875,6.73125 12.3875,9.26875 10.828125,10.828125 Z"
        id="Shape"
      ></path>
    </g>
  </g>
</svg>
```

I don't expect you to understand this code fully, but it's the raw SVG markup. I get this by opening the downloaded SVG from Fontawesome in Sketch and copying the SVG code.

You can also use [this online tool](https://www.rapidtables.com/web/tools/svg-viewer-editor.html).

The advantage here is we are only using the icons we need.

## SVG Sprite File

Another cleaner way of loading them is by using an SVG Sprite file.
These are inline files you can create with a tool like [Icomoon](https://icomoon.io/)

```html
<svg
  aria-hidden="true"
  style="position: absolute; width: 0; height: 0; overflow: hidden;"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <defs>
    <symbol id="icon-money" viewBox="0 0 30 28">
      <path
        d="M12 18h6v-1.5h-2v-7h-1.781l-2.312 2.141 1.203 1.25c0.375-0.328 0.609-0.5 0.859-0.891h0.031v4.5h-2v1.5zM20 14c0 2.844-1.719 6.5-5 6.5s-5-3.656-5-6.5 1.719-6.5 5-6.5 5 3.656 5 6.5zM28 18v-8c-2.203 0-4-1.797-4-4h-18c0 2.203-1.797 4-4 4v8c2.203 0 4 1.797 4 4h18c0-2.203 1.797-4 4-4zM30 5v18c0 0.547-0.453 1-1 1h-28c-0.547 0-1-0.453-1-1v-18c0-0.547 0.453-1 1-1h28c0.547 0 1 0.453 1 1z"
      ></path>
    </symbol>
    <symbol id="icon-gavel" viewBox="0 0 28 28">
      <path
        d="M27.672 24c0 0.531-0.219 1.047-0.578 1.406l-1.672 1.687c-0.375 0.359-0.891 0.578-1.422 0.578s-1.047-0.219-1.406-0.578l-5.672-5.688c-0.375-0.359-0.594-0.875-0.594-1.406 0-0.594 0.25-1.078 0.672-1.5l-4-4-1.969 1.969c-0.141 0.141-0.328 0.219-0.531 0.219s-0.391-0.078-0.531-0.219c0.469 0.469 0.906 0.812 0.906 1.531 0 0.406-0.156 0.766-0.438 1.062-0.531 0.562-1.094 1.313-1.937 1.313-0.391 0-0.781-0.156-1.062-0.438l-6.375-6.375c-0.281-0.281-0.438-0.672-0.438-1.062 0-0.844 0.75-1.406 1.313-1.937 0.297-0.281 0.656-0.438 1.062-0.438 0.719 0 1.062 0.438 1.531 0.906-0.141-0.141-0.219-0.328-0.219-0.531s0.078-0.391 0.219-0.531l5.437-5.437c0.141-0.141 0.328-0.219 0.531-0.219s0.391 0.078 0.531 0.219c-0.469-0.469-0.906-0.812-0.906-1.531 0-0.406 0.156-0.766 0.438-1.062 0.531-0.562 1.094-1.313 1.937-1.313 0.391 0 0.781 0.156 1.062 0.438l6.375 6.375c0.281 0.281 0.438 0.672 0.438 1.062 0 0.844-0.75 1.406-1.313 1.937-0.297 0.281-0.656 0.438-1.062 0.438-0.719 0-1.062-0.438-1.531-0.906 0.141 0.141 0.219 0.328 0.219 0.531s-0.078 0.391-0.219 0.531l-1.969 1.969 4 4c0.422-0.422 0.906-0.672 1.5-0.672 0.531 0 1.047 0.219 1.422 0.578l5.672 5.672c0.359 0.375 0.578 0.891 0.578 1.422z"
      ></path>
    </symbol>
  </defs>
</svg>
```

We can use each symbol as follows:

```html
<svg class="icon icon-money">
  <use xlink:href="#icon-money"></use>
</svg>

<svg class="icon icon-gavel">
  <use xlink:href="#icon-gavel"></use>
</svg>
```

Cool right!

## CSS SVG?

The cool thing is we can still use CSS to style these SVG icons.

```css
.icon {
  width: 50px;
  height: 50px;
}
```

See it in action on this Codepen:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="RwrVLOj" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Fontawesome SVG Alternative">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/RwrVLOj">
  Fontawesome SVG Alternative</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

The standard SVG method has a pretty good browser support IE9+ and most mobile browsers!

![SVG support](https://caniuse.bitsofco.de/image/svg.png)

The Sprite method is less supported but overall very strong:

![SVG Fragment support](https://caniuse.bitsofco.de/image/svg-fragment.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
