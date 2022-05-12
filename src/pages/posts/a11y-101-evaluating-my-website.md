---
layout: ../../layouts/Post.astro
title: 'A11Y 101: Evaluating my website'
metaTitle: 'A11Y 101: Evaluating my website'
metaDesc: 'Finding accessibility issues on my own website, together with Abbey Perini'
image: /images/22-05-2022.jpg
date: 2022-05-22T03:00:00.000Z
tags:
  - accessibility
---

I started this whole journey to improve my website.
As I had no idea where to start, I started by reading up on some articles.

This quickly drew me to [Abbey's articles on Dev.to](https://dev.to/abbeyperini/series/15625).

In this specific series, Abbey is doing the same as I wanted.
So I decided to ask her if she could help me out (after reading the complete series).

## Meeting Abbey

While chatting with Abbey, I asked her if she would be interested in guiding me through such an accessibility audit via a live session.

This makes an excellent resource for everyone else to use and get some insights into where to start.

Without further ado, my livestream with Abbey:

<iframe width="560" height="315" src="https://www.youtube.com/embed/8kXO9_ptvIQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Results of the audit

During the audit, we look at which tools we can use and start exploring what kind of things we can quickly find on my website.

Since I completely rebuilt it recently and tried to follow semantic HTML as much as possible, the start is already pretty good.

However, we identified a couple of things:

- double focus stop on the articles (image and the title)
- color contrast is not perfect
- the document is missing the main landmark
- the summary element is not valid for an article
- nav elements are unidentified
- form element is not compliant
- no skip to content available

This might sound like a lot, but it's not too bad.
Most of these issues were found by combining the tools we used in the video.

I've written this document on [helpful accessibility tools](https://daily-dev-tips.com/posts/a11y-101-evaluation-tools/) you can use.

It's good to note that most of these issues were global and occurred on detail pages.

In the following article, I'll go through them and what needs to be done to fix them.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
