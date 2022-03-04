---
layout: ../../layouts/Post.astro
title: 'How to use Fontawesome'
metaTitle: 'How to use Fontawesome'
metaDesc: 'Learn how to use Fontawesome in your next project!'
image: /images/22-06-2020.jpg
date: 2020-06-22T03:00:00.000Z
tags:
  - html
---

I'm pretty sure everyone has seen [Fontawesome](https://fontawesome.com/) icons somewhere, they are so widely used and even included in Bootstrap.

Today we are going to look at how you can use Fontawesome for your website!

We are going to be looking at Fontawesome 5 it comes with a PRO version and a FREE version, we will only be looking at the FREE version in this article.

## Getting started with Fontawesome

We are going for the quickest way of getting started, this is by including a CDN (Content delivery network) link.

```html
<html>
  <head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
    />
  </head>
</html>
```

This will load the stylesheet without us having to have it locally installed.

### Using the icons

We can find the icon we are looking for on the Fontawesome website and use the shorthand to use the icons.

```html
<i class="fas fa-clock"></i> <i class="far fa-clock"></i>
```

If you are familiar with the older version we always used the `fa` code, we now use `fas` and `far` which stand for:

- fas: Solid
- far: Regular

### Styling Fontawesome Icons

We can use inline styling for these icons like the following example:

```html
<i class="fas fa-car" style="font-size:30px; color: red;"></i>
```

Alternatively we can just style if by using classes:

```html
<i class="fas fa-car ferrari"></i>
```

```css
.ferrari {
  font-size: 30px;
  color: red;
}
```

### Sizing Fontawesome Icons

So instead of defining the size in style, we can use classes defined by Fontawesome to size the icons.

We can use the following sized: `fa-xs`, `fa-sm`, `fa-lg`, `fa-2x`, `fa-3x`, `fa-4x`, `fa-5x`, `fa-6x`, `fa-7x`, `fa-8x`, `fa-9x`, or `fa-10x`

```html
<i class="fas fa-angellist fa-xs"></i>
<i class="fas fa-angellist fa-sm"></i>
<i class="fas fa-angellist fa-lg"></i>
<i class="fas fa-angellist fa-2x"></i>
<i class="fas fa-angellist fa-5x"></i>
<i class="fas fa-angellist fa-10x"></i>
```

### Fontawesome List icons

Another cool thing we can do with Fontawesome is use if for list items:

```html
<ul class="fa-ul">
  <li>
    <span class="fa-li"><i class="fas fa-carrot"></i></span>List Item
  </li>
  <li>
    <span class="fa-li"><i class="fas fa-caret-square-right"></i></span>List Item
  </li>
  <li>
    <span class="fa-li"><i class="fas fa-cat"></i></span>List Item
  </li>
</ul>
```

### Animation Fontawesome Icons

So many great options with Fontawesome, we can even animate them quickly.

We can use `fa-spin` to rotate an icon and `fa-pulse` to rotate in eight steps.

```html
<i class="fas fa-spinner fa-spin"></i>
<i class="fas fa-spinner fa-pulse"></i>

<i class="fas fa-circle-notch fa-spin"></i>
<i class="fas fa-circle-notch fa-pulse"></i>

<i class="fas fa-cog fa-spin"></i>
<i class="fas fa-cog fa-pulse"></i>
```

### Rotating and Flipping icons

Let's say you want to flip or rotate an icon, Fontawesome also comes with classes to do so:

```html
<i class="fas fa-horse"></i>
<i class="fas fa-horse fa-rotate-90"></i>
<i class="fas fa-horse fa-rotate-180"></i>
<i class="fas fa-horse fa-rotate-270"></i>
<i class="fas fa-horse fa-flip-horizontal"></i>
<i class="fas fa-horse fa-flip-vertical"></i>
```

### Stacking Fontawesome Icons

We can also choose to stack icons on top of each other:

```html
<span class="fa-stack fa-lg">
  <i class="fas fa-smoking fa-stack-1x"></i>
  <i class="fas fa-ban fa-stack-2x text-danger" style="color:red;"></i>
</span>
```

You can see al described demo's on this codepen:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="RwrppOo" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="How to use Fontawesome">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/RwrppOo">
  How to use Fontawesome</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

> As an alternative I've wrote how to [load Fontawesome as SVG](https://daily-dev-tips.com/posts/fontawesome-svg-alternative/)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
