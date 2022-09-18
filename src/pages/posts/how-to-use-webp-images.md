---
layout: ../../layouts/Post.astro
title: 'How to use WebP images'
metaTitle: 'How to use WebP images'
metaDesc: 'Learning about WebP images, how to use them and why you should use them!'
image: /images/10-02-2021.jpg
date: 2021-02-10T03:00:00.000Z
tags:
  - html
---

Here's a use-case you build a great web application, and it's fantastic. Then your colleague asks you how the speed of this unique application is.

Oef, you didn't check that during development but decided to run a lighthouse test to get a general understanding.

The results shock you a bit!

![Bad lighthouse score](https://cdn.hashnode.com/res/hashnode/image/upload/v1612504243591/TPULQdm2x.png)

That sucks, your structure seems alright, but the website is just plain slow...

Doing some more research, you might come across this section:

![Chrome Lighthouse next-gen image formats](https://cdn.hashnode.com/res/hashnode/image/upload/v1612504383457/_-wCDGqI3.png)

And it's a valid point. Next-gen image formats are unique and should be used.

## What is a WebP image?

In this article, we'll be talking about WebP images, but what exactly are WebP images?

WebP is a new modern image format. It applies lossless and lossy compression for images on the web.
It makes our files even smaller for the web!

It saves around 26% and between 25-34% on JPEG than a PNG.

The cool part is that it supports transparency as PNGs do. And at meager costs.
Meaning a PNG converted to WebP is 3x smaller on average.

I've converted the same image in PNG, WebP, and JPG to showcase this without unique compression.

![Different image formats](https://cdn.hashnode.com/res/hashnode/image/upload/v1612504592342/lraBbd6xn.png)

Wow, that's one big jump in file size, and it's not even compressed.

Awesome, let's use these WebP images everywhere!

## Using WebP images

So our main goal might be to replace every image on the site with a WebP variant.

```html
<!-- before -->
<img src="cat.jpg" alt="a cute cat" />
<!-- after -->
<img src="cat.webp" alt="a cute cat" />
```

We did it, ran it in Chrome, and it works. Lighthouse also seems happy, so done.

But about 15 minutes later, Linda from Marketing calls and complains all the images have disappeared on her computer.
You ask what browser she is using, and after a small battle finding out what a browser is, it turns out to be Internet Explorer.

Darn, we didn't check that!
Now what? You and your developer colleague want a fast website, but it shouldn't go to waste for all the other users on non-modern browsers.

The browser support for WebP is not bad, but unfortunately, it's not fully supported yet.

![WebP browser support](https://caniuse.bitsofco.de/image/webp.png)

That is where the `<picture>` element comes in handy.

We can convert our `<img>` tags to be part of a `<picture>` element.

```html
<picture>
  <source type="image/webp" srcset="cat.webp" />
  <img src="cat.jpg" alt="A super cute cat" />
</picture>
```

Pretty cool. Since the browsers will parse this top-down, if they support the WebP format, they'll choose that image, or they will fall back on the JPG.

It's important to know that the picture element needs the `<img>` tag, and it will use that `alt` text to show on either of the sources.

## Testing our the support fallback

You might think, cool, we got it working now, but how can I test this?

Luckily, Chrome 88 shipped an excellent modern image format rendering option.

You can find this option in your Chrome dev tools under the Rendering tab.

![Chrome test modern formats](https://cdn.hashnode.com/res/hashnode/image/upload/v1612505641244/4T0Sr6SR2.png)

For my example, I used two pictures of different cats so we could see the difference.

When WebP is rendering, we should see this cute cat:

![WebP supported image](https://cdn.hashnode.com/res/hashnode/image/upload/v1612505757204/r0V3WdOhl.png)

And as a fallback, when we don't have WebP support, we should see this cat.jpg image.

![HTML Picture jpeg fallback](https://cdn.hashnode.com/res/hashnode/image/upload/v1612505817215/3BDD3FpCg.png)

You can try this out using the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="PobZJLL" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="How to use WebP images">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/PobZJLL">
  How to use WebP images</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Browser Support

The HTML Picture element has almost full support, and don't worry, the browsers that don't support the tag will fall back to the `<img>` we placed inside the picture tag.

![HTML Picture element support](https://caniuse.bitsofco.de/image/picture.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
