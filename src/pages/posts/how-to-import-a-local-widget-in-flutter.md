---
layout: ../../layouts/Post.astro
title: 'How to import a local widget in Flutter'
metaTitle: 'How to import a local widget in Flutter'
metaDesc: 'Tutorial how to import a local dart file in flutter'
image: /images/14-07-2021.jpg
date: 2021-07-14T03:00:00.000Z
tags:
  - flutter
---

So far, we have had quite a [basic look at Flutter](https://daily-dev-tips.com/posts/flutter-stateful-and-stateless-widgets/) and how everything works.
We even made an excellent [sample Todo list application in Flutter](https://daily-dev-tips.com/posts/build-a-todo-list-app-with-flutter/).

However, we placed all our code in the `lib/main.dart` file until now.
You might be wondering, cool, but that gets a bit unmanageable. And this was the same thing I was wondering.

So let's look at how we can move some code to another file and import that into our main file.

> Note: this guide does not tell you the best practices about folder structures, just an introduction to how it works.

## Importing a local dart file in Flutter

Let's start simple and create a small widget that we'll try and embed in our basic app.

We'll work on the basic Flutter app. To get started, you can download this code on [GitHub](https://github.com/rebelchris/flutter/tree/stateful-widget).

Now let's make a new folder in our lib called `screens` and place a file called `home.dart` inside this folder.

![Flutter folder structure](https://cdn.hashnode.com/res/hashnode/image/upload/v1625771768425/-qzpRv7-y.png)

In this file, we'll place the code of our basic widget like so:

```dart
import 'package:flutter/material.dart';

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Text(
                'You have pushed the button this many times:',
              ),
              Text(
                '$_counter',
              ),
              TextButton(
                onPressed: _incrementCounter,
                child: const Text('Add number'),
              ),
            ]),
      ),
    );
  }
}
```

And in our `main.dart` file, we can remove all that code, so it looks like this.

```dart
import 'package:flutter/material.dart';

void main() async {
  runApp(
    MaterialApp(debugShowCheckedModeBanner: false, home: MyApp()),
  );
}
```

However, your editor will say it doesn't know what MyApp is, and it's right!
So let's fix that by importing our new Home Screen!

```dart
import 'package:flutter_app/screens/home.dart';
```

Ok, that makes sense, but what is this `package:flutter_app` thing about?

And the package tells Flutter what package to load something from.
The `flutter_app` refers to our application. If you are wondering where we set this variable, open up the `pubspec.yaml` and check out the `name` variable!

```yaml
name: flutter_app
```

Cool right! Our little package.
And with this knowledge, we can now move certain widgets and screens into their files to create more structure in our application.

If you're unsure about how it should work, you can also download my example code from [GitHub](https://github.com/rebelchris/flutter/tree/feature/import-files).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
