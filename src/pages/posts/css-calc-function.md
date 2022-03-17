---
layout: ../../layouts/Post.astro
title: 'CSS Calc Function'
metaTitle: 'CSS Calc Function'
metaDesc: 'Learn how to benefit the CSS Calc Function'
image: /images/02-06-2020.jpg
date: 2020-06-02T03:00:00.000Z
tags:
  - css
---

The CSS Calc() function is handy to mix percentage values with fixed pixels.
We can also use the calc() function to divide into equal sets.

## How to use CSS Calc()?

```css
div {
  width: calc(100% - 50px);
}
```

You can already see we make the div `100%` and then minus `50px`.

We can use the following:

- Minus (-)
- Plus (+)
- Multiplication (\*)
- Division (/)

So another cool thing we can do is the following:

```css
span {
  width: calc(100% / 3);
}
```

Awesome right! Not the recommended way of making a grid, but it will work!

See the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="VweZpPj" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Calc Function">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/VweZpPj">
  CSS Calc Function</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
