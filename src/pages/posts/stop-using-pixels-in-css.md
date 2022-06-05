---
layout: ../../layouts/Post.astro
title: '🛑 Stop using pixels in CSS'
metaTitle: '🛑 Stop using pixels in CSS'
metaDesc: 'Please can we all go to rem instead of pixels?'
image: /images/12-09-2020.jpg
date: 2020-09-12T03:00:00.000Z
tags:
  - css
---

I may be the worst advocate for actually doing this, but let me try and be a better person from now on.

And please, you too!

Let's all get away from pixels

But, don't take just my word for it:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">CSS tip 🦄<br />Use `rem` instead of `px`.<br />This takes into account the user&#39;s accessibility settings.<br />To convert `px` to `rem`, divide by 16.<br />For example:<br />8px = 0.5rem</p>&mdash; Ido Shamun (@idoshamun) <a href="https://twitter.com/idoshamun/status/1300690100741967877?ref_src=twsrc%5Etfw">September 1, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Why no pixels?

From back in the days, we started using pixels for web development, and for a long time this was good enough.

So what makes them so bad you ask?

- A pixel in font size is not actually a pixel on the screen
- Accessibility becomes better if we as developers don't define what the "default" font-size must be
- There are nowadays pixels densities (retina etc)

## Ok, then what?

Well, we can choose between `em` and `rem` for font-size.
`CSS3` came with `rem` which is a relative size to the root html element and is supported by 98,22% of the browsers!

So the cool part about this is people can have their default browser setting set to something else, then the defined 16px's, and we will just scale for them.

> Side note: REM is also a [cool band](https://www.youtube.com/watch?v=xwtdhWltSIg&ab_channel=remhq)!

## Converting pixels to rem

To calculate the pixels to `rem` we have to understand that the default font size for an `HTML` document is 16 pixels...

We as developers, should **never** update that. It's something the user can do.

So talking that in account it means that 1rem = 16px, and 2rem = 32px. 

To make it super easy. I made this calculator for you guys:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="rNevWqp" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="🛑 Stop using pixels in CSS">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/rNevWqp">
  🛑 Stop using pixels in CSS</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Let us please all be aware this is the future 🛸.

## Browser Support

The cursor is pretty well supported! The function has been around, some mobile browsers don't go about it, but you must see this as an "extra".

![CSS REM support](https://caniuse.bitsofco.de/image/rem.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
