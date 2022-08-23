---
layout: ../../layouts/Post.astro
title: 'CSS Grid Container'
metaTitle: 'CSS Grid Container'
metaDesc: 'Lets dive deeper into the container, and see what we can do with it!'
image: /images/16-07-2020.jpg
date: 2020-07-16T03:00:00.000Z
tags:
  - css
---

Yesterday we had the first touch with [`CSS` Grid](https://daily-dev-tips.com/posts/css-grid-introduction/). Today we will be diving more into the container part of the grid.

The container is the outer wrapper, and much like `flex`, it has some awesome properties we can leverage.

You must consider the container as the element where you define your layout structure.

## HTML Structure

Today's example will work with a three-column, two-row layout.

```html
<div class="grid">
  <!-- Row 1 -->
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <!-- Row 2 -->
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

## Grid Container

So let's start by making our container a grid:

```css
.grid {
  display: grid;
  grid-template-columns: auto auto auto;
}
```

We define our column layout and tell it to make three evenly spaced columns.

### Grid Gaps

Let's add some gaps because these make it easier to see what's happening.

We can add an all-around gap (column and row) or separate ones.

```css
.grid {
  grid-gap: 1em; // Around
  grid-column-gap: 1em; // Columns
  grid-row-gap: 1em; // Rows
}
```

By default, the gaps are off (not existing)

### Different Column Setup

We can also change the column setup to be variant like this:

```css
.grid {
  display: grid;
  grid-template-columns: 20px auto 100px;
}
```

The auto will fill to 100% set up.

### Grid Rows

As we've seen now, we are only defining the columns so that rows will be made automatically, but we can influence them like so:

```css
.grid {
  display: grid;
  grid-template-rows: 80px 200px;
}
```

You can see the above in the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="pogOZZX" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Grid Container">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/pogOZZX">
  CSS Grid Container</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Grid Alignments Justify-content

To align the grid, we can use several awesome functions:

Let's start with `justify-content`. This property will align on the horizontal axis.

Space the items evenly:

```css
.grid {
  display: grid;
  justify-content: space-evenly;
}
```

Give them space around:

```css
.grid {
  display: grid;
  justify-content: space-around;
}
```

Give them space between them.

```css
.grid {
  display: grid;
  justify-content: space-between;
}
```

Center the elements

```css
.grid {
  display: grid;
  justify-content: center;
}
```

Move all blocks to the start.

```css
.grid {
  display: grid;
  justify-content: start;
}
```

Or to the end

```css
.grid {
  display: grid;
  justify-content: end;
}
```

Have a play with this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="QWyVBzP" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Grid Container - Justify-content">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/QWyVBzP">
  CSS Grid Container - Justify-content</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Grid Alignments Align-content

That was the horizontal axis, but we can also influence the vertical axis by using the `align-content` property.

Space the items evenly:

```css
.grid {
  display: grid;
  align-content: space-evenly;
}
```

Give them space around:

```css
.grid {
  display: grid;
  align-content: space-around;
}
```

Give them space between them.

```css
.grid {
  display: grid;
  align-content: space-between;
}
```

Center the elements

```css
.grid {
  display: grid;
  align-content: center;
}
```

Move all blocks to the start.

```css
.grid {
  display: grid;
  align-content: start;
}
```

Or to the end

```css
.grid {
  display: grid;
  align-content: end;
}
```

Play around with the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="KKVxxPP" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Grid Container - Align-content">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/KKVxxPP">
  CSS Grid Container - Align-content</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Perfectly Centered Grid

Of course, we can combine the two. Let's make a centered grid:

```css
.flex {
  display: flex;
  align-content: center;
  justify-content: center;
}
```

You can see this on the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="pogOOov" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Grid Container - Center">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/pogOOov">
  CSS Grid Container - Center</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

CSS Grid has support from all major browsers, we have some issues in IE, but they can be [Polyfilled](https://github.com/FremyCompany/css-grid-polyfill).

![CSS Grid support](https://caniuse.bitsofco.de/image/css-grid.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
