---
layout: ../../layouts/Post.astro
title: 'Creating a movie fetching service in Angular'
metaTitle: 'Creating a movie fetching service in Angular'
metaDesc: 'How to create a service in Angular that will call a movie API?'
image: /images/17-10-2020.jpg
date: 2020-10-17T03:00:00.000Z
tags:
  - angular
---

We have been exploring Angular for a couple of days now, and let's make it awesome by getting some data from an API.

We will be learning how to do API calls and make a custom service to do all these calls.

The result will look like this.

![Movie search app in Angular](https://cdn.hashnode.com/res/hashnode/image/upload/v1602440031655/KjBb_2-GQ.png)

## Making use of the HttpClient module

To make any request, we will be using the HttpClient module.
We will be loading this module in our `app.module.ts` so the whole application can leverage it.

Let's start by defining the import at the top of our file.

```js
import { HttpClientModule } from '@angular/common/http';
```

Then we can place the actual import after the `BrowserModule`.

```js
@NgModule({
  declarations: [
    // All declarations
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // Other imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

## Creating our service

Now we can create a service to talk to our API.

Open your favorite terminal and run the following command in your project folder.

Let's first make our movie model so Typescript can leverage this.

```bash
ng generate class movie
```

Open the movie.ts file in your editor and make it as such:

```js
export class Movie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}
```

Now let's generate the service.

```bash
ng generate service movie
```

This will create a `movie.service.ts` file.

Open this file in your editor of choice, and let's start by defining some basics.

```js
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from './movie';

export type ApiResponse = {
  Response: string;
  Search: Movie[];
  totalResults: string;
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiURL: string = 'http://www.omdbapi.com/?apikey={key}';

  constructor(private httpClient: HttpClient) {}
}
```

We will use [OMDBapi](http://www.omdbapi.com/) to get some movies. You can still get a free APIKey on their website.

We will just place this URL in the file for this example. In a real-world example, use an env file for the key or a constant file for storing URLs.

Now we can create our method. It will be a search method where we will search for a specific movie.

```js
searchMovie(name: string) {
  return this.httpClient.get<any>(`${this.apiURL}&s=${name}`);
}
```

## Calling our service

Now we, of course, want to call our service and show the movies we get.

Open the `welcome.component.ts` file and load our service in the import.

```js
import { MovieService } from '../movie.service';
```

We must inject it into the component but add it to the constructor.

```js
constructor(private movieService: MovieService) { }
```

Let's also define our movies variable to be an array of our Movies class.

```js
movies: Movie[];
```

On the `ngOnInit` we will call our service and ask it for Batman movies.

```js
ngOnInit(): void {
  this.movieService.searchMovie('Batman').subscribe(result => {
    this.movies = result.Search;
  });
}
```

We call the service and subscribe to the result. In turn, we set the movie variable to be the result.Search value.

Now let's adjust our `HTML` file to reflect our movies.

```html
<div class="grid grid-cols-5">
  <div
    class="max-w-sm overflow-hidden rounded shadow-lg"
    *ngFor="let movie of movies"
  >
    <img class="w-full" [src]="movie.Poster" [alt]="movie.Title" />
    <div class="px-6 py-4">
      <div class="mb-2 text-xl font-bold">{{ movie.Title }}</div>
    </div>
  </div>
</div>
```

There we go. We now have our initial movie search app!

## Up to you

Now it's up to you to get this code and make an input field where we can search for a specific movie.

And even click on a poster to see more information about this movie.

Let me know on [Twitter](https://twitter.com/DailyDevTips1) what you created with this!

You can find my part of this project on [GitHub](https://github.com/rebelchris/angular-starter-demo/tree/feature/movies).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
