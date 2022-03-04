---
layout: ../../layouts/Post.astro
title: 'CSS Shorthand Properties'
metaTitle: 'CSS Shorthand Properties'
metaDesc: 'Lets see how we can leverage CSS Shorthand functions'
image: /images/25-05-2020.jpg
date: 2020-05-25T03:00:00.000Z
tags:
  - css
---

Today we are going to look into `CSS` shorthand properties.
These are quick one-lines instead of writing multiple lines of `CSS` that do the same thing.

## CSS Background shorthand

So let's start with the background property, we can write code like this:

```css
.background {
  background-color: #efefef;
  background-image: url(https://images.unsplash.com/photo-1590005024862-6b67679a29fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=979&q=80);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
```

Or we can write the shorthand as follows to do the exact same:

```css
.background {
  background: #efefef
    url('https://images.unsplash.com/photo-1590005024862-6b67679a29fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=979&q=80')
    no-repeat fixed center;
}
```

As you can see, this is way fewer lines of `CSS`.

The order of the shorthand is: `background: background-color | background-image | background-repeat | background-attachment | background-position`.

## CSS Font shorthand

We can also use the shorthand for `Fonts`, so the following:

```css
.font {
  font-style: italic;
  font-variant: small-caps;
  font-weight: bold;
  font-size: 2.5rem;
  line-height: normal;
  font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
}
```

We can make into a shorthand like:

```css
.font {
  font: italic small-caps bold 2.5rem / normal Roboto, 'Helvetica Neue', Arial, sans-serif;
}
```

The order for the font shorthand: `font: font-style | font-variant | font-weight | font-size | line-height | font-family`.

## CSS Margin/Padding shorthand

The shorthand is very similar for margin and padding, and you probably have used these before.
We can turn this:

```css
.margin {
  margin-top: 5px;
  margin-right: 10px;
  margin-bottom: 5px;
  margin-left: 10px;
}
.padding {
  padding-top: 2px;
  padding-right: 4px;
  padding-bottom: 2px;
  padding-left: 4px;
}
```

Into this:

```css
.margin {
  margin: 5px 10px;
}
.padding {
  padding: 2px 4px 2px 4px;
}
```

There are two shorthand functions here:

`margin: margin-top | margin-right | margin-bottom | margin-left -- padding: padding-top | padding-right | padding-bottom | padding-left`.

Or like so:

`margin: horizontal | vertical -- padding: horizontal | vertical`.

## CSS Border Shorthand

We can turn this:

```css
.border {
  border-width: 5px;
  border-style: solid;
  border-color: green;
}
```

Into this:

```css
.border {
  border: 5px solid green;
}
```

The border one we can also use for just one side as such:

```css
.border-left {
  border-left: 5px dashed red;
}
```

The shorthand for borders is: `border: border-width | border-style | color`.

See this in action on Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="ZEbPqQo" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Shorthand Properties">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/ZEbPqQo">
  CSS Shorthand Properties</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
