---
layout: ../../layouts/Post.astro
title: 'Generating Flutter app icons automatically'
metaTitle: 'Generating Flutter app icons automatically'
metaDesc: 'How to automatically generate android and iOS app icons for a Flutter app'
image: /images/10-07-2021.jpg
date: 2021-07-10T03:00:00.000Z
tags:
  - flutter
---

Coming from Ionic, it's pretty straightforward to [generate app icons](https://daily-dev-tips.com/posts/ionic-resources/) for your app. While doing some research, I learned it's easy for Flutter as well!

Today we'll learn how to automatically generate App Icons for iOS and Android-based on one image source!

The idea is that apps need many different sizes of App Icons for all kinds of devices and resolutions.
Yet, we don't want to make all these images ourselves.

## Adding the flutter_launcher_icons plugin

Flutter is built in a way we can easily add plugins.
For this one, head over to your `pubspec.yml` file and add the following line to your dev_dependencies.

```yaml
dev_dependencies:
  flutter_launcher_icons: '^0.8.0'
```

Then we need to install this plugin by running:

```bash
flutter pub get
```

## Adding our app icon

For our base icon to work, I would suggest having a logo that is 1024x1024px in size. Also, don't use alpha or transparency in this image (for iOS). For Android, you can use transparency.

However, for this demo, I'll use one generic image.

Place this image in a folder called `images` at the root of your directory.

I made this basic image for my app icon just to demo how it will look.

![Basic app icon](https://cdn.hashnode.com/res/hashnode/image/upload/v1625379130988/ToaBUOP7J.png)

Head back over to the `pubspec.yml` file and add the following configuration.

```yaml
flutter_icons:
  android: true
  ios: true
  image_path: 'images/icon.png'
```

We could also specify a specific image for iOS or Android:

```bash
flutter_icons:
  image_path_ios: 'images/icon-ios.png'
  image_path_android: 'images/icon-android.png'
```

To generate the icons, we can run the following command.

```bash
flutter pub run flutter_launcher_icons:main
```

Now when we run the application on our simulator, we should see the app icon we defined.
I also opened up the Xcode assets to showcase all the different sizes that have been created.

![iOS app icons in Flutter](https://cdn.hashnode.com/res/hashnode/image/upload/v1625379576412/iGxjCZN1E.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
