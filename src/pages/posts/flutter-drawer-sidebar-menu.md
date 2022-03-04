---
layout: ../../layouts/Post.astro
title: 'Flutter drawer sidebar menu'
metaTitle: 'Flutter drawer sidebar menu'
metaDesc: 'How to create a drawer side menu in Flutter'
image: /images/08-08-2021.jpg
date: 2021-08-08T03:00:00.000Z
tags:
  - flutter
---

As far as navigations go in mobile applications, we have two main options:

- TabBar
- Drawer side menu

We already created a [Flutter tabbar](https://daily-dev-tips.com/posts/flutter-tabbar-the-basics/) in a previous article, and in this article, we'll look at how we can make a drawer.

By the end of this article, you'll have the following result.

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/drawer_taeb3x.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/drawer_jqho5z.mp4" type="video/mp4" />
</video>

I'm taking my [Flutter hello world app](https://github.com/rebelchris/flutter/tree/hello-world) as a starting point if you want to follow along.

## Setting up a drawer side menu in Flutter

Let's start by changing the root entry point of our application. Before, we used to Scaffold the body in the primary function. However, we need to use the scaffold for the drawer.

```dart
void main() async {
  runApp(
    MaterialApp(
      debugShowCheckedModeBanner: false,
      home: MyApp(),
    ),
  );
}
```

As for the app, we can change this to return a drawer.

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Drawer menu')),
      body: const Center(
        child: Text('Click on the menu icon'),
      ),
      drawer: Drawer(
        child: ListView(
          padding: EdgeInsets.zero,
          children: [
            const DrawerHeader(
              decoration: BoxDecoration(
                color: Colors.blue,
              ),
              child: Text(
                'Drawer Header',
                style:
                    TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
              ),
            ),
            ListTile(
              title: const Text('Item 1'),
            ),
            ListTile(
              title: const Text('Item 2'),
            ),
          ],
        ),
      ),
    );
  }
}
```

If we render this, we get a basic drawer that we can open, and it will have two items in it.
Then we also add a drawer header item on top.

We can also click on the right-hand side of the menu to close the drawer; however, we also want to close it when clicking on a menu item.

We can do this by adding the onTap event to the list tiles.

```dart
ListTile(
  title: const Text('Item 2'),
  onTap: () {
    Navigator.pop(context);
  },
),
```

This tap will close the navigation drawer menu as it was pushed on top of the existing stack.

And with that, we have our basic drawer setup in Flutter.
You can find the complete code example on [GitHub](https://github.com/rebelchris/flutter/tree/drawer).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
