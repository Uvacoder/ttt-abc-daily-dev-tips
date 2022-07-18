---
layout: ../../layouts/Post.astro
title: 'HTML Picture Element Responsive Images'
metaTitle: 'HTML Picture Element Responsive Images'
metaDesc: 'Using the HTML Picture Element for Responsive Images'
image: /images/19-08-2020.jpg
date: 2020-08-19T03:00:00.000Z
tags:
  - html
---

Today we'll be looking at the `HTML Picture element`. It can be used to have native responsive image support.

So how it works is we wrap our normal `img` tag inside a `picture` element and add `srcset` images.

This will then be defined on media queries which image it shows.

## HTML Picture Element

Ok, let's get started!

For this example, we will be using extreme cases. Usually, you would use a modified version of your original image but in a smaller or different orientation.

```html
<picture>
  <source
    media="(min-width: 650px)"
    srcset="
      https://images.unsplash.com/photo-1589965716319-4a041b58fa8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80
    "
  />
  <source
    media="(min-width: 465px)"
    srcset="
      https://images.unsplash.com/photo-1534235261404-7625cd79bdb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80
    "
  />
  <img
    src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=939&q=80"
    alt="A amazing corgi dog"
  />
</picture>
```

Now on, we should see the following:

- Screen above 650px - Corgi on a mountain
- Screen between 465 and 650px - Corgi on the stairs
- Screen smaller than 465 - Puppy Corgi!

Now isn't that amazing!

> To make this function even better, add [loading="lazy"](https://daily-dev-tips.com/posts/image-lazy-loading/).

Feel free to view these Corgis on Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="JjXKzWb" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="HTML Picture Element Responsive Images">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/JjXKzWb">
  HTML Picture Element Responsive Images</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

A super cool feature, but not supported by IE and Opera mini as expected.
However! They will fall back to the default image! So no real objection to using it!

![Picture Element support](https://caniuse.bitsofco.de/image/picture.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
