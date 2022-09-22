---
layout: ../../layouts/Post.astro
title: 'How to use the shy soft hyphen in HTML'
metaTitle: 'Using the shy soft hyphen in HTML | Tutorial'
metaDesc: 'What is the shy entity in HTML and how can it help us? Lets learn how to create a soft hypen.'
image: /images/16-12-2020.jpg
date: 2020-12-16T03:00:00.000Z
tags:
  - html
---

The other day I created a cool example using the [`<wbr>` HTML tag](https://daily-dev-tips.com/posts/what-is-the-wbr-html-tag-and-why-do-i-need-it/). And although its a very cool tag on its own, there might be a better solution:

We can use `&shy`. It is a **soft hyphen** in HTML.

It means it will add a `-` if the word is too long. Else it will just render the word as is.

I'll be using my `<wbr>` demo to add the soft hyphen as an option.

![shy HTML](https://cdn.hashnode.com/res/hashnode/image/upload/v1607712051641/m-uhc5KlC.png)

## How the &shy; works

You can place the &shy; in a word or in places where you want it to enter a soft hyphen when the word is too long for its container:

```html
super&shy;long&shy;word&shy;that&shy;needs&shy;to&shy;break&shy;better
```

As you can see, the implementation is the same as we saw with `<wbr>`; however, this is not an HTML element but an **entity**.

## Demo

In the following Codepen, I demonstrate three methods:

- `shy`: using the `&shy;` in the word
- `wbr`: using the `<wbr>` in the word
- `css`: using word-break in css.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="OJRbrWz" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Using the shy soft hyphen">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/OJRbrWz">
  Using the shy soft hyphen</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
