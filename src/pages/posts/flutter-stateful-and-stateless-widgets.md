---
layout: ../../layouts/Post.astro
title: 'Flutter Stateful and Stateless widgets'
metaTitle: 'Flutter Stateful and Stateless widgets'
metaDesc: 'The difference between stateful and stateless widgets in Flutter'
image: /images/04-07-2021.jpg
date: 2021-07-04T03:00:00.000Z
tags:
  - flutter
---

Yesterday we had a high-level overview of [how Flutter works](https://daily-dev-tips.com/posts/flutter-how-it-works-hello-world/), and learned it uses a widget approach.

Today we'll dive a little bit deeper into the two main types of widgets being:

- Stateful widgets
- Stateless widgets

## The difference between stateful and stateless widgets

The state, in general, is information about that widget that can be read once the widget is built. If this never changes, we consider it a stateless widget. If this information can change, it's a stateful widget.

Stateless widgets can never change. Some examples of stateless widgets are `Icon`, `Text`, and `IconButton`.

A stateful widget is dynamic. It might change appearance based on user interaction of when data changes.
Some examples might are `TextField`, `Checkbox`, and `Radio`.

## A basic stateless widget

Let's showcase a basic stateless widget that will show some text but not do anything.

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text(
        'Hello World 👋',
        textDirection: TextDirection.ltr,
      ),
    );
  }
}
```

As you can see above, this widget is going to render some text inside a center element.
That's it. That fact won't change no matter what happens.

## A basic stateful widget

Stateful widgets are a different story. As mentioned, they might change properties based on data or user action.

Let's use the Flutter demo and create a basic application that will plus a counter when we click a button.

```dart
class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}
```

As you can see, we changed the `MyApp` to be a stateful widget now.
That means it must implement the `createState` function, which in our case calls the `_MyAppState` class.

> Note: The underscore classes in Dart are considered private!

This new class will extend our basic app state, meaning it can handle change.

```dart
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

In there, we define a basic counter variable and set it to zero.
Then we create a function that can increment this number.

Be aware that `setState` is needed to make an actual change in a state.

Then we override the widget to create our widget as we did before, but in this one, we get to use a variable text and include a button that will handle an `onPressed` event.

So what happens:

- User clicks the button
- \_incrementCounter is called
- \_incrementCounter adds one to the current number
- state of the app is changed, so re-render app
- text element now shows the new counter value

And this keeps looping on every interaction.

I hope you got a good overview of the difference between stateless and stateful widgets and how they come together in Flutter.

You can find my implementation of the Stateful widget on [GitHub](https://github.com/rebelchris/flutter/tree/stateful-widget).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
