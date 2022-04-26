---
layout: ../../layouts/Post.astro
title: 'Firefox dev tools - Animations'
metaTitle: 'Firefox dev tools - Animations'
metaDesc: 'Firefox now comes with a animation debug tool, super powerful and handy!'
image: /images/01-01-2021.jpg
date: 2021-01-01T03:00:00.000Z
tags:
  - developer
  - firefox
---

First of all, HAPPY NEW YEAR!

![Happy new year!](https://media.giphy.com/media/xUySTMO8XWIRjp0w4o/giphy.gif)

It's been such a crazy year for this 2020 thing...
I can't even believe it's finally done, but I have a feeling this mayhem is not done.

So let's start the year on a positive note. I found another cool thing in Firefox dev tools, the animation debugger.

It's amazing! It can modify, debug, and timeframe animations.

The tool looks like this:

![Firefox animation](https://cdn.hashnode.com/res/hashnode/image/upload/v1609077361340/jW_mXV46n.gif)

## Firefox animation debug tool

To find the animation tool we have to open the developer tools:

- **Mac**: `Shift` + `⌘` + `J`
- **Windows/Linux**: `Shift` + `CTRL` + `J`

Then we can inspect an element on the page that has an animation. And open the Animation tab.

![Firefox animation debug tool](https://cdn.hashnode.com/res/hashnode/image/upload/v1609076786462/_HdJDoOVQ.png)

On the left, you see the animation in the Keyframe animation. In my case, it converts a square to a round div in three steps.

You can use the keyframe section to make modifications to each keyframe.

![Firefox keyframe convert](https://cdn.hashnode.com/res/hashnode/image/upload/v1609076985484/9oTR_s2kO.png)

Then on the right, you will see how long the whole animation takes in the purple bar, in my case, 2000ms (2s).

![Firefox timeline](https://cdn.hashnode.com/res/hashnode/image/upload/v1609076953941/LC7DiDyI5.png)

And in the bottom bit, we see the animation flow. I use an ease-in-out, so it's a smooth line.

![Firefox animation timeline](https://cdn.hashnode.com/res/hashnode/image/upload/v1609077144650/72aiX7Cj_.png)

Then on top, we can control the animation to debug it. We can go back to step 0, pause/play, and set the speed.

All and all, it's a super helpful tool to debug and work on your animations.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
