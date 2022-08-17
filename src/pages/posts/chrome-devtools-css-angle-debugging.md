---
layout: ../../layouts/Post.astro
title: 'Chrome DevTools: CSS Angle debugging'
metaTitle: 'Chrome DevTools: CSS Angle debugging'
metaDesc: 'Chrome version 88 comes packed with a cool new angle debugging tool'
image: /images/28-01-2021.jpg
date: 2021-01-28T03:00:00.000Z
tags:
  - chrome
---

Chrome added a new cool feature to Dev Tools in version 88.

It's a CSS Angle visualization tool and can be used to debug angles better visually.

Angles can be found in gradients and transforms, for instance.

How it works:

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/angle_wnj8yq.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/angle_rxq3jn.mp4" type="video/mp4" />
</video>

## Using the Chrome DevTools CSS Angle

First, we need to open the Chrome Dev Tools.

> Mac `Cmd` + `Shift` + `C` or Windows: `Ctrl` + `Shift` + `C`.

Now we can go to the `Elements` inspector and click the element we need.

Then in the `Styles` section, you will see these newly added gauges.

![CSS Angle Gauge in Chrome DevTools](https://cdn.hashnode.com/res/hashnode/image/upload/v1611389113241/qZIHYuwxz.png)

As mentioned, it is an angle tool, so it can debug a transform that will look like this:

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/angle-t_tnzibw.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/angle-t_kawycc.mp4" type="video/mp4" />
</video>

Or you can use it to rotate a gradient you have on a specific element that looks like this:

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/angle-3_b8r587.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/angle-3_ppusrl.mp4" type="video/mp4" />
</video>

If you want to have a play around, feel free to use this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="RwGmQBQ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Chrome DevTools: CSS Angle debugging">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/RwGmQBQ">
  Chrome DevTools: CSS Angle debugging</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
