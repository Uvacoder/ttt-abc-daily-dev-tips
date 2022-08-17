---
layout: ../../layouts/Post.astro
title: 'Tailwind CSS fullscreen header image'
metaTitle: 'Tailwind CSS fullscreen header image'
metaDesc: 'Getting a image to span the full screen in Tailwind CSS'
image: /images/19-09-2021.jpg
date: 2021-09-19T03:00:00.000Z
tags:
  - css
  - tailwind
---

Fullscreen header images are a trendy topic in web development. I quite like the effect of having a full-screen section that shows a big image.

In this article, we'll check how to create the following two effects in Tailwind CSS.

1. Full-screen image tag
2. Full-screen background image

And the result will look like this CodePen below. (Example 1 = image tag (leaves), and the bottom one is the background image (dunes))

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="js,result" data-slug-hash="LYLLpRx" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/LYLLpRx">
  </a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## 1. Full-screen header image in Tailwind

Let's start with the image. Sometimes you want to have an actual image preferred over the background image.
This method can be tricky, but let's see what we can do to make it work.

```html
<section class="w-full h-screen">
  <img
    src="your_image.jpg"
    class="object-cover w-full h-full"
    alt="Image alt text"
  />
</section>
```

Alright, let's see what's going on here.
We created a section that will define the size of our header. In our case, it fills the entire width of the screen and the viewport height.

Then inside of that, we render the image, and what makes this work is the 100% width/height and object-cover class.

The object cover will ensure the image stretches, keeping its optimal size.

## 2. Full-screen background image in Tailwind

Then the more straightforward but less accessible way is to use a background image.
This effect will be nicer on smaller screens since the positioning is better.

For this to work in Tailwind you have to add the image in your `tailwind.config.js` file like so:

```js
module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        dunes: "url('/dunes.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

You can use this image as `bg-dunes`.

So let's see how we can make a full-screen header in Tailwind CSS.

```html
<section class="w-full h-screen bg-center bg-cover bg-dunes"></section>
```

And that's it! These are two ways to create full-screen header images in Tailwind.

I hope you enjoyed the article. If you have any questions feel free to contact me.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
