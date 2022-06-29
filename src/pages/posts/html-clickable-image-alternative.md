---
layout: ../../layouts/Post.astro
title: 'HTML Clickable Image Alternative'
metaTitle: 'HTML Clickable Image Alternative'
metaDesc: 'Exploring an alternative for image map'
image: /images/17-06-2020.jpg
date: 2020-06-17T03:00:00.000Z
tags:
  - html
---

Yesterday we had a look at the [`HTML` `map` element](https://daily-dev-tips.com/posts/html-image-map/), and as mentioned, there might be a better solution nowadays.

Today we'll be looking at creating a very similar effect, but with cool hovers.

## HTML Structure

```html
<div class="container">
  <img
    width="467px"
    src="https://images.unsplash.com/photo-1491378630646-3440efa57c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
  />
  <a href="#sky" class="overlay overlay-sky"></a>
  <a href="#sea" class="overlay overlay-sea"></a>
  <a href="#sand" class="overlay overlay-sand"></a>
</div>
```

So what we are doing is creating a container div with the image inside and our overlay areas. We are making three areas here to click on.

## CSS Structure

We will use `position: absolute` to position the area's correct. Therefore the container needs to be relative and inline.

```css
.container {
  position: relative;
  display: inline-block;
}
```

And then for the overlays the share the following `CSS`:

```css
.overlay {
  position: absolute;
  width: 100%;
  left: 0;
}
```

And then for the specific ones:

```css
.overlay-sky {
  height: 150px;
  top: 0;
}
.overlay-sea {
  height: 300px;
  top: 150px;
}
.overlay-sand {
  height: 255px;
  bottom: 0px;
}
```

And last, we will add a very simple hover to demonstrate.

```css
.overlay:hover {
  background: rgba(0, 0, 0, 0.3);
}
```

View and play on this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="yLeaagr" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="HTML Clickable Image Alternative">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/yLeaagr">
  HTML Clickable Image Alternative</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

So this can be supported by every browser! It might need some hacks in the old Internet Explorers.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
