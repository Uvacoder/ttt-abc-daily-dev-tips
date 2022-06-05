---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript Browser Detection'
metaTitle: 'Browser Detection with Vanilla JS [2020 Tutorial]'
metaDesc: 'Determine which browser a website visitor is using. Detect the browser with this JavaScript code examples.'
image: /images/07-07-2020.jpg
date: 2020-07-07T03:00:00.000Z
tags:
  - javascript
---

Now and then, you might want to show specific alerts based on the web browser a visitor uses.

For instance, this can be because you just made a new Chrome browser extension and want everyone on Chrome to auto-download it.

So let's look in this tutorial how to do browser detection with JavaScript.

## Non-Preferred detection method

The non-preferred method of detecting a browser type uses the user-agent. However, a lot of browsers and systems spoof this, so it's not reliable.

We won't be diving into that in this tutorial.

## JavaScript Browser Detection

So we'll be using feature detection, it validates browser-specific elements.

What feature detection looks like in code:

```js
// Opera 8.0+
const isOpera =
  (!!window.opr && !!opr.addons) ||
  !!window.opera ||
  navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
const isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]"
const isSafari =
  /constructor/i.test(window.HTMLElement) ||
  (function (p) {
    return p.toString() === '[object SafariRemoteNotification]';
  })(
    !window['safari'] ||
      (typeof safari !== 'undefined' && safari.pushNotification)
  );

// Internet Explorer 6-11
const isIE = /*@cc_on!@*/ false || !!document.documentMode;

// Edge 20+
const isEdge = !isIE && !!window.StyleMedia;

// Chrome 1 - 79
const isChrome =
  !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

// Edge (based on chromium) detection
const isEdgeChromium = isChrome && navigator.userAgent.indexOf('Edg') != -1;

// Blink engine detection
const isBlink = (isChrome || isOpera) && !!window.CSS;

let output = 'Your browser is 🎩:<br />';
output += 'isFirefox: ' + isFirefox + '<br />';
output += 'isChrome: ' + isChrome + '<br />';
output += 'isSafari: ' + isSafari + '<br />';
output += 'isOpera: ' + isOpera + '<br />';
output += 'isIE: ' + isIE + '<br />';
output += 'isEdge: ' + isEdge + '<br />';
output += 'isEdgeChromium: ' + isEdgeChromium + '<br />';
output += 'isBlink: ' + isBlink + '<br />';
document.body.innerHTML = output;
```

> Credit of this script goes to [Rob W](https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser)

### View the example Javascript code for detecting browsers on Codepen

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="VweXwLV" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript Browser Detection">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/VweXwLV">
  Vanilla JavaScript Browser Detection</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
