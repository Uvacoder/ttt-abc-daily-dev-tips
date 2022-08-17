---
layout: ../../layouts/Post.astro
title: 'Creating a newsletter layout with Tailwind'
metaTitle: 'Creating a newsletter layout with Tailwind'
metaDesc: 'Creating a iconic newsletter layout with Tailwind flex and grid'
image: /images/25-01-2021.jpg
date: 2021-01-25T03:00:00.000Z
tags:
  - css
  - tailwind
---

We have quite the extended layout for the Lifestyle blog as our blog overview.

![Lifestyle blog newsletter layout design](https://cdn.hashnode.com/res/hashnode/image/upload/v1611121748271/9Hiz5aazf.png)

As you can see, it's quite the "newsletter" style layout, with overlapping elements, offset elements, and non-equal recurring blocks.

In this article, I will be going through two ways of building this using Tailwind CSS

- [Tailwind newsletter layout with flex](#heading-tailwind-newsletter-layout-with-flex)
- [Tailwind newsletter layout with grid](#heading-tailwind-newsletter-layout-with-grid)

## Analysing the design

Before we start building, let's begin by analyzing the design.
This is an excellent process to understand how we can best make it and what elements we will need.

Having a quick look, we can see some columns that we can use.

![Layout grid](https://cdn.hashnode.com/res/hashnode/image/upload/v1611122350432/wO99d-E4O.webp)

> Note the design is not pixel perfect, so I will adjust it so it will fix an equal column grid

What do you see in this outline?

- Red area's 1 column spacer
- Blue columns 6 column image
- Green 5 column that gets sub-divided

Then we are just missing the titles and Checked and Todo category element, which we'll introduce using absolute positions.

## Tailwind newsletter layout with flex

I'm far more skilled in using flex than I am using a grid, so my first attend to create this in flex.

I've divided it into two sections, so let's introduce the first section, where the title is on the left-hand side.

> Note: Tailwind is built mobile-first, so we'll keep that in mind when creating the blocks.

Let's start by wrapping everything inside a flex div.

```html
<div class="flex flex-col gap-4 mb-24 md:flex-row">
  <!-- content -->
</div>
```

This will be the container for the first section. We tell it to flex column on mobile but switch to row on desktop.
We also add a gap between the columns and a margin bottom for the next element.

Now we will need the two sections.
Left: Image + Titel (total of 7 columns)
Right: Image + Summary (total of 6 columns)

```html
<div class="flex flex-col gap-4 mb-24 md:flex-row">
  <div class="relative w-full md:w-7/12">
    <!-- LEFT -->
  </div>
  <div class="w-full md:w-5/12">
    <!-- RIGHT -->
  </div>
</div>
```

We make both sections 100% width for mobile, but we span them over the columns we want for desktop.

The left column is also relative since we will be placing the title and category element absolute inside it.

Let's add the left elements we will need, and I'll walk you through the styling.

```html
<div class="flex flex-col gap-4 mb-24 md:flex-row">
  <div class="relative w-full md:w-7/12">
    <div class="absolute mt-4">
      <span
        class="absolute flex w-full h-0.5 -mr-4 bg-purple -right-full top-1/2"
      ></span>
      Health
    </div>
    <div
      class="absolute flex items-center w-1/2 min-h-full text-3xl font-black text-purple"
    >
      Lorem Ipsum Dolar
    </div>
    <div class="min-h-full ml-20">
      <img
        class="object-cover h-full"
        src="https://via.placeholder.com/800x600"
      />
    </div>
  </div>
  <div class="w-full md:w-5/12">
    <!-- RIGHT -->
  </div>
</div>
```

Quite a big chunk, but we start by adding the category called `Health`. You will see its absolute position with a margin-top. This will offset it from the top a little bit.
Inside that, you find the `<span>` element used to create the purple line to the right.

The next element is the actual text. We also position this absolute but use flex to span it over the full height and use `items-center` to get the text in the middle.

Then the last element is the image. We make this smaller by adding the `ml-20` (margin-left).

By now, we should have the following result:

![Tailwind newsletter layout - left side](https://cdn.hashnode.com/res/hashnode/image/upload/v1611123693961/XPmeNLLLn.png)

On to the right side.

As seen in the design, the right side spans an image on top and a descriptive text below that. This text is positioned at the bottom of the element and is only half the width.

```html
<div class="flex flex-col gap-4 mb-24 md:flex-row">
  <div class="relative w-full md:w-7/12">
    <div class="absolute mt-4">
      <span
        class="absolute flex w-full h-0.5 -mr-4 bg-purple -right-full top-1/2"
      ></span
      >Health
    </div>
    <div
      class="absolute flex items-center w-1/2 min-h-full text-3xl font-black text-purple"
    >
      Lorem Ipsum Dolar
    </div>
    <div class="min-h-full ml-20">
      <img
        class="object-cover h-full"
        src="https://via.placeholder.com/800x600"
      />
    </div>
  </div>
  <div class="w-full md:w-5/12">
    <img
      class="object-cover w-full h-1/2"
      src="https://via.placeholder.com/800x600"
    />
    <p
      class="flex items-end w-full mt-4 font-bold md:w-1/2 h-1/2 text-purple md:mt-0"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus
      iaculis ante, et iaculis ipsum accumsan sit amet.
    </p>
  </div>
</div>
```

The image is directly placed inside the right column, using a full width with object-cover to make it span the parent.

Then the text uses flex with the `items-end` class to get the reader to the bottom.
You will also see the `md:w-1/2` class, making it only 50% on desktop screens.

That is it. We should now have the following responsive layout element for the first one:

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/tailwind-responsive_zpzru8.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/tailwind-responsive_l7p0km.mp4" type="video/mp4" />
</video>

The next element is very similar. The only different thing is the position of the title is reversed, and the left side is a column layout.

```html
<div class="flex flex-col-reverse gap-4 md:flex-row">
  <div class="flex flex-col w-full gap-4 md:w-5/12 md:flex-row">
    <div class="w-full md:w-1/2">
      <img
        class="object-cover w-full h-full"
        src="https://via.placeholder.com/800x600"
      />
    </div>
    <p class="w-full font-bold md:w-1/2 text-purple">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus
      iaculis ante, et iaculis ipsum accumsan sit amet.
    </p>
  </div>
  <div class="relative w-full md:w-7/12">
    <div class="absolute right-0 mt-4">
      <span
        class="absolute flex w-full h-0.5 -ml-4 bg-purple -left-full top-1/2"
      ></span
      >Health
    </div>
    <div
      class="absolute right-0 flex items-center w-1/2 min-h-full text-3xl font-black text-purple"
    >
      Lorem Ipsum Dolar
    </div>
    <div class="min-h-full mr-20">
      <img
        class="object-cover h-full"
        src="https://via.placeholder.com/800x600"
      />
    </div>
  </div>
</div>
```

A super important element here is the top-level `flex-col-reverse`. This makes sure that the bigger right side is on top of mobile devices!

A super nighty flex function!

You can find this complete example on the following Codepen.

<p class="codepen" data-height="450" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="yLawjgQ" style="height: 450px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="yLawjgQ">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/yLawjgQ">
  yLawjgQ</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Tailwind newsletter layout with grid

We made it, it was working, and that would have been it. However, I had a feeling this would be a better fit for [CSS Grid](https://daily-dev-tips.com/posts/css-grid-introduction/).

So I put out a tweet asking for some tips on doing this with Tailwind Grid.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Does anyone know if this layout is possible with Tailwind Grid? (without custom config)<br /><br />I&#39;ve got it with Flex, but have a feeling grid might be the better solution.<a href="https://t.co/T89GyQ4syV">https://t.co/T89GyQ4syV</a> <a href="https://t.co/3UMr2r0MOP">pic.twitter.com/3UMr2r0MOP</a></p>&mdash; Chris Bongers 🤓💻⚡️ (@DailyDevTips1) <a href="https://twitter.com/DailyDevTips1/status/1351192038595842051?ref_src=twsrc%5Etfw">January 18, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

I started converting what I had into a grid layout with the feedback, and it went surprisingly well.

It was more difficult for me to make this in a CSS grid, so bear with me as there might be a more efficient way of doing this grid layout.

Let's start with the first block again.

```html
<div class="grid grid-flow-row grid-cols-12 grid-rows-2 gap-4">
  <!-- CONTENT -->
</div>
```

We create a 12 column grid with two rows and add a gap as we did in the flex layout.

I'm using a column/row-start combination method to overflow the elements.

As you might see, I will add starting positions for each element, which allows them to sit on top of each other.

Let's start with the first column, which is the title column.

```html
<div class="grid grid-flow-row grid-cols-12 grid-rows-2 gap-4">
  <div
    class="relative z-50 flex items-center col-span-12 col-start-1 row-span-2 row-start-1 md:col-span-4 md:col-start-1"
  >
    <div class="absolute top-0 mt-4">
      <span
        class="absolute flex w-full h-0.5 -mr-4 bg-purple -right-full top-1/2"
      ></span
      >Health
    </div>
    <h1 class="text-3xl font-black text-purple">Lorem Ipsum Dolar</h1>
  </div>
</div>
```

We make this a span 4, and on mobile, we turn it into a span-12.
Inside we have the category and title again, using flex to align them accordingly.

The best way to show how this works is using the [`grid` explorer in Chrome/Firefox](https://daily-dev-tips.com/posts/chrome-devtools-grid-explorer/)

![Testing the grid in grid explorer Chrome](https://cdn.hashnode.com/res/hashnode/image/upload/v1611125664819/-MkzGO2Ec.png)

You can see the 12 column grid, with the left element highlighted. You can see it spans over four columns.

The next element is the big image on the left, spanning 6 columns, starting from the second.

```html
<div class="grid grid-flow-row grid-cols-12 grid-rows-2 gap-4">
  <div
    class="relative z-50 flex items-center col-span-12 col-start-1 row-span-2 row-start-1 md:col-span-4 md:col-start-1"
  >
    <div class="absolute top-0 mt-4">
      <span
        class="absolute flex w-full h-0.5 -mr-4 bg-purple -right-full top-1/2"
      ></span
      >Health
    </div>
    <h1 class="text-3xl font-black text-purple">Lorem Ipsum Dolar</h1>
  </div>
  <div
    class="col-span-11 col-start-2 row-span-2 row-start-1 md:col-span-6 md:col-start-2"
  >
    <img
      class="object-cover h-full"
      src="https://via.placeholder.com/800x600"
    />
  </div>
</div>
```

Here, we add the `col-span-11` for mobile and `md:col-span-6` for desktop. We also offset it to start on column two.

The two columns on the right are both the same, but they only span 1 row and 5 columns.

```html
<div class="grid grid-flow-row grid-cols-12 grid-rows-2 gap-4">
  <div
    class="relative z-50 flex items-center col-span-12 col-start-1 row-span-2 row-start-1 md:col-span-4 md:col-start-1"
  >
    <div class="absolute top-0 mt-4">
      <span
        class="absolute flex w-full h-0.5 -mr-4 bg-purple -right-full top-1/2"
      ></span
      >Health
    </div>
    <h1 class="text-3xl font-black text-purple">Lorem Ipsum Dolar</h1>
  </div>
  <div
    class="col-span-11 col-start-2 row-span-2 row-start-1 md:col-span-6 md:col-start-2"
  >
    <img
      class="object-cover h-full"
      src="https://via.placeholder.com/800x600"
    />
  </div>
  <div class="col-span-12 row-span-1 md:col-span-5">
    <img
      class="object-cover w-full h-full"
      src="https://via.placeholder.com/800x600"
    />
  </div>
  <div class="flex items-end col-span-12 row-span-1 md:col-span-5">
    <p class="w-full font-bold md:w-1/2 text-purple">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus
      iaculis ante, et iaculis ipsum accumsan sit amet.
    </p>
  </div>
</div>
```

This will give us the following result:

![Tailwind responsive grid newsletter](https://cdn.hashnode.com/res/hashnode/image/upload/v1611126023966/RzJmrjHkB.gif)

The bottom element is a copy but spans the two left columns on two rows.

Also, on mobile, it switches their position to rows 3 and 4.

```html
<div class="grid grid-flow-row grid-cols-12 grid-rows-2 gap-4 mt-24">
  <div
    class="col-span-12 col-start-1 row-span-1 row-start-3 md:row-span-2 md:col-span-3 md:row-start-1"
  >
    <img
      class="object-cover w-full h-full"
      src="https://via.placeholder.com/800x600"
    />
  </div>
  <div
    class="col-span-12 col-start-1 row-span-1 row-start-4 md:row-span-2 md:col-span-3 md:row-start-1 md:col-start-4"
  >
    <p class="font-bold text-purple">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus
      iaculis ante, et iaculis ipsum accumsan sit amet.
    </p>
  </div>
  <div
    class="col-span-11 col-start-1 row-span-2 row-start-1 md:col-span-5 md:col-start-7"
  >
    <img
      class="object-cover h-full"
      src="https://via.placeholder.com/800x600"
    />
  </div>
  <div
    class="relative flex items-center justify-end col-span-3 col-start-10 row-span-2 row-start-1"
  >
    <div class="absolute top-0 right-0 mt-4">
      <span
        class="absolute flex w-full h-0.5 -ml-4 bg-purple -left-full top-1/2"
      ></span
      >Health
    </div>
    <h1 class="text-3xl font-black text-purple">Lorem Ipsum Dolar</h1>
  </div>
</div>
```

This gives us the following result you can try out in Codepen.

<p class="codepen" data-height="370" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="mdroLGB" style="height: 370px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Tailwind newsletter layout with grid">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/mdroLGB">
  Tailwind newsletter layout with grid</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

I would love to hear what you guys think of these approaches and what you would pick.

The flex one is just a little bit easier to set up, but it might be because I've used it more.

The grid looks powerful, especially if we named the grid elements.

You can find today's code on [GitHub](https://github.com/rebelchris/eleventy-todoist/tree/part5).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
