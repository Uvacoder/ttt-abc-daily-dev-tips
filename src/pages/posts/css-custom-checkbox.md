---
layout: ../../layouts/Post.astro
title: 'CSS Custom Checkbox ✅'
metaTitle: 'CSS Custom Checkbox ✅'
metaDesc: 'Cool, CSS Custom checkboxes!'
image: /images/24-04-2020.jpg
date: 2020-04-24T03:00:00.000Z
tags:
  - css
---

Have you ever wondered how people get the most awesome checkboxes with custom styling?

It's one of these things that are pretty hard to wrap your head around, but every developer should know.

Let me guide you into making your custom checkboxes.

## HTML Structure

```html
<div class="container">
  <div class="checkbox">
    <input type="checkbox" id="checkbox_1" />
    <label for="checkbox_1">Pretty checkbox</label>
  </div>
</div>
```

To create a custom checkbox we are leveraging [`pseudo-elements`](https://daily-dev-tips.com/posts/css-pseudo-elements/) basically we can add different states to one element.

So we are using a container to center the checkbox.
Then we create a checkbox div (just to identify we are only changing checkbox inside this div).
And add our checkbox and label like you would normally do.

> Note the label says `for` this must match the `id` on the checkbox.

## CSS Structure for custom checkboxes

```css
.checkbox input[type='checkbox'] {
  opacity: 0;
  position: absolute;
  width: 0px;
  height: 0px;
  z-index: -1;
}
.checkbox label {
  position: relative;
  display: inline-block;
  padding-left: 22px;
  cursor: pointer;
}
.checkbox label::before,
.checkbox label::after {
  position: absolute;
  left: 0;
  top: 0;
}
.checkbox label::before {
  content: '';
  display: inline-block;
  height: 16px;
  width: 16px;
  border: 1px solid;
}
.checkbox label::after {
  content: none;
  height: 5px;
  width: 9px;
  border-left: 2px solid;
  border-bottom: 2px solid;
  transform: rotate(-45deg);
  left: 4px;
  top: 4px;
}
.checkbox input[type='checkbox']:checked + label::after {
  content: '';
}
```

If you want to learn how we centered the container read about [the most easy center method](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/).

```css
.checkbox input[type='checkbox'] {
  opacity: 0;
  position: absolute;
  width: 0px;
  height: 0px;
  z-index: -1;
}
```

We make the checkbox inside our div opacity 0, this will hide it from the user since we won't be using it.
And as mentioned by `svondervoort` in the comments we make the input absolute positioned so it doesn't take up any space.
We then set the width and height to 0 and the `z-index: -1` to hide it even more.

```css
.checkbox label {
  position: relative;
  display: inline-block;
  padding-left: 22px;
  cursor: pointer;
}
```

Then the label is where the magic is going to happen, where we will add the [`pseudo-element`](https://daily-dev-tips.com/posts/css-pseudo-elements/) on.
We say it must be a `relative` item (since the pseudo's will be absolute) and give it a `padding-left` of 22px (this will offset for the absolute checkbox)
Lastly we add a `cursor: pointer;` because it is more obvious to the user they can click it.

```css
.checkbox label::before {
  content: '';
  display: inline-block;
  height: 16px;
  width: 16px;
  border: 1px solid;
}
```

Here we have our first [`pseudo-element`](https://daily-dev-tips.com/posts/css-pseudo-elements/) as you can see we want to add a new element `before` our label.

> When using [`pseudo-elements`](https://daily-dev-tips.com/posts/css-pseudo-elements/) they only show if you give them content! (This is how we hide the checkmark

Then we give it a width and height and border and we have the outline for our new checkbox.

```css
.checkbox label::before,
.checkbox label::after {
  position: absolute;
  left: 0;
  top: 0;
}
```

We set the before and after element to be absolute and start at position 0 from left and top.

```css
.checkbox label::after {
  content: none;
  height: 5px;
  width: 9px;
  border-left: 2px solid;
  border-bottom: 2px solid;
  transform: rotate(-45deg);
  left: 4px;
  top: 4px;
}
```

The after [`pseudo-element`](https://daily-dev-tips.com/posts/css-pseudo-elements/) is going to be the checkmark icon.
We make it with css by using border graphics.
And position it 4px from the top and left to center it in our checkbox holder.

You can see this code in action on the following Codepen:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="yLYVQwO" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Custom Checkbox">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/yLYVQwO">
  CSS Custom Checkbox</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
