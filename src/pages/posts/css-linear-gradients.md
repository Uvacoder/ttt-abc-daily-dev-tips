---
layout: ../../layouts/Post.astro
title: 'CSS Linear Gradients'
metaTitle: 'CSS Linear Gradients'
metaDesc: 'Today we are looking into CSS Linear Gradients!'
image: /images/30-06-2020.jpg
date: 2020-06-30T03:00:00.000Z
tags:
  - css
---

Gradients can make your website or application impressive and enhance its feel of it.

They also can be terrible and over the top (personal opinion, look at my demo... 🤷‍♂️)

Today we'll be looking into `CSS Linear Gradients`, which we can use, and how to use them.

## Types of CSS Gradients

There are two types of gradients we can leverage in `CSS` these two are:

- `Linear`: From one side to the other side
- `Radial`: Round gradient

Best to view them in action and see what they can do.

> Also, check my Article on [Radial Gradients](https://daily-dev-tips.com/posts/css-radial-gradients/)

## CSS Linear Gradient

Let's start with the linear gradient; this one, by default, goes from top to bottom and accepts colors in whatever type you like (RGB,CMYK,hex,named).

```css
.basic-linear {
  background-image: linear-gradient(#ff0000, #ffff00);
  background-image: linear-gradient(red, yellow);
  background-image: linear-gradient(rgb(255, 0, 0), rgb(255, 255, 0));
}
```

The above will render the same gradient a red top that flows into a yellow bottom.

### Linear Gradient Left to Right

What if we want the gradient to move from left to right?

We can pass an additional first argument.

```css
.left-linear {
  background-image: linear-gradient(to right, red, yellow);
}
```

Alternatively, we can define this by giving a percentage.

```css
.left-linear {
  background-image: linear-gradient(90deg, red, yellow);
}
```

By doing so, we can also make the gradient diagonal.

```css
.diagonal-linear {
  background-image: linear-gradient(45deg, red, yellow);
  background-image: linear-gradient(to top right, red, yellow);
}
```

### Using Multiple Colours

Another thing we can do is keep adding colors!

```css
.multi-linear {
  background-image: linear-gradient(45deg, red, yellow, green, blue);
}
```

We can also state where each color should begin like so:

```css
.multi-linear {
  background-image: linear-gradient(45deg, red 10%, yellow 50%, blue 60%);
}
```

### Linear Gradient Transparency

This is one of the options I use transparency in making something go from a solid color to a fully transparent one.

Let's try black for this one.

```css
.transparent-linear {
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
  );
}
```

### Repeating Linear Gradient

Something that I used in making `CSS` images is a repeating gradient:

```css
.repeating-gradient {
  background-image: repeating-linear-gradient(red 10%, yellow 20%);
}
```

An excellent tool for making awesome gradients and directly getting the code is [CSSGradient.io](https://cssgradient.io/)!

Have a look at this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="zYrERyM" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Linear Gradients">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/zYrERyM">
  CSS Linear Gradients</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

CSS Gradients are very well supported. Just Opera Mini is not working, and not all browsers support the complete set of options.

![CSS Gradients support](https://caniuse.bitsofco.de/static/v1/css-gradients-1593449325882.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
