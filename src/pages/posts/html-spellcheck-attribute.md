---
layout: ../../layouts/Post.astro
title: 'HTML spellcheck attribute'
metaTitle: 'HTML spellcheck attribute'
metaDesc: 'Turning on a spellcheck attribute with the power of HTML'
image: /images/16-03-2021.jpg
date: 2021-03-16T03:00:00.000Z
tags:
  - html
---

Did you know HTML has a spellcheck attribute? It tells the browser if it should spellcheck an area or not.

It's as simple as adding the `spellcheck` attribute to an element.

It will look like this:

![HTML Spellcheck attribute](https://cdn.hashnode.com/res/hashnode/image/upload/v1615531240181/v4G1DaOAtN.gif)

## HTML Spellcheck attribute

We will use the [contenteditable element](https://daily-dev-tips.com/posts/did-you-know-html-elements-can-be-editable/), I'll make one with spellcheck and the other not.

```html
<p contenteditable="true" spellcheck="true">
  Did you knoww you can click me to edit my contentz?
</p>
<p contenteditable="true" spellcheck="false">
  Did you knoww you can click me to edit my contentz
</p>
```

As you can see, both paragraphs have the contenteditable tag, but one has the spellcheck true and one not.

This now allows us to have the native spellchecker on the top one.

> Note: Grammarly will still work on both!

You can have a play with the following Codepen to try it out.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="bGBzNdb" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="HTML spellcheck attribute">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/bGBzNdb">
  HTML spellcheck attribute</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Browser support

The spellcheck attribute has good support. You can see partial support in some browsers, mainly depending on which tag you use the spellcheck attribute.

![HTML spellcheck browser support](https://caniuse.bitsofco.de/image/spellcheck-attribute.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
