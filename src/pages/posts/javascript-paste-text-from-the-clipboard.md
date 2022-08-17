---
layout: ../../layouts/Post.astro
title: 'JavaScript paste text from the clipboard'
metaTitle: 'JavaScript paste text from the clipboard'
metaDesc: 'How to paste text from the clipboard in Vanilla JavaScript'
image: /images/30-01-2022.jpg
date: 2022-01-30T03:00:00.000Z
tags:
  - javascript
---

I've made several articles on copying text to the clipboard in JavaScript with the [Clipboard API](https://daily-dev-tips.com/posts/vanilla-javascript-copy-text-to-clipboard-with-clipboard-api/), or [execCommand](https://daily-dev-tips.com/posts/vanilla-javascript-copy-text-to-clipboard-with-document-execcommand/).

But we never looked at how we could paste information from the clipboard with the click of a button.

Someone recently asked me how to do this on Twitter, so here you go, a dedicated article to pasting text in your clipboard.

## JavaScript paste text from the clipboard

The main issue with this feature is that we need permission from the browser the read this data.

So on the very first try, the user will be prompted with a popup like this.

![Read clipboard permissions](https://cdn.hashnode.com/res/hashnode/image/upload/v1642745993999/As4LqH_4S.png)

Let's take our existing clipboard demo and make the paste field interact.

In our demo, you should be able to click the top text area, which will copy the text to the clipboard.

Once the user clicks the bottom field, it should auto-paste it.

We'll first need to assign this field to a variable and attach a click handler.

```js
const paste = document.getElementById('paste');
paste.addEventListener('click', () => {
  // Do our action
});
```

Our actual paste action is super simple and looks like this:

```js
navigator.clipboard.readText().then((clipText) => (paste.innerText = clipText));
```

We use the clipboard API and invoke the `readText` function. It will give us the current value we can set on our paste field.

You can try this out on the following CodePen.

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="XWeLzMG" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/XWeLzMG">
  Vanilla JavaScript Copy Text to Clipboard with Clipboard API</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Browser support for Clipboard API

The support for the Clipboard API improved massively over the past couple of months, and all the latest versions seem to support it fully.

<picture>
<source type="image/webp" srcset="https://caniuse.bitsofco.de/static/v1/mdn-api__Clipboard-1642746361576.webp" />
<source type="image/png" srcset="https://caniuse.bitsofco.de/static/v1/mdn-api__Clipboard-1642746361576.png" />
<img src="https://caniuse.bitsofco.de/static/v1/mdn-api__Clipboard-1642746361576.jpg" alt="Data on support for the mdn-api__Clipboard feature across the major browsers from caniuse.com" />
</picture>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
