---
layout: ../../layouts/Post.astro
title: 'CSS Easy Masonry Grid'
metaTitle: 'CSS Easy Masonry Grid'
metaDesc: 'A super easy way of making a masonry grid'
image: /images/14-05-2020.jpg
date: 2020-05-14T03:00:00.000Z
tags:
  - css
---

Today, we will look into making a straightforward `CSS` Masonry grid.
Those who don't know what a Masonry grid is are a grid where items that are not equal in size match up.
This was quite hard to achieve back in the days, and you had to use some bloated `JavaScript` framework to accomplish this.
Nowadays, we can make it with very little `CSS` use.

## HTML Structure

```html
<div class="masonry">
  <img
    src="https://images.unsplash.com/photo-1551675705-72513c2722a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  ... More images
</div>
```

As you can see, I tried to keep it as simple as possible by only using one `masonry` container and adding several images to it.

## CSS Masonry

```css
.masonry {
  column-count: 3;
  column-gap: 0;
}
.masonry img {
  display: block;
  max-width: 100%;
}
```

Yes, that's all! We defined a `column-count` which will make 3 columns, and I added a gap of 0 to make it look better.
Then each image, we give a `max-width` so it doesn't break out.

View and play with this demo on Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="GRpBEyr" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Easy Masonry Grid">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/GRpBEyr">
  CSS Easy Masonry Grid</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

The browser support for `column-count` is actually impressive!
IE10+, and all major browsers.

[View on caniuse](https://caniuse.com/#search=column-count)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
