---
layout: ../../layouts/Post.astro
title: 'Using gradients in Flutter'
metaTitle: 'Using gradients in Flutter'
metaDesc: 'How to use gradients in Flutter applications'
image: /images/02-08-2021.jpg
date: 2021-08-02T03:00:00.000Z
tags:
- flutter
---

Yesterday, I wondered how to create gradients in Flutter, so let's see how this works.

Gradients, in general, can give us that extra fancy feeling in our app.
While researching this article, I learned that Flutter allows you to modify everything, another great win of Flutter.

## Basic gradients in Flutter

The primary way to add gradients to our Flutter app is to use a box decorator. You can use decorations on a couple of elements, including a container.

Let's look at how that looks.

We'll start using our [basic Flutter app](https://daily-dev-tips.com/posts/flutter-how-it-works-hello-world/) as our blank canvas again.

```dart
return Container(
  decoration: BoxDecoration(
    gradient: LinearGradient(
      begin: Alignment.topRight,
      end: Alignment.bottomLeft,
      colors: [
        Color(0xff9796F0),
        Color(0xffFBC7D4),
      ],
    ),
  ),
  child: Center(
    child: Text(
      'Hello world 👋',
      style: TextStyle(
        fontSize: 50.0,
        color: Colors.white,
      ),
    ),
  ),
);
```

I've used hex colors, but one could also opt for `Colors.red` and `Colors.blue`.

We have to prefix the hex value with `0xff` and then the hex value when using the hex colors.

Example: `#2BC0E4` becomes: `0xff2BC0E4`.

This sample example will give the container a nice gradient.

![Flutter Gradient](https://cdn.hashnode.com/res/hashnode/image/upload/v1627364705097/zS0L2BedJ.png)

## Adding more stops to gradients

Sometimes two colors are not enough, and we'd like some more stops. We can achieve this in Flutter by defining the stops and the colors.

```dart
decoration: BoxDecoration(
   gradient: LinearGradient(
     begin: Alignment.topRight,
     end: Alignment.bottomLeft,
     stops: [
       0.1,
       0.4,
       0.9,
     ],
     colors: [
       Color(0xffD16BA5),
       Color(0xff86A8E7),
       Color(0xff5FFBF1),
     ],
   ),
)
```

We introduced a new element which is the `stops`. This array of points starts at which space the gradient should change.

The stop value runs from 0 to 1.
Then we also added that amount of colors so the arrays match.

Look at this example. The colors are not equal widths.

![Flutter multi stop gradients](https://cdn.hashnode.com/res/hashnode/image/upload/v1627365115309/7pv8osa5_.png)

## Changing the gradient direction

Of course, we don't always want the gradient to run like that.
We can easily change the from/to on the gradient configuration to change the gradient flow.

Let's try and make it from left to right.

```dart
decoration: BoxDecoration(
   gradient: LinearGradient(
     begin: Alignment.centerLeft,
     end: Alignment.centerRight,
     colors: [
      Color(0xffEAECC6),
      Color(0xff2BC0E4),
     ],
   ),
),
```

Resulting in the following gradient:

![Flutter left-right gradient](https://cdn.hashnode.com/res/hashnode/image/upload/v1627365289620/3sPBuYlLY.png)

That's it. We can now use this gradient decorator to give our application a nice finished touch!

If you want to see the source code for today, check it out on this [GitHub repo](https://github.com/rebelchris/flutter/tree/gradients).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
