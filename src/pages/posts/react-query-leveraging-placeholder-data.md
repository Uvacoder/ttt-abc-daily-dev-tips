---
layout: ../../layouts/Post.astro
title: 'React Query leveraging placeholder data'
metaTitle: 'React Query leveraging placeholder data'
metaDesc: 'How to leverage cached data for placeholders in React Query'
image: /images/13-02-2022.jpg
date: 2022-02-13T03:00:00.000Z
tags:
  - react
---

Now that we are pretty familiar with the concepts of React Query let's take a look at how we can leverage placeholder data.

We can update the user with as much information as before, showing the loaded data with placeholder data.

Let's take the following example.

- We have a list of Pokemon. This data set includes their name
- When clicking on a Pokemon, the second page is opened
- This page loads more details from this Pokemon and shows the name + an image
- While we wait for this data to load, we already have the name in our cache.
- So let's use this to early show the name already

In the video below, I've added a delay on the request so you can see the initial data already loading something before showing the actual data.

<!-- ![React Query leveraging placeholder data](https://cdn.hashnode.com/res/hashnode/image/upload/v1643956391404/rxC3P8ocI.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1643956438/placeholder_dhenoi.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1643956437/placeholder_htgzka.mp4" type="video/mp4" />
</video>

## React Query placeholder data

If you like to follow along, I'm using the result of [this article on React Query](https://daily-dev-tips.com/posts/a-first-look-at-react-query/) as our starting point.

The placeholder data will be returned as your data object, so it's important to keep this in mind and ensure they have overlapping properties.

First let's modify the `usePokemon` function to use placeholder data.

```js
function usePokemon(name) {
  return useQuery(
    ['pokemon', name],
    async () => {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      return data.json();
    },
    {
      placeholderData: {name: 'Placeholder'},
    }
  );
}
```

This is how it will work, but as we said, we already queried the actual data once, so we might as well use that here.

> Note: We only have the name available in this example, and it's also an argument. (Keep in mind this initial query could have more data!)

Besides having the ability to return something directly, we can use a function to extract the correct item from our existing primary query data.

```js
function usePokemon(name) {
  return useQuery(
    ['pokemon', name],
    async () => {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      return data.json();
    },
    {
      placeholderData: () =>
        queryClient.getQueryData('pokemon')?.find((pokemon) => pokemon.name === name),
    }
  );
}
```

We tell React Query to look in our existing cached data and return the Pokemon that matches this name with this function.

What do we have to change in our rendering?

We just have to make sure we are using conditional access to the property we might not have loaded yet.

Or you could opt to show a placeholder for those specific elements that are still being retrieved.

```js
return (
  <div>
    <a href="#" onClick={() => setPokemon(null)}>
      Back to the list
    </a>
    <div>
      <h1>{data.name}</h1>
      <img src={data.sprites?.front_default} alt={data.name} />
    </div>
  </div>
);
```

## placeholderData vs initialData

In React Query, we not only get placeholder data, which we described above.
There is also a thing called `initialData`.
On paper, these two are very similar. They can return data before the query is actually done.

However, there are some main differences.

Placeholder data works on the observer level, which means the data is never persisted into the cache.
initial data, however, persists in the cache, and it acts as a temporary set of data until it gets updated with the real thing.

The error handling between the two also has some differences.
With initial data, the query will be in an error state, but it will be available since the data was already set.

We are also in error state with the placeholder option, but the data is gone since it was only available in the observer.

There is also a big difference if you optimize your loads with stale time, and [TKDodo has a fantastic article on that](https://tkdodo.eu/blog/placeholder-and-initial-data-in-react-query).

## Try it out

If you'd like to play around with this, I've set up a Code Sandbox you can use.

Some things to try:

- Try setting the `usePokemon` fetch request to a failing endpoint by adding some random characters
- Now try and switch to `initialData` to see what happens in the error

<iframe src="https://codesandbox.io/embed/xenodochial-villani-zyjlc?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="xenodochial-villani-zyjlc"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
