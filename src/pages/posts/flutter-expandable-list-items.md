---
layout: ../../layouts/Post.astro
title: 'Flutter expandable list items'
metaTitle: 'Flutter expandable list items'
metaDesc: 'Creating expandable list items in Flutter applications'
image: /images/07-08-2021.jpg
date: 2021-08-07T03:00:00.000Z
tags:
- flutter
---

For this article, we'll look at how we can make expandable list items in Flutter.
We will use this in a list, but you can also use this as an item on it's own.

Our expandable list will look like the example below.

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/expand_dajbpn.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/expand_dr6kdh.mp4" type="video/mp4" />
</video>

I'm taking my [Flutter hello world app](https://github.com/rebelchris/flutter/tree/hello-world) as a starting point if you want to follow along.

## Defining the dataset

We are using a list of quotes in our example, where we initially see the author of the quote, and on click, it expands to show the actual selection.

For this example, I use a static quote list, and we won't focus on converting this into a class for this article.

You can use the following list as a reference:

```dart
final List quotes = [
   {
     "quote":
         "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.",
     "author": "Mae Jemison"
   },
   {
     "quote":
         "You may be disappointed if you fail, but you are doomed if you don’t try.",
     "author": "Beverly Sills"
   },
   {
     "quote":
         "Remember no one can make you feel inferior without your consent.",
     "author": "Eleanor Roosevelt"
   },
   {
     "quote": "Life is what we make it, always has been, always will be.",
     "author": "Grandma Moses"
   },
   {
     "quote":
         "The question isn’t who is going to let me; it’s who is going to stop me.",
     "author": "Ayn Rand"
   },
   {
     "quote":
         "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
     "author": "Henry Ford"
   },
   {
     "quote":
         "It’s not the years in your life that count. It’s the life in your years.",
     "author": "Abraham Lincoln"
   },
   {
     "quote": "Change your thoughts and you change your world.",
     "author": "Norman Vincent Peale"
   },
   {
     "quote":
         "Either write something worth reading or do something worth writing.",
     "author": "Benjamin Franklin"
   },
   {
     "quote": "Nothing is impossible, the word itself says, “I’m possible!”",
     "author": "–Audrey Hepburn"
   },
   {
     "quote": "The only way to do great work is to love what you do.",
     "author": "Steve Jobs"
   },
   {
     "quote": "If you can dream it, you can achieve it.",
     "author": "Zig Ziglar"
   }
];
```

## Render a list of items in Flutter

Now we want to render a list of these items in Flutter.
We can do this by using the ListView builder.

```dart
@override
Widget build(BuildContext context) {
   return ListView.separated(
     padding: const EdgeInsets.all(8),
     itemCount: quotes.length,
     itemBuilder: (BuildContext context, int index) {
       // Render our item
     },
     separatorBuilder: (BuildContext context, int index) => const Divider(),
   );
}
```

Let's change the item builder to return a custom widget, our expanding list tile item.

```dart
itemBuilder: (BuildContext context, int index) {
   return _buildExpandableTile(quotes[index]);
},
```

## Flutter expandable tile

As for the expandable tile, item has a title attribute and can have a list tile item that will expand.

In our case, we'll create it like this:

```dart
Widget _buildExpandableTile(item) {
   return ExpansionTile(
     title: Text(
       item['author'],
     ),
     children: <Widget>[
       ListTile(
         title: Text(
           item['quote'],
           style: TextStyle(fontWeight: FontWeight.w700),
         ),
       )
     ],
   );
}
```

This will cover the logic we need and render the element on which we can click to expand and show their content.

And that's it, a super-easy way in Flutter to create an expandable list item list.

I'm surprised at how easy this is in Flutter, as some other frameworks want you to keep track of these actions and state yourself.

You can view the complete code on [GitHub](https://github.com/rebelchris/flutter/tree/expanding-list-item).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
