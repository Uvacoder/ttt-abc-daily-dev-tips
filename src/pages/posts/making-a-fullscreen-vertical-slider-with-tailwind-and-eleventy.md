---
layout: ../../layouts/Post.astro
title: 'Build a vertical slider with Tailwind and Eleventy'
metaTitle: 'Tailwind Vertical slider with scroll snap Tutorial [2022]'
metaDesc: 'Learn how to build a vertical slider with Tailwind. We will implement CSS scroll-snap in and build a fullscreen carousel.'
image: /images/31-01-2021.jpg
date: 2021-01-31T03:00:00.000Z
tags:
  - tailwind
---

In this tutorial we will learn **how to build a scrollable vertical slider using Tailwind CSS** and Eleventy. It will also come with a nice CSS _scroll-snap_ effect.

This example will become the homepage for my lifestyle blog. The end result of todays article will look like this:

![Tailwind full-page homepage scroll sections](https://cdn.hashnode.com/res/hashnode/image/upload/v1611646193043/RIOddbcKp.gif)

## Build a vertical slider in Tailwind CSS

We will start by coding our main container and the full screen sections inside.

We have a total of five slider sections for the homepage:

```html
<main>
  <section class="w-full h-screen bg-red-200">Section 1</section>
  <section class="w-full h-screen bg-blue-200">Section 2</section>
  <section class="w-full h-screen bg-green-200">Section 3</section>
  <section class="w-full h-screen bg-indigo-200">Section 4</section>
  <section class="w-full h-screen bg-yellow-200">Section 5</section>
</main>
```

This code gives us the following result:

![Tailwind full screen slider](https://cdn.hashnode.com/res/hashnode/image/upload/v1611641079716/6ObvYevmM.gif)

As you can see, each vertical slider section is the exact width/height of our viewport.
Even if we resize it, the slider will stay fullscreen.

But we can only scroll to each section. How can we make the sections _snap_ during scrolling?

## Tailwind Slider with Scroll-snap

There is a very cool CSS property called **scroll-snap**. It can help us create this "scroll-snapping" behaviour on the slider without any custom JavaScript.

However, Tailwind CSS is missing the scroll-snap feature. So let's start by extending the tailwind utilities.

Open up the `global.css` file and add the following code:

```css
@layer utilities {
  .snap {
    scroll-snap-type: var(--scroll-snap-direction) var(--scroll-snap-constraint);
  }
  .snap-y {
    --scroll-snap-direction: y;
  }
  .snap-mandatory {
    --scroll-snap-constraint: mandatory;
  }
  .snap-start {
    scroll-snap-align: start;
  }
}
```

This will extend Tailwind and add the missing CSS classes we need for scroll-snap.

> Note: I only added the actual classes we need, not all the scroll-snap types.

Now let's add these classes to our HTML elements, starting with the `<main>` element.

```html
<main class="max-h-screen overflow-y-scroll snap snap-y snap-mandatory"></main>
```

First, we'll make sure the element has a max-height of the screen and the overflow vertical is set to scroll.
Then we add our recently created snap classes which will render to the following:

```css
scroll-snap-type: y mandatory;
```

Perfect, now we just need to tell our slider sections where they have to snap to.

```html
<section class="w-full h-screen bg-red-200 snap-start"></section>
```

You see, we added the `snap-start` class to each section, and this will now render to behave as you can see in the GIF below.

![Tailwind slider with scroll snapping](https://cdn.hashnode.com/res/hashnode/image/upload/v1611642046686/VhpdCo0Ez.gif)

Pretty cool right!

## Vertical slider final styling

Each of our slides will have it's own unique styling, the first section is a full-screen background image with the logo centered in the middle of it.

I've placed the images directly in the `src/images` folder.

First of all we need to add a custom **background image** in our `tailwind.config.js` file. It will allow us to easily use the background image as a class.

```js
module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      // Other extends
      backgroundImage: {
        'home-1': "url('images/home-intro.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

Now we can use this background using the following class.

```html
class="bg-home-1"
```

The HTML for this section will look like this:

```html
<section
  class="flex items-center justify-center w-full h-screen  bg-center bg-cover snap-start bg-home-1"
>
  <img alt="The todoist logo" title="The Todoist Logo" src="images/logo.png" />
</section>
```

This will give us the following result:

![Homepage section one](https://cdn.hashnode.com/res/hashnode/image/upload/v1611642940879/fem_DYqqT.png)

Section two is the about page section which showcases an image with some offset text on top of it.

We will use [Tailwind CSS Grid](https://daily-dev-tips.com/posts/creating-a-newsletter-layout-with-tailwind/) as we did in the Newsletter layout.

```html
<section class="flex items-center justify-center w-full h-screen snap-start">
  <div class="grid grid-flow-row grid-cols-12 grid-rows-1 gap-8">
    <div class="z-10 flex flex-col justify-center col-span-3 col-start-2 row-start-1">
      <h1 class="font-black text-purple">About The Todoist</h1>
      <h3 class="text-pink">Coffee, Adrenaline, and a bunch off craziness</h3>
    </div>
    <div class="flex flex-col items-end col-span-6 col-start-3 row-start-1">
      <img src="https://thetodoist.com/static/media/home_about.104e3ad7.jpg" />
      <a href="/about" class="mt-2 text-xs underline">Find out more &rarr;</a>
    </div>
  </div>
</section>
```

In this section I use the same start-row and start-col hack to overlap the elements.

I then use [CSS Flex](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/) to align the elements in the right position.

The result for this section:

![Section two styling](https://cdn.hashnode.com/res/hashnode/image/upload/v1611643996904/efw-MmxxG.png)

> As you can see it's an offset element, this is how it was designed, you could center it adjusting the col-start position.

As for the third section it's a big section that showcases the featured post.

For this example we will hardcode the article, in a later stage we will connect it to our data store.

```html
<section
  class="flex items-center justify-center w-full h-screen text-white bg-purple snap-start"
>
  <div class="grid grid-flow-row grid-cols-12 grid-rows-1 gap-8">
    <div class="col-span-5 col-start-2">
      <img src="https://thetodoist.com/img/blog/forgotten-punctuation/overview.jpg" />
    </div>
    <div class="flex flex-col justify-center col-span-3 col-start-8">
      <h2 class="font-black">Lorem ipsum dolor sit amet</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing, sed diam, sed diam.</p>
      <a href="#" class="mt-2 text-xs underline">Read more &rarr;</a>
    </div>
  </div>
</section>
```

This is again a section where I used mainly CSS Grid to create the elements next to each other, and flex to align them.

The result for this section:

![Tailwind CSS Section styling](https://cdn.hashnode.com/res/hashnode/image/upload/v1611644836640/hsl2UtoVM.png)

The fourth section is very similar to the previous one, it showcases a blog item, however focussing on the background image like in section one.

Since this data will be populated from the actual blog item we need to use a inlined background-image.

We can then use a div that has a narrow width for the text area.

The whole HTML for this section will look like this:

```html
<section
  class="flex items-center w-full h-screen bg-indigo-200 bg-center bg-cover text-purple snap-start"
  style="background-image: url(https://thetodoist.com/img/blog/beach-workouts/running.jpg)"
>
  <div class="w-1/12">&nbsp;</div>
  <div class="w-3/12">
    <div class="relative">
      <span class="absolute flex w-full h-0.5 -ml-4 bg-purple -left-full top-1/2"></span
      >Health
    </div>
    <a href="#">
      <h2>Lorem ipsum dolor sit amet</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing, sed diam, sed diam.</p>
    </a>
    <a href="#" class="mt-2 text-xs underline">Read more &rarr;</a>
  </div>
</section>
```

And this will give us the following end result:

![Full screen slider section in Tailwind CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1611645479919/Menj524h3.png)

The last slide is the contact section.
I will change the design a little bit, so we don't have the form anymore.

The tricky part here is enabling the background pattern for this section.

Let's first add this pattern to our tailwind.config file.

```js
backgroundImage: {
	"home-1": "url('images/home-intro.jpg')",
	"pattern-striped": "url('images/pattern-striped.png')",
},
```

Now we can use this on our slide:

```html
<section class="w-full h-screen bg-pattern-striped snap-start"></section>
```

The rest of the block uses grid and flex to align the items again.

```html
<section class="flex items-center justify-center w-full h-screen bg-pattern-striped snap-start">
  <div class="grid grid-flow-row grid-cols-12 grid-rows-1 gap-8">
    <div class="col-span-10 col-start-2">
    <h2 class="font-black">Coffee? Sure let's do it.</h2>
    <strong class="flex w-1/2">Always up for meeting new people, learning stuff, trying new things, so please give me a shout out if you want to be in touch.</strong>

    <div class="flex mt-8">
      <div class="w-1/2">
        <h4>Contact me</h4>
        <p>Send me an email on <a class="underline" href="mailto:info@thetodoist.com">info@thetodoist.com</a></p>
      </div>
      <div class="w-1/2">
        <h4>Currently in</h4>
        <p>Cape Town, South Africa</p>
      </div>
    </div>
  </div>
</section>
```

This will render in the following result.

![slide with contact section](https://cdn.hashnode.com/res/hashnode/image/upload/v1611646060342/8hQgMx-d2.png)

There we go, we now have our full vertical scrollable homepage slider made in Tailwind and Eleventy.

You can find today's code example on [GitHub](https://github.com/rebelchris/eleventy-todoist/tree/part9).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
