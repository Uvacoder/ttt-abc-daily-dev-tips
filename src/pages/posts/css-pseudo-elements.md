---
layout: ../../layouts/Post.astro
title: 'CSS Pseudo-elements'
metaTitle: 'CSS Pseudo-elements'
metaDesc: 'Lets check out all the CSS pseudo-elements'
image: /images/25-04-2020.jpg
date: 2020-04-25T03:00:00.000Z
tags:
  - css
---

Yesterday we briefly touched on `pseudo-elements` when creating our [custom checkbox](https://daily-dev-tips.com/posts/css-custom-checkbox/)

But let's dive deeper into these awesome features of `CSS`.
`Pseudo-elements` allow you to create/manipulate an original element. Without affecting that one.

They can be used to style a specific part of an element, like the first letter or add content before or after!

> Pseudo-elements always start with `::`!

## First-line pseudo-element

With the `first-line` `pseudo-element`, we can manipulate the view of the first line of a specific element.

See the following example:

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
  mollit anim id est laborum.
</p>
```

```css
p::first-line {
  color: #ff0000;
  font-variant: small-caps;
}
```

This will result into the following:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="oNjYJPO" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="First-line pseudo-element">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/oNjYJPO">
  First-line pseudo-element</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## First-letter pseudo-element

Much like the above one this one is used to style a part of an element, but in this case only the first letter.

The html we can re-use

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
  mollit anim id est laborum.
</p>
```

```css
p::first-letter {
  color: teal;
  font-family: Verdana;
  font-size: 36px;
  display: inline-block;
  float: left;
  padding-right: 5px;
}
```

You will get this result:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="oNjYJaO" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="First-letter pseudo-element">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/oNjYJaO">
  First-letter pseudo-element</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Before pseudo-element

The before `pseudo-element` we saw in action yesterday when we created [custom checkboxes](https://daily-dev-tips.com/posts/css-custom-checkbox/).
It can we used in many ways though!

```html
<a href="https://daily-dev-tips.com">Daily Dev Tips</a>
<br />
<a href="https://twitter.com/DailyDevTips1">Twitter</a>
```

```css
a::before {
  content: '⚓️';
}
```

So let's say we want to add an anchor icon to every one of our links, it's just as easy as this!

Check out this Codepen example:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="RwWoEvN" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Before pseudo-element">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/RwWoEvN">
  Before pseudo-element</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

> Note: The before and after `pseudo-elements` always need content to render!

## After pseudo-element

The after is basically used in the same way as the before but will place the content after the element.

```html
<a href="https://daily-dev-tips.com">Daily Dev Tips</a>
<br />
<a href="https://twitter.com/DailyDevTips1">Twitter</a>
```

```css
a::after {
  content: ' (Read more)';
}
```

This will generate the following:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="BaoQvEL" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="After pseudo-element">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/BaoQvEL">
  After pseudo-element</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Selection pseudo-element

Another cool one is the selection `pseudo-element`. It will trigger when someone selects text.

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
  mollit anim id est laborum.
</p>
```

```css
p::selection {
  background: teal;
  color: #fff;
}
```

Now try and select a piece of this text; it should show a teal background with white text!

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="WNQoLBO" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Selection pseudo-element">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/WNQoLBO">
  Selection pseudo-element</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## CSS Pseudo-elements summary

To summarise,
`Pseudo-elements` are used to modify a part of an element, always start with `::` and we can use the following `pseudo-elements`:

- ::first-line
- ::first-letter
- ::before
- ::after
- ::selection

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
