---
layout: ../../layouts/Post.astro
title: 'Tailwind CSS drop shadow effect for PNG images'
metaTitle: 'Tailwind CSS drop shadow effect for PNG images'
metaDesc: 'How to add a drop shadow effect to PNG images in Tailwind CSS'
ogImage: /images/04-02-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/198b167c-7055-44bc-784d-010b02fa9500
date: 2022-02-04T03:00:00.000Z
tags:
  - tailwind
---

Did you know that you can apply a [drop-shadow to PNG images](https://daily-dev-tips.com/posts/css-drop-shadow-vs-box-shadow/)? This drop shadow will follow the outline of the image!

In this article, I'll show you how to achieve this **drop shadow effect in Tailwind CSS**.

![Tailwind drop shadow effect for PNG images](https://cdn.hashnode.com/res/hashnode/image/upload/v1643176941336/QyqKefsUv.png)

The above image shows the default PNG image on the left and a drop-shadow effect on the right.

## Tailwind CSS Drop Shadow effect

You need to use a PNG (transparent) to achieve this effect.

And apply the `drop-shadow` class.
You can pick any of the following variants:

- `drop-shadow-sm`
- `drop-shadow`
- `drop-shadow-md`
- `drop-shadow-lg`
- `drop-shadow-xl`
- `drop-shadow-2xl`

> Note if you are still in [Tailwind V2](https://daily-dev-tips.com/posts/upgrading-tailwind-v2-to-v3/), you'll have to use the `filter` class as well.

## Tailwind CSS Box Shadow effect

Alternatively, you might have seen or heard about the box-shadow effect. This effect will not wrap around the edges of your PNG; instead, use the box it is in.

You can see the box-shadow on the left and the drop shadow effect on the right in the image below.

![Tailwind box-shadow vs drop shadow effect](https://cdn.hashnode.com/res/hashnode/image/upload/v1643177257936/X1CzERQQO.png)

The box-shadow can be added by using any of the following classes:

- `shadow-sm`
- `shadow`
- `shadow-md`
- `shadow-lg`
- `shadow-xl`
- `shadow-2xl`

I've also made this CodePen example to see the options' differences.

<p class="codepen" data-height="526" data-default-tab="result" data-slug-hash="podoGJB" data-user="rebelchris" style="height: 526px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/podoGJB">
  Tailwind CSS drop shadow effect for PNG images</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
