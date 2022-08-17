---
layout: ../../layouts/Post.astro
title: 'CSS Box Decoration Break to the rescue'
metaTitle: 'CSS Box Decoration Break to the rescue'
metaDesc: "Let's take a look at the CSS Box Decoration Break property in Tailwind CSS"
image: /images/04-03-2022.jpg
date: 2022-03-04T03:00:00.000Z
tags:
  - css
---

When I was working on redesigning this blog, I created this slick-looking header effect.

![Inline header effect](https://cdn.hashnode.com/res/hashnode/image/upload/v1645592373897/YRW_-MZYx.png)

I'll explain how to re-create this effect in a bit, and then we'll dive into a problem that almost had me remove the effect.

## How to create the text background effect

The idea of this effect is to have a background on your text, which wraps neatly around the words.

I'll showcase the code in Tailwind, but I will also explain the essential parts.

The main setup will look like this:

```html
<h1 class="inline px-2 text-3xl font-bold text-white bg-purple-600 rounded-md">
  Your content here
</h1>
```

This will already give us the effect we saw in the image above.

The main effect is a combination of `display: inline` and the background color we set.
We use rounded corners to make it look a bit slicker.

## The problem at hand

Of course, there had to be a problem with this fantastic effect.
And it quickly showed itself on mobile devices.

![Multiline text background in Tailwind CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1645592730363/bT3J1jvTE.png)

The idea is great, but it's annoying that the text is cut off from the sides.

Well, I guess it was to be expected, right? 😩

Since everything is only one element, with one line of text, the padding is only applied at the beginning and end of that line.

At this point, I considered removing the effect or changing how it looked.

Until a superhero arrived called: Box Decoration Break!
And it does exactly what we are looking for!

This amazing feature comes in two states:

1. `slice`: Elements are seen as one big element (So what we have seen happening)
2. `clone`: Element is broken into fragments with each their copy of the styles.

The clone feature is what we are looking for, and let's see how that looks.

To add it simply add the following classname: `box-decoration-clone`. (Or `box-decoration-slice`)

This, in return, will add the following CSS classes for those not using Tailwind.

```css
.box-decoration-clone {
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}
```

![Box decoration break Clone in action](https://cdn.hashnode.com/res/hashnode/image/upload/v1645593275912/krl-a58Sx.png)

And that's it, way better!
Super happy I found this fantastic CSS property, and it made my headers look amazing.

You can see the completed code example on this CodePen.

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="PoOamry" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/PoOamry">
  Untitled</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Browser support

The support is actually not bad, it has some partial support on certain browsers, but consider what it does I'm really happy to see such a wide support:

<picture>
<source type="image/webp" srcset="https://caniuse.bitsofco.de/image/css-boxdecorationbreak.webp" />
<source type="image/png" srcset="https://caniuse.bitsofco.de/image/css-boxdecorationbreak.png" />
<img src="https://caniuse.bitsofco.de/image/css-boxdecorationbreak.jpg" alt="CSS Box Decoration Break browser support" />
</picture>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
