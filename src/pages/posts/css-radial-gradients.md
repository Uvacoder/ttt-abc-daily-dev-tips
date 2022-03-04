---
layout: ../../layouts/Post.astro
title: 'CSS Radial Gradients'
metaTitle: 'Radial Gradients in CSS - Tutorial [2022]'
metaDesc: "Let's learn how to create and use gradients and explore radial gradients. See the code examples and the live Codepen."
image: /images/01-07-2020.jpg
date: 2020-07-01T03:00:00.000Z
tags:
  - css
---

Yesterday we had a look at [CSS Linear Gradiants](https://daily-dev-tips.com/posts/css-linear-gradients/).
And as promised, today we'll look into **radial gradients**. These gradients show from a round perspective.

## Types of CSS Gradients

As a reminder, there are two types of gradients we can leverage in `CSS`. These types are:

- `Linear Gradient`: From one side to the other side
- `Radial Gradient`: Round gradient

It's best to view them in action and see what they can do.

> View how to use a [Linear Gradient in CSS](https://daily-dev-tips.com/posts/css-linear-gradients/)

## CSS Radial Gradient

The radial gradient is defined by its center and moves from there.

In the most basic example, we can use it like this:

```css
.basic-radial {
  background-image: radial-gradient(red, yellow);
}
```

This will make a gradient from red (inside) colors to a yellow (outside) color spectrum.

### Radial Gradient with Multiple Colors

We can also define multiple colors for the radial gradient, much like the linear gradient. Let's look at an example with four colors:

```css
.multi-radial {
  background-image: radial-gradient(red, yellow, green, blue);
}
```

We can also define the gradient **position** for the colors:

```css
.position-radial {
  background-image: radial-gradient(red 10%, yellow 50%, green 90%);
}
```

### Transparent Radial Gradients

We can even make the gradient **transparent**, which can be used for some cool overlay effects. To create a transparent gradient, we have to use the RGBA color spectrum:

```css
.transparent-radial {
  background-image: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
}
```

### Radial Gradient Shape

By default, the radial gradient will use an ellipse shape. We can change it to a circle too. But there are only these two options.

#### Shapes of radial gradients

- circle
- ellipse

Example:

```css
.shape-gradient {
  background-image: radial-gradient(circle, red 10%, yellow 20%);
}
```

### Repeat Radial Gradient

And for who knows what reason, we can **repeat** the gradient as well with this code:

```css
.repeat-radial {
  background-image: repeating-radial-gradient(red 10%, yellow 20%);
}
```

### View all these code examples in this Codepen

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="dyGZGzZ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Radial Gradients">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/dyGZGzZ">
  CSS Radial Gradients</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

CSS Gradients are very well supported. Just Opera Mini is not working, and not all browsers support the full set of options.

![CSS Gradients support](https://caniuse.bitsofco.de/static/v1/css-gradients-1593449325882.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
