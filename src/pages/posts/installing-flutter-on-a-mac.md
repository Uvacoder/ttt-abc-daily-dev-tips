---
layout: ../../layouts/Post.astro
title: 'Installing Flutter on a Mac'
metaTitle: 'Installing Flutter on a Mac'
metaDesc: 'Getting started with Flutter for app development on a Mac'
image: /images/02-07-2021.jpg
date: 2021-07-02T03:00:00.000Z
tags:
  - flutter
---

As you may know, my day job is developing [Ionic](https://daily-dev-tips.com/tags/ionic/) applications, but recently, I've seen so much traction on Flutter.

I'm not convinced yet why it would be better or if it's worthwhile learning Dart.
But without trying it myself, I feel like I can't have a good opinion about Flutter.

So here we go, let's try and build some apps in Flutter and write down my findings.

## Installing Flutter on Mac OS

Let's start with installing Flutter so we can build a basic Hello World application (Hey, who doesn't like those 😂).

I'm a big fan of [Homebrew](https://daily-dev-tips.com/posts/homebrew-one-package-manager-to-rule-them-all/) me it's the quickest way to install the Flutter. Open up your favorite terminal and execute the following command.

```bash
brew install --cask flutter
```

> Note: At this point, it might be that I have some extra stuff already installed since it has overlap coming from Ionic.

But something cool is the option for Flutter to check if your system is up and running or might be missing some elements.

```bash
flutter doctor
```

This command will check if your system is ready to get started with Flutter.
And should give a response similar to this:

![Flutter doctor](https://cdn.hashnode.com/res/hashnode/image/upload/v1624772730244/V_qQ2QdB7.png)

As you can see, my system only states one issue.
But some other resources you need:

- `Xcode`: Setup and installed also accept all licenses
- `Chrome`: As your browser
- `Android Studio`: For the Android builds
- `Java`: Needed for Android builds
- `VS Code`: For editing the software

If you are missing any of these, follow the following steps:

- Xcode: Download from the [App Store](https://itunes.apple.com/us/app/xcode/id497799835) and open up it will guide you through it
- Chrome: Download with brew as well `brew install --cask google-chrome`
- Android Studio: Can also be installed with brew: `brew install --cask android-studio`
- Java: This should typically be installed with Android Studio
- VS Code: Install with brew `brew install --cask visual-studio-code`

## Creating our first Flutter app

As expected, Flutter comes with the option to generate a basic application with the CLI.

Let's run the following command to create our first app.

```bash
flutter create flutter_app
```

This will create a folder called `flutter_app` without code inside. Let's navigate to this folder.

```bash
cd flutter_app
```

And now, we can start the app for the first time by running the following command.

```bash
flutter run
```

It will take a while the first time, but a new Chrome window with your app should pop up.

![Flutter basic app](https://cdn.hashnode.com/res/hashnode/image/upload/v1624773251471/0-AR_3uU-.png)

This app comes with some basic code we can check to see how it works.

If we quickly inspect the app, we can see that all our app code is located at `lib/main.dart` this is where a Flutter app will start.

That's all for today. We'll look into modifying the app in another article.

You can also find this default app on [GitHub](https://github.com/rebelchris/flutter).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
