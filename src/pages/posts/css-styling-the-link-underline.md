---
layout: ../../layouts/Post.astro
title: "CSS Styling the link underline"
metaTitle: "CSS Styling the link underline"
metaDesc: "Did you know you can style the underline thickness and offset using CSS?"
image: /images/13-02-2021.jpg
date: 2021-02-13T03:00:00.000Z
tags:
  - css
---
Styling the link underlines was always quite a mission. I would often remove the underline and use a border to achieve the effect.

Why? It was hard to offset the underline position.
But luckily, browsers and CSS keeps improving to make things like this more accessible.

Today we will be looking into two pretty cool CSS property that addresses the underline effect;

1. text-underline-offset: How far the underline from the text is
2. text-decoration-thickness: How thick the underlined link is

The result of today you can see by having a play with this Codepen. (Move the sliders to adjust the elements)

<p class="codepen" data-height="375" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="yLVJBYQ" style="height: 375px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Styling the link underline">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/yLVJBYQ">
  CSS Styling the link underline</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## CSS text-underline-offset property

The text-underline-offset property can be used to define how far the line is from the initial text.

You can use a variety of values, as you might find in most CSS properties.

- `auto`: The browser will determine it for us.
- `{length}{unit}`: The CSS units as 1px, 1em, 1rem, 1%.
-  `initial`: What it was before (auto).
-  `inherit`: Whatever the parent element has
-  `unset`: Remove any set offset.

To use it we can simple use the following syntax:

```css
a {
	text-underline-offset: 0.5em;
} 
```

You can have a play around with the demo on the following Codepen.

<p class="codepen" data-height="343" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="jOVqgjx" style="height: 343px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Styling the link underline offset">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/jOVqgjx">
  CSS Styling the link underline offset</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## CSS text-decoration-thickness property

As for the text-decoration-thickness, this property is used to tell how big the underline is.

We do need the full text-decoration attribution to make changes to it.

```css
a {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: purple;
  text-decoration-thickness: 0;
}
```

It uses the same value properties as the offset.

- `auto`: The browser will determine it for us.
- `{length}{unit}`: The CSS units as 1px, 1em, 1rem, 1%.
-  `initial`: What it was before (auto).
-  `inherit`: Whatever the parent element has
-  `unset`: Remove any set offset.

You can have a play with it on this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="dyOXbbG" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Styling the link decoration thickness">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/dyOXbbG">
  CSS Styling the link decoration thickness</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Browser support

As for the text-underline-offset, the support is very summer. It's stating that Chrome doesn't have the full support, but it seems to work since 88.

![CSS text-underline-offset browser support](https://caniuse.bitsofco.de/static/v1/mdn-css__properties__text-underline-offset-1612766693219.png)

And for the text-decoration-thickness, the support is about the same.
Let's hope they'll both get full support soon!

![CSS text-decoration-thickness browser support](https://caniuse.bitsofco.de/static/v1/mdn-css__properties__text-decoration-thickness-1612766795753.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
