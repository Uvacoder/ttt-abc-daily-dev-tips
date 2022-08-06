---
layout: ../../layouts/Post.astro
title: 'Flutter TabBar the basics'
metaTitle: 'Flutter TabBar the basics'
metaDesc: 'Learn how to make a basic TabBar in Flutter'
image: /images/11-07-2021.jpg
date: 2021-07-11T03:00:00.000Z
tags:
  - flutter
---

A lot of apps come with a TabBar. It's that icon bar you see to navigate through the app quickly.

Some examples of these TabBars can be found in the Twitter or Instagram app:

![TabBars in mobile apps](https://cdn.hashnode.com/res/hashnode/image/upload/v1625462395270/KnDldg8q9.png)

And yes, we'll be learning how to create this in Flutter today.

## Creating a TabBar in Flutter

Let's start with our [basic Flutter application](https://daily-dev-tips.com/posts/flutter-how-it-works-hello-world/) and work from there today. We'll do all our code in the `lib/main.dart` file.

Now let's modify our main function to include a TabBar.

```dart
void main() async {
  runApp(
    MaterialApp(
      home: DefaultTabController(
        length: 3,
        child: Scaffold(
          appBar: AppBar(
            title: Text('Tabs Demo'),
            bottom: TabBar(
              tabs: [
                Tab(icon: Icon(Icons.directions_car)),
                Tab(icon: Icon(Icons.directions_transit)),
                Tab(icon: Icon(Icons.directions_bike)),
              ],
            ),
          ),
          body: TabBarView(
            children: [
              Icon(Icons.directions_car),
              Icon(Icons.directions_transit),
              Icon(Icons.directions_bike),
            ],
          ),
        ),
      ),
    ),
  );
}
```

This is the most basic setup for a TabBar in Flutter. As you can see, it leverages the AppBar, and provides a bottom part.
This bottom part includes a TabBar with some icons.

Then, in our application's actual body, we should add a TabBarView with an equal amount of children.

With this, we can click the icons or even scroll through them by swiping!

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/tabbar_uizvbc.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/tabbar_uvuyjg.mp4" type="video/mp4" />
</video>

You can download the completed code from [GitHub](https://github.com/rebelchris/flutter/tree/tabbar).

You might have noted the default Flutter TabBar is positioned at the top. In a later article, we'll look at how to set it at the bottom.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
