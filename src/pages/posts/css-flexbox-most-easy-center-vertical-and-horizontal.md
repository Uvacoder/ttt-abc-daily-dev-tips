---
layout: ../../layouts/Post.astro
title: 'CSS Flexbox most easy center vertical and horizontal'
metaTitle: 'CSS Flexbox most easy center vertical and horizontal'
metaDesc: 'How to center a element vertical and horizontal using flexbox css'
image: /images/06-04-2020.jpg
date: 2020-04-06T03:00:00.000Z
tags:
  - css
---

Ever needed to center an element entirely?
This was almost impossible before `flex`, and we had some crazy hacks for this... Nowadays, `flex` makes it only three lines of `CSS`.

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

Demo:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="JjdqVoV" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Flex most easy center vertical and horizontal">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/JjdqVoV">
  CSS Flex most easy center vertical and horizontal</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Simple as that!
Of course, this is a fundamental yet powerful option to center elements.

> Note: I also wrote an article on [how to center using CSS Grid](https://daily-dev-tips.com/posts/css-grid-most-easy-center-vertical-and-horizontal/).

## CSS Flexbox horizontal center

We use the `justify-content: center;` option to center vertically.

```css
.container {
  display: flex;
  justify-content: center;
}
```

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="xxGNewe" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Flex most easy center vertical">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/xxGNewe">
  CSS Flex most easy center vertical</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## CSS Flexbox vertical center

We can use the `align-items: center;` option for the horizontal center.

```css
.container {
  display: flex;
  align-items: center;
}
```

## CSS Flexbox center multiple items

Of course, we can do this with multiple items.

When using multiple items, we can use `flex-direction: column;` or `flex-direction: row;` to define which way the elements should flow.

```css
.container {
  display: flex;
  flex-direction: row; // horizontal main axis
  flex-direction: column; // vertical main axis
  justify-content: center;
  align-items: center;
}
```

See this example to see the difference: (scroll down)

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="gOpJyrw" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Flex direction">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/gOpJyrw">
  CSS Flex direction</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
