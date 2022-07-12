---
layout: ../../layouts/Post.astro
title: 'CSS exploring all cursor options'
metaTitle: 'CSS exploring all cursor options'
metaDesc: 'Can you believe how many cursor options we have?'
image: /images/24-08-2020.jpg
date: 2020-08-24T03:00:00.000Z
tags:
  - css
---

Heads-up, many cursor options are hardly ever used!

Cursors can help a person understand what's going on, so let's use them more.

In today's example, we will be exploring all of our options.

See all the cursor options in this example on Codepen. (Hover on the tiles)

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="jOqyVaB" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS exploring all cursor options">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/jOqyVaB">
  CSS exploring all cursor options</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## HTML Structure

As for our `HTML`, we will use some tiles and hover each with a different cursor.

```html
<div class="container">
  <div class="alias">alias</div>
  <div class="all-scroll">all-scroll</div>
  <div class="auto">auto</div>
  <div class="cell">cell</div>
  <div class="context-menu">context-menu</div>
  <div class="col-resize">col-resize</div>
  <div class="copy">copy</div>
  <div class="crosshair">crosshair</div>
  <div class="default">default</div>
  <div class="e-resize">e-resize</div>
  <div class="ew-resize">ew-resize</div>
  <div class="grab">grab</div>
  <div class="grabbing">grabbing</div>
  <div class="help">help</div>
  <div class="move">move</div>
  <div class="n-resize">n-resize</div>
  <div class="ne-resize">ne-resize</div>
  <div class="nesw-resize">nesw-resize</div>
  <div class="ns-resize">ns-resize</div>
  <div class="nw-resize">nw-resize</div>
  <div class="nwse-resize">nwse-resize</div>
  <div class="no-drop">no-drop</div>
  <div class="none">none</div>
  <div class="not-allowed">not-allowed</div>
  <div class="pointer">pointer</div>
  <div class="progress">progress</div>
  <div class="row-resize">row-resize</div>
  <div class="s-resize">s-resize</div>
  <div class="se-resize">se-resize</div>
  <div class="sw-resize">sw-resize</div>
  <div class="text">text</div>
  <div class="w-resize">w-resize</div>
  <div class="wait">wait</div>
  <div class="zoom-in">zoom-in</div>
  <div class="zoom-out">zoom-out</div>
</div>
```

What a list, right? We can have so many cursors it's crazy!

## CSS Cursor options

As for the `CSS`, let's dive right into them:

```css
.alias {
  cursor: alias;
}
.all-scroll {
  cursor: all-scroll;
}
.auto {
  cursor: auto;
}
.cell {
  cursor: cell;
}
.context-menu {
  cursor: context-menu;
}
.col-resize {
  cursor: col-resize;
}
.copy {
  cursor: copy;
}
.crosshair {
  cursor: crosshair;
}
.default {
  cursor: default;
}
.e-resize {
  cursor: e-resize;
}
.ew-resize {
  cursor: ew-resize;
}
.grab {
  cursor: grab;
}
.grabbing {
  cursor: grabbing;
}
.help {
  cursor: help;
}
.move {
  cursor: move;
}
.n-resize {
  cursor: n-resize;
}
.ne-resize {
  cursor: ne-resize;
}
.nesw-resize {
  cursor: nesw-resize;
}
.ns-resize {
  cursor: ns-resize;
}
.nw-resize {
  cursor: nw-resize;
}
.nwse-resize {
  cursor: nwse-resize;
}
.no-drop {
  cursor: no-drop;
}
.none {
  cursor: none;
}
.not-allowed {
  cursor: not-allowed;
}
.pointer {
  cursor: pointer;
}
.progress {
  cursor: progress;
}
.row-resize {
  cursor: row-resize;
}
.s-resize {
  cursor: s-resize;
}
.se-resize {
  cursor: se-resize;
}
.sw-resize {
  cursor: sw-resize;
}
.text {
  cursor: text;
}
.w-resize {
  cursor: w-resize;
}
.wait {
  cursor: wait;
}
.zoom-in {
  cursor: zoom-in;
}
.zoom-out {
  cursor: zoom-out;
}
```

And if those are not enough, you can get a custom image!

```css
.url {
  cursor: url('images/cursor.png'), auto;
}
```

## Browser Support

The cursor is pretty well supported! The function has been around, some mobile browsers don't go about it, but you must see this as an "extra".

![CSS Cursor support](https://caniuse.bitsofco.de/static/v1/mdn-css__properties__cursor-1598188250604.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
