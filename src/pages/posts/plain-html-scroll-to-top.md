---
layout: ../../layouts/Post.astro
title: 'Plain HTML Scroll to Top'
metaTitle: 'Plain HTML Scroll to Top'
metaDesc: 'Revisiting the scroll to top in HTML'
image: /images/15-06-2020.jpg
date: 2020-06-15T03:00:00.000Z
tags:
  - html
---

The other day, I posted a [`JavaScript` Scroll to Top](https://daily-dev-tips.com/posts/vanilla-javascript-scroll-to-top/) function that is very cool. As mentioned, there are so many ways of doing a particular action.

On this specific post, I got a lot of comments; you can do the same in just plain `HTML`. This is true! And I thought it would be great to write an article about this.

## HTML Structure

```html
<div id="top"></div>
<a href="#top" class="scroll scroll-top">☝️</a>
<a href="#bottom" class="scroll scroll-bottom">👇</a>
<div class="content">All the content...</div>
<div id="bottom"></div>
```

So the things to mark are the divs with specific IDs. We just made two empty divs, but we can even use existing divs!

Then we create two links with a `href` to `#top` (id="top") and `#bottom` (id="bottom")

This will automatically scroll to the specific ID once clicked on!

To make it smooth, we can add the following `CSS`.

```css
html {
  scroll-behavior: smooth;
}
```

It can be as easy as this, with many ways leading to the same solution. It all depends on what you prefer or need.

See it in action on this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="gOPMBVa" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Plain HTML Scroll to Top">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/gOPMBVa">
  Plain HTML Scroll to Top</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
