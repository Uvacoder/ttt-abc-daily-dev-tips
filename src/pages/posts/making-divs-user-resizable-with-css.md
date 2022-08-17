---
layout: ../../layouts/Post.astro
title: 'Making divs user resizable with CSS'
metaTitle: 'Making divs user resizable with CSS'
metaDesc: 'How to make divs resize or disable the resize on textarea'
image: /images/14-12-2020.jpg
date: 2020-12-14T03:00:00.000Z
tags:
  - css
---

This article has nothing to do with browser widths and viewport media queries.

In this article, we will be talking about the `resize` css property.

This is one property I only came across recently, because when do you actually need the user to resize something other than a textarea box.

In my article demonstrating [how the `HTML <wbr>` tag works](https://daily-dev-tips.com/posts/what-is-the-wbr-html-tag-and-why-do-i-need-it/), I used the resize property to showcase when the words would break.

You might find yourself in need of this one-day, so here we go, an example of how the CSS resize property works and what options it has.

The end result will look like the following GIF.

![CSS Resize property](https://cdn.hashnode.com/res/hashnode/image/upload/v1607494995859/AZvzsizF5.gif)

## CSS resize property

To add the option we can use the following syntax:

```css
div {
	resize: {value}
}
```

Where the value can be one of these:

- `none`: Default, user cannot resize the element
- `both`: Resize horizontal and vertical
- `horizontal`: Only resize horizontally
- `vertical`: Only resize vertically
- `initial`: Reset back to the initial value
- `inherit`: Inherit value from the parent element

To make them effective, let's create some examples:

What's really important to know is that by default, the resize code will not do anything.

This is because the default `overflow` value is visible, and that will disable the resize.

We can use any of these overflow values: `scroll`, `auto`, `hidden`.

First let's define a basic box to start with:

```css
div {
  width: 100px;
  height: 100px;
  overflow: auto;
}
```

Now let's make a pink box that can resize both ways:

```css
div.both {
  resize: both;
  background: #ef476f;
}
```

Perhaps we only want a horizontal resize? Check out the yellow box.

```css
div.horizontal {
  resize: horizontal;
  background: #ffd166;
}
```

Over even just vertical, check out the green box

```css
div.vertical {
  resize: vertical;
  background: #06d6a0;
}
```

You can see these boxes in action on the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="NWRRrRa" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Making divs user resizable with CSS">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/NWRRrRa">
  Making divs user resizable with CSS</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## CSS Removing resize attribute

There is one case where perhaps you want to remove the resize attribute, and this is with textareas.

They come with a default resize property, and we can turn this off by using the following code:

```css
textarea {
  resize: none;
}
```

You can try this out on the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="abmmZWg" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Disable resize">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/abmmZWg">
  CSS Disable resize</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
