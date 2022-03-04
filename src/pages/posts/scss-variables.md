---
layout: ../../layouts/Post.astro
title: 'SCSS Variables'
metaTitle: 'SCSS Variables, how variables work in SCSS'
metaDesc: 'A deep dive into variables inside SCSS'
image: /images/31-07-2020.jpg
date: 2020-07-31T03:00:00.000Z
tags:
  - css
---

Now that we are getting into `SCSS` let's look into using variables and the power that comes with them.

Variables are literally what you expect a definition of a value.

These can contain a wide range in `SCSS`:

- Strings
- Colors
- Numbers
- Boolean
- Lists

## Declaring Variables

To declare variables in `SCSS` we use the dollar sign \$.

```css
$variableName: value;
```

Let's define some variables for todays examples:

```css
$fontFamily: Roboto, 'Helvetica Neue', Arial, sans-serif;
$fontSize: 16px;
$primaryColor: #333;
$secondaryColor: #efefef;
$maxWidth: 300px;
```

We can then use these variables as such:

```css
body {
  font-family: $fontFamily;
  font-size: $fontSize;
  background: $secondaryColor;
}
.box {
  max-width: $maxWidth;
  background: $primaryColor;
  color: $secondaryColor;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}
```

This will then result in the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="zYrVxrp" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="SCSS Variables">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/zYrVxrp">
  SCSS Variables</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Overwriting Variables

There is an option to overwrite variables inside an element check out the following use case:

```css
$color: #ef476f;

h1 {
  $color: #ffd166;
  color: $color;
}
p {
  color: $color;
}
```

What happens here, just inside the H1 we change the color to green, will only make the H1 yellow. The p tag will stay our original color.

There is an option to overwrite the default for good, but I don't know why it exists!

This will give the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="OJMePbP" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="SCSS Variables #2">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/OJMePbP">
  SCSS Variables #2</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
