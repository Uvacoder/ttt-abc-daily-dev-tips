---
layout: ../../layouts/Post.astro
title: 'Dependent queries in React Query'
metaTitle: 'Dependent queries in React Query'
metaDesc: 'Lets see how we can make dependent queries with React Query'
image: /images/12-02-2022.jpg
date: 2022-02-12T03:00:00.000Z
tags:
  - react
---

In some cases, you might need only to fire a query once a specific condition is met.

Some examples of this:

- Wait for user input
- Wait for the main query to return the user ID
- We are still retrieving an ID from the storage
- Wait for a search query

And so on.

Using user input in this example, I'll show you how to make this happen in React Query.

You can see the result in the video below. We only start using the query once we have valid input.
We put the query into idle mode as long as it doesn't exist.

<!-- ![Dependent queries in React Query](https://cdn.hashnode.com/res/hashnode/image/upload/v1643866043645/0xTgpKRQS.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1643866080/dependent_z8ykz4.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1643866080/dependent_yve5mj.mp4" type="video/mp4" />
</video>

## React Query dependent queries

We can leverage the `enabled` property to make queries dependent on a variable.
This will tell React Query if this query should be enabled or not, and it can accept anything that calculates to a boolean.

You can use it like this:

```js
const { isIdle, data } = useQuery('your-key', yourQueryFn, {
  enabled: conditionIsTrue,
});
```

Let's try it out and create a user input. Only once this user input is more than zero should it be querying anything.

This code will be based on the [React Query Pokemon app](https://daily-dev-tips.com/posts/a-first-look-at-react-query/) we built before.

The input will be placed in the `App` component.

```js
function App() {
  const [number, setNumber] = useState(0);

  return (
    <QueryClientProvider client={queryClient}>
      <input
        type='number'
        value={number}
        max='10220'
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setNumber(0)}>reset</button>
      <PokemonList number={number} />
    </QueryClientProvider>
  );
}
```

We keep track of a state number and update the state on change.
This state gets passed to our `PokemonList` component.

Let's look at how the `PokemonList` component can receive this number and how we can make our query dependent on it.

```js
function PokemonList({ number }) {
  const { isIdle, data, isLoading } = useQuery(
    ['pokemon', number],
    () => fetchPokemon({ number }),
    {
      enabled: number > 0,
    }
  );

  return <></>;
}
```

We receive the number and assign it to a specific unique key, as you can see above.
Then we invoke the `fetchPokemon` function and pass along the number to this function.
The dependency comes in at the `enabled` property where we tell react query only to enable this once it's bigger than zero.

Let's take a look at what our `fetchPokemon` function looks like now:

```js
const fetchPokemon = async ({ number }) => {
  const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
  return await request.json();
};
```

And then all that's left is to fix the actual return in the component.
We'll add some data for this Pokemon and keep track of our `isIdle` and `isLoading` states so the user knows what's going on.

```js
function PokemonList({ number }) {
  const { isIdle, data, isLoading } = useQuery(
    ['pokemon', number],
    () => fetchPokemon({ number }),
    {
      enabled: number > 0,
    }
  );

  return (
    <div className='App'>
      {isIdle ? (
        <p>Is idle...</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          <li>
            <strong>Name</strong>: {data.name}
          </li>
          <li>
            <strong>Weight</strong>: {data.weight}
          </li>
          <li>
            <strong>Image</strong>:
          </li>
          <li>
            <img
              src={data.sprites?.front_shiny ?? data.sprites?.front_default}
              alt={data.name}
            />
          </li>
        </ul>
      )}
    </div>
  );
}
```

And that's it!
We made our first dependent react query function.

You can try it out in this Code Sandbox:

<iframe src="https://codesandbox.io/embed/pedantic-lalande-s7y35?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="pedantic-lalande-s7y35"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
