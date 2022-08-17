---
layout: ../../layouts/Post.astro
title: 'Native CSS Masonry layouts'
metaTitle: 'Native CSS Masonry layouts'
metaDesc: 'Finally a specification for CSS native masonry grid.'
image: /images/27-03-2021.jpg
date: 2021-03-27T03:00:00.000Z
tags:
  - css
---

I'm very excited about this feature, although it's not yet widely supported.

Making masonry grids is so cool! It's that kind of elemental table effect, where blocks with different sizes can stack. (Like Tetris!)

And yes, we could do this before, with either some JavaScript or come very close with flex and grid, but it wasn't perfect.

Now there is the `masonry` option for `grid-template-rows`.

> Note: This is unfortunately far from being well supported, so do note that!

The end result can look like this:

![CSS Masonry layout](https://cdn.hashnode.com/res/hashnode/image/upload/v1616477465934/BtaQQ9gO_.png)

## Enabling masonry support

Currently, we can try out the feature in Firefox, but we do need to enable it first.

Open up Firefox and type the following in the address bar: `about:config`.

Then type: `layout.css.grid-template-masonry-value.enabled` and set this to true.

Now we can enjoy CSS native grids!

## Creating our masonry grid

To create the grid, we generally just use [CSS `grid`](https://daily-dev-tips.com/posts/css-grid-introduction/) options.

Let's start by creating a basic structure:

```html
<div class="container">
  <img src="1.jpg" />
  <img src="2.jpg" />
  <img src="3.jpg" />
  ...
</div>
```

Here you can add some images of all kinds of shapes that will become masonry's magic to fix.

Now let's add the magic in CSS.

```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: masonry;
  gap: 10px;
}
```

And yes, that's it!
All we need to create masonry layouts.

In browser that doesn't support it, we get the following result:

![Browser that doesn't support CSS masonry](https://cdn.hashnode.com/res/hashnode/image/upload/v1625035106721/s3qVCxIoi.png)

However, in browsers that do support it, we see the following:

![CSS Masonry layout](https://cdn.hashnode.com/res/hashnode/image/upload/v1616477465934/BtaQQ9gO_.png)

Wow, right? It just auto-filled where each image should go, and it looks amazing.

I'm super amped for this feature to become widely supported.

For those that use Firefox, enable the flag and check it out on this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="yLgLGmq" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Native CSS Masonry layouts">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/yLgLGmq">
  Native CSS Masonry layouts</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Browser support

Unfortunately, it's really new and therefore not supported. We have to enable a flag in Firefox to see it in action.

To enable in Firefox, set the following flag to true.
`layout.css.grid-template-masonry-value.enabled`.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
