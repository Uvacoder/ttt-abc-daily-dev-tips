---
layout: ../../layouts/Post.astro
title: 'CSS Logos: Vue logo'
metaTitle: 'CSS Logos: Vue logo'
metaDesc: 'The Vue js logo recreated in CSS'
ogImage: /images/22-06-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/d430b405-b4d2-4149-907d-b600cde56100
date: 2022-06-22T03:00:00.000Z
tags:
  - css
  - css-logos
---

The [Strava logo from the previous article](https://daily-dev-tips.com/posts/css-logos-strava-logo/) inspired me to try and recreate the Vue logo.
It uses similar shapes, allowing me to try different techniques.

For the Vue logo, I challenged myself only to use one div, and the logo must be responsive.

The logo looks like this:

![Vue js logo](https://cdn.hashnode.com/res/hashnode/image/upload/v1655012205990/SlGwV1aND.png)

## Analysing the logo

We can see the logo is based on `V` symbols that sit on each other. Another way to look at this is triangles.

We can even see three triangles, the green layer, the dark layer, and the white top.

The main difficulty in this challenge is to make it scaleable.

## CSS Vue logo

We'll only use one div to start, so let's set that up.

```html
<div class="vue"></div>
```

Then a critical trick is to set everything to `box-sizing: border-box` to ensure the border counts towards our element's total size.

We need this as we will use borders to style our actual element.

```css
*,
*:before,
*:after {
  box-sizing: border-box;
}
```

Then we also want to set the default size for the logo as a [root variable](https://daily-dev-tips.com/posts/how-to-use-css-vars/):

```css
:root {
  --size: 50vmin;
}
```

Let's get started on our main element.
We want to set the width to our size variable for the basic styling. Then we use [`aspect-ratio`](https://daily-dev-tips.com/posts/css-aspect-ratio-its-finally-here/) to proportional set it to the correct size.

A trick I applied is to set the font size of this element to the width. By doing this, we can create "scaleable" borders.
As you might know, the border width doesn't accept percentages, so making them scale is challenging.
By using this trick in combination with `em` values, we make them scale to the element's width.

```css
.vue {
  position: relative;
  width: var(--size);
  aspect-ratio: 15/13;
  border-style: solid;
  border-width: 0.865em 0.5em 0 0.5em;
  border-color: #41b883 transparent transparent transparent;
  font-size: var(--size);
  display: grid;
  place-items: center;
}
```

We only color on one side of the box, making the perfect triangle to show.
If we colored the other sides as well, we would end up with something like this:

![One-sided border in CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1655014122546/s8PEEkQLZ.png)

This is already our main shape done. For the darker triangle inside, we can use the same approach on a `:before` element.

```css
.vue {
  &:before {
    content: '';
    position: absolute;
    top: -0.865em;
    border-style: solid;
    border-width: 0.52em 0.3em 0 0.3em;
    border-color: #34495e transparent transparent transparent;
  }
}
```

![Inner triangle in CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1655014229847/3DZxIOANE.png)

The last element we need is the cutout effect.
For that, we'll use the `:after` selector.

```css
.vue {
  &:after {
    content: '';
    position: absolute;
    top: -0.865em;
    border-style: solid;
    border-width: 0.2em 0.115em 0 0.115em;
    border-color: white transparent transparent transparent;
  }
}
```

This concludes the article, and you can see the result in this CodePen.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="rNJQXVo" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/rNJQXVo">
  CSS Logos: Vue logo</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
