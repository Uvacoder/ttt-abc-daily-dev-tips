---
layout: ../../layouts/Post.astro
title: 'Tailwind CSS fixed and scrollable section'
metaTitle: 'Tailwind CSS fixed and scrollable section'
metaDesc: 'Making a Tailwind CSS layout with a scrollable and fixed area.'
image: /images/26-02-2021.jpg
date: 2021-02-26T03:00:00.000Z
tags:
  - css
  - tailwind
---

I worked on my wedding website (more information on that later) and found this cool effect I wanted to share with you guys.

We can have a sectioned website where the left side is fixed so it will always be visible, and the right side is our content side which will have scrollable areas.

The result will look like this:

![Tailwind CSS scrollable and fixed section](https://cdn.hashnode.com/res/hashnode/image/upload/v1613929868846/nO_kmRPDI.gif)

On mobile, it should all just stack as viewport height areas. I'll explain how we can achieve that.

## Tailwind CSS Fixed section

Let's start by building the fixed section. It's the natural first element we'll see either on Desktop or Mobile.

Before we build that, we need a bigger container wrapper for our two parts.

This can be a div, with the class `relative`.

```html
<div class="relative">
  <!-- fixed section -->
  <!-- scrollable sections -->
</div>
```

We will make both sections there, so let's start by adding the fixed section.

```html
<div class="relative inset-0 w-full min-h-screen md:fixed md:w-7/12"></div>
```

We have it as a relative element at first load. This will be for our mobile layout.
On medium-sized devices, we make the element fixed. This is what makes it stick to its position.
Then we say it should be full-width on mobile and 7/12 columns on medium devices.
The height is the height of the screen, and we use the `inset-0` class to set it to each side.

With that, we have our wrapper. In there, we will add an image and some text on top of the image.

```html
<h1 class="absolute bottom-0 left-0 p-20 text-white text-8xl">
  Benny<br />The Pup
</h1>
<img src="http://img.com" class="object-cover w-full h-full" />
```

The text is absolutely positioned to overlap the image. We align it at the bottom of our wrapper.
Then for the image, we use `object-cover` to make it span the whole element.

And that's it. We now have the fixed part done, on to the scrollable sections.

## Tailwind CSS scrollable sections

As for the scrollable sections, they also come inside the `relative` container.

```html
<div class="w-full ml-auto md:w-5/12">
  <div class="flex flex-col items-center justify-center h-screen bg-red-200">
    <h2 class="mb-5 text-4xl">Meet Benny</h2>
    <p class="mb-5">I was born 20 May 2020</p>
  </div>
  <!-- repeat above -->
</div>
```

This is also full-width on mobile and 5/12 columns on medium devices. I added the `ml-auto` to offset it to the right side of the screen for the medium devices.

Inside of that, we can define our sections.
I use a simple 100vh section with a background color to showcase the scrollable element.
This will make the element the exact height of the screen by adding the `h-screen` class.
Then we use flex to center everything inside.

Now you can copy-paste these sections and make them look slightly different.

## Demo

I hope you enjoyed this article and can see the potential of this fantastic layout option.

I sure did, and keep an eye out for our wedding website 🤩.

You can find the demo on Codepen.

<p class="codepen" data-height="602" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="wvorKJv" style="height: 602px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Tailwind CSS fixed and scrollable section">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/wvorKJv">
  Tailwind CSS fixed and scrollable section</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
