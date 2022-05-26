---
layout: ../../layouts/Post.astro
title: 'A first look at React Query'
metaTitle: 'A first look at React Query'
metaDesc: 'Caching and data fetching made easy with React Query'
image: /images/05-02-2022.jpg
date: 2022-02-05T03:00:00.000Z
tags:
  - react
---

State management can be a bit difficult in React, the way you have to deal with data, make sure it's cached, re-fetching it when needed, and the list goes on.

Luckily for us, this is precisely where react-query comes in. React query can handle all those and many more things for us.

For this first example, we'll build a list with Pokemon names. When we click on one of the names, it loads that specific Pokemon's details.
The first time you see it, it will show a loading indicator, but on a second return, it's neatly cached and shows the Pokemon immediately.

<!-- ![A first look at React Query](https://cdn.hashnode.com/res/hashnode/image/upload/v1643265306730/WeHkInbOw.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1643264510/react-query_fbgxes.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1643264509/react-query_qcgagk.mp4" type="video/mp4" />
</video>

## Setting up the React Query project and dependencies

Let's get started as it's easier to explain as we go so you can see what will happen.

First, let's create a new React project:

```bash
npx create-react-app react-query
```

Then we'll need to install react-query:

```bash
npm i react-query
```

And while we are here, let's install axios to handle requests for us.

```bash
npm i axios
```

That should give us a great starting point. From here, you can open up the project in your favorite terminal.

## Using React query

To use react query, we'll have to wrap our app with the `QueryClientProvider`.

To do this, open up the `App.js` file and modify the app to look like this:

```js
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>Our app</div>
    </QueryClientProvider>
  );
}
```

Instead of this div, we want to render a list of Pokemon that the user can click on.

We'll use a state that will contain the Pokemon that was clicked, so let's start by modifying our code to look like that.

```js
function App() {
  const [pokemon, setPokemon] = useState(null);
  return (
    <QueryClientProvider client={queryClient}>
      {pokemon ? (
        <Pokemon pokemon={pokemon} setPokemon={setPokemon} />
      ) : (
        <PokemonList setPokemon={setPokemon} />
      )}
    </QueryClientProvider>
  );
}
```

We defined a state and passed the state to either the `Pokemon` component or the `PokemonList` component.

## Loading data with React query

Let's start with the list. First of all, we'll need a function that will be able to query an API.

We then wrap that query in a `useQuery` hook so react query can handle all the caching.

```js
function usePokemonList() {
  return useQuery('pokemon', async () => {
    const { data } = await axios.get(
      'https://pokeapi.co/api/v2/pokemon?offset=0&limit=50'
    );
    return data.results;
  });
}
```

The first element we pass to the `useQuery` hook is the key for this query. In our case, the key is `pokemon`.

Then we fetch 50 Pokemon from our API and return the results.

And yes, this simple wrapping of code will ensure react query does all the hard work for us.

Let me show you how we can use this:

```js
function PokemonList({ setPokemon }) {
  const { isLoading, data } = usePokemonList();
  return (
    <div>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <ul>
          {data.map((pokemon) => (
            <li>
              <a onClick={() => setPokemon(pokemon.name)} href='#'>
                {pokemon.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

We use the Pokemon list function we just created in the component above. We can extract `isLoading` and the actual `data` object from it.

Then we return a loading state while it's loading, or we render a list of Pokemon.

When the user clicks one of the Pokemon, we invoke the `setPokemon` function to handle the state.

## Retrieving single results

Now that we have our list let's work on the Pokemon component. This component should fetch a single Pokemon based on our state.

But before doing that, we should create a new function that can request the API for the details.

```js
function usePokemon(name) {
  return useQuery(['pokemon', name], async () => {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    return data;
  });
}
```

This is similar to what we saw in the list, but we pass an extra attribute to the key property.
This will make this query unique for just this Pokemon request.

Let's move on to the actual component:

```js
function Pokemon({ pokemon, setPokemon }) {
  const { isLoading, data } = usePokemon(pokemon);
  return (
    <div>
      <a href='#' onClick={() => setPokemon(null)}>
        Back to the list
      </a>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <div>
          <h1>{pokemon}</h1>
          <img src={data.sprites.front_default} alt={pokemon} />
        </div>
      )}
    </div>
  );
}
```

Here we use the function we just created and again show loading while it's still loading and render the Pokemon and an image once it's done.

And there you go. This is how easy it can be to leverage react query to do all the heavy cache management for us.

I set up a Code Sandbox example you can play around with.

<iframe src="https://codesandbox.io/embed/festive-lucy-ce5vj?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="festive-lucy-ce5vj"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
   
> Note: If it's already cached, try to add `?v2` to the single Pokemon requests.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
