---
layout: ../../layouts/Post.astro
title: 'Performance heads-up display in Chrome'
metaTitle: 'Performance heads-up display in Chrome'
metaDesc: 'A super cool performance heads-up display HUD in Chrome'
image: /images/29-06-2021.jpg
date: 2021-06-29T03:00:00.000Z
tags:
  - chrome
---

As you may have noted, I'm busy with the performance on this website lately as we just talked about [optimizing animated content](https://daily-dev-tips.com/posts/moving-from-gif-to-video-format/), and [improving our lighthouse score](https://daily-dev-tips.com/posts/keep-improving-your-lighthouse-score/).

And with that, I found a super cool feature in Chrome, a so-called Performance Heads-up Display (HUD) baked in the core of Chrome!

![Performance heads-up display in Chrome](https://cdn.hashnode.com/res/hashnode/image/upload/v1624544268299/qX5qR5qua.png)

This used to be an extension that you could add to Chrome, but it's now inside Chrome.
The display shows very useful information that you know from Lighthouse.

Including:

- Largest Contentful Paint
- First Input Delay
- Cumulative Layout Shift
- Average Dropped Frame
- Max Dropped Frame
- 95th Percentile DF

## Enable the performance heads-up display in Chrome

Of course, you are now wondering how to enable this, right?

1. Type `about:flag` in your chrome browser
2. Search for `Show performance metrics in HUD`
3. enable it and relaunch Chrome

These steps make it available in the top right corner.

![Enable Performance HUD in Chrome](https://cdn.hashnode.com/res/hashnode/image/upload/v1624544153380/YHHmpAwNZ.png)

This is super useful when doing many performance upgrades that you want to check right away, without waiting for Lighthouse to render.

The feature is also coming to mobile, but it doesn't seem to be in Chrome for iOS yet.

I am looking forward to also having the display there.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
