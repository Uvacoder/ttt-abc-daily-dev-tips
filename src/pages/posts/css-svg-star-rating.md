---
layout: ../../layouts/Post.astro
title: 'CSS SVG star rating ⭐️'
metaTitle: 'SVG Star Rating Tutorial [2022] ⭐️'
metaDesc: 'We will learn how to create an SVG powered rating component with stars. See the code example in the Codepen.'
image: /images/27-10-2020.jpg
date: 2020-10-27T03:00:00.000Z
tags:
  - html
  - svg
---

Today we will be looking at making an **SVG star rating**.
In our example, we will be using three types of stars:

- Empty star
- Half star
- full star

Then we will be showcasing some examples of how to use them to show a specific star rating.

### You can see the example code in this Codepen

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="dyXORMd" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS SVG star rating ⭐️">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/dyXORMd">
  CSS SVG star rating ⭐️</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Creating the SVG set

As mentioned, we will be using three versions of the stars, and we will be using [SVG Sprites](https://daily-dev-tips.com/posts/svg-sprites/) to accomplish this. Here is the SVG code for the stars:

```html
<svg id="stars" style="display: none;" version="1.1">
  <symbol id="stars-empty-star" viewBox="0 0 102 18" fill="#F1E8CA">
    <path
      d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218"
    />
  </symbol>
  <symbol id="stars-full-star" viewBox="0 0 102 18" fill="#D3A81E">
    <path
      d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218"
    />
  </symbol>
  <symbol id="stars-half-star" viewBox="0 0 102 18" fill="#D3A81E">
    <use xlink:href="#stars-empty-star" />
    <path
      d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792"
    />
  </symbol>
</svg>
```

Looking at the star paths, we can see we have three different star shapes:

- stars-empty-star: This is the star with a very light gold background.
- stars-full-star: This is actually the same shape but with a different color.
- stars-half-star: This is a combination of an empty star at the bottom and a half star on top.

That will be our source, and we can use this in the following ways.

## Using the SVG stars

The main question is, of course, how can we now showcase our stars?

Let's say you want to show an empty star:

```html
<svg aria-hidden="true" focusable="false" class="rating">
  <use xlink:href="#stars-empty-star" />
</svg>
```

Or a full star:

```html
<svg aria-hidden="true" focusable="false" class="rating">
  <use xlink:href="#stars-full-star" />
</svg>
```

Or even the half star:

```html
<svg aria-hidden="true" focusable="false" class="rating">
  <use xlink:href="#stars-half-star" />
</svg>
```

That works, awesome!

But now we want to make a 5-star rating component, and SVG's tend to sit on top of each other.

So if we have the following code:

```html
<!-- 2.5 Rating -->
<svg aria-hidden="true" focusable="false" class="rating">
  <use xlink:href="#stars-full-star" />
  <use xlink:href="#stars-full-star" />
  <use xlink:href="#stars-half-star" />
  <use xlink:href="#stars-empty-star" />
  <use xlink:href="#stars-empty-star" />
</svg>
```

It all looks like this:

![SVG Stars](https://cdn.hashnode.com/res/hashnode/image/upload/v1603347139123/Bj4IomOUJ.png)

Hmm, weird? It only shows one star?
Correct!

So let's use `CSS` to fix that.

```css
use {
  &:nth-child(2) {
    transform: translate(20px);
  }
  &:nth-child(3) {
    transform: translate(40px);
  }
  &:nth-child(4) {
    transform: translate(60px);
  }
  &:nth-child(5) {
    transform: translate(80px);
  }
}
```

Every x child we give 20px offset position.

After applying the CSS to the star rating, we finally get this:

![SVG Star rating](https://cdn.hashnode.com/res/hashnode/image/upload/v1603347219154/SsCil3esJ.png)

You can find the rest of the rating combinations in the [Codepen](https://codepen.io/rebelchris/pen/dyXORMd)!

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
