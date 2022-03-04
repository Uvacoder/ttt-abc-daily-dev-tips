---
layout: ../../layouts/Post.astro
title: 'Sending data to a new screen in Flutter'
metaTitle: 'Sending data to a new screen in Flutter'
metaDesc: 'How to pass data to a new screen in Flutter and Dart'
image: /images/19-07-2021.jpg
date: 2021-07-19T03:00:00.000Z
tags:
  - flutter
---

Yesterday we had a first glance at how to navigate to a new screen in Flutter; however, we want to pass data to this new view in most cases.

Today we'll have a look at how we can send data to a new screen in Flutter.

If you want to follow the article, I'm taking the result from yesterday as the starting point for today's article.

[Download from GitHub.](https://github.com/rebelchris/flutter/tree/routes)

The flow that we'll be recreating today:

- List of items
- Click on item to navigate with data
- Show details of this item on screen two

Below is an example of how it will work in the Flutter application.

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/data_ptrx5o.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/data_qvk1od.mp4" type="video/mp4" />
</video>

## 1. Creating a list of items

Alright, let's start by creating a list of items, so we have some options to click on later.

To do this, Flutter comes with a super cool List generate function we can use like this:

```dart
final list = List.generate(20, (index) => 'Item $index');
```

This function will generate 20 items ranging from Item 0 to Item 19.

The next thing we can do is render these items in a ListView using the ListView builder.

```dart
body: Center(
	child: ListView.builder(
	  itemCount: list.length,
	  itemBuilder: (context, index) {
	    return ListTile(
	      title: Text(list[index]),
	      onTap: () {
	        Navigator.push(
	          context,
	          MaterialPageRoute(
	            builder: (context) => RouteTwo(
	              item: list[index],
	            ),
	          ),
	        );
	      },
	    );
	  },
	),
),
```

Quite a lot of code, so let's break it down.
The main wrap is a center element. Inside of that, we have our ListView builder.

We pass two items to this builder being:

- ItemCount: The total count of items in this list is as simple as calling the length attribute on our array.
- itemBuilder: This is the actual builder function, where we pass a context and index for that specific looped item.

Inside each itemBuilder hit, we return a ListTile including some text where we random the unique index number.

## 2. Navigating with data

Lastly, we add an onTap to register the click events for that item.
We then use Navigator to push the RouteTwo item.
As you might have spotted there, we assign something to the RouteTwo constructor: `item: list[index]`.

That part will be sent to the RouteTwo widget and be received as the item variable.

The list[index] refers to the list of items we defined in RouteOne, on that specific index.

## 3. Receiving the data on the second screen

Alright, so we now send data to RouteTwo, but that route has no idea what to do with it.

So let's add our variable first so that we can assign it.

```dart
final String item;
```

We need to pass something in the constructor of this route to assign that data, as we saw above.

```dart
RouteTwo({Key? key, required this.item}) : super(key: key);
```

This will make sure the item property is required for this widget, and it will get assigned correctly.

We can now render this item in a Text widget so the user knows what he clicked on.

```dart
Text(
	'You clicked on: $item',
	style: TextStyle(fontSize: 32),
),
```

And that's it. We now can pass data to another view in Flutter.
We are only passing a string in this example, but you could easily send a whole object through.

If you want to view the entire code, check out my [GitHub repo](https://github.com/rebelchris/flutter/tree/route-data).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
