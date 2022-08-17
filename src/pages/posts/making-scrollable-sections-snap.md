---
layout: ../../layouts/Post.astro
title: 'Making scrollable sections snap'
metaTitle: 'Making scrollable sections snap'
metaDesc: 'How to make scrollable sections snap to the top with CSS'
image: /images/21-03-2021.jpg
date: 2021-03-21T03:00:00.000Z
tags:
  - css
---

I created this cool [section scroll in Tailwind](https://daily-dev-tips.com/posts/tailwind-css-fixed-and-scrollable-section/).
However, I would almost expect the sections to snap while I'm close to them as a user.

So today, I'll show you how to make the sections snap!

You can try it out on the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="VwmNbNZ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Making scrollable sections snap">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/VwmNbNZ">
  Making scrollable sections snap</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Making the sections snap with CSS

Let's use the code as we had previously. However, we will need to change a couple of things.

First of all, our current wrapping container for the sections has an infinite height, meaning it will become as big as the children are.

For the scroll snap to work, it must be as big as the screen.

Change the following:

```html
<div class="w-full ml-auto md:w-5/12"></div>
```

Into:

```html
<div class="w-full h-screen ml-auto overflow-y-auto md:w-5/12"></div>
```

We add the h-screen class, which will make this section exactly our viewport height.
We also add overflow on the y-axis to auto.

That's already half the work. Now let's add the scroll-snap magic.

> Old: Unfortunately, Tailwind does not come with these classes. For the ease of this tutorial, I'll add two custom classes.

Tailwind V3 now comes with scroll snap classes, so let's add the scroll snap behavior we want on the parent element.

```html
<div
  class="w-full h-screen ml-auto overflow-y-auto md:w-5/12 snap-mandatory snap-y"
></div>
```

We used `snap-mandatory` to define how the snapping should behave and the axis on which it acts, which is `snap-y` for our demo.

Then we need to add a class to each section to define how it snaps to the parent.
In our case, we want it to snap to the top.

```html
<div
  class="flex flex-col items-center justify-center h-screen p-10 bg-red-200 snap-start"
>
  <h2 class="mb-5 text-4xl">Meet Benny</h2>
  <p class="mb-5">I was born 20 May 2020</p>
</div>
```

This tells the scroll-snap where to snap to. In most cases, you'd like the `start`. It will snap the element to the top of the scroll-snap container.

However, you can also choose between: `end`, `center`, or `none`.

And that's as simple as it gets.

## Browser support

Surprisingly enough, scroll snap has excellent support and can be safely used!

![CSS Scroll-snap support](https://caniuse.bitsofco.de/static/v1/mdn-css__properties__scroll-snap-type-1615876765382.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
