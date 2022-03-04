---
layout: ../../layouts/Post.astro
title: 'React Query and optimistic updates'
metaTitle: 'React Query and optimistic updates'
metaDesc: 'A look at how we can perform optimistic updates with React Query'
image: /images/11-02-2022.jpg
date: 2022-02-11T03:00:00.000Z
tags:
  - react
---

In the previous article, we looked at [React Query Mutations](https://daily-dev-tips.com/posts/react-query-mutating-data/), which are great for updating the data once we receive a mutation callback.

However, how great would it be if we could do an optimistic update to make our application even faster?

Let's see what that even means?

We'll have the original list of Pokemon we saw yesterday, and once we decide to add a new Pokemon to this list, we fire an API request.

At the same time, we ask React Query to add this Pokemon already and not care if the mutation was correct or not.

The only thing we would care about is if it failed for some reason. In that case, we should revert to its previous state.

## React Query optimistic updates

Alright let's start with the mutation we had in the previous article:

```js
const {mutate: addNewPokemon} = useMutation(
  (newPokemon) => {
    // return axios.post('API', newPokemon);
    return {name: newPokemon};
  },
  {
    onSuccess: async (newPokemon) => {
      queryClient.setQueryData('pokemon', (old) => [...old, newPokemon]);
    },
  }
);
```

Instead of this `onSuccess` callback, we can leverage the `onMutate` option.

This option gets fired right away and doesn't care about the state of the actual mutation.

```js
onMutate: async (newPokemon) => {
	await queryClient.cancelQueries('pokemon');
	const previousPokemon = queryClient.getQueryData('pokemon');
	queryClient.setQueryData('pokemon', [
	  ...previousPokemon,
	  { name: newPokemon },
	]);
	return { previousPokemon, newPokemon };
},
```

Let's see what's going on here.
We first cancel the existing query so React Query won't start updating it in between us trying to set it manually.

Then we get the current data object for this query.
And manipulate it, as we did before.

Then we return the previous data. This return context can be accessed in the `onError` function.

Speaking off the error function, this function gets triggered if the mutation fails.
It will get the context from the `onMutate` return object.

What we want to do is reset the previous state.

```js
onError: (err, newPokemon, context) => {
	queryClient.setQueryData('pokemon', context.previousPokemon);
},
```

Let's complete the function by introducing a failing request.
What should happen when we run this function:

- mutation gets triggers
- `onMutate` temporary adds the new Pokemon to the list
- mutation returns a failed request
- `onError` gets called, and we reset the state
- everything is back to before

```js
const {mutate: addNewPokemon} = useMutation(
  async (newPokemon) => {
    const request = await fetch('https://pokeapi.co/api/v2/pokemon', {
      method: 'POST',
      data: {pokemon: newPokemon},
    });
    const {results} = await request.json();
    return results;
  },
  {
    onMutate: async (newPokemon) => {
      await queryClient.cancelQueries('pokemon');
      const previousPokemon = queryClient.getQueryData('pokemon');
      queryClient.setQueryData('pokemon', [...previousPokemon, {name: newPokemon}]);
      return {previousPokemon, newPokemon};
    },
    onError: (err, newPokemon, context) => {
      queryClient.setQueryData('pokemon', context.previousPokemon);
    },
  }
);
```

I've also created this Code Sandbox environment so you can try it out directly.

<iframe src="https://codesandbox.io/embed/elegant-cohen-jz7ug?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="elegant-cohen-jz7ug"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
