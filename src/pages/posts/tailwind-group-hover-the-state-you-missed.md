---
layout: ../../layouts/Post.astro
title: 'Tailwind group hover, the state you missed'
metaTitle: 'Tailwind group hover, the state you missed'
metaDesc: 'Making hover states in Tailwind CSS better by using group-hover'
image: /images/18-09-2021.jpg
date: 2021-09-18T03:00:00.000Z
tags:
  - css
  - tailwind
---

Hover states are an essential part of web development and can really enhance your UI.

If you worked with Tailwind, you might know the `hover` states, which are amazing, but they never included sub-selectors.

This is something the `group-hover` class can help us with!

You can see the result of what we'll be building today in the CodePen below.

 <p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="js,result" data-slug-hash="OJgpqbr" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/OJgpqbr">
  </a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Tailwind group hover effect

Let's first take a look at how this effect works.

It needs to have a `group` class on the parent element.
Then we can add hover classes to children of this group element by using the `group-hover:` class.

Let's try and make a super simple effect, where we have a div with two spans inside. On hover, each span will get its own color.

```html
<div class="group">
  <span class="group-hover:text-yellow-500 text-black">Hello</span>
  <span class="group-hover:text-red-500 text-black">World</span>
</div>
```

Try it out in the following CodePen demo:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="js,result" data-slug-hash="KKqWEod" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/KKqWEod">
  </a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Creating a hover-card with Tailwind group hover

Let's look at how we can create the card hover effect like the top demo shows.

This uses the Tailwind square div effect, as seen in the article about [Tailwind CSS responsive square divs](https://daily-dev-tips.com/posts/tailwind-css-responsive-square-divs/).

But let's sketch the high-level overview of what we'll be needing:

- Div element [Parent]
- - Child element [Background black layer]
- - Child element [Title element]

These two child elements are only visible once we hover over the parent div.

In the basic structure, it will look like this:

```html
<div
  class="relative group flex justify-center w-1/2 h-0 bg-center bg-cover border-2 border-gray-300 shadow-lg pb-1-2 rounded-xl bg-image"
>
  <div
    class="absolute bg-black w-full h-full rounded-xl bg-opacity-25 opacity-0 group-hover:opacity-100"
  ></div>

  <div
    class="absolute p-6 text-2xl tracking-widest text-white uppercase -translate-y-1/2 bg-black bg-opacity-75 opacity-0 top-1/2 rounded-xl group-hover:opacity-100"
  >
    Tadaa 🎉
  </div>
</div>
```

This will give us the desired effect and style of the elements to line up nicely.

However, at this point, we get a pretty static flicker effect. Let's change that by adding the following two classes to our child elements: `transform transition-opacity`.

These will make sure we animate the opacity transition.

You might have spotted that the black background div is an absolute positioned element, using the full width and height.
We use a center hack for the text layer since it's not the full size of the div.
This hack means we place the element 50% from the top and then offset the y-axis by -50%, ensuring the element is perfectly centered.

I hope you learned something new, as this group-hover is just a fantastic addition to Tailwind 🎉.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
