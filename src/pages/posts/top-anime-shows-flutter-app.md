---
layout: ../../layouts/Post.astro
title: 'Top anime shows Flutter app'
metaTitle: 'Top anime shows Flutter app'
metaDesc: 'Building a Flutter app that calls an API to list top anime shows'
image: /images/20-07-2021.jpg
date: 2021-07-20T03:00:00.000Z
tags:
  - flutter
---

Today we'll be building a Top anime shows Flutter app. This app will call an API and retrieve a list of the top-rated shows.
Then we'll loop over these results and output them to the app.

A high-level overview of what we'll be doing:

- Add HTTP package
- Create a show class
- Call an API
- Map API results to our new class
- Future builder to retrieve results
- Render a Listview with the shows

And all that will look like this:

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/anime-app_dz8ooh.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/anime-app_gbmrrp.mp4" type="video/mp4" />
</video>

> Note: This tutorial focuses on how it works. I'll place all the code in the main to keep it easy.dart file.

## Adding the HTTP package dependency

Let's start by using our [basic Flutter starting template](https://github.com/rebelchris/flutter/tree/hello-world).

We need to add the HTTP package to our Flutter project before we can interact with any API or external website resource.

The easiest way to do this is to run the following command. It will always pick the latest version.

```bash
flutter pub add HTTP
```

This command will also make sure the package get's added to the pub spec file.

Next, we'll import the package into our `main.dart` file.

```dart
import 'package:http/http.dart' as http;
```

## Creating a new class for our data

Let's have a look at the API we'll be using today. It's a free-to-use API (but be wise about using it!).

The endpoint we'll be calling is:

```
https://api.jikan.moe/v3/top/anime/1
```

And it returns a JSON object as such:

```json
{
  "request_hash": "request:top:58399c95e55435d6ccef63eef7ce609974e4f2d5",
  "request_cached":true,
  "request_cache_expiry":77456,
  "top":[
    {
      "mal_id":5114,
      "rank":1,
      "title":"Fullmetal Alchemist: Brotherhood",
      "url":"https:\/\/myanimelist.net\/anime\/5114\/Fullmetal_Alchemist__Brotherhood",
      "image_url":"https:\/\/cdn.myanimelist.net\/images\/anime\/1223\/96541.jpg?s=faffcb677a5eacd17bf761edd78bfb3f",
      "type":"TV",
      "episodes":64,
      "start_date":"Apr 2009",
      "end_date":"Jul 2010",
      "members":2504975,
      "score":9.17
    },
    {
      ...
    }
  ]
}
```

The part we are interested in is the `top` items, this is the actual data set, and it comes as an array of objects.

Let's create a `Show` class to map some of this data that we can use for our app.

```dart
class Show {
  final int malId;
  final String title;
  final String imageUrl;
  final double score;

  Show({
    required this.malId,
    required this.title,
    required this.imageUrl,
    required this.score,
  });

  factory Show.fromJson(Map<String, dynamic> json) {
    return Show(
      malId: json['mal_id'],
      title: json['title'],
      imageUrl: json['image_url'],
      score: json['score'],
    );
  }
}
```

Don't get spooked here. It's more understandable than you would think.

We define a new class called `Show,` and we define the variables it has. In our case, we only need those described.

Then we call a construct method to define the required files and make them stable.

The last part is a factory, where we can map JSON data as a new Show construct!
I'll show you how this works in a bit when we are retrieving our data.

## Calling an API in Flutter

The next part is actually to call the API to retrieve some data.

We'll create a Future that should return a list of shows.

```dart
Future<List<Show>> fetchShows() async {
  final response =
      await http.get(Uri.parse('https://api.jikan.moe/v3/top/anime/1'));

  if (response.statusCode == 200) {
    var topShowsJson = jsonDecode(response.body)['top'] as List;
    return topShowsJson.map((show) => Show.fromJson(show)).toList();
  } else {
    throw Exception('Failed to load shows');
  }
}
```

As you can see, we first create a variable that will retrieve the data as plain text.
Then we check if this response is correct. If so, we decode the body as a list.
However, this is now just a list of objects.

Remember we made that factory in the show class?

We'll map each result into a Show type and return a list.

So the return value of this function is a list containing show objects.

## Putting it together as an app

Now let's see how we can use all of this in an app.

Flutter always starts with the main function, in our case, that will run our app.

```dart
void main() async {
  runApp(AnimeApp());
}
```

Now let's make this AnimeApp and a stateful widget since it will be rerendered once it receives data.

```dart
class AnimeApp extends StatefulWidget {
  AnimeApp({Key? key}) : super(key: key);

  @override
  _AnimeAppState createState() => _AnimeAppState();
}
```

Let's move on to making this state.

```dart
class _AnimeAppState extends State<AnimeApp> {
  late Future<List<Show>> shows;

  @override
  void initState() {
    super.initState();
    shows = fetchShows();
  }

@override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Anime app',
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(title: Text('Anime app')),
        body: Center(
           // TODO
        )
      ),
    );
  }
}
```

This is the basic setup of our app. It defines a future variable called shows.
Then we use the initiate to call the fetchShows future and assign the return value to our shows variable.

So in plain English: When this widget gets initialized. It calls our fetchShows function and assigns the return value to our shows variable.

We need to return some rendered data in the body part from here.

```dart
child: FutureBuilder(
  builder: (context, AsyncSnapshot<List<Show>> snapshot) {
    if (snapshot.hasData) {
      // TODO
    } else if (snapshot.hasError) {
      return Center(child: Text('Something went wrong :('));
    }

    return CircularProgressIndicator();
  },
  future: shows,
),
```

Inside this body, we added a FutureBuilder. This is a super cool part of Flutter that can return a snapshot.
This snapshot can have various states which we can control.

We first check that the `hasData` variable is set. If so, we can render this data!

But, if the snapshot has an error, we return a text widget to notify the user.

Suppose none of these are matched. We are still waiting for the data to be returned and show a loading indicator.

Now, let's work on the part if we get some data.

```dart
return Center(
  child: ListView.separated(
    padding: const EdgeInsets.all(8),
    itemCount: snapshot.data!.length,
    itemBuilder: (BuildContext context, int index) {
      return ListTile(
        leading: CircleAvatar(
          backgroundImage:
              NetworkImage('${snapshot.data?[index].imageUrl}'),
        ),
        title: Text('${snapshot.data?[index].title}'),
        subtitle: Text('Score: ${snapshot.data?[index].score}'),
      );
    },
    separatorBuilder: (BuildContext context, int index) =>
        const Divider(),
  ),
);
```

In there, we can return a ListView. I'm using a different version.

As the itemCount we use the snapshot data attribute, an array that makes the length available.

Then we use the itemBuilder function to loop over each data item for the length of itemCount.

And add a `ListTile` widget containing the avatar, title, and score.

And with that, we get our list of top anime shows in our Flutter app.

If you want to view the complete demo code, check out the [GitHub repo](https://github.com/rebelchris/flutter/tree/fetch-anime-shows) for this code.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
