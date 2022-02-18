---
layout: ../../layouts/Post.astro
title: 'Adding a snackbar in Flutter'
metaTitle: 'Adding a snackbar in Flutter'
metaDesc: 'Show a snackbar in Flutter applications to show more information to the user'
image: /images/11-08-2021.jpg
date: 2021-08-11T03:00:00.000Z
tags:
  - flutter
---

I don't mean the Dutch word snackbar (see image below), but a toast-like message that we can use to feedback to the user.

![Adding a snackbar in Flutter](https://cdn.hashnode.com/res/hashnode/image/upload/v1628058626323/VYl8ytH-w.jpeg)

Using snackbars in mobile apps is very common as they are a perfect way to provide valuable feedback.

For today's article, I will be using my [Flutter hello world app](https://daily-dev-tips.com/posts/flutter-how-it-works-hello-world/) as the starting point.

## Requirements for a Flutter snackbar

The cool part is that the only requirement for using a snackbar in Flutter is wrapping our application in a scaffold.
Something we do most of the time anyway.

We can then use something called the `ScaffoldMessenger` to send a message on specific actions.

Snackbars themselves can have options in return which we'll also have a look at.

## Invoking a snackbar in Flutter

Let's add a button to our application so we can use that to invoke our snackbar.

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: ElevatedButton(
        onPressed: () {},
        child: const Text('Open the snackbar'),
      ),
    );
  }
}
```

This code will give us an empty button.

![Button on Flutter application](https://cdn.hashnode.com/res/hashnode/image/upload/v1628059222702/vCg2a5pOS.png)

Inside this button, we have the `onPressed` method, which we'll use to bind our action sheet.

```dart
onPressed: () {
  final snackbar = SnackBar(
    content: const Text('Hello world, Snackbar here!'),
  );
  ScaffoldMessenger.of(context).showSnackBar(snackbar);
},
```

Now, when we click our button, the snackbar will show at the bottom of our screen.

![Flutter snackbar in action](https://cdn.hashnode.com/res/hashnode/image/upload/v1628059391687/gtvPR2MN1.png)

## Adding an action to the Flutter snackbar

We can also use the snackbar to give the user action.
This might be to undo something they just did.

For instance: User changes a row, the snackbar will show: Successfully modified row x. Then we can have an undo button to revert this change again.

That code will look like this:

```dart
onPressed: () {
  final snackbar = SnackBar(
    content: const Text('Successfully modified row x'),
    action: SnackBarAction(
      label: 'Undo',
      onPressed: () {
        // Add your undo code here
      },
    ),
  );
  ScaffoldMessenger.of(context).showSnackBar(snackbar);
},
```

You need to implement the code that will undo the action you just did in the onPressed callback.

> Note: A snackbar is designed only to have one action. For multiple actions, we should [use a dialog](https://daily-dev-tips.com/posts/build-a-todo-list-app-with-flutter/).

![Flutter snackbar actions](https://cdn.hashnode.com/res/hashnode/image/upload/v1628059546081/JPf0hqZhx.png)

If you want to see the source code, you can find that on [GitHub](https://github.com/rebelchris/flutter/tree/snackbar).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
