---
layout: ../../layouts/Post.astro
title: 'SCSS Introduction'
metaTitle: 'SCSS Introduction'
metaDesc: 'An introduction to SCSS and how to set it up'
image: /images/29-07-2020.jpg
date: 2020-07-29T03:00:00.000Z
tags:
  - css
---

Hey Guys, I realized I've been using `SCSS` in most of my Codepens. But we never really touched based on this topic.

So let's dive into introducing `SCSS` to you all.

> BTW: I have a free Giveaway on Twitter! [🚨 Free Giveaway](https://twitter.com/DailyDevTips1/status/1287735721298726912)

## What Does SCSS Mean?

It stands for `sassy css` and is basically the follow up for `SASS` stylesheets. You will find many people calling it `SASS` or `SCSS`, but either way, they are very similar and used for modular `CSS` setup.

In general, some common use cases are:

- Variables
- Nesting
- @import
- @mixin
- @extend

We won't be going through all these topics today, but I will touch base on them during the next couple of days.

## How Does SCSS Work

A major thing to keep in mind is that a browser won't understand `SCSS` or `SASS` code. We need to process it and turn it into regular `CSS` files.

There are several ways to do this; the simplest is using a pre-processing plugin, for instance for Visual Studio:

[Download Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)

This will run in Visual Studio and compile your `SCSS` files into one `CSS` file.

There are also specific `SASS` compilers see the website for more information:

[SASS Compilers](https://sass-lang.com/install)

## Our First SCSS Example

Let's get right in there with a very basic example:

```html
<div class="container">
  <div class="box">
    🤩 SCSS 🤩
  </div>
</div>
```

```css
$primary: #ffd670;
$secondary: #ff9770;

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: $primary;
}

.box {
  background: $secondary;
  padding: 50px;
  border-radius: 20px;
  color: $primary;
  font-size: 2rem;
  font-weight: bold;
}
```

As you can see, we can now quickly change our colors, instead of having them repeating in every element styling.

This will result in the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="OJMYxoZ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="SCSS Introduction">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/OJMYxoZ">
  SCSS Introduction</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
