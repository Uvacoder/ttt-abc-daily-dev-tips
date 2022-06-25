---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript Copy Text with the Clipboard API'
metaTitle: 'Vanilla JS Copy to Clipboard [Tutorial 2020]'
metaDesc: 'How to copy to clipboard using the Vanilla JavaScript Clipboard API. See code examples with explanations to try yourself.'
image: /images/07-04-2020.jpg
date: 2020-04-07T03:00:00.000Z
tags:
  - javascript
---

You have probably seen **copy-to-clipboard** buttons in many web apps: They are handy to copy data and deliver a great user experience at the same time.

You just have to click the button and then it copies the text to the clipboard with simple Vanilla Javascript.

Such buttons are pretty easy to make - see here how!

## How to copy to clipboard with Vanilla JavaScript's Clipboard API

```html
<input type="text" id="copy" value="VcaXAXfUxXcHywAhiWXraPPNjY9hgV" />
```

All we really need is an `input` or `textarea` or plain element to copy text from.

Then, for the `JavaScript` part, we can use the clipboard API as follows:

```js
document.addEventListener(
  'click',
  function (event) {
    // Only fire if the target has id copy
    if (!event.target.matches('#copy')) return;

    if (!navigator.clipboard) {
      // Clipboard API not available
      return;
    }
    const text = event.target.value;
    try {
      navigator.clipboard.writeText(text);
      document.getElementById('copy-status').innerText = 'Copied to clipboard';
      setTimeout(function () {
        document.getElementById('copy-status').innerText = 'Click to copy';
      }, 1200);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  },
  false
);
```

First, we add an `eventListener` on the click event.
This one fires on ALL click events, but inside we tell it to return if the id of the target is not `copy`.

> This is called `event delegation`, more about that in another day's article

Then we check if we have access to `navigator.clipboard` to use the **Clipboard API**. It's a relatively new option and a successor of the [`document.execCommand()` function](https://daily-dev-tips.com/posts/vanilla-javascript-copy-text-to-clipboard-with-document-execcommand/).

If we do have access, the get the specific text, in this case, we use `event.target.value` since we are copying from an input field.

We then wrap the actual function inside a `try...catch` in case this might still fail.

We call the function: `navigator.clipboard.writeText(text);` which will actually add the text variable to our clipboard.

Then we do some fancy magic by updating the text under it, to notify the user it has been copied. And set a timeout of 1200ms to revert is back to its old value. (This last part is optional of-course)

### Copy text to clipboard Live demo

Feel free to play around with this example on Codepen:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="ZEGdKOg" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript Copy Text to Clipboard with Clipboard API">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/ZEGdKOg">
  Vanilla JavaScript Copy Text to Clipboard with Clipboard API</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser support for Clipboard API

The support for the Clipboard API improved massively over the past couple of months and all latest versions seem to fully support it.

<picture>
<source type="image/webp" srcset="https://caniuse.bitsofco.de/static/v1/mdn-api__Clipboard-1642746361576.webp" />
<source type="image/png" srcset="https://caniuse.bitsofco.de/static/v1/mdn-api__Clipboard-1642746361576.png" />
<img src="https://caniuse.bitsofco.de/static/v1/mdn-api__Clipboard-1642746361576.jpg" alt="Data on support for the mdn-api__Clipboard feature across the major browsers from caniuse.com" />
</picture>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
