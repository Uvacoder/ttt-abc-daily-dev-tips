---
layout: ../../layouts/Post.astro
title: 'How to create gradient text in Flutter'
metaTitle: 'How to create gradient text in Flutter'
metaDesc: 'Creating gradient text elements in Flutter applications'
image: /images/03-08-2021.jpg
date: 2021-08-03T03:00:00.000Z
tags:
- flutter
---

When I started working on gradients in Flutter yesterday, I also had a look at text gradients as those intrigue me.
However, quickly fell down the rabbit hole of methods that work on paper but don't work stable.

Today I'll guide you through creating gradient text in Flutter.

## Using a shader for Gradient text

A shader is by far the easiest solution. We can create a custom shader and use that as the foreground option for our text element.

It looks like this:

```dart
final Shader linearGradient = LinearGradient(
   colors: <Color>[Colors.pink, Colors.green],
).createShader(
   Rect.fromLTWH(0.0, 0.0, 200.0, 70.0),
);

child: Text(
   'Hello Gradients!',
style: new TextStyle(
   fontSize: 60.0,
   fontWeight: FontWeight.bold,
   foreground: Paint()..shader = linearGradient),
),
```

However, when we run this code, we get the following output:

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/gradient_ipxakh.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/gradient_jctmwe.mp4" type="video/mp4" />
</video>

The gradient doesn't stick right on the text, as you can see above. It can move depending on the screen size.

This is because we used the `Rect` code in the shader.

```dart
Rect.fromLTWH(0.0, 0.0, 200.0, 70.0),
```

As you can see, the 200 and 70 are fixed number, which would be magic numbers for a mobile screen. However, this doesn't scale and will give us headaches in the long term.

## Using shader mask for Gradient text

Another way to do this is to use a shader mask.
The idea is similar to the above shader example, except we can now use the bounds as a callback.

```dart
final gradient = LinearGradient(
   colors: [Colors.pink, Colors.green],
);

ShaderMask(
  shaderCallback: (Rect bounds) {
    return gradient.createShader(Offset.zero & bounds.size);
  },
  child: Center(
    child: Text(
      'Hello Gradients!',
      style: new TextStyle(
        color: Colors.white,
        fontSize: 60.0,
        fontWeight: FontWeight.bold,
      ),
    ),
  ),
)
```

The shader mask has a callback function, so we can use the size of the bounds to give it a more accurate position.

Note: Do remember this method only works when using white-colored text.

This shader mask will result in the following, a scalable gradient text.

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/gradient2_hggulg.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/gradient2_lu1ayh.mp4" type="video/mp4" />
</video>

## Alternative ways

I'm reinventing the wheel here, so instead of creating this ourselves, we can use people's plugins to make life easier.

- [Tony Owen ~ gradient_text package](https://pub.dev/packages/gradient_text)
- [Sim ~ Gradient ui](https://pub.dev/packages/gradient_ui_widgets)

These are excellent packages, the package Tony made is just for text and implements the shader mask method, so it's easier for us to re-use throughout our codebase.

The gradient UI kit by Sim is a more advanced toolkit, including not just text elements but all kinds of elements that can now have gradients.

I hope this article showed you the differences between the Flutter gradient text options.
And you're able to create some fantastic gradients.

You can view the complete code with both examples on [GitHub](https://github.com/rebelchris/flutter/tree/text-gradient).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
