---
layout: ../../layouts/Post.astro
title: 'Tailwind CSS equal height columns'
metaTitle: 'Tailwind CSS equal height columns'
metaDesc: 'How to make equal height columns with Tailwind CSS'
image: /images/24-06-2021.jpg
date: 2021-06-24T03:00:00.000Z
tags:
- css
- tailwind
---

A while ago, I showed you how to create [CSS equal height columns](https://daily-dev-tips.com/posts/css-equal-height-columns/), and today it's time to revisit this in Tailwind CSS.

I love to explore Tailwind and see how easy things have gotten.

The main idea for today is that we'll have three columns that have different height texts.
These columns, however, should be spanned to be the same size (as the biggest column)

The end goal should look like this:

![Tailwind CSS equal height columns](https://cdn.hashnode.com/res/hashnode/image/upload/v1624170337435/YJwMzWJUQ.png)

## Tailwind CSS equal height columns

We should start with a wrapper for our three columns to achieve these columns. This wrapper can be a single div having a flex class.

```html
<div class="flex">
  <!-- Our three columns -->
</div>
```

Then let's have a look at how our column should look.

```html
<div class="w-1/3 p-6 bg-gray-100 flex flex-col">
  <h3 class="text-2xl mb-2">Title 1</h3>
  <p class="flex-1">Content</p>
  <a href="#" class="bg-purple-500 mt-2 text-center p-4 text-white">Button</a>
</div>
```

Let me explain what's going on here.

The wrapping div is one of our columns and holds the following classes.

- `w-1/3`: Which makes it one-third of our headrapping div
- `p-6`: Adds some padding for this div
- `bg-gray-100`: Adds a light gray backgrounds
- `flex`: This makes this item a flex item. This is a big part since we will make magic using the `p` element
- `flex-col`: Make sure the flex flows vertically

Then we add some basic styling for the title and button, but the real magic comes from the `p` class.

The `flex-1` makes sure this element spans across the remaining space for that column, so if it has less text than the other ones, it will force it to be a bigger one.

Which results in the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="ZEeZKYG" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Tailwind CSS equal height columns">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/ZEeZKYG">
  Tailwind CSS equal height columns</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
