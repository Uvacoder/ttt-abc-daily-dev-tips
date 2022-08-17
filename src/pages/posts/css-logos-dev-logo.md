---
layout: ../../layouts/Post.astro
title: 'CSS Logos: Dev logo'
metaTitle: 'CSS Logos: Dev logo'
metaDesc: "In this article we'll recreate the DevTo rainbow logo"
image: /images/23-03-2022.jpg
date: 2022-03-23T03:00:00.000Z
tags:
  - css
  - css-logos
---

In the second article of CSS Logos, we'll recreate one of the dev.to logos.

I choose the rainbow logo, as it has some pretty cool CSS effects we can explore.

This will be the one we are recreating:

![Dev To logo](https://cdn.hashnode.com/res/hashnode/image/upload/v1647238515419/g8ALIWNWW.png)

> Note: I won't use this exact font as their logo is no font, but an SVG.

## Analysing the Logo

We can quickly see this can be built using a font. I'll use a default font since their logo is an SVG symbol.

Then we see a gradient overlay on the text that consists of six colors.

Some things we have to work on:

- [Overlap text with a CSS Gradient](https://daily-dev-tips.pages.dev/posts/making-gradient-text-with-tailwind-css/)
- Repeating CSS Gradient
- Hard stop CSS Gradients

## CSS DevTo logo

Let's get started on this logo. The first thing we'll do is add the text and make it nice and big.

```html
<h1>DEV</h1>
```

```css
h1 {
  margin: 0;
  padding: 0;
  line-height: 8rem;
  display: inline-block;
  font-family: arial;
  font-size: 10rem;
}
```

The next part I want to focus on is the hard-stop CSS because, by default, gradients kind of soft transition.

Let me show you what I mean by making two blocks that gradient from red-blue.

```html
<div class="gradient box"></div>
<div class="gradient-hard box"></div>
```

For the default gradient we can use something like this:

```css
.gradient {
  background-image: linear-gradient(red 0%, blue 100%);
}
```

And for the hard stop, we must define a second batch of the colors on the same percentage.

```css
.gradient {
  background-image: linear-gradient(red 0%, red 50%, blue 50%, blue 100%);
}
```

We say, show red from 0-50%, then blue from 50-100%. This forces it to have no overflow or soft gradient transition.

You can see the result in this CodePen example:

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="MWrYKOw" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/MWrYKOw">
  Untitled</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

The next step is to see how we can repeat a gradient. For this step, it's important not to have the gradient fill completely.

Meaning we currently used all of the 100%. We can say use 0-5% and 5-10% but then stop.

Then we can set the background as `repeating-linear-gradient`. This will make sure it gets repeated every time.

Let's try this on our hard-stop red-blue gradient.

```css
.gradient-hard-repeat {
  background-image: repeating-linear-gradient(
    red 0%,
    red 5%,
    blue 5%,
    blue 10%
  );
}
```

You can already see the result in the above CodePen.

Then it's the task to show this on top of the text.
It's as simple as setting the background for our text element.

```css
h1 {
  ...
  background: repeating-linear-gradient(...);
}
```

However, this will show it as a big block, as we saw with our block example.
To only cover the text, we can add the following two properties.

```css
h1 {
	...
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

This will make sure the background clips to the text and the fill of the text is transparent (so the gradient shows).

And tada! We now have our fantastic effect.
The last step is to add the actual Dev.to colors.

And you can see the completed code on this CodePen.

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="gOobadx" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/gOobadx">
  Untitled</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
