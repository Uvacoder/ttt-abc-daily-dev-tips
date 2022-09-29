---
layout: ../../layouts/Post.astro
title: 'CSS Grid Item'
metaTitle: 'CSS Grid Item, how grid items work'
metaDesc: 'Today we are diving deeper into the grid item properties.'
image: /images/17-07-2020.jpg
date: 2020-07-17T03:00:00.000Z
tags:
  - css
---

We had our basic introduction to [CSS Grid](https://daily-dev-tips.com/posts/css-grid-introduction/), The [Grid Container](https://daily-dev-tips.com/posts/css-grid-container/), and today we are looking into the Grid Item.

## HTML Structure

Let's start by making a grid template that is five by five.

```html
<div class="grid">
  <!-- Row 1 -->
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <!-- Row 2 -->
  ...
</div>
```

## CSS Item

In our first introduction, we saw how to span an item over multiple blocks; let's dive deeper into that.

### CSS Grid-column property

The property has multiple ways of describing the width of an item.

- `grid-column: 1 / 5;`: Starts on column one end before column five
- `grid-column: 1 / span 3;` Start on column one and span three columns
- `grid-column: 2 / span 3;` Start on column two and span three columns
- `grid-column: span 3;` Span three from wherever it starts

Have a look at this Codepen:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="MWKPoaP" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Grid Item Column">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/MWKPoaP">
  CSS Grid Item Column</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### CSS Grid-row property

Like the grid-column, we can also use the grid row to stack over rows.

- `grid-row: 1 / 4;` Start on row one and end on row four
- `grid-row: 1 / span 2;` Start on one and span two rows
- `grid-row: span 2;` Span two from anywhere

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="jOWewmv" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Grid Item Row">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/jOWewmv">
  CSS Grid Item Row</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### CSS Grid-area

We can also make a grid area to span both columns and rows.

`grid-area: 1 / 2 / 5 / 6;` Meaning: Start on Row 1, Column 2 and end at Row 5 Column 6

That will result in the following Codepen:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="OJMBgzQ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Grid Item Area">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/OJMBgzQ">
  CSS Grid Item Area</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### CSS Grid Naming Areas

Another cool feature is we can name areas!

```css
.grid {
  grid-template-areas: 'Custom Custom . . .' 'Custom Custom . . .';
}
```

This will make two rows, with the names `Custom` columns and three unnamed columns.

And then on our item:

```css
.item {
  grid-area: Custom;
}
```

This will result in the following:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="eYJPRrq" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Grid Area">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/eYJPRrq">
  CSS Grid Area</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

CSS Grid has support from all major browsers, we have some issues in IE, but they can be [Polyfilled](https://github.com/FremyCompany/css-grid-polyfill).

![CSS Grid support](https://caniuse.bitsofco.de/image/css-grid.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
