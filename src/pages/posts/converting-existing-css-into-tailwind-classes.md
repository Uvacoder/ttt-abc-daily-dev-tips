---
layout: ../../layouts/Post.astro
title: 'Convert existing CSS into Tailwind classes'
metaTitle: 'Convert CSS into Tailwind Tutorial [2022]'
metaDesc: 'In this tutorial we are going learn how to convert our existing CSS styling into Tailwind CSS classes.'
image: /images/22-01-2021.jpg
date: 2021-01-22T03:00:00.000Z
tags:
  - css
  - tailwind
---

In part one, we started by [styling the sidebar and menu](https://cdn.hashnode.com/res/hashnode/image/upload/v1610436386714/cDn0_jxPw.gif) for the lifestyle blog.

I started with custom SCSS classes, which resulted in the following result:

[CSS Styled expanding menu](https://cdn.hashnode.com/res/hashnode/image/upload/v1610436386714/cDn0_jxPw.gif)

Yesterday we [added Tailwind to our Eleventy project](https://daily-dev-tips.com/posts/adding-tailwind-to-eleventy/), so let's see how to convert our CSS to Tailwind, so the frontend is styled once again.

Our initial styling looks like this at the moment:

![Unstyled tailwind markup](https://cdn.hashnode.com/res/hashnode/image/upload/v1610692719212/nfB8O6x_f.png)

Oh no! This looks horrible. All our hard work is gone, but no worries, we will solve this!

## Changing our CSS to Tailwind

[Tailwind CSS](https://daily-dev-tips.com/posts/my-first-experiences-with-tailwind-css/) is a utility-first CSS framework. It uses utility classes to achieve styling.

Luckily for us, we know exactly what we are looking for. We can use the [Tailwind Docs](https://tailwindcss.com/docs) to search what the corresponding class is.

Let me document how I go about changing the classes.

Let's take the `<main>` element, for instance. This had the following CSS:

```css
main {
  position: relative;
  min-height: 100vh;
  padding-left: (calc(2 * var(--side-width)));
}
```

Let's first find the `position: relative`. Type it into the tailwind search bar.

![Tailwind search bar](https://cdn.hashnode.com/res/hashnode/image/upload/v1610692939849/2k9SMCKpc.png)

We can then click on the first result and see that we need to use the `relative` class.

![Tailwind Relative class](https://cdn.hashnode.com/res/hashnode/image/upload/v1610692992331/m8vg1jU0M.png)

Let's add the relative class to the markup:

```html
<main class="relative"></main>
```

One down, two to go.

The second one is the **min-height**. We can use the same process and will find we need the `min-h-screen` class:

![Min-height tailwind classes](https://cdn.hashnode.com/res/hashnode/image/upload/v1610693608463/jOfCwy0k0.png)

Nice, we are getting somewhere. The last CSS property to convert is a bit of a difficult one since we used a fixed position of `58px` for each element.
Tailwind doesn't really work with fixed positions, although we could add them to our tailwind config.

However, we can take the closest tailwind size, which is 14 (3.5rem). The size converts to: `56px`.

Getting back to our padding-left, we saw that we needed double that. So we use `pl-28`, which converts to `padding-left: 7rem`.

Our `<main>` element's CSS results into these Tailwind classes:

```html
<main class="relative min-h-screen pl-28"></main>
```

### Converting the Styling of the aside element

Our `<aside>` element had the following `CSS`:

```css
aside {
  width: var(--side-width);
  background: var(--purple);
  min-height: 100vh;
  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 2;
}
```

We will get back to the color in a second, but we can achieve all the other classes with tailwind classes.

The CSS looks like this with Tailwind:

```html
<aside
  class="fixed top-0 left-0 z-10 flex items-end justify-center min-h-screen w-14"
></aside>
```

This will result in the following:

![Tailwind styling](https://cdn.hashnode.com/res/hashnode/image/upload/v1610693776331/VaavIwSe9.png)

Still a bit of a mess. Let's first move on to styling those social icons before adding the colors.

For the `<ul>`, we don't need any classes.

The `<li>` items had the following `CSS`:

```css
li {
  width: var(--side-width);
  height: var(--side-width);
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--white);
}
```

These styles convert into the following Tailwind classes:

```html
<li class="flex items-center justify-center border-t border-white w-14 h-14"></li>
```

Then the `<a>` elements inside had the following CSS:

```css
a {
  width: 1.75rem;
  height: 1.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--white);
  border-radius: 50%;
  color: var(--white);
}
```

We can convert that into the these Tailwind classes:

```html
<a
  class="flex items-center justify-center text-white border border-white w-7 h-7 rounded-full"
></a>
```

The last element we need is the SVG:

```css
svg {
  color: inherit;
  width: 0.625em;
}
```

For the SVG, we can use these Tailwind classes:

```html
<svg class="w-2.5"></svg>
```

Now, we won't see much since we need our purple background-color.

## Adding custom colors to Tailwind

Unfortionally Tailwind doesn't come with this exact color, but it does come with the option to add our own colors!

To do this, we have to add the custom color to the `tailwind.config.js` file.

We can extend our custom color in the `theme` section under `colors` like so:

```js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: '#2d334d',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

In our case, the purple only has one option.

Then we can go back to our `aside` element and add the `bg-purple` class to it.

This will now result in the following:

![Styled tailwind classes](https://cdn.hashnode.com/res/hashnode/image/upload/v1610694831056/ASqr-tv9l.png)

Wow, that is already starting to look like what we had.

## Changing the expanding menu CSS to Tailwind CSS

Now let's see how we can style the menu to expand with Tailwind.

I'm going to be quickly going over the basic classes and spend more time explaining the checked state.

`<nav>` element CSS styling:

```css
nav {
  width: var(--side-width);
  background: var(--light-blue);
  min-height: 100vh;
  position: fixed;
  left: var(--side-width);
}
```

CSS Converted to Tailwind classes:

```html
<nav class="fixed top-0 min-h-screen left-14 bg-light-blue w-14"></nav>
```

> Note: we also added our light-blue color which looks like this:

```js
colors: {
	'purple': "#2d334d",
	'light-blue': "#d5d8e0"
},
```

The menu CSS holds the following styling:

```css
.menu {
  width: 170px;
  height: 100vh;
  background: inherit;
  position: absolute;
  top: 0;
  left: -170px;
  z-index: 1;
  transition: all 0.5s ease;
  overflow: hidden;
}
```

Which can be turned into Tailwind like this:

```html
<div
  class="absolute top-0 z-0 min-h-screen overflow-hidden transition-all duration-500 ease-in-out menu w-44 -left-44 bg-light-blue"
></div>
```

The checkbox can just get the `hidden` class:

```html
<input type="checkbox" id="toggle" class="hidden menu--checkbox" />
```

As for the label, it looked like this in CSS:

```css
label {
  width: var(--side-width);
  height: var(--side-width);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 3;
}
```

Convert to Tailwind, the CSS looks like:

```html
<label
  for="toggle"
  class="absolute z-30 flex items-center justify-center w-14 h-14"
></label>
```

I don't think the `~` selector is available in Tailwind. So we would have to write a little bit of custom CSS just for this selector:

```css
main nav .menu--checkbox:checked ~ .menu {
  @apply left-0;
}
```

This will apply the `left-0` class to our menu once the checkbox is checked.

Let's see if it works:

![Tailwind CSS Menu](https://cdn.hashnode.com/res/hashnode/image/upload/v1610696220690/0uHj-zWFl.gif)

Nice! All we have to do is do the actual menu styling.

The CSS before for the logo:

```css
.menu {
  &--logo {
    margin-top: 6rem;
    display: flex;
    justify-content: center;
    img {
      width: 85px;
    }
  }
}
```

Same CSS converted to Tailwind:

```html
<a href="/" class="flex justify-center mt-24">
  <img class="w-20" src="https://thetodoist.com/static/media/logo.778cffe4.png" />
</a>
```

Then the list had the following CSS:

```css
ul {
  margin-top: 2.5rem;
  li {
    padding: 0 25px 25px;
    color: var(--purple);
    a {
      color: inherit;
      text-decoration: none;
    }
  }
}
```

That we can convert into Tailwind as such:

```html
<ul class="mt-10">
  <li class="px-6 pb-6"><a class="no-underline text-purple" href="#">Home</a></li>
</ul>
```

Now we should have the end result we had before, but all in Tailwind classes!

![Complete menu in Tailwind classes](https://cdn.hashnode.com/res/hashnode/image/upload/v1610696755364/byr_MGSCg.gif)

You can find these changes on [GitHub](https://github.com/rebelchris/eleventy-todoist/tree/part4).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
