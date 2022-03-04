---
layout: ../../layouts/Post.astro
title: 'My tailwind automation setup'
metaTitle: 'My tailwind automation setup'
metaDesc: 'Two amazing things to make Tailwind development easier'
image: /images/28-11-2021.jpg
date: 2021-11-28T03:00:00.000Z
tags:
  - css
  - tailwind
---

It can quickly become a long string of classes when it comes to tailwind classes, and you might lose an overview.

While working with Tailwind, I've found two amazing things that help with this process.

## 1. Headwind opinionated Tailwind order plugin

Headwind is a fantastic visual studio code plugin made by [Ryan Heybourn](https://twitter.com/ryanheybourn).

[Click here to install the plugin](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind)

What this plugin does, is sort classes automatically for you based on a preferred sorting order.

In action it looks like this:

<!-- ![sort.gif](https://cdn.hashnode.com/res/hashnode/image/upload/v1637211075991/ipE6UA6h1p.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1637210935/sort_qo4lvh.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1637210935/sort_hm1zu2.mp4" type="video/mp4" />
</video>

You might think, ok, but why do we need this? And for me, it makes a huge difference to have an opinionated class order. It's a sense of being organized, and it makes it calm to read classes as you know what to expect.

## 2. Tailwind ESLint plugin

Suppose you want to fully make your project rock solid and independent of users' plugins. You can take it to the next level and use the Tailwind ESLint plugin.

You can find this [Tailwind ESLint plugin on NPM](https://www.npmjs.com/package/eslint-plugin-tailwindcss)

This plugin is created by [Francois Massart](https://twitter.com/FrancoisMassart) and provides a couple of excellent rules we can leverage:

- classname order

Basically, what we see from the Headwind plugin. However, this sorting algorithm is a little bit different. If you are using this ESLint plugin, I would suggest that you turn of Headwind for that project.

- no custom classname

Make sure no custom classes are used. You can, however, create a whitelist of classnames that are valid.

- no contradicting classnames

Which is pretty sick. It can often happen that you accidentally add classes that contract, for example: `p2 p3`. The plugin will fail on this, and it will let you know.

## Conclusion

Tailwind is excellent on its own, but when working in teams, it can be a real lifesaver to have tools, like mentioned above, that can help us work uniform.

Perhaps you use other Tailwind helpers? Do let me know as we can always use more.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
