---
layout: ../../layouts/Post.astro
title: 'Ionic Resources'
metaTitle: 'Ionic Resources'
metaDesc: 'Generating the Icons and Splash Screen.'
image: /images/03-07-2020.jpg
date: 2020-07-03T03:00:00.000Z
tags:
  - ionic
---

Another great thing that Ionic comes with out of the box is the ability to generate resources.
Meaning we can super easily create a splash screen and app icon.
We don't have to create every size possible for the billions of devices sizes we have nowadays.

> Make sure your project is prepared for Cordova, run the following command: `ionic cordova prepare`

## Ionic Preparing the Assets

Let's start by preparing the assets.

For the App icon, we can prepare an image that is at least `1024x1024px`. The source for the splash screen must be at least `2732x2732px`.

They must be places in the following folder:

- `Icon` - `resources/icon.png` - (min 1024x1024px)
- `Splash` - `resources/splash.png` - (min 2732x2732px)

For the best results, the splash screen's art should fit inside a square that's `1200x1200px` within the bigger one.

> Ionic has this [PSD splash](https://code.ionicframework.com/resources/splash.psd) template.

## Platform Specific Resources

We can also generate platform-specific images, for instance, if your Android icon is different from the IOS one.

For this we add a second layer of folder;

- `Icon` - `resources/{platform}/icon.png`
- `Splash` - `resources/{platform}/splash.png`

Where `{platform}` can we `ios` or `android`.

## Ionic Generate Resources

To create the actual resources, run the following command in the root of the project.

```bash
ionic cordova resources
```

This command will update your `config.xml` with the newly generated resources.

We can also generate only iOS resources:

```bash
ionic cordova resources ios
```

Or, just the android ones:

```bash
ionic cordova resources android
```

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
