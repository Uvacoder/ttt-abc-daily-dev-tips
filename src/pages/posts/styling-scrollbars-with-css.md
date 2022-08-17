---
layout: ../../layouts/Post.astro
title: 'CSS for styling the scrollbar'
metaTitle: 'Scrollbar styling with CSS Tutorial [2022]'
metaDesc: "In today's guide we will learn how to style a scrollbar with CSS. See the code examples in the Codepen!"
image: /images/23-02-2021.jpg
date: 2021-02-23T03:00:00.000Z
tags:
  - css
---

Yesterday we already looked into **scrollbars** and learned [how to hide them for certain areas on the web page](https://daily-dev-tips.pages.dev/posts/css-hide-scrollbars/).

Today we will learn **how to style scrollbars with CSS**.

Styled scrollbars are pretty rare. I've only seen them on a couple of sites so far.

Some examples of websites using custom scrollbars:

- [CSS-Tricks](https://css-tricks.com/)
- [SWYX](https://www.swyx.io/)

It's somewhat quite weird that we don't see more custom scrollbars. They can help to enhance your design.

The scrollbar has always been very hard to style. However, we got some recent CSS additions that give us properties like `scrollbar-color` and `scrollbar-width` to change the **color** and **width**.

## CSS for scrollbar styles

Let's see how we can give the best browser support for a styled scrollbar.

It's essential to use both the WebKit styles and the newer scrollbar styles, like this:

```css
:root {
  --scrollbarWidth: 12px;
  --scrollbarBg: rgb(99, 102, 241);
  --scrollbarThumb: rgb(244, 63, 94);
}
.container {
  scrollbar-width: var(--scrollbarWidth);
  scrollbar-color: var(--scrollbarThumb) var(--scrollbarBg);
}
.container::-webkit-scrollbar {
  width: var(--scrollbarWidth);
}
.container::-webkit-scrollbar-track {
  background: var(--scrollbarBg);
}
.container::-webkit-scrollbar-thumb {
  background-color: var(--scrollbarThumb);
  border-radius: 6px;
  border: 3px solid var(--scrollbarBg);
}
```

Let's go through the CSS properties and see what happens for each.

We start by defining some CSS variables so we can re-use the same styles:

```css
:root {
  --scrollbarWidth: 12px;
  --scrollbarBg: rgb(99, 102, 241);
  --scrollbarThumb: rgb(244, 63, 94);
}
```

If you want to learn more about this, I wrote a more detailed article on [CSS variables](https://daily-dev-tips.com/posts/how-to-use-css-vars/).

The next element is the newer scrollbar CSS properties:

```css
.container {
  scrollbar-width: var(--scrollbarWidth);
  scrollbar-color: var(--scrollbarThumb) var(--scrollbarBg);
}
```

It's new, and I found only Chrome supports it so far. You even need to turn on some settings for it:

- MAC: Settings > General > Show scroll bars > Always
- Firefox: about:config > layout.css.scrollbar-color.enabled > true

The values you see for the scrollbar-color are as follows:

- Thumb - background

> Note: It supports other colors, like: `scrollbar-color: dark|light`, but so far, no browser supports this.

This is where our fallback Webkit prefixes come in place:

```css
.container::-webkit-scrollbar {
  width: var(--scrollbarWidth);
}
.container::-webkit-scrollbar-track {
  background: var(--scrollbarBg);
}
.container::-webkit-scrollbar-thumb {
  background-color: var(--scrollbarThumb);
  border-radius: 6px;
  border: 3px solid var(--scrollbarBg);
}
```

The prefixes will ensure the custom scrollbar renders in all the other modern browsers.
We can also use the main CSS prefix to define the scrollbar width.

Next up, we can style the track, which acts as the scrollbar's **background color**.

Then lastly, we have the option to style the **thumb**. This is the actual sliding bit. In my example, I use a border radius and border to offset it from the sides a bit.

And that's it. You now learned how to style a custom scrollbar with CSS!

### See the CSS examples in this Codepen

Check out the demo I made on Codepen:

<p class="codepen" data-height="455" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="vYyZOdQ" style="height: 455px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Styling scrollbars with CSS">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/vYyZOdQ">
  Styling scrollbars with CSS</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Browser support

Unfortionally the scrollbar color and scrollbar width are not supported well.

![CSS scrollbar-color browser support](https://caniuse.bitsofco.de/static/v1/mdn-css__properties__scrollbar-color-1613629628559.png)

The WebKit prefix, however, is supported more widely. You can see a combination of both supports many browsers.

![CSS webkit scrollbar browser support](https://caniuse.bitsofco.de/static/v1/mdn-css__selectors__-webkit-scrollbar-1613629673574.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
