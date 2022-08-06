---
layout: ../../layouts/Post.astro
title: 'How to use Google Fonts in a Flutter application'
metaTitle: 'How to use Google Fonts in a Flutter application - Daily Dev Tips'
metaDesc: "Let's see how we can load Google Fonts in a Flutter app"
image: /images/15-07-2021.jpg
date: 2021-07-15T03:00:00.000Z
tags:
  - flutter
---

Loading custom fonts is often needed for websites, applications, and graphic design.
Today we'll investigate how to load Google fonts inside a flutter application.

The result will look like this:

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/fonts_rho3dy.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/fonts_u7eg1u.mp4" type="video/mp4" />
</video>

If you want to work with me, we start with the basic scaffolding app you can [download from GitHub](https://github.com/rebelchris/flutter/tree/hello-world).

## Installing the Google fonts package in Flutter

The first step is to load the package for google fonts.
Add the Google fonts package in your `pub spec.yml` dependencies to do so.

```yaml
dependencies:
  flutter:
    sdk: flutter

  #Load the Google fonts package
  google_fonts: ^2.1.0
```

## Loading the font

The next step is to import the font package into our dart file. Let's open the `lib/main.dart` file and place the following import.

```dart
import 'package:google_fonts/google_fonts.dart';
```

Now we can use any Google font we desire, but there are multiple options that we can use.

## Loading a Google font for a specific Flutter widget

The most basic approach is to set the font on a specific Text widget. We already have one in our example, so let's pick a funky font and see it in action.

I'll use the [Pacifico font](https://fonts.google.com/specimen/Pacifico?query=pacifi), because it will best show you how it works.

Now let's add this font as the style for our Text widget.

```dart
Text(
  'Hello World 👋',
  textDirection: TextDirection.ltr,
  style: GoogleFonts.pacifico(fontSize: 48),
)
```

And that results in the following:

![Google Pacifico font in Flutter app](https://cdn.hashnode.com/res/hashnode/image/upload/v1625809212636/1cXeaTq2f.png)

A pretty cool win already!

## Loading a Google font for the app bar in Flutter

The same can be used to change the font of the app bar if you are using it.

```dart
appBar: AppBar(
  title: Text(
    'Testing Google Fonts',
    style: GoogleFonts.pacifico(),
  ),
),
```

And it will look like this:

![AppBar Google fonts](https://cdn.hashnode.com/res/hashnode/image/upload/v1625810148151/Z7yCeFPVR.png)

## Loading Google fonts as a theme font

Another thing we could do is change the whole app theme font to be a Google font.

```dart
MaterialApp(
  theme: ThemeData(
    textTheme: GoogleFonts.pacificoTextTheme(),
  ),
)
```

This will change all the text elements in our main app into this google font!

So if we have our main text like this:

```dart
Text(
  'Hello World 👋',
  textDirection: TextDirection.ltr,
),
```

And that will result in:

![Google font loaded as a theme](https://cdn.hashnode.com/res/hashnode/image/upload/v1625810422716/_aXAC3ddo.png)

> Note: the AppBar is not changed here as the theme font won't change that by default!

Suppose you want to see how this works?
Feel free to check it out on [GitHub](https://github.com/rebelchris/flutter/tree/google-fonts).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
