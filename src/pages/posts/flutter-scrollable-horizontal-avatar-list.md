---
layout: ../../layouts/Post.astro
title: 'Flutter scrollable horizontal avatar list'
metaTitle: 'Flutter scrollable horizontal avatar list'
metaDesc: 'Creating a scrollable horizontal list in Flutter, like Instagram has'
image: /images/01-08-2021.jpg
date: 2021-08-01T03:00:00.000Z
tags:
  - flutter
---

In this article, you'll learn how to create a scrollable horizontal list, in our case filled with avatars.

However, feel free to put whatever you want on this list.
The result for today will look like this:

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/hscroll_sffezb.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/hscroll_x2whyq.mp4" type="video/mp4" />
</video>

For this article, we'll be starting from our [basic Flutter application](https://daily-dev-tips.com/posts/flutter-how-it-works-hello-world/), which you can download on [GitHub](https://github.com/rebelchris/flutter/tree/hello-world) as well.

## Render avatars in Flutter

First, let's start by rendering avatars in Flutter, as this will be the basis of our application.

Usually, we would be able to use a `CircleAvatar` widget in Flutter. I want to include a border around the widget for my version, so I'm using a container to wrap everything.

```dart
return Center(
  child: Container(
    width: 120.0,
    height: 120.0,
    padding: EdgeInsets.all(2),
    decoration: BoxDecoration(
      shape: BoxShape.circle,
      color: Colors.black,
    ),
    child: CircleAvatar(
      backgroundImage: NetworkImage('{YOUR_IMAGE}'),
    ),
  ),
);
```

And with this, we get a circle image with a black border around it.

![Flutter circle avatar](https://cdn.hashnode.com/res/hashnode/image/upload/v1627277885420/DzX0ILdAC.png)

The last thing I'll do here is extract this to be its very own widget so we can easily re-use it.
I use Visual Studio to extract this into its widget resulting in the following code:

```dart
class SampleAvatar extends StatelessWidget {
  const SampleAvatar({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 120.0,
      height: 120.0,
      padding: EdgeInsets.all(2),
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        color: Colors.black,
      ),
      child: CircleAvatar(
        backgroundImage: NetworkImage(
            'https://media-exp1.licdn.com/dms/image/C4D03AQFgZBilNtPUMA/profile-displayphoto-shrink_800_800/0/1604728137407?e=1632960000&v=beta&t=QKa1Nq3WKWQGEGaiKdZ1ovp1h6uAbwPZfihdqY2_pNU'),
      ),
    );
  }
}
```

Making it easy for us to use like so:

```dart
SampleAvatar()
```

## Creating a horizontally scrollable list view in Flutter

Now that we have our sample avatar widget let's go ahead and see how we can make a horizontally scrollable list including them.

```dart
return Container(
  margin: EdgeInsets.all(10.0),
  height: 140.0,
  child: ListView.separated(
    itemCount: 10,
    separatorBuilder: (BuildContext context, int index) {
      return SizedBox(
        width: 10,
      );
    },
    itemBuilder: (_, i) => SampleAvatar(),
    scrollDirection: Axis.horizontal,
  ),
);
```

This code creates a container to add some margin and height to our scrollable list.
Inside, we render the `ListView`. I chose to use the separated one since we want some space between each item.

Then inside, we render each of our sample avatars.
And the most important part, we define the `scrollDirection` as `Axis.horizontal` making it scroll horizontally.

And that's all we need to create a horizontally scrollable list in Flutter.

If you are looking for the complete code for either our avatar widget or the full list view, you can find it on [GitHub](https://github.com/rebelchris/flutter/tree/horizontal-scroll).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
