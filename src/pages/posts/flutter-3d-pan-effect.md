---
layout: ../../layouts/Post.astro
title: 'Flutter 3D pan effect'
metaTitle: 'Flutter 3D pan effect'
metaDesc: 'Creating a 3D panning effect in Flutter'
image: /images/20-08-2021.jpg
date: 2021-08-20T03:00:00.000Z
tags:
  - flutter
---

A while ago, I found out about this [super cool devcard](https://app.daily.dev/devcard) from my fantastic colleagues at [daily.dev](https://daily.dev/).

I was inspired by the excellent 3D pan effect on the card and wanted to find out how to get this effect in Flutter.

The result for this article will be this super cool effect:

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/pan_qo9yqm.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/pan_iu9ccp.mp4" type="video/mp4" />
</video>

As the starting point, I'll use my [Flutter hello world application](https://daily-dev-tips.com/posts/flutter-how-it-works-hello-world/).

## Creating the basic widget

Since our hello world app is rendering a stateless widget, we need to modify that part and make this a stateful widget.

The stateful widget allows us to re-render a new state, which we need to create the panning effect.

Modify the existing MyApp to become a stateful widget.

```dart
class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}
```

As for the state, we can create this basic state for now:

```dart
class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Flutter 3D Card'), // changed
      ),
      body: Center(
        child: Image(image: AssetImage('DailyDevTips.png')),
      ),
    );
  }
}
```

This will create a simple state that returns a local image to our screen.

However, we need to tell Flutter where it can render this particular image.

## Adding local image assets in Flutter

To add local images in Flutter, create a local folder for it. I've created a `assets` folder at the root of my project.

Inside that, I put my image called `DailyDevTips.png`.

Then you need to edit your `pubspec.yml` file and add this asset under your flutter configuration.

```yaml
flutter:
  assets:
    - assets/DailyDevTips.png
```

Now we can load the image using the `AssetImage` widget as you saw above.

![Flutter local image loaded](https://cdn.hashnode.com/res/hashnode/image/upload/v1628835074861/O-KFOtRAw.png)

However, this looks a bit cramped, right?
What we can do is wrap the image in a fractional-sized box widget. This widget can take a fraction of the page and use that as the limit. The cool part about this is that it will adjust to all the different screens.

```dart
body: Center(
    child: FractionallySizedBox(
      widthFactor: 0.7,
      heightFactor: 0.9,
      child: Image(image: AssetImage('DailyDevTips.png')),
    ),
),
```

The fractions can be read as percentages meaning 70% of the width and 90% of the height.

In our case, this will result in this:

![Flutter fractional sized box with image](https://cdn.hashnode.com/res/hashnode/image/upload/v1628835238427/iK_bCO0NNb.png)

## Creating a 3D pan effect in Flutter

Now that we have our basic image setup, we can add our 3D pan effect.

The first thing we'll need to do is add a basic offset variable in our state. We will use this offset to define the movement of the card.

```dart
Offset _offset = Offset.zero;
```

Then we can insert a transform widget that will allow us to modify the 3D properties.

```dart
body: Center(
    child: Transform(
      transform: Matrix4.identity()
        ..setEntry(3, 2, 0.001) // perspective
        ..rotateX(0.01 * _offset.dy) // changed
        ..rotateY(-0.01 * _offset.dx), // changed
      alignment: FractionalOffset.center,
      child: (
            // TODO
      ),
    ),
),
```

This will set our primary 3D object up. However, it won't do anything and render zero on every axis.

The matrix identity is a 4-dimensional array containing four rows and four columns. If you want to read more about the concept and option, I found this article on [advanced matrix 4 in Flutter](https://blog.codemagic.io/flutter-matrix4-perspective-transformations/) super useful

To make this all work, we need to render a gesture detector as the child of this transform.
This detector will update our offset and contain our image as the child.

```dart
child: GestureDetector(
    onPanUpdate: (details) => setState(() => _offset += details.delta),
    onDoubleTap: () => setState(() => _offset = Offset.zero),
    child: FractionallySizedBox(
      widthFactor: 0.7,
      heightFactor: 0.9,
      child: Image(image: AssetImage('DailyDevTips.png')),
    ),
),
```

As you can see, the pan update effect will re-render our state and give the offset the new modified offset values.
Then we add a double-tap to reset our image to zero again.
And this all wraps a child, which is the image we had before.

If we now reload our code, we can move the image around and see the cool 3D effect in action!

I hope you enjoyed this article and learned the basics of 3D effects in Flutter.
I enjoyed trying this out, and my mind is already going wild with what we could do with this effect.

If you are looking for the complete code, you can find that on this [GitHub branch](https://github.com/rebelchris/flutter/tree/3d-pan-effect).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
