---
layout: ../../layouts/Post.astro
title: 'A11Y 101: WAI-ARIA live'
metaTitle: 'A11Y 101: WAI-ARIA live'
metaDesc: 'What are live regions and how do they work for non visual users'
image: /images/10-06-2022.jpg
date: 2022-06-10T03:00:00.000Z
tags:
  - accessibility
---

While diving into this magical accessibility journey, we have come across the WAI-ARIA Live several times.

And every time, I've promised you to return to it as it deeps a deeper explanation.

So here we are, an introduction to ARIA live.

## The need for ARIA live

In modern-day websites and applications, we use fancy scripts and methods to reload parts of the website dynamically.
This can include updating post items on the fly, showing notifications, etc.

The possibilities are endless.

Now imagine you are a non-visual user.
How are you notified of these changes suddenly appearing on your screen?

And that's precisely where ARIA-live comes in handy. It will announce elements inside a live region.

## What are live regions?

We can denote these regions with dynamically changing content by using the `aria-live` attribute.

It's also good to note you should only opt to have one aria-live per page as it can confuse screen readers and make it unclear what's happening.

As for the value of this aria-live, we have a set of three possible values.

- `polite`: This is the default way of announcing elements. Whenever something changes, the reader will focus right after finishing what was active.
- `assertive`: This should only be used for critical or time-sensitive notifications as it abruptly changes focus from what it was focused on before to the live region.
- `off`: This is the default for any element and the equivalent of not setting aria-live.

## Roles are aria-live

There are also a couple of roles that act as aria-live when used.

- `role="log"`: Additionally you can use `aria-live="polite"` to enhance this feature.
- `role="status"`: Additionally you can use `aria-live="polite"` to enhance this feature.
- `role="alert"`: Be careful with manually adding aria-live as screen readers might read out your text twice.
- `role="marquee"`: For scrolling text
- `role="timer"`: For any countdown/clock

## Addons to live regions

There have been some additions to live regions that we can also leverage.

- `aria-atomic`: This is a boolean value to describe whether or not the whole live region changes. The default is false, and only "new" changes will be announced. Setting this to true will read out the entire live region again.
- `aria-relevant`: We can describe which types of changes we want to announce. For this, we can use `additions removals` as our options.

## Conclusion

Be minimalistic when it comes to introducing live regions. Make sure your non-visual readers only get updates they need, as this is pretty disruptive behavior.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
