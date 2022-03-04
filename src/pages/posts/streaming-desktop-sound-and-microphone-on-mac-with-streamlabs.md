---
layout: ../../layouts/Post.astro
title: "Streaming desktop sound and microphone on Mac with Streamlabs"
metaTitle: "Streaming desktop sound and microphone on Mac with Streamlabs"
metaDesc: 'How to stream desktop sound and a microphone with Streamlabs on Twitch'
image: /images/25-11-2021.jpg
date: 2021-11-25T03:00:00.000Z
tags:
  - mac
---
It's a bit different from my regular development-related tips, but it might help some content creators out there.

While I was building the V2 version of my website, I decided to do some live streaming on Twitch, and I wanted a way to have some background music so people could enjoy that.

Doing some googling shows you quickly that it's not natively supported on Mac to balance system-level audio routing.
So we need some help!

But don't worry, this article will guide you through this process.

Prerequisite:
- [Streamlabs installed](https://streamlabs.com/)

## Install BlackHole

Mac does not have a system virtual audio driver, unlike Windows, so we need some help from a third party.

After doing some research, BlackHole seems to be the best in the field, and after using it, I can confirm it's super easy!

Download the installer from the [BlackHole GitHub page](https://github.com/ExistentialAudio/BlackHole)

If you are unsure which installer you need, pick the 2ch one.

Follow the install instructions as a provider in the installer program.

## Set up your Multi-Output device

Once we have BlackHole installed, we can set up our new Multi-Output device.

This new virtual device will literally output two audio sources, as the name suggests.

To set up new audio sources, open up the "Audio MIDI Setup" app. The quickest way is to use the Spotlight search.

Click on the plus at the left bottom of the app, and select "Create Multi-Output device".

![Setup multi audio device](https://cdn.hashnode.com/res/hashnode/image/upload/v1636871076243/TTw0kaPMq.png)

Now select the first default output, which is either your headset or the MacBook speaker.
As the second one, choose the "BlackHole 2ch".

> Note: Make sure the BlackHole is the second one!

Now you can either use your menu bar or right-click the source in this app to select it as the output device.

![Change output device](https://cdn.hashnode.com/res/hashnode/image/upload/v1636871246343/kxbMqy90v.png)

It should now show the speaker icon playing on this channel.

## Allowing the desktop sound as output in Streamlabs

Right, now we need to change Streamlabs to allow the audio to be output correctly.

Open up Streamlabs and visit the settings menu.

Click the audio menu, and set a second Mic/Auxiliary device to the BlackHole 2ch.

![Screenshot 2021-11-14 at 08.30.30.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1636871451313/db8Enf6co.png)

Now your stream will be capturing your microphone input, as well as the desktop output.

You can hear a demo on this Twitch stream I did, wherein in the background, you should hear some soft LoFI beats.

[Example video](https://www.youtube.com/watch?v=7fCEenL3kHU)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
