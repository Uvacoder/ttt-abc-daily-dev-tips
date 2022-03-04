---
layout: ../../layouts/Post.astro
title: 'Detect Adblockers'
metaTitle: 'Detect Adblockers'
metaDesc: 'How can we detect adblockers?'
image: /images/22-07-2020.jpg
date: 2020-07-22T03:00:00.000Z
tags:
  - html
  - javascript
---

Today I needed a way to detect an adblocker.
You might think why? In this case, I wanted to verify some user data with an external system, but adblockers will block this call (mainly ghostery).

So I tried and research ways to detect adblockers!

When doing my research, I came across several ways of which some in theory work, but not for all browsers/adblockers. Let me walk you through the options we have.

## JavaScript onError callback

This method, I only found late in the game and is the solution I went for.
I like the simplicity, and it worked for by far the most combinations I tried!

So in the `HTML` we add the following:

```html
<!-- Fake js script to inject, adblockers will block this script load -->
<script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
  onerror="adBlockFunction();"
></script>
```

The idea is this script will be blocked by adblockers and if it does it will run the `adBlockFunction`.

So the function:

```js
const adblocker = document.getElementById('adblock-message');
adblocker.style.display = 'block';
```

Then we can have a simple adblocker div which is hidden by default.

```html
<div id="adblock-message" class="hidden">Sorry, you have your adblocker on!</div>
```

As mentioned, this way works for most combination of browsers/adblockers.

## Alternative JavaScript method

Another way, you'll come across quite a lot if defining a `JavaScript` file like this:

```html
<script src="/js/ads.js"></script>
```

inside:

```js
let canRunAds = true;
```

And then have a `JavaScript` as such:

```js
if (window.canRunAds === undefined) {
  const adblocker = document.getElementById('adblock-message');
  adblocker.style.display = 'block';
}
```

This is almost the same as solution one, but I found that it doesn't work with Adblock in the latest Chrome.

## CSS Height

Another way, is by using a fixed "ad" in your html:

```html
<div
  id="detect"
  class="ads ad adsbox doubleclick ad-placement carbon-ads"
  style="background-color:red;height:300px;width:300px;position: absolute;left:0;top:0;"
>
  &nbsp;
</div>
```

This should be blocked by adblockers so if we then go and check for the height, it shouldn't work:

```js
const testAd = document.getElementById('detect');
window.setTimeout(function() {
  if (testAd.offsetHeight === 0) {
    const adblocker = document.getElementById('adblock-message');
    adblocker.style.display = 'block';
  }
  testAd.remove();
}, 100);
```

As mentioned very cool solution, but not rock solid!

Try them all on Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="Yzwdgwo" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Detect Adblockers">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/Yzwdgwo">
  Detect Adblockers</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Other ways?

Let me know if you know of any other ways, without using any plugin!

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
