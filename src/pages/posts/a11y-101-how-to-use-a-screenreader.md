---
layout: ../../layouts/Post.astro
title: 'A11Y 101: How to use a screenreader'
metaTitle: 'A11Y 101: How to use a screenreader'
metaDesc: 'What are screenreaders and how can I use one.'
image: /images/20-05-2022.jpg
date: 2022-05-20T03:00:00.000Z
tags:
  - accessibility
---

When it comes to accessibility, one of the most tricky but highly used tools is a screenreader.

Screen readers are tools that can be used by visually impaired people. It could be people who are blind or need assistance in navigating a website.

You might wonder, but how many people actually use these screenreaders?
In the USA, around 1:30, people over 40 actually use them!

## What is a screenreader

A screenreader is basically a tool that helps you navigate and view a website by speaking out about what it sees.

Because of how screen readers work, it's essential to try and make this experience spot on.

The readers typically start by reading links and focus highly on following semantic HTML structure, so make sure this is set up correctly.

We'll dive a bit deeper into fixing elements for a screenreader specific.

There are quite a few choices for screenreaders. I'll be looking at the three most common ones.

## MacOSX VoiceOver

You might have accidentally opened this on a Mac, and the computer started speaking to you.

VoiceOver is not just a web screenreader but can help you navigate your computer in total.

To open VoiceOver on your Mac, you should type `Command` + `F5` or press the Touch ID three times if you have the Touch Bar Mac.

Your Mac will now announce it's active.

Once it's turned on, the default modifier key is `control` + `option`, often referenced as the `VO` key to make things easier.

Let's look at some everyday things we can do now:

- `tab`: Next link or form control
- `VO`+`command`+`L`: Next link
- `VO`+`command`+`H`: Next heading
- `VO`+`command`+`G`: Next graphic
- `VO`+`space`: Activate link or form control
- `VO`+`A`: Start reading
- `control`: Stop reading
- `VO`+`->`: Read the next item
- `VO`+`<-`: Read the previous item
- `VO`+`P`: Read paragraph
- `VO`+'S`: Read sentence

There are many more things we can do. See the [VoiceOver option chart on the Apple docs](https://www.apple.com/voiceover/info/guide/_1131.html).

From my own experience, you definitely need to get used to it, and at first, it's tough to find how it exactly works and where it starts to read.

You might even find it doesn't read some aspects on your website or skips over them. (More on this in the evaluation tool article coming up)

## Windows NVDA

NVDA is a free screenreader for people on Windows laptops.
It works pretty much in the same way as VoiceOver but has some different commands that can be used.

By default, the NVDA key is the `Insert` key and we'll refer to it as the `NVDA` key.

To turn NVDA on, use `Control`+`Alt`+`N`.
To turn it off use: `NVDA`+`Q`

- `tab`: Next link or form control
- `K`: Next link
- `H`: Next heading
- `G`: Next graphic
- `space`: Activate link or form control
- `VO`+`↓‌`: Start reading
- `control`: Stop reading
- `VO`+`->`: Read next item
- `VO`+`<-`: Read previous item
- `VO`+`↑`: Read sentence

WebAIM has a great list of the most common commands for [web navigation with NVDA](https://webaim.org/resources/shortcuts/nvda).

## ChromeVox for Chrome

If you are in between or only want one for Google Chrome, try and use ChromeVox. It's a free plugin that works really well.

[Download Google Chrome ChromeVox](https://chrome.google.com/webstore/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn)

To turn it on or off, use `Ctrl`+`Alt`+`z`.

As with most screenreaders, the navigation is pretty much the same, but this one even comes with swipe gestures for tablet users!

The default ChromeVox command is `Ctrl`+`Cmd`, also known as `CV`

- `tab`: Next link or form control
- `CV`+`L`+`L`: Next link
- `CV`+`L`+`H`: Next heading
- `Enter`: Activate the link or form control
- `VO`+`↓‌`: Start reading
- `control`: Stop reading
- `VO`+`->`: Read the next item
- `VO`+`<-`: Read the previous item

There are quite a few commands, and the easiest way to check all of them is to open the ChromeVox settings page.

## Conclusion

I would really urge you all to at least try out one of these screenreaders and find out how easy it is to navigate your own website by using one of them.

Can you identify any hiccups that might need to be addressed?

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
