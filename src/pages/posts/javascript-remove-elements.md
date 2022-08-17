---
layout: ../../layouts/Post.astro
title: 'JavaScript remove elements'
metaTitle: 'JavaScript remove elements'
metaDesc: 'How to remove element in JavaScript'
image: /images/22-04-2021.jpg
date: 2021-04-22T03:00:00.000Z
tags:
  - javascript
---

As we [created new elements in JavaScript](https://daily-dev-tips.com/posts/javascript-creating-a-new-element/) yesterday, I thought I'd be a good article for today to remove some aspects from the DOM.

We simply need to get them in JavaScript using any technique to remove elements.

We want to remove a div with the ID `custom_id`.

```js
const elem = document.getElementById('custom_id');
elem.remove();
```

And yes, that's how simple it is!

## Hiding elements in JavaScript

But perhaps you only want to hide it for a brief moment?
We can also modify the script to make the element invisible for a while.

```js
const hidden = document.getElementById('hidden_id');
hidden.style.display = 'none';
```

And that will make your element hidden until you make it visible again.

It can be made visible by swapping the display to block/flex/inline.

```js
const hidden = document.getElementById('hidden_id');
hidden.style.display = 'block';
```

Feel free to check this out on Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="PoWdmOP" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JavaScript remove elements">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/PoWdmOP">
  JavaScript remove elements</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
