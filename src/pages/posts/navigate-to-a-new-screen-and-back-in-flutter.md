---
layout: ../../layouts/Post.astro
title: 'Navigate to a new screen and back in Flutter'
metaTitle: 'Navigate to a new screen and back in Flutter'
metaDesc: 'How to navigate between screens in Flutter'
image: /images/18-07-2021.jpg
date: 2021-07-18T03:00:00.000Z
tags:
  - flutter
---

Today we'll look into a pretty standard concept in mobile app development, navigating between pages (routes).

We'll take the basic example today and create two routes. Then we use the Navigator class to navigate between them.

The result for today will look like this:

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/routes_ednzqd.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/routes_gub302.mp4" type="video/mp4" />
</video>

## Setting up named routes in Flutter

Let's start by setting up the main structure.

Flutter always starts with the main function, so let's set that up first.

```dart
void main() async {
  runApp(
    MaterialApp(debugShowCheckedModeBanner: false,
    initialRoute: '/',
    routes: {
      '/': (context) => RouteOne(),
      '/detail': (context) => RouteTwo(),
    }),
  );
}
```

In this example, we define named routes, which is very similar to other hybrid app frameworks.
With this, we get the option to define the initial route, which in our case is the named route: `/`.

Then we add a routes object, including all our routes.
We define two routes:

1. `/` which will render a widget called: `RouteOne`
2. `/detail`, which renders a widget called: `RouterTwo`

Now we need to create these routes (widgets).

```dart
class RouteOne extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Screen one ☝️'),
      ),
      body: Center(
        child: ElevatedButton(
          // Within the `FirstScreen` widget
          onPressed: () {
            // Navigate to the second screen using a named route.
            Navigator.pushNamed(context, '/detail');
          },
          child: Text('Open detail'),
        ),
      ),
    );
  }
}
```

Here we see the widget for route one. On this screen is a button that shows the text 'Open detail'.
Once we click this button, we call the Navigator class and push a named route called `/detail`.

As you can see, this Navigator class makes this work and keeps track of all the logic behind it.

We make a similar-looking page for the second screen, but with a button that states 'Go back'.

```dart
class RouteTwo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Screen two ✌️'),
      ),
      body: Center(
        child: ElevatedButton(
          // Within the `FirstScreen` widget
          onPressed: () {
            // Navigate to the second screen using a named route.
            Navigator.pop(context);
          },
          child: Text('Go back'),
        ),
      ),
    );
  }
}
```

And here, we use the navigator again, but we'll call the `pop` function, which will remove the last pushed route from the stack.

Resulting in an application that can navigate between two routes.

You can also find the complete code on this [GitHub](https://github.com/rebelchris/flutter/tree/routes) link.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
