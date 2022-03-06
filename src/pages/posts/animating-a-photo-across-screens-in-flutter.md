---
layout: ../../layouts/Post.astro
title: 'Animating a photo across screens in Flutter'
metaTitle: 'Animating a photo across screens in Flutter'
metaDesc: 'How to create a growing or shrinking animation between screens in Flutter'
image: /images/05-08-2021.jpg
date: 2021-08-05T03:00:00.000Z
tags:
- flutter
---

We already made a [photo grid to photo detail app in Flutter](https://daily-dev-tips.com/posts/building-a-photo-grid-view-in-flutter/), and today we are building further on that application.

We'll be adding an animation so that the photo will expand to the new screen. Hero widgets are a very cool feature that Flutter gives us out of the box!

The Flutter hero animation looks like the example you see below:

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/hero_roswwg.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/hero_sykigt.mp4" type="video/mp4" />
</video>

## Animating a photo between screens in Flutter

As the starting point, feel free to follow along and take [this branch](https://github.com/rebelchris/flutter/tree/grid-view).

The animation can be done through a Hero widget. This is a widget that takes content and a tag. This tag is what defines the animation between the two screens.

So sketch this out for you:

- Screen 1 `<Hero tag="image_1" />`
- Screen 2 `<Hero tag="image_1" />`

Flutter can then identify these two tags for you and animate between them.

![Flutter hero example](https://cdn.hashnode.com/res/hashnode/image/upload/v1627626971395/3HCo2NDbf.png)

The first thing we need to do is add the hero wrapper on the ScreenOne grid images.

Before this was the container widget, we wrapped that in a hero widget and added a unique tag for this image (The actual image name).

```dart
child: Hero(
   tag: _items[index].image,
   child: Container(
      decoration: BoxDecoration(
         image: DecorationImage(
         fit: BoxFit.cover,
         image: NetworkImage(_items[index].image),
         ),
      ),
   ),
),
```

We also need to wrap the image in a receiving hero widget on the second screen widget.

```dart
child: Hero(
   tag: image,
   child: Image(
      image: NetworkImage(image),
   ),
),
```

And now Flutter can identify these two images and do all the animation for us, which is fantastic!

And that's how easy Hero animations in Flutter are.
If you want to see the complete code example, check it out on [GitHub](https://github.com/rebelchris/flutter/tree/hero-animation).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
