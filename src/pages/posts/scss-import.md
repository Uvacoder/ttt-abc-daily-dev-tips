---
layout: ../../layouts/Post.astro
title: 'SCSS @import, import sub files in CSS'
metaTitle: 'SCSS @import, import sub files in CSS'
metaDesc: 'Today we are learning how to import SCSS partials and files.'
image: /images/30-07-2020.jpg
date: 2020-07-30T03:00:00.000Z
tags:
  - css
---

To get cracking with `SCSS`, I think a good and maybe the most useful starting point is `@import`.

SCSS uses a DRY (Don't Repeat Yourself) methodology. And one way to help with this is to separate code in specific files and folders.

Some files you can split up are: reset, variables, colors, fonts, etc.

## SCSS Import Usage

To use the `@import` we use the following syntax:

```css
@import 'variables';
```

As you can see, we don't use an extension.

We can ofcourse also import multiple files this way:

```css
@import 'reset';
@import 'variables';
@import 'fonts';
```

## How SCSS Import Works

So let's say we have a reset like such:

`reset.scss`

```css
* {
  margin: 0;
  padding: 0;
}
```

And then our `main.scss`

```css
@import 'reset';

body {
  color: #333;
  background: #efefef;
}
```

This will result in the following `main.css`

```css
* {
  margin: 0;
  padding: 0;
}

body {
  color: #333;
  background: #efefef;
}
```

## Using SCSS Partials

One powerful aspect is the use of partials.
You have to keep in mind `SCSS` will compile the normal `SCSS` files. But if we start our files with an underscore like: `_reset.scss` it will not be compiled directly.

To use a file let's say `_variables.scss` we can do the following:

```css
@import 'variables';

body {
  font-size: $defaultFontSize;
}
```

As you can see, we don't include the underscore in our import.

## Making use of Folders

Another thing we can do is use folders like such:

`base/_reset.scss`
`base/_fonts.scss`
`component/_buttons.scss`
`component/_dropdown.scss`

These can we used as follows:

```css
@import 'base/reset';
@import 'base/fonts';
@import 'component/buttons';
@import 'component/dropdown';
```

This gives our project way more clarity and organise our code.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
