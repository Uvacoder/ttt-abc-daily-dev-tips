---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript Copy Text to Clipboard with document.execCommand'
metaTitle: 'Vanilla JavaScript Copy Text to Clipboard with document.execCommand'
metaDesc: 'How to copy to Clipboard using Vanilla JavaScript document.execCommand'
image: /images/08-04-2020.jpg
date: 2020-04-08T03:00:00.000Z
tags:
  - javascript
---

Yesterday we saw how we can use the new and improved [Clipboard API](<(https://daily-dev-tips.com/posts/vanilla-javascript-copy-text-to-clipboard-with-clipboard-api/)>) to copy text to our clipboard.
But if we want to have some more support we need to use the old version which is `document.execCommand()`.

## How to copy text with Vanilla JavaScript document.execCommand()

```html
<input type="text" id="copy" value="VcaXAXfUxXcHywAhiWXraPPNjY9hgV" />
```

The HTML is basically the same as for the Clipboard API, only now we can only use `input` or `textareas`.

Then for the `JavaScript` part, we can do the following:

```js
document.addEventListener(
  'click',
  function (event) {
    // Only fire if the target has id copy
    if (!event.target.matches('#copy')) return;

    event.target.select();
    document.execCommand('copy');

    document.getElementById('copy-status').innerText = 'Copied to clipboard';
    setTimeout(function () {
      document.getElementById('copy-status').innerText = 'Click to copy';
    }, 1200);
  },
  false
);
```

First, we add an `eventListener` on the click event.
This one fires on ALL click events, but inside we tell it to return if the id of the target is not `copy`.

> This is called `event delegation`, more about that in another day's article

Then we programmatically select all the text in our `input` field.
Next, we run the magic command: `document.execCommand("copy");` this will copy the text into your clipboard.

Then we do some fancy magic by updating the text under it, to notify the user it has been copied. And set a timeout of 1200ms to revert is back to its old value. (This last part is optional of-course)

Feel free to play around with this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="JjdQNrb" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript Copy Text to Clipboard with Document.execCommand">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/JjdQNrb">
  Vanilla JavaScript Copy Text to Clipboard with Document.execCommand</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser support

This function is quite widely supported, more than the succesor [Clipboard API](https://daily-dev-tips.com/posts/vanilla-javascript-copy-text-to-clipboard-with-clipboard-api/).

![Document execCommand browser support](https://caniuse.bitsofco.de/image/document-execcommand.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
