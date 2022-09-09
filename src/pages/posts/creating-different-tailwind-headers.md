---
layout: ../../layouts/Post.astro
title: 'Creating different tailwind headers'
metaTitle: 'Creating different tailwind headers'
metaDesc: 'Creating different kind of website headers with Tailwind CSS'
image: /images/02-02-2022.jpg
date: 2022-02-02T03:00:00.000Z
tags:
  - tailwind
---

I wanted to spend some time and explore different header layouts.

I'll leave the end styling up to you. These should give you a good idea of achieving different header variants using Tailwind CSS.

The ones we'll dive into:

- Simple, clean logo-only header
- Home button on the left - Title in the middle
- Left button - Text - Right button
- Logo - Title - Multiple pages
- Logo title - Action items

You should be able to make any header between these formats, but if you have a specific request, let me know!

You can try all of the headers out in this CodePen.

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="jOaNraG" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/jOaNraG">
  Creating different tailwind headers</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Simple, clean logo-only header

This is for the minimalist, a header that only shows your logo.

The basic setup for this looks like so:

```html
<header class="px-4 py-2 bg-blue-100">
  <img
    src="https://cdn.hashnode.com/res/hashnode/image/upload/v1643004937711/k3NMskkSn.png"
    width="50"
    alt="Daily Dev Tips Logo"
  />
</header>
```

We use a padding offset and a background color to show only a logo.

If you want to have to logo in the middle of your header, we can also make that work with the following code.

```html
<header class="flex justify-center px-4 py-2 bg-blue-100">
  <img
    src="https://cdn.hashnode.com/res/hashnode/image/upload/v1643004937711/k3NMskkSn.png"
    width="50"
    alt="Daily Dev Tips Logo"
  />
</header>
```

## Home button on the left, title in the middle header

Perhaps you like to have a button or logo on the left and have a title in the middle of whatever is remaining.

This used to be quite difficult to achieve before flex existed, but luckily we can now use a straightforward solution for this problem:

```html
<header class="flex items-center px-4 py-2 bg-blue-100">
  <img
    src="https://cdn.hashnode.com/res/hashnode/image/upload/v1643004937711/k3NMskkSn.png"
    width="50"
    alt="Daily Dev Tips Logo"
  />
  <strong class="mx-auto">This is my website</strong>
</header>
```

The main magic here lies in the `mx-auto` class on the text element.

This makes it possible to offset this element in the remaining space, so it's centered away from the logo.

## Three portion header

You might be interested in a very common header consisting of three portions.

The left has a logo and some text, and the right has a button.

For this header, we can leverage the fantastic `space-between` class.

```html
<header class="flex items-center justify-between px-4 py-2 bg-blue-100">
  <img
    src="https://cdn.hashnode.com/res/hashnode/image/upload/v1643004937711/k3NMskkSn.png"
    width="50"
    alt="Daily Dev Tips Logo"
  />
  <strong>This is my website</strong>
  <button
    class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
  >
    Click me
  </button>
</header>
```

Here we can see that all the spacing happens in the header component. Using the `space-between` class allows equal space between our three items.

## Three portion, but with multiple elements header

You might often see the right side has multiple buttons, not just one.

This is not a problem; we can use the same approach we just made.
But the main difference is that you must wrap the buttons in their parent.
We need this parent to make the button appear as one element, so it gets spaced out nicely.

It will look like this:

```html
<header class="flex items-center justify-between px-4 py-2 bg-blue-100">
  <img
    src="https://cdn.hashnode.com/res/hashnode/image/upload/v1643004937711/k3NMskkSn.png"
    width="50"
    alt="Daily Dev Tips Logo"
  />
  <strong>This is my website</strong>
  <nav>
    <button
      class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
    >
      Click me
    </button>
    <button
      class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
    >
      Click me
    </button>
    <button
      class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
    >
      Click me
    </button>
  </nav>
</header>
```

## Offset approach header

You want to include two items on the left: the logo, the title, and all buttons on the right.

We get to use a mix of all approaches we have seen so far and wrap elements into two main sections.

```html
<header class="flex items-center justify-between px-4 py-2 bg-blue-100">
  <div class="flex items-center">
    <img
      src="https://cdn.hashnode.com/res/hashnode/image/upload/v1643004937711/k3NMskkSn.png"
      width="50"
      alt="Daily Dev Tips Logo"
      class="mr-2"
    />
    <strong>This is my website</strong>
  </div>
  <nav>
    <button
      class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
    >
      Click me
    </button>
    <button
      class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
    >
      Click me
    </button>
    <button
      class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
    >
      Click me
    </button>
  </nav>
</header>
```

You might have spotted that we need to add another flex item to the logo's wrapping div.
This is because it would force the items to the top if we don't add them.

## Max width header

Let's say you want the header to be the entire browser width, but the content should be wrapped in a max-width container.

This can be applied to all the headers we tested above.
You can wrap a container inside the header element.

```html
<header class="px-4 py-2 bg-blue-100">
  <div class="container flex items-center justify-between mx-auto">
    <img
      src="https://cdn.hashnode.com/res/hashnode/image/upload/v1643004937711/k3NMskkSn.png"
      width="50"
      alt="Daily Dev Tips Logo"
    />
    <strong>This is my website</strong>
    <button
      class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
    >
      Click me
    </button>
  </div>
</header>
```

Don't forget to move the alignment classes from the header element to the container div element.

And there you go, different ways of creating headers using Tailwind CSS classes.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
