---
layout: ../../layouts/Post.astro
title: 'Upgrading Tailwind v2 to v3'
metaTitle: 'Upgrading Tailwind v2 to v3'
metaDesc: 'How to migrate from Tailwind CSS v2 to Tailwind CSS v3'
image: /images/26-01-2022.jpg
date: 2022-01-26T03:00:00.000Z
tags:
  - css
  - tailwind
---

By now, you all know my [opinion on Tailwind CSS](https://daily-dev-tips.com/posts/my-honest-opinion-on-tailwind-css/). And I'm still loving it.

Recently Tailwind launched V3 of their popular CSS framework, so let's look at how we can upgrade from V2 to V3.

## What's new

A lot of things have been added to Tailwind V3. Let's take a look at some of the new stuff.

Before, the colors of Tailwind were a bit limited. Of course, you could extend, but now they support every color out of the box!

You can find the complete new [color palette here](https://tailwindcss.com/docs/customizing-colors).

They also added the scroll snap API classes, making it super easy to implement scroll snap behavior!

[Click here for a detailed article on Tailwind CSS scroll snap](https://daily-dev-tips.com/posts/making-scrollable-sections-snap/)

Native form control styling also got a massive boost, making it easier to style checkboxes, form input, and more.
We'll probably dedicate a whole article to this one day.

The [aspect-ratio](https://daily-dev-tips.com/posts/revisiting-tailwind-square-divs-with-aspect-ratio/) is now built into Tailwind, and I will go in and modify the article to reflect the new case.

We also got all kinds of new underline decorators, which is pretty cool to make fancy underlines possible.

And a bunch more features you'll defiantly need to find out by playing with it. 🥳

## Upgrading Tailwind V2 to V3

For the actual upgrading, we have first to update our packages.

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

For instance, if you use any plugins like the [`tailwindcss/typography` plugin](https://daily-dev-tips.com/posts/make-your-life-easy-with-the-tailwind-typography-plugin/), we also have to update all of those.

You can again use a similar approach for updating this:

```bash
npm install -D @tailwindcss/typography@latest
```

Once these packages are updated, it's time to move on to the config part.

#### Just in time, all the time

Tailwind `JIT` mode is now on by default, so we can safely remove it from our `tailwind.config.js` file.

Remove the following `mode: 'jit'`

```js
module.exports = {
  mode: 'jit',
  // Other stuff
};
```

#### Purge change

Tailwind heavily relied on `PurgeCSS`. However, this is no longer the case as they rolled out another system.

This made them rename the `purge` option to `content`.

Also, make this change in your `tailwind.config.js` file.

```js
// Old
module.exports = {
  purge: [],
  // Other stuff
};

// New
module.exports = {
  content: [],
  // Other stuff
};
```

If you are interested in reading up on how this works and which configuration you can use, check out the [Tailwind docs on content](https://tailwindcss.com/docs/content-configuration).

#### Dark mode changes

Tailwind default changed the dark mode to enable the `media` strategy.
This means we no longer have to define it as that strategy.

If it is set as `false`, you can safely remove that.

```js
// Safely remove darkMode
module.exports = {
  darkMode: 'media',
  // Other stuff
};

// Safely remove darkMode
module.exports = {
  darkMode: false,
  // Other stuff
};
```

#### Variants are no longer needed

This is pretty cool as Tailwind now supports all variants by default, meaning we no longer have to define them explicitly.

From your `tailwind.config.js` you can safely remove the whole variants section.

```js
// Safely remove variants
module.exports = {
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  // Other stuff
};
```

On the same note, this is also valid for any custom `@variants` you might have defined.

If you still need custom CSS, use the [`@layer` option](https://tailwindcss.com/docs/adding-custom-styles#using-css-and-layer).

#### Classnames changes and removals

In Tailwind V3, we can safely remove `transform`, `filter`, and `backdrop-filter` classes. These are now applied whenever you use a transformation or filter.

> Note: It does not harm your code by leaving them, but it's recommended to remove them

As for the changes, it's good to mention that the old ones still work, but again recommend updating them.

`overflow-clip` is now `text-clip`, and `overflow-ellipsis` is now `text-ellipsis`.

```html
<!-- old -->
<div class="overflow-clip overflow-ellipsis"></div>

<!-- new -->
<div class="text-clip text-ellipsis"></div>
```

`flex-shrink`, and `flex-grow` no longer need the `flex` prefix. So you can use them without the front part.

```html
<!-- old -->
<div class="flex-grow-0 flex-shrink"></div>

<!-- new -->
<div class="grow-0 shrink"></div>
```

If you are using `outline-black` or `outline-white`, you must add extra classes to make this work.

```html
<!-- old -->
<div class="outline-black"></div>

<!-- new -->
<div class="outline-black outline-2 outline-dotted outline-offset-2"></div>
```

`decoration-clone`, and `decoration-slice` should now be prefixed with `box-`.

```html
<!-- old -->
<div class="decoration-clone decoration-slice"></div>

<!-- new -->
<div class="box-decoration-clone box-decoration-slice"></div>
```

And there you go, you fully migrated to Tailwind V3.
It was quite a straightforward process for my projects, and super happy with how easy the Tailwind team made this transition.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
