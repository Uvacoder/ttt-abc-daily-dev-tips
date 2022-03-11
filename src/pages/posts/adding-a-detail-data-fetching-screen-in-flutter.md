---
layout: ../../layouts/Post.astro
title: 'Adding a detail data fetching screen in Flutter'
metaTitle: 'Adding a detail data fetching screen in Flutter'
metaDesc: 'Having a detail screen to fetch additional data in Flutter'
image: /images/24-07-2021.jpg
date: 2021-07-24T03:00:00.000Z
tags:
  - flutter
---

In today's article, I want to show you a combination of elements to create a functional app in Flutter.

The basis of this application will be the [Anime app in Flutter](https://daily-dev-tips.com/posts/top-anime-shows-flutter-app/) we built a couple of days ago.
But then we'll use the option to [send data to a new screen](https://daily-dev-tips.com/posts/sending-data-to-a-new-screen-in-flutter/) to get a detailed episode list per anime series.
Lastly, we top it off by [moving these pages to their widgets in Flutter](https://daily-dev-tips.com/posts/how-to-import-a-local-widget-in-flutter/).

I am making the result look like the example below.

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/anime-detail_mtavll.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/anime-detail_uzxz7g.mp4" type="video/mp4" />
</video>

## Architectural changes

Before we get started, if you want to follow along, you should download the [Anime app from GitHub](https://github.com/rebelchris/flutter/tree/fetch-anime-shows).

The first code we need to change is our main application. We want this to be a routed application.

Change the `AnimeApp` class to reflect this.

```dart
class AnimeApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Anime app',
      debugShowCheckedModeBanner: false,
      initialRoute: '/',
      routes: {
        '/': (context) => HomePage(),
        '/detail': (context) => DetailPage(item: 0, title: ''),
      },
    );
  }
}
```

By doing this, we create an app that contains multiple routes. The initial route is set to our `HomePage`, our previous main application.

The detailed route is added and comes with two parameters being the `item` and the `title`. We use these to render the top bar and fetch the details for this show.

Now let's change the old anime app class to be the new home page.

```dart
class HomePage extends StatefulWidget {
  HomePage({Key? key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  // Same as before

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Anime app')),
      body: Center(
        // Same
      )
   )
}
```

Nothing major changed here. I just changed the class names to be more representing of the widget they render.
Also, we can return the Scaffold and not the whole material app in the body since we have that in our anime app widget now.

## Retrieving data on the detail page

With the structure fixed, we can make a new widget that will be our detailed page.

```dart
class DetailPage extends StatefulWidget {
  final int item;
  final String title;
  DetailPage({Key? key, required this.item, required this.title})
      : super(key: key);

  @override
  _DetailPageState createState() => _DetailPageState();
}
```

As you can see, this looks slightly different from the home page widget, as it contains two variables that we can pass to it.

The state looks pretty similar to the homepage state, but it uses a different future.

```dart
class _DetailPageState extends State<DetailPage> {
  late Future<List<Episode>> episodes;

  @override
  void initState() {
    super.initState();
    episodes = fetchEpisodes(widget.item);
  }

  @override
  Widget build(BuildContext context) {

  }
}
```

Some minor things to note here is that we use the same idea to retrieve data using a future.
However, we now pass a variable to this function that will fetch the data, the id of this series we clicked on.
We retrieve this data by using the `widget.{variable}` call.

Let's quickly go ahead and make the Episode class, just as we made the `Show` class in the previous article.

```dart
class Episode {
  final int episodeId;
  final String title;

  Episode({required this.episodeId, required this.title});

  factory Episode.fromJson(Map<String, dynamic> json) {
    return Episode(episodeId: json['episode_id'], title: json['title']);
  }
}
```

As you can see, an episode will have an id and title, which is all we need.

The future also looks pretty similar to what we've seen before:

```dart
Future<List<Episode>> fetchEpisodes(id) async {
  final response = await http
      .get(Uri.parse('https://api.jikan.moe/v3/anime/${id}/episodes/1'));

  if (response.statusCode == 200) {
    var episodesJson = jsonDecode(response.body)['episodes'] as List;
    return episodesJson.map((episode) => Episode.fromJson(episode)).toList();
  } else {
    throw Exception('Failed to load episodes');
  }
}
```

Here, we merge the id of the series in the URL we are fetching.

Our state can call the API and retrieve the data into the episodes variable by this point.

Let's look at how the widget will be styled.

```dart
return Scaffold(
  appBar: AppBar(title: Text(widget.title)),
  body: Center(
      child: FutureBuilder(
    builder: (context, AsyncSnapshot<List<Episode>> snapshot) {
      if (snapshot.hasData) {
        return Center(
          child: ListView.separated(
            padding: const EdgeInsets.all(8),
            itemCount: snapshot.data!.length,
            itemBuilder: (BuildContext context, int index) {
              return ListTile(
                leading: CircleAvatar(
                    child: Text('${snapshot.data![index].episodeId}')),
                title: Text(snapshot.data![index].title),
              );
            },
            separatorBuilder: (BuildContext context, int index) =>
                const Divider(),
          ),
        );
      } else if (snapshot.hasError) {
        return Center(child: Text('Something went wrong :('));
      }
      return CircularProgressIndicator();
    },
    future: episodes,
  )),
);
```

Again, this code looks pretty similar to what we did on the home page. However, it renders slightly different.

Note how we use the `widget.title` to get the parameter title and set this as the AppBar title text.

This will also create a list view based on the future builder.
Inside the list, it will check if the future has data and return that.
If it has an error, we also display that to the end-user.
And while it's loading, we show a loader.

In the list, we render a list tile, with a circle avatar containing the number of this episode and the title. Which will look like this:

![ListTile circle avatar in Flutter](https://cdn.hashnode.com/res/hashnode/image/upload/v1626592626153/wX-leRtWA.png)

To navigate this page, we must add a tap listener to our home page items.

Inside the list tile, add the following function.

```dart
onTap: () {
  Navigator.push(
    context,
    MaterialPageRoute(
      builder: (context) =>
          DetailPage(
        item: snapshot.data![index].malId,
        title: snapshot.data![index].title,
      ),
    ),
  );
},
```

## Moving page widgets to their file in Flutter

We have our functional application ready. However, our `main.dart` file is getting quite big.

So let's go ahead and move some data to their files.

I've created a folder called screens inside the `lib` folder.
In there create these two files:

- `home.dart`
- `detail.dart`

Now we can move everything related to the homepage into that `home.dart` file.

That includes all these items: (Note I've minimized the functions)

```dart
import 'package:flutter/material.dart';
import 'package:flutter_app/screens/detail.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class HomePage extends StatefulWidget {
  // Widget code
}

class _HomePageState extends State<HomePage> {
  // State code
}

class Show {
  // Class code
}

Future<List<Show>> fetchShows() async {
  // Future code
}
```

And the same can be done for the detail page. Place that into the `detail.dart` file.

```dart
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class DetailPage extends StatefulWidget {
  // Widget code
}

class _DetailPageState extends State<DetailPage> {
  // State code
}

class Episode {
  // Class code
}

Future<List<Episode>> fetchEpisodes(id) async {
  // Future code
}
```

Our `main.dart` file now should look like this:

```dart
import 'package:flutter/material.dart';
import 'package:flutter_app/screens/home.dart';
import 'package:flutter_app/screens/detail.dart';

void main() async {
  runApp(AnimeApp());
}

class AnimeApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Anime app',
      debugShowCheckedModeBanner: false,
      initialRoute: '/',
      routes: {
        '/': (context) => HomePage(),
        '/detail': (context) => DetailPage(item: 0, title: ''),
      },
    );
  }
}
```

More maintainable, right?
If you are looking for the complete code for any references, you can find the code on this [GitHub repo](https://github.com/rebelchris/flutter/tree/anime-detail-page).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
