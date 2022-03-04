---
layout: ../../layouts/Post.astro
title: 'CSS Toggle grid or List view'
metaTitle: 'CSS Grid/List view Toggle Tutorial [2022]'
metaDesc: 'Learn in this guide how to create a CSS layout that switches easily between list and grid view. See the code examples in the Codepen!'
image: /images/07-05-2020.jpg
date: 2020-05-07T03:00:00.000Z
tags:
  - css
---

Today we are doing a very cool project. We will create a list of items and add two buttons.
One button for see a **list view** and another button to switch to **grid view**.

This project mainly relies on `CSS`. But we are using `JavaScript` to toggle a class on the main wrapper element.

We are going to use `CSS` `Flexbox` and `Grid` to make this work!

Let's get started!

## HTML Structure

```html
<div class="container">
  <div class="buttons">
    <div class="list"><i class="fa fa-list"></i></div>
    <div class="grid"><i class="fa fa-th-large"></i></div>
  </div>
  <div class="wrapper" id="wrapper">
    <div class="col">Column #1</div>
    <div class="col">Column #2</div>
    <div class="col">Column #3</div>
    <div class="col">Column #4</div>
  </div>
</div>
```

So this is our minimal setup.
We have one big container in which we center everything like we learned with [flex centering](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/).
We then have a button div which holds the two buttons and then our wrapper which is the actual item list.
In the list we have **four columns**.

```css
.buttons {
  display: flex;
}
.buttons div {
  margin: 0px 10px;
  color: #fffffa;
  cursor: pointer;
}
.buttons div > * {
  pointer-events: none;
}
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
}
.wrapper.list {
  grid-template-columns: 1fr;
}
.wrapper .col {
  width: calc(100% - 20px);
  height: 200px;
  background: #912f40;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fffffa;
  margin: 10px;
}
```

So let's go through the CSS code in more depth and explore what's happening:

```css
.buttons {
  display: flex;
}
.buttons div {
  margin: 0px 10px;
  color: #fffffa;
  cursor: pointer;
}
.buttons div > * {
  pointer-events: none;
}
```

Our buttons we simply wrap in a `flex` container and each div inside we give some margin to space out.
We also add a `cursor: pointer` which will make it look like a button.
And then each element inside we set `pointer-events: none` so `JavaScript` will not fire on the children.

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
}
.wrapper.list {
  grid-template-columns: 1fr;
}
```

For the main part of this project we tell the wrapper to `display: grid` and then we define our grid template as: `1fr 1fr` which means it will have **two columns**.
That's as easy as CSS Grid` is!

Then if it has the `.list` class we tell it the template is `1fr`, which is only **one column**.

## Switch between one and multiple columns with JavaScript

So to make the switch between the grid and column view, we leverage pure `JavaScript`.
We are adding [`eventListeners`](https://daily-dev-tips.com/posts/vanilla-javascript-event-listener-on-multiple-elements/) on our buttons and [add or remove the `list` class](https://daily-dev-tips.com/posts/vanilla-javascript-classlist/) from our wrapper element.

So with this code you add or remove the class from the wrapper element. Therefore you can switch between the multi-column view (grid) to the list view.

### See the code example in this Codepen

Have a look at the JavaScript code and play with it here:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="qBOpEyW" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Grid-List view toggle">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/qBOpEyW">
  CSS Grid-List view toggle</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
