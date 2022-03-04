---
layout: ../../layouts/Post.astro
title: 'Running a Flutter app on iOS and Android emulators'
metaTitle: 'Running a Flutter app on iOS and Android emulators'
metaDesc: 'How to run a Flutter application on a iOS and Android emulator'
image: /images/09-07-2021.jpg
date: 2021-07-09T03:00:00.000Z
tags:
  - flutter
---

When developing hybrids apps, there comes a time where you want to check out your app on certain devices.
Luckily we can leverage emulators for this 📱.

In today's article, I'll show you how to launch the emulators from within Visual Studio Code.

As you may have seen in my previous Flutter introduction article, we can run a basic app by executing `flutter run`.
This command will run our Flutter app, and it actually can run on multiple devices.

## Running a Flutter app on an iOS emulator

Before we get started, make sure you have Xcode installed on your Mac and can open an emulator in general.
For this, you need to have downloaded Xcode from the App Store and opened it at least once.

From there, the easiest way to go about this is to open your Flutter project in Visual Studio Code.

Two great plugins actually help with Flutter development these are:

- [Flutter for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter)
- [Dart for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=Dart-Code.dart-code)

From here, select a device at the bottom of the screen.

![Flutter select device](https://cdn.hashnode.com/res/hashnode/image/upload/v1625288144780/Mdu5axqDv.png)

This will open up the specific emulator for the device you choose.

From there, click the Run and Debug menu on the left, and click the Run icon. This will now load your app on the emulator!

![Flutter run on iOS emulator](https://cdn.hashnode.com/res/hashnode/image/upload/v1625288369340/mAnEBIup3.png)

And there we go. We have our app running on an iOS emulator.
Do note the hot-reload option here. We can quickly restart our app with the latest changes.

## Running a Flutter app on an Android emulator

For android, we need to make sure we have our development studio setup as well.

Make sure you download and install [Android Studio](https://developer.android.com/studio) and follow the installation steps.

Also, make sure you have an emulator setup. If you're unsure about these steps, check out the [Android article on setting up emulators](https://developer.android.com/studio/run/managing-avds).

With that in place, we can go back to Visual Studio Code and change our device to be the Android emulator.

![Launch Android emulator](https://cdn.hashnode.com/res/hashnode/image/upload/v1625288640933/Z9Vb2mZz7.png)

> Note: You can also create an emulator from this window

Once the emulator is started, open the Run and Debug menu and press the start button.

![Run Flutter on Android emulator](https://cdn.hashnode.com/res/hashnode/image/upload/v1625288843455/88IICbf5C.png)

Also, note the hot-reload option from this menu. It's a super quick way to debug and run your apps on a device.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
