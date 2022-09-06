---
layout: ../../layouts/Post.astro
title: 'Google actions recap'
metaTitle: 'Google actions recap'
metaDesc: 'A recap of my experience with building a Google action'
ogImage: /images/16-09-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/5d9bef3d-b9bf-4f45-2610-d81b0a825d00
date: 2022-09-16T03:00:00.000Z
tags:
  - google-actions
---

For those paying attention, you would have probably noticed that Google's conversational actions are already being deprecated.

A little bit unclear what the exact reasoning is, but it seems Google wants to drive more on structured data than individually made apps.

However, it was still a grand experiment to play around with and some new techniques to learn.

If you did make a Google action, you'd have till June 13, 2023, to work with them.

[Read more in Google's statement](https://developers.google.com/assistant/ca-sunset)

## The deployment of the Google action

In a previous article, we also [deployed our Google action](https://daily-dev-tips.com/posts/deploying-a-google-action/). I wanted to jump back on that and give you an update quickly.

My Action, unfortunately, got rejected.
It didn't come as a complete surprise as it was more a test than anything, but here's why.

The first reason was that I submitted the app with the wrong claims. I included an Immersive Canvas tag, but don't use any of that.

The second reason is likely more the official reason why it won't ever be accepted.
And here is what Google said:

"We don't allow Actions whose primary purpose is to drive affiliate traffic to a website or provide a webview of a website without permission from the website owner or administrator.
During the simulation of your Action, we found that the sole purpose of your Action is to drive traffic to a website."

I'm a bit surprised by the "without permission" part as it's my website, and I even verified it within the Action.
But I guess the point is you can't drive traffic to your website as its sole purpose.

All and all, I'm not sad about it. It was a fantastic experience. Maybe I'll even contact them to verify why it's not allowed to add links to your website.

## So what's next

As mentioned, it looks like Google is pushing more to structured data, so perhaps it's good to see how we can optimize the structured data on a website.

I'll probably take time to review that in some upcoming articles.

If you did manage to build a Google action with the help of these articles, please let me know, as I'd love to see what others have made.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
