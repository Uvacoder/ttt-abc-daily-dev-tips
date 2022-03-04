---
layout: ../../layouts/Post.astro
title: "How to use CSS position:sticky \U0001F98E"
metaTitle: "How to use CSS position:sticky \U0001F98E"
metaDesc: 'Learn how to use and leverage CSS position:sticky'
image: /images/29-03-2020.jpg
date: 2020-03-29T02:36:00.000Z
tags:
  - css
---

How to use CSS position:sticky 🦎

Position sticky is one of those things that I genuinely enjoy in CSS. Simple, easy, but makes such a difference.

You can see a demo below; scroll down and see the first image being sticky to the left.

<p class="codepen" data-height="482" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="qBBQaoe" style="height: 482px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="How to use CSS position:sticky 🦎">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/qBBQaoe">
  How to use CSS position:sticky 🦎</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

When we scroll and usually should see the image disappearing in our demo, it will now stick to the top of that div.

## How to use position sticky in CSS?

Depending on the scroll position, a sticky element toggles states between `relative` and `fixed`. It keeps having a `relative` position until we hit a given offset, and then it acts like a `fixed` element.

We set the following properties on the element we want to behave `sticky`:

```css
position: -webkit-sticky;
position: sticky;
top: 0px;
```

This tells the element it should be sticky and stick to the top.

To show some real magic, 🎩 we included some `flex` properties. So we can have one smaller div next to the big div.

## Browser support

The `position:sticky` is widely supported, and I strongly encourage you to leverage it. One of these things adds a nice feature to your website but doesn't affect people who can't see it.

![CSS Position:sticky browser support](https://caniuse.bitsofco.de/image/css-sticky.png)

### Show me how you use it!

I would ❤️ to see how you use `position:sticky` send me a message on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1) with a link to your project.
