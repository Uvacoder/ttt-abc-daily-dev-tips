---
layout: ../../layouts/Post.astro
title: 'Tailwind grid responsive 4 column blocks'
metaTitle: 'Tailwind Grid: 4 column responsive grid layout [2022]'
metaDesc: 'Creating a responsive 4 column layout in Tailwind Grid'
image: /images/24-04-2021.jpg
date: 2021-04-24T03:00:00.000Z
tags:
  - css
  - tailwind
---

When it comes to **tailwind CSS layouts** we have basically two main options:

- Flexbox
- Grid

If you know me, I use CSS Flexbox for a lot of things. It's one of these things you start with and end up using for a lot of elements.

Today however I want to explore some CSS grid action in Tailwind and see just how easy it can be.

We'll be creating a responsive 4 column block layout for large devices. On tablet size they should stack 2-2 and on mobile, it should be 1 column layout.

The end result is as the following:

![Tailwind responsive grid](https://cdn.hashnode.com/res/hashnode/image/upload/v1618986443272/IjQSRq7cs.gif)

## Tailwind grid: 4 Column grid layout

Let's start with our basic html structure and style from there.

```html
<div>
  <div>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </div>
</div>
```

As you can see, I choose a double wrapper, the top div will be our container and the inner one will be the actual grid.

Let's add some basic styles for the containers first.

```html
<div class="container mx-auto">
  <div class="grid grid-cols-4 gap-6">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </div>
</div>
```

This will already give us quite a good column space.

![Tailwind CSS Grid basic layout](https://cdn.hashnode.com/res/hashnode/image/upload/v1618986077359/OwuEEURMW.png)

Let's quickly add some styling to our grid example too:

```html
<div class="container mx-auto">
  <div class="grid grid-cols-4 gap-6">
    <div
      class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100"
    >
      1
    </div>
    <div
      class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100"
    >
      2
    </div>
    <div
      class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100"
    >
      3
    </div>
    <div
      class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100"
    >
      4
    </div>
  </div>
</div>
```

![Tailwind styled blocks](https://cdn.hashnode.com/res/hashnode/image/upload/v1618986144693/fdfLmWpXd.png)

Pretty solid right?

However, this is not yet responsive. Luckily for us, the **Tailwind grid** is super easy to make responsive.

All we have to do to get a responsive grid, is to add the breakpoints on our grid element.

> Remember: Tailwind is mobile-first so that will be the mobile view.

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
```

You can find the full demo and tailwind grid example on this Codepen:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="MWJPdOp" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Tailwind grid responsive 4 column blocks">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/MWJPdOp">
  Tailwind grid responsive 4 column blocks</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
