---
layout: ../../layouts/Post.astro
title: 'Header with responsive image in Tailwind CSS'
metaTitle: 'Responsive header with image Tailwind CSS [2022]'
metaDesc: 'Tutorial to create a fully responsive header including an image without any custom CSS - just Tailwind. Read the explanations and see the Codepen.'
image: /images/10-12-2020.jpg
date: 2020-12-10T03:00:00.000Z
tags:
  - css
  - tailwind
---

In this tutorial, we will be creating a super cool **responsive header** with an image only using [Tailwind CSS](https://daily-dev-tips.com/posts/my-first-experiences-with-tailwind-css/).

This header will include the following elements.

- ✅ Left side for text
- ✅ Right side for a responsive image
- ✅ Diagonal line and opacity line to split them
- ✅ No custom CSS is needed!

The result is this super cool header, including a responsive image:

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/tailwind-responsive-header_jnlgqp.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/tailwind-responsive-header_p3zcq6.mp4" type="video/mp4" />
</video>

## Tailwind CSS responsive header

We won't be writing our own `CSS`, so bear with me as we build this header using `HTML` elements with Tailwind classes.

We will start off by building the main wrapper:

```html
<div class="relative h-64 m-8 overflow-hidden bg-indigo-500 rounded-lg"></div>
```

We give this wrapper a height with the `h-64` class and round the corners. Next, we also make the background a cool indigo tint.

As you can see, this wrapper has a relative positioning.
That's because we need to use some absolute divs to position elements on top of each other.

The above code gives us the following result:

![Tailwind header container layer](https://cdn.hashnode.com/res/hashnode/image/upload/v1607161489970/SP5mp4Es_.png)

We want to place the image on the right and make it flexible first.

```html
<div class="relative h-64 m-8 overflow-hidden bg-indigo-500 rounded-lg">
  <div class="absolute top-0 right-0 block w-9/12 h-full">
    <img
      alt="Snowy mountain lake"
      class="object-cover h-full min-w-full"
      src="https://images.unsplash.com/photo-1607025952930-da2ac6748e7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    />
  </div>
</div>
```

As you can see, we place an absolute div inside our container. This div is set to the right of the parent element.
We also state it should be 9/12 of the width and use the full height.
Inside of the div is the actual image.
We state it should use an object-fit method and use the full height.

The result so far:

![Tailwind header with flex image](https://cdn.hashnode.com/res/hashnode/image/upload/v1607161658355/rkuifL6MF.png)

Already a pretty awesome result. We need to make the left side for the content and the even cooler diagonal lines.

```html
<div class="relative h-64 m-8 overflow-hidden bg-indigo-500 rounded-lg">
  <div class="absolute z-30 flex w-full h-full">
    <div class="relative z-30 w-5/6 px-6 py-8 text-white md:py-10 md:w-1/2">
      <h2 class="text-5xl">Tailwind responsive header</h2>
      <span></span>
    </div>
  </div>
  <div class="absolute top-0 right-0 block w-9/12 h-full">
    <img
      alt="Snowy mountain lake"
      class="object-cover h-full min-w-full"
      src="https://images.unsplash.com/photo-1607025952930-da2ac6748e7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    />
  </div>
</div>
```

We add another absolute div, which uses the entire width and height.
This is because we will cut down on the size relative to the parent inside the div.
We placed a relative div inside, which defined some padding and the size of the text div.
We have the heading text, nothing fancy, just a big, bold font.

If we now render this, it looks a bit odd. The text is half over the image, which is weird-looking.

![Tailwind header with text and image](https://cdn.hashnode.com/res/hashnode/image/upload/v1607161854348/8fsSDRVDr.png)

Now we need to find a way to add the diagonal line and have some more indigo behind the text.

```html
<div class="relative h-64 m-8 overflow-hidden bg-indigo-500 rounded-lg">
  <div class="absolute z-30 flex w-full h-full">
    <div class="relative z-30 w-5/6 px-6 py-8 text-white md:py-10 md:w-1/2">
      <h2 class="text-5xl">Tailwind responsive header</h2>
      <span></span>
    </div>
    <div class="absolute top-0 right-0 flex w-full h-full">
      <div class="w-1/3 h-full bg-indigo-500"></div>
    </div>
  </div>
  <div class="absolute top-0 right-0 block w-9/12 h-full">
    <img
      alt="Snowy mountain lake"
      class="object-cover h-full min-w-full"
      src="https://images.unsplash.com/photo-1607025952930-da2ac6748e7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    />
  </div>
</div>
```

Here we added another absolute div. For now, we add a 1/3 width element inside with the indigo color. This is the background for our text element.

It's still not fully covering the text.
That is because our shape will do the final stretch.

![Tailwind CSS header plus text](https://cdn.hashnode.com/res/hashnode/image/upload/v1607162043918/LJkKcBXMQ.png)

Now it's time to add the shapes. I use [SVG's with a polygon inside](https://daily-dev-tips.com/posts/svg-blur-filter/).

```html
<div class="relative h-64 m-8 overflow-hidden bg-indigo-500 rounded-lg">
  <div class="absolute z-30 flex w-full h-full">
    <div class="relative z-30 w-5/6 px-6 py-8 text-white md:py-10 md:w-1/2">
      <h2 class="text-5xl">Tailwind responsive header</h2>
      <span></span>
    </div>
    <div class="absolute top-0 right-0 flex w-full h-full">
      <div class="w-1/3 h-full bg-indigo-500"></div>
      <div class="relative w-1/3">
        <svg
          fill="currentColor"
          viewBox="0 0 100 100"
          class="absolute inset-y-0 z-20 h-full text-red-500"
        >
          <polygon id="diagonal" points="0,0 100,0 50,100 0,100"></polygon>
        </svg>
      </div>
    </div>
  </div>
  <div class="absolute top-0 right-0 block w-9/12 h-full">
    <img
      alt="Snowy mountain lake"
      class="object-cover h-full min-w-full"
      src="https://images.unsplash.com/photo-1607025952930-da2ac6748e7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    />
  </div>
</div>
```

We added another 1/3 column, but with relative positioning for now. Inside, you can see the SVG, which contains a polygon.
You can change the color of these SVGs by using text classes. For the demo, I made this text-red to see that it is added.

![Tailwind CSS SVG shape](https://cdn.hashnode.com/res/hashnode/image/upload/v1607162297602/PfLCiwOi4.png)

Pretty cool, right!

Now, let's finish the shapes and add the last copy of our SVG, but offset it a little bit and add transparency to it.

```html
<div class="relative h-64 m-8 overflow-hidden bg-indigo-500 rounded-lg">
  <div class="absolute z-30 flex w-full h-full">
    <div class="relative z-30 w-5/6 px-6 py-8 text-white md:py-10 md:w-1/2">
      <h2 class="text-5xl">Tailwind responsive header</h2>
      <span></span>
    </div>
    <div class="absolute top-0 right-0 flex w-full h-full">
      <div class="w-1/3 h-full bg-indigo-500"></div>
      <div class="relative w-1/3">
        <svg
          fill="currentColor"
          viewBox="0 0 100 100"
          class="absolute inset-y-0 z-20 h-full text-indigo-500"
        >
          <polygon id="diagonal" points="0,0 100,0 50,100 0,100"></polygon>
        </svg>
        <svg
          fill="currentColor"
          viewBox="0 0 100 100"
          class="absolute inset-y-0 z-10 h-full ml-6 text-white opacity-50"
        >
          <polygon points="0,0 100,0 50,100 0,100"></polygon>
        </svg>
      </div>
    </div>
  </div>
  <div class="absolute top-0 right-0 block w-9/12 h-full">
    <img
      alt="Snowy mountain lake"
      class="object-cover h-full min-w-full"
      src="https://images.unsplash.com/photo-1607025952930-da2ac6748e7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    />
  </div>
</div>
```

We added another SVG, which is offset by using the `ml-6` class, which gives it margin-left.
We also add opacity-50 to make it 50% opacity.

We made a fully responsive header with Tailwind with a flexible image inside with this final code.

### See the example code in this Codepen

I challenge you to play on this Codepen and inspect the classes to see the stacking format.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="gOwrPgE" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Responsive header in Tailwind CSS">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/gOwrPgE">
  Responsive header in Tailwind CSS</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
