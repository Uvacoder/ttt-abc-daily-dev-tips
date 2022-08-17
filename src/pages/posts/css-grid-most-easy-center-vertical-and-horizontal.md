---
layout: ../../layouts/Post.astro
title: 'CSS Grid most easy center vertical and horizontal'
metaTitle: 'CSS Grid center vertical and horizontal [2022 Tutorial]'
metaDesc: 'Guide to teach you how to center an HTML element horizontally and vertically using CSS Grid'
image: /images/07-12-2020.jpg
date: 2020-12-07T03:00:00.000Z
tags:
  - css
---

As a follow up on the [CSS Flex center article](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/), which I've used in about almost all me articles that include a demo, it is now time to give you a view of the same principle.
In this tutorial, we'll use **CSS Grid to center horizontally and vertically**.

Like Flexbox, it's super easy to center an HTML element using CSS Grid.

To entirely center an item with CSS grid, all the CSS code we need is:

```css
.container {
  display: grid;
  place-items: center;
  min-height: 100vh;
}
```

The min-height property is optional. In this case, it's needed to give the HTML canvas a vertical height.

The above code to align an item horizontally and vertically with CSS grid will result in the following CodePen example:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="WNGQxxB" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Grid most easy center vertical and horizontal">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/WNGQxxB">
  CSS Grid most easy center vertical and horizontal</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## CSS Grid center horizontally

If for instance, you only want to **center an element horizontally** you can use the following CSS grid code:

```css
.container {
  display: grid;
  justify-content: center;
  min-height: 100vh;
}
```

We can use the `justify-content` property and pass the `center` value to make it horizontally centered.

> Note: this is the same use as for [`display: flex`](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/#heading-css-flexbox-horizontal-center).

This code results in the following Codepen:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="GRjpqjX" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Grid most easy center horizontal">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/GRjpqjX">
  CSS Grid most easy center horizontal</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## CSS Grid center vertically

On the other hand, maybe you are looking to only **center an item vertically**.

In CSS grid, you can use the following code to achieve this:

```css
.container {
  display: grid;
  align-items: center;
  min-height: 100vh;
}
```

We use the `align-items` with a value of `center` to get the vertical alignment on the item.

> Note: This is as well the same functionality as we've seen in [`CSS Flex`](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/#heading-css-flexbox-vertical-center)

See the example code in the following Codepen:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="VwKvjmQ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Grid most easy center vertical">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/VwKvjmQ">
  CSS Grid most easy center vertical</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

There you go! We now learned another super-easy way to center elements horizontally, vertically, or both using `CSS Grid`.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
