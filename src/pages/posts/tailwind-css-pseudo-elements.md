---
layout: ../../layouts/Post.astro
title: 'Tailwind CSS Pseudo-elements'
metaTitle: 'Tailwind CSS Pseudo-elements'
metaDesc: 'Using pseudo-elements with Tailwind CSS'
image: /images/20-01-2022.jpg
date: 2022-01-20T03:00:00.000Z
tags:
  - css
  - tailwind
---

I only learned that Tailwind recently added the option to style pseudo-elements.
Since the introduction of [Tailwind JIT](https://daily-dev-tips.com/posts/why-tailwind-jit-compiler-is-amazing/) it turns out we can now also leverage pseudo-elements in Tailwind!

Let's look at how it works and what we can do with them.

## What are pseudo-elements

If you are [not aware of pseudo-elements](https://daily-dev-tips.com/posts/css-pseudo-elements/), they are similar to pseudo-classes like `:hover`, `:first`, etc.

The difference is that `pseudo-classes` are existing elements that get styled differently.
As to where `pseudo-elements` are new elements.
They can give us the superpower to add new styled elements to the DOM.

Another way to identify `pseudo-elements` is to always start with two `::` where the classes only use one `:`.

Let's look at the pseudo-elements and how we can use them in Tailwind CSS.

## Tailwind CSS first-line pseudo-element

This pseudo-element can manipulate the first line of a specific sentence.

Let's say we want to make the first line of an article blue so it pops a bit more. While we are at it, we could also transform the first line to uppercase.

```html
<p
  class="first-line:uppercase first-line:tracking-widest first-line:text-blue-500"
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
  in culpa qui officia deserunt mollit anim id est laborum.
</p>
```

This will result in the following:

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="dyVqwqz" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/dyVqwqz">
  Untitled</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Tailwind CSS first-letter pseudo-element

We can target the first letter like the `first-line` selector.
You often see this in those old-school books giving a nice effect.

I love this effect, and this is how you use it in Tailwind CSS.

```html
<p
  class="first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-teal-500"
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
  in culpa qui officia deserunt mollit anim id est laborum.
</p>
```

The result of the first-letter will look like this:

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="JjrawqN" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/JjrawqN">
  Tailwind CSS Pseudo-element first-line</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Tailwind CSS before pseudo-element

The before pseudo-element is perfect for adding that extra new element to the dom, which you can use to add nice effects to certain elements.

Let's try and create a fun background for an image.
We want the image to show, but there should be a different colored div with an angle on the background.

```html
<div
  class="relative before:block before:absolute before:-inset-1 before:-rotate-6 before:bg-teal-500"
>
  <img class="relative border-4 border-white" src="img.jpg" />
</div>
```

Which will result in the following:

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="NWaLeQV" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/NWaLeQV">
  Tailwind CSS Pseudo-element first-letter</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Tailwind CSS before pseudo-element

The after element can be used the same way as the before element.
Let's try something else for this one.

We often have forms with required fields. Let's add a red `*` for the required fields.

```html
<label class="block">
  <span
    class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700"
  >
    Email
  </span>
  <input
    type="email"
    name="email"
    class="block w-full px-3 py-2 mt-1 placeholder-gray-400 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
    placeholder="you@example.com"
  />
</label>
```

Resulting in this amazing piece:

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="mdBGvVz" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/mdBGvVz">
  Tailwind CSS Pseudo-element before</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Tailwind CSS selection pseudo-element

I'm sure you have seen this before, you select a piece of text, and the color is different.

That is done by using the `selection` pseudo-element.

It looks like this:

```html
<p class="selection:bg-teal-500 selection:text-white">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
  in culpa qui officia deserunt mollit anim id est laborum.
</p>
```

Try it out by selecting some text:

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="gOGdqrZ" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/gOGdqrZ">
  Tailwind CSS Pseudo-element after</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Conclusion

Now that we can use these selectors in Tailwind, there is almost no need for any custom CSS while using Tailwind.

I'm thrilled these are now so well supported, and I'm sure it will be a game-changer.

If you want to read more, the [official docs of Tailwind](https://tailwindcss.com/docs/hover-focus-and-other-states#pseudo-elements) are always a gem of information.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
