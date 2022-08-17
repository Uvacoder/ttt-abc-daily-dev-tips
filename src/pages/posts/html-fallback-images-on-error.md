---
layout: ../../layouts/Post.astro
title: 'HTML fallback images on error'
metaTitle: 'HTML fallback images on error'
metaDesc: "How to show a fallback image when the image doesn't load"
ogImage: /images/06-08-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/d1c72ea8-80f8-4e8c-b020-6e21f4708700
date: 2022-08-06T03:00:00.000Z
tags:
  - html
---

The other day I encountered some issues with images for external sources not loading.

I saved a link to someone's Twitter profile image in this case. When the user changes this image, it doesn't auto reflect the new one.

So I decided to look into fallback images.
And it's surprisingly easy.

What we want to achieve:

- Load the image
- If it doesn't load, show the fallback

> Note: Alternatively, you could decide to remove the image

## HTML on error fallback images

Let's set up a sample HTML experiment.

```html
<img
  src="https://images.pexels.com/photos/163822/color-umbrella-red-yellow-163822.jpeg"
/>
```

This will load an [Photo by Pixabay from Pexels](https://www.pexels.com/photo/yellow-blue-red-pink-purple-green-multicolored-open-umbrellas-hanging-on-strings-under-blue-sky-163822/) (a stock image site).

This will work perfectly, but now let's try and destroy it by randomly adding some numbers to the image.

```html
<img
  src="https://images.pexels.com/photos/163822/color-umbrella-red-yellow-00000.jpeg"
/>
```

With this, we get the super annoying broken image.

![Broken image](https://cdn.hashnode.com/res/hashnode/image/upload/v1658904232633/3hpuI-Kw4.png)

So what can we do when this happens?
We can use the `onerror` attribute on the image to set a fallback.

It works like this:

```html
<img
  src="https://images.pexels.com/photos/163822/color-umbrella-red-yellow-00000.jpeg"
  onerror="this.onerror=null; this.src='https://images.pexels.com/photos/159868/lost-cat-tree-sign-fun-159868.jpeg'"
/>
```

We use the `onerror` to set the error to null and set the src of the image to a fallback.
In our case, a photo of a missing cat.

> Note: It's not a great practice to rely on external images. You ideally want to have the fallback image locally in the file system, so it's a reliable fallback.

You can see it in action in the following CodePen.
The first image loads, and the second one is broken.

<p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="VwXMMZo" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/VwXMMZo">
  HTML fallback images on error</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
