---
layout: ../../layouts/Post.astro
title: 'Chrome Lighthouse Report'
metaTitle: 'Chrome Lighthouse Report'
metaDesc: 'How to make our website better with Chrome Lighthouse Report'
image: /images/20-06-2020.jpg
date: 2020-06-20T03:00:00.000Z
tags:
  - chrome
---

Let's say you made your first or another website. Of course, we want to make sure we create an accessible and fast website.
We can do a basic audit with Lighthouse inside of Chrome!

We can test for the following categories in Lighthouse:

- Performance
- Progressive Web App
- Best practices
- Accessibility
- SEO

## How to Launch Lighthouse in Chrome

To open Lighthouse, we can right-click on the webpage and click the `Inspect` button.
This will open de `Developer tools`. Now click the `Lighthouse` tab.

> You can also use `View > Developer > Developer Tools

## Running a Lighthouse Audit in Chrome

We can select the categories we want to test for to run the audit and click the `generate report` button.

We then get a full report with tips on what we can improve.

The tips we get usually have links for more details on what google writes on it now (these do change).

## Tips for Making Your Site Faster

Some general tips I've learned over the years

- Compress your images [ImageOptim](https://imageoptim.com/)
- Make fewer CSS Request (Rather have one or a few stylesheets instead of multiple)
- Make fewer JavaScript request (Same as above)
- Leverage Browser Caching [GtMetrix](https://gtmetrix.com/leverage-browser-caching.html)
- Don't overdue on fonts loading (Use one/two external fonts)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
