---
layout: ../../layouts/Post.astro
title: 'Enabling Flutter desktop applications'
metaTitle: 'Enabling Flutter desktop applications'
metaDesc: 'Running Flutter applications native on the desktop'
image: /images/10-08-2021.jpg
date: 2021-08-10T03:00:00.000Z
tags:
- flutter
---

A super cool thing in Flutter is that it can compile too many different outputs.
We've seen mobile apps, but Flutter can also output to native desktop apps!

Today we are doing just that. We'll take our [Flutter side menu application](https://daily-dev-tips.com/posts/flutter-drawer-sidebar-menu/) and convert it to work on desktop!

![Flutter Mac application](https://cdn.hashnode.com/res/hashnode/image/upload/v1627969935510/-VgvdLnrK.png)

## Requirements for desktop

First of all, we need Flutter installed, but we also need some additional resources for the desktop.

- `Windows`: Visual Studio 2019 (Not visual studio code)
- `MacOS`: Xcode and CocaoPods installed
- `Linux`: Clang, Cmake, GTK development headers, Ninja build, and pkg-config.

## Enable Flutter desktop

To enable Flutter, we can run the following command to allow it to installation wide:

```bash
flutter config --enable-<platform>-desktop
```

Where the platforms will be:

```bash
flutter config --enable-windows-desktop
flutter config --enable-macos-desktop
flutter config --enable-linux-desktop
```

Next up, you can run the following command to get a list of connected devices. This should show at least one more.

```bash
flutter devices

1 connected device:

Windows (desktop) • windows • windows-x64 • Microsoft Windows [Version 10.0.18362.1082]
macOS (desktop)   • macos   • darwin-x64  • macOS 11.2 20D64 darwin-x64
Linux (desktop)   • linux   • linux-x64   • Linux
```

## Creating the Flutter desktop app

In the case of a new application, you can run the following command:

```bash
flutter create myapp
```

If your application already existed, you can navigate to the folder above it and execute the following command:

```bash
flutter create --platforms=macos flutter_app
```

Where the last part, `flutter_app` is the name of your existing folder. This command will rebuild the folder with the desktop config.

## Run Flutter app on desktop

We can use the run command to run the app on the desktop.
It should ask us for which device:

```bash
flutter run
```

Or we can specify the device right away:

```bash
flutter run -d macos
flutter run -d windows
flutter run -d linux
```

And that's it. We now have a Flutter application that can run natively on a desktop!

Very excited about this addition and looking forward to trying desktop apps out.
The styling part of your applications will convert right away. However, some plugins might need platform-specific configuration changes.

If you want to download this converted demo, you can find the complete code on [GitHub](https://github.com/rebelchris/flutter/tree/flutter-desktop).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
