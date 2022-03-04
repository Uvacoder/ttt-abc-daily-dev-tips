---
layout: ../../layouts/Post.astro
title: 'SCSS Nesting'
metaTitle: 'SCSS Nesting, how it works and why you need it'
metaDesc: 'Nesting in SCSS Explained'
image: /images/01-08-2020.jpg
date: 2020-08-01T03:00:00.000Z
tags:
  - css
---

This is, without a doubt, my favorite part of `SCSS`. Nesting is used to nest code inside each other; it's very versatile.
Meaning, in the long term, it will make you think twice about naming because it's easier to sort.

## Basic SCSS Nesting

In basic nesting can be used as follows

Let's take the following HTML

```html
<ul>
  <li>
    <a href="https://daily-dev-tips.com/" target="_blank">Daily Dev Tips</a>
  </li>
</ul>
```

We can then make some cool `SCSS` like this

```css
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    display: inline-block;
    background: #333;
    a {
      padding: 10px;
      color: #efefef;
    }
  }
}
```

This will then render in the following `CSS`

```css
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
ul li {
  display: inline-block;
  background: #333;
}
ul li a {
  padding: 10px;
  color: #efefef;
}
```

This looks like the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="ExPBRvz" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="SCSS Basic Nesting">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/ExPBRvz">
  SCSS Basic Nesting</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## SCSS Dash Nesting

Another really cool one is class nesting

```html
<div class="box">
  <div class="box-inner">
    <h1 class="box-inner-title">
      Welcome 👏
    </h1>
  </div>
</div>
```

And we can then use the following `SCSS`

```css
.box {
  background: #ebc3db;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  &-inner {
    background: #c09bd8;
    padding: 20px 40px;
    border-radius: 20px;
    &-title {
      color: #ede3e9;
      font-size: 2rem;
    }
  }
}
```

Cool right! It just makes it more easy and clear what a part of your `CSS` is for.

### SCSS Sub Nesting

We can also use sub nesting for our pseudo-selectors.

```css
.box {
  &-inner {
    &:hover {
      background: #9f84bd;
    }
  }
}
```

As you can see, these also use the & sign, and can be used for `hovers` but also `nth-child` etc.

This will result in the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="zYrVapQ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="SCSS Basic Nesting Dash">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/zYrVapQ">
  SCSS Basic Nesting Dash</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
