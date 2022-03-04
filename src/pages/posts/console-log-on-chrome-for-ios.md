---
layout: ../../layouts/Post.astro
title: 'Console.log on Chrome for iOS'
metaTitle: 'How to see a console log in Chrome for iOS? | Tutorial'
metaDesc: 'Learn how to view any console.log directly on your iOS mobile device using Chrome browser.'
image: /images/11-02-2021.jpg
date: 2021-02-11T03:00:00.000Z
tags:
  - chrome
---

Did you know it's possible to see console.logs on Chrome for iOS?

I was astonished at first, but it can be really helpful to debug console.logs you placed directly from a mobile iOS device.

Of course, you already can debug iOS on Safari, but Safari has its own rendering and might behave differently. The Chrome team decided to build in a logger for all tabs even!

How it works:

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/chrome-ios_zmwyqh.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/chrome-ios_afqouj.mp4" type="video/mp4" />
</video>

## Chrome for iOS Console Log

To enable the feature, open Chrome on your mobile device and type the following URL:

```bash
chrome://inspect
```

This will open up a tab looking like this. You can then tap the "start logging" button.

![Chrome inspect tab on iOS](https://cdn.hashnode.com/res/hashnode/image/upload/v1612624974716/gjdFmdlV4.png)

> Note: The site is not responsive. That's why it looks so tiny.

It's important not to remove this tab, so open a new tab with the website you want to inspect for console logs.

In my example, I use a Codepen, which always just retunrns one console.log.

The results will look like this:

![Chrome console.log on iOS result](https://cdn.hashnode.com/res/hashnode/image/upload/v1612625017613/mtdHjv8vF.png)

And there you go, a super simple but effective way to console.log in Chrome on your iOS phone or iPad.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
