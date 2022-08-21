---
layout: ../../layouts/Post.astro
title: 'Infinite loading with React Query'
metaTitle: 'Infinite loading with React Query'
metaDesc: 'How to load infinite amounts of data using React Inifnite Query'
image: /images/08-02-2022.jpg
date: 2022-02-08T03:00:00.000Z
tags:
  - react
---

You might find yourself in a position where you have a list so long you want to give the option to load it in stages.

We call this an infinite loading list.
In the example below, you see a Pokemon list showing 10 Pokemon at a time.
Once we click the button, it will load the next 10, and so forth.

<!-- ![Infinite loading with React Query](https://cdn.hashnode.com/res/hashnode/image/upload/v1643536046017/NbJvRWSaD.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1643536094/infinite_wazpez.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1643536094/infinite_yyisym.mp4" type="video/mp4" />
</video>

Let's see how we can achieve this by using React Query.

## React Query infinite loading

Depending on your API, you might have a different way of identifying how the next cursor/page is defined.

For the Pokemon API, we get the following result:

```json
{
  count: 1118
  next: "https://pokeapi.co/api/v2/pokemon?offset=10&limit=10"
  previous: null
  results: []
}
```

We see that we get the whole next URL as an option. Knowing this means we can define the first URL and keep swapping that one out.

Let's set up our function that can query this data.

```js
const fetchPokemon = async ({
  pageParam = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10',
}) => {
  const request = await fetch(pageParam);
  const { results, next } = await request.json();
  return { response: results, nextPage: next };
};
```

As seen in the function above, we defined the first initial page param.
Then we fetch this page and extract the results array and the next string.

Then we return those two things.

As for our component, we first have to make sure to import the `useInfiniteQuery` from React Query.

```js
import {
  QueryClient,
  QueryClientProvider,
  useInfiniteQuery,
} from 'react-query';
```

Then we can set up this infinite query as we have seen before by using the [regular react query](https://daily-dev-tips.com/posts/a-first-look-at-react-query/).

```js
const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
  useInfiniteQuery('pokemon', fetchPokemon, {
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
```

Here, we still use a query key, `pokemon`, and then call the function we just created.

The new thing here is that we extract more elements from the query and pass a new function, `getNextPageParam`. In this function, we define the next page parameter.

We set this as `nextPage`, so we need to pass this on. React query will do all the heavy calculations to determine if there is more to load and how far we are.

The data is slightly different from what we saw before since infinite query results are all mapped on their respective pages.
You will receive a page for every request the infinite query has made.

```js
{data.pages.map((group, i) =>
  // Use the group data
)}
```

The group data is the actual data inside each page. We can loop over that as we did with react query.

```js
{
  data.pages.map((group, i) =>
    group.response.map((pokemon) => <li>{pokemon.name}</li>)
  );
}
```

## Loading more data with React Infinite Query

Now that we have our initial data loaded, we want to have a button to load more data if there is any.

We exported some extra data from the infinite query, and this is precisely what we'll use it for.

- `fetchNextPage`: This function can fetch the next page based on what we defined as the parameter.
- `hasNextPage`: Determines if there is the next page
- `isFetchingNextPage`: Determine if we are busy fetching a new page

Now let's add a button that can fetch this data for us.

```js
<button
  onClick={() => fetchNextPage()}
  disabled={!hasNextPage || isFetchingNextPage}
>
  {isFetchingNextPage
    ? 'Loading more...'
    : hasNextPage
    ? 'Load More'
    : 'Nothing more to load'}
</button>
```

This button will fetch the next page once we click it, but it's disabled if we don't have the next page or it's loading one.

Then we change the button text based on the condition as well.

And there you go, we can now load infinite amounts of Pokemon, and React query will do all the heavy lifting.

Feel free to try it out in this Code Sandbox.

<iframe src="https://codesandbox.io/embed/falling-grass-6tx5b?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="falling-grass-6tx5b"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
   
### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
