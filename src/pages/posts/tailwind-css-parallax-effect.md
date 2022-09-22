---
layout: ../../layouts/Post.astro
title: 'Tailwind CSS parallax effect'
metaTitle: 'Tailwind CSS parallax effect Tutorial [2022]'
metaDesc: 'Learn how to create a parallax effect with a background image using only Tailwind CSS. See the code example in a live Codepen.'
image: /images/18-12-2020.jpg
date: 2020-12-18T03:00:00.000Z
tags:
  - css
  - tailwind
---

Today we'll be creating a super cool parallax effect using only Tailwind CSS.

The only custom CSS we need is for a background image. The rest will be built using Tailwind classes.

I've made a full [CSS parallax effect](https://daily-dev-tips.com/posts/css-only-parallax-scrolling/) before I've you are interested in seeing how it works.

The main idea is that a background image stays at a fixed position while you scroll over it.

In this Tailwind example, we will be using it for the header and an inline section.

You can see the result in the following GIF:

![Tailwind CSS parallax effect](https://cdn.hashnode.com/res/hashnode/image/upload/v1607859453992/D9BXgFgGZ.gif)

## Tailwind CSS parallax header

We'll start by creating the header using Tailwind classes.

Let's define our `HTML` structure first.

```html
<header>
  <div>Welcome to my site!</div>
</header>
```

We'll be using the header tag with a div inside. The div will hold some text to show the parallax effect better.

Now we want to make this header full height with a background image that will cover the area. The image must also be centered.

I'll post the full class list and guide you through each class and what it's used for.

```html
<header
  class="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img"
>
  <div class="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
    Welcome to my site!
  </div>
</header>
```

The classes used for the header:

- `flex`: Adds a display flex so we can align the text block inside
- `items-center`: Aligns the text-block vertically
- `justify-center`: Aligns the text-block horizontally
- `h-screen`: This adds a 100vh height, so it's 100% of the viewport.
- `mb-12`: We add quite a big margin-bottom with this (3rem)
- `bg-fixed`: This is the magic that makes the parallax effect. The background-fixed makes sure the background stays where it's set.
- `bg-center`: This makes sure the background is centered
- `bg-cover`: Makes sure the background is covering the whole header element
- `custom-img`: Custom class to add our background image.

Then for our overlay box, we use the following:

- `p-5`: Adds equal padding on each side (1.25rem)
- `text-2xl`: Makes the text nice and big (1.5rem)
- `text-white`: Make the text white
- `bg-purple-300`: A nice cool purple color
- `bg-opacity-50`: This ensures the background has an opacity of 50%.
- `rounder-xl`: Adds the nice rounder borders

That's it! We now have our CSS parallax effect with a background image, which is always 100% of the viewport height.

## Tailwind CSS parallax section

That's all cool and well, but now you want a parallax effect for the header and between two text areas.

That is almost the same setup, except in this case, we add a `container` class to make it not 100% wide. With this, we also need to add `m-auto`, which will center it horizontally.

```html
<section
  class="container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover custom-img"
>
  <div class="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
    Parallax inline
  </div>
</section>
```

As you can see, all the other classes are the same.
The whole text block also uses the same classes as the header block.

You can find this full demo in this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="VwKPzQm" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Tailwind CSS parallax effect">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/VwKPzQm">
  Tailwind CSS parallax effect</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
