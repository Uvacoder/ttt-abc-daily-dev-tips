---
layout: ../../layouts/Post.astro
title: 'SCSS Mixins'
metaTitle: 'SCSS Mixins, How scss mixins works'
metaDesc: 'Deep dive into @mixins, a very powerfull SCSS addition'
image: /images/02-08-2020.jpg
date: 2020-08-02T03:00:00.000Z
tags:
  - css
---

Let's get a closer look at using `@mixins` in `SCSS`. You can look at mixins like the [import](https://daily-dev-tips.com/posts/scss-import/) we used before. But mixins place a certain set of codes on the element we are mixing in.

## Defining our Mixin

We use the `@mixin` directive to define our mixin, so let's go ahead and create our first one:

```css
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

> Note: Naming in SCSS can be either with - or \_ they are considered the same and can be used at the same time!

## Using our Mixin

To use our mixin we simply use the `@include` statement:

```css
.container {
  @include flex-center;
  height: 100vh;
}
```

Our properties on the mixin will now also exist on the container element.

## Mixin inside a Mixin

Another cool thing we can do is use mixins inside each other like so:

```css
@mixin font {
  font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 2rem;
}
@mixin flex {
  display: flex;
}
@mixin flex-center {
  @include flex;
  @include font;
  justify-content: center;
  align-items: center;
}
```

## Mixin and Arguments

Something that is really strong for using mixins is the use of arguments.

We can define our mixin as such:

```css
@mixin button($background: blue, $padding: 10px, $color: #fff) {
  background: $background;
  padding: $padding;
  display: block;
  border-radius: 5px;
  color: $color;
}
```

> Note: We added default parameters, but these are not mandatory, you can leave them out.

And once we call it, pass these arguments:

```css
.box {
  @include button(#7afdd6, 20px, #ffffff);
}
```

## Pro-tip

A really good pro-tip is to use Mixins for vendor prefixes!
It will safe you so much time for border-radius for example:

```css
@mixin border-radius($amount) {
  /* Safari 3-4, iOS 1-3.2, Android 1.6- */
  -webkit-border-radius: $amount;
  /* Firefox 1-3.6 */
  -moz-border-radius: $amount;
  /* Opera 10.5, IE 9, Safari 5, Chrome, Firefox 4, iOS 4, Android 2.1+ */
  border-radius: $amount;
}
```

And we use this like so:

```css
@include border-radius(20px);
```

Have a play around with these examples on Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="oNbKbGP" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="SCSS Mixins">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/oNbKbGP">
  SCSS Mixins</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
