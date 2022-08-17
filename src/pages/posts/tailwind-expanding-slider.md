---
layout: ../../layouts/Post.astro
title: 'Tailwind expanding slider'
metaTitle: 'Tailwind expanding slider'
metaDesc: 'Making a expanding slider, using only TailwindCSS'
image: /images/01-04-2021.jpg
date: 2021-04-01T03:00:00.000Z
tags:
  - css
  - tailwind
---

I made this cool [expanding slider in CSS](https://daily-dev-tips.com/posts/css-only-expanding-slider/).
And I was intrigued if it was possible in Tailwind.

The short answer: Yes!

This is what it will look like:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="oNBLBxV" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Tailwind expanding slider">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/oNBLBxV">
  Tailwind expanding slider</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Tailwind expanding slider structure

We have some help by already having made this before. Let's start making the container and slider wrapper for the Tailwind version.

```html
<div class="flex items-center justify-center w-full h-full">
  <div class="flex w-5/6 h-5/6">
    <!-- Slides here -->
  </div>
</div>
```

Yes, that is it!
So far, we didn't need anything fancy, but let's move on to how a slide should look.

```html
<div
  class="relative flex-auto transition-all duration-500 ease-in-out bg-center bg-cover slide hover:flex-grow"
  style="background-image:url('img.png')"
></div>
```

There are two things to note here:

1. For the CodePen, I used an inline background-image
2. I use the slide class for the hover

These two elements should be included in the tailwind.config.js file and extend Tailwind.

This config will look like this:

```js
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        1: "url('1.jpg')",
        2: "url('2.jpg')",
        3: "url('3.jpg')",
        4: "url('4.jpg')",
        5: "url('5.jpg')",
      },
      flex: {
        5: 5,
      },
    },
  },
  variants: {},
  plugins: [],
};
```

> Note: Check out this article for [custom config in Tailwind](https://daily-dev-tips.com/posts/using-google-fonts-in-a-tailwind-project/)

With the config in place, we can convert our HTML to look like this:

```html
<div class="flex items-center justify-center w-full h-full">
  <div class="flex w-5/6 h-5/6">
    <div class="slide bg-1"></div>
    <div class="slide bg-2"></div>
    <div class="slide bg-3"></div>
    <div class="slide bg-4"></div>
    <div class="slide bg-5"></div>
  </div>
</div>
```

Way cleaner, right?

Now, all we need to do is add the custom CSS.

```css
.slide {
  @apply relative flex-auto bg-cover bg-center transition-all duration-500 ease-in-out;
}
.slide:hover {
  @apply flex-5;
}
```

And that's it!
You can find this demo on the [Tailwind playground](https://play.tailwindcss.com/lsrb2bG5RP?file=css).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
