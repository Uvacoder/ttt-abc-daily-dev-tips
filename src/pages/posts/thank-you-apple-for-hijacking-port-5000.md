---
layout: ../../layouts/Post.astro
title: 'Thank you, Apple, for hijacking port 5000 😣'
metaTitle: 'Thank you, Apple, for hijacking port 5000 😣'
metaDesc: 'How to fix the port 5000 is already in use error in Mac OS Moneterey'
ogImage: /images/03-12-2021.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/2309ddf3-6cd5-41e6-9d99-69bab1809800
date: 2021-12-03T03:00:00.000Z
tags:
  - mac
---

You might have already upgraded to Mac OS Monterey. If not, there might be an unpleasant surprise awaiting you.

For me, it was running the following command.

```bash
npm run dev
```

And getting a message stating port 5000 is already in use...

It took me a good couple of minutes to find out no other application was using this port, and I was baffled at this point.

Surely all I did was upgrade to Monterey...

## Re-opening port 5000 on Mac OS Monterey

After doing some research, I did a portscan and noticed "AirPlay Receiver" was using this port.

That didn't sound like anything I made.
I researched to find out that the AirPlay receiver is on by default.

To re-enable port 5000, you can simply turn off this checkbox.

![AirPlay Receiver in macOS Monterey listening on port 5000](https://cdn.hashnode.com/res/hashnode/image/upload/v1637558048297/YHaewxiZ2.png)

You can find this checkbox in `Settings` > `Sharing` > `AirPlay Receiver`.

This is not a new thing. Apple has been using port 5000 for AirPlay since 2004.
The only new part is the introduction to having a Mac listening to AirPlay, which, as mentioned, uses port 5000.

If you wish to use AirPlay on your Mac, I'd suggest switching your development to a different port.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
